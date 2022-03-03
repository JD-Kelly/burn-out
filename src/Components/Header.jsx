import React from 'react';


const Header = ({ handleSubmit, questionnaireStarted}) => {
  if(questionnaireStarted === true) {
   return (
      <h1>Here is question 1</h1>
   )
  } else {
    return (
      <div>
        <h1>Welcome to Burnout</h1>
        <button onClick={handleSubmit}>Start Questionnaire</button>
      </div>
    )
  }
}
  

export default Header;