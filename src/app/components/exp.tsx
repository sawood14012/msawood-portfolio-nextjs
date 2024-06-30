"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Software Quality Engineer",
    org: "Red Hat",
    img: "/redhat.png",
    dates: "Mar 2020 - Present",
    details: [
      "Led performance testing and architecture setup for Red Hat Trusted Application Pipelines, including extensive E2E and acceptance tests. Designed and developed various dashboards with ReactJS/ VueJs and GoLang; created custom GitHub Actions for CI/CD, and deployed and maintained ROSA and OpenShift clusters. Built a custom load-testing framework using GoLang, managed RDS, and worked with various AWS services and CI tools like GitLab CI, Jenkins, and ProwCI."
    ]
  },
  {
    role: "Full Stack Developer",
    org: "Webknot Technologies",
    img: "/webknot.png",
    dates: "Jan 2020 - Mar 2020",
    details: [
      "Actively participated in architectural decisions and honed project management skills using JIRA and Bitbucket, Developed APIs with NodeJS and MongoDB."
    ]
  },
  {
    role: "Full Stack Developer Intern",
    org: "Samsung Prism",
    img: "/samsung.png",
    dates: "Jan 2019 - Dec 2019",
    details: [
      "Developed Python web scrapers for YouTube, Twitter, and Reddit to train Samsung’s AI, and created a VueJS dashboard to control them, earning a Certificate of Excellence."
    ]
  }
];

const ExperienceSection = () => {
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    contentRefs.current.forEach((contentRef) => {
      if (contentRef) {
        gsap.fromTo(
          contentRef,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: contentRef,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
              onEnter: () => gsap.to(contentRef, { opacity: 1, y: 0 }),
              onLeaveBack: () => gsap.to(contentRef, { opacity: 0, y: 50 }),
            }
          }
        );
      }
    });
  }, []);

  return (
    <div className="mx-auto max-w-7xl py-16 px-8">
      <h2 className="text-6xl font-bold text-center animated-gradient-title bg-clip-text mb-12">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {experiences.map((experience, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center md:items-start space-y-4 border-b md:border-b-0 md:border-r pb-8 md:pb-0 md:pr-8 last:border-0"
            ref={el => {
              contentRefs.current[index] = el;
            }}
          >
            <div className="w-28 h-28 mb-4">
            <Image src={experience.img} alt={`${experience.org} logo`} width={112} height={112} className='w-full h-full object-contain' />
            </div>
            <h3 className="text-4xl animated-gradient2 text-transparent bg-clip-text font-bold">{experience.role}</h3>
            <h4 className="text-2xl text-gray-700 font-semibold">{experience.org}</h4>
            <span className="text-sm italic font-semibold text-gray-600">{experience.dates}</span>
            <div className="mt-4 space-y-2">
              {experience.details.map((detail, detailIndex) => (
                <p key={detailIndex} className="text-gray-700 text-justify">{detail}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;