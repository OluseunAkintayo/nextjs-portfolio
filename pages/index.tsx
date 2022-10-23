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
    <div className="h-screen overflow-scroll z-0 snap-y snap-mandatory text-white" style={{ backgroundColor: 'rgb(17, 24, 39)' }}>
      <Head>
        <title>TechyDNA - Front-end Developer | HTML, CSS, JavaScript, React JS, Next JS, Wordpress</title>
        <meta name="description" content="Front-end Developer - HTML, CSS, JavaScript, React JS, Next JS, Wordpress" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,700&family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet" />
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
