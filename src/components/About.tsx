import React from 'react'
import Filmon from '../images/Filmonn.jpeg'
import MovingText from './MovingText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { gsap } from 'gsap';
import { useEffect } from 'react';

gsap.to('.fullstop', {duration: 2, x: 46, ease: 'bounce'})

type Props = {}


const About = (props: Props) => {

  useEffect(() => {
    const drop = () => gsap.from('.fullstop', {duration:2, 
      y: '-50', ease: 'bounce'})
      drop();
  }, [])

  const downloadLink = process.env.PUBLIC_URL + '/documents/AdamCV.pdf';
  const emaillink = 'mailto:filmon.g@efoyplus.com';

  return (
    <div className='firstPage'>

      <div className='firstPage__review'>
        <div className='first-page'>
          <p className='greeting'>Greetings, I go by</p>
          <p className='name'>Filmon Sibhatu <span className='fullstop'></span></p>
          <p className='im'>As a</p>
          <h2><MovingText /></h2>
          <p className='detail1'>
            Effective at improving performance via identification of key business drivers, growth opportunities, 
            and scheming strategies of intervention. 
          </p>
          <p className='detail2'>
            Transparent in displaying the varied range of outcomes expected under different scenarios and diligent to test 
            the sensitivity of suggested assumptions or scenarios. 
          </p>
        </div>

        <div className='image'>
          <img src={Filmon} alt="Filmon" />
        </div>
      </div>

      <div className='icons'>
        <div className='left'>
          <a href={emaillink} className='email-link' target='_blank' rel="noopener noreferrer"> <FontAwesomeIcon icon={faEnvelope} /></a>
        </div>

        <div className='right'>
        <a href={downloadLink} className='animate-bounce download' target='_blank' rel="noopener noreferrer"> <FontAwesomeIcon icon={faDownload} /></a>
          <a href='https://www.linkedin.com/in/filmon-g-yohannes' target='_blank' rel="noopener noreferrer" className='linkedIn'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href='https://www.linkedin.com/in/filmon-g-yohannes/' target='_blank' rel="noopener noreferrer" className='twitter'><FontAwesomeIcon icon={faTwitter} /></a>
        </div> 
      </div>

    </div>
  )
}

export default About