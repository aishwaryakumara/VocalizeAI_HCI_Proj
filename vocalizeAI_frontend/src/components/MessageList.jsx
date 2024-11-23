import React from 'react';
import Message from './Message';

const MessageList = ({ messages, messageEndRef, onSpeak }) => (
  <div className="flex-1 p-4 overflow-y-auto space-y-4">
    {messages.map((msg, idx) => (
      <Message 
        key={idx} 
        type={msg.type} 
        text={msg.text} 
        onSpeak={onSpeak}
      />
    ))}
    <div ref={messageEndRef} />
  </div>
);

export default MessageList;