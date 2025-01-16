import React from 'react'

const CourseFilter = ({ onChange }) => {
  return (
    <div className="flex flex-col">
      <div>수강반</div>
      <select className="p-2 bg-gray-100 text-gray-800 rounded"
        onChange={event => onChange(event.target.value)}>
        <option value="ENGINEERING">클라우드 엔지니어링</option>
        <option value="AI">클라우드 AI</option>
        <option value="SERVICE">클라우드 서비스 개발</option>
      </select>
    </div>
  )
}

export default CourseFilter