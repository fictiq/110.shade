
import { Button, FancyButton } from '@pixi/ui';
import { SurfaceModel } from "../surface.model";
import SurfaceBit from "../fce/surface.bit";
import State from "../../99.core/state";
import StageBit from "../fce/stage.bit";

import { Application, Assets, Container, Sprite } from 'pixi.js';

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActFce from "../../02.surface.unit/surface.action";
import * as ActCan from "../../03.container.unit/container.action";
import * as ActGph from "../../04.graphic.unit/graphic.action";
import * as ActTxt from "../../05.text.unit/text.action";
import * as ActSpr from "../../06.sprite.unit/sprite.action";

var bit, val, idx, dex, lst, dat;

var testing = false;

export const initSurface = (cpy: SurfaceModel, bal: SurfaceBit, ste: State) => {

    return cpy;
};

export const createSurface = async (cpy: SurfaceModel, bal: SurfaceBit, ste: State) => {

    if (bal.dat == null) bal.dat = {}

    if (bal.dat.src == null) bal.dat.src = 'indexCanvas'

    var dat: StageBit = { idx: bal.idx, src: bal.dat.src, app: null };

    const app = new Application();

    dat.app = app

    var el: HTMLElement | null = document.getElementById(dat.src as string)

    const width = 1280;
    const height = 720;

    //const width = 720;
    //const height = 1280;

    await app.init({ background: '#00FFFF', width, height });

    //  await app.init({ background: '#00FFFF', resizeTo: el.parentElement });

    // Append the application canvas to the document body

    if (el != null) el.appendChild(app.canvas);

    // Create and add a container to the stage
    bit = await ste.hunt(ActCan.WRITE_CONTAINER, { idx: 'can-00' })
    dat = bit.canBit.dat;

    var container = dat['bit']
    app.stage.addChild(container);

    bit = await ste.hunt(ActGph.WRITE_GRAPHIC, { idx: 'gph-00' })
    dat = bit.gphBit.dat;
    var graphic = dat['bit']
    container.addChild(graphic)

    graphic.rect(0, 0, 200, 100)
    graphic.fill(0x0ff00);

    //container.x = app.screen.width / 2;
    //container.y = app.screen.height / 2;

    // Center the bunny sprites in local container coordinates
    //container.pivot.x = container.width / 2;
    //container.pivot.y = container.height / 2;




    
    //container.addChild( button)
    //app.stage.addChild( button)
    //button.onPress.connect(() => console.log('Button pressed!'));



    if (testing == true) {



        bit = await ste.hunt(ActTxt.WRITE_TEXT, { idx: 'txt-00' })
        dat = bit.txtBit.dat;

        var text = dat['bit']
        container.addChild(text)

        var asset = 'https://avatar.iran.liara.run/public/11.png'
        bit = await ste.hunt(ActSpr.WRITE_SPRITE, { idx: 'spr-00', src: asset, dat: { x: 10, y: 100 } })
        dat = bit.sprBit.dat;
        var sprite = dat['bit']
        container.addChild(sprite)

        var asset = 'https://avatar.iran.liara.run/public/10.png'
        bit = await ste.hunt(ActSpr.WRITE_SPRITE, { idx: 'spr-01', src: asset })
        dat = bit.sprBit.dat;
        var sprite = dat['bit']
        container.addChild(sprite)

        bit = await ste.hunt(ActSpr.WRITE_SPRITE, { idx: 'spr-01', dat: { y: 10, x: 444 } })


        // Create a 5x5 grid of bunnies in the container
        // for (let i = 0; i < 25; i++) {
        //     const bunny = new Sprite(texture);

        //    bunny.x = (i % 5) * 40;
        //   bunny.y = Math.floor(i / 5) * 40;
        //  container.addChild(bunny);
        // }

        // Move the container to the center

        // Listen for animate update
    }


    app.ticker.add((time) => {
        // Continuously rotate the container!
        // * use delta to create frame-independent transform *
        //container.rotation -= 0.01 * time.deltaTime;

        //container.x = app.screen.width / 2 + 300;
        //container.y = app.screen.height / 2;

        // Center the bunny sprites in local container coordinates
        //container.pivot.x = container.width / 2;
        //container.pivot.y = container.height / 2;

    });


    bal.slv({ fceBit: { idx: "create-surface" } });

    return cpy;
};


export const updateSurface = async (cpy: SurfaceModel, bal: SurfaceBit, ste: State) => {

    var idx = bal.idx;

    bit = await ste.hunt(ActFce.READ_SURFACE, { idx: bal.idx })
    dat = bit.fceBit.dat;

    var app = dat.bit;

    if (app == null) return bal.slv({ fceBit: { idx: "error-update-surface" } });

    //app.renderer.resize(dat.width, dat.height);

    return cpy;
};


export const readSurface = async (cpy: SurfaceModel, bal: SurfaceBit, ste: State) => {

    var slv = bal.slv;
    if (bal.idx == null) bal.idx = 'fce00';
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActFce.CREATE_SURFACE })
    if (slv != null) slv({ fceBit: { idx: "read-surface", dat: bit.clcBit.dat } });
    return cpy;

};
export const writeSurface = async (cpy: SurfaceModel, bal: SurfaceBit, ste: State) => {

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, dat: bal.dat, bit: ActFce.CREATE_SURFACE })
    ste.hunt(ActFce.UPDATE_SURFACE, { idx: bal.idx })

    if (bal.slv != null) bal.slv({ fceBit: { idx: "write-surface", dat: bit.clcBit.dat } });

    return cpy;
};


export const removeSurface = async (cpy: SurfaceModel, bal: SurfaceBit, ste: State) => {

    if (typeof window != "object") return bal.slv({ fceBit: { idx: "error-create-visage", dat: {} } });

    //gotcha-- making sure that the src is present on the collect bale once caused a tremendous issue
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, src: bal.src, dat: bal.dat, bit: ActFce.DELETE_SURFACE })

    if (bal.slv != null) bal.slv({ fceBit: { idx: "remove-surface", dat: bit.clcBit } });

    return cpy;
}


export const deleteSurface = async (cpy: SurfaceModel, bal: SurfaceBit, ste: State) => {

    bit = await ste.hunt(ActFce.READ_SURFACE, { idx: bal.idx })
    dat = bit.fceBit.dat

    var app = dat.bit;
    app.destroy()

    if (bal.slv != null) return bal.slv({ fceBit: { idx: "delete-surface", dat } });

    return cpy;
};


export const dimensionSurface = async (cpy: SurfaceModel, bal: SurfaceBit, ste: State) => {

    var idx = bal.idx;
    bit = await ste.hunt(ActFce.READ_SURFACE, { idx: bal.idx })

    if (bal.slv != null) return bal.slv({ fceBit: { idx: "dimension-surface", dat: bal.dat } });

    return cpy;
};


export const extractSurface = async (cpy: SurfaceModel, bal: SurfaceBit, ste: State) => {

    var idx = bal.idx;
    bit = await ste.hunt(ActFce.READ_SURFACE, { idx })

    dat = bit.fceBit.dat

    var app = dat.bit;
    var canvas = app.renderer.plugins.extract.canvas();
    const context = canvas.getContext('2d');
    const imgData = context.getImageData(0, 0, canvas.width, canvas.height);

    if (bal.slv != null) return bal.slv({ fceBit: { idx: "extract-surface", dat: imgData } });

    return cpy;
};



