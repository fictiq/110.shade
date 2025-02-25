import * as clone from "clone-deep";
import * as Act from "./babylon.action";
import { BabylonModel } from "./babylon.model";
import * as Buzz from "./babylon.buzzer";
import State from "../99.core/state";

export function reducer(model: BabylonModel = new BabylonModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_BABYLON:
 return Buzz.updateBabylon(clone(model), act.bale, state);

 case Act.INIT_BABYLON:
 return Buzz.initBabylon(clone(model), act.bale, state);

 default:
 return model;
 }
}
