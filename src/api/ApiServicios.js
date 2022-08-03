//here we are importing our Axios dependency
import axios from 'axios'

//here is where we are defining our custom axios instance.
//if all of your API routes come from the same location, or you are using a web proxy to hit the server, you can provide a base url
//you can also attach axios interceptors to custom axios instances as well
const apiClient = axios.create({
    baseURL: 'https://api.test.dgrcorrientes.gov.ar/public-be/servicios'
})

//Now set up the routes.  We are going to export a default object with keys that keep our API routes organized.  For example, all of the auth routes live in the Auth object

export default {
    service: {
        calculoInteres(monto,fechaVencimientoOriginal,fechaPago ,tipoInteres ) {
            return apiClient.get('/CalculoDeIntereses' ,{
                params: {
                    monto,
                    fechaVencimientoOriginal,
                    fechaPago,
                    tipoInteres
            } 
        })},
        cotizacionDolar(mes,anio) {
            return apiClient.get('/CotizacionDolar' ,{
                params: {
                    mes,
                    anio
            } 
        })},
        consultaActividad(actividad,nomenclador) {
            return apiClient.get('/ConsultaActividad' ,{
                params: {
                    codigoActividad : actividad,
                    tipoConsulta: nomenclador
                    
            } 
        })},
        consultaExpedientes(numero,anio) {
            return apiClient.get('/ConsultaDeExpedientes' ,{
                params: {
                   numero,
                   anio
                    
            } 
        })},
        consultaLibreDeuda(adrema) {
            return apiClient.get(`/ConsultaDeLibreDeuda/${adrema}` ,{
                params: {
                    numeroAdrema :adrema
                    
            } 
        })},
    },
    constanciaInscripcion(cuit){
        return apiClient.get(`/constInscripciones` ,{
            params: {
                cuit
                }
            })},
    consultaDelegaciones() {
            return apiClient.get('/tipos-atencion/?populate=*')}
}