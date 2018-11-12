// Initial State
// =============================
const initialState = { num: 0 };

// Action Types
// =============================
const ActionNames = {
  INC: 'ducksComponent/increment',
  DEC: 'ducksComponent/decrement'
};

// Reducer
// =============================

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionNames.INC:
      return { num: state.num + action.payload.plusAmount };
    case ActionNames.DEC:
      return { num: state.num - action.payload.minusAmount };
    default:
      return state;
  }
};

export default reducer;

// Action Creator
// =============================

export const incrementAmount = amount => ({
  type: ActionNames.INC,
  payload: {
    plusAmount: amount
  }
});

export const decrementAmount = amount => ({
  type: ActionNames.DEC,
  payload: {
    minusAmount: amount
  }
});
