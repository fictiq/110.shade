import { Action } from "../99.core/interface/action.interface";
import TerminalBit from "./fce/terminal.bit";
export declare const INIT_TERMINAL = "[Terminal action] Init Terminal";
export declare class InitTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Terminal action] Init Terminal";
    constructor(bale: TerminalBit);
}
export declare const OPEN_TERMINAL = "[Terminal action] Open Terminal";
export declare class OpenTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Terminal action] Open Terminal";
    constructor(bale: TerminalBit);
}
export declare const FOCUS_TERMINAL = "[Terminal action] Focus Terminal";
export declare class FocusTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Terminal action] Focus Terminal";
    constructor(bale: TerminalBit);
}
export declare const WRITE_TERMINAL = "[Terminal action] Write Terminal";
export declare class WriteTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Terminal action] Write Terminal";
    constructor(bale: TerminalBit);
}
export declare const UPDATE_TERMINAL = "[Terminal action] Update Terminal";
export declare class UpdateTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Terminal action] Update Terminal";
    constructor(bale: TerminalBit);
}
export declare const CLEAR_TERMINAL = "[Terminal action] Clear Terminal";
export declare class ClearTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Terminal action] Clear Terminal";
    constructor(bale: TerminalBit);
}
export declare const INPUT_TERMINAL = "[Terminal action] Input Terminal";
export declare class InputTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Terminal action] Input Terminal";
    constructor(bale: TerminalBit);
}
export declare const TABLE_TERMINAL = "[Terminal action] Table Terminal";
export declare class TableTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Terminal action] Table Terminal";
    constructor(bale: TerminalBit);
}
export declare const CLOSE_TERMINAL = "[Terminal action] Close Terminal";
export declare class CloseTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Terminal action] Close Terminal";
    constructor(bale: TerminalBit);
}
export declare const ROOT_TERMINAL = "[Terminal action] Root Terminal";
export declare class RootTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Terminal action] Root Terminal";
    constructor(bale: TerminalBit);
}
export declare const CONTENT_TERMINAL = "[Terminal action] Content Terminal";
export declare class ContentTerminal implements Action {
    bale: TerminalBit;
    readonly type = "[Terminal action] Content Terminal";
    constructor(bale: TerminalBit);
}
export declare const ADD_PORT = "[Terminal action] Add Port";
export declare class AddPort implements Action {
    bale: TerminalBit;
    readonly type = "[Terminal action] Add Port";
    constructor(bale: TerminalBit);
}
export type Actions = FocusTerminal | InitTerminal | UpdateTerminal | WriteTerminal | ClearTerminal | OpenTerminal | InputTerminal | TableTerminal | CloseTerminal | RootTerminal | ContentTerminal | AddPort;
