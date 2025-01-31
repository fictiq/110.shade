import * as clone from "clone-deep";
import * as Act from "./collect.action";
import { CollectModel } from "./collect.model";
import * as Buzz from "./collect.buzzer";
import State from "../99.core/state";

export function reducer(model: CollectModel = new CollectModel(), act: Act.Actions, state?: State) {
   switch (act.type) {

      case Act.UPDATE_COLLECT:
         return Buzz.updateCollect(clone(model), act.bale, state);

      case Act.INIT_COLLECT:
         return Buzz.initCollect(clone(model), act.bale, state);

      case Act.READ_COLLECT:
         return Buzz.readCollect(clone(model), act.bale, state);

      case Act.WRITE_COLLECT:
         return Buzz.writeCollect(clone(model), act.bale, state);

      case Act.CREATE_COLLECT:
         return Buzz.createCollect(clone(model), act.bale, state);

      case Act.DELETE_COLLECT:
         return Buzz.deleteCollect(clone(model), act.bale, state);

      case Act.REMOVE_COLLECT:
         return Buzz.removeCollect(clone(model), act.bale, state);

      case Act.EMPTY_COLLECT:
         return Buzz.emptyCollect(clone(model), act.bale, state);

      case Act.FETCH_COLLECT:
         return Buzz.fetchCollect(clone(model), act.bale, state);

      case Act.MODEL_COLLECT:
         return Buzz.modelCollect(clone(model), act.bale, state);

      case Act.GET_COLLECT:
         return Buzz.getCollect(clone(model), act.bale, state);

      case Act.PUT_COLLECT:
         return Buzz.putCollect(clone(model), act.bale, state);

      case Act.FORMAT_COLLECT:
         return Buzz.formatCollect(clone(model), act.bale, state);

      case Act.DOT_COLLECT:
         return Buzz.dotCollect(clone(model), act.bale, state);

case Act.LIST_COLLECT:
 return Buzz.listCollect(clone(model), act.bale, state);
 
case Act.HASH_COLLECT:
 return Buzz.hashCollect(clone(model), act.bale, state);
 
      default:
         return model;
   }
}
