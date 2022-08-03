import React, { useEffect, useState } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useParams } from "react-router-dom";
import L from 'leaflet';
import IconDgr from '../../assets/images/icon4.svg'
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  header: {
    fontFamily: "Poppins",
    fontVariant: "small-caps",
    //fontSize: 10,
    fontWeight: "bold",
  },
  location: {
    fontFamily: "Poppins",
    // fontSize: 9,
    //margin: 5,
  },
  type: {
    fontFamily: "Poppins",
    //fontSize: 9,
    fontStyle: "italic",
    color: "#000",
  },
}));

export const iconPerson = new L.Icon({
  iconUrl: IconDgr,
  iconRetinaUrl: require('../../assets/images/logo.svg'),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(40, 40),
  className: 'leaflet-div-icon'
});

export const icon = new Icon({
  iconUrl: IconDgr,
  iconRetinaUrl: require("../../assets/images/logo.svg"),
  className: "leaflet-venue-icon",
  iconSize: [40, 40],
 
});
const style = {
  minWidth: 200,
  height: 600,
  zIndex: 0,
  borderRadius: "20px 0 0 20px" ,
  paddingLeft:0
};

const lotes = [];

  //let latitud = "-27.47789";
  //let longitud="-58.84091";
  //let receptoria = {latitud:latitud, longitud:longitud };
  //lotes.push(receptoria);

const CustomMap = (props) => {
  const classes = useStyles();
  const { id } = useParams();
  
  const [l1, setl1] = useState(0);
  const [ln1, setln1] = useState(0);
  
  const l = props.lotes.map((l) => [l.latitud]);
  const ln = props.lotes.map((l) => [l.longitud]);
  const [map, setMap] = useState(0);
  
  useEffect(() => {
    props.lotes.length <= 0 ? setMap(<h1>Loading</h1>) : 
    console.log("setl0: "+l[0]);
    setl1(l[0]);
    //setl2(l[1]);
    setln1(ln[0]);
    //setln2(ln[1]);
    setMap(
      <MapContainer
        style={style}
        center={{
          lat: l1 === 0 ? l[0] : l1,
          lng: ln1 === 0 ? ln[0] : ln1,
        }}
        /*   bounds={[
        [l1, ln1],
        [l2, ln2],
      ]} */
        zoom={17}
        scrollWheelZoom={true}
      >
         <TileLayer
          noWrap={true}
         // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {props.lotes.map((l, index) => {
          console.log("entro a buscardatos: " + JSON.stringify(l));
          return (
            <Marker
              position={[l.latitud, l.longitud]}
              icon={icon}
              index={index}
            >
              <ThemeProvider theme={theme}>
                <Popup>
                  <Typography
                    gutterBottom
                    className={classes.header}
                    variant="subtitle2"
                    align="center"
                    color="textSecondary"
                  >
                    {l.nombre}
                  </Typography>
                  <Divider variant="fullWidth" />
                  <Typography
                    gutterBottom
                    className={classes.location}
                    variant="caption"
                    component="div"
                    align="center"
                    color="textSecondary"
                  >
                    {l.zona}
                  </Typography>
                  <Typography
                    className={classes.type}
                    variant="caption"
                    component="div"
                    align="center"
                    color="textSecondary"
                  >
                    Lote Demostrativo
                  </Typography>
                </Popup>
              </ThemeProvider>
            </Marker>
          );
        })}
      </MapContainer>
    );
  },[props.lotes]);


  return <>{map}</>;
};
export default CustomMap;