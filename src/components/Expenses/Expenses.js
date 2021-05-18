import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((x) => (
        <ExpenseItem
          id={x.id}
          title={x.title}
          amount={x.amount}
          date={x.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expenses;
