Celebrity Manager (FactWise Frontend Task)
Celebrity Manager is a React-based application designed to manage a list of celebrities. The application provides functionalities to search, edit, and delete celebrity details using a user-friendly accordion interface.

Features
User Search: Search celebrities by their first or last names.
User Accordion: Expandable sections to view detailed information about each celebrity.
Edit Mode: Update celebrity information with a form.
Delete Functionality: Remove celebrities from the list.
Responsive Design: Ensures the application looks good on all devices.
Screenshots
Include some screenshots of your application here.
![alt text](<Screenshot 2024-07-23 214300.png>) ![alt text](<Screenshot 2024-07-23 214433.png>) ![alt text](<Screenshot 2024-07-23 214412.png>) ![alt text](<Screenshot 2024-07-23 214344.png>) ![alt text](<Screenshot 2024-07-23 214321.png>)

Installation
Clone the repository:


git clone https://github.com/nikhil0235/Factwise_task.git
Navigate to the project directory:


cd celebrity-manager
Install the dependencies:


npm install
Usage
Start the development server:


npm start
Open your browser and navigate to http://localhost:3000.

File Structure
php
Copy code
celebrity-manager/
├── public/
├── src/
│   ├── asset/
│   │   └── celebrities.json    # JSON file containing celebrity data
│   ├── components/
│   │   ├── EditUserForm.js     # Component to edit user information
│   │   ├── DeleteUserDialog.js # Component for delete confirmation dialog
│   │   ├── Footer.js           # Footer component
│   │   ├── SearchBar.js        # Search bar component
│   │   └── UserAccordion.js    # Accordion component to display user details
│   ├── App.js                  # Main application component
│   └── App.css                 # Main stylesheet
├── .gitignore
├── package.json
└── README.md
Components
App.js: The main component that manages the state and renders other components.
UserAccordion.js: Displays each user's details in an accordion style.
EditUserForm.js: Form component for editing user details.
DeleteUserDialog.js: Dialog component for confirming user deletion.
Footer.js: Footer component.
SearchBar.js: Search bar component for filtering users.
Data
The application uses a local JSON file (celebrities.json) located in the src/asset/ directory to populate the list of celebrities.

Contribution
Contributions are welcome! Please create an issue or submit a pull request for any changes.

Contact
For any inquiries or feedback, feel free to contact:

Your Name - your.email@example.com
Replace "your-username" with your actual GitHub username and adjust the contact section as needed.

Feel free to add more details or sections based on your project's specifics.