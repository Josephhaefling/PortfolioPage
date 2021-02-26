"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var FindSong = function (title) {
    var dispatch = react_redux_1.useDispatch();
    var songs = react_redux_1.useSelector(function (state) { return state.songs; });
    var currentSong = songs.find(function (song) { return song.title === title; });
    return currentSong;
};
exports["default"] = FindSong;
