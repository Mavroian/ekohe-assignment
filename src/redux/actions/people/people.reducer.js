const INITIAL_STATE = {
  loading: true,
  people: []
};

const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_PEOPLE":
      return { ...state, loading: true };
    case "PEOPLE_RECEIVED":
      return { ...state, people: action.json, loading: false };
    default:
      return state;
  }
};
export default peopleReducer;
