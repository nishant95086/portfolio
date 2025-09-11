// Updated CustomNavLink.js
import React from "react";

export default function CustomButton({ href, icon: Icon, imageSrc, label }) {

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black 
            transition duration-300 ease-in-out 
            hover:bg-gradient-to-r from-red-600 to-pink-600 hover:text-white 
            hover:scale-110 shadow-md hover:shadow-lg"
    >
      {Icon && <Icon size={20} />}
      {imageSrc && (
        <img src={imageSrc} alt={label} className="w-5 h-5" />
      )}
      <span className="sr-only">{label}</span>
    </a>
  );
}
