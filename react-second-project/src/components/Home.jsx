import React from 'react';
import { Link } from 'react-router-dom';
import myPic from '../assets/My-Pic.png';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl text-left">
                            Ghulam Haider
                            <span className="text-3xl mt-4 hidden sm:block">
                                Web & Mobile App Developer
                            </span>
                            <span className="hidden sm:block text-xl mt-4">
                                I am a passionate Web and Mobile App Developer with 1 year of experience in crafting dynamic and responsive applications.
                                My expertise lies in utilizing modern technologies such as HTML, CSS, Tailwind, Bootstrap, JavaScript, and React to build intuitive and user-friendly interfaces. With a keen eye for design and a
                                strong foundation in front-end development, I am committed to delivering high-quality solutions that enhance user experience and meet business objectives.
                            </span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="contact"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
                    <img className="w-96 rounded-md" src={myPic} alt="image1" />
                </div>
            </aside>

            <div className="grid place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Web And Mobile App Developer</h1>
        </div>
    );
}
