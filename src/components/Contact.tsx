import React from 'react';
// import { animateScroll as scroll } from 'react-scroll';

type Props = {};

const Contact = (props: Props) => {
  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };
  // <button className='font-bold bg-sky-300 md:grid md:flex md:self-start p-1' onClick={scrollToTop}>Scroll to Top</button>
  return (
    <div className='flex flex-col items-center md:flex-col md:justify-center md:items-center md:h-screen h-70vh bg-[#1b263b]'>
      <form className='flex flex-col justify-center bg-red gap-3 md:gap-3 p-4 rounded-md'>
        <div className='text-[white] text-lg font-bold'>Write me a message</div>
        <label className=' text-[white]'>Name</label>
        <input className= 'border rounded-md  p-1 bg-[#29404d]' placeholder='Name' name="contact_number" />
        <label className=' text-[white]'>Email</label>
        <input className='border rounded-md  p-1 bg-[#29404d]' placeholder='Email address' type="text" name="user_name" />
        <label className='text-[white] w-6'>Message</label>
        <textarea className='border rounded-md  bg-[#29404d]' rows={3} placeholder='Leave a message' name="message"></textarea>
        <input className='text-[white] font-bold' type="submit" value="Send" />
      </form>
      <div className="mx-auto text-center md:justify-center w-4/5  h-0.5 md:w-4/5 md:h-.5 bg-[#328374] mt-24"></div>
      <div className=" w-80% text-white md:w-80 text-center mt-5">
        &copy; 2023 Efoy Plus. All rights reserved.
      </div>
    </div>
    
  );
};

export default Contact;
