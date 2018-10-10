import React, { Component } from "react";

class ExpenseForm extends Component {
  state = {
    description: "",
    note: "",
    amount: ""
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({
      description: description
    }));
  };

  onTextAreaChange = e => {
    const note = e.target.value;
    this.setState(() => ({
      note: note
    }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount: amount }));
    }
  };

  render() {
    return (
      <div>
        <form>
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
