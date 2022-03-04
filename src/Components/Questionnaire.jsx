import React, { useState } from 'react';
import { Exhaustion } from '../data'

const Questionnaire = () => {
  const [score, setScore]=useState([])
  const [answer, setAnswer]=useState("")

  
  const handleChange = (e) => {
    setAnswer(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addScore();
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


  return (
    <div>{Exhaustion[0].title}
        <h4>{Exhaustion[0].question}</h4>
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
        <h1>you answered: {answer}</h1>
        <button onClick={handleSubmit}>Submit</button>
        <h1>you scored: {score}</h1>
    </div>
  
  )}

export default Questionnaire