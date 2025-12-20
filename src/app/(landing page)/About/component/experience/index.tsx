"use client"
import React from 'react'
import CountUp from 'react-countup';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa6';
import { IoPeople } from 'react-icons/io5';
import { useInView } from 'react-intersection-observer';

type Props = {
    end: number;
    duration: number;
    suffix?: string;
}


function Counter({end, duration = 3, suffix= "+"}: Props){

    const {ref, inView} = useInView({ triggerOnce: false, threshold: 0.5 });
    
    return(
         <div ref={ref} className="text-6xl font-bold text-gray-800 mb-3 flex items-center">
      {inView && <CountUp end={end} duration={duration} suffix={suffix} />}
    </div>
    )
}

const Experience = () => {
  return (
    <div  className='my-auto mx-auto max-w-[1200px] py-20 px-6'>

        <div className='text-center flex items-center justify-center flex-col mb-16'>
            <h1 className='text-5xl font-bold mb-3'>Experience</h1>
            <div className='w-24 h-1 bg-amber-500 rounded-full mt-2'></div>
        </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
        {/* box 1 */}
          <div className='flex bg-white rounded-xl flex-col p-8 items-center text-center transition-all duration-300 hover:-translate-y-1 border border-gray-200 shadow-lg hover:border-2 hover:border-amber-500'> 
            <div className='text-4xl text-amber-500 mb-6 rounded-full p-5 bg-amber-100'   >
                <FaRegCalendarAlt />
            </div>
            <Counter end={2} duration={3} suffix="+" />
            <p className='text-gray-700 font-semibold text-xl'>Years of Experience</p>
        </div>

        {/* box 2 */}

        <div className='flex bg-white rounded-xl flex-col p-8 items-center text-center transition-all duration-300 hover:-translate-y-1 border border-gray-200 shadow-lg hover:border-2 hover:border-amber-500'> 
            <div className='text-4xl text-amber-500 mb-6 rounded-full p-5 bg-amber-100'>
                <FaLaptopCode />
            </div>
            <Counter end={40} duration={3} suffix="+" />
            <p className='text-gray-700 font-semibold text-xl'>Project completed</p>
        </div>


        {/* box 3 */}

        <div className='flex bg-white rounded-xl flex-col p-8 items-center text-center transition-all duration-300 hover:-translate-y-1 border border-gray-200 shadow-lg hover:border-2 hover:border-amber-500'> 
            <div className='text-4xl text-amber-500 mb-6 rounded-full p-5 bg-amber-100'   >
               <IoPeople />
            </div>
            <Counter end={5} duration={3} suffix="+" />
            <p className='text-gray-700 font-semibold text-xl'>Satisfied Clients</p>
        </div>
      </div>
    </div>
  )
}

export default Experience