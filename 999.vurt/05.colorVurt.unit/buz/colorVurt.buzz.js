"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortColorVurt = exports.updateColorVurt = exports.initColorVurt = void 0;
const ActDsk = require("../../96.disk.unit/disk.action");
var bit, lst, idx, val, dat;
const initColorVurt = (cpy, bal, ste) => {
    return cpy;
};
exports.initColorVurt = initColorVurt;
const updateColorVurt = (cpy, bal, ste) => {
    return cpy;
};
exports.updateColorVurt = updateColorVurt;
const sortColorVurt = async (cpy, bal, ste) => {
    if (bal.src == null)
        bal.src = COLOR_SORT.NOM;
    const sortVal = async (src) => {
        var loc = cpy.colorDataDir + src + '.json';
        bit = await ste.hunt(ActDsk.WRITE_DISK, { src: loc, val: 1, dat: cpy.colorValueLst });
        if (bal.slv != null)
            bal.slv({ cvtBit: { idx: "sort-color-vurt", src: loc } });
    };
    const sortHex = async (src, lst) => {
        var data = {};
        bit = await ste.hunt(ActDsk.READ_DISK, { src: cpy.colorNameFin });
        lst = JSON.parse(bit.dskBit.dat);
        lst.forEach((a) => {
            var nom = S(a.name).slugify().s;
            data[nom] = a.hex;
        });
        var loc = cpy.colorDataDir + src + '.json';
        bit = await ste.hunt(ActDsk.WRITE_DISK, { src: loc, val: 1, dat: data });
        if (bal.slv != null)
            bal.slv({ cvtBit: { idx: "sort-color-vurt", src: loc } });
    };
    const sortNom = async (src, lst) => {
        var data = {};
        const next = async (lst) => {
            if (lst.length <= 0) {
                var loc = cpy.colorDataDir + src + '.json';
                bit = await ste.hunt(ActDsk.WRITE_DISK, { src: loc, val: 1, dat: data });
                if (bal.slv != null)
                    bal.slv({ cvtBit: { idx: "sort-color-vurt", src: loc } });
                return;
            }
            var itm = lst.shift();
            idx = itm.split('.')[2];
            bit = await ste.hunt(ActDsk.LIST_DISK, { src: cpy.colorMaxDir + '/' + itm });
            var now = [];
            var clr = bit.dskBit.lst;
            clr.forEach((a) => {
                var sigh = a.split('.')[0];
                now.push(sigh);
            });
            data[idx] = now;
            console.log(idx + ' ::: ' + now.length);
            next(lst);
        };
        next(lst);
    };
    switch (bal.src) {
        case COLOR_SORT.NOM:
            bit = await ste.hunt(ActDsk.LIST_DISK, { src: cpy.colorMaxDir });
            sortNom(bal.src, bit.dskBit.lst);
            break;
        case COLOR_SORT.HEX:
            bit = await ste.hunt(ActDsk.LIST_DISK, { src: cpy.colorMaxDir });
            sortHex(bal.src, bit.dskBit.lst);
            break;
        case COLOR_SORT.VAL:
            sortVal(bal.src);
            break;
    }
    return cpy;
};
exports.sortColorVurt = sortColorVurt;
const COLOR_SORT = require("../..//val/color-sort");
const S = require("string");
//# sourceMappingURL=colorVurt.buzz.js.map