import Image from "next/image";
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <img 
              src="/profile.png"
              alt="Joseph France Image"
              className="w-45 h-45 rounded-full mx-auto mb-4 object-cover border-2 border-gray-500 shadow-lg hover:scale-105 transition-transform duration-300 hover:border-gray-300"
              />
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white sm:text-5xl">Joseph France</h1> 
            <p className="text-xl text-gray-600">
              University of Missouri-Columbia
            </p>
          </div>
        </main>
    </>
  );
}
