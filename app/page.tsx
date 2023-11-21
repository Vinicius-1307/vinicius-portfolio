'use client'

import AboutComponent from './components/AboutComponent';
import MyKnowAges from './components/MyKnowAges';
import Header from './components/HeaderComponent';
import Footer from './components/Footer';

export default function Home() {

  return (
    <main className="min-h-screen">
        <Header/>
        <MyKnowAges/>
        <AboutComponent/>
        <Footer/>
    </main >
  )
}
