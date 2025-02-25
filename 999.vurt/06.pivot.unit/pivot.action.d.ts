import { Action } from "../99.core/interface/action.interface";
import PivotBit from "./fce/pivot.bit";
export declare const INIT_PIVOT = "[Pivot action] Init Pivot";
export declare class InitPivot implements Action {
    bale: PivotBit;
    readonly type = "[Pivot action] Init Pivot";
    constructor(bale: PivotBit);
}
export declare const UPDATE_PIVOT = "[Pivot action] Update Pivot";
export declare class UpdatePivot implements Action {
    bale: PivotBit;
    readonly type = "[Pivot action] Update Pivot";
    constructor(bale: PivotBit);
}
export declare const CREATE_PIVOT = "[Create action] Create Pivot";
export declare class CreatePivot implements Action {
    bale: PivotBit;
    readonly type = "[Create action] Create Pivot";
    constructor(bale: PivotBit);
}
export type Actions = InitPivot | UpdatePivot | CreatePivot;
