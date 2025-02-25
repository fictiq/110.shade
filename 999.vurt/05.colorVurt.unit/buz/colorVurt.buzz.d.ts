export declare const initColorVurt: (cpy: ColorVurtModel, bal: ColorVurtBit, ste: State) => ColorVurtModel;
export declare const updateColorVurt: (cpy: ColorVurtModel, bal: ColorVurtBit, ste: State) => ColorVurtModel;
export declare const sortColorVurt: (cpy: ColorVurtModel, bal: ColorVurtBit, ste: State) => Promise<ColorVurtModel>;
import { ColorVurtModel } from "../colorVurt.model";
import ColorVurtBit from "../fce/colorVurt.bit";
import State from "../../99.core/state";
