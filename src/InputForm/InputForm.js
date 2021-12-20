import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import './InputForm.css'

const InputForm = () => {
  const titleRef = useRef();
  const bodyRef = useRef();
  
  const handleAddNote = e => {
    const title = titleRef.current.value;
    const body = bodyRef.current.value;

    const newTodo = {title, body};

    fetch('http://localhost:5000/notes', {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(newTodo)
    })
      .then()

    e.preventDefault();
  }

  return (
    <div>
      <div className="form">
        <h4 className="text-white">Write A Note</h4>
        <form onSubmit={handleAddNote}>
          <input type="text" ref={titleRef} className="border-0 py-2 rounded" />
          <textarea rows="10" ref={bodyRef} className="border-0 rounded"></textarea>

          <Button variant="light" type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
