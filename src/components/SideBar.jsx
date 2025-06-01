import React from "react";
import Button from "../util/Button";
import { useNavigate } from "react-router-dom";

export const SideBar = ({ isOpen, setIsOpen }) => {

  const navigate = useNavigate();

  const menuList = [
    {
      label: 'Home',
      location: 'home'
    },
    {
      label: 'Subbed',
      location: 'subbed'
    },
    {
      label: 'Dubbed',
      location: 'dubbed'
    },
    {
        label: 'Movies',
        location: 'movies'
    }
  ]

  return (
    <div
      className={`fixed inset-0 z-[999] transition-opacity duration-300 ${
        isOpen ? "bg-neutral-900/70" : "pointer-events-none opacity-0"
      }`}
      onClick={() => setIsOpen(false)} // Optional: click outside to close
    >
      <div
        className={`h-full bg-neutral-800/80 p-4 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-72`}
        onClick={(e) => e.stopPropagation()} // Prevent sidebar click from closing it
      >
        <header className="text-white mb-4">
          <button className="bg-neutral-600 py-3 px-5 rounded-full cursor-pointer transition duration-200 hover:bg-neutral-500 active:bg-neutral-300" onClick={() => setIsOpen(false)}>Close menu</button>
        </header>
        <ul className="text-white">
          {menuList.map((item, idx) => (
            <li onClick={() => navigate(`/${item.location}`)} className="py-4 w-full border-b-neutral-400/50 border-b-2 hover:text-amber-300 cursor-pointer font-medium">
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
