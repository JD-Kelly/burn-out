import React from 'react';

const Result = ({ score }) => {

  
  const sum = score.reduce((a, b) => a + b)

  return (
    <div>Your Results
    <h3>{sum}</h3>
    </div>
  )
}


export default Result;