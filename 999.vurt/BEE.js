"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.list = void 0;
const vurt_unit_1 = require("./00.vurt.unit/vurt.unit");
const terminal_unit_1 = require("./01.terminal.unit/terminal.unit");
const worker_unit_1 = require("./02.worker.unit/worker.unit");
const unit_unit_1 = require("./03.unit.unit/unit.unit");
const test_unit_1 = require("./04.test.unit/test.unit");
const colorVurt_unit_1 = require("./05.colorVurt.unit/colorVurt.unit");
const pivot_unit_1 = require("./06.pivot.unit/pivot.unit");
const disk_unit_1 = require("./96.disk.unit/disk.unit");
const collect_unit_1 = require("./97.collect.unit/collect.unit");
const menu_unit_1 = require("./98.menu.unit/menu.unit");
const bus_unit_1 = require("./99.bus.unit/bus.unit");
const vurt_model_1 = require("./00.vurt.unit/vurt.model");
const terminal_model_1 = require("./01.terminal.unit/terminal.model");
const worker_model_1 = require("./02.worker.unit/worker.model");
const unit_model_1 = require("./03.unit.unit/unit.model");
const test_model_1 = require("./04.test.unit/test.model");
const colorVurt_model_1 = require("./05.colorVurt.unit/colorVurt.model");
const pivot_model_1 = require("./06.pivot.unit/pivot.model");
const disk_model_1 = require("./96.disk.unit/disk.model");
const collect_model_1 = require("./97.collect.unit/collect.model");
const menu_model_1 = require("./98.menu.unit/menu.model");
const bus_model_1 = require("./99.bus.unit/bus.model");
exports.list = [vurt_unit_1.default, terminal_unit_1.default, worker_unit_1.default, unit_unit_1.default, test_unit_1.default, colorVurt_unit_1.default, pivot_unit_1.default, disk_unit_1.default, collect_unit_1.default, menu_unit_1.default, bus_unit_1.default];
const reduceFromVurt = require("./00.vurt.unit/vurt.reduce");
const reduceFromTerminal = require("./01.terminal.unit/terminal.reduce");
const reduceFromWorker = require("./02.worker.unit/worker.reduce");
const reduceFromUnit = require("./03.unit.unit/unit.reduce");
const reduceFromTest = require("./04.test.unit/test.reduce");
const reduceFromColorVurt = require("./05.colorVurt.unit/colorVurt.reduce");
const reduceFromPivot = require("./06.pivot.unit/pivot.reduce");
const reduceFromDisk = require("./96.disk.unit/disk.reduce");
const reduceFromCollect = require("./97.collect.unit/collect.reduce");
const reduceFromMenu = require("./98.menu.unit/menu.reduce");
const reduceFromBus = require("./99.bus.unit/bus.reduce");
exports.reducer = {
    vurt: reduceFromVurt.reducer,
    terminal: reduceFromTerminal.reducer,
    worker: reduceFromWorker.reducer,
    unit: reduceFromUnit.reducer,
    test: reduceFromTest.reducer,
    colorVurt: reduceFromColorVurt.reducer,
    pivot: reduceFromPivot.reducer,
    disk: reduceFromDisk.reducer,
    collect: reduceFromCollect.reducer,
    menu: reduceFromMenu.reducer,
    bus: reduceFromBus.reducer,
};
class UnitData {
    constructor() {
        this.vurt = new vurt_model_1.VurtModel();
        this.terminal = new terminal_model_1.TerminalModel();
        this.worker = new worker_model_1.WorkerModel();
        this.unit = new unit_model_1.UnitModel();
        this.test = new test_model_1.TestModel();
        this.colorVurt = new colorVurt_model_1.ColorVurtModel();
        this.pivot = new pivot_model_1.PivotModel();
        this.disk = new disk_model_1.DiskModel();
        this.collect = new collect_model_1.CollectModel();
        this.menu = new menu_model_1.MenuModel();
        this.bus = new bus_model_1.BusModel();
    }
}
exports.default = UnitData;
//# sourceMappingURL=BEE.js.map