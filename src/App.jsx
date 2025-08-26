import React from 'react'
import {ScrollTrigger,SplitText} from 'gsap/all';
import { gsap } from 'gsap';
import NavBar from './components/navBar.jsx';
import Hero from './components/Hero.jsx';
import Cocktails from './components/cocktails.jsx';
gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <main>
        <NavBar />
        <Hero /> 
        <Cocktails />
    </main>
  )
}

export default App
