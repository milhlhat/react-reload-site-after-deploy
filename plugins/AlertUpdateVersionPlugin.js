/** @typedef {import("fs") } fs */

// const Compilation = require("webpack/lib/Compilation");
// import { Compilation } from "webpack";
class AlertUpdateVersionPlugin {
    options;
    FILE_PATH = '/builtVersion.txt';
    constructor(options) {
        this.options = options || {
            isGenerate: true,
            path: '',
        };
        this.FILE_PATH = this.options.path + this.FILE_PATH;
    }
    // apply(compiler: Compiler) {
    apply(compiler) {
        console.info("AlertUpdateVersionPlugin is running...");
        // alert after build production finished
        compiler.hooks.afterCompile.tap('AlertUpdateVersionPlugin', (modules) => {

            const fs = require('fs');
            fs.writeFile(this.FILE_PATH,
                Number(new Date()).toString(),
                function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("Generate builtVersion success!");
                }
            );

        });
    }
}
module.exports = AlertUpdateVersionPlugin;