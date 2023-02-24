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
  }
};
