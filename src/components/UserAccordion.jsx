import React, { useState } from 'react';
import EditUserForm from './EditUserForm';
import DeleteUserDialog from './DeleteUserDialog';
import { MdDelete } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const UserAccordion = ({
  user,
  isActive,
  toggleAccordion,
  handleEditToggle,
  handleSave,
  handleDelete,
}) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const onEditClick = () => {
    setIsEditing(true);
    handleEditToggle(user.id);
  };

  const onSave = (updatedUser) => {
    handleSave(updatedUser);
    setIsEditing(false);
  };

  const onCancelEdit = () => {
    setIsEditing(false);
    handleEditToggle(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out mb-6">
      <div
        className="flex items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
        onClick={() => !isEditing && toggleAccordion(user.id)}
      >
        <img
          src={user.picture}
          alt={`${user.first} ${user.last}`}
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 mr-6"
        />
        <h2 className="text-3xl font-bold text-center text-gray-800 flex-grow">{`${user.first} ${user.last}`}</h2>
        {!isEditing && (isActive ? (
          <FaChevronUp className="text-red-500 text-3xl" />
        ) : (
          <FaChevronDown className="text-green-500 text-3xl" />
        ))}
      </div>
      {isActive && (
        <div className="px-6 pb-6">
          {isEditing ? (
            <EditUserForm user={user} handleSave={onSave} handleCancel={onCancelEdit} />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <InfoCard title="Age" value={user.age} />
                <InfoCard title="Gender" value={user.gender} />
                <InfoCard title="Country" value={user.country} />
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Description</h3>
                <p className="text-gray-600">{user.description}</p>
              </div>
              <div className="flex justify-end space-x-4">
                <ActionButton
                  onClick={onEditClick}
                  icon={<GrEdit className="mr-2 text-xl" />}
                  text="Edit"
                  color="blue"
                />
                <ActionButton
                  onClick={() => setShowDeleteDialog(true)}
                  icon={<MdDelete className="mr-2 text-xl" />}
                  text="Delete"
                  color="red"
                />
              </div>
              {showDeleteDialog && (
                <DeleteUserDialog
                  onClose={() => setShowDeleteDialog(false)}
                  onDelete={() => handleDelete(user.id)}
                />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

const InfoCard = ({ title, value }) => (
  <div className="bg-white rounded-lg shadow p-4 text-center">
    <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
    <p className="text-xl text-blue-600">{value}</p>
  </div>
);

const ActionButton = ({ onClick, icon, text, color }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-4 py-2 bg-${color}-500 text-white rounded-lg hover:bg-${color}-600 focus:outline-none focus:ring-2 focus:ring-${color}-500 focus:ring-opacity-50 transition-colors duration-200`}
  >
    {icon}
    {text}
  </button>
);

export default UserAccordion;