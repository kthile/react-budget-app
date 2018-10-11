import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = props => {
  return (
    <div className="expense-list-item">
      <Link to={`/edit/${props.expense.id}`}>
        <h3>{props.expense.description}</h3>
      </Link>
      <p>
        Amount: {props.expense.amount}
        <br />
        CreatedAt: {props.expense.createdAt}
      </p>
    </div>
  );
};

export default ExpenseListItem; //component we want to connect
