import Image from "next/image";
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
    {/* navbar */}
      <Navbar />

        <main>
          {/* home section */}
          <section id="home" className="min-h-screen flex items-center justify-center px-8">
            <div className="max-w-3xl w-full">
              <div className="flex justify center mb-6 mt-10">
                <img 
                  src="/profile.png"
                  alt="Joseph France Image"
                  className="w-45 h-45 rounded-full mx-auto mb-4 object-cover border-2 border-gray-500 shadow-lg hover:scale-105 transition-transform duration-300 hover:border-gray-300"
                  />
              </div>

              <h1 className="text-6xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Joseph France
              </h1> 

              <div className="space-y-4">
                <div className="flex items-start gap-4 mb-6">
                  <svg className="w-6 h-6 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <p className="text-xl text-gray-300">
                    University of Missouri- Columbia
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 mb-6">
                  <svg className="w-6 h-6 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-xl text-gray-300">
                    Bachelor of Science in Computer Science with a Minor in Mathematics
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 mb-6">
                  <svg className="w-6 h-6 text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-xl text-gray-300">
                    Upsilon Pi Epsilon (CS Honors Society), Pi Kappa Phi Fraternity, Mizzou Computing Association, Best Buddies Program
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* about section */}
          <section id="about" className="min-h-screen flex items-center justify-center px-15">
            <div className="max-w-4xl mx-auto px-6 py-12 bg-zinc-900 rounded-lg border-2 border-gray-500 shadow-lg hover:scale-102 transition-transform duration-300 hover:border-gray-300">
              <h2 className="text-4xl mb-6 text-white-50 dark:text-white">About Me</h2>
              <p className="text-lg text-white-50 mb-4">
                FILL IN ABOUT ME
              </p>
            </div>
          </section>

          {/* projects section */}
          <section id="projects" className="min-h-screen flex items-center justify-center px-15">
            <div className="max-w-4xl mx-auto px-6 py-12 bg-zinc-900 rounded-lg border-2 border-gray-500 shadow-lg hover:scale-102 transition-transform duration-300 hover:border-gray-300">
              <h2 className="text-4xl mb-6 text-white-50 dark:text-white">Projects</h2>
              <p className="text-lg text-white-50 mb-4">
                FILL IN PROJECTS
              </p>
            </div>
          </section>

          {/* skills section */}
          <section id="skills" className="min-h-screen flex items-center justify-center px-15">
            <div className="max-w-4xl mx-auto px-6 py-12 bg-zinc-900 rounded-lg border-2 border-gray-500 shadow-lg hover:scale-102 transition-transform duration-300 hover:border-gray-300">
              <h2 className="text-4xl mb-6 text-white-50 dark:text-white">Technical Skills</h2>
              <p className="text-lg text-white-50 mb-4">
                FILL SKILLS
              </p>
            </div>
          </section>

          {/* contact section */}
          <section id="contact" className="min-h-screen flex items-center justify-center px-15">
            <div className="max-w-4xl mx-auto px-6 py-12 bg-zinc-900 rounded-lg border-2 border-gray-500 shadow-lg hover:scale-102 transition-transform duration-300 hover:border-gray-300">
              <h2 className="text-4xl mb-6 text-white-50 dark:text-white">Contact Me</h2>
              <p className="text-lg text-white-50 mb-4">
                FILL CONTACT INFO
              </p>
            </div>
          </section>
        </main>
    </>
  );
}
