import React, {useState} from 'react'

const OneWayData = () => {
    const [state,setState] = useState(["tv","mobile","2021"]);
  return (
    <React.Fragment>
        <div className="container">
          <ol>            {
              state.map(val=>
                <li>{val}</li>
              )
            }
            </ol>

        </div>
    </React.Fragment>
  )
}

export default OneWayData;