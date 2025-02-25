"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortColorVurt = exports.SORT_COLORVURT = exports.UpdateColorVurt = exports.UPDATE_COLORVURT = exports.InitColorVurt = exports.INIT_COLORVURT = void 0;
// ColorVurt actions
exports.INIT_COLORVURT = "[ColorVurt action] Init ColorVurt";
class InitColorVurt {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_COLORVURT;
    }
}
exports.InitColorVurt = InitColorVurt;
exports.UPDATE_COLORVURT = "[ColorVurt action] Update ColorVurt";
class UpdateColorVurt {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_COLORVURT;
    }
}
exports.UpdateColorVurt = UpdateColorVurt;
exports.SORT_COLORVURT = "[Sort action] Sort ColorVurt";
class SortColorVurt {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.SORT_COLORVURT;
    }
}
exports.SortColorVurt = SortColorVurt;
//# sourceMappingURL=colorVurt.action.js.map