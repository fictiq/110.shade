var FS = ('fs-extra')
var S = ('string')

var exec = require('child_process').exec;

exec('tsc -b 110.shade', async (err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`);
    }

    console.log("we have shade")

    var src = '110.shade'

    var exec = require('child_process').exec;
    if (src == null)
        src = '110.shade';

    
    var template = 'node ./data/hand/000.eveiefy -t ' + src;
    exec(template, async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }
        // console.log("bundling " + bal.src)
        //bit = await ste.bus(ActDsk.WRITE_DISK, { src: './002.bundle-pivot.bat', dat: template })
        //bit = await ste.bus(ActDsk.BATCH_DISK, { src: '002.bundle-pivot.bat' })

        var list = FS.readSync('./work/110.shade.js').toString().split('\n')

        var output = []

        list.forEach( (a)=>{
            var check = S( a ).contains( '_globals = (function(){ return this || (0,eval)("this"); }());'  ) .s
            if ( check == true ) return 
            output.push( a )
        })

        fs.writeSync( './work/110.shade.js', output.join('\n') )

        console.log('fin 110.shade')

    });

})