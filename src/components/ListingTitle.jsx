import React from 'react';
import Submissions from './Submissions';

const ListingTitle = ({catText}) => {
  return (
    <div className="bg-custom-cream h-20 w-96 rounded-2xl flex justify-center items-center">
      <p className="text-custom-navy text-3xl font-nunito">{catText}</p>
    </div>


  );
}

export default ListingTitle;
