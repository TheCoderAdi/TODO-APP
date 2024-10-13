import propTypes from "prop-types";
import "../styles/TaskList.css";
import deleteSvg from "../assets/delete.svg";
import { useDispatch } from "react-redux";
import { markAsCompleted, deleteTask } from "../redux/action";
import { toast } from "react-toastify";
import { useState } from "react";

const Tasks = ({ id, description, completed, color, onDrop, index }) => {
  const dispatch = useDispatch();
  const [isDragging, setIsDragging] = useState(false);

  const deleteHandler = () => {
    dispatch(deleteTask(id));
    toast.success("Task Deleted");
  };

  const dragStartHandler = (e) => {
    e.dataTransfer.setData("draggedIndex", index);
    setIsDragging(true);
  };
  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const dropHandler = (e) => {
    const draggedIndex = e.dataTransfer.getData("draggedIndex");
    setIsDragging(false);
    onDrop(draggedIndex, index);
  };
  console.log(isDragging);
  return (
    <div
      className="task"
      style={{
        backgroundColor: color,
        opacity: completed ? 0.5 : 1,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      key={`task-${id}`}
      draggable
      onDragStart={dragStartHandler}
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
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
  onDrop: propTypes.func.isRequired,
  index: propTypes.number.isRequired,
};

export default Tasks;
