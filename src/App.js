import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./counter.js";



function App() {
  return (
    <Provider store={store}>
      <Counter />
      </Provider>
  );
}

export default App;
