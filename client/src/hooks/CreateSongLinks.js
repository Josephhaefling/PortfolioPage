"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var songs_1 = require("../actions/songs");
//images
var record_image_jpeg_1 = __importDefault(require("../assets/record-image.jpeg"));
var button_1 = __importDefault(require("../components/Button/button"));
var SongLinks = function () {
    var dispatch = react_redux_1.useDispatch();
    var songs = react_redux_1.useSelector(function (state) { return state.songs; });
    var songLinks = songs.map(function (song) {
        var title = song.title, url = song.url;
        return (react_1["default"].createElement(button_1["default"], { type: title, src: record_image_jpeg_1["default"], url: url, key: url }));
    });
    react_1.useEffect(function () {
        dispatch(songs_1.getSongs());
    }, [dispatch]);
    return songLinks;
};
exports["default"] = SongLinks;
