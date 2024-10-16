import React, { useEffect } from 'react'
import '../Works/Works.scss'
import { GiCancel } from "react-icons/gi";
import { useParams } from 'react-router-dom';
import { data } from '../../assets/Data/Workdata';
import { FaPlayCircle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
function WorkInfo({Isdisplayed , setIsdisplayed }) {
   const id = useParams()

     const project = data.filter(proj=>proj.id == id.id)
    
  return (
    <div className='work-info'>
      <GiCancel className='close-icn' onClick={()=>setIsdisplayed(!Isdisplayed)}/>
     <div className='gif-container'>
     </div>
        <div className='info-data'>
            <div className='proj-descrpt'>
                <p>{project[0].description}</p>
            </div>
            <div className='proj-link'>
              <button> <FaPlayCircle /> View Demo</button>
              <button> <FiGithub /> Github</button>
             
            </div>
        </div>
      
    </div>
  )
}

export default WorkInfo
