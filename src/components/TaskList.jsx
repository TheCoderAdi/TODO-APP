import "../styles/TaskList.css";
import PropTypes from "prop-types";
import Tasks from "./Tasks";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const TaskList = ({ tasks }) => {
  const containerRef = useRef(null);
  const dispatch = useDispatch();

  if (tasks.length === 0) return <h1>No tasks</h1>;

  const handleDrop = (draggedIndex, droppedIndex) => {
    const updatedTasks = [...tasks];
    const draggedTask = updatedTasks[draggedIndex];
    updatedTasks.splice(draggedIndex, 1);
    updatedTasks.splice(droppedIndex, 0, draggedTask);
    dispatch({ type: "GET_TASKS", payload: updatedTasks });
  };

  return (
    <div className="task-container" ref={containerRef}>
      <h1>Tasks</h1>
      <div className="task-box">
        {tasks?.map((task, index) => (
          <Tasks
            key={task.id}
            index={index}
            id={task.id}
            description={task.description}
            color={task.color}
            completed={task.completed}
            onDrop={handleDrop}
          />
        ))}
      </div>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TaskList;
