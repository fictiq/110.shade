export declare const initUnit: (cpy: UnitModel, bal: UnitBit, ste: State) => UnitModel;
export declare const updateUnit: (cpy: UnitModel, bal: UnitBit, ste: State) => Promise<UnitModel>;
export declare const createUnit: (cpy: UnitModel, bal: UnitBit, ste: State) => UnitModel;
export declare const codeUnit: (cpy: UnitModel, bal: UnitBit, ste: State) => UnitModel;
import { UnitModel } from "../unit.model";
import UnitBit from "../fce/unit.bit";
import State from "../../99.core/state";
