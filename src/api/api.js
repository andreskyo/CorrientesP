import axios from "axios";
/* export default axios.create({
  baseURL: "/api",
});
 */


 console.log("window " , window)

const baseURL = window.config.apiBase.baseURL;
const authURL = window.config.authURL;

console.log("baseURL", baseURL);
console.log("authURL", authURL);

const OAUTH =  axios.create({
	//baseURL: "https://api.test.dgrcorrientes.gov.ar/auth",
  baseURL: authURL,

});
const STRAPI =  axios.create({
	
  baseURL:baseURL,
});

export  {OAUTH,STRAPI}