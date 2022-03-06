import React from 'react';

const Result = ({ score, setQuestionnaireStarted, setQuestionnaireFinished }) => {

  const sum = score.reduce((a, b) => a + b)

  const handleOnClick = () => {
    setQuestionnaireStarted(false)
    setQuestionnaireFinished(false)
  }

  return (
    <div>Your Results
    <h3>{sum}</h3>
    <button onClick={handleOnClick}>Restart Questionnaire</button>
    </div>
  )
}


export default Result;