import React from "react";

function Modal({ onConfirm, onCancel, children }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-950 bg-opacity-90">
      <div className="bg-slate-300 p-6 rounded-lg">
        <p className="mb-4">{children}</p>
        <div className="flex justify-end">
          <button
            onClick={onConfirm}
            className="px-4 py-2 mr-2 text-sm text-slate-100 bg-red-700 hover:bg-red-800 rounded"
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm text-slate-100 bg-gray-600 hover:bg-gray-700 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
