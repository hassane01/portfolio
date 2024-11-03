import React, { useEffect, useState } from 'react';
import AnimatedLetter from '../../Animation/AnimatedLetter';
import { Loader } from 'react-loaders';
import { RiTailwindCssFill } from "react-icons/ri";
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
import { useTranslation } from 'react-i18next';

function About() {
    const {t } = useTranslation()
    const Abouttitle = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e'];
    const [letterclass, setletterclass] = useState('text-animation');
    const strarray = ['F', 'o', 'r', 'm', 'a', 't', 'i', 'o', 'n']

    useEffect(() => {
        setTimeout(() => {
            setletterclass('text-animation-hover')
        }, 3000)
    }, [])

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
                        {t('about.introduction1')}
                    </p>
                    <p align="LEFT">
                        {t('about.introduction2')}
                    </p>
                    <p>
                        {t('about.introduction3')}
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
                        <RiTailwindCssFill color='#38BDF8'  />
                        </div>
                    </div>
                </div>
            </div>
            <div className='timeline-wrap'>
                <h1 >
                    <AnimatedLetter strarray={strarray} letterclass={letterclass} idx={15} />
                </h1>
                <Timeline />
            </div>

            <Loader type='pacman' />
        </>
    );
}

export default About;
