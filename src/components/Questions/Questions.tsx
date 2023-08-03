import React from "react";

const Questions = () => {
  return (
    <div className="question-answer">
      <div className="question">What is your name?</div>
      <div className="answers">
        <div className="answer correct">Nonso</div>
        <div className="answer wrong">Daniel</div>
        <div className="answer">David</div>
        <div className="answer">Others</div>
      </div>
    </div>
  );
};

export default Questions;
