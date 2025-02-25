import { Action } from "../99.core/interface/action.interface";
import MenuBit from "./fce/menu.bit";
export declare const INIT_MENU = "[Menu action] Init Menu";
export declare class InitMenu implements Action {
    bale: MenuBit;
    readonly type = "[Menu action] Init Menu";
    constructor(bale: MenuBit);
}
export declare const UPDATE_MENU = "[Menu action] Update Menu";
export declare class UpdateMenu implements Action {
    bale: MenuBit;
    readonly type = "[Menu action] Update Menu";
    constructor(bale: MenuBit);
}
export declare const VURT_MENU = "[Menu action] Vurt Menu";
export declare class VurtMenu implements Action {
    bale: MenuBit;
    readonly type = "[Menu action] Vurt Menu";
    constructor(bale: MenuBit);
}
export declare const COUNT_MENU = "[Menu action] Count Menu";
export declare class CountMenu implements Action {
    bale: MenuBit;
    readonly type = "[Menu action] Count Menu";
    constructor(bale: MenuBit);
}
export declare const TEST_MENU = "[Menu action] Test Menu";
export declare class TestMenu implements Action {
    bale: MenuBit;
    readonly type = "[Menu action] Test Menu";
    constructor(bale: MenuBit);
}
export declare const UNIT_MENU = "[Menu action] Unit Menu";
export declare class UnitMenu implements Action {
    bale: MenuBit;
    readonly type = "[Menu action] Unit Menu";
    constructor(bale: MenuBit);
}
export declare const CLOSE_MENU = "[Menu action] Close Menu";
export declare class CloseMenu implements Action {
    bale: MenuBit;
    readonly type = "[Menu action] Close Menu";
    constructor(bale: MenuBit);
}
export declare const WORKER_MENU = "[Menu action] Worker Menu";
export declare class WorkerMenu implements Action {
    bale: MenuBit;
    readonly type = "[Menu action] Worker Menu";
    constructor(bale: MenuBit);
}
export declare const DISK_MENU = "[Menu action] Disk Menu";
export declare class DiskMenu implements Action {
    bale: MenuBit;
    readonly type = "[Menu action] Disk Menu";
    constructor(bale: MenuBit);
}
export declare const COLORVURT_MENU = "[ColorVurt action] ColorVurt Menu";
export declare class ColorVurtMenu implements Action {
    bale: MenuBit;
    readonly type = "[ColorVurt action] ColorVurt Menu";
    constructor(bale: MenuBit);
}
export declare const SORTCOLORVURT_MENU = "[SortColorVurt action] SortColorVurt Menu";
export declare class SortColorVurtMenu implements Action {
    bale: MenuBit;
    readonly type = "[SortColorVurt action] SortColorVurt Menu";
    constructor(bale: MenuBit);
}
export declare const COLLECT_MENU = "[Collect action] Collect Menu";
export declare class CollectMenu implements Action {
    bale: MenuBit;
    readonly type = "[Collect action] Collect Menu";
    constructor(bale: MenuBit);
}
export declare const PIVOT_MENU = "[Collect action] Pivot Menu";
export declare class PivotMenu implements Action {
    bale: MenuBit;
    readonly type = "[Collect action] Pivot Menu";
    constructor(bale: MenuBit);
}
export type Actions = WorkerMenu | VurtMenu | DiskMenu | InitMenu | UpdateMenu | TestMenu | CloseMenu | UnitMenu | CountMenu | ColorVurtMenu | SortColorVurtMenu | CollectMenu | PivotMenu;
