import {useGSAP} from '@gsap/react'
import {ScrollTrigger,SplitText} from 'gsap/all';
import { gsap } from 'gsap';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
const Hero = () => {
  const videoRef=useRef();
  const isMobile =useMediaQuery({maxWidth: 768});
 useGSAP(() => {
  const HeroSplit = new SplitText('.title', {type:'words,chars'})
  const ParagrapheSplit = new SplitText('.subtitle', {type:'lines'})
  HeroSplit.chars.forEach((char) => char.classList.add('text-gradiant'))
  gsap.from(HeroSplit.chars,{
    yPercent:100,
    duration:1.8,
    ease:'expo.out',
    stagger:0.05
  })
  gsap.from(ParagrapheSplit.lines,{
    opacity:0,
    yPercent:100,
    duration:1.8,
    ease:'expo.out',
    stagger:0.06,
    delay:1
  })
  gsap.timeline({
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  })
  .to('.left-leaf', { y: -200 }, 0)
  .to('.right-leaf', { y: 200 }, 0)
  const StartValue = isMobile ? "top 50%" : "center 60%";
  const EndValue = isMobile ? "120% top" : "bottom top";
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: 'video',
      start: StartValue,
      end: EndValue,
      scrub: 1,
      pin: true,
      
      // markers:true
    }
  })
  videoRef.current.onloadedmetadata = () => {
    tl.to(videoRef.current, {
      currentTime: videoRef.current.duration,
      ease: 'none'
    })
  }
 }, [])
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img src="/images/hero-left-leaf.png" alt="" className="left-leaf"/>
        <img src="/images/hero-right-leaf.png" alt="" className="right-leaf"/>
        <div className="body">
            <div className="content">
                <div className="space-y-5  hidden   md:block">
                    <p>Cool   .Crisp .Classic       
                                     </p>
                    <p className="subtitle">
                        sip the spirit <br /> of summer
                    </p>
                </div>
                <div className="view-cocktails">
                    <p className="subtitle">Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. 
                    </p>
                    <a href="#cocktails">View Cocktails</a>

                </div>

            </div>

        </div>
      </section>
      <div className='video absolute inset-0'>
<video ref={videoRef} src="/videos/output.mp4" muted playsInline preload='auto'/>
      </div>
    </>
  )
}

export default Hero