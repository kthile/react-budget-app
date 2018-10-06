import { createStore, combineReducers } from "redux";
import uuid from "uuid";

/*
1. Reducer checks the case of the dispatched method at the bottom
2. Reducer matches the case type defined in the method, then the action returns a new object
3. Reducer concatenates the new object to the expenses array in state
*/

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

//Filter Actions
const setTextFilter = (filter = "") => ({
  type: "SET_TEXT_FILTER",
  text: filter
});
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
  sortBy: "amount"
});
const sortByDate = () => ({
  type: "SORT_BY_DATE",
  sortBy: "date"
});
const setStartDate = number => ({
  type: "SET_START_DATE",
  startDate: number //this can be named anything
});
const setEndDate = number => ({
  type: "SET_END_DATE",
  endDate: number
});

//default state
const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: "undefined",
  endDate: "undefined"
};

//reducers
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [
        ...state, //this line grabs all of the state values
        action.expense //this line concatenates it
      ];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        }
      });

    default:
      return state;
  }
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text }; //Grab all state values, then override with action's value
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: action.sortBy };
    case "SORT_BY_DATE":
      return { ...state, sortBy: action.sortBy };
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

//get visible expense
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;;
        const textMatch = true;

        return startDateMatch && endDateMatch && textMatch;
  });
};

//store create
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

//log on state change
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});


const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: "100", createdAt: 1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Meal", amount: "200", createdAt: -1000 })
);
/*
store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
store.dispatch(setTextFilter("rent"));
store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(155));
store.dispatch(setEndDate());
*/
store.dispatch(setStartDate(125));
//state
const demoState = {
  expenses: [
    {
      id: "asdf",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
