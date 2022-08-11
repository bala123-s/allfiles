import React,{Component} from "react";
//import { Component } from "react";

export default class ShopingCart extends Component{
    constructor(){
        super()
        this.state = {
            category : [],
        }
    }
     loadCategory(){
        fetch("https://fakestoreapi.com/products/categories")
        .then(response => response.json())
        .then(data =>{
            this.setCatagory(data)
        })
     }
     componentDidMount(){
        this.loadCategory();
     }

    render(){
        return(
         <React.Fragment>
            <div className="container-fluid m-1">
            <header className="bg-success text-white text-center">
                    <h3>ShoppingCart</h3>
            </header>
            <div className="row">
                <div className="col-2">
                    <div>Select Category</div>
                    <select className="form-select">
                       {/* {
                        this.category.map(val =>
                            <div key={this.val}>{this.val}</div>
                            )
                       } */}
                    </select>
                </div>
            </div>
            </div>
         </React.Fragment>  
        )
    }
}