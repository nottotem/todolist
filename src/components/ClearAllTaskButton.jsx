import { useState } from "react";
import Modal from "./Modal";

function ClearAllTaskButton({ todos, setTodos }) {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    setTodos([]);
    setShowModal(false);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div className="flex items-center w-full h-full">
      <button
        onClick={handleDelete}
        className="flex flex-row items-center justify-center gap-2 w-full h-10 rounded-full bg-red-900 hover:bg-red-800 text-slate-100 font-medium opacity-100"
      >
        <i className="fa fa-trash text-slate-300"></i>
        <p className="text-xs text-slate-300">All</p>
      </button>
      {showModal && (
        <Modal onConfirm={handleConfirmDelete} onCancel={handleCancelDelete}>
          <p className="text-base">
            Are you sure you want to delete all tasks?
          </p>
        </Modal>
      )}
    </div>
  );
}

export default ClearAllTaskButton;
