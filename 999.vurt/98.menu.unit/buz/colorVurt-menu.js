"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortColorVurtMenu = exports.colorVurtMenu = void 0;
const ActTrm = require("../../01.terminal.unit/terminal.action");
const ActCvt = require("../../05.colorVurt.unit/colorVurt.action");
var lst, bit, dat, src;
const colorVurtMenu = async (cpy, bal, ste) => {
    lst = [COLOR_SORT.HEX, COLOR_SORT.NOM, COLOR_SORT.VAL];
    bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst, idx: bal.idx, dat: bal.dat });
    bit = bit.trmBit;
    src = lst[bit.val];
    bit = await ste.hunt(ActCvt.SORT_COLORVURT, { src });
    bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { src: JSON.stringify(bit) });
    if (bal.slv != null)
        bal.slv({ cvtBit: { idx: "color-vurt-menu" } });
    return cpy;
};
exports.colorVurtMenu = colorVurtMenu;
const sortColorVurtMenu = (cpy, bal, ste) => {
    debugger;
    return cpy;
};
exports.sortColorVurtMenu = sortColorVurtMenu;
var patch = (ste, type, bale) => ste.dispatch({ type, bale });
const COLOR_SORT = require("../../val/color-sort");
//# sourceMappingURL=colorVurt-menu.js.map