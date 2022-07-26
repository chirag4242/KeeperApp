import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addOn(data) {
    setNotes((preValue) => {
      return [...preValue, data];
    });
  }
  function deleteNote(id) {
    setNotes((preValue) => {
      return preValue.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addIn={addOn} />
      {notes.map((NewnNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={NewnNote.title}
            content={NewnNote.content}
            deleteOn={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
