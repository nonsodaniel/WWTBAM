import { useState } from "react";
import { moneyList } from "./utils/db";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);

  return (
    <div className="app">
      <div className="container">Main</div>
      <div className="pyramid-container">
        <div className="money-container">
          <ul className="money-list">
            {moneyList.map((money, index) => (
              <li
                key={money.id}
                className={`money-item ${
                  questionNumber === money.id ? "active" : ""
                }`}
              >
                <span className="number">{money.id}</span>
                <span className="amount">$ {money.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
