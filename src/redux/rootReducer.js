import { combineReducers } from "redux"
import peopleReducer from "./actions/people/people.reducer"

const rootReducer = combineReducers({
  characters: peopleReducer,
})
export default rootReducer