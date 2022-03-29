import {React,Fragment,useState,useEffect} from 'react';
import styled from 'styled-components'

import logoGobiernoCorrientes from "../../../../assets/img/logoGobiernoCorrientes.webp"
import TextField from "@material-ui/core/TextField";
const Footermobile = () => {
    const axios = require('axios');
    const [list, setList] = useState([]);
        
        useEffect(() => {
            axios.get('https://api.test.dgrcorrientes.gov.ar/strapibe/menu-footers').then((response) => {
                setList(response.data);
            })
    
        },[]);
        
        
    
    const IconSearch = <div> 
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#09101D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.0004 21.0004L16.6504 16.6504" stroke="#09101D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </div>


    

    return (
        <Container>
            <Line/>
            {list.map(dato=>
            <Fragment>
            
            <Card>
                <Title>{dato.titulo}</Title>
                {dato.menuItem.map(item=><Text>{item.titulo}</Text>)}
                
                {dato.linkFooter.map(item=><TextLink>{item.texto}</TextLink>)}    
            </Card>
            
            <Line/>
            </Fragment>

           )}
           <Bottom>
                <Logos/>
                <Search>
                   {IconSearch}
                    <TextArea>
                        <TextField id="input-with-sx"  variant="standard" placeholder="Buscar en rentas"/>
                        
                    </TextArea>
                    

                </Search>
                
                <Legales/>
                  
                
           </Bottom>
            
        </Container>
    );
}


export default Footermobile;
//componente de logos con style logo
const Logos= () =>{
    const corrientes = <div className="logo-corrientes">
        <svg width="250" height="100%" viewBox="0 0 236 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.1263 22.771H37.8264C39.5593 22.771 40.563 21.223 40.563 19.237C40.563 17.319 39.8637 15.939 38.0695 15.872C37.7352 15.872 37.3395 15.905 37.1263 16.006V22.771ZM33.1438 12.876C34.3906 12.607 35.9716 12.439 37.4922 12.439C39.6812 12.439 41.6273 12.775 42.9644 14.122C44.2111 15.367 44.5761 16.882 44.5761 18.833C44.5761 21.257 43.5119 23.444 41.4141 24.521V24.588C42.8126 25.194 43.5119 26.642 43.9076 29.065C44.3024 31.589 44.8499 34.382 45.2149 35.224H41.05C40.806 34.584 40.3498 32.296 40.0453 29.805C39.6812 26.978 39.0425 26.171 37.7045 26.171H37.1263V35.224H33.1438V12.876ZM55.7211 25.262H51.0376V31.387H56.3283V35.224H47.0543V12.54H55.9633V16.377H51.0376V21.593H55.7202V25.262H55.7211ZM58.6456 35.224V12.54H62.2947L65.4567 21.425C66.0648 23.175 67.0685 26.103 67.6458 28.055H67.7072C67.5853 25.665 67.3115 21.728 67.3115 17.555V12.54H70.8079V35.224H67.1607L64.0284 26.608C63.3598 24.689 62.4166 21.828 61.9613 19.776H61.8998C61.9911 22.064 62.1438 25.565 62.1438 30.108V35.224H58.6465H58.6456ZM76.0895 16.611H72.4712V12.539H83.7219V16.611H80.0728V35.223H76.0895V16.611ZM90.804 26.607L90.1346 21.862C89.9214 20.482 89.6476 18.226 89.466 16.712H89.3748C89.1616 18.226 88.858 20.582 88.6448 21.895L87.885 26.607H90.8031H90.804ZM87.4884 30.041L86.5759 35.224H82.7145L87.1541 12.54H91.9279L95.9112 35.224H92.049L91.1672 30.041H87.4884ZM97.7082 30.714C98.5295 31.219 99.928 31.589 101.084 31.589C102.968 31.589 103.881 30.512 103.881 29.031C103.881 27.381 102.968 26.574 101.235 25.329C98.4382 23.444 97.3739 21.055 97.3739 19.002C97.3739 15.367 99.563 12.338 103.85 12.338C105.188 12.338 106.465 12.741 107.073 13.146L106.435 16.949C105.856 16.545 104.976 16.175 103.82 16.175C102.117 16.175 101.296 17.319 101.296 18.531C101.296 19.877 101.904 20.584 104.124 22.064C106.83 23.882 107.833 26.17 107.833 28.56C107.833 32.7 105.067 35.426 101.053 35.426C99.4112 35.426 97.7995 34.954 97.1309 34.516L97.7082 30.714ZM125.408 34.887C124.831 35.19 123.706 35.426 122.307 35.426C117.077 35.426 114.584 30.646 114.584 24.218C114.584 15.67 118.872 12.338 122.855 12.338C124.253 12.338 125.227 12.641 125.621 12.943L124.953 16.645C124.497 16.41 123.98 16.208 123.098 16.208C120.848 16.208 118.81 18.362 118.81 23.983C118.81 29.401 120.665 31.522 123.098 31.522C123.767 31.522 124.527 31.353 125.013 31.185L125.409 34.887H125.408ZM130.049 23.882C130.049 29.031 130.931 31.656 132.543 31.656C134.214 31.656 134.853 28.291 134.853 23.68C134.853 19.709 134.305 16.107 132.512 16.107C130.931 16.107 130.049 19.002 130.049 23.882ZM139.019 23.478C139.019 32.027 136.281 35.493 132.39 35.493C127.737 35.493 125.913 30.041 125.913 23.814C125.913 17.621 128.133 12.27 132.664 12.27C137.62 12.27 139.019 18.295 139.019 23.478ZM145.207 22.771H145.906C147.638 22.771 148.643 21.223 148.643 19.237C148.643 17.319 147.943 15.939 146.15 15.872C145.815 15.872 145.419 15.905 145.206 16.006V22.771H145.207ZM141.223 12.876C142.47 12.607 144.051 12.439 145.571 12.439C147.76 12.439 149.706 12.775 151.044 14.122C152.291 15.367 152.656 16.882 152.656 18.833C152.656 21.257 151.592 23.444 149.494 24.521V24.588C150.893 25.194 151.592 26.642 151.988 29.065C152.382 31.589 152.93 34.382 153.295 35.224H149.129C148.885 34.584 148.43 32.296 148.125 29.805C147.76 26.978 147.123 26.171 145.785 26.171H145.206V35.224H141.223V12.876ZM159.054 22.771H159.753C161.486 22.771 162.489 21.223 162.489 19.237C162.489 17.319 161.79 15.939 159.996 15.872C159.662 15.872 159.266 15.905 159.054 16.006V22.771ZM155.07 12.876C156.317 12.607 157.898 12.439 159.419 12.439C161.608 12.439 163.554 12.775 164.892 14.122C166.138 15.367 166.503 16.882 166.503 18.833C166.503 21.257 165.439 23.444 163.341 24.521V24.588C164.739 25.194 165.439 26.642 165.834 29.065C166.23 31.589 166.776 34.382 167.141 35.224H162.976C162.732 34.584 162.276 32.296 161.973 29.805C161.608 26.978 160.969 26.171 159.631 26.171H159.053V35.224H155.07V12.876ZM168.964 35.224V12.54H172.946V35.224H168.964ZM184.613 25.262H179.93V31.387H185.221V35.224H175.947V12.54H184.855V16.377H179.93V21.593H184.613V25.262ZM187.539 35.224V12.54H191.187L194.349 21.425C194.958 23.175 195.961 26.103 196.539 28.055H196.599C196.477 25.665 196.204 21.728 196.204 17.555V12.54H199.701V35.224H196.052L192.92 26.608C192.252 24.689 191.309 21.828 190.852 19.776H190.792C190.882 22.064 191.035 25.565 191.035 30.108V35.224H187.539ZM204.982 16.611H201.364V12.539H212.615V16.611H208.966V35.223H204.982V16.611ZM222.913 25.261H218.231V31.386H223.521V35.223H214.247V12.54H223.156V16.377H218.231V21.593H222.913V25.262V25.261ZM225.541 30.713C226.363 31.218 227.76 31.588 228.916 31.588C230.801 31.588 231.713 30.511 231.713 29.03C231.713 27.38 230.8 26.573 229.068 25.328C226.271 23.443 225.206 21.054 225.206 19.001C225.206 15.366 227.395 12.337 231.683 12.337C233.02 12.337 234.298 12.74 234.906 13.145L234.267 16.948C233.69 16.544 232.808 16.174 231.652 16.174C229.949 16.174 229.129 17.318 229.129 18.53C229.129 19.876 229.737 20.583 231.957 22.063C234.663 23.881 235.666 26.169 235.666 28.559C235.666 32.699 232.899 35.425 228.885 35.425C227.244 35.425 225.633 34.953 224.963 34.515L225.541 30.713H225.541ZM34.5243 2.83998V6.97498H35.1116C35.5832 6.97498 35.9454 6.81098 36.1984 6.48498C36.4514 6.15698 36.5797 5.68798 36.5842 5.07698V4.75698C36.5842 4.13598 36.4622 3.65998 36.2174 3.33198C35.9735 3.00398 35.6184 2.83998 35.154 2.83998H34.5243ZM33.6245 7.76998V2.03698H35.154C35.6112 2.03698 36.0177 2.14998 36.3728 2.37498C36.7269 2.60098 37.0016 2.92098 37.1958 3.33598C37.3901 3.75098 37.4876 4.22598 37.4876 4.76198V5.04898C37.4876 5.59298 37.3901 6.06998 37.194 6.48198C37.0071 6.8844 36.7162 7.21614 36.3583 7.43498C35.9969 7.65798 35.5814 7.76998 35.1152 7.76998H33.6245ZM44.7261 7.76998V2.03698H45.6223V7.76998H44.7261ZM53.9477 4.76098H54.8728C55.1764 4.76098 55.414 4.67598 55.5847 4.50698C55.7555 4.33698 55.8404 4.10598 55.8404 3.81198C55.8404 3.50398 55.7618 3.26698 55.6037 3.09898C55.4465 2.93098 55.2107 2.84398 54.8981 2.83898H53.9477V4.76098ZM54.9505 5.56398H53.9477V7.76898H53.0487V2.03698H54.8701C55.4682 2.03698 55.9289 2.18498 56.2542 2.48198C56.5794 2.77898 56.742 3.20798 56.742 3.77098C56.742 4.15498 56.658 4.47498 56.4909 4.73398C56.3131 5.00176 56.0708 5.20867 55.7916 5.33098L56.9553 7.71898V7.76898H55.9904L54.9514 5.56498L54.9505 5.56398ZM66.9664 5.20898H64.8388V6.97398H67.326V7.76898H63.9389V2.03698H67.3007V2.83998H64.8388V4.42298H66.9664V5.20998V5.20898ZM78.2054 5.90298C78.153 6.51398 77.9488 6.99098 77.5928 7.33298C77.2369 7.67698 76.7644 7.84798 76.1735 7.84798C75.7606 7.84798 75.3965 7.73898 75.083 7.52298C74.7643 7.30066 74.5114 6.97975 74.3558 6.59998C74.1841 6.19998 74.0956 5.73698 74.0883 5.20998V4.67398C74.0883 4.13398 74.1751 3.65698 74.3485 3.24398C74.5211 2.83298 74.7695 2.51398 75.0939 2.29198C75.4315 2.06455 75.8208 1.94835 76.216 1.95698C76.7879 1.95698 77.2477 2.12798 77.5964 2.47098C77.9452 2.81298 78.1476 3.29798 78.2045 3.92598H77.3082C77.2658 3.51398 77.1565 3.21598 76.983 3.03398C76.8086 2.85098 76.553 2.75998 76.216 2.75998C75.8248 2.75998 75.5239 2.91898 75.3143 3.23498C75.1038 3.55198 74.9972 4.01598 74.9918 4.62898V5.13698C74.9918 5.75698 75.0921 6.22998 75.2926 6.55598C75.4932 6.88198 75.7868 7.04498 76.1735 7.04498C76.5268 7.04498 76.7924 6.95598 76.9704 6.78098C77.1483 6.60498 77.2604 6.31198 77.3082 5.90298H78.2045H78.2054ZM89.2835 5.90298C89.232 6.51398 89.0278 6.99098 88.6719 7.33298C88.3159 7.67698 87.8434 7.84798 87.2526 7.84798C86.8397 7.84798 86.4756 7.73898 86.1621 7.52298C85.8433 7.30066 85.5905 6.97975 85.4348 6.59998C85.2632 6.19998 85.1746 5.73698 85.1674 5.20998V4.67398C85.1674 4.13398 85.2541 3.65698 85.4276 3.24398C85.6001 2.83298 85.8486 2.51398 86.1729 2.29198C86.5106 2.06455 86.8998 1.94835 87.295 1.95698C87.8669 1.95698 88.3268 2.12798 88.6755 2.47098C89.0242 2.81298 89.2266 3.29798 89.2835 3.92598H88.3873C88.3448 3.51398 88.2355 3.21598 88.062 3.03398C87.8877 2.85098 87.632 2.75998 87.295 2.75998C86.9038 2.75998 86.603 2.91898 86.3934 3.23498C86.1829 3.55198 86.0763 4.01598 86.0708 4.62898V5.13698C86.0708 5.75698 86.1711 6.22998 86.3717 6.55598C86.5723 6.88198 86.8659 7.04498 87.2526 7.04498C87.6049 7.04498 87.8714 6.95598 88.0494 6.78098C88.2274 6.60498 88.3394 6.31198 88.3873 5.90298H89.2835ZM96.4642 7.76898V2.03698H97.3604V7.76998H96.4642V7.76898ZM107.02 0.500977H108.006L107.021 1.69398L106.326 1.69198L107.021 0.500977H107.02ZM108.006 4.75398C108.006 4.11898 107.897 3.63198 107.681 3.29298C107.464 2.95398 107.156 2.78498 106.757 2.78498C106.368 2.78498 106.063 2.95298 105.845 3.29098C105.625 3.62798 105.513 4.10498 105.508 4.72198V5.05198C105.508 5.68298 105.619 6.16998 105.841 6.51398C106.062 6.85798 106.371 7.02998 106.764 7.02998C107.162 7.02998 107.469 6.86198 107.684 6.52598C107.898 6.18998 108.006 5.69898 108.006 5.05298V4.75298V4.75398ZM108.906 5.05298C108.906 5.61498 108.818 6.10798 108.643 6.53098C108.467 6.95598 108.216 7.28098 107.89 7.50798C107.552 7.73851 107.161 7.85654 106.764 7.84798C106.344 7.84798 105.97 7.73498 105.641 7.50798C105.308 7.27395 105.043 6.9367 104.881 6.53798C104.701 6.11798 104.61 5.63298 104.608 5.08398V4.76198C104.608 4.20198 104.698 3.70898 104.877 3.28098C105.056 2.85298 105.309 2.52598 105.634 2.29898C105.96 2.07198 106.335 1.95798 106.757 1.95798C107.179 1.95798 107.553 2.06998 107.879 2.29498C108.205 2.51898 108.458 2.84198 108.635 3.26298C108.813 3.68498 108.904 4.17498 108.907 4.73398V5.05298H108.906ZM120.242 7.76998H119.342L117.034 3.70098V7.77098H116.133V2.03698H117.034L119.35 6.11998V2.03698H120.242V7.76998ZM139.827 7.02598C139.639 7.29598 139.38 7.50098 139.048 7.63998C138.715 7.77998 138.338 7.84898 137.916 7.84898C137.483 7.84898 137.098 7.73998 136.764 7.52198C136.428 7.30212 136.159 6.97666 135.99 6.58698C135.809 6.18098 135.714 5.70698 135.707 5.16698V4.71798C135.707 3.85198 135.894 3.17498 136.269 2.68798C136.643 2.20098 137.167 1.95798 137.838 1.95798C138.414 1.95798 138.872 2.11598 139.211 2.43198C139.551 2.74898 139.754 3.20398 139.823 3.79698H138.941C138.842 3.10698 138.48 2.76098 137.856 2.76098C137.452 2.76098 137.146 2.92098 136.936 3.24298C136.727 3.56498 136.618 4.03598 136.611 4.65698V5.09798C136.611 5.71698 136.728 6.19798 136.964 6.53998C137.201 6.88198 137.529 7.05298 137.949 7.05298C138.409 7.05298 138.735 6.93798 138.93 6.70698V5.58498H137.863V4.82898H139.827V7.02598ZM150.179 5.20998H148.052V6.97498H150.539V7.76998H147.152V2.03698H150.513V2.83998H148.052V4.42298H150.179V5.20998ZM161.696 7.76998H160.796L158.487 3.70098V7.77098H157.587V2.03698H158.487L160.803 6.11998V2.03698H161.697V7.76998H161.696ZM172.13 5.20998H170.003V6.97498H172.49V7.76998H169.103V2.03698H172.464V2.83998H170.003V4.42298H172.13V5.20998ZM180.438 4.76198H181.363C181.666 4.76198 181.904 4.67698 182.074 4.50798C182.245 4.33798 182.33 4.10698 182.33 3.81298C182.33 3.50498 182.252 3.26798 182.094 3.09998C181.936 2.93198 181.7 2.84498 181.388 2.83998H180.438V4.76198ZM181.441 5.56498H180.438V7.76998H179.538V2.03698H181.359C181.957 2.03698 182.418 2.18498 182.743 2.48198C183.068 2.77898 183.231 3.20798 183.231 3.77098C183.231 4.15498 183.147 4.47498 182.98 4.73398C182.802 5.00172 182.56 5.20862 182.28 5.33098L183.444 7.71898V7.76898H182.48L181.441 5.56498ZM191.818 5.63198H193.32L192.57 3.25298L191.818 5.63198ZM193.573 6.43498H191.566L191.146 7.76998H190.211L192.167 2.03698H192.975L194.935 7.76998H193.996L193.573 6.43498ZM202.795 6.97498H205.146V7.76998H201.894V2.03698H202.795V6.97498ZM221.287 2.83998V6.97498H221.874C222.346 6.97498 222.708 6.81098 222.96 6.48498C223.213 6.15698 223.342 5.68798 223.347 5.07698V4.75698C223.347 4.13598 223.224 3.65998 222.98 3.33198C222.736 3.00398 222.381 2.83998 221.916 2.83998H221.287ZM220.386 7.76998V2.03698H221.916C222.374 2.03698 222.78 2.14998 223.136 2.37498C223.49 2.60098 223.763 2.92098 223.958 3.33598C224.153 3.75098 224.25 4.22598 224.25 4.76198V5.04898C224.25 5.59298 224.152 6.06998 223.957 6.48198C223.761 6.89498 223.482 7.21198 223.12 7.43498C222.759 7.65798 222.344 7.76998 221.877 7.76998H220.386ZM234.48 5.20998H232.353V6.97498H234.839V7.76998H231.453V2.03698H234.814V2.83998H232.353V4.42298H234.48V5.20998ZM0.648438 37.154L7.48667 25.809L12.1214 29.838L8.32418 36.138C8.13566 36.4506 7.88037 36.7069 7.58093 36.8841C7.2815 37.0613 6.94717 37.154 6.60761 37.154H0.648438ZM0.672831 10.774H6.60852C7.29785 10.774 7.94201 11.156 8.32508 11.791L15.6611 23.964L12.1214 29.837L0.672831 10.775V10.774ZM11.2902 37.154L18.1284 25.809L22.7632 29.838L18.966 36.138C18.7774 36.4506 18.5221 36.7069 18.2227 36.8841C17.9233 37.0613 17.5889 37.154 17.2494 37.154H11.2911H11.2902ZM11.3146 10.774H17.2503C17.9396 10.774 18.5838 11.156 18.9669 11.791L26.3029 23.964L22.7632 29.837L11.3146 10.775V10.774Z" fill="#124596"/>
</svg>
    </div>
    const logo1 =<div className="logo-rentas">
    <img src={logoGobiernoCorrientes} alt="logo corrientes" width="100%"  height="100%" />
    </div>    
    
            
    return(
        <StyleLogos>
        {logo1}
        {corrientes}
        </StyleLogos>
    )

}

const Legales = () => {
    const array1 = ["Copyriht 2021 - Rentas Corrientes", "Mapa de sitio" , "Politicas de privacidad " , "Terminos y condiciones"]
    const result = array1.map(x =><TextLegales>{x}</TextLegales>)
    return(
        <StyleLegales>
            {result}

        </StyleLegales>
    )
}
 
//styles components
const Container = styled.div`
width: 100%;
height: 1363px;
background: #FFFFFF;

`

const Line = styled.div`
background: #EBEEF2;
border: 1px solid #EBEEF2;
box-sizing: border-box;
height:4px;
width:100%;
`

const Card = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

width: auto;
height: auto;
padding:23px 70px 18px 18px;
align-items:start;
display: flex;
`

const Title = styled.div`
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 21px;
color: #545D69;
margin-bottom:13px;

`

const Text = styled.div`
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 19px;
font-feature-settings: 'ss07' on;
color: #545D69;
flex: none;
order: 2;
align-self: stretch;
flex-grow: 1;
margin: 8px 0px;
justify-content:start;
display: flex;
`

const TextLink = styled.div`
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 23px;
color: #124596;
text-decoration-line: underline;
color: #124596;
flex: none;
order: 5;
align-self: stretch;
flex-grow: 1;
margin: 8px 0px;
justify-content:start;
display: flex;
`

const Bottom = styled.div`
background: #EBEEF2;    
padding: 16;
display: flex;
flex-direction: column;

`

const StyleLogos = styled.div`
padding: 10px;
display: flex;
justify-content: center;
flex-direction: column;
.logo-corrientes{
    justify-content: center;
    display: flex;
    margin:8px;
}
.logo-rentas{
    justify-content: center;
    display: flex;
    margin: 8px;
}
`

const TextLegales = styled.div`
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 21px;
color: #858C94;

`

const Search = styled.div`
display: flex;
flex-direction: row;
justify-content: start;
align-items: center;
padding: 0px 16px;
background: #FFFFFF;
border: 1px solid #A5ABB3;
box-sizing: border-box;
border-radius: 40px;
height:48px;
margin:16px;
width:90%;

.MuiInput-underline:before {
    border:0px!important;

}
.MuiInput-underline:after {
    border:0px!important;

}
.MuiFormControl-root{
    width:90%;
}
div>input{
width:100%;
};

:hover {
    
    -webkit-box-shadow: 5px 5px 32px 5px rgba(0,0,0,0.17); 
box-shadow: 5px 5px 32px 5px rgba(0,0,0,0.17);
}


`

const TextArea = styled.div`
position: static;
left: 28px;
display: flex;
right: 0px;
top: 0px;
width:100%;


align-items: center;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 24px;
display: flex;

color: #A5ABB3;
opacity: 0.8;
flex: none;
order: 1;
align-self: center;
flex-grow: 0;
margin: 0px 4px;
border:none;
height:48px

`

const StyleLegales = styled.div`
width: 287px;
height:auto;
margin:16px 44px;
flex-direction: row;
display: flex;
`