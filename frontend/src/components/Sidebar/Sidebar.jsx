import React, { useState, useEffect } from "react";
import "./Sidebar.css";

export default function Sidebar({ modules, onSelect }) {
  const [activeKey, setActiveKey] = useState(() => {
    return localStorage.getItem("activeModule") || modules[0].key;
  });

  useEffect(() => {
    onSelect(activeKey);
  }, [activeKey, onSelect]);

  const handleClick = (key) => {
    setActiveKey(key);
    localStorage.setItem("activeModule", key);
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <ul className="sidebar-list">
        {modules.map((m) => (
          <li
            key={m.key}
            onClick={() => handleClick(m.key)}
            className={`sidebar-item ${activeKey === m.key ? "active" : ""}`}
          >
            {m.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
