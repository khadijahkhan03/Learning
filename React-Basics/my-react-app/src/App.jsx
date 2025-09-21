import React, { useState } from 'react'; // Import React and the useState hook

// This is the popup component that will appear conditionally
function PopupComponent({ onClose }) {
  return (
    <div style={styles.popup}>
      <h2>This is a popup!</h2>
      <p>You can put anything you want here.</p>
      
      {/* Button to close the popup */}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

// Main App component
function App() {
  // useState hook to control whether the popup is visible
  const [showPopup, setShowPopup] = useState(false);

  // Function to show the popup
  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  // Function to hide the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div style={styles.container}>
      {/* Button to trigger showing the popup */}
      <button onClick={handleOpenPopup}>Show Popup</button>

      {/* Conditionally render the popup only when showPopup is true */}
      {showPopup && <PopupComponent onClose={handleClosePopup} />}
    </div>
  );
}

// Inline styles for the popup and container
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  popup: {
    border: '2px solid #333',           // Add a visible border
    padding: '20px',                    // Inner spacing
    width: '300px',                     // Set a fixed width
    backgroundColor: '#f9f9f9',         // Light background
    borderRadius: '8px',                // Rounded corners
    marginTop: '20px',                  // Space from the top
    boxShadow: '0 0 10px rgba(0,0,0,0.2)' // Subtle shadow for depth
  },
};

export default App; // Export the App component as default
