import React from 'react';
import { Notifications } from "./Notifications";
import Notification from './Img/Notification.png'
import Alert from './Img/Alert.png'
import Standard from './Img/Standard.png'

export default {
  title: 'MetaTDR/Toast/Notifications',
  component: Notifications,

  argTypes: {
    type: {
      options: ['alert', 'standard', 'notificacion'],
      control: { type: 'radio' }
    }
  },
};

let dateTime = () => {


  let showdate = new Date();

  const minutos = ((showdate.getMinutes() < 10) ? "0" : "") + showdate.getMinutes();

  return (
    minutos
  )

}

const dStandard = {
  time: `APP NAME • ${dateTime()} MIN AGO `,
  title: 'Jane Doe replied to your post about so and so',
  label: "Non tempor eu ullamco veniam nulla ex. Sunt amet consectetur in pariatur amet incididunt",
  

}

const dAlert = {
  time: `APP NAME • ${dateTime()} MIN AGO `,
  title: 'Incident - High severity',
  label: "Do ullamco ex velit anim do proident exercitation et anim tempor. Lorem sunt deserunt labore non excepteur veniam enim quis officia magna ani...",

}

const dNotificacion = {
  time: `APP NAME • ${dateTime()} MIN AGO `,
  title: 'New notification',
  label: "Do ullamco ex velit anim do proident exercitation et anim tempor. Lorem sunt deserunt labore non excepteur veniam enim quis officia magna anim...",

}


const Template = (args) => <Notifications {...args} />;
export const Notificaciones = Template.bind({});


const alerrt = () => {

  return alert('hola')
}

  Notificaciones.args = {
  dNotificacion: dNotificacion,
  dAlert: dAlert,
  dStandard: dStandard,
  onClick: alerrt,
  iconNotification:<div style={{marginTop:-20}}><img src={Notification}  className="rounded mx-auto d-block imagen m-4 mt-4" /></div>,
  iconStandard:<div style={{marginTop:-20}}><img src={Standard}  className="rounded mx-auto d-block imagen m-4 mt-4" /></div>,
  iconAlert:<div style={{marginTop:-20}}><img src={Alert}  className="rounded mx-auto d-block imagen m-4 mt-4" /></div>,
  type: "notificacion",
  onChange:(dNotificacion)=>{console.log(dNotificacion)},
};


