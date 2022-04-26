import React,{Fragment,useEffect,useState} from 'react';
import logoGobiernoCorrientes from "../assets/img/logoGobiernoCorrientes.webp"

const Footerdesktop = () => {
  
    const axios = require('axios');
    const [list, setList] = useState([]);
    
    useEffect(() => {
        axios.get('https://api.test.dgrcorrientes.gov.ar/strapibe/api/menu-footers').then((response) => {
            setList(response.data);
        })

    },[]);

    

    
      console.log("list",list)

        let datos = list
        
        let resultado = list.data? datos.data.map((res)=><div  key={Math.random()} className="col-12 col-lg-3 footerNavRow__item">
                        <h4 className="footerNavItem__title">{res.attributes.titulo}</h4>
                        <ul  key={Math.random()} className="footerNavItem__list">
                          
                            <li  key={Math.random()} className="footerNavItem__moreInfo"><a  href="#">{res.attributes.titulo}</a></li>
                        </ul>
                    </div>):null

        return (
        <>
            <section className="footerNav">
                        <div className="container">
                            <div className="row footerNavRow">
                                {resultado}
                                
                            </div>
                        </div>
                        </section>
                        <footer>
      <div className="container">
         <div className="row footerContent">
            <div className="col-12 col-lg-auto footerContent__logoRentas">
               <a href="index.html">
                  <picture>
                    
                     <img src={LogoRentas} alt="Logotipo"/>
                  </picture>
               </a>
            </div>
            <div className="col-12 col-lg-auto footerContent__logoProvincia">
               <a href="index.html">
                  <picture>
                     
                     <img src={logoGobiernoCorrientes} alt="logo Gobierno de Corrientes"/>
                  </picture>
               </a>
            </div>
            <div className="col-12 col-lg-4">
               <div className="input-group input-group-search input-group-search--invert">
                  <div className="input-group-prepend">
                     <span className="input-group-text">
                        <i className="fa fa-svg fa-search fa-fw"></i>
                     </span>
                  </div>
                  <input type="text" className="form-control" placeholder="Buscar en rentas" aria-label="Buscar en rentas"
                     aria-describedby="basic-addon1"/>
               </div>
            </div>
         </div>
         <div className="row footerAccess">
            <div className="col-12 col-lg-auto">
               <ul>
                  <li>
                     Copyright © 2021 - Rentas Corrientes
                  </li>
                  <li>
                     <a href="#">Mapa de sitio</a>
                  </li>
                  <li>
                     <a href="#">Politicas de privacidad</a>
                  </li>
                  <li>
                     <a href="#">Términos y condiciones</a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </footer>

        </>


    );
}
export default Footerdesktop;


const LogoRentas = <div className="logo-rentas justify-start"><svg width="100%"  height="37" viewBox="0 0 261 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.376 22.27H41.151C43.069 22.27 44.18 20.722 44.18 18.736C44.18 16.818 43.406 15.438 41.42 15.371C41.05 15.371 40.612 15.404 40.376 15.505V22.27ZM35.968 12.375C37.348 12.106 39.098 11.938 40.781 11.938C43.204 11.938 45.358 12.274 46.838 13.621C48.218 14.866 48.622 16.381 48.622 18.332C48.622 20.756 47.444 22.943 45.122 24.02V24.087C46.67 24.693 47.444 26.141 47.882 28.564C48.319 31.088 48.925 33.881 49.329 34.723H44.719C44.449 34.083 43.944 31.795 43.607 29.304C43.204 26.477 42.497 25.67 41.016 25.67H40.376V34.723H35.968V12.375ZM60.958 24.761H55.774V30.886H61.63V34.723H51.365V12.039H61.226V15.876H55.774V21.092H60.957V24.761H60.958ZM64.195 34.723V12.039H68.234L71.734 20.924C72.407 22.674 73.518 25.602 74.157 27.554H74.225C74.09 25.164 73.787 21.227 73.787 17.054V12.039H77.657V34.723H73.62L70.153 26.107C69.413 24.188 68.369 21.327 67.865 19.275H67.797C67.898 21.563 68.067 25.064 68.067 29.607V34.723H64.196H64.195ZM83.503 16.11H79.498V12.038H91.951V16.11H87.912V34.722H83.503V16.11ZM99.79 26.106L99.049 21.361C98.813 19.981 98.51 17.725 98.309 16.211H98.208C97.972 17.725 97.636 20.081 97.4 21.394L96.559 26.106H99.789H99.79ZM96.12 29.54L95.11 34.723H90.836L95.75 12.039H101.034L105.443 34.723H101.168L100.192 29.54H96.12ZM107.432 30.213C108.341 30.718 109.889 31.088 111.168 31.088C113.254 31.088 114.264 30.011 114.264 28.53C114.264 26.88 113.254 26.073 111.336 24.828C108.24 22.943 107.062 20.554 107.062 18.501C107.062 14.866 109.485 11.837 114.23 11.837C115.711 11.837 117.125 12.24 117.798 12.645L117.091 16.448C116.451 16.044 115.476 15.674 114.197 15.674C112.312 15.674 111.403 16.818 111.403 18.03C111.403 19.376 112.076 20.083 114.533 21.563C117.529 23.381 118.639 25.669 118.639 28.059C118.639 32.199 115.577 34.925 111.134 34.925C109.317 34.925 107.533 34.453 106.793 34.015L107.432 30.213ZM138.092 34.386C137.453 34.689 136.208 34.925 134.66 34.925C128.871 34.925 126.111 30.145 126.111 23.717C126.111 15.169 130.857 11.837 135.266 11.837C136.814 11.837 137.891 12.14 138.328 12.442L137.588 16.144C137.083 15.909 136.511 15.707 135.535 15.707C133.045 15.707 130.789 17.861 130.789 23.482C130.789 28.9 132.842 31.021 135.535 31.021C136.275 31.021 137.117 30.852 137.655 30.684L138.093 34.386H138.092ZM143.229 23.381C143.229 28.53 144.205 31.155 145.989 31.155C147.839 31.155 148.546 27.79 148.546 23.179C148.546 19.208 147.94 15.606 145.955 15.606C144.205 15.606 143.229 18.501 143.229 23.381ZM153.157 22.977C153.157 31.526 150.127 34.992 145.82 34.992C140.67 34.992 138.651 29.54 138.651 23.313C138.651 17.12 141.108 11.769 146.123 11.769C151.609 11.769 153.157 17.794 153.157 22.977ZM160.007 22.27H160.78C162.698 22.27 163.81 20.722 163.81 18.736C163.81 16.818 163.035 15.438 161.05 15.371C160.68 15.371 160.241 15.404 160.006 15.505V22.27H160.007ZM155.597 12.375C156.977 12.106 158.727 11.938 160.41 11.938C162.833 11.938 164.987 12.274 166.468 13.621C167.848 14.866 168.252 16.381 168.252 18.332C168.252 20.756 167.074 22.943 164.752 24.02V24.087C166.3 24.693 167.074 26.141 167.512 28.564C167.949 31.088 168.555 33.881 168.959 34.723H164.348C164.078 34.083 163.574 31.795 163.237 29.304C162.833 26.477 162.127 25.67 160.646 25.67H160.006V34.723H155.597V12.375ZM175.333 22.27H176.107C178.025 22.27 179.136 20.722 179.136 18.736C179.136 16.818 178.362 15.438 176.376 15.371C176.006 15.371 175.568 15.404 175.333 15.505V22.27ZM170.924 12.375C172.304 12.106 174.054 11.938 175.737 11.938C178.16 11.938 180.314 12.274 181.795 13.621C183.175 14.866 183.579 16.381 183.579 18.332C183.579 20.756 182.401 22.943 180.079 24.02V24.087C181.626 24.693 182.401 26.141 182.838 28.564C183.276 31.088 183.881 33.881 184.285 34.723H179.675C179.405 34.083 178.9 31.795 178.564 29.304C178.16 26.477 177.453 25.67 175.972 25.67H175.332V34.723H170.924V12.375ZM186.302 34.723V12.039H190.71V34.723H186.302ZM203.624 24.761H198.44V30.886H204.297V34.723H194.032V12.039H203.892V15.876H198.44V21.092H203.624V24.761ZM206.862 34.723V12.039H210.9L214.4 20.924C215.074 22.674 216.184 25.602 216.824 27.554H216.891C216.756 25.164 216.454 21.227 216.454 17.054V12.039H220.324V34.723H216.285L212.819 26.107C212.079 24.188 211.035 21.327 210.53 19.275H210.463C210.563 21.563 210.732 25.064 210.732 29.607V34.723H206.862ZM226.17 16.11H222.165V12.038H234.618V16.11H230.579V34.722H226.17V16.11ZM246.017 24.76H240.834V30.885H246.69V34.722H236.425V12.039H246.286V15.876H240.834V21.092H246.017V24.761V24.76ZM248.925 30.212C249.835 30.717 251.382 31.087 252.661 31.087C254.748 31.087 255.757 30.01 255.757 28.529C255.757 26.879 254.747 26.072 252.829 24.827C249.733 22.942 248.555 20.553 248.555 18.5C248.555 14.865 250.978 11.836 255.724 11.836C257.204 11.836 258.618 12.239 259.291 12.644L258.584 16.447C257.945 16.043 256.969 15.673 255.69 15.673C253.805 15.673 252.897 16.817 252.897 18.029C252.897 19.375 253.57 20.082 256.027 21.562C259.022 23.38 260.133 25.668 260.133 28.058C260.133 32.198 257.07 34.924 252.627 34.924C250.81 34.924 249.027 34.452 248.286 34.014L248.926 30.212H248.925ZM37.496 2.339V6.474H38.146C38.668 6.474 39.069 6.31 39.349 5.984C39.629 5.656 39.771 5.187 39.776 4.576V4.256C39.776 3.635 39.641 3.159 39.37 2.831C39.1 2.503 38.707 2.339 38.193 2.339H37.496ZM36.5 7.269V1.536H38.193C38.699 1.536 39.149 1.649 39.542 1.874C39.934 2.1 40.238 2.42 40.453 2.835C40.668 3.25 40.776 3.725 40.776 4.261V4.548C40.776 5.092 40.668 5.569 40.451 5.981C40.2441 6.38342 39.9221 6.71516 39.526 6.934C39.126 7.157 38.666 7.269 38.15 7.269H36.5ZM48.788 7.269V1.536H49.78V7.269H48.788ZM58.995 4.26H60.019C60.355 4.26 60.618 4.175 60.807 4.006C60.996 3.836 61.09 3.605 61.09 3.311C61.09 3.003 61.003 2.766 60.828 2.598C60.654 2.43 60.393 2.343 60.047 2.338H58.995V4.26ZM60.105 5.063H58.995V7.268H58V1.536H60.016C60.678 1.536 61.188 1.684 61.548 1.981C61.908 2.278 62.088 2.707 62.088 3.27C62.088 3.654 61.995 3.974 61.81 4.233C61.6132 4.50078 61.345 4.70769 61.036 4.83L62.324 7.218V7.268H61.256L60.106 5.064L60.105 5.063ZM73.405 4.708H71.05V6.473H73.803V7.268H70.054V1.536H73.775V2.339H71.05V3.922H73.405V4.709V4.708ZM85.845 5.402C85.787 6.013 85.561 6.49 85.167 6.832C84.773 7.176 84.25 7.347 83.596 7.347C83.139 7.347 82.736 7.238 82.389 7.022C82.0362 6.79969 81.7563 6.47878 81.584 6.099C81.394 5.699 81.296 5.236 81.288 4.709V4.173C81.288 3.633 81.384 3.156 81.576 2.743C81.767 2.332 82.042 2.013 82.401 1.791C82.7748 1.56358 83.2056 1.44737 83.643 1.456C84.276 1.456 84.785 1.627 85.171 1.97C85.557 2.312 85.781 2.797 85.844 3.425H84.852C84.805 3.013 84.684 2.715 84.492 2.533C84.299 2.35 84.016 2.259 83.643 2.259C83.21 2.259 82.877 2.418 82.645 2.734C82.412 3.051 82.294 3.515 82.288 4.128V4.636C82.288 5.256 82.399 5.729 82.621 6.055C82.843 6.381 83.168 6.544 83.596 6.544C83.987 6.544 84.281 6.455 84.478 6.28C84.675 6.104 84.799 5.811 84.852 5.402H85.844H85.845ZM98.107 5.402C98.05 6.013 97.824 6.49 97.43 6.832C97.036 7.176 96.513 7.347 95.859 7.347C95.402 7.347 94.999 7.238 94.652 7.022C94.2992 6.79969 94.0193 6.47878 93.847 6.099C93.657 5.699 93.559 5.236 93.551 4.709V4.173C93.551 3.633 93.647 3.156 93.839 2.743C94.03 2.332 94.305 2.013 94.664 1.791C95.0378 1.56358 95.4686 1.44737 95.906 1.456C96.539 1.456 97.048 1.627 97.434 1.97C97.82 2.312 98.044 2.797 98.107 3.425H97.115C97.068 3.013 96.947 2.715 96.755 2.533C96.562 2.35 96.279 2.259 95.906 2.259C95.473 2.259 95.14 2.418 94.908 2.734C94.675 3.051 94.557 3.515 94.551 4.128V4.636C94.551 5.256 94.662 5.729 94.884 6.055C95.106 6.381 95.431 6.544 95.859 6.544C96.249 6.544 96.544 6.455 96.741 6.28C96.938 6.104 97.062 5.811 97.115 5.402H98.107ZM106.055 7.268V1.536H107.047V7.269H106.055V7.268ZM117.739 0H118.83L117.74 1.193L116.971 1.191L117.74 0H117.739ZM118.83 4.253C118.83 3.618 118.71 3.131 118.47 2.792C118.23 2.453 117.889 2.284 117.448 2.284C117.017 2.284 116.68 2.452 116.438 2.79C116.195 3.127 116.071 3.604 116.065 4.221V4.551C116.065 5.182 116.188 5.669 116.434 6.013C116.679 6.357 117.02 6.529 117.456 6.529C117.896 6.529 118.236 6.361 118.474 6.025C118.711 5.689 118.83 5.198 118.83 4.552V4.252V4.253ZM119.826 4.552C119.826 5.114 119.729 5.607 119.535 6.03C119.34 6.455 119.063 6.78 118.702 7.007C118.328 7.23754 117.895 7.35556 117.456 7.347C116.991 7.347 116.577 7.234 116.213 7.007C115.844 6.77297 115.551 6.43572 115.371 6.037C115.172 5.617 115.071 5.132 115.069 4.583V4.261C115.069 3.701 115.169 3.208 115.367 2.78C115.565 2.352 115.845 2.025 116.205 1.798C116.566 1.571 116.981 1.457 117.448 1.457C117.915 1.457 118.329 1.569 118.69 1.794C119.05 2.018 119.33 2.341 119.527 2.762C119.724 3.184 119.824 3.674 119.827 4.233V4.552H119.826ZM132.374 7.269H131.378L128.823 3.2V7.27H127.826V1.536H128.823L131.386 5.619V1.536H132.374V7.269ZM154.052 6.525C153.844 6.795 153.557 7 153.189 7.139C152.821 7.279 152.404 7.348 151.937 7.348C151.457 7.348 151.031 7.239 150.661 7.021C150.289 6.80115 149.991 6.47568 149.805 6.086C149.604 5.68 149.499 5.206 149.491 4.666V4.217C149.491 3.351 149.699 2.674 150.114 2.187C150.528 1.7 151.107 1.457 151.85 1.457C152.488 1.457 152.995 1.615 153.37 1.931C153.746 2.248 153.971 2.703 154.047 3.296H153.071C152.961 2.606 152.561 2.26 151.87 2.26C151.423 2.26 151.084 2.42 150.852 2.742C150.62 3.064 150.5 3.535 150.492 4.156V4.597C150.492 5.216 150.622 5.697 150.883 6.039C151.145 6.381 151.508 6.552 151.973 6.552C152.482 6.552 152.843 6.437 153.059 6.206V5.084H151.878V4.328H154.052V6.525ZM165.51 4.709H163.156V6.474H165.908V7.269H162.16V1.536H165.88V2.339H163.156V3.922H165.51V4.709ZM178.258 7.269H177.262L174.706 3.2V7.27H173.71V1.536H174.706L177.269 5.619V1.536H178.259V7.269H178.258ZM189.807 4.709H187.452V6.474H190.205V7.269H186.456V1.536H190.177V2.339H187.452V3.922H189.807V4.709ZM199.003 4.261H200.026C200.362 4.261 200.625 4.176 200.814 4.007C201.003 3.837 201.097 3.606 201.097 3.312C201.097 3.004 201.01 2.767 200.836 2.599C200.661 2.431 200.4 2.344 200.054 2.339H199.003V4.261ZM200.113 5.064H199.003V7.269H198.006V1.536H200.022C200.684 1.536 201.194 1.684 201.554 1.981C201.914 2.278 202.094 2.707 202.094 3.27C202.094 3.654 202.001 3.974 201.816 4.233C201.619 4.50075 201.351 4.70765 201.042 4.83L202.33 7.218V7.268H201.263L200.113 5.064ZM211.599 5.131H213.261L212.431 2.752L211.599 5.131ZM213.541 5.934H211.32L210.855 7.269H209.82L211.985 1.536H212.879L215.049 7.269H214.009L213.541 5.934ZM223.749 6.474H226.351V7.269H222.752V1.536H223.749V6.474ZM244.217 2.339V6.474H244.867C245.389 6.474 245.79 6.31 246.069 5.984C246.349 5.656 246.491 5.187 246.497 4.576V4.256C246.497 3.635 246.361 3.159 246.091 2.831C245.821 2.503 245.428 2.339 244.913 2.339H244.217ZM243.22 7.269V1.536H244.913C245.42 1.536 245.87 1.649 246.263 1.874C246.655 2.1 246.958 2.42 247.173 2.835C247.389 3.25 247.497 3.725 247.497 4.261V4.548C247.497 5.092 247.388 5.569 247.172 5.981C246.955 6.394 246.647 6.711 246.246 6.934C245.846 7.157 245.387 7.269 244.87 7.269H243.22ZM258.82 4.709H256.465V6.474H259.217V7.269H255.469V1.536H259.19V2.339H256.465V3.922H258.82V4.709ZM0 36.653L7.569 25.308L12.699 29.337L8.496 35.637C8.28734 35.9496 8.00477 36.2059 7.67333 36.3831C7.3419 36.5603 6.97185 36.653 6.596 36.653H0ZM0.027 10.273H6.597C7.36 10.273 8.073 10.655 8.497 11.29L16.617 23.463L12.699 29.336L0.027 10.274V10.273ZM11.779 36.653L19.348 25.308L24.478 29.337L20.275 35.637C20.0663 35.9496 19.7838 36.2059 19.4523 36.3831C19.1209 36.5603 18.7508 36.653 18.375 36.653H11.78H11.779ZM11.806 10.273H18.376C19.139 10.273 19.852 10.655 20.276 11.29L28.396 23.463L24.478 29.336L11.806 10.274V10.273Z" fill="#124596"/>
</svg></div>





/*const InputSearch = () =>{
   return(
            <Search>
                 <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <SearchIcon sx={{ color: '', mr: 1, my: 0.5 }} />
                    <Field>
                        <TextField id="input-with-sx" placeholder="Buscar en rentas" variant="standard" />
                    </Field>
      
                </Box>
            </Search>   
)  
}*/

