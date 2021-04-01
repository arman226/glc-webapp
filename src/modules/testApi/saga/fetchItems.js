import { takeLatest, put, call, select, all } from "redux-saga/effects";
import { getSample } from "../../../service/testApi";
import { FETCH_TEST_API_START } from "../types";
import { fetchTestApiError, fetchTestApiDone } from "../actionCreators";

// function getState({user}) {
//   const {employeeUserId} = user;
//   return {employeeUserId};
// }

function* processFetchItem(action) {
  try {
    // const {employeeUserId} = yield select(getState);

    const { data } = yield call(getSample);
    yield put(fetchTestApiDone(data));
  } catch (error) {
    yield put(fetchTestApiError(error.message));
  }
}

export default function* watchEvent() {
  yield takeLatest(FETCH_TEST_API_START, processFetchItem);
}
