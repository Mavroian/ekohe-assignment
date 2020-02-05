import { REHYDRATE } from "redux-persist/lib/constants";

const INITIAL_STATE = {
  people: []
};

const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_PEOPLE":
      return { ...state, isLoading: true };
    case "PEOPLE_RECEIVED":
      return { ...state, people: action.json, isLoading: false };
    case REHYDRATE:
      return { ...state, persistedState: action.payload };
    default:
      return state;
  }
};
export default peopleReducer;
