import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  // fungsi ketika mengetikkan nilai pada form
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // memberikan id value secara random untuk membedakan masing2 item
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {/* //fungsi kondisional ketika icon edit ditekan */}
      {props.edit ? (
        // fragments
        <>
          <h1>Ubah Todo</h1>
          <input
            placeholder='Ubah To Do'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Ubah
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Tambahkan To Do'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Tambahkan
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
