import React from "react";

function TabButton({ children, onClick, isSelected }) {

  return (
    <div>
      <li>
        <button className= {isSelected ? "active" : undefined} onClick={onClick}>{children}</button>
      </li>
    </div>
  );
}

export default TabButton;


