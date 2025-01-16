import React, { useState } from 'react'

const CategoryFilter = ({ onChange }) => {
  return (
    <div className="flex flex-col">
      <div>카테고리</div>
      <select className="p-2 bg-gray-100 text-gray-800 rounded"
        onChange={event => onChange(event.target.value)}>
        <option value="PROJECT">프로젝트 개발 중</option>
        <option value="THEORY">이론</option>
        <option value="ALGORITHM">알고리즘</option>
        <option value="ETC">기타</option>
      </select>
    </div>
  )
}

export default CategoryFilter