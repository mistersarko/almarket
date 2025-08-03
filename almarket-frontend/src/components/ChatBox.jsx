import React, { useState } from "react";

const ChatBox = ({ messages, onSend }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      onSend(newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="w-full border rounded-xl p-3 bg-white">
      <div className="h-48 overflow-y-auto mb-2 border p-2 rounded">
        {messages.map((msg, index) => (
          <div key={index} className="text-sm mb-1">
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-grow border px-3 py-1 rounded"
          placeholder="Write a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-1 rounded"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
