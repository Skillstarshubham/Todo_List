import React, { useState } from 'react'

export const Addtodo = ({addTodo}) => {
    const [title,settitle]=useState("");
    const[desc,setdesc]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title||!desc){
        alert("Description or Title cant be blank");}
        else{
        addTodo(title,desc);
        settitle("");
        setdesc("");}
    }
  return (
    <div className='container'>
    <p>AddTodo</p>
    <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="titel">Title</label>
    <input type="text" value={title} onChange={(e)=>{settitle(e.target.value);}} className="form-control" id="titel" aria-describedby="title"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="description">description</label>
    <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value);}}className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Submit</button>
</form>
    </div>
  )
}
