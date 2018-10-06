import { createStore } from "redux";

//set the actions
const incrementCount = ({ incrementBy = 1 } = {
  /*default if not exist*/
}) => ({
  type: "INCREMENT",
  incrementBy: incrementBy
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy: decrementBy
});

const setCount = ({ setTo }) => ({
  type: "SET",
  setTo: setTo
});
const resetCount = () => ({
  type: "RESET"
});

//Reducers
/*
1. reducers are pure functions, doesn't use anything or change anything outside of its scope
2. never change state or action
*/
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return {
        count: action.setTo
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};
const store = createStore(countReducer);

//prints state everytime there is a change
store.subscribe(() => {
  console.log(store.getState());
});

//increment the count
//this is an action, gets sent to the store, actions are capped
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({ setTo: 101 }));
