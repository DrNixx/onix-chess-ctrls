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
return webpackJsonpOnixChessCtrls([2],{

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var onix_core_1 = __webpack_require__(13);
onix_core_1.Intl.registerStrings('chess-ctrls', {
    'en-us': {
        set_board: "Set the board",
        position_label: "-- Position --",
        std_fen: "Standart start",
        empty_fen: "Empty board",
        get_fen: "Custom position",
        paste_fen_prompt: "Paste FEN position",
        popular_opening: "Popular openings"
    }
});
window.alert("en-us");


/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(291);


/***/ })

},[602]);
});
//# sourceMappingURL=chess-ctrls.msg-en.js.map