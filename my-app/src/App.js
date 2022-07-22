import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import Stylesheets from './Components/Stylesheets';
import InLine from './Components/InLine';
// import './appStyle.css'
import style from './appStyles.module.css';
import From  from './Components/From';
import LifecycleA  from './Components/LifecycleA';


export default class App extends Component {
  render() {
    return (  
      <div className="App">
      <LifecycleA/>
      {/* <From/> */}
     {/* <h1 className='error'>error</h1>
     <h1 className={style .success}>success</h1> */}
      {/* <InLine/> */}
      {/*<Stylesheets primary={false} />*/}
      {/*<NameList/>*/}
    
     {/* <UserGreeting/>*/}
   {/*   <EventBind/>*/}
      {/*<ParentComponent/>*/}
      {/*<ClassClick/>*/}
      {/*<Message/>*/}
       {/*} <Counter/>*/}
      {/*<Greet name="ankit" heroName="batman">
      <p>this is childern props</p>
      </Greet>
      <Greet name="amit" heroName="spider">
      <button>action</button>
      </Greet>
      <Greet name="anish" heroName="kapur"/>
      <Welcome name="arbind" heroName="superman"/>
      <Welcome name="arbind" heroName="superman"/>
      <Welcome name="arbind" heroName="superman"/>*/}
    { /*<Hello/>*/}
    {/*<FunctionClick/>*/}
      </div>
    )
  }
}


