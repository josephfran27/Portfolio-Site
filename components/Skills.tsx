'use client';

import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
                if (sectionRef.current) {
                    observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-12">
            <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-3xl sm:text-5xl mb-3 text-white-50 dark:text-white text-center font-bold">Technical Skills</h2>
                <div className="w-60 sm:w-80 h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent mx-auto mb-12"></div>

                {/* languages */}
                <h2 className="text-2xl sm:text-3xl mb-2 text-gray-400 text-center">Languages</h2>
                <div className="px-2 sm:px-4 py-6 bg-zinc-900 rounded-lg border-2 border-gray-700 shadow-lg hover:scale-101 transition-transform duration-300 hover:border-gray-500">
                    {/* sliding icons */}
                    <div className="relative overflow-hidden py-8">
                        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-gray-700 to-transparent z-10"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-gray-700 to-transparent z-10"></div>
                        
                        <div className={`flex ${isVisible ? 'animate-slide' : ''}`}>
                            <div className="flex gap-12 px-6">
                                {/* python */}
                                <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                    <img 
                                        src="/python.png"
                                        alt="Python Logo"
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                    />
                                    <span className="text-sm sm:text-base text-white-50">Python</span>
                                </div>
                                {/* java */}
                                <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                    <img 
                                        src="/java.png"
                                        alt="Java Logo"
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                    />
                                    <span className="text-sm sm:text-base text-white-50">Java</span>
                                </div>
                                {/* c */}
                                <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                    <img 
                                        src="/c.png"
                                        alt="C Logo"
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                    />
                                    <span className="text-sm sm:text-base text-white-50">C</span>
                                </div>
                                {/* javascript */}
                                <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                    <img 
                                        src="/javascript.png"
                                        alt="JavaScript Logo"
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                    />
                                    <span className="text-sm sm:text-base text-white-50">JavaScript</span>
                                </div>
                                {/* html */}
                                <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                    <img 
                                        src="/html.png"
                                        alt="HTML Logo"
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                    />
                                    <span className="text-sm sm:text-base text-white-50">HTML</span>
                                </div>
                                {/* css */}
                                <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                    <img 
                                        src="/css.png"
                                        alt="CSS Logo"
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                    />
                                    <span className="text-sm sm:text-base text-white-50">CSS</span>
                                </div>
                                {/* sql */}
                                <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                    <img 
                                        src="/sql.png"
                                        alt="SQL Logo"
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                    />
                                    <span className="text-sm sm:text-base text-white-50">SQL</span>
                                </div>
                            </div>

                            {/* duplicate for infinate loop look */}
                            <div className="flex gap-12 px-6">
                                {/* python */}
                                <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                    <img 
                                        src="/python.png"
                                        alt="Python Logo"
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                    />
                                    <span className="text-sm sm:text-base text-white-50">Python</span>
                                </div>
                                {/* java */}
                                <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                    <img 
                                        src="/java.png"
                                        alt="Java Logo"
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                    />
                                    <span className="text-sm sm:text-base text-white-50">Java</span>
                                </div>
                                {/* c */}
                                <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                    <img 
                                        src="/c.png"
                                        alt="C Logo"
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                    />
                                    <span className="text-sm sm:text-base text-white-50">C</span>
                                </div>
                                {/* javascript */}
                                <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                    <img 
                                        src="/javascript.png"
                                        alt="JavaScript Logo"
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                    />
                                    <span className="text-sm sm:text-base text-white-50">JavaScript</span>
                                </div>
                                {/* html */}
                                <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                    <img 
                                        src="/html.png"
                                        alt="HTML Logo"
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                    />
                                    <span className="text-sm sm:text-base text-white-50">HTML</span>
                                </div>
                                {/* css */}
                                <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                    <img 
                                        src="/css.png"
                                        alt="CSS Logo"
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                    />
                                    <span className="text-sm sm:text-base text-white-50">CSS</span>
                                </div>
                                {/* sql */}
                                <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                    <img 
                                        src="/sql.png"
                                        alt="SQL Logo"
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                    />
                                    <span className="text-sm sm:text-base text-white-50">SQL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* frameworks */}
                <h2 className="text-2xl sm:text-3xl mt-8 mb-2 text-gray-400 text-center">Frameworks Tools</h2>
                <div className="px-2 sm:px-4 py-20 bg-zinc-900 rounded-lg border-2 border-gray-700 shadow-lg hover:scale-101 transition-transform duration-300 hover:border-gray-500">
                    <div className="flex flex-wrap justify-center gap-12 sm:gap-22 items-center">
                        {/* React */}
                        <div className="flex flex-col items-center gap-2">
                            <img 
                                src="/react.png"
                                alt="React Logo"
                                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                            />
                            <span className="text-white-50 text-sm sm:text-base">React</span>
                        </div>
                        {/* Next.js */}
                        <div className="flex flex-col items-center gap-2">
                            <img 
                                src="/nextjs.png"
                                alt="Next.js Logo"
                                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                            />
                            <span className="text-white-50 text-sm sm:text-base">Next.js</span>
                        </div>
                        {/* FastAPI */}
                        <div className="flex flex-col items-center gap-2">
                            <img 
                                src="/fastapi.png"
                                alt="FastAPI Logo"
                                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                            />
                            <span className="text-white-50 text-sm sm:text-base">FastAPI</span>
                        </div>
                        {/* Tailwind */}
                        <div className="flex flex-col items-center gap-2">
                            <img 
                                src="/tailwind.svg"
                                alt="Tailwind Logo"
                                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                            />
                            <span className="text-white-50 text-sm sm:text-base">Tailwind Css</span>
                        </div>
                    </div>
                </div>

                {/* developer tools */}
                <h2 className="text-2xl sm:text-3xl mt-8 mb-2 text-gray-400 text-center">Developer Tools</h2>
                <div className="px-2 sm:px-4 py-20 bg-zinc-900 rounded-lg border-2 border-gray-700 shadow-lg hover:scale-101 transition-transform duration-300 hover:border-gray-500">
                    <div className="flex flex-wrap justify-center gap-16 sm:gap-22 items-center">
                        {/* Git */}
                        <div className="flex flex-col items-center gap-2">
                            <img 
                                src="/git.png"
                                alt="Git Logo"
                                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                            />
                            <span className="text-white-50 text-sm sm:text-base">Git</span>
                        </div>
                        {/* Eclipse */}
                        <div className="flex flex-col items-center gap-2">
                            <img 
                                src="/eclipse.png"
                                alt="Eclipse Logo"
                                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                            />
                            <span className="text-white-50 text-sm sm:text-base">Eclipse</span>
                        </div>
                        {/* IntelliJ */}
                        <div className="flex flex-col items-center gap-2">
                            <img 
                                src="/intellij.png"
                                alt="IntelliJ Logo"
                                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                            />
                            <span className="text-white-50 text-sm sm:text-base">IntelliJ</span>
                        </div>
                        {/* Vercel */}
                        <div className="flex flex-col items-center gap-2">
                            <img 
                                src="/vercel.png"
                                alt="Vercel Logo"
                                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                            />
                            <span className="text-white-50 text-sm sm:text-base">Vercel</span>
                        </div>
                        {/* VS Code */}
                        <div className="flex flex-col items-center gap-2">
                            <img 
                                src="/vscode.png"
                                alt="VS Code Logo"
                                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                            />
                            <span className="text-white-50 text-sm sm:text-base">VS Code</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;