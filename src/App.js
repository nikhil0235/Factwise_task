import React, { useState, useEffect } from 'react';
// Importing the UserAccordion component to display user details in an accordion style
import UserAccordion from './components/UserAccordion';
// Importing the CSS file for styling
import './App.css';
// Importing the data from a JSON file
import data from './asset/celebrities.json';
// Importing the Footer component
import Footer from './components/Footer';
// Importing the SearchBar component
import SearchBar from './components/SearchBar';

const App = () => {
  // State to manage the list of users
  const [users, setUsers] = useState([]);
  // State to manage the ID of the currently active (opened) user accordion
  const [activeUserId, setActiveUserId] = useState(null);
  // State to manage whether the app is in edit mode
  const [editMode, setEditMode] = useState(false);
  // State to manage the current search term
  const [searchTerm, setSearchTerm] = useState("");
  // State to manage the filtered search data
  const [searchData, setSearchData] = useState([]);

  // useEffect hook to update the user list with calculated ages on component mount
  useEffect(() => {
    const updatedUsers = data.map(user => ({
      ...user,
      age: calculateAge(user.dob)
    }));

    setUsers(updatedUsers);
    setSearchData(updatedUsers); // Initialize searchData with all users
  }, []);

  // Function to calculate age based on date of birth
  const calculateAge = (dob) => {
    const diff = new Date() - new Date(dob);
    return Math.floor(diff / 31557600000); // 31557600000 is the number of milliseconds in a year
  };

  // Function to handle the search input and filter users based on the search term
  const onSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const updatedUsers = users.filter(user =>
      user.first.toLowerCase().includes(term.toLowerCase()) ||
      user.last.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(updatedUsers);
  };

  // Function to toggle the accordion for a user
  const toggleAccordion = (id) => {
    if (editMode) return; // Prevent toggling if in edit mode
    setActiveUserId(activeUserId === id ? null : id); // Toggle between opening and closing
  };

  // Function to handle the toggle of edit mode for a specific user
  const handleEditToggle = (id) => {
    setEditMode(!editMode);
    setActiveUserId(id);
  };

  // Function to handle saving the updated user details
  const handleSave = (updatedUser) => {
    const updatedUsers = users.map(user => user.id === updatedUser.id ? updatedUser : user);
    setUsers(updatedUsers);
    setSearchData(updatedUsers); // Update the filtered data as well
    setEditMode(false);
  };

  // Function to handle deleting a user
  const handleDelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    setSearchData(updatedUsers); // Update the filtered data as well
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {/* Header section */}
        <div className='text-4xl font-bold text-pretty text-center items-center border rounded-lg shadow-md p-4 mb-4 bg-white'>
          Celebrity Manager
        </div>  
        {/* Search bar component */}
        <SearchBar searchTerm={searchTerm} onSearch={onSearch} />
        {searchData.length > 0 ? (
          <div className="user-list">
            {/* Rendering the list of users */}
            {searchData.map(user => (
              <UserAccordion
                key={user.id}
                user={user}
                isActive={user.id === activeUserId}
                toggleAccordion={toggleAccordion}
                editMode={editMode}
                handleEditToggle={handleEditToggle}
                handleSave={handleSave}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          // Message to display if no users are found
          <div className='flex mt-10 text-2xl font-semibold justify-center'>
            Nothing Found 😢 Please Search Again ...
          </div>
        )}
      </div> 
      {/* Footer component */}
      <Footer className="w-full" />
    </div>
  );
};

export default App;
