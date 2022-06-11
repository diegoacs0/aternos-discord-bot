const credentials = require('../../../../.credentials.json');

import { python } from 'pythonia';
const { Client, atserver } = await python('python_aternos');

let aternos;
let srvs;
let srv;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

async function load() {
  try {
  aternos = await Client.from_credentials(credentials.aternos_user, credentials.aternos_password);
  } catch (e) {
    console.log(e);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(load());
      }, getRandomArbitrary(400, 600));
    });
  }
  srvs = await aternos.list_servers();
  srv = await srvs[0];

  return srv;
}

export async function srv_info() {
  await load();
  return {
    "domain": await srv.domain,
    "motd": await srv.motd,
    "name": await srv.subdomain,
    "version": await srv.version,
    "type": await srv.edition,
    "status": await srv.status
  }
}

export async function interrupt(state) {
  await load();
  if (typeof state == 'undefined') {
    let status = await srv_info();
    status = status.status;
    
    if (status == 'online') {
      state = 0
    } 
    else if (status == 'offline') {
      state = 1
    } else {
      state = 2
    };
  }
  
  let res;
  let typeRes;
  
  try {
    if (state == 1) {
      res = await srv.start();
	  typeRes = "Ligando Servidor...";
    } else if (state == 0) {
      res = await srv.stop();
	  typeRes = "Desligando Servidor...";
    } else {
      res = 'Servidor já está reiniciando.';
    }

    if (res == 'null' || res == null) res = typeRes;
    return res;
  } catch(e) {
    if (e.message.includes("Server is already running")) {
      return "O servidor já está ligado"
    } else {
      return e.message
    }
  }
}


// Exit python
// it should do lol
