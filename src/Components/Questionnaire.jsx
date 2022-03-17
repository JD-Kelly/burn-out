import React, { useState } from 'react';
import { Questions } from '../data'
import Result from "./Result";

const Questionnaire = ({ setQuestionnaireFinished, questionnaireFinished, setQuestionnaireStarted}) => {
  const [score, setScore]=useState([])
  const [answer, setAnswer]=useState("")
  const [questionNumber, setQuestionNumber]=useState(0)
  const [exhaustion, setExhaustion] = useState(0)
  const [mentalDistance, setMentalDistance]=useState(0)
  const [cogntiveImpairement, setCogntiveImpairement]=useState(0)
  const [emotionalImpairement, setEmotionalImpairement]=useState(0)
  
  const calc = (list, i1, i2) => {
    let result = 0;
    list.slice(i1, (i2 + 1)).forEach(element => {
        result += element;
    });
    return result;
  }
  
  const handleChange = (e) => {
    setAnswer(e.target.value);
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
    } else if (answer === 'always') {
      setScore((prevVals) => [...prevVals, 5]);
    }
  }

 
  const nextQuestion = () => {
    if(answer === "") {
      alert("Please add an answer before moving on to next question");
    } else {
    setQuestionNumber(questionNumber +1)
    console.log(score)
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(questionNumber <= Questions.length -2) {
      addScore();
      nextQuestion()
      console.log(score)
    } else if(questionNumber > Questions.length -2) {
      addScore();
      setQuestionnaireFinished(true)
      setExhaustion(calc(score, 0, 7))
      setMentalDistance(calc(score, 8, 12))
      setCogntiveImpairement(calc(score, 13, 17))
      setEmotionalImpairement(calc(score, 18, 22))
    }
  }
  
if(questionnaireFinished === false) {
  return (
    <div>
        <h4>{Questions[questionNumber].title}</h4>
        <h4>{Questions[questionNumber].question}</h4>
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
          <button onClick={handleOnSubmit}>Submit</button>
    </div>
  )
} else if (questionnaireFinished === true) {
  return (
    <div>
      <Result 
      score={score} 
      setScore={setScore} 
      setQuestionnaireStarted={setQuestionnaireStarted} 
      setQuestionnaireFinished={setQuestionnaireFinished}
      exhaustion={exhaustion}
      mentalDistance={mentalDistance}
      cogntiveImpairement={cogntiveImpairement}
      emotionalImpairement={emotionalImpairement}
      />
    </div>
  )
}
}

export default Questionnaire