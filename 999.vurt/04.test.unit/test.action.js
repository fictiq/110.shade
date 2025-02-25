"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTest = exports.CREATE_TEST = exports.WriteTest = exports.WRITE_TEST = exports.ReadTest = exports.READ_TEST = exports.FetchTest = exports.FETCH_TEST = exports.AutoTest = exports.AUTO_TEST = exports.UpdateTest = exports.UPDATE_TEST = exports.InitTest = exports.INIT_TEST = void 0;
// Test actions
exports.INIT_TEST = "[Test action] Init Test";
class InitTest {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.INIT_TEST;
    }
}
exports.InitTest = InitTest;
exports.UPDATE_TEST = "[Test action] Update Test";
class UpdateTest {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.UPDATE_TEST;
    }
}
exports.UpdateTest = UpdateTest;
exports.AUTO_TEST = "[Test action] Auto Test";
class AutoTest {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.AUTO_TEST;
    }
}
exports.AutoTest = AutoTest;
exports.FETCH_TEST = "[Test action] Fetch Test";
class FetchTest {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.FETCH_TEST;
    }
}
exports.FetchTest = FetchTest;
exports.READ_TEST = "[Read action] Read Test";
class ReadTest {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.READ_TEST;
    }
}
exports.ReadTest = ReadTest;
exports.WRITE_TEST = "[Write action] Write Test";
class WriteTest {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.WRITE_TEST;
    }
}
exports.WriteTest = WriteTest;
exports.CREATE_TEST = "[Create action] Create Test";
class CreateTest {
    constructor(bale) {
        this.bale = bale;
        this.type = exports.CREATE_TEST;
    }
}
exports.CreateTest = CreateTest;
//# sourceMappingURL=test.action.js.map