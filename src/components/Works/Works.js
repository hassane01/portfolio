import React, { useEffect, useState } from 'react'
import AnimatedLetter from '../../Animation/AnimatedLetter'
import './Works.scss'
import CardWork from './CardWork'
import {data}  from '../../assets/Data/Workdata'
import WorkInfo from './WorkInfo' 
function Works() {
  const strarray = ['M','y',' ' , 'P','r','o','j','e','c','t','s'];
  const [letterclass, setletterclass] = useState('text-animation');
  const [Isdisplayed, setIsdisplayed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setletterclass('text-animation-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className='projects-container'>
        <h1 id='work-header'>
          <AnimatedLetter strarray={strarray} idx={15} letterclass={letterclass} />
        </h1>
        <div className='grid-cards'>
          {data.map((project, index) => (
            <CardWork
              Isdisplayed={Isdisplayed}
              setIsdisplayed={setIsdisplayed}
              key={index}
              project={project}
              
            />
          ))}
        </div>
      </div>

      
      {Isdisplayed && (
        <div className='project-info-wraper'>
          <WorkInfo Isdisplayed={Isdisplayed} setIsdisplayed={setIsdisplayed} />
        </div>
      )}
    </>
  );
}

export default Works

