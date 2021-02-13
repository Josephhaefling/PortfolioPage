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
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var core_1 = require("@material-ui/core");
var styles_1 = __importDefault(require("./styles"));
var favorites_1 = require("./actions/favorites");
var blogs_1 = require("./actions/blogs");
var header_1 = __importDefault(require("./components/header"));
var MainPage_1 = __importDefault(require("./components/Views/MainView/MainPage"));
var RecipesPage_1 = __importDefault(require("./components/Views/RecipesView/RecipesPage"));
function App() {
    var dispatch = react_redux_1.useDispatch();
    var classes = styles_1["default"]();
    react_1.useEffect(function () {
        dispatch(favorites_1.getFavorites());
        dispatch(blogs_1.getBlogs());
    }, [dispatch]);
    var Blogs = function () {
        var blogs = react_redux_1.useSelector(function (state) { return state.blogs; });
        return blogs;
    };
    return (react_1["default"].createElement(react_router_dom_1.Switch, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/recipes", render: function () {
                return (react_1["default"].createElement(core_1.Container, null,
                    react_1["default"].createElement(header_1["default"], null),
                    react_1["default"].createElement(RecipesPage_1["default"], null)));
            } }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/projects", render: function () {
                return (react_1["default"].createElement(core_1.Container, null,
                    react_1["default"].createElement(header_1["default"], null),
                    react_1["default"].createElement(RecipesPage_1["default"], null)));
            } }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/technical blogs", render: function () {
                return (react_1["default"].createElement(core_1.Container, null,
                    react_1["default"].createElement(header_1["default"], null),
                    react_1["default"].createElement(RecipesPage_1["default"], null)));
            } }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/music", render: function () {
                return (react_1["default"].createElement(core_1.Container, null,
                    react_1["default"].createElement(header_1["default"], null),
                    react_1["default"].createElement(RecipesPage_1["default"], null)));
            } }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", render: function () {
                return (react_1["default"].createElement(core_1.Container, null,
                    react_1["default"].createElement(header_1["default"], null),
                    react_1["default"].createElement(MainPage_1["default"], null)));
            } })));
}
exports["default"] = App;
