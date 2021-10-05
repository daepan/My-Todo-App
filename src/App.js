
import React from 'react';
import { Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import TodoTemplate from './components/TodoTemplate';
import TodoGame from './components/TodoGame';
import TodoCalender from './components/TodoCalender';
import TodoHeader from './components/TodoHeader';
import Clock from './components/Clock';
import TodoFooter from './components/TodoFooter';
import './App.css'



const App = () => {

  const isTabletorMobile = useMediaQuery({ minDeviceWidth: 1824 })


  return (
    <div className="backimg">
      <TodoHeader />
      <Clock />
      <Route paht="/" component={TodoCalender}/>
      <Route path="/Temp" component={TodoTemplate}/>
      <Route path="/Game" component={TodoGame}/>

      <TodoFooter />
    </div>


  )
}

export default App;
