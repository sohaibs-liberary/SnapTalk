import React, { useState } from "react";

const Chatlist = ({ onSelect }) => {
  const [data] = useState([
    { id: 1, name: "Jony",  img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png", message: "Hello" },
    { id: 2, name: "Gorge", img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png", message: "Who are you?" },
    { id: 3, name: "Jimmy", img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png", message: "Whats going?" },
    { id: 4, name: "Kelis", img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png", message: "Hi" },
    { id: 5, name: "Herry", img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png", message: "Bye Take Care" },
    { id: 6, name: "Jony",  img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png", message: "Hello" },
  ]);

  return (
    <div className="chatslist">
      <div className="chats p-10 m-2 py-36">
        {data.map(chat => (
          <div
            key={chat.id}
            className="flex gap-6 hover:bg-slate-900 py-2 px-5 rounded-xl cursor-pointer"
            onClick={() => onSelect && onSelect(chat)}
          >
            <div className="img flex justify-center">
              <img src={chat.img} alt="profile-img" className="w-10 h-10 rounded-full" />
            </div>
            <div className="text grid gap-2">
              <div className="name font-extrabold text-xl text-white">{chat.name}</div>
              <div className="message text-gray-500">{chat.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatlist;
