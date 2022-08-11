import React,{Component} from "react";
export default  class TwoWayClaa extends Component{
  constructor(){
    super()
    this.state = {
        title : "bala",
        role : "Ui Developer",
        location : ["Ts","Ap"]
    }
    
  }
   render(){
     return(
     <React.Fragment>
      <h5>{this.state.title}</h5>
      <h5>{this.state.role}</h5>
      <h5>{this.state.location[1]}</h5>
     </React.Fragment>
     )
   }
}
// import React, { Component } from 'react'

// export default class TwoWayClaa extends Component {
//   render() {
//     return (
//       <div>TwoWayClaa</div>
//     )
//   }
// }

