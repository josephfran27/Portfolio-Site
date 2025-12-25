export default function HomePg() {
    return (
        <section id="home" className="min-h-screen flex justify-center items-center px-8">
            <div className="max-w-3xl w-full">
                <h2 className="text-2xl sm:text-3xl font-200 text-yellow-200 mb-3 sm:mb-4 fade-in">
                    Hello there! I'm-
                </h2> 
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white-50 mb-8 sm:mb-12 fade-in fade-in-delay-1">
                    Joseph France
                </h1> 
                {/* school section */}
                <div className="space-y-4 fade-in fade-in-delay-2">
                    <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-10">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                        <p className="text-base sm:text-xl text-gray-400">
                            University of Missouri- Columbia
                        </p>
                    </div>
                </div>

                {/* education section */}
                <div className="space-y-4 fade-in fade-in-delay-3">
                    <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-10">
                        <svg className="w-6 h-6 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="text-base sm:text-xl text-gray-400">
                            Bachelor of Science in Computer Science with a Minor in Mathematics
                        </p>
                    </div>
                </div>

                {/* organizations section */}
                <div className="space-y-6 fade-in fade-in-delay-4">
                    <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-10">
                        <svg className="w-6 h-6 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <p className="text-base sm:text-xl text-gray-400">
                            Upsilon Pi Epsilon (CS Honors Society), Pi Kappa Phi Fraternity, Mizzou Computing Association, Best Buddies Program
                        </p>
                    </div>
                </div>

                {/* social buttons section */}
                <div className="flex flex-wrap gap-3 sm:gap-6 mt-6 sm:mt-8 fade-in fade-in-delay-5">
                    {/* resume download button */}
                    <a  
                        href="/France_Resume_25.pdf"
                        download
                        className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-zinc-900 text-white-50 rounded border-2 border-gray-700 shadow-lg hover:scale-101 transition-transform duration-300 hover:border-gray-500 text-sm sm:text-base"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Resume</span>
                    </a>

                    {/* email button */}
                    <a  
                        href="mailto:joefrance634@gmail.com"
                        className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-zinc-900 text-white-50 rounded border-2 border-gray-700 shadow-lg hover:scale-101 transition-transform duration-300 hover:border-gray-500 text-sm sm:text-base"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Email</span>               
                    </a> 
            
                    {/* linkedin button */}
                    <a  
                        href="https://www.linkedin.com/in/joseph-france-4b5b7a2ab/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-zinc-900 text-white-50 rounded border-2 border-gray-700 shadow-lg hover:scale-101 transition-transform duration-300 hover:border-gray-500 text-sm sm:text-base"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-200" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span>LinkedIn</span>               
                    </a> 

                    {/* github button */}
                    <a  
                        href="https://github.com/josephfran27"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-zinc-900 text-white-50 rounded border-2 border-gray-700 shadow-lg hover:scale-101 transition-transform duration-300 hover:border-gray-500 text-sm sm:text-base"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-200" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        <span>GitHub</span>               
                    </a> 
                </div>
            </div>
        </section>
    );
};
