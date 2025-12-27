export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-5xl mb-3 text-white-50 dark:text-white text-center font-bold">About Me</h2>
                <div className="w-60 sm:w-80 h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent mx-auto mb-3"></div>

                <div className="px-2 sm:px-4 py-6 bg-zinc-900 rounded-lg border-2 border-gray-700 shadow-lg hover:scale-101 transition-transform duration-300 hover:border-gray-500">
                    <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
                        <div className="flex-1">
                            <p className="text-base sm:text-lg text-white-50 mb-4">
                                I'm a Computer Science student at the University of Missouri who is passionate about
                                building innovative solutions to real-world problems. 
                            </p>
                            <p className="text-base sm:text-lg text-white-50 mb-4">
                                I enjoy improving my skills through hands-on projects, like personal finance trackers and clinic
                                management systems that blend practical functionality with cutting-edge technology. 
                            </p>
                            <p className="text-base sm:text-lg text-white-50 mb-4">
                                Beyond coding, I work as a Leasing Agent at Article Student Living and stay active through my hobbies
                                in fitness and nutrition.
                            </p>
                        </div>
                        <div className="flex-1 w-full md:w-auto">
                            <img 
                                src="/profile.png"
                                alt="Joseph France Image"
                                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full mx-auto object-cover border-2 border-gray-500 shadow-lg hover:scale-105 transition-transform duration-300 hover:border-gray-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}