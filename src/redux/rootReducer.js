import { combineReducers } from "redux";
import peopleReducer from "./actions/people/people.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["characters"]
};
const rootReducer = combineReducers({
  characters: peopleReducer
});
export default persistReducer(persistConfig, rootReducer);
