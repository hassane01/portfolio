import React from 'react'
import '../Works/Works.scss'
import { GiCancel } from "react-icons/gi";
import { Link, useParams } from 'react-router-dom';
import { data } from '../../assets/Data/Workdata';
import { FaPlayCircle } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
function WorkInfo({Isdisplayed , setIsdisplayed }) {
   const id = useParams()

     const project = data.filter(proj=>proj.id === parseInt(id.id))
    
  return (
    <div className='work-info'>
      {console.log(typeof(id.id))}
      <GiCancel className='close-icn' onClick={()=>setIsdisplayed(!Isdisplayed)}/>
     <div className='gif-container'>
     </div>
        <div className='info-data'>
            <div className='proj-descrpt'>
                <p>{project[0].description}</p>
            </div>
            <div className='proj-link'>
            <Link target="_blank" to={project[0].demolink}> <button > <FaPlayCircle /> View Demo</button></Link>
            <Link target="_blank" to={project[0].repolink}> <button> <FiGithub /> Github</button></Link>
              {/* nice working */}
            
            </div>
        </div>
      
    </div>
  )
}

export default WorkInfo
