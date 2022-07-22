import React, { Component } from 'react'

 class ClassClick extends Component {
        ClickHandler(){
         console.log('this is the event handline')
     }
    render() {
        return (
            <div>
               <button onClick={this.ClickHandler}>Click Me</button> 
            </div>
        )
    }
}

export default ClassClick
