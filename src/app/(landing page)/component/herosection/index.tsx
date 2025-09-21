"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <div>
      <div className="mt-[30px] p-4 bg-[#f3f4f6]  md:flex flex-col-reverse md:flex-row justify-around  gap-4 md:p-5 md:mt-[60px]">
        <div>
          <h1 className="font-extrabold text-[30px] text-blue-950">
            HELLO, I'M AWE <span className="text-[#fe9a00]">OLUWADARSIMI</span>
          </h1>
          <h1 className="font-bold text-[20px]" style={{ color: "#101828" }}>
            <Typewriter
              words={[
                "FULL-STACK DEVELOPER",
                "FRONTEND DEVELOPER",
                "BACKEND DEVELOPER",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-[#99a1af] max-w-[500px] mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            fugiat dolorem maxime quibusdam assumenda. Alias tempore corrupti
            nesciunt hic provident. Molestiae quam eveniet explicabo nisi quis
            incidunt voluptatibus officia maxime!
          </p>
        <div className="flex gap-2">
            <button className="bg-[#fe9a00] text-white p-2 rounded">
                <a href="/cv.pdf" download>download cv</a>
            </button>
              <button  className="bg-[#fe9a00] text-white p-2 rounded">
            <Link href={"/portfolio"}>portfolio</Link>
          </button>
        </div>
        </div>
        <div className=" hidden md:rounded-[50%] bg-blue-800 w-[64vw] max-w-[410px] h-[64vw] max-h-[410px] md:flex items-center justify-center mb-6 md:mb-0">
          <Image
            src={"/portfolio picture.jpg"}
            alt=""
            width={400}
            height={400}
            className="rounded-[100%] w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
