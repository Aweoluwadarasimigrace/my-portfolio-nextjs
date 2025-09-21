import Link from "next/link";
import React from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { MdMailOutline, MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#101828] text-[#99a1af] p-7">
  <div className="flex flex-col md:flex-row md:justify-between gap-8">
    <div className="flex-1">
      <h1 className="font-bold text-xl text-white mb-3">
        Awe Oluwadarasimi
      </h1>
      <p className="max-w-[500px] mb-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
        reprehenderit illum, iste nisi ut sunt numquam cumque magni
        molestias commodi omnis veritatis perferendis eos, sint dolorem
        neque dignissimos sit ducimus?
      </p>
      <div className="flex gap-2">
        <Link href={"https://www.linkedin.com/in/awe-oluwadarasimi-815a22323/"}>
          <FaLinkedin className="text-2xl" />
        </Link>
        <Link href={"https://x.com/oluwa_Darasiimi"}>
          <FaTwitterSquare className="text-2xl" />
        </Link>
        <Link href={"https://github.com/Aweoluwadarasimigrace"}>
          <FaGithubSquare className="text-2xl" />
        </Link>
      </div>
    </div>
    <div className="flex-1">
      <h1 className="text-white text-[17px] mb-3 font-bold">contact me </h1>
      <div className="flex items-center gap-3 mb-2">
        <MdOutlineLocationOn className="text-yellow-600 font-[800] text-xl" />
        <p>Ibadan, Nigeria</p>
      </div>
      <div className="flex items-center gap-3">
        <MdMailOutline className="text-yellow-600 font-[800] text-xl mb-2" />
        <Link href={"mailto:darasimigrace123@icloud.com"}>
          darasimigrace123@icloud.com
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <FaPhoneAlt className="text-yellow-600 mb-2" />
        <Link href={"tel:+2348139130040"}>+2348139130040</Link>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
