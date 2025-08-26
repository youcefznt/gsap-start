import { cocktailLists, mockTailLists } from "../../constants"
import { gsap } from 'gsap';
import {useGSAP} from '@gsap/react'
const Cocktails = () => {
    useGSAP(() => {
        const paraloxTimeline=gsap.timeline({
            scrollTrigger:{
                trigger:'#cocktails',
                start:'top 30%',
                end:'bottom 80%',
                scrub:1,
                // markers:true
            }
        })
        paraloxTimeline.from('#c-left-leaf',{x:-100,y:100})
        .from('#c-right-leaf',{x:100,y:100},)
    }, [])
  return (
    <section id="cocktails" className="noisy">
        <img src="/images/cocktail-left-leaf.png" alt="" id="c-left-leaf" />
        <img src="/images/cocktail-right-leaf.png" alt="" id="c-right-leaf" />
        <div className="list">
            <div className="popular">
                <h2>Most Popular cocktails</h2>
                <ul>
                    {cocktailLists.map(({name,country,detail,price})=>(
                        <li key={name}>
                            <div className="me-28">
                                 <h3 >{name}</h3>
                                    <p>{country}</p>
                                    <p>{detail}</p>
                            </div>
                            <span> -{price}</span>

                        </li>
                    ))}
                </ul>
            </div>
            <div className="loved">
                <h2>Most loved mocktails:</h2>
                <ul>
                    {mockTailLists.map(({name,country,detail,price})=>(
                        <li key={name}>
                            <div className="me-28">
                                 <h3 >{name}</h3>
                                    <p>{country}</p>
                                    <p>{detail}</p>
                            </div>
                            <span> -{price}</span>

                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </section>
  )
}

export default Cocktails