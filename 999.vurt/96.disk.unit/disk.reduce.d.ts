import * as Act from "./disk.action";
import { DiskModel } from "./disk.model";
import State from "../99.core/state";
export declare function reducer(model: DiskModel, act: Act.Actions, state?: State): DiskModel | Promise<any>;
