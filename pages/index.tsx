import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Work from '../components/Work';

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-scroll z-0 md:snap-y md:snap-mandatory text-white" style={{ backgroundColor: 'rgb(17, 24, 39)' }}>
      <Head>
        <title>TechyDNA - Front-end Developer | HTML, CSS, JavaScript, React JS, Next JS, Wordpress</title>
        <meta name="description" content="Front-end Developer - HTML, CSS, JavaScript, React JS, Next JS, Wordpress" />
      </Head>
      <Header />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home;
