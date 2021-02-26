"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var DropDownMenu = function () {
    var open = false;
    var handleClick = function () {
        open ? open = false : open = true;
    };
    return (react_1["default"].createElement("section", null,
        react_1["default"].createElement(core_1.Button, { "aria-controls": "simple-menu", "aria-haspopup": "true", onClick: handleClick }, "Open Menu")));
};
exports["default"] = DropDownMenu;
