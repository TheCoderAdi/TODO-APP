import "../styles/TaskList.css";
import PropTypes from "prop-types";
import Tasks from "./Tasks";

const TaskList = ({ tasks }) => {
  if (tasks.length === 0) return <h1>No tasks</h1>;
  return (
    <div className="task-container">
      <h1>Tasks</h1>
      <div className="task-box">
        {tasks?.map((task, index) => (
          <Tasks
            key={index}
            id={task.id}
            description={task.description}
            color={task.color}
            completed={task.completed}
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
