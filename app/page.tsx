'use client'

import AboutComponent from './components/AboutComponent';
import MyKnowAges from './components/MyKnowAges';
import Header from './components/HeaderComponent';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {

  return (
    <main className="min-h-screen">
        {/* <Navbar/> */}
        <Header/>
        <MyKnowAges/>
        <AboutComponent/>
        <Footer/>
    </main >
  )
}
