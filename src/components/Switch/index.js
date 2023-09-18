// Switch.js
import React from 'react';
import './style.css'; // Import CSS for styling

const Switch = ({ checked, onChange }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider"></span>
    </label>
  );
};

export default Switch;
