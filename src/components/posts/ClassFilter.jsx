import React from 'react'
import { classData } from '../../constants/class'

const ClassFilter = ({ onChange }) => {
  return (
    <div className="flex flex-col">
      <div>수강반</div>
      <select className="p-2 bg-gray-100 text-gray-800 rounded"
        onChange={event => onChange(event.target.value)}>
        <option value={0}>{classData[0]}</option>
        <option value={1}>{classData[1]}</option>
        <option value={2}>{classData[2]}</option>
      </select>
    </div>
  )
}

export default ClassFilter