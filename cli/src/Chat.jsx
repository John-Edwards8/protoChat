import React from 'react';
import ChatButton from './ChatButton'

// import { useState } from "react";
// const [messages, setMessages] = useState([
//   { id: 1, text: "Привет!", sender: "bot" },
//   { id: 2, text: "Как дела?", sender: "bot" },
// ]);
// const [input, setInput] = useState("");

class Chat extends React.Component {
  // sendMessage() {
  //   if (!input.trim()) return;
  //   setMessages([...messages, { id: Date.now(), text: input, sender: "user" }]);
  //   setInput("");
  // };

  render() {
    return (
      <div className="flex flex-col h-screen bg-gray-100 p-4">
        <div className="flex p-2 bg-white border-t">
          <input
            type="text"
            className="flex-1 border p-2 rounded-lg"
            // value={input}
            placeholder="Напишите сообщение..."
          />
          <ChatButton />
        </div>
      </div>
    );
  }
}

export default Chat;