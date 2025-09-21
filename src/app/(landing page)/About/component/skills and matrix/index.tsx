import React from "react";
import { BiLogoMongodb, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { FaBootstrap, FaNodeJs, FaSass } from "react-icons/fa";

import { FaHtml5, FaReact } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript, IoLogoWordpress } from "react-icons/io5";

const SkillMatrix = () => {
  return (
    <div className="py-20 bg-gray-900 text-white">
      <div className="px-6 mx-auto">
        {/* the skill matrix header */}
        <div className="text-white text-center mb-12">
          <h1 className="text-3xl font-bold md:text-6xl mb-5">Skills Matrix</h1>
          <div className="mx-auto bg-amber-500 w-24 h-1 mb-6"></div>
        </div>

        {/* the skill matrix box */}
        <div className="space-y-10">


          {/* Frontend */}
          <div className="mb-10">
            {/* header  */}
            <h3 className="text-2xl font-bold mb-6 text-amber-500 flex items-center">
              <span className="w-8 h-1 bg-amber-500 mr-2"></span>
              Frontend
            </h3>
{/* Frontend Skills box */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {/* box-1 */}
                <div>
                    <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center border border-gray-700 hover:bg-gray-700 transition-all duration-300 h-full hover:border-amber-500">
                        <div className="text-4xl mb-2 text-blue-300">
                            <FaReact />
                        </div>
                        <h4 className="font-medium">JavaScript</h4>
                    </div>
                </div>

                {/* box-2 */}
                <div>
                    <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center border border-gray-700 hover:bg-gray-700 transition-all duration-300 h-full hover:border-amber-500">
                        <div className="text-4xl mb-2 text-yellow-300">
                            <IoLogoJavascript />
                        </div>
                        <h4 className="font-medium">JavaScript</h4>
                    </div>
                </div>

                {/* box-3 */}
                <div>
                    <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center border border-gray-700 hover:bg-gray-700 transition-all duration-300 h-full hover:border-amber-500">
                        <div className="text-4xl mb-2 text-blue-500">
                           <BiLogoTypescript />
                        </div>
                        <h4 className="font-medium">TypeScript</h4>
                    </div>
                </div>

                {/* box-4 */}
                <div>
                    <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center border border-gray-700 hover:bg-gray-700 transition-all duration-300 h-full hover:border-amber-500">
                        <div className="text-4xl mb-2 text-white">
                           <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"></path></svg>
                        </div>
                        <h4 className="font-medium">Next js</h4>
                    </div>
                </div>
                {/* box-5 */}
                <div>
                    <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center border border-gray-700 hover:bg-gray-700 transition-all duration-300 h-full hover:border-amber-500">
                        <div className="text-4xl mb-2 text-purple-600">
                           <BiLogoRedux />
                        </div>
                        <h4 className="font-medium">Redux</h4>
                    </div>
                </div>
            </div>
          </div>


 <div className="mb-10">
            {/* header  */}
            <h3 className="text-2xl font-bold mb-6 text-amber-500 flex items-center">
              <span className="w-8 h-1 bg-amber-500 mr-2"></span>
             designing and styling ui
            </h3>
{/* Frontend Skills box */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {/* box-1 */}
                <div>
                    <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center border border-gray-700 hover:bg-gray-700 transition-all duration-300 h-full hover:border-amber-500">
                        <div className="text-4xl mb-2 text-red-500">
                           <FaHtml5 />
                        </div>
                        <h4 className="font-medium">HTML5</h4>
                    </div>
                </div>

                {/* box-2 */}
                <div>
                    <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center border border-gray-700 hover:bg-gray-700 transition-all duration-300 h-full hover:border-amber-500">
                        <div className="text-4xl mb-2 text-blue-600">
<IoLogoCss3 />
                        </div>
                        <h4 className="font-medium">CSS</h4>
                    </div>
                </div>

                {/* box-3 */}
                <div>
                    <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center border border-gray-700 hover:bg-gray-700 transition-all duration-300 h-full hover:border-amber-500">
                        <div className="text-4xl mb-2 text-pink-500">
                          <FaSass />
                        </div>
                        <h4 className="font-medium">Sass</h4>
                    </div>
                </div>

                {/* box-4 */}
                <div>
                    <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center border border-gray-700 hover:bg-gray-700 transition-all duration-300 h-full hover:border-amber-500">
                        <div className="text-4xl mb-2 text-green-300">
                        <BiLogoTailwindCss />
                        </div>
                        <h4 className="font-medium">Tailwind CSS</h4>
                    </div>
                </div>
                {/* box-5 */}
                <div>
                    <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center border border-gray-700 hover:bg-gray-700 transition-all duration-300 h-full hover:border-amber-500">
                        <div className="text-4xl mb-2 text-purple-600">
                           <FaBootstrap />
                        </div>
                        <h4 className="font-medium">Bootstrap</h4>
                    </div>
                </div>
            </div>
          </div>



 <div className="mb-10">
            {/* header  */}
            <h3 className="text-2xl font-bold mb-6 text-amber-500 flex items-center">
              <span className="w-8 h-1 bg-amber-500 mr-2"></span>
              Backend
            </h3>
{/* Backend Skills box */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {/* box-1 */}
                <div>
                    <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center border border-gray-700 hover:bg-gray-700 transition-all duration-300 h-full hover:border-amber-500">
                        <div className="text-4xl mb-2 text-green-700">
                            <FaNodeJs />
                        </div>
                        <h4 className="font-medium">Node.js</h4>
                    </div>
                </div>

                {/* box-2 */}
                <div>
                    <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center border border-gray-700 hover:bg-gray-700 transition-all duration-300 h-full hover:border-amber-500">
                        <div className="text-4xl mb-2 text-green-500">
                            <BiLogoMongodb />
                        </div>
                        <h4 className="font-medium">MongoDB</h4>
                    </div>
                </div>

                {/* box-3 */}
                <div>
                    <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center border border-gray-700 hover:bg-gray-700 transition-all duration-300 h-full hover:border-amber-500">
                        <div className="text-4xl mb-2 text-yellow-400">
                           <GrMysql />
                        </div>
                        <h4 className="font-medium">Sql server</h4>
                    </div>
                </div>

                {/* box-4 */}
                <div>
                    <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center border border-gray-700 hover:bg-gray-700 transition-all duration-300 h-full hover:border-amber-500">
                        <div className="text-4xl mb-2 text-white">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path></svg>
                        </div>
                        <h4 className="font-medium">Express js</h4>
                    </div>
                </div>
                {/* box-5 */}
                <div>
                    <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center border border-gray-700 hover:bg-gray-700 transition-all duration-300 h-full hover:border-amber-500">
                        <div className="text-4xl mb-2 text-white">
                       <IoLogoWordpress />
                        </div>
                        <h4 className="font-medium">wordPress</h4>
                    </div>
                </div>
            </div>
          </div>



          
        </div>
      </div>
    </div>
  );
};

export default SkillMatrix;
