export default function AppReducer(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.transaction]
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.id
        )
      };
    default:
      return state;
  }
}