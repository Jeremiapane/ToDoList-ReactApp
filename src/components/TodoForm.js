import React, { useState } from 'react'

function TodoForm() {
    const [input,setInput] = useState('');
  return (
    <form>
        <input type='text' placeholder='Add to do' value={input} name='text' className='todo-input'/>
        <button className='todo-button'>Add To do</button>
    </form>
  )
}

export default TodoForm