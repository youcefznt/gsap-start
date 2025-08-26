import React from 'react'
import { NavLinks } from '../../constants'
import {useGSAP} from '@gsap/react'
import {gsap} from 'gsap'

const NavBar = () => {
  useGSAP(() => {
    const navTween=gsap.timeline({
      scrollTrigger:{
        trigger:'nav',
        start:'bottom top',
      }
    })
    navTween.fromTo('nav',{
      backgroundColor:'transparent'}, 
      {backgroundColor:'rgba(0,0,0,0.5)',
        duration:0.3,
        ease:'power1.inOut',
        backdropFilter:'blur(10px)'
      }
    )
  }, [])
  return (
    <nav>
        <div>
            <a href="#home" className='flex item-center gap-2'>
                <img src="/images/logo.png" alt="logo" className='w-8 h-8 object-contain'/>
                <p>Velvet Pour</p>

            </a>
            <ul>
                {NavLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                )) }
            </ul>
        </div>
    </nav>
  )
}

export default NavBar