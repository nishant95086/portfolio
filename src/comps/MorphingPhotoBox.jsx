// MorphingPhotoBox.jsx
import React from "react";
import "./MorphingPhotoBox.css"; // import custom CSS

const MorphingPhotoBox = ({ photoUrl }) => {
  return (
    <div className="w-64 h-64 overflow-hidden morphing-box shadow-lg">
      <img
        src={photoUrl}
        alt="Your Photo"
        className="w-full h-full object-cover "
      />
    </div>
  );
};

export default MorphingPhotoBox;
