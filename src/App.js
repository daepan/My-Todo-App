
import React from 'react';
import { Route } from 'react-router-dom'
import TodoTemplate from './components/TodoTemplate';
import TodoGame from './components/TodoGame';
import TodoHeader from './components/TodoHeader';
import Clock from './components/Clock';
import TodoFooter from './components/TodoFooter';
import './App.css'



const App = () => {




  return (
    <div className="backimg">
      <TodoHeader />
      <Clock />
      <Route path="/Temp" component={TodoTemplate}></Route>
      <Route path="/Game" component={TodoGame}></Route>

      <TodoFooter />
    </div>


  )
}

export default App;
