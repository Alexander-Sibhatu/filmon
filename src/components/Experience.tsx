import React, { useState } from 'react';
import { gsap } from 'gsap';

type Props = {};
interface CompanyDetails {
  heading: string;
  date: string;
  details: string[];
}

const animatedCompanyPage = () => gsap.from('.company__page',{duration:1, x:'-10%',
ease:'bounce'} );

const Experience = (props: Props) => {
  const [selectedCompany, setSelectedCompany] = useState<null | string>('company1');

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
    },
  };

  const handleButtonClick = (company: string): void => {
    setSelectedCompany(company);
    animatedCompanyPage();
  };

  return (
    <div className='experience'>
      <div className='text-center text-4xl font-bold m-5 mb-8'>Experience</div>

      <div className='flex flex-col md:gap-6 md:flex-row md:w-3/6 mx-auto md:justify-center mb-4'>
        <div className='flex flex-row p-2 h-2/5 bg-white md:flex-col md:justify-center'>
          {Object.keys(companyDetails).map((company) => (
            <button
              className={` btn flex p-1 rounded-md md:flex flex-1 md:text-left md:p-4 h-16 bg-[#ffffff] ${selectedCompany === company? 'text-[#233d4d] rounded-md font-bold bg-slate-200' : ''}`}
              key={company}
              onClick={() => handleButtonClick(company)}
            >
              {companyDetails[company].heading}
            </button>
          ))} 
        </div>
        <div
          className={`company__page w-full min-h-screen bg-[#ffffff] text-center shadow-[5px_0_5px_#b5bdc1] ${selectedCompany ? 'text-[#335c67]' : 'text-black'} p-5`}
        >
          {selectedCompany && (
            <div>
              <h2 className='text-2xl font-bold mt-9'>{companyDetails[selectedCompany].heading}</h2>
              <p className='text-lg'>{companyDetails[selectedCompany].date}</p>
              <ul>
                {companyDetails[selectedCompany].details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  
  )}

  export default Experience