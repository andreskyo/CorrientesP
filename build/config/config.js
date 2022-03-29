const client_id = '9112c51cf5b34ce17f54324dd8094946';
const client_secret = '816e2bb88f816db26ba60c35926501b35a05a5b4';
const accessTokenTasas = 'kvRnuWm7tECmktHGroNvZtRa4AdLHU1c';
const oldWebUrl = 'https://miportal.desa.dgrcorrientes.gov.ar/rentastdr/';
const miportalUrl = 'https://miportal.dgrcorrientes.gov.ar/';
const csmUrl = 'https://csm.desa.dgrcorrientes.gov.ar/';
const origenLote = 'lotes';
const GTM = {
    gtmId: 'GTM-5MM2MWQ',
    gaId: 'UA-22534903-2'
};
const apiBase = {
	authBe: 'https://api.desa.dgrcorrientes.gov.ar/auth',
    sujetosBe: 'https://api.desa.dgrcorrientes.gov.ar/be',
    planesPagosBe: 'https://api.desa.dgrcorrientes.gov.ar/pp',
    pagosBE:'https://api.desa.dgrcorrientes.gov.ar/',
    sellosBE:'https://api.desa.dgrcorrientes.gov.ar/sebe/',
    geoBE:'https://api.desa.dgrcorrientes.gov.ar/geobe/',
    tramitesBE:'https://api.desa.dgrcorrientes.gov.ar/tramitesbe/',
    commonBE:'https://api.desa.dgrcorrientes.gov.ar/commonbe/',
    csmBE:'https://api.csm.desa.dgrcorrientes.gov.ar/'
    //notificadorBE:'https://api.desa.dgrcorrientes.gov.ar/notificador/',
};
const features = {
    planesPagos: true,
    planesPagosSoloInternos: true,
    liquidacionSellos: true,
    ddjjIIBB: true,
    turnos: true,
    cargaNoLab: true,
    capacidadDelegacion:true,
    adminUsuarios:true,
    tramites: true,
    ddjjIIBBAnual: true,
    habilitaConvergente: true,
    habilitaLotes: true

}
window.config = {origenLote,csmUrl,client_id: client_id, client_secret: client_secret, accessTokenTasas: accessTokenTasas, oldWebUrl: oldWebUrl, miportalUrl : miportalUrl, apiBase: apiBase, features: features, GTM:GTM};

