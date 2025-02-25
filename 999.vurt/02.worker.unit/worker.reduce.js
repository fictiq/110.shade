"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./worker.action");
const worker_model_1 = require("./worker.model");
const Buzz = require("./worker.buzzer");
function reducer(model = new worker_model_1.WorkerModel(), act, state) {
    switch (act.type) {
        case Act.PUBLISH_WORKER:
            return Buzz.publishWorker(clone(model), act.bale, state);
        case Act.LIST_WORKER:
            return Buzz.listWorker(clone(model), act.bale, state);
        case Act.UPDATE_WORKER:
            return Buzz.updateWorker(clone(model), act.bale, state);
        case Act.DELETE_WORKER:
            return Buzz.deleteWorker(clone(model), act.bale, state);
        case Act.INIT_WORKER:
            return Buzz.initWorker(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=worker.reduce.js.map