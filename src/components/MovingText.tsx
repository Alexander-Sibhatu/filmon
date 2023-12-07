import React from 'react'
import {useTypewriter, Cursor, TypewriterHelper } from 'react-simple-typewriter';
import '../App.css'



const MovingText = () => {
    const config = {
        words: ['Manager Partner & COO', 'Trade Office Consultant', 'Senior Planning Officer'],
        loop: true,
        typeSpeed: 130,
        deleteSpeed: 50,
        delaySpeed: 1700,
      };
    
      const [text]: [string, TypewriterHelper] = useTypewriter(config);
  return (
    <p className='typed'>
        <span className='typed__text'>
            {text}
        </span>
        <span className='custom__cursor'>
            <Cursor />
        </span>
        
    </p>
  )
}

export default MovingText