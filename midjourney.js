var FS = require('fs-extra')
var S = require('string')
var Chance = require('chance');
var chance = new Chance();


const { exec } = require('child_process');

var tmp00 = 'MouseMove,  420,  170'
var tmp01 = 'send {LButton}'
var tmp02 = 'Send masterpiece, , supernatural frog horror, chrome key umber colored screen, 2020s, anime, screencap, cinematic, ultimate details, // --ar 16:9 --niji 6 --style raw --stylize 90'
var tmp03 = 'SendInput {enter}'
var tmp04 = ''
var tmp05 = ''
var tmp06 = ''
var tmp07 = ''
var tmp08 = ''
var tmp09 = ''
var tmp10 = ''
var tmp11 = ''
var tmp12 = ''
var tmp13 = ''
var tmp14 = ''
var tmp15 = ''
var tmp16 = ''

var last0;
var last1;
var last2;

var action = () => {

    var subject0 = ['jesus', 'child', 'hacker', 'tyrant', 'victim', 'hunter', 'alligator', 'bee', 'swamp', 'dancer']
    var subject1 = []

    var subject = FS.readFileSync('./00009.txt').toString().split('\n')

    subject.forEach( (a,b )=>{
        subject[b] = a.split(':')[1]
    })

    var camera = ['wide shot', 'full body', 'extreme close up', 'close up', 'over the shoulder shot', 'extreme wide angle ', 'Low Angle',  'High Angle', 'Overhead View']
    
    var lighting0 = ['Natural Lighting', 'Diffused Lighting', 'Rim Lighting', 'Neon Side Lighting', 'dark misty', 'before dawn' , 'golden hour', 'mid-day']
    var lighting1 = ['Natural sunlight', 'Golden hour glow', 'Blue hour ambiance', 'Studio lighting setup', 'Rembrandt lighting', 'Split light', 'Softbox diffusion', 'Ring light effect' ]
    const lighting = [...lighting0, ...lighting1];
    
    var count = [3, 1, 2]
    var phrase = ['supernatural', 'political', 'spy', 'thriller', 'gothic', 'horror', 'fantasy', 'cyberpunk', 'mystery', 'adventure', 'romance', 'silly', 'glop', 'brutalist', 'western', 'southern']
    var option = ['chroma key green colored screen',  'chroma key umber colored screen', ,  'chroma key yellow colored screen']
    var score = [ ' --ar 16:9 --niji 6 --style raw --stylize 90', ' --ar 16:9 --niji 5 --style expressive --stylize 90']
    
    var round = chance.pickone(count)

    var boom = ' '

    for (var i = 0; i < round; i++) {
        var pop = chance.pickone(subject)
        boom += pop + ' '
    }

    var now0 = chance.pickone(option)
    var now1 = chance.pickone(score)
    var now2 = chance.pickone(subject)
    var now3 = chance.pickone(camera)
    var now4 = chance.pickone(lighting)


    tmp02 = 'Send masterpiece, ' + now2 + ' , ' + now3 + ' , ' + now4 + ' , ' + boom + ',  ' + now0 + ' , 2020s, anime, screencap, cinematic, ultimate details  ' + now1 + ''
    tmp12 = ''


    var list = [tmp00, tmp01, tmp02, tmp03, tmp04, tmp05, tmp06, tmp07, tmp08, tmp09, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16]

    var output = list.join('\n')

    FS.writeFile('capture.ahk', output)

    exec('capture.ahk', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing batch file: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        setTimeout(action, 40000)
    });

}



setTimeout(action, 20000)



