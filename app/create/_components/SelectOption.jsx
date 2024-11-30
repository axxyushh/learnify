import Image from 'next/image'
import React, { useState } from 'react'

function SelectOption({seletedStudyType}) {
    const options = [
        {
            name:'Exam',
            icon:'/exam_1.png',
        },
        {
          name:'Job Interview',
          icon:'/job.png'
        },
        {
          name:'Practice',
          icon:'/practice.png'
        },
        {
          name:'Coding Preparation',
          icon:'/code.png',
        },
        {
          name:'Other',
          icon:'/knowledge.png',
        }
    ]
    const [selectedOption, setSeletedOption] = useState();
  return (
    <div>

      <h2 className='text-center mb-2 text-lg'>Select the subject or topic for which you'd like to create your personalized study materials.</h2>
      <div className='grid grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-5 gap-5'>
        {options.map((option,index) => (
          <div key={index} className={`p-4 flex flex-col items-center justify-center border 
          rounded-xl hover:border-cyan-500 cursor-pointer
          ${option?.name==selectedOption&&'border-cyan-600'}`}
          onClick={() => {setSeletedOption(option.name); seletedStudyType(option.name)}}
          >

            <Image src={option.icon} alt={option.name} width={50} height={50}/>
            <h2 className='text-sm mt-2'>{option.name}</h2>

          </div>
        ))}
      </div>

    </div>
  )
}

export default SelectOption