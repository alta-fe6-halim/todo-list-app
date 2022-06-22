import React from "react";
import TodoList from "../components/TodoList";
import { withRouter } from '../utils/navigation'
import Header from "../components/Header";

import '../style/App.css';

function App() {
  return (
    <div className="todo-app w-full h-screen overflow-auto bg-gradient-to-b from-green-700 via-yellow-500 to-red-700">
      <Header />
      <TodoList />
    </div>
  );
}

export default withRouter(App);
