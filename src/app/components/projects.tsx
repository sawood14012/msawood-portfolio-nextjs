"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Bangalore Grand Taj",
    description: "Bangalore Grand Taj Resturant (UAE) Website built with NextJS",
    image: "/projects/2.png",
    link: "https://bangaloregrandtaj.ae/"
  },
  {
    title: "JWC India Website",
    description: "JWC India Website Built with NextJS, Golang and MongoDB ",
    image: "/projects/1.png",
    link: "https://jwcindia.com/"
  },
  {
    title: "Mamun",
    description: "Website for Mamun LLP (UAE) built with NextJS and Tailwind CSS.",
    image: "/projects/7.png",
    link: "https://mamun.ae/"
  },
  {
    title: "My Safety Plan",
    description: "A Safety Plan App for US veteran's With resources to manage their medications, doctor's appointments etc.",
    image: "/projects/9.png",
    link: "https://github.com/Kurama-tech/safety-ui"
  },
  {
    title: "App for Arscon Clients",
    description: "App for Arscon Clients To Request Services , a AI powered Busniess Directory Search, Made with Flutter and Golang",
    image: "/projects/8.png",
    link: "https://www.arscon.in/"
  },
  {
    title: "Hydronics Website",
    description: "Hydronics Systems (UAE) Website built with NextJS",
    image: "/projects/3.png",
    link: "https://hydronics-3a326.web.app/"
  },
  {
    title: "Moon Star Toys",
    description: "MoonStar Toys Website built with Vue / Nuxtjs and Firebase",
    image: "/projects/4.png",
    link: "https://moonstar.web.app/"
  },
  {
    title: "Moonstar Admin",
    description: "Admin Dashboard For MoonStar toys to manage website orders, inventory, invoices and generate GST compliant Invoices for in store customers.",
    image: "/projects/5.png",
    link: "https://github.com/Kurama-tech/moon-back"
  },
  {
    title: "Admin for JWC / Arscon  etc",
    description: "New Admin Panel based on NuxtJS & Vuetify for various of my projects to maintain products / posts  displayed on website, maintain users / requests for Arscon and generate GST invoices  ",
    image: "/projects/6.png",
    link: "https://mamun-dashboard.vercel.app/"
  },
  {
    title: "Mewaah",
    description: "App like zomato/ UberEats/ made with Flutter and Golang.",
    image: "/projects/10.png",
    link: "#"
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    projectRefs.current.forEach((project) => {
      if (project) {
        gsap.fromTo(
          project,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: project,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
              onEnter: () => gsap.to(project, { opacity: 1, y: 0 }),
              onLeaveBack: () => gsap.to(project, { opacity: 0, y: 50 }),
            }
          }
        );
      }
    });
  }, []);

  return (
    <div className="mx-auto max-w-7xl py-16 px-8">
      <h2 className="text-6xl font-bold text-center animated-gradient-title bg-clip-text text-transparent mb-12">Projects</h2>
      <div className="masonry-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="masonry-item bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl" 
            ref={el => {
              projectRefs.current[index] = el;
            }}
          >
             <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-auto object-cover mb-4 rounded-lg transition-transform transform hover:scale-105" />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4 text-justify">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-lg font-bold leading-6 text-gray-900 animated-gradient3">Visit</a>
          </div>
        ))}
      </div>
      <style jsx>{`
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }
        .masonry-item {
          break-inside: avoid;
        }
        .animated-gradient3 {
          background: linear-gradient(to right, #fbbf24, #f97316, #b91c1c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          transition: background 0.5s;
        }
        .animated-gradient3:hover {
          background: linear-gradient(to left, #fbbf24, #f97316, #b91c1c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default ProjectsSection;