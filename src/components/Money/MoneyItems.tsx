interface IMoneyItemsProps {
  money: any;
  questionNumber: number;
}

const MoneyItems = ({ money, questionNumber }: IMoneyItemsProps) => {
  return (
    <li
      key={money.id}
      className={`money-item ${questionNumber === money.id ? "active" : ""}`}
    >
      <span className="number">{money.id}</span>
      <span className="amount">$ {money.amount}</span>
    </li>
  );
};

export default MoneyItems;
