import React from 'react';
import styled from 'styled-components'
const Cardstatsicon = (props) => {
    return (
        <Card>
            <div className="text col-9">
                <div className="title">
                    {props.title}
                </div>
                <div className="subtitle">
                    {props.subtitle}
                </div>
                <div className="textLink">
                    {props.textLink}
                </div>
            </div>
            <div className="icon col-3">
                <Ellipse427>
                   {props.icon}
                </Ellipse427>
            </div>
        </Card>
    );
}

export default Cardstatsicon;

const Card = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 16px 21px;
width:350px;
min-height: 155px;
height:auto;
background: #FFFFFF;
box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
border-radius: 16px;

.text{
    display:flex;
    flex-direction: column;
}
.title{
    font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
/* identical to box height */


/* Action Primary/Default */

color: #124596;


}
.subtitle{
    /* rc-subTitle-card-14 */

font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
font-feature-settings: 'salt' on;
margin-bottom:23px;
margin-top:5px;

color: #6D7580;
}
.textLink{
    font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

display: flex;
align-items: center;
text-decoration-line: underline;

/* Action Primary/Default */

color: #124596;
}
`

const Ellipse427 = styled.div`
width: 81px;
height: 81px;
left: 0px;
top: 0px;
border-radius: 50%;
/* Neutral / Neutral 9 */
background: #F4F6F9;
justify-content:center;
align-items:center;
display: flex;
font-size:34px;
`
