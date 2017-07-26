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

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PieceSelectorTest_1 = __webpack_require__(256);
exports.PieceSelectorTest = PieceSelectorTest_1.PieceSelectorTest;
var SquareSelectorTest_1 = __webpack_require__(258);
exports.SquareSelectorTest = SquareSelectorTest_1.SquareSelectorTest;
var PositionSelectorTest_1 = __webpack_require__(257);
exports.PositionSelectorTest = PositionSelectorTest_1.PositionSelectorTest;
var WhoMoveSelectorTest_1 = __webpack_require__(259);
exports.WhoMoveSelectorTest = WhoMoveSelectorTest_1.WhoMoveSelectorTest;


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var ReactDOM = __webpack_require__(32);
var PieceSelector_1 = __webpack_require__(143);
exports.PieceSelectorTest = function (props, container) {
    ReactDOM.render(React.createElement(PieceSelector_1.PieceSelector, props), container, function () { });
};


/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var ReactDOM = __webpack_require__(32);
var StartPosSelector_1 = __webpack_require__(145);
exports.PositionSelectorTest = function (props, container) {
    ReactDOM.render(React.createElement(StartPosSelector_1.StartPosSelector, props), container, function () { });
};


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var ReactDOM = __webpack_require__(32);
var SquareSelector_1 = __webpack_require__(144);
exports.SquareSelectorTest = function (props, container) {
    ReactDOM.render(React.createElement(SquareSelector_1.SquareSelector, props), container, function () { });
};


/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var ReactDOM = __webpack_require__(32);
var WhoMoveSelector_1 = __webpack_require__(146);
exports.WhoMoveSelectorTest = function (props, container) {
    ReactDOM.render(React.createElement(WhoMoveSelector_1.WhoMoveSelector, props), container, function () { });
};


/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(253);


/***/ })

},[601]);
});
//# sourceMappingURL=chess-ctrls.tests.js.map