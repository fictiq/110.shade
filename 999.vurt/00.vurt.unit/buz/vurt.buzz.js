"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pivotVurt = exports.dotVurt = exports.commitVurt = exports.workVurt = exports.valueVurt = exports.containsVurt = exports.countVurt = exports.listPivotVurt = exports.listUnitVurt = exports.testCloudVurt = exports.replaceVurt = exports.updateVurt = exports.unitVurt = exports.fetchVurt = exports.delayVurt = exports.bundleVurt = exports.initVurt = void 0;
const ActMnu = require("../../98.menu.unit/menu.action");
const ActVrt = require("../vurt.action");
const ActDsk = require("../../96.disk.unit/disk.action");
const ActTrm = require("../../01.terminal.unit/terminal.action");
const ActBus = require("../../99.bus.unit/bus.action");
var bit, lst, dex, dat, idx, val, src;
const initVurt = async (cpy, bal, ste) => {
    var env = require("dotenv").config();
    bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, src: bal.src, lst: [ActVrt, ActDsk, ActTrm], dat: bal.dat });
    if (bal.val == 1)
        patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-vurt" } });
    return cpy;
};
exports.initVurt = initVurt;
const bundleVurt = async (cpy, bal, ste) => {
    if (bal.src == null)
        bal.src = '999.vurt';
    var root = '999.vurt';
    var template = 'node ./data/hand/000.eveiefy -t ' + bal.src;
    //bit = await FS.ensureDirSync( '../' + bal.src + '/work/')
    console.log("bundling " + bal.src);
    bit = await ste.bus(ActDsk.WRITE_DISK, { src: './002.bundle-pivot.bat', dat: template });
    bit = await ste.bus(ActDsk.BATCH_DISK, { src: '002.bundle-pivot.bat' });
    if (bal.val == null)
        bal.val = 3;
    //bit = await ste.bus(ActVrt.LIST_PIVOT_VURT, {})
    //lst = bit.vrtBit.lst
    //var output = []
    //lst.forEach((a) => {
    //  var idx = '../' + a + '/work/' + bal.src + '.js'
    //  var flag = FS.existsSync(idx);
    //  if (flag == false) return
    //  output.push(idx)
    //})
    //if ( output.length == 0 ) {
    //  bal.slv({ vrtBit: { idx: "bundle-vurt", src:bal.src } })
    //  return
    // }
    //var source =  root + '/bundle/' + bal.src + '.js'
    //debugger
    //output.forEach(async (a, b) => {
    //  bit = await FS.copy(source, a)
    //  console.log("copying to " + a)
    //  debugger
    //  if (b < output.length - 1) return
    setTimeout(() => bal.slv({ vrtBit: { idx: "bundle-vurt" } }), bal.val);
    //})
    return cpy;
};
exports.bundleVurt = bundleVurt;
const delayVurt = (cpy, bal, ste) => {
    if (bal.slv == null)
        return console.log("no solve");
    if (bal.val == null)
        bal.val = 1333;
    setTimeout(() => bal.slv({ vrtBit: { idx: "delay-vurt", val: bal.val } }));
    return cpy;
};
exports.delayVurt = delayVurt;
const fetchVurt = (cpy, bal, ste) => {
    var url = bal.src;
    var pak = { method: bal.idx };
    fetch(url, pak)
        .then((res) => {
        return res.json();
    })
        .then(async (dat) => {
        if (bal.slv != null)
            bal.slv({ vrtBit: { idx: "fetch-vurt", dat } });
    })
        .catch((error) => {
        bal.slv({ vrtBit: { idx: "fetch-vurt-error", dat: error } });
    });
};
exports.fetchVurt = fetchVurt;
const unitVurt = (cpy, bal, ste) => {
    return cpy;
};
exports.unitVurt = unitVurt;
const updateVurt = (cpy, bal, ste) => {
    return cpy;
};
exports.updateVurt = updateVurt;
const replaceVurt = async (cpy, bal, ste) => {
    var bit;
    bit = await ste.hunt(ActVrt.LIST_PIVOT_VURT);
    var list = bit.vrtBit.lst;
    let filter = list.filter((e) => { return e != cpy.idx; });
    var fin = '';
    if (bal.idx == 'vurt') {
        bit = await ste.bus(ActDsk.READ_DISK, { src: './work/999.vurt.js' });
        var vurt = bit.dskBit.dat;
        bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../998.work/work/999.vurt.js', dat: vurt });
        setTimeout(() => {
            if (bal.slv != null)
                bal.slv({ vrtBit: { idx: "replace-vurt" } });
        }, 3333);
        return;
    }
    if (bal.idx == 'collect') {
        bit = await ste.hunt(ActVrt.CONTAINS_VURT, { lst: filter, src: 'collect' });
        let filterB = bit.vrtBit.lst.filter((e) => { return e[0] != '999.vurt'; });
        filterB.forEach(async (a) => {
            var sigh = '999.vurt';
            var remove = '../' + a[0] + '/' + a[0] + '/' + a[1];
            var copy = '../' + sigh + '/' + sigh + '/' + a[1];
            bit = await FS.ensureDir(remove);
            console.log("ensuring..." + remove);
            bit = await FS.remove(remove);
            bit = await FS.copy(copy, remove);
            console.log("copying..." + copy);
        });
        setTimeout(() => {
            if (bal.slv != null)
                bal.slv({ vrtBit: { idx: "replace-vurt", lst: filterB } });
        }, 5333);
        return;
    }
    switch (bal.idx) {
        case "bus":
            fin = '99.bus.unit';
            break;
        case "core":
            fin = '99.core';
            break;
        case "hunt":
            fin = 'hunt.ts';
            break;
    }
    filter.forEach((a) => {
        var src, out;
        if (fin.includes('.') == true) {
            src = '../' + a + '/' + a + '/' + fin;
            out = './' + cpy.idx + '/' + fin;
        }
        else {
            src = '../' + a + '/' + a + '/' + fin;
            out = './' + cpy.idx + '/' + fin;
        }
        FS.ensureDirSync(src);
        FS.removeSync(src);
        FS.copySync(out, src);
        console.log('copying ' + out + ' -> ' + src);
    });
    if (bal.slv != null)
        bal.slv({ vrtBit: { idx: "replace-vurt", lst: filter } });
    return cpy;
};
exports.replaceVurt = replaceVurt;
const testCloudVurt = (cpy, bal, ste) => { };
exports.testCloudVurt = testCloudVurt;
const listUnitVurt = async (cpy, bal, ste) => {
    var list = FS.readdirSync('../' + bal.src + '/' + bal.src);
    var lst = list.filter((e) => { return e.includes('.unit') == true; });
    if (bal.slv != null)
        bal.slv({ vrtBit: { idx: "list-unit-vurt", lst } });
};
exports.listUnitVurt = listUnitVurt;
const listPivotVurt = async (cpy, bal, ste) => {
    var root = "../";
    var listDir = await FS.readdir(root);
    var pivotList = [];
    listDir.forEach((a) => {
        var pth = root + a;
        if (FS.lstatSync(pth).isDirectory() == false)
            return;
        if (a.includes(".") == false)
            return;
        var sub = a.split(".")[0];
        if (sub.length != 3)
            return;
        if (S(sub).isNumeric().s == false)
            return;
        pivotList.push(a);
    });
    if (bal.src != null) {
        var out = [];
        pivotList.forEach((a) => {
            var loc = '../' + a + '/' + bal.src;
            var flag = FS.existsSync(loc);
            if (flag == false)
                return;
            out.push(a);
        });
        pivotList = out;
    }
    if (bal.slv != null)
        bal.slv({ vrtBit: { idx: "list-pivot-vurt", lst: pivotList } });
    return cpy;
};
exports.listPivotVurt = listPivotVurt;
const countVurt = async (cpy, bal, ste) => {
    var path = require("path");
    var root = "../";
    var listDir = await FS.readdir(root);
    var pivotList = [];
    listDir.forEach((a) => {
        var pth = root + a;
        if (FS.lstatSync(pth).isDirectory() == false)
            return;
        if (a.includes(".") == false)
            return;
        var sub = a.split(".")[0];
        if (sub.length != 3)
            return;
        if (S(sub).isNumeric().s == false)
            return;
        pivotList.push(a);
    });
    var unitList = [];
    pivotList.forEach((a) => {
        var dir = root + a + "/" + a;
        var list = FS.readdirSync(dir);
        list.forEach((b) => {
            if (b.includes("unit") == false)
                return;
            unitList.push(dir + "/" + b);
        });
    });
    var fileList = [];
    var count = 0;
    var data = {};
    var total = 0;
    //THIS IS THE END
    const finFunc = () => {
        fileList.forEach((a) => {
            if (FS.lstatSync(a).isDirectory() == true)
                return;
            var line = FS.readFileSync(a).toString().split("\n");
            line.forEach((b) => {
                if (b.length < 1)
                    return;
                if (b.includes("//"))
                    return;
                total += 1;
                var idx = S(b).slugify().s;
                if (idx.length < 3)
                    return;
                if (data[idx] != null)
                    return (data[idx] += 1);
                data[idx] = 1;
            });
        });
        var snow = 0;
        var final = 0;
        for (var key in data) {
            snow += 1;
            final += data[key];
        }
        var date = luxon_1.DateTime.now();
        var now = date.toLocaleString(luxon_1.DateTime.DATETIME_MED);
        now = now.replaceAll(":", "-");
        now = S(now).slugify().s;
        var dat = { now, total, snow };
        var countSrc = "./data/count.txt";
        FS.ensureFileSync(countSrc);
        var list = FS.readFileSync(countSrc).toString().split("\n");
        list.unshift(JSON.stringify(dat));
        FS.writeFileSync(countSrc, list.join("\n"));
        if (bal.slv != null)
            bal.slv({ vrtBit: { idx: "count-vurt", dat } });
    };
    const walkFunc = async (err, pathname, dirent) => {
        if (err) {
            throw err;
        }
        if (dirent.isDirectory() && dirent.name.startsWith(".")) {
            return false;
        }
        var want = pathname.split(path.sep);
        fileList.push(want.join("/"));
    };
    unitList.forEach(async (a) => {
        await (0, walk_1.walk)(a, walkFunc);
        var dirs = a.split('/');
        var pythonDir = '../' + dirs[1] + '/python/';
        var renpyDir = '../' + dirs[1] + '/renpy/';
        var screenDir = '../' + dirs[1] + '/screen/';
        var pytExist = FS.existsSync(pythonDir);
        var renExist = FS.existsSync(pythonDir);
        var screenExist = FS.existsSync(screenDir);
        var listing;
        if (pytExist == true) {
            listing = FS.readdirSync(pythonDir);
            listing.forEach((a) => { fileList.push(pythonDir + '/' + a); });
        }
        if (renExist == true) {
            listing = FS.readdirSync(renpyDir);
            listing.forEach((a) => { fileList.push(renpyDir + '/' + a); });
        }
        if (screenExist == true) {
            listing = FS.readdirSync(screenDir);
            listing.forEach((a) => { fileList.push(screenDir + '/' + a); });
        }
        //now check for python
        count += 1;
        if (count == unitList.length)
            finFunc();
    });
    return cpy;
};
exports.countVurt = countVurt;
const containsVurt = (cpy, bal, ste) => {
    var out = [];
    var check = bal.src;
    bal.lst.forEach((a) => {
        var dir = '../' + a + '/' + a;
        var lst = FS.readdirSync(dir);
        lst.forEach((b) => {
            if (b.includes(check))
                out.push([a, b]);
        });
    });
    if (bal.slv != null)
        bal.slv({ vrtBit: { idx: "contains-vurt", lst: out } });
    return cpy;
};
exports.containsVurt = containsVurt;
const valueVurt = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.valueVurt = valueVurt;
const workVurt = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.workVurt = workVurt;
const commitVurt = async (cpy, bal, ste) => {
    if (bal.src == null)
        bal.src = 'better stuff';
    src = `
  cd..
  git add .
  git commit -a -m "feat(root): {{=it.message}}" 
  git push
  `;
    bit = await ste.hunt(ActVrt.DOT_VURT, { src, dat: { message: bal.src } });
    dat = bit.vrtBit.src;
    bit = await ste.hunt(ActDsk.WRITE_DISK, { idx: './000.input.bat', dat });
    const open = require('open');
    var loc = './000.input.bat';
    bit = await open(loc);
    if (bal.slv != null)
        bal.slv({ vrtBit: { idx: "commit-vurt" } });
    return cpy;
};
exports.commitVurt = commitVurt;
const dotVurt = (cpy, bal, ste) => {
    var gel = bal.dat;
    var out = [];
    bal.src.split("\n").forEach((a, b) => {
        if (a.includes('//') == true)
            return;
        var doTCompiled = doT.template(a);
        var outLine = doTCompiled(gel);
        out.push(outLine);
    });
    if (bal.slv != null)
        bal.slv({ vrtBit: { idx: "dot-vurt", lst: out, src: out.join('\n') } });
    return cpy;
};
exports.dotVurt = dotVurt;
const pivotVurt = async (cpy, bal, ste) => {
    var nom = bal.idx;
    var name = bal.src;
    var dex = String(bal.dex).padStart(3, '0');
    if (nom == null)
        nom = 'sed';
    if (name == null)
        name = 'seed';
    if (dex == null)
        dex = '000';
    var pivot = dex + '.' + name;
    var pivotUnit = pivot + '.unit';
    var pivotSrc = './data/redux/pivot/';
    var vueSrc = pivotSrc + 'vue';
    var dataSrc = pivotSrc + 'data';
    var unitIdx = '/000.pivot/';
    var unitPvt = '/00.' + name + '';
    var collectIdx = '97.collect.unit';
    var menuIdx = '98.menu.unit';
    var busIdx = '99.bus.unit';
    var coreIdx = '99.core';
    var collectSrc = pivotSrc + unitIdx + collectIdx;
    var menuSrc = pivotSrc + unitIdx + menuIdx;
    var busSrc = pivotSrc + unitIdx + busIdx;
    var coreSrc = pivotSrc + unitIdx + coreIdx;
    var actionSrc = pivotSrc + unitIdx + 'act';
    var valSrc = pivotSrc + unitIdx + 'val';
    var pivotFin = './data/' + pivot + '/';
    var pivotUnt = pivotFin + pivot + '/00.' + name + '/';
    bit = await ste.hunt(ActDsk.ENSURE_DISK, { src: './data/' + pivot });
    bit = await ste.hunt(ActDsk.DELETE_DISK, { src: './data/' + pivot });
    var itmSrc;
    itmSrc = { src: vueSrc, idx: pivotFin + "/vue" };
    bit = await ste.hunt(ActDsk.COPY_DISK, itmSrc);
    itmSrc = { src: dataSrc, idx: pivotFin + "/data" };
    bit = await ste.hunt(ActDsk.COPY_DISK, itmSrc);
    itmSrc = { src: collectSrc, idx: pivotFin + '/' + pivot + '/' + collectIdx };
    bit = await ste.hunt(ActDsk.COPY_DISK, itmSrc);
    itmSrc = { src: menuSrc, idx: pivotFin + '/' + pivot + '/' + menuIdx };
    bit = await ste.hunt(ActDsk.COPY_DISK, itmSrc);
    itmSrc = { src: busSrc, idx: pivotFin + '/' + pivot + '/' + busIdx };
    bit = await ste.hunt(ActDsk.COPY_DISK, itmSrc);
    itmSrc = { src: coreSrc, idx: pivotFin + '/' + pivot + '/' + coreIdx };
    bit = await ste.hunt(ActDsk.COPY_DISK, itmSrc);
    itmSrc = { src: actionSrc, idx: pivotFin + '/' + pivot + '/act/' };
    bit = await ste.hunt(ActDsk.COPY_DISK, itmSrc);
    itmSrc = { src: valSrc, idx: pivotFin + '/' + pivot + '/val/' };
    bit = await ste.hunt(ActDsk.COPY_DISK, itmSrc);
    bit = await ste.hunt(ActDsk.LIST_DISK, { src: './data/redux/pivot/' });
    lst = bit.dskBit.lst;
    var batLst = [];
    lst.forEach((a) => {
        if (a.includes('.bat') == false)
            return;
        var itmSrc = { src: pivotSrc + a, idx: pivotFin + '/' + a };
        batLst.push(itmSrc);
    });
    var htmlLst = [];
    lst.forEach((a) => {
        if (a.includes('.html') == false)
            return;
        var itmSrc = { src: pivotSrc + a, idx: pivotFin + '/' + a };
        htmlLst.push(itmSrc);
    });
    var jsLst = [];
    lst.forEach((a) => {
        if (a.includes('.js') == false)
            return;
        var itmSrc = { src: pivotSrc + a, idx: pivotFin + '/' + a };
        jsLst.push(itmSrc);
    });
    var cjsLst = [];
    lst.forEach((a) => {
        if (a.includes('.cjs') == false)
            return;
        var itmSrc = { src: pivotSrc + a, idx: pivotFin + '/' + a };
        cjsLst.push(itmSrc);
    });
    var jsonLst = [];
    lst.forEach((a) => {
        if (a.includes('.json') == false)
            return;
        var itmSrc = { src: pivotSrc + a, idx: pivotFin + '/' + a };
        jsonLst.push(itmSrc);
    });
    var output = [];
    output = output.concat(batLst);
    output = output.concat(htmlLst);
    output = output.concat(jsLst);
    output = output.concat(cjsLst);
    output = output.concat(jsonLst);
    output;
    var pvt = '00.pivot.unit/';
    var buzzIdx = '/buz/' + name + '.buzz.ts';
    var buzzPvt = '/buz/pivot.buzz.ts';
    var buzzSrc = { src: pivotSrc + unitIdx + pvt + buzzPvt, idx: pivotFin + '/' + pivot + '/' + unitPvt + '.unit/' + buzzIdx };
    output.push(buzzSrc);
    var bitIdx = '/fce/' + name + '.bit.ts';
    var bitPvt = '/fce/pivot.bit.ts';
    var bitSrc = { src: pivotSrc + unitIdx + pvt + bitPvt, idx: pivotFin + '/' + pivot + '/' + unitPvt + '.unit/' + bitIdx };
    output.push(bitSrc);
    var fceIdx = '/fce/' + name + '.interface.ts';
    var fcePvt = '/fce/pivot.interface.ts';
    var fceSrc = { src: pivotSrc + unitIdx + pvt + fcePvt, idx: pivotFin + '/' + pivot + '/' + unitPvt + '.unit/' + fceIdx };
    output.push(fceSrc);
    var actIdx = '/' + name + '.action.ts';
    var actPvt = '/pivot.action.ts';
    var actSrc = { src: pivotSrc + unitIdx + pvt + actPvt, idx: pivotFin + '/' + pivot + '/' + unitPvt + '.unit/' + actIdx };
    output.push(actSrc);
    var buzIdx = '/' + name + '.buzzer.ts';
    var buzPvt = '/pivot.buzzer.ts';
    var buzSrc = { src: pivotSrc + unitIdx + pvt + buzPvt, idx: pivotFin + '/' + pivot + '/' + unitPvt + '.unit/' + buzIdx };
    output.push(buzSrc);
    var modIdx = '/' + name + '.model.ts';
    var modPvt = '/pivot.model.ts';
    var modSrc = { src: pivotSrc + unitIdx + pvt + modPvt, idx: pivotFin + '/' + pivot + '/' + unitPvt + '.unit/' + modIdx };
    output.push(modSrc);
    var rdcIdx = '/' + name + '.reduce.ts';
    var rdcPvt = '/pivot.reduce.ts';
    var rdcSrc = { src: pivotSrc + unitIdx + pvt + rdcPvt, idx: pivotFin + '/' + pivot + '/' + unitPvt + '.unit/' + rdcIdx };
    output.push(rdcSrc);
    var untIdx = '/' + name + '.unit.ts';
    var untPvt = '/pivot.unit.ts';
    var untSrc = { src: pivotSrc + unitIdx + pvt + untPvt, idx: pivotFin + '/' + pivot + '/' + unitPvt + '.unit/' + untIdx };
    output.push(untSrc);
    var qstIdx = '/000.quest.' + name + '.js';
    var qstSrc = { src: pivotSrc + unitIdx + '/000.quest.pivot.js', idx: pivotFin + '/' + pivot + '/' + qstIdx };
    output.push(qstSrc);
    var beeIdx = '/BEE.ts';
    var beeSrc = { src: pivotSrc + unitIdx + '/' + beeIdx, idx: pivotFin + '/' + pivot + '/' + beeIdx };
    output.push(beeSrc);
    var hntIdx = '/hunt.ts';
    var beeSrc = { src: pivotSrc + unitIdx + '/' + hntIdx, idx: pivotFin + '/' + pivot + '/' + hntIdx };
    output.push(beeSrc);
    var cfgIdx = '/tsconfig.json';
    var cfgSrc = { src: pivotSrc + unitIdx + '/' + cfgIdx, idx: pivotFin + '/' + pivot + '/' + cfgIdx };
    output.push(cfgSrc);
    var mnuIdx = '/00.menu.buzz.ts';
    var mnuSrc = { src: pivotSrc + unitIdx + '/98.menu.unit/buz/' + mnuIdx, idx: pivotFin + '/' + pivot + '/98.menu.unit/buz/' + mnuIdx };
    output.push(mnuSrc);
    var bitReadMain = await ste.hunt(ActDsk.READ_DISK, { src: pivotSrc + '/main.js' });
    var bitWriteMain = await ste.hunt(ActDsk.WRITE_DISK, { src: pivotFin + '/main.js', dat: bitReadMain.dskBit.dat });
    var gel = {};
    gel.nom = nom;
    gel.name = name;
    gel.pivot = dex + '.' + name;
    gel.nameCaps = name.toUpperCase();
    gel.nomCaps = nom.toUpperCase();
    gel.nomTitle = nom.charAt(0).toUpperCase() + nom.slice(1);
    gel.nameTitle = name.charAt(0).toUpperCase() + name.slice(1);
    const next = async (lst) => {
        console.log(lst.length);
        if (lst.length == 0) {
            if (bal.slv != null)
                bal.slv({ vrtBit: { idx: "pivot-vurt", src: '' } });
            return;
        }
        var itm = lst.shift();
        if (itm == null)
            return next(lst);
        itm.src;
        var bitRed = await ste.hunt(ActDsk.READ_DISK, { src: itm.src });
        src = bitRed.dskBit.dat;
        var bitDot = await ste.hunt(ActVrt.DOT_VURT, { src, dat: gel });
        var lstDot = bitDot.vrtBit.lst;
        itm.idx;
        var bitDsk = await ste.hunt(ActDsk.WRITE_DISK, { src: itm.idx, dat: lstDot.join('\n') });
        //console.log(JSON.stringify(itm))
        lst;
        next(lst);
    };
    output;
    next(output);
    return cpy;
};
exports.pivotVurt = pivotVurt;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const FS = require("fs-extra");
const S = require("string");
const walk_1 = require("@root/walk");
const luxon_1 = require("luxon");
const doT = require("dot");
//# sourceMappingURL=vurt.buzz.js.map