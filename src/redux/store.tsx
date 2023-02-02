import { configureStore} from "@reduxjs/toolkit";
import pokemonsSlice from "../redux/slice";
import createSagaMiddleware from "@redux-saga/core";
import { fetchSaga } from "../sagas/Middleware";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer:pokemonsSlice,
  middleware: [saga]
})

saga.run(fetchSaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

