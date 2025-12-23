export default function Home() {
    return (
        <nav className='fixed top-0 w-full bg-[#0a0a0a] border-b-2 border-gray-500 z-50'>
            <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex justify-center gap-13">
                        <a href="#about" className="text-1xl text-gray-500 hover:scale-110 transition-transform duration-300 hover:text-gray-300 transition">
                            About
                        </a>
                        <a href="#projects" className="text-1xl text-gray-500 hover:scale-110 transition-transform duration-300 hover:text-gray-300 transition">
                            Projects
                        </a>
                        <a href="#skills" className="text-1xl text-gray-500 hover:scale-110 transition-transform duration-300 hover:text-gray-300 transition">
                            Skills
                        </a>
                        <a href="#contact" className="text-1xl text-gray-500 hover:scale-110 transition-transform duration-300 hover:text-gray-300 transition">
                            Contact
                        </a>
                    </div>
            </div>
        </nav>    
    );
}