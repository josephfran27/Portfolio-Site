import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      
      <div className="text-center">
        <img 
          src="/profile.png"
          alt="Joseph France Image"
          className="w-45 h-45 rounded-full mx-auto mb-6 object-cover border-2 border-gray-500 shadow-sm"
          />
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white sm:text-5xl">Joseph France</h1> 
        <p className="text-xl text-gray-400">
          University of Missouri-Columbia
        </p>
      </div>
    </main>
  );
}
