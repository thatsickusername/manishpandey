import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Animation() {

    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{

        gsap.from('.HeroTextWrapper',{
            opacity: 0,
            duration: 0.7,
            y: 20,
        })

        gsap.from('.AboutMeContainer', {
            scrollTrigger: '.AboutMeContainer',
            opacity: 0,
            y: 40,
            scale: 0.9,
            duration: 1
        })

        gsap.from('.SkillsTextWrapper', {
            scrollTrigger: '.SkillsTextWrapper',
            opacity: 0,
            y: 40,
            scale: 0.9,
            duration: 1
        })

        gsap.from('.ProjectsContainer', {
            scrollTrigger: '.ProjectsContainer',
            opacity: 0,
            y: 40,
            scale: 0.9,
            duration: 1
        })

        gsap.from('.ProjectIdeaContainer h2', {
            scrollTrigger: '.ProjectIdeaContainer h2',
            opacity: 0,
            y: 40,
            scale: 0.9,
            duration: 1
        })

        gsap.from('.PhoneOverlay', {
            scrollTrigger: '.PhoneOverlay',
            stagger: 0.5,
            opacity: 0,
            y: 40,
            scale: 0.9,
            duration: 0.7
        })

        gsap.from('.ContactMeContainer ', {
            scrollTrigger: '.ContactMeContainer ',
            opacity: 0,
            y: 40,
            scale: 0.9,
            duration: 1
        })


        



    },[])

}

export default Animation;