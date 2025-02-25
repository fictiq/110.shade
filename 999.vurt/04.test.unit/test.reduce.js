"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./test.action");
const test_model_1 = require("./test.model");
const Buzz = require("./test.buzzer");
function reducer(model = new test_model_1.TestModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_TEST:
            return Buzz.updateTest(clone(model), act.bale, state);
        case Act.AUTO_TEST:
            return Buzz.autoTest(clone(model), act.bale, state);
        case Act.FETCH_TEST:
            return Buzz.fetchTest(clone(model), act.bale, state);
        case Act.INIT_TEST:
            return Buzz.initTest(clone(model), act.bale, state);
        case Act.READ_TEST:
            return Buzz.readTest(clone(model), act.bale, state);
        case Act.WRITE_TEST:
            return Buzz.writeTest(clone(model), act.bale, state);
        case Act.CREATE_TEST:
            return Buzz.createTest(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=test.reduce.js.map