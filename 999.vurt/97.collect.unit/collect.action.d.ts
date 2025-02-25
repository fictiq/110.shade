import { Action } from "../99.core/interface/action.interface";
import CollectBit from "./fce/collect.bit";
export declare const INIT_COLLECT = "[Collect action] Init Collect";
export declare class InitCollect implements Action {
    bale: CollectBit;
    readonly type = "[Collect action] Init Collect";
    constructor(bale: CollectBit);
}
export declare const UPDATE_COLLECT = "[Collect action] Update Collect";
export declare class UpdateCollect implements Action {
    bale: CollectBit;
    readonly type = "[Collect action] Update Collect";
    constructor(bale: CollectBit);
}
export declare const FETCH_COLLECT = "[Collect action] Fetch Collect";
export declare class FetchCollect implements Action {
    bale: CollectBit;
    readonly type = "[Collect action] Fetch Collect";
    constructor(bale: CollectBit);
}
export declare const READ_COLLECT = "[Read action] Read Collect";
export declare class ReadCollect implements Action {
    bale: CollectBit;
    readonly type = "[Read action] Read Collect";
    constructor(bale: CollectBit);
}
export declare const WRITE_COLLECT = "[Write action] Write Collect";
export declare class WriteCollect implements Action {
    bale: CollectBit;
    readonly type = "[Write action] Write Collect";
    constructor(bale: CollectBit);
}
export declare const CREATE_COLLECT = "[Create action] Create Collect";
export declare class CreateCollect implements Action {
    bale: CollectBit;
    readonly type = "[Create action] Create Collect";
    constructor(bale: CollectBit);
}
export declare const REMOVE_COLLECT = "[Create action] Remove Collect";
export declare class RemoveCollect implements Action {
    bale: CollectBit;
    readonly type = "[Create action] Remove Collect";
    constructor(bale: CollectBit);
}
export declare const DELETE_COLLECT = "[Create action] Delete Collect";
export declare class DeleteCollect implements Action {
    bale: CollectBit;
    readonly type = "[Create action] Delete Collect";
    constructor(bale: CollectBit);
}
export declare const EMPTY_COLLECT = "[Empty action] Empty Collect";
export declare class EmptyCollect implements Action {
    bale: CollectBit;
    readonly type = "[Empty action] Empty Collect";
    constructor(bale: CollectBit);
}
export type Actions = InitCollect | UpdateCollect | ReadCollect | WriteCollect | CreateCollect | EmptyCollect | FetchCollect | DeleteCollect | RemoveCollect;
