import uuid from "uuid";

//Expense Actions
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
const removeExpense = ({ id: id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

export { addExpense, removeExpense, editExpense };
