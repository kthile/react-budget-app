import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

//default state
const store = configureStore();

//actions
store.dispatch(addExpense({ description: "Water Bill", amount: 4500 }));
store.dispatch(addExpense({ description: "Gas Bill", createdAt: 1000 }));
store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

//grab state and log visibleExpenses
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

//jsx
//provider prop lets us provide a store we want for ALL of our components
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
