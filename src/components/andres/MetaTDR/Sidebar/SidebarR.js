import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Collapse from '@mui/material/Collapse';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};

const Div = styled.div`
width:100%;
height:100%;
padding:0px 0px 0px 0px;
background:white;
box-shadow: -15px 0px 40px -1px rgba(14, 31, 53, 0.2);
border-radius: 16px 0px 0px 16px;

.closeIcon{
    @media ${device.mobileS} {
        font-size:25px;
        margin-top: 15px !important;
    }  
    margin-top: 20px !important;   
    cursor:pointer;  
}
.iconBuscar{
    @media ${device.mobileS} {
        font-size:17px;
        margin-top:7px;
}
position:absolute;
margin-left: 30px;
margin-top:10px;
}
input{
    @media ${device.mobileS} {
        font-size:15px;
        height: 0px;
        
        margin-top:10px;
}

background: #F6F8FA;
border-radius: 5px;
margin:10px 20px 0px 0px;
padding-left:50px;


}
fieldset{
border:none;
border-radius: 5px;
}
.tituloActividad{
    @media ${device.mobileS} {
    font-size: 15px;
    
}
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 24px;
color: #124596;
margin-top:16px;
margin-left:10px;
text-transform:none;
:hover{
    background:none;
}
}
`
const DivCards = styled.div`

margin-top: 22px;
border-bottom:1px solid #F4F6F9;
height: 100%;
margin-left:0px;
margin-right:0px;
.id{
    @media ${device.mobileS} {
    font-size: 11px;
    line-height: 1px;
}
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 16px;
color: #858C94;
}
.description{
    @media ${device.mobileS} {
    font-size: 14px;
}
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 18px;
color: #09101D;
}
.alic{
    @media ${device.mobileS} {
    font-size: 12px;
    margin-top:-10px;
}
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 19px;
line-height: 16px;
color: purple;
}
&&:hover{
background: #e8e3e2 ;
cursor:pointer;
}
`
const StackButtons = styled(Stack)`
&&{
    @media ${device.mobileS}{
        margin-top: 0rem !important;
}
margin-top: 2.0rem !important;  
display:flex;
justify-content:space-around;
flex-direction:row;
padding:40px;
}
>.aceptar{
    @media ${device.mobileS}{
     width:45%;
     height:60%;
     margin-top:10px;
}    
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 17px;
color: white;
line-height: 25px;
text-transform:none;
padding:10px;
width:30%;
:hover{
background:green;
}
}
>.cancel{
    @media ${device.mobileS}{
     margin-top:10px;
     width:45%;
     height:60%;
}    
font-family: Nunito;
font-style: normal;
font-weight: bold;
font-size: 17px;
color: red;
line-height: 25px;
text-transform:none;
padding:10px;
width:30%;
:hover{
background:none;
}
}
`
const Div2 = styled.div`
.active{
    
padding:0px;
background: #e8e3e2;
}
.inactive{
background: transparent; 
padding:0px;
}
`
const StackPagination = styled(Stack)`
.css-md9dl7-MuiButtonBase-root-MuiPaginationItem-root{
    @media ${device.mobileS}{
     font-size: 11px;
     margin:-4px;
}
}
 &&.mt-5{
      @media ${device.mobileS}{
     margin-top: 1rem !important;
}}
`
/*-----------------*/

export const SidebarR = ({ disabled, datos, ...props }) => {

    const [selected, setSelected] = React.useState(true);
    const [selectedItem, setselecteditem] = React.useState();

    const [text, setText] = React.useState();
    const [filtrados, setFiltrado] = useState(datos);
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(3)

    const handleChangePage = (event, newPage) => {
        setselecteditem();
        setPage(newPage);
        console.log(newPage)
    };

    const handleBuscador = (e) => {
        const cadena = e.target.value.toLowerCase();
        let tmpArray = [];
        const limite = datos.length;

        for (let index = 0; index < limite; index++) {

            const description = datos[index].description.toLowerCase();
            const id = datos[index].id;

            const patt = new RegExp(cadena)
            const res = patt.test(description)
            const ress = patt.test(id)


            if (res || ress) {
                tmpArray.push(datos[index])
            }

        }
        setFiltrado(tmpArray);
        setPage(1);

    }

    const handleChange = (e) => {
        let valor = e;
        setSelected(false)
        return setText(`${valor.id} - ${valor.description} - ${valor.alic}`)
    }

    const handleChangeCancel = () => {
        setSelected(true)
        setselecteditem()
    }


    const handleChangeAceptar = () => {
        alert(text)
    }

    const handleCerrar = () => {
        if (props.cerrar) {
            props.cerrar();
        }
    }


    const renderCards = () => {
        let resultado = filtrados && filtrados.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((data, i) => {

            return <div>

                <div
                    className={selectedItem === i ? "active  container-fluid m-0" : "inactive container-fluid m-0"}
                    key={i}
                    onClick={() => { setselecteditem(i); handleChange(data) }} >

                    <DivCards
                        className="row p-2 ">

                        <Typography
                            sx={{ mb: 1.5 }}
                            className="id">
                            {data.id}
                        </Typography>

                        <Typography
                            sx={{ mb: 1.5 }}
                            className="description"
                            color="text.secondary">
                            {data.description}
                        </Typography>

                        <Typography
                            variant="body2"
                            className="alic">
                            {data.alic}
                            <br />
                        </Typography>

                    </DivCards>

                </div>

            </div>
        })
        return resultado;
    }

    return (
        <div>
            {disabled === false ?
                <Div
                    className="container-fluid m-0 " >
                    <div
                        className="row ">
                        <div
                            className="col-12 d-flex "
                            style={{ borderBottom: "1px solid #F4F6F9" }}>
                            <CloseIcon
                                className="mt-4 closeIcon"
                                onClick={handleCerrar}
                                sx={{ fontSize: 30 }} />
                            {props.bActividad}
                        </div>


                        <div
                            className="col">

                            <TextField
                                className='inputBuscar'
                                fullWidth
                                placeholder='Buscar...'
                                onChange={handleBuscador}
                                InputProps={{
                                    startAdornment:
                                        <InputAdornment position="start">
                                            <SearchIcon className="iconBuscar" />
                                        </InputAdornment>
                                    ,
                                }}
                                type="search" />
                        </div>
                    </div>



                    <Div2
                        className="row">

                        {renderCards()}
                        <br />


                        {selected === true ?

                            <StackPagination
                                className="mt-5"
                                id="table"
                                spacing={0}>

                                <Pagination

                                    count={filtrados.length % rowsPerPage ? Math.floor(filtrados.length / rowsPerPage) + 1 : Math.floor(filtrados.length / rowsPerPage)}
                                    size="medium"
                                    page={page}
                                    color="primary"
                                    onChange={handleChangePage}
                                />


                            </StackPagination>

                            :

                            <StackButtons
                                className="mt-5"
                                spacing={0}>
                                <Button
                                    onClick={handleChangeCancel}
                                    disableRipple
                                    variant="outlined"
                                    color="error"
                                    className="cancel">
                                    Cancelar
                                </Button>

                                <Button
                                    onClick={handleChangeAceptar}
                                    disableRipple
                                    variant="contained"
                                    color="success"
                                    className="aceptar"  >
                                    Aceptar
                                </Button>


                            </StackButtons>}

                    </Div2>


                </Div>

                : null}


        </div>
    )

};

