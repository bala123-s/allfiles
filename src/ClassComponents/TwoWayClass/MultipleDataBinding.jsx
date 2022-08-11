import React, { Component } from 'react'

export default class MultipleDataBinding extends Component {
        constructor(){
            super()
            this.state = {
                username : "john",
            }
            //this.handleChange = this.handleChange.bind(this)
        }
        handleChange(){
            this.setState({
                username : console.log(this.state.username)
            })
        }
        render(){
            return(
                <React.Fragment>
                    <div>
                        <input type="text" value={this.state.username} onChange={this.handleChange.bind(this)}/>
                    </div>
                    <br/>
                    <button onClick={this.state.handleChange}>Submit</button>
                </React.Fragment>
            )
        }
    }

