import React from 'react';
import styled from "styled-components";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import MailOutlineIcon from '@mui/icons-material/MailOutline';



const ListItemm = styled(ListItem)`
.css-ifsx5j-MuiList-root-MuiMenu-list{
padding-top: 0px;
}
&&.inactive{
    background-color: rgba(14, 31, 53, 0.08);
  p{
    color: black;
  }  
  p.textVencimiento{
      color:black;
      font-weight: bold;
  }
}

.textHora{
font-family:'Nunito';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 0px;
font-feature-settings: 'ss07' on;
color: #6D7580;
opacity: 0.64;
}
.textMulta{
font-family: 'Nunito';
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 14px;
font-feature-settings: 'ss07' on;
color: #6D7580;

}
.textVencimiento{
font-family: 'Nunito';
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 0px;
font-feature-settings: 'ss07' on;
color: #09101D;

}
img{
    margin-bottom:10px;
    
}
`
const Menuu = styled(Menu)`

.css-ifsx5j-MuiList-root-MuiMenu-list{
padding-top: 0px;
padding:0px;
}
height:100%;



`
const MenuCorreo = (props) => {

    const [datos, setDatos] = React.useState(props.datos)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(event)
    };
    const handleClose = () => {
        setAnchorEl();
    };

    const cambiar = (i) => {
        if (props.onChange) {
            props.onChange(datos[i])
        }
        setDatos((prev) => Object.assign([], { ...prev, [i]: Object.assign({}, { ...prev[i], leido: true }) }));


    }

    const render = () => {
        let resultado = datos.map((result, i) => {
            return <>
                <List style={{ padding: "0" }}>
                    <ListItemm

                        button
                        disableRipple
                        key={i}
                        className={result.leido ? "active " : "inactive"}
                        onClick={() => { cambiar(i) }}
                    >

                        <ListItemAvatar>
                            {result.imagen}
                        </ListItemAvatar>

                        <ListItemText>
                            {result.textHora}
                            {result.textMulta}
                            {result.textVencimiento}
                        </ListItemText>

                    </ListItemm>
                </List>
            </>


        })
        return resultado;

    };



    return (
        <>

            <React.Fragment className="container-fluid m-0">

                <IconButton
                    className="IconNotificacion"
                    disableRipple
                    onClick={handleClick}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}>

                    <Badge badgeContent={datos.filter(x => x.leido === false).length} color="primary" >


                        <MailOutlineIcon
                            className="imgIconMail"
                            style={{ color: "black" }}>
                        </MailOutlineIcon>





                    </Badge>

                </IconButton>


                <Menuu
                    anchorEl={anchorEl}
                    disableRipple
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    MenuListProps={{ "aria-labelledby": "basic-button" }}
                    PaperProps={{
                        sx: {
                            filter: "0px 1px 4px rgba(14, 31, 53, 0.12), 0px 4px 8px rgba(14, 31, 53, 0.08);",
                            ml: 0,
                            background: "#FFFFFF",
                            borderRadius: "8px",
                            position: "sticky",
                            height: "auto",
                            "&::-webkit-scrollbar": {
                                width: 5,
                                height: 6,
                            },
                            "&::-webkit-scrollbar-track": {
                                marginBottom: 6,
                                marginTop: 9,
                            },

                            "&::-webkit-scrollbar-thumb": {
                                backgroundColor: "#E1DCDC",
                                borderRadius: 7,
                            }
                        }
                    }}>

                    {datos.length ?
                        <>
                            <div className="row-fluid d-flex"
                                style={{ position: 'sticky', top: "0", zIndex: "1", margin: "auto", background: "white", width: "auto", padding: "6px" }}>



                                <div className=" d-flex col-9 "> {props.iconMail}{props.domicilioFiscal}</div>

                                <div className=" col-3 mt-3 "
                                    style={{ background: "#22AADE", width: "auto", height: 30, borderRadius: 12, color: "#FFFFFF", fontSize: 12, padding: 5, fontFamily: "Nunito" }}>
                                    {datos.filter(x => x.leido === false).length} nuevos
                                </div>


                            </div>
                            {render()}

                            <div div className="container-fluid" style={{ position: 'sticky', bottom: "0", margin: "auto", background: "white", width: "100%", padding: "10px" }}>

                                <div className="text-center" >  {props.linkNotificaciones} </div>
                            </div>

                        </>
                        :

                        <>
                            {props.imagenNotificacion}
                            {props.notificacion}
                            {props.subNotificacion}
                            {props.buttonCorreo}
                        </>
                    }

                </Menuu>

            </React.Fragment >


        </>
    )
}
export default MenuCorreo