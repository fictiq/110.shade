"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePivot = exports.CREATE_PIVOT = exports.UpdatePivot = exports.UPDATE_PIVOT = exports.InitPivot = exports.INIT_PIVOT = void 0;
// Pivot actions
exports.INIT_PIVOT = "[Pivot action] Init Pivot";
class InitPivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_PIVOT;
    }
}
exports.InitPivot = InitPivot;
exports.UPDATE_PIVOT = "[Pivot action] Update Pivot";
class UpdatePivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_PIVOT;
    }
}
exports.UpdatePivot = UpdatePivot;
exports.CREATE_PIVOT = "[Create action] Create Pivot";
class CreatePivot {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_PIVOT;
    }
}
exports.CreatePivot = CreatePivot;
//# sourceMappingURL=pivot.action.js.map