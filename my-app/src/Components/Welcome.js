import React,{Component} from 'react'

class Welcome extends React.Component {
    render(){
        return <h1>welcome {this.props.name} a.k.s {this.props.heroName}</h1>
        
    }
}
export default Welcome