"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var joesPortfolioFood_png_1 = __importDefault(require("../../../assets/joesPortfolioFood.png"));
var record_image_jpeg_1 = __importDefault(require("../../../assets/record-image.jpeg"));
var core_1 = require("@material-ui/core");
var button_1 = __importDefault(require("../../Button/button"));
var MainPage = function () {
    return (react_1["default"].createElement(core_1.Grow, { "in": true },
        react_1["default"].createElement(core_1.Container, null,
            react_1["default"].createElement(core_1.Grid, { container: true, justify: "space-between", alignItems: "stretch", spacing: 3 },
                react_1["default"].createElement(button_1["default"], { type: "Technical Blogs", src: record_image_jpeg_1["default"], url: "Technical Blogs" }),
                react_1["default"].createElement(button_1["default"], { type: "Projects", src: record_image_jpeg_1["default"], url: "Projects" }),
                react_1["default"].createElement(button_1["default"], { type: "Recipes", src: joesPortfolioFood_png_1["default"], url: "Recipes" }),
                react_1["default"].createElement(button_1["default"], { type: "Music", src: record_image_jpeg_1["default"], url: "Music" })))));
};
exports["default"] = MainPage;
