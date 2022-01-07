import React from 'react';
import styled from 'styled-components'






const Cardinfofull = () => {
    return (
        <Card>
            <Row className="row">
                <Description>
                <Frame2832>
                        <Text1>
                            Percepciones - Monto a pagar
                        </Text1>
                        <Badge>
                            <BadgeText>
                              <ContainerBadge>En Mora</ContainerBadge>
                            </BadgeText>
                        </Badge>
                    </Frame2832>
                    
                    
                    <Status>
                        <Price> $151.297.46151.5</Price>
                    </Status>

                    
                </Description>
            </Row>
            <Info>
                <TextInfo>
                    54 DDJJ incumplidas
                </TextInfo>
                <TextDetail>
                    Ver Detalle 
                </TextDetail>
            </Info>
        </Card>
    );
}

export default Cardinfofull;

const Card = styled.div`
/* card-info-full */


position: static;
width: 351px;
height: auto;
background: #FFFFFF;
box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
border-radius: 16px;
padding: 20px 0px 27px 0px;
`


const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px;
margin: 0px 24px;

`

const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 0px;
height: auto;
margin: 10px 24px 2px 24px;

`

const Description = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
height: auto;

`

const Frame2832 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
margin: 5px 0px;
`

const Status = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
position: static;
width: 100%;
height: auto;
margin: 5px 0px;
`


const Price = styled.div`
position: static;
width: 100%;
height: 22px;
font-family: 'Nunito', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 21px;
display: flex;
align-items: center;
color: #09101D;
margin: 0px 5px;

`

const Text1 = styled.div`
position: static;
width: 163px;
height: 16px;
left: 0px;
top: calc(50% - 16px/2);
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
color: #858C94;

margin: 0px 5px;

`

const Badge = styled.div`
/* badge */


/* Auto Layout */

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2px 8px;

position: static;
width: 59px;
height: 24px;
left: 168px;
top: 0px;
background: #B95000;
border-radius: 6px;
margin: 0px 5px;
`

const BadgeText = styled.div`
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 10px;
line-height: 16px;
display: flex;
align-items: center;
color: #FFFFFF;
`

const ContainerBadge = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 2px;
position: static;
width: 43px;
height: 20px;
left: 8px;
top: 2px;
`

const TextInfo = styled.div`
position: static;
width: 130px;
height: 23px;
left: 0px;
top: 0px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 23px;
/* identical to box height, or 164% */

display: flex;
align-items: center;
font-feature-settings: 'salt' on;

/* Neutral / Neutral 3 */

color: #545D69;

margin: 0px 5px;


`
const TextDetail = styled.div`
/* Ver detalle */


position: static;
width: 100%;
height: auto;
left: 0px;
top: 23px;

/* rc-txt-link */

font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
display: flex;
align-items: center;
text-decoration-line: underline;
color: #124596;
margin: 0px 5px;

`