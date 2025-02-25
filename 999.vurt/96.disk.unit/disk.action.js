"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDisk = exports.DELETE_DISK = exports.EnsureDisk = exports.ENSURE_DISK = exports.TrashDisk = exports.TRASH_DISK = exports.BatchDisk = exports.BATCH_DISK = exports.FrameDisk = exports.FRAME_DISK = exports.CopyDisk = exports.COPY_DISK = exports.Load_listDisk = exports.LOAD_LIST_DISK = exports.ListDisk = exports.LIST_DISK = exports.WriteDisk = exports.WRITE_DISK = exports.ReadDisk = exports.READ_DISK = exports.UpdateDisk = exports.UPDATE_DISK = exports.InitDisk = exports.INIT_DISK = void 0;
exports.INIT_DISK = "[Disk action] Init Disk";
class InitDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_DISK;
    }
}
exports.InitDisk = InitDisk;
exports.UPDATE_DISK = "[Disk action] Update Disk";
class UpdateDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_DISK;
    }
}
exports.UpdateDisk = UpdateDisk;
exports.READ_DISK = "[Disk action] Read Disk";
class ReadDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_DISK;
    }
}
exports.ReadDisk = ReadDisk;
exports.WRITE_DISK = "[Disk action] Write Disk";
class WriteDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_DISK;
    }
}
exports.WriteDisk = WriteDisk;
exports.LIST_DISK = "[List action] List Disk";
class ListDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LIST_DISK;
    }
}
exports.ListDisk = ListDisk;
exports.LOAD_LIST_DISK = "[Load_list action] Load_list Disk";
class Load_listDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.LOAD_LIST_DISK;
    }
}
exports.Load_listDisk = Load_listDisk;
exports.COPY_DISK = "[Copy action] Copy Disk";
class CopyDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.COPY_DISK;
    }
}
exports.CopyDisk = CopyDisk;
exports.FRAME_DISK = "[Frame action] Frame Disk";
class FrameDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.FRAME_DISK;
    }
}
exports.FrameDisk = FrameDisk;
exports.BATCH_DISK = "[Batch action] Batch Disk";
class BatchDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.BATCH_DISK;
    }
}
exports.BatchDisk = BatchDisk;
exports.TRASH_DISK = "[Trash action] Trash Disk";
class TrashDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.TRASH_DISK;
    }
}
exports.TrashDisk = TrashDisk;
exports.ENSURE_DISK = "[Ensure action] Ensure Disk";
class EnsureDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.ENSURE_DISK;
    }
}
exports.EnsureDisk = EnsureDisk;
exports.DELETE_DISK = "[Delete action] Delete Disk";
class DeleteDisk {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.DELETE_DISK;
    }
}
exports.DeleteDisk = DeleteDisk;
//# sourceMappingURL=disk.action.js.map