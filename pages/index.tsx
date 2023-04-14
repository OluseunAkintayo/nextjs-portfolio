import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import BackToTop from '../components/BackToTop';
import About from '../components/Home/About';
import Header from '../components/Home/Header';
import Hero from '../components/Home/Hero';
import Projects from '../components/Home/Projects';
import Services from '../components/Home/Services';
import Skills from '../components/Home/Skills';


const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>TechyDNA - Front-end Developer | HTML, CSS, JavaScript, React JS, Next JS, Wordpress</title>
        <meta name="description" content="Front-end Developer - HTML, CSS, JavaScript, React JS, Next JS, Wordpress" />
        <link rel="shortcut icon" href="/icons/logo.svg" />
      </Head>
      <div className="h-screen overflow-scroll scroll-smooth z-0 md:snap-y md:snap-mandatory text-white" style={{ backgroundColor: 'rgb(17, 24, 39)' }}>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <BackToTop />
      </div>
      {/* <div className="h-screen overflow-y-auto scroll-smooth z-0 text-white" style={{ backgroundColor: 'rgb(17, 24, 39)' }}>
      </div> */}
    </React.Fragment>
  )
}

export default Home;
