import React from 'react'
import '../styles/page2.css'

type Props = {}

const Experience = (props: Props) => {
  return (
    <div className='p2'>
      <div className='p2__header'>
        <h1 className='experience'>Experience</h1>
      </div>

      <div className='p2__below'>
        <div className='p2__leftside'>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div className='p2__rightside'>
          <h4 className='p2__title'>Efoy Plus</h4>
          <p className='date'>july 2020 - present</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quam, incidunt. Corporis veniam porro ex iste sit iusto 
            praesentium eveniet odio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quam, incidunt. Corporis veniam porro ex iste sit iusto 
            praesentium eveniet odio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quam, incidunt. Corporis veniam porro ex iste sit iusto 
            praesentium eveniet odio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quam, incidunt. Corporis veniam porro ex iste sit iusto 
            praesentium eveniet odio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quam, incidunt. Corporis veniam porro ex iste sit iusto 
            praesentium eveniet odio.</p>
        </div>
      </div>

    </div>
  )
}

export default Experience