import React, { useState } from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

// Component for editing user information
const EditUserForm = ({ user, handleSave }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    first: user.first,
    last: user.last,
    gender: user.gender,
    age: user.age,
    country: user.country,
    description: user.description,
  });

  // Function to check if the form is valid
  const isFormValid = () => {
    return formData.first && formData.last && formData.age && formData.gender && formData.country && formData.description;
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    // Main container with background color, padding, rounded corners, shadow, and centered
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit User Information</h2>
      {/* Grid container for input fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Individual input fields */}
        <InputField label="First Name" name="first" value={formData.first} onChange={handleChange} />
        <InputField label="Last Name" name="last" value={formData.last} onChange={handleChange} />
        <SelectField
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "transgender", label: "Transgender" },
            { value: "rather not say", label: "Rather not say" },
            { value: "other", label: "Other" },
          ]}
        />
        <InputField label="Country" name="country" value={formData.country} onChange={handleChange} />
        <InputField label="Age" name="age" value={formData.age} onChange={handleChange} type="number" />
      </div>
      {/* Textarea for description */}
      <div className="mt-6">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      {/* Save and Cancel buttons */}
      <div className="flex justify-end space-x-4 mt-8">
        <button
          disabled={!isFormValid()}
          onClick={() => handleSave({ ...user, ...formData })}
          className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          <FaRegCheckCircle className="mr-2 text-xl" />
          Save
        </button>
        <button
          onClick={() => handleSave(user)}
          className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-200"
        >
          <RxCrossCircled className="mr-2 text-xl" />
          Cancel
        </button>
      </div>
    </div>
  );
};

// Component for individual input fields
const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
    />
  </div>
);

// Component for select fields
const SelectField = ({ label, name, value, onChange, options }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default EditUserForm;
