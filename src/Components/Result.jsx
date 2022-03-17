const Result = ({ score, setScore, setQuestionnaireStarted, setQuestionnaireFinished, exhaustion, mentalDistance, cogntiveImpairement, emotionalImpairement }) => {


  const handleOnClick = () => {
    setScore([])
    setQuestionnaireStarted(false)
    setQuestionnaireFinished(false)
  }

  const totalScore = () => {
    const finalScore = (exhaustion + mentalDistance + cogntiveImpairement + emotionalImpairement) / 23
    return Math.round(finalScore * 100) / 100
  }

  return (
    <div>Your Results
      <h3>{exhaustion}</h3>
      <h3>{mentalDistance}</h3>
      <h3>{cogntiveImpairement}</h3>
      <h3>{emotionalImpairement}</h3>
      <h3>{totalScore()}</h3>

      <button onClick={handleOnClick}>Restart Questionnaire</button>
      <h3>
        Scored equal to or less than 1.60 : Low risk of burnout
      </h3>
      <h3>
        Scored between 1.61 – 2.40 : Moderate risk of burnout 
      </h3>
      <h3>
        Scored between 2.41– 3.29 : High risk of burnout
      </h3>
      <h3>
        Scored equal to or greater than 3.30 : Very high risk of burnout
      </h3>
    </div>
  )
}


export default Result;