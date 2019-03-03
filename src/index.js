import ReactDOM from "react-dom";
import React from "react";
import MessagesContainer from "./js/components/container/MessagesContainer.jsx";

const messages = document.getElementById("messages");

messages ? ReactDOM.render(<MessagesContainer />, messages) : false;
