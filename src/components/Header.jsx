import { useState } from "react";
import Facebook from "./../assets/Facebook.svg?react";
import Instagram from "./../assets/Instagram.svg?react";
import Menu from "./../assets/menu.svg?react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-blackbg text-white h-16">
      <nav className="flex justify-between items-center h-16 max-w-screen-xl mx-auto px-4">
        <a className="font-black text-2xl" href="#">
          DniprOffice
        </a>
        <div className="flex gap-10 md:gap-25">
          <div className="hidden md:flex justify-between gap-[36px] items-center no-underline">
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Contacts</a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden">
            <Menu></Menu>
          </button>
          <div className="flex gap-5 h-16 items-center">
            <a href="#">
              <Instagram></Instagram>
            </a>
            <a href="#">
              <Facebook></Facebook>
            </a>
          </div>
        </div>
      </nav>
      {open && (
        <div className="md:hidden bg-blackbg py-5 absolute flex-col flex w-[200px] mt-2 rounded-lg right-5 justify-between gap-2 items-center no-underline">
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Contacts</a>
        </div>
      )}
    </header>
  );
}
