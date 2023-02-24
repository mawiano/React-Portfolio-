import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { validateEmail } from "../../utils/valid";

export default function Contact() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "username") {
      setUsername(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "subject") {
      setSubject(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    } else {
      console.error("No input of this type found!");
    }
  };

  function handleBlur(event) {
    if (!event.target.value.length) {
      setErrorMessage(`${event.target.name} is required`);
    } else {
      setErrorMessage("");
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.value]: event.target.value });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    // Email validation
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }
    setUsername("");
    setEmail("");
    setSubject("");
    setMessage("");
    setSubmitMessage("Thank you!");
  };

  return (
    <div className="container">
      <h1>Contact Me</h1>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            required
            name="username"
            type="text"
            placeholder="Enter Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={username}
          />
          <Form.Control.Feedback type="invalid">
            Enter a name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactForm.ControlInput2">
          <Form.label>Email address</Form.label>
          <Form.Control
            required
            name="email"
            type="email"
            placeholder="Enter Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={email}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
          <Form.label>Subject</Form.label>
          <Form.Control
          required
          name="subject"
          type="text"
          placeholder="Enter subject"
          onChange={handleChange}
          onBlur={handleBlur}
          value={subject}
        />
        <Form.Control.Feedback type="invalid">
          Enter a subject
        </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactFrom.ControlTextarea1">
          <Form.label>Message</Form.label>
          <Form.Control 
             required
             name="message"
             as="textarea"
             rows={3}
             onChange={handleChange}
             onBlur={handleBlur}
             value={message}
           />
             <Form.Control.Feedback type="invalid">
            Please enter a message
          </Form.Control.Feedback>
        </Form.Group>
      </Form>
    </div>
  );
}
