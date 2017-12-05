"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Foo = /** @class */ (function () {
    function Foo() {
        this.thing = 'yar';
    }
    Foo.prototype.bar = function () {
        return Promise.resolve(this.thing);
    };
    return Foo;
}());
exports.default = Foo;
//# sourceMappingURL=foo.js.map