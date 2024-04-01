import propTypes from "prop-types";
import "../styles/TaskList.css";
import deleteSvg from "../assets/delete.svg";
import { useDispatch } from "react-redux";
import { markAsCompleted, deleteTask } from "../redux/action";
import { toast } from "react-toastify";

const Tasks = ({ id, description, completed, color }) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteTask(id));
    toast.success("Task Deleted");
  };
  return (
    <div
      className="task"
      style={{ backgroundColor: color, opacity: completed ? 0.5 : 1 }}
      key={id}
    >
      <p className="description">{description}</p>
      <input
        type="checkbox"
        checked={completed}
        className="checkbox"
        onChange={() => {
          dispatch(markAsCompleted(id));
          toast.success("Task Updated");
        }}
      />
      <img src={deleteSvg} className="delete" onClick={deleteHandler} />
    </div>
  );
};

Tasks.propTypes = {
  id: propTypes.number.isRequired,
  description: propTypes.string.isRequired,
  completed: propTypes.bool.isRequired,
  color: propTypes.string.isRequired,
};

export default Tasks;
