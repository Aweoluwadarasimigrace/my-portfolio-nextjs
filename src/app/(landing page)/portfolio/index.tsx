"use client";

import React, { useState } from "react";
import RealProject from "./realproject";
import PracticeProject from "./practiceproject";

const Portfolio = () => {
  const [activeBar, setActiveBar] = useState("second");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div>
        <h1 className="text-3xl font-bold mb-9 text-center">My projects</h1>
      </div>
      {/* Buttons */}
      <div className="flex gap-5 border-b border-gray-200 justify-center mt-10 mb-10">
       <div>
         <div
          onClick={() => setActiveBar("first")}
          className={ 
           ` 
           cursor-pointer
           font-bold transition-all
           ${activeBar === "first"
              ? " text-amber-500 px-1 py-1"
              : "text-gray-700 px-1 py-1"}`
          }
        >
          Real Project
        </div>
         {activeBar === "first" && (
          <div className="w-24 h-1 bg-amber-500"></div>
        )}
       </div>
       <div>
         <div
          onClick={() => setActiveBar("second")}
          className={
             ` 
             cursor-pointer
           font-bold transition-all
           ${activeBar === "second"
              ? "text-amber-500 px-1 py-1"
              : "text-gray-700 px-1 py-1"}`
          }
        >
          Practice Project
        </div>
        {activeBar === "second" && (
          <div className="w-32 h-1 bg-amber-500"></div>
        )}
       </div>
      </div>

      <div>
        <p className="text-center max-w-[900px] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, asperiores quas, temporibus ab dolorem, accusamus repellendus voluptas consequuntur modi reiciendis quidem ipsum rem aliquam. Eaque ipsum doloribus illum asperiores nemo.</p>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeBar === "first" && <div><RealProject /></div>}
        {activeBar === "second" && <div><PracticeProject /></div>}
      </div>
    </div>
  );
};

export default Portfolio;
