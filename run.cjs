const path = require('path');
const fs = require('fs');
const MQTT = require('async-mqtt');
const { program } = require('commander');

const PORT = 1001;
const wsPort = 8883;

let SHADE;
let VURT;

var idx;
program.option('--first').option('-t, --separator <char>');
program.parse(process.argv);
const options = program.opts();
if (options['separator'] != null) idx = options['separator'];

const title = idx;

let dev = false
let pvt = false

if (title == 'development') dev = true
if (title == 'pivot') pvt = true

const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);

const httpServer = require('http').createServer()
const ws = require('websocket-stream')
ws.createServer({ server: httpServer }, aedes.handle)

httpServer.listen(wsPort, function () {
  console.log('Aedes MQTT-WS listening on port: ' + wsPort)
  aedes.publish({ topic: 'aedes/hello', payload: "I'm broker " + aedes.id })
});

server.listen(PORT, async () => {
    console.log('server started and listening on port ', PORT);

    var exec  = require('child_process').exec;

    exec('tsc -b 110.shade', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }

        init(PORT);

        })


});


const init = async (prt) => {

    console.log("inits")

    const local = 'mqtt://localhost:' + prt;
    const localBit = { idx: 'local', src: local };

    PIVOT = require(path.resolve('./999.pivot/index'));
    PIVOT_ACTION = require(path.resolve('./999.pivot/00.pivot.unit/pivot.action'));

    await PIVOT.hunt( PIVOT_ACTION.INIT_PIVOT, { val:1, dat: MQTT, src: local });

}