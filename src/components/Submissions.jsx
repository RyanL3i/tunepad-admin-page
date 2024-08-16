import React from 'react';
import Submission from './Submission';

function generateArray(num) {
  let result = []
  for (let i=0; i<=num; i++) {
    result.push(i);
  }
  return result
}

const Submissions = ({numOfSubs}) => {
    //take in a prop for the number of submissions when using submission
    let submissions = generateArray(numOfSubs);
  return (
    <div className="h-120 overflow-y-auto">
        {submissions.map(submissionNumber => (
            <Submission songSubmission = {`Song Title: Hall of Fame\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0
            Artist: The Script ft. Will.i.am\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0
            Genre: Rap/Pop`}
            key = {submissionNumber} submissionNumber = {submissionNumber} />
        ))}
    </div>
  )
}

export default Submissions
