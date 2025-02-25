import * as BABYLON from 'babylonjs'
import * as PIXI from 'pixi.js'

import { Application, Assets, Container, Sprite } from 'pixi.js';

export const initBabylon = (cpy: BabylonModel, bal: BabylonBit, ste: State) => {



    var canvas = document.getElementById("renderCanvas");

    // babylon.js rendering
    var engine = new BABYLON.Engine(canvas as any, true);
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
    
    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere1", { diameter: 2 }, scene);
    sphere.material = new BABYLON.StandardMaterial("earth", scene);
    //sphere.material['diffuseTexture'] = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/earth.jpg", scene);
    sphere.rotation.x = Math.PI;
    sphere.position.x = -1;
    sphere.position.y = -1;

    // pixi.js rendering
    //var pixiRenderer = new PIXI.WebGLRenderer();

    //var stage = new PIXI.Container();
    //var sprite = PIXI.Sprite.from('https://i.imgur.com/fZ4wius.png');
    //sprite.height = 500;
    //sprite.width = 500 * 2.3;
    //sprite.anchor.set(0);
    //sprite.position.set(0, 0);
    //stage.addChild(sprite);

    //var stage1 = new PIXI.Container();
    //var sprite1 = PIXI.Sprite.from('https://i.imgur.com/nqcVr78.png');
    //sprite1.anchor.set(0);
    //sprite1.position.set(0, 0);
    //stage1.addChild(sprite1);


    // Render Loop
    engine.runRenderLoop(function () {
        //pixiRenderer.reset();
        //pixiRenderer.render(stage);

        scene.autoClear = false;
        sphere.rotation.y += 0.01;
        scene.render();
        engine.wipeCaches(true);

        //pixiRenderer.reset();
       // pixiRenderer.render(stage1);


    });



    return cpy;
};

export const updateBabylon = (cpy: BabylonModel, bal: BabylonBit, ste: State) => {
    return cpy;
};


import { BabylonModel } from "../babylon.model";
import BabylonBit from "../fce/babylon.bit";
import State from "../../99.core/state";