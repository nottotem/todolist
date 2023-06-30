import { useState } from "react";
import Modal from "./Modal";

function ClearAllDoneButton({ todos, setTodos }) {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    const updatedTodos = todos?.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
    setShowModal(false);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div className="flex items-center w-full h-full">
      <button
        onClick={handleDelete}
        className="flex flex-row items-center justify-center gap-2 w-full h-12 rounded-md bg-gradient-to-b from-gray-600 to-gray-800 text-slate-100 font-medium"
      >
        <i className="fa fa-trash"></i>
        <p className="text-sm">Done</p>
      </button>
      {showModal && (
        <Modal onConfirm={handleConfirmDelete} onCancel={handleCancelDelete}>
          <p className="text-base">
            Are you sure you want to delete all complete tasks?
          </p>
        </Modal>
      )}
    </div>
  );
}

export default ClearAllDoneButton;
