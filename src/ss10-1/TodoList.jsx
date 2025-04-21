import React from 'react'
import TodoItem from './TodoItem'

export default function Todolist() {
  return (
    <>
    <ul className="space-y-2 mb-4">
        <TodoItem  text="Quét nhà" completed={false}/>
        <TodoItem text="Giặt quần áo" completed={true}/>
        <TodoItem text="Nấu cơm" completed={false}/>        
    </ul>
    </>
  )
}

