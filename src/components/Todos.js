import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import style from "./../css/todos.module.css";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  
  return (
    <div className={style.addTodos}>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className={style.todoInput}
        value={todo}
      />
      <div className={style.addButton} onClick={() => add()} >
        <GoPlus />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
