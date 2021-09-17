
import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import './App.css'



const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'TOEIC Study',
      checked: false,
    },
    {
      id: 2,
      text: '1일 1커밋',
      checked: false,
    },

  ])

  const NextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: NextId.current,
        text,
        checked: false,
      };
      setTodos(todos => todos.concat(todo));
      NextId.current += 1;
    }, [],
  )

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    [],
  )

  const onToggle = useCallback(
    id => {
      setTodos(todos =>
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        )
      )
    }, []
  )





  return (
    <div className="backimg">

      <TodoTemplate >

        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />

      </TodoTemplate>



    </div>


  )
}

export default App;
