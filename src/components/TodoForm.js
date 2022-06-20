// ambil data react dari library
import React, { useState } from 'react'

// bikin component form
function TodoForm(props) {
    const [input,setInput] = useState('');
    const handleChange = e =>{
        setInput(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();

        // this.props.onSubmit({
        //     id: Math.floor(Math.random()*10000),
        //     text: input
        // }); 
        setInput('');
    };
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Add to do' value={input} name='text' className='todo-input' onChange={handleChange}/>
        <button className='todo-button'>Add To do</button>
    </form>
  )
}

export default TodoForm