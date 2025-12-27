export default function Projects() {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-12">
            <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-3xl sm:text-5xl mb-3 text-white-50 dark:text-white text-center font-bold">Projects</h2>
                <div className="w-60 sm:w-80 h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent mx-auto mb-3"></div>

                {/* project container */}
                <div className="flex flex-wrap gap-6 sm:gap-8 justify-center mx-auto w-full">

                    {/* project 1 */}
                    <div className="flex-1 min-w-full lg:min-w-[450px] px-6 sm:px-8 py-6 bg-zinc-900 rounded-lg border-2 border-gray-700 shadow-lg hover:scale-101 transition-transform duration-300 hover:border-gray-500">
                        <h3 className="text-xl sm:text-2xl font-bold text-white-50 text-center mb-3">Budgeting Buddy</h3>
                        <p className="text-base sm:text-lg text-white-50 mb-4">
                            A personal finance tracker that helps users manage their budgets, track expenses, and visualize spending patterns through interactive charts.
                        </p>
                        <p className="text-base sm:text-lg text-gray-400 mb-4">
                            •   Implemented real-time income and expense calculations with form validation and dynamic DOM manipulation to ensure accurate and responsive financial tracking.
                        </p>
                        <p className="text-base sm:text-lg text-gray-400 mb-4">
                            •   Designed a multi-section, responsive interface (Home, Dashboard, Budget, Savings) focused on usability and clear visualization of spending patterns.
                        </p>
                        <p className="text-base sm:text-lg text-gray-400 mb-4">
                            •   Integrated Chart.js to render dynamic, data-driven charts that update in real time based on user input.
                        </p>
                        {/* stack icons */}
                        <div className="flex flex-wrap gap-4 mb-6 justify-center">
                            <img 
                                src="/html.png"
                                alt="HTML Logo"
                                className="w-14 h-14 sm:w-16 sm:h-16 object-contain hover:scale-115 transition-transform duration-300"
                            />
                            <img 
                                src="/css.png"
                                alt="CSS Logo"
                                className="w-14 h-14 sm:w-16 sm:h-16 object-contain hover:scale-115 transition-transform duration-300"
                            />
                            <img 
                                src="/javascript.png"
                                alt="JavaScript Logo"
                                className="w-14 h-14 sm:w-16 sm:h-16 object-contain hover:scale-115 transition-transform duration-300"
                            />
                        </div>
                        <div className="text-gray-400 italic text-sm sm:text-base mb-4 text-center">May 2025 - Present</div>
                        {/* github link */}
                        <div className="flex gap-3 justify-center">
                            <a 
                                href="https://github.com/josephfran27/Budgeting-Buddy" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-200 hover:text-yellow-300 hover:text-yellow-300 hover:scale-105 transition-transform duration-300 text-sm sm:text-base">GitHub →</a>
                        </div>
                    </div>

                    {/* project 2 */}
                    <div className="flex-1 min-w-full lg:min-w-[450px] px-6 sm:px-8 py-6 bg-zinc-900 rounded-lg border-2 border-gray-700 shadow-lg hover:scale-101 transition-transform duration-300 hover:border-gray-500">
                        <h3 className="text-xl sm:text-2xl font-bold text-white-50 text-center mb-3">Pollen Data Tracker</h3>
                        <p className="text-base sm:text-lg text-white-50 mb-4">
                            A web application that delivers real-time pollen and allergen insights based on user location to support informed daily health decisions.
                        </p>
                        <p className="text-base sm:text-lg text-gray-400 mb-4">
                            •   Built a web application using Python (FastAPI) and React to retrieve, process, and display real-time pollen and allergen data.
                        </p>
                        <p className="text-base sm:text-lg text-gray-400 mb-4">
                            •   Implemented geolocation support and manual coordinate input in the React frontend to improve location accuracy and user control.
                        </p>
                        <p className="text-base sm:text-lg text-gray-400 mb-4">
                            •   Integrated Google's Pollen API in a FastAPI backend, parsing JSON responses and transforming raw data into clear pollen categories and actionable recommendations.
                        </p>
                        {/* stack icons */}
                        <div className="flex flex-wrap gap-4 mb-4 justify-center">
                            <img 
                                src="/python.png"
                                alt="Python Logo"
                                className="w-14 h-14 sm:w-16 sm:h-16 object-contain hover:scale-115 transition-transform duration-300"
                            />
                            <img 
                                src="/fastapi.png"
                                alt="FastAPI Logo"
                                className="w-14 h-14 sm:w-16 sm:h-16 object-contain hover:scale-115 transition-transform duration-300"
                            />
                            <img 
                                src="/react.png"
                                alt="react Logo"
                                className="w-14 h-14 sm:w-16 sm:h-16 object-contain hover:scale-115 transition-transform duration-300"
                            />
                        </div>
                        <div className="text-gray-400 italic text-sm sm:text-base mb-4 text-center">August 2025</div>
                        {/* github link */}
                        <div className="flex gap-3 justify-center">
                            <a 
                                href="https://github.com/josephfran27/Seasonal-Allergy-Data" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-200 hover:text-yellow-300 hover:scale-115 transition-transform duration-300 text-sm sm:text-base">GitHub →</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}