export default function Footer() {
    return (
        <footer className="w-full py-6 bg-black border-t-2 border-gray-700 mt-12">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-sm sm:text-base text-gray-500">
                    &copy; {new Date().getFullYear()} Joseph France
                </p>
                <p className="text-sm sm:text-base text-gray-500">
                    Built with Next.js, React, and Tailwind CSS
                </p>
            </div>
        </footer>
    )
}