import { useState } from "react";
import { moneyList } from "./utils/db";
import MoneyList from "./components/Money/MoneyList";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);

  return (
    <div className="app">
      <div className="container"></div>
      <div className="pyramid-container">
        <div className="money-container">
          <MoneyList questionNumber={questionNumber} />
        </div>
      </div>
    </div>
  );
}

export default App;
