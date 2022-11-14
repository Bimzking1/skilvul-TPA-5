import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import style from "./../css/todoitem.module.css";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <div key={item.id} className={style.card} >
      <div className={style.btns}>
        {item.completed === false && (
          <div style={{ color: "green" }} onClick={() => completeTodo(item.id)} >
            <IoCheckmarkDoneSharp />
          </div>
        )}
      </div>
      <input
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
        className={style.textareas}
      />
      <div className={style.btns}>
        {item.completed === false && (
          <div onClick={() => changeFocus()} >
            {" "}
            <AiFillEdit />{" "}
          </div>
        )}
        {item.completed === false && (
          <div style={{ color: "red" }} onClick={() => removeTodo(item.id)} >
            {" "}
            <IoClose />{" "}
          </div>
        )}
      </div>
      {item.completed && <span className={style.completed}>Done</span>}
    </div>
  );
};

export default TodoItem;
