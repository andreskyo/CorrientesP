import React , {useState} from 'react';
import styled from "styled-components"
const Inputsearch = () => {
    const [input, setInput] = useState("");
    
    return (
        <Styled>
            <div className="content-search" > 
            <i className="fas fa-search"></i>
              <StyledSearch className="input-field" placeholder="Buscar en rentas" value={input} onChange={(e)=>setInput(e.target.value)} onBlur={() =>setInput("")} />
            </div> 
        </Styled>
    );
}

export default Inputsearch;
const Styled = styled.div`
  .content-search {
    display: flex;
  border-box:content-box;
  width:100%;
  background: #F1F3F4;
  border-radius: 40px ;
  
  padding:5px;
  
  }
  .fa-search{
    color:#858C94 !important;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size:18px;
     
  }
`

const StyledSearch = styled.input`
width:100%;
background: #F1F3F4;
border: 0;  
borderWidth:0;
:focus {
  border: 0;  
borderWidth:0;
outline: none;

}
 `