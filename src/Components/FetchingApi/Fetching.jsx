import React,{useState,useEffect} from 'react'

const Fetching = () => {
    const [state,setState] = useState([]);

    useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(response => response.json())
        .then(data =>{
            setState(data)
        })
    },[])
  return (
    <React.Fragment>
        <div className="container mt-3">
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>USER id</th>
                        <th>FullName</th>
                        <th>BODY</th>
                    </tr>
                </thead> 
               <tbody>
              
               {
                 state.photos.map(val => 
                    <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.camera.full_name}</td>
                    <td>{val.body}</td>
                    </tr>
                    )
               }
              
                </tbody>
            </table>
        </div>
    </React.Fragment>
  )
}

export default Fetching;