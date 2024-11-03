import React from 'react';
import '../Works/Works.scss';
import { GiCancel } from "react-icons/gi";
import { Link, useParams } from 'react-router-dom';
import { data } from '../../assets/Data/Workdata';
import { FaPlayCircle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

function WorkInfo({ Isdisplayed, setIsdisplayed }) {
  const { id } = useParams();
  const project = data.find(proj => proj.id === parseInt(id)); // Correctly find the project
  const { t } = useTranslation();

  return (
    <div className='work-info'>
      <GiCancel className='close-icn' onClick={() => setIsdisplayed(prev => !prev)} />
      <div className='gif-container' style={{
        borderTopRightRadius: '20px',
        borderTopLeftRadius: '20px',
        backgroundImage: `url(${project.gif})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      </div>
      <div className='info-data'>
        <div className='proj-descrpt'>
          <p>{t(`projects.${project.description}`)}</p> {/* Translated description */}
        </div>
        <div className='proj-link'>
          <Link target="_blank" to={project.demolink}>
            <button><FaPlayCircle /> View Demo</button>
          </Link>
          <Link target="_blank" to={project.repolink}>
            <button><FiGithub /> Github</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WorkInfo;
