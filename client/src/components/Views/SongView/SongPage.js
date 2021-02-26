"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var react_player_1 = __importDefault(require("react-player"));
var FindSong_1 = __importDefault(require("../../../hooks/FindSong"));
var button_1 = __importDefault(require("../../Button/button"));
var SongPage = function (props) {
    var songTitle = props.title;
    var song = FindSong_1["default"](songTitle);
    var url = song.url, title = song.title, description = song.description;
    return (react_1["default"].createElement(core_1.Grow, { "in": true },
        react_1["default"].createElement(core_1.Container, null,
            react_1["default"].createElement(core_1.Grid, { container: true, justify: "space-between", alignItems: "stretch", spacing: 3 },
                react_1["default"].createElement(react_player_1["default"], { className: "thing", url: url, controls: true, playing: false })),
            react_1["default"].createElement(core_1.Typography, { className: "thing", variant: "h6", align: "center" }, title),
            react_1["default"].createElement(core_1.Typography, { className: "thing", variant: "body1", align: "center" }, description.genres),
            react_1["default"].createElement(button_1["default"], { type: "Music", src: "", url: "Music" }))));
};
exports["default"] = SongPage;
