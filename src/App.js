import style from "./css/app.module.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";

function App() {
  return (
    <div className={style.app}>
      <div className={style.title}>
        What's the plan for today?
      </div>
      <div className={style.content}>
        <Todos />
        <DisplayTodos />
      </div>
      <div>
        © Paulus Bimo - 2022
      </div>
    </div>
  );
}

export default App;
