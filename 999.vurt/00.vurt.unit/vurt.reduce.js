"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./vurt.action");
const vurt_model_1 = require("./vurt.model");
const Buzz = require("./vurt.buzzer");
function reducer(model = new vurt_model_1.VurtModel(), act, state) {
    switch (act.type) {
        case Act.REPLACE_VURT:
            return Buzz.replaceVurt(clone(model), act.bale, state);
        case Act.LIST_PIVOT_VURT:
            return Buzz.listPivotVurt(clone(model), act.bale, state);
        case Act.UPDATE_VURT:
            return Buzz.updateVurt(clone(model), act.bale, state);
        case Act.UNIT_VURT:
            return Buzz.unitVurt(clone(model), act.bale, state);
        case Act.LIST_UNIT_VURT:
            return Buzz.listUnitVurt(clone(model), act.bale, state);
        case Act.COUNT_VURT:
            return Buzz.countVurt(clone(model), act.bale, state);
        case Act.TEST_CLOUD_VURT:
            return Buzz.testCloudVurt(clone(model), act.bale, state);
        case Act.FETCH_VURT:
            return Buzz.fetchVurt(clone(model), act.bale, state);
        case Act.DELAY_VURT:
            return Buzz.delayVurt(clone(model), act.bale, state);
        case Act.INIT_VURT:
            return Buzz.initVurt(clone(model), act.bale, state);
        case Act.CONTAINS_VURT:
            return Buzz.containsVurt(clone(model), act.bale, state);
        case Act.BUNDLE_VURT:
            return Buzz.bundleVurt(clone(model), act.bale, state);
        case Act.VALUE_VURT:
            return Buzz.valueVurt(clone(model), act.bale, state);
        case Act.WORK_VURT:
            return Buzz.workVurt(clone(model), act.bale, state);
        case Act.COMMIT_VURT:
            return Buzz.commitVurt(clone(model), act.bale, state);
        case Act.DOT_VURT:
            return Buzz.dotVurt(clone(model), act.bale, state);
        case Act.PIVOT_VURT:
            return Buzz.pivotVurt(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=vurt.reduce.js.map