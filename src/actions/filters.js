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

export { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate };
