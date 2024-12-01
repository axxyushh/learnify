import React, { useEffect, useState } from 'react'
import MaterialCardItem from './MaterialCardItem'
import axios from 'axios'
import Link from 'next/link';

function StudyMaterialSection({courseId}) {

    const [studyTypeContent, setStudyTypeContent] = useState();

    const MaterialList = [
        {
            name:'Notes/Chapters',
            desc:'Enhance Your Exam Preparation with Comprehensive Study Notes',
            icon:'/notes.png',
            path: '/notes',
            type:'notes',
        },
        {
            name:'Flashcard',
            desc:'Reinforce understanding and retention through quick, focused recall',
            icon:'/flashcard.png',
            path: '/flashcards',
            type:'flashcard',
        },
        {
            name:'Quiz',
            desc:'valuate comprehension with targeted assessments for continuous improvement',
            icon:'/quiz.png',
            path: '/quiz',
            type:'quiz',
        },
        {
            name:'Question/Answer',
            desc:'Actively practice to deepen understanding and mastery of the material',
            icon:'/qa.png',
            path: '/qa',
            type:'qa',
        },
        
    ]

    useEffect(() => {
        GetStudyMaterial();
    },[])

    const GetStudyMaterial = async() => {

        const result = await axios.post('/api/study-type',{
            courseId: courseId,
            studyType: "ALL",
        })

        console.log(result?.data);
        setStudyTypeContent(result.data)

    }

  return (
    <div className='mt-5'>
        <h2 className='font-bold text-xl'>Study Material</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-3'>
            {MaterialList.map((item,index) => (
                <Link key={index} href={'/course/'+courseId+item.path}>
                    <MaterialCardItem item={item} key={index}
                    setStudyTypeContent={setStudyTypeContent}
                    />
                </Link>
            ))}
        </div>
    </div>
  )
}

export default StudyMaterialSection