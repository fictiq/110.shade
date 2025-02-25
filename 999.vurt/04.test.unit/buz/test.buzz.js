"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTest = exports.writeTest = exports.readTest = exports.fetchTest = exports.autoTest = exports.updateTest = exports.initTest = void 0;
const ActTst = require("../test.action");
const ActClc = require("../../97.collect.unit/collect.action");
var lst, bit, dat, src;
const initTest = (cpy, bal, ste) => {
    var lst = [ActTst.AUTO_TEST, ActTst.FETCH_TEST];
    var dat = [];
    if (bal.slv != null)
        bal.slv({ intBit: { idx: "init-test", lst, dat } });
    return cpy;
};
exports.initTest = initTest;
const updateTest = (cpy, bal, ste) => {
    if (bal.slv != null)
        bal.slv({ tstBit: { idx: "update-test" } });
    return cpy;
};
exports.updateTest = updateTest;
const autoTest = (cpy, bal, ste) => {
    if (bal.slv != null)
        bal.slv({ tstBit: { idx: "auto-test" } });
    return cpy;
};
exports.autoTest = autoTest;
const fetchTest = (cpy, bal, ste) => {
    if (bal.src == null)
        return;
    if (bal.src.includes(".") == false)
        return;
    var sub = bal.src.split(".")[0];
    var dom = bal.src.split(".")[1];
    var pivotUpper = dom.toUpperCase();
    var pivotTitle = S(dom).capitalize().s;
    var pivotDash = S(bal.src).replaceAll(".", "-").s;
    var root = "../" + bal.src + "/cloud/index.mjs";
    if (FS.existsSync(root) == false) {
        if (bal.slv != null)
            bal.slv({ vrtBit: { idx: "test-cloud-vurt", err: "no cloud" } });
        return;
    }
    var lst = [];
    var lne = FS.readFileSync(root).toString().split("\n");
    lne.forEach((a) => {
        if (a.includes('case "') == true) {
            var src = S(a).between('"', '"').s;
            lst.push({ idx: "GET", src });
            //} else if (a.includes('router.post("/') == true) {
            //  var src = S(a).between('"', '"').s;
            //  lst.push({ idx: "POST", src });
        }
    });
    var url = "https://" + pivotDash + "." + process.env.CLOUDFLAREDEV;
    if (bal.slv != null)
        bal.slv({ tstBit: { idx: "fetch-test", src: url, lst } });
    return cpy;
};
exports.fetchTest = fetchTest;
const readTest = async (cpy, bal, ste) => {
    if (bal.idx == null)
        bal.idx = 'tst00';
    bit = await ste.hunt(ActClc.READ_COLLECT, { idx: bal.idx, bit: ActTst.CREATE_TEST });
    if (bal.slv != null)
        bal.slv({ tstBit: { idx: "read-test", dat: bit.clcBit.dat } });
    return cpy;
};
exports.readTest = readTest;
const writeTest = async (cpy, bal, ste) => {
    if (bal.idx == null)
        bal.idx = 'tst00';
    bit = await ste.hunt(ActClc.WRITE_COLLECT, { idx: bal.idx, dat: bal.dat, bit: ActTst.CREATE_TEST });
    if (bal.slv != null)
        bal.slv({ tstBit: { idx: "read-test", dat: bit.clcBit.dat } });
    return cpy;
};
exports.writeTest = writeTest;
const createTest = async (cpy, bal, ste) => {
    var dat = { idx: bal.idx };
    for (var key in bal.dat) {
        dat[key] = bal.dat[key];
    }
    if (bal.slv != null)
        bal.slv({ usrBit: { idx: "create-test", dat } });
    return cpy;
};
exports.createTest = createTest;
const S = require("string");
const FS = require("fs-extra");
//# sourceMappingURL=test.buzz.js.map