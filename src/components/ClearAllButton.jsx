// function ClearAllButton({ todos, setTodos }) {
//   const handleDelete = () => {
//     const updatedTodos = todos.filter((todo) => !todo.completed);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div className="flex items-center w-full h-full">
//       <button
//         onClick={handleDelete}
//         className="font-mono text-sm text-slate-300 font-semibold select-none border border-neutral-600 bg-neutral-900 hover:bg-neutral-800 w-full h-10 rounded-md"
//       >
//         Clear all tasks done
//       </button>
//     </div>
//   );
// }

// export default ClearAllButton;

import { useState } from "react";
import Modal from "./Modal";

function ClearAllButton({ todos, setTodos }) {
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
        className="font-mono text-sm text-slate-300 font-semibold select-none border border-neutral-600 bg-neutral-900 hover:bg-neutral-800 w-full h-10 rounded-md"
      >
        Clear all tasks done
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

export default ClearAllButton;
