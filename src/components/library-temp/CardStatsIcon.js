import React from 'react';
import styled from 'styled-components'
const Cardstatsicon = (props) => {

    
    
    const onClick = () => {
        props.onClick();
    }
    
    
    return (
        < >
            <Styled className="card-servicios h-100 col-12 col-lg needHelpRowWrapper__card splide__slide" onClick={onClick} >
                <div className="row needHelpCard">
                    <div className="col needHelpCard__text">
                        <p className="needHelpCardText__title"><strong>{props.title}</strong></p>
                        <p className="needHelpCardText__description">{props.subtitle}</p>
                        <a  className="needHelpCardText__btn textLink ">{props.textLink}</a>
                    </div>
                {props.icon?
                <div className="needHelpCard__icon icon-icon">
                    
                    <span className="icon-icon">{props.icon}</span>
                   
                   
                    
                </div> :null }
            </div>
            </Styled>
        </>
    );
}
const Styled = styled.div`

:hover{
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
}

.textLink{
font-family: 'Nunito';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
display: flex;
align-items: center;
text-decoration-line: underline;
color: #124596;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 5px 0px;
}

.icon-icon{
    font-size: 28px;
    background: #E2E8F0;
    border-radius: 60px;
    padding: 5px;
}


    background: #FFFFFF;
    padding: 15px;
    flex-direction:row;
    box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
    border-radius: 16px;
    margin:8px;
    cursor:pointer;

    


`
export default Cardstatsicon;


