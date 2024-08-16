import React from 'react';
import Submissions from './Submissions';

const AllListings = ({ title1, title2, title3 }) => {
  return (

    <div className="flex flex-col md:flex-row mt-20 ">
      {/* First Third */}
      <div className="flex flex-col w-full md:w-1/3 px-12">
        <div className = "flex items-center justify-center h-20 bg-custom-cream rounded-2xl"> 
            <p className="text-custom-navy text-3xl font-nunito">{title1}</p>
        </div>
        <Submissions numOfSubs = {10}/>
      </div>


      {/* Second Third */}
      <div className="w-full md:w-1/3 px-12">
        <div className = "flex items-center justify-center h-20 bg-custom-cream rounded-2xl"> 
            <p className="text-custom-navy text-3xl font-nunito">{title2}</p>
        </div>
      </div>


      {/* Third Third */}
      <div className="w-full md:w-1/3 px-12">
        <div className = "flex items-center justify-center h-20 bg-custom-cream rounded-2xl"> 
            <p className="text-custom-navy text-3xl font-nunito">{title3}</p>
        </div>
      </div>
    </div>

  );
}

export default AllListings;
