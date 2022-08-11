import React, { useState,useEffect } from 'react'

const ShoppingComponent = () => {
    const [categorys,setCategorys] = useState([]); 
    const [product,setProduct] = useState([])

     //add to cart
    const [cart,setCart] = useState([])

    //display all products
    let LoadCategirys = () =>{
        fetch("https://fakestoreapi.com/products/categories")
        .then(response => response.json())
        .then(data =>{
            data.unshift("All")
            setCategorys(data)
        });
    };

    let LoadProducts = (url) => {
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            setProduct(data)
        })
    }

    //using useEffct to laod category
    useEffect(()=>{
        LoadCategirys();
        LoadProducts("http://fakestoreapi.com/products");
    },[]);

    //load only particular products
    let selectProduct = (e) => {
        if(e.target.value==="All"){
            LoadProducts('http://fakestoreapi.com/products');
        }else{
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`)
        }
    }

    //add to cart
    let addToCratbutton = (e) => {
        alert("added to cart")
        fetch(`http://fakestoreapi.com/products/${e.target.id}`)
        .then(response => response.json())
        .then(cartData => {
            cart.push(cartData)
            console.log(cartData)
        });
    }
  return (
    <React.Fragment>
        <div className="container-fluid">
            <header className='bg-warning text-center text-white'>
                <h1>shopping cart</h1>
            </header>
           <section className='row'>
            <nav className='col-2'>
                <div>
                    <label>Select a Category</label>
                </div>
                <select className='form-select' onChange={selectProduct}>
                    {
                        categorys.map(value=>
                            <option key={value}>{value}</option>
                            )
                    }
                </select>
            </nav> 

            {/* style={{width:800}} */}
            <main className='col-6 d-flex flex-wrap'>
                    { 
                        product.map(val =>
                            <div  key={val.id} className='card m-2'>
                                <img src={val.image} height="150" width={170} alt=""/>
                                <div className='card-header'>
                                    <p>{val.title.slice(0,10)}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{val.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>{val.rating.rate}</dd>
                                         <button id={val.id} onClick={addToCratbutton} className='btn btn-success'>To Cart</button>
                                    </dl>
                                </div>
                            </div>
                            )
                    }
            </main>
            <div className="col-4">
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                   <tr>
                    {
                        cart.map(vals =>
                            <td key={vals.id}>{vals.price}</td>
                            )
                    }
                   </tr>
                    </tbody>
                </table>
            </div>
           </section>
        </div>
       
    </React.Fragment>
  )
}

export default ShoppingComponent;

    //    function handleAddtoCart(e){
    //         alert("Item Added to Cart");
    //         fetch(`http://fakestoreapi.com/products/${e.target.id}`)
    //         .then(response=> response.json())
    //         .then(data=>{
    //             setCartItems(data);
    //         })
    //         setItemsCount(itemsCount++);
    //         GetCartItemsCount();
    // }
     {/* { 
                        cart.map(val =>
                            <div  key={val.id} className='card m-2'>
                                <img src={val.image} height="150" width={170} alt=""/>
                                <div className='card-header'>
                                    <p>{val.title.slice(0,10)}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{val.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>{val.rating.rate}</dd>
                                         <button id={val.id} onClick={addToCratbutton} className='btn btn-success'>To Cart</button>
                                    </dl>
                                </div>
                            </div>
                            )
                    } */}