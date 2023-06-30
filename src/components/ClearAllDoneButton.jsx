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
        className="flex flex-row items-center justify-center gap-2 w-full h-10 rounded-full bg-gray-800 hover:bg-gray-700 text-slate-100 font-medium opacity-100"
      >
        <i className="fa fa-trash text-slate-300"></i>
        <p className="text-xs text-slate-300">Done</p>
      </button>
      {showModal && (
        <Modal onConfirm={handleConfirmDelete} onCancel={handleCancelDelete}>
          <p className="text-base">
            Are you sure you want to delete done tasks?
          </p>
        </Modal>
      )}
    </div>
  );
}

export default ClearAllDoneButton;
