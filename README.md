# kaholo-plugin-prtg
Kaholo plugin for integration with PRTG API.

## Settings
1. PRTG Server URL **Required** - The URL of the PRTG server to communicate with. For example: http://127.0.0.1
2. Username (String) **Required** - The username of an authorized user to authenticate with.
3. Passhash (Vault) **Required** - The passhash of the user. You can find your PRTG passhash in your account settings under 'Passhash'.

## Get Sensor
Get back information about the specified sensor.

### Parameters
1. Sensor (Autocomplete) **Required** - The sensor to get back information about.

## Pause Sensor
Pause the specified sensor.

### Parameters
1. Sensor (Autocomplete) **Required** - The sensor to pause.
2. Message (String) **Optional** - A message to attach to the pause.

## Resume Sensor
Resume the specified sensor.

### Parameters
1. Sensor (Autocomplete) **Required** - The sensor to resume.