
import React, { useState, Suspense } from 'react';
import { Route } from 'react-router-dom';
import TodoTemplate from './components/TodoTemplate';
import TodoGame from './components/TodoGame';
import TodoCalender from './components/TodoCalender';
import TodoHeader from './components/TodoHeader';
import Clock from './components/Clock';
import TodoFooter from './components/TodoFooter';
import './App.css'
import HistorySample from './components/HistorySample';
import NewsList from './components/NewsList';
import { ColorProvider } from './context/color';
import Counter from './components/Counter';

const SplitMe = React.lazy(() => import('./SplitMe'));



const App = () => {

  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  }
  state = {
    SplitMe: null
  };

  handleClick = async () => {
    const loadedModule = await import('./SplitMe');
    this.setState({
      SplitMe: loadedModule.default
    })
  }

  return (
    <div className="backimg">
      <TodoHeader />
      <div>
        <p onClick={onClick}> Hello </p>
        <Suspense fallback={<div>loading...</div>}>
          {visible && <SplitMe />}
        </Suspense>
      </div>
      <Route exact path="/" component={Clock} />
      <Route path="/Calender" component={TodoCalender} />
      <Route path="/Temp" component={TodoTemplate} />
      <Route path="/Game" component={TodoGame} />
      <Route path="/News" component={NewsList} />
      <Route path="/History" component={HistorySample} />
      <Route path="/Color">
        <ColorProvider value={{ color: 'red' }}>
          <div>
            <ColorBox />
          </div>
        </ColorProvider>
      </Route>
      <Route path="/Counter" component={Counter} />
      <TodoFooter />
    </div>


  )
}

export default App;
