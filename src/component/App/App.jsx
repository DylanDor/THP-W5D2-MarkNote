import { useState, useEffect } from "react";
import uuid from "react-uuid";
import "./App.css";
import NoteDisplay from "../NoteDisplay/NoteDisplay";
import Sidebar from "../Sidebar/Sidebar";

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );

  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNotes = () => {
    const newNote = {
      id: uuid(),
      title: "",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note => note.id !== idToDelete)));
  };

  const getActiveNote = () => {
    return (
      notes.find((note) => note.id === activeNote) 
    );
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNotes={onAddNotes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <NoteDisplay 
        activeNote={getActiveNote()}
        onUpdateNote={onUpdateNote}
      />
    </div>
  );
}

export default App;
