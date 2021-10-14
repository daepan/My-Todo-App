
import React from 'react';
import { Route } from 'react-router-dom';
import TodoTemplate from './components/TodoTemplate';
import TodoGame from './components/TodoGame';
import TodoCalender from './components/TodoCalender';
import TodoHeader from './components/TodoHeader';
import Clock from './components/Clock';
import TodoFooter from './components/TodoFooter';
import './App.css'
import HistorySample from './components/HistorySample';
import axios from './'



const App = () => {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios.get('http://jsonplaceholder.typicode.com/todos/1').then(response => {
      setData(response.data);
    })
  }
  return (
    <div className="backimg">
      <TodoHeader />
      <Clock />
      <span>
        <button onClick={onClick}>불러오기</button>
        <div>{data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}</div>
      </span>
      <Route paht="/" component={TodoCalender} />
      <Route path="/Temp" component={TodoTemplate} />
      <Route path="/Game" component={TodoGame} />
      <Route path="/History" component={HistorySample} />
      <TodoFooter />
    </div>


  )
}

export default App;
