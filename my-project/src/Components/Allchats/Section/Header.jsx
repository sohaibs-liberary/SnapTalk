import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="Header flex justify-between lg:gap-28 gap-36 items-center px-12">
      {/* Logo */}
      <div className="Logo p-5">
        <a href="">
        <h1 className="font-bold text-2xl text-white font-sans">SnapTalk</h1>
        </a>
      </div>

      {/* Menu */}
      <div className="relative p-2">
        {/* Icon button */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-slate-900 p-2 rounded-full hover:bg-slate-600 transition-all duration-300"
        >
          <CiMenuKebab className="text-2xl text-white" />
        </button>

        {/* Dropdown options */}
        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-slate-700 text-white font-sans rounded-md shadow-lg z-10">
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-600"
              onClick={() => setOpen(false)}
            >
              Add new Number
            </button>
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-600"
              onClick={() => setOpen(false)}
            >
              Make new Group
            </button>
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-600"
              onClick={() => setOpen(false)}
            >
              Option 3
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
