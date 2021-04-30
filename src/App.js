import "./App.css";
import { Provider } from "react-redux";
import initStore, { runSagaMiddleware } from "./modules/store";
import Route from "../src/routes";
// import Login from "../src/components/login";

const store = initStore();
runSagaMiddleware();
function App() {
  return (
    <Provider store={store}>
      {/* <Login /> */}
      <Route />
    </Provider>
  );
}

export default App;
