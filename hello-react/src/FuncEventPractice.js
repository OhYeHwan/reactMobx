import React, { useState } from "react";

const FuncEventPractice = () => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>이벤트연습</h1>
      <input
        type="text"
        name="message"
        placeholder="아무거나입력해"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button
        onClick={() => {
          alert(message);
          setMessage("");
        }}
      >
        확인
      </button>
    </div>
  );
};

export default FuncEventPractice;
