import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import todoReducer from "./reducer";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import './App.css'

const store = createStore(todoReducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>ToDo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;

