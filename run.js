const path = require('path');
const fs = require('fs');
var exec = require('child_process').exec;

exec('tsc -b 110.shade', async (err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`);
    }

    init();

})




const init = async (prt) => {

    console.log("inits")

    const local = 'mqtt://localhost:' + prt;
    const localBit = { idx: 'local', src: local };

    PIVOT = require(path.resolve('./999.pivot/index'));
    PIVOT_ACTION = require(path.resolve('./999.pivot/00.pivot.unit/pivot.action'));

    await PIVOT.hunt(PIVOT_ACTION.INIT_PIVOT, { val: 1, dat: null, src: local });

}