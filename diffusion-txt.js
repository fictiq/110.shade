var FS = require('fs-extra')
var S = require('string')

const { exec } = require('child_process');

var tmp00 = 'MouseMove, 178, 325'
var tmp01 = 'send {RButton}'
var tmp02 = 'Send, ^a'
var tmp03 = 'Sleep, 150'
var tmp04 = 'Send, ^c'
var tmp05 = 'Send supernatural political spy thriller lizard-skull-gator-man<lora:lizard-skull-gator-man:1.703693> '
var tmp06 = 'MouseMove, 900, 730'
var tmp07 = 'send {RButton}'
var tmp08 = 'Sleep, 150'
var tmp09 = 'MouseMove, 450, 910'
var tmp10 = 'send {RButton}'
var tmp11 = 'Sleep, 1550'
var tmp12 = 'Send 00000 '
var tmp13 = 'SendInput {enter}'
var tmp14 = 'Sleep, 150'
var tmp15 = 'MouseMove, 1633, 350'
var tmp16 = 'send {RButton}'

var last0;
var last1;
var last2;

var action = () => {

    console.log("action")

    if (last0 != null) {

        var lastDirList = FS.readdirSync('../diffusion/outputs/txt2img-images/')
        var lastDir = lastDirList.pop();

        var nowDir = '../diffusion/outputs/txt2img-images/' + lastDir
        var lastImgList = FS.readdirSync(nowDir)
        var lastImg = lastImgList.pop()

        if (lastImg != null) {

            var here = lastImg.split('.').pop()

            const sec = Math.floor(Date.now() / 1000);

            var fin = sec + '.' + last0 + '-' + last1 + '-' + last2 + '.' + lastImg;

            var input = nowDir + '/' + lastImg;
            var out = '../artwork/' + fin;

            FS.copyFileSync(input, out)
            //FS.removeSync(input)
        }

    }



    var accept = 'masterpiece, blonde assassin woman in winter gear with no hat and no hood , 2020s, anime, screencap, cinematic, ultimate details'

    var images = FS.readdirSync('../image')

    var phrase = ['supernatural', 'political', 'spy', 'thriller', 'gothic', 'horror', 'fantasy', 'cyberpunk', 'mystery', 'adventure', 'romance', 'silly', 'glop', 'brutalist', 'western', 'southern']

    var subject = FS.readFileSync('./data/subject.txt').toString().split('\n')

    subject.forEach((a, b) => {
        subject[b] = a.split(':')[1]
    })

    const camera = FS.readFileSync('./data/camera.txt').toString().split('\n')
    const lighting = FS.readFileSync('./data/light.txt').toString().split('\n')
    const color = FS.readFileSync('./data/color.txt').toString().split('\n')


    var count = [3, 4, 2]

    var option = ['cludstrumellomush', 'kaaarth-girl', 'kbar-riddlez', 'larry-duck-man', 'eagle-paw-paw-haw', 'zoggg', 'orbie-mayhaw']

    var option = ['okeenokeeswamp-trentabmit', 'okeenokeeswamp-trentabmit']





    //var score = ['0.2703693', '0.4703693', '0.703693', '0.903693', '1.703693', '1.03693', '1.203693', '1.303693', '1.403693', '1.99403693']

    var score = ['1.03693', '1.203693', '1.303693', '1.403693', '0.93693', '0.8203693', '1.46303693', '0.70403693']

    var Chance = require('chance');

    // Instantiate Chance so it can be used
    var chance = new Chance();

    var round = chance.pickone(count)

    //  var love = chance.pickone(images)

    var boom = ''

    for (var i = 0; i < round; i++) {
        var pop = chance.pickone(subject)
        boom += pop + ' '
    }

    var now0 = chance.pickone(option)
    var now1 = chance.pickone(score)

    var now2 = chance.pickone(subject)
    var now3 = chance.pickone(camera)
    var now4 = chance.pickone(lighting)
    var now5 = chance.pickone(color)


    now2 = now2.replace(/\r?\n|\r/g, "");
    boom = boom.replace(/\r?\n|\r/g, "");

    var main = 'Send ' + boom + ' '


    tmp05 = 'Send masterpiece, ' + now2 + ' , ' + now3 + ' , ' + now4 + ' , ' + boom + ', 2020s, anime, screencap, cinematic, ultimate details  ' + now1 + ''

    tmp05 = tmp05.replace(/\r?\n|\r/g, "");
    tmp05 += ' ' + now0 + '<lora:' + now0 + ':' + now1 + '>'
    //tmp12 = 'Send ' + love

    tmp12 = ' '


    last0 = now0;
    last1 = now1;
    last2 = S(boom).slugify().s;

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
        setTimeout(action, 60000 * 2 + 30000)
    });



}



setTimeout(action, 13000)



