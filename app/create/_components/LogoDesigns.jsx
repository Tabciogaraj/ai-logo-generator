import React, { useState, useEffect } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '../../_data/Lookup'
import LogoDesign from '../../_data/LogoDesign'
import Image from 'next/image'

function LogoDesigns({onHandleInputChange, formData}) {
  const [selectedOption, setSelectedOption] = useState(LogoDesign[0].title);
  
  useEffect(() => {
    if (formData?.design?.title) {
      setSelectedOption(formData.design.title);
    } else {
      setSelectedOption(LogoDesign[0].title);
      onHandleInputChange(LogoDesign[0]);
    }
  }, [formData]);

  return (
    <div className='my-10'>
      <HeadingDescription
        title={Lookup.LogoDesignTitle}
        description={Lookup.LogoDesignDesc}
      />
      <div className='grid grid-cols-2 md:grid-cols-3 gap-10 mt-10'>
        {LogoDesign.map((design, index) => (
          <div 
            key={index} 
            onClick={() => {
              setSelectedOption(design.title);
              onHandleInputChange(design);
            }}
            className={`p-1 hover:shadow-lg border-primary rounded-xl cursor-pointer ${
              selectedOption === design.title ? 'rounded-xl border-2 border-primary shadow-lg' : ''
            }`}
          >
            <Image 
              src={design.image} 
              alt={design.title} 
              width={300}
              height={200}
              className='w-full rounded-xl h-[160px] object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoDesigns