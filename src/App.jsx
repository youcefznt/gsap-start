import React from 'react'
import {ScrollTrigger,SplitText} from 'gsap/all';
import { gsap } from 'gsap';
import NavBar from './components/navBar.jsx';
import Hero from './components/Hero.jsx';
import Cocktails from './components/cocktails.jsx';
import About from './components/about.jsx';
import Art from './components/Art.jsx';
gsap.registerPlugin(ScrollTrigger,SplitText);
import './index.css'
const App = () => {
  return (
    <main>
        <NavBar />
        <Hero /> 
        <Cocktails />
         <About />
         <Art />
    </main>
  )
}

export default App
