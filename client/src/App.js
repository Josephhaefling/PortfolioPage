"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var favorites_1 = require("./actions/favorites");
var blogs_1 = require("./actions/blogs");
var core_1 = require("@material-ui/core");
var styles_1 = require("./styles");
var food_jpeg_1 = require("./assets/food.jpeg");
// import NewBlogForm from './components/newBlogForm'
var header_1 = require("./components/header");
var button_1 = require("./components/dumbComponents/button");
function App() {
    var dispatch = react_redux_1.useDispatch();
    var classes = styles_1["default"]();
    react_1.useEffect(function () {
        dispatch(favorites_1.getFavorites());
        dispatch(blogs_1.getBlogs());
    }, [dispatch]);
    var Blogs = function () {
        var blogs = react_redux_1.useSelector(function (state) {
            return state.blogs;
        });
        return blogs;
    };
    return (react_1["default"].createElement(react_router_dom_1.Switch, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/", render: function () {
                return (react_1["default"].createElement("div", null,
                    react_1["default"].createElement(core_1.Container, null,
                        react_1["default"].createElement(header_1["default"], null),
                        react_1["default"].createElement(core_1.Grow, { "in": true },
                            react_1["default"].createElement(core_1.Container, null,
                                react_1["default"].createElement(core_1.Typography, { className: classes.whatsUp, variant: "h6", align: "center" }, "Welcome! What are you interested in today?"),
                                react_1["default"].createElement(core_1.Grid, { container: true, justify: "space-between", alignItems: "stretch", spacing: 3 },
                                    react_1["default"].createElement(button_1["default"], { type: "Technical Blogs", src: food_jpeg_1["default"] }),
                                    react_1["default"].createElement(button_1["default"], { type: "Projects", src: food_jpeg_1["default"] }),
                                    react_1["default"].createElement(button_1["default"], { type: "Recipes", src: food_jpeg_1["default"] }),
                                    react_1["default"].createElement(button_1["default"], { type: "Music", src: food_jpeg_1["default"] })))))));
            } }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: "/recipes", render: function () {
                return (react_1["default"].createElement("div", null,
                    react_1["default"].createElement(core_1.Container, null,
                        react_1["default"].createElement(header_1["default"], null),
                        react_1["default"].createElement(core_1.Grow, { "in": true },
                            react_1["default"].createElement(core_1.Container, null,
                                react_1["default"].createElement(core_1.Typography, { className: classes.whatsUp, variant: "h6", align: "center" }, "Recipes"),
                                react_1["default"].createElement(core_1.Grid, { container: true, justify: "space-between", alignItems: "stretch", spacing: 3 }))))));
            } })));
}
exports["default"] = App;
