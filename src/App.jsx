import React from 'react'
import {ScrollTrigger,SplitText} from 'gsap/all';
import { gsap } from 'gsap';
import NavBar from './components/navBar.jsx';
import Hero from './components/Hero.jsx';
import Cocktails from './components/cocktails.jsx';
import About from './components/about.jsx';
gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <main>
        <NavBar />
        <Hero /> 
        <Cocktails />
         <About />
    </main>
  )
}

export default App
