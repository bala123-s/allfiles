import React,{useState} from 'react'

const TwoWayDataBinding = () => {
    const [state,setState] = useState("Bala")
    let handlerChange = (e) => {
        setState(e.target.value)
    }
  return (
    <React.Fragment>
        <div className='container mt-4'>
            <input type="text" value={state} onChange={handlerChange}/>
            <p>Hello ! {state}</p>
        </div>
    </React.Fragment>
  )
}

export default TwoWayDataBinding;