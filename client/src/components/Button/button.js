"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var styles_js_1 = __importDefault(require("../styles/styles.js"));
var NewButton = function (props) {
    var styles = styles_js_1["default"]();
    var type = props.type, url = props.url;
    return (react_1["default"].createElement(react_router_dom_1.Link, { className: styles.link, to: "/" + type, key: url, "aria-label": type + " page", style: { textDecoration: "none" } },
        react_1["default"].createElement("img", { src: props.src, alt: type + "-button" }),
        type));
};
exports["default"] = NewButton;
