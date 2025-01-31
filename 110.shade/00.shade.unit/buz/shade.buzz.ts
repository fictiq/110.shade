import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";
import * as ActShd from "../../00.shade.unit/shade.action";
import * as ActVsg from "../../01.visage.unit/visage.action";
import * as ActSrf from "../../02.surface.unit/surface.action";
import * as ActCan from "../../03.container.unit/container.action";
import * as ActGph from "../../04.graphic.unit/graphic.action";
import * as ActTxt from "../../05.text.unit/text.action";
import * as ActSpr from "../../06.sprite.unit/sprite.action";
import * as ActHex from "../../07.hexagon.unit/hexagon.action";
import * as ActFcg from "../../08.focigon.unit/focigon.action";

import * as ActVid from "../../11.video.unit/video.action";
import * as ActTun from "../../10.toon.unit/toon.action";
import * as ActSpc from "../../act/space.action"

import * as ActPvt from "../../act/pivot.action";
import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";


var bit, val, idx, dex, lst, dat, src;

var once = false

export const initShade = async (cpy: ShadeModel, bal: ShadeBit, ste: State) => {

    if (once == true) return

    once = true


    if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActShd, ActVsg, ActSrf, ActCan, ActGph, ActTxt, ActSpr, ActHex, ActVid, ActTun], dat: bal.dat, src: bal.src })

    if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);

    //ste.bus(ActSpc.READY_SPACE, {})

    if (bal.slv != null) bal.slv({ intBit: { idx: "init-shade" } });

    return cpy;
};

export const openShade = async (cpy: ShadeModel, bal: ShadeBit, ste: State) => {



    if (bal.slv != null) bal.slv({ shdBit: { idx: "open-shade", dat: {} } });


    return cpy;
};

export const runShade = async (cpy: ShadeModel, bal: ShadeBit, ste: State) => {


    setTimeout(() => {
        if (bal.slv != null) bal.slv({ shdBit: { idx: "run-shade" } });
    })

    return cpy;
};


export const browserShade = async (cpy: ShadeModel, bal: ShadeBit, ste: State) => {


    setTimeout(() => {
        if (bal.slv != null) bal.slv({ shdBit: { idx: "browser-shade" } });
    }, 33)

    return cpy;
};

export const updateShade = async (cpy: ShadeModel, bal: ShadeBit, ste: State) => {

    setTimeout(() => {
        if (bal.slv != null) bal.slv({ shdBit: { idx: "update-shade" } });
    }, 3);


    return cpy;
};

export const bodyShade = (cpy: ShadeModel, bal: ShadeBit, ste: State) => {


    if (bal.slv != null) bal.slv({ shdBit: { idx: "body-shade", src: bal.src } });

    return cpy;
};


export const editShade = async (cpy: ShadeModel, bal: ShadeBit, ste: State) => {


    if (bal.slv != null) bal.slv({ symBit: { idx: "edit-symbol", dat: {} } });

    return cpy;
};

export const patchShade = async (cpy: ShadeModel, bal: ShadeBit, ste: State) => {

    bit = await ste.bus(ActDsk.COPY_DISK, { src: '../gillisse/src', idx: './source' })
    if (bal.slv != null) bal.slv({ symBit: { idx: "edit-symbol", dat: {} } });

    return cpy;
};


export const testShade = async (cpy: ShadeModel, bal: ShadeBit, ste: State) => {

    if (bal.slv != null) bal.slv({ shdBit: { idx: "test-shade", dat: {} } });


    return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { ShadeModel } from "../shade.model";
import ShadeBit from "../fce/shade.bit";
import State from "../../99.core/state";
import * as doT from "dot";
