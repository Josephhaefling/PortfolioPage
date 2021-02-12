"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var food_jpeg_1 = __importDefault(require("../../../assets/food.jpeg"));
var core_1 = require("@material-ui/core");
var button_1 = __importDefault(require("../../Button/button"));
var MainPage = function () {
    return (react_1["default"].createElement(core_1.Grow, { "in": true },
        react_1["default"].createElement(core_1.Container, null,
            react_1["default"].createElement(core_1.Grid, { container: true, justify: "space-between", alignItems: "stretch", spacing: 3 },
                react_1["default"].createElement(button_1["default"], { type: "Technical Blogs", src: food_jpeg_1["default"] }),
                react_1["default"].createElement(button_1["default"], { type: "Projects", src: food_jpeg_1["default"] }),
                react_1["default"].createElement(button_1["default"], { type: "Recipes", src: food_jpeg_1["default"] }),
                react_1["default"].createElement(button_1["default"], { type: "Music", src: food_jpeg_1["default"] })))));
};
exports["default"] = MainPage;
