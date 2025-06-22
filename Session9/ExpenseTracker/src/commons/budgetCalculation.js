export const selectTotalExpense = (state) =>
  state.expenses.reduce((acc, item) => acc + Number(item.amount), 0);

export const selectRemaining = (state) =>
  state.budget - selectTotalExpense(state);