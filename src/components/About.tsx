import React from 'react'
import Filmon from '../images/Filmonn.jpeg'
import MovingText from './MovingText'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='firstPage__review'>
      <div className='p1__para'>
        <p className='p1__hi'>Greetings, I go by</p>
        <p className='p1__name'>Filmon Sibhatu <span className='fullstop'></span></p>
        <p className='p1__im'>As a</p>
        <h2><MovingText /></h2>
        <p>
          Effective at improving performance via identification of key business drivers, growth opportunities, 
          and scheming strategies of intervention. 
        </p>
        <p>
          Transparent in displaying the varied range of outcomes expected under different scenarios and diligent to test 
          the sensitivity of suggested assumptions or scenarios. 
        </p>

      </div>
      <div className='image'>
        <img src={Filmon} alt="Filmon" />
      </div>
    </div>
  )
}

export default About