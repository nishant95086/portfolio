import React from "react";
import { NavLink } from "react-router-dom";

export default function CustomNavLink({ to, children, variant, onClick, icon }) {
  const baseClasses =
    "inline-flex items-center justify-center px-5 py-3 text-sm font-medium rounded-full transition-all duration-300";

  if (variant === "animated") {
    return (
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `${baseClasses} relative overflow-hidden 
          ${isActive ? "ring-2 ring-[#ff3333] text-white" : "text-black bg-white"}
          active:scale-95 active:ring-2 active:ring-violet-500`
        }
      >
        {/* Background gradient pulse layer */}
        <span
          className="absolute inset-0 w-full h-full z-0 
          bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 
          opacity-0 active:opacity-100 transition-opacity duration-300 rounded-full"
        ></span>

        {/* Foreground content */}
        <span className="relative z-10 flex items-center gap-2">
          {icon && React.createElement(icon, { className: "w-4 h-4" })}
          {children}
        </span>
      </NavLink>
    );
  } else {
    return (
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `relative px-4 py-2 text-sm font-medium block transition-all duration-300 ease-in-out
          ${
            isActive
              ? "text-red-600 font-bold after:w-full"
              : "text-white hover:text-red-400 after:w-0 hover:after:w-full"
          }
          after:content-[''] after:absolute after:left-0 after:-bottom-1 
          after:h-[2px] after:bg-red-600 
          after:transition-all after:duration-300 after:ease-in-out`
        }
      
      >
        {children}
      </NavLink>
    );
  }
}
