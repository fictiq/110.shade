export declare const initWorker: (cpy: WorkerModel, bal: WorkerBit, ste: State) => WorkerModel;
export declare const publishWorker: (cpy: WorkerModel, bal: WorkerBit, ste: State) => Promise<WorkerModel>;
export declare const deleteWorker: (cpy: WorkerModel, bal: WorkerBit, ste: State) => Promise<WorkerModel>;
export declare const listWorker: (cpy: WorkerModel, bal: WorkerBit, ste: State) => WorkerModel;
export declare const updateWorker: (cpy: WorkerModel, bal: WorkerBit, ste: State) => WorkerModel;
import { WorkerModel } from "../worker.model";
import WorkerBit from "../fce/worker.bit";
import State from "../../99.core/state";
