"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var styles_1 = __importDefault(require("../../styles/styles"));
var RecipePage = function () {
    var classes = styles_1["default"]();
    return (react_1["default"].createElement(core_1.Grow, { "in": true },
        react_1["default"].createElement(core_1.Container, null,
            react_1["default"].createElement(core_1.Typography, { className: classes.whatsUp, variant: "h6", align: "center" }, "Recipes"),
            react_1["default"].createElement(core_1.Grid, { container: true, justify: "space-between", alignItems: "stretch", spacing: 3 }))));
};
exports["default"] = RecipePage;
