import { Action } from "../99.core/interface/action.interface";
import DiskBit from "./fce/disk.bit";
export declare const INIT_DISK = "[Disk action] Init Disk";
export declare class InitDisk implements Action {
    bale: DiskBit;
    readonly type = "[Disk action] Init Disk";
    constructor(bale: DiskBit);
}
export declare const UPDATE_DISK = "[Disk action] Update Disk";
export declare class UpdateDisk implements Action {
    bale: DiskBit;
    readonly type = "[Disk action] Update Disk";
    constructor(bale: DiskBit);
}
export declare const READ_DISK = "[Disk action] Read Disk";
export declare class ReadDisk implements Action {
    bale: DiskBit;
    readonly type = "[Disk action] Read Disk";
    constructor(bale: DiskBit);
}
export declare const WRITE_DISK = "[Disk action] Write Disk";
export declare class WriteDisk implements Action {
    bale: DiskBit;
    readonly type = "[Disk action] Write Disk";
    constructor(bale: DiskBit);
}
export declare const LIST_DISK = "[List action] List Disk";
export declare class ListDisk implements Action {
    bale: DiskBit;
    readonly type = "[List action] List Disk";
    constructor(bale: DiskBit);
}
export declare const LOAD_LIST_DISK = "[Load_list action] Load_list Disk";
export declare class Load_listDisk implements Action {
    bale: DiskBit;
    readonly type = "[Load_list action] Load_list Disk";
    constructor(bale: DiskBit);
}
export declare const COPY_DISK = "[Copy action] Copy Disk";
export declare class CopyDisk implements Action {
    bale: DiskBit;
    readonly type = "[Copy action] Copy Disk";
    constructor(bale: DiskBit);
}
export declare const FRAME_DISK = "[Frame action] Frame Disk";
export declare class FrameDisk implements Action {
    bale: DiskBit;
    readonly type = "[Frame action] Frame Disk";
    constructor(bale: DiskBit);
}
export declare const BATCH_DISK = "[Batch action] Batch Disk";
export declare class BatchDisk implements Action {
    bale: DiskBit;
    readonly type = "[Batch action] Batch Disk";
    constructor(bale: DiskBit);
}
export declare const TRASH_DISK = "[Trash action] Trash Disk";
export declare class TrashDisk implements Action {
    bale: DiskBit;
    readonly type = "[Trash action] Trash Disk";
    constructor(bale: DiskBit);
}
export declare const ENSURE_DISK = "[Ensure action] Ensure Disk";
export declare class EnsureDisk implements Action {
    bale: DiskBit;
    readonly type = "[Ensure action] Ensure Disk";
    constructor(bale: DiskBit);
}
export declare const DELETE_DISK = "[Delete action] Delete Disk";
export declare class DeleteDisk implements Action {
    bale: DiskBit;
    readonly type = "[Delete action] Delete Disk";
    constructor(bale: DiskBit);
}
export type Actions = InitDisk | UpdateDisk | WriteDisk | ReadDisk | ListDisk | Load_listDisk | CopyDisk | FrameDisk | BatchDisk | TrashDisk | EnsureDisk | DeleteDisk;
