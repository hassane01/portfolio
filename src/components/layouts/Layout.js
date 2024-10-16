import React from 'react'
import './Layout.scss'
import 'animate.css';

import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div >
      <Sidebar/>
      <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>
        <Outlet/>
        <span className='tags bottom-tags'>{`</body>`}
          
          <br/>
          <span className='bottom-tag-html'> {`</html>`}</span>
        </span>
      </div>
    </div>
  )
}

export default Layout












