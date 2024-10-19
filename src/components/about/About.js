import React, { useEffect, useState } from 'react';
import AnimatedLetter from '../../Animation/AnimatedLetter';
import { Loader } from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact, 
} from '@fortawesome/free-brands-svg-icons';
import './About.scss';
import Timeline from './Timeline';

function About() {
    const Abouttitle = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e'];
    const [letterclass, setletterclass] = useState('text-animation');
    const strarray = ['F','o','r','m','a','t','i','o','n']

  useEffect(()=>{
    setTimeout(()=>{
        setletterclass('text-animation-hover')
    },3000)
  },[])

    useEffect(() => {
        setTimeout(() => {
            setletterclass('text-animation-hover');
        }, 3000);
    }, []);

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetter letterclass={letterclass} strarray={Abouttitle} idx={15} />
                    </h1>
                    <p>
                        I'm a very ambitious front-end developer looking for a role in an
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <p align="LEFT">
                        I'm quite confident, naturally curious, and perpetually working on
                        improving my chops one design problem at a time.
                    </p>
                    <p>
                        If I need to define myself in one sentence, that would be a family
                        person, father of a beautiful daughter, a sports fanatic,
                        photography enthusiast, and tech-obsessed!!!
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubspinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                        </div>
                    </div>
                </div>
            </div>
                <div className='timeline-wrap'>
                <h1 >
      <AnimatedLetter strarray={strarray} letterclass={letterclass} idx={15}/>
      </h1>
                <Timeline />
            </div>
          
            <Loader type='pacman' />
        </>
    );
}

export default About;
