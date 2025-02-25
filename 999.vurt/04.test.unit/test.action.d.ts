import { Action } from "../99.core/interface/action.interface";
import TestBit from "./fce/test.bit";
export declare const INIT_TEST = "[Test action] Init Test";
export declare class InitTest implements Action {
    bale: TestBit;
    readonly type = "[Test action] Init Test";
    constructor(bale: TestBit);
}
export declare const UPDATE_TEST = "[Test action] Update Test";
export declare class UpdateTest implements Action {
    bale: TestBit;
    readonly type = "[Test action] Update Test";
    constructor(bale: TestBit);
}
export declare const AUTO_TEST = "[Test action] Auto Test";
export declare class AutoTest implements Action {
    bale: TestBit;
    readonly type = "[Test action] Auto Test";
    constructor(bale: TestBit);
}
export declare const FETCH_TEST = "[Test action] Fetch Test";
export declare class FetchTest implements Action {
    bale: TestBit;
    readonly type = "[Test action] Fetch Test";
    constructor(bale: TestBit);
}
export declare const READ_TEST = "[Read action] Read Test";
export declare class ReadTest implements Action {
    bale: TestBit;
    readonly type = "[Read action] Read Test";
    constructor(bale: TestBit);
}
export declare const WRITE_TEST = "[Write action] Write Test";
export declare class WriteTest implements Action {
    bale: TestBit;
    readonly type = "[Write action] Write Test";
    constructor(bale: TestBit);
}
export declare const CREATE_TEST = "[Create action] Create Test";
export declare class CreateTest implements Action {
    bale: TestBit;
    readonly type = "[Create action] Create Test";
    constructor(bale: TestBit);
}
export type Actions = InitTest | UpdateTest | AutoTest | FetchTest | ReadTest | WriteTest | CreateTest;
