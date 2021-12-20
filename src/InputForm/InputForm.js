import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import './InputForm.css'

const InputForm = () => {
  const [title, setTitle] = useState();
  const [note, setNote] = useState();

  
  const handleNote = e => {
    console.log(title.target.value);
    console.log(note.target.value);

    e.preventDefault();
  }

  return (
    <div>
      <div className="form">
        <h4 className="text-white">Write A Note</h4>
        <Form onSubmit={handleNote}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" onChange={setTitle} placeholder="Enter Title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control as="textarea" rows={3} onChange={setNote} placeholder="Write The Note" />
          </Form.Group>

          <Button variant="light" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default InputForm;
