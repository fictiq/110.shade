import * as Act from "./vurt.action";
import { VurtModel } from "./vurt.model";
import State from "../99.core/state";
export declare function reducer(model: VurtModel, act: Act.Actions, state?: State): void | Promise<void> | VurtModel | Promise<VurtModel>;
