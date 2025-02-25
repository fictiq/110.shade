"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeUnit = exports.CODE_UNIT = exports.UpdateUnit = exports.UPDATE_UNIT = exports.CreateUnit = exports.CREATE_UNIT = exports.InitUnit = exports.INIT_UNIT = void 0;
// Unit actions
exports.INIT_UNIT = "[Unit action] Init Unit";
class InitUnit {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_UNIT;
    }
}
exports.InitUnit = InitUnit;
exports.CREATE_UNIT = "[Unit action] Create Unit";
class CreateUnit {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_UNIT;
    }
}
exports.CreateUnit = CreateUnit;
exports.UPDATE_UNIT = "[Unit action] Update Unit";
class UpdateUnit {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_UNIT;
    }
}
exports.UpdateUnit = UpdateUnit;
exports.CODE_UNIT = "[Code action] Code Unit";
class CodeUnit {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CODE_UNIT;
    }
}
exports.CodeUnit = CodeUnit;
//# sourceMappingURL=unit.action.js.map