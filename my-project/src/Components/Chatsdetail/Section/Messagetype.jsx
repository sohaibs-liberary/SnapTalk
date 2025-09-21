import React, { useState } from "react";
import { PiPaperPlaneRightFill } from "react-icons/pi";

const Messagetype = ({ onSend }) => {
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    onSend(input.trim());
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="messagetype fixed bottom-0 w-full bg-slate-800 p-1">
      <div className="relative w-[950px]  py-2">
        <input
          type="text"
          placeholder="Message"
          className="w-[940px] rounded-xl p-2 pr-10 mx-3 bg-slate-700 text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={sendMessage}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-xl text-white"
        >
          <PiPaperPlaneRightFill />
        </button>
      </div>
    </div>
  );
};

export default Messagetype;
