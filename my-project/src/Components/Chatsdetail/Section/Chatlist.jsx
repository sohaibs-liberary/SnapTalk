import React from "react";
import DP from "/src/assets/icon-7797704_640.png";

const Chatlist = ({ messages }) => {
  return (
    <div className="chatsdetail my-16 p-6 min-h-[420px] max-h-[440px] overflow-y-auto custom-scroll space-y-3">
      {messages.map((msg, idx) => (
        <div key={idx} className="flex items-end gap-2">
          {/* Profile picture */}
          <img src={DP} alt="DP" className="w-8 h-8 rounded-full self-end" />

          {/* Bubble with proper tail */}
          <div
            className="
              relative bg-gray-700 text-white text-sm px-4 py-2
              max-w-[70%] break-words
              rounded-2xl rounded-bl-none
              after:content-[''] after:absolute after:-left-2 after:bottom-1
              after:border-8 after:border-transparent
              after:border-r-gray-700
            "
          >
            {msg}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chatlist;
