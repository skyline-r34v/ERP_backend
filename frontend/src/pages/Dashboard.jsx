import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import "./Dashboard.css";

// Import all modules here
import UsersModule from "../modules/Users/UsersModule";
import NoticesModule from "../modules/Notices/NoticesModule";

// Module configuration
const modulesConfig = [
  { key: "users", name: "Users", component: UsersModule },
  { key: "notices", name: "Notices", component: NoticesModule },
  // Add new modules here easily
];

export default function Dashboard() {
  const [activeModule, setActiveModule] = useState(() => {
    return localStorage.getItem("activeModule") || modulesConfig[0].key;
  });

  useEffect(() => {
    localStorage.setItem("activeModule", activeModule);
  }, [activeModule]);

  const ActiveModuleComponent =
    modulesConfig.find((m) => m.key === activeModule)?.component;

  return (
    <div className="dashboard-container">
      <Sidebar
        modules={modulesConfig}
        onSelect={(moduleKey) => setActiveModule(moduleKey)}
      />
      <div className="dashboard-content">
        {ActiveModuleComponent && <ActiveModuleComponent />}
      </div>
    </div>
  );
}
