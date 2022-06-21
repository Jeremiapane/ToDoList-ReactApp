import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    //Componen dengan nama kelas Todo-app
    <div className='todo-app'>
      // Merender file TodoList
      <TodoList />
    </div>
  );
}

export default App;
