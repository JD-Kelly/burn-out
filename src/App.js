import { useState } from "react";
import './App.css';
import Questionnaire from "./Components/Questionnaire";

function App() {
  const [questionnaireStarted, setQuestionnaireStarted]=useState(false)
  const [questionnaireFinished, setQuestionnaireFinished]=useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestionnaireStarted(true)
  }

  if(questionnaireStarted === true) {
    return (
      <div className="App">
        <h1>
        {<Questionnaire 
        setQuestionnaireFinished={setQuestionnaireFinished} 
        setQuestionnaireStarted={setQuestionnaireStarted} 
        questionnaireFinished={questionnaireFinished} />}
        </h1>
      </div>
    )
   } else {
     return (
       <div className="App">
         <h1>Welcome to Burnout</h1>
         <button onClick={handleSubmit}>Start Questionnaire</button>
       </div>
     )
   } 
}


export default App;
