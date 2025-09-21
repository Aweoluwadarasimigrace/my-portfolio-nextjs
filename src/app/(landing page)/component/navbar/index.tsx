"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="px-6 py-3 bg-[#101828] text-[#99a1af]">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Awe Oluwadarasimi</h1>
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-7 text-[17px]">
            <Link href={"/"}>Home</Link>
            <Link href={"/About"}>About</Link>
            <Link href={"/porfolio"}>portfolio </Link>
          </div>
          {/* Hamburger Icon */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Open navigation"
          >
            <FaBars />
          </button>
        </div>
        {/* Mobile Nav */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-amber-400 z-50 flex flex-col gap-7 text-[17px] p-8 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <button
            className="self-end mb-8 text-xl"
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
          >
            ✕
          </button>
          <Link href={"/"} onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href={"/about"} onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href={"/porfolio"} onClick={() => setOpen(false)}>
            portfolio{" "}
          </Link>
        </div>
        {/* Overlay for mobile nav */}
        {open && (
          <div
            className="fixed inset-0 bg-opacity-40 z-40 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </nav>
    </div>
  );
};

export default NavBar;
