import { Action } from "../99.core/interface/action.interface";
import  BabylonBit  from "./fce/babylon.bit";

// Babylon actions

export const INIT_BABYLON = "[Babylon action] Init Babylon";
export class InitBabylon implements Action {
 readonly type = INIT_BABYLON;
 constructor(public bale: BabylonBit) {}
}

export const UPDATE_BABYLON = "[Babylon action] Update Babylon";
export class UpdateBabylon implements Action {
 readonly type = UPDATE_BABYLON;
 constructor(public bale: BabylonBit) {}
}

export type Actions = | InitBabylon | UpdateBabylon ;
