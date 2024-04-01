import { useEffect } from "react";
import SlideBar from "./components/Slidebar";
import TaskList from "./components/TaskList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "./redux/action.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(getAllTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main-container">
      <SlideBar />
      <TaskList tasks={tasks} />
      <ToastContainer autoClose={1000} theme="dark" position="bottom-right" />
    </div>
  );
}

export default App;
