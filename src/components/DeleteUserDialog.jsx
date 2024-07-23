import React from 'react';

// Component for displaying a dialog to confirm user deletion
const DeleteUserDialog = ({ onDelete, onClose }) => {
  return (
    // Full-screen overlay with semi-transparent background
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      {/* Dialog box */}
      <div className="bg-white p-6 rounded-lg">
        {/* Title of the dialog */}
        <h2 className="text-xl font-bold mb-4">Are you sure you want to delete?</h2>
        {/* Warning message */}
        <p className="mb-4">This action cannot be undone.</p>
        {/* Buttons for cancel and delete actions */}
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 border rounded-md">Cancel</button>
          <button onClick={onDelete} className="px-4 py-2 bg-red-500 text-white rounded-md">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserDialog;
