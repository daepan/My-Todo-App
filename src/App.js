
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import TodoTemplate from './components/TodoTemplate';
import TodoGame from './components/TodoGame';
import TodoCalender from './components/TodoCalender';
import TodoHeader from './components/TodoHeader';
import Clock from './components/Clock';
import TodoFooter from './components/TodoFooter';
import './App.css'
import HistorySample from './components/HistorySample';
import axios from 'axios'
import NewsList from './components/NewsList';



const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=3ed3d506daf245dbaa6ccd075e27b47e'
      );
      setData(response.data)
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="backimg">
      <TodoHeader />
      <Clock />
      <span>
        <button onClick={onClick}>불러오기</button>
        <div>{data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}</div>
      </span>
      <Route paht="/" component={TodoCalender} />
      <Route path="/Temp" component={TodoTemplate} />
      <Route path="/Game" component={TodoGame} />
      <Route path="/News" component={NewsList} />
      <Route path="/History" component={HistorySample} />
      <TodoFooter />
    </div>


  )
}

export default App;
