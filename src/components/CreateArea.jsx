import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleInputs(event) {
    const { value, name } = event.target;
    setNote((preValue) => {
      return { ...preValue, [name]: value };
    });
  }
  function submit(event) {
    props.addIn(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleInputs}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          onChange={handleInputs}
          rows="3"
          value={note.content}
        />
        <button onClick={submit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
