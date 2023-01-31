import React from "react";

const Sidebar = ({
  notes,
  onAddNotes,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {

  const sortedNotes = notes.sort((a, b) => b.lastModified - a. lastModified);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <button onClick={onAddNotes}>Ajouter une note</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
            </div>
            <p>{note.body && note.body.substr(0, 100) + "..."}</p>

            <small className="note-meta">
              Last modified{" "}
              {new Date(note.lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
            <button onClick={() => onDeleteNote(note.id)}>Supprimer</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
