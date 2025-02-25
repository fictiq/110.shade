"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateWorker = exports.listWorker = exports.deleteWorker = exports.publishWorker = exports.initWorker = void 0;
const ActWrk = require("../worker.action");
const initWorker = (cpy, bal, ste) => {
    var lst = [ActWrk.PUBLISH_WORKER, ActWrk.LIST_WORKER];
    bal.slv({ intBit: { idx: "init-worker", lst } });
    return cpy;
};
exports.initWorker = initWorker;
const publishWorker = async (cpy, bal, ste) => {
    var doT = require("dot");
    var env = require("dotenv").config();
    if (bal.src == null)
        return;
    if (bal.src.includes(".") == false)
        return;
    var sub = bal.src.split(".")[0];
    var dom = bal.src.split(".")[1];
    var pivot = bal.src;
    var pivotUpper = dom.toUpperCase();
    var pivotTitle = S(dom).capitalize().s;
    var pivotDash = bal.src['replaceAll'](".", "-");
    console.log("cloud vurt " + bal.src);
    //ensure the cloud folder exists
    //if not create the folder and place the needed items there
    var root = "../" + bal.src + "/cloud/";
    if (FS.existsSync(root) == false) {
        var gel0 = {
            pivot,
            pivotUpper,
            pivotTitle,
            pivotDash,
            accountIDX: "{{=it.cloudflareIDX}}",
        };
        var outData = {};
        var cloudLoc = "./data/cloud/";
        ``;
        var cloudList = FS.readdirSync(cloudLoc);
        cloudList.forEach((a) => {
            var lst = FS.readFileSync(cloudLoc + a)
                .toString()
                .split("\n");
            lst.forEach((b, c) => {
                // console.log("$:: " + b);
                var doTCompiled = doT.template(b);
                var outLine = doTCompiled(gel0);
                lst[c] = outLine;
            });
            outData[root + a] = lst.join("\n");
        });
        FS.ensureDirSync(root);
        for (var key in outData) {
            FS.writeFileSync(key, outData[key]);
            console.log("writing... " + key);
        }
    }
    //now we want to create the agent that holds the cloudflare workers
    var cloudList = FS.readdirSync(root);
    var agentDir = "../agent/" + bal.src + "/";
    FS.ensureDirSync(agentDir);
    var gel1 = { cloudflareIDX: process.env.CLOUDFLARE_ACCOUNT };
    var outData = {};
    cloudList.forEach((a) => {
        var src = root + a;
        console.log(src);
        var lst = FS.readFileSync(src).toString().split("\n");
        lst.forEach((b, c) => {
            //console.log("$:: " + b);
            var doTCompiled = doT.template(b);
            var outLine = doTCompiled(gel1);
            lst[c] = outLine;
        });
        outData[agentDir + a] = lst.join("\n");
    });
    for (var key in outData) {
        FS.writeFileSync(key, outData[key]);
        console.log("writing... " + key);
    }
    var entryPoint = "../" + bal.src + "/" + bal.src + "/000.quest." + dom + ".js";
    var exitPoint = agentDir + bal.src + ".js";
    require("esbuild")
        .build({
        entryPoints: [entryPoint],
        bundle: true,
        define: { global: "globalThis" },
        outfile: exitPoint
    })
        .then(() => {
        console.log("Build complete " + bal.src);
        process.chdir(agentDir);
        var path = require("path");
        var absolutePath = path.resolve("./vrt.pub.bat");
        const spawn = require("child_process").spawn;
        const bat = spawn("cmd.exe", ["/c", absolutePath]);
        // Handle normal output
        bat.stdout.on("data", (data) => {
            // As said before, convert the Uint8Array to a readable string.
            var str = String.fromCharCode.apply(null, data);
            console.info(str);
        });
        bat.stderr.on("data", (data) => {
            // As said before, convert the Uint8Array to a readable string.
            var str = String.fromCharCode.apply(null, data);
            console.error(str);
        });
        bat.on("exit", (code) => {
            console.log("See you later, alligator");
            var back = "../../" + bal.src;
            process.chdir(back);
            setTimeout(() => {
                if (bal.slv != null)
                    bal.slv({ wrkBit: { idx: "publish-worker" } });
            }, 3333);
            //process.exit();
        });
        //now publish to cloudflare
    })
        .catch(() => process.exit(1));
    return cpy;
};
exports.publishWorker = publishWorker;
const deleteWorker = async (cpy, bal, ste) => {
    var doT = require("dot");
    var env = require("dotenv").config();
    var headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.CLOUDFLAREWORKERSAPI,
    };
    console.log("get ready to delete " + bal.src);
    var url = "https://api.cloudflare.com/client/v4/accounts/" + process.env.CLOUDFLARE_ACCOUNT + "/workers/scripts/" + bal.src;
    var pak = { method: "DELETE", headers };
    var now = await fetch(url, pak).catch((error) => {
        console.log("error  " + error);
        //bal.slv({ wrkBit: { idx: "list-worker-error", src: error } }));
    });
    bal.slv({ wrkBit: { idx: "delete-worker" } });
    return cpy;
};
exports.deleteWorker = deleteWorker;
const listWorker = (cpy, bal, ste) => {
    var doT = require("dot");
    var env = require("dotenv").config();
    var headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.CLOUDFLAREWORKERSAPI,
    };
    var url = "https://api.cloudflare.com/client/v4/accounts/" + process.env.CLOUDFLARE_ACCOUNT + "/workers/scripts";
    var pak = { method: "GET", headers };
    fetch(url, pak)
        .then((res) => {
        return res.json();
    })
        .then(async (dat) => {
        var lst = [];
        dat.result.forEach((a) => {
            lst.push(a.id);
        });
        bal.slv({ wrkBit: { idx: "list-worker", lst } });
    })
        .catch((error) => bal.slv({ wrkBit: { idx: "list-worker-error", src: error } }));
    return cpy;
};
exports.listWorker = listWorker;
const updateWorker = (cpy, bal, ste) => {
    return cpy;
};
exports.updateWorker = updateWorker;
const FS = require("fs-extra");
const S = require("string");
//# sourceMappingURL=worker.buzz.js.map