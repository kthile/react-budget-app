import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpense = props => {
  return (
    <div>
      <ExpenseForm
        //used to populate edit fields
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/"); //redirects to home
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push("/");
          console.log(props.expense.id);
        }}
      >
        Remove Expense
      </button>
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};
export default connect(mapStateToProps)(EditExpense);
