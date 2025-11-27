import { useState } from 'react'
import './App.css'
import './animations/JapaneseStyles.css'

import Home from "./components/Home.jsx"
import Navbar from './components/Navbar.jsx'
import WhyLearnJapanese from './components/WhyLearnJapanese.jsx'
import HowItWorksPage from './components/HowItWorksPage.jsx'
import SpeakJapanesePage from './components/SpeakJapanesePage.jsx'
import StudentSuccessStories from './components/StudentSuccessStories.jsx'
import SakuraPetals from './animations/SakuraPetals.jsx'
import FAQSection from './components/FAQSection.jsx'
import ContactSection from './components/ContactSection.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Global Japanese Aesthetic Layers */}
    <div className="washi-texture" />
    <SakuraPetals />

    {/* Wind Lines Effect - Hidden on mobile */}
    <div className="hidden md:block fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="wind-line" style={{ left: '10%' }} />
      <div className="wind-line" style={{ left: '40%' }} />
      <div className="wind-line" style={{ left: '70%' }} />
    </div>
    
    <Navbar/>
     <Home/>
     <WhyLearnJapanese/>
     <HowItWorksPage/>
     <SpeakJapanesePage/>
     <StudentSuccessStories/>
     <FAQSection/>
     <ContactSection/>
    </>
  )
}

export default App
