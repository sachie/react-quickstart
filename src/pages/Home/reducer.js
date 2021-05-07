// Simple example for a split reducer.

const initialState = {};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case 'home/some/action': {
      return { ...state };
    }
    default:
      return state;
  }
}
