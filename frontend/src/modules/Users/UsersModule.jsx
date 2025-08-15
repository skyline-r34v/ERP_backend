import React, { useState, useEffect } from "react";
import { api } from "../../api";
import DataTable from "../../components/Table/DataTable";
import Drawer from "../../components/Drawer/Drawer";
import UsersForm from "./UsersForm";
import "./users.css";

export default function UsersModule() {
  const [data, setData] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "actions", label: "Actions" }, // 👈 added action column
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    api.get("/users").then((res) => setData(res.data));
  };

  const handleEdit = (row) => {
    setEditUser(row);
    setOpenDrawer(true);
  };

  const handleDelete = (id) => {
    console.log("Deleting user with ID:", id);
    // Call API to delete
    setData(data.filter((u) => u.id !== id));
  };

  return (
    <div className="module-container">
      <div className="module-header">
        <h2>Users</h2>
        <button
          onClick={() => {
            setEditUser(null);
            setOpenDrawer(true);
          }}
        >
          Create
        </button>
      </div>

      <div className="table-container">
        <DataTable
          columns={columns}
          data={data}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <Drawer
        isOpen={openDrawer}
        title={editUser ? "Edit User" : "Create User"}
        onClose={() => setOpenDrawer(false)}
      >
        <UsersForm existingData={editUser} />
      </Drawer>
    </div>
  );
}
