"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.component = void 0;
const schematics_1 = require("@angular-devkit/schematics");
function component(options) {
    return (_host, _context) => {
        return (0, schematics_1.chain)([
            (0, schematics_1.externalSchematic)('@schematics/angular', 'component', options),
        ])(_host, _context);
    };
}
exports.component = component;
//# sourceMappingURL=index.js.map