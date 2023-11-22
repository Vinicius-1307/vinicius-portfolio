'use client'

import AboutComponent from './components/AboutComponent';
import MyKnowAges from './components/MyKnowAges';
import Header from './components/HeaderComponent';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SocialMediaComponent from './components/SocialMediaComponent';
import EmailComponent from './components/EmailComponent';

export default function Home() {

  return (
    <main className="min-h-screen relative">
      <SocialMediaComponent/>
      <EmailComponent/>
      {/* <Navbar/> */}
      <Header/>
      <MyKnowAges/>
      <AboutComponent/>
      <Footer/>
    </main>
  )
}
