import React, { Component } from 'react';

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoadingIn: true
      }
    }
    
   render() {
       return(
           this.state.isLoadingIn && <div>Welcome aryan</div>// short circuit operator
        //    this.state.isLoadingIn ?//ternary conditional operator
        //    <div>welcome aryan</div>
        //    :
        //    <div>welcome to Guest</div>
)
    //    let message         //element varibles
    //    if (this.state.isLoadingIn) {
    //        message= <div>welcome aryan</div>
           
    //    }else {
    //        message= <div>Welcome to Guest</div>
    //    }
    //    return <div>{message}</div>
//       if(this.state.isLoadingIn){         //if/else
//           return (<div>
//           Welcome aryan
//           </div>
//           )
//       }else{
//           return <div>welcome to Guest</div>
//       }
    // return( <div>
    // <div>Welcome aryan</div>
    // <div>Welcome to Guest</div>
    // </div>
    // )
           }
}

export default UserGreeting;
