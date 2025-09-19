import React, { useState } from "react";
import { MdInfo } from "react-icons/md";


const Header = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Jony",
      img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
      active: "online",
    },
    //  { id: 2,
    // name:"Gorge",
    // img:"https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    // message:"Who are you?",
    // },
    //  { id: 3,
    // name:"Jimmy",
    // img:"https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    // message:"Whats going?",
    // },
    //  { id: 4,
    // name:"Kelis",
    // img:"https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    // message:"Hi",
    // },
    //  { id: 5,
    // name:"Herry",
    // img:"https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    // message:"Bye Take Care",
    // },
    //  { id: 6,
    // name:"Jony",
    // img:"https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    // message:"Hello",
    // },
  ]);
  return (
    <div className="Header">
      <div className="">
        {data.slice(0 > 4).map((chat) => (
          <div key={chat.id} className="chatheader flex justify-between">
            <div className="flex gap-6 py-2 px-5  rounded-xl">
              <div className="img flex justify-center">
                <img
                  src={chat.img}
                  alt="profile-img"
                  className="w-10 h-10 rounded-full "
                />
              </div>
              <div className="text grid gap-2">
                <div className="name font-extrabold text-xl text-white">
                  {chat.name}
                </div>
                <div className="message text-gray-500">{chat.active}</div>
              </div>
            </div>
            <div className="info fex justify-center p-8">
              <MdInfo className="text-white text-2xl " />

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
