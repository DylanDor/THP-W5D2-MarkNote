import React from 'react';
import Showdown from 'showdown';

const converter = new Showdown.Converter();

const NoteView = ({activeNote}) => {
  const body = { __html: converter.makeHtml(activeNote.body)}

  return (
    <div className="app-main-note-preview">
        <h1 className='preview-title'>{activeNote.title}</h1>
        <div className= "markdown-preview" dangerouslySetInnerHTML={body} />
    </div>
  )

};

export default NoteView;