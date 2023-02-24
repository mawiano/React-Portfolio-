import React from 'react';
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
          
        </Form>
      </div>
    )












};
