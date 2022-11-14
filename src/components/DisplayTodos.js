import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos, completeTodos, removeTodos, updateTodos } from "../redux/reducer";
import TodoItem from "./TodoItem";
import style from "./../css/display.module.css";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const reload = () => {
  window.location.reload()
}

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div className={style.displaytodos}>
      <div className={style.buttons}>
        <div className={style.buttonsDetail} onClick={() => setSort("active")} >
          Active
        </div>
        <div className={style.buttonsDetail} onClick={() => setSort("completed")} >
          Completed
        </div>
        <div className={style.buttonsDetail} onClick={() => setSort("all")} >
          All
        </div>
      </div>
      <ul className={style.ulContainer}>
        <div className={style.displayTask}>
          {
            (props.todos.length == 0) &&
              <div className={style.dontHave}>
                You don't have any task
              </div>
          }
          {props.todos.length > 0 && sort === "active"
            ? props.todos.map((item) => {
                return (
                  item.completed === false && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}

          {/* Completed */}
          {props.todos.length > 0 && sort === "completed"
            ? props.todos.map((item) => {
                return (
                  item.completed === true && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}

          {/* All */}
          {props.todos.length > 0 && sort === "all"
            ? props.todos.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                );
              })
            : null}
        </div>
        <div className={style.buttonReset} onClick={reload}>
          Reset
        </div>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
