import Image from "next/image";
import React from "react";

const AboutMyJourney = () => {
  return (
   <div className="bg-gray-200 py-30 px-6">
     <div className="max-w-[1200px] mx-auto my-auto">
      <div className="text-center flex items-center justify-center flex-col mb-9">
        <h1 className="text-3xl font-bold mb-3">Unleashing creativity and <span className="text-amber-500">Excellence</span></h1>
        <div className="h-1 w-24 bg-amber-500 "></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        <div>
          <h1 className="font-bold text-3xl mb-6">About My <span className="text-amber-500">Journey</span></h1>
          <p className="mb-2 text-[16px] font-bold">
           Hi, I'm Awe Oluwadarsimi Grace, a passionate full-stack developer dedicated to building efficient and user-friendly web applications. I enjoy transforming ideas into clean, responsive designs that improve user interaction. My focus is on clarity, performance, and delivering value through technology.
          </p>
          <p className="mb-2 text-[16px] text-amber-500 font-bold">
            With expertise in both frontend and backend systems, I craft responsive UIs and strong server-side logic that work hand in hand. I aim to make every product intuitive and accessible, ensuring a seamless experience for all users. I believe great design and strong functionality should always complement each other
          </p>
          <p className="font-bold text-[16px] mb-4">
           Over the past few years, I’ve worked on several freelance projects, helping individuals and small businesses bring their digital ideas to life. Each project sharpened my problem-solving skills and deepened my understanding of real-world development needs. Freelancing taught me adaptability, creativity, and collaboration.
          </p>
          <button className="bg-[#fe9a00] text-white p-2 rounded">
            <a href="/cv.pdf" download>
              download cv
            </a>
          </button>
        </div>
        <div>
          <Image
            src={"/portfolio picture.jpg"}
            alt="img"
            className="rounded-md object-cover"
            width={400}
            height={500}
          />
        </div>
      </div>
    </div>
   </div>
  );
};

export default AboutMyJourney;
