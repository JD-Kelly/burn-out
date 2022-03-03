import { useState } from "react";
import './App.css';
import Header from "./Components/Header"

function App() {
  const [questionnaireStarted, setQuestionnaireStarted]=useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestionnaireStarted(true)
  }

  return (
    <div className="App">
      <Header handleSubmit={handleSubmit} questionnaireStarted={questionnaireStarted}/>
    </div>
  );
}

export default App;
