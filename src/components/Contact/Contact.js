import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetter from '../../Animation/AnimatedLetter'
import './Contact.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

function Contact() { 
    const strcontact = ['C','o','n','t','a','c','t',' ','m','e']
    const [letterclass , setletterclass] = useState('text-animation')
    useEffect(()=>{
        setTimeout(()=>{
            setletterclass('text-animation-hover')
        },3000)
    },[])
    const refForm = useRef()
    const Sendemail =(e)=>{
        e.preventDefault()
        emailjs.sendForm(
            'service_qzsunpj' , 'template_edn3j9h' , refForm.current ,{
                 publicKey:'CL9I-2hfP51sVCgHF'
            }
        ).then(()=>{
            alert('you message has been sended')
        },(error)=>{
            console.log(error)
        })
    }
    const currentposition = [30.426236, -9.577261]
  return (
    <>
     <div className='contact-container contact-page'>
       <div className='contact-text-zone'>
       <h1>
            {<AnimatedLetter strarray={strcontact} idx={15} letterclass={letterclass}/> }
        </h1>
        <p>Hello guys fell free to contact me </p>
        <div className='contact-form'>
        <form ref={refForm} onSubmit={Sendemail}>
            <ul>
                <li className='half'>
                    <input name='name' type='text' placeholder='Name' required/>
                </li>
                <li className='half'>
                    <input type='email' name='email' placeholder='Email' required/>

                </li>
                <li>
                    <input type='text' name='Subject' placeholder='Subject' required/>
                </li>
                <li>
                    <textarea placeholder='Message' name='message' required ></textarea>
                </li>
                <li> 
                    <input type='submit' className='flat-btn'/>
                </li>
            </ul>
        </form>
       </div>
       </div>
      <div className='info-cont'>
      <div className='contact-info'>
        Oubakasse El Hassan 
        <br/>
        Morocco ,Agadir
        <br/>
        Bd El Haj Lahbib, Agadir 80000
        <br/>
        <span>Oubakassehassane7@gmail.com</span>
       </div>
       <div className='map-container'>
                  <MapContainer center={currentposition} zoom={13} >
                      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                     <Marker position={currentposition}>
                        <Popup >
                            this is where i live ;)
                        </Popup>
                     </Marker>
                  </MapContainer>

       </div>
      </div>
      
    </div> 
    <Loader type='pacman'/>
    </>
  )
}

export default Contact
