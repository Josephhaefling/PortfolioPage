"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var styles_js_1 = __importDefault(require("./styles/styles.js"));
var Header = function () {
    var styles = styles_js_1["default"]();
    var appBar = styles.appBar, heading = styles.heading;
    return (react_1["default"].createElement(core_1.AppBar, { className: appBar, position: "static", color: "inherit" },
        react_1["default"].createElement(core_1.Typography, { className: heading, variant: "h2", align: "center" }, "Mean Bean Development")));
};
exports["default"] = Header;
