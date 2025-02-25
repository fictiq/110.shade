import Model from "./99.core/interface/model.interface";
import Vurt from "./00.vurt.unit/fce/vurt.interface";
import Terminal from "./01.terminal.unit/fce/terminal.interface";
import Worker from "./02.worker.unit/fce/worker.interface";
import Unit from "./03.unit.unit/fce/unit.interface";
import Test from "./04.test.unit/fce/test.interface";
import ColorVurt from "./05.colorVurt.unit/fce/colorVurt.interface";
import Pivot from "./06.pivot.unit/fce/pivot.interface";
import Disk from "./96.disk.unit/fce/disk.interface";
import Collect from "./97.collect.unit/fce/collect.interface";
import Menu from "./98.menu.unit/fce/menu.interface";
import Bus from "./99.bus.unit/fce/bus.interface";
export declare const list: Array<any>;
export declare const reducer: any;
export default class UnitData implements Model {
    vurt: Vurt;
    terminal: Terminal;
    worker: Worker;
    unit: Unit;
    test: Test;
    colorVurt: ColorVurt;
    pivot: Pivot;
    disk: Disk;
    collect: Collect;
    menu: Menu;
    bus: Bus;
}
