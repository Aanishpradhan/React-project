import React, { Component } from 'react';
import LifecycleB from './LifecycleB';
 class LifecycleA extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:'Aryan'
       }
       console.log('LifecycleA constructor')
     }
     static getgetDerivedFromProps(props,state) {
         console.log('LifecycleA getDerivedStateFromProps')
         return null
     }
    
     shouldComponentUpdate(){
         console.log('LifecycleA shouldComponentUpadte')
         return true
     }
     getSnapshotBeforeUpdate(){ 
         console.log('LifecycleA getSnapshotBeforeUpdate')
     }
     componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
  render() {
      console.log('LifecycleA render')
    return (
    <div>Lifecycle A
    <LifecycleB/>
    </div>
    )
  }
}

export default LifecycleA;
