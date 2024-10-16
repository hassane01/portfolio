import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


function CardWork({ project,  setIsdisplayed }) { 
    const navigate = useNavigate()
    const handleDisplay = (id) => {
        
      setIsdisplayed(true);
      navigate(`/works/${id}`)
    };
  
    return (
      <div className='card-content'>
        <div style={{ backgroundImage: `url(${project.image})` }} className='img-card'></div>
        <div className='card-text'>
          <h1>{project.name}</h1>
          <h2>{project.title}</h2>
          <span>{project.skills}</span>
        </div>
        <button onClick={() => handleDisplay(project.id)}>
          View More<FaArrowRight />
        </button>
      </div>
    );
  }
  
  export default CardWork;
