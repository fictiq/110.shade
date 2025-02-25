"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./menu.action");
const menu_model_1 = require("./menu.model");
const Buzz = require("./menu.buzzer");
function reducer(model = new menu_model_1.MenuModel(), act, state) {
    switch (act.type) {
        case Act.UNIT_MENU:
            return Buzz.unitMenu(clone(model), act.bale, state);
        case Act.UPDATE_MENU:
            return Buzz.updateMenu(clone(model), act.bale, state);
        case Act.INIT_MENU:
            return Buzz.initMenu(clone(model), act.bale, state);
        case Act.COUNT_MENU:
            return Buzz.countMenu(clone(model), act.bale, state);
        case Act.TEST_MENU:
            return Buzz.testMenu(clone(model), act.bale, state);
        case Act.WORKER_MENU:
            return Buzz.workerMenu(clone(model), act.bale, state);
        case Act.DISK_MENU:
            return Buzz.diskMenu(clone(model), act.bale, state);
        case Act.CLOSE_MENU:
            return Buzz.closeMenu(clone(model), act.bale, state);
        case Act.VURT_MENU:
            return Buzz.vurtMenu(clone(model), act.bale, state);
        case Act.COLORVURT_MENU:
            return Buzz.colorVurtMenu(clone(model), act.bale, state);
        case Act.SORTCOLORVURT_MENU:
            return Buzz.sortColorVurtMenu(clone(model), act.bale, state);
        case Act.COLLECT_MENU:
            return Buzz.collectMenu(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=menu.reduce.js.map