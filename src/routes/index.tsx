import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Birhan from '../components/experience/Birhan'
import Euroexim from '../components/experience/Euroexim'
import Zemen from '../components/experience/Zemen'
import Woldia from '../components/experience/Woldia'
import Efoyplus from '../components/experience/Efoyplus'
import NavBar from './../layouts/NavBar';


const Index = () => {
  return (
    <div>
        <BrowserRouter>
        <div className='flex justify-center text-3xl font-bold m-6 mb-9 align-center'>Experience</div>
        <div className='flex flex-col w-5/6 h-auto md:gap-6 md:flex-row md:w-3/6 mx-auto md:justify-center mb-4'>
            <NavBar />
            <div className='flex flex-wrap w-full min-h-screen bg-[#ffffff] text-center shadow-[0px_0px_8px_#b5bdc1]'>
            <Routes>
                <Route path='/' element={<Efoyplus />}/>
                <Route path='/birhan' element={<Birhan />}/>
                <Route path='/euroexim' element={<Euroexim />}/>
                <Route path='/zemen' element={<Zemen />}/>
                <Route path='/woldia' element={<Woldia />}/>
            </Routes>
            </div>
        </div>
        </BrowserRouter>
    </div>
  )
}

export default Index