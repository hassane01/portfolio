import React, { useEffect, useState } from 'react'
import logos from '../../assets/images/fullversion.png'
import Loader from 'react-loaders'
import '../home/Home.scss'
import { Link } from 'react-router-dom'
import AnimatedLetter from '../../Animation/AnimatedLetter'
import Logo from './Logo/Logo'
function Home() {
  const [letterclass , setletterclass] = useState('text-animation')
  const nameArray = ['a','s','s','a','n','e']
  const jobArray = ['F','r','o','n','t','-','e','n','d' , ' ','D','e','v','e','l','o','p','e','r']
  useEffect(()=>{
    return setTimeout(()=>{
      setletterclass('text-animation-hover')
    },4000)
  },[])
  return (
    <>
    <div className='container home-page'>
        <div className='home-text-zone'>
            <h1>
              <span className={letterclass}>H</span>
              <span className={`${letterclass} _12`}>i,</span>
              
              
              <br/>
              <div className='name-container' >
              <span className={`${letterclass} _13`}> I</span>
              <span className={`${letterclass} _14`}>'m</span>
            <img id='letimg' src={logos}/>
            <AnimatedLetter letterclass={letterclass} strarray={nameArray} idx={15}/> 
            </div>
            <br/>
             <AnimatedLetter letterclass={letterclass} strarray={jobArray} idx={15}/>
             </h1>
            <h2>JavasScript / React ...</h2>
            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
      <Logo/>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Home
