import React from 'react'
import {ScrollTrigger,SplitText} from 'gsap/all';
import { gsap } from 'gsap';
import NavBar from './components/navBar.jsx';
gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <main>
        <NavBar />
    </main>
  )
}

export default App
