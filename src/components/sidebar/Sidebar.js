import React ,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import logo from '../../assets/images/fullversion.png'
import { FaNetworkWired } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faLink, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { RxHamburgerMenu } from "react-icons/rx";
function Sidebar() {
  const [isSidebareopen  , setisSidebareopen] = useState(false)
  return (<>
   <RxHamburgerMenu onClick={()=>setisSidebareopen(!isSidebareopen)} className='burger-icon'/>
      
    <div className='nav-bar' id={isSidebareopen?'isdispalyed' : 'isntdisplayed' }>
      <Link className='logo' to='/'>
        <img  src={logo}/>
        
      </Link>
      <nav>
        <NavLink exact='true' activeclassname = 'active' to='/'>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact='true' activeclassname = 'active' className='about-link' to='/about'>
          <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact='true' activeclassname = 'active' className='contact-link' to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='woks-link' to='/works'>
            <FaNetworkWired/>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/el-hassan-oubakasse-a1a574277'>
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
          </a>
        </li>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/el-hassan-oubakasse-a1a574277'>
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
          </a>
        </li>
      </ul>
    </div>
    </>
    
  )
}

export default Sidebar
