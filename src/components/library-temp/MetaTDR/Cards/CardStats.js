import React from 'react'
import styled from "styled-components"

const Cardstatsimage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 21px;
  position: static;
  width: 350px;
  height: 113px;
  left: 80px;
  top: 2292px;
  /* White */
  background: #FFFFFF;
  /* shadow/multi/sm-2 */
  box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12), 0px 1px 4px rgba(14, 31, 53, 0.06);
  border-radius: 16px;
  justify-content: space-between;

  `
  const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  `
  const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.3125rem;
  `
  const Text1 = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 16px;
    font-family: Nunito;
    line-height: auto;
    color: #124596;
  `
  const Text2 = styled.div`
    text-align: left;
    vertical-align: top;
    color: #27272E;
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 21px;
  `

  const Frame2832 = styled.div`
    height: 81px;
    width: 81px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  `
  const Ellipse427 = styled.div`
    width: 81px;
    height: 81px;
    left: 0px;
    top: 0px;
    border-radius: 50%;
    /* Neutral / Neutral 9 */
    background: #F4F6F9;
    `
  const Img4 = styled.img`
    
    height: 48px;
    width: 48px;
    background-color: #FFFFFF;
  `

  const Info = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;

   
   
   
    top: 73px;
  
  `

  const InfoText = styled.div`
    position: static;
    width: 76px;
    height: 23px;
    left: 64px;
    top: 0.5px;

    /* rc-info-card-RG-10 */

    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 23px;
    /* identical to box height, or 230% */

    display: flex;
    align-items: center;
    font-feature-settings: 'salt' on;

    /* Action Primary/Default */

    color: #124596;


    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 10px;
        
    `

    const Badge = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2px 8px;
    justify-content:center;
    position: static;
    width: 54px;
    height: 24px;
    left: 0px;
    top: 0px;

    /* Theme/Success/Soft */

    background: #DEFFEE;
    border-radius: 6px;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 10px 0px;
    `
    const TextBadge = styled.div`
    position: static;
    width: 34px;
    height: 16px;
    left: 2px;
    top: 2px;

    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 16px;
    /* identical to box height, or 160% */

    display: flex;

    justify-content:center;
    align-items: center;
    /* Theme/Success/Default */

    color: #66CB9F;


    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 6px;
    `




const CardStats = props => {
    return (
        <div className="col-12">
            <Cardstatsimage>
                <Content col-10>
                    <Text>
                        <Text1>{props.headline}</Text1>
                        <Text2>${props.number}</Text2>
                        
                    </Text>
                    <Info>
                        <Badge>
                            <TextBadge>100%</TextBadge>
                        </Badge>
                        <InfoText>history</InfoText>
                    </Info>
                       
                    
                    </Content>
                <Frame2832 className="col">
                    <Ellipse427 >
                   
                    </Ellipse427>
                </Frame2832>
            </Cardstatsimage>
        </div>
       
       
    
        
    )
}

export default CardStats;



