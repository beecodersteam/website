"use client";

import { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import TeamPic1 from "@/public/images/projects/nitelive.jpeg";
import TeamPic2 from "@/public/images/projects/alfabets.jpeg";
import TeamPic3 from "@/public/images/projects/mm.jpeg";

// Structured portfolio data
const portfolioProjects = [
    {
        id: 1,
        title: "Nitelive",
        category: "Entertainment Platform",
        description: "Your real-time guide to the best places, putting fun at your fingertips.",
        fullDescription: "A comprehensive entertainment platform that connects users with real-time information about events, venues, and activities. Built with modern web technologies to deliver seamless user experiences.",
        image: TeamPic1,
        technologies: ["React", "Node.js", "MongoDB", "Real-time APIs"],
        features: ["Real-time venue information", "Event discovery", "Social integration", "Location-based services"],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
            </svg>
        ),
        gradient: "from-beePrimary-light to-beePrimary-normal"
    },
    {
        id: 2,
        title: "Alfabets",
        category: "Business Management",
        description: "Comprehensive web system and application for managing betting houses operations.",
        fullDescription: "A sophisticated business management platform designed specifically for betting house operations, featuring comprehensive analytics, user management, and real-time transaction processing.",
        image: TeamPic2,
        technologies: ["React", "TypeScript", "PostgreSQL", "Docker"],
        features: ["Transaction management", "Analytics dashboard", "User administration", "Security protocols"],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l-1-3m1 3l-3-3m-3 3h4" />
            </svg>
        ),
        gradient: "from-beePrimary-normal to-beePrimary-dark"
    },
    {
        id: 3,
        title: "Safer Women",
        category: "Social Impact",
        description: "Protective system and application designed for women under protective measures.",
        fullDescription: "A critical safety platform providing emergency assistance, location tracking, and support network features for women in vulnerable situations, built with privacy and security as top priorities.",
        image: TeamPic3,
        technologies: ["React Native", "Firebase", "Geolocation", "Push Notifications"],
        features: ["Emergency alerts", "Location tracking", "Support network", "Privacy protection"],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        gradient: "from-beePrimary-normal to-beePrimary-dark"
    }
];

export default function Portifolio() {
    const [activeProject, setActiveProject] = useState<number>(1);
    const currentProject = portfolioProjects.find(p => p.id === activeProject) || portfolioProjects[0];

    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-beePrimary-light/20 to-beePrimary-normal/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center px-4 py-2 bg-beePrimary-normal/10 backdrop-blur-sm rounded-full mb-6">
                        <svg className="w-5 h-5 text-beePrimary-normal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <span className="text-beePrimary-normal font-semibold text-sm">OUR PORTFOLIO</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6" id="portifolio">
                        <span className="bg-gradient-to-r from-beePrimary-normal to-beePrimary-dark bg-clip-text text-transparent">
                            Highlighted Projects
                        </span>
                    </h2>
                    <div className="w-48 h-1 bg-gradient-to-r from-transparent via-beeSecondary-normal to-transparent mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        On our journey, the pursuit of excellence is constant. Each project in our portfolio reflects our commitment to the highest quality standards.
                    </p>
                </div>

                {/* Portfolio Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Project Selection */}
                    <div className="space-y-4" data-aos="fade-right">
                        {portfolioProjects.map((project) => (
                            <button
                                key={project.id}
                                onClick={() => setActiveProject(project.id)}
                                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                                    activeProject === project.id
                                        ? 'bg-white/80 backdrop-blur-sm border-beePrimary-normal shadow-xll'
                                        : 'bg-white/60 backdrop-blur-sm border-gray-200 hover:border-beePrimary-light hover:shadow-lg hover:scale-100'
                                }`}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white shadow-lg`}>
                                        {project.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                                            <span className="px-2 py-1 bg-beePrimary-light/20 text-beePrimary-dark text-xs rounded-full font-medium">
                                                {project.category}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">{project.description}</p>
                                        
                                        {activeProject === project.id && (
                                            <div className="mt-4 space-y-3">
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map((tech, index) => (
                                                        <span key={index} className="px-3 py-1 bg-gradient-to-r from-beePrimary-light/20 to-beePrimary-normal/20 text-beePrimary-dark text-sm rounded-full font-medium">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        activeProject === project.id ? 'bg-beePrimary-normal scale-125' : 'bg-gray-300'
                                    }`}></div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Project Display */}
                    <div className="relative" data-aos="fade-left">
                        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                            {/* Project Image - Header do Card */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-beePrimary-normal/20 to-beePrimary-dark/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <Transition
                                    show={true}
                                    appear={true}
                                    enter="transition-all duration-500"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                >
                                    <div className="relative overflow-hidden">
                                        <Image
                                            src={currentProject.image}
                                            width={600}
                                            height={400}
                                            alt={currentProject.title}
                                            className="w-full h-82 object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex items-center space-x-2">
                                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${currentProject.gradient} flex items-center justify-center text-white`}>
                                                    {currentProject.icon}
                                                </div>
                                                <span className="text-white font-semibold">{currentProject.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Transition>
                            </div>

                            {/* Project Details */}
                            <div className="p-8 space-y-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentProject.title}</h3>
                                    
                                </div>

                                {/* Key Features */}
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Main Features</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {currentProject.features.map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-3 p-3 bg-beePrimary-light/10 rounded-xl">
                                                <div className="w-2 h-2 bg-beePrimary-normal rounded-full"></div>
                                                <span className="text-sm font-medium text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Floating decoration */}
                        <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-beePrimary-normal to-beePrimary-dark rounded-full flex items-center justify-center text-white shadow-lg">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}