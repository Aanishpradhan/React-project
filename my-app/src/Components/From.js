import React, { Component } from 'react';

 class From extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'react'
      }
    }
    handleUserChange= event => {
        this.setState({
            username:event.target.value
        })
    }
    handleCommentChange= event=> {
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChange=event=> {
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit= event=>{
      alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
      event.preventDefault()
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
    <div>
    
        <lable>Username</lable>
        <input type="text"
         value={this.state.username}
         onChange={this.handleUserChange}/>
       
    </div>
    <div>
        <lable>Comments</lable>
        <textarea 
        value={this.state.comments}
        onChange={this.handleCommentChange}/>
    </div>
    <div>
        <label>Topic</label>
        <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
        </select>
    </div>
     <button type="submit">Submit</button>
    </form>
    )
    
  }
}

export default From;
