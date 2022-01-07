import React from 'react';
import TopHeader from './TopHeader'
import SubHeader from './SubHeader'
import Header from './Header';
const Navbar = (props) => {
    return (
        <div className="container-nav">
            {props.withTop?<TopHeader
            text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
            textLink="www.google.com"
            />:null}

            <Header></Header>
            
            {props.withSub?<SubHeader text="Menu"></SubHeader>:null}
            
            
        
        
        </div>
    );
}

export default Navbar;
