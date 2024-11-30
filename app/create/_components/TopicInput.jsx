import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"  

function TopicInput({setTopic, setDifficultyLevel}) {
  return (
    <div className='mt-10 w-full flex flex-col'>
        <h2>Please enter the topic or provide a brief description of the content</h2>
        <Textarea placeholder='Begin writing your content here...'
         className = 'mt-2 w-full' onChange={(event) => setTopic(event.target.value)}
        />

        <h2 className='mt-5 mb-3'>Select difficulty level</h2>
        <Select onValueChange={(value) => setDifficultyLevel(value)}>

            <SelectTrigger className="w-full">
                <SelectValue placeholder="Diffculty Level" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Easy">Simple</SelectItem>
                <SelectItem value="Moderate">Intermediate</SelectItem>
                <SelectItem value="Hard">Advanced</SelectItem>
            </SelectContent>

        </Select>


    </div>
  )
}

export default TopicInput