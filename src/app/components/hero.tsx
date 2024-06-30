"use client";
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const textRef1 = useRef(null);
  const emojiRef = useRef(null);
  const textRef2 = useRef(null);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef1.current, { opacity: 0 }, { opacity: 1, duration: 2, delay: 0.5, onComplete: () => {
      gsap.fromTo(textRef1.current, { y: 0 }, { y: -10, repeat: -1, yoyo: true, ease: "power1.out" });
    }});
    gsap.fromTo(emojiRef.current, { opacity: 0 }, { opacity: 1, duration: 2, delay: 0.7 });
    gsap.fromTo(textRef2.current, { opacity: 0 }, { opacity: 1, duration: 2, delay: 1 });
    gsap.fromTo(subTextRef.current, { opacity: 0 }, { opacity: 1, duration: 2, delay: 1.5 });
    gsap.fromTo(buttonRef.current, { opacity: 0 }, { opacity: 1, duration: 2, delay: 2 });
    gsap.fromTo(imageRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 2, delay: 0.5 });
  }, []);

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const downloadResume = () => {
    window.open("https://storage.googleapis.com/data-portfolio-sawood/Meer%20Resume.pdf", "_blank");
  };


  return (
    <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen px-8 lg:items-center">
      <div>
      <Image ref={imageRef} src="/profile.png" alt="Hero Image" width={600} height={600} className='w-auto' />
      </div>
      <div className="flex flex-col justify-start items-start text-gray-700 space-y-6 lg:order-first">
        <div className="flex items-center">
          <h1 ref={textRef1} className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">Hi!</h1>
          <span ref={emojiRef} className="text-6xl ml-2">👋</span>
        </div>
        <h1 ref={textRef2} className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-500 to-brown-600 text-transparent bg-clip-text text-wrap">I am Sawood</h1>
        <p ref={subTextRef} className="text-lg text-gray-500">
          A dedicated DevOps/Quality Engineer with over 5 years of expertise in developing, testing, and deploying applications on hybrid cloud infrastructure. Skilled in maintaining high availability and seamless operations, I stay current with evolving technologies and am committed to continuous learning and growth.
        </p>
        <div ref={buttonRef} className="flex gap-4">
          <button onClick={scrollToContact} className="px-6 py-3 rounded-full animated-gradient text-white">Get in Touch</button>
          <button onClick={downloadResume} className="px-6 py-3 rounded-full animated-gradient4 text-white">Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;