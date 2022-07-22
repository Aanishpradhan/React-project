import React, { Component } from 'react';

 class LifecycleB extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:'Aryan'
       }
       console.log('LifecycleB constructor')
     }
     static getgetDerivedFromProps(props,state) {
         console.log('LifecycleB getDerivedFromProps')
         return null
     }
     shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpadte')
        return true
    }
     getSnapshotBeforeUpdate(){ 
        console.log('LifecycleB getSnapshotBeforeUpdate')
    }
     componentDidMount() {
         console.log('LifecycleB componentDidMount')
     }
  render() {
      console.log('LifecycleB render')
    return(
         <div>Lifecycle B
         </div>
    )
  }
}

export default LifecycleB;
