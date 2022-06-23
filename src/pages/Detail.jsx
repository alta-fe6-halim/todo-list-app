/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
// import { withRouter } from '../utils/navigation'
import Header from "../components/Header";
// import Layout from "../components/Layout";
import axios from "axios";

import '../style/App.css';

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [addPost, setAddPost] = useState({});

  useEffect(() => {
    PostData();
  }, []);


  function PostData() {
    axios({
      method: 'post',
      url: 'https://api.todoist.com/rest/v1/tasks',
      data: addPost,
      headers: { Authorization: `Bearer ae253c6a3c59514d84f4387f486bc251ff0717eb` },
    })
      .then((res) => {
        setAddPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="todo-app w-full h-screen overflow-auto bg-gradient-to-b from-blue-900 to-black">
      <Header />
      <TodoList />
    </div>
  );
}

// export default withRouter(Detail);
export default Detail;
