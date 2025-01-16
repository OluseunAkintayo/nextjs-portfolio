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
import { Analytics } from '@vercel/analytics/next';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>TechyDNA - Software Developer | JavaScript, Typescript, C#</title>
        <meta name="description" content="Software Developer - JavaScript, Typescript, React, C#, Wordpress" />
        <meta name="google-site-verification" content="Amvuj9UHCMR39j9MHtT_YCrSC_zQSdqSjLflP4sG4ds" />
        <link rel="shortcut icon" href="/icons/logo.svg" />
      </Head>
      <div className="h-screen overflow-scroll scroll-smooth z-0 lg:snap-y lg:snap-mandatory text-white" style={{ backgroundColor: 'rgb(17, 24, 39)' }}>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <BackToTop />
      </div>
      <Analytics />
    </React.Fragment>
  )
}

export default Home;
