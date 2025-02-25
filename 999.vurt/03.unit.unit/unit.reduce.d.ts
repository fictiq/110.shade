import * as Act from "./unit.action";
import { UnitModel } from "./unit.model";
import State from "../99.core/state";
export declare function reducer(model: UnitModel, act: Act.Actions, state?: State): UnitModel | Promise<UnitModel>;
