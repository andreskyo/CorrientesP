import axios from "axios";
/* export default axios.create({
  baseURL: "/api",
});
 */

const OAUTH =  axios.create({
	baseURL: "https://api.test.dgrcorrientes.gov.ar/auth",
  
});
const STRAPI =  axios.create({
	
  baseURL:"https://api.test.dgrcorrientes.gov.ar/strapibe",
});

export  {OAUTH,STRAPI}