import React from 'react'

export const Todoitem = (props) => {
  return (
    <>
    <div>
    <h5 className='py-1'>{props.todo.title}</h5>
    <p>{props.todo.work}</p>
    <button className='btn btn-sm btn-danger' onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
    </div>
    <hr/>
    </>
  )
}