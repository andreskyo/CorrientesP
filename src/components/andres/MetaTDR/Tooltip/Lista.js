import React from 'react'




const lista = (props) => {

    
    const renderLista = () => {
        let resultado = props.data.value.map((res) => {
            
            return  <>
            
                <div className="col-6 text-center">
                
                    <ul className="list-group">

                        <li className="list-group-item">{res.label}</li>
                        
                    </ul>


                </div>
                <div className="col-6  text-center">
                    <ul className="list-group">
                        <li className="list-group-item" style={{fontWeight:"bold",color:"#09101D"}} >{res.value}</li>
                    </ul>
                </div>
            </>
        })


        return resultado

    }



    return (
        <>
    

            {renderLista()}
            
        </>
    )
}

export default lista