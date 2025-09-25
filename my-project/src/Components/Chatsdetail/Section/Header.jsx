import React from "react";
import { MdInfo } from "react-icons/md";

const Header = ({ contact }) => {
  if (!contact) {
    return (
      <div className="Header fixed top-0 bg-slate-900 w-full">
        <div className="p-5 text-white">Select a contact to start chat</div>
      </div>
    );
  }

  return (
    <div className="Header fixed top-0 bg-slate-900 w-full">
      <div className="chatheader flex justify-between">
        <div className="flex gap-6 py-2 px-5 rounded-xl">
          <div className="img flex justify-center">
            <img
              src={contact.img}
              alt="profile-img"
              className="w-10 h-10 rounded-full "
            />
          </div>
          <div className="text grid gap-2">
            <div className="name font-extrabold text-xl text-white">
              {contact.name}
            </div>
            <div className="message text-gray-500">online</div>
          </div>
        </div>
        <div className="info flex justify-center p-8">
          <MdInfo className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
