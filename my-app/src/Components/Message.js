import React,{Component} from 'react'

export default class Welcome extends React.Component {
    constructor(){
        super()
        this.state= {
            message: 'Welcome visitors'
        }
    }
    changeMessage(){
        this.setState({
            message: "thank you for subscribing"
        })
    }
    
    render(){
        return(
            <div>
         <h1>
        {this.state.message}
       
        </h1>
        <button onClick={() =>this.changeMessage()}>subscribe</button>
        </div>
        ) 
    }
}
//export default Welcome