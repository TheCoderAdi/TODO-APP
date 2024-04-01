import { useState } from "react";
import "../styles/Slidebar.css";
import plusIcon from "../assets/plus.png";
import { colors } from "../constants/constant";
import Modal from "react-modal";
import { addTask } from "../redux/action";
import { useDispatch } from "react-redux";
import TaskInput from "./TaskInput";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

const Slidebar = () => {
  const dispatch = useDispatch();
  const [desc, setDesc] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(colors[2]);
  const addTaskHandler = () => {
    if (!desc) {
      toast.error("Please enter a task");
      return;
    }
    const task = {
      description: desc,
      color: color,
    };
    dispatch(addTask(task));
    setDesc("");
    setIsOpen(!modalIsOpen);
  };
  const handleChangeColor = () => {
    const index = colors.indexOf(color);
    setColor(colors[(index + 1) % colors.length]);
  };
  return (
    <div className="slidebar">
      <img
        src={plusIcon}
        alt="Plus-Icon"
        className="plus-img"
        onClick={() => setIsOpen(!modalIsOpen)}
      />
      {colors.map((color, index) => (
        <div
          key={index}
          style={{ backgroundColor: color }}
          className="color-circle"
          onClick={() => {
            setColor(color);
            setIsOpen(!modalIsOpen);
          }}
        />
      ))}
      <TaskInput modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
        <h1 style={{ textAlign: "center" }} className="add-task">
          Add a task
        </h1>
        <div
          className="color-circle"
          style={{
            position: "absolute",
            background: color,
            top: "5%",
            right: "5%",
            zIndex: "1",
          }}
          onClick={() => handleChangeColor()}
        />

        <textarea
          placeholder="Enter your task here..."
          className="input"
          style={{
            width: "100%",
            margin: "auto",
            height: "60%",
            resize: "none",
            padding: "1rem",
            fontSize: "1.1rem",
          }}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          className="button"
          style={{ background: color, marginTop: "1rem" }}
          onClick={() => addTaskHandler()}
        >
          Add Task
        </button>
      </TaskInput>
    </div>
  );
};

export default Slidebar;
