var FS = require('fs-extra')
var S = require('string')

const { exec } = require('child_process');

var tmpAA = 'send {WheelUp 1}'
var tmpBB = 'send {WheelUp 1}'
var tmpCC = 'send {WheelUp 1}'
var tmpDD = 'send {WheelUp 1}'
var tmpEE = 'send {WheelUp 1}'
var tmpFF = 'send {WheelUp 1}'
var tmpGG = 'send {WheelUp 1}'
var tmpHH = 'send {WheelUp 1}'
var tmpII = 'send {WheelUp 1}'
var tmpJJ = 'send {WheelUp 1}'
var tmpKK = 'send {WheelUp 1}'
var tmpLL = 'send {WheelUp 1}'

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

        var lastDirList = FS.readdirSync('../diffusion/outputs/img2img-images/')
        var lastDir = lastDirList.pop();

        var nowDir = '../diffusion/outputs/img2img-images/' + lastDir
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

    var subject = FS.readFileSync('./00009.txt').toString().split('\n')

    subject.forEach((a, b) => {
        subject[b] = a.split(':')[1]
    })

    var camera0 = ['wide shot', 'full body', 'extreme close up', 'close up', 'over the shoulder shot', 'extreme wide angle ', 'Low Angle', 'High Angle', 'Overhead View']
    var camera1 = ['Low Angle Shot', 'High Angle Shot', 'Close-Up Shot', "Bird's-Eye View", 'Eye-Level Shot', 'Dutch Angle', 'Ground Level', 'Waist Level Shots', 'Establishing Shot', 'Full Shot', 'three-quarters shot']
    var camera = [...camera0, ...camera1]

    var lighting0 = ['Natural Lighting', 'Diffused Lighting', 'Rim Lighting', 'Neon Side Lighting', 'dark misty', 'before dawn', 'golden hour', 'mid-day']
    var lighting1 = ['Natural sunlight', 'Golden hour glow', 'Blue hour ambiance', 'Studio lighting setup', 'Rembrandt lighting', 'Split light', 'Softbox diffusion', 'Ring light effect']
    var lighting2 = ['Cinematic split', 'Abstract shadow patterns', 'Soft shadows/Harsh shadows', 'Colorful shadows', 'Double exposure with shadows', 'Rim light', 'Backlit', 'Diffused lighting', 'Dimly lit', 'Light overexposure']
    var lighting3 = ['Crystal', 'Glasses, mirror, car window', 'Caustics', 'Refraction effect', 'Subsurface Scattering', 'Reflective raindrops', 'Metal surfaces', 'glass table reflection']
    var lighting4 = ['Broad lighting', 'Loop lighting', 'Rembrandit lighting', 'Glow on face', 'Sun bathing face', 'Moonlight', 'Starlight', 'Golden hour', 'Blue hour', 'Panchromatic', 'Redscale', 'Shadow plays', 'Neon light', 'Holographic', 'Shimmering', 'Iridescence' ,'Prismatic']
    var lighting5 = ['Sunlight', 'Lens flare', 'Motion blur', 'Spring blur', 'Speed blur', 'Zoom blur' , 'Focal blur', 'Redial blur', 'Velocity blur', 'Tilt-shift effect', 'Long exposure trails', 'Zoom burst' ]

    
    const lighting = [...lighting0, ...lighting1, ...lighting2, ...lighting3, ...lighting4,  ...lighting5];

    var color = ['chroma key green colored screen', 'chroma key umber colored screen', , 'chroma key yellow colored screen']

    var count = [3, 4, 2]

    var option = ['cludstrumellomush', 'kaaarth-girl', 'kbar-riddlez', 'larry-duck-man', 'eagle-paw-paw-haw', 'zoggg', 'orbie-mayhaw']

    var option = ['gaza-the-gazarian', 'gaza-the-gazarian']

    //var score = ['0.2703693', '0.4703693', '0.703693', '0.903693', '1.703693', '1.03693', '1.203693', '1.303693', '1.403693', '1.99403693']

    var score = ['1.03693', '1.203693', '1.303693', '1.403693', '0.3693', '0.203693', '0.6303693', '0.0403693']

    var Chance = require('chance');

    // Instantiate Chance so it can be used
    var chance = new Chance();

    var round = chance.pickone(count)

    var love = chance.pickone(images)

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

    if (now2 != null) {
        now2 = now2.replace(/\r?\n|\r/g, "");
    }

    boom = boom.replace(/\r?\n|\r/g, "");

    var main = 'Send ' + boom + ' '
    tmp05 = 'Send masterpiece, ' + now2 + ' , ' + now3 + ' , ' + now4 + ' , ' + boom + ',  ' + now0 + ' , 2020s, anime, screencap, cinematic, ultimate details  ' + now1 + ''

    tmp05 = tmp05.replace(/\r?\n|\r/g, "");

    tmp05 += ' ' + now0 + '<lora:' + now0 + ':' + now1 + '>'
    tmp12 = 'Send ' + love

    //tmp12 = ' '
    last0 = now0;
    last1 = now1;
    last2 = S(boom).slugify().s;

    var list = [tmpAA, tmpBB, tmpCC, tmpDD, tmpEE, tmp00, tmp01, tmp02, tmp03, tmp04, tmp05, tmp06, tmp07, tmp08, tmp09, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16]

    var output = list.join('\n')

    FS.writeFile('capture.ahk', output)

    exec('capture.ahk', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing batch file: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        setTimeout(action, 60000 * 5 + 55000)
    });

}



setTimeout(action, 10000)



