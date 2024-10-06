var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return '[$(name)]: Typescript version is ${this.version}';
    };
    return Typescript;
}());
