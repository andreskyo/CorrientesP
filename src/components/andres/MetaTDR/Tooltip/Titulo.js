import React from 'react'




const Titulo = (props) => {



  return (
    
   <>  
   
   <div className="col-6">
   <ul className="list-group text-center">
     <li className="list-group-item" style={{color:"#545D69",fontWeight:"bold"}}>{props.data.label}</li>
   </ul>


  </div>
  <div className="col-6">
    <ul className="list-group text-center">
      <li className="list-group-item" style={{color:"#545D69",fontWeight:"bold"}}>{props.data.value}</li>
    </ul>
  </div></>
  )
}

export default Titulo