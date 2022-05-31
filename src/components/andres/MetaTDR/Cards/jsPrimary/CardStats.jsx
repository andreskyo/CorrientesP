import React from 'react'
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
const CardComponentStats = styled(Card)`
&&{
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    //hover:
    
    border-radius: 16px;
    display:flex;
    width:100%;
}

&&:hover{
    box-shadow: 0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.1), 0px 6px 12px rgba(14, 31, 53, 0.08);
}

.cardHeader{
    width:100%;
}
.css-sgoict-MuiCardHeader-action{
    align-self: center;
}
.icon{
    width: 50px;
    height: 50px;
    background: #E2E8F0;
    color:#27272A;
}
.css-1qvr50w-MuiTypography-root {
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #27272A;
}
.css-nrdprl-MuiTypography-root {
    font-family: 'SF UI Text';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #78716C;
}
.container-button > .button{
    padding:0px;
}
`
const CardStats = (props) => {
    return (
        <CardComponentStats >
            <CardHeader
                className="cardHeader"
                action={
                    props.datosCardStats.icon ?
                        <Avatar
                            className="icon"
                            aria-label="recipe">
                           {props.datosCardStats.icon}
                        </Avatar>
                        : null
                }
                title={props.datosCardStats.titulo ? props.datosCardStats.titulo : null}
                subheader={
                    <>
                        {props.datosCardStats.sub ? props.datosCardStats.sub : null}
                        <br />
                        {props.datosCardStats.sub ? <div className="container-button">{props.datosCardStats.button}</div>: null}
                    </>
                }
            />
        </CardComponentStats >
    )
}
export default CardStats