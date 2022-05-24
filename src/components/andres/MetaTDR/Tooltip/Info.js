import React from 'react'



const Info = (props) => {

    return (
        <>
        <div className="container mt-2" style={{ padding: "5px" }} >
            <div className="row" style={{ background: "#F4F6F9",  padding: "10px" ,margin:"auto",width:"70%"}}>
                <p className="text-center" style={{ color: "#545D69", fontSize: "16px", fontFamily: "Nunito", fontWeight: "500" }}>{props.data.label}</p>
            </div>
        </div>
        </>
    )
}

export default Info