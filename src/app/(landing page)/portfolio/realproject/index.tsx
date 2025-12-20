"use client"

import { db } from '@/app/lib/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Loader from '../../component/loader';
import { FaCode, FaSatelliteDish } from 'react-icons/fa6';
import Link from 'next/link';


interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    techstack: string[];
    liveLink: string;
    gitHubLink: string;
}

const RealProject = () => {

    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const colRef = collection(db, 'portfolio-project');
    useEffect(() => {
        const fetchProjects = async () => {
            setIsLoading(true);
            try {
                const snapshot = await getDocs(colRef);
                console.log(snapshot, "snapshot");
                const projectData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Project[];
                console.log(projectData, "projectData");
                setProjects(projectData);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }finally {
                setIsLoading(false);
            }
        }
    
        fetchProjects();
    }, [])
    

    if (isLoading) {
        return <Loader />;
    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
            projects.map(project => (
                <div key={project.id} className='bg-white rounded-xl shadow-lg'>
                     <Image src={project.image} alt={project.title} width={500} height={300}  className='rounded-t-xl w-full'/>
                   <div className='p-6 pb-5'>
                     <h2 className='text-xl font-bold text-gray-800 mb-2'>{project.title}</h2>
                    <p className='text-gray-600 text-sm mb-5'>{project.description}</p>

                    <div className='flex flex-wrap mb-6 gap-2'>
                        {project.techstack.map(techstack=>(
                            <span key={techstack} className='px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md'>
                                 {techstack}
                            </span>
                        ))}
                    </div>
                    <div className='flex justify-between items-center mt-auto'>
                      
                      <Link href={project.liveLink} target='_blank'>  <button className='px-4 py-2 bg-amber-500 text-white rounded-lg text-sm font-medium flex items-center gap-1'> <FaSatelliteDish />Live Demo</button></Link>
                        <Link href={project.gitHubLink} target='_blank'> <button className='px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium flex items-center gap-1 rounded-lg'><FaCode /> View Code</button></Link>
                    </div>
                   </div>
                </div>
            ))
        }
    </div>
  )
}

export default RealProject;