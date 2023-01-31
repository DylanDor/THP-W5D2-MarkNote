import React from 'react';
import NoteEditor from '../NoteEditor/NoteEditor';
import NoteView from '../NoteView/NoteView';

const NoteDisplay = ({activeNote, onUpdateNote}) => {
  if (!activeNote) return <div className="no-active-note">Aucune note sélectionné</div>

  return (
    <div className="app-main">
      <NoteView activeNote={activeNote}/>
      <NoteEditor activeNote={activeNote} onUpdateNote={onUpdateNote}/>
    </div>
  )
};

export default NoteDisplay;