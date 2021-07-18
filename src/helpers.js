const PRTG = require('node-prtg');

function getPrtgClient(settings){
    if (!settings.url || !settings.username || !settings.passhash) throw "Missing one of the settings!";
    return new PRTG(settings);
}
  
module.exports = {
    getPrtgClient
}