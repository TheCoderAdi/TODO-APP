import Modal from "react-modal";
import PropTypes from "prop-types";

const TaskInput = ({ children, modalIsOpen, setIsOpen }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setIsOpen(false)}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          width: "50vw",
          height: "50vh",
          margin: "auto",
          background: "rgba(255, 255, 255, 0.6)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(7.1px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        },
      }}
    >
      {children}
    </Modal>
  );
};

TaskInput.propTypes = {
  children: PropTypes.node.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default TaskInput;
