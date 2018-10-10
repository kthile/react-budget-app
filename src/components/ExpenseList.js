import React from "react";
import { connect } from "react-redux"; //connects to store
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses'


const ExpenseList = props => {
  return (
    <div>
      <h1>ExpenseList</h1>
      {props.expenses.map(expense => {
        return <ExpenseListItem expense={expense} key={expense.id} />;
      })}
    </div>
  );
};

//as the store changes, you get new values and re renders
const mapStateToProps = state => {
  //creates a HOC
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList); //component we want to connect
