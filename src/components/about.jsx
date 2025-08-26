import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText)

const About = () => {
  useGSAP(() => {
    // Split the title into words
    const titleSplit = new SplitText('#about h2', { type: 'words' })

    const ScrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top center',
        // markers: true
      }
    })

    // Animate title words
    ScrollTimeline.from(titleSplit.words, {
      yPercent: 100,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.02,
      opacity: 0
    })

    // Animate grid images
    ScrollTimeline.from(
      ['.top-grid div', '.bottom-grid div'], // ✅ separate selectors
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.04
      },
      '-=0.5' // overlap with title animation
    )
  }, [])

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best cocktails</p>
            <h2>
              where every detail matters <span className="text-white">-</span> from muddle to garnish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with detail — from the first
              muddle to the final garnish. That care is what turns a simple drink into something
              truly memorable.
            </p>
          </div>
          <div>
            <p className="md:text-4xl text-xl font-bold">
              <span>4.5</span>/5
            </p>
            <p className="text-sm text-white-100">More than 12000 customers</p>
          </div>
        </div>
      </div>

      {/* Top Grid */}
      <div className="top-grid grid grid-cols-12 gap-4">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="about-1" />
        </div>
        <div className="md:col-span-6">
          <div className="noisy" />
          <img src="/images/abt2.png" alt="about-2" />
        </div>
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="about-3" />
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="bottom-grid grid grid-cols-12 gap-4 mt-8">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="about-4" />
        </div>
        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="about-5" />
        </div>
      </div>
    </div>
  )
}

export default About
