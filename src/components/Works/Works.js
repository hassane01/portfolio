import React, { useEffect, useState } from 'react';
import AnimatedLetter from '../../Animation/AnimatedLetter';
import './Works.scss';
import CardWork from './CardWork';
import { data } from '../../assets/Data/Workdata';
import WorkInfo from './WorkInfo';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
function Works() {
  const { t } = useTranslation();
  const strarray = ['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's'];
  const [letterclass, setletterclass] = useState('text-animation');
  const [Isdisplayed, setIsdisplayed] = useState(false);
  useEffect(() => {
    const handleLanguageChange = () => {
      setIsdisplayed(false); // or any other state reset if needed
    };
    
    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);
  
  useEffect(() => {
    setTimeout(() => {
      setletterclass('text-animation-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="projects-container">
        <h1 id="work-header">
          <AnimatedLetter strarray={strarray} idx={15} letterclass={letterclass} />
        </h1>
        <div className="grid-cards">
          {data.map((project) => (
            <CardWork
              Isdisplayed={Isdisplayed}
              setIsDisplayed={setIsdisplayed}
              key={project.id}
              project={project} // Pass the project directly
              t={t} // Pass the translation function
            />
          ))}
        </div>
      </div>

      {Isdisplayed && (
        <div className="project-info-wraper">
          <WorkInfo Isdisplayed={Isdisplayed} setIsdisplayed={setIsdisplayed} />
        </div>
      )}
    </>
  );
}

export default Works;
