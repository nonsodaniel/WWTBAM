import { useState } from "react";
import { moneyList, questionList } from "./utils/db";
import MoneyList from "./components/Money/MoneyList";
import Questions from "./components/Questions/Questions";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeout, setTimeOut] = useState(1);

  return (
    <div className="app">
      <div className="container">
        <div className="timer-container">
          <div className="timer">30</div>
        </div>
        <div className="bottom-container">
          <Questions
            questionNumber={questionNumber}
            questionList={questionList}
            setTimeOut={setTimeOut}
            setQuestionNumber={setQuestionNumber}
          />
        </div>
      </div>
      <div className="pyramid-container">
        <div className="money-container">
          <MoneyList questionNumber={questionNumber} />
        </div>
      </div>
    </div>
  );
}

export default App;
