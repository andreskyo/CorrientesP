import React from 'react'


const Planes = (props) => {

  const renderPlanes = () => {
    let resultado = props.data.value.map((res, i) => {
      return <>
        {props.vencimiento === false ? res.label === "Planes" ? <>
          <div className="col-6">
            <ul className="list-group">
              <li className="list-group-item text-center">{res.label}</li>
              <li className="list-group-item text-center">{res.value}</li>
            </ul>
          </div>
          <div className="col-6">
            <ul className="list-group">
              <li className="list-group-item text-center">{res.estado}</li>
              <li className="list-group-item text-center">{res.color}{res.value}</li>
            </ul>
          </div>
        </> : null : null}
        {props.vencimiento === true ? res.label === "Vencida" ? <>
          <div className="col-6">
            <ul className="list-group">
              <li className="list-group-item text-center">{res.label}</li>
              <li className="list-group-item text-center">{res.value}</li>
            </ul></div>
          <div className="col-6">
            <ul className="list-group">
              <li className="list-group-item text-center">{res.estado}</li>
              <li className="list-group-item text-center">{res.color}{res.label}</li>
            </ul>
          </div>
        </> : null : null}
      </>
    })
    return resultado
  }
  return (
    <>
      {renderPlanes()}
    </>
  )
}

export default Planes