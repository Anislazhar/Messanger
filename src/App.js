import React, { useState, useEffect } from "react";
import firebase from "firebase";
import db from "./firebase";

import Message from "./Message";
import { FormControl, Input } from "@material-ui/core";
import FlipMove from "react-flip-move";
import TelegramIcon from "@material-ui/icons/Telegram";
import { IconButton } from "@material-ui/core";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() })),
        );
      });
  }, [input]);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault(); // to not refrech the form wich its by default
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="App">
      <img
        alt=""
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
      />
      <h1 className="welcome">{username} Welcome To Vinnie MSN</h1>
      <form className="app__form">
        <FormControl className="app__formControll">
          <Input
            className="app__input"
            placeholder="     Enter Message"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <TelegramIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
