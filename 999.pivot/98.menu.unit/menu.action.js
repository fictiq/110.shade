"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerMenu = exports.CONTAINER_MENU = exports.VisageMenu = exports.VISAGE_MENU = exports.UnitMenu = exports.UNIT_MENU = exports.CloseMenu = exports.CLOSE_MENU = exports.TestMenu = exports.TEST_MENU = exports.UpdateMenu = exports.UPDATE_MENU = exports.InitMenu = exports.INIT_MENU = void 0;
exports.INIT_MENU = "[Menu action] Init Menu";
class InitMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_MENU;
    }
}
exports.InitMenu = InitMenu;
exports.UPDATE_MENU = "[Menu action] Update Menu";
class UpdateMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_MENU;
    }
}
exports.UpdateMenu = UpdateMenu;
exports.TEST_MENU = "[Menu action] Test Menu";
class TestMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.TEST_MENU;
    }
}
exports.TestMenu = TestMenu;
exports.CLOSE_MENU = "[Menu action] Close Menu";
class CloseMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CLOSE_MENU;
    }
}
exports.CloseMenu = CloseMenu;
exports.UNIT_MENU = "[Menu action] Unit Menu";
class UnitMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UNIT_MENU;
    }
}
exports.UnitMenu = UnitMenu;
exports.VISAGE_MENU = "[Visage action] Visage Menu";
class VisageMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.VISAGE_MENU;
    }
}
exports.VisageMenu = VisageMenu;
exports.CONTAINER_MENU = "[Visage action] Container Menu";
class ContainerMenu {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CONTAINER_MENU;
    }
}
exports.ContainerMenu = ContainerMenu;
//# sourceMappingURL=menu.action.js.map