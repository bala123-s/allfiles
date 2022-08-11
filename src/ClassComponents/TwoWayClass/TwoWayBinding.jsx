import React, {Component} from "react";

export default class TwoWayBinding extends Component{
    constructor(){
        super()
        this.state = {
            username : "john",
        }
        //this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({
            username : e.target.value
        })
        //console.log(e.target.value)
    }
    render(){
        return(
            <React.Fragment>
                <div>
                    <input type="text" value={this.state.username} onChange={this.handleChange.bind(this)}/>
                </div>
                <br/>
                <p>Hello ! {this.state.username}</p>
            </React.Fragment>
        )
    }
}