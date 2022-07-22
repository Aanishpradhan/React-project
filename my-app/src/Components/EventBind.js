import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:'hello world'
         }
     }
    ClickHandler() {
        this.setState({
            message:'good byee'
        })
        console.log(this)
    }
     
    render() {
        return (
            <div>
            <div>{this.state.message}</div>
                <button onClick={this.ClickHandler.bind(this)}>Click</button>
            </div>
        )
    }
}

export default EventBind
