import React from 'react';

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className='flex flex-col md:flex-col md:justify-center md:items-center md:h-screen h-70vh bg-[#1b263b]'>
      <form className='flex flex-col bg-red gap-3 md:gap-3 p-4 rounded-md'>
        <div className='text-[#fbc223] text-lg font-bold'>Write me a message</div>
        <label className=' text-[#fbc223]'>Name</label>
        <input className= 'border rounded-md p-1 bg-[#29404d]' placeholder='Name' name="contact_number" />
        <label className=' text-[#fbc223]'>Email</label>
        <input className='border rounded-md p-1 bg-[#29404d]' placeholder='Email address' type="text" name="user_name" />
        <label className='text-[#fbc223] w-6'>Message</label>
        <textarea className='border rounded-md bg-[#29404d]' rows={3} placeholder='Leave a message' name="message"></textarea>
        <input className='text-[#fbc223] font-bold' type="submit" value="Send" />
      </form>
      <div className="w-80 h-0.5 md:w-4/5 md:h-.5 bg-white mt-24"></div>
      <div className="text-[#fbc223] text-center mt-5">
        &copy; 2023 Efoy Plus. All rights reserved.
      </div>

      
    </div>
    
  );
};

export default Contact;
