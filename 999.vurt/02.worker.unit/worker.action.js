"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWorker = exports.LIST_WORKER = exports.DeleteWorker = exports.DELETE_WORKER = exports.UpdateWorker = exports.UPDATE_WORKER = exports.PublishWorker = exports.PUBLISH_WORKER = exports.InitWorker = exports.INIT_WORKER = void 0;
exports.INIT_WORKER = "[Worker action] Init Worker";
class InitWorker {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_WORKER;
    }
}
exports.InitWorker = InitWorker;
exports.PUBLISH_WORKER = "[Worker action] Publish Worker";
class PublishWorker {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.PUBLISH_WORKER;
    }
}
exports.PublishWorker = PublishWorker;
exports.UPDATE_WORKER = "[Worker action] Update Worker";
class UpdateWorker {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_WORKER;
    }
}
exports.UpdateWorker = UpdateWorker;
exports.DELETE_WORKER = "[Worker action] Delete Worker";
class DeleteWorker {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_WORKER;
    }
}
exports.DeleteWorker = DeleteWorker;
exports.LIST_WORKER = "[Worker action] List Worker";
class ListWorker {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LIST_WORKER;
    }
}
exports.ListWorker = ListWorker;
//# sourceMappingURL=worker.action.js.map