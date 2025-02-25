"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const clone = require("clone-deep");
const Act = require("./disk.action");
const disk_model_1 = require("./disk.model");
const Buzz = require("./disk.buzzer");
function reducer(model = new disk_model_1.DiskModel(), act, state) {
    switch (act.type) {
        case Act.UPDATE_DISK:
            return Buzz.updateDisk(clone(model), act.bale, state);
        case Act.INIT_DISK:
            return Buzz.initDisk(clone(model), act.bale, state);
        case Act.WRITE_DISK:
            return Buzz.writeDisk(clone(model), act.bale, state);
        case Act.READ_DISK:
            return Buzz.readDisk(clone(model), act.bale, state);
        case Act.LIST_DISK:
            return Buzz.listDisk(clone(model), act.bale, state);
        case Act.LOAD_LIST_DISK:
            return Buzz.load_listDisk(clone(model), act.bale, state);
        case Act.COPY_DISK:
            return Buzz.copyDisk(clone(model), act.bale, state);
        case Act.FRAME_DISK:
            return Buzz.frameDisk(clone(model), act.bale, state);
        case Act.BATCH_DISK:
            return Buzz.batchDisk(clone(model), act.bale, state);
        case Act.TRASH_DISK:
            return Buzz.trashDisk(clone(model), act.bale, state);
        case Act.ENSURE_DISK:
            return Buzz.ensureDisk(clone(model), act.bale, state);
        case Act.DELETE_DISK:
            return Buzz.deleteDisk(clone(model), act.bale, state);
        default:
            return model;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=disk.reduce.js.map