"use client"
import React, { useEffect, useState } from 'react'
import LogoTitle from './_components/LogoTitle'
import LogoDesc from './_components/LogoDesc'
import LogoPalette from './_components/LogoPallette'
import LogoDesigns from './_components/LogoDesigns'
import LogoIdea from './_components/LogoIdea'
import PricingModel from './_components/PricingModel'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'

function CreateLogo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '', 
    desc: '',
    palette: '',
    design: null,
    idea: ''
  });

  const onHandleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  useEffect(() => {
    console.log('FormData changed:', formData);
  }, [formData]);

  return (
    <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'>
      {step==1?
        <LogoTitle onHandleInputChange={(v)=>onHandleInputChange('title',v)}
        formData={formData} /> :
        step==2?
        <LogoDesc onHandleInputChange={(v)=>onHandleInputChange('desc',v)}
        formData={formData} />:
        step==3?
        <LogoPalette onHandleInputChange={(v)=>onHandleInputChange('palette',v)}
        formData={formData} />:
        step==4?
        <LogoDesigns onHandleInputChange={(v)=>onHandleInputChange('design',v)}
        formData={formData} />:
        step==5?
        <LogoIdea formData={formData} onHandleInputChange={(v)=>onHandleInputChange('idea',v)}/>:
        step==6?
        <PricingModel formData={formData} onHandleInputChange={(v)=>onHandleInputChange('pricing',v)}/>:
        null 
  }
        <div className='flex items-center justify-between mt-10'>
  {step != 1 && (
    <Link 
      href="#" 
      onClick={(e) => {
        e.preventDefault();
        setStep(step-1);
      }}
      className='flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50'
    >
      <ArrowLeft /> Poprzedni krok
    </Link>
  )}
  <Link 
    href="#" 
    onClick={(e) => {
      e.preventDefault();
      setStep(step+1);
    }}
    className='flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary'
  >
    Następny krok <ArrowRight />
  </Link>
</div>
    </div>
  )
}

export default CreateLogo