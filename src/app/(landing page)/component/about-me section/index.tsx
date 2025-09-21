import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-[#101828]">
      <div className="max-w-[1200px] ml-auto mr-auto px-[40px] py-[100px]">
        {/* header */}
        <div>
          <h1 className="font-extrabold text-[28px] mb-2 text-white">WHAT I DO</h1>
          <div className="w-25 h-1.5 bg-amber-500 mb-2"></div>
          <p className="max-w-[500px] text-[16px] mb-3 text-white">
            I create scalable websites by blending modern frontend design,
            reliable backend systems, and seamless user experiences.
          </p>
        </div>
        {/* responsive flex box */}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-[#99a1af]">
          {/* box 1 */}
          <div className="p-3 bg-[#1e2939] rounded-md flex-1">
            <h2 className="font-extrabold text-[#fe9a00] text-[20px] mb-5">
              I build scalable websites with modern frontend systems.
            </h2>
            <Image
              alt=""
              src={"/webdev.jpeg"}
              width={400}
              height={300}
              className="rounded-md mb-5"
            />
            <p className="mb-4">
              I build scalable websites with modern frontend systems, combining
              performance, responsiveness, and clean design. My work focuses on
              delivering maintainable solutions built for growth, ensuring web
              applications stay efficient and adaptable as needs change.
            </p>
            <div>
              <p className="text-[#fe9a00] mb-2 font-bold text-[16px]">
                TECH STACK
              </p>
              <div className="flex flex-wrap gap-3 mb-3">
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-medium border border-gray-600 hover:border-amber-500 hover:text-white transition-all duration-300 cursor-pointer">
                  REACT
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-medium border border-gray-600 hover:border-amber-500 hover:text-white transition-all duration-300 cursor-pointer">
                  TYPESCRIPT
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-medium border border-gray-600 hover:border-amber-500 hover:text-white transition-all duration-300 cursor-pointer">
                  HTML
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-medium border border-gray-600 hover:border-amber-500 hover:text-white transition-all duration-300 cursor-pointer">
                  TAILWIND
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-medium border border-gray-600 hover:border-amber-500 hover:text-white transition-all duration-300 cursor-pointer">
                  CSS
                </span>
              </div>
            </div>
            <button className="px-5 py-2 bg-amber-500 text-white rounded-md">
              <Link href={"/portfolio"}>VIEW PORTFOLIO</Link>
            </button>
          </div>
          {/* box 2 */}
          <div className="p-3 bg-[#1e2939] rounded-md flex-1">
            <h3 className="font-extrabold text-[#fe9a00] text-[20px] mb-5">
              I Build Reliable and Scalable Backend Systems
            </h3>
            <Image
              alt=""
              src={"/backend dev.jpeg"}
              width={400}
              height={300}
              className="rounded-md mb-5"
            />
            <p className="mb-4">
              I design and develop backend systems that are secure, fast, and
              scalable. My focus is on building strong foundations that keep
              your application running smoothly. From handling data to managing
              servers, I make sure everything works behind the scenes.
            </p>
            <div>
              <p className="text-[#fe9a00] mb-2 font-bold text-[16px]">
                TECH STACK
              </p>
              <div className="flex flex-wrap gap-3 mb-3">
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-medium border border-gray-600 hover:border-amber-500 hover:text-white transition-all duration-300 cursor-pointer">
                  NODE.JS
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-medium border border-gray-600 hover:border-amber-500 hover:text-white transition-all duration-300 cursor-pointer">
                  EXPRESS.JS
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-medium border border-gray-600 hover:border-amber-500 hover:text-white transition-all duration-300 cursor-pointer">
                  MONGODB
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-medium border border-gray-600 hover:border-amber-500 hover:text-white transition-all duration-300 cursor-pointer">
                  GRAPHQL
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-medium border border-gray-600 hover:border-amber-500 hover:text-white transition-all duration-300 cursor-pointer">
                  REST APIs
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-medium border border-gray-600 hover:border-amber-500 hover:text-white transition-all duration-300 cursor-pointer">
                  POSTMAN
                </span>
              </div>
            </div>
            <button className="px-5 py-2 bg-amber-500 text-white rounded-md">
              <Link href={"/portfolio"}>VIEW PORTFOLIO</Link>
            </button>
          </div>
          {/* box 3 */}
          <div className="p-3 bg-[#1e2939] rounded-md flex-1">
            <h3 className="font-extrabold text-[#fe9a00] text-[20px] mb-5">
              I Help Create Websites with Great UX and UI
            </h3>
            <Image
              alt=""
              src={"/ui.jpeg"}
              width={400}
              height={300}
              className="rounded-md mb-5"
            />
            <p className="mb-4">
              I design websites with intuitive user experiences (UX) and modern
              user interfaces (UI). My goal is to create applications that are
              seamless, accessible, and visually appealing, ensuring every
              interaction feels smooth and engaging. I deliver on the proposed
              time
            </p>
            <div>
              <p className="text-[#fe9a00] mb-2 font-bold text-[16px]">
                TECH STACK
              </p>
              <div className="flex flex-wrap gap-3 mb-5">
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-medium border border-gray-600 hover:border-amber-500 hover:text-white transition-all duration-300 cursor-pointer">
                  SASS
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-medium border border-gray-600 hover:border-amber-500 hover:text-white transition-all duration-300 cursor-pointer">
                  FIGMA
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-medium border border-gray-600 hover:border-amber-500 hover:text-white transition-all duration-300 cursor-pointer">
                  TAILWIND
                </span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-medium border border-gray-600 hover:border-amber-500 hover:text-white transition-all duration-300 cursor-pointer">
                  CSS
                </span>
              </div>
            </div>
            <button className="px-5 py-2 bg-amber-500 text-white rounded-md">
              <Link href={"/portfolio"}>VIEW PORTFOLIO</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
