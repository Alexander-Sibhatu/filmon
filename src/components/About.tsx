import React from 'react'
import Filmon from '../images/Filmonn.jpeg'
import MovingText from './MovingText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { gsap } from 'gsap';
import { useEffect } from 'react';


type Props = {}


const About = (props: Props) => {

  useEffect(() => {
    const drop = () => gsap.from('.fullstop', {duration:2, 
      y: '-50', ease: 'bounce'})
      drop();
      const rotateAndZoom = () => {
        const tl = gsap.timeline();
  
        // Start smaller and rotate quickly a few times
        tl.to('.download', { scale: 0.5, rotation: 1080, duration: 0.5, ease: 'power2.inOut' });
  
        // Slow down and rotate gradually
        tl.to('.download', { rotation: 1800, duration: 1, ease: 'power2.inOut' });
  
        // Zoom out
        tl.to('.download', { scale: 1.5, duration: 0.5, ease: 'power2.inOut' });

         // Reset scale to 1
        tl.to('.download', { scale: 1, duration: 0 });
      };
  
      rotateAndZoom();
    // const rotate = () => gsap.to('.download', { rotation: 360, duration: 1, ease: 'power2.inOut' });
    //   rotate();
  }, [])

  const downloadLink = process.env.PUBLIC_URL + '/documents/AdamCV.pdf';
  const emaillink = 'mailto:filmon.g@efoyplus.com';

  return (
    <div className='firstPage'>

      <div className='firstPage__review'>
        <div className='first-page'>
          <p className='greeting'>Greetings, I go by</p>
          <p className='name'>Filmon Sibhatu<span className='fullstop'></span></p>
          <p className='im'>As a</p>
          <h2><MovingText /></h2>
          <p className='detail1'>
            Effective at improving performance via identification of key business drivers, growth opportunities, 
            and scheming strategies of intervention. 
          </p>
          <p className='detail2'>
            Transparent in displaying the varied range of outcomes expected under different scenarios and diligent to test 
            the sensitivity.
          </p>
        </div>

        <div className='image'>
          <img src={Filmon} alt="Filmon" />
        </div>
      </div>

      <div className='icons'>
        <div className='left'>
          <a href={emaillink} className='reachout' target='_blank' rel="noopener noreferrer"> <FontAwesomeIcon icon={faEnvelope} /></a>
        </div>

        <div className='right'>
        <a href={downloadLink} className='download' target='_blank' rel="noopener noreferrer"> <FontAwesomeIcon icon={faDownload} /></a>
          <a href='https://www.linkedin.com/in/filmon-g-yohannes' target='_blank' rel="noopener noreferrer" className='reachout'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href='https://www.linkedin.com/in/filmon-g-yohannes/' target='_blank' rel="noopener noreferrer" className='reachout'><FontAwesomeIcon icon={faTwitter} /></a>
        </div> 
      </div>

    </div>
  )
}

export default About