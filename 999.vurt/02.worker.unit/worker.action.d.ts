import { Action } from "../99.core/interface/action.interface";
import WorkerBit from "./fce/worker.bit";
export declare const INIT_WORKER = "[Worker action] Init Worker";
export declare class InitWorker implements Action {
    bale: WorkerBit;
    readonly type = "[Worker action] Init Worker";
    constructor(bale: WorkerBit);
}
export declare const PUBLISH_WORKER = "[Worker action] Publish Worker";
export declare class PublishWorker implements Action {
    bale: WorkerBit;
    readonly type = "[Worker action] Publish Worker";
    constructor(bale: WorkerBit);
}
export declare const UPDATE_WORKER = "[Worker action] Update Worker";
export declare class UpdateWorker implements Action {
    bale: WorkerBit;
    readonly type = "[Worker action] Update Worker";
    constructor(bale: WorkerBit);
}
export declare const DELETE_WORKER = "[Worker action] Delete Worker";
export declare class DeleteWorker implements Action {
    bale: WorkerBit;
    readonly type = "[Worker action] Delete Worker";
    constructor(bale: WorkerBit);
}
export declare const LIST_WORKER = "[Worker action] List Worker";
export declare class ListWorker implements Action {
    bale: WorkerBit;
    readonly type = "[Worker action] List Worker";
    constructor(bale: WorkerBit);
}
export type Actions = DeleteWorker | PublishWorker | ListWorker | InitWorker | UpdateWorker;
