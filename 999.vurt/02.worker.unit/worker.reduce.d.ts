import * as Act from "./worker.action";
import { WorkerModel } from "./worker.model";
import State from "../99.core/state";
export declare function reducer(model: WorkerModel, act: Act.Actions, state?: State): WorkerModel;
