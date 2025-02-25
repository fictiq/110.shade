import { Action } from "../99.core/interface/action.interface";
import ColorVurtBit from "./fce/colorVurt.bit";
export declare const INIT_COLORVURT = "[ColorVurt action] Init ColorVurt";
export declare class InitColorVurt implements Action {
    bale: ColorVurtBit;
    readonly type = "[ColorVurt action] Init ColorVurt";
    constructor(bale: ColorVurtBit);
}
export declare const UPDATE_COLORVURT = "[ColorVurt action] Update ColorVurt";
export declare class UpdateColorVurt implements Action {
    bale: ColorVurtBit;
    readonly type = "[ColorVurt action] Update ColorVurt";
    constructor(bale: ColorVurtBit);
}
export declare const SORT_COLORVURT = "[Sort action] Sort ColorVurt";
export declare class SortColorVurt implements Action {
    bale: ColorVurtBit;
    readonly type = "[Sort action] Sort ColorVurt";
    constructor(bale: ColorVurtBit);
}
export type Actions = InitColorVurt | UpdateColorVurt | SortColorVurt;
