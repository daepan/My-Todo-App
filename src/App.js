
import React, { useReducer, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import TodoHeader from './components/TodoHeader';
import Clock from './components/Clock';
import TodoFooter from './components/TodoFooter';
import './App.css'




function createBulkTodos() {
  const array = [{
    id: 1,
    text: '유산소 운동',
    checked: false,
  },
  {
    id: 2,
    text: '1일 1커밋',
    checked: false,
  },

  ];

  return array;

}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo)
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id)
    case 'TOGGLE':
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}


const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos)


  const NextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: NextId.current,
        text,
        checked: false,
      };
      dispatch({ type: 'INSERT', todo })
      NextId.current += 1;
    }, [],
  )

  const onRemove = useCallback(
    id => {
      dispatch({ type: 'REMOVE', id })
    },
    [],
  )

  const onToggle = useCallback(
    id => {
      dispatch({ type: 'TOGGLE', id })
    }, []
  )





  return (
    <div className="backimg">
      <TodoHeader/>
      <Clock/>
      <TodoTemplate >
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
      <TodoFooter />
    </div>


  )
}

export default App;
