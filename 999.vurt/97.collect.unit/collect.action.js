"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyCollect = exports.EMPTY_COLLECT = exports.DeleteCollect = exports.DELETE_COLLECT = exports.RemoveCollect = exports.REMOVE_COLLECT = exports.CreateCollect = exports.CREATE_COLLECT = exports.WriteCollect = exports.WRITE_COLLECT = exports.ReadCollect = exports.READ_COLLECT = exports.FetchCollect = exports.FETCH_COLLECT = exports.UpdateCollect = exports.UPDATE_COLLECT = exports.InitCollect = exports.INIT_COLLECT = void 0;
// Collect actions
exports.INIT_COLLECT = "[Collect action] Init Collect";
class InitCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_COLLECT;
    }
}
exports.InitCollect = InitCollect;
exports.UPDATE_COLLECT = "[Collect action] Update Collect";
class UpdateCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_COLLECT;
    }
}
exports.UpdateCollect = UpdateCollect;
exports.FETCH_COLLECT = "[Collect action] Fetch Collect";
class FetchCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.FETCH_COLLECT;
    }
}
exports.FetchCollect = FetchCollect;
exports.READ_COLLECT = "[Read action] Read Collect";
class ReadCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_COLLECT;
    }
}
exports.ReadCollect = ReadCollect;
exports.WRITE_COLLECT = "[Write action] Write Collect";
class WriteCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_COLLECT;
    }
}
exports.WriteCollect = WriteCollect;
exports.CREATE_COLLECT = "[Create action] Create Collect";
class CreateCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_COLLECT;
    }
}
exports.CreateCollect = CreateCollect;
exports.REMOVE_COLLECT = "[Create action] Remove Collect";
class RemoveCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.REMOVE_COLLECT;
    }
}
exports.RemoveCollect = RemoveCollect;
exports.DELETE_COLLECT = "[Create action] Delete Collect";
class DeleteCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_COLLECT;
    }
}
exports.DeleteCollect = DeleteCollect;
exports.EMPTY_COLLECT = "[Empty action] Empty Collect";
class EmptyCollect {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.EMPTY_COLLECT;
    }
}
exports.EmptyCollect = EmptyCollect;
//# sourceMappingURL=collect.action.js.map