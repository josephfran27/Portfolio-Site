export default function Navbar() {
    return (
        <nav className='fixed top-4 left-1/2 -translate-x-1/2 bg-zinc-900/20 backdrop-blur-md border-2 border-gray-700 rounded z-50 shadow-lg'>
            <div className="px-8 py-3">
                    <div className="flex justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-14">
                        <a href="#home" className="text-lg text-gray-500 hover:scale-110 transition-transform duration-300 hover:text-gray-300 transition">
                            J.F.
                        </a>
                        <a href="#about" className="text-lg text-gray-500 hover:scale-110 transition-transform duration-300 hover:text-gray-300 transition">
                            About
                        </a>
                        <a href="#projects" className="text-lg text-gray-500 hover:scale-110 transition-transform duration-300 hover:text-gray-300 transition">
                            Projects
                        </a>
                        <a href="#skills" className="text-lg text-gray-500 hover:scale-110 transition-transform duration-300 hover:text-gray-300 transition">
                            Skills
                        </a>
                        <div className="px-1 bg-yellow-200 rounded border-2 border-yellow-600 shadow-lg hover:scale-101 transition-transform duration-300 hover:border-yellow-500">
                            <a href="#contact" className="text-lg text-gray-800 hover:scale-110 transition-transform duration-300 hover:text-gray-700 transition">
                                Contact
                            </a>
                        </div>
                    </div>
            </div>
        </nav>    
    );
}