import React, { useState } from 'react';
import { Exhaustion } from '../data'

const Questionnaire = () => {
  const [score, setScore]=useState([])
  const [answer, setAnswer]=useState("")
  const [questionNumber, setQuestionNumber]=useState(0)

  
  const handleChange = (e) => {
    setAnswer(e.target.value);
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    addScore();
    nextQuestion();
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

  return (
    <div>
        <h4>{Exhaustion[questionNumber].title}</h4>
        <h4>{Exhaustion[questionNumber].question}</h4>
        <form>
          <input type='radio' name="answer" value="never" id="never" onChange={handleChange}></input>
          <label htmlFor="never">Never</label>
          <input type='radio' name="answer" value="rarely" id="rarely" onChange={handleChange}></input>
          <label htmlFor="rarely">Rarely</label>
          <input type='radio' name="answer" value="sometimes" id="sometimes" onChange={handleChange}></input>
          <label htmlFor="sometimes">Sometimes</label>
          <input type='radio' name="answer" value="often" id="often" onChange={handleChange}></input>
          <label htmlFor="often">Often</label>
          <input type='radio' name="answer" value="always" id="always" onChange={handleChange}></input>
          <label htmlFor="always">Always</label>
        </form>
          <button onClick={handleOnClick}>Submit</button>
    </div>
  
  )}

export default Questionnaire