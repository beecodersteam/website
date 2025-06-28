"use client";

import { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import { MusicalNoteIcon, PresentationChartBarIcon, ShieldCheckIcon, RectangleStackIcon, BoltIcon, TruckIcon } from "@heroicons/react/24/outline";
import { NL, BR, PT } from 'country-flag-icons/react/3x2';
import TeamPic1 from "@/public/images/projects/nitelive.jpeg";
import TeamPic2 from "@/public/images/projects/alfabets.jpeg";
import TeamPic3 from "@/public/images/projects/mm.jpeg";
import TeamPic4 from "@/public/images/projects/ajrent.png";

// Structured portfolio data
const portfolioProjects = [
    {
        id: 1,
        title: "Nitelive",
        category: "Entertainment",
        country: "Netherlands",
        countryFlag: <NL className="w-5 h-4" />,
        // description: "A mobile app to guide people to the best places to have fun in the city.",
        description: "Cross-platform mobile app with real-time location services that helps users discover the best venues and events in their city.",
        image: TeamPic1,
        technologies: ["Flutter", "Java", "Firebase", "Geolocation"],
        features: ["Real-time venue information", "Event discovery", "Social integration", "Location-based services"],
        icon: <MusicalNoteIcon className="w-6 h-6" />,
        gradient: "from-beePrimary-light to-beePrimary-normal"
    },
    {
        id: 4,
        title: "AJ Rent",
        category: "Mobility",
        country: "Portugal",
        countryFlag: <PT className="w-5 h-4" />,
        // description: "Application for a rent-a-car company with seamless booking experience.",
        description: "Web platform, featuring vehicle catalog, booking management, customer dashboard, and payment integration for a complete rental experience.",
        image: TeamPic4,
        technologies: ["React", "PHP", "REST API", "Payment Gateway"],
        features: ["Vehicle catalog", "Online booking", "Payment processing", "Customer dashboard"],
        icon: <TruckIcon className="w-6 h-6" />,
        gradient: "from-beePrimary-dark to-beePrimary-normal"
    },
    {
        id: 2,
        title: "Alfabets",
        category: "Sporting Bets",
        country: "Brazil",
        countryFlag: <BR className="w-5 h-4" />,
        // description: "A mobile app for managing betting houses operations in Brazil.",
        description: "A white labeled app for betting houses, featuring real-time integration with sports data apis.",
        image: TeamPic2,
        technologies: ["Flutter", "Ruby", "Firebase", "Geolocation"],
        features: ["White label app", "Analytics dashboard", "Real time results", "Security protocols"],
        icon: <PresentationChartBarIcon className="w-6 h-6" />,
        gradient: "from-beePrimary-normal to-beePrimary-dark"
    },
    {
        id: 3,
        title: "Mulher + Segura",
        category: "Social",
        country: "Brazil",
        countryFlag: <BR className="w-5 h-4" />,
        // description: "Protective system and application designed for women under protective measures.",
        description: "A safety platform that provides emergency assistance, location tracking, and support features for women in vulnerable situations.",
        image: TeamPic3,
        technologies: ["Flutter", "PHP", "Firebase", "Mercure", "Geolocation"],
        features: ["Emergency alerts", "Location tracking", "Support network", "Privacy protection"],
        icon: <ShieldCheckIcon className="w-6 h-6" />,
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
                        <RectangleStackIcon className="w-5 h-5 text-beePrimary-normal mr-2" />
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
                                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${activeProject === project.id
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
                                            <h3 className="text-xl font-bold text-gray-900">{project.title} </h3>
                                            <span className="px-2 py-1 bg-beePrimary-light/20 text-beePrimary-dark text-xs rounded-full font-medium">
                                                {project.category}
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2 mb-2">
                                            <div className="flex items-center space-x-1">
                                                {project.countryFlag}
                                                <span className="text-xs text-gray-600">{project.country}</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">{project.description}</p>

                                        {activeProject === project.id && (
                                            <div className="mt-4">
                                                {/* Technologies removed from here */}
                                            </div>
                                        )}
                                    </div>
                                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${activeProject === project.id ? 'bg-beePrimary-normal scale-125' : 'bg-gray-300'
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
                                <div className="absolute inset-0 bg-gradient-to-r from-beeSecondary-normal/20 to-beeSecondary-dark/20 blur opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
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
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold text-gray-900">{currentProject.title}</h3>
                                        <div className="flex items-center space-x-2 px-3 py-1 bg-gray-50 rounded-full">
                                            <div className="flex-shrink-0">{currentProject.countryFlag}</div>
                                            <span className="text-sm text-gray-600 font-medium">{currentProject.country}</span>
                                        </div>
                                    </div>
                                    {/* <p className="text-gray-600 leading-relaxed mb-4">{currentProject.fullDescription}</p> */}
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h4>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {currentProject.technologies.map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-gradient-to-r from-beePrimary-light/20 to-beePrimary-normal/20 text-beePrimary-dark text-sm rounded-full font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
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
                            <BoltIcon className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}