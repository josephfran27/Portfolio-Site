import Image from "next/image"
import FadeIn from '@/components/FadeIn'
import Navbar from '@/components/Navbar'
import HomePg from '@/components/HomePg'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
      <Navbar />
        <main className="pt-14">
          {/* home section */}
          <HomePg />

          {/* about section */}
          <FadeIn>
            <About />
          </FadeIn>

          {/* projects section */}
          <FadeIn>
            <Projects />
          </FadeIn>
          {/* skills section */}
          <FadeIn>
            <Skills />
          </FadeIn>

          {/* contact section */}
          <FadeIn>
            <Contact />
          </FadeIn>
          
          {/* footer */}
          <Footer />
        </main>
    </>
  );
}
