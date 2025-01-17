"use client"
import React, { useEffect, useState } from 'react'
import LogoTitle from './_components/LogoTitle'
import LogoDesc from './_components/LogoDesc'
import LogoPalette from './_components/LogoPallette'
import LogoDesigns from './_components/LogoDesigns'
import LogoIdea from './_components/LogoIdea'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

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
        null 
  }
        <div className='flex items-center justify-between mt-10'>
          {step!=1&& <Button variant="outline" onClick={()=>setStep(step-1)}> <ArrowLeft/> Poprzedni krok</Button>}
          <Button onClick={()=>setStep(step+1)}>  Następny krok <ArrowRight/></Button>

        </div>
    </div>
  )
}

export default CreateLogo