export default function Contact() {
    return (
        <section id="contact" className="flex items-center justify-center px-4 sm:px-8 py-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-5xl mb-3 text-white-50 dark:text-white text-center font-bold">Get In Touch</h2>
                <div className="w-60 sm:w-80 h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent mx-auto mb-8"></div>
                <h2 className="text-center sm:text-xl text-yellow-200 mb-3 max-w-4xl mx-auto sm:mb-4 fade-in">
                    I'd love to hear from you! Whether you have a question, want to discuss opportunities, or just want to say hello, feel free to reach out.'
                </h2>

                {/* links */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 fade-in fade-in-delay-5">

                    {/* email button */}
                    <a  
                        href="mailto:joefrance634@gmail.com"
                        className="flex items-center justify-center gap-2 px-3 py-4 sm:px-4 sm:py-5 bg-zinc-900 text-white-50 rounded border-2 border-gray-700 shadow-lg hover:scale-101 transition-transform duration-300 hover:border-gray-500 text-sm sm:text-base w-64 sm:w-72"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>joefrance634@gmail.com</span>               
                    </a> 

                    {/* resume download button */}
                    <a  
                        href="/France_Resume_2025.pdf"
                        download
                        className="flex items-center justify-center gap-2 px-3 py-4 sm:px-4 sm:py-5 bg-zinc-900 text-white-50 rounded border-2 border-gray-700 shadow-lg hover:scale-101 transition-transform duration-300 hover:border-gray-500 text-sm sm:text-base w-64 sm:w-72"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Download Resume</span>
                    </a>

                    {/* linkedin button */}
                    <a  
                        href="https://www.linkedin.com/in/joseph-france-4b5b7a2ab/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3 py-4 sm:px-4 sm:py-5 bg-zinc-900 text-white-50 rounded border-2 border-gray-700 shadow-lg hover:scale-101 transition-transform duration-300 hover:border-gray-500 text-sm sm:text-base w-64 sm:w-72"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span>LinkedIn</span>               
                    </a>
                </div>
                <a 
                    href="#home" 
                    className="mt-28 flex items-center justify-center mx-auto w-fit text-sm sm:text-base text-gray-500 hover:text-gray-300 hover:scale-110 transition-transform duration-300">
                    Back to Top ↑ 
                </a>
            </div>    
        </section>
    )
}