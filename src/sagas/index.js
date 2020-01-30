import { call, put, takeLatest, all } from "redux-saga/effects";
import { fetchPeople } from "./fechAPI";

function* getPeople() {
  const json = yield call(fetchPeople);
  yield put({ type: "PEOPLE_RECEIVED", json: json });
}
function* actionWatcher() {
  yield takeLatest("GET_PEOPLE", getPeople);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
