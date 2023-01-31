import React from 'react';

const NoteEditor = ({activeNote, onUpdateNote}) => {

  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    })
  }

  return (
    <div className="app-main-note-edit">
      <input type="text" id="title" value={activeNote.title} onChange={(e) => onEditField("title", e.target.value)} autoFocus />
      <textarea id="body" value={activeNote.body} onChange={(e) => onEditField("body", e.target.value)} placeholder="Write your note here..." />
    </div>
  )
};

export default NoteEditor