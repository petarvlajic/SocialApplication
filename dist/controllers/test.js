"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
// @desc   Test Route
// @route  GET /
// @access Public
const test = (req, res) => {
    let msg = "Hello World";
    res.status(200).json(msg);
};
exports.test = test;
//# sourceMappingURL=test.js.map