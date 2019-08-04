import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Counter from "./Counter"
import Counter1 from "./Counter1"
import VanTilt from './VanTilt'
import StopWatch from './StopWatch'
import StopWatchReducer from './StopWatchReducer'
import  StopWatchRedSimple from './StopWatchRedSimple'
import StopWatchCustom from './StopWatchCustom'
import Dice from './dice/Dice'
import Lottery from './lottery/Lottery'
import CoinHolder from './coinflip/CoinHolder'
import Hangman from './hangman/Hangman'
import Game from './lightsgame/Game'
import Boxholder from './boxform/Boxholder'
import ToDoApp from './todo/TodoApp'
import Appy from './yahtze/Appy'
import CardApp from './cards/CardApp'
import Header from "./Header"
import './App.css';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Header/>
  <Switch>
  <Route path ="/counter" exact component ={Counter}/>
  <Route path ="/counter1" exact component ={Counter1}/>
  <Route path = "/vantilt" component = {VanTilt}/>
  <Route path ="/stopwatch" component ={StopWatch}/>
  <Route path ="/stopwatchreducer" component ={StopWatchReducer}/>
  <Route path ="/stopwatchredsimple" component ={ StopWatchRedSimple}/>
  <Route path = '/usestopwatch' component ={StopWatchCustom}/>
  <Route path ="/dice" component={Dice}/>
  <Route path ="/lottery" render ={()=>(<Lottery bonus ={true}/>)}/>
  <Route path ="/coin" component ={CoinHolder}/>
  <Route path ='/hangman' component = {Hangman}/>
  <Route path ='/lightsgame' component = {Game}/>
  <Route path = '/boxform' component = {Boxholder}/>
  <Route path ="/todo" component = {ToDoApp}/>
  <Route path ="/yahtze" component ={Appy}/>
  <Route path = "/cards" component ={CardApp}/>
  </Switch>
  
  </BrowserRouter>
    </div>
  );
}

export default App;
