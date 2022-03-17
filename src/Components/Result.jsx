const Result = ({ setScore, setQuestionnaireStarted, setQuestionnaireFinished, exhaustion, mentalDistance, cogntiveImpairement, emotionalImpairement }) => {


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
      <h3>{totalScore()}</h3>
      <button onClick={handleOnClick}>Restart Questionnaire</button>
    </div>
  )
}

export default Result;