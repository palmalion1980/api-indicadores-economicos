// variable de url api
const url = 'https://mindicador.cl/api'

// funcion llamados a la API y extracción de data.
    
async function getIndicator() {
    const res = await fetch(url)
    const data = await res.json()
  
// variables de inidcadores

const uf_nombre = data.uf.nombre;
const uf_valor = data.uf.valor;

const ivp_nombre = data.ivp.nombre;
const ivp_valor = data.ivp.valor;

const dolar_nombre = data.dolar.nombre;
const dolar_valor = data.dolar.valor;

const euro_nombre = data.euro.nombre;
const euro_valor = data.euro.valor;

const ipc_nombre = data.ipc.nombre;
const ipc_valor = data.ipc.valor;

const utm_nombre = data.utm.nombre;
const utm_valor = data.utm.valor;

const imacec_nombre = data.imacec.nombre;
const imacec_valor = data.imacec.valor;

const tpm_nombre = data.tpm.nombre;
const tpm_valor = data.tpm.valor;

const libra_cobre_nombre = data.libra_cobre.nombre;
const libra_cobre_valor = data.libra_cobre.valor;

const tasa_desempleo_nombre = data.tasa_desempleo.nombre;
const tasa_desempleo_valor = data.tasa_desempleo.valor;

const bitcoin_nombre = data.bitcoin.nombre;
const bitcoin_valor = data.bitcoin.valor;

// manipulacion del dom, selector y agregar contenido dinamico con variables
document.getElementById('uf').textContent = `${uf_nombre}: $${uf_valor} CLP`;
document.getElementById('ivp').textContent = `${ivp_nombre}: $${ivp_valor} CLP`;
document.getElementById('dolar').textContent = `${dolar_nombre}: $${dolar_valor} CLP`;
document.getElementById('euro').textContent = `${euro_nombre}: $${euro_valor} CLP`;
document.getElementById('ipc').textContent = `${ipc_nombre}: ${ipc_valor}`;
document.getElementById('utm').textContent = `${utm_nombre}: $${utm_valor} CLP`;
document.getElementById('imacec').textContent = `${imacec_nombre}: ${imacec_valor}`;
document.getElementById('tpm').textContent = `${tpm_nombre}: ${tpm_valor}%`;
document.getElementById('libra_cobre').textContent = `${libra_cobre_nombre}: $${libra_cobre_valor} USD/lb`;
document.getElementById('tasa_desempleo').textContent = `${tasa_desempleo_nombre}: ${tasa_desempleo_valor}%`;
document.getElementById('bitcoin').textContent = `${bitcoin_nombre}: $${bitcoin_valor} USD`;
}
  
getIndicator()

// fecha
const fechaElemento = document.getElementById("fecha");
const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const fechaActual = new Date().toLocaleDateString('es-CL', opcionesFecha);
fechaElemento.textContent = `Actualizado el ${fechaActual}`;
