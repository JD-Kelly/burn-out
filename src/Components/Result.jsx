import React from 'react';

const Result = ({ score, setScore, setQuestionnaireStarted, setQuestionnaireFinished }) => {

  const sum = score.reduce((a, b) => a + b)

  const handleOnClick = () => {
    setScore([])
    setQuestionnaireStarted(false)
    setQuestionnaireFinished(false)
  }

  return (
    <div>Your Results
      <h3>{sum}</h3>
      <button onClick={handleOnClick}>Restart Questionnaire</button>
      <h3>
        Scored 8-13 : Low to no risk of burnout
      </h3>
      <h3>
        Scored 14-26 : Moderate risk of burnout 
      </h3>
      <h3>
        Scored 27-40 : Moderate to high risk of burnout
      </h3>
    </div>
  )
}


export default Result;