import React from "react";
import "./DataTable.css";

export default function DataTable({ columns, data, onEdit, onDelete }) {
  return (
    <table className="data-table">
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c.key}>{c.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, idx) => (
            <tr key={row._id || row.id || idx}>
              {columns.map((c) => {
                if (c.key === "actions") {
                  const deleteId = row._id;
                  return (
                    <td key={c.key}>
                      <div className="action-buttons">
                        <button
                          className="btn-edit"
                          onClick={() => onEdit(row)}
                        >
                          ✏️ Edit
                        </button>
                        <button
                          className="btn-delete"
                          onClick={() => onDelete(deleteId)}
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </td>
                  );
                }
                return <td key={c.key}>{row[c.key]}</td>;
              })}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length} style={{ textAlign: "center" }}>
              No records found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
