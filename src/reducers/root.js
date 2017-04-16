"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_immutable_1 = require("redux-immutable");
var react_router_redux_1 = require("react-router-redux");
var immutable_1 = require("redux-form/immutable");
var makeRootReducer = function () {
    return redux_immutable_1.combineReducers({
        router: react_router_redux_1.routerReducer,
        form: immutable_1.reducer
    });
};
exports.default = makeRootReducer;
