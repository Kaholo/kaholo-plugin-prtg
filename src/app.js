const { getPrtgClient } = require('./helpers');
const parsers = require('./parsers');

async function getSensor(action, settings) {
  const client = getPrtgClient(settings);
  return client.getSensor(parsers.autocomplete(action.params.sensor));
}

async function pauseSensor(action, settings) {
  const client = getPrtgClient(settings);
  return client.pauseSensor(parsers.autocomplete(action.params.sensor),
    parsers.string(action.params.message));
}

async function resumeSensor(action, settings) {
  const client = getPrtgClient(settings);
  return client.resumeSensor(parsers.autocomplete(action.params.sensor));
}

module.exports = {
  getSensor,
  pauseSensor,
  resumeSensor,
  //autocomplete
  ...require('./autocomplete')
}

