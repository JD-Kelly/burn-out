import React, { useState } from 'react';
import { Exhaustion } from '../data'
import Result from "./Result";

const Questionnaire = ({ setQuestionnaireFinished, questionnaireFinished, setQuestionnaireStarted}) => {
  const [score, setScore]=useState([])
  const [answer, setAnswer]=useState("")
  const [questionNumber, setQuestionNumber]=useState(0)

  
  const handleChange = (e) => {
    console.log(answer)
    setAnswer(e.target.value);
    
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    if(questionNumber <= Exhaustion.length -2) {
      addScore();
      nextQuestion();
    } else if(questionNumber > Exhaustion.length -2) {
      addScore();
      setQuestionnaireFinished(true)
    }
  }
  

  const addScore = () => {
    if(answer === 'never') {
      setScore((prevVals) => [...prevVals, 1]);
    } else if (answer === 'rarely') {
      setScore((prevVals) => [...prevVals, 2]);
    } else if (answer === 'sometimes') {
      setScore((prevVals) => [...prevVals, 3]);
    } else if (answer === 'often') {
      setScore((prevVals) => [...prevVals, 4]);
    } else {
      setScore((prevVals) => [...prevVals, 5]);
    }
  }

 
  const nextQuestion = () => {
    setQuestionNumber(questionNumber +1)
    console.log(Exhaustion[questionNumber].question)
    }
  
if(questionnaireFinished === false) {
  return (
    <div>
        <h4>{Exhaustion[questionNumber].title}</h4>
        <h4>{Exhaustion[questionNumber].question}</h4>
        <form onChange={handleChange}>
          <input type='radio' name="answer" value="never" id="never" ></input>
          <label htmlFor="never">Never</label>
          <input type='radio' name="answer" value="rarely" id="rarely"></input>
          <label htmlFor="rarely">Rarely</label>
          <input type='radio' name="answer" value="sometimes" id="sometimes"></input>
          <label htmlFor="sometimes">Sometimes</label>
          <input type='radio' name="answer" value="often" id="often"></input>
          <label htmlFor="often">Often</label>
          <input type='radio' name="answer" value="always" id="always"></input>
          <label htmlFor="always">Always</label>
        </form>
          <button onClick={handleOnClick}>Submit</button>
    </div>
  )
} else if (questionnaireFinished === true) {
  return (
    <div>
      <Result score={score} setQuestionnaireStarted={setQuestionnaireStarted} setQuestionnaireFinished={setQuestionnaireFinished}/>
    </div>
  )
}
}

export default Questionnaire