import React from 'react'
import MaterialCardItem from './MaterialCardItem'

function StudyMaterialSection() {

    const MaterialList = [
        {
            name:'Notes/Chapters',
            desc:'Enhance Your Exam Preparation with Comprehensive Study Notes',
            icon:'/notes.png',
            path: '/notes',
        },
        {
            name:'Flashcard',
            desc:'Reinforce understanding and retention through quick, focused recall',
            icon:'/flashcard.png',
            path: '/flashcards',
        },
        {
            name:'Quiz',
            desc:'valuate comprehension with targeted assessments for continuous improvement',
            icon:'/quiz.png',
            path: '/quiz',
        },
        {
            name:'Question/Answer',
            desc:'Actively practice to deepen understanding and mastery of the material',
            icon:'/qa.png',
            path: '/qa',
        },
        
    ]

  return (
    <div className='mt-5'>
        <h2 className='font-bold text-xl'>Study Material</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-3'>
            {MaterialList.map((item,index) => (
                <MaterialCardItem item={item} key={index}/>
            ))}
        </div>
    </div>
  )
}

export default StudyMaterialSection