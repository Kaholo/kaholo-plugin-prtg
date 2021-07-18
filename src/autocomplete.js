const { getPrtgClient } = require('./helpers');
const parsers = require("./parsers");

// auto complete helper methods

function mapAutoParams(autoParams){
  const params = {};
  autoParams.forEach(param => {
    params[param.name] = parsers.autocomplete(param.value);
  });
  return params;
}


function filterResult(result, query){
  if (!query || result.length == 0) return result;
  query = query.split(" ");
  return result.filter(item => query.every(qWord => 
    item.value.toLowerCase().includes(qWord.toLowerCase())
  ));
}
 
// main auto complete methods

async function listSensors(query, pluginSettings) {
  const settings = mapAutoParams(pluginSettings);
  const client = getPrtgClient(settings);
  let sensors = await client.getSensors();
  sensors = sensors.map(sensor => ({
    id: sensor.objid.toString(),
    value: `${sensor.name} ${sensor.device}`
  }));
  return filterResult(sensors, query);
}

module.exports = {
  listSensors
}
