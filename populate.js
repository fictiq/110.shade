var FS = require('fs-extra')
var S = require('string')

var Chance = require('chance');
var chance = new Chance();

var lastDirList = FS.readdirSync('../reference')

var count = 333;

var output = []

for ( var i = 0; i < count; i++){
    var itm = chance.pickone(lastDirList)
    output.push( itm )
}

output.forEach( (a , b )=>{

    console.log( 'copy ' + a )
    FS.copy( '../reference/' + a, '../image/' + a  )

})

