import React, { useState } from 'react';

function PopupComponent() {
  return (
    <div className="popup">
      <h2>This is a popup component!</h2>
    </div>
  );
}

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true); // or toggle: setShowPopup(prev => !prev);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show Popup</button>

      {/* Conditionally render the popup */}
      {showPopup && <PopupComponent />}
    </div>
  );
}

export default App;
