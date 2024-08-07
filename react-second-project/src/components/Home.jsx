import React from 'react'
import { Link } from 'react-router-dom';
import myPic from '../assets/My-Pic.png'

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="flex flex-col  justify-between mt-16 lg:flex-row  items-center gap-y-12 ">
                <div className="w-[60%] ">
                    <div className="flex flex-col gap-8 md:px-8 sm:w-[100%]">

                        <h2 className="text-4xl font-bold  text-left">
                           Ghulam Haider
                        </h2>

                        <h3 className='text-xl mt-4 font-bold '>                        
                            Web & Mobile App Developer    
                        </h3>

                        <p className=" text-xl mt-4">
                        I am a passionate Web and Mobile App Developer with 1 year of experience in crafting dynamic and responsive applications.
                        My expertise lies in utilizing modern technologies such as HTML, CSS, Tailwind, Bootstrap, JavaScript, and React to build intuitive and user-friendly interfaces. With a keen eye for design and a 
                        strong foundation in front-end development, I am committed to delivering high-quality solutions that enhance user experience and meet business objectives.
                        </p>

                        <Link
                            className="w-32 text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75 "
                            to="contact">
                            Contact Us
                        </Link>
                    </div>
                </div>

                <div className="md:px-8 sm:w-full flex justify-center">
                    <img className="w-96 rounded-md" src={myPic} alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src=" https://i.ibb.co/5BCcDYB/Remote2.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl lg:text-5xl py-10 font-medium">Web And Mobile App Developer</h1>
        </div>
    );
}