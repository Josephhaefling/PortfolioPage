"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var styles_js_1 = require("../styles/styles.js");
var NewButton = function (props) {
    var styles = styles_js_1["default"]();
    var type = props.type;
    return (props.src ? (react_1["default"].createElement(core_1.Link, { className: styles.link },
        react_1["default"].createElement("img", { src: props.src, alt: type + "-button" }),
        type)) : (react_1["default"].createElement(core_1.Button, null, type)));
};
exports["default"] = NewButton;
