import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = props => {
  return (
    <div className="expense-list-item">
      <h3>{props.expense.description}</h3>
      <p>
        Amount: {props.expense.amount}
        <br />
        CreatedAt: {props.expense.createdAt}
      </p>
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default connect()(ExpenseListItem); //component we want to connect
