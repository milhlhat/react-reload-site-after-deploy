// const Compilation = require("webpack/lib/Compilation");
// import { Compilation } from "webpack";
class AlertUpdateVersionPlugin {
    options;
    FILE_PATH = '/buildVersion.txt';
    constructor(options) {
        this.options = options || {path: ''};
        this.FILE_PATH = this.options.path + this.FILE_PATH;
    }
    // apply(compiler: Compiler) {
    apply(compiler) {
        // alert after build production finished
        compiler.hooks.done.tap('AlertUpdateVersionPlugin', (modules) => {
            const fs = require('fs');
            fs.writeFile(this.FILE_PATH,
                Number(new Date()).toString(),
                function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.info("✅ Generate builtVersion success!");
                }
            );

        });
    }
}
module.exports = AlertUpdateVersionPlugin;