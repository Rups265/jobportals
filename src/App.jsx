import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import JobCard from "./components/JobCart/index";
import jobDummy from "./jobDummy";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "./firebase.config";
function App() {
  const [jobs, setjobs] = useState([]);
  const fatchJobs = async () => {
    const tempjob = [];
    const jobref = query(collection(db, "jobs"));
    const q=query(jobref,orderBy("postedOn","desc"));
    const req = await getDocs(q);
    req.forEach((job) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(job.data());
      tempjob.push({
        ...job.data(),
        id: job.id
      });
    });
    setjobs(tempjob);
  };

  useEffect(() => {
    fatchJobs();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar />
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;
