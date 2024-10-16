import React from 'react'
import './AnimatedLetter.scss'
function AnimatedLetter({letterclass , strarray , idx}) {

  return (
<span>
    
{
        strarray.map((char , i)=>(
            <span key={char + i} className={`${letterclass} _${i + idx}`}>
                {char}
                </span>
            )
        )
      }
</span>
  ) 
  
}

export default AnimatedLetter
