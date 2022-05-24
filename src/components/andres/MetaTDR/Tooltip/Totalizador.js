import React from 'react'



const Totalizador = (props) => {

  return (
    <>
      <hr style={{width:"80%",margin:"auto",marginTop:"20px"}}/>
      <div className="col-6">
          <ul className="list-group">
            <li className="list-group-item text-center" style={{color:"#19AB4F"}}>{props.data.label}</li>
          </ul>


        </div>
        <div className="col-6">
          <ul className="list-group">
            <li className="list-group-item text-center" style={{color:"#19AB4F",fontWeight:"bold"}}>$ {props.data.value}</li>
          </ul>
        </div>
    </>
  )
}

export default Totalizador