import { Action } from "../99.core/interface/action.interface";
import VurtBit from "./fce/vurt.bit";
export declare const INIT_VURT = "[Vurt action] Init Vurt";
export declare class InitVurt implements Action {
    bale: VurtBit;
    readonly type = "[Vurt action] Init Vurt";
    constructor(bale: VurtBit);
}
export declare const DELAY_VURT = "[Vurt action] Delay Vurt";
export declare class DelayVurt implements Action {
    bale: VurtBit;
    readonly type = "[Vurt action] Delay Vurt";
    constructor(bale: VurtBit);
}
export declare const TEST_CLOUD_VURT = "[Vurt action] Test Cloud Vurt";
export declare class TestCloudVurt implements Action {
    bale: VurtBit;
    readonly type = "[Vurt action] Test Cloud Vurt";
    constructor(bale: VurtBit);
}
export declare const FETCH_VURT = "[Vurt action] Fetch Vurt";
export declare class FetchVurt implements Action {
    bale: VurtBit;
    readonly type = "[Vurt action] Fetch Vurt";
    constructor(bale: VurtBit);
}
export declare const UPDATE_VURT = "[Vurt action] Update Vurt";
export declare class UpdateVurt implements Action {
    bale: VurtBit;
    readonly type = "[Vurt action] Update Vurt";
    constructor(bale: VurtBit);
}
export declare const REPLACE_VURT = "[Vurt action] Replace Vurt";
export declare class ReplaceVurt implements Action {
    bale: VurtBit;
    readonly type = "[Vurt action] Replace Vurt";
    constructor(bale: VurtBit);
}
export declare const UNIT_VURT = "[Vurt action] Unit Vurt";
export declare class UnitVurt implements Action {
    bale: VurtBit;
    readonly type = "[Vurt action] Unit Vurt";
    constructor(bale: VurtBit);
}
export declare const COUNT_VURT = "[Vurt action] Count Vurt";
export declare class CountVurt implements Action {
    bale: VurtBit;
    readonly type = "[Vurt action] Count Vurt";
    constructor(bale: VurtBit);
}
export declare const LIST_PIVOT_VURT = "[Vurt action] List Pivot Vurt";
export declare class ListPivotVurt implements Action {
    bale: VurtBit;
    readonly type = "[Vurt action] List Pivot Vurt";
    constructor(bale: VurtBit);
}
export declare const LIST_UNIT_VURT = "[Vurt action] List Unit Vurt";
export declare class ListUnitVurt implements Action {
    bale: VurtBit;
    readonly type = "[Vurt action] List Unit Vurt";
    constructor(bale: VurtBit);
}
export declare const CONTAINS_VURT = "[Contains action] Contains Vurt";
export declare class ContainsVurt implements Action {
    bale: VurtBit;
    readonly type = "[Contains action] Contains Vurt";
    constructor(bale: VurtBit);
}
export declare const BUNDLE_VURT = "[Bundle action] Bundle Vurt";
export declare class BundleVurt implements Action {
    bale: VurtBit;
    readonly type = "[Bundle action] Bundle Vurt";
    constructor(bale: VurtBit);
}
export declare const VALUE_VURT = "[Value action] Value Vurt";
export declare class ValueVurt implements Action {
    bale: VurtBit;
    readonly type = "[Value action] Value Vurt";
    constructor(bale: VurtBit);
}
export declare const WORK_VURT = "[Work action] Work Vurt";
export declare class WorkVurt implements Action {
    bale: VurtBit;
    readonly type = "[Work action] Work Vurt";
    constructor(bale: VurtBit);
}
export declare const COMMIT_VURT = "[Commit action] Commit Vurt";
export declare class CommitVurt implements Action {
    bale: VurtBit;
    readonly type = "[Commit action] Commit Vurt";
    constructor(bale: VurtBit);
}
export declare const DOT_VURT = "[Dot action] Dot Vurt";
export declare class DotVurt implements Action {
    bale: VurtBit;
    readonly type = "[Dot action] Dot Vurt";
    constructor(bale: VurtBit);
}
export declare const PIVOT_VURT = "[Pivot action] Pivot Vurt";
export declare class PivotVurt implements Action {
    bale: VurtBit;
    readonly type = "[Pivot action] Pivot Vurt";
    constructor(bale: VurtBit);
}
export type Actions = DelayVurt | ListUnitVurt | InitVurt | UpdateVurt | ReplaceVurt | UnitVurt | CountVurt | ListPivotVurt | TestCloudVurt | FetchVurt | ContainsVurt | BundleVurt | ValueVurt | WorkVurt | CommitVurt | DotVurt | PivotVurt;
