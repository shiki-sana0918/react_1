import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const btnStyle = {
    color: "#FFF",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50px",
    cursor: "pointer",
    float: "right",
  };
  // state = {
  //   todoData: [
  // {
  //   id: "1",
  //   title: "20時に飲み会",
  //   completed: true,
  // },
  // {
  //   id: "2",
  //   title: "ANEX訪問",
  //   completed: false,
  // },
  // {
  //   id: "3",
  //   title: "バイト",
  //   completed: false,
  // },
  //   ],
  //   value: "",
  // };

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((aaa) => {
      return aaa.id !== id;
    });
    setTodoData(newTodoData);
    // setState({
    //   todoData: newTodoData,
    // });
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    // setState({
    //   value: e.target.value,
    // });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData((bbbb) => [...bbbb, newTodo]);
    setValue("");
    // setState({
    //   todoData: [...state.todoData, newTodo],
    // });
  };
  const handleCompleChange = (bbbb) => {
    let newTodoData = todoData.map((aaaa) => {
      if (aaaa.id === bbbb) {
        aaaa.completed = !aaaa.completed;
      }
      return aaaa;
    });

    setTodoData(newTodoData);
    // setState({ todoData: newTodoData });
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>今日の予定</h1>
        </div>
        {todoData.map((t) => {
          return (
            <div key={t.id} style={getStyle(t.completed)}>
              <input
                type="checkbox"
                defaultChecked={false}
                onChange={() => handleCompleChange(t.id)}
              />
              {t.title}
              <button style={btnStyle} onClick={() => handleClick(t.id)}>
                x
              </button>
            </div>
          );
        })}
        <form style={{ display: "flex" }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: "10", padding: "5px" }}
            placeholder="今日の予定を入れてください"
            value={value}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="入力ボタン"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    </div>
  );
}