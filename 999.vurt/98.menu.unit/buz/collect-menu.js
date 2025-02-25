"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectMenu = void 0;
const ActTrm = require("../../01.terminal.unit/terminal.action");
const ActDsk = require("../../96.disk.unit/disk.action");
const ActTst = require("../../04.test.unit/test.action");
const ActCol = require("../../97.collect.unit/collect.action");
var lst, bit, dat, src;
const collectMenu = async (cpy, bal, ste) => {
    var bit;
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "" });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 5, src: "--------------" });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 7, src: "COLLECT MENU " });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 5, src: "--------------" });
    bit = await ste.hunt(ActDsk.INIT_DISK, {});
    var list = [ActCol.WRITE_COLLECT, ActCol.READ_COLLECT, ActCol.CREATE_COLLECT];
    ;
    bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });
    bit = bit.trmBit;
    var idx = list[bit.val];
    switch (idx) {
        case ActCol.WRITE_COLLECT:
            bit = await ste.hunt(ActTst.WRITE_TEST, { idx: "tst00", dat: { src: 'src00' } });
            bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 7, src: JSON.stringify(bit) });
            break;
        case ActCol.READ_COLLECT:
            bit = await ste.hunt(ActTst.READ_TEST, { idx: 'tst00' });
            bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 7, src: JSON.stringify(bit) });
            break;
        case ActCol.CREATE_COLLECT:
            bit = await ste.hunt(ActTst.CREATE_TEST, { idx: 'tst01', dat: { src: 'alligator' } });
            bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 7, src: JSON.stringify(bit) });
            break;
    }
    if (bal.slv != null)
        bal.slv({ mnuBit: { idx: "test-menu" } });
    return cpy;
};
exports.collectMenu = collectMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
//# sourceMappingURL=collect-menu.js.map