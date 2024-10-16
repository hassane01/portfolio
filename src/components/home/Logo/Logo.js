import {useEffect , useRef } from "react";

import React from 'react'

import './Logo.scss'
import logoback from '../../../assets/images/fullversion.png'
import gsap from 'gsap-trial'
import { DrawSVGPlugin } from 'gsap-trial/all'
function Logo() {
    const bgref = useRef(0)
    const outlinrLogoref =useRef()
    const solidLogoRef = useRef()
    useEffect(()=>{
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
        .to(bgref.current , {duration:1 , opacity:1})
        .from(outlinrLogoref.current ,{drawSVG:0 , duration:10})

        gsap.fromTo(solidLogoRef.current , {
            opacity:0,
        },
    {
        opacity:1,
        delay:4,
        duration:4,
        

        
    })
    },[])
  return (
    <div className='logo-conrainer' ref={bgref}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={logoback}
        alt="JavaScript,  Developer"
      />
      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
         
          fill="none"
        >        

          <path
           ref={outlinrLogoref} 
            d="M59.000 392.434 C 59.000 567.031,59.338 710.074,59.750 710.308 C 60.163 710.543,92.900 710.907,132.500 711.117 L 204.500 711.500 204.313 597.500 C 204.210 534.800,203.985 479.675,203.813 475.000 L 203.500 466.500 287.500 466.500 L 371.500 466.500 371.754 588.750 L 372.008 711.000 421.621 711.000 L 471.233 711.000 470.630 713.250 C 470.299 714.487,470.021 718.090,470.014 721.257 L 470.000 727.013 398.250 726.757 L 326.500 726.500 326.246 604.250 L 325.992 482.000 265.296 482.000 C 225.162 482.000,204.936 482.336,205.592 482.992 C 206.219 483.619,228.244 484.079,265.542 484.242 L 324.500 484.500 324.754 606.756 L 325.008 729.013 398.254 728.756 L 471.500 728.500 472.000 720.500 L 472.500 712.500 494.500 712.000 L 516.500 711.500 516.500 393.500 L 516.500 75.500 444.000 75.243 L 371.500 74.987 371.500 198.243 L 371.500 321.500 349.070 321.770 C 334.797 321.941,326.268 321.668,325.620 321.020 C 324.950 320.350,304.101 320.000,264.804 320.000 L 205.008 320.000 204.754 197.750 L 204.500 75.500 131.750 75.243 L 59.000 74.987 59.000 392.434 M200.243 200.700 C 200.450 298.497,200.751 322.151,201.799 323.200 C 202.820 324.221,216.643 324.675,266.299 325.316 C 375.911 326.730,371.676 326.754,373.715 324.714 C 375.409 323.019,375.500 316.698,375.500 200.957 L 375.500 78.986 443.752 79.243 L 512.003 79.500 512.252 393.817 L 512.500 708.135 490.500 707.524 C 478.400 707.188,447.800 706.595,422.500 706.206 L 376.500 705.500 376.185 588.175 C 376.012 523.646,375.551 468.980,375.161 466.694 C 374.470 462.647,374.325 462.517,369.633 461.730 C 366.984 461.286,328.146 461.053,283.327 461.211 C 188.587 461.547,199.000 459.907,199.000 474.491 C 199.000 479.501,199.338 484.027,199.750 484.550 C 200.163 485.072,200.382 535.580,200.237 596.789 L 199.974 708.079 179.237 707.545 C 167.832 707.251,137.240 706.763,111.255 706.460 L 64.010 705.909 63.640 398.704 C 63.436 229.742,62.938 89.356,62.533 86.736 C 61.220 78.243,54.665 78.955,131.464 79.243 L 199.986 79.500 200.243 200.700 M12.463 92.250 C 12.202 92.938,12.103 236.375,12.244 411.000 L 12.500 728.500 85.500 728.500 L 158.500 728.500 159.000 720.748 C 159.275 716.485,159.162 712.997,158.750 712.998 C 158.338 712.999,158.000 716.153,158.000 720.007 L 158.000 727.013 86.250 726.757 L 14.500 726.500 14.500 410.000 L 14.500 93.500 35.750 93.230 C 48.779 93.065,57.000 92.581,57.000 91.980 C 57.000 90.412,13.059 90.678,12.463 92.250 M325.667 91.667 C 325.300 92.033,325.110 143.446,325.244 205.917 L 325.487 319.500 325.994 206.500 L 326.500 93.500 346.971 93.229 C 358.594 93.074,367.866 92.534,368.421 91.979 C 369.060 91.340,361.908 91.000,347.867 91.000 C 336.023 91.000,326.033 91.300,325.667 91.667 "></path>
            </g>
            </svg> 




      
    </div>
  )
}

export default Logo
