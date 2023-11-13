import React from "react";

const SearchBar = () => {
  return (
    <div className="flex gap-4 my-10 justify-center px-10">
       <select className='w-64 py-3 pl-4 bg-zinc-200 front-semibold rounded-md'>
        <option value="" disabled hidden selected>Skills</option>
        <option value="IOS Developer">IOS Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="DevOps Developer">DevOps Developer</option>
      </select>
      <select className="w-64 py-3 pl-4 bg-zinc-200 front-semibold rounded-md ">
        <option value="" disabled hidden selected>Time</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      
      </select>
      <select className="w-64 py-3 pl-4 bg-zinc-200 front-semibold rounded-md ">
        <option value="" disabled hidden selected>Location</option>
        <option value="IOS Developer">Remote</option>
        <option value="Android Developer">In Office</option>
        <option value="Frontend Developer">Hybrid</option>
      </select>
      <select className="w-64 py-3 pl-4 bg-zinc-200 front-semibold rounded-md ">
        <option value="" disabled hidden selected>Experience</option>
        <option value="Fresher Level">Fresher Level</option>
        <option value="Mid Senior Level">Mid Senior Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      <button className="w-64 bg-blue-500 text-white font-bold py-3 rounded-md">Search</button>
    </div>
  );
};

export default SearchBar;
