"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeMenu = exports.countMenu = exports.testMenu = exports.workerMenu = exports.diskMenu = exports.unitMenu = exports.vurtMenu = exports.updateMenu = exports.initMenu = void 0;
const ActMnu = require("../menu.action");
const ActLib = require("../../act/library.action");
const ActRen = require("../../act/renpy.action");
const ActWrk = require("../../act/work.action");
const ActVrt = require("../../00.vurt.unit/vurt.action");
const ActTrm = require("../../01.terminal.unit/terminal.action");
const ActWok = require("../../02.worker.unit/worker.action");
const ActDsk = require("../../96.disk.unit/disk.action");
const ActTst = require("../../04.test.unit/test.action");
const ActUnt = require("../../03.unit.unit/unit.action");
var lst, bit, dat;
const initMenu = async (cpy, bal, ste) => {
    bit = await ste.hunt(ActTrm.INIT_TERMINAL, {});
    (0, exports.updateMenu)(cpy, bal, ste);
    return cpy;
};
exports.initMenu = initMenu;
const updateMenu = async (cpy, bal, ste) => {
    //var lst = [];
    //var bit = await g.TERMINAL.clearTerminal();
    //bit = await ste.bus(ActTrm.CLEAR_TERMINAL, {})
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "-----------" });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "VURT PIVOT V0" });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "-----------" });
    bit = await ste.hunt(ActTrm.ROOT_TERMINAL, {
        idx: "VURT",
        dat: () => {
            var back = "../999.vurt/";
            process.chdir(back);
            (0, exports.updateMenu)(cpy, bal, ste);
        }
    });
    lst = [PIVOT.VURT, PIVOT.WORK, PIVOT.RENPY, PIVOT.LIBRARY, PIVOT.SPACE, PIVOT.TIME];
    bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst, idx: bal.idx, dat: bal.dat });
    bit = bit.trmBit;
    var idx = lst[bit.val];
    switch (idx) {
        case PIVOT.VURT:
            bit = await ste.hunt(ActMnu.VURT_MENU, {});
            break;
        case PIVOT.WORK:
            var back = "../998.work/";
            process.chdir(back);
            bit = await ste.bus(ActWrk.MENU_WORK, {});
            break;
        case PIVOT.RENPY:
            var back = "../123.renpy/";
            process.chdir(back);
            bit = await ste.bus(ActRen.MENU_RENPY, {});
            break;
        case PIVOT.LIBRARY:
            var back = "../995.library/";
            process.chdir(back);
            bit = await ste.bus(ActLib.MENU_LIBRARY, {});
            break;
        case PIVOT.TIME:
            break;
        case PIVOT.SPACE:
            break;
    }
    console.log("hmm " + JSON.stringify(bit));
    // initMenu(cpy, bal, ste);
    /*
    switch (idx) {
  
      case ActMnu.VURT_MENU:
        bit = await ste.hunt(ActMnu.VURT_MENU, {});
        break
  
      
    }
  
  
    updateMenu(cpy, bal, ste)
  
    */
    return cpy;
};
exports.updateMenu = updateMenu;
const vurtMenu = async (cpy, bal, ste) => {
    var bit;
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 1, src: "" }, 'local');
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 1, src: "-----------" }, 'local');
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 4, src: "VURT MENU" }, 'local');
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 1, src: "-----------" }, 'local');
    var list = [ActMnu.UNIT_MENU, ActMnu.COLORVURT_MENU, ActMnu.COLLECT_MENU, ActMnu.WORKER_MENU, ActMnu.TEST_MENU, ActMnu.COUNT_MENU, ActVrt.BUNDLE_VURT, ActVrt.REPLACE_VURT, ActVrt.VALUE_VURT, ActMnu.DISK_MENU];
    bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list }, 'local');
    bit = bit.trmBit;
    var idx = list[bit.val];
    switch (idx) {
        case ActMnu.COLORVURT_MENU:
            bit = await ste.hunt(ActMnu.COLORVURT_MENU, {});
            (0, exports.updateMenu)(cpy, bal, ste);
            break;
        case ActMnu.COLLECT_MENU:
            bit = await ste.hunt(ActMnu.COLLECT_MENU, {});
            break;
        case ActVrt.BUNDLE_VURT:
            bit = await ste.hunt(ActVrt.LIST_PIVOT_VURT);
            list = bit.vrtBit.lst;
            bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });
            var val = bit.trmBit.val;
            var src = list[val];
            bit = await ste.hunt(ActVrt.BUNDLE_VURT, { src });
            break;
        case ActMnu.DISK_MENU:
            bit = await ste.hunt(ActMnu.DISK_MENU, {});
            break;
        case ActMnu.WORKER_MENU:
            bit = await ste.hunt(ActMnu.WORKER_MENU, {});
            break;
        case ActMnu.TEST_MENU:
            bit = await ste.hunt(ActMnu.TEST_MENU, {});
            break;
        case ActMnu.COUNT_MENU:
            bit = await ste.hunt(ActMnu.COUNT_MENU, {});
            break;
        case ActMnu.UNIT_MENU:
            bit = await ste.hunt(ActMnu.UNIT_MENU, {});
            break;
        case ActVrt.REPLACE_VURT:
            var list = ['core', 'bus', 'hunt', 'collect'];
            bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });
            bit = bit.trmBit;
            var idx = list[bit.val];
            bit = await ste.hunt(ActVrt.REPLACE_VURT, { idx });
            break;
        case ActVrt.VALUE_VURT:
            dat = `
      CLINIC:
      ambit of human health
      CORINTH:
      ambit of of shelter and urbanity
      HEXAGON:
      ambit of justice 
      GARDEN:
      ambit of agricultural
      TOWER:
      ambit of knowledge
      MEMORIAL :
      ambit of ancient affairs
      HEIRLOOM:
      ambit of treasure
      LIBRARY:
      ambit of education
      PORT:
      ambit of commerce
      MOAT:
      ambit of defense
      CROWN:
      ambit of principalities
      KEEP:
      ambit of privacy
      STUDIO:
      ambit of labor
      PATH:
      ambit of transportation
      CHURCH:
      ambit of energy
      THEATRE:
      ambit of culture

  
      `;
            bit = await ste.hunt(ActVrt.VALUE_VURT, { dat });
            break;
    }
    (0, exports.updateMenu)(cpy, bal, ste);
};
exports.vurtMenu = vurtMenu;
const unitMenu = async (cpy, bal, ste) => {
    var bit;
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 1, src: "" });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 1, src: "-----------" });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 4, src: "UNIT MENU" });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 1, src: "-----------" });
    var list = [ActUnt.UPDATE_UNIT, ActUnt.CREATE_UNIT];
    bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });
    bit = bit.trmBit;
    var idx = list[bit.val];
    switch (idx) {
        case ActUnt.CREATE_UNIT:
            bit = await ste.hunt(ActTrm.INPUT_TERMINAL, { lst: ["", "", "Create Unit"] });
            bal.src = bit.trmBit.src;
            bit = await ste.hunt(ActUnt.CREATE_UNIT, bal);
            (0, exports.updateMenu)(cpy, bal, ste);
            break;
        case ActUnt.UPDATE_UNIT:
            bit = await ste.hunt(ActVrt.LIST_PIVOT_VURT);
            list = bit.vrtBit.lst;
            bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });
            var val = bit.trmBit.val;
            var src = list[val];
            bit = await ste.hunt(ActVrt.LIST_UNIT_VURT, { src });
            list = bit.vrtBit.lst;
            bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });
            var val = bit.trmBit.val;
            var idx = list[val];
            bit = await ste.hunt(ActTrm.INPUT_TERMINAL, { lst: ["", "", "Input Verb"] });
            var dat = bit.trmBit.src;
            bit = await ste.hunt(ActUnt.UPDATE_UNIT, { src, idx, dat });
            (0, exports.updateMenu)(cpy, bal, ste);
            //var list = ['core', 'bus', 'hunt']
            //bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst: list });
            //bit = bit.trmBit;
            //var idx = list[bit.val];
            //ste.hunt(ActVrt.REPLACE_VURT, { idx })
            break;
    }
    return cpy;
};
exports.unitMenu = unitMenu;
const diskMenu = async (cpy, bal, ste) => {
    var bit;
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "" });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 5, src: "--------------" });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 7, src: "DISK MENU " });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 5, src: "--------------" });
    bit = await ste.hunt(ActDsk.INIT_DISK, {});
    var list = [ActDsk.TRASH_DISK, ActDsk.UPDATE_DISK, ActDsk.WRITE_DISK, ActDsk.COPY_DISK, ActDsk.READ_DISK, ActDsk.LIST_DISK, ActDsk.LOAD_LIST_DISK];
    ;
    bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });
    bit = bit.trmBit;
    var idx = list[bit.val];
    switch (idx) {
        case ActDsk.TRASH_DISK:
            bit = await ste.hunt(ActVrt.LIST_PIVOT_VURT);
            list = bit.vrtBit.lst;
            var pivotList = list;
            bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });
            var val = bit.trmBit.val;
            var src = list[val];
            bit = await ste.hunt(ActVrt.LIST_UNIT_VURT, { src });
            list = bit.vrtBit.lst;
            bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });
            var val = bit.trmBit.val;
            var idx = list[val];
            bit = await ste.hunt(ActDsk.TRASH_DISK, { idx, src, lst: pivotList });
            bit = bit.dskBit;
            break;
        case ActDsk.UPDATE_DISK:
            bit = await ste.hunt(ActDsk.UPDATE_DISK, { src: './data/write.txt', dat: "writing..." });
            bit = bit.dskBit;
            break;
        case ActDsk.READ_DISK:
            bit = await ste.hunt(ActDsk.READ_DISK, { src: './data/count.txt' });
            bit = bit.dskBit;
            break;
        case ActDsk.LIST_DISK:
            bit = await ste.hunt(ActDsk.LIST_DISK, { src: './data/hand/' });
            bit = bit.dskBit;
            break;
        case ActDsk.LOAD_LIST_DISK:
            bit = await ste.hunt(ActDsk.LOAD_LIST_DISK, { src: './data/hand/' });
            bit = bit.dskBit;
            break;
        case ActDsk.COPY_DISK:
            bit = await ste.hunt(ActDsk.COPY_DISK, { src: './data/cpy00', idx: "./data/cpy01" });
            bit = bit.wrkBit;
            break;
        case ActDsk.WRITE_DISK:
            bit = await ste.hunt(ActDsk.WRITE_DISK, { src: './data/redux/write.txt', dat: "writing..." });
            bit = bit.wrkBit;
            break;
    }
    (0, exports.updateMenu)(cpy, bal, ste);
};
exports.diskMenu = diskMenu;
const workerMenu = async (cpy, bal, ste) => {
    var bit;
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 1, src: "" });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 1, src: "-----------" });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 4, src: "WORKER MENU" });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 1, src: "-----------" });
    bit = await ste.hunt(ActWok.INIT_WORKER);
    var list = bit.intBit.lst;
    bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });
    bit = bit.trmBit;
    var idx = list[bit.val];
    switch (idx) {
        case ActWok.PUBLISH_WORKER:
            bit = await ste.hunt(ActVrt.LIST_PIVOT_VURT, { src: 'cloud' });
            bit = bit.vrtBit;
            var lst = [];
            bit.lst.forEach((a) => lst.push(a));
            bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
            bit = bit.trmBit;
            var src = lst[bit.val];
            //not sure if this is correct
            bit = await ste.hunt(ActWok.PUBLISH_WORKER, { src });
            (0, exports.updateMenu)(cpy, bal, ste);
            break;
        case ActWok.LIST_WORKER:
            bit = await ste.hunt(ActWok.LIST_WORKER, {});
            bit = bit.wrkBit;
            var lst = [];
            bit.lst.forEach((a) => lst.push(a));
            bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst });
            bit = bit.trmBit;
            var src = lst[bit.val];
            console.log("can you delete " + src);
            bit = await ste.hunt(ActWok.DELETE_WORKER, { src });
            (0, exports.workerMenu)(cpy, bal, ste);
            break;
    }
};
exports.workerMenu = workerMenu;
const testMenu = async (cpy, bal, ste) => {
    var bit;
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "" });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 5, src: "--------------" });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 7, src: "TESTING MENU " });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 5, src: "--------------" });
    bit = await ste.hunt(ActTst.INIT_TEST, {});
    var list = bit.intBit.lst;
    var data = bit.intBit.dat;
    bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });
    bit = bit.trmBit;
    //var idx = list[bit.val];
    var idx = list[bit.val];
    var dat = data[bit.val];
    switch (idx) {
        case ActTst.FETCH_TEST:
            bit = await ste.hunt(ActVrt.LIST_PIVOT_VURT, { src: 'cloud' });
            bit = bit.vrtBit;
            var lst = [];
            bit.lst.forEach((a) => lst.push(a));
            bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst });
            bit = bit.trmBit;
            var src = lst[bit.val];
            bit = await ste.hunt(ActTst.FETCH_TEST, { src });
            var lst = [];
            bit = bit.tstBit;
            var url = bit.src;
            if (bit.lst == null) {
                bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 2, src: "testing-urls-not-present" });
                (0, exports.updateMenu)(cpy, bal, ste);
                return;
            }
            bit.lst.forEach((a) => lst.push(bit.src + a.src));
            await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "" });
            await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "" });
            await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "" });
            var updateFetchTest = async (lst, val) => {
                var bit0 = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst, val });
                bit0 = bit0.trmBit;
                url = lst[bit0.val];
                val = bit0.val;
                var typ = src.idx;
                bit = await ste.hunt(ActVrt.FETCH_VURT, { idx: typ, src: url });
                var dat = bit.vrtBit.dat;
                bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 2, src: JSON.stringify(dat, null, 4) });
                updateFetchTest(lst, val);
            };
            updateFetchTest(lst, 0);
            break;
        case ActTst.AUTO_TEST:
            bit = await ste.hunt(ActVrt.LIST_PIVOT_VURT, {});
            bit = bit.vrtBit;
            var lst = [];
            bit.lst.forEach((a) => lst.push(a));
            bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst });
            bit = bit.trmBit;
            var src = lst[bit.val];
            bit = await ste.hunt(ActTst.FETCH_TEST, { src });
            var lst = [];
            bit = bit.tstBit;
            var url = bit.src;
            if (bit.lst == null) {
                bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 2, src: "testing-urls-not-present" });
                (0, exports.updateMenu)(cpy, bal, ste);
                return;
            }
            bit.lst.forEach((a) => lst.push(bit.src + a.src));
            await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "" });
            await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "" });
            await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "" });
            var updateAutoTest = async (lst, val, url, typ) => {
                if (url == null) {
                    var bit0 = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst, val });
                    bit0 = bit0.trmBit;
                    url = lst[bit0.val];
                    val = bit0.val;
                    typ = src.idx;
                }
                bit = await ste.hunt(ActVrt.FETCH_VURT, { idx: typ, src: url });
                var dat = bit.vrtBit.dat;
                bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 2, src: JSON.stringify(dat, null, 4) });
                var intervalIDX = setInterval(async () => {
                    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 5, src: "waiting..." });
                }, 13333);
                setTimeout(() => {
                    clearInterval(intervalIDX);
                    updateAutoTest(lst, val, url, typ);
                }, 1111);
            };
            updateAutoTest(lst, 0, null, null);
            break;
    }
    return cpy;
};
exports.testMenu = testMenu;
const countMenu = async (cpy, bal, ste) => {
    var bit;
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "count-menu" });
    bit = await ste.hunt(ActVrt.COUNT_VURT);
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 2, src: JSON.stringify(bit) });
    setTimeout(() => (0, exports.updateMenu)(cpy, bal, ste), 3333);
    return cpy;
};
exports.countMenu = countMenu;
const closeMenu = async (cpy, bal, ste) => {
    var bit = await ste.hunt(ActTrm.CLOSE_TERMINAL);
    return cpy;
};
exports.closeMenu = closeMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const PIVOT = require("../../val/pivot");
//# sourceMappingURL=menu.buzz.js.map