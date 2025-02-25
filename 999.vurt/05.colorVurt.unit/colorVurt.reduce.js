"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./colorVurt.action");
const colorVurt_model_1 = require("./colorVurt.model");
const Buzz = require("./colorVurt.buzzer");
function reducer(model = new colorVurt_model_1.ColorVurtModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_COLORVURT:
            return Buzz.updateColorVurt(clone(model), act.bale, state);
        case Act.INIT_COLORVURT:
            return Buzz.initColorVurt(clone(model), act.bale, state);
        case Act.SORT_COLORVURT:
            return Buzz.sortColorVurt(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=colorVurt.reduce.js.map