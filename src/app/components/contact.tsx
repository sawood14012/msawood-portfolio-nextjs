"use client";
import React, { useEffect, useRef } from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GetInTouchSection = () => {
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const socialsRef = useRef(null);

  useEffect(() => {
    const elements = [emailRef.current, phoneRef.current, addressRef.current, socialsRef.current];
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative bg-white mx-auto max-w-7xl px-5 py-1 sm:px-1 sm:py-4 lg:px-1">
      <div className="mx-auto max-w-7xl py-1 sm:px-1 sm:py-4 lg:px-1">
        <h2 className="text-4xl md:text-6xl font-bold animated-gradient-title bg-clip-text text-transparent text-center mb-12">
          Get in Touch
        </h2>
        <div className="grid px-5 mt-5 sm:grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="col-span-1 mb-5">
            {/* <h3 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-yellow-600 via-yellow-500 to-brown-600 bg-clip-text text-transparent text-left mb-5">
              My Contact Info
            </h3> */}
            <p className="text-left text-lg text-gray-700 text-justify">
            Let’s connect! You can reach me at the following contact details. I’m always open to discussing new projects, ideas, or simply having a chat.
            </p>
          </div>
        <div className="col-span-1 mb-5">
        <div className="grid px-5 mt-5 sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 mb-5 rounded-lg bg-gray-100">
                <p className='px-5 py-5 text-lg text-gray-700 font-bold'>
                    Phone
                </p>
                <p className='text-xl px-5 mb-5 font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text'>
                    <a href='tel:918123303633'>+91 8123303633</a>
                </p>
            </div>
            <div className="col-span-1 mb-5 rounded-lg bg-gray-100">
                <p className='px-5 py-5 text-gray-700 text-lg font-bold'>
                    Email
                </p>
                <p className='text-xl px-5 mb-5 text-primary font-bold text-lg px-5 mb-5 font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text'>
                    <a href='mailto:me@msawood.com'>me@msawood.com</a>
                </p>
            </div>
            <div className="col-span-1 mb-5 rounded-lg bg-gray-100">
                <p className='px-5 py-5 text-gray-700 text-lg font-bold'>
                    Socials
                </p>
                <div className='text-lg px-5 mb-5 text-primary font-bold'>
                <div className="flex justify-start space-x-4">
                    <a target={'_blank'} href="https://www.instagram.com/msawoood" className="text-blue-600 hover:text-purple-500">
                        <FaInstagram size={24} />
                    </a>
                    <a target={'_blank'} href="https://github.com/sawood14012" className="text-blue-600 hover:text-purple-500">
                        <FaGithub size={24} />
                    </a>
                    <a target={'_blank'} href="https://www.linkedin.com/in/sawood-meer-a50465119/" className="text-blue-600 hover:text-purple-500">
                        <FaLinkedin size={24} />
                    </a>
                </div>
                </div>
            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;