import React from 'react'
import {Todoitem} from './Todoitem'

export const Todos = (props) => {
  const mystyle={
    minHeight:'70vh',
    margin:'40px auto'
  }
  return (
    <div className="container" style={mystyle}>
        <h3 className='text-center py-3'>Todo List</h3>
        {
          props.todos.length===0? "No todos to display":
            props.todos.map((todo)=>{
            return(<Todoitem todo={todo} key={props.sno} onDelete={props.onDelete}/>)
        })
        }
        
    </div>
  )
}
