import "./App.css";
import { Provider } from "react-redux";
import initStore, { runSagaMiddleware } from "./modules/store";
import Route from "../src/routes";

const store = initStore();
runSagaMiddleware();
function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

export default App;
