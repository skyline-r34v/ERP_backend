import React from "react";
import "./Drawer.css";

export default function Drawer({ isOpen, title, children, onClose }) {
  return (
    <div className={`drawer ${isOpen ? "open" : ""}`}>
      <div className="drawer-header">
        <h3>{title}</h3>
        <button onClick={onClose}>X</button>
      </div>
      <div className="drawer-body">{children}</div>
    </div>
  );
}
