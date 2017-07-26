(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["OnixChessCtrls"] = factory();
	else
		root["OnixChessCtrls"] = factory();
})(this, function() {
return webpackJsonpOnixChessCtrls([1],{

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PieceSelectorTest_1 = __webpack_require__(210);
exports.PieceSelectorTest = PieceSelectorTest_1.PieceSelectorTest;
var SquareSelectorTest_1 = __webpack_require__(212);
exports.SquareSelectorTest = SquareSelectorTest_1.SquareSelectorTest;
var PositionSelectorTest_1 = __webpack_require__(211);
exports.PositionSelectorTest = PositionSelectorTest_1.PositionSelectorTest;
var WhoMoveSelectorTest_1 = __webpack_require__(213);
exports.WhoMoveSelectorTest = WhoMoveSelectorTest_1.WhoMoveSelectorTest;


/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(16);
var PieceSelector_1 = __webpack_require__(112);
exports.PieceSelectorTest = function (props, container) {
    ReactDOM.render(React.createElement(PieceSelector_1.PieceSelector, props), container, function () { });
};


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(16);
var StartPosSelector_1 = __webpack_require__(114);
exports.PositionSelectorTest = function (props, container) {
    ReactDOM.render(React.createElement(StartPosSelector_1.StartPosSelector, props), container, function () { });
};


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(16);
var SquareSelector_1 = __webpack_require__(113);
exports.SquareSelectorTest = function (props, container) {
    ReactDOM.render(React.createElement(SquareSelector_1.SquareSelector, props), container, function () { });
};


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(16);
var WhoMoveSelector_1 = __webpack_require__(115);
exports.WhoMoveSelectorTest = function (props, container) {
    ReactDOM.render(React.createElement(WhoMoveSelector_1.WhoMoveSelector, props), container, function () { });
};


/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(207);


/***/ })

},[540]);
});
//# sourceMappingURL=chess-ctrls.tests.js.map