import { moneyList } from "../../utils/db";
import MoneyItems from "./MoneyItems";
interface IMoneyListProps {
  questionNumber: number;
}

const MoneyList = ({ questionNumber }: IMoneyListProps) => {
  return (
    <div className="money-container">
      <ul className="money-list">
        {moneyList.map((money) => (
          <MoneyItems money={money} questionNumber={questionNumber} />
        ))}
      </ul>
    </div>
  );
};

export default MoneyList;
