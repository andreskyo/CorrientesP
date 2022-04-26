import React from 'react';
import styled from 'styled-components'
const Cardstatsicon = (props) => {
    return (
        <>
            <Styled className="col-12 col-lg needHelpRowWrapper__card splide__slide">
                <div className="row needHelpCard">
                    <div className="col needHelpCard__text">
                        <p className="needHelpCardText__title"><strong>{props.title}</strong></p>
                        <p className="needHelpCardText__description">{props.subtitle}</p>
                        <a href="#" className="needHelpCardText__btn textLink ">{props.textLink}</a>
                    </div>
                <div className="needHelpCard__icon">
                    <span className="icon-icon"><i className="fa fa-svg fa-comment fa-fw "></i></span>
                </div>
            </div>
            </Styled>
        </>
        




        /*<Card classNameName={props.clases?`${props.clases} `:""}>
            <div classNameName="text col-9">
                <div classNameName="title">
                    {props.title}
                </div>
                <div classNameName="subtitle">
                    {props.subtitle}
                </div>
                <div classNameName="textLink">
                    {props.textLink}
                </div>
            </div>
            <div classNameName="icon col-lg-3 col-md-4 ">
                <Ellipse427>
                   {props.icon}
                </Ellipse427>
            </div>
        </Card>*/
    );
}
const Styled = styled.div`

.textLink{
font-family: 'Nunito';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

display: flex;
align-items: center;
text-decoration-line: underline;

/* Status/Neutral/Action Primary/Default */

color: #124596;

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 5px 0px;
}

.icon-icon{
    font-size: 36px;
    background: #E2E8F0;
border-radius: 60px;
}

`
export default Cardstatsicon;


