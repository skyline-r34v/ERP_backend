import React, { useState, useEffect } from "react";
import { api } from "../../api";
import DataTable from "../../components/Table/DataTable";
import Drawer from "../../components/Drawer/Drawer";
import NoticeForm from "./NoticesForm";

export default function NoticesModule() {
    const [data, setData] = useState([]);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [editNotice, setEditNotice] = useState(null);

    const columns = [
        { key: "noticeId", label: "Notice ID" },
        { key: "header", label: "Notice Header" },
        { key: "by", label: "Addressed By" },
        { key: "forWhom", label: "Addressed For" },
        { key: "actions", label: "Actions" },
    ];

    const fetchData = () => {
        api.get("/notices").then((res) => setData(res.data));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleCreate = () => {
        setEditNotice(null);
        setOpenDrawer(true);
    };

    const handleEdit = (notice) => {
        setEditNotice(notice);
        setOpenDrawer(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this notice?")) {
            try {
                await api.delete(`/notices/${id}`);
                fetchNotices();
            } catch (err) {
                console.error("Error deleting notice:", err);
            }
        }
    }
    return (
        <div className="module-container">
            <div className="module-header">
                <h2>Notices</h2>
                <button onClick={handleCreate}>Create</button>
            </div>

            <div className="table-container">
                <DataTable
                    columns={columns}
                    data={data}
                    onEdit={handleEdit}
                    onDelete={(id) => handleDelete(id)}
                />
            </div>

            <Drawer
                isOpen={openDrawer}
                title={editNotice ? "Edit Notice" : "Create Notice"}
                onClose={() => setOpenDrawer(false)}
            >
                <NoticeForm
                    existingData={editNotice}
                    onSuccess={() => {
                        fetchData();
                        setOpenDrawer(false);
                    }}
                />
            </Drawer>
        </div>
    );
}
