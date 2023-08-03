import { Fragment, useEffect, useState } from "react";
import { moneyList, questionList } from "./utils/db";
import MoneyList from "./components/Money/MoneyList";
import Questions from "./components/Questions/Questions";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const lastCorrectAnswer = moneyList.find(
      (money) => money.id === questionNumber - 1
    );
    questionNumber > 1 && setTotalAmount(lastCorrectAnswer?.amount || 0);
  }, [questionNumber]);

  return (
    <div className="app">
      <div className="container">
        {stop ? (
          <h1 className="total-amount">Total Amount Earned: ${totalAmount}</h1>
        ) : (
          <Fragment>
            <div className="timer-container">
              <div className="timer">30</div>
            </div>
            <div className="bottom-container">
              <Questions
                questionNumber={questionNumber}
                questionList={questionList}
                setStop={setStop}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </Fragment>
        )}
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
