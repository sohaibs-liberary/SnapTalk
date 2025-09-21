import React from "react";
import DP from "/src/assets/icon-7797704_640.png";

const Chatlist = ({ messages }) => {
  return (
    <div className="chatsdetail my-16 p-6 min-h-[420px] max-h-[440px] overflow-y-auto custom-scroll grid">
      {messages.map((msg, idx) => (
        <div key={idx} className="messages flex gap-6 p-2 items-center">
          <div className="dp">
            <img src={DP} alt="DPimg" className="w-10 rounded-full" />
          </div>
          <div className="text">
            <h1 className="text-white">{msg}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chatlist;
