import React from 'react';
import Notificacion from './js/Notificacion'
import Alert from './js/Alert'
import Standard from './js/Standard'







export const Notifications = ({ ...props }) => {




  return (
    <>
      {props.type==="notificacion" ?<Notificacion dNotificacion={props.dNotificacion} iconNotification={props.iconNotification}/> : null}
      {props.type==="alert" ?<Alert dAlert={props.dAlert} iconAlert={props.iconAlert}/>: null}
      {props.type==="standard" ?<Standard dStandard={props.dStandard} iconStandard={props.iconStandard}/>: null}
    </>
  );
};

