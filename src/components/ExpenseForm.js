import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const now = moment(); //represents this moment in time

//console.log(now.format("MMM Do, YYYY"));

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    };
  }
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onTextAreaChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = e => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.amount && !this.state.description) {
      this.setState(() => ({
        errorState: "Enter a description and an amount"
      }));
    } else if (!this.state.description) {
      this.setState(() => ({
        errorState: "Enter a description"
      }));
    } else if (!this.state.amount) {
      this.setState(() => ({
        errorState: "Enter an amount"
      }));
    } else {
      this.setState(() => ({
        errorState: "Submitted!"
      }));
      //takes in expense form state data
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        <p>{this.state.errorState}</p>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <br />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <br />
          <SingleDatePicker //READ DOCUMENTATION
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <br />
          <textarea
            value={this.state.note}
            onChange={this.onTextAreaChange}
            cols="30"
            rows="3"
            placeholder="Add a note (optional)"
          />
          <br />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
