"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.existDisk = exports.deleteDisk = exports.ensureDisk = exports.trashDisk = exports.batchDisk = exports.frameDisk = exports.copyDisk = exports.load_listDisk = exports.indexDisk = exports.readDisk = exports.writeDisk = exports.updateDisk = exports.initDisk = void 0;
const ActDsk = require("../../96.disk.unit/disk.action");
var bit, lst, idx, val, dat;
const initDisk = (cpy, bal, ste) => {
    cpy.local = bal.val;
    lst = [ActDsk.UPDATE_DISK, ActDsk.WRITE_DISK, ActDsk.READ_DISK];
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-disk", lst } });
    return cpy;
};
exports.initDisk = initDisk;
const updateDisk = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActDsk.READ_DISK, { src: bal.src });
    bit = bit.dskBit;
    lst = bit.lst;
    lst.push(bal.dat);
    bit = await ste.hunt(ActDsk.WRITE_DISK, { src: bal.src, dat: lst.join('\n') });
    if (bal.slv != null)
        bal.slv({ dskBit: { idx: "update-disk", src: bal.src } });
    return cpy;
};
exports.updateDisk = updateDisk;
const writeDisk = async (cpy, bal, ste) => {
    if (bal.val == null)
        bal.val = 0;
    if (bal.idx != null)
        bal.src = bal.idx;
    if (bal.src == null) {
        if (bal.slv != null)
            return bal.slv({ dskBit: { idx: "write-disk-error", src: "no source" } });
    }
    if (bal.dat == null) {
        if (bal.slv != null)
            return bal.slv({ dskBit: { idx: "write-disk-error", src: "no data" } });
    }
    FS.ensureFileSync(bal.src);
    //if (bal.idx == 'debug') {
    console.log("............");
    console.log("writing..." + bal.src);
    console.log("............");
    //}
    bal;
    //these streets are like an algorithm
    if (bal.val == 1)
        bit = await FS.writeJson(bal.src, bal.dat);
    else
        bit = await FS.writeFile(bal.src, bal.dat);
    bit;
    setTimeout(() => {
        if (bal.slv != null)
            bal.slv({ dskBit: { idx: "write-disk", src: bal.src } });
    }, 33);
    return cpy;
};
exports.writeDisk = writeDisk;
const readDisk = async (cpy, bal, ste) => {
    if (bal.val == null)
        bal.val = 0;
    FS.ensureFileSync(bal.src);
    if (bal.val == 1)
        dat = FS.readJsonSync(bal.src);
    else
        dat = FS.readFileSync(bal.src).toString();
    lst = [];
    dat;
    if (dat.split != null) {
        lst = dat.split('\n');
        console.log("............");
        console.log("reading..." + bal.src);
        console.log("............");
    }
    if (bal.slv != null)
        bal.slv({ dskBit: { idx: "read-disk", src: bal.src, dat, lst } });
    return cpy;
};
exports.readDisk = readDisk;
const indexDisk = async (cpy, bal, ste) => {
    debugger;
    if ((bal.src == null) && (bal.slv != null))
        bal.slv({ dskBit: { idx: "list-disk-error", src: 'no src present' } });
    if (bal.val == null)
        bal.val = 1;
    lst = await FS.readdir(bal.src);
    if (bal.slv != null)
        bal.slv({ dskBit: { idx: "index-disk", src: bal.src, lst } });
    return cpy;
};
exports.indexDisk = indexDisk;
const load_listDisk = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActDsk.INDEX_DISK, { src: bal.src });
    lst = bit.dskBit.lst;
    lst.forEach((a, b) => {
        lst[b] = bal.src + a;
    });
    var out = [];
    lst.forEach(async (a, b) => {
        bit = await ste.hunt(ActDsk.READ_DISK, { src: a });
        out.push({ src: a, dat: bit.dskBit.dat });
    });
    if (bal.slv != null)
        bal.slv({ dskBit: { idx: "load-list-disk", src: bal.src, lst: out } });
    return cpy;
};
exports.load_listDisk = load_listDisk;
//src is where it comes from ; idx is where it is going
const copyDisk = async (cpy, bal, ste) => {
    if (bal.src == null) {
        if (bal.slv != null)
            return bal.slv({ dskBit: { idx: "write-directory-disk-error", src: "no source" } });
    }
    if (bal.idx == null) {
        if (bal.slv != null)
            return bal.slv({ dskBit: { idx: "write-directory-disk-error", src: "no target" } });
    }
    if (FS.lstatSync(bal.src).isDirectory() == false) {
        // Do something
        if (bal.slv != null)
            return bal.slv({ dskBit: { idx: "write-directory-disk-error", src: "no directory" } });
        return;
    }
    FS.ensureDirSync(bal.src);
    FS.ensureDirSync(bal.idx);
    bit = await FS.remove(bal.idx);
    if (bal.dat == 'debug') {
        console.log("............");
        console.log("copying..." + bal.src);
        console.log("............");
    }
    //these streets are like an algorithm
    //and this should have been the other way
    bit = await FS.copy(bal.src, bal.idx);
    setTimeout(() => {
        if (bal.slv != null)
            bal.slv({ dskBit: { idx: "copy-disk", src: bal.src, dat: bal.idx } });
    }, 33);
    return cpy;
};
exports.copyDisk = copyDisk;
const frameDisk = async (cpy, bal, ste) => {
    var dat = bal.dat;
    var dataUrlRegExp = /^data:image\/\w+;base64,/;
    // remove the "header" of the data URL via the regexp
    var base64Data = dat.replace(dataUrlRegExp, "");
    // declare a binary buffer to hold decoded base64 data
    var imageBuffer = Buffer.from(base64Data, "base64");
    FS.ensureDirSync(bal.src);
    var list = FS.readdirSync(bal.src);
    var dex = String(list.length).padStart(5, "0");
    var fin = bal.src + dex + '.png';
    var bit = await FS.writeFile(fin, imageBuffer);
    if (bal.slv != null)
        bal.slv({ dskBit: { idx: "frame-disk", src: bal.src, dat: dex } });
    console.log("writing filepath " + fin);
    return cpy;
};
exports.frameDisk = frameDisk;
const batchDisk = (cpy, bal, ste) => {
    var child_process = require('child_process');
    var spawn = child_process.spawn;
    //var bat = require.resolve(bal.src);
    var ls = spawn(bal.src);
    ls.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });
    ls.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });
    ls.on('exit', function (code) {
        console.log('batch disk process exited with code ' + code);
        if (bal.slv != null)
            bal.slv({ dskBit: { idx: "batch-disk", src: bal.src } });
    });
    return cpy;
};
exports.batchDisk = batchDisk;
const trashDisk = async (cpy, bal, ste) => {
    var loc = bal.idx + '/' + bal.src;
    bit = await FS.ensureDir(loc);
    bit = await FS.emptyDir(loc);
    if (bal.slv != null)
        bal.slv({ dskBit: { idx: "trash-disk", src: loc } });
    return cpy;
};
exports.trashDisk = trashDisk;
const ensureDisk = async (cpy, bal, ste) => {
    bit = await FS.ensureDir(bal.src);
    if (bal.slv != null)
        bal.slv({ dskBit: { idx: "ensure-disk", src: bal.src } });
    return cpy;
};
exports.ensureDisk = ensureDisk;
const deleteDisk = (cpy, bal, ste) => {
    if (bal.idx != null)
        bal.src = bal.idx;
    bit = FS.remove(bal.src, err => {
        if (err)
            return console.error(err);
        console.log('deleting ! ' + bal.src);
        if (bal.slv != null)
            bal.slv({ dskBit: { idx: "delete-disk", src: bal.src } });
    });
    return cpy;
};
exports.deleteDisk = deleteDisk;
const existDisk = (cpy, bal, ste) => {
    let fileExists = FS.existsSync(bal.src);
    if (bal.slv != null)
        bal.slv({ dskBit: { idx: "exist-disk", src: fileExists } });
    return cpy;
};
exports.existDisk = existDisk;
const FS = require("fs-extra");
/*



//we need a promise
var loc = "http://localhost:7001/openBeauty/";

(async () => {
  const rawResponse = await fetch(loc, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ src }),
  });
  const content = await rawResponse.json();

  console.log(content);
})();

*/
//# sourceMappingURL=disk.buzz.js.map