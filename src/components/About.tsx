import React from 'react'
import Filmon from '../images/Filmonn.jpeg'
import MovingText from './MovingText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';



type Props = {}

const About = (props: Props) => {

  const downloadLink = './public/documents/Adam CV.pdf';

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
          <a href={downloadLink} download="your cv.pdf" className='download'> <FontAwesomeIcon icon={faDownload} /></a>
        </div>

        <div className='right'>
          <a href='https://github.com/Alexander-Sibhatu/' target='_blank' rel="noopener noreferrer" className='linkedIn'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href='https://www.linkedin.com/in/filmon-g-yohannes/' target='_blank' rel="noopener noreferrer" className='twitter'><FontAwesomeIcon icon={faTwitter} /></a>
        </div> 
      </div>

    </div>
  )
}

export default About