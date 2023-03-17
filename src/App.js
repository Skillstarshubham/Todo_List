import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import {Footer}  from './Component/Footer';
import  {Todos}  from './Component/Todos';
import React,{useEffect, useState} from 'react';
import { Addtodo } from './Component/Addtodo';

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
//   Router,
// } from "react-router-dom";
function App() {
  let inittodo;
  if(localStorage.getItem("todos")===null){
    inittodo=[];
  }
  else{
    inittodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    console.log("I am on delete mode of todo",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo=(title,desc)=>{
    console.log("Adding todo",title,desc);
    let sno;
    if(todos.length===0){
      sno=1;
    }
    else{
    sno=todos[todos.length-1].sno+1;}
    const mytodo={
      sno:sno,
      title:title,
      work:desc
    }
    setTodos([...todos,mytodo]);
    console.log(mytodo);
    
    
    
  }
  const [todos,setTodos]=useState(inittodo)
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  
  return (
    <>
    <Header title="Todo-List" flag={true}/>
    <Addtodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;

