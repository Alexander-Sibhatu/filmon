import React, { useState } from 'react'
// import '../styles/page2.css'

type Props = {}
interface CompanyDetails {
  heading: string;
  date: string;
  details: string[];
}


const Experience = (props: Props) => {
  const [selectedCompany, setSelectedCompany] = useState<null | string>('company1');

  const handleButtonClick = (company: string): void => {
    setSelectedCompany(company);
  }

  const companyDetails: Record<string, CompanyDetails> = {
    company1: {
      heading: 'Efoy Plus',
      date: 'Apr 2023 - Present',
      details: [
        'Co-founder and COO',
        'Achievement 2',
        'Responsibility 1',
        'Responsibility 2',
      ],
    },
    company2: {
      heading: 'Euro Exim Bank',
      date: 'Oct 2021 - Oct 2023',
      details: [
        'Trade Finance Consultant',
        'Achievement 2',
        'Responsibility 1',
        'Responsibility 2',
      ],
    },
    company3: {
      heading: 'Birhan Bank',
      date: 'Aug 2018 - Feb 2023',
      details: [
        'Head of Section',
        'Planning Officer',
        'Senior Planning Officer',
        'Senior Customer Service Officer',
      ],
    },
    company4: {
      heading: 'Zemen Bank',
      date: 'Apr 2012 - May 2014',
      details: [
        'Senior Bank Teller',
        'Bank Teller',
        'Responsibility 1',
        'Responsibility 2',
      ],
    },
    company5: {
      heading: 'Woldia University',
      date: 'Jul 2011 - Mar 2012',
      details: [
        'Assistant Lecturer',
        'Achievement 2',
        'Responsibility 1',
        'Responsibility 2',
      ],
    }

  }

  return (
    <div className='experience'>
      <div className='text-center text-5xl font-bold m: m-5'>Experience</div>
      
      <div className='flex flex-row md:flex-col mb-10 md:w-3/5 mx-auto'>
        <div className='flex  w-full flex-wrap md:h-2/5 gap-2 bg-sky-600 justify-center text-center p-5'>
          <button className='w-full md:w-1/6 md:h-1/12' onClick={() => handleButtonClick('company1')}>Efoy Plus</button>
          <button className='w-full md:w-1/6 md:h-1/12' onClick={() => handleButtonClick('company2')}>Euro Exim Bank</button>
          <button className='w-full md:w-1/6 md:h-1/12' onClick={() => handleButtonClick('company3')}>Birhan Bank</button>
          <button className='w-full md:w-1/6 md:h-1/12' onClick={() => handleButtonClick('company4')}>Zemen Bank</button>
          <button className='w-full md:w-1/6 md:h-1/12' onClick={() => handleButtonClick('company5')}>Woldia University</button>
        </div>
        <div className='w-full min-h-screen  bg-emerald-600 text-center p-10'>
          {selectedCompany && (
            <div>
              <h2 className='text-2xl font-bold'>{companyDetails[selectedCompany].heading}</h2>
              <p className='text-lg'>{companyDetails[selectedCompany].date}</p>
              <ul>
                {companyDetails[selectedCompany].details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default Experience