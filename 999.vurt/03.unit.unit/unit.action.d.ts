import { Action } from "../99.core/interface/action.interface";
import UnitBit from "./fce/unit.bit";
export declare const INIT_UNIT = "[Unit action] Init Unit";
export declare class InitUnit implements Action {
    bale: UnitBit;
    readonly type = "[Unit action] Init Unit";
    constructor(bale: UnitBit);
}
export declare const CREATE_UNIT = "[Unit action] Create Unit";
export declare class CreateUnit implements Action {
    bale: UnitBit;
    readonly type = "[Unit action] Create Unit";
    constructor(bale: UnitBit);
}
export declare const UPDATE_UNIT = "[Unit action] Update Unit";
export declare class UpdateUnit implements Action {
    bale: UnitBit;
    readonly type = "[Unit action] Update Unit";
    constructor(bale: UnitBit);
}
export declare const CODE_UNIT = "[Code action] Code Unit";
export declare class CodeUnit implements Action {
    bale: UnitBit;
    readonly type = "[Code action] Code Unit";
    constructor(bale: UnitBit);
}
export type Actions = InitUnit | UpdateUnit | CreateUnit | CodeUnit;
