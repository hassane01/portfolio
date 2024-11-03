import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function CardWork({ project, setIsDisplayed, t }) {
  const navigate = useNavigate();

  const handleDisplay = (id) => {
    setIsDisplayed(true);
    navigate(`/works/${id}`);
  };

  return (
    <div className="card-content">
      <div style={{ backgroundImage: `url(${project.image})` }} className="img-card"></div>
      <div className="card-text">
        
        <h1>{t(`projects.${project.name}`)}</h1> {/* Translated name */}
        <h2>{t(`projects.${project.title}`)}</h2> {/* Translated title */}
        <span>{t(`projects.${project.skills}`)}</span> {/* Translated skills */}
      </div>
      <button onClick={() => handleDisplay(project.id)}>
        {t('View More')} <FaArrowRight />
      </button>
    </div>
  );
}

export default CardWork;
