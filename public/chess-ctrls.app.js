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
return webpackJsonpOnixChessCtrls([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(48),
    getPrototype = __webpack_require__(272),
    isObjectLike = __webpack_require__(34);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(132),
    overRest = __webpack_require__(299),
    setToString = __webpack_require__(302);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(129);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// ===================== Types =======================
/** @returns object string name (using Object.prototype.toString.call) */
exports.getType = function (x) {
    return Object.prototype.toString.call(x);
};
/** @returns true if object is number */
exports.isNumber = function (x) {
    return exports.getType(x) === "[object Number]";
};
/** @returns true if object is string */
exports.isString = function (x) {
    return exports.getType(x) === "[object String]";
};
/** @returns true if object is Date */
exports.isDate = function (x) {
    return exports.getType(x) === "[object Date]";
};
/** @returns true if object is function */
exports.isFunction = function (x) {
    return exports.getType(x) === "[object Function]";
};
/** @returns true if object is array */
exports.isArray = function (x) {
    return exports.getType(x) === "[object Array]";
};
/** @return true if object is empty object  */
exports.isEmptyObject = function (obj) {
    var name;
    for (name in obj) {
        return false;
    }
    return true;
};


/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.END_DRAG = exports.DROP = exports.HOVER = exports.PUBLISH_DRAG_SOURCE = exports.BEGIN_DRAG = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.beginDrag = beginDrag;
exports.publishDragSource = publishDragSource;
exports.hover = hover;
exports.drop = drop;
exports.endDrag = endDrag;

var _invariant = __webpack_require__(9);

var _invariant2 = _interopRequireDefault(_invariant);

var _isArray = __webpack_require__(20);

var _isArray2 = _interopRequireDefault(_isArray);

var _isObject = __webpack_require__(33);

var _isObject2 = _interopRequireDefault(_isObject);

var _matchesType = __webpack_require__(118);

var _matchesType2 = _interopRequireDefault(_matchesType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BEGIN_DRAG = exports.BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
var PUBLISH_DRAG_SOURCE = exports.PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
var HOVER = exports.HOVER = 'dnd-core/HOVER';
var DROP = exports.DROP = 'dnd-core/DROP';
var END_DRAG = exports.END_DRAG = 'dnd-core/END_DRAG';

function beginDrag(sourceIds) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { publishSource: true, clientOffset: null };
  var publishSource = options.publishSource,
      clientOffset = options.clientOffset,
      getSourceClientOffset = options.getSourceClientOffset;

  (0, _invariant2.default)((0, _isArray2.default)(sourceIds), 'Expected sourceIds to be an array.');

  var monitor = this.getMonitor();
  var registry = this.getRegistry();
  (0, _invariant2.default)(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');

  for (var i = 0; i < sourceIds.length; i++) {
    (0, _invariant2.default)(registry.getSource(sourceIds[i]), 'Expected sourceIds to be registered.');
  }

  var sourceId = null;
  for (var _i = sourceIds.length - 1; _i >= 0; _i--) {
    if (monitor.canDragSource(sourceIds[_i])) {
      sourceId = sourceIds[_i];
      break;
    }
  }
  if (sourceId === null) {
    return;
  }

  var sourceClientOffset = null;
  if (clientOffset) {
    (0, _invariant2.default)(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
    sourceClientOffset = getSourceClientOffset(sourceId);
  }

  var source = registry.getSource(sourceId);
  var item = source.beginDrag(monitor, sourceId);
  (0, _invariant2.default)((0, _isObject2.default)(item), 'Item must be an object.');

  registry.pinSource(sourceId);

  var itemType = registry.getSourceType(sourceId);
  return {
    type: BEGIN_DRAG,
    itemType: itemType,
    item: item,
    sourceId: sourceId,
    clientOffset: clientOffset,
    sourceClientOffset: sourceClientOffset,
    isSourcePublic: publishSource
  };
}

function publishDragSource() {
  var monitor = this.getMonitor();
  if (!monitor.isDragging()) {
    return;
  }

  return { type: PUBLISH_DRAG_SOURCE };
}

function hover(targetIdsArg) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$clientOffset = _ref.clientOffset,
      clientOffset = _ref$clientOffset === undefined ? null : _ref$clientOffset;

  (0, _invariant2.default)((0, _isArray2.default)(targetIdsArg), 'Expected targetIds to be an array.');
  var targetIds = targetIdsArg.slice(0);

  var monitor = this.getMonitor();
  var registry = this.getRegistry();
  (0, _invariant2.default)(monitor.isDragging(), 'Cannot call hover while not dragging.');
  (0, _invariant2.default)(!monitor.didDrop(), 'Cannot call hover after drop.');

  // First check invariants.
  for (var i = 0; i < targetIds.length; i++) {
    var targetId = targetIds[i];
    (0, _invariant2.default)(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');

    var target = registry.getTarget(targetId);
    (0, _invariant2.default)(target, 'Expected targetIds to be registered.');
  }

  var draggedItemType = monitor.getItemType();

  // Remove those targetIds that don't match the targetType.  This
  // fixes shallow isOver which would only be non-shallow because of
  // non-matching targets.
  for (var _i2 = targetIds.length - 1; _i2 >= 0; _i2--) {
    var _targetId = targetIds[_i2];
    var targetType = registry.getTargetType(_targetId);
    if (!(0, _matchesType2.default)(targetType, draggedItemType)) {
      targetIds.splice(_i2, 1);
    }
  }

  // Finally call hover on all matching targets.
  for (var _i3 = 0; _i3 < targetIds.length; _i3++) {
    var _targetId2 = targetIds[_i3];
    var _target = registry.getTarget(_targetId2);
    _target.hover(monitor, _targetId2);
  }

  return {
    type: HOVER,
    targetIds: targetIds,
    clientOffset: clientOffset
  };
}

function drop() {
  var _this = this;

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var monitor = this.getMonitor();
  var registry = this.getRegistry();
  (0, _invariant2.default)(monitor.isDragging(), 'Cannot call drop while not dragging.');
  (0, _invariant2.default)(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');

  var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);

  targetIds.reverse();
  targetIds.forEach(function (targetId, index) {
    var target = registry.getTarget(targetId);

    var dropResult = target.drop(monitor, targetId);
    (0, _invariant2.default)(typeof dropResult === 'undefined' || (0, _isObject2.default)(dropResult), 'Drop result must either be an object or undefined.');
    if (typeof dropResult === 'undefined') {
      dropResult = index === 0 ? {} : monitor.getDropResult();
    }

    _this.store.dispatch({
      type: DROP,
      dropResult: _extends({}, options, dropResult)
    });
  });
}

function endDrag() {
  var monitor = this.getMonitor();
  var registry = this.getRegistry();
  (0, _invariant2.default)(monitor.isDragging(), 'Cannot call endDrag while not dragging.');

  var sourceId = monitor.getSourceId();
  var source = registry.getSource(sourceId, true);
  source.endDrag(monitor, sourceId);

  registry.unpinSource();

  return { type: END_DRAG };
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSource = addSource;
exports.addTarget = addTarget;
exports.removeSource = removeSource;
exports.removeTarget = removeTarget;
var ADD_SOURCE = exports.ADD_SOURCE = 'dnd-core/ADD_SOURCE';
var ADD_TARGET = exports.ADD_TARGET = 'dnd-core/ADD_TARGET';
var REMOVE_SOURCE = exports.REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
var REMOVE_TARGET = exports.REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';

function addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    sourceId: sourceId
  };
}

function addTarget(targetId) {
  return {
    type: ADD_TARGET,
    targetId: targetId
  };
}

function removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    sourceId: sourceId
  };
}

function removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    targetId: targetId
  };
}

/***/ }),
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(52);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(73),
    getRawTag = __webpack_require__(273),
    objectToString = __webpack_require__(297);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(282);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(260),
    getValue = __webpack_require__(274);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(50);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(79),
    isObjectLike = __webpack_require__(34);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_POSITION = 'SET_POSITION';
exports.SET_FEN = 'SET_FEN';
exports.SET_SELECTION = 'SET_SELECTION';
exports.SET_CASTLE = 'SET_CASTLE';
exports.SET_MOVENO = 'SET_MOVENO';
exports.WHO_MOVE = 'WHO_MOVE';
exports.SET_EP = 'SET_EP';
exports.CLEAR_BOARD = 'CLEAR_BOARD';
exports.STD_START = 'STD_START';
exports.FLIP_BOARD = 'FLIP_BOARD';
exports.SET_COORDS = 'SET_COORDS';
exports.SET_FRAME = 'SET_FRAME';
exports.SET_MOVETURN = 'SET_MOVETURN';
exports.UDPATE_BOARD = 'UDPATE_BOARD';
exports.CHANGE_SIZE = 'CHANGE_SIZE';
exports.SET_PIECE = 'SET_PIECE';
exports.SET_SQUARE = 'SET_SQUARE';
exports.BOARD_CLICK = 'BOARD_CLICK';
exports.BOARD_MOVE = 'BOARD_MOVE';


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageSize = [20, 20, 30, 40, 50, 60, 80];
exports.BoardSizeClass = ["size1", "size1", "size2", "size3", "size4", "size5", "size6"];
/**
 * Размеры доски
 */
var BoardSize;
(function (BoardSize) {
    BoardSize[BoardSize["None"] = 0] = "None";
    BoardSize[BoardSize["Tiny"] = 1] = "Tiny";
    BoardSize[BoardSize["Small"] = 2] = "Small";
    BoardSize[BoardSize["Smallest"] = 3] = "Smallest";
    BoardSize[BoardSize["Normal"] = 4] = "Normal";
    BoardSize[BoardSize["Largest"] = 5] = "Largest";
    BoardSize[BoardSize["Large"] = 6] = "Large";
})(BoardSize = exports.BoardSize || (exports.BoardSize = {}));
/**
 * Режимы работы доски
 */
var BoardMode;
(function (BoardMode) {
    BoardMode[BoardMode["Setup"] = 0] = "Setup";
    BoardMode[BoardMode["Static"] = 1] = "Static";
    BoardMode[BoardMode["Pgn"] = 2] = "Pgn";
    BoardMode[BoardMode["Exam"] = 3] = "Exam";
    BoardMode[BoardMode["Observe"] = 4] = "Observe";
    BoardMode[BoardMode["Analyze"] = 5] = "Analyze";
    BoardMode[BoardMode["Play"] = 6] = "Play";
})(BoardMode = exports.BoardMode || (exports.BoardMode = {}));
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Vertical"] = 0] = "Vertical";
    Orientation[Orientation["Horizontal"] = 1] = "Horizontal";
})(Orientation = exports.Orientation || (exports.Orientation = {}));


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(35));
__export(__webpack_require__(334));
__export(__webpack_require__(347));
__export(__webpack_require__(341));
__export(__webpack_require__(337));
__export(__webpack_require__(349));
__export(__webpack_require__(331));
var Logger_1 = __webpack_require__(329);
exports.Logger = Logger_1.Logger;
var Intl_1 = __webpack_require__(328);
exports.Intl = Intl_1.Intl;


/***/ }),
/* 57 */,
/* 58 */,
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkDecoratorArguments;
function checkDecoratorArguments(functionName, signature) {
  if (process.env.NODE_ENV !== 'production') {
    for (var i = 0; i < (arguments.length <= 2 ? 0 : arguments.length - 2); i += 1) {
      var arg = arguments.length <= i + 2 ? undefined : arguments[i + 2];
      if (arg && arg.prototype && arg.prototype.render) {
        console.error( // eslint-disable-line no-console
        'You seem to be applying the arguments in the wrong order. ' + ('It should be ' + functionName + '(' + signature + ')(Component), not the other way around. ') + 'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#you-seem-to-be-applying-the-arguments-in-the-wrong-order');
        return;
      }
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = isDisposable;

function isDisposable(obj) {
  return Boolean(obj && typeof obj.dispose === 'function');
}

module.exports = exports['default'];

/***/ }),
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(122),
    setCacheAdd = __webpack_require__(300),
    setCacheHas = __webpack_require__(301);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(32);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(256);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(134),
    isLength = __webpack_require__(135);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.intVal = function (mixed_var, base) {
    base = base || 10;
    if (typeof mixed_var === "string") {
        var tmp = parseInt(mixed_var, base);
        if (isNaN(tmp)) {
            return 0;
        }
        else {
            return tmp;
        }
    }
    else if (typeof mixed_var === "number") {
        return Math.floor(mixed_var);
    }
    else {
        return 0;
    }
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.pad = function (str, len, chr, leftJustify) {
    var padding = (str.length >= len) ? '' : Array(1 + len - str.length >>> 0).join(chr);
    return leftJustify ? str + padding : padding + str;
};


/***/ }),
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FILE = exports.FILE = '__NATIVE_FILE__';
var URL = exports.URL = '__NATIVE_URL__';
var TEXT = exports.TEXT = '__NATIVE_TEXT__';

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DragDropContext = __webpack_require__(172);

Object.defineProperty(exports, 'DragDropContext', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DragDropContext).default;
  }
});

var _DragDropContextProvider = __webpack_require__(431);

Object.defineProperty(exports, 'DragDropContextProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DragDropContextProvider).default;
  }
});

var _DragLayer = __webpack_require__(432);

Object.defineProperty(exports, 'DragLayer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DragLayer).default;
  }
});

var _DragSource = __webpack_require__(433);

Object.defineProperty(exports, 'DragSource', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DragSource).default;
  }
});

var _DropTarget = __webpack_require__(434);

Object.defineProperty(exports, 'DropTarget', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DropTarget).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shallowEqual;
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var hasOwn = Object.prototype.hasOwnProperty;
  for (var i = 0; i < keysA.length; i += 1) {
    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }

    var valA = objA[keysA[i]];
    var valB = objB[keysA[i]];

    if (valA !== valB) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dirtyHandlerIds;
exports.areDirty = areDirty;

var _xor = __webpack_require__(316);

var _xor2 = _interopRequireDefault(_xor);

var _intersection = __webpack_require__(309);

var _intersection2 = _interopRequireDefault(_intersection);

var _dragDrop = __webpack_require__(44);

var _registry = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NONE = [];
var ALL = [];

function dirtyHandlerIds() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NONE;
  var action = arguments[1];
  var dragOperation = arguments[2];

  switch (action.type) {
    case _dragDrop.HOVER:
      break;
    case _registry.ADD_SOURCE:
    case _registry.ADD_TARGET:
    case _registry.REMOVE_TARGET:
    case _registry.REMOVE_SOURCE:
      return NONE;
    case _dragDrop.BEGIN_DRAG:
    case _dragDrop.PUBLISH_DRAG_SOURCE:
    case _dragDrop.END_DRAG:
    case _dragDrop.DROP:
    default:
      return ALL;
  }

  var targetIds = action.targetIds;
  var prevTargetIds = dragOperation.targetIds;

  var result = (0, _xor2.default)(targetIds, prevTargetIds);

  var didChange = false;
  if (result.length === 0) {
    for (var i = 0; i < targetIds.length; i++) {
      if (targetIds[i] !== prevTargetIds[i]) {
        didChange = true;
        break;
      }
    }
  } else {
    didChange = true;
  }

  if (!didChange) {
    return NONE;
  }

  var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
  var innermostTargetId = targetIds[targetIds.length - 1];

  if (prevInnermostTargetId !== innermostTargetId) {
    if (prevInnermostTargetId) {
      result.push(prevInnermostTargetId);
    }
    if (innermostTargetId) {
      result.push(innermostTargetId);
    }
  }

  return result;
}

function areDirty(state, handlerIds) {
  if (state === NONE) {
    return false;
  }

  if (state === ALL || typeof handlerIds === 'undefined') {
    return true;
  }

  return (0, _intersection2.default)(handlerIds, state).length > 0;
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = dragOffset;
exports.getSourceClientOffset = getSourceClientOffset;
exports.getDifferenceFromInitialOffset = getDifferenceFromInitialOffset;

var _dragDrop = __webpack_require__(44);

var initialState = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};

function areOffsetsEqual(offsetA, offsetB) {
  if (offsetA === offsetB) {
    return true;
  }
  return offsetA && offsetB && offsetA.x === offsetB.x && offsetA.y === offsetB.y;
}

function dragOffset() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _dragDrop.BEGIN_DRAG:
      return {
        initialSourceClientOffset: action.sourceClientOffset,
        initialClientOffset: action.clientOffset,
        clientOffset: action.clientOffset
      };
    case _dragDrop.HOVER:
      if (areOffsetsEqual(state.clientOffset, action.clientOffset)) {
        return state;
      }
      return _extends({}, state, {
        clientOffset: action.clientOffset
      });
    case _dragDrop.END_DRAG:
    case _dragDrop.DROP:
      return initialState;
    default:
      return state;
  }
}

function getSourceClientOffset(state) {
  var clientOffset = state.clientOffset,
      initialClientOffset = state.initialClientOffset,
      initialSourceClientOffset = state.initialSourceClientOffset;

  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
    return null;
  }
  return {
    x: clientOffset.x + initialSourceClientOffset.x - initialClientOffset.x,
    y: clientOffset.y + initialSourceClientOffset.y - initialClientOffset.y
  };
}

function getDifferenceFromInitialOffset(state) {
  var clientOffset = state.clientOffset,
      initialClientOffset = state.initialClientOffset;

  if (!clientOffset || !initialClientOffset) {
    return null;
  }
  return {
    x: clientOffset.x - initialClientOffset.x,
    y: clientOffset.y - initialClientOffset.y
  };
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matchesType;

var _isArray = __webpack_require__(20);

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function matchesType(targetType, draggedItemType) {
  if ((0, _isArray2.default)(targetType)) {
    return targetType.some(function (t) {
      return t === draggedItemType;
    });
  } else {
    return targetType === draggedItemType;
  }
}

/***/ }),
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(290),
    mapCacheDelete = __webpack_require__(291),
    mapCacheGet = __webpack_require__(292),
    mapCacheHas = __webpack_require__(293),
    mapCacheSet = __webpack_require__(294);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(128);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(72),
    arrayIncludes = __webpack_require__(74),
    arrayIncludesWith = __webpack_require__(75),
    arrayMap = __webpack_require__(76),
    baseUnary = __webpack_require__(77),
    cacheHas = __webpack_require__(78);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(253),
    isFlattenable = __webpack_require__(280);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(72),
    arrayIncludes = __webpack_require__(74),
    arrayIncludesWith = __webpack_require__(75),
    cacheHas = __webpack_require__(78),
    createSet = __webpack_require__(270),
    setToArray = __webpack_require__(131);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(50);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(110)))

/***/ }),
/* 130 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 131 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(258),
    isObjectLike = __webpack_require__(34);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(48),
    isObject = __webpack_require__(33);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 135 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 136 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(125),
    baseRest = __webpack_require__(25),
    isArrayLikeObject = __webpack_require__(53);

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});

module.exports = without;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(16);
var react_dnd_1 = __webpack_require__(92);
var DumbPiece_1 = __webpack_require__(140);
var react_dnd_html5_backend_1 = __webpack_require__(429);
var boardActions = __webpack_require__(54);
exports.pieceSource = {
    canDrag: function (props) {
        return props.dnd && props.canMove;
    },
    beginDrag: function (props) {
        return {
            from: props.square,
            piece: props.piece
        };
    },
};
function collect(connect, monitor) {
    return {
        isDragging: monitor.isDragging(),
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview()
    };
}
var ChessPiece = (function (_super) {
    __extends(ChessPiece, _super);
    /**
     * constructor
     */
    function ChessPiece(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = function (e) {
            var _a = _this.props, store = _a.store, piece = _a.piece, square = _a.square;
            e.stopPropagation();
            e.preventDefault();
            store.dispatch({ type: boardActions.BOARD_CLICK, square: square, piece: piece });
        };
        return _this;
    }
    ChessPiece.prototype.componentDidMount = function () {
        var connectDragPreview = this.props.connectDragPreview;
        connectDragPreview(react_dnd_html5_backend_1.getEmptyImage(), { captureDraggingState: true });
    };
    ChessPiece.prototype.render = function () {
        var _a = this.props, connectDragSource = _a.connectDragSource, piece = _a.piece, canMove = _a.canMove, isDragging = _a.isDragging, selected = _a.selected;
        return (React.createElement(DumbPiece_1.DumbPiece, { piece: piece, canMove: canMove, isDragging: isDragging, selected: selected, onClick: this.onClick, ref: function (instance) { return connectDragSource(ReactDOM.findDOMNode(instance)); } }));
    };
    ChessPiece = __decorate([
        react_dnd_1.DragSource("DND_TYPES.PIECE", exports.pieceSource, collect),
        __metadata("design:paramtypes", [Object])
    ], ChessPiece);
    return ChessPiece;
}(React.Component));
exports.ChessPiece = ChessPiece;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(16);
var react_dnd_1 = __webpack_require__(92);
var onix_chess_1 = __webpack_require__(17);
var ChessPiece_1 = __webpack_require__(138);
var DumbSquare_1 = __webpack_require__(325);
var boardActions = __webpack_require__(54);
var onix_core_1 = __webpack_require__(56);
var squareTarget = {
    canDrop: function (props, monitor) {
        var draggedItem = monitor.getItem();
        var fromSquare = draggedItem.from;
        var toSquare = props.coord;
        var state = props.store.getState();
        return state.board.canMove(fromSquare, toSquare);
    },
    drop: function (props, monitor) {
        var draggedItem = monitor.getItem();
        var from = draggedItem.from, piece = draggedItem.piece;
        var to = props.coord;
        onix_core_1.Logger.debug("ChessSquare drop");
        var state = props.store.getState();
        props.store.dispatch({ type: boardActions.BOARD_MOVE, from: from, to: to, piece: piece });
    }
};
function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}
var ChessSquare = (function (_super) {
    __extends(ChessSquare, _super);
    /**
     * constructor
     */
    function ChessSquare(props) {
        var _this = _super.call(this, props) || this;
        _this.renderPiece = function () {
            var _a = _this.props, store = _a.store, piece = _a.piece, dnd = _a.dnd, coord = _a.coord;
            var state = store.getState();
            var _b = state.board, selection = _b.selection, canMove = _b.canMove;
            if ((piece !== null) && (piece !== onix_chess_1.Piece.NoPiece)) {
                var selected = (selection.from.square === coord) && (selection.from.piece === piece);
                return (React.createElement(ChessPiece_1.ChessPiece, { store: store, piece: piece, dnd: dnd, selected: selected, canMove: canMove(coord), square: coord }));
            }
        };
        _this.onClick = function (e) {
            var _a = _this.props, store = _a.store, coord = _a.coord, piece = _a.piece;
            e.stopPropagation();
            e.preventDefault();
            store.dispatch({ type: boardActions.BOARD_CLICK, square: coord, piece: piece });
        };
        return _this;
    }
    ChessSquare.prototype.render = function () {
        var _a = this.props, store = _a.store, legal = _a.legal, coord = _a.coord, piece = _a.piece;
        var _b = this.props, connectDropTarget = _b.connectDropTarget, isOver = _b.isOver, canDrop = _b.canDrop;
        var state = store.getState();
        var selection = state.board.selection;
        var _c = this.props, color = _c.color, name = _c.name;
        color = color || onix_chess_1.Square.color(coord);
        name = name || onix_chess_1.Square.squareName(coord);
        var classNames = [];
        if (isOver && canDrop) {
            classNames.push("square-from-to");
        }
        else if (!isOver && canDrop && legal) {
            classNames.push("square-can-move-to");
        }
        else {
            if ((selection.from.square !== onix_chess_1.Square.NullSquare) && (selection.from.square === coord)) {
                classNames.push("square-from-to");
            }
            if (selection.to && (selection.to.square !== onix_chess_1.Square.NullSquare) && (selection.to.square === coord)) {
                classNames.push("square-from-to");
            }
            if (selection.lastFrom && (selection.lastFrom.square !== onix_chess_1.Square.NullSquare) && (selection.lastFrom.square === coord)) {
                classNames.push("square-last-from-to");
            }
            if (selection.lastTo && (selection.lastTo.square !== onix_chess_1.Square.NullSquare) && (selection.lastTo.square === coord)) {
                classNames.push("square-last-from-to");
            }
        }
        return (React.createElement(DumbSquare_1.DumbSquare, { name: name, color: color, classNames: classNames, ref: function (instance) { return connectDropTarget(ReactDOM.findDOMNode(instance)); }, onClick: this.onClick }, this.renderPiece()));
    };
    ChessSquare = __decorate([
        react_dnd_1.DropTarget("DND_TYPES.PIECE", squareTarget, collect),
        __metadata("design:paramtypes", [Object])
    ], ChessSquare);
    return ChessSquare;
}(React.Component));
exports.ChessSquare = ChessSquare;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var onix_chess_1 = __webpack_require__(17);
function getStyles(props) {
    var isDragging = props.isDragging;
    return {
        opacity: isDragging ? 0 : 1,
        height: isDragging ? 0 : ''
    };
}
var DumbPiece = (function (_super) {
    __extends(DumbPiece, _super);
    /**
     * constructor
     */
    function DumbPiece(props) {
        return _super.call(this, props) || this;
    }
    DumbPiece.prototype.classNames = function () {
        var color = onix_chess_1.Piece.color(this.props.piece);
        var cssClasses = [
            "piece",
            onix_chess_1.Piece.pieceName(this.props.piece),
            onix_chess_1.Color.Names[color]
        ];
        if (this.props.selected) {
            cssClasses.push("selected");
        }
        return cssClasses.join(" ");
    };
    DumbPiece.prototype.render = function () {
        var onClick = this.props.onClick;
        return (React.createElement("div", { className: this.classNames(), style: getStyles(this.props), onClick: onClick },
            React.createElement("div", { className: "pframe" },
                React.createElement("div", { className: "pshd" }),
                React.createElement("div", { className: "pimg" }))));
    };
    return DumbPiece;
}(React.Component));
exports.DumbPiece = DumbPiece;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventArgs = (function () {
    /**
     * constructor
     */
    function EventArgs(Sender) {
        this.Sender = Sender;
    }
    return EventArgs;
}());
exports.EventArgs = EventArgs;
var EventArgs1 = (function (_super) {
    __extends(EventArgs1, _super);
    /**
     * constructor
     */
    function EventArgs1(Sender, EventData) {
        var _this = _super.call(this, Sender) || this;
        _this.EventData = EventData;
        return _this;
    }
    return EventArgs1;
}(EventArgs));
exports.EventArgs1 = EventArgs1;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventHandler = (function () {
    /**
     * constructor
     */
    function EventHandler(Callback, Context) {
        this.Callback = Callback;
        this.Context = Context;
    }
    /**
     * Calls the method for handling events in the context of the called object.
     */
    EventHandler.prototype.invoke = function (args) {
        this.Callback.call(this.Context, args);
    };
    return EventHandler;
}());
exports.EventHandler = EventHandler;
var EventHandler1 = (function (_super) {
    __extends(EventHandler1, _super);
    /**
     * constructor
     */
    function EventHandler1(Callback, Context) {
        return _super.call(this, Callback, Context) || this;
    }
    /**
     * Calls the method for handling events in the context of the called object.
     */
    EventHandler1.prototype.invoke = function (args) {
        _super.prototype.invoke.call(this, args);
    };
    return EventHandler1;
}(EventHandler));
exports.EventHandler1 = EventHandler1;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.grep = function (elems, callback, invert) {
    var callbackInverse, matches = [];
    var i = 0;
    var length = elems.length;
    var callbackExpect = !invert;
    // Go through the array, only saving the items
    // that pass the validator function
    for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);
        if (callbackInverse !== callbackExpect) {
            matches.push(elems[i]);
        }
    }
    return matches;
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Types_1 = __webpack_require__(35);
exports.indexOf = function (searchElement, arr, fromIndex) {
    return ((!Types_1.isArray(arr)) || (arr == null)) ? -1 : arr.indexOf(searchElement, fromIndex);
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.average = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Pad_1 = __webpack_require__(81);
exports.justify = function (value, prefix, leftJustify, minWidth, zeroPad) {
    var diff = minWidth - value.length;
    if (diff > 0) {
        if (leftJustify || !zeroPad) {
            value = Pad_1.pad(value, minWidth, ' ', leftJustify);
        }
        else {
            value = value.slice(0, prefix.length) + Pad_1.pad('', diff, '0', true) + value.slice(prefix.length);
        }
    }
    return value;
};


/***/ }),
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSafari = exports.isFirefox = undefined;

var _memoize = __webpack_require__(313);

var _memoize2 = _interopRequireDefault(_memoize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isFirefox = exports.isFirefox = (0, _memoize2.default)(function () {
  return (/firefox/i.test(navigator.userAgent)
  );
});
var isSafari = exports.isSafari = (0, _memoize2.default)(function () {
  return Boolean(window.safari);
});

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unpackBackendForEs5Users = exports.createChildContext = exports.CHILD_CONTEXT_TYPES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = DragDropContext;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dndCore = __webpack_require__(227);

var _invariant = __webpack_require__(9);

var _invariant2 = _interopRequireDefault(_invariant);

var _hoistNonReactStatics = __webpack_require__(71);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _checkDecoratorArguments = __webpack_require__(59);

var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CHILD_CONTEXT_TYPES = exports.CHILD_CONTEXT_TYPES = {
  dragDropManager: _propTypes2.default.object.isRequired
};

var createChildContext = exports.createChildContext = function createChildContext(backend, context) {
  return {
    dragDropManager: new _dndCore.DragDropManager(backend, context)
  };
};

var unpackBackendForEs5Users = exports.unpackBackendForEs5Users = function unpackBackendForEs5Users(backendOrModule) {
  // Auto-detect ES6 default export for people still using ES5
  var backend = backendOrModule;
  if ((typeof backend === 'undefined' ? 'undefined' : _typeof(backend)) === 'object' && typeof backend.default === 'function') {
    backend = backend.default;
  }
  (0, _invariant2.default)(typeof backend === 'function', 'Expected the backend to be a function or an ES6 module exporting a default function. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-drop-context.html');
  return backend;
};

function DragDropContext(backendOrModule) {
  _checkDecoratorArguments2.default.apply(undefined, ['DragDropContext', 'backend'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params

  var backend = unpackBackendForEs5Users(backendOrModule);
  var childContext = createChildContext(backend);

  return function decorateContext(DecoratedComponent) {
    var _class, _temp;

    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

    var DragDropContextContainer = (_temp = _class = function (_Component) {
      _inherits(DragDropContextContainer, _Component);

      function DragDropContextContainer() {
        _classCallCheck(this, DragDropContextContainer);

        return _possibleConstructorReturn(this, (DragDropContextContainer.__proto__ || Object.getPrototypeOf(DragDropContextContainer)).apply(this, arguments));
      }

      _createClass(DragDropContextContainer, [{
        key: 'getDecoratedComponentInstance',
        value: function getDecoratedComponentInstance() {
          (0, _invariant2.default)(this.child, 'In order to access an instance of the decorated component it can ' + 'not be a stateless component.');
          return this.child;
        }
      }, {
        key: 'getManager',
        value: function getManager() {
          return childContext.dragDropManager;
        }
      }, {
        key: 'getChildContext',
        value: function getChildContext() {
          return childContext;
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;

          return _react2.default.createElement(DecoratedComponent, _extends({}, this.props, {
            ref: function ref(child) {
              return _this2.child = child;
            }
          }));
        }
      }]);

      return DragDropContextContainer;
    }(_react.Component), _class.DecoratedComponent = DecoratedComponent, _class.displayName = 'DragDropContext(' + displayName + ')', _class.childContextTypes = CHILD_CONTEXT_TYPES, _temp);


    return (0, _hoistNonReactStatics2.default)(DragDropContextContainer, DecoratedComponent);
  };
}

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = areOptionsEqual;

var _shallowEqual = __webpack_require__(93);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function areOptionsEqual(nextOptions, currentOptions) {
  if (currentOptions === nextOptions) {
    return true;
  }

  return currentOptions !== null && nextOptions !== null && (0, _shallowEqual2.default)(currentOptions, nextOptions);
}

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = decorateHandler;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _disposables = __webpack_require__(220);

var _isPlainObject = __webpack_require__(21);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _invariant = __webpack_require__(9);

var _invariant2 = _interopRequireDefault(_invariant);

var _hoistNonReactStatics = __webpack_require__(71);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _shallowEqual = __webpack_require__(93);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _shallowEqualScalar = __webpack_require__(176);

var _shallowEqualScalar2 = _interopRequireDefault(_shallowEqualScalar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function decorateHandler(_ref) {
  var _class, _temp;

  var DecoratedComponent = _ref.DecoratedComponent,
      createHandler = _ref.createHandler,
      createMonitor = _ref.createMonitor,
      createConnector = _ref.createConnector,
      registerHandler = _ref.registerHandler,
      containerDisplayName = _ref.containerDisplayName,
      getType = _ref.getType,
      collect = _ref.collect,
      options = _ref.options;
  var _options$arePropsEqua = options.arePropsEqual,
      arePropsEqual = _options$arePropsEqua === undefined ? _shallowEqualScalar2.default : _options$arePropsEqua;

  var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

  var DragDropContainer = (_temp = _class = function (_Component) {
    _inherits(DragDropContainer, _Component);

    _createClass(DragDropContainer, [{
      key: 'getHandlerId',
      value: function getHandlerId() {
        return this.handlerId;
      }
    }, {
      key: 'getDecoratedComponentInstance',
      value: function getDecoratedComponentInstance() {
        return this.decoratedComponentInstance;
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps, nextState) {
        return !arePropsEqual(nextProps, this.props) || !(0, _shallowEqual2.default)(nextState, this.state);
      }
    }]);

    function DragDropContainer(props, context) {
      _classCallCheck(this, DragDropContainer);

      var _this = _possibleConstructorReturn(this, (DragDropContainer.__proto__ || Object.getPrototypeOf(DragDropContainer)).call(this, props, context));

      _this.handleChange = _this.handleChange.bind(_this);
      _this.handleChildRef = _this.handleChildRef.bind(_this);

      (0, _invariant2.default)(_typeof(_this.context.dragDropManager) === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

      _this.manager = _this.context.dragDropManager;
      _this.handlerMonitor = createMonitor(_this.manager);
      _this.handlerConnector = createConnector(_this.manager.getBackend());
      _this.handler = createHandler(_this.handlerMonitor);

      _this.disposable = new _disposables.SerialDisposable();
      _this.receiveProps(props);
      _this.state = _this.getCurrentState();
      _this.dispose();
      return _this;
    }

    _createClass(DragDropContainer, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.isCurrentlyMounted = true;
        this.disposable = new _disposables.SerialDisposable();
        this.currentType = null;
        this.receiveProps(this.props);
        this.handleChange();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (!arePropsEqual(nextProps, this.props)) {
          this.receiveProps(nextProps);
          this.handleChange();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.dispose();
        this.isCurrentlyMounted = false;
      }
    }, {
      key: 'receiveProps',
      value: function receiveProps(props) {
        this.handler.receiveProps(props);
        this.receiveType(getType(props));
      }
    }, {
      key: 'receiveType',
      value: function receiveType(type) {
        if (type === this.currentType) {
          return;
        }

        this.currentType = type;

        var _registerHandler = registerHandler(type, this.handler, this.manager),
            handlerId = _registerHandler.handlerId,
            unregister = _registerHandler.unregister;

        this.handlerId = handlerId;
        this.handlerMonitor.receiveHandlerId(handlerId);
        this.handlerConnector.receiveHandlerId(handlerId);

        var globalMonitor = this.manager.getMonitor();
        var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, { handlerIds: [handlerId] });

        this.disposable.setDisposable(new _disposables.CompositeDisposable(new _disposables.Disposable(unsubscribe), new _disposables.Disposable(unregister)));
      }
    }, {
      key: 'handleChange',
      value: function handleChange() {
        if (!this.isCurrentlyMounted) {
          return;
        }

        var nextState = this.getCurrentState();
        if (!(0, _shallowEqual2.default)(nextState, this.state)) {
          this.setState(nextState);
        }
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        this.disposable.dispose();
        this.handlerConnector.receiveHandlerId(null);
      }
    }, {
      key: 'handleChildRef',
      value: function handleChildRef(component) {
        this.decoratedComponentInstance = component;
        this.handler.receiveComponent(component);
      }
    }, {
      key: 'getCurrentState',
      value: function getCurrentState() {
        var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor);

        if (process.env.NODE_ENV !== 'production') {
          (0, _invariant2.default)((0, _isPlainObject2.default)(nextState), 'Expected `collect` specified as the second argument to ' + '%s for %s to return a plain object of props to inject. ' + 'Instead, received %s.', containerDisplayName, displayName, nextState);
        }

        return nextState;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(DecoratedComponent, _extends({}, this.props, this.state, {
          ref: this.handleChildRef
        }));
      }
    }]);

    return DragDropContainer;
  }(_react.Component), _class.DecoratedComponent = DecoratedComponent, _class.displayName = containerDisplayName + '(' + displayName + ')', _class.contextTypes = {
    dragDropManager: _propTypes2.default.object.isRequired
  }, _temp);


  return (0, _hoistNonReactStatics2.default)(DragDropContainer, DecoratedComponent);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
       value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isValidType;

var _isArray = __webpack_require__(20);

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isValidType(type, allowArray) {
       return typeof type === 'string' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'symbol' || allowArray && (0, _isArray2.default)(type) && type.every(function (t) {
              return isValidType(t, false);
       });
}

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = shallowEqualScalar;
function shallowEqualScalar(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var hasOwn = Object.prototype.hasOwnProperty;
  for (var i = 0; i < keysA.length; i += 1) {
    if (!hasOwn.call(objB, keysA[i])) {
      return false;
    }

    var valA = objA[keysA[i]];
    var valB = objB[keysA[i]];

    if (valA !== valB || (typeof valA === 'undefined' ? 'undefined' : _typeof(valA)) === 'object' || (typeof valB === 'undefined' ? 'undefined' : _typeof(valB)) === 'object') {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapConnectorHooks;

var _react = __webpack_require__(1);

var _cloneWithRef = __webpack_require__(443);

var _cloneWithRef2 = _interopRequireDefault(_cloneWithRef);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function throwIfCompositeComponentElement(element) {
  // Custom components can no longer be wrapped directly in React DnD 2.0
  // so that we don't need to depend on findDOMNode() from react-dom.
  if (typeof element.type === 'string') {
    return;
  }

  var displayName = element.type.displayName || element.type.name || 'the component';

  throw new Error('Only native element nodes can now be passed to React DnD connectors.' + ('You can either wrap ' + displayName + ' into a <div>, or turn it into a ') + 'drag source or a drop target itself.');
}

function wrapHookToRecognizeElement(hook) {
  return function () {
    var elementOrNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    // When passed a node, call the hook straight away.
    if (!(0, _react.isValidElement)(elementOrNode)) {
      var node = elementOrNode;
      hook(node, options);
      return undefined;
    }

    // If passed a ReactElement, clone it and attach this function as a ref.
    // This helps us achieve a neat API where user doesn't even know that refs
    // are being used under the hood.
    var element = elementOrNode;
    throwIfCompositeComponentElement(element);

    // When no options are passed, use the hook directly
    var ref = options ? function (node) {
      return hook(node, options);
    } : hook;

    return (0, _cloneWithRef2.default)(element, ref);
  };
}

function wrapConnectorHooks(hooks) {
  var wrappedHooks = {};

  Object.keys(hooks).forEach(function (key) {
    var hook = hooks[key];
    var wrappedHook = wrapHookToRecognizeElement(hook);
    wrappedHooks[key] = function () {
      return wrappedHook;
    };
  });

  return wrappedHooks;
}

/***/ }),
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PieceSelector_1 = __webpack_require__(112);
exports.PieceSelector = PieceSelector_1.PieceSelector;
var SizeSelector_1 = __webpack_require__(209);
exports.SizeSelector = SizeSelector_1.SizeSelector;
var SquareSelector_1 = __webpack_require__(113);
exports.SquareSelector = SquareSelector_1.SquareSelector;
var StartPosSelector_1 = __webpack_require__(114);
exports.StartPosSelector = StartPosSelector_1.StartPosSelector;
var WhoMoveSelector_1 = __webpack_require__(115);
exports.WhoMoveSelector = WhoMoveSelector_1.WhoMoveSelector;


/***/ }),
/* 207 */,
/* 208 */,
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var onix_board_1 = __webpack_require__(327);
var onix_ui_1 = __webpack_require__(39);
var SizeSelector = (function (_super) {
    __extends(SizeSelector, _super);
    /**
     * constructor
     */
    function SizeSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (e) {
            var onChangeSize = _this.props.onChangeSize;
            var size = e.target.value;
            if (onChangeSize) {
                onChangeSize(size);
            }
        };
        return _this;
    }
    SizeSelector.prototype.render = function () {
        var defaultSize = this.props.defaultSize;
        return (React.createElement(onix_ui_1.FormControl, { componentClass: "select", scale: "small", onChange: this.onChange, defaultValue: defaultSize.toString() },
            React.createElement("option", { value: "1" }, "200x200"),
            React.createElement("option", { value: "2" }, "280x280"),
            React.createElement("option", { value: "3" }, "360x360"),
            React.createElement("option", { value: "4" }, "450x450"),
            React.createElement("option", { value: "5" }, "540x540"),
            React.createElement("option", { value: "6" }, "710x710")));
    };
    SizeSelector.defaultProps = {
        defaultSize: onix_board_1.BoardSize.Normal,
    };
    return SizeSelector;
}(React.Component));
exports.SizeSelector = SizeSelector;


/***/ }),
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// rawAsap provides everything we need except exception management.
var rawAsap = __webpack_require__(215);
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(110)))

/***/ }),
/* 216 */,
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

exports.__esModule = true;

var _isDisposable = __webpack_require__(69);

var _isDisposable2 = _interopRequireWildcard(_isDisposable);

/**
 * Represents a group of disposable resources that are disposed together.
 */

var CompositeDisposable = (function () {
  function CompositeDisposable() {
    for (var _len = arguments.length, disposables = Array(_len), _key = 0; _key < _len; _key++) {
      disposables[_key] = arguments[_key];
    }

    _classCallCheck(this, CompositeDisposable);

    if (Array.isArray(disposables[0]) && disposables.length === 1) {
      disposables = disposables[0];
    }

    for (var i = 0; i < disposables.length; i++) {
      if (!_isDisposable2['default'](disposables[i])) {
        throw new Error('Expected a disposable');
      }
    }

    this.disposables = disposables;
    this.isDisposed = false;
  }

  /**
   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
   * @param {Disposable} item Disposable to add.
   */

  CompositeDisposable.prototype.add = function add(item) {
    if (this.isDisposed) {
      item.dispose();
    } else {
      this.disposables.push(item);
    }
  };

  /**
   * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
   * @param {Disposable} item Disposable to remove.
   * @returns {Boolean} true if found; false otherwise.
   */

  CompositeDisposable.prototype.remove = function remove(item) {
    if (this.isDisposed) {
      return false;
    }

    var index = this.disposables.indexOf(item);
    if (index === -1) {
      return false;
    }

    this.disposables.splice(index, 1);
    item.dispose();
    return true;
  };

  /**
   * Disposes all disposables in the group and removes them from the group.
   */

  CompositeDisposable.prototype.dispose = function dispose() {
    if (this.isDisposed) {
      return;
    }

    var len = this.disposables.length;
    var currentDisposables = new Array(len);
    for (var i = 0; i < len; i++) {
      currentDisposables[i] = this.disposables[i];
    }

    this.isDisposed = true;
    this.disposables = [];
    this.length = 0;

    for (var i = 0; i < len; i++) {
      currentDisposables[i].dispose();
    }
  };

  return CompositeDisposable;
})();

exports['default'] = CompositeDisposable;
module.exports = exports['default'];

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports.__esModule = true;
var noop = function noop() {};

/**
 * The basic disposable.
 */

var Disposable = (function () {
  function Disposable(action) {
    _classCallCheck(this, Disposable);

    this.isDisposed = false;
    this.action = action || noop;
  }

  Disposable.prototype.dispose = function dispose() {
    if (!this.isDisposed) {
      this.action.call(null);
      this.isDisposed = true;
    }
  };

  _createClass(Disposable, null, [{
    key: "empty",
    enumerable: true,
    value: { dispose: noop }
  }]);

  return Disposable;
})();

exports["default"] = Disposable;
module.exports = exports["default"];

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

exports.__esModule = true;

var _isDisposable = __webpack_require__(69);

var _isDisposable2 = _interopRequireWildcard(_isDisposable);

var SerialDisposable = (function () {
  function SerialDisposable() {
    _classCallCheck(this, SerialDisposable);

    this.isDisposed = false;
    this.current = null;
  }

  /**
   * Gets the underlying disposable.
   * @return The underlying disposable.
   */

  SerialDisposable.prototype.getDisposable = function getDisposable() {
    return this.current;
  };

  /**
   * Sets the underlying disposable.
   * @param {Disposable} value The new underlying disposable.
   */

  SerialDisposable.prototype.setDisposable = function setDisposable() {
    var value = arguments[0] === undefined ? null : arguments[0];

    if (value != null && !_isDisposable2['default'](value)) {
      throw new Error('Expected either an empty value or a valid disposable');
    }

    var isDisposed = this.isDisposed;
    var previous = undefined;

    if (!isDisposed) {
      previous = this.current;
      this.current = value;
    }

    if (previous) {
      previous.dispose();
    }

    if (isDisposed && value) {
      value.dispose();
    }
  };

  /**
   * Disposes the underlying disposable as well as all future replacements.
   */

  SerialDisposable.prototype.dispose = function dispose() {
    if (this.isDisposed) {
      return;
    }

    this.isDisposed = true;
    var previous = this.current;
    this.current = null;

    if (previous) {
      previous.dispose();
    }
  };

  return SerialDisposable;
})();

exports['default'] = SerialDisposable;
module.exports = exports['default'];

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.__esModule = true;

var _isDisposable2 = __webpack_require__(69);

var _isDisposable3 = _interopRequireWildcard(_isDisposable2);

exports.isDisposable = _isDisposable3['default'];

var _Disposable2 = __webpack_require__(218);

var _Disposable3 = _interopRequireWildcard(_Disposable2);

exports.Disposable = _Disposable3['default'];

var _CompositeDisposable2 = __webpack_require__(217);

var _CompositeDisposable3 = _interopRequireWildcard(_CompositeDisposable2);

exports.CompositeDisposable = _CompositeDisposable3['default'];

var _SerialDisposable2 = __webpack_require__(219);

var _SerialDisposable3 = _interopRequireWildcard(_SerialDisposable2);

exports.SerialDisposable = _SerialDisposable3['default'];

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createStore = __webpack_require__(527);

var _createStore2 = _interopRequireDefault(_createStore);

var _reducers = __webpack_require__(229);

var _reducers2 = _interopRequireDefault(_reducers);

var _dragDrop = __webpack_require__(44);

var dragDropActions = _interopRequireWildcard(_dragDrop);

var _DragDropMonitor = __webpack_require__(222);

var _DragDropMonitor2 = _interopRequireDefault(_DragDropMonitor);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DragDropManager = function () {
  function DragDropManager(createBackend) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, DragDropManager);

    var store = (0, _createStore2.default)(_reducers2.default);
    this.context = context;
    this.store = store;
    this.monitor = new _DragDropMonitor2.default(store);
    this.registry = this.monitor.registry;
    this.backend = createBackend(this);

    store.subscribe(this.handleRefCountChange.bind(this));
  }

  _createClass(DragDropManager, [{
    key: 'handleRefCountChange',
    value: function handleRefCountChange() {
      var shouldSetUp = this.store.getState().refCount > 0;
      if (shouldSetUp && !this.isSetUp) {
        this.backend.setup();
        this.isSetUp = true;
      } else if (!shouldSetUp && this.isSetUp) {
        this.backend.teardown();
        this.isSetUp = false;
      }
    }
  }, {
    key: 'getContext',
    value: function getContext() {
      return this.context;
    }
  }, {
    key: 'getMonitor',
    value: function getMonitor() {
      return this.monitor;
    }
  }, {
    key: 'getBackend',
    value: function getBackend() {
      return this.backend;
    }
  }, {
    key: 'getRegistry',
    value: function getRegistry() {
      return this.registry;
    }
  }, {
    key: 'getActions',
    value: function getActions() {
      var manager = this;
      var dispatch = this.store.dispatch;


      function bindActionCreator(actionCreator) {
        return function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var action = actionCreator.apply(manager, args);
          if (typeof action !== 'undefined') {
            dispatch(action);
          }
        };
      }

      return Object.keys(dragDropActions).filter(function (key) {
        return typeof dragDropActions[key] === 'function';
      }).reduce(function (boundActions, key) {
        var action = dragDropActions[key];
        boundActions[key] = bindActionCreator(action); // eslint-disable-line no-param-reassign
        return boundActions;
      }, {});
    }
  }]);

  return DragDropManager;
}();

exports.default = DragDropManager;

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _invariant = __webpack_require__(9);

var _invariant2 = _interopRequireDefault(_invariant);

var _isArray = __webpack_require__(20);

var _isArray2 = _interopRequireDefault(_isArray);

var _matchesType = __webpack_require__(118);

var _matchesType2 = _interopRequireDefault(_matchesType);

var _HandlerRegistry = __webpack_require__(225);

var _HandlerRegistry2 = _interopRequireDefault(_HandlerRegistry);

var _dragOffset = __webpack_require__(117);

var _dirtyHandlerIds = __webpack_require__(116);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DragDropMonitor = function () {
  function DragDropMonitor(store) {
    _classCallCheck(this, DragDropMonitor);

    this.store = store;
    this.registry = new _HandlerRegistry2.default(store);
  }

  _createClass(DragDropMonitor, [{
    key: 'subscribeToStateChange',
    value: function subscribeToStateChange(listener) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var handlerIds = options.handlerIds;

      (0, _invariant2.default)(typeof listener === 'function', 'listener must be a function.');
      (0, _invariant2.default)(typeof handlerIds === 'undefined' || (0, _isArray2.default)(handlerIds), 'handlerIds, when specified, must be an array of strings.');

      var prevStateId = this.store.getState().stateId;
      var handleChange = function handleChange() {
        var state = _this.store.getState();
        var currentStateId = state.stateId;
        try {
          var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !(0, _dirtyHandlerIds.areDirty)(state.dirtyHandlerIds, handlerIds);

          if (!canSkipListener) {
            listener();
          }
        } finally {
          prevStateId = currentStateId;
        }
      };

      return this.store.subscribe(handleChange);
    }
  }, {
    key: 'subscribeToOffsetChange',
    value: function subscribeToOffsetChange(listener) {
      var _this2 = this;

      (0, _invariant2.default)(typeof listener === 'function', 'listener must be a function.');

      var previousState = this.store.getState().dragOffset;
      var handleChange = function handleChange() {
        var nextState = _this2.store.getState().dragOffset;
        if (nextState === previousState) {
          return;
        }

        previousState = nextState;
        listener();
      };

      return this.store.subscribe(handleChange);
    }
  }, {
    key: 'canDragSource',
    value: function canDragSource(sourceId) {
      var source = this.registry.getSource(sourceId);
      (0, _invariant2.default)(source, 'Expected to find a valid source.');

      if (this.isDragging()) {
        return false;
      }

      return source.canDrag(this, sourceId);
    }
  }, {
    key: 'canDropOnTarget',
    value: function canDropOnTarget(targetId) {
      var target = this.registry.getTarget(targetId);
      (0, _invariant2.default)(target, 'Expected to find a valid target.');

      if (!this.isDragging() || this.didDrop()) {
        return false;
      }

      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();
      return (0, _matchesType2.default)(targetType, draggedItemType) && target.canDrop(this, targetId);
    }
  }, {
    key: 'isDragging',
    value: function isDragging() {
      return Boolean(this.getItemType());
    }
  }, {
    key: 'isDraggingSource',
    value: function isDraggingSource(sourceId) {
      var source = this.registry.getSource(sourceId, true);
      (0, _invariant2.default)(source, 'Expected to find a valid source.');

      if (!this.isDragging() || !this.isSourcePublic()) {
        return false;
      }

      var sourceType = this.registry.getSourceType(sourceId);
      var draggedItemType = this.getItemType();
      if (sourceType !== draggedItemType) {
        return false;
      }

      return source.isDragging(this, sourceId);
    }
  }, {
    key: 'isOverTarget',
    value: function isOverTarget(targetId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { shallow: false };
      var shallow = options.shallow;

      if (!this.isDragging()) {
        return false;
      }

      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();
      if (!(0, _matchesType2.default)(targetType, draggedItemType)) {
        return false;
      }

      var targetIds = this.getTargetIds();
      if (!targetIds.length) {
        return false;
      }

      var index = targetIds.indexOf(targetId);
      if (shallow) {
        return index === targetIds.length - 1;
      } else {
        return index > -1;
      }
    }
  }, {
    key: 'getItemType',
    value: function getItemType() {
      return this.store.getState().dragOperation.itemType;
    }
  }, {
    key: 'getItem',
    value: function getItem() {
      return this.store.getState().dragOperation.item;
    }
  }, {
    key: 'getSourceId',
    value: function getSourceId() {
      return this.store.getState().dragOperation.sourceId;
    }
  }, {
    key: 'getTargetIds',
    value: function getTargetIds() {
      return this.store.getState().dragOperation.targetIds;
    }
  }, {
    key: 'getDropResult',
    value: function getDropResult() {
      return this.store.getState().dragOperation.dropResult;
    }
  }, {
    key: 'didDrop',
    value: function didDrop() {
      return this.store.getState().dragOperation.didDrop;
    }
  }, {
    key: 'isSourcePublic',
    value: function isSourcePublic() {
      return this.store.getState().dragOperation.isSourcePublic;
    }
  }, {
    key: 'getInitialClientOffset',
    value: function getInitialClientOffset() {
      return this.store.getState().dragOffset.initialClientOffset;
    }
  }, {
    key: 'getInitialSourceClientOffset',
    value: function getInitialSourceClientOffset() {
      return this.store.getState().dragOffset.initialSourceClientOffset;
    }
  }, {
    key: 'getClientOffset',
    value: function getClientOffset() {
      return this.store.getState().dragOffset.clientOffset;
    }
  }, {
    key: 'getSourceClientOffset',
    value: function getSourceClientOffset() {
      return (0, _dragOffset.getSourceClientOffset)(this.store.getState().dragOffset);
    }
  }, {
    key: 'getDifferenceFromInitialOffset',
    value: function getDifferenceFromInitialOffset() {
      return (0, _dragOffset.getDifferenceFromInitialOffset)(this.store.getState().dragOffset);
    }
  }]);

  return DragDropMonitor;
}();

exports.default = DragDropMonitor;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DragSource = function () {
  function DragSource() {
    _classCallCheck(this, DragSource);
  }

  _createClass(DragSource, [{
    key: "canDrag",
    value: function canDrag() {
      return true;
    }
  }, {
    key: "isDragging",
    value: function isDragging(monitor, handle) {
      return handle === monitor.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function endDrag() {}
  }]);

  return DragSource;
}();

exports.default = DragSource;

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DropTarget = function () {
  function DropTarget() {
    _classCallCheck(this, DropTarget);
  }

  _createClass(DropTarget, [{
    key: "canDrop",
    value: function canDrop() {
      return true;
    }
  }, {
    key: "hover",
    value: function hover() {}
  }, {
    key: "drop",
    value: function drop() {}
  }]);

  return DropTarget;
}();

exports.default = DropTarget;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _invariant = __webpack_require__(9);

var _invariant2 = _interopRequireDefault(_invariant);

var _isArray = __webpack_require__(20);

var _isArray2 = _interopRequireDefault(_isArray);

var _asap = __webpack_require__(214);

var _asap2 = _interopRequireDefault(_asap);

var _registry = __webpack_require__(45);

var _getNextUniqueId = __webpack_require__(232);

var _getNextUniqueId2 = _interopRequireDefault(_getNextUniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HandlerRoles = {
  SOURCE: 'SOURCE',
  TARGET: 'TARGET'
};

function validateSourceContract(source) {
  (0, _invariant2.default)(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
  (0, _invariant2.default)(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
  (0, _invariant2.default)(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}

function validateTargetContract(target) {
  (0, _invariant2.default)(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
  (0, _invariant2.default)(typeof target.hover === 'function', 'Expected hover to be a function.');
  (0, _invariant2.default)(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}

function validateType(type, allowArray) {
  if (allowArray && (0, _isArray2.default)(type)) {
    type.forEach(function (t) {
      return validateType(t, false);
    });
    return;
  }

  (0, _invariant2.default)(typeof type === 'string' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
}

function getNextHandlerId(role) {
  var id = (0, _getNextUniqueId2.default)().toString();
  switch (role) {
    case HandlerRoles.SOURCE:
      return 'S' + id;
    case HandlerRoles.TARGET:
      return 'T' + id;
    default:
      (0, _invariant2.default)(false, 'Unknown role: ' + role);
  }
}

function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case 'S':
      return HandlerRoles.SOURCE;
    case 'T':
      return HandlerRoles.TARGET;
    default:
      (0, _invariant2.default)(false, 'Cannot parse handler ID: ' + handlerId);
  }
}

var HandlerRegistry = function () {
  function HandlerRegistry(store) {
    _classCallCheck(this, HandlerRegistry);

    this.store = store;

    this.types = {};
    this.handlers = {};

    this.pinnedSourceId = null;
    this.pinnedSource = null;
  }

  _createClass(HandlerRegistry, [{
    key: 'addSource',
    value: function addSource(type, source) {
      validateType(type);
      validateSourceContract(source);

      var sourceId = this.addHandler(HandlerRoles.SOURCE, type, source);
      this.store.dispatch((0, _registry.addSource)(sourceId));
      return sourceId;
    }
  }, {
    key: 'addTarget',
    value: function addTarget(type, target) {
      validateType(type, true);
      validateTargetContract(target);

      var targetId = this.addHandler(HandlerRoles.TARGET, type, target);
      this.store.dispatch((0, _registry.addTarget)(targetId));
      return targetId;
    }
  }, {
    key: 'addHandler',
    value: function addHandler(role, type, handler) {
      var id = getNextHandlerId(role);
      this.types[id] = type;
      this.handlers[id] = handler;

      return id;
    }
  }, {
    key: 'containsHandler',
    value: function containsHandler(handler) {
      var _this = this;

      return Object.keys(this.handlers).some(function (key) {
        return _this.handlers[key] === handler;
      });
    }
  }, {
    key: 'getSource',
    value: function getSource(sourceId, includePinned) {
      (0, _invariant2.default)(this.isSourceId(sourceId), 'Expected a valid source ID.');

      var isPinned = includePinned && sourceId === this.pinnedSourceId;
      var source = isPinned ? this.pinnedSource : this.handlers[sourceId];

      return source;
    }
  }, {
    key: 'getTarget',
    value: function getTarget(targetId) {
      (0, _invariant2.default)(this.isTargetId(targetId), 'Expected a valid target ID.');
      return this.handlers[targetId];
    }
  }, {
    key: 'getSourceType',
    value: function getSourceType(sourceId) {
      (0, _invariant2.default)(this.isSourceId(sourceId), 'Expected a valid source ID.');
      return this.types[sourceId];
    }
  }, {
    key: 'getTargetType',
    value: function getTargetType(targetId) {
      (0, _invariant2.default)(this.isTargetId(targetId), 'Expected a valid target ID.');
      return this.types[targetId];
    }
  }, {
    key: 'isSourceId',
    value: function isSourceId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === HandlerRoles.SOURCE;
    }
  }, {
    key: 'isTargetId',
    value: function isTargetId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === HandlerRoles.TARGET;
    }
  }, {
    key: 'removeSource',
    value: function removeSource(sourceId) {
      var _this2 = this;

      (0, _invariant2.default)(this.getSource(sourceId), 'Expected an existing source.');
      this.store.dispatch((0, _registry.removeSource)(sourceId));

      (0, _asap2.default)(function () {
        delete _this2.handlers[sourceId];
        delete _this2.types[sourceId];
      });
    }
  }, {
    key: 'removeTarget',
    value: function removeTarget(targetId) {
      var _this3 = this;

      (0, _invariant2.default)(this.getTarget(targetId), 'Expected an existing target.');
      this.store.dispatch((0, _registry.removeTarget)(targetId));

      (0, _asap2.default)(function () {
        delete _this3.handlers[targetId];
        delete _this3.types[targetId];
      });
    }
  }, {
    key: 'pinSource',
    value: function pinSource(sourceId) {
      var source = this.getSource(sourceId);
      (0, _invariant2.default)(source, 'Expected an existing source.');

      this.pinnedSourceId = sourceId;
      this.pinnedSource = source;
    }
  }, {
    key: 'unpinSource',
    value: function unpinSource() {
      (0, _invariant2.default)(this.pinnedSource, 'No source is pinned at the time.');

      this.pinnedSourceId = null;
      this.pinnedSource = null;
    }
  }]);

  return HandlerRegistry;
}();

exports.default = HandlerRegistry;

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createBackend;

var _noop = __webpack_require__(136);

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestBackend = function () {
  function TestBackend(manager) {
    _classCallCheck(this, TestBackend);

    this.actions = manager.getActions();
  }

  _createClass(TestBackend, [{
    key: 'setup',
    value: function setup() {
      this.didCallSetup = true;
    }
  }, {
    key: 'teardown',
    value: function teardown() {
      this.didCallTeardown = true;
    }
  }, {
    key: 'connectDragSource',
    value: function connectDragSource() {
      return _noop2.default;
    }
  }, {
    key: 'connectDragPreview',
    value: function connectDragPreview() {
      return _noop2.default;
    }
  }, {
    key: 'connectDropTarget',
    value: function connectDropTarget() {
      return _noop2.default;
    }
  }, {
    key: 'simulateBeginDrag',
    value: function simulateBeginDrag(sourceIds, options) {
      this.actions.beginDrag(sourceIds, options);
    }
  }, {
    key: 'simulatePublishDragSource',
    value: function simulatePublishDragSource() {
      this.actions.publishDragSource();
    }
  }, {
    key: 'simulateHover',
    value: function simulateHover(targetIds, options) {
      this.actions.hover(targetIds, options);
    }
  }, {
    key: 'simulateDrop',
    value: function simulateDrop() {
      this.actions.drop();
    }
  }, {
    key: 'simulateEndDrag',
    value: function simulateEndDrag() {
      this.actions.endDrag();
    }
  }]);

  return TestBackend;
}();

function createBackend(manager) {
  return new TestBackend(manager);
}

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DragDropManager = __webpack_require__(221);

Object.defineProperty(exports, 'DragDropManager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DragDropManager).default;
  }
});

var _DragSource = __webpack_require__(223);

Object.defineProperty(exports, 'DragSource', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DragSource).default;
  }
});

var _DropTarget = __webpack_require__(224);

Object.defineProperty(exports, 'DropTarget', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DropTarget).default;
  }
});

var _createTestBackend = __webpack_require__(226);

Object.defineProperty(exports, 'createTestBackend', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createTestBackend).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = dragOperation;

var _without = __webpack_require__(137);

var _without2 = _interopRequireDefault(_without);

var _dragDrop = __webpack_require__(44);

var _registry = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: false,
  isSourcePublic: null
};

function dragOperation() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _dragDrop.BEGIN_DRAG:
      return _extends({}, state, {
        itemType: action.itemType,
        item: action.item,
        sourceId: action.sourceId,
        isSourcePublic: action.isSourcePublic,
        dropResult: null,
        didDrop: false
      });
    case _dragDrop.PUBLISH_DRAG_SOURCE:
      return _extends({}, state, {
        isSourcePublic: true
      });
    case _dragDrop.HOVER:
      return _extends({}, state, {
        targetIds: action.targetIds
      });
    case _registry.REMOVE_TARGET:
      if (state.targetIds.indexOf(action.targetId) === -1) {
        return state;
      }
      return _extends({}, state, {
        targetIds: (0, _without2.default)(state.targetIds, action.targetId)
      });
    case _dragDrop.DROP:
      return _extends({}, state, {
        dropResult: action.dropResult,
        didDrop: true,
        targetIds: []
      });
    case _dragDrop.END_DRAG:
      return _extends({}, state, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: false,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return state;
  }
}

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _dragOffset = __webpack_require__(117);

var _dragOffset2 = _interopRequireDefault(_dragOffset);

var _dragOperation = __webpack_require__(228);

var _dragOperation2 = _interopRequireDefault(_dragOperation);

var _refCount = __webpack_require__(230);

var _refCount2 = _interopRequireDefault(_refCount);

var _dirtyHandlerIds = __webpack_require__(116);

var _dirtyHandlerIds2 = _interopRequireDefault(_dirtyHandlerIds);

var _stateId = __webpack_require__(231);

var _stateId2 = _interopRequireDefault(_stateId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  return {
    dirtyHandlerIds: (0, _dirtyHandlerIds2.default)(state.dirtyHandlerIds, action, state.dragOperation),
    dragOffset: (0, _dragOffset2.default)(state.dragOffset, action),
    refCount: (0, _refCount2.default)(state.refCount, action),
    dragOperation: (0, _dragOperation2.default)(state.dragOperation, action),
    stateId: (0, _stateId2.default)(state.stateId)
  };
}

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = refCount;

var _registry = __webpack_require__(45);

function refCount() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments[1];

  switch (action.type) {
    case _registry.ADD_SOURCE:
    case _registry.ADD_TARGET:
      return state + 1;
    case _registry.REMOVE_SOURCE:
    case _registry.REMOVE_TARGET:
      return state - 1;
    default:
      return state;
  }
}

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stateId;
function stateId() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return state + 1;
}

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNextUniqueId;
var nextUniqueId = 0;

function getNextUniqueId() {
  return nextUniqueId++;
}

/***/ }),
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(275),
    hashDelete = __webpack_require__(276),
    hashGet = __webpack_require__(277),
    hashHas = __webpack_require__(278),
    hashSet = __webpack_require__(279);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(285),
    listCacheDelete = __webpack_require__(286),
    listCacheGet = __webpack_require__(287),
    listCacheHas = __webpack_require__(288),
    listCacheSet = __webpack_require__(289);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(50),
    root = __webpack_require__(32);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(50),
    root = __webpack_require__(32);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 251 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(264),
    isArguments = __webpack_require__(133),
    isArray = __webpack_require__(20),
    isBuffer = __webpack_require__(310),
    isIndex = __webpack_require__(130),
    isTypedArray = __webpack_require__(311);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 253 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(124),
    eq = __webpack_require__(52);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 255 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(255),
    baseIsNaN = __webpack_require__(259),
    strictIndexOf = __webpack_require__(304);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(72),
    arrayIncludes = __webpack_require__(74),
    arrayIncludesWith = __webpack_require__(75),
    arrayMap = __webpack_require__(76),
    baseUnary = __webpack_require__(77),
    cacheHas = __webpack_require__(78);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new SetCache(othIndex && array)
      : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache
              ? cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseIntersection;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(48),
    isObjectLike = __webpack_require__(34);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 259 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(134),
    isMasked = __webpack_require__(283),
    isObject = __webpack_require__(33),
    toSource = __webpack_require__(305);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(48),
    isLength = __webpack_require__(135),
    isObjectLike = __webpack_require__(34);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(33),
    isPrototype = __webpack_require__(284),
    nativeKeysIn = __webpack_require__(295);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(307),
    defineProperty = __webpack_require__(128),
    identity = __webpack_require__(132);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 264 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(125),
    baseFlatten = __webpack_require__(126),
    baseUniq = __webpack_require__(127);

/**
 * The base implementation of methods like `_.xor`, without support for
 * iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of values.
 */
function baseXor(arrays, iteratee, comparator) {
  var length = arrays.length;
  if (length < 2) {
    return length ? baseUniq(arrays[0]) : [];
  }
  var index = -1,
      result = Array(length);

  while (++index < length) {
    var array = arrays[index],
        othIndex = -1;

    while (++othIndex < length) {
      if (othIndex != index) {
        result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
      }
    }
  }
  return baseUniq(baseFlatten(result, 1), iteratee, comparator);
}

module.exports = baseXor;


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLikeObject = __webpack_require__(53);

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}

module.exports = castArrayLikeObject;


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(254),
    baseAssignValue = __webpack_require__(124);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(32);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(25),
    isIterateeCall = __webpack_require__(281);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(250),
    noop = __webpack_require__(136),
    setToArray = __webpack_require__(131);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(52);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
 * of source objects to the destination object for all destination properties
 * that resolve to `undefined`.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsAssignIn(objValue, srcValue, key, object) {
  if (objValue === undefined ||
      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
    return srcValue;
  }
  return objValue;
}

module.exports = customDefaultsAssignIn;


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(298);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(73);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 274 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(51);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 276 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(51);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(51);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(51);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(73),
    isArguments = __webpack_require__(133),
    isArray = __webpack_require__(20);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(52),
    isArrayLike = __webpack_require__(79),
    isIndex = __webpack_require__(130),
    isObject = __webpack_require__(33);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 282 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(268);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 284 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 285 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(47);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(47);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(47);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(47);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(247),
    ListCache = __webpack_require__(248),
    Map = __webpack_require__(249);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(49);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(49);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(49);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(49);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 295 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(129);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(111)(module)))

/***/ }),
/* 297 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 298 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(123);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 300 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 301 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(263),
    shortOut = __webpack_require__(303);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 303 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 304 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 305 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(267),
    createAssigner = __webpack_require__(269),
    keysIn = __webpack_require__(312);

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});

module.exports = assignInWith;


/***/ }),
/* 307 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(123),
    assignInWith = __webpack_require__(306),
    baseRest = __webpack_require__(25),
    customDefaultsAssignIn = __webpack_require__(271);

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(args) {
  args.push(undefined, customDefaultsAssignIn);
  return apply(assignInWith, undefined, args);
});

module.exports = defaults;


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(76),
    baseIntersection = __webpack_require__(257),
    baseRest = __webpack_require__(25),
    castArrayLikeObject = __webpack_require__(266);

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = baseRest(function(arrays) {
  var mapped = arrayMap(arrays, castArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped)
    : [];
});

module.exports = intersection;


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(32),
    stubFalse = __webpack_require__(314);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(111)(module)))

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(261),
    baseUnary = __webpack_require__(77),
    nodeUtil = __webpack_require__(296);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(252),
    baseKeysIn = __webpack_require__(262),
    isArrayLike = __webpack_require__(79);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(122);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 314 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(126),
    baseRest = __webpack_require__(25),
    baseUniq = __webpack_require__(127),
    isArrayLikeObject = __webpack_require__(53);

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

module.exports = union;


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(251),
    baseRest = __webpack_require__(25),
    baseXor = __webpack_require__(265),
    isArrayLikeObject = __webpack_require__(53);

/**
 * Creates an array of unique values that is the
 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
 * of the given arrays. The order of result values is determined by the order
 * they occur in the arrays.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.without
 * @example
 *
 * _.xor([2, 1], [2, 3]);
 * // => [1, 3]
 */
var xor = baseRest(function(arrays) {
  return baseXor(arrayFilter(arrays, isArrayLikeObject));
});

module.exports = xor;


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var onix_core_1 = __webpack_require__(56);
var onix_chess_1 = __webpack_require__(17);
var intlInitialized = false;
function registerStrings() {
    if (!intlInitialized) {
        onix_chess_1.registerStrings();
        onix_core_1.Intl.registerStrings('chess', {
            'ru-ru': {
                size: "Размер",
                timer_lessone: "менее 1",
                timer_empty: "---",
                timer_nolabel: ["", "", "", ""],
                timer_days: ["дн.", "день", "дня", "дней"],
                timer_hours: ["ч.", "час", "часа", "часов"],
                timer_minutes: ["мин.", "минута", "минуты", "минут"],
                timer_seconds: ["сек.", "секунда", "секунды", "секунд"]
            },
            'en-us': {
                size: "Size",
                timer_lessone: "less 1",
                timer_empty: "---",
                timer_nolabel: ["", "", "", ""],
                timer_days: ["d.", "day", "days", "days"],
                timer_hours: ["h.", "hour", "hours", "hours"],
                timer_minutes: ["m.", "minute", "minutes", "minutes"],
                timer_seconds: ["sec.", "second", "seconds", "seconds"]
            }
        });
        intlInitialized = true;
    }
}
exports.registerStrings = registerStrings;


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(55);
var onix_chess_1 = __webpack_require__(17);
var actions = __webpack_require__(54);
var onix_core_1 = __webpack_require__(56);
var onix_core_2 = __webpack_require__(56);
var updateStyle = function (id, name) {
    var style = document.getElementById(id);
    if (!style) {
        style = document.createElement("link");
        style.id = id;
        document.head.appendChild(style);
    }
    var re = /[a-z\-]+(\.min)?\.css/;
    style.href = style.href.replace(re, name + ".min.css");
};
var canMove = function (from, to) {
    if (typeof to === "undefined") {
        return typeof from !== "undefined";
    }
    // const state: PositionState = this.store.getState();
    return true; // (to == Square.NullSquare) || (state.board.position.getPiece(to) == Piece.NoPiece);
};
var INITIAL_STATE = {
    size: Constants_1.BoardSize.Normal,
    piece: "alpha",
    square: "color-brown",
    flip: false,
    coords: true,
    frame: true,
    moveturn: true,
    position: new onix_chess_1.Position(onix_chess_1.FenStandartStart),
    fen: onix_chess_1.FenStandartStart,
    selection: {
        from: {
            piece: onix_chess_1.Piece.NoPiece,
            square: onix_chess_1.Square.NullSquare
        }
    },
    canMove: canMove,
    doMove: function (from, to, piece) { return false; }
};
exports.boardReducer = function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    onix_core_2.Logger.debug('Board action', action);
    switch (action.type) {
        case actions.SET_POSITION:
            return __assign({}, state, { position: action.position, fen: action.position.writeFEN() });
        case actions.SET_FEN:
            state.position.readFromFEN(action.fen);
            return __assign({}, state, { fen: state.position.writeFEN() });
        case actions.SET_SELECTION:
            return __assign({}, state, { selection: action.selection });
        case actions.SET_CASTLE:
            state.position.setCastling(action.color, action.side, action.flag);
            return __assign({}, state, { fen: state.position.writeFEN() });
        case actions.SET_MOVENO:
            state.position.setMoveNo(action.move);
            return __assign({}, state, { fen: state.position.writeFEN() });
        case actions.SET_EP:
            state.position.EpTarget = (action.ep_target);
            return __assign({}, state, { fen: state.position.writeFEN() });
        case actions.CLEAR_BOARD:
            state.position.readFromFEN(onix_chess_1.FenEmptyBoard);
            return __assign({}, state, { fen: onix_chess_1.FenEmptyBoard });
        case actions.STD_START:
            state.position.readFromFEN(onix_chess_1.FenStandartStart);
            return __assign({}, state, { fen: onix_chess_1.FenStandartStart });
        case actions.FLIP_BOARD:
            return __assign({}, state, { flip: action.flag });
        case actions.SET_COORDS:
            return __assign({}, state, { coords: action.flag });
        case actions.SET_FRAME:
            return __assign({}, state, { frame: action.flag });
        case actions.SET_MOVETURN:
            return __assign({}, state, { moveturn: action.flag });
        case actions.CHANGE_SIZE:
            return __assign({}, state, { size: action.size });
        case actions.SET_PIECE:
            updateStyle("boardPieceSet", action.piece);
            return __assign({}, state, { piece: action.piece });
        case actions.SET_SQUARE:
            updateStyle("boardSqueareSet", action.square);
            return __assign({}, state, { square: action.square });
        case actions.WHO_MOVE:
            state.position.WhoMove = action.color;
            return __assign({}, state, { fen: state.position.writeFEN() });
        case actions.UDPATE_BOARD: {
            return __assign({}, state, { fen: state.position.writeFEN() });
        }
        case actions.BOARD_CLICK: {
            var selection = state.selection;
            if (selection.from.piece !== onix_chess_1.Piece.NoPiece) {
                if (selection.from.square === action.square) {
                    var np = (selection.from.piece === action.piece) ? onix_chess_1.Piece.NoPiece : action.piece;
                    return __assign({}, state, { selection: {
                            from: {
                                piece: np,
                                square: onix_chess_1.Square.NullSquare
                            }
                        } });
                }
                else {
                    var res = state.doMove(selection.from.square, action.square, selection.from.piece);
                    if (res) {
                        var fen = onix_core_1.isString(res) ? res : state.position.writeFEN();
                        var p = (selection.from.square === onix_chess_1.Square.NullSquare) ? selection.from.piece : onix_chess_1.Piece.NoPiece;
                        return __assign({}, state, { fen: fen, selection: {
                                from: {
                                    piece: p,
                                    square: onix_chess_1.Square.NullSquare
                                }
                            } });
                    }
                    else {
                        return state;
                    }
                }
            }
            else {
                if (action.piece !== onix_chess_1.Piece.NoPiece) {
                    return __assign({}, state, { selection: {
                            from: {
                                piece: action.piece,
                                square: action.square
                            }
                        } });
                }
            }
            return state;
        }
        case actions.BOARD_MOVE: {
            var selection = state.selection;
            var res = state.doMove(action.from, action.to, action.piece);
            if (res) {
                var fen = onix_core_1.isString(res) ? res : state.position.writeFEN();
                var p = (selection.from.square === onix_chess_1.Square.NullSquare) ? selection.from.piece : onix_chess_1.Piece.NoPiece;
                return __assign({}, state, { fen: fen, selection: {
                        from: {
                            piece: p,
                            square: onix_chess_1.Square.NullSquare
                        }
                    } });
            }
            else {
                return state;
            }
        }
        default:
            return state;
    }
};


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var DumbBoard_1 = __webpack_require__(324);
var ChessBoard = (function (_super) {
    __extends(ChessBoard, _super);
    /**
     * constructor
     */
    function ChessBoard(props) {
        return _super.call(this, props) || this;
    }
    ChessBoard.prototype.render = function () {
        var _a = this.props, store = _a.store, dnd = _a.dnd, legal = _a.legal, getPiece = _a.getPiece;
        var state = store.getState();
        var _b = state.board, fen = _b.fen, size = _b.size, coords = _b.coords, frame = _b.frame, flip = _b.flip, selection = _b.selection, canMove = _b.canMove, doMove = _b.doMove;
        return (React.createElement(DumbBoard_1.DumbBoard, { store: store, dnd: dnd, legal: legal, getPiece: getPiece }));
    };
    return ChessBoard;
}(React.Component));
exports.ChessBoard = ChessBoard;


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var react_dnd_1 = __webpack_require__(92);
var DragPiece_1 = __webpack_require__(323);
var Constants_1 = __webpack_require__(55);
var layerStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
};
function getItemStyles(props) {
    var initialOffset = props.initialOffset, currentOffset = props.currentOffset;
    if (!initialOffset || !currentOffset) {
        return {
            display: 'none'
        };
    }
    var x = currentOffset.x, y = currentOffset.y;
    /*
    if (props.snapToGrid) {
        x -= initialOffset.x;
        y -= initialOffset.y;
        [x, y] = snapToGrid(x, y);
        x += initialOffset.x;
        y += initialOffset.y;
    }
    */
    var transform = "translate(" + x + "px, " + y + "px)";
    return {
        transform: transform,
        WebkitTransform: transform,
    };
}
var ChessDragLayer = (function (_super) {
    __extends(ChessDragLayer, _super);
    /**
     * constructor
     */
    function ChessDragLayer(props) {
        var _this = _super.call(this, props) || this;
        _this.renderItem = function (type, item) {
            switch (type) {
                case "DND_TYPES.PIECE":
                    return (React.createElement(DragPiece_1.DragPiece, { piece: item.piece }));
                default:
                    return null;
            }
        };
        return _this;
    }
    ChessDragLayer.prototype.render = function () {
        var _a = this.props, size = _a.size, item = _a.item, itemType = _a.itemType, isDragging = _a.isDragging;
        if (!isDragging) {
            return null;
        }
        var sizeClass = Constants_1.BoardSizeClass[size];
        return (React.createElement("div", { style: layerStyles },
            React.createElement("div", { className: sizeClass, style: getItemStyles(this.props) }, this.renderItem(itemType, item))));
    };
    ChessDragLayer = __decorate([
        react_dnd_1.DragLayer(function (monitor) { return ({
            item: monitor.getItem(),
            itemType: monitor.getItemType(),
            initialOffset: monitor.getInitialSourceClientOffset(),
            currentOffset: monitor.getSourceClientOffset(),
            isDragging: monitor.isDragging()
        }); }),
        __metadata("design:paramtypes", [Object])
    ], ChessDragLayer);
    return ChessDragLayer;
}(React.Component));
exports.ChessDragLayer = ChessDragLayer;


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var DumbPiece_1 = __webpack_require__(140);
var DragPiece = (function (_super) {
    __extends(DragPiece, _super);
    /**
     * constructor
     */
    function DragPiece(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = function () { };
        return _this;
    }
    DragPiece.prototype.render = function () {
        return (React.createElement(DumbPiece_1.DumbPiece, { piece: this.props.piece, canMove: true, isDragging: false, onClick: this.onClick, selected: true }));
    };
    return DragPiece;
}(React.Component));
exports.DragPiece = DragPiece;


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var classNames = __webpack_require__(6);
var onix_chess_1 = __webpack_require__(17);
var ChessSquare_1 = __webpack_require__(139);
var Constants_1 = __webpack_require__(55);
var DumbBoard = (function (_super) {
    __extends(DumbBoard, _super);
    /**
     * constructor
     */
    function DumbBoard(props) {
        return _super.call(this, props) || this;
    }
    DumbBoard.prototype.renderSquare = function (i) {
        var piece = this.props.getPiece(i);
        var name = onix_chess_1.Square.squareName(i);
        var _a = this.props, store = _a.store, dnd = _a.dnd, legal = _a.legal;
        return React.createElement(ChessSquare_1.ChessSquare, { store: store, coord: i, piece: piece, key: name, dnd: dnd, legal: legal });
    };
    DumbBoard.prototype.renderLabels = function (flip) {
        var fl = [], rl = [];
        var FYLES = 'abcdefgh';
        var RANKS = '12345678';
        for (var i = 0; i < 8; i++) {
            var f = flip ? FYLES[7 - i] : FYLES[i];
            var r = flip ? RANKS[i] : RANKS[7 - i];
            fl.push(React.createElement("li", { key: 'f' + f },
                React.createElement("span", null, f)));
            rl.push(React.createElement("li", { key: 'r' + r },
                React.createElement("span", null, r)));
        }
        return [
            React.createElement("ul", { key: "fl", className: "board-labels board-fyles-labels" }, fl),
            React.createElement("ul", { key: "rl", className: "board-labels board-rows-labels" }, rl)
        ];
    };
    DumbBoard.prototype.render = function () {
        var store = this.props.store;
        var state = store.getState();
        var _a = state.board, flip = _a.flip, size = _a.size, coords = _a.coords, frame = _a.frame;
        var squares = [];
        for (var i = 0; i < 64; i++) {
            var sq = (flip) ? (onix_chess_1.Square.rank(i) * 8 + (7 - onix_chess_1.Square.fyle(i))) : 63 - onix_chess_1.Square.rank(i) * 8 - (7 - onix_chess_1.Square.fyle(i));
            squares.push(this.renderSquare(sq));
        }
        var classes = classNames(Constants_1.BoardSizeClass[size], (_b = {},
            _b['inboard'] = !frame,
            _b['nolabel'] = !coords,
            _b));
        return (React.createElement("div", { className: classes },
            React.createElement("div", { className: "board-body" },
                React.createElement("div", { className: "board-border" },
                    React.createElement("div", { className: "board-frame" },
                        React.createElement("div", { className: "board-squares" }, squares)),
                    this.renderLabels(flip)))));
        var _b;
    };
    return DumbBoard;
}(React.Component));
exports.DumbBoard = DumbBoard;


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var onix_chess_1 = __webpack_require__(17);
var DumbSquare = (function (_super) {
    __extends(DumbSquare, _super);
    /**
     * constructor
     */
    function DumbSquare(props) {
        var _this = _super.call(this, props) || this;
        var bx = Math.floor(Math.random() * 50);
        var by = Math.floor(Math.random() * 50);
        var bpos = "-" + bx.toString() + "px -" + by.toString() + "px";
        var style = {
            backgroundPosition: bpos
        };
        _this.state = {
            style: style
        };
        return _this;
    }
    DumbSquare.prototype.classNames = function () {
        var _a = this.props, color = _a.color, classNames = _a.classNames;
        var cssClass = ["square", onix_chess_1.Color.Names[color]];
        if (classNames && classNames.length > 0) {
            cssClass = cssClass.concat(cssClass, classNames);
        }
        return cssClass.join(" ");
    };
    DumbSquare.prototype.render = function () {
        var _a = this.props, name = _a.name, onClick = _a.onClick;
        return (React.createElement("div", { className: this.classNames(), key: name, onClick: onClick },
            React.createElement("div", { className: "sframe", style: this.state.style },
                React.createElement("div", { className: "sborder" }),
                React.createElement("div", { className: "phelper" }, this.props.children))));
    };
    return DumbSquare;
}(React.Component));
exports.DumbSquare = DumbSquare;


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BoardActionTypes = __webpack_require__(318);
exports.BoardActionTypes = BoardActionTypes;
var BoardActionConsts = __webpack_require__(54);
exports.BoardActionConsts = BoardActionConsts;
var BoardActions = __webpack_require__(319);
exports.BoardActions = BoardActions;
var ChessPiece_1 = __webpack_require__(138);
exports.ChessPiece = ChessPiece_1.ChessPiece;
var ChessSquare_1 = __webpack_require__(139);
exports.ChessSquare = ChessSquare_1.ChessSquare;
var ChessBoard_1 = __webpack_require__(321);
exports.ChessBoard = ChessBoard_1.ChessBoard;
var ChessDragLayer_1 = __webpack_require__(322);
exports.ChessDragLayer = ChessDragLayer_1.ChessDragLayer;
var Constants_1 = __webpack_require__(55);
exports.BoardSize = Constants_1.BoardSize;
exports.BoardMode = Constants_1.BoardMode;
exports.Orientation = Constants_1.Orientation;
var BoardReducer_1 = __webpack_require__(320);
exports.boardReducer = BoardReducer_1.boardReducer;


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(326));
var Intl_1 = __webpack_require__(317);
exports.registerStrings = Intl_1.registerStrings;


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var defaultLocale = 'ru-ru';
var currentLocale = defaultLocale;
var categories = {};
var locale = function (value) {
    if (value == "en" || value == "en-us" || value == "en-uk") {
        currentLocale = 'en-us';
    }
    currentLocale = 'ru-ru';
    return currentLocale;
};
var register = function (category, strings) {
    if (!categories[category]) {
        categories[category] = strings;
    }
    else {
        for (var lang in strings) {
            if (!categories[category][lang]) {
                categories[category][lang] = {};
            }
            var langCat = strings[lang];
            for (var key in langCat) {
                categories[category][lang][key] = langCat[key];
            }
        }
    }
};
var t = function (category, key) {
    var result = categories[category][currentLocale][key];
    if (!result) {
        result = categories[category][defaultLocale][key];
    }
    return result;
};
var ts = function (category, key) {
    var result = categories[category][currentLocale][key];
    if (!result) {
        result = categories[category][defaultLocale][key];
    }
    return result;
};
var Intl = (function () {
    function Intl() {
    }
    Intl.setLocale = locale;
    Intl.t = t;
    Intl.ts = ts;
    Intl.registerStrings = register;
    return Intl;
}());
exports.Intl = Intl;
Intl.setLocale(window.navigator.language);


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
var wnd = window;
var FALSE = false;
// some convenient shortcuts.
var aps = Array.prototype.slice;
var con = wnd.console;
var callback_func = null;
var callback_force = FALSE;
// Set default level
var log_level = 9;
// logging methods, in "priority order". Not all console implementations
// will utilize these, but they will be used in the callback passed to
// setCallback.
var log_methods = ["error", "warn", "info", "debug", "log"];
// pass these methods through to the console if they exist, otherwise just
// fail gracefully. These methods are provided for convenience.
var pass_methods = "assert clear count dir dirxml exception group groupCollapsed groupEnd profile profileEnd table time timeEnd trace".split(" ");
// logs are stored here so that they can be recalled as necessary.
var logs = [];
// determine if the level is visible given the current log_level.
function is_level(level) {
    return log_level > 0
        ? log_level > level
        : log_methods.length + log_level <= level;
}
// execute the callback function if set.
function exec_callback(args) {
    if (callback_func && (callback_force || !con || !con.log)) {
        callback_func.apply(wnd, args);
    }
}
var LoggerClass = (function () {
    function LoggerClass() {
        var idx = pass_methods.length;
        while (--idx >= 0) {
            this.callPassThroughMethod(pass_methods[idx]);
        }
        idx = log_methods.length;
        while (--idx >= 0) {
            this.setLevelFunctions(idx, log_methods[idx]);
        }
    }
    LoggerClass.prototype.error = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
    };
    LoggerClass.prototype.warn = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
    };
    LoggerClass.prototype.info = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
    };
    LoggerClass.prototype.debug = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
    };
    LoggerClass.prototype.log = function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
    };
    LoggerClass.prototype.callPassThroughMethod = function (method) {
        // generate pass-through methods. These methods will be called, if they
        // exist, as long as the logging level is non-zero.
        this[method] = function () {
            if (log_level !== 0 && con && con[method]) {
                con[method].apply(con, arguments);
            }
        };
    };
    LoggerClass.prototype.setLevelFunctions = function (idx, level) {
        this[level] = function () {
            var args = aps.call(arguments);
            var log_arr = [level].concat(args);
            logs.push(log_arr);
            exec_callback(log_arr);
            if (!con || !is_level(idx)) {
                return;
            }
            var arg_norm = (args.length === 1) ? args[0] : args;
            con.firebug ? con[level].apply(wnd, arg_norm)
                : con[level] ? con[level](arg_norm)
                    : con.log(arg_norm);
        };
    };
    LoggerClass.prototype.setCallback = function () {
        var args = aps.call(arguments), max = logs.length, i = max;
        callback_func = args.shift() || null;
        callback_force = typeof args[0] === "boolean" ? args.shift() : FALSE;
        i -= typeof args[0] === "number" ? args.shift() : max;
        while (i < max) {
            exec_callback(logs[i++]);
        }
    };
    ;
    // priority levels:
    // log (1) < debug (2) < info (3) < warn (4) < error (5)
    LoggerClass.prototype.setLevel = function (level) {
        log_level = level;
    };
    return LoggerClass;
}());
exports.LoggerClass = LoggerClass;
exports.Logger = new LoggerClass();
if (process.env.NODE_ENV === 'production') {
    exports.Logger.setLevel(1);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EventArgs_1 = __webpack_require__(141);
var EventHandler_1 = __webpack_require__(142);
var Event = (function () {
    /**
     * constructor
     */
    function Event() {
        this._type = "Event";
        this.OnHandlerAttached = null;
        this.OnHandlerAttachedContext = null;
        this.OnHandlerDettached = null;
        this.OnHandlerDettachedContext = null;
        this.handlers = [];
    }
    /**
     * Determines whether the specified handler is bound to the event.
     */
    Event.prototype.hasBinding = function (handler) {
        return this.handlers.indexOf(handler) > -1;
    };
    /**
     * Determines whether the Event has active bindings.
     */
    Event.prototype.hasBindings = function () {
        return this.handlers.length > 0;
    };
    /**
     * Associates the handler with the Event object.
     * @param handler Event handler.
     */
    Event.prototype.bind = function (handler) {
        if (!this.hasBinding(handler)) {
            this.handlers.push(handler);
            if (this.OnHandlerAttached !== null) {
                this.OnHandlerAttached.call(this.OnHandlerAttachedContext);
            }
        }
    };
    /**
     * Associates the event handler with the Event object to execute no more than the specified number of times.
     * After the specified number of times, the action is disconnected from the handler.
     * @param handler Event handler.
     * @param triggerCount Number of calls before the handler is disconnected.
     */
    Event.prototype.bindFor = function (handler, triggerCount) {
        var that = this;
        var triggers = 0;
        var wire = new EventHandler_1.EventHandler(function (args) {
            if (++triggers >= triggerCount) {
                that.unbind(wire);
            }
            handler.invoke(args);
        }, handler.Context);
        this.handlers.push(wire);
    };
    /**
     * Disconnects the specified handler from the Event.
     * @param handler Event handler.
     */
    Event.prototype.unbind = function (handler) {
        for (var i = 0; i < this.handlers.length; i++) {
            if (this.handlers[i] === handler) {
                this.handlers.splice(i, 1);
                return;
            }
        }
    };
    /**
     * Executes all linked handlers.
     */
    Event.prototype.trigger = function (args) {
        var handlers;
        if (this.hasBindings()) {
            handlers = this.handlers.slice(0);
            for (var i = 0; i < handlers.length; i++) {
                handlers[i].Invoke(args);
            }
        }
    };
    /**
     * Make arguments and execute
     * @param sender Event sender
     * @param data Event data
     */
    Event.prototype.fire = function (sender, data) {
        this.trigger(new EventArgs_1.EventArgs(sender));
    };
    /**
     * Deletes an event and deletes the binding of all related handlers.
     */
    Event.prototype.dispose = function () {
        this.handlers = [];
    };
    return Event;
}());
exports.Event = Event;
var Event1 = (function (_super) {
    __extends(Event1, _super);
    function Event1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._type = "Event1";
        /**
         * Event handlers
         */
        _this.Handlers = [];
        return _this;
    }
    /**
     * Associates the handler with the Event object.
     * @param handler Event handler.
     */
    Event1.prototype.bind = function (handler) {
        _super.prototype.bind.call(this, handler);
    };
    /**
     * Disconnects the specified handler from the Event.
     * @param handler Event handler.
     */
    Event1.prototype.unbind = function (handler) {
        _super.prototype.unbind.call(this, handler);
    };
    /**
     * Determines whether the specified handler is bound to the event.
     */
    Event1.prototype.hasBinding = function (handler) {
        return _super.prototype.hasBinding.call(this, handler);
    };
    /**
     * Executes all linked handlers.
     */
    Event1.prototype.trigger = function (args) {
        _super.prototype.trigger.call(this, args);
    };
    /**
     * Make arguments and execute
     * @param sender Event sender
     * @param data Event data
     */
    Event1.prototype.fire = function (sender, data) {
        this.trigger(new EventArgs_1.EventArgs1(sender, data));
    };
    return Event1;
}(Event));
exports.Event1 = Event1;


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventArgs_1 = __webpack_require__(141);
exports.EventArgs = EventArgs_1.EventArgs;
exports.EventArgs1 = EventArgs_1.EventArgs1;
var EventHandler_1 = __webpack_require__(142);
exports.EventHandler = EventHandler_1.EventHandler;
exports.EventHandler1 = EventHandler_1.EventHandler1;
var Event_1 = __webpack_require__(330);
exports.Event = Event_1.Event;
exports.Event1 = Event_1.Event1;


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.inArray = function (needle, haystack, strict) {
    var found = false;
    var key;
    var strct = !!strict;
    for (key in haystack) {
        if ((strct && haystack[key] === needle) || (!strct && haystack[key] == needle)) {
            found = true;
            break;
        }
    }
    return found;
};


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.pushif = function (a, cond, val) {
    if (cond) {
        a.push(val);
    }
};


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InArray_1 = __webpack_require__(332);
exports.inArray = InArray_1.inArray;
var IndexOf_1 = __webpack_require__(144);
exports.indexOf = IndexOf_1.indexOf;
var Grep_1 = __webpack_require__(143);
exports.grep = Grep_1.grep;
var Pushif_1 = __webpack_require__(333);
exports.pushif = Pushif_1.pushif;


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Types_1 = __webpack_require__(35);
var IndexOf_1 = __webpack_require__(144);
var Grep_1 = __webpack_require__(143);
var Timezones_1 = __webpack_require__(336);
var months = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
var days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
function ruleToDate(year, rule) {
    var date;
    var targetDay;
    var ourDay;
    var month = rule[3];
    var on = rule[4];
    var time = rule[5];
    var cache = rule[8];
    if (!cache) {
        rule[8] = cache = {};
    }
    if (cache[year]) {
        return cache[year];
    }
    if (!isNaN(on)) {
        date = new Date(Date.UTC(year, months[month], on, time[0], time[1], time[2], 0));
    }
    else if (on.indexOf("last") === 0) {
        date = new Date(Date.UTC(year, months[month] + 1, 1, time[0] - 24, time[1], time[2], 0));
        targetDay = days[on.substr(4, 3)];
        ourDay = date.getUTCDay();
        date.setUTCDate(date.getUTCDate() + targetDay - ourDay - (targetDay > ourDay ? 7 : 0));
    }
    else if (on.indexOf(">=") >= 0) {
        date = new Date(Date.UTC(year, months[month], on.substr(5), time[0], time[1], time[2], 0));
        targetDay = days[on.substr(0, 3)];
        ourDay = date.getUTCDay();
        date.setUTCDate(date.getUTCDate() + targetDay - ourDay + (targetDay < ourDay ? 7 : 0));
    }
    return cache[year] = date;
}
function findRule(utcTime, rules, zone) {
    rules = rules[zone];
    if (!rules) {
        var time = zone.split(":");
        var offset = 0;
        if (time.length > 1) {
            offset = time[0] * 60 + Number(time[1]);
        }
        return [-1000000, 'max', '-', 'Jan', 1, [0, 0, 0], offset, '-'];
    }
    var year = new Date(utcTime).getUTCFullYear();
    rules = Grep_1.grep(rules, function (rule) {
        var from = rule[0];
        var to = rule[1];
        return from <= year && (to >= year || (from == year && to == "only") || to == "max");
    });
    rules.push(utcTime);
    rules.sort(function (a, b) {
        if (typeof a != "number") {
            a = Number(ruleToDate(year, a));
        }
        if (typeof b != "number") {
            b = Number(ruleToDate(year, b));
        }
        return a - b;
    });
    var rule = rules[IndexOf_1.indexOf(utcTime, rules) - 1] || rules[rules.length - 1];
    return isNaN(rule) ? rule : null;
}
function findZone(utcTime, zones, timezone) {
    var zoneRules = zones[timezone];
    if (typeof zoneRules === "string") {
        zoneRules = zones[zoneRules];
    }
    if (!zoneRules) {
        throw new Error('Timezone "' + timezone + '" is either incorrect, or kendo.timezones.min.js is not included.');
    }
    for (var idx = zoneRules.length - 1; idx >= 0; idx--) {
        var until = zoneRules[idx][3];
        if (until && utcTime > until) {
            break;
        }
    }
    var zone = zoneRules[idx + 1];
    if (!zone) {
        throw new Error('Timezone "' + timezone + '" not found on ' + utcTime + ".");
    }
    return zone;
}
function zoneAndRule(utcTime, zones, rules, timezone) {
    if (!Types_1.isNumber(utcTime)) {
        utcTime = Date.UTC(utcTime.getFullYear(), utcTime.getMonth(), utcTime.getDate(), utcTime.getHours(), utcTime.getMinutes(), utcTime.getSeconds(), utcTime.getMilliseconds());
    }
    var zone = findZone(utcTime, zones, timezone);
    return {
        zone: zone,
        rule: findRule(utcTime, rules, zone[1])
    };
}
var Timezone = (function () {
    function Timezone() {
        this.zones = {};
        this.rules = {};
        this.zones = Timezones_1.zones;
        this.rules = Timezones_1.rules;
    }
    Timezone.prototype.offset = function (utcTime, timezone) {
        if (timezone == "Etc/UTC" || timezone == "Etc/GMT") {
            return 0;
        }
        var info = zoneAndRule(utcTime, this.zones, this.rules, timezone);
        var zone = info.zone;
        var rule = info.rule;
        return parseFloat(rule ? zone[0] - rule[6] : zone[0]);
    };
    Timezone.prototype.convert = function (date, fromOffset, toOffset) {
        if (Types_1.isString(fromOffset)) {
            fromOffset = this.offset(date, fromOffset);
        }
        if (Types_1.isString(toOffset)) {
            toOffset = this.offset(date, toOffset);
        }
        var fromLocalOffset = date.getTimezoneOffset();
        date = new Date(date.getTime() + (fromOffset - toOffset) * 60000);
        var toLocalOffset = date.getTimezoneOffset();
        return new Date(date.getTime() + (toLocalOffset - fromLocalOffset) * 60000);
    };
    Timezone.prototype.apply = function (date, timezone) {
        return this.convert(date, date.getTimezoneOffset(), timezone);
    };
    Timezone.prototype.remove = function (date, timezone) {
        return this.convert(date, timezone, date.getTimezoneOffset());
    };
    Timezone.prototype.toLocalDate = function (time) {
        return this.apply(new Date(time), "Etc/UTC");
    };
    return Timezone;
}());
exports.Timezone = Timezone;


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.zones = {
    "Africa/Algiers": [
        ["-12.2", "-", "LMT", "-2486678340000"],
        ["-9.35", "-", "PMT", "-1855958400000"],
        ["0", "Algeria", "WE%sT", "-942012000000"],
        ["-60", "Algeria", "CE%sT", "-733276800000"],
        ["0", "-", "WET", "-439430400000"],
        ["-60", "-", "CET", "-212025600000"],
        ["0", "Algeria", "WE%sT", "246240000000"],
        ["-60", "Algeria", "CE%sT", "309744000000"],
        ["0", "Algeria", "WE%sT", "357523200000"],
        ["-60", "-", "CET"]
    ],
    "Atlantic/Cape_Verde": [
        ["94.06666666666668", "-", "LMT", "-1956700800000"],
        ["120", "-", "CVT", "-862617600000"],
        ["120", "1:00", "CVST", "-764121600000"],
        ["120", "-", "CVT", "186112800000"],
        ["60", "-", "CVT"]
    ],
    "Africa/Ndjamena": [
        ["-60.2", "-", "LMT", "-1798848000000"],
        ["-60", "-", "WAT", "308707200000"],
        ["-60", "1:00", "WAST", "321321600000"],
        ["-60", "-", "WAT"]
    ],
    "Indian/Comoro": [
        ["-173.06666666666666", "-", "LMT", "-1846281600000"],
        ["-180", "-", "EAT"]
    ],
    "Africa/Abidjan": [
        ["16.133333333333333", "-", "LMT", "-1798848000000"],
        ["0", "-", "GMT"]
    ],
    "Africa/Bamako": "Africa/Abidjan",
    "Africa/Banjul": "Africa/Abidjan",
    "Africa/Conakry": "Africa/Abidjan",
    "Africa/Dakar": "Africa/Abidjan",
    "Africa/Freetown": "Africa/Abidjan",
    "Africa/Lome": "Africa/Abidjan",
    "Africa/Nouakchott": "Africa/Abidjan",
    "Africa/Ouagadougou": "Africa/Abidjan",
    "Africa/Sao_Tome": "Africa/Abidjan",
    "Atlantic/St_Helena": "Africa/Abidjan",
    "Africa/Djibouti": [
        ["-172.6", "-", "LMT", "-1846281600000"],
        ["-180", "-", "EAT"]
    ],
    "Africa/Cairo": [
        ["-125.15", "-", "LMT", "-2185401600000"],
        ["-120", "Egypt", "EE%sT"]
    ],
    "Africa/Asmara": [
        ["-155.53333333333333", "-", "LMT", "-3124224000000"],
        ["-155.53333333333333", "-", "AMT", "-2493072000000"],
        ["-155.33333333333334", "-", "ADMT", "-1062201600000"],
        ["-180", "-", "EAT"]
    ],
    "Africa/Addis_Ababa": [
        ["-154.8", "-", "LMT", "-3124224000000"],
        ["-155.33333333333334", "-", "ADMT", "-1062201600000"],
        ["-180", "-", "EAT"]
    ],
    "Africa/Accra": [
        ["0.8666666666666666", "-", "LMT", "-1609545600000"],
        ["0", "Ghana", "%s"]
    ],
    "Africa/Bissau": [
        ["62.333333333333336", "-", "LMT", "-1830384000000"],
        ["60", "-", "WAT", "189216000000"],
        ["0", "-", "GMT"]
    ],
    "Africa/Nairobi": [
        ["-147.26666666666665", "-", "LMT", "-1309737600000"],
        ["-180", "-", "EAT", "-1230854400000"],
        ["-150", "-", "BEAT", "-915235200000"],
        ["-165", "-", "BEAUT", "-284083200000"],
        ["-180", "-", "EAT"]
    ],
    "Africa/Monrovia": [
        ["43.13333333333333", "-", "LMT", "-2745532800000"],
        ["43.13333333333333", "-", "MMT", "-1604361600000"],
        ["44.5", "-", "LRT", "73526400000"],
        ["0", "-", "GMT"]
    ],
    "Africa/Tripoli": [
        ["-52.733333333333334", "-", "LMT", "-1546387200000"],
        ["-60", "Libya", "CE%sT", "-315705600000"],
        ["-120", "-", "EET", "410140800000"],
        ["-60", "Libya", "CE%sT", "641779200000"],
        ["-120", "-", "EET", "844041600000"],
        ["-60", "Libya", "CE%sT", "875923200000"],
        ["-120", "-", "EET", "1352512800000"],
        ["-60", "Libya", "CE%sT", "1382666400000"],
        ["-120", "-", "EET"]
    ],
    "Indian/Antananarivo": [
        ["-190.06666666666666", "-", "LMT", "-1846281600000"],
        ["-180", "-", "EAT", "-499914000000"],
        ["-180", "1:00", "EAST", "-492051600000"],
        ["-180", "-", "EAT"]
    ],
    "Indian/Mauritius": [
        ["-230", "-", "LMT", "-1956700800000"],
        ["-240", "Mauritius", "MU%sT"]
    ],
    "Indian/Mayotte": [
        ["-180.93333333333334", "-", "LMT", "-1846281600000"],
        ["-180", "-", "EAT"]
    ],
    "Africa/Casablanca": [
        ["30.333333333333332", "-", "LMT", "-1773014400000"],
        ["0", "Morocco", "WE%sT", "448243200000"],
        ["-60", "-", "CET", "536371200000"],
        ["0", "Morocco", "WE%sT"]
    ],
    "Africa/El_Aaiun": [
        ["52.8", "-", "LMT", "-1136073600000"],
        ["60", "-", "WAT", "198288000000"],
        ["0", "Morocco", "WE%sT"]
    ],
    "Africa/Maputo": [
        ["-130.33333333333331", "-", "LMT", "-2109283200000"],
        ["-120", "-", "CAT"]
    ],
    "Africa/Blantyre": "Africa/Maputo",
    "Africa/Bujumbura": "Africa/Maputo",
    "Africa/Gaborone": "Africa/Maputo",
    "Africa/Harare": "Africa/Maputo",
    "Africa/Kigali": "Africa/Maputo",
    "Africa/Lubumbashi": "Africa/Maputo",
    "Africa/Lusaka": "Africa/Maputo",
    "Africa/Windhoek": [
        ["-68.4", "-", "LMT", "-2458166400000"],
        ["-90", "-", "SWAT", "-2109283200000"],
        ["-120", "-", "SAST", "-860968800000"],
        ["-120", "1:00", "SAST", "-845244000000"],
        ["-120", "-", "SAST", "637977600000"],
        ["-120", "-", "CAT", "765331200000"],
        ["-60", "Namibia", "WA%sT"]
    ],
    "Africa/Lagos": [
        ["-13.6", "-", "LMT", "-1588464000000"],
        ["-60", "-", "WAT"]
    ],
    "Africa/Bangui": "Africa/Lagos",
    "Africa/Brazzaville": "Africa/Lagos",
    "Africa/Douala": "Africa/Lagos",
    "Africa/Kinshasa": "Africa/Lagos",
    "Africa/Libreville": "Africa/Lagos",
    "Africa/Luanda": "Africa/Lagos",
    "Africa/Malabo": "Africa/Lagos",
    "Africa/Niamey": "Africa/Lagos",
    "Africa/Porto-Novo": "Africa/Lagos",
    "Indian/Reunion": [
        ["-221.86666666666665", "-", "LMT", "-1848873600000"],
        ["-240", "-", "RET"]
    ],
    "Indian/Mahe": [
        ["-221.8", "-", "LMT", "-2006640000000"],
        ["-240", "-", "SCT"]
    ],
    "Africa/Mogadishu": [
        ["-181.46666666666667", "-", "LMT", "-2403561600000"],
        ["-180", "-", "EAT", "-1199318400000"],
        ["-150", "-", "BEAT", "-378777600000"],
        ["-180", "-", "EAT"]
    ],
    "Africa/Johannesburg": [
        ["-112", "-", "LMT", "-2458166400000"],
        ["-90", "-", "SAST", "-2109283200000"],
        ["-120", "SA", "SAST"]
    ],
    "Africa/Maseru": "Africa/Johannesburg",
    "Africa/Mbabane": "Africa/Johannesburg",
    "Africa/Khartoum": [
        ["-130.13333333333333", "-", "LMT", "-1199318400000"],
        ["-120", "Sudan", "CA%sT", "947937600000"],
        ["-180", "-", "EAT"]
    ],
    "Africa/Juba": "Africa/Khartoum",
    "Africa/Dar_es_Salaam": [
        ["-157.13333333333335", "-", "LMT", "-1199318400000"],
        ["-180", "-", "EAT", "-662774400000"],
        ["-165", "-", "BEAUT", "-252547200000"],
        ["-180", "-", "EAT"]
    ],
    "Africa/Tunis": [
        ["-40.733333333333334", "-", "LMT", "-2797200000000"],
        ["-9.35", "-", "PMT", "-1855958400000"],
        ["-60", "Tunisia", "CE%sT"]
    ],
    "Africa/Kampala": [
        ["-129.66666666666669", "-", "LMT", "-1309737600000"],
        ["-180", "-", "EAT", "-1230854400000"],
        ["-150", "-", "BEAT", "-662774400000"],
        ["-165", "-", "BEAUT", "-378777600000"],
        ["-180", "-", "EAT"]
    ],
    "Antarctica/Casey": [
        ["0", "-", "zzz", "-86400000"],
        ["-480", "-", "AWST", "1255831200000"],
        ["-660", "-", "CAST", "1267754400000"],
        ["-480", "-", "AWST", "1319767200000"],
        ["-660", "-", "CAST", "1329843600000"],
        ["-480", "-", "AWST"]
    ],
    "Antarctica/Davis": [
        ["0", "-", "zzz", "-409190400000"],
        ["-420", "-", "DAVT", "-163036800000"],
        ["0", "-", "zzz", "-28857600000"],
        ["-420", "-", "DAVT", "1255831200000"],
        ["-300", "-", "DAVT", "1268251200000"],
        ["-420", "-", "DAVT", "1319767200000"],
        ["-300", "-", "DAVT", "1329854400000"],
        ["-420", "-", "DAVT"]
    ],
    "Antarctica/Mawson": [
        ["0", "-", "zzz", "-501206400000"],
        ["-360", "-", "MAWT", "1255831200000"],
        ["-300", "-", "MAWT"]
    ],
    "Indian/Kerguelen": [
        ["0", "-", "zzz", "-599702400000"],
        ["-300", "-", "TFT"]
    ],
    "Antarctica/DumontDUrville": [
        ["0", "-", "zzz", "-694396800000"],
        ["-600", "-", "PMT", "-566956800000"],
        ["0", "-", "zzz", "-415497600000"],
        ["-600", "-", "DDUT"]
    ],
    "Antarctica/Syowa": [
        ["0", "-", "zzz", "-407808000000"],
        ["-180", "-", "SYOT"]
    ],
    "Antarctica/Troll": [
        ["0", "-", "zzz", "1108166400000"],
        ["0", "Troll", "%s"]
    ],
    "Antarctica/Vostok": [
        ["0", "-", "zzz", "-380073600000"],
        ["-360", "-", "VOST"]
    ],
    "Antarctica/Rothera": [
        ["0", "-", "zzz", "218246400000"],
        ["180", "-", "ROTT"]
    ],
    "Antarctica/Palmer": [
        ["0", "-", "zzz", "-126316800000"],
        ["240", "ArgAQ", "AR%sT", "-7603200000"],
        ["180", "ArgAQ", "AR%sT", "389059200000"],
        ["240", "ChileAQ", "CL%sT"]
    ],
    "Asia/Kabul": [
        ["-276.8", "-", "LMT", "-2493072000000"],
        ["-240", "-", "AFT", "-757468800000"],
        ["-270", "-", "AFT"]
    ],
    "Asia/Yerevan": [
        ["-178", "-", "LMT", "-1441152000000"],
        ["-180", "-", "YERT", "-405129600000"],
        ["-240", "RussiaAsia", "YER%sT", "670384800000"],
        ["-180", "1:00", "YERST", "685584000000"],
        ["-180", "RussiaAsia", "AM%sT", "811908000000"],
        ["-240", "-", "AMT", "883526400000"],
        ["-240", "RussiaAsia", "AM%sT", "1332640800000"],
        ["-240", "-", "AMT"]
    ],
    "Asia/Baku": [
        ["-199.4", "-", "LMT", "-1441152000000"],
        ["-180", "-", "BAKT", "-405129600000"],
        ["-240", "RussiaAsia", "BAK%sT", "670384800000"],
        ["-180", "1:00", "BAKST", "683510400000"],
        ["-180", "RussiaAsia", "AZ%sT", "715388400000"],
        ["-240", "-", "AZT", "851990400000"],
        ["-240", "EUAsia", "AZ%sT", "883526400000"],
        ["-240", "Azer", "AZ%sT"]
    ],
    "Asia/Bahrain": [
        ["-202.33333333333334", "-", "LMT", "-1546387200000"],
        ["-240", "-", "GST", "76204800000"],
        ["-180", "-", "AST"]
    ],
    "Asia/Dhaka": [
        ["-361.6666666666667", "-", "LMT", "-2493072000000"],
        ["-353.3333333333333", "-", "HMT", "-891561600000"],
        ["-390", "-", "BURT", "-872035200000"],
        ["-330", "-", "IST", "-862617600000"],
        ["-390", "-", "BURT", "-576115200000"],
        ["-360", "-", "DACT", "38793600000"],
        ["-360", "-", "BDT", "1262217600000"],
        ["-360", "Dhaka", "BD%sT"]
    ],
    "Asia/Thimphu": [
        ["-358.6", "-", "LMT", "-706320000000"],
        ["-330", "-", "IST", "560044800000"],
        ["-360", "-", "BTT"]
    ],
    "Indian/Chagos": [
        ["-289.6666666666667", "-", "LMT", "-1956700800000"],
        ["-300", "-", "IOT", "851990400000"],
        ["-360", "-", "IOT"]
    ],
    "Asia/Brunei": [
        ["-459.6666666666667", "-", "LMT", "-1383436800000"],
        ["-450", "-", "BNT", "-1136160000000"],
        ["-480", "-", "BNT"]
    ],
    "Asia/Rangoon": [
        ["-384.6666666666667", "-", "LMT", "-2808604800000"],
        ["-384.6666666666667", "-", "RMT", "-1546387200000"],
        ["-390", "-", "BURT", "-873244800000"],
        ["-540", "-", "JST", "-778377600000"],
        ["-390", "-", "MMT"]
    ],
    "Asia/Phnom_Penh": [
        ["-419.6666666666667", "-", "LMT", "-2005948800000"],
        ["-426.3333333333333", "-", "SMT", "-1855958340000"],
        ["-420", "-", "ICT", "-1819929600000"],
        ["-480", "-", "ICT", "-1220400000000"],
        ["-420", "-", "ICT"]
    ],
    "Asia/Shanghai": [
        ["-485.7166666666667", "-", "LMT", "-2146003200000"],
        ["-480", "Shang", "C%sT", "-631238400000"],
        ["-480", "PRC", "C%sT"]
    ],
    "Asia/Urumqi": [
        ["-350.3333333333333", "-", "LMT", "-1293926400000"],
        ["-360", "-", "XJT"]
    ],
    "Asia/Hong_Kong": [
        ["-456.7", "-", "LMT", "-2056665600000"],
        ["-480", "HK", "HK%sT", "-884217600000"],
        ["-540", "-", "JST", "-766713600000"],
        ["-480", "HK", "HK%sT"]
    ],
    "Asia/Taipei": [
        ["-486", "-", "LMT", "-2335219200000"],
        ["-480", "-", "JWST", "-1017792000000"],
        ["-540", "-", "JST", "-766191600000"],
        ["-480", "Taiwan", "C%sT"]
    ],
    "Asia/Macau": [
        ["-454.3333333333333", "-", "LMT", "-1830384000000"],
        ["-480", "Macau", "MO%sT", "945648000000"],
        ["-480", "PRC", "C%sT"]
    ],
    "Asia/Nicosia": [
        ["-133.46666666666667", "-", "LMT", "-1518912000000"],
        ["-120", "Cyprus", "EE%sT", "904608000000"],
        ["-120", "EUAsia", "EE%sT"]
    ],
    "Europe/Nicosia": "Asia/Nicosia", "Asia/Tbilisi": [
        ["-179.18333333333334", "-", "LMT", "-2808604800000"],
        ["-179.18333333333334", "-", "TBMT", "-1441152000000"],
        ["-180", "-", "TBIT", "-405129600000"],
        ["-240", "RussiaAsia", "TBI%sT", "670384800000"],
        ["-180", "1:00", "TBIST", "671155200000"],
        ["-180", "RussiaAsia", "GE%sT", "725760000000"],
        ["-180", "E-EurAsia", "GE%sT", "778377600000"],
        ["-240", "E-EurAsia", "GE%sT", "844128000000"],
        ["-240", "1:00", "GEST", "857174400000"],
        ["-240", "E-EurAsia", "GE%sT", "1088294400000"],
        ["-180", "RussiaAsia", "GE%sT", "1109642400000"],
        ["-240", "-", "GET"]
    ],
    "Asia/Dili": [
        ["-502.3333333333333", "-", "LMT", "-1830384000000"],
        ["-480", "-", "TLT", "-879123600000"],
        ["-540", "-", "JST", "-766022400000"],
        ["-540", "-", "TLT", "199929600000"],
        ["-480", "-", "WITA", "969148800000"],
        ["-540", "-", "TLT"]
    ],
    "Asia/Kolkata": [
        ["-353.4666666666667", "-", "LMT", "-2808604800000"],
        ["-353.3333333333333", "-", "HMT", "-891561600000"],
        ["-390", "-", "BURT", "-872035200000"],
        ["-330", "-", "IST", "-862617600000"],
        ["-330", "1:00", "IST", "-764121600000"],
        ["-330", "-", "IST"]
    ],
    "Asia/Jakarta": [
        ["-427.2", "-", "LMT", "-3231273600000"],
        ["-427.2", "-", "BMT", "-1451693568000"],
        ["-440", "-", "JAVT", "-1172880000000"],
        ["-450", "-", "WIB", "-876614400000"],
        ["-540", "-", "JST", "-766022400000"],
        ["-450", "-", "WIB", "-683856000000"],
        ["-480", "-", "WIB", "-620784000000"],
        ["-450", "-", "WIB", "-157852800000"],
        ["-420", "-", "WIB"]
    ],
    "Asia/Pontianak": [
        ["-437.3333333333333", "-", "LMT", "-1946160000000"],
        ["-437.3333333333333", "-", "PMT", "-1172880000000"],
        ["-450", "-", "WIB", "-881193600000"],
        ["-540", "-", "JST", "-766022400000"],
        ["-450", "-", "WIB", "-683856000000"],
        ["-480", "-", "WIB", "-620784000000"],
        ["-450", "-", "WIB", "-157852800000"],
        ["-480", "-", "WITA", "567993600000"],
        ["-420", "-", "WIB"]
    ],
    "Asia/Makassar": [
        ["-477.6", "-", "LMT", "-1546387200000"],
        ["-477.6", "-", "MMT", "-1172880000000"],
        ["-480", "-", "WITA", "-880243200000"],
        ["-540", "-", "JST", "-766022400000"],
        ["-480", "-", "WITA"]
    ],
    "Asia/Jayapura": [
        ["-562.8", "-", "LMT", "-1172880000000"],
        ["-540", "-", "WIT", "-799459200000"],
        ["-570", "-", "ACST", "-157852800000"],
        ["-540", "-", "WIT"]
    ],
    "Asia/Tehran": [
        ["-205.73333333333335", "-", "LMT", "-1672617600000"],
        ["-205.73333333333335", "-", "TMT", "-725932800000"],
        ["-210", "-", "IRST", "247190400000"],
        ["-240", "Iran", "IR%sT", "315446400000"],
        ["-210", "Iran", "IR%sT"]
    ],
    "Asia/Baghdad": [
        ["-177.66666666666666", "-", "LMT", "-2493072000000"],
        ["-177.6", "-", "BMT", "-1609545600000"],
        ["-180", "-", "AST", "389059200000"],
        ["-180", "Iraq", "A%sT"]
    ],
    "Asia/Jerusalem": [
        ["-140.9", "-", "LMT", "-2808604800000"],
        ["-140.66666666666666", "-", "JMT", "-1609545600000"],
        ["-120", "Zion", "I%sT"]
    ],
    "Asia/Tokyo": [
        ["-558.9833333333333", "-", "LMT", "-2587712400000"],
        ["-540", "-", "JST", "-2335219200000"],
        ["-540", "-", "JCST", "-1017792000000"],
        ["-540", "Japan", "J%sT"]
    ],
    "Asia/Amman": [
        ["-143.73333333333335", "-", "LMT", "-1199318400000"],
        ["-120", "Jordan", "EE%sT"]
    ],
    "Asia/Almaty": [
        ["-307.8", "-", "LMT", "-1441152000000"],
        ["-300", "-", "ALMT", "-1247529600000"],
        ["-360", "RussiaAsia", "ALM%sT", "694137600000"],
        ["-360", "-", "ALMT", "725760000000"],
        ["-360", "RussiaAsia", "ALM%sT", "1110844800000"],
        ["-360", "-", "ALMT"]
    ],
    "Asia/Qyzylorda": [
        ["-261.8666666666667", "-", "LMT", "-1441152000000"],
        ["-240", "-", "KIZT", "-1247529600000"],
        ["-300", "-", "KIZT", "354931200000"],
        ["-300", "1:00", "KIZST", "370742400000"],
        ["-360", "-", "KIZT", "386467200000"],
        ["-300", "RussiaAsia", "KIZ%sT", "694137600000"],
        ["-300", "-", "KIZT", "692841600000"],
        ["-300", "-", "QYZT", "695786400000"],
        ["-360", "RussiaAsia", "QYZ%sT", "1110844800000"],
        ["-360", "-", "QYZT"]
    ],
    "Asia/Aqtobe": [
        ["-228.66666666666666", "-", "LMT", "-1441152000000"],
        ["-240", "-", "AKTT", "-1247529600000"],
        ["-300", "-", "AKTT", "354931200000"],
        ["-300", "1:00", "AKTST", "370742400000"],
        ["-360", "-", "AKTT", "386467200000"],
        ["-300", "RussiaAsia", "AKT%sT", "694137600000"],
        ["-300", "-", "AKTT", "692841600000"],
        ["-300", "RussiaAsia", "AQT%sT", "1110844800000"],
        ["-300", "-", "AQTT"]
    ],
    "Asia/Aqtau": [
        ["-201.06666666666666", "-", "LMT", "-1441152000000"],
        ["-240", "-", "FORT", "-1247529600000"],
        ["-300", "-", "FORT", "-189475200000"],
        ["-300", "-", "SHET", "370742400000"],
        ["-360", "-", "SHET", "386467200000"],
        ["-300", "RussiaAsia", "SHE%sT", "694137600000"],
        ["-300", "-", "SHET", "692841600000"],
        ["-300", "RussiaAsia", "AQT%sT", "794023200000"],
        ["-240", "RussiaAsia", "AQT%sT", "1110844800000"],
        ["-300", "-", "AQTT"]
    ],
    "Asia/Oral": [
        ["-205.4", "-", "LMT", "-1441152000000"],
        ["-240", "-", "URAT", "-1247529600000"],
        ["-300", "-", "URAT", "354931200000"],
        ["-300", "1:00", "URAST", "370742400000"],
        ["-360", "-", "URAT", "386467200000"],
        ["-300", "RussiaAsia", "URA%sT", "606880800000"],
        ["-240", "RussiaAsia", "URA%sT", "694137600000"],
        ["-240", "-", "URAT", "692841600000"],
        ["-240", "RussiaAsia", "ORA%sT", "1110844800000"],
        ["-300", "-", "ORAT"]
    ],
    "Asia/Bishkek": [
        ["-298.4", "-", "LMT", "-1441152000000"],
        ["-300", "-", "FRUT", "-1247529600000"],
        ["-360", "RussiaAsia", "FRU%sT", "670384800000"],
        ["-300", "1:00", "FRUST", "683604000000"],
        ["-300", "Kyrgyz", "KG%sT", "1123804800000"],
        ["-360", "-", "KGT"]
    ],
    "Asia/Seoul": [
        ["-507.8666666666667", "-", "LMT", "-2493072000000"],
        ["-510", "-", "KST", "-2053900800000"],
        ["-540", "-", "JCST", "-1293926400000"],
        ["-510", "-", "KST", "-1167696000000"],
        ["-540", "-", "JCST", "-1017792000000"],
        ["-540", "-", "JST", "-767318400000"],
        ["-540", "-", "KST", "-498096000000"],
        ["-480", "ROK", "K%sT", "-264902400000"],
        ["-510", "-", "KST", "-39484800000"],
        ["-540", "ROK", "K%sT"]
    ],
    "Asia/Pyongyang": [
        ["-503", "-", "LMT", "-2493072000000"],
        ["-510", "-", "KST", "-2053900800000"],
        ["-540", "-", "JCST", "-1293926400000"],
        ["-510", "-", "KST", "-1167696000000"],
        ["-540", "-", "JCST", "-1017792000000"],
        ["-540", "-", "JST", "-768614400000"],
        ["-540", "-", "KST", "-498096000000"],
        ["-480", "-", "KST", "-264902400000"],
        ["-540", "-", "KST"]
    ],
    "Asia/Kuwait": [
        ["-191.93333333333334", "-", "LMT", "-599702400000"],
        ["-180", "-", "AST"]
    ],
    "Asia/Vientiane": [
        ["-410.4", "-", "LMT", "-2005948800000"],
        ["-426.3333333333333", "-", "SMT", "-1855958340000"],
        ["-420", "-", "ICT", "-1819929600000"],
        ["-480", "-", "ICT", "-1220400000000"],
        ["-420", "-", "ICT"]
    ],
    "Asia/Beirut": [
        ["-142", "-", "LMT", "-2808604800000"],
        ["-120", "Lebanon", "EE%sT"]
    ],
    "Asia/Kuala_Lumpur": [
        ["-406.7666666666667", "-", "LMT", "-2177452800000"],
        ["-415.4166666666667", "-", "SMT", "-2038176000000"],
        ["-420", "-", "MALT", "-1167609600000"],
        ["-420", "0:20", "MALST", "-1073001600000"],
        ["-440", "-", "MALT", "-894153600000"],
        ["-450", "-", "MALT", "-879638400000"],
        ["-540", "-", "JST", "-766972800000"],
        ["-450", "-", "MALT", "378691200000"],
        ["-480", "-", "MYT"]
    ],
    "Asia/Kuching": [
        ["-441.3333333333333", "-", "LMT", "-1383436800000"],
        ["-450", "-", "BORT", "-1136160000000"],
        ["-480", "NBorneo", "BOR%sT", "-879638400000"],
        ["-540", "-", "JST", "-766972800000"],
        ["-480", "-", "BORT", "378691200000"],
        ["-480", "-", "MYT"]
    ],
    "Indian/Maldives": [
        ["-294", "-", "LMT", "-2808604800000"],
        ["-294", "-", "MMT", "-284083200000"],
        ["-300", "-", "MVT"]
    ],
    "Asia/Hovd": [
        ["-366.6", "-", "LMT", "-2032905600000"],
        ["-360", "-", "HOVT", "283910400000"],
        ["-420", "Mongol", "HOV%sT"]
    ],
    "Asia/Ulaanbaatar": [
        ["-427.5333333333333", "-", "LMT", "-2032905600000"],
        ["-420", "-", "ULAT", "283910400000"],
        ["-480", "Mongol", "ULA%sT"]
    ],
    "Asia/Choibalsan": [
        ["-458", "-", "LMT", "-2032905600000"],
        ["-420", "-", "ULAT", "283910400000"],
        ["-480", "-", "ULAT", "418003200000"],
        ["-540", "Mongol", "CHO%sT", "1206921600000"],
        ["-480", "Mongol", "CHO%sT"]
    ],
    "Asia/Kathmandu": [
        ["-341.2666666666667", "-", "LMT", "-1546387200000"],
        ["-330", "-", "IST", "536371200000"],
        ["-345", "-", "NPT"]
    ],
    "Asia/Muscat": [
        ["-234.4", "-", "LMT", "-1546387200000"],
        ["-240", "-", "GST"]
    ],
    "Asia/Karachi": [
        ["-268.2", "-", "LMT", "-1956700800000"],
        ["-330", "-", "IST", "-862617600000"],
        ["-330", "1:00", "IST", "-764121600000"],
        ["-330", "-", "IST", "-576115200000"],
        ["-300", "-", "KART", "38793600000"],
        ["-300", "Pakistan", "PK%sT"]
    ],
    "Asia/Gaza": [
        ["-137.86666666666665", "-", "LMT", "-2185401600000"],
        ["-120", "Zion", "EET", "-682646400000"],
        ["-120", "EgyptAsia", "EE%sT", "-81302400000"],
        ["-120", "Zion", "I%sT", "851990400000"],
        ["-120", "Jordan", "EE%sT", "946598400000"],
        ["-120", "Palestine", "EE%sT", "1219968000000"],
        ["-120", "-", "EET", "1220227200000"],
        ["-120", "Palestine", "EE%sT", "1293753600000"],
        ["-120", "-", "EET", "1269648060000"],
        ["-120", "Palestine", "EE%sT", "1312156800000"],
        ["-120", "-", "EET", "1356912000000"],
        ["-120", "Palestine", "EE%sT"]
    ],
    "Asia/Hebron": [
        ["-140.38333333333335", "-", "LMT", "-2185401600000"],
        ["-120", "Zion", "EET", "-682646400000"],
        ["-120", "EgyptAsia", "EE%sT", "-81302400000"],
        ["-120", "Zion", "I%sT", "851990400000"],
        ["-120", "Jordan", "EE%sT", "946598400000"],
        ["-120", "Palestine", "EE%sT"]
    ],
    "Asia/Manila": [
        ["956", "-", "LMT", "-3944678400000"],
        ["-484", "-", "LMT", "-2229292800000"],
        ["-480", "Phil", "PH%sT", "-873244800000"],
        ["-540", "-", "JST", "-794188800000"],
        ["-480", "Phil", "PH%sT"]
    ],
    "Asia/Qatar": [
        ["-206.13333333333335", "-", "LMT", "-1546387200000"],
        ["-240", "-", "GST", "76204800000"],
        ["-180", "-", "AST"]
    ],
    "Asia/Riyadh": [
        ["-186.86666666666665", "-", "LMT", "-719625600000"],
        ["-180", "-", "AST"]
    ],
    "Asia/Singapore": [
        ["-415.4166666666667", "-", "LMT", "-2177452800000"],
        ["-415.4166666666667", "-", "SMT", "-2038176000000"],
        ["-420", "-", "MALT", "-1167609600000"],
        ["-420", "0:20", "MALST", "-1073001600000"],
        ["-440", "-", "MALT", "-894153600000"],
        ["-450", "-", "MALT", "-879638400000"],
        ["-540", "-", "JST", "-766972800000"],
        ["-450", "-", "MALT", "-138758400000"],
        ["-450", "-", "SGT", "378691200000"],
        ["-480", "-", "SGT"]
    ],
    "Asia/Colombo": [
        ["-319.4", "-", "LMT", "-2808604800000"],
        ["-319.5333333333333", "-", "MMT", "-1988236800000"],
        ["-330", "-", "IST", "-883267200000"],
        ["-330", "0:30", "IHST", "-862617600000"],
        ["-330", "1:00", "IST", "-764028000000"],
        ["-330", "-", "IST", "832982400000"],
        ["-390", "-", "LKT", "846289800000"],
        ["-360", "-", "LKT", "1145061000000"],
        ["-330", "-", "IST"]
    ],
    "Asia/Damascus": [
        ["-145.2", "-", "LMT", "-1546387200000"],
        ["-120", "Syria", "EE%sT"]
    ],
    "Asia/Dushanbe": [
        ["-275.2", "-", "LMT", "-1441152000000"],
        ["-300", "-", "DUST", "-1247529600000"],
        ["-360", "RussiaAsia", "DUS%sT", "670384800000"],
        ["-300", "1:00", "DUSST", "684381600000"],
        ["-300", "-", "TJT"]
    ],
    "Asia/Bangkok": [
        ["-402.06666666666666", "-", "LMT", "-2808604800000"],
        ["-402.06666666666666", "-", "BMT", "-1570060800000"],
        ["-420", "-", "ICT"]
    ],
    "Asia/Ashgabat": [
        ["-233.53333333333333", "-", "LMT", "-1441152000000"],
        ["-240", "-", "ASHT", "-1247529600000"],
        ["-300", "RussiaAsia", "ASH%sT", "670384800000"],
        ["-240", "RussiaAsia", "ASH%sT", "688521600000"],
        ["-240", "RussiaAsia", "TM%sT", "695786400000"],
        ["-300", "-", "TMT"]
    ],
    "Asia/Dubai": [
        ["-221.2", "-", "LMT", "-1546387200000"],
        ["-240", "-", "GST"]
    ],
    "Asia/Samarkand": [
        ["-267.8833333333333", "-", "LMT", "-1441152000000"],
        ["-240", "-", "SAMT", "-1247529600000"],
        ["-300", "-", "SAMT", "354931200000"],
        ["-300", "1:00", "SAMST", "370742400000"],
        ["-360", "-", "TAST", "386467200000"],
        ["-300", "RussiaAsia", "SAM%sT", "683683200000"],
        ["-300", "RussiaAsia", "UZ%sT", "725760000000"],
        ["-300", "-", "UZT"]
    ],
    "Asia/Tashkent": [
        ["-277.18333333333334", "-", "LMT", "-1441152000000"],
        ["-300", "-", "TAST", "-1247529600000"],
        ["-360", "RussiaAsia", "TAS%sT", "670384800000"],
        ["-300", "RussiaAsia", "TAS%sT", "683683200000"],
        ["-300", "RussiaAsia", "UZ%sT", "725760000000"],
        ["-300", "-", "UZT"]
    ],
    "Asia/Ho_Chi_Minh": [
        ["-426.6666666666667", "-", "LMT", "-2005948800000"],
        ["-426.3333333333333", "-", "SMT", "-1855958340000"],
        ["-420", "-", "ICT", "-1819929600000"],
        ["-480", "-", "ICT", "-1220400000000"],
        ["-420", "-", "ICT"]
    ],
    "Asia/Aden": [
        ["-179.9", "-", "LMT", "-599702400000"],
        ["-180", "-", "AST"]
    ],
    "Australia/Darwin": [
        ["-523.3333333333333", "-", "LMT", "-2364076800000"],
        ["-540", "-", "ACST", "-2230156800000"],
        ["-570", "Aus", "AC%sT"]
    ],
    "Australia/Perth": [
        ["-463.4", "-", "LMT", "-2337897600000"],
        ["-480", "Aus", "AW%sT", "-836438400000"],
        ["-480", "AW", "AW%sT"]
    ],
    "Australia/Eucla": [
        ["-515.4666666666667", "-", "LMT", "-2337897600000"],
        ["-525", "Aus", "ACW%sT", "-836438400000"],
        ["-525", "AW", "ACW%sT"]
    ],
    "Australia/Brisbane": [
        ["-612.1333333333333", "-", "LMT", "-2335305600000"],
        ["-600", "Aus", "AE%sT", "62985600000"],
        ["-600", "AQ", "AE%sT"]
    ],
    "Australia/Lindeman": [
        ["-595.9333333333334", "-", "LMT", "-2335305600000"],
        ["-600", "Aus", "AE%sT", "62985600000"],
        ["-600", "AQ", "AE%sT", "709948800000"],
        ["-600", "Holiday", "AE%sT"]
    ],
    "Australia/Adelaide": [
        ["-554.3333333333334", "-", "LMT", "-2364076800000"],
        ["-540", "-", "ACST", "-2230156800000"],
        ["-570", "Aus", "AC%sT", "62985600000"],
        ["-570", "AS", "AC%sT"]
    ],
    "Australia/Hobart": [
        ["-589.2666666666667", "-", "LMT", "-2345760000000"],
        ["-600", "-", "AEST", "-1680472800000"],
        ["-600", "1:00", "AEDT", "-1669852800000"],
        ["-600", "Aus", "AE%sT", "-63244800000"],
        ["-600", "AT", "AE%sT"]
    ],
    "Australia/Currie": [
        ["-575.4666666666666", "-", "LMT", "-2345760000000"],
        ["-600", "-", "AEST", "-1680472800000"],
        ["-600", "1:00", "AEDT", "-1669852800000"],
        ["-600", "Aus", "AE%sT", "47174400000"],
        ["-600", "AT", "AE%sT"]
    ],
    "Australia/Melbourne": [
        ["-579.8666666666667", "-", "LMT", "-2364076800000"],
        ["-600", "Aus", "AE%sT", "62985600000"],
        ["-600", "AV", "AE%sT"]
    ],
    "Australia/Sydney": [
        ["-604.8666666666667", "-", "LMT", "-2364076800000"],
        ["-600", "Aus", "AE%sT", "62985600000"],
        ["-600", "AN", "AE%sT"]
    ],
    "Australia/Broken_Hill": [
        ["-565.8", "-", "LMT", "-2364076800000"],
        ["-600", "-", "AEST", "-2314915200000"],
        ["-540", "-", "ACST", "-2230156800000"],
        ["-570", "Aus", "AC%sT", "62985600000"],
        ["-570", "AN", "AC%sT", "978220800000"],
        ["-570", "AS", "AC%sT"]
    ],
    "Australia/Lord_Howe": [
        ["-636.3333333333334", "-", "LMT", "-2364076800000"],
        ["-600", "-", "AEST", "352252800000"],
        ["-630", "LH", "LH%sT"]
    ],
    "Antarctica/Macquarie": [
        ["0", "-", "zzz", "-2214259200000"],
        ["-600", "-", "AEST", "-1680472800000"],
        ["-600", "1:00", "AEDT", "-1669852800000"],
        ["-600", "Aus", "AE%sT", "-1601683200000"],
        ["0", "-", "zzz", "-687052800000"],
        ["-600", "Aus", "AE%sT", "-63244800000"],
        ["-600", "AT", "AE%sT", "1270350000000"],
        ["-660", "-", "MIST"]
    ],
    "Indian/Christmas": [
        ["-422.8666666666667", "-", "LMT", "-2364076800000"],
        ["-420", "-", "CXT"]
    ],
    "Indian/Cocos": [
        ["-387.6666666666667", "-", "LMT", "-2177539200000"],
        ["-390", "-", "CCT"]
    ],
    "Pacific/Fiji": [
        ["-715.7333333333333", "-", "LMT", "-1709942400000"],
        ["-720", "Fiji", "FJ%sT"]
    ],
    "Pacific/Gambier": [
        ["539.8", "-", "LMT", "-1806710400000"],
        ["540", "-", "GAMT"]
    ],
    "Pacific/Marquesas": [
        ["558", "-", "LMT", "-1806710400000"],
        ["570", "-", "MART"]
    ],
    "Pacific/Tahiti": [
        ["598.2666666666667", "-", "LMT", "-1806710400000"],
        ["600", "-", "TAHT"]
    ],
    "Pacific/Guam": [
        ["861", "-", "LMT", "-3944678400000"],
        ["-579", "-", "LMT", "-2146003200000"],
        ["-600", "-", "GST", "977529600000"],
        ["-600", "-", "ChST"]
    ],
    "Pacific/Tarawa": [
        ["-692.0666666666666", "-", "LMT", "-2146003200000"],
        ["-720", "-", "GILT"]
    ],
    "Pacific/Enderbury": [
        ["684.3333333333334", "-", "LMT", "-2146003200000"],
        ["720", "-", "PHOT", "307584000000"],
        ["660", "-", "PHOT", "820368000000"],
        ["-780", "-", "PHOT"]
    ],
    "Pacific/Kiritimati": [
        ["629.3333333333334", "-", "LMT", "-2146003200000"],
        ["640", "-", "LINT", "307584000000"],
        ["600", "-", "LINT", "820368000000"],
        ["-840", "-", "LINT"]
    ],
    "Pacific/Saipan": [
        ["857", "-", "LMT", "-3944678400000"],
        ["-583", "-", "LMT", "-2146003200000"],
        ["-540", "-", "MPT", "-7948800000"],
        ["-600", "-", "MPT", "977529600000"],
        ["-600", "-", "ChST"]
    ],
    "Pacific/Majuro": [
        ["-684.8", "-", "LMT", "-2146003200000"],
        ["-660", "-", "MHT", "-7948800000"],
        ["-720", "-", "MHT"]
    ],
    "Pacific/Kwajalein": [
        ["-669.3333333333334", "-", "LMT", "-2146003200000"],
        ["-660", "-", "MHT", "-7948800000"],
        ["720", "-", "KWAT", "745804800000"],
        ["-720", "-", "MHT"]
    ],
    "Pacific/Chuuk": [
        ["-607.1333333333333", "-", "LMT", "-2146003200000"],
        ["-600", "-", "CHUT"]
    ],
    "Pacific/Pohnpei": [
        ["-632.8666666666667", "-", "LMT", "-2146003200000"],
        ["-660", "-", "PONT"]
    ],
    "Pacific/Kosrae": [
        ["-651.9333333333334", "-", "LMT", "-2146003200000"],
        ["-660", "-", "KOST", "-7948800000"],
        ["-720", "-", "KOST", "946598400000"],
        ["-660", "-", "KOST"]
    ],
    "Pacific/Nauru": [
        ["-667.6666666666666", "-", "LMT", "-1545091200000"],
        ["-690", "-", "NRT", "-877305600000"],
        ["-540", "-", "JST", "-800928000000"],
        ["-690", "-", "NRT", "294364800000"],
        ["-720", "-", "NRT"]
    ],
    "Pacific/Noumea": [
        ["-665.8", "-", "LMT", "-1829347200000"],
        ["-660", "NC", "NC%sT"]
    ],
    "Pacific/Auckland": [
        ["-699.0666666666666", "-", "LMT", "-3192393600000"],
        ["-690", "NZ", "NZ%sT", "-757382400000"],
        ["-720", "NZ", "NZ%sT"]
    ],
    "Pacific/Chatham": [
        ["-733.8", "-", "LMT", "-3192393600000"],
        ["-735", "-", "CHAST", "-757382400000"],
        ["-765", "Chatham", "CHA%sT"]
    ],
    "Antarctica/McMurdo": "Pacific/Auckland", "Pacific/Rarotonga": [
        ["639.0666666666666", "-", "LMT", "-2146003200000"],
        ["630", "-", "CKT", "279676800000"],
        ["600", "Cook", "CK%sT"]
    ],
    "Pacific/Niue": [
        ["679.6666666666666", "-", "LMT", "-2146003200000"],
        ["680", "-", "NUT", "-568166400000"],
        ["690", "-", "NUT", "276048000000"],
        ["660", "-", "NUT"]
    ],
    "Pacific/Norfolk": [
        ["-671.8666666666667", "-", "LMT", "-2146003200000"],
        ["-672", "-", "NMT", "-568166400000"],
        ["-690", "-", "NFT"]
    ],
    "Pacific/Palau": [
        ["-537.9333333333334", "-", "LMT", "-2146003200000"],
        ["-540", "-", "PWT"]
    ],
    "Pacific/Port_Moresby": [
        ["-588.6666666666666", "-", "LMT", "-2808604800000"],
        ["-588.5333333333334", "-", "PMMT", "-2335305600000"],
        ["-600", "-", "PGT"]
    ],
    "Pacific/Pitcairn": [
        ["520.3333333333333", "-", "LMT", "-2146003200000"],
        ["510", "-", "PNT", "893635200000"],
        ["480", "-", "PST"]
    ],
    "Pacific/Pago_Pago": [
        ["-757.2", "-", "LMT", "-2855692800000"],
        ["682.8", "-", "LMT", "-1830470400000"],
        ["660", "-", "NST", "-86918400000"],
        ["660", "-", "BST", "438998400000"],
        ["660", "-", "SST"]
    ],
    "Pacific/Apia": [
        ["-753.0666666666666", "-", "LMT", "-2855692800000"],
        ["686.9333333333334", "-", "LMT", "-1830470400000"],
        ["690", "-", "WSST", "-599702400000"],
        ["660", "WS", "S%sT", "1325203200000"],
        ["-780", "WS", "WS%sT"]
    ],
    "Pacific/Guadalcanal": [
        ["-639.8", "-", "LMT", "-1806710400000"],
        ["-660", "-", "SBT"]
    ],
    "Pacific/Fakaofo": [
        ["684.9333333333334", "-", "LMT", "-2146003200000"],
        ["660", "-", "TKT", "1325203200000"],
        ["-780", "-", "TKT"]
    ],
    "Pacific/Tongatapu": [
        ["-739.3333333333334", "-", "LMT", "-2146003200000"],
        ["-740", "-", "TOT", "-883699200000"],
        ["-780", "-", "TOT", "946598400000"],
        ["-780", "Tonga", "TO%sT"]
    ],
    "Pacific/Funafuti": [
        ["-716.8666666666667", "-", "LMT", "-2146003200000"],
        ["-720", "-", "TVT"]
    ],
    "Pacific/Midway": [
        ["709.4666666666666", "-", "LMT", "-2146003200000"],
        ["660", "-", "NST", "-428544000000"],
        ["660", "1:00", "NDT", "-420681600000"],
        ["660", "-", "NST", "-86918400000"],
        ["660", "-", "BST", "438998400000"],
        ["660", "-", "SST"]
    ],
    "Pacific/Wake": [
        ["-666.4666666666666", "-", "LMT", "-2146003200000"],
        ["-720", "-", "WAKT"]
    ],
    "Pacific/Efate": [
        ["-673.2666666666667", "-", "LMT", "-1829347200000"],
        ["-660", "Vanuatu", "VU%sT"]
    ],
    "Pacific/Wallis": [
        ["-735.3333333333334", "-", "LMT", "-2146003200000"],
        ["-720", "-", "WFT"]
    ],
    "Africa/Asmera": "Africa/Asmara",
    "Africa/Timbuktu": "Africa/Abidjan",
    "America/Argentina/ComodRivadavia": "America/Argentina/Catamarca",
    "America/Atka": "America/Adak",
    "America/Buenos_Aires": "America/Argentina/Buenos_Aires",
    "America/Catamarca": "America/Argentina/Catamarca",
    "America/Coral_Harbour": "America/Atikokan",
    "America/Cordoba": "America/Argentina/Cordoba",
    "America/Ensenada": "America/Tijuana",
    "America/Fort_Wayne": "America/Indiana/Indianapolis",
    "America/Indianapolis": "America/Indiana/Indianapolis",
    "America/Jujuy": "America/Argentina/Jujuy",
    "America/Knox_IN": "America/Indiana/Knox",
    "America/Louisville": "America/Kentucky/Louisville",
    "America/Mendoza": "America/Argentina/Mendoza",
    "America/Porto_Acre": "America/Rio_Branco",
    "America/Rosario": "America/Argentina/Cordoba",
    "America/Shiprock": "America/Denver",
    "America/Virgin": "America/Port_of_Spain",
    "Antarctica/South_Pole": "Pacific/Auckland",
    "Asia/Ashkhabad": "Asia/Ashgabat",
    "Asia/Calcutta": "Asia/Kolkata",
    "Asia/Chongqing": "Asia/Shanghai",
    "Asia/Chungking": "Asia/Shanghai",
    "Asia/Dacca": "Asia/Dhaka",
    "Asia/Harbin": "Asia/Shanghai",
    "Asia/Kashgar": "Asia/Urumqi",
    "Asia/Katmandu": "Asia/Kathmandu",
    "Asia/Macao": "Asia/Macau",
    "Asia/Saigon": "Asia/Ho_Chi_Minh",
    "Asia/Tel_Aviv": "Asia/Jerusalem",
    "Asia/Thimbu": "Asia/Thimphu",
    "Asia/Ujung_Pandang": "Asia/Makassar",
    "Asia/Ulan_Bator": "Asia/Ulaanbaatar",
    "Atlantic/Faeroe": "Atlantic/Faroe",
    "Atlantic/Jan_Mayen": "Europe/Oslo",
    "Australia/ACT": "Australia/Sydney",
    "Australia/Canberra": "Australia/Sydney",
    "Australia/LHI": "Australia/Lord_Howe",
    "Australia/NSW": "Australia/Sydney",
    "Australia/North": "Australia/Darwin",
    "Australia/Queensland": "Australia/Brisbane",
    "Australia/South": "Australia/Adelaide",
    "Australia/Tasmania": "Australia/Hobart",
    "Australia/Victoria": "Australia/Melbourne",
    "Australia/West": "Australia/Perth",
    "Australia/Yancowinna": "Australia/Broken_Hill",
    "Brazil/Acre": "America/Rio_Branco",
    "Brazil/DeNoronha": "America/Noronha",
    "Brazil/East": "America/Sao_Paulo",
    "Brazil/West": "America/Manaus",
    "Canada/Atlantic": "America/Halifax",
    "Canada/Central": "America/Winnipeg",
    "Canada/East-Saskatchewan": "America/Regina",
    "Canada/Eastern": "America/Toronto",
    "Canada/Mountain": "America/Edmonton",
    "Canada/Newfoundland": "America/St_Johns",
    "Canada/Pacific": "America/Vancouver",
    "Canada/Saskatchewan": "America/Regina",
    "Canada/Yukon": "America/Whitehorse",
    "Chile/Continental": "America/Santiago",
    "Chile/EasterIsland": "Pacific/Easter",
    "Cuba": "America/Havana",
    "Egypt": "Africa/Cairo",
    "Eire": "Europe/Dublin",
    "Europe/Belfast": "Europe/London",
    "Europe/Tiraspol": "Europe/Chisinau",
    "GB": "Europe/London",
    "GB-Eire": "Europe/London",
    "GMT+0": "Etc/GMT",
    "GMT-0": "Etc/GMT",
    "GMT0": "Etc/GMT",
    "Greenwich": "Etc/GMT",
    "Hongkong": "Asia/Hong_Kong",
    "Iceland": "Atlantic/Reykjavik",
    "Iran": "Asia/Tehran",
    "Israel": "Asia/Jerusalem",
    "Jamaica": "America/Jamaica",
    "Japan": "Asia/Tokyo",
    "Kwajalein": "Pacific/Kwajalein",
    "Libya": "Africa/Tripoli",
    "Mexico/BajaNorte": "America/Tijuana",
    "Mexico/BajaSur": "America/Mazatlan",
    "Mexico/General": "America/Mexico_City",
    "NZ": "Pacific/Auckland",
    "NZ-CHAT": "Pacific/Chatham",
    "Navajo": "America/Denver",
    "PRC": "Asia/Shanghai",
    "Pacific/Ponape": "Pacific/Pohnpei",
    "Pacific/Samoa": "Pacific/Pago_Pago",
    "Pacific/Truk": "Pacific/Chuuk",
    "Pacific/Yap": "Pacific/Chuuk",
    "Poland": "Europe/Warsaw",
    "Portugal": "Europe/Lisbon",
    "ROC": "Asia/Taipei",
    "ROK": "Asia/Seoul",
    "Singapore": "Asia/Singapore",
    "Turkey": "Europe/Istanbul",
    "UCT": "Etc/UCT",
    "US/Alaska": "America/Anchorage",
    "US/Aleutian": "America/Adak",
    "US/Arizona": "America/Phoenix",
    "US/Central": "America/Chicago",
    "US/East-Indiana": "America/Indiana/Indianapolis",
    "US/Eastern": "America/New_York",
    "US/Hawaii": "Pacific/Honolulu",
    "US/Indiana-Starke": "America/Indiana/Knox",
    "US/Michigan": "America/Detroit",
    "US/Mountain": "America/Denver",
    "US/Pacific": "America/Los_Angeles",
    "US/Samoa": "Pacific/Pago_Pago",
    "UTC": "Etc/UTC",
    "Universal": "Etc/UTC",
    "W-SU": "Europe/Moscow",
    "Zulu": "Etc/UTC", "Etc/GMT": [
        ["0", "-", "GMT"]
    ],
    "Etc/UTC": [
        ["0", "-", "UTC"]
    ],
    "Etc/UCT": [
        ["0", "-", "UCT"]
    ],
    "GMT": "Etc/GMT",
    "Etc/Universal": "Etc/UTC",
    "Etc/Zulu": "Etc/UTC",
    "Etc/Greenwich": "Etc/GMT",
    "Etc/GMT-0": "Etc/GMT",
    "Etc/GMT+0": "Etc/GMT",
    "Etc/GMT0": "Etc/GMT",
    "Etc/GMT-14": [
        ["-840", "-", "GMT-14"]
    ],
    "Etc/GMT-13": [
        ["-780", "-", "GMT-13"]
    ],
    "Etc/GMT-12": [
        ["-720", "-", "GMT-12"]
    ],
    "Etc/GMT-11": [
        ["-660", "-", "GMT-11"]
    ],
    "Etc/GMT-10": [
        ["-600", "-", "GMT-10"]
    ],
    "Etc/GMT-9": [
        ["-540", "-", "GMT-9"]
    ],
    "Etc/GMT-8": [
        ["-480", "-", "GMT-8"]
    ],
    "Etc/GMT-7": [
        ["-420", "-", "GMT-7"]
    ],
    "Etc/GMT-6": [
        ["-360", "-", "GMT-6"]
    ],
    "Etc/GMT-5": [
        ["-300", "-", "GMT-5"]
    ],
    "Etc/GMT-4": [
        ["-240", "-", "GMT-4"]
    ],
    "Etc/GMT-3": [
        ["-180", "-", "GMT-3"]
    ],
    "Etc/GMT-2": [
        ["-120", "-", "GMT-2"]
    ],
    "Etc/GMT-1": [
        ["-60", "-", "GMT-1"]
    ],
    "Etc/GMT+1": [
        ["60", "-", "GMT+1"]
    ],
    "Etc/GMT+2": [
        ["120", "-", "GMT+2"]
    ],
    "Etc/GMT+3": [
        ["180", "-", "GMT+3"]
    ],
    "Etc/GMT+4": [
        ["240", "-", "GMT+4"]
    ],
    "Etc/GMT+5": [
        ["300", "-", "GMT+5"]
    ],
    "Etc/GMT+6": [
        ["360", "-", "GMT+6"]
    ],
    "Etc/GMT+7": [
        ["420", "-", "GMT+7"]
    ],
    "Etc/GMT+8": [
        ["480", "-", "GMT+8"]
    ],
    "Etc/GMT+9": [
        ["540", "-", "GMT+9"]
    ],
    "Etc/GMT+10": [
        ["600", "-", "GMT+10"]
    ],
    "Etc/GMT+11": [
        ["660", "-", "GMT+11"]
    ],
    "Etc/GMT+12": [
        ["720", "-", "GMT+12"]
    ],
    "Europe/London": [
        ["1.25", "-", "LMT", "-3852662400000"],
        ["0", "GB-Eire", "%s", "-37238400000"],
        ["-60", "-", "BST", "57722400000"],
        ["0", "GB-Eire", "%s", "851990400000"],
        ["0", "EU", "GMT/BST"]
    ],
    "Europe/Jersey": "Europe/London", "Europe/Guernsey": "Europe/London", "Europe/Isle_of_Man": "Europe/London", "Europe/Dublin": [
        ["25", "-", "LMT", "-2821651200000"],
        ["25.35", "-", "DMT", "-1691964000000"],
        ["25.35", "1:00", "IST", "-1680472800000"],
        ["0", "GB-Eire", "%s", "-1517011200000"],
        ["0", "GB-Eire", "GMT/IST", "-942012000000"],
        ["0", "1:00", "IST", "-733356000000"],
        ["0", "-", "GMT", "-719445600000"],
        ["0", "1:00", "IST", "-699487200000"],
        ["0", "-", "GMT", "-684972000000"],
        ["0", "GB-Eire", "GMT/IST", "-37238400000"],
        ["-60", "-", "IST", "57722400000"],
        ["0", "GB-Eire", "GMT/IST", "851990400000"],
        ["0", "EU", "GMT/IST"]
    ],
    "WET": [
        ["0", "EU", "WE%sT"]
    ],
    "CET": [
        ["-60", "C-Eur", "CE%sT"]
    ],
    "MET": [
        ["-60", "C-Eur", "ME%sT"]
    ],
    "EET": [
        ["-120", "EU", "EE%sT"]
    ],
    "Europe/Tirane": [
        ["-79.33333333333333", "-", "LMT", "-1735776000000"],
        ["-60", "-", "CET", "-932342400000"],
        ["-60", "Albania", "CE%sT", "457488000000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Europe/Andorra": [
        ["-6.066666666666667", "-", "LMT", "-2146003200000"],
        ["0", "-", "WET", "-733881600000"],
        ["-60", "-", "CET", "481082400000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Europe/Vienna": [
        ["-65.35", "-", "LMT", "-2422051200000"],
        ["-60", "C-Eur", "CE%sT", "-1546387200000"],
        ["-60", "Austria", "CE%sT", "-938901600000"],
        ["-60", "C-Eur", "CE%sT", "-781048800000"],
        ["-60", "1:00", "CEST", "-780184800000"],
        ["-60", "-", "CET", "-725932800000"],
        ["-60", "Austria", "CE%sT", "378604800000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Europe/Minsk": [
        ["-110.26666666666667", "-", "LMT", "-2808604800000"],
        ["-110", "-", "MMT", "-1441152000000"],
        ["-120", "-", "EET", "-1247529600000"],
        ["-180", "-", "MSK", "-899769600000"],
        ["-60", "C-Eur", "CE%sT", "-804643200000"],
        ["-180", "Russia", "MSK/MSD", "662601600000"],
        ["-180", "-", "MSK", "670384800000"],
        ["-120", "1:00", "EEST", "686109600000"],
        ["-120", "-", "EET", "701827200000"],
        ["-120", "1:00", "EEST", "717552000000"],
        ["-120", "Russia", "EE%sT", "1301191200000"],
        ["-180", "-", "FET"]
    ],
    "Europe/Brussels": [
        ["-17.5", "-", "LMT", "-2808604800000"],
        ["-17.5", "-", "BMT", "-2450952000000"],
        ["0", "-", "WET", "-1740355200000"],
        ["-60", "-", "CET", "-1693699200000"],
        ["-60", "C-Eur", "CE%sT", "-1613826000000"],
        ["0", "Belgium", "WE%sT", "-934668000000"],
        ["-60", "C-Eur", "CE%sT", "-799286400000"],
        ["-60", "Belgium", "CE%sT", "252374400000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Europe/Sofia": [
        ["-93.26666666666667", "-", "LMT", "-2808604800000"],
        ["-116.93333333333332", "-", "IMT", "-2369520000000"],
        ["-120", "-", "EET", "-857250000000"],
        ["-60", "C-Eur", "CE%sT", "-757468800000"],
        ["-60", "-", "CET", "-781045200000"],
        ["-120", "-", "EET", "291769200000"],
        ["-120", "Bulg", "EE%sT", "401853600000"],
        ["-120", "C-Eur", "EE%sT", "694137600000"],
        ["-120", "E-Eur", "EE%sT", "883526400000"],
        ["-120", "EU", "EE%sT"]
    ],
    "Europe/Prague": [
        ["-57.733333333333334", "-", "LMT", "-3755376000000"],
        ["-57.733333333333334", "-", "PMT", "-2469398400000"],
        ["-60", "C-Eur", "CE%sT", "-798069600000"],
        ["-60", "Czech", "CE%sT", "315446400000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Europe/Copenhagen": [
        ["-50.333333333333336", "-", "LMT", "-2493072000000"],
        ["-50.333333333333336", "-", "CMT", "-2398291200000"],
        ["-60", "Denmark", "CE%sT", "-857253600000"],
        ["-60", "C-Eur", "CE%sT", "-781048800000"],
        ["-60", "Denmark", "CE%sT", "347068800000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Atlantic/Faroe": [
        ["27.066666666666666", "-", "LMT", "-1955750400000"],
        ["0", "-", "WET", "378604800000"],
        ["0", "EU", "WE%sT"]
    ],
    "America/Danmarkshavn": [
        ["74.66666666666667", "-", "LMT", "-1686096000000"],
        ["180", "-", "WGT", "323834400000"],
        ["180", "EU", "WG%sT", "851990400000"],
        ["0", "-", "GMT"]
    ],
    "America/Scoresbysund": [
        ["87.86666666666667", "-", "LMT", "-1686096000000"],
        ["120", "-", "CGT", "323834400000"],
        ["120", "C-Eur", "CG%sT", "354672000000"],
        ["60", "EU", "EG%sT"]
    ],
    "America/Godthab": [
        ["206.93333333333334", "-", "LMT", "-1686096000000"],
        ["180", "-", "WGT", "323834400000"],
        ["180", "EU", "WG%sT"]
    ],
    "America/Thule": [
        ["275.1333333333333", "-", "LMT", "-1686096000000"],
        ["240", "Thule", "A%sT"]
    ],
    "Europe/Tallinn": [
        ["-99", "-", "LMT", "-2808604800000"],
        ["-99", "-", "TMT", "-1638316800000"],
        ["-60", "C-Eur", "CE%sT", "-1593820800000"],
        ["-99", "-", "TMT", "-1535932800000"],
        ["-120", "-", "EET", "-927936000000"],
        ["-180", "-", "MSK", "-892944000000"],
        ["-60", "C-Eur", "CE%sT", "-797644800000"],
        ["-180", "Russia", "MSK/MSD", "606880800000"],
        ["-120", "1:00", "EEST", "622605600000"],
        ["-120", "C-Eur", "EE%sT", "906422400000"],
        ["-120", "EU", "EE%sT", "941414400000"],
        ["-120", "-", "EET", "1014249600000"],
        ["-120", "EU", "EE%sT"]
    ],
    "Europe/Helsinki": [
        ["-99.81666666666668", "-", "LMT", "-2890252800000"],
        ["-99.81666666666668", "-", "HMT", "-1535932800000"],
        ["-120", "Finland", "EE%sT", "441676800000"],
        ["-120", "EU", "EE%sT"]
    ],
    "Europe/Mariehamn": "Europe/Helsinki", "Europe/Paris": [
        ["-9.35", "-", "LMT", "-2486678340000"],
        ["-9.35", "-", "PMT", "-1855958340000"],
        ["0", "France", "WE%sT", "-932432400000"],
        ["-60", "C-Eur", "CE%sT", "-800064000000"],
        ["0", "France", "WE%sT", "-766616400000"],
        ["-60", "France", "CE%sT", "252374400000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Europe/Berlin": [
        ["-53.46666666666666", "-", "LMT", "-2422051200000"],
        ["-60", "C-Eur", "CE%sT", "-776556000000"],
        ["-60", "SovietZone", "CE%sT", "-725932800000"],
        ["-60", "Germany", "CE%sT", "347068800000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Europe/Busingen": "Europe/Zurich", "Europe/Gibraltar": [
        ["21.4", "-", "LMT", "-2821651200000"],
        ["0", "GB-Eire", "%s", "-401320800000"],
        ["-60", "-", "CET", "410140800000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Europe/Athens": [
        ["-94.86666666666667", "-", "LMT", "-2344636800000"],
        ["-94.86666666666667", "-", "AMT", "-1686095940000"],
        ["-120", "Greece", "EE%sT", "-904867200000"],
        ["-60", "Greece", "CE%sT", "-812419200000"],
        ["-120", "Greece", "EE%sT", "378604800000"],
        ["-120", "EU", "EE%sT"]
    ],
    "Europe/Budapest": [
        ["-76.33333333333333", "-", "LMT", "-2500934400000"],
        ["-60", "C-Eur", "CE%sT", "-1609545600000"],
        ["-60", "Hungary", "CE%sT", "-906768000000"],
        ["-60", "C-Eur", "CE%sT", "-757468800000"],
        ["-60", "Hungary", "CE%sT", "338954400000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Atlantic/Reykjavik": [
        ["87.4", "-", "LMT", "-4165603200000"],
        ["87.8", "-", "RMT", "-1925078400000"],
        ["60", "Iceland", "IS%sT", "-54774000000"],
        ["0", "-", "GMT"]
    ],
    "Europe/Rome": [
        ["-49.93333333333334", "-", "LMT", "-3259094400000"],
        ["-49.93333333333334", "-", "RMT", "-2403561600000"],
        ["-60", "Italy", "CE%sT", "-857253600000"],
        ["-60", "C-Eur", "CE%sT", "-804816000000"],
        ["-60", "Italy", "CE%sT", "347068800000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Europe/Vatican": "Europe/Rome", "Europe/San_Marino": "Europe/Rome", "Europe/Riga": [
        ["-96.56666666666668", "-", "LMT", "-2808604800000"],
        ["-96.56666666666668", "-", "RMT", "-1632002400000"],
        ["-96.56666666666668", "1:00", "LST", "-1618693200000"],
        ["-96.56666666666668", "-", "RMT", "-1601676000000"],
        ["-96.56666666666668", "1:00", "LST", "-1597266000000"],
        ["-96.56666666666668", "-", "RMT", "-1377302400000"],
        ["-120", "-", "EET", "-928022400000"],
        ["-180", "-", "MSK", "-899510400000"],
        ["-60", "C-Eur", "CE%sT", "-795830400000"],
        ["-180", "Russia", "MSK/MSD", "604720800000"],
        ["-120", "1:00", "EEST", "620618400000"],
        ["-120", "Latvia", "EE%sT", "853804800000"],
        ["-120", "EU", "EE%sT", "951782400000"],
        ["-120", "-", "EET", "978393600000"],
        ["-120", "EU", "EE%sT"]
    ],
    "Europe/Vaduz": "Europe/Zurich", "Europe/Vilnius": [
        ["-101.26666666666667", "-", "LMT", "-2808604800000"],
        ["-84", "-", "WMT", "-1641081600000"],
        ["-95.6", "-", "KMT", "-1585094400000"],
        ["-60", "-", "CET", "-1561248000000"],
        ["-120", "-", "EET", "-1553558400000"],
        ["-60", "-", "CET", "-928195200000"],
        ["-180", "-", "MSK", "-900115200000"],
        ["-60", "C-Eur", "CE%sT", "-802137600000"],
        ["-180", "Russia", "MSK/MSD", "670384800000"],
        ["-120", "1:00", "EEST", "686109600000"],
        ["-120", "C-Eur", "EE%sT", "915062400000"],
        ["-120", "-", "EET", "891133200000"],
        ["-60", "EU", "CE%sT", "941331600000"],
        ["-120", "-", "EET", "1041379200000"],
        ["-120", "EU", "EE%sT"]
    ],
    "Europe/Luxembourg": [
        ["-24.6", "-", "LMT", "-2069712000000"],
        ["-60", "Lux", "CE%sT", "-1612656000000"],
        ["0", "Lux", "WE%sT", "-1269813600000"],
        ["0", "Belgium", "WE%sT", "-935182800000"],
        ["-60", "C-Eur", "WE%sT", "-797979600000"],
        ["-60", "Belgium", "CE%sT", "252374400000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Europe/Malta": [
        ["-58.06666666666666", "-", "LMT", "-2403475200000"],
        ["-60", "Italy", "CE%sT", "-857253600000"],
        ["-60", "C-Eur", "CE%sT", "-781048800000"],
        ["-60", "Italy", "CE%sT", "102384000000"],
        ["-60", "Malta", "CE%sT", "378604800000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Europe/Chisinau": [
        ["-115.33333333333333", "-", "LMT", "-2808604800000"],
        ["-115", "-", "CMT", "-1637107200000"],
        ["-104.4", "-", "BMT", "-1213142400000"],
        ["-120", "Romania", "EE%sT", "-927158400000"],
        ["-120", "1:00", "EEST", "-898128000000"],
        ["-60", "C-Eur", "CE%sT", "-800150400000"],
        ["-180", "Russia", "MSK/MSD", "662601600000"],
        ["-180", "-", "MSK", "641952000000"],
        ["-120", "-", "EET", "694137600000"],
        ["-120", "Russia", "EE%sT", "725760000000"],
        ["-120", "E-Eur", "EE%sT", "883526400000"],
        ["-120", "EU", "EE%sT"]
    ],
    "Europe/Monaco": [
        ["-29.53333333333333", "-", "LMT", "-2486678400000"],
        ["-9.35", "-", "PMT", "-1855958400000"],
        ["0", "France", "WE%sT", "-766616400000"],
        ["-60", "France", "CE%sT", "252374400000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Europe/Amsterdam": [
        ["-19.53333333333333", "-", "LMT", "-4228761600000"],
        ["-19.53333333333333", "Neth", "%s", "-1025740800000"],
        ["-20", "Neth", "NE%sT", "-935020800000"],
        ["-60", "C-Eur", "CE%sT", "-781048800000"],
        ["-60", "Neth", "CE%sT", "252374400000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Europe/Oslo": [
        ["-43", "-", "LMT", "-2366755200000"],
        ["-60", "Norway", "CE%sT", "-927507600000"],
        ["-60", "C-Eur", "CE%sT", "-781048800000"],
        ["-60", "Norway", "CE%sT", "347068800000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Arctic/Longyearbyen": "Europe/Oslo", "Europe/Warsaw": [
        ["-84", "-", "LMT", "-2808604800000"],
        ["-84", "-", "WMT", "-1717027200000"],
        ["-60", "C-Eur", "CE%sT", "-1618693200000"],
        ["-120", "Poland", "EE%sT", "-1501718400000"],
        ["-60", "Poland", "CE%sT", "-931730400000"],
        ["-60", "C-Eur", "CE%sT", "-796867200000"],
        ["-60", "Poland", "CE%sT", "252374400000"],
        ["-60", "W-Eur", "CE%sT", "599529600000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Europe/Lisbon": [
        ["36.75", "-", "LMT", "-2682374400000"],
        ["36.75", "-", "LMT", "-1830384000000"],
        ["0", "Port", "WE%sT", "-118274400000"],
        ["-60", "-", "CET", "212547600000"],
        ["0", "Port", "WE%sT", "433299600000"],
        ["0", "W-Eur", "WE%sT", "717555600000"],
        ["-60", "EU", "CE%sT", "828234000000"],
        ["0", "EU", "WE%sT"]
    ],
    "Atlantic/Azores": [
        ["102.66666666666667", "-", "LMT", "-2682374400000"],
        ["114.53333333333333", "-", "HMT", "-1830384000000"],
        ["120", "Port", "AZO%sT", "-118274400000"],
        ["60", "Port", "AZO%sT", "433299600000"],
        ["60", "W-Eur", "AZO%sT", "717555600000"],
        ["0", "EU", "WE%sT", "733280400000"],
        ["60", "EU", "AZO%sT"]
    ],
    "Atlantic/Madeira": [
        ["67.6", "-", "LMT", "-2682374400000"],
        ["67.6", "-", "FMT", "-1830384000000"],
        ["60", "Port", "MAD%sT", "-118274400000"],
        ["0", "Port", "WE%sT", "433299600000"],
        ["0", "EU", "WE%sT"]
    ],
    "Europe/Bucharest": [
        ["-104.4", "-", "LMT", "-2469398400000"],
        ["-104.4", "-", "BMT", "-1213142400000"],
        ["-120", "Romania", "EE%sT", "354679200000"],
        ["-120", "C-Eur", "EE%sT", "694137600000"],
        ["-120", "Romania", "EE%sT", "788832000000"],
        ["-120", "E-Eur", "EE%sT", "883526400000"],
        ["-120", "EU", "EE%sT"]
    ],
    "Europe/Kaliningrad": [
        ["-82", "-", "LMT", "-2422051200000"],
        ["-60", "C-Eur", "CE%sT", "-757468800000"],
        ["-120", "Poland", "CE%sT", "-725932800000"],
        ["-180", "Russia", "MSK/MSD", "670384800000"],
        ["-120", "Russia", "EE%sT", "1301191200000"],
        ["-180", "-", "FET", "1414288800000"],
        ["-120", "-", "EET"]
    ],
    "Europe/Moscow": [
        ["-150.28333333333333", "-", "LMT", "-2808604800000"],
        ["-150.28333333333333", "-", "MMT", "-1688256000000"],
        ["-151.31666666666666", "Russia", "%s", "-1593813600000"],
        ["-180", "Russia", "%s", "-1522713600000"],
        ["-180", "Russia", "MSK/MSD", "-1491177600000"],
        ["-120", "-", "EET", "-1247529600000"],
        ["-180", "Russia", "MSK/MSD", "670384800000"],
        ["-120", "Russia", "EE%sT", "695786400000"],
        ["-180", "Russia", "MSK/MSD", "1301191200000"],
        ["-240", "-", "MSK", "1414288800000"],
        ["-180", "-", "MSK"]
    ],
    "Europe/Simferopol": [
        ["-136.4", "-", "LMT", "-2808604800000"],
        ["-136", "-", "SMT", "-1441152000000"],
        ["-120", "-", "EET", "-1247529600000"],
        ["-180", "-", "MSK", "-888883200000"],
        ["-60", "C-Eur", "CE%sT", "-811641600000"],
        ["-180", "Russia", "MSK/MSD", "662601600000"],
        ["-180", "-", "MSK", "646797600000"],
        ["-120", "-", "EET", "725760000000"],
        ["-120", "E-Eur", "EE%sT", "767750400000"],
        ["-180", "E-Eur", "MSK/MSD", "828241200000"],
        ["-180", "1:00", "MSD", "846385200000"],
        ["-180", "Russia", "MSK/MSD", "883526400000"],
        ["-180", "-", "MSK", "857178000000"],
        ["-120", "EU", "EE%sT", "1396144800000"],
        ["-240", "-", "MSK", "1414288800000"],
        ["-180", "-", "MSK"]
    ],
    "Europe/Volgograd": [
        ["-177.66666666666666", "-", "LMT", "-1577750400000"],
        ["-180", "-", "TSAT", "-1411862400000"],
        ["-180", "-", "STAT", "-1247529600000"],
        ["-240", "-", "STAT", "-256867200000"],
        ["-240", "Russia", "VOL%sT", "606880800000"],
        ["-180", "Russia", "VOL%sT", "670384800000"],
        ["-240", "-", "VOLT", "701834400000"],
        ["-180", "Russia", "MSK", "1301191200000"],
        ["-240", "-", "MSK", "1414288800000"],
        ["-180", "-", "MSK"]
    ],
    "Europe/Samara": [
        ["-200.33333333333334", "-", "LMT", "-1593813600000"],
        ["-180", "-", "SAMT", "-1247529600000"],
        ["-240", "-", "SAMT", "-1102291200000"],
        ["-240", "Russia", "KUY%sT", "606880800000"],
        ["-180", "Russia", "MSK/MSD", "670384800000"],
        ["-120", "Russia", "EE%sT", "686109600000"],
        ["-180", "-", "KUYT", "687927600000"],
        ["-240", "Russia", "SAM%sT", "1269741600000"],
        ["-180", "Russia", "SAM%sT", "1301191200000"],
        ["-240", "-", "SAMT"]
    ],
    "Asia/Yekaterinburg": [
        ["-242.55", "-", "LMT", "-1688256000000"],
        ["-225.08333333333334", "-", "PMT", "-1592596800000"],
        ["-240", "-", "SVET", "-1247529600000"],
        ["-300", "Russia", "SVE%sT", "670384800000"],
        ["-240", "Russia", "SVE%sT", "695786400000"],
        ["-300", "Russia", "YEK%sT", "1301191200000"],
        ["-360", "-", "YEKT", "1414288800000"],
        ["-300", "-", "YEKT"]
    ],
    "Asia/Omsk": [
        ["-293.5", "-", "LMT", "-1582070400000"],
        ["-300", "-", "OMST", "-1247529600000"],
        ["-360", "Russia", "OMS%sT", "670384800000"],
        ["-300", "Russia", "OMS%sT", "695786400000"],
        ["-360", "Russia", "OMS%sT", "1301191200000"],
        ["-420", "-", "OMST", "1414288800000"],
        ["-360", "-", "OMST"]
    ],
    "Asia/Novosibirsk": [
        ["-331.6666666666667", "-", "LMT", "-1579456800000"],
        ["-360", "-", "NOVT", "-1247529600000"],
        ["-420", "Russia", "NOV%sT", "670384800000"],
        ["-360", "Russia", "NOV%sT", "695786400000"],
        ["-420", "Russia", "NOV%sT", "738115200000"],
        ["-360", "Russia", "NOV%sT", "1301191200000"],
        ["-420", "-", "NOVT", "1414288800000"],
        ["-360", "-", "NOVT"]
    ],
    "Asia/Novokuznetsk": [
        ["-348.8", "-", "LMT", "-1441238400000"],
        ["-360", "-", "KRAT", "-1247529600000"],
        ["-420", "Russia", "KRA%sT", "670384800000"],
        ["-360", "Russia", "KRA%sT", "695786400000"],
        ["-420", "Russia", "KRA%sT", "1269741600000"],
        ["-360", "Russia", "NOV%sT", "1301191200000"],
        ["-420", "-", "NOVT", "1414288800000"],
        ["-420", "-", "KRAT"]
    ],
    "Asia/Krasnoyarsk": [
        ["-371.43333333333334", "-", "LMT", "-1577491200000"],
        ["-360", "-", "KRAT", "-1247529600000"],
        ["-420", "Russia", "KRA%sT", "670384800000"],
        ["-360", "Russia", "KRA%sT", "695786400000"],
        ["-420", "Russia", "KRA%sT", "1301191200000"],
        ["-480", "-", "KRAT", "1414288800000"],
        ["-420", "-", "KRAT"]
    ],
    "Asia/Irkutsk": [
        ["-417.0833333333333", "-", "LMT", "-2808604800000"],
        ["-417.0833333333333", "-", "IMT", "-1575849600000"],
        ["-420", "-", "IRKT", "-1247529600000"],
        ["-480", "Russia", "IRK%sT", "670384800000"],
        ["-420", "Russia", "IRK%sT", "695786400000"],
        ["-480", "Russia", "IRK%sT", "1301191200000"],
        ["-540", "-", "IRKT", "1414288800000"],
        ["-480", "-", "IRKT"]
    ],
    "Asia/Chita": [
        ["-453.8666666666667", "-", "LMT", "-1579392000000"],
        ["-480", "-", "YAKT", "-1247529600000"],
        ["-540", "Russia", "YAK%sT", "670384800000"],
        ["-480", "Russia", "YAK%sT", "695786400000"],
        ["-540", "Russia", "YAK%sT", "1301191200000"],
        ["-600", "-", "YAKT", "1414288800000"],
        ["-480", "-", "IRKT"]
    ],
    "Asia/Yakutsk": [
        ["-518.9666666666667", "-", "LMT", "-1579392000000"],
        ["-480", "-", "YAKT", "-1247529600000"],
        ["-540", "Russia", "YAK%sT", "670384800000"],
        ["-480", "Russia", "YAK%sT", "695786400000"],
        ["-540", "Russia", "YAK%sT", "1301191200000"],
        ["-600", "-", "YAKT", "1414288800000"],
        ["-540", "-", "YAKT"]
    ],
    "Asia/Vladivostok": [
        ["-527.5166666666667", "-", "LMT", "-1487289600000"],
        ["-540", "-", "VLAT", "-1247529600000"],
        ["-600", "Russia", "VLA%sT", "670384800000"],
        ["-540", "Russia", "VLA%sT", "695786400000"],
        ["-600", "Russia", "VLA%sT", "1301191200000"],
        ["-660", "-", "VLAT", "1414288800000"],
        ["-600", "-", "VLAT"]
    ],
    "Asia/Khandyga": [
        ["-542.2166666666666", "-", "LMT", "-1579392000000"],
        ["-480", "-", "YAKT", "-1247529600000"],
        ["-540", "Russia", "YAK%sT", "670384800000"],
        ["-480", "Russia", "YAK%sT", "695786400000"],
        ["-540", "Russia", "YAK%sT", "1104451200000"],
        ["-600", "Russia", "VLA%sT", "1301191200000"],
        ["-660", "-", "VLAT", "1315872000000"],
        ["-600", "-", "YAKT", "1414288800000"],
        ["-540", "-", "YAKT"]
    ],
    "Asia/Sakhalin": [
        ["-570.8", "-", "LMT", "-2031004800000"],
        ["-540", "-", "JCST", "-1017792000000"],
        ["-540", "-", "JST", "-768528000000"],
        ["-660", "Russia", "SAK%sT", "670384800000"],
        ["-600", "Russia", "SAK%sT", "695786400000"],
        ["-660", "Russia", "SAK%sT", "857181600000"],
        ["-600", "Russia", "SAK%sT", "1301191200000"],
        ["-660", "-", "SAKT", "1414288800000"],
        ["-600", "-", "SAKT"]
    ],
    "Asia/Magadan": [
        ["-603.2", "-", "LMT", "-1441152000000"],
        ["-600", "-", "MAGT", "-1247529600000"],
        ["-660", "Russia", "MAG%sT", "670384800000"],
        ["-600", "Russia", "MAG%sT", "695786400000"],
        ["-660", "Russia", "MAG%sT", "1301191200000"],
        ["-720", "-", "MAGT", "1414288800000"],
        ["-600", "-", "MAGT"]
    ],
    "Asia/Srednekolymsk": [
        ["-614.8666666666667", "-", "LMT", "-1441152000000"],
        ["-600", "-", "MAGT", "-1247529600000"],
        ["-660", "Russia", "MAG%sT", "670384800000"],
        ["-600", "Russia", "MAG%sT", "695786400000"],
        ["-660", "Russia", "MAG%sT", "1301191200000"],
        ["-720", "-", "MAGT", "1414288800000"],
        ["-660", "-", "SRET"]
    ],
    "Asia/Ust-Nera": [
        ["-572.9", "-", "LMT", "-1579392000000"],
        ["-480", "-", "YAKT", "-1247529600000"],
        ["-540", "Russia", "YAKT", "354931200000"],
        ["-660", "Russia", "MAG%sT", "670384800000"],
        ["-600", "Russia", "MAG%sT", "695786400000"],
        ["-660", "Russia", "MAG%sT", "1301191200000"],
        ["-720", "-", "MAGT", "1315872000000"],
        ["-660", "-", "VLAT", "1414288800000"],
        ["-600", "-", "VLAT"]
    ],
    "Asia/Kamchatka": [
        ["-634.6", "-", "LMT", "-1487721600000"],
        ["-660", "-", "PETT", "-1247529600000"],
        ["-720", "Russia", "PET%sT", "670384800000"],
        ["-660", "Russia", "PET%sT", "695786400000"],
        ["-720", "Russia", "PET%sT", "1269741600000"],
        ["-660", "Russia", "PET%sT", "1301191200000"],
        ["-720", "-", "PETT"]
    ],
    "Asia/Anadyr": [
        ["-709.9333333333334", "-", "LMT", "-1441152000000"],
        ["-720", "-", "ANAT", "-1247529600000"],
        ["-780", "Russia", "ANA%sT", "386467200000"],
        ["-720", "Russia", "ANA%sT", "670384800000"],
        ["-660", "Russia", "ANA%sT", "695786400000"],
        ["-720", "Russia", "ANA%sT", "1269741600000"],
        ["-660", "Russia", "ANA%sT", "1301191200000"],
        ["-720", "-", "ANAT"]
    ],
    "Europe/Belgrade": [
        ["-82", "-", "LMT", "-2682374400000"],
        ["-60", "-", "CET", "-905821200000"],
        ["-60", "C-Eur", "CE%sT", "-757468800000"],
        ["-60", "-", "CET", "-777938400000"],
        ["-60", "1:00", "CEST", "-766620000000"],
        ["-60", "-", "CET", "407203200000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Europe/Ljubljana": "Europe/Belgrade",
    "Europe/Podgorica": "Europe/Belgrade",
    "Europe/Sarajevo": "Europe/Belgrade",
    "Europe/Skopje": "Europe/Belgrade",
    "Europe/Zagreb": "Europe/Belgrade",
    "Europe/Bratislava": "Europe/Prague",
    "Europe/Madrid": [
        ["14.733333333333334", "-", "LMT", "-2177452800000"],
        ["0", "Spain", "WE%sT", "-733881600000"],
        ["-60", "Spain", "CE%sT", "315446400000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Africa/Ceuta": [
        ["21.26666666666667", "-", "LMT", "-2146003200000"],
        ["0", "-", "WET", "-1630112400000"],
        ["0", "1:00", "WEST", "-1616806800000"],
        ["0", "-", "WET", "-1420156800000"],
        ["0", "Spain", "WE%sT", "-1262390400000"],
        ["0", "SpainAfrica", "WE%sT", "448243200000"],
        ["-60", "-", "CET", "536371200000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Atlantic/Canary": [
        ["61.6", "-", "LMT", "-1509667200000"],
        ["60", "-", "CANT", "-733878000000"],
        ["0", "-", "WET", "323827200000"],
        ["0", "1:00", "WEST", "338947200000"],
        ["0", "EU", "WE%sT"]
    ],
    "Europe/Stockholm": [
        ["-72.2", "-", "LMT", "-2871676800000"],
        ["-60.233333333333334", "-", "SET", "-2208988800000"],
        ["-60", "-", "CET", "-1692493200000"],
        ["-60", "1:00", "CEST", "-1680476400000"],
        ["-60", "-", "CET", "347068800000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Europe/Zurich": [
        ["-34.13333333333333", "-", "LMT", "-3675196800000"],
        ["-29.76666666666667", "-", "BMT", "-2385244800000"],
        ["-60", "Swiss", "CE%sT", "378604800000"],
        ["-60", "EU", "CE%sT"]
    ],
    "Europe/Istanbul": [
        ["-115.86666666666667", "-", "LMT", "-2808604800000"],
        ["-116.93333333333332", "-", "IMT", "-1869868800000"],
        ["-120", "Turkey", "EE%sT", "277257600000"],
        ["-180", "Turkey", "TR%sT", "482803200000"],
        ["-120", "Turkey", "EE%sT", "1199059200000"],
        ["-120", "EU", "EE%sT", "1301187600000"],
        ["-120", "-", "EET", "1301274000000"],
        ["-120", "EU", "EE%sT", "1396141200000"],
        ["-120", "-", "EET", "1396227600000"],
        ["-120", "EU", "EE%sT"]
    ],
    "Asia/Istanbul": "Europe/Istanbul", "Europe/Kiev": [
        ["-122.06666666666668", "-", "LMT", "-2808604800000"],
        ["-122.06666666666668", "-", "KMT", "-1441152000000"],
        ["-120", "-", "EET", "-1247529600000"],
        ["-180", "-", "MSK", "-892512000000"],
        ["-60", "C-Eur", "CE%sT", "-825379200000"],
        ["-180", "Russia", "MSK/MSD", "646797600000"],
        ["-120", "1:00", "EEST", "686113200000"],
        ["-120", "E-Eur", "EE%sT", "820368000000"],
        ["-120", "EU", "EE%sT"]
    ],
    "Europe/Uzhgorod": [
        ["-89.2", "-", "LMT", "-2500934400000"],
        ["-60", "-", "CET", "-915235200000"],
        ["-60", "C-Eur", "CE%sT", "-796867200000"],
        ["-60", "1:00", "CEST", "-794707200000"],
        ["-60", "-", "CET", "-773452800000"],
        ["-180", "Russia", "MSK/MSD", "662601600000"],
        ["-180", "-", "MSK", "646797600000"],
        ["-60", "-", "CET", "670388400000"],
        ["-120", "-", "EET", "725760000000"],
        ["-120", "E-Eur", "EE%sT", "820368000000"],
        ["-120", "EU", "EE%sT"]
    ],
    "Europe/Zaporozhye": [
        ["-140.66666666666666", "-", "LMT", "-2808604800000"],
        ["-140", "-", "CUT", "-1441152000000"],
        ["-120", "-", "EET", "-1247529600000"],
        ["-180", "-", "MSK", "-894758400000"],
        ["-60", "C-Eur", "CE%sT", "-826416000000"],
        ["-180", "Russia", "MSK/MSD", "670384800000"],
        ["-120", "E-Eur", "EE%sT", "820368000000"],
        ["-120", "EU", "EE%sT"]
    ],
    "EST": [
        ["300", "-", "EST"]
    ],
    "MST": [
        ["420", "-", "MST"]
    ],
    "HST": [
        ["600", "-", "HST"]
    ],
    "EST5EDT": [
        ["300", "US", "E%sT"]
    ],
    "CST6CDT": [
        ["360", "US", "C%sT"]
    ],
    "MST7MDT": [
        ["420", "US", "M%sT"]
    ],
    "PST8PDT": [
        ["480", "US", "P%sT"]
    ],
    "America/New_York": [
        ["296.0333333333333", "-", "LMT", "-2717668562000"],
        ["300", "US", "E%sT", "-1546387200000"],
        ["300", "NYC", "E%sT", "-852163200000"],
        ["300", "US", "E%sT", "-725932800000"],
        ["300", "NYC", "E%sT", "-63244800000"],
        ["300", "US", "E%sT"]
    ],
    "America/Chicago": [
        ["350.6", "-", "LMT", "-2717668236000"],
        ["360", "US", "C%sT", "-1546387200000"],
        ["360", "Chicago", "C%sT", "-1067810400000"],
        ["300", "-", "EST", "-1045432800000"],
        ["360", "Chicago", "C%sT", "-852163200000"],
        ["360", "US", "C%sT", "-725932800000"],
        ["360", "Chicago", "C%sT", "-63244800000"],
        ["360", "US", "C%sT"]
    ],
    "America/North_Dakota/Center": [
        ["405.2", "-", "LMT", "-2717667912000"],
        ["420", "US", "M%sT", "719978400000"],
        ["360", "US", "C%sT"]
    ],
    "America/North_Dakota/New_Salem": [
        ["405.65", "-", "LMT", "-2717667939000"],
        ["420", "US", "M%sT", "1067133600000"],
        ["360", "US", "C%sT"]
    ],
    "America/North_Dakota/Beulah": [
        ["407.1166666666667", "-", "LMT", "-2717668027000"],
        ["420", "US", "M%sT", "1289095200000"],
        ["360", "US", "C%sT"]
    ],
    "America/Denver": [
        ["419.93333333333334", "-", "LMT", "-2717668796000"],
        ["420", "US", "M%sT", "-1546387200000"],
        ["420", "Denver", "M%sT", "-852163200000"],
        ["420", "US", "M%sT", "-725932800000"],
        ["420", "Denver", "M%sT", "-63244800000"],
        ["420", "US", "M%sT"]
    ],
    "America/Los_Angeles": [
        ["472.9666666666667", "-", "LMT", "-2717668378000"],
        ["480", "US", "P%sT", "-725932800000"],
        ["480", "CA", "P%sT", "-63244800000"],
        ["480", "US", "P%sT"]
    ],
    "America/Juneau": [
        ["-902.3166666666666", "-", "LMT", "-3225312000000"],
        ["537.6833333333334", "-", "LMT", "-2188987200000"],
        ["480", "-", "PST", "-852163200000"],
        ["480", "US", "P%sT", "-725932800000"],
        ["480", "-", "PST", "-86400000"],
        ["480", "US", "P%sT", "325648800000"],
        ["540", "US", "Y%sT", "341373600000"],
        ["480", "US", "P%sT", "436327200000"],
        ["540", "US", "Y%sT", "438998400000"],
        ["540", "US", "AK%sT"]
    ],
    "America/Sitka": [
        ["-898.7833333333334", "-", "LMT", "-3225312000000"],
        ["541.2166666666666", "-", "LMT", "-2188987200000"],
        ["480", "-", "PST", "-852163200000"],
        ["480", "US", "P%sT", "-725932800000"],
        ["480", "-", "PST", "-86400000"],
        ["480", "US", "P%sT", "436327200000"],
        ["540", "US", "Y%sT", "438998400000"],
        ["540", "US", "AK%sT"]
    ],
    "America/Metlakatla": [
        ["-913.7", "-", "LMT", "-3225312000000"],
        ["526.3", "-", "LMT", "-2188987200000"],
        ["480", "-", "PST", "-852163200000"],
        ["480", "US", "P%sT", "-725932800000"],
        ["480", "-", "PST", "-86400000"],
        ["480", "US", "P%sT", "436327200000"],
        ["480", "-", "PST"]
    ],
    "America/Yakutat": [
        ["-881.0833333333334", "-", "LMT", "-3225312000000"],
        ["558.9166666666666", "-", "LMT", "-2188987200000"],
        ["540", "-", "YST", "-852163200000"],
        ["540", "US", "Y%sT", "-725932800000"],
        ["540", "-", "YST", "-86400000"],
        ["540", "US", "Y%sT", "438998400000"],
        ["540", "US", "AK%sT"]
    ],
    "America/Anchorage": [
        ["-840.4", "-", "LMT", "-3225312000000"],
        ["599.6", "-", "LMT", "-2188987200000"],
        ["600", "-", "CAT", "-852163200000"],
        ["600", "US", "CAT/CAWT", "-769395600000"],
        ["600", "US", "CAT/CAPT", "-725932800000"],
        ["600", "-", "CAT", "-86918400000"],
        ["600", "-", "AHST", "-86400000"],
        ["600", "US", "AH%sT", "436327200000"],
        ["540", "US", "Y%sT", "438998400000"],
        ["540", "US", "AK%sT"]
    ],
    "America/Nome": [
        ["-778.35", "-", "LMT", "-3225312000000"],
        ["661.6333333333333", "-", "LMT", "-2188987200000"],
        ["660", "-", "NST", "-852163200000"],
        ["660", "US", "N%sT", "-725932800000"],
        ["660", "-", "NST", "-86918400000"],
        ["660", "-", "BST", "-86400000"],
        ["660", "US", "B%sT", "436327200000"],
        ["540", "US", "Y%sT", "438998400000"],
        ["540", "US", "AK%sT"]
    ],
    "America/Adak": [
        ["-733.35", "-", "LMT", "-3225312000000"],
        ["706.6333333333333", "-", "LMT", "-2188987200000"],
        ["660", "-", "NST", "-852163200000"],
        ["660", "US", "N%sT", "-725932800000"],
        ["660", "-", "NST", "-86918400000"],
        ["660", "-", "BST", "-86400000"],
        ["660", "US", "B%sT", "436327200000"],
        ["600", "US", "AH%sT", "438998400000"],
        ["600", "US", "HA%sT"]
    ],
    "Pacific/Honolulu": [
        ["631.4333333333334", "-", "LMT", "-2334139200000"],
        ["630", "-", "HST", "-1157320800000"],
        ["630", "1:00", "HDT", "-1155470400000"],
        ["630", "-", "HST", "-880236000000"],
        ["630", "1:00", "HDT", "-765410400000"],
        ["630", "-", "HST", "-712188000000"],
        ["600", "-", "HST"]
    ],
    "Pacific/Johnston": "Pacific/Honolulu", "America/Phoenix": [
        ["448.3", "-", "LMT", "-2717670498000"],
        ["420", "US", "M%sT", "-820540740000"],
        ["420", "-", "MST", "-812678340000"],
        ["420", "US", "M%sT", "-796867140000"],
        ["420", "-", "MST", "-63244800000"],
        ["420", "US", "M%sT", "-56246400000"],
        ["420", "-", "MST"]
    ],
    "America/Boise": [
        ["464.81666666666666", "-", "LMT", "-2717667889000"],
        ["480", "US", "P%sT", "-1471816800000"],
        ["420", "US", "M%sT", "157680000000"],
        ["420", "-", "MST", "129088800000"],
        ["420", "US", "M%sT"]
    ],
    "America/Indiana/Indianapolis": [
        ["344.6333333333333", "-", "LMT", "-2717667878000"],
        ["360", "US", "C%sT", "-1546387200000"],
        ["360", "Indianapolis", "C%sT", "-852163200000"],
        ["360", "US", "C%sT", "-725932800000"],
        ["360", "Indianapolis", "C%sT", "-463615200000"],
        ["300", "-", "EST", "-386805600000"],
        ["360", "-", "CST", "-368661600000"],
        ["300", "-", "EST", "-86400000"],
        ["300", "US", "E%sT", "62985600000"],
        ["300", "-", "EST", "1167523200000"],
        ["300", "US", "E%sT"]
    ],
    "America/Indiana/Marengo": [
        ["345.3833333333333", "-", "LMT", "-2717667923000"],
        ["360", "US", "C%sT", "-568166400000"],
        ["360", "Marengo", "C%sT", "-273708000000"],
        ["300", "-", "EST", "-86400000"],
        ["300", "US", "E%sT", "126669600000"],
        ["360", "1:00", "CDT", "152071200000"],
        ["300", "US", "E%sT", "220838400000"],
        ["300", "-", "EST", "1167523200000"],
        ["300", "US", "E%sT"]
    ],
    "America/Indiana/Vincennes": [
        ["350.1166666666667", "-", "LMT", "-2717668207000"],
        ["360", "US", "C%sT", "-725932800000"],
        ["360", "Vincennes", "C%sT", "-179359200000"],
        ["300", "-", "EST", "-86400000"],
        ["300", "US", "E%sT", "62985600000"],
        ["300", "-", "EST", "1143943200000"],
        ["360", "US", "C%sT", "1194141600000"],
        ["300", "US", "E%sT"]
    ],
    "America/Indiana/Tell_City": [
        ["347.05", "-", "LMT", "-2717668023000"],
        ["360", "US", "C%sT", "-725932800000"],
        ["360", "Perry", "C%sT", "-179359200000"],
        ["300", "-", "EST", "-86400000"],
        ["300", "US", "E%sT", "62985600000"],
        ["300", "-", "EST", "1143943200000"],
        ["360", "US", "C%sT"]
    ],
    "America/Indiana/Petersburg": [
        ["349.1166666666667", "-", "LMT", "-2717668147000"],
        ["360", "US", "C%sT", "-441936000000"],
        ["360", "Pike", "C%sT", "-147909600000"],
        ["300", "-", "EST", "-100130400000"],
        ["360", "US", "C%sT", "247024800000"],
        ["300", "-", "EST", "1143943200000"],
        ["360", "US", "C%sT", "1194141600000"],
        ["300", "US", "E%sT"]
    ],
    "America/Indiana/Knox": [
        ["346.5", "-", "LMT", "-2717667990000"],
        ["360", "US", "C%sT", "-694396800000"],
        ["360", "Starke", "C%sT", "-242258400000"],
        ["300", "-", "EST", "-195084000000"],
        ["360", "US", "C%sT", "688528800000"],
        ["300", "-", "EST", "1143943200000"],
        ["360", "US", "C%sT"]
    ],
    "America/Indiana/Winamac": [
        ["346.4166666666667", "-", "LMT", "-2717667985000"],
        ["360", "US", "C%sT", "-725932800000"],
        ["360", "Pulaski", "C%sT", "-273708000000"],
        ["300", "-", "EST", "-86400000"],
        ["300", "US", "E%sT", "62985600000"],
        ["300", "-", "EST", "1143943200000"],
        ["360", "US", "C%sT", "1173578400000"],
        ["300", "US", "E%sT"]
    ],
    "America/Indiana/Vevay": [
        ["340.2666666666667", "-", "LMT", "-2717667616000"],
        ["360", "US", "C%sT", "-495064800000"],
        ["300", "-", "EST", "-86400000"],
        ["300", "US", "E%sT", "126144000000"],
        ["300", "-", "EST", "1167523200000"],
        ["300", "US", "E%sT"]
    ],
    "America/Kentucky/Louisville": [
        ["343.0333333333333", "-", "LMT", "-2717667782000"],
        ["360", "US", "C%sT", "-1514851200000"],
        ["360", "Louisville", "C%sT", "-852163200000"],
        ["360", "US", "C%sT", "-725932800000"],
        ["360", "Louisville", "C%sT", "-266450400000"],
        ["300", "-", "EST", "-31622400000"],
        ["300", "US", "E%sT", "126669600000"],
        ["360", "1:00", "CDT", "152071200000"],
        ["300", "US", "E%sT"]
    ],
    "America/Kentucky/Monticello": [
        ["339.4", "-", "LMT", "-2717667564000"],
        ["360", "US", "C%sT", "-725932800000"],
        ["360", "-", "CST", "-31622400000"],
        ["360", "US", "C%sT", "972784800000"],
        ["300", "US", "E%sT"]
    ],
    "America/Detroit": [
        ["332.18333333333334", "-", "LMT", "-2019772800000"],
        ["360", "-", "CST", "-1724104800000"],
        ["300", "-", "EST", "-852163200000"],
        ["300", "US", "E%sT", "-725932800000"],
        ["300", "Detroit", "E%sT", "126144000000"],
        ["300", "US", "E%sT", "189216000000"],
        ["300", "-", "EST", "167796000000"],
        ["300", "US", "E%sT"]
    ],
    "America/Menominee": [
        ["350.45", "-", "LMT", "-2659780800000"],
        ["360", "US", "C%sT", "-725932800000"],
        ["360", "Menominee", "C%sT", "-21506400000"],
        ["300", "-", "EST", "104896800000"],
        ["360", "US", "C%sT"]
    ],
    "America/St_Johns": [
        ["210.86666666666665", "-", "LMT", "-2682374400000"],
        ["210.86666666666665", "StJohns", "N%sT", "-1609545600000"],
        ["210.86666666666665", "Canada", "N%sT", "-1578009600000"],
        ["210.86666666666665", "StJohns", "N%sT", "-1096934400000"],
        ["210", "StJohns", "N%sT", "-872380800000"],
        ["210", "Canada", "N%sT", "-725932800000"],
        ["210", "StJohns", "N%sT", "1320105600000"],
        ["210", "Canada", "N%sT"]
    ],
    "America/Goose_Bay": [
        ["241.66666666666666", "-", "LMT", "-2682374400000"],
        ["210.86666666666665", "-", "NST", "-1609545600000"],
        ["210.86666666666665", "Canada", "N%sT", "-1578009600000"],
        ["210.86666666666665", "-", "NST", "-1096934400000"],
        ["210", "-", "NST", "-1041465600000"],
        ["210", "StJohns", "N%sT", "-872380800000"],
        ["210", "Canada", "N%sT", "-725932800000"],
        ["210", "StJohns", "N%sT", "-119916000000"],
        ["240", "StJohns", "A%sT", "1320105600000"],
        ["240", "Canada", "A%sT"]
    ],
    "America/Halifax": [
        ["254.4", "-", "LMT", "-2131660800000"],
        ["240", "Halifax", "A%sT", "-1609545600000"],
        ["240", "Canada", "A%sT", "-1578009600000"],
        ["240", "Halifax", "A%sT", "-880236000000"],
        ["240", "Canada", "A%sT", "-725932800000"],
        ["240", "Halifax", "A%sT", "157680000000"],
        ["240", "Canada", "A%sT"]
    ],
    "America/Glace_Bay": [
        ["239.8", "-", "LMT", "-2131660800000"],
        ["240", "Canada", "A%sT", "-505008000000"],
        ["240", "Halifax", "A%sT", "-473472000000"],
        ["240", "-", "AST", "94608000000"],
        ["240", "Halifax", "A%sT", "157680000000"],
        ["240", "Canada", "A%sT"]
    ],
    "America/Moncton": [
        ["259.1333333333333", "-", "LMT", "-2715897600000"],
        ["300", "-", "EST", "-2131660800000"],
        ["240", "Canada", "A%sT", "-1136160000000"],
        ["240", "Moncton", "A%sT", "-852163200000"],
        ["240", "Canada", "A%sT", "-725932800000"],
        ["240", "Moncton", "A%sT", "126144000000"],
        ["240", "Canada", "A%sT", "757296000000"],
        ["240", "Moncton", "A%sT", "1199059200000"],
        ["240", "Canada", "A%sT"]
    ],
    "America/Blanc-Sablon": [
        ["228.46666666666667", "-", "LMT", "-2682374400000"],
        ["240", "Canada", "A%sT", "31449600000"],
        ["240", "-", "AST"]
    ],
    "America/Montreal": [
        ["294.2666666666667", "-", "LMT", "-2682374400000"],
        ["300", "Mont", "E%sT", "-1609545600000"],
        ["300", "Canada", "E%sT", "-1578009600000"],
        ["300", "Mont", "E%sT", "-880236000000"],
        ["300", "Canada", "E%sT", "-725932800000"],
        ["300", "Mont", "E%sT", "157680000000"],
        ["300", "Canada", "E%sT"]
    ],
    "America/Toronto": [
        ["317.5333333333333", "-", "LMT", "-2335305600000"],
        ["300", "Canada", "E%sT", "-1578009600000"],
        ["300", "Toronto", "E%sT", "-880236000000"],
        ["300", "Canada", "E%sT", "-725932800000"],
        ["300", "Toronto", "E%sT", "157680000000"],
        ["300", "Canada", "E%sT"]
    ],
    "America/Thunder_Bay": [
        ["357", "-", "LMT", "-2335305600000"],
        ["360", "-", "CST", "-1862006400000"],
        ["300", "-", "EST", "-852163200000"],
        ["300", "Canada", "E%sT", "31449600000"],
        ["300", "Toronto", "E%sT", "126144000000"],
        ["300", "-", "EST", "157680000000"],
        ["300", "Canada", "E%sT"]
    ],
    "America/Nipigon": [
        ["353.06666666666666", "-", "LMT", "-2335305600000"],
        ["300", "Canada", "E%sT", "-923270400000"],
        ["300", "1:00", "EDT", "-880236000000"],
        ["300", "Canada", "E%sT"]
    ],
    "America/Rainy_River": [
        ["378.2666666666667", "-", "LMT", "-2335305600000"],
        ["360", "Canada", "C%sT", "-923270400000"],
        ["360", "1:00", "CDT", "-880236000000"],
        ["360", "Canada", "C%sT"]
    ],
    "America/Atikokan": [
        ["366.4666666666667", "-", "LMT", "-2335305600000"],
        ["360", "Canada", "C%sT", "-923270400000"],
        ["360", "1:00", "CDT", "-880236000000"],
        ["360", "Canada", "C%sT", "-765410400000"],
        ["300", "-", "EST"]
    ],
    "America/Winnipeg": [
        ["388.6", "-", "LMT", "-2602281600000"],
        ["360", "Winn", "C%sT", "1167523200000"],
        ["360", "Canada", "C%sT"]
    ],
    "America/Regina": [
        ["418.6", "-", "LMT", "-2030227200000"],
        ["420", "Regina", "M%sT", "-307749600000"],
        ["360", "-", "CST"]
    ],
    "America/Swift_Current": [
        ["431.3333333333333", "-", "LMT", "-2030227200000"],
        ["420", "Canada", "M%sT", "-749599200000"],
        ["420", "Regina", "M%sT", "-599702400000"],
        ["420", "Swift", "M%sT", "70941600000"],
        ["360", "-", "CST"]
    ],
    "America/Edmonton": [
        ["453.8666666666667", "-", "LMT", "-1998691200000"],
        ["420", "Edm", "M%sT", "567907200000"],
        ["420", "Canada", "M%sT"]
    ],
    "America/Vancouver": [
        ["492.4666666666667", "-", "LMT", "-2682374400000"],
        ["480", "Vanc", "P%sT", "567907200000"],
        ["480", "Canada", "P%sT"]
    ],
    "America/Dawson_Creek": [
        ["480.93333333333334", "-", "LMT", "-2682374400000"],
        ["480", "Canada", "P%sT", "-694396800000"],
        ["480", "Vanc", "P%sT", "83988000000"],
        ["420", "-", "MST"]
    ],
    "America/Creston": [
        ["466.06666666666666", "-", "LMT", "-2682374400000"],
        ["420", "-", "MST", "-1680480000000"],
        ["480", "-", "PST", "-1627862400000"],
        ["420", "-", "MST"]
    ],
    "America/Pangnirtung": [
        ["0", "-", "zzz", "-1514851200000"],
        ["240", "NT_YK", "A%sT", "796701600000"],
        ["300", "Canada", "E%sT", "941335200000"],
        ["360", "Canada", "C%sT", "972784800000"],
        ["300", "Canada", "E%sT"]
    ],
    "America/Iqaluit": [
        ["0", "-", "zzz", "-865296000000"],
        ["300", "NT_YK", "E%sT", "941335200000"],
        ["360", "Canada", "C%sT", "972784800000"],
        ["300", "Canada", "E%sT"]
    ],
    "America/Resolute": [
        ["0", "-", "zzz", "-704937600000"],
        ["360", "NT_YK", "C%sT", "972784800000"],
        ["300", "-", "EST", "986094000000"],
        ["360", "Canada", "C%sT", "1162087200000"],
        ["300", "-", "EST", "1173582000000"],
        ["360", "Canada", "C%sT"]
    ],
    "America/Rankin_Inlet": [
        ["0", "-", "zzz", "-378777600000"],
        ["360", "NT_YK", "C%sT", "972784800000"],
        ["300", "-", "EST", "986094000000"],
        ["360", "Canada", "C%sT"]
    ],
    "America/Cambridge_Bay": [
        ["0", "-", "zzz", "-1546387200000"],
        ["420", "NT_YK", "M%sT", "941335200000"],
        ["360", "Canada", "C%sT", "972784800000"],
        ["300", "-", "EST", "973382400000"],
        ["360", "-", "CST", "986094000000"],
        ["420", "Canada", "M%sT"]
    ],
    "America/Yellowknife": [
        ["0", "-", "zzz", "-1073088000000"],
        ["420", "NT_YK", "M%sT", "347068800000"],
        ["420", "Canada", "M%sT"]
    ],
    "America/Inuvik": [
        ["0", "-", "zzz", "-505008000000"],
        ["480", "NT_YK", "P%sT", "291780000000"],
        ["420", "NT_YK", "M%sT", "347068800000"],
        ["420", "Canada", "M%sT"]
    ],
    "America/Whitehorse": [
        ["540.2", "-", "LMT", "-2189030400000"],
        ["540", "NT_YK", "Y%sT", "-110584800000"],
        ["480", "NT_YK", "P%sT", "347068800000"],
        ["480", "Canada", "P%sT"]
    ],
    "America/Dawson": [
        ["557.6666666666666", "-", "LMT", "-2189030400000"],
        ["540", "NT_YK", "Y%sT", "120614400000"],
        ["480", "NT_YK", "P%sT", "347068800000"],
        ["480", "Canada", "P%sT"]
    ],
    "America/Cancun": [
        ["347.06666666666666", "-", "LMT", "-1514764024000"],
        ["360", "-", "CST", "377913600000"],
        ["300", "Mexico", "E%sT", "902023200000"],
        ["360", "Mexico", "C%sT"]
    ],
    "America/Merida": [
        ["358.4666666666667", "-", "LMT", "-1514764708000"],
        ["360", "-", "CST", "377913600000"],
        ["300", "-", "EST", "407635200000"],
        ["360", "Mexico", "C%sT"]
    ],
    "America/Matamoros": [
        ["400", "-", "LMT", "-1514767200000"],
        ["360", "-", "CST", "599529600000"],
        ["360", "US", "C%sT", "631065600000"],
        ["360", "Mexico", "C%sT", "1293753600000"],
        ["360", "US", "C%sT"]
    ],
    "America/Monterrey": [
        ["401.2666666666667", "-", "LMT", "-1514767276000"],
        ["360", "-", "CST", "599529600000"],
        ["360", "US", "C%sT", "631065600000"],
        ["360", "Mexico", "C%sT"]
    ],
    "America/Mexico_City": [
        ["396.6", "-", "LMT", "-1514763396000"],
        ["420", "-", "MST", "-1343091600000"],
        ["360", "-", "CST", "-1234828800000"],
        ["420", "-", "MST", "-1220317200000"],
        ["360", "-", "CST", "-1207180800000"],
        ["420", "-", "MST", "-1191369600000"],
        ["360", "Mexico", "C%sT", "1001815200000"],
        ["360", "-", "CST", "1014163200000"],
        ["360", "Mexico", "C%sT"]
    ],
    "America/Ojinaga": [
        ["417.6666666666667", "-", "LMT", "-1514764660000"],
        ["420", "-", "MST", "-1343091600000"],
        ["360", "-", "CST", "-1234828800000"],
        ["420", "-", "MST", "-1220317200000"],
        ["360", "-", "CST", "-1207180800000"],
        ["420", "-", "MST", "-1191369600000"],
        ["360", "-", "CST", "851990400000"],
        ["360", "Mexico", "C%sT", "915062400000"],
        ["360", "-", "CST", "891399600000"],
        ["420", "Mexico", "M%sT", "1293753600000"],
        ["420", "US", "M%sT"]
    ],
    "America/Chihuahua": [
        ["424.3333333333333", "-", "LMT", "-1514765060000"],
        ["420", "-", "MST", "-1343091600000"],
        ["360", "-", "CST", "-1234828800000"],
        ["420", "-", "MST", "-1220317200000"],
        ["360", "-", "CST", "-1207180800000"],
        ["420", "-", "MST", "-1191369600000"],
        ["360", "-", "CST", "851990400000"],
        ["360", "Mexico", "C%sT", "915062400000"],
        ["360", "-", "CST", "891399600000"],
        ["420", "Mexico", "M%sT"]
    ],
    "America/Hermosillo": [
        ["443.8666666666667", "-", "LMT", "-1514766232000"],
        ["420", "-", "MST", "-1343091600000"],
        ["360", "-", "CST", "-1234828800000"],
        ["420", "-", "MST", "-1220317200000"],
        ["360", "-", "CST", "-1207180800000"],
        ["420", "-", "MST", "-1191369600000"],
        ["360", "-", "CST", "-873849600000"],
        ["420", "-", "MST", "-661564800000"],
        ["480", "-", "PST", "31449600000"],
        ["420", "Mexico", "M%sT", "946598400000"],
        ["420", "-", "MST"]
    ],
    "America/Mazatlan": [
        ["425.6666666666667", "-", "LMT", "-1514765140000"],
        ["420", "-", "MST", "-1343091600000"],
        ["360", "-", "CST", "-1234828800000"],
        ["420", "-", "MST", "-1220317200000"],
        ["360", "-", "CST", "-1207180800000"],
        ["420", "-", "MST", "-1191369600000"],
        ["360", "-", "CST", "-873849600000"],
        ["420", "-", "MST", "-661564800000"],
        ["480", "-", "PST", "31449600000"],
        ["420", "Mexico", "M%sT"]
    ],
    "America/Bahia_Banderas": [
        ["421", "-", "LMT", "-1514764860000"],
        ["420", "-", "MST", "-1343091600000"],
        ["360", "-", "CST", "-1234828800000"],
        ["420", "-", "MST", "-1220317200000"],
        ["360", "-", "CST", "-1207180800000"],
        ["420", "-", "MST", "-1191369600000"],
        ["360", "-", "CST", "-873849600000"],
        ["420", "-", "MST", "-661564800000"],
        ["480", "-", "PST", "31449600000"],
        ["420", "Mexico", "M%sT", "1270346400000"],
        ["360", "Mexico", "C%sT"]
    ],
    "America/Tijuana": [
        ["468.06666666666666", "-", "LMT", "-1514764084000"],
        ["420", "-", "MST", "-1420156800000"],
        ["480", "-", "PST", "-1343091600000"],
        ["420", "-", "MST", "-1234828800000"],
        ["480", "-", "PST", "-1222992000000"],
        ["480", "1:00", "PDT", "-1207267200000"],
        ["480", "-", "PST", "-873849600000"],
        ["480", "1:00", "PWT", "-769395600000"],
        ["480", "1:00", "PPT", "-761702400000"],
        ["480", "-", "PST", "-686102400000"],
        ["480", "1:00", "PDT", "-661564800000"],
        ["480", "-", "PST", "-473472000000"],
        ["480", "CA", "P%sT", "-252547200000"],
        ["480", "-", "PST", "220838400000"],
        ["480", "US", "P%sT", "851990400000"],
        ["480", "Mexico", "P%sT", "1009756800000"],
        ["480", "US", "P%sT", "1014163200000"],
        ["480", "Mexico", "P%sT", "1293753600000"],
        ["480", "US", "P%sT"]
    ],
    "America/Santa_Isabel": [
        ["459.4666666666667", "-", "LMT", "-1514763568000"],
        ["420", "-", "MST", "-1420156800000"],
        ["480", "-", "PST", "-1343091600000"],
        ["420", "-", "MST", "-1234828800000"],
        ["480", "-", "PST", "-1222992000000"],
        ["480", "1:00", "PDT", "-1207267200000"],
        ["480", "-", "PST", "-873849600000"],
        ["480", "1:00", "PWT", "-769395600000"],
        ["480", "1:00", "PPT", "-761702400000"],
        ["480", "-", "PST", "-686102400000"],
        ["480", "1:00", "PDT", "-661564800000"],
        ["480", "-", "PST", "-473472000000"],
        ["480", "CA", "P%sT", "-252547200000"],
        ["480", "-", "PST", "220838400000"],
        ["480", "US", "P%sT", "851990400000"],
        ["480", "Mexico", "P%sT", "1009756800000"],
        ["480", "US", "P%sT", "1014163200000"],
        ["480", "Mexico", "P%sT"]
    ],
    "America/Antigua": [
        ["247.2", "-", "LMT", "-1825113600000"],
        ["300", "-", "EST", "-568166400000"],
        ["240", "-", "AST"]
    ],
    "America/Nassau": [
        ["309.5", "-", "LMT", "-1825113600000"],
        ["300", "Bahamas", "E%sT", "220838400000"],
        ["300", "US", "E%sT"]
    ],
    "America/Barbados": [
        ["238.48333333333335", "-", "LMT", "-1420156800000"],
        ["238.48333333333335", "-", "BMT", "-1167696000000"],
        ["240", "Barb", "A%sT"]
    ],
    "America/Belize": [
        ["352.8", "-", "LMT", "-1822521600000"],
        ["360", "Belize", "C%sT"]
    ],
    "Atlantic/Bermuda": [
        ["259.3", "-", "LMT", "-1262296800000"],
        ["240", "-", "AST", "136346400000"],
        ["240", "Canada", "A%sT", "220838400000"],
        ["240", "US", "A%sT"]
    ],
    "America/Cayman": [
        ["325.5333333333333", "-", "LMT", "-2493072000000"],
        ["307.18333333333334", "-", "KMT", "-1827705600000"],
        ["300", "-", "EST"]
    ],
    "America/Costa_Rica": [
        ["336.2166666666667", "-", "LMT", "-2493072000000"],
        ["336.2166666666667", "-", "SJMT", "-1545091200000"],
        ["360", "CR", "C%sT"]
    ],
    "America/Havana": [
        ["329.4666666666667", "-", "LMT", "-2493072000000"],
        ["329.6", "-", "HMT", "-1402833600000"],
        ["300", "Cuba", "C%sT"]
    ],
    "America/Santo_Domingo": [
        ["279.6", "-", "LMT", "-2493072000000"],
        ["280", "-", "SDMT", "-1159790400000"],
        ["300", "DR", "E%sT", "152064000000"],
        ["240", "-", "AST", "972784800000"],
        ["300", "US", "E%sT", "975805200000"],
        ["240", "-", "AST"]
    ],
    "America/El_Salvador": [
        ["356.8", "-", "LMT", "-1514851200000"],
        ["360", "Salv", "C%sT"]
    ],
    "America/Guatemala": [
        ["362.06666666666666", "-", "LMT", "-1617062400000"],
        ["360", "Guat", "C%sT"]
    ],
    "America/Port-au-Prince": [
        ["289.3333333333333", "-", "LMT", "-2493072000000"],
        ["289", "-", "PPMT", "-1670500800000"],
        ["300", "Haiti", "E%sT"]
    ],
    "America/Tegucigalpa": [
        ["348.8666666666667", "-", "LMT", "-1538524800000"],
        ["360", "Hond", "C%sT"]
    ],
    "America/Jamaica": [
        ["307.18333333333334", "-", "LMT", "-2493072000000"],
        ["307.18333333333334", "-", "KMT", "-1827705600000"],
        ["300", "-", "EST", "157680000000"],
        ["300", "US", "E%sT", "473299200000"],
        ["300", "-", "EST"]
    ],
    "America/Martinique": [
        ["244.33333333333334", "-", "LMT", "-2493072000000"],
        ["244.33333333333334", "-", "FFMT", "-1851552000000"],
        ["240", "-", "AST", "323827200000"],
        ["240", "1:00", "ADT", "338947200000"],
        ["240", "-", "AST"]
    ],
    "America/Managua": [
        ["345.1333333333333", "-", "LMT", "-2493072000000"],
        ["345.2", "-", "MMT", "-1121126400000"],
        ["360", "-", "CST", "105062400000"],
        ["300", "-", "EST", "161740800000"],
        ["360", "Nic", "C%sT", "694238400000"],
        ["300", "-", "EST", "717292800000"],
        ["360", "-", "CST", "757296000000"],
        ["300", "-", "EST", "883526400000"],
        ["360", "Nic", "C%sT"]
    ],
    "America/Panama": [
        ["318.1333333333333", "-", "LMT", "-2493072000000"],
        ["319.6", "-", "CMT", "-1946937600000"],
        ["300", "-", "EST"]
    ],
    "America/Puerto_Rico": [
        ["264.4166666666667", "-", "LMT", "-2233051200000"],
        ["240", "-", "AST", "-873072000000"],
        ["240", "US", "A%sT", "-725932800000"],
        ["240", "-", "AST"]
    ],
    "America/Miquelon": [
        ["224.66666666666666", "-", "LMT", "-1850342400000"],
        ["240", "-", "AST", "325987200000"],
        ["180", "-", "PMST", "567907200000"],
        ["180", "Canada", "PM%sT"]
    ],
    "America/Grand_Turk": [
        ["284.5333333333333", "-", "LMT", "-2493072000000"],
        ["307.18333333333334", "-", "KMT", "-1827705600000"],
        ["300", "-", "EST", "315446400000"],
        ["300", "US", "E%sT", "1414893600000"],
        ["240", "-", "AST"]
    ],
    "US/Pacific-New": "America/Los_Angeles", "America/Argentina/Buenos_Aires": [
        ["233.8", "-", "LMT", "-2372112000000"],
        ["256.8", "-", "CMT", "-1567468800000"],
        ["240", "-", "ART", "-1233446400000"],
        ["240", "Arg", "AR%sT", "-7603200000"],
        ["180", "Arg", "AR%sT", "938908800000"],
        ["240", "Arg", "AR%sT", "952041600000"],
        ["180", "Arg", "AR%sT"]
    ],
    "America/Argentina/Cordoba": [
        ["256.8", "-", "LMT", "-2372112000000"],
        ["256.8", "-", "CMT", "-1567468800000"],
        ["240", "-", "ART", "-1233446400000"],
        ["240", "Arg", "AR%sT", "-7603200000"],
        ["180", "Arg", "AR%sT", "667958400000"],
        ["240", "-", "WART", "687916800000"],
        ["180", "Arg", "AR%sT", "938908800000"],
        ["240", "Arg", "AR%sT", "952041600000"],
        ["180", "Arg", "AR%sT"]
    ],
    "America/Argentina/Salta": [
        ["261.66666666666663", "-", "LMT", "-2372112000000"],
        ["256.8", "-", "CMT", "-1567468800000"],
        ["240", "-", "ART", "-1233446400000"],
        ["240", "Arg", "AR%sT", "-7603200000"],
        ["180", "Arg", "AR%sT", "667958400000"],
        ["240", "-", "WART", "687916800000"],
        ["180", "Arg", "AR%sT", "938908800000"],
        ["240", "Arg", "AR%sT", "952041600000"],
        ["180", "Arg", "AR%sT", "1224288000000"],
        ["180", "-", "ART"]
    ],
    "America/Argentina/Tucuman": [
        ["260.8666666666667", "-", "LMT", "-2372112000000"],
        ["256.8", "-", "CMT", "-1567468800000"],
        ["240", "-", "ART", "-1233446400000"],
        ["240", "Arg", "AR%sT", "-7603200000"],
        ["180", "Arg", "AR%sT", "667958400000"],
        ["240", "-", "WART", "687916800000"],
        ["180", "Arg", "AR%sT", "938908800000"],
        ["240", "Arg", "AR%sT", "952041600000"],
        ["180", "-", "ART", "1086048000000"],
        ["240", "-", "WART", "1087084800000"],
        ["180", "Arg", "AR%sT"]
    ],
    "America/Argentina/La_Rioja": [
        ["267.4", "-", "LMT", "-2372112000000"],
        ["256.8", "-", "CMT", "-1567468800000"],
        ["240", "-", "ART", "-1233446400000"],
        ["240", "Arg", "AR%sT", "-7603200000"],
        ["180", "Arg", "AR%sT", "667785600000"],
        ["240", "-", "WART", "673574400000"],
        ["180", "Arg", "AR%sT", "938908800000"],
        ["240", "Arg", "AR%sT", "952041600000"],
        ["180", "-", "ART", "1086048000000"],
        ["240", "-", "WART", "1087689600000"],
        ["180", "Arg", "AR%sT", "1224288000000"],
        ["180", "-", "ART"]
    ],
    "America/Argentina/San_Juan": [
        ["274.06666666666666", "-", "LMT", "-2372112000000"],
        ["256.8", "-", "CMT", "-1567468800000"],
        ["240", "-", "ART", "-1233446400000"],
        ["240", "Arg", "AR%sT", "-7603200000"],
        ["180", "Arg", "AR%sT", "667785600000"],
        ["240", "-", "WART", "673574400000"],
        ["180", "Arg", "AR%sT", "938908800000"],
        ["240", "Arg", "AR%sT", "952041600000"],
        ["180", "-", "ART", "1085961600000"],
        ["240", "-", "WART", "1090713600000"],
        ["180", "Arg", "AR%sT", "1224288000000"],
        ["180", "-", "ART"]
    ],
    "America/Argentina/Jujuy": [
        ["261.2", "-", "LMT", "-2372112000000"],
        ["256.8", "-", "CMT", "-1567468800000"],
        ["240", "-", "ART", "-1233446400000"],
        ["240", "Arg", "AR%sT", "-7603200000"],
        ["180", "Arg", "AR%sT", "636508800000"],
        ["240", "-", "WART", "657072000000"],
        ["240", "1:00", "WARST", "669168000000"],
        ["240", "-", "WART", "686707200000"],
        ["180", "1:00", "ARST", "725760000000"],
        ["180", "Arg", "AR%sT", "938908800000"],
        ["240", "Arg", "AR%sT", "952041600000"],
        ["180", "Arg", "AR%sT", "1224288000000"],
        ["180", "-", "ART"]
    ],
    "America/Argentina/Catamarca": [
        ["263.1333333333333", "-", "LMT", "-2372112000000"],
        ["256.8", "-", "CMT", "-1567468800000"],
        ["240", "-", "ART", "-1233446400000"],
        ["240", "Arg", "AR%sT", "-7603200000"],
        ["180", "Arg", "AR%sT", "667958400000"],
        ["240", "-", "WART", "687916800000"],
        ["180", "Arg", "AR%sT", "938908800000"],
        ["240", "Arg", "AR%sT", "952041600000"],
        ["180", "-", "ART", "1086048000000"],
        ["240", "-", "WART", "1087689600000"],
        ["180", "Arg", "AR%sT", "1224288000000"],
        ["180", "-", "ART"]
    ],
    "America/Argentina/Mendoza": [
        ["275.2666666666667", "-", "LMT", "-2372112000000"],
        ["256.8", "-", "CMT", "-1567468800000"],
        ["240", "-", "ART", "-1233446400000"],
        ["240", "Arg", "AR%sT", "-7603200000"],
        ["180", "Arg", "AR%sT", "636508800000"],
        ["240", "-", "WART", "655948800000"],
        ["240", "1:00", "WARST", "667785600000"],
        ["240", "-", "WART", "687484800000"],
        ["240", "1:00", "WARST", "699408000000"],
        ["240", "-", "WART", "719366400000"],
        ["180", "Arg", "AR%sT", "938908800000"],
        ["240", "Arg", "AR%sT", "952041600000"],
        ["180", "-", "ART", "1085270400000"],
        ["240", "-", "WART", "1096156800000"],
        ["180", "Arg", "AR%sT", "1224288000000"],
        ["180", "-", "ART"]
    ],
    "America/Argentina/San_Luis": [
        ["265.4", "-", "LMT", "-2372112000000"],
        ["256.8", "-", "CMT", "-1567468800000"],
        ["240", "-", "ART", "-1233446400000"],
        ["240", "Arg", "AR%sT", "-7603200000"],
        ["180", "Arg", "AR%sT", "662601600000"],
        ["180", "1:00", "ARST", "637372800000"],
        ["240", "-", "WART", "655948800000"],
        ["240", "1:00", "WARST", "667785600000"],
        ["240", "-", "WART", "675734400000"],
        ["180", "-", "ART", "938908800000"],
        ["240", "1:00", "WARST", "952041600000"],
        ["180", "-", "ART", "1085961600000"],
        ["240", "-", "WART", "1090713600000"],
        ["180", "Arg", "AR%sT", "1200873600000"],
        ["240", "SanLuis", "WAR%sT", "1255219200000"],
        ["180", "-", "ART"]
    ],
    "America/Argentina/Rio_Gallegos": [
        ["276.8666666666667", "-", "LMT", "-2372112000000"],
        ["256.8", "-", "CMT", "-1567468800000"],
        ["240", "-", "ART", "-1233446400000"],
        ["240", "Arg", "AR%sT", "-7603200000"],
        ["180", "Arg", "AR%sT", "938908800000"],
        ["240", "Arg", "AR%sT", "952041600000"],
        ["180", "-", "ART", "1086048000000"],
        ["240", "-", "WART", "1087689600000"],
        ["180", "Arg", "AR%sT", "1224288000000"],
        ["180", "-", "ART"]
    ],
    "America/Argentina/Ushuaia": [
        ["273.2", "-", "LMT", "-2372112000000"],
        ["256.8", "-", "CMT", "-1567468800000"],
        ["240", "-", "ART", "-1233446400000"],
        ["240", "Arg", "AR%sT", "-7603200000"],
        ["180", "Arg", "AR%sT", "938908800000"],
        ["240", "Arg", "AR%sT", "952041600000"],
        ["180", "-", "ART", "1085875200000"],
        ["240", "-", "WART", "1087689600000"],
        ["180", "Arg", "AR%sT", "1224288000000"],
        ["180", "-", "ART"]
    ],
    "America/Aruba": "America/Curacao", "America/La_Paz": [
        ["272.6", "-", "LMT", "-2493072000000"],
        ["272.6", "-", "CMT", "-1205971200000"],
        ["272.6", "1:00", "BOST", "-1192320000000"],
        ["240", "-", "BOT"]
    ],
    "America/Noronha": [
        ["129.66666666666669", "-", "LMT", "-1735776000000"],
        ["120", "Brazil", "FN%sT", "653529600000"],
        ["120", "-", "FNT", "938649600000"],
        ["120", "Brazil", "FN%sT", "971568000000"],
        ["120", "-", "FNT", "1000339200000"],
        ["120", "Brazil", "FN%sT", "1033430400000"],
        ["120", "-", "FNT"]
    ],
    "America/Belem": [
        ["193.93333333333334", "-", "LMT", "-1735776000000"],
        ["180", "Brazil", "BR%sT", "590025600000"],
        ["180", "-", "BRT"]
    ],
    "America/Santarem": [
        ["218.8", "-", "LMT", "-1735776000000"],
        ["240", "Brazil", "AM%sT", "590025600000"],
        ["240", "-", "AMT", "1214265600000"],
        ["180", "-", "BRT"]
    ],
    "America/Fortaleza": [
        ["154", "-", "LMT", "-1735776000000"],
        ["180", "Brazil", "BR%sT", "653529600000"],
        ["180", "-", "BRT", "938649600000"],
        ["180", "Brazil", "BR%sT", "972172800000"],
        ["180", "-", "BRT", "1000339200000"],
        ["180", "Brazil", "BR%sT", "1033430400000"],
        ["180", "-", "BRT"]
    ],
    "America/Recife": [
        ["139.6", "-", "LMT", "-1735776000000"],
        ["180", "Brazil", "BR%sT", "653529600000"],
        ["180", "-", "BRT", "938649600000"],
        ["180", "Brazil", "BR%sT", "971568000000"],
        ["180", "-", "BRT", "1000339200000"],
        ["180", "Brazil", "BR%sT", "1033430400000"],
        ["180", "-", "BRT"]
    ],
    "America/Araguaina": [
        ["192.8", "-", "LMT", "-1735776000000"],
        ["180", "Brazil", "BR%sT", "653529600000"],
        ["180", "-", "BRT", "811036800000"],
        ["180", "Brazil", "BR%sT", "1064361600000"],
        ["180", "-", "BRT", "1350777600000"],
        ["180", "Brazil", "BR%sT", "1377993600000"],
        ["180", "-", "BRT"]
    ],
    "America/Maceio": [
        ["142.86666666666665", "-", "LMT", "-1735776000000"],
        ["180", "Brazil", "BR%sT", "653529600000"],
        ["180", "-", "BRT", "813542400000"],
        ["180", "Brazil", "BR%sT", "841795200000"],
        ["180", "-", "BRT", "938649600000"],
        ["180", "Brazil", "BR%sT", "972172800000"],
        ["180", "-", "BRT", "1000339200000"],
        ["180", "Brazil", "BR%sT", "1033430400000"],
        ["180", "-", "BRT"]
    ],
    "America/Bahia": [
        ["154.06666666666666", "-", "LMT", "-1735776000000"],
        ["180", "Brazil", "BR%sT", "1064361600000"],
        ["180", "-", "BRT", "1318723200000"],
        ["180", "Brazil", "BR%sT", "1350777600000"],
        ["180", "-", "BRT"]
    ],
    "America/Sao_Paulo": [
        ["186.46666666666667", "-", "LMT", "-1735776000000"],
        ["180", "Brazil", "BR%sT", "-195436800000"],
        ["180", "1:00", "BRST", "-157852800000"],
        ["180", "Brazil", "BR%sT"]
    ],
    "America/Campo_Grande": [
        ["218.46666666666667", "-", "LMT", "-1735776000000"],
        ["240", "Brazil", "AM%sT"]
    ],
    "America/Cuiaba": [
        ["224.33333333333334", "-", "LMT", "-1735776000000"],
        ["240", "Brazil", "AM%sT", "1064361600000"],
        ["240", "-", "AMT", "1096588800000"],
        ["240", "Brazil", "AM%sT"]
    ],
    "America/Porto_Velho": [
        ["255.6", "-", "LMT", "-1735776000000"],
        ["240", "Brazil", "AM%sT", "590025600000"],
        ["240", "-", "AMT"]
    ],
    "America/Boa_Vista": [
        ["242.66666666666666", "-", "LMT", "-1735776000000"],
        ["240", "Brazil", "AM%sT", "590025600000"],
        ["240", "-", "AMT", "938649600000"],
        ["240", "Brazil", "AM%sT", "971568000000"],
        ["240", "-", "AMT"]
    ],
    "America/Manaus": [
        ["240.06666666666666", "-", "LMT", "-1735776000000"],
        ["240", "Brazil", "AM%sT", "590025600000"],
        ["240", "-", "AMT", "749174400000"],
        ["240", "Brazil", "AM%sT", "780192000000"],
        ["240", "-", "AMT"]
    ],
    "America/Eirunepe": [
        ["279.4666666666667", "-", "LMT", "-1735776000000"],
        ["300", "Brazil", "AC%sT", "590025600000"],
        ["300", "-", "ACT", "749174400000"],
        ["300", "Brazil", "AC%sT", "780192000000"],
        ["300", "-", "ACT", "1214265600000"],
        ["240", "-", "AMT", "1384041600000"],
        ["300", "-", "ACT"]
    ],
    "America/Rio_Branco": [
        ["271.2", "-", "LMT", "-1735776000000"],
        ["300", "Brazil", "AC%sT", "590025600000"],
        ["300", "-", "ACT", "1214265600000"],
        ["240", "-", "AMT", "1384041600000"],
        ["300", "-", "ACT"]
    ],
    "America/Santiago": [
        ["282.7666666666667", "-", "LMT", "-2493072000000"],
        ["282.7666666666667", "-", "SMT", "-1862006400000"],
        ["300", "-", "CLT", "-1688428800000"],
        ["282.7666666666667", "-", "SMT", "-1620000000000"],
        ["240", "-", "CLT", "-1593820800000"],
        ["282.7666666666667", "-", "SMT", "-1336003200000"],
        ["300", "Chile", "CL%sT", "-713664000000"],
        ["240", "Chile", "CL%sT"]
    ],
    "Pacific/Easter": [
        ["437.7333333333333", "-", "LMT", "-2493072000000"],
        ["437.4666666666667", "-", "EMT", "-1178150400000"],
        ["420", "Chile", "EAS%sT", "384901200000"],
        ["360", "Chile", "EAS%sT"]
    ],
    "America/Bogota": [
        ["296.2666666666667", "-", "LMT", "-2707689600000"],
        ["296.2666666666667", "-", "BMT", "-1739059200000"],
        ["300", "CO", "CO%sT"]
    ],
    "America/Curacao": [
        ["275.7833333333333", "-", "LMT", "-1826755200000"],
        ["270", "-", "ANT", "-126316800000"],
        ["240", "-", "AST"]
    ],
    "America/Lower_Princes": "America/Curacao",
    "America/Kralendijk": "America/Curacao",
    "America/Guayaquil": [
        ["319.3333333333333", "-", "LMT", "-2493072000000"],
        ["314", "-", "QMT", "-1199318400000"],
        ["300", "-", "ECT"]
    ],
    "Pacific/Galapagos": [
        ["358.4", "-", "LMT", "-1199318400000"],
        ["300", "-", "ECT", "536371200000"],
        ["360", "-", "GALT"]
    ],
    "Atlantic/Stanley": [
        ["231.4", "-", "LMT", "-2493072000000"],
        ["231.4", "-", "SMT", "-1824249600000"],
        ["240", "Falk", "FK%sT", "420595200000"],
        ["180", "Falk", "FK%sT", "495590400000"],
        ["240", "Falk", "FK%sT", "1283652000000"],
        ["180", "-", "FKST"]
    ],
    "America/Cayenne": [
        ["209.33333333333334", "-", "LMT", "-1846281600000"],
        ["240", "-", "GFT", "-71107200000"],
        ["180", "-", "GFT"]
    ],
    "America/Guyana": [
        ["232.66666666666666", "-", "LMT", "-1730592000000"],
        ["225", "-", "GBGT", "-113702400000"],
        ["225", "-", "GYT", "175996800000"],
        ["180", "-", "GYT", "694137600000"],
        ["240", "-", "GYT"]
    ],
    "America/Asuncion": [
        ["230.66666666666666", "-", "LMT", "-2493072000000"],
        ["230.66666666666666", "-", "AMT", "-1206403200000"],
        ["240", "-", "PYT", "86745600000"],
        ["180", "-", "PYT", "134006400000"],
        ["240", "Para", "PY%sT"]
    ],
    "America/Lima": [
        ["308.2", "-", "LMT", "-2493072000000"],
        ["308.6", "-", "LMT", "-1938556800000"],
        ["300", "Peru", "PE%sT"]
    ],
    "Atlantic/South_Georgia": [
        ["146.13333333333335", "-", "LMT", "-2493072000000"],
        ["120", "-", "GST"]
    ],
    "America/Paramaribo": [
        ["220.66666666666666", "-", "LMT", "-1830470400000"],
        ["220.86666666666665", "-", "PMT", "-1073088000000"],
        ["220.6", "-", "PMT", "-765331200000"],
        ["210", "-", "NEGT", "185673600000"],
        ["210", "-", "SRT", "465436800000"],
        ["180", "-", "SRT"]
    ],
    "America/Port_of_Spain": [
        ["246.06666666666666", "-", "LMT", "-1825113600000"],
        ["240", "-", "AST"]
    ],
    "America/Anguilla": "America/Port_of_Spain",
    "America/Dominica": "America/Port_of_Spain",
    "America/Grenada": "America/Port_of_Spain",
    "America/Guadeloupe": "America/Port_of_Spain",
    "America/Marigot": "America/Port_of_Spain",
    "America/Montserrat": "America/Port_of_Spain",
    "America/St_Barthelemy": "America/Port_of_Spain",
    "America/St_Kitts": "America/Port_of_Spain",
    "America/St_Lucia": "America/Port_of_Spain",
    "America/St_Thomas": "America/Port_of_Spain",
    "America/St_Vincent": "America/Port_of_Spain",
    "America/Tortola": "America/Port_of_Spain",
    "America/Montevideo": [
        ["224.73333333333335", "-", "LMT", "-2256681600000"],
        ["224.73333333333335", "-", "MMT", "-1567468800000"],
        ["210", "Uruguay", "UY%sT", "-853632000000"],
        ["180", "Uruguay", "UY%sT"]
    ],
    "America/Caracas": [
        ["267.7333333333333", "-", "LMT", "-2493072000000"],
        ["267.6666666666667", "-", "CMT", "-1826755200000"],
        ["270", "-", "VET", "-126316800000"],
        ["240", "-", "VET", "1197169200000"],
        ["270", "-", "VET"]
    ]
};
exports.rules = {
    "Algeria": [
        ["1916", "only", "-", "Jun", "14", ["23", "0", "0", "s"], "60", "S"],
        ["1916", "1919", "-", "Oct", "Sun>=1", ["23", "0", "0", "s"], "0", "-"],
        ["1917", "only", "-", "Mar", "24", ["23", "0", "0", "s"], "60", "S"],
        ["1918", "only", "-", "Mar", "9", ["23", "0", "0", "s"], "60", "S"],
        ["1919", "only", "-", "Mar", "1", ["23", "0", "0", "s"], "60", "S"],
        ["1920", "only", "-", "Feb", "14", ["23", "0", "0", "s"], "60", "S"],
        ["1920", "only", "-", "Oct", "23", ["23", "0", "0", "s"], "0", "-"],
        ["1921", "only", "-", "Mar", "14", ["23", "0", "0", "s"], "60", "S"],
        ["1921", "only", "-", "Jun", "21", ["23", "0", "0", "s"], "0", "-"],
        ["1939", "only", "-", "Sep", "11", ["23", "0", "0", "s"], "60", "S"],
        ["1939", "only", "-", "Nov", "19", ["1", "0", "0"], "0", "-"],
        ["1944", "1945", "-", "Apr", "Mon>=1", ["2", "0", "0"], "60", "S"],
        ["1944", "only", "-", "Oct", "8", ["2", "0", "0"], "0", "-"],
        ["1945", "only", "-", "Sep", "16", ["1", "0", "0"], "0", "-"],
        ["1971", "only", "-", "Apr", "25", ["23", "0", "0", "s"], "60", "S"],
        ["1971", "only", "-", "Sep", "26", ["23", "0", "0", "s"], "0", "-"],
        ["1977", "only", "-", "May", "6", ["0", "0", "0"], "60", "S"],
        ["1977", "only", "-", "Oct", "21", ["0", "0", "0"], "0", "-"],
        ["1978", "only", "-", "Mar", "24", ["1", "0", "0"], "60", "S"],
        ["1978", "only", "-", "Sep", "22", ["3", "0", "0"], "0", "-"],
        ["1980", "only", "-", "Apr", "25", ["0", "0", "0"], "60", "S"],
        ["1980", "only", "-", "Oct", "31", ["2", "0", "0"], "0", "-"]
    ],
    "Egypt": [
        ["1940", "only", "-", "Jul", "15", ["0", "0", "0"], "60", "S"],
        ["1940", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1941", "only", "-", "Apr", "15", ["0", "0", "0"], "60", "S"],
        ["1941", "only", "-", "Sep", "16", ["0", "0", "0"], "0", "-"],
        ["1942", "1944", "-", "Apr", "1", ["0", "0", "0"], "60", "S"],
        ["1942", "only", "-", "Oct", "27", ["0", "0", "0"], "0", "-"],
        ["1943", "1945", "-", "Nov", "1", ["0", "0", "0"], "0", "-"],
        ["1945", "only", "-", "Apr", "16", ["0", "0", "0"], "60", "S"],
        ["1957", "only", "-", "May", "10", ["0", "0", "0"], "60", "S"],
        ["1957", "1958", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1958", "only", "-", "May", "1", ["0", "0", "0"], "60", "S"],
        ["1959", "1981", "-", "May", "1", ["1", "0", "0"], "60", "S"],
        ["1959", "1965", "-", "Sep", "30", ["3", "0", "0"], "0", "-"],
        ["1966", "1994", "-", "Oct", "1", ["3", "0", "0"], "0", "-"],
        ["1982", "only", "-", "Jul", "25", ["1", "0", "0"], "60", "S"],
        ["1983", "only", "-", "Jul", "12", ["1", "0", "0"], "60", "S"],
        ["1984", "1988", "-", "May", "1", ["1", "0", "0"], "60", "S"],
        ["1989", "only", "-", "May", "6", ["1", "0", "0"], "60", "S"],
        ["1990", "1994", "-", "May", "1", ["1", "0", "0"], "60", "S"],
        ["1995", "2010", "-", "Apr", "lastFri", ["0", "0", "0", "s"], "60", "S"],
        ["1995", "2005", "-", "Sep", "lastThu", ["24", "0", "0"], "0", "-"],
        ["2006", "only", "-", "Sep", "21", ["24", "0", "0"], "0", "-"],
        ["2007", "only", "-", "Sep", "Thu>=1", ["24", "0", "0"], "0", "-"],
        ["2008", "only", "-", "Aug", "lastThu", ["24", "0", "0"], "0", "-"],
        ["2009", "only", "-", "Aug", "20", ["24", "0", "0"], "0", "-"],
        ["2010", "only", "-", "Aug", "10", ["24", "0", "0"], "0", "-"],
        ["2010", "only", "-", "Sep", "9", ["24", "0", "0"], "60", "S"],
        ["2010", "only", "-", "Sep", "lastThu", ["24", "0", "0"], "0", "-"],
        ["2014", "only", "-", "May", "15", ["24", "0", "0"], "60", "S"],
        ["2014", "only", "-", "Jun", "26", ["24", "0", "0"], "0", "-"],
        ["2014", "only", "-", "Jul", "31", ["24", "0", "0"], "60", "S"],
        ["2014", "max", "-", "Sep", "lastThu", ["24", "0", "0"], "0", "-"],
        ["2015", "2019", "-", "Apr", "lastFri", ["0", "0", "0", "s"], "60", "S"],
        ["2015", "only", "-", "Jun", "11", ["24", "0", "0"], "0", "-"],
        ["2015", "only", "-", "Jul", "23", ["24", "0", "0"], "60", "S"],
        ["2016", "only", "-", "Jun", "2", ["24", "0", "0"], "0", "-"],
        ["2016", "only", "-", "Jul", "7", ["24", "0", "0"], "60", "S"],
        ["2017", "only", "-", "May", "25", ["24", "0", "0"], "0", "-"],
        ["2017", "only", "-", "Jun", "29", ["24", "0", "0"], "60", "S"],
        ["2018", "only", "-", "May", "10", ["24", "0", "0"], "0", "-"],
        ["2018", "only", "-", "Jun", "14", ["24", "0", "0"], "60", "S"],
        ["2019", "only", "-", "May", "2", ["24", "0", "0"], "0", "-"],
        ["2019", "only", "-", "Jun", "6", ["24", "0", "0"], "60", "S"],
        ["2020", "only", "-", "May", "28", ["24", "0", "0"], "60", "S"],
        ["2021", "only", "-", "May", "13", ["24", "0", "0"], "60", "S"],
        ["2022", "only", "-", "May", "5", ["24", "0", "0"], "60", "S"],
        ["2023", "max", "-", "Apr", "lastFri", ["0", "0", "0", "s"], "60", "S"]
    ],
    "Ghana": [
        ["1920", "1942", "-", "Sep", "1", ["0", "0", "0"], "20", "GHST"],
        ["1920", "1942", "-", "Dec", "31", ["0", "0", "0"], "0", "GMT"]
    ],
    "Libya": [
        ["1951", "only", "-", "Oct", "14", ["2", "0", "0"], "60", "S"],
        ["1952", "only", "-", "Jan", "1", ["0", "0", "0"], "0", "-"],
        ["1953", "only", "-", "Oct", "9", ["2", "0", "0"], "60", "S"],
        ["1954", "only", "-", "Jan", "1", ["0", "0", "0"], "0", "-"],
        ["1955", "only", "-", "Sep", "30", ["0", "0", "0"], "60", "S"],
        ["1956", "only", "-", "Jan", "1", ["0", "0", "0"], "0", "-"],
        ["1982", "1984", "-", "Apr", "1", ["0", "0", "0"], "60", "S"],
        ["1982", "1985", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1985", "only", "-", "Apr", "6", ["0", "0", "0"], "60", "S"],
        ["1986", "only", "-", "Apr", "4", ["0", "0", "0"], "60", "S"],
        ["1986", "only", "-", "Oct", "3", ["0", "0", "0"], "0", "-"],
        ["1987", "1989", "-", "Apr", "1", ["0", "0", "0"], "60", "S"],
        ["1987", "1989", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1997", "only", "-", "Apr", "4", ["0", "0", "0"], "60", "S"],
        ["1997", "only", "-", "Oct", "4", ["0", "0", "0"], "0", "-"],
        ["2013", "only", "-", "Mar", "lastFri", ["1", "0", "0"], "60", "S"],
        ["2013", "only", "-", "Oct", "lastFri", ["2", "0", "0"], "0", "-"]
    ],
    "Mauritius": [
        ["1982", "only", "-", "Oct", "10", ["0", "0", "0"], "60", "S"],
        ["1983", "only", "-", "Mar", "21", ["0", "0", "0"], "0", "-"],
        ["2008", "only", "-", "Oct", "lastSun", ["2", "0", "0"], "60", "S"],
        ["2009", "only", "-", "Mar", "lastSun", ["2", "0", "0"], "0", "-"]
    ],
    "Morocco": [
        ["1939", "only", "-", "Sep", "12", ["0", "0", "0"], "60", "S"],
        ["1939", "only", "-", "Nov", "19", ["0", "0", "0"], "0", "-"],
        ["1940", "only", "-", "Feb", "25", ["0", "0", "0"], "60", "S"],
        ["1945", "only", "-", "Nov", "18", ["0", "0", "0"], "0", "-"],
        ["1950", "only", "-", "Jun", "11", ["0", "0", "0"], "60", "S"],
        ["1950", "only", "-", "Oct", "29", ["0", "0", "0"], "0", "-"],
        ["1967", "only", "-", "Jun", "3", ["12", "0", "0"], "60", "S"],
        ["1967", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1974", "only", "-", "Jun", "24", ["0", "0", "0"], "60", "S"],
        ["1974", "only", "-", "Sep", "1", ["0", "0", "0"], "0", "-"],
        ["1976", "1977", "-", "May", "1", ["0", "0", "0"], "60", "S"],
        ["1976", "only", "-", "Aug", "1", ["0", "0", "0"], "0", "-"],
        ["1977", "only", "-", "Sep", "28", ["0", "0", "0"], "0", "-"],
        ["1978", "only", "-", "Jun", "1", ["0", "0", "0"], "60", "S"],
        ["1978", "only", "-", "Aug", "4", ["0", "0", "0"], "0", "-"],
        ["2008", "only", "-", "Jun", "1", ["0", "0", "0"], "60", "S"],
        ["2008", "only", "-", "Sep", "1", ["0", "0", "0"], "0", "-"],
        ["2009", "only", "-", "Jun", "1", ["0", "0", "0"], "60", "S"],
        ["2009", "only", "-", "Aug", "21", ["0", "0", "0"], "0", "-"],
        ["2010", "only", "-", "May", "2", ["0", "0", "0"], "60", "S"],
        ["2010", "only", "-", "Aug", "8", ["0", "0", "0"], "0", "-"],
        ["2011", "only", "-", "Apr", "3", ["0", "0", "0"], "60", "S"],
        ["2011", "only", "-", "Jul", "31", ["0", "0", "0"], "0", "-"],
        ["2012", "2013", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "S"],
        ["2012", "only", "-", "Sep", "30", ["3", "0", "0"], "0", "-"],
        ["2012", "only", "-", "Jul", "20", ["3", "0", "0"], "0", "-"],
        ["2012", "only", "-", "Aug", "20", ["2", "0", "0"], "60", "S"],
        ["2013", "only", "-", "Jul", "7", ["3", "0", "0"], "0", "-"],
        ["2013", "only", "-", "Aug", "10", ["2", "0", "0"], "60", "S"],
        ["2013", "max", "-", "Oct", "lastSun", ["3", "0", "0"], "0", "-"],
        ["2014", "2022", "-", "Mar", "lastSun", ["2", "0", "0"], "60", "S"],
        ["2014", "only", "-", "Jun", "28", ["3", "0", "0"], "0", "-"],
        ["2014", "only", "-", "Aug", "2", ["2", "0", "0"], "60", "S"],
        ["2015", "only", "-", "Jun", "13", ["3", "0", "0"], "0", "-"],
        ["2015", "only", "-", "Jul", "18", ["2", "0", "0"], "60", "S"],
        ["2016", "only", "-", "Jun", "4", ["3", "0", "0"], "0", "-"],
        ["2016", "only", "-", "Jul", "9", ["2", "0", "0"], "60", "S"],
        ["2017", "only", "-", "May", "20", ["3", "0", "0"], "0", "-"],
        ["2017", "only", "-", "Jul", "1", ["2", "0", "0"], "60", "S"],
        ["2018", "only", "-", "May", "12", ["3", "0", "0"], "0", "-"],
        ["2018", "only", "-", "Jun", "16", ["2", "0", "0"], "60", "S"],
        ["2019", "only", "-", "May", "4", ["3", "0", "0"], "0", "-"],
        ["2019", "only", "-", "Jun", "8", ["2", "0", "0"], "60", "S"],
        ["2020", "only", "-", "Apr", "18", ["3", "0", "0"], "0", "-"],
        ["2020", "only", "-", "May", "30", ["2", "0", "0"], "60", "S"],
        ["2021", "only", "-", "Apr", "10", ["3", "0", "0"], "0", "-"],
        ["2021", "only", "-", "May", "15", ["2", "0", "0"], "60", "S"],
        ["2022", "only", "-", "Apr", "2", ["3", "0", "0"], "0", "-"],
        ["2022", "only", "-", "May", "7", ["2", "0", "0"], "60", "S"],
        ["2023", "only", "-", "Apr", "22", ["2", "0", "0"], "60", "S"],
        ["2024", "only", "-", "Apr", "13", ["2", "0", "0"], "60", "S"],
        ["2025", "only", "-", "Apr", "5", ["2", "0", "0"], "60", "S"],
        ["2026", "max", "-", "Mar", "lastSun", ["2", "0", "0"], "60", "S"],
        ["2035", "only", "-", "Oct", "27", ["3", "0", "0"], "0", "-"],
        ["2036", "only", "-", "Oct", "18", ["3", "0", "0"], "0", "-"],
        ["2037", "only", "-", "Oct", "10", ["3", "0", "0"], "0", "-"]
    ],
    "Namibia": [
        ["1994", "max", "-", "Sep", "Sun>=1", ["2", "0", "0"], "60", "S"],
        ["1995", "max", "-", "Apr", "Sun>=1", ["2", "0", "0"], "0", "-"]
    ],
    "SA": [
        ["1942", "1943", "-", "Sep", "Sun>=15", ["2", "0", "0"], "60", "-"],
        ["1943", "1944", "-", "Mar", "Sun>=15", ["2", "0", "0"], "0", "-"]
    ],
    "Sudan": [
        ["1970", "only", "-", "May", "1", ["0", "0", "0"], "60", "S"],
        ["1970", "1985", "-", "Oct", "15", ["0", "0", "0"], "0", "-"],
        ["1971", "only", "-", "Apr", "30", ["0", "0", "0"], "60", "S"],
        ["1972", "1985", "-", "Apr", "lastSun", ["0", "0", "0"], "60", "S"]
    ],
    "Tunisia": [
        ["1939", "only", "-", "Apr", "15", ["23", "0", "0", "s"], "60", "S"],
        ["1939", "only", "-", "Nov", "18", ["23", "0", "0", "s"], "0", "-"],
        ["1940", "only", "-", "Feb", "25", ["23", "0", "0", "s"], "60", "S"],
        ["1941", "only", "-", "Oct", "6", ["0", "0", "0"], "0", "-"],
        ["1942", "only", "-", "Mar", "9", ["0", "0", "0"], "60", "S"],
        ["1942", "only", "-", "Nov", "2", ["3", "0", "0"], "0", "-"],
        ["1943", "only", "-", "Mar", "29", ["2", "0", "0"], "60", "S"],
        ["1943", "only", "-", "Apr", "17", ["2", "0", "0"], "0", "-"],
        ["1943", "only", "-", "Apr", "25", ["2", "0", "0"], "60", "S"],
        ["1943", "only", "-", "Oct", "4", ["2", "0", "0"], "0", "-"],
        ["1944", "1945", "-", "Apr", "Mon>=1", ["2", "0", "0"], "60", "S"],
        ["1944", "only", "-", "Oct", "8", ["0", "0", "0"], "0", "-"],
        ["1945", "only", "-", "Sep", "16", ["0", "0", "0"], "0", "-"],
        ["1977", "only", "-", "Apr", "30", ["0", "0", "0", "s"], "60", "S"],
        ["1977", "only", "-", "Sep", "24", ["0", "0", "0", "s"], "0", "-"],
        ["1978", "only", "-", "May", "1", ["0", "0", "0", "s"], "60", "S"],
        ["1978", "only", "-", "Oct", "1", ["0", "0", "0", "s"], "0", "-"],
        ["1988", "only", "-", "Jun", "1", ["0", "0", "0", "s"], "60", "S"],
        ["1988", "1990", "-", "Sep", "lastSun", ["0", "0", "0", "s"], "0", "-"],
        ["1989", "only", "-", "Mar", "26", ["0", "0", "0", "s"], "60", "S"],
        ["1990", "only", "-", "May", "1", ["0", "0", "0", "s"], "60", "S"],
        ["2005", "only", "-", "May", "1", ["0", "0", "0", "s"], "60", "S"],
        ["2005", "only", "-", "Sep", "30", ["1", "0", "0", "s"], "0", "-"],
        ["2006", "2008", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "60", "S"],
        ["2006", "2008", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "0", "-"]
    ],
    "ArgAQ": [
        ["1964", "1966", "-", "Mar", "1", ["0", "0", "0"], "0", "-"],
        ["1964", "1966", "-", "Oct", "15", ["0", "0", "0"], "60", "S"],
        ["1967", "only", "-", "Apr", "2", ["0", "0", "0"], "0", "-"],
        ["1967", "1968", "-", "Oct", "Sun>=1", ["0", "0", "0"], "60", "S"],
        ["1968", "1969", "-", "Apr", "Sun>=1", ["0", "0", "0"], "0", "-"],
        ["1974", "only", "-", "Jan", "23", ["0", "0", "0"], "60", "S"],
        ["1974", "only", "-", "May", "1", ["0", "0", "0"], "0", "-"]
    ],
    "ChileAQ": [
        ["1972", "1986", "-", "Mar", "Sun>=9", ["3", "0", "0", "u"], "0", "-"],
        ["1974", "1987", "-", "Oct", "Sun>=9", ["4", "0", "0", "u"], "60", "S"],
        ["1987", "only", "-", "Apr", "12", ["3", "0", "0", "u"], "0", "-"],
        ["1988", "1989", "-", "Mar", "Sun>=9", ["3", "0", "0", "u"], "0", "-"],
        ["1988", "only", "-", "Oct", "Sun>=1", ["4", "0", "0", "u"], "60", "S"],
        ["1989", "only", "-", "Oct", "Sun>=9", ["4", "0", "0", "u"], "60", "S"],
        ["1990", "only", "-", "Mar", "18", ["3", "0", "0", "u"], "0", "-"],
        ["1990", "only", "-", "Sep", "16", ["4", "0", "0", "u"], "60", "S"],
        ["1991", "1996", "-", "Mar", "Sun>=9", ["3", "0", "0", "u"], "0", "-"],
        ["1991", "1997", "-", "Oct", "Sun>=9", ["4", "0", "0", "u"], "60", "S"],
        ["1997", "only", "-", "Mar", "30", ["3", "0", "0", "u"], "0", "-"],
        ["1998", "only", "-", "Mar", "Sun>=9", ["3", "0", "0", "u"], "0", "-"],
        ["1998", "only", "-", "Sep", "27", ["4", "0", "0", "u"], "60", "S"],
        ["1999", "only", "-", "Apr", "4", ["3", "0", "0", "u"], "0", "-"],
        ["1999", "2010", "-", "Oct", "Sun>=9", ["4", "0", "0", "u"], "60", "S"],
        ["2000", "2007", "-", "Mar", "Sun>=9", ["3", "0", "0", "u"], "0", "-"],
        ["2008", "only", "-", "Mar", "30", ["3", "0", "0", "u"], "0", "-"],
        ["2009", "only", "-", "Mar", "Sun>=9", ["3", "0", "0", "u"], "0", "-"],
        ["2010", "only", "-", "Apr", "Sun>=1", ["3", "0", "0", "u"], "0", "-"],
        ["2011", "only", "-", "May", "Sun>=2", ["3", "0", "0", "u"], "0", "-"],
        ["2011", "only", "-", "Aug", "Sun>=16", ["4", "0", "0", "u"], "60", "S"],
        ["2012", "max", "-", "Apr", "Sun>=23", ["3", "0", "0", "u"], "0", "-"],
        ["2012", "max", "-", "Sep", "Sun>=2", ["4", "0", "0", "u"], "60", "S"]
    ],
    "Troll": [
        ["2005", "max", "-", "Mar", "lastSun", ["1", "0", "0", "u"], "120", "CEST"],
        ["2004", "max", "-", "Oct", "lastSun", ["1", "0", "0", "u"], "0", "UTC"]
    ],
    "EUAsia": [
        ["1981", "max", "-", "Mar", "lastSun", ["1", "0", "0", "u"], "60", "S"],
        ["1979", "1995", "-", "Sep", "lastSun", ["1", "0", "0", "u"], "0", "-"],
        ["1996", "max", "-", "Oct", "lastSun", ["1", "0", "0", "u"], "0", "-"]
    ],
    "E-EurAsia": [
        ["1981", "max", "-", "Mar", "lastSun", ["0", "0", "0"], "60", "S"],
        ["1979", "1995", "-", "Sep", "lastSun", ["0", "0", "0"], "0", "-"],
        ["1996", "max", "-", "Oct", "lastSun", ["0", "0", "0"], "0", "-"]
    ],
    "RussiaAsia": [
        ["1981", "1984", "-", "Apr", "1", ["0", "0", "0"], "60", "S"],
        ["1981", "1983", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1984", "1991", "-", "Sep", "lastSun", ["2", "0", "0", "s"], "0", "-"],
        ["1985", "1991", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "60", "S"],
        ["1992", "only", "-", "Mar", "lastSat", ["23", "0", "0"], "60", "S"],
        ["1992", "only", "-", "Sep", "lastSat", ["23", "0", "0"], "0", "-"],
        ["1993", "max", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "60", "S"],
        ["1993", "1995", "-", "Sep", "lastSun", ["2", "0", "0", "s"], "0", "-"],
        ["1996", "max", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "0", "-"]
    ],
    "Azer": [
        ["1997", "max", "-", "Mar", "lastSun", ["4", "0", "0"], "60", "S"],
        ["1997", "max", "-", "Oct", "lastSun", ["5", "0", "0"], "0", "-"]
    ],
    "Dhaka": [
        ["2009", "only", "-", "Jun", "19", ["23", "0", "0"], "60", "S"],
        ["2009", "only", "-", "Dec", "31", ["24", "0", "0"], "0", "-"]
    ],
    "Shang": [
        ["1940", "only", "-", "Jun", "3", ["0", "0", "0"], "60", "D"],
        ["1940", "1941", "-", "Oct", "1", ["0", "0", "0"], "0", "S"],
        ["1941", "only", "-", "Mar", "16", ["0", "0", "0"], "60", "D"]
    ],
    "PRC": [
        ["1986", "only", "-", "May", "4", ["0", "0", "0"], "60", "D"],
        ["1986", "1991", "-", "Sep", "Sun>=11", ["0", "0", "0"], "0", "S"],
        ["1987", "1991", "-", "Apr", "Sun>=10", ["0", "0", "0"], "60", "D"]
    ],
    "HK": [
        ["1941", "only", "-", "Apr", "1", ["3", "30", "0"], "60", "S"],
        ["1941", "only", "-", "Sep", "30", ["3", "30", "0"], "0", "-"],
        ["1946", "only", "-", "Apr", "20", ["3", "30", "0"], "60", "S"],
        ["1946", "only", "-", "Dec", "1", ["3", "30", "0"], "0", "-"],
        ["1947", "only", "-", "Apr", "13", ["3", "30", "0"], "60", "S"],
        ["1947", "only", "-", "Dec", "30", ["3", "30", "0"], "0", "-"],
        ["1948", "only", "-", "May", "2", ["3", "30", "0"], "60", "S"],
        ["1948", "1951", "-", "Oct", "lastSun", ["3", "30", "0"], "0", "-"],
        ["1952", "only", "-", "Oct", "25", ["3", "30", "0"], "0", "-"],
        ["1949", "1953", "-", "Apr", "Sun>=1", ["3", "30", "0"], "60", "S"],
        ["1953", "only", "-", "Nov", "1", ["3", "30", "0"], "0", "-"],
        ["1954", "1964", "-", "Mar", "Sun>=18", ["3", "30", "0"], "60", "S"],
        ["1954", "only", "-", "Oct", "31", ["3", "30", "0"], "0", "-"],
        ["1955", "1964", "-", "Nov", "Sun>=1", ["3", "30", "0"], "0", "-"],
        ["1965", "1976", "-", "Apr", "Sun>=16", ["3", "30", "0"], "60", "S"],
        ["1965", "1976", "-", "Oct", "Sun>=16", ["3", "30", "0"], "0", "-"],
        ["1973", "only", "-", "Dec", "30", ["3", "30", "0"], "60", "S"],
        ["1979", "only", "-", "May", "Sun>=8", ["3", "30", "0"], "60", "S"],
        ["1979", "only", "-", "Oct", "Sun>=16", ["3", "30", "0"], "0", "-"]
    ],
    "Taiwan": [
        ["1946", "only", "-", "May", "15", ["0", "0", "0"], "60", "D"],
        ["1946", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "S"],
        ["1947", "only", "-", "Apr", "15", ["0", "0", "0"], "60", "D"],
        ["1947", "only", "-", "Nov", "1", ["0", "0", "0"], "0", "S"],
        ["1948", "1951", "-", "May", "1", ["0", "0", "0"], "60", "D"],
        ["1948", "1951", "-", "Oct", "1", ["0", "0", "0"], "0", "S"],
        ["1952", "only", "-", "Mar", "1", ["0", "0", "0"], "60", "D"],
        ["1952", "1954", "-", "Nov", "1", ["0", "0", "0"], "0", "S"],
        ["1953", "1959", "-", "Apr", "1", ["0", "0", "0"], "60", "D"],
        ["1955", "1961", "-", "Oct", "1", ["0", "0", "0"], "0", "S"],
        ["1960", "1961", "-", "Jun", "1", ["0", "0", "0"], "60", "D"],
        ["1974", "1975", "-", "Apr", "1", ["0", "0", "0"], "60", "D"],
        ["1974", "1975", "-", "Oct", "1", ["0", "0", "0"], "0", "S"],
        ["1979", "only", "-", "Jul", "1", ["0", "0", "0"], "60", "D"],
        ["1979", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "S"]
    ],
    "Macau": [
        ["1961", "1962", "-", "Mar", "Sun>=16", ["3", "30", "0"], "60", "S"],
        ["1961", "1964", "-", "Nov", "Sun>=1", ["3", "30", "0"], "0", "-"],
        ["1963", "only", "-", "Mar", "Sun>=16", ["0", "0", "0"], "60", "S"],
        ["1964", "only", "-", "Mar", "Sun>=16", ["3", "30", "0"], "60", "S"],
        ["1965", "only", "-", "Mar", "Sun>=16", ["0", "0", "0"], "60", "S"],
        ["1965", "only", "-", "Oct", "31", ["0", "0", "0"], "0", "-"],
        ["1966", "1971", "-", "Apr", "Sun>=16", ["3", "30", "0"], "60", "S"],
        ["1966", "1971", "-", "Oct", "Sun>=16", ["3", "30", "0"], "0", "-"],
        ["1972", "1974", "-", "Apr", "Sun>=15", ["0", "0", "0"], "60", "S"],
        ["1972", "1973", "-", "Oct", "Sun>=15", ["0", "0", "0"], "0", "-"],
        ["1974", "1977", "-", "Oct", "Sun>=15", ["3", "30", "0"], "0", "-"],
        ["1975", "1977", "-", "Apr", "Sun>=15", ["3", "30", "0"], "60", "S"],
        ["1978", "1980", "-", "Apr", "Sun>=15", ["0", "0", "0"], "60", "S"],
        ["1978", "1980", "-", "Oct", "Sun>=15", ["0", "0", "0"], "0", "-"]
    ],
    "Cyprus": [
        ["1975", "only", "-", "Apr", "13", ["0", "0", "0"], "60", "S"],
        ["1975", "only", "-", "Oct", "12", ["0", "0", "0"], "0", "-"],
        ["1976", "only", "-", "May", "15", ["0", "0", "0"], "60", "S"],
        ["1976", "only", "-", "Oct", "11", ["0", "0", "0"], "0", "-"],
        ["1977", "1980", "-", "Apr", "Sun>=1", ["0", "0", "0"], "60", "S"],
        ["1977", "only", "-", "Sep", "25", ["0", "0", "0"], "0", "-"],
        ["1978", "only", "-", "Oct", "2", ["0", "0", "0"], "0", "-"],
        ["1979", "1997", "-", "Sep", "lastSun", ["0", "0", "0"], "0", "-"],
        ["1981", "1998", "-", "Mar", "lastSun", ["0", "0", "0"], "60", "S"]
    ],
    "Iran": [
        ["1978", "1980", "-", "Mar", "21", ["0", "0", "0"], "60", "D"],
        ["1978", "only", "-", "Oct", "21", ["0", "0", "0"], "0", "S"],
        ["1979", "only", "-", "Sep", "19", ["0", "0", "0"], "0", "S"],
        ["1980", "only", "-", "Sep", "23", ["0", "0", "0"], "0", "S"],
        ["1991", "only", "-", "May", "3", ["0", "0", "0"], "60", "D"],
        ["1992", "1995", "-", "Mar", "22", ["0", "0", "0"], "60", "D"],
        ["1991", "1995", "-", "Sep", "22", ["0", "0", "0"], "0", "S"],
        ["1996", "only", "-", "Mar", "21", ["0", "0", "0"], "60", "D"],
        ["1996", "only", "-", "Sep", "21", ["0", "0", "0"], "0", "S"],
        ["1997", "1999", "-", "Mar", "22", ["0", "0", "0"], "60", "D"],
        ["1997", "1999", "-", "Sep", "22", ["0", "0", "0"], "0", "S"],
        ["2000", "only", "-", "Mar", "21", ["0", "0", "0"], "60", "D"],
        ["2000", "only", "-", "Sep", "21", ["0", "0", "0"], "0", "S"],
        ["2001", "2003", "-", "Mar", "22", ["0", "0", "0"], "60", "D"],
        ["2001", "2003", "-", "Sep", "22", ["0", "0", "0"], "0", "S"],
        ["2004", "only", "-", "Mar", "21", ["0", "0", "0"], "60", "D"],
        ["2004", "only", "-", "Sep", "21", ["0", "0", "0"], "0", "S"],
        ["2005", "only", "-", "Mar", "22", ["0", "0", "0"], "60", "D"],
        ["2005", "only", "-", "Sep", "22", ["0", "0", "0"], "0", "S"],
        ["2008", "only", "-", "Mar", "21", ["0", "0", "0"], "60", "D"],
        ["2008", "only", "-", "Sep", "21", ["0", "0", "0"], "0", "S"],
        ["2009", "2011", "-", "Mar", "22", ["0", "0", "0"], "60", "D"],
        ["2009", "2011", "-", "Sep", "22", ["0", "0", "0"], "0", "S"],
        ["2012", "only", "-", "Mar", "21", ["0", "0", "0"], "60", "D"],
        ["2012", "only", "-", "Sep", "21", ["0", "0", "0"], "0", "S"],
        ["2013", "2015", "-", "Mar", "22", ["0", "0", "0"], "60", "D"],
        ["2013", "2015", "-", "Sep", "22", ["0", "0", "0"], "0", "S"],
        ["2016", "only", "-", "Mar", "21", ["0", "0", "0"], "60", "D"],
        ["2016", "only", "-", "Sep", "21", ["0", "0", "0"], "0", "S"],
        ["2017", "2019", "-", "Mar", "22", ["0", "0", "0"], "60", "D"],
        ["2017", "2019", "-", "Sep", "22", ["0", "0", "0"], "0", "S"],
        ["2020", "only", "-", "Mar", "21", ["0", "0", "0"], "60", "D"],
        ["2020", "only", "-", "Sep", "21", ["0", "0", "0"], "0", "S"],
        ["2021", "2023", "-", "Mar", "22", ["0", "0", "0"], "60", "D"],
        ["2021", "2023", "-", "Sep", "22", ["0", "0", "0"], "0", "S"],
        ["2024", "only", "-", "Mar", "21", ["0", "0", "0"], "60", "D"],
        ["2024", "only", "-", "Sep", "21", ["0", "0", "0"], "0", "S"],
        ["2025", "2027", "-", "Mar", "22", ["0", "0", "0"], "60", "D"],
        ["2025", "2027", "-", "Sep", "22", ["0", "0", "0"], "0", "S"],
        ["2028", "2029", "-", "Mar", "21", ["0", "0", "0"], "60", "D"],
        ["2028", "2029", "-", "Sep", "21", ["0", "0", "0"], "0", "S"],
        ["2030", "2031", "-", "Mar", "22", ["0", "0", "0"], "60", "D"],
        ["2030", "2031", "-", "Sep", "22", ["0", "0", "0"], "0", "S"],
        ["2032", "2033", "-", "Mar", "21", ["0", "0", "0"], "60", "D"],
        ["2032", "2033", "-", "Sep", "21", ["0", "0", "0"], "0", "S"],
        ["2034", "2035", "-", "Mar", "22", ["0", "0", "0"], "60", "D"],
        ["2034", "2035", "-", "Sep", "22", ["0", "0", "0"], "0", "S"],
        ["2036", "2037", "-", "Mar", "21", ["0", "0", "0"], "60", "D"],
        ["2036", "2037", "-", "Sep", "21", ["0", "0", "0"], "0", "S"]
    ],
    "Iraq": [
        ["1982", "only", "-", "May", "1", ["0", "0", "0"], "60", "D"],
        ["1982", "1984", "-", "Oct", "1", ["0", "0", "0"], "0", "S"],
        ["1983", "only", "-", "Mar", "31", ["0", "0", "0"], "60", "D"],
        ["1984", "1985", "-", "Apr", "1", ["0", "0", "0"], "60", "D"],
        ["1985", "1990", "-", "Sep", "lastSun", ["1", "0", "0", "s"], "0", "S"],
        ["1986", "1990", "-", "Mar", "lastSun", ["1", "0", "0", "s"], "60", "D"],
        ["1991", "2007", "-", "Apr", "1", ["3", "0", "0", "s"], "60", "D"],
        ["1991", "2007", "-", "Oct", "1", ["3", "0", "0", "s"], "0", "S"]
    ],
    "Zion": [
        ["1940", "only", "-", "Jun", "1", ["0", "0", "0"], "60", "D"],
        ["1942", "1944", "-", "Nov", "1", ["0", "0", "0"], "0", "S"],
        ["1943", "only", "-", "Apr", "1", ["2", "0", "0"], "60", "D"],
        ["1944", "only", "-", "Apr", "1", ["0", "0", "0"], "60", "D"],
        ["1945", "only", "-", "Apr", "16", ["0", "0", "0"], "60", "D"],
        ["1945", "only", "-", "Nov", "1", ["2", "0", "0"], "0", "S"],
        ["1946", "only", "-", "Apr", "16", ["2", "0", "0"], "60", "D"],
        ["1946", "only", "-", "Nov", "1", ["0", "0", "0"], "0", "S"],
        ["1948", "only", "-", "May", "23", ["0", "0", "0"], "120", "DD"],
        ["1948", "only", "-", "Sep", "1", ["0", "0", "0"], "60", "D"],
        ["1948", "1949", "-", "Nov", "1", ["2", "0", "0"], "0", "S"],
        ["1949", "only", "-", "May", "1", ["0", "0", "0"], "60", "D"],
        ["1950", "only", "-", "Apr", "16", ["0", "0", "0"], "60", "D"],
        ["1950", "only", "-", "Sep", "15", ["3", "0", "0"], "0", "S"],
        ["1951", "only", "-", "Apr", "1", ["0", "0", "0"], "60", "D"],
        ["1951", "only", "-", "Nov", "11", ["3", "0", "0"], "0", "S"],
        ["1952", "only", "-", "Apr", "20", ["2", "0", "0"], "60", "D"],
        ["1952", "only", "-", "Oct", "19", ["3", "0", "0"], "0", "S"],
        ["1953", "only", "-", "Apr", "12", ["2", "0", "0"], "60", "D"],
        ["1953", "only", "-", "Sep", "13", ["3", "0", "0"], "0", "S"],
        ["1954", "only", "-", "Jun", "13", ["0", "0", "0"], "60", "D"],
        ["1954", "only", "-", "Sep", "12", ["0", "0", "0"], "0", "S"],
        ["1955", "only", "-", "Jun", "11", ["2", "0", "0"], "60", "D"],
        ["1955", "only", "-", "Sep", "11", ["0", "0", "0"], "0", "S"],
        ["1956", "only", "-", "Jun", "3", ["0", "0", "0"], "60", "D"],
        ["1956", "only", "-", "Sep", "30", ["3", "0", "0"], "0", "S"],
        ["1957", "only", "-", "Apr", "29", ["2", "0", "0"], "60", "D"],
        ["1957", "only", "-", "Sep", "22", ["0", "0", "0"], "0", "S"],
        ["1974", "only", "-", "Jul", "7", ["0", "0", "0"], "60", "D"],
        ["1974", "only", "-", "Oct", "13", ["0", "0", "0"], "0", "S"],
        ["1975", "only", "-", "Apr", "20", ["0", "0", "0"], "60", "D"],
        ["1975", "only", "-", "Aug", "31", ["0", "0", "0"], "0", "S"],
        ["1985", "only", "-", "Apr", "14", ["0", "0", "0"], "60", "D"],
        ["1985", "only", "-", "Sep", "15", ["0", "0", "0"], "0", "S"],
        ["1986", "only", "-", "May", "18", ["0", "0", "0"], "60", "D"],
        ["1986", "only", "-", "Sep", "7", ["0", "0", "0"], "0", "S"],
        ["1987", "only", "-", "Apr", "15", ["0", "0", "0"], "60", "D"],
        ["1987", "only", "-", "Sep", "13", ["0", "0", "0"], "0", "S"],
        ["1988", "only", "-", "Apr", "10", ["0", "0", "0"], "60", "D"],
        ["1988", "only", "-", "Sep", "4", ["0", "0", "0"], "0", "S"],
        ["1989", "only", "-", "Apr", "30", ["0", "0", "0"], "60", "D"],
        ["1989", "only", "-", "Sep", "3", ["0", "0", "0"], "0", "S"],
        ["1990", "only", "-", "Mar", "25", ["0", "0", "0"], "60", "D"],
        ["1990", "only", "-", "Aug", "26", ["0", "0", "0"], "0", "S"],
        ["1991", "only", "-", "Mar", "24", ["0", "0", "0"], "60", "D"],
        ["1991", "only", "-", "Sep", "1", ["0", "0", "0"], "0", "S"],
        ["1992", "only", "-", "Mar", "29", ["0", "0", "0"], "60", "D"],
        ["1992", "only", "-", "Sep", "6", ["0", "0", "0"], "0", "S"],
        ["1993", "only", "-", "Apr", "2", ["0", "0", "0"], "60", "D"],
        ["1993", "only", "-", "Sep", "5", ["0", "0", "0"], "0", "S"],
        ["1994", "only", "-", "Apr", "1", ["0", "0", "0"], "60", "D"],
        ["1994", "only", "-", "Aug", "28", ["0", "0", "0"], "0", "S"],
        ["1995", "only", "-", "Mar", "31", ["0", "0", "0"], "60", "D"],
        ["1995", "only", "-", "Sep", "3", ["0", "0", "0"], "0", "S"],
        ["1996", "only", "-", "Mar", "15", ["0", "0", "0"], "60", "D"],
        ["1996", "only", "-", "Sep", "16", ["0", "0", "0"], "0", "S"],
        ["1997", "only", "-", "Mar", "21", ["0", "0", "0"], "60", "D"],
        ["1997", "only", "-", "Sep", "14", ["0", "0", "0"], "0", "S"],
        ["1998", "only", "-", "Mar", "20", ["0", "0", "0"], "60", "D"],
        ["1998", "only", "-", "Sep", "6", ["0", "0", "0"], "0", "S"],
        ["1999", "only", "-", "Apr", "2", ["2", "0", "0"], "60", "D"],
        ["1999", "only", "-", "Sep", "3", ["2", "0", "0"], "0", "S"],
        ["2000", "only", "-", "Apr", "14", ["2", "0", "0"], "60", "D"],
        ["2000", "only", "-", "Oct", "6", ["1", "0", "0"], "0", "S"],
        ["2001", "only", "-", "Apr", "9", ["1", "0", "0"], "60", "D"],
        ["2001", "only", "-", "Sep", "24", ["1", "0", "0"], "0", "S"],
        ["2002", "only", "-", "Mar", "29", ["1", "0", "0"], "60", "D"],
        ["2002", "only", "-", "Oct", "7", ["1", "0", "0"], "0", "S"],
        ["2003", "only", "-", "Mar", "28", ["1", "0", "0"], "60", "D"],
        ["2003", "only", "-", "Oct", "3", ["1", "0", "0"], "0", "S"],
        ["2004", "only", "-", "Apr", "7", ["1", "0", "0"], "60", "D"],
        ["2004", "only", "-", "Sep", "22", ["1", "0", "0"], "0", "S"],
        ["2005", "only", "-", "Apr", "1", ["2", "0", "0"], "60", "D"],
        ["2005", "only", "-", "Oct", "9", ["2", "0", "0"], "0", "S"],
        ["2006", "2010", "-", "Mar", "Fri>=26", ["2", "0", "0"], "60", "D"],
        ["2006", "only", "-", "Oct", "1", ["2", "0", "0"], "0", "S"],
        ["2007", "only", "-", "Sep", "16", ["2", "0", "0"], "0", "S"],
        ["2008", "only", "-", "Oct", "5", ["2", "0", "0"], "0", "S"],
        ["2009", "only", "-", "Sep", "27", ["2", "0", "0"], "0", "S"],
        ["2010", "only", "-", "Sep", "12", ["2", "0", "0"], "0", "S"],
        ["2011", "only", "-", "Apr", "1", ["2", "0", "0"], "60", "D"],
        ["2011", "only", "-", "Oct", "2", ["2", "0", "0"], "0", "S"],
        ["2012", "only", "-", "Mar", "Fri>=26", ["2", "0", "0"], "60", "D"],
        ["2012", "only", "-", "Sep", "23", ["2", "0", "0"], "0", "S"],
        ["2013", "max", "-", "Mar", "Fri>=23", ["2", "0", "0"], "60", "D"],
        ["2013", "max", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "Japan": [
        ["1948", "only", "-", "May", "Sun>=1", ["2", "0", "0"], "60", "D"],
        ["1948", "1951", "-", "Sep", "Sat>=8", ["2", "0", "0"], "0", "S"],
        ["1949", "only", "-", "Apr", "Sun>=1", ["2", "0", "0"], "60", "D"],
        ["1950", "1951", "-", "May", "Sun>=1", ["2", "0", "0"], "60", "D"]
    ],
    "Jordan": [
        ["1973", "only", "-", "Jun", "6", ["0", "0", "0"], "60", "S"],
        ["1973", "1975", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1974", "1977", "-", "May", "1", ["0", "0", "0"], "60", "S"],
        ["1976", "only", "-", "Nov", "1", ["0", "0", "0"], "0", "-"],
        ["1977", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1978", "only", "-", "Apr", "30", ["0", "0", "0"], "60", "S"],
        ["1978", "only", "-", "Sep", "30", ["0", "0", "0"], "0", "-"],
        ["1985", "only", "-", "Apr", "1", ["0", "0", "0"], "60", "S"],
        ["1985", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1986", "1988", "-", "Apr", "Fri>=1", ["0", "0", "0"], "60", "S"],
        ["1986", "1990", "-", "Oct", "Fri>=1", ["0", "0", "0"], "0", "-"],
        ["1989", "only", "-", "May", "8", ["0", "0", "0"], "60", "S"],
        ["1990", "only", "-", "Apr", "27", ["0", "0", "0"], "60", "S"],
        ["1991", "only", "-", "Apr", "17", ["0", "0", "0"], "60", "S"],
        ["1991", "only", "-", "Sep", "27", ["0", "0", "0"], "0", "-"],
        ["1992", "only", "-", "Apr", "10", ["0", "0", "0"], "60", "S"],
        ["1992", "1993", "-", "Oct", "Fri>=1", ["0", "0", "0"], "0", "-"],
        ["1993", "1998", "-", "Apr", "Fri>=1", ["0", "0", "0"], "60", "S"],
        ["1994", "only", "-", "Sep", "Fri>=15", ["0", "0", "0"], "0", "-"],
        ["1995", "1998", "-", "Sep", "Fri>=15", ["0", "0", "0", "s"], "0", "-"],
        ["1999", "only", "-", "Jul", "1", ["0", "0", "0", "s"], "60", "S"],
        ["1999", "2002", "-", "Sep", "lastFri", ["0", "0", "0", "s"], "0", "-"],
        ["2000", "2001", "-", "Mar", "lastThu", ["0", "0", "0", "s"], "60", "S"],
        ["2002", "2012", "-", "Mar", "lastThu", ["24", "0", "0"], "60", "S"],
        ["2003", "only", "-", "Oct", "24", ["0", "0", "0", "s"], "0", "-"],
        ["2004", "only", "-", "Oct", "15", ["0", "0", "0", "s"], "0", "-"],
        ["2005", "only", "-", "Sep", "lastFri", ["0", "0", "0", "s"], "0", "-"],
        ["2006", "2011", "-", "Oct", "lastFri", ["0", "0", "0", "s"], "0", "-"],
        ["2013", "only", "-", "Dec", "20", ["0", "0", "0"], "0", "-"],
        ["2014", "max", "-", "Mar", "lastThu", ["24", "0", "0"], "60", "S"],
        ["2014", "max", "-", "Oct", "lastFri", ["0", "0", "0", "s"], "0", "-"]
    ],
    "Kyrgyz": [
        ["1992", "1996", "-", "Apr", "Sun>=7", ["0", "0", "0", "s"], "60", "S"],
        ["1992", "1996", "-", "Sep", "lastSun", ["0", "0", "0"], "0", "-"],
        ["1997", "2005", "-", "Mar", "lastSun", ["2", "30", "0"], "60", "S"],
        ["1997", "2004", "-", "Oct", "lastSun", ["2", "30", "0"], "0", "-"]
    ],
    "ROK": [
        ["1960", "only", "-", "May", "15", ["0", "0", "0"], "60", "D"],
        ["1960", "only", "-", "Sep", "13", ["0", "0", "0"], "0", "S"],
        ["1987", "1988", "-", "May", "Sun>=8", ["0", "0", "0"], "60", "D"],
        ["1987", "1988", "-", "Oct", "Sun>=8", ["0", "0", "0"], "0", "S"]
    ],
    "Lebanon": [
        ["1920", "only", "-", "Mar", "28", ["0", "0", "0"], "60", "S"],
        ["1920", "only", "-", "Oct", "25", ["0", "0", "0"], "0", "-"],
        ["1921", "only", "-", "Apr", "3", ["0", "0", "0"], "60", "S"],
        ["1921", "only", "-", "Oct", "3", ["0", "0", "0"], "0", "-"],
        ["1922", "only", "-", "Mar", "26", ["0", "0", "0"], "60", "S"],
        ["1922", "only", "-", "Oct", "8", ["0", "0", "0"], "0", "-"],
        ["1923", "only", "-", "Apr", "22", ["0", "0", "0"], "60", "S"],
        ["1923", "only", "-", "Sep", "16", ["0", "0", "0"], "0", "-"],
        ["1957", "1961", "-", "May", "1", ["0", "0", "0"], "60", "S"],
        ["1957", "1961", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1972", "only", "-", "Jun", "22", ["0", "0", "0"], "60", "S"],
        ["1972", "1977", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1973", "1977", "-", "May", "1", ["0", "0", "0"], "60", "S"],
        ["1978", "only", "-", "Apr", "30", ["0", "0", "0"], "60", "S"],
        ["1978", "only", "-", "Sep", "30", ["0", "0", "0"], "0", "-"],
        ["1984", "1987", "-", "May", "1", ["0", "0", "0"], "60", "S"],
        ["1984", "1991", "-", "Oct", "16", ["0", "0", "0"], "0", "-"],
        ["1988", "only", "-", "Jun", "1", ["0", "0", "0"], "60", "S"],
        ["1989", "only", "-", "May", "10", ["0", "0", "0"], "60", "S"],
        ["1990", "1992", "-", "May", "1", ["0", "0", "0"], "60", "S"],
        ["1992", "only", "-", "Oct", "4", ["0", "0", "0"], "0", "-"],
        ["1993", "max", "-", "Mar", "lastSun", ["0", "0", "0"], "60", "S"],
        ["1993", "1998", "-", "Sep", "lastSun", ["0", "0", "0"], "0", "-"],
        ["1999", "max", "-", "Oct", "lastSun", ["0", "0", "0"], "0", "-"]
    ],
    "NBorneo": [
        ["1935", "1941", "-", "Sep", "14", ["0", "0", "0"], "20", "TS", ""],
        ["1935", "1941", "-", "Dec", "14", ["0", "0", "0"], "0", "-"]
    ],
    "Mongol": [
        ["1983", "1984", "-", "Apr", "1", ["0", "0", "0"], "60", "S"],
        ["1983", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1985", "1998", "-", "Mar", "lastSun", ["0", "0", "0"], "60", "S"],
        ["1984", "1998", "-", "Sep", "lastSun", ["0", "0", "0"], "0", "-"],
        ["2001", "only", "-", "Apr", "lastSat", ["2", "0", "0"], "60", "S"],
        ["2001", "2006", "-", "Sep", "lastSat", ["2", "0", "0"], "0", "-"],
        ["2002", "2006", "-", "Mar", "lastSat", ["2", "0", "0"], "60", "S"]
    ],
    "Pakistan": [
        ["2002", "only", "-", "Apr", "Sun>=2", ["0", "1", "0"], "60", "S"],
        ["2002", "only", "-", "Oct", "Sun>=2", ["0", "1", "0"], "0", "-"],
        ["2008", "only", "-", "Jun", "1", ["0", "0", "0"], "60", "S"],
        ["2008", "2009", "-", "Nov", "1", ["0", "0", "0"], "0", "-"],
        ["2009", "only", "-", "Apr", "15", ["0", "0", "0"], "60", "S"]
    ],
    "EgyptAsia": [
        ["1957", "only", "-", "May", "10", ["0", "0", "0"], "60", "S"],
        ["1957", "1958", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1958", "only", "-", "May", "1", ["0", "0", "0"], "60", "S"],
        ["1959", "1967", "-", "May", "1", ["1", "0", "0"], "60", "S"],
        ["1959", "1965", "-", "Sep", "30", ["3", "0", "0"], "0", "-"],
        ["1966", "only", "-", "Oct", "1", ["3", "0", "0"], "0", "-"]
    ],
    "Palestine": [
        ["1999", "2005", "-", "Apr", "Fri>=15", ["0", "0", "0"], "60", "S"],
        ["1999", "2003", "-", "Oct", "Fri>=15", ["0", "0", "0"], "0", "-"],
        ["2004", "only", "-", "Oct", "1", ["1", "0", "0"], "0", "-"],
        ["2005", "only", "-", "Oct", "4", ["2", "0", "0"], "0", "-"],
        ["2006", "2007", "-", "Apr", "1", ["0", "0", "0"], "60", "S"],
        ["2006", "only", "-", "Sep", "22", ["0", "0", "0"], "0", "-"],
        ["2007", "only", "-", "Sep", "Thu>=8", ["2", "0", "0"], "0", "-"],
        ["2008", "2009", "-", "Mar", "lastFri", ["0", "0", "0"], "60", "S"],
        ["2008", "only", "-", "Sep", "1", ["0", "0", "0"], "0", "-"],
        ["2009", "only", "-", "Sep", "Fri>=1", ["1", "0", "0"], "0", "-"],
        ["2010", "only", "-", "Mar", "26", ["0", "0", "0"], "60", "S"],
        ["2010", "only", "-", "Aug", "11", ["0", "0", "0"], "0", "-"],
        ["2011", "only", "-", "Apr", "1", ["0", "1", "0"], "60", "S"],
        ["2011", "only", "-", "Aug", "1", ["0", "0", "0"], "0", "-"],
        ["2011", "only", "-", "Aug", "30", ["0", "0", "0"], "60", "S"],
        ["2011", "only", "-", "Sep", "30", ["0", "0", "0"], "0", "-"],
        ["2012", "max", "-", "Mar", "lastThu", ["24", "0", "0"], "60", "S"],
        ["2012", "only", "-", "Sep", "21", ["1", "0", "0"], "0", "-"],
        ["2013", "max", "-", "Sep", "Fri>=21", ["0", "0", "0"], "0", "-"]
    ],
    "Phil": [
        ["1936", "only", "-", "Nov", "1", ["0", "0", "0"], "60", "S"],
        ["1937", "only", "-", "Feb", "1", ["0", "0", "0"], "0", "-"],
        ["1954", "only", "-", "Apr", "12", ["0", "0", "0"], "60", "S"],
        ["1954", "only", "-", "Jul", "1", ["0", "0", "0"], "0", "-"],
        ["1978", "only", "-", "Mar", "22", ["0", "0", "0"], "60", "S"],
        ["1978", "only", "-", "Sep", "21", ["0", "0", "0"], "0", "-"]
    ],
    "Syria": [
        ["1920", "1923", "-", "Apr", "Sun>=15", ["2", "0", "0"], "60", "S"],
        ["1920", "1923", "-", "Oct", "Sun>=1", ["2", "0", "0"], "0", "-"],
        ["1962", "only", "-", "Apr", "29", ["2", "0", "0"], "60", "S"],
        ["1962", "only", "-", "Oct", "1", ["2", "0", "0"], "0", "-"],
        ["1963", "1965", "-", "May", "1", ["2", "0", "0"], "60", "S"],
        ["1963", "only", "-", "Sep", "30", ["2", "0", "0"], "0", "-"],
        ["1964", "only", "-", "Oct", "1", ["2", "0", "0"], "0", "-"],
        ["1965", "only", "-", "Sep", "30", ["2", "0", "0"], "0", "-"],
        ["1966", "only", "-", "Apr", "24", ["2", "0", "0"], "60", "S"],
        ["1966", "1976", "-", "Oct", "1", ["2", "0", "0"], "0", "-"],
        ["1967", "1978", "-", "May", "1", ["2", "0", "0"], "60", "S"],
        ["1977", "1978", "-", "Sep", "1", ["2", "0", "0"], "0", "-"],
        ["1983", "1984", "-", "Apr", "9", ["2", "0", "0"], "60", "S"],
        ["1983", "1984", "-", "Oct", "1", ["2", "0", "0"], "0", "-"],
        ["1986", "only", "-", "Feb", "16", ["2", "0", "0"], "60", "S"],
        ["1986", "only", "-", "Oct", "9", ["2", "0", "0"], "0", "-"],
        ["1987", "only", "-", "Mar", "1", ["2", "0", "0"], "60", "S"],
        ["1987", "1988", "-", "Oct", "31", ["2", "0", "0"], "0", "-"],
        ["1988", "only", "-", "Mar", "15", ["2", "0", "0"], "60", "S"],
        ["1989", "only", "-", "Mar", "31", ["2", "0", "0"], "60", "S"],
        ["1989", "only", "-", "Oct", "1", ["2", "0", "0"], "0", "-"],
        ["1990", "only", "-", "Apr", "1", ["2", "0", "0"], "60", "S"],
        ["1990", "only", "-", "Sep", "30", ["2", "0", "0"], "0", "-"],
        ["1991", "only", "-", "Apr", "1", ["0", "0", "0"], "60", "S"],
        ["1991", "1992", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1992", "only", "-", "Apr", "8", ["0", "0", "0"], "60", "S"],
        ["1993", "only", "-", "Mar", "26", ["0", "0", "0"], "60", "S"],
        ["1993", "only", "-", "Sep", "25", ["0", "0", "0"], "0", "-"],
        ["1994", "1996", "-", "Apr", "1", ["0", "0", "0"], "60", "S"],
        ["1994", "2005", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1997", "1998", "-", "Mar", "lastMon", ["0", "0", "0"], "60", "S"],
        ["1999", "2006", "-", "Apr", "1", ["0", "0", "0"], "60", "S"],
        ["2006", "only", "-", "Sep", "22", ["0", "0", "0"], "0", "-"],
        ["2007", "only", "-", "Mar", "lastFri", ["0", "0", "0"], "60", "S"],
        ["2007", "only", "-", "Nov", "Fri>=1", ["0", "0", "0"], "0", "-"],
        ["2008", "only", "-", "Apr", "Fri>=1", ["0", "0", "0"], "60", "S"],
        ["2008", "only", "-", "Nov", "1", ["0", "0", "0"], "0", "-"],
        ["2009", "only", "-", "Mar", "lastFri", ["0", "0", "0"], "60", "S"],
        ["2010", "2011", "-", "Apr", "Fri>=1", ["0", "0", "0"], "60", "S"],
        ["2012", "max", "-", "Mar", "lastFri", ["0", "0", "0"], "60", "S"],
        ["2009", "max", "-", "Oct", "lastFri", ["0", "0", "0"], "0", "-"]
    ],
    "Aus": [
        ["1917", "only", "-", "Jan", "1", ["0", "1", "0"], "60", "D"],
        ["1917", "only", "-", "Mar", "25", ["2", "0", "0"], "0", "S"],
        ["1942", "only", "-", "Jan", "1", ["2", "0", "0"], "60", "D"],
        ["1942", "only", "-", "Mar", "29", ["2", "0", "0"], "0", "S"],
        ["1942", "only", "-", "Sep", "27", ["2", "0", "0"], "60", "D"],
        ["1943", "1944", "-", "Mar", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1943", "only", "-", "Oct", "3", ["2", "0", "0"], "60", "D"]
    ],
    "AW": [
        ["1974", "only", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["1975", "only", "-", "Mar", "Sun>=1", ["2", "0", "0", "s"], "0", "S"],
        ["1983", "only", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["1984", "only", "-", "Mar", "Sun>=1", ["2", "0", "0", "s"], "0", "S"],
        ["1991", "only", "-", "Nov", "17", ["2", "0", "0", "s"], "60", "D"],
        ["1992", "only", "-", "Mar", "Sun>=1", ["2", "0", "0", "s"], "0", "S"],
        ["2006", "only", "-", "Dec", "3", ["2", "0", "0", "s"], "60", "D"],
        ["2007", "2009", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "0", "S"],
        ["2007", "2008", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "60", "D"]
    ],
    "AQ": [
        ["1971", "only", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["1972", "only", "-", "Feb", "lastSun", ["2", "0", "0", "s"], "0", "S"],
        ["1989", "1991", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["1990", "1992", "-", "Mar", "Sun>=1", ["2", "0", "0", "s"], "0", "S"]
    ],
    "Holiday": [
        ["1992", "1993", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["1993", "1994", "-", "Mar", "Sun>=1", ["2", "0", "0", "s"], "0", "S"]
    ],
    "AS": [
        ["1971", "1985", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["1986", "only", "-", "Oct", "19", ["2", "0", "0", "s"], "60", "D"],
        ["1987", "2007", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["1972", "only", "-", "Feb", "27", ["2", "0", "0", "s"], "0", "S"],
        ["1973", "1985", "-", "Mar", "Sun>=1", ["2", "0", "0", "s"], "0", "S"],
        ["1986", "1990", "-", "Mar", "Sun>=15", ["2", "0", "0", "s"], "0", "S"],
        ["1991", "only", "-", "Mar", "3", ["2", "0", "0", "s"], "0", "S"],
        ["1992", "only", "-", "Mar", "22", ["2", "0", "0", "s"], "0", "S"],
        ["1993", "only", "-", "Mar", "7", ["2", "0", "0", "s"], "0", "S"],
        ["1994", "only", "-", "Mar", "20", ["2", "0", "0", "s"], "0", "S"],
        ["1995", "2005", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "0", "S"],
        ["2006", "only", "-", "Apr", "2", ["2", "0", "0", "s"], "0", "S"],
        ["2007", "only", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "0", "S"],
        ["2008", "max", "-", "Apr", "Sun>=1", ["2", "0", "0", "s"], "0", "S"],
        ["2008", "max", "-", "Oct", "Sun>=1", ["2", "0", "0", "s"], "60", "D"]
    ],
    "AT": [
        ["1967", "only", "-", "Oct", "Sun>=1", ["2", "0", "0", "s"], "60", "D"],
        ["1968", "only", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "0", "S"],
        ["1968", "1985", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["1969", "1971", "-", "Mar", "Sun>=8", ["2", "0", "0", "s"], "0", "S"],
        ["1972", "only", "-", "Feb", "lastSun", ["2", "0", "0", "s"], "0", "S"],
        ["1973", "1981", "-", "Mar", "Sun>=1", ["2", "0", "0", "s"], "0", "S"],
        ["1982", "1983", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "0", "S"],
        ["1984", "1986", "-", "Mar", "Sun>=1", ["2", "0", "0", "s"], "0", "S"],
        ["1986", "only", "-", "Oct", "Sun>=15", ["2", "0", "0", "s"], "60", "D"],
        ["1987", "1990", "-", "Mar", "Sun>=15", ["2", "0", "0", "s"], "0", "S"],
        ["1987", "only", "-", "Oct", "Sun>=22", ["2", "0", "0", "s"], "60", "D"],
        ["1988", "1990", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["1991", "1999", "-", "Oct", "Sun>=1", ["2", "0", "0", "s"], "60", "D"],
        ["1991", "2005", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "0", "S"],
        ["2000", "only", "-", "Aug", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["2001", "max", "-", "Oct", "Sun>=1", ["2", "0", "0", "s"], "60", "D"],
        ["2006", "only", "-", "Apr", "Sun>=1", ["2", "0", "0", "s"], "0", "S"],
        ["2007", "only", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "0", "S"],
        ["2008", "max", "-", "Apr", "Sun>=1", ["2", "0", "0", "s"], "0", "S"]
    ],
    "AV": [
        ["1971", "1985", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["1972", "only", "-", "Feb", "lastSun", ["2", "0", "0", "s"], "0", "S"],
        ["1973", "1985", "-", "Mar", "Sun>=1", ["2", "0", "0", "s"], "0", "S"],
        ["1986", "1990", "-", "Mar", "Sun>=15", ["2", "0", "0", "s"], "0", "S"],
        ["1986", "1987", "-", "Oct", "Sun>=15", ["2", "0", "0", "s"], "60", "D"],
        ["1988", "1999", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["1991", "1994", "-", "Mar", "Sun>=1", ["2", "0", "0", "s"], "0", "S"],
        ["1995", "2005", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "0", "S"],
        ["2000", "only", "-", "Aug", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["2001", "2007", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["2006", "only", "-", "Apr", "Sun>=1", ["2", "0", "0", "s"], "0", "S"],
        ["2007", "only", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "0", "S"],
        ["2008", "max", "-", "Apr", "Sun>=1", ["2", "0", "0", "s"], "0", "S"],
        ["2008", "max", "-", "Oct", "Sun>=1", ["2", "0", "0", "s"], "60", "D"]
    ],
    "AN": [
        ["1971", "1985", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["1972", "only", "-", "Feb", "27", ["2", "0", "0", "s"], "0", "S"],
        ["1973", "1981", "-", "Mar", "Sun>=1", ["2", "0", "0", "s"], "0", "S"],
        ["1982", "only", "-", "Apr", "Sun>=1", ["2", "0", "0", "s"], "0", "S"],
        ["1983", "1985", "-", "Mar", "Sun>=1", ["2", "0", "0", "s"], "0", "S"],
        ["1986", "1989", "-", "Mar", "Sun>=15", ["2", "0", "0", "s"], "0", "S"],
        ["1986", "only", "-", "Oct", "19", ["2", "0", "0", "s"], "60", "D"],
        ["1987", "1999", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["1990", "1995", "-", "Mar", "Sun>=1", ["2", "0", "0", "s"], "0", "S"],
        ["1996", "2005", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "0", "S"],
        ["2000", "only", "-", "Aug", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["2001", "2007", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["2006", "only", "-", "Apr", "Sun>=1", ["2", "0", "0", "s"], "0", "S"],
        ["2007", "only", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "0", "S"],
        ["2008", "max", "-", "Apr", "Sun>=1", ["2", "0", "0", "s"], "0", "S"],
        ["2008", "max", "-", "Oct", "Sun>=1", ["2", "0", "0", "s"], "60", "D"]
    ],
    "LH": [
        ["1981", "1984", "-", "Oct", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1982", "1985", "-", "Mar", "Sun>=1", ["2", "0", "0"], "0", "S"],
        ["1985", "only", "-", "Oct", "lastSun", ["2", "0", "0"], "30", "D"],
        ["1986", "1989", "-", "Mar", "Sun>=15", ["2", "0", "0"], "0", "S"],
        ["1986", "only", "-", "Oct", "19", ["2", "0", "0"], "30", "D"],
        ["1987", "1999", "-", "Oct", "lastSun", ["2", "0", "0"], "30", "D"],
        ["1990", "1995", "-", "Mar", "Sun>=1", ["2", "0", "0"], "0", "S"],
        ["1996", "2005", "-", "Mar", "lastSun", ["2", "0", "0"], "0", "S"],
        ["2000", "only", "-", "Aug", "lastSun", ["2", "0", "0"], "30", "D"],
        ["2001", "2007", "-", "Oct", "lastSun", ["2", "0", "0"], "30", "D"],
        ["2006", "only", "-", "Apr", "Sun>=1", ["2", "0", "0"], "0", "S"],
        ["2007", "only", "-", "Mar", "lastSun", ["2", "0", "0"], "0", "S"],
        ["2008", "max", "-", "Apr", "Sun>=1", ["2", "0", "0"], "0", "S"],
        ["2008", "max", "-", "Oct", "Sun>=1", ["2", "0", "0"], "30", "D"]
    ],
    "Fiji": [
        ["1998", "1999", "-", "Nov", "Sun>=1", ["2", "0", "0"], "60", "S"],
        ["1999", "2000", "-", "Feb", "lastSun", ["3", "0", "0"], "0", "-"],
        ["2009", "only", "-", "Nov", "29", ["2", "0", "0"], "60", "S"],
        ["2010", "only", "-", "Mar", "lastSun", ["3", "0", "0"], "0", "-"],
        ["2010", "max", "-", "Oct", "Sun>=21", ["2", "0", "0"], "60", "S"],
        ["2011", "only", "-", "Mar", "Sun>=1", ["3", "0", "0"], "0", "-"],
        ["2012", "2013", "-", "Jan", "Sun>=18", ["3", "0", "0"], "0", "-"],
        ["2014", "max", "-", "Jan", "Sun>=18", ["2", "0", "0"], "0", "-"]
    ],
    "NC": [
        ["1977", "1978", "-", "Dec", "Sun>=1", ["0", "0", "0"], "60", "S"],
        ["1978", "1979", "-", "Feb", "27", ["0", "0", "0"], "0", "-"],
        ["1996", "only", "-", "Dec", "1", ["2", "0", "0", "s"], "60", "S"],
        ["1997", "only", "-", "Mar", "2", ["2", "0", "0", "s"], "0", "-"]
    ],
    "NZ": [
        ["1927", "only", "-", "Nov", "6", ["2", "0", "0"], "60", "S"],
        ["1928", "only", "-", "Mar", "4", ["2", "0", "0"], "0", "M"],
        ["1928", "1933", "-", "Oct", "Sun>=8", ["2", "0", "0"], "30", "S"],
        ["1929", "1933", "-", "Mar", "Sun>=15", ["2", "0", "0"], "0", "M"],
        ["1934", "1940", "-", "Apr", "lastSun", ["2", "0", "0"], "0", "M"],
        ["1934", "1940", "-", "Sep", "lastSun", ["2", "0", "0"], "30", "S"],
        ["1946", "only", "-", "Jan", "1", ["0", "0", "0"], "0", "S"],
        ["1974", "only", "-", "Nov", "Sun>=1", ["2", "0", "0", "s"], "60", "D"],
        ["1975", "only", "-", "Feb", "lastSun", ["2", "0", "0", "s"], "0", "S"],
        ["1975", "1988", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["1976", "1989", "-", "Mar", "Sun>=1", ["2", "0", "0", "s"], "0", "S"],
        ["1989", "only", "-", "Oct", "Sun>=8", ["2", "0", "0", "s"], "60", "D"],
        ["1990", "2006", "-", "Oct", "Sun>=1", ["2", "0", "0", "s"], "60", "D"],
        ["1990", "2007", "-", "Mar", "Sun>=15", ["2", "0", "0", "s"], "0", "S"],
        ["2007", "max", "-", "Sep", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["2008", "max", "-", "Apr", "Sun>=1", ["2", "0", "0", "s"], "0", "S"]
    ],
    "Chatham": [
        ["1974", "only", "-", "Nov", "Sun>=1", ["2", "45", "0", "s"], "60", "D"],
        ["1975", "only", "-", "Feb", "lastSun", ["2", "45", "0", "s"], "0", "S"],
        ["1975", "1988", "-", "Oct", "lastSun", ["2", "45", "0", "s"], "60", "D"],
        ["1976", "1989", "-", "Mar", "Sun>=1", ["2", "45", "0", "s"], "0", "S"],
        ["1989", "only", "-", "Oct", "Sun>=8", ["2", "45", "0", "s"], "60", "D"],
        ["1990", "2006", "-", "Oct", "Sun>=1", ["2", "45", "0", "s"], "60", "D"],
        ["1990", "2007", "-", "Mar", "Sun>=15", ["2", "45", "0", "s"], "0", "S"],
        ["2007", "max", "-", "Sep", "lastSun", ["2", "45", "0", "s"], "60", "D"],
        ["2008", "max", "-", "Apr", "Sun>=1", ["2", "45", "0", "s"], "0", "S"]
    ],
    "Cook": [
        ["1978", "only", "-", "Nov", "12", ["0", "0", "0"], "30", "HS"],
        ["1979", "1991", "-", "Mar", "Sun>=1", ["0", "0", "0"], "0", "-"],
        ["1979", "1990", "-", "Oct", "lastSun", ["0", "0", "0"], "30", "HS"]
    ],
    "WS": [
        ["2010", "only", "-", "Sep", "lastSun", ["0", "0", "0"], "60", "D"],
        ["2011", "only", "-", "Apr", "Sat>=1", ["4", "0", "0"], "0", "S"],
        ["2011", "only", "-", "Sep", "lastSat", ["3", "0", "0"], "60", "D"],
        ["2012", "max", "-", "Apr", "Sun>=1", ["4", "0", "0"], "0", "S"],
        ["2012", "max", "-", "Sep", "lastSun", ["3", "0", "0"], "60", "D"]
    ],
    "Tonga": [
        ["1999", "only", "-", "Oct", "7", ["2", "0", "0", "s"], "60", "S"],
        ["2000", "only", "-", "Mar", "19", ["2", "0", "0", "s"], "0", "-"],
        ["2000", "2001", "-", "Nov", "Sun>=1", ["2", "0", "0"], "60", "S"],
        ["2001", "2002", "-", "Jan", "lastSun", ["2", "0", "0"], "0", "-"]
    ],
    "Vanuatu": [
        ["1983", "only", "-", "Sep", "25", ["0", "0", "0"], "60", "S"],
        ["1984", "1991", "-", "Mar", "Sun>=23", ["0", "0", "0"], "0", "-"],
        ["1984", "only", "-", "Oct", "23", ["0", "0", "0"], "60", "S"],
        ["1985", "1991", "-", "Sep", "Sun>=23", ["0", "0", "0"], "60", "S"],
        ["1992", "1993", "-", "Jan", "Sun>=23", ["0", "0", "0"], "0", "-"],
        ["1992", "only", "-", "Oct", "Sun>=23", ["0", "0", "0"], "60", "S"]
    ],
    "GB-Eire": [
        ["1916", "only", "-", "May", "21", ["2", "0", "0", "s"], "60", "BST"],
        ["1916", "only", "-", "Oct", "1", ["2", "0", "0", "s"], "0", "GMT"],
        ["1917", "only", "-", "Apr", "8", ["2", "0", "0", "s"], "60", "BST"],
        ["1917", "only", "-", "Sep", "17", ["2", "0", "0", "s"], "0", "GMT"],
        ["1918", "only", "-", "Mar", "24", ["2", "0", "0", "s"], "60", "BST"],
        ["1918", "only", "-", "Sep", "30", ["2", "0", "0", "s"], "0", "GMT"],
        ["1919", "only", "-", "Mar", "30", ["2", "0", "0", "s"], "60", "BST"],
        ["1919", "only", "-", "Sep", "29", ["2", "0", "0", "s"], "0", "GMT"],
        ["1920", "only", "-", "Mar", "28", ["2", "0", "0", "s"], "60", "BST"],
        ["1920", "only", "-", "Oct", "25", ["2", "0", "0", "s"], "0", "GMT"],
        ["1921", "only", "-", "Apr", "3", ["2", "0", "0", "s"], "60", "BST"],
        ["1921", "only", "-", "Oct", "3", ["2", "0", "0", "s"], "0", "GMT"],
        ["1922", "only", "-", "Mar", "26", ["2", "0", "0", "s"], "60", "BST"],
        ["1922", "only", "-", "Oct", "8", ["2", "0", "0", "s"], "0", "GMT"],
        ["1923", "only", "-", "Apr", "Sun>=16", ["2", "0", "0", "s"], "60", "BST"],
        ["1923", "1924", "-", "Sep", "Sun>=16", ["2", "0", "0", "s"], "0", "GMT"],
        ["1924", "only", "-", "Apr", "Sun>=9", ["2", "0", "0", "s"], "60", "BST"],
        ["1925", "1926", "-", "Apr", "Sun>=16", ["2", "0", "0", "s"], "60", "BST"],
        ["1925", "1938", "-", "Oct", "Sun>=2", ["2", "0", "0", "s"], "0", "GMT"],
        ["1927", "only", "-", "Apr", "Sun>=9", ["2", "0", "0", "s"], "60", "BST"],
        ["1928", "1929", "-", "Apr", "Sun>=16", ["2", "0", "0", "s"], "60", "BST"],
        ["1930", "only", "-", "Apr", "Sun>=9", ["2", "0", "0", "s"], "60", "BST"],
        ["1931", "1932", "-", "Apr", "Sun>=16", ["2", "0", "0", "s"], "60", "BST"],
        ["1933", "only", "-", "Apr", "Sun>=9", ["2", "0", "0", "s"], "60", "BST"],
        ["1934", "only", "-", "Apr", "Sun>=16", ["2", "0", "0", "s"], "60", "BST"],
        ["1935", "only", "-", "Apr", "Sun>=9", ["2", "0", "0", "s"], "60", "BST"],
        ["1936", "1937", "-", "Apr", "Sun>=16", ["2", "0", "0", "s"], "60", "BST"],
        ["1938", "only", "-", "Apr", "Sun>=9", ["2", "0", "0", "s"], "60", "BST"],
        ["1939", "only", "-", "Apr", "Sun>=16", ["2", "0", "0", "s"], "60", "BST"],
        ["1939", "only", "-", "Nov", "Sun>=16", ["2", "0", "0", "s"], "0", "GMT"],
        ["1940", "only", "-", "Feb", "Sun>=23", ["2", "0", "0", "s"], "60", "BST"],
        ["1941", "only", "-", "May", "Sun>=2", ["1", "0", "0", "s"], "120", "BDST"],
        ["1941", "1943", "-", "Aug", "Sun>=9", ["1", "0", "0", "s"], "60", "BST"],
        ["1942", "1944", "-", "Apr", "Sun>=2", ["1", "0", "0", "s"], "120", "BDST"],
        ["1944", "only", "-", "Sep", "Sun>=16", ["1", "0", "0", "s"], "60", "BST"],
        ["1945", "only", "-", "Apr", "Mon>=2", ["1", "0", "0", "s"], "120", "BDST"],
        ["1945", "only", "-", "Jul", "Sun>=9", ["1", "0", "0", "s"], "60", "BST"],
        ["1945", "1946", "-", "Oct", "Sun>=2", ["2", "0", "0", "s"], "0", "GMT"],
        ["1946", "only", "-", "Apr", "Sun>=9", ["2", "0", "0", "s"], "60", "BST"],
        ["1947", "only", "-", "Mar", "16", ["2", "0", "0", "s"], "60", "BST"],
        ["1947", "only", "-", "Apr", "13", ["1", "0", "0", "s"], "120", "BDST"],
        ["1947", "only", "-", "Aug", "10", ["1", "0", "0", "s"], "60", "BST"],
        ["1947", "only", "-", "Nov", "2", ["2", "0", "0", "s"], "0", "GMT"],
        ["1948", "only", "-", "Mar", "14", ["2", "0", "0", "s"], "60", "BST"],
        ["1948", "only", "-", "Oct", "31", ["2", "0", "0", "s"], "0", "GMT"],
        ["1949", "only", "-", "Apr", "3", ["2", "0", "0", "s"], "60", "BST"],
        ["1949", "only", "-", "Oct", "30", ["2", "0", "0", "s"], "0", "GMT"],
        ["1950", "1952", "-", "Apr", "Sun>=14", ["2", "0", "0", "s"], "60", "BST"],
        ["1950", "1952", "-", "Oct", "Sun>=21", ["2", "0", "0", "s"], "0", "GMT"],
        ["1953", "only", "-", "Apr", "Sun>=16", ["2", "0", "0", "s"], "60", "BST"],
        ["1953", "1960", "-", "Oct", "Sun>=2", ["2", "0", "0", "s"], "0", "GMT"],
        ["1954", "only", "-", "Apr", "Sun>=9", ["2", "0", "0", "s"], "60", "BST"],
        ["1955", "1956", "-", "Apr", "Sun>=16", ["2", "0", "0", "s"], "60", "BST"],
        ["1957", "only", "-", "Apr", "Sun>=9", ["2", "0", "0", "s"], "60", "BST"],
        ["1958", "1959", "-", "Apr", "Sun>=16", ["2", "0", "0", "s"], "60", "BST"],
        ["1960", "only", "-", "Apr", "Sun>=9", ["2", "0", "0", "s"], "60", "BST"],
        ["1961", "1963", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "60", "BST"],
        ["1961", "1968", "-", "Oct", "Sun>=23", ["2", "0", "0", "s"], "0", "GMT"],
        ["1964", "1967", "-", "Mar", "Sun>=19", ["2", "0", "0", "s"], "60", "BST"],
        ["1968", "only", "-", "Feb", "18", ["2", "0", "0", "s"], "60", "BST"],
        ["1972", "1980", "-", "Mar", "Sun>=16", ["2", "0", "0", "s"], "60", "BST"],
        ["1972", "1980", "-", "Oct", "Sun>=23", ["2", "0", "0", "s"], "0", "GMT"],
        ["1981", "1995", "-", "Mar", "lastSun", ["1", "0", "0", "u"], "60", "BST"],
        ["1981", "1989", "-", "Oct", "Sun>=23", ["1", "0", "0", "u"], "0", "GMT"],
        ["1990", "1995", "-", "Oct", "Sun>=22", ["1", "0", "0", "u"], "0", "GMT"]
    ],
    "EU": [
        ["1977", "1980", "-", "Apr", "Sun>=1", ["1", "0", "0", "u"], "60", "S"],
        ["1977", "only", "-", "Sep", "lastSun", ["1", "0", "0", "u"], "0", "-"],
        ["1978", "only", "-", "Oct", "1", ["1", "0", "0", "u"], "0", "-"],
        ["1979", "1995", "-", "Sep", "lastSun", ["1", "0", "0", "u"], "0", "-"],
        ["1981", "max", "-", "Mar", "lastSun", ["1", "0", "0", "u"], "60", "S"],
        ["1996", "max", "-", "Oct", "lastSun", ["1", "0", "0", "u"], "0", "-"]
    ],
    "W-Eur": [
        ["1977", "1980", "-", "Apr", "Sun>=1", ["1", "0", "0", "s"], "60", "S"],
        ["1977", "only", "-", "Sep", "lastSun", ["1", "0", "0", "s"], "0", "-"],
        ["1978", "only", "-", "Oct", "1", ["1", "0", "0", "s"], "0", "-"],
        ["1979", "1995", "-", "Sep", "lastSun", ["1", "0", "0", "s"], "0", "-"],
        ["1981", "max", "-", "Mar", "lastSun", ["1", "0", "0", "s"], "60", "S"],
        ["1996", "max", "-", "Oct", "lastSun", ["1", "0", "0", "s"], "0", "-"]
    ],
    "C-Eur": [
        ["1916", "only", "-", "Apr", "30", ["23", "0", "0"], "60", "S"],
        ["1916", "only", "-", "Oct", "1", ["1", "0", "0"], "0", "-"],
        ["1917", "1918", "-", "Apr", "Mon>=15", ["2", "0", "0", "s"], "60", "S"],
        ["1917", "1918", "-", "Sep", "Mon>=15", ["2", "0", "0", "s"], "0", "-"],
        ["1940", "only", "-", "Apr", "1", ["2", "0", "0", "s"], "60", "S"],
        ["1942", "only", "-", "Nov", "2", ["2", "0", "0", "s"], "0", "-"],
        ["1943", "only", "-", "Mar", "29", ["2", "0", "0", "s"], "60", "S"],
        ["1943", "only", "-", "Oct", "4", ["2", "0", "0", "s"], "0", "-"],
        ["1944", "1945", "-", "Apr", "Mon>=1", ["2", "0", "0", "s"], "60", "S"],
        ["1944", "only", "-", "Oct", "2", ["2", "0", "0", "s"], "0", "-"],
        ["1945", "only", "-", "Sep", "16", ["2", "0", "0", "s"], "0", "-"],
        ["1977", "1980", "-", "Apr", "Sun>=1", ["2", "0", "0", "s"], "60", "S"],
        ["1977", "only", "-", "Sep", "lastSun", ["2", "0", "0", "s"], "0", "-"],
        ["1978", "only", "-", "Oct", "1", ["2", "0", "0", "s"], "0", "-"],
        ["1979", "1995", "-", "Sep", "lastSun", ["2", "0", "0", "s"], "0", "-"],
        ["1981", "max", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "60", "S"],
        ["1996", "max", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "0", "-"]
    ],
    "E-Eur": [
        ["1977", "1980", "-", "Apr", "Sun>=1", ["0", "0", "0"], "60", "S"],
        ["1977", "only", "-", "Sep", "lastSun", ["0", "0", "0"], "0", "-"],
        ["1978", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1979", "1995", "-", "Sep", "lastSun", ["0", "0", "0"], "0", "-"],
        ["1981", "max", "-", "Mar", "lastSun", ["0", "0", "0"], "60", "S"],
        ["1996", "max", "-", "Oct", "lastSun", ["0", "0", "0"], "0", "-"]
    ],
    "Russia": [
        ["1917", "only", "-", "Jul", "1", ["23", "0", "0"], "60", "MST", ""],
        ["1917", "only", "-", "Dec", "28", ["0", "0", "0"], "0", "MMT", ""],
        ["1918", "only", "-", "May", "31", ["22", "0", "0"], "120", "MDST", ""],
        ["1918", "only", "-", "Sep", "16", ["1", "0", "0"], "60", "MST"],
        ["1919", "only", "-", "May", "31", ["23", "0", "0"], "120", "MDST"],
        ["1919", "only", "-", "Jul", "1", ["2", "0", "0"], "60", "MSD"],
        ["1919", "only", "-", "Aug", "16", ["0", "0", "0"], "0", "MSK"],
        ["1921", "only", "-", "Feb", "14", ["23", "0", "0"], "60", "MSD"],
        ["1921", "only", "-", "Mar", "20", ["23", "0", "0"], "120", "MSM", ""],
        ["1921", "only", "-", "Sep", "1", ["0", "0", "0"], "60", "MSD"],
        ["1921", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1981", "1984", "-", "Apr", "1", ["0", "0", "0"], "60", "S"],
        ["1981", "1983", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1984", "1991", "-", "Sep", "lastSun", ["2", "0", "0", "s"], "0", "-"],
        ["1985", "1991", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "60", "S"],
        ["1992", "only", "-", "Mar", "lastSat", ["23", "0", "0"], "60", "S"],
        ["1992", "only", "-", "Sep", "lastSat", ["23", "0", "0"], "0", "-"],
        ["1993", "2010", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "60", "S"],
        ["1993", "1995", "-", "Sep", "lastSun", ["2", "0", "0", "s"], "0", "-"],
        ["1996", "2010", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "0", "-"]
    ],
    "Albania": [
        ["1940", "only", "-", "Jun", "16", ["0", "0", "0"], "60", "S"],
        ["1942", "only", "-", "Nov", "2", ["3", "0", "0"], "0", "-"],
        ["1943", "only", "-", "Mar", "29", ["2", "0", "0"], "60", "S"],
        ["1943", "only", "-", "Apr", "10", ["3", "0", "0"], "0", "-"],
        ["1974", "only", "-", "May", "4", ["0", "0", "0"], "60", "S"],
        ["1974", "only", "-", "Oct", "2", ["0", "0", "0"], "0", "-"],
        ["1975", "only", "-", "May", "1", ["0", "0", "0"], "60", "S"],
        ["1975", "only", "-", "Oct", "2", ["0", "0", "0"], "0", "-"],
        ["1976", "only", "-", "May", "2", ["0", "0", "0"], "60", "S"],
        ["1976", "only", "-", "Oct", "3", ["0", "0", "0"], "0", "-"],
        ["1977", "only", "-", "May", "8", ["0", "0", "0"], "60", "S"],
        ["1977", "only", "-", "Oct", "2", ["0", "0", "0"], "0", "-"],
        ["1978", "only", "-", "May", "6", ["0", "0", "0"], "60", "S"],
        ["1978", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1979", "only", "-", "May", "5", ["0", "0", "0"], "60", "S"],
        ["1979", "only", "-", "Sep", "30", ["0", "0", "0"], "0", "-"],
        ["1980", "only", "-", "May", "3", ["0", "0", "0"], "60", "S"],
        ["1980", "only", "-", "Oct", "4", ["0", "0", "0"], "0", "-"],
        ["1981", "only", "-", "Apr", "26", ["0", "0", "0"], "60", "S"],
        ["1981", "only", "-", "Sep", "27", ["0", "0", "0"], "0", "-"],
        ["1982", "only", "-", "May", "2", ["0", "0", "0"], "60", "S"],
        ["1982", "only", "-", "Oct", "3", ["0", "0", "0"], "0", "-"],
        ["1983", "only", "-", "Apr", "18", ["0", "0", "0"], "60", "S"],
        ["1983", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1984", "only", "-", "Apr", "1", ["0", "0", "0"], "60", "S"]
    ],
    "Austria": [
        ["1920", "only", "-", "Apr", "5", ["2", "0", "0", "s"], "60", "S"],
        ["1920", "only", "-", "Sep", "13", ["2", "0", "0", "s"], "0", "-"],
        ["1946", "only", "-", "Apr", "14", ["2", "0", "0", "s"], "60", "S"],
        ["1946", "1948", "-", "Oct", "Sun>=1", ["2", "0", "0", "s"], "0", "-"],
        ["1947", "only", "-", "Apr", "6", ["2", "0", "0", "s"], "60", "S"],
        ["1948", "only", "-", "Apr", "18", ["2", "0", "0", "s"], "60", "S"],
        ["1980", "only", "-", "Apr", "6", ["0", "0", "0"], "60", "S"],
        ["1980", "only", "-", "Sep", "28", ["0", "0", "0"], "0", "-"]
    ],
    "Belgium": [
        ["1918", "only", "-", "Mar", "9", ["0", "0", "0", "s"], "60", "S"],
        ["1918", "1919", "-", "Oct", "Sat>=1", ["23", "0", "0", "s"], "0", "-"],
        ["1919", "only", "-", "Mar", "1", ["23", "0", "0", "s"], "60", "S"],
        ["1920", "only", "-", "Feb", "14", ["23", "0", "0", "s"], "60", "S"],
        ["1920", "only", "-", "Oct", "23", ["23", "0", "0", "s"], "0", "-"],
        ["1921", "only", "-", "Mar", "14", ["23", "0", "0", "s"], "60", "S"],
        ["1921", "only", "-", "Oct", "25", ["23", "0", "0", "s"], "0", "-"],
        ["1922", "only", "-", "Mar", "25", ["23", "0", "0", "s"], "60", "S"],
        ["1922", "1927", "-", "Oct", "Sat>=1", ["23", "0", "0", "s"], "0", "-"],
        ["1923", "only", "-", "Apr", "21", ["23", "0", "0", "s"], "60", "S"],
        ["1924", "only", "-", "Mar", "29", ["23", "0", "0", "s"], "60", "S"],
        ["1925", "only", "-", "Apr", "4", ["23", "0", "0", "s"], "60", "S"],
        ["1926", "only", "-", "Apr", "17", ["23", "0", "0", "s"], "60", "S"],
        ["1927", "only", "-", "Apr", "9", ["23", "0", "0", "s"], "60", "S"],
        ["1928", "only", "-", "Apr", "14", ["23", "0", "0", "s"], "60", "S"],
        ["1928", "1938", "-", "Oct", "Sun>=2", ["2", "0", "0", "s"], "0", "-"],
        ["1929", "only", "-", "Apr", "21", ["2", "0", "0", "s"], "60", "S"],
        ["1930", "only", "-", "Apr", "13", ["2", "0", "0", "s"], "60", "S"],
        ["1931", "only", "-", "Apr", "19", ["2", "0", "0", "s"], "60", "S"],
        ["1932", "only", "-", "Apr", "3", ["2", "0", "0", "s"], "60", "S"],
        ["1933", "only", "-", "Mar", "26", ["2", "0", "0", "s"], "60", "S"],
        ["1934", "only", "-", "Apr", "8", ["2", "0", "0", "s"], "60", "S"],
        ["1935", "only", "-", "Mar", "31", ["2", "0", "0", "s"], "60", "S"],
        ["1936", "only", "-", "Apr", "19", ["2", "0", "0", "s"], "60", "S"],
        ["1937", "only", "-", "Apr", "4", ["2", "0", "0", "s"], "60", "S"],
        ["1938", "only", "-", "Mar", "27", ["2", "0", "0", "s"], "60", "S"],
        ["1939", "only", "-", "Apr", "16", ["2", "0", "0", "s"], "60", "S"],
        ["1939", "only", "-", "Nov", "19", ["2", "0", "0", "s"], "0", "-"],
        ["1940", "only", "-", "Feb", "25", ["2", "0", "0", "s"], "60", "S"],
        ["1944", "only", "-", "Sep", "17", ["2", "0", "0", "s"], "0", "-"],
        ["1945", "only", "-", "Apr", "2", ["2", "0", "0", "s"], "60", "S"],
        ["1945", "only", "-", "Sep", "16", ["2", "0", "0", "s"], "0", "-"],
        ["1946", "only", "-", "May", "19", ["2", "0", "0", "s"], "60", "S"],
        ["1946", "only", "-", "Oct", "7", ["2", "0", "0", "s"], "0", "-"]
    ],
    "Bulg": [
        ["1979", "only", "-", "Mar", "31", ["23", "0", "0"], "60", "S"],
        ["1979", "only", "-", "Oct", "1", ["1", "0", "0"], "0", "-"],
        ["1980", "1982", "-", "Apr", "Sat>=1", ["23", "0", "0"], "60", "S"],
        ["1980", "only", "-", "Sep", "29", ["1", "0", "0"], "0", "-"],
        ["1981", "only", "-", "Sep", "27", ["2", "0", "0"], "0", "-"]
    ],
    "Czech": [
        ["1945", "only", "-", "Apr", "8", ["2", "0", "0", "s"], "60", "S"],
        ["1945", "only", "-", "Nov", "18", ["2", "0", "0", "s"], "0", "-"],
        ["1946", "only", "-", "May", "6", ["2", "0", "0", "s"], "60", "S"],
        ["1946", "1949", "-", "Oct", "Sun>=1", ["2", "0", "0", "s"], "0", "-"],
        ["1947", "only", "-", "Apr", "20", ["2", "0", "0", "s"], "60", "S"],
        ["1948", "only", "-", "Apr", "18", ["2", "0", "0", "s"], "60", "S"],
        ["1949", "only", "-", "Apr", "9", ["2", "0", "0", "s"], "60", "S"]
    ],
    "Denmark": [
        ["1916", "only", "-", "May", "14", ["23", "0", "0"], "60", "S"],
        ["1916", "only", "-", "Sep", "30", ["23", "0", "0"], "0", "-"],
        ["1940", "only", "-", "May", "15", ["0", "0", "0"], "60", "S"],
        ["1945", "only", "-", "Apr", "2", ["2", "0", "0", "s"], "60", "S"],
        ["1945", "only", "-", "Aug", "15", ["2", "0", "0", "s"], "0", "-"],
        ["1946", "only", "-", "May", "1", ["2", "0", "0", "s"], "60", "S"],
        ["1946", "only", "-", "Sep", "1", ["2", "0", "0", "s"], "0", "-"],
        ["1947", "only", "-", "May", "4", ["2", "0", "0", "s"], "60", "S"],
        ["1947", "only", "-", "Aug", "10", ["2", "0", "0", "s"], "0", "-"],
        ["1948", "only", "-", "May", "9", ["2", "0", "0", "s"], "60", "S"],
        ["1948", "only", "-", "Aug", "8", ["2", "0", "0", "s"], "0", "-"]
    ],
    "Thule": [
        ["1991", "1992", "-", "Mar", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1991", "1992", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1993", "2006", "-", "Apr", "Sun>=1", ["2", "0", "0"], "60", "D"],
        ["1993", "2006", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["2007", "max", "-", "Mar", "Sun>=8", ["2", "0", "0"], "60", "D"],
        ["2007", "max", "-", "Nov", "Sun>=1", ["2", "0", "0"], "0", "S"]
    ],
    "Finland": [
        ["1942", "only", "-", "Apr", "2", ["24", "0", "0"], "60", "S"],
        ["1942", "only", "-", "Oct", "4", ["1", "0", "0"], "0", "-"],
        ["1981", "1982", "-", "Mar", "lastSun", ["2", "0", "0"], "60", "S"],
        ["1981", "1982", "-", "Sep", "lastSun", ["3", "0", "0"], "0", "-"]
    ],
    "France": [
        ["1916", "only", "-", "Jun", "14", ["23", "0", "0", "s"], "60", "S"],
        ["1916", "1919", "-", "Oct", "Sun>=1", ["23", "0", "0", "s"], "0", "-"],
        ["1917", "only", "-", "Mar", "24", ["23", "0", "0", "s"], "60", "S"],
        ["1918", "only", "-", "Mar", "9", ["23", "0", "0", "s"], "60", "S"],
        ["1919", "only", "-", "Mar", "1", ["23", "0", "0", "s"], "60", "S"],
        ["1920", "only", "-", "Feb", "14", ["23", "0", "0", "s"], "60", "S"],
        ["1920", "only", "-", "Oct", "23", ["23", "0", "0", "s"], "0", "-"],
        ["1921", "only", "-", "Mar", "14", ["23", "0", "0", "s"], "60", "S"],
        ["1921", "only", "-", "Oct", "25", ["23", "0", "0", "s"], "0", "-"],
        ["1922", "only", "-", "Mar", "25", ["23", "0", "0", "s"], "60", "S"],
        ["1922", "1938", "-", "Oct", "Sat>=1", ["23", "0", "0", "s"], "0", "-"],
        ["1923", "only", "-", "May", "26", ["23", "0", "0", "s"], "60", "S"],
        ["1924", "only", "-", "Mar", "29", ["23", "0", "0", "s"], "60", "S"],
        ["1925", "only", "-", "Apr", "4", ["23", "0", "0", "s"], "60", "S"],
        ["1926", "only", "-", "Apr", "17", ["23", "0", "0", "s"], "60", "S"],
        ["1927", "only", "-", "Apr", "9", ["23", "0", "0", "s"], "60", "S"],
        ["1928", "only", "-", "Apr", "14", ["23", "0", "0", "s"], "60", "S"],
        ["1929", "only", "-", "Apr", "20", ["23", "0", "0", "s"], "60", "S"],
        ["1930", "only", "-", "Apr", "12", ["23", "0", "0", "s"], "60", "S"],
        ["1931", "only", "-", "Apr", "18", ["23", "0", "0", "s"], "60", "S"],
        ["1932", "only", "-", "Apr", "2", ["23", "0", "0", "s"], "60", "S"],
        ["1933", "only", "-", "Mar", "25", ["23", "0", "0", "s"], "60", "S"],
        ["1934", "only", "-", "Apr", "7", ["23", "0", "0", "s"], "60", "S"],
        ["1935", "only", "-", "Mar", "30", ["23", "0", "0", "s"], "60", "S"],
        ["1936", "only", "-", "Apr", "18", ["23", "0", "0", "s"], "60", "S"],
        ["1937", "only", "-", "Apr", "3", ["23", "0", "0", "s"], "60", "S"],
        ["1938", "only", "-", "Mar", "26", ["23", "0", "0", "s"], "60", "S"],
        ["1939", "only", "-", "Apr", "15", ["23", "0", "0", "s"], "60", "S"],
        ["1939", "only", "-", "Nov", "18", ["23", "0", "0", "s"], "0", "-"],
        ["1940", "only", "-", "Feb", "25", ["2", "0", "0"], "60", "S"],
        ["1941", "only", "-", "May", "5", ["0", "0", "0"], "120", "M", ""],
        ["1941", "only", "-", "Oct", "6", ["0", "0", "0"], "60", "S"],
        ["1942", "only", "-", "Mar", "9", ["0", "0", "0"], "120", "M"],
        ["1942", "only", "-", "Nov", "2", ["3", "0", "0"], "60", "S"],
        ["1943", "only", "-", "Mar", "29", ["2", "0", "0"], "120", "M"],
        ["1943", "only", "-", "Oct", "4", ["3", "0", "0"], "60", "S"],
        ["1944", "only", "-", "Apr", "3", ["2", "0", "0"], "120", "M"],
        ["1944", "only", "-", "Oct", "8", ["1", "0", "0"], "60", "S"],
        ["1945", "only", "-", "Apr", "2", ["2", "0", "0"], "120", "M"],
        ["1945", "only", "-", "Sep", "16", ["3", "0", "0"], "0", "-"],
        ["1976", "only", "-", "Mar", "28", ["1", "0", "0"], "60", "S"],
        ["1976", "only", "-", "Sep", "26", ["1", "0", "0"], "0", "-"]
    ],
    "Germany": [
        ["1946", "only", "-", "Apr", "14", ["2", "0", "0", "s"], "60", "S"],
        ["1946", "only", "-", "Oct", "7", ["2", "0", "0", "s"], "0", "-"],
        ["1947", "1949", "-", "Oct", "Sun>=1", ["2", "0", "0", "s"], "0", "-"],
        ["1947", "only", "-", "Apr", "6", ["3", "0", "0", "s"], "60", "S"],
        ["1947", "only", "-", "May", "11", ["2", "0", "0", "s"], "120", "M"],
        ["1947", "only", "-", "Jun", "29", ["3", "0", "0"], "60", "S"],
        ["1948", "only", "-", "Apr", "18", ["2", "0", "0", "s"], "60", "S"],
        ["1949", "only", "-", "Apr", "10", ["2", "0", "0", "s"], "60", "S"]
    ],
    "SovietZone": [
        ["1945", "only", "-", "May", "24", ["2", "0", "0"], "120", "M", ""],
        ["1945", "only", "-", "Sep", "24", ["3", "0", "0"], "60", "S"],
        ["1945", "only", "-", "Nov", "18", ["2", "0", "0", "s"], "0", "-"]
    ],
    "Greece": [
        ["1932", "only", "-", "Jul", "7", ["0", "0", "0"], "60", "S"],
        ["1932", "only", "-", "Sep", "1", ["0", "0", "0"], "0", "-"],
        ["1941", "only", "-", "Apr", "7", ["0", "0", "0"], "60", "S"],
        ["1942", "only", "-", "Nov", "2", ["3", "0", "0"], "0", "-"],
        ["1943", "only", "-", "Mar", "30", ["0", "0", "0"], "60", "S"],
        ["1943", "only", "-", "Oct", "4", ["0", "0", "0"], "0", "-"],
        ["1952", "only", "-", "Jul", "1", ["0", "0", "0"], "60", "S"],
        ["1952", "only", "-", "Nov", "2", ["0", "0", "0"], "0", "-"],
        ["1975", "only", "-", "Apr", "12", ["0", "0", "0", "s"], "60", "S"],
        ["1975", "only", "-", "Nov", "26", ["0", "0", "0", "s"], "0", "-"],
        ["1976", "only", "-", "Apr", "11", ["2", "0", "0", "s"], "60", "S"],
        ["1976", "only", "-", "Oct", "10", ["2", "0", "0", "s"], "0", "-"],
        ["1977", "1978", "-", "Apr", "Sun>=1", ["2", "0", "0", "s"], "60", "S"],
        ["1977", "only", "-", "Sep", "26", ["2", "0", "0", "s"], "0", "-"],
        ["1978", "only", "-", "Sep", "24", ["4", "0", "0"], "0", "-"],
        ["1979", "only", "-", "Apr", "1", ["9", "0", "0"], "60", "S"],
        ["1979", "only", "-", "Sep", "29", ["2", "0", "0"], "0", "-"],
        ["1980", "only", "-", "Apr", "1", ["0", "0", "0"], "60", "S"],
        ["1980", "only", "-", "Sep", "28", ["0", "0", "0"], "0", "-"]
    ],
    "Hungary": [
        ["1918", "only", "-", "Apr", "1", ["3", "0", "0"], "60", "S"],
        ["1918", "only", "-", "Sep", "16", ["3", "0", "0"], "0", "-"],
        ["1919", "only", "-", "Apr", "15", ["3", "0", "0"], "60", "S"],
        ["1919", "only", "-", "Nov", "24", ["3", "0", "0"], "0", "-"],
        ["1945", "only", "-", "May", "1", ["23", "0", "0"], "60", "S"],
        ["1945", "only", "-", "Nov", "1", ["0", "0", "0"], "0", "-"],
        ["1946", "only", "-", "Mar", "31", ["2", "0", "0", "s"], "60", "S"],
        ["1946", "1949", "-", "Oct", "Sun>=1", ["2", "0", "0", "s"], "0", "-"],
        ["1947", "1949", "-", "Apr", "Sun>=4", ["2", "0", "0", "s"], "60", "S"],
        ["1950", "only", "-", "Apr", "17", ["2", "0", "0", "s"], "60", "S"],
        ["1950", "only", "-", "Oct", "23", ["2", "0", "0", "s"], "0", "-"],
        ["1954", "1955", "-", "May", "23", ["0", "0", "0"], "60", "S"],
        ["1954", "1955", "-", "Oct", "3", ["0", "0", "0"], "0", "-"],
        ["1956", "only", "-", "Jun", "Sun>=1", ["0", "0", "0"], "60", "S"],
        ["1956", "only", "-", "Sep", "lastSun", ["0", "0", "0"], "0", "-"],
        ["1957", "only", "-", "Jun", "Sun>=1", ["1", "0", "0"], "60", "S"],
        ["1957", "only", "-", "Sep", "lastSun", ["3", "0", "0"], "0", "-"],
        ["1980", "only", "-", "Apr", "6", ["1", "0", "0"], "60", "S"]
    ],
    "Iceland": [
        ["1917", "1918", "-", "Feb", "19", ["23", "0", "0"], "60", "S"],
        ["1917", "only", "-", "Oct", "21", ["1", "0", "0"], "0", "-"],
        ["1918", "only", "-", "Nov", "16", ["1", "0", "0"], "0", "-"],
        ["1939", "only", "-", "Apr", "29", ["23", "0", "0"], "60", "S"],
        ["1939", "only", "-", "Nov", "29", ["2", "0", "0"], "0", "-"],
        ["1940", "only", "-", "Feb", "25", ["2", "0", "0"], "60", "S"],
        ["1940", "only", "-", "Nov", "3", ["2", "0", "0"], "0", "-"],
        ["1941", "only", "-", "Mar", "2", ["1", "0", "0", "s"], "60", "S"],
        ["1941", "only", "-", "Nov", "2", ["1", "0", "0", "s"], "0", "-"],
        ["1942", "only", "-", "Mar", "8", ["1", "0", "0", "s"], "60", "S"],
        ["1942", "only", "-", "Oct", "25", ["1", "0", "0", "s"], "0", "-"],
        ["1943", "1946", "-", "Mar", "Sun>=1", ["1", "0", "0", "s"], "60", "S"],
        ["1943", "1948", "-", "Oct", "Sun>=22", ["1", "0", "0", "s"], "0", "-"],
        ["1947", "1967", "-", "Apr", "Sun>=1", ["1", "0", "0", "s"], "60", "S"],
        ["1949", "only", "-", "Oct", "30", ["1", "0", "0", "s"], "0", "-"],
        ["1950", "1966", "-", "Oct", "Sun>=22", ["1", "0", "0", "s"], "0", "-"],
        ["1967", "only", "-", "Oct", "29", ["1", "0", "0", "s"], "0", "-"]
    ],
    "Italy": [
        ["1916", "only", "-", "Jun", "3", ["0", "0", "0", "s"], "60", "S"],
        ["1916", "only", "-", "Oct", "1", ["0", "0", "0", "s"], "0", "-"],
        ["1917", "only", "-", "Apr", "1", ["0", "0", "0", "s"], "60", "S"],
        ["1917", "only", "-", "Sep", "30", ["0", "0", "0", "s"], "0", "-"],
        ["1918", "only", "-", "Mar", "10", ["0", "0", "0", "s"], "60", "S"],
        ["1918", "1919", "-", "Oct", "Sun>=1", ["0", "0", "0", "s"], "0", "-"],
        ["1919", "only", "-", "Mar", "2", ["0", "0", "0", "s"], "60", "S"],
        ["1920", "only", "-", "Mar", "21", ["0", "0", "0", "s"], "60", "S"],
        ["1920", "only", "-", "Sep", "19", ["0", "0", "0", "s"], "0", "-"],
        ["1940", "only", "-", "Jun", "15", ["0", "0", "0", "s"], "60", "S"],
        ["1944", "only", "-", "Sep", "17", ["0", "0", "0", "s"], "0", "-"],
        ["1945", "only", "-", "Apr", "2", ["2", "0", "0"], "60", "S"],
        ["1945", "only", "-", "Sep", "15", ["0", "0", "0", "s"], "0", "-"],
        ["1946", "only", "-", "Mar", "17", ["2", "0", "0", "s"], "60", "S"],
        ["1946", "only", "-", "Oct", "6", ["2", "0", "0", "s"], "0", "-"],
        ["1947", "only", "-", "Mar", "16", ["0", "0", "0", "s"], "60", "S"],
        ["1947", "only", "-", "Oct", "5", ["0", "0", "0", "s"], "0", "-"],
        ["1948", "only", "-", "Feb", "29", ["2", "0", "0", "s"], "60", "S"],
        ["1948", "only", "-", "Oct", "3", ["2", "0", "0", "s"], "0", "-"],
        ["1966", "1968", "-", "May", "Sun>=22", ["0", "0", "0"], "60", "S"],
        ["1966", "1969", "-", "Sep", "Sun>=22", ["0", "0", "0"], "0", "-"],
        ["1969", "only", "-", "Jun", "1", ["0", "0", "0"], "60", "S"],
        ["1970", "only", "-", "May", "31", ["0", "0", "0"], "60", "S"],
        ["1970", "only", "-", "Sep", "lastSun", ["0", "0", "0"], "0", "-"],
        ["1971", "1972", "-", "May", "Sun>=22", ["0", "0", "0"], "60", "S"],
        ["1971", "only", "-", "Sep", "lastSun", ["1", "0", "0"], "0", "-"],
        ["1972", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1973", "only", "-", "Jun", "3", ["0", "0", "0"], "60", "S"],
        ["1973", "1974", "-", "Sep", "lastSun", ["0", "0", "0"], "0", "-"],
        ["1974", "only", "-", "May", "26", ["0", "0", "0"], "60", "S"],
        ["1975", "only", "-", "Jun", "1", ["0", "0", "0", "s"], "60", "S"],
        ["1975", "1977", "-", "Sep", "lastSun", ["0", "0", "0", "s"], "0", "-"],
        ["1976", "only", "-", "May", "30", ["0", "0", "0", "s"], "60", "S"],
        ["1977", "1979", "-", "May", "Sun>=22", ["0", "0", "0", "s"], "60", "S"],
        ["1978", "only", "-", "Oct", "1", ["0", "0", "0", "s"], "0", "-"],
        ["1979", "only", "-", "Sep", "30", ["0", "0", "0", "s"], "0", "-"]
    ],
    "Latvia": [
        ["1989", "1996", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "60", "S"],
        ["1989", "1996", "-", "Sep", "lastSun", ["2", "0", "0", "s"], "0", "-"]
    ],
    "Lux": [
        ["1916", "only", "-", "May", "14", ["23", "0", "0"], "60", "S"],
        ["1916", "only", "-", "Oct", "1", ["1", "0", "0"], "0", "-"],
        ["1917", "only", "-", "Apr", "28", ["23", "0", "0"], "60", "S"],
        ["1917", "only", "-", "Sep", "17", ["1", "0", "0"], "0", "-"],
        ["1918", "only", "-", "Apr", "Mon>=15", ["2", "0", "0", "s"], "60", "S"],
        ["1918", "only", "-", "Sep", "Mon>=15", ["2", "0", "0", "s"], "0", "-"],
        ["1919", "only", "-", "Mar", "1", ["23", "0", "0"], "60", "S"],
        ["1919", "only", "-", "Oct", "5", ["3", "0", "0"], "0", "-"],
        ["1920", "only", "-", "Feb", "14", ["23", "0", "0"], "60", "S"],
        ["1920", "only", "-", "Oct", "24", ["2", "0", "0"], "0", "-"],
        ["1921", "only", "-", "Mar", "14", ["23", "0", "0"], "60", "S"],
        ["1921", "only", "-", "Oct", "26", ["2", "0", "0"], "0", "-"],
        ["1922", "only", "-", "Mar", "25", ["23", "0", "0"], "60", "S"],
        ["1922", "only", "-", "Oct", "Sun>=2", ["1", "0", "0"], "0", "-"],
        ["1923", "only", "-", "Apr", "21", ["23", "0", "0"], "60", "S"],
        ["1923", "only", "-", "Oct", "Sun>=2", ["2", "0", "0"], "0", "-"],
        ["1924", "only", "-", "Mar", "29", ["23", "0", "0"], "60", "S"],
        ["1924", "1928", "-", "Oct", "Sun>=2", ["1", "0", "0"], "0", "-"],
        ["1925", "only", "-", "Apr", "5", ["23", "0", "0"], "60", "S"],
        ["1926", "only", "-", "Apr", "17", ["23", "0", "0"], "60", "S"],
        ["1927", "only", "-", "Apr", "9", ["23", "0", "0"], "60", "S"],
        ["1928", "only", "-", "Apr", "14", ["23", "0", "0"], "60", "S"],
        ["1929", "only", "-", "Apr", "20", ["23", "0", "0"], "60", "S"]
    ],
    "Malta": [
        ["1973", "only", "-", "Mar", "31", ["0", "0", "0", "s"], "60", "S"],
        ["1973", "only", "-", "Sep", "29", ["0", "0", "0", "s"], "0", "-"],
        ["1974", "only", "-", "Apr", "21", ["0", "0", "0", "s"], "60", "S"],
        ["1974", "only", "-", "Sep", "16", ["0", "0", "0", "s"], "0", "-"],
        ["1975", "1979", "-", "Apr", "Sun>=15", ["2", "0", "0"], "60", "S"],
        ["1975", "1980", "-", "Sep", "Sun>=15", ["2", "0", "0"], "0", "-"],
        ["1980", "only", "-", "Mar", "31", ["2", "0", "0"], "60", "S"]
    ],
    "Neth": [
        ["1916", "only", "-", "May", "1", ["0", "0", "0"], "60", "NST", ""],
        ["1916", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "AMT", ""],
        ["1917", "only", "-", "Apr", "16", ["2", "0", "0", "s"], "60", "NST"],
        ["1917", "only", "-", "Sep", "17", ["2", "0", "0", "s"], "0", "AMT"],
        ["1918", "1921", "-", "Apr", "Mon>=1", ["2", "0", "0", "s"], "60", "NST"],
        ["1918", "1921", "-", "Sep", "lastMon", ["2", "0", "0", "s"], "0", "AMT"],
        ["1922", "only", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "60", "NST"],
        ["1922", "1936", "-", "Oct", "Sun>=2", ["2", "0", "0", "s"], "0", "AMT"],
        ["1923", "only", "-", "Jun", "Fri>=1", ["2", "0", "0", "s"], "60", "NST"],
        ["1924", "only", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "60", "NST"],
        ["1925", "only", "-", "Jun", "Fri>=1", ["2", "0", "0", "s"], "60", "NST"],
        ["1926", "1931", "-", "May", "15", ["2", "0", "0", "s"], "60", "NST"],
        ["1932", "only", "-", "May", "22", ["2", "0", "0", "s"], "60", "NST"],
        ["1933", "1936", "-", "May", "15", ["2", "0", "0", "s"], "60", "NST"],
        ["1937", "only", "-", "May", "22", ["2", "0", "0", "s"], "60", "NST"],
        ["1937", "only", "-", "Jul", "1", ["0", "0", "0"], "60", "S"],
        ["1937", "1939", "-", "Oct", "Sun>=2", ["2", "0", "0", "s"], "0", "-"],
        ["1938", "1939", "-", "May", "15", ["2", "0", "0", "s"], "60", "S"],
        ["1945", "only", "-", "Apr", "2", ["2", "0", "0", "s"], "60", "S"],
        ["1945", "only", "-", "Sep", "16", ["2", "0", "0", "s"], "0", "-"]
    ],
    "Norway": [
        ["1916", "only", "-", "May", "22", ["1", "0", "0"], "60", "S"],
        ["1916", "only", "-", "Sep", "30", ["0", "0", "0"], "0", "-"],
        ["1945", "only", "-", "Apr", "2", ["2", "0", "0", "s"], "60", "S"],
        ["1945", "only", "-", "Oct", "1", ["2", "0", "0", "s"], "0", "-"],
        ["1959", "1964", "-", "Mar", "Sun>=15", ["2", "0", "0", "s"], "60", "S"],
        ["1959", "1965", "-", "Sep", "Sun>=15", ["2", "0", "0", "s"], "0", "-"],
        ["1965", "only", "-", "Apr", "25", ["2", "0", "0", "s"], "60", "S"]
    ],
    "Poland": [
        ["1918", "1919", "-", "Sep", "16", ["2", "0", "0", "s"], "0", "-"],
        ["1919", "only", "-", "Apr", "15", ["2", "0", "0", "s"], "60", "S"],
        ["1944", "only", "-", "Apr", "3", ["2", "0", "0", "s"], "60", "S"],
        ["1944", "only", "-", "Oct", "4", ["2", "0", "0"], "0", "-"],
        ["1945", "only", "-", "Apr", "29", ["0", "0", "0"], "60", "S"],
        ["1945", "only", "-", "Nov", "1", ["0", "0", "0"], "0", "-"],
        ["1946", "only", "-", "Apr", "14", ["0", "0", "0", "s"], "60", "S"],
        ["1946", "only", "-", "Oct", "7", ["2", "0", "0", "s"], "0", "-"],
        ["1947", "only", "-", "May", "4", ["2", "0", "0", "s"], "60", "S"],
        ["1947", "1949", "-", "Oct", "Sun>=1", ["2", "0", "0", "s"], "0", "-"],
        ["1948", "only", "-", "Apr", "18", ["2", "0", "0", "s"], "60", "S"],
        ["1949", "only", "-", "Apr", "10", ["2", "0", "0", "s"], "60", "S"],
        ["1957", "only", "-", "Jun", "2", ["1", "0", "0", "s"], "60", "S"],
        ["1957", "1958", "-", "Sep", "lastSun", ["1", "0", "0", "s"], "0", "-"],
        ["1958", "only", "-", "Mar", "30", ["1", "0", "0", "s"], "60", "S"],
        ["1959", "only", "-", "May", "31", ["1", "0", "0", "s"], "60", "S"],
        ["1959", "1961", "-", "Oct", "Sun>=1", ["1", "0", "0", "s"], "0", "-"],
        ["1960", "only", "-", "Apr", "3", ["1", "0", "0", "s"], "60", "S"],
        ["1961", "1964", "-", "May", "lastSun", ["1", "0", "0", "s"], "60", "S"],
        ["1962", "1964", "-", "Sep", "lastSun", ["1", "0", "0", "s"], "0", "-"]
    ],
    "Port": [
        ["1916", "only", "-", "Jun", "17", ["23", "0", "0"], "60", "S"],
        ["1916", "only", "-", "Nov", "1", ["1", "0", "0"], "0", "-"],
        ["1917", "only", "-", "Feb", "28", ["23", "0", "0", "s"], "60", "S"],
        ["1917", "1921", "-", "Oct", "14", ["23", "0", "0", "s"], "0", "-"],
        ["1918", "only", "-", "Mar", "1", ["23", "0", "0", "s"], "60", "S"],
        ["1919", "only", "-", "Feb", "28", ["23", "0", "0", "s"], "60", "S"],
        ["1920", "only", "-", "Feb", "29", ["23", "0", "0", "s"], "60", "S"],
        ["1921", "only", "-", "Feb", "28", ["23", "0", "0", "s"], "60", "S"],
        ["1924", "only", "-", "Apr", "16", ["23", "0", "0", "s"], "60", "S"],
        ["1924", "only", "-", "Oct", "14", ["23", "0", "0", "s"], "0", "-"],
        ["1926", "only", "-", "Apr", "17", ["23", "0", "0", "s"], "60", "S"],
        ["1926", "1929", "-", "Oct", "Sat>=1", ["23", "0", "0", "s"], "0", "-"],
        ["1927", "only", "-", "Apr", "9", ["23", "0", "0", "s"], "60", "S"],
        ["1928", "only", "-", "Apr", "14", ["23", "0", "0", "s"], "60", "S"],
        ["1929", "only", "-", "Apr", "20", ["23", "0", "0", "s"], "60", "S"],
        ["1931", "only", "-", "Apr", "18", ["23", "0", "0", "s"], "60", "S"],
        ["1931", "1932", "-", "Oct", "Sat>=1", ["23", "0", "0", "s"], "0", "-"],
        ["1932", "only", "-", "Apr", "2", ["23", "0", "0", "s"], "60", "S"],
        ["1934", "only", "-", "Apr", "7", ["23", "0", "0", "s"], "60", "S"],
        ["1934", "1938", "-", "Oct", "Sat>=1", ["23", "0", "0", "s"], "0", "-"],
        ["1935", "only", "-", "Mar", "30", ["23", "0", "0", "s"], "60", "S"],
        ["1936", "only", "-", "Apr", "18", ["23", "0", "0", "s"], "60", "S"],
        ["1937", "only", "-", "Apr", "3", ["23", "0", "0", "s"], "60", "S"],
        ["1938", "only", "-", "Mar", "26", ["23", "0", "0", "s"], "60", "S"],
        ["1939", "only", "-", "Apr", "15", ["23", "0", "0", "s"], "60", "S"],
        ["1939", "only", "-", "Nov", "18", ["23", "0", "0", "s"], "0", "-"],
        ["1940", "only", "-", "Feb", "24", ["23", "0", "0", "s"], "60", "S"],
        ["1940", "1941", "-", "Oct", "5", ["23", "0", "0", "s"], "0", "-"],
        ["1941", "only", "-", "Apr", "5", ["23", "0", "0", "s"], "60", "S"],
        ["1942", "1945", "-", "Mar", "Sat>=8", ["23", "0", "0", "s"], "60", "S"],
        ["1942", "only", "-", "Apr", "25", ["22", "0", "0", "s"], "120", "M", ""],
        ["1942", "only", "-", "Aug", "15", ["22", "0", "0", "s"], "60", "S"],
        ["1942", "1945", "-", "Oct", "Sat>=24", ["23", "0", "0", "s"], "0", "-"],
        ["1943", "only", "-", "Apr", "17", ["22", "0", "0", "s"], "120", "M"],
        ["1943", "1945", "-", "Aug", "Sat>=25", ["22", "0", "0", "s"], "60", "S"],
        ["1944", "1945", "-", "Apr", "Sat>=21", ["22", "0", "0", "s"], "120", "M"],
        ["1946", "only", "-", "Apr", "Sat>=1", ["23", "0", "0", "s"], "60", "S"],
        ["1946", "only", "-", "Oct", "Sat>=1", ["23", "0", "0", "s"], "0", "-"],
        ["1947", "1949", "-", "Apr", "Sun>=1", ["2", "0", "0", "s"], "60", "S"],
        ["1947", "1949", "-", "Oct", "Sun>=1", ["2", "0", "0", "s"], "0", "-"],
        ["1951", "1965", "-", "Apr", "Sun>=1", ["2", "0", "0", "s"], "60", "S"],
        ["1951", "1965", "-", "Oct", "Sun>=1", ["2", "0", "0", "s"], "0", "-"],
        ["1977", "only", "-", "Mar", "27", ["0", "0", "0", "s"], "60", "S"],
        ["1977", "only", "-", "Sep", "25", ["0", "0", "0", "s"], "0", "-"],
        ["1978", "1979", "-", "Apr", "Sun>=1", ["0", "0", "0", "s"], "60", "S"],
        ["1978", "only", "-", "Oct", "1", ["0", "0", "0", "s"], "0", "-"],
        ["1979", "1982", "-", "Sep", "lastSun", ["1", "0", "0", "s"], "0", "-"],
        ["1980", "only", "-", "Mar", "lastSun", ["0", "0", "0", "s"], "60", "S"],
        ["1981", "1982", "-", "Mar", "lastSun", ["1", "0", "0", "s"], "60", "S"],
        ["1983", "only", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "60", "S"]
    ],
    "Romania": [
        ["1932", "only", "-", "May", "21", ["0", "0", "0", "s"], "60", "S"],
        ["1932", "1939", "-", "Oct", "Sun>=1", ["0", "0", "0", "s"], "0", "-"],
        ["1933", "1939", "-", "Apr", "Sun>=2", ["0", "0", "0", "s"], "60", "S"],
        ["1979", "only", "-", "May", "27", ["0", "0", "0"], "60", "S"],
        ["1979", "only", "-", "Sep", "lastSun", ["0", "0", "0"], "0", "-"],
        ["1980", "only", "-", "Apr", "5", ["23", "0", "0"], "60", "S"],
        ["1980", "only", "-", "Sep", "lastSun", ["1", "0", "0"], "0", "-"],
        ["1991", "1993", "-", "Mar", "lastSun", ["0", "0", "0", "s"], "60", "S"],
        ["1991", "1993", "-", "Sep", "lastSun", ["0", "0", "0", "s"], "0", "-"]
    ],
    "Spain": [
        ["1917", "only", "-", "May", "5", ["23", "0", "0", "s"], "60", "S"],
        ["1917", "1919", "-", "Oct", "6", ["23", "0", "0", "s"], "0", "-"],
        ["1918", "only", "-", "Apr", "15", ["23", "0", "0", "s"], "60", "S"],
        ["1919", "only", "-", "Apr", "5", ["23", "0", "0", "s"], "60", "S"],
        ["1924", "only", "-", "Apr", "16", ["23", "0", "0", "s"], "60", "S"],
        ["1924", "only", "-", "Oct", "4", ["23", "0", "0", "s"], "0", "-"],
        ["1926", "only", "-", "Apr", "17", ["23", "0", "0", "s"], "60", "S"],
        ["1926", "1929", "-", "Oct", "Sat>=1", ["23", "0", "0", "s"], "0", "-"],
        ["1927", "only", "-", "Apr", "9", ["23", "0", "0", "s"], "60", "S"],
        ["1928", "only", "-", "Apr", "14", ["23", "0", "0", "s"], "60", "S"],
        ["1929", "only", "-", "Apr", "20", ["23", "0", "0", "s"], "60", "S"],
        ["1937", "only", "-", "May", "22", ["23", "0", "0", "s"], "60", "S"],
        ["1937", "1939", "-", "Oct", "Sat>=1", ["23", "0", "0", "s"], "0", "-"],
        ["1938", "only", "-", "Mar", "22", ["23", "0", "0", "s"], "60", "S"],
        ["1939", "only", "-", "Apr", "15", ["23", "0", "0", "s"], "60", "S"],
        ["1940", "only", "-", "Mar", "16", ["23", "0", "0", "s"], "60", "S"],
        ["1942", "only", "-", "May", "2", ["22", "0", "0", "s"], "120", "M", ""],
        ["1942", "only", "-", "Sep", "1", ["22", "0", "0", "s"], "60", "S"],
        ["1943", "1946", "-", "Apr", "Sat>=13", ["22", "0", "0", "s"], "120", "M"],
        ["1943", "only", "-", "Oct", "3", ["22", "0", "0", "s"], "60", "S"],
        ["1944", "only", "-", "Oct", "10", ["22", "0", "0", "s"], "60", "S"],
        ["1945", "only", "-", "Sep", "30", ["1", "0", "0"], "60", "S"],
        ["1946", "only", "-", "Sep", "30", ["0", "0", "0"], "0", "-"],
        ["1949", "only", "-", "Apr", "30", ["23", "0", "0"], "60", "S"],
        ["1949", "only", "-", "Sep", "30", ["1", "0", "0"], "0", "-"],
        ["1974", "1975", "-", "Apr", "Sat>=13", ["23", "0", "0"], "60", "S"],
        ["1974", "1975", "-", "Oct", "Sun>=1", ["1", "0", "0"], "0", "-"],
        ["1976", "only", "-", "Mar", "27", ["23", "0", "0"], "60", "S"],
        ["1976", "1977", "-", "Sep", "lastSun", ["1", "0", "0"], "0", "-"],
        ["1977", "1978", "-", "Apr", "2", ["23", "0", "0"], "60", "S"],
        ["1978", "only", "-", "Oct", "1", ["1", "0", "0"], "0", "-"]
    ],
    "SpainAfrica": [
        ["1967", "only", "-", "Jun", "3", ["12", "0", "0"], "60", "S"],
        ["1967", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1974", "only", "-", "Jun", "24", ["0", "0", "0"], "60", "S"],
        ["1974", "only", "-", "Sep", "1", ["0", "0", "0"], "0", "-"],
        ["1976", "1977", "-", "May", "1", ["0", "0", "0"], "60", "S"],
        ["1976", "only", "-", "Aug", "1", ["0", "0", "0"], "0", "-"],
        ["1977", "only", "-", "Sep", "28", ["0", "0", "0"], "0", "-"],
        ["1978", "only", "-", "Jun", "1", ["0", "0", "0"], "60", "S"],
        ["1978", "only", "-", "Aug", "4", ["0", "0", "0"], "0", "-"]
    ],
    "Swiss": [
        ["1941", "1942", "-", "May", "Mon>=1", ["1", "0", "0"], "60", "S"],
        ["1941", "1942", "-", "Oct", "Mon>=1", ["2", "0", "0"], "0", "-"]
    ],
    "Turkey": [
        ["1916", "only", "-", "May", "1", ["0", "0", "0"], "60", "S"],
        ["1916", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1920", "only", "-", "Mar", "28", ["0", "0", "0"], "60", "S"],
        ["1920", "only", "-", "Oct", "25", ["0", "0", "0"], "0", "-"],
        ["1921", "only", "-", "Apr", "3", ["0", "0", "0"], "60", "S"],
        ["1921", "only", "-", "Oct", "3", ["0", "0", "0"], "0", "-"],
        ["1922", "only", "-", "Mar", "26", ["0", "0", "0"], "60", "S"],
        ["1922", "only", "-", "Oct", "8", ["0", "0", "0"], "0", "-"],
        ["1924", "only", "-", "May", "13", ["0", "0", "0"], "60", "S"],
        ["1924", "1925", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1925", "only", "-", "May", "1", ["0", "0", "0"], "60", "S"],
        ["1940", "only", "-", "Jun", "30", ["0", "0", "0"], "60", "S"],
        ["1940", "only", "-", "Oct", "5", ["0", "0", "0"], "0", "-"],
        ["1940", "only", "-", "Dec", "1", ["0", "0", "0"], "60", "S"],
        ["1941", "only", "-", "Sep", "21", ["0", "0", "0"], "0", "-"],
        ["1942", "only", "-", "Apr", "1", ["0", "0", "0"], "60", "S"],
        ["1942", "only", "-", "Nov", "1", ["0", "0", "0"], "0", "-"],
        ["1945", "only", "-", "Apr", "2", ["0", "0", "0"], "60", "S"],
        ["1945", "only", "-", "Oct", "8", ["0", "0", "0"], "0", "-"],
        ["1946", "only", "-", "Jun", "1", ["0", "0", "0"], "60", "S"],
        ["1946", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1947", "1948", "-", "Apr", "Sun>=16", ["0", "0", "0"], "60", "S"],
        ["1947", "1950", "-", "Oct", "Sun>=2", ["0", "0", "0"], "0", "-"],
        ["1949", "only", "-", "Apr", "10", ["0", "0", "0"], "60", "S"],
        ["1950", "only", "-", "Apr", "19", ["0", "0", "0"], "60", "S"],
        ["1951", "only", "-", "Apr", "22", ["0", "0", "0"], "60", "S"],
        ["1951", "only", "-", "Oct", "8", ["0", "0", "0"], "0", "-"],
        ["1962", "only", "-", "Jul", "15", ["0", "0", "0"], "60", "S"],
        ["1962", "only", "-", "Oct", "8", ["0", "0", "0"], "0", "-"],
        ["1964", "only", "-", "May", "15", ["0", "0", "0"], "60", "S"],
        ["1964", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1970", "1972", "-", "May", "Sun>=2", ["0", "0", "0"], "60", "S"],
        ["1970", "1972", "-", "Oct", "Sun>=2", ["0", "0", "0"], "0", "-"],
        ["1973", "only", "-", "Jun", "3", ["1", "0", "0"], "60", "S"],
        ["1973", "only", "-", "Nov", "4", ["3", "0", "0"], "0", "-"],
        ["1974", "only", "-", "Mar", "31", ["2", "0", "0"], "60", "S"],
        ["1974", "only", "-", "Nov", "3", ["5", "0", "0"], "0", "-"],
        ["1975", "only", "-", "Mar", "30", ["0", "0", "0"], "60", "S"],
        ["1975", "1976", "-", "Oct", "lastSun", ["0", "0", "0"], "0", "-"],
        ["1976", "only", "-", "Jun", "1", ["0", "0", "0"], "60", "S"],
        ["1977", "1978", "-", "Apr", "Sun>=1", ["0", "0", "0"], "60", "S"],
        ["1977", "only", "-", "Oct", "16", ["0", "0", "0"], "0", "-"],
        ["1979", "1980", "-", "Apr", "Sun>=1", ["3", "0", "0"], "60", "S"],
        ["1979", "1982", "-", "Oct", "Mon>=11", ["0", "0", "0"], "0", "-"],
        ["1981", "1982", "-", "Mar", "lastSun", ["3", "0", "0"], "60", "S"],
        ["1983", "only", "-", "Jul", "31", ["0", "0", "0"], "60", "S"],
        ["1983", "only", "-", "Oct", "2", ["0", "0", "0"], "0", "-"],
        ["1985", "only", "-", "Apr", "20", ["0", "0", "0"], "60", "S"],
        ["1985", "only", "-", "Sep", "28", ["0", "0", "0"], "0", "-"],
        ["1986", "1990", "-", "Mar", "lastSun", ["2", "0", "0", "s"], "60", "S"],
        ["1986", "1990", "-", "Sep", "lastSun", ["2", "0", "0", "s"], "0", "-"],
        ["1991", "2006", "-", "Mar", "lastSun", ["1", "0", "0", "s"], "60", "S"],
        ["1991", "1995", "-", "Sep", "lastSun", ["1", "0", "0", "s"], "0", "-"],
        ["1996", "2006", "-", "Oct", "lastSun", ["1", "0", "0", "s"], "0", "-"]
    ],
    "US": [
        ["1918", "1919", "-", "Mar", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1918", "1919", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1942", "only", "-", "Feb", "9", ["2", "0", "0"], "60", "W", ""],
        ["1945", "only", "-", "Aug", "14", ["23", "0", "0", "u"], "60", "P", ""],
        ["1945", "only", "-", "Sep", "30", ["2", "0", "0"], "0", "S"],
        ["1967", "2006", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1967", "1973", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1974", "only", "-", "Jan", "6", ["2", "0", "0"], "60", "D"],
        ["1975", "only", "-", "Feb", "23", ["2", "0", "0"], "60", "D"],
        ["1976", "1986", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1987", "2006", "-", "Apr", "Sun>=1", ["2", "0", "0"], "60", "D"],
        ["2007", "max", "-", "Mar", "Sun>=8", ["2", "0", "0"], "60", "D"],
        ["2007", "max", "-", "Nov", "Sun>=1", ["2", "0", "0"], "0", "S"]
    ],
    "NYC": [
        ["1920", "only", "-", "Mar", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1920", "only", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1921", "1966", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1921", "1954", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1955", "1966", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "Chicago": [
        ["1920", "only", "-", "Jun", "13", ["2", "0", "0"], "60", "D"],
        ["1920", "1921", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1921", "only", "-", "Mar", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1922", "1966", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1922", "1954", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1955", "1966", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "Denver": [
        ["1920", "1921", "-", "Mar", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1920", "only", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1921", "only", "-", "May", "22", ["2", "0", "0"], "0", "S"],
        ["1965", "1966", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1965", "1966", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "CA": [
        ["1948", "only", "-", "Mar", "14", ["2", "0", "0"], "60", "D"],
        ["1949", "only", "-", "Jan", "1", ["2", "0", "0"], "0", "S"],
        ["1950", "1966", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1950", "1961", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1962", "1966", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "Indianapolis": [
        ["1941", "only", "-", "Jun", "22", ["2", "0", "0"], "60", "D"],
        ["1941", "1954", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1946", "1954", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"]
    ],
    "Marengo": [
        ["1951", "only", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1951", "only", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1954", "1960", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1954", "1960", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "Vincennes": [
        ["1946", "only", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1946", "only", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1953", "1954", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1953", "1959", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1955", "only", "-", "May", "1", ["0", "0", "0"], "60", "D"],
        ["1956", "1963", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1960", "only", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1961", "only", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1962", "1963", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "Perry": [
        ["1946", "only", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1946", "only", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1953", "1954", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1953", "1959", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1955", "only", "-", "May", "1", ["0", "0", "0"], "60", "D"],
        ["1956", "1963", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1960", "only", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1961", "only", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1962", "1963", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "Pike": [
        ["1955", "only", "-", "May", "1", ["0", "0", "0"], "60", "D"],
        ["1955", "1960", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1956", "1964", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1961", "1964", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "Starke": [
        ["1947", "1961", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1947", "1954", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1955", "1956", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1957", "1958", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1959", "1961", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "Pulaski": [
        ["1946", "1960", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1946", "1954", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1955", "1956", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1957", "1960", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "Louisville": [
        ["1921", "only", "-", "May", "1", ["2", "0", "0"], "60", "D"],
        ["1921", "only", "-", "Sep", "1", ["2", "0", "0"], "0", "S"],
        ["1941", "1961", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1941", "only", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1946", "only", "-", "Jun", "2", ["2", "0", "0"], "0", "S"],
        ["1950", "1955", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1956", "1960", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "Detroit": [
        ["1948", "only", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1948", "only", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1967", "only", "-", "Jun", "14", ["2", "0", "0"], "60", "D"],
        ["1967", "only", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "Menominee": [
        ["1946", "only", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1946", "only", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1966", "only", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1966", "only", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "Canada": [
        ["1918", "only", "-", "Apr", "14", ["2", "0", "0"], "60", "D"],
        ["1918", "only", "-", "Oct", "27", ["2", "0", "0"], "0", "S"],
        ["1942", "only", "-", "Feb", "9", ["2", "0", "0"], "60", "W", ""],
        ["1945", "only", "-", "Aug", "14", ["23", "0", "0", "u"], "60", "P", ""],
        ["1945", "only", "-", "Sep", "30", ["2", "0", "0"], "0", "S"],
        ["1974", "1986", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1974", "2006", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1987", "2006", "-", "Apr", "Sun>=1", ["2", "0", "0"], "60", "D"],
        ["2007", "max", "-", "Mar", "Sun>=8", ["2", "0", "0"], "60", "D"],
        ["2007", "max", "-", "Nov", "Sun>=1", ["2", "0", "0"], "0", "S"]
    ],
    "StJohns": [
        ["1917", "only", "-", "Apr", "8", ["2", "0", "0"], "60", "D"],
        ["1917", "only", "-", "Sep", "17", ["2", "0", "0"], "0", "S"],
        ["1919", "only", "-", "May", "5", ["23", "0", "0"], "60", "D"],
        ["1919", "only", "-", "Aug", "12", ["23", "0", "0"], "0", "S"],
        ["1920", "1935", "-", "May", "Sun>=1", ["23", "0", "0"], "60", "D"],
        ["1920", "1935", "-", "Oct", "lastSun", ["23", "0", "0"], "0", "S"],
        ["1936", "1941", "-", "May", "Mon>=9", ["0", "0", "0"], "60", "D"],
        ["1936", "1941", "-", "Oct", "Mon>=2", ["0", "0", "0"], "0", "S"],
        ["1946", "1950", "-", "May", "Sun>=8", ["2", "0", "0"], "60", "D"],
        ["1946", "1950", "-", "Oct", "Sun>=2", ["2", "0", "0"], "0", "S"],
        ["1951", "1986", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1951", "1959", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1960", "1986", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1987", "only", "-", "Apr", "Sun>=1", ["0", "1", "0"], "60", "D"],
        ["1987", "2006", "-", "Oct", "lastSun", ["0", "1", "0"], "0", "S"],
        ["1988", "only", "-", "Apr", "Sun>=1", ["0", "1", "0"], "120", "DD"],
        ["1989", "2006", "-", "Apr", "Sun>=1", ["0", "1", "0"], "60", "D"],
        ["2007", "2011", "-", "Mar", "Sun>=8", ["0", "1", "0"], "60", "D"],
        ["2007", "2010", "-", "Nov", "Sun>=1", ["0", "1", "0"], "0", "S"]
    ],
    "Halifax": [
        ["1916", "only", "-", "Apr", "1", ["0", "0", "0"], "60", "D"],
        ["1916", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "S"],
        ["1920", "only", "-", "May", "9", ["0", "0", "0"], "60", "D"],
        ["1920", "only", "-", "Aug", "29", ["0", "0", "0"], "0", "S"],
        ["1921", "only", "-", "May", "6", ["0", "0", "0"], "60", "D"],
        ["1921", "1922", "-", "Sep", "5", ["0", "0", "0"], "0", "S"],
        ["1922", "only", "-", "Apr", "30", ["0", "0", "0"], "60", "D"],
        ["1923", "1925", "-", "May", "Sun>=1", ["0", "0", "0"], "60", "D"],
        ["1923", "only", "-", "Sep", "4", ["0", "0", "0"], "0", "S"],
        ["1924", "only", "-", "Sep", "15", ["0", "0", "0"], "0", "S"],
        ["1925", "only", "-", "Sep", "28", ["0", "0", "0"], "0", "S"],
        ["1926", "only", "-", "May", "16", ["0", "0", "0"], "60", "D"],
        ["1926", "only", "-", "Sep", "13", ["0", "0", "0"], "0", "S"],
        ["1927", "only", "-", "May", "1", ["0", "0", "0"], "60", "D"],
        ["1927", "only", "-", "Sep", "26", ["0", "0", "0"], "0", "S"],
        ["1928", "1931", "-", "May", "Sun>=8", ["0", "0", "0"], "60", "D"],
        ["1928", "only", "-", "Sep", "9", ["0", "0", "0"], "0", "S"],
        ["1929", "only", "-", "Sep", "3", ["0", "0", "0"], "0", "S"],
        ["1930", "only", "-", "Sep", "15", ["0", "0", "0"], "0", "S"],
        ["1931", "1932", "-", "Sep", "Mon>=24", ["0", "0", "0"], "0", "S"],
        ["1932", "only", "-", "May", "1", ["0", "0", "0"], "60", "D"],
        ["1933", "only", "-", "Apr", "30", ["0", "0", "0"], "60", "D"],
        ["1933", "only", "-", "Oct", "2", ["0", "0", "0"], "0", "S"],
        ["1934", "only", "-", "May", "20", ["0", "0", "0"], "60", "D"],
        ["1934", "only", "-", "Sep", "16", ["0", "0", "0"], "0", "S"],
        ["1935", "only", "-", "Jun", "2", ["0", "0", "0"], "60", "D"],
        ["1935", "only", "-", "Sep", "30", ["0", "0", "0"], "0", "S"],
        ["1936", "only", "-", "Jun", "1", ["0", "0", "0"], "60", "D"],
        ["1936", "only", "-", "Sep", "14", ["0", "0", "0"], "0", "S"],
        ["1937", "1938", "-", "May", "Sun>=1", ["0", "0", "0"], "60", "D"],
        ["1937", "1941", "-", "Sep", "Mon>=24", ["0", "0", "0"], "0", "S"],
        ["1939", "only", "-", "May", "28", ["0", "0", "0"], "60", "D"],
        ["1940", "1941", "-", "May", "Sun>=1", ["0", "0", "0"], "60", "D"],
        ["1946", "1949", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1946", "1949", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1951", "1954", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1951", "1954", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1956", "1959", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1956", "1959", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1962", "1973", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1962", "1973", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "Moncton": [
        ["1933", "1935", "-", "Jun", "Sun>=8", ["1", "0", "0"], "60", "D"],
        ["1933", "1935", "-", "Sep", "Sun>=8", ["1", "0", "0"], "0", "S"],
        ["1936", "1938", "-", "Jun", "Sun>=1", ["1", "0", "0"], "60", "D"],
        ["1936", "1938", "-", "Sep", "Sun>=1", ["1", "0", "0"], "0", "S"],
        ["1939", "only", "-", "May", "27", ["1", "0", "0"], "60", "D"],
        ["1939", "1941", "-", "Sep", "Sat>=21", ["1", "0", "0"], "0", "S"],
        ["1940", "only", "-", "May", "19", ["1", "0", "0"], "60", "D"],
        ["1941", "only", "-", "May", "4", ["1", "0", "0"], "60", "D"],
        ["1946", "1972", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1946", "1956", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1957", "1972", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1993", "2006", "-", "Apr", "Sun>=1", ["0", "1", "0"], "60", "D"],
        ["1993", "2006", "-", "Oct", "lastSun", ["0", "1", "0"], "0", "S"]
    ],
    "Mont": [
        ["1917", "only", "-", "Mar", "25", ["2", "0", "0"], "60", "D"],
        ["1917", "only", "-", "Apr", "24", ["0", "0", "0"], "0", "S"],
        ["1919", "only", "-", "Mar", "31", ["2", "30", "0"], "60", "D"],
        ["1919", "only", "-", "Oct", "25", ["2", "30", "0"], "0", "S"],
        ["1920", "only", "-", "May", "2", ["2", "30", "0"], "60", "D"],
        ["1920", "1922", "-", "Oct", "Sun>=1", ["2", "30", "0"], "0", "S"],
        ["1921", "only", "-", "May", "1", ["2", "0", "0"], "60", "D"],
        ["1922", "only", "-", "Apr", "30", ["2", "0", "0"], "60", "D"],
        ["1924", "only", "-", "May", "17", ["2", "0", "0"], "60", "D"],
        ["1924", "1926", "-", "Sep", "lastSun", ["2", "30", "0"], "0", "S"],
        ["1925", "1926", "-", "May", "Sun>=1", ["2", "0", "0"], "60", "D"],
        ["1927", "1937", "-", "Apr", "lastSat", ["24", "0", "0"], "60", "D"],
        ["1927", "1937", "-", "Sep", "lastSat", ["24", "0", "0"], "0", "S"],
        ["1938", "1940", "-", "Apr", "lastSun", ["0", "0", "0"], "60", "D"],
        ["1938", "1939", "-", "Sep", "lastSun", ["0", "0", "0"], "0", "S"],
        ["1946", "1973", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1945", "1948", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1949", "1950", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1951", "1956", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1957", "1973", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "Toronto": [
        ["1919", "only", "-", "Mar", "30", ["23", "30", "0"], "60", "D"],
        ["1919", "only", "-", "Oct", "26", ["0", "0", "0"], "0", "S"],
        ["1920", "only", "-", "May", "2", ["2", "0", "0"], "60", "D"],
        ["1920", "only", "-", "Sep", "26", ["0", "0", "0"], "0", "S"],
        ["1921", "only", "-", "May", "15", ["2", "0", "0"], "60", "D"],
        ["1921", "only", "-", "Sep", "15", ["2", "0", "0"], "0", "S"],
        ["1922", "1923", "-", "May", "Sun>=8", ["2", "0", "0"], "60", "D"],
        ["1922", "1926", "-", "Sep", "Sun>=15", ["2", "0", "0"], "0", "S"],
        ["1924", "1927", "-", "May", "Sun>=1", ["2", "0", "0"], "60", "D"],
        ["1927", "1932", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1928", "1931", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1932", "only", "-", "May", "1", ["2", "0", "0"], "60", "D"],
        ["1933", "1940", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1933", "only", "-", "Oct", "1", ["2", "0", "0"], "0", "S"],
        ["1934", "1939", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1945", "1946", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1946", "only", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1947", "1949", "-", "Apr", "lastSun", ["0", "0", "0"], "60", "D"],
        ["1947", "1948", "-", "Sep", "lastSun", ["0", "0", "0"], "0", "S"],
        ["1949", "only", "-", "Nov", "lastSun", ["0", "0", "0"], "0", "S"],
        ["1950", "1973", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1950", "only", "-", "Nov", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1951", "1956", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1957", "1973", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "Winn": [
        ["1916", "only", "-", "Apr", "23", ["0", "0", "0"], "60", "D"],
        ["1916", "only", "-", "Sep", "17", ["0", "0", "0"], "0", "S"],
        ["1918", "only", "-", "Apr", "14", ["2", "0", "0"], "60", "D"],
        ["1918", "only", "-", "Oct", "27", ["2", "0", "0"], "0", "S"],
        ["1937", "only", "-", "May", "16", ["2", "0", "0"], "60", "D"],
        ["1937", "only", "-", "Sep", "26", ["2", "0", "0"], "0", "S"],
        ["1942", "only", "-", "Feb", "9", ["2", "0", "0"], "60", "W", ""],
        ["1945", "only", "-", "Aug", "14", ["23", "0", "0", "u"], "60", "P", ""],
        ["1945", "only", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1946", "only", "-", "May", "12", ["2", "0", "0"], "60", "D"],
        ["1946", "only", "-", "Oct", "13", ["2", "0", "0"], "0", "S"],
        ["1947", "1949", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1947", "1949", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1950", "only", "-", "May", "1", ["2", "0", "0"], "60", "D"],
        ["1950", "only", "-", "Sep", "30", ["2", "0", "0"], "0", "S"],
        ["1951", "1960", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1951", "1958", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1959", "only", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1960", "only", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1963", "only", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1963", "only", "-", "Sep", "22", ["2", "0", "0"], "0", "S"],
        ["1966", "1986", "-", "Apr", "lastSun", ["2", "0", "0", "s"], "60", "D"],
        ["1966", "2005", "-", "Oct", "lastSun", ["2", "0", "0", "s"], "0", "S"],
        ["1987", "2005", "-", "Apr", "Sun>=1", ["2", "0", "0", "s"], "60", "D"]
    ],
    "Regina": [
        ["1918", "only", "-", "Apr", "14", ["2", "0", "0"], "60", "D"],
        ["1918", "only", "-", "Oct", "27", ["2", "0", "0"], "0", "S"],
        ["1930", "1934", "-", "May", "Sun>=1", ["0", "0", "0"], "60", "D"],
        ["1930", "1934", "-", "Oct", "Sun>=1", ["0", "0", "0"], "0", "S"],
        ["1937", "1941", "-", "Apr", "Sun>=8", ["0", "0", "0"], "60", "D"],
        ["1937", "only", "-", "Oct", "Sun>=8", ["0", "0", "0"], "0", "S"],
        ["1938", "only", "-", "Oct", "Sun>=1", ["0", "0", "0"], "0", "S"],
        ["1939", "1941", "-", "Oct", "Sun>=8", ["0", "0", "0"], "0", "S"],
        ["1942", "only", "-", "Feb", "9", ["2", "0", "0"], "60", "W", ""],
        ["1945", "only", "-", "Aug", "14", ["23", "0", "0", "u"], "60", "P", ""],
        ["1945", "only", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1946", "only", "-", "Apr", "Sun>=8", ["2", "0", "0"], "60", "D"],
        ["1946", "only", "-", "Oct", "Sun>=8", ["2", "0", "0"], "0", "S"],
        ["1947", "1957", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1947", "1957", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1959", "only", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1959", "only", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "Swift": [
        ["1957", "only", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1957", "only", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1959", "1961", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1959", "only", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1960", "1961", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "Edm": [
        ["1918", "1919", "-", "Apr", "Sun>=8", ["2", "0", "0"], "60", "D"],
        ["1918", "only", "-", "Oct", "27", ["2", "0", "0"], "0", "S"],
        ["1919", "only", "-", "May", "27", ["2", "0", "0"], "0", "S"],
        ["1920", "1923", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1920", "only", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1921", "1923", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1942", "only", "-", "Feb", "9", ["2", "0", "0"], "60", "W", ""],
        ["1945", "only", "-", "Aug", "14", ["23", "0", "0", "u"], "60", "P", ""],
        ["1945", "only", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1947", "only", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1947", "only", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1967", "only", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1967", "only", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1969", "only", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1969", "only", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1972", "1986", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1972", "2006", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "Vanc": [
        ["1918", "only", "-", "Apr", "14", ["2", "0", "0"], "60", "D"],
        ["1918", "only", "-", "Oct", "27", ["2", "0", "0"], "0", "S"],
        ["1942", "only", "-", "Feb", "9", ["2", "0", "0"], "60", "W", ""],
        ["1945", "only", "-", "Aug", "14", ["23", "0", "0", "u"], "60", "P", ""],
        ["1945", "only", "-", "Sep", "30", ["2", "0", "0"], "0", "S"],
        ["1946", "1986", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1946", "only", "-", "Oct", "13", ["2", "0", "0"], "0", "S"],
        ["1947", "1961", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1962", "2006", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "NT_YK": [
        ["1918", "only", "-", "Apr", "14", ["2", "0", "0"], "60", "D"],
        ["1918", "only", "-", "Oct", "27", ["2", "0", "0"], "0", "S"],
        ["1919", "only", "-", "May", "25", ["2", "0", "0"], "60", "D"],
        ["1919", "only", "-", "Nov", "1", ["0", "0", "0"], "0", "S"],
        ["1942", "only", "-", "Feb", "9", ["2", "0", "0"], "60", "W", ""],
        ["1945", "only", "-", "Aug", "14", ["23", "0", "0", "u"], "60", "P", ""],
        ["1945", "only", "-", "Sep", "30", ["2", "0", "0"], "0", "S"],
        ["1965", "only", "-", "Apr", "lastSun", ["0", "0", "0"], "120", "DD"],
        ["1965", "only", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1980", "1986", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1980", "2006", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1987", "2006", "-", "Apr", "Sun>=1", ["2", "0", "0"], "60", "D"]
    ],
    "Mexico": [
        ["1939", "only", "-", "Feb", "5", ["0", "0", "0"], "60", "D"],
        ["1939", "only", "-", "Jun", "25", ["0", "0", "0"], "0", "S"],
        ["1940", "only", "-", "Dec", "9", ["0", "0", "0"], "60", "D"],
        ["1941", "only", "-", "Apr", "1", ["0", "0", "0"], "0", "S"],
        ["1943", "only", "-", "Dec", "16", ["0", "0", "0"], "60", "W", ""],
        ["1944", "only", "-", "May", "1", ["0", "0", "0"], "0", "S"],
        ["1950", "only", "-", "Feb", "12", ["0", "0", "0"], "60", "D"],
        ["1950", "only", "-", "Jul", "30", ["0", "0", "0"], "0", "S"],
        ["1996", "2000", "-", "Apr", "Sun>=1", ["2", "0", "0"], "60", "D"],
        ["1996", "2000", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["2001", "only", "-", "May", "Sun>=1", ["2", "0", "0"], "60", "D"],
        ["2001", "only", "-", "Sep", "lastSun", ["2", "0", "0"], "0", "S"],
        ["2002", "max", "-", "Apr", "Sun>=1", ["2", "0", "0"], "60", "D"],
        ["2002", "max", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"]
    ],
    "Bahamas": [
        ["1964", "1975", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1964", "1975", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"]
    ],
    "Barb": [
        ["1977", "only", "-", "Jun", "12", ["2", "0", "0"], "60", "D"],
        ["1977", "1978", "-", "Oct", "Sun>=1", ["2", "0", "0"], "0", "S"],
        ["1978", "1980", "-", "Apr", "Sun>=15", ["2", "0", "0"], "60", "D"],
        ["1979", "only", "-", "Sep", "30", ["2", "0", "0"], "0", "S"],
        ["1980", "only", "-", "Sep", "25", ["2", "0", "0"], "0", "S"]
    ],
    "Belize": [
        ["1918", "1942", "-", "Oct", "Sun>=2", ["0", "0", "0"], "30", "HD"],
        ["1919", "1943", "-", "Feb", "Sun>=9", ["0", "0", "0"], "0", "S"],
        ["1973", "only", "-", "Dec", "5", ["0", "0", "0"], "60", "D"],
        ["1974", "only", "-", "Feb", "9", ["0", "0", "0"], "0", "S"],
        ["1982", "only", "-", "Dec", "18", ["0", "0", "0"], "60", "D"],
        ["1983", "only", "-", "Feb", "12", ["0", "0", "0"], "0", "S"]
    ],
    "CR": [
        ["1979", "1980", "-", "Feb", "lastSun", ["0", "0", "0"], "60", "D"],
        ["1979", "1980", "-", "Jun", "Sun>=1", ["0", "0", "0"], "0", "S"],
        ["1991", "1992", "-", "Jan", "Sat>=15", ["0", "0", "0"], "60", "D"],
        ["1991", "only", "-", "Jul", "1", ["0", "0", "0"], "0", "S"],
        ["1992", "only", "-", "Mar", "15", ["0", "0", "0"], "0", "S"]
    ],
    "Cuba": [
        ["1928", "only", "-", "Jun", "10", ["0", "0", "0"], "60", "D"],
        ["1928", "only", "-", "Oct", "10", ["0", "0", "0"], "0", "S"],
        ["1940", "1942", "-", "Jun", "Sun>=1", ["0", "0", "0"], "60", "D"],
        ["1940", "1942", "-", "Sep", "Sun>=1", ["0", "0", "0"], "0", "S"],
        ["1945", "1946", "-", "Jun", "Sun>=1", ["0", "0", "0"], "60", "D"],
        ["1945", "1946", "-", "Sep", "Sun>=1", ["0", "0", "0"], "0", "S"],
        ["1965", "only", "-", "Jun", "1", ["0", "0", "0"], "60", "D"],
        ["1965", "only", "-", "Sep", "30", ["0", "0", "0"], "0", "S"],
        ["1966", "only", "-", "May", "29", ["0", "0", "0"], "60", "D"],
        ["1966", "only", "-", "Oct", "2", ["0", "0", "0"], "0", "S"],
        ["1967", "only", "-", "Apr", "8", ["0", "0", "0"], "60", "D"],
        ["1967", "1968", "-", "Sep", "Sun>=8", ["0", "0", "0"], "0", "S"],
        ["1968", "only", "-", "Apr", "14", ["0", "0", "0"], "60", "D"],
        ["1969", "1977", "-", "Apr", "lastSun", ["0", "0", "0"], "60", "D"],
        ["1969", "1971", "-", "Oct", "lastSun", ["0", "0", "0"], "0", "S"],
        ["1972", "1974", "-", "Oct", "8", ["0", "0", "0"], "0", "S"],
        ["1975", "1977", "-", "Oct", "lastSun", ["0", "0", "0"], "0", "S"],
        ["1978", "only", "-", "May", "7", ["0", "0", "0"], "60", "D"],
        ["1978", "1990", "-", "Oct", "Sun>=8", ["0", "0", "0"], "0", "S"],
        ["1979", "1980", "-", "Mar", "Sun>=15", ["0", "0", "0"], "60", "D"],
        ["1981", "1985", "-", "May", "Sun>=5", ["0", "0", "0"], "60", "D"],
        ["1986", "1989", "-", "Mar", "Sun>=14", ["0", "0", "0"], "60", "D"],
        ["1990", "1997", "-", "Apr", "Sun>=1", ["0", "0", "0"], "60", "D"],
        ["1991", "1995", "-", "Oct", "Sun>=8", ["0", "0", "0", "s"], "0", "S"],
        ["1996", "only", "-", "Oct", "6", ["0", "0", "0", "s"], "0", "S"],
        ["1997", "only", "-", "Oct", "12", ["0", "0", "0", "s"], "0", "S"],
        ["1998", "1999", "-", "Mar", "lastSun", ["0", "0", "0", "s"], "60", "D"],
        ["1998", "2003", "-", "Oct", "lastSun", ["0", "0", "0", "s"], "0", "S"],
        ["2000", "2003", "-", "Apr", "Sun>=1", ["0", "0", "0", "s"], "60", "D"],
        ["2004", "only", "-", "Mar", "lastSun", ["0", "0", "0", "s"], "60", "D"],
        ["2006", "2010", "-", "Oct", "lastSun", ["0", "0", "0", "s"], "0", "S"],
        ["2007", "only", "-", "Mar", "Sun>=8", ["0", "0", "0", "s"], "60", "D"],
        ["2008", "only", "-", "Mar", "Sun>=15", ["0", "0", "0", "s"], "60", "D"],
        ["2009", "2010", "-", "Mar", "Sun>=8", ["0", "0", "0", "s"], "60", "D"],
        ["2011", "only", "-", "Mar", "Sun>=15", ["0", "0", "0", "s"], "60", "D"],
        ["2011", "only", "-", "Nov", "13", ["0", "0", "0", "s"], "0", "S"],
        ["2012", "only", "-", "Apr", "1", ["0", "0", "0", "s"], "60", "D"],
        ["2012", "max", "-", "Nov", "Sun>=1", ["0", "0", "0", "s"], "0", "S"],
        ["2013", "max", "-", "Mar", "Sun>=8", ["0", "0", "0", "s"], "60", "D"]
    ],
    "DR": [
        ["1966", "only", "-", "Oct", "30", ["0", "0", "0"], "60", "D"],
        ["1967", "only", "-", "Feb", "28", ["0", "0", "0"], "0", "S"],
        ["1969", "1973", "-", "Oct", "lastSun", ["0", "0", "0"], "30", "HD"],
        ["1970", "only", "-", "Feb", "21", ["0", "0", "0"], "0", "S"],
        ["1971", "only", "-", "Jan", "20", ["0", "0", "0"], "0", "S"],
        ["1972", "1974", "-", "Jan", "21", ["0", "0", "0"], "0", "S"]
    ],
    "Salv": [
        ["1987", "1988", "-", "May", "Sun>=1", ["0", "0", "0"], "60", "D"],
        ["1987", "1988", "-", "Sep", "lastSun", ["0", "0", "0"], "0", "S"]
    ],
    "Guat": [
        ["1973", "only", "-", "Nov", "25", ["0", "0", "0"], "60", "D"],
        ["1974", "only", "-", "Feb", "24", ["0", "0", "0"], "0", "S"],
        ["1983", "only", "-", "May", "21", ["0", "0", "0"], "60", "D"],
        ["1983", "only", "-", "Sep", "22", ["0", "0", "0"], "0", "S"],
        ["1991", "only", "-", "Mar", "23", ["0", "0", "0"], "60", "D"],
        ["1991", "only", "-", "Sep", "7", ["0", "0", "0"], "0", "S"],
        ["2006", "only", "-", "Apr", "30", ["0", "0", "0"], "60", "D"],
        ["2006", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "S"]
    ],
    "Haiti": [
        ["1983", "only", "-", "May", "8", ["0", "0", "0"], "60", "D"],
        ["1984", "1987", "-", "Apr", "lastSun", ["0", "0", "0"], "60", "D"],
        ["1983", "1987", "-", "Oct", "lastSun", ["0", "0", "0"], "0", "S"],
        ["1988", "1997", "-", "Apr", "Sun>=1", ["1", "0", "0", "s"], "60", "D"],
        ["1988", "1997", "-", "Oct", "lastSun", ["1", "0", "0", "s"], "0", "S"],
        ["2005", "2006", "-", "Apr", "Sun>=1", ["0", "0", "0"], "60", "D"],
        ["2005", "2006", "-", "Oct", "lastSun", ["0", "0", "0"], "0", "S"],
        ["2012", "max", "-", "Mar", "Sun>=8", ["2", "0", "0"], "60", "D"],
        ["2012", "max", "-", "Nov", "Sun>=1", ["2", "0", "0"], "0", "S"]
    ],
    "Hond": [
        ["1987", "1988", "-", "May", "Sun>=1", ["0", "0", "0"], "60", "D"],
        ["1987", "1988", "-", "Sep", "lastSun", ["0", "0", "0"], "0", "S"],
        ["2006", "only", "-", "May", "Sun>=1", ["0", "0", "0"], "60", "D"],
        ["2006", "only", "-", "Aug", "Mon>=1", ["0", "0", "0"], "0", "S"]
    ],
    "Nic": [
        ["1979", "1980", "-", "Mar", "Sun>=16", ["0", "0", "0"], "60", "D"],
        ["1979", "1980", "-", "Jun", "Mon>=23", ["0", "0", "0"], "0", "S"],
        ["2005", "only", "-", "Apr", "10", ["0", "0", "0"], "60", "D"],
        ["2005", "only", "-", "Oct", "Sun>=1", ["0", "0", "0"], "0", "S"],
        ["2006", "only", "-", "Apr", "30", ["2", "0", "0"], "60", "D"],
        ["2006", "only", "-", "Oct", "Sun>=1", ["1", "0", "0"], "0", "S"]
    ],
    "Arg": [
        ["1930", "only", "-", "Dec", "1", ["0", "0", "0"], "60", "S"],
        ["1931", "only", "-", "Apr", "1", ["0", "0", "0"], "0", "-"],
        ["1931", "only", "-", "Oct", "15", ["0", "0", "0"], "60", "S"],
        ["1932", "1940", "-", "Mar", "1", ["0", "0", "0"], "0", "-"],
        ["1932", "1939", "-", "Nov", "1", ["0", "0", "0"], "60", "S"],
        ["1940", "only", "-", "Jul", "1", ["0", "0", "0"], "60", "S"],
        ["1941", "only", "-", "Jun", "15", ["0", "0", "0"], "0", "-"],
        ["1941", "only", "-", "Oct", "15", ["0", "0", "0"], "60", "S"],
        ["1943", "only", "-", "Aug", "1", ["0", "0", "0"], "0", "-"],
        ["1943", "only", "-", "Oct", "15", ["0", "0", "0"], "60", "S"],
        ["1946", "only", "-", "Mar", "1", ["0", "0", "0"], "0", "-"],
        ["1946", "only", "-", "Oct", "1", ["0", "0", "0"], "60", "S"],
        ["1963", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1963", "only", "-", "Dec", "15", ["0", "0", "0"], "60", "S"],
        ["1964", "1966", "-", "Mar", "1", ["0", "0", "0"], "0", "-"],
        ["1964", "1966", "-", "Oct", "15", ["0", "0", "0"], "60", "S"],
        ["1967", "only", "-", "Apr", "2", ["0", "0", "0"], "0", "-"],
        ["1967", "1968", "-", "Oct", "Sun>=1", ["0", "0", "0"], "60", "S"],
        ["1968", "1969", "-", "Apr", "Sun>=1", ["0", "0", "0"], "0", "-"],
        ["1974", "only", "-", "Jan", "23", ["0", "0", "0"], "60", "S"],
        ["1974", "only", "-", "May", "1", ["0", "0", "0"], "0", "-"],
        ["1988", "only", "-", "Dec", "1", ["0", "0", "0"], "60", "S"],
        ["1989", "1993", "-", "Mar", "Sun>=1", ["0", "0", "0"], "0", "-"],
        ["1989", "1992", "-", "Oct", "Sun>=15", ["0", "0", "0"], "60", "S"],
        ["1999", "only", "-", "Oct", "Sun>=1", ["0", "0", "0"], "60", "S"],
        ["2000", "only", "-", "Mar", "3", ["0", "0", "0"], "0", "-"],
        ["2007", "only", "-", "Dec", "30", ["0", "0", "0"], "60", "S"],
        ["2008", "2009", "-", "Mar", "Sun>=15", ["0", "0", "0"], "0", "-"],
        ["2008", "only", "-", "Oct", "Sun>=15", ["0", "0", "0"], "60", "S"]
    ],
    "SanLuis": [
        ["2008", "2009", "-", "Mar", "Sun>=8", ["0", "0", "0"], "0", "-"],
        ["2007", "2008", "-", "Oct", "Sun>=8", ["0", "0", "0"], "60", "S"]
    ],
    "Brazil": [
        ["1931", "only", "-", "Oct", "3", ["11", "0", "0"], "60", "S"],
        ["1932", "1933", "-", "Apr", "1", ["0", "0", "0"], "0", "-"],
        ["1932", "only", "-", "Oct", "3", ["0", "0", "0"], "60", "S"],
        ["1949", "1952", "-", "Dec", "1", ["0", "0", "0"], "60", "S"],
        ["1950", "only", "-", "Apr", "16", ["1", "0", "0"], "0", "-"],
        ["1951", "1952", "-", "Apr", "1", ["0", "0", "0"], "0", "-"],
        ["1953", "only", "-", "Mar", "1", ["0", "0", "0"], "0", "-"],
        ["1963", "only", "-", "Dec", "9", ["0", "0", "0"], "60", "S"],
        ["1964", "only", "-", "Mar", "1", ["0", "0", "0"], "0", "-"],
        ["1965", "only", "-", "Jan", "31", ["0", "0", "0"], "60", "S"],
        ["1965", "only", "-", "Mar", "31", ["0", "0", "0"], "0", "-"],
        ["1965", "only", "-", "Dec", "1", ["0", "0", "0"], "60", "S"],
        ["1966", "1968", "-", "Mar", "1", ["0", "0", "0"], "0", "-"],
        ["1966", "1967", "-", "Nov", "1", ["0", "0", "0"], "60", "S"],
        ["1985", "only", "-", "Nov", "2", ["0", "0", "0"], "60", "S"],
        ["1986", "only", "-", "Mar", "15", ["0", "0", "0"], "0", "-"],
        ["1986", "only", "-", "Oct", "25", ["0", "0", "0"], "60", "S"],
        ["1987", "only", "-", "Feb", "14", ["0", "0", "0"], "0", "-"],
        ["1987", "only", "-", "Oct", "25", ["0", "0", "0"], "60", "S"],
        ["1988", "only", "-", "Feb", "7", ["0", "0", "0"], "0", "-"],
        ["1988", "only", "-", "Oct", "16", ["0", "0", "0"], "60", "S"],
        ["1989", "only", "-", "Jan", "29", ["0", "0", "0"], "0", "-"],
        ["1989", "only", "-", "Oct", "15", ["0", "0", "0"], "60", "S"],
        ["1990", "only", "-", "Feb", "11", ["0", "0", "0"], "0", "-"],
        ["1990", "only", "-", "Oct", "21", ["0", "0", "0"], "60", "S"],
        ["1991", "only", "-", "Feb", "17", ["0", "0", "0"], "0", "-"],
        ["1991", "only", "-", "Oct", "20", ["0", "0", "0"], "60", "S"],
        ["1992", "only", "-", "Feb", "9", ["0", "0", "0"], "0", "-"],
        ["1992", "only", "-", "Oct", "25", ["0", "0", "0"], "60", "S"],
        ["1993", "only", "-", "Jan", "31", ["0", "0", "0"], "0", "-"],
        ["1993", "1995", "-", "Oct", "Sun>=11", ["0", "0", "0"], "60", "S"],
        ["1994", "1995", "-", "Feb", "Sun>=15", ["0", "0", "0"], "0", "-"],
        ["1996", "only", "-", "Feb", "11", ["0", "0", "0"], "0", "-"],
        ["1996", "only", "-", "Oct", "6", ["0", "0", "0"], "60", "S"],
        ["1997", "only", "-", "Feb", "16", ["0", "0", "0"], "0", "-"],
        ["1997", "only", "-", "Oct", "6", ["0", "0", "0"], "60", "S"],
        ["1998", "only", "-", "Mar", "1", ["0", "0", "0"], "0", "-"],
        ["1998", "only", "-", "Oct", "11", ["0", "0", "0"], "60", "S"],
        ["1999", "only", "-", "Feb", "21", ["0", "0", "0"], "0", "-"],
        ["1999", "only", "-", "Oct", "3", ["0", "0", "0"], "60", "S"],
        ["2000", "only", "-", "Feb", "27", ["0", "0", "0"], "0", "-"],
        ["2000", "2001", "-", "Oct", "Sun>=8", ["0", "0", "0"], "60", "S"],
        ["2001", "2006", "-", "Feb", "Sun>=15", ["0", "0", "0"], "0", "-"],
        ["2002", "only", "-", "Nov", "3", ["0", "0", "0"], "60", "S"],
        ["2003", "only", "-", "Oct", "19", ["0", "0", "0"], "60", "S"],
        ["2004", "only", "-", "Nov", "2", ["0", "0", "0"], "60", "S"],
        ["2005", "only", "-", "Oct", "16", ["0", "0", "0"], "60", "S"],
        ["2006", "only", "-", "Nov", "5", ["0", "0", "0"], "60", "S"],
        ["2007", "only", "-", "Feb", "25", ["0", "0", "0"], "0", "-"],
        ["2007", "only", "-", "Oct", "Sun>=8", ["0", "0", "0"], "60", "S"],
        ["2008", "max", "-", "Oct", "Sun>=15", ["0", "0", "0"], "60", "S"],
        ["2008", "2011", "-", "Feb", "Sun>=15", ["0", "0", "0"], "0", "-"],
        ["2012", "only", "-", "Feb", "Sun>=22", ["0", "0", "0"], "0", "-"],
        ["2013", "2014", "-", "Feb", "Sun>=15", ["0", "0", "0"], "0", "-"],
        ["2015", "only", "-", "Feb", "Sun>=22", ["0", "0", "0"], "0", "-"],
        ["2016", "2022", "-", "Feb", "Sun>=15", ["0", "0", "0"], "0", "-"],
        ["2023", "only", "-", "Feb", "Sun>=22", ["0", "0", "0"], "0", "-"],
        ["2024", "2025", "-", "Feb", "Sun>=15", ["0", "0", "0"], "0", "-"],
        ["2026", "only", "-", "Feb", "Sun>=22", ["0", "0", "0"], "0", "-"],
        ["2027", "2033", "-", "Feb", "Sun>=15", ["0", "0", "0"], "0", "-"],
        ["2034", "only", "-", "Feb", "Sun>=22", ["0", "0", "0"], "0", "-"],
        ["2035", "2036", "-", "Feb", "Sun>=15", ["0", "0", "0"], "0", "-"],
        ["2037", "only", "-", "Feb", "Sun>=22", ["0", "0", "0"], "0", "-"],
        ["2038", "max", "-", "Feb", "Sun>=15", ["0", "0", "0"], "0", "-"]
    ],
    "Chile": [
        ["1927", "1932", "-", "Sep", "1", ["0", "0", "0"], "60", "S"],
        ["1928", "1932", "-", "Apr", "1", ["0", "0", "0"], "0", "-"],
        ["1942", "only", "-", "Jun", "1", ["4", "0", "0", "u"], "0", "-"],
        ["1942", "only", "-", "Aug", "1", ["5", "0", "0", "u"], "60", "S"],
        ["1946", "only", "-", "Jul", "15", ["4", "0", "0", "u"], "60", "S"],
        ["1946", "only", "-", "Sep", "1", ["3", "0", "0", "u"], "0", "-"],
        ["1947", "only", "-", "Apr", "1", ["4", "0", "0", "u"], "0", "-"],
        ["1968", "only", "-", "Nov", "3", ["4", "0", "0", "u"], "60", "S"],
        ["1969", "only", "-", "Mar", "30", ["3", "0", "0", "u"], "0", "-"],
        ["1969", "only", "-", "Nov", "23", ["4", "0", "0", "u"], "60", "S"],
        ["1970", "only", "-", "Mar", "29", ["3", "0", "0", "u"], "0", "-"],
        ["1971", "only", "-", "Mar", "14", ["3", "0", "0", "u"], "0", "-"],
        ["1970", "1972", "-", "Oct", "Sun>=9", ["4", "0", "0", "u"], "60", "S"],
        ["1972", "1986", "-", "Mar", "Sun>=9", ["3", "0", "0", "u"], "0", "-"],
        ["1973", "only", "-", "Sep", "30", ["4", "0", "0", "u"], "60", "S"],
        ["1974", "1987", "-", "Oct", "Sun>=9", ["4", "0", "0", "u"], "60", "S"],
        ["1987", "only", "-", "Apr", "12", ["3", "0", "0", "u"], "0", "-"],
        ["1988", "1989", "-", "Mar", "Sun>=9", ["3", "0", "0", "u"], "0", "-"],
        ["1988", "only", "-", "Oct", "Sun>=1", ["4", "0", "0", "u"], "60", "S"],
        ["1989", "only", "-", "Oct", "Sun>=9", ["4", "0", "0", "u"], "60", "S"],
        ["1990", "only", "-", "Mar", "18", ["3", "0", "0", "u"], "0", "-"],
        ["1990", "only", "-", "Sep", "16", ["4", "0", "0", "u"], "60", "S"],
        ["1991", "1996", "-", "Mar", "Sun>=9", ["3", "0", "0", "u"], "0", "-"],
        ["1991", "1997", "-", "Oct", "Sun>=9", ["4", "0", "0", "u"], "60", "S"],
        ["1997", "only", "-", "Mar", "30", ["3", "0", "0", "u"], "0", "-"],
        ["1998", "only", "-", "Mar", "Sun>=9", ["3", "0", "0", "u"], "0", "-"],
        ["1998", "only", "-", "Sep", "27", ["4", "0", "0", "u"], "60", "S"],
        ["1999", "only", "-", "Apr", "4", ["3", "0", "0", "u"], "0", "-"],
        ["1999", "2010", "-", "Oct", "Sun>=9", ["4", "0", "0", "u"], "60", "S"],
        ["2000", "2007", "-", "Mar", "Sun>=9", ["3", "0", "0", "u"], "0", "-"],
        ["2008", "only", "-", "Mar", "30", ["3", "0", "0", "u"], "0", "-"],
        ["2009", "only", "-", "Mar", "Sun>=9", ["3", "0", "0", "u"], "0", "-"],
        ["2010", "only", "-", "Apr", "Sun>=1", ["3", "0", "0", "u"], "0", "-"],
        ["2011", "only", "-", "May", "Sun>=2", ["3", "0", "0", "u"], "0", "-"],
        ["2011", "only", "-", "Aug", "Sun>=16", ["4", "0", "0", "u"], "60", "S"],
        ["2012", "max", "-", "Apr", "Sun>=23", ["3", "0", "0", "u"], "0", "-"],
        ["2012", "max", "-", "Sep", "Sun>=2", ["4", "0", "0", "u"], "60", "S"]
    ],
    "CO": [
        ["1992", "only", "-", "May", "3", ["0", "0", "0"], "60", "S"],
        ["1993", "only", "-", "Apr", "4", ["0", "0", "0"], "0", "-"]
    ],
    "Falk": [
        ["1937", "1938", "-", "Sep", "lastSun", ["0", "0", "0"], "60", "S"],
        ["1938", "1942", "-", "Mar", "Sun>=19", ["0", "0", "0"], "0", "-"],
        ["1939", "only", "-", "Oct", "1", ["0", "0", "0"], "60", "S"],
        ["1940", "1942", "-", "Sep", "lastSun", ["0", "0", "0"], "60", "S"],
        ["1943", "only", "-", "Jan", "1", ["0", "0", "0"], "0", "-"],
        ["1983", "only", "-", "Sep", "lastSun", ["0", "0", "0"], "60", "S"],
        ["1984", "1985", "-", "Apr", "lastSun", ["0", "0", "0"], "0", "-"],
        ["1984", "only", "-", "Sep", "16", ["0", "0", "0"], "60", "S"],
        ["1985", "2000", "-", "Sep", "Sun>=9", ["0", "0", "0"], "60", "S"],
        ["1986", "2000", "-", "Apr", "Sun>=16", ["0", "0", "0"], "0", "-"],
        ["2001", "2010", "-", "Apr", "Sun>=15", ["2", "0", "0"], "0", "-"],
        ["2001", "2010", "-", "Sep", "Sun>=1", ["2", "0", "0"], "60", "S"]
    ],
    "Para": [
        ["1975", "1988", "-", "Oct", "1", ["0", "0", "0"], "60", "S"],
        ["1975", "1978", "-", "Mar", "1", ["0", "0", "0"], "0", "-"],
        ["1979", "1991", "-", "Apr", "1", ["0", "0", "0"], "0", "-"],
        ["1989", "only", "-", "Oct", "22", ["0", "0", "0"], "60", "S"],
        ["1990", "only", "-", "Oct", "1", ["0", "0", "0"], "60", "S"],
        ["1991", "only", "-", "Oct", "6", ["0", "0", "0"], "60", "S"],
        ["1992", "only", "-", "Mar", "1", ["0", "0", "0"], "0", "-"],
        ["1992", "only", "-", "Oct", "5", ["0", "0", "0"], "60", "S"],
        ["1993", "only", "-", "Mar", "31", ["0", "0", "0"], "0", "-"],
        ["1993", "1995", "-", "Oct", "1", ["0", "0", "0"], "60", "S"],
        ["1994", "1995", "-", "Feb", "lastSun", ["0", "0", "0"], "0", "-"],
        ["1996", "only", "-", "Mar", "1", ["0", "0", "0"], "0", "-"],
        ["1996", "2001", "-", "Oct", "Sun>=1", ["0", "0", "0"], "60", "S"],
        ["1997", "only", "-", "Feb", "lastSun", ["0", "0", "0"], "0", "-"],
        ["1998", "2001", "-", "Mar", "Sun>=1", ["0", "0", "0"], "0", "-"],
        ["2002", "2004", "-", "Apr", "Sun>=1", ["0", "0", "0"], "0", "-"],
        ["2002", "2003", "-", "Sep", "Sun>=1", ["0", "0", "0"], "60", "S"],
        ["2004", "2009", "-", "Oct", "Sun>=15", ["0", "0", "0"], "60", "S"],
        ["2005", "2009", "-", "Mar", "Sun>=8", ["0", "0", "0"], "0", "-"],
        ["2010", "max", "-", "Oct", "Sun>=1", ["0", "0", "0"], "60", "S"],
        ["2010", "2012", "-", "Apr", "Sun>=8", ["0", "0", "0"], "0", "-"],
        ["2013", "max", "-", "Mar", "Sun>=22", ["0", "0", "0"], "0", "-"]
    ],
    "Peru": [
        ["1938", "only", "-", "Jan", "1", ["0", "0", "0"], "60", "S"],
        ["1938", "only", "-", "Apr", "1", ["0", "0", "0"], "0", "-"],
        ["1938", "1939", "-", "Sep", "lastSun", ["0", "0", "0"], "60", "S"],
        ["1939", "1940", "-", "Mar", "Sun>=24", ["0", "0", "0"], "0", "-"],
        ["1986", "1987", "-", "Jan", "1", ["0", "0", "0"], "60", "S"],
        ["1986", "1987", "-", "Apr", "1", ["0", "0", "0"], "0", "-"],
        ["1990", "only", "-", "Jan", "1", ["0", "0", "0"], "60", "S"],
        ["1990", "only", "-", "Apr", "1", ["0", "0", "0"], "0", "-"],
        ["1994", "only", "-", "Jan", "1", ["0", "0", "0"], "60", "S"],
        ["1994", "only", "-", "Apr", "1", ["0", "0", "0"], "0", "-"]
    ],
    "Uruguay": [
        ["1923", "only", "-", "Oct", "2", ["0", "0", "0"], "30", "HS"],
        ["1924", "1926", "-", "Apr", "1", ["0", "0", "0"], "0", "-"],
        ["1924", "1925", "-", "Oct", "1", ["0", "0", "0"], "30", "HS"],
        ["1933", "1935", "-", "Oct", "lastSun", ["0", "0", "0"], "30", "HS"],
        ["1934", "1936", "-", "Mar", "Sat>=25", ["23", "30", "0", "s"], "0", "-"],
        ["1936", "only", "-", "Nov", "1", ["0", "0", "0"], "30", "HS"],
        ["1937", "1941", "-", "Mar", "lastSun", ["0", "0", "0"], "0", "-"],
        ["1937", "1940", "-", "Oct", "lastSun", ["0", "0", "0"], "30", "HS"],
        ["1941", "only", "-", "Aug", "1", ["0", "0", "0"], "30", "HS"],
        ["1942", "only", "-", "Jan", "1", ["0", "0", "0"], "0", "-"],
        ["1942", "only", "-", "Dec", "14", ["0", "0", "0"], "60", "S"],
        ["1943", "only", "-", "Mar", "14", ["0", "0", "0"], "0", "-"],
        ["1959", "only", "-", "May", "24", ["0", "0", "0"], "60", "S"],
        ["1959", "only", "-", "Nov", "15", ["0", "0", "0"], "0", "-"],
        ["1960", "only", "-", "Jan", "17", ["0", "0", "0"], "60", "S"],
        ["1960", "only", "-", "Mar", "6", ["0", "0", "0"], "0", "-"],
        ["1965", "1967", "-", "Apr", "Sun>=1", ["0", "0", "0"], "60", "S"],
        ["1965", "only", "-", "Sep", "26", ["0", "0", "0"], "0", "-"],
        ["1966", "1967", "-", "Oct", "31", ["0", "0", "0"], "0", "-"],
        ["1968", "1970", "-", "May", "27", ["0", "0", "0"], "30", "HS"],
        ["1968", "1970", "-", "Dec", "2", ["0", "0", "0"], "0", "-"],
        ["1972", "only", "-", "Apr", "24", ["0", "0", "0"], "60", "S"],
        ["1972", "only", "-", "Aug", "15", ["0", "0", "0"], "0", "-"],
        ["1974", "only", "-", "Mar", "10", ["0", "0", "0"], "30", "HS"],
        ["1974", "only", "-", "Dec", "22", ["0", "0", "0"], "60", "S"],
        ["1976", "only", "-", "Oct", "1", ["0", "0", "0"], "0", "-"],
        ["1977", "only", "-", "Dec", "4", ["0", "0", "0"], "60", "S"],
        ["1978", "only", "-", "Apr", "1", ["0", "0", "0"], "0", "-"],
        ["1979", "only", "-", "Oct", "1", ["0", "0", "0"], "60", "S"],
        ["1980", "only", "-", "May", "1", ["0", "0", "0"], "0", "-"],
        ["1987", "only", "-", "Dec", "14", ["0", "0", "0"], "60", "S"],
        ["1988", "only", "-", "Mar", "14", ["0", "0", "0"], "0", "-"],
        ["1988", "only", "-", "Dec", "11", ["0", "0", "0"], "60", "S"],
        ["1989", "only", "-", "Mar", "12", ["0", "0", "0"], "0", "-"],
        ["1989", "only", "-", "Oct", "29", ["0", "0", "0"], "60", "S"],
        ["1990", "1992", "-", "Mar", "Sun>=1", ["0", "0", "0"], "0", "-"],
        ["1990", "1991", "-", "Oct", "Sun>=21", ["0", "0", "0"], "60", "S"],
        ["1992", "only", "-", "Oct", "18", ["0", "0", "0"], "60", "S"],
        ["1993", "only", "-", "Feb", "28", ["0", "0", "0"], "0", "-"],
        ["2004", "only", "-", "Sep", "19", ["0", "0", "0"], "60", "S"],
        ["2005", "only", "-", "Mar", "27", ["2", "0", "0"], "0", "-"],
        ["2005", "only", "-", "Oct", "9", ["2", "0", "0"], "60", "S"],
        ["2006", "only", "-", "Mar", "12", ["2", "0", "0"], "0", "-"],
        ["2006", "max", "-", "Oct", "Sun>=1", ["2", "0", "0"], "60", "S"],
        ["2007", "max", "-", "Mar", "Sun>=8", ["2", "0", "0"], "0", "-"]
    ],
    "SystemV": [
        ["NaN", "1973", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["NaN", "1973", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1974", "only", "-", "Jan", "6", ["2", "0", "0"], "60", "D"],
        ["1974", "only", "-", "Nov", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1975", "only", "-", "Feb", "23", ["2", "0", "0"], "60", "D"],
        ["1975", "only", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"],
        ["1976", "max", "-", "Apr", "lastSun", ["2", "0", "0"], "60", "D"],
        ["1976", "max", "-", "Oct", "lastSun", ["2", "0", "0"], "0", "S"]
    ]
};
exports.zones_titles = [
    { "name": "(GMT) Casablanca", "other_zone": "Morocco Standard Time" },
    { "name": "(GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London", "other_zone": "GMT Standard Time" },
    { "name": "(GMT) Monrovia, Reykjavik", "other_zone": "Greenwich Standard Time" },
    { "name": "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna", "other_zone": "W. Europe Standard Time" },
    { "name": "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague", "other_zone": "Central Europe Standard Time" },
    { "name": "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris", "other_zone": "Romance Standard Time" },
    { "name": "(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb", "other_zone": "Central European Standard Time" },
    { "name": "(GMT+01:00) West Central Africa", "other_zone": "W. Central Africa Standard Time" },
    { "name": "(GMT+02:00) Amman", "other_zone": "Jordan Standard Time" },
    { "name": "(GMT+02:00) Athens, Bucharest, Istanbul", "other_zone": "GTB Standard Time" },
    { "name": "(GMT+02:00) Beirut", "other_zone": "Middle East Standard Time" },
    { "name": "(GMT+02:00) Cairo", "other_zone": "Egypt Standard Time" },
    { "name": "(GMT+02:00) Harare, Pretoria", "other_zone": "South Africa Standard Time" },
    { "name": "(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius", "other_zone": "FLE Standard Time" },
    { "name": "(GMT+02:00) Jerusalem", "other_zone": "Israel Standard Time" },
    { "name": "(GMT+02:00) Minsk", "other_zone": "E. Europe Standard Time" },
    { "name": "(GMT+02:00) Windhoek", "other_zone": "Namibia Standard Time" },
    { "name": "(GMT+03:00) Baghdad", "other_zone": "Arabic Standard Time" },
    { "name": "(GMT+03:00) Kuwait, Riyadh", "other_zone": "Arab Standard Time" },
    { "name": "(GMT+03:00) Moscow, St. Petersburg, Volgograd", "other_zone": "Russian Standard Time" },
    { "name": "(GMT+03:00) Nairobi", "other_zone": "E. Africa Standard Time" },
    { "name": "(GMT+03:00) Tbilisi", "other_zone": "Georgian Standard Time" },
    { "name": "(GMT+03:30) Tehran", "other_zone": "Iran Standard Time" },
    { "name": "(GMT+04:00) Abu Dhabi, Muscat", "other_zone": "Arabian Standard Time" },
    { "name": "(GMT+04:00) Baku", "other_zone": "Azerbaijan Standard Time" },
    { "name": "(GMT+04:00) Port Louis", "other_zone": "Mauritius Standard Time" },
    { "name": "(GMT+04:00) Yerevan", "other_zone": "Caucasus Standard Time" },
    { "name": "(GMT+04:30) Kabul", "other_zone": "Afghanistan Standard Time" },
    { "name": "(GMT+05:00) Ekaterinburg", "other_zone": "Ekaterinburg Standard Time" },
    { "name": "(GMT+05:00) Islamabad, Karachi", "other_zone": "Pakistan Standard Time" },
    { "name": "(GMT+05:00) Tashkent", "other_zone": "West Asia Standard Time" },
    { "name": "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi", "other_zone": "India Standard Time" },
    { "name": "(GMT+05:30) Sri Jayawardenepura", "other_zone": "Sri Lanka Standard Time" },
    { "name": "(GMT+05:45) Kathmandu", "other_zone": "Nepal Standard Time" },
    { "name": "(GMT+06:00) Almaty, Novosibirsk", "other_zone": "N. Central Asia Standard Time" },
    { "name": "(GMT+06:00) Astana, Dhaka", "other_zone": "Central Asia Standard Time" },
    { "name": "(GMT+06:30) Yangon (Rangoon)", "other_zone": "Myanmar Standard Time" },
    { "name": "(GMT+07:00) Bangkok, Hanoi, Jakarta", "other_zone": "SE Asia Standard Time" },
    { "name": "(GMT+07:00) Krasnoyarsk", "other_zone": "North Asia Standard Time" },
    { "name": "(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi", "other_zone": "China Standard Time" },
    { "name": "(GMT+08:00) Irkutsk, Ulaan Bataar", "other_zone": "North Asia East Standard Time" },
    { "name": "(GMT+08:00) Kuala Lumpur, Singapore", "other_zone": "Singapore Standard Time" },
    { "name": "(GMT+08:00) Perth", "other_zone": "W. Australia Standard Time" },
    { "name": "(GMT+08:00) Taipei", "other_zone": "Taipei Standard Time" },
    { "name": "(GMT+09:00) Osaka, Sapporo, Tokyo", "other_zone": "Tokyo Standard Time" },
    { "name": "(GMT+09:00) Seoul", "other_zone": "Korea Standard Time" },
    { "name": "(GMT+09:00) Yakutsk", "other_zone": "Yakutsk Standard Time" },
    { "name": "(GMT+09:30) Adelaide", "other_zone": "Cen. Australia Standard Time" },
    { "name": "(GMT+09:30) Darwin", "other_zone": "AUS Central Standard Time" },
    { "name": "(GMT+10:00) Brisbane", "other_zone": "E. Australia Standard Time" },
    { "name": "(GMT+10:00) Canberra, Melbourne, Sydney", "other_zone": "AUS Eastern Standard Time" },
    { "name": "(GMT+10:00) Guam, Port Moresby", "other_zone": "West Pacific Standard Time" },
    { "name": "(GMT+10:00) Hobart", "other_zone": "Tasmania Standard Time" },
    { "name": "(GMT+10:00) Vladivostok", "other_zone": "Vladivostok Standard Time" },
    { "name": "(GMT+11:00) Magadan, Solomon Is., New Caledonia", "other_zone": "Central Pacific Standard Time" },
    { "name": "(GMT+12:00) Auckland, Wellington", "other_zone": "New Zealand Standard Time" },
    { "name": "(GMT+12:00) Fiji, Kamchatka, Marshall Is.", "other_zone": "Fiji Standard Time" },
    { "name": "(GMT+13:00) Nuku'alofa", "other_zone": "Tonga Standard Time" },
    { "name": "(GMT-01:00) Azores", "other_zone": "Azores Standard Time" },
    { "name": "(GMT-01:00) Cape Verde Is.", "other_zone": "Cape Verde Standard Time" },
    { "name": "(GMT-03:00) Brasilia", "other_zone": "E. South America Standard Time" },
    { "name": "(GMT-03:00) Buenos Aires", "other_zone": "Argentina Standard Time" },
    { "name": "(GMT-03:00) Georgetown", "other_zone": "SA Eastern Standard Time" },
    { "name": "(GMT-03:00) Greenland", "other_zone": "Greenland Standard Time" },
    { "name": "(GMT-03:00) Montevideo", "other_zone": "Montevideo Standard Time" },
    { "name": "(GMT-03:30) Newfoundland", "other_zone": "Newfoundland Standard Time" },
    { "name": "(GMT-04:00) Atlantic Time (Canada)", "other_zone": "Atlantic Standard Time" },
    { "name": "(GMT-04:00) La Paz", "other_zone": "SA Western Standard Time" },
    { "name": "(GMT-04:00) Manaus", "other_zone": "Central Brazilian Standard Time" },
    { "name": "(GMT-04:00) Santiago", "other_zone": "Pacific SA Standard Time" },
    { "name": "(GMT-04:30) Caracas", "other_zone": "Venezuela Standard Time" },
    { "name": "(GMT-05:00) Bogota, Lima, Quito, Rio Branco", "other_zone": "SA Pacific Standard Time" },
    { "name": "(GMT-05:00) Eastern Time (US & Canada)", "other_zone": "Eastern Standard Time" },
    { "name": "(GMT-05:00) Indiana (East)", "other_zone": "US Eastern Standard Time" },
    { "name": "(GMT-06:00) Central America", "other_zone": "Central America Standard Time" },
    { "name": "(GMT-06:00) Central Time (US & Canada)", "other_zone": "Central Standard Time" },
    { "name": "(GMT-06:00) Guadalajara, Mexico City, Monterrey", "other_zone": "Central Standard Time (Mexico)" },
    { "name": "(GMT-06:00) Saskatchewan", "other_zone": "Canada Central Standard Time" },
    { "name": "(GMT-07:00) Arizona", "other_zone": "US Mountain Standard Time" },
    { "name": "(GMT-07:00) Chihuahua, La Paz, Mazatlan", "other_zone": "Mountain Standard Time (Mexico)" },
    { "name": "(GMT-07:00) Mountain Time (US & Canada)", "other_zone": "Mountain Standard Time" },
    { "name": "(GMT-08:00) Pacific Time (US & Canada)", "other_zone": "Pacific Standard Time" },
    { "name": "(GMT-08:00) Tijuana, Baja California", "other_zone": "Pacific Standard Time (Mexico)" },
    { "name": "(GMT-09:00) Alaska", "other_zone": "Alaskan Standard Time" },
    { "name": "(GMT-10:00) Hawaii", "other_zone": "Hawaiian Standard Time" },
    { "name": "(GMT-11:00) Midway Island, Samoa", "other_zone": "Samoa Standard Time" },
    { "name": "(GMT-12:00) International Date Line West", "other_zone": "Dateline Standard Time" }
];
exports.windows_zones = [
    { "other_zone": "Dateline Standard Time", "zone": "Etc/GMT+12", "territory": "GMT+12" },
    { "other_zone": "UTC-11", "zone": "Etc/GMT+11", "territory": "GMT+11" },
    { "other_zone": "UTC-11", "zone": "Pacific/Pago_Pago", "territory": "Pago Pago" },
    { "other_zone": "UTC-11", "zone": "Pacific/Niue", "territory": "Niue" },
    { "other_zone": "UTC-11", "zone": "Pacific/Midway", "territory": "Midway" },
    { "other_zone": "Hawaiian Standard Time", "zone": "Pacific/Honolulu", "territory": "Honolulu" },
    { "other_zone": "Hawaiian Standard Time", "zone": "Pacific/Rarotonga", "territory": "Rarotonga" },
    { "other_zone": "Hawaiian Standard Time", "zone": "Pacific/Tahiti", "territory": "Tahiti" },
    { "other_zone": "Hawaiian Standard Time", "zone": "Pacific/Johnston", "territory": "Johnston" },
    { "other_zone": "Hawaiian Standard Time", "zone": "Etc/GMT+10", "territory": "GMT+10" },
    { "other_zone": "Alaskan Standard Time", "zone": "America/Anchorage", "territory": "Anchorage" },
    { "other_zone": "Alaskan Standard Time", "zone": "America/Juneau", "territory": "Juneau" },
    { "other_zone": "Alaskan Standard Time", "zone": "America/Nome", "territory": "Nome" },
    { "other_zone": "Alaskan Standard Time", "zone": "America/Sitka", "territory": "Sitka" },
    { "other_zone": "Alaskan Standard Time", "zone": "America/Yakutat", "territory": "Yakutat" },
    { "other_zone": "Pacific Standard Time (Mexico)", "zone": "America/Santa_Isabel", "territory": "Santa Isabel" },
    { "other_zone": "Pacific Standard Time", "zone": "America/Los_Angeles", "territory": "Los Angeles" },
    { "other_zone": "Pacific Standard Time", "zone": "America/Vancouver", "territory": "Vancouver" },
    { "other_zone": "Pacific Standard Time", "zone": "America/Dawson", "territory": "Dawson" },
    { "other_zone": "Pacific Standard Time", "zone": "America/Whitehorse", "territory": "Whitehorse" },
    { "other_zone": "Pacific Standard Time", "zone": "America/Tijuana", "territory": "Tijuana" },
    { "other_zone": "US Mountain Standard Time", "zone": "America/Phoenix", "territory": "Phoenix" },
    { "other_zone": "US Mountain Standard Time", "zone": "America/Dawson_Creek", "territory": "Dawson Creek" },
    { "other_zone": "US Mountain Standard Time", "zone": "America/Creston", "territory": "Creston" },
    { "other_zone": "US Mountain Standard Time", "zone": "America/Hermosillo", "territory": "Hermosillo" },
    { "other_zone": "US Mountain Standard Time", "zone": "Etc/GMT+7", "territory": "GMT+7" },
    { "other_zone": "Mountain Standard Time (Mexico)", "zone": "America/Chihuahua", "territory": "Chihuahua" },
    { "other_zone": "Mountain Standard Time (Mexico)", "zone": "America/Mazatlan", "territory": "Mazatlan" },
    { "other_zone": "Mountain Standard Time", "zone": "America/Denver", "territory": "Denver" },
    { "other_zone": "Mountain Standard Time", "zone": "America/Edmonton", "territory": "Edmonton" },
    { "other_zone": "Mountain Standard Time", "zone": "America/Cambridge_Bay", "territory": "Cambridge Bay" },
    { "other_zone": "Mountain Standard Time", "zone": "America/Inuvik", "territory": "Inuvik" },
    { "other_zone": "Mountain Standard Time", "zone": "America/Yellowknife", "territory": "Yellowknife" },
    { "other_zone": "Mountain Standard Time", "zone": "America/Ojinaga", "territory": "Ojinaga" },
    { "other_zone": "Mountain Standard Time", "zone": "America/Boise", "territory": "Boise" },
    { "other_zone": "Mountain Standard Time", "zone": "America/Shiprock", "territory": "Shiprock" },
    { "other_zone": "Central America Standard Time", "zone": "America/Guatemala", "territory": "Guatemala" },
    { "other_zone": "Central America Standard Time", "zone": "America/Belize", "territory": "Belize" },
    { "other_zone": "Central America Standard Time", "zone": "America/Costa_Rica", "territory": "Costa Rica" },
    { "other_zone": "Central America Standard Time", "zone": "Pacific/Galapagos", "territory": "Galapagos" },
    { "other_zone": "Central America Standard Time", "zone": "America/Tegucigalpa", "territory": "Tegucigalpa" },
    { "other_zone": "Central America Standard Time", "zone": "America/Managua", "territory": "Managua" },
    { "other_zone": "Central America Standard Time", "zone": "America/El_Salvador", "territory": "El Salvador" },
    { "other_zone": "Central America Standard Time", "zone": "Etc/GMT+6", "territory": "GMT+6" },
    { "other_zone": "Central Standard Time", "zone": "America/Chicago", "territory": "Chicago" },
    { "other_zone": "Central Standard Time", "zone": "America/Winnipeg", "territory": "Winnipeg" },
    { "other_zone": "Central Standard Time", "zone": "America/Rainy_River", "territory": "Rainy River" },
    { "other_zone": "Central Standard Time", "zone": "America/Rankin_Inlet", "territory": "Rankin Inlet" },
    { "other_zone": "Central Standard Time", "zone": "America/Resolute", "territory": "Resolute" },
    { "other_zone": "Central Standard Time", "zone": "America/Matamoros", "territory": "Matamoros" },
    { "other_zone": "Central Standard Time", "zone": "America/Indiana/Knox", "territory": "Indiana" },
    { "other_zone": "Central Standard Time", "zone": "America/Indiana/Tell_City", "territory": "Indiana" },
    { "other_zone": "Central Standard Time", "zone": "America/Menominee", "territory": "Menominee" },
    { "other_zone": "Central Standard Time", "zone": "America/North_Dakota/Beulah", "territory": "North Dakota" },
    { "other_zone": "Central Standard Time", "zone": "America/North_Dakota/Center", "territory": "North Dakota" },
    { "other_zone": "Central Standard Time", "zone": "America/North_Dakota/New_Salem", "territory": "North Dakota" },
    { "other_zone": "Central Standard Time (Mexico)", "zone": "America/Mexico_City", "territory": "Mexico City" },
    { "other_zone": "Central Standard Time (Mexico)", "zone": "America/Bahia_Banderas", "territory": "Bahia Banderas" },
    { "other_zone": "Central Standard Time (Mexico)", "zone": "America/Cancun", "territory": "Cancun" },
    { "other_zone": "Central Standard Time (Mexico)", "zone": "America/Merida", "territory": "Merida" },
    { "other_zone": "Central Standard Time (Mexico)", "zone": "America/Monterrey", "territory": "Monterrey" },
    { "other_zone": "Canada Central Standard Time", "zone": "America/Regina", "territory": "Regina" },
    { "other_zone": "Canada Central Standard Time", "zone": "America/Swift_Current", "territory": "Swift Current" },
    { "other_zone": "SA Pacific Standard Time", "zone": "America/Bogota", "territory": "Bogota" },
    { "other_zone": "SA Pacific Standard Time", "zone": "America/Coral_Harbour", "territory": "Coral Harbour" },
    { "other_zone": "SA Pacific Standard Time", "zone": "America/Guayaquil", "territory": "Guayaquil" },
    { "other_zone": "SA Pacific Standard Time", "zone": "America/Port-au-Prince", "territory": "Port-au-Prince" },
    { "other_zone": "SA Pacific Standard Time", "zone": "America/Jamaica", "territory": "Jamaica" },
    { "other_zone": "SA Pacific Standard Time", "zone": "America/Cayman", "territory": "Cayman" },
    { "other_zone": "SA Pacific Standard Time", "zone": "America/Panama", "territory": "Panama" },
    { "other_zone": "SA Pacific Standard Time", "zone": "America/Lima", "territory": "Lima" },
    { "other_zone": "SA Pacific Standard Time", "zone": "Etc/GMT+5", "territory": "GMT+5" },
    { "other_zone": "Eastern Standard Time", "zone": "America/New_York", "territory": "New York" },
    { "other_zone": "Eastern Standard Time", "zone": "America/Nassau", "territory": "Nassau" },
    { "other_zone": "Eastern Standard Time", "zone": "America/Toronto", "territory": "Toronto" },
    { "other_zone": "Eastern Standard Time", "zone": "America/Iqaluit", "territory": "Iqaluit" },
    { "other_zone": "Eastern Standard Time", "zone": "America/Montreal", "territory": "Montreal" },
    { "other_zone": "Eastern Standard Time", "zone": "America/Nipigon", "territory": "Nipigon" },
    { "other_zone": "Eastern Standard Time", "zone": "America/Pangnirtung", "territory": "Pangnirtung" },
    { "other_zone": "Eastern Standard Time", "zone": "America/Thunder_Bay", "territory": "Thunder Bay" },
    { "other_zone": "Eastern Standard Time", "zone": "America/Grand_Turk", "territory": "Grand Turk" },
    { "other_zone": "Eastern Standard Time", "zone": "America/Detroit", "territory": "Detroit" },
    { "other_zone": "Eastern Standard Time", "zone": "America/Indiana/Petersburg", "territory": "Indiana" },
    { "other_zone": "Eastern Standard Time", "zone": "America/Indiana/Vincennes", "territory": "Indiana" },
    { "other_zone": "Eastern Standard Time", "zone": "America/Indiana/Winamac", "territory": "Indiana" },
    { "other_zone": "Eastern Standard Time", "zone": "America/Kentucky/Monticello", "territory": "Kentucky" },
    { "other_zone": "Eastern Standard Time", "zone": "America/Louisville", "territory": "Louisville" },
    { "other_zone": "US Eastern Standard Time", "zone": "America/Indianapolis", "territory": "Indianapolis" },
    { "other_zone": "US Eastern Standard Time", "zone": "America/Indiana/Marengo", "territory": "Indiana" },
    { "other_zone": "US Eastern Standard Time", "zone": "America/Indiana/Vevay", "territory": "Indiana" },
    { "other_zone": "Venezuela Standard Time", "zone": "America/Caracas", "territory": "Caracas" },
    { "other_zone": "Paraguay Standard Time", "zone": "America/Asuncion", "territory": "Asuncion" },
    { "other_zone": "Atlantic Standard Time", "zone": "America/Halifax", "territory": "Halifax" },
    { "other_zone": "Atlantic Standard Time", "zone": "Atlantic/Bermuda", "territory": "Bermuda" },
    { "other_zone": "Atlantic Standard Time", "zone": "America/Glace_Bay", "territory": "Glace Bay" },
    { "other_zone": "Atlantic Standard Time", "zone": "America/Goose_Bay", "territory": "Goose Bay" },
    { "other_zone": "Atlantic Standard Time", "zone": "America/Moncton", "territory": "Moncton" },
    { "other_zone": "Atlantic Standard Time", "zone": "America/Thule", "territory": "Thule" },
    { "other_zone": "Central Brazilian Standard Time", "zone": "America/Cuiaba", "territory": "Cuiaba" },
    { "other_zone": "Central Brazilian Standard Time", "zone": "America/Campo_Grande", "territory": "Campo Grande" },
    { "other_zone": "SA Western Standard Time", "zone": "America/La_Paz", "territory": "La Paz" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Antigua", "territory": "Antigua" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Anguilla", "territory": "Anguilla" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Aruba", "territory": "Aruba" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Barbados", "territory": "Barbados" },
    { "other_zone": "SA Western Standard Time", "zone": "America/St_Barthelemy", "territory": "St Barthelemy" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Kralendijk", "territory": "Kralendijk" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Manaus", "territory": "Manaus" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Boa_Vista", "territory": "Boa Vista" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Eirunepe", "territory": "Eirunepe" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Porto_Velho", "territory": "Porto Velho" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Rio_Branco", "territory": "Rio Branco" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Blanc-Sablon", "territory": "Blanc-Sablon" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Curacao", "territory": "Curacao" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Dominica", "territory": "Dominica" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Santo_Domingo", "territory": "Santo Domingo" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Grenada", "territory": "Grenada" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Guadeloupe", "territory": "Guadeloupe" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Guyana", "territory": "Guyana" },
    { "other_zone": "SA Western Standard Time", "zone": "America/St_Kitts", "territory": "St Kitts" },
    { "other_zone": "SA Western Standard Time", "zone": "America/St_Lucia", "territory": "St Lucia" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Marigot", "territory": "Marigot" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Martinique", "territory": "Martinique" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Montserrat", "territory": "Montserrat" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Puerto_Rico", "territory": "Puerto Rico" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Lower_Princes", "territory": "Lower Princes" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Port_of_Spain", "territory": "Port of Spain" },
    { "other_zone": "SA Western Standard Time", "zone": "America/St_Vincent", "territory": "St Vincent" },
    { "other_zone": "SA Western Standard Time", "zone": "America/Tortola", "territory": "Tortola" },
    { "other_zone": "SA Western Standard Time", "zone": "America/St_Thomas", "territory": "St Thomas" },
    { "other_zone": "SA Western Standard Time", "zone": "Etc/GMT+4", "territory": "GMT+4" },
    { "other_zone": "Pacific SA Standard Time", "zone": "America/Santiago", "territory": "Santiago" },
    { "other_zone": "Pacific SA Standard Time", "zone": "Antarctica/Palmer", "territory": "Palmer" },
    { "other_zone": "Newfoundland Standard Time", "zone": "America/St_Johns", "territory": "St Johns" },
    { "other_zone": "E. South America Standard Time", "zone": "America/Sao_Paulo", "territory": "Sao Paulo" },
    { "other_zone": "E. South America Standard Time", "zone": "America/Araguaina", "territory": "Araguaina" },
    { "other_zone": "Argentina Standard Time", "zone": "America/Buenos_Aires", "territory": "Buenos Aires" },
    { "other_zone": "Argentina Standard Time", "zone": "America/Argentina/La_Rioja", "territory": "Argentina" },
    { "other_zone": "Argentina Standard Time", "zone": "America/Argentina/Rio_Gallegos", "territory": "Argentina" },
    { "other_zone": "Argentina Standard Time", "zone": "America/Argentina/Salta", "territory": "Argentina" },
    { "other_zone": "Argentina Standard Time", "zone": "America/Argentina/San_Juan", "territory": "Argentina" },
    { "other_zone": "Argentina Standard Time", "zone": "America/Argentina/San_Luis", "territory": "Argentina" },
    { "other_zone": "Argentina Standard Time", "zone": "America/Argentina/Tucuman", "territory": "Argentina" },
    { "other_zone": "Argentina Standard Time", "zone": "America/Argentina/Ushuaia", "territory": "Argentina" },
    { "other_zone": "Argentina Standard Time", "zone": "America/Catamarca", "territory": "Catamarca" },
    { "other_zone": "Argentina Standard Time", "zone": "America/Cordoba", "territory": "Cordoba" },
    { "other_zone": "Argentina Standard Time", "zone": "America/Jujuy", "territory": "Jujuy" },
    { "other_zone": "Argentina Standard Time", "zone": "America/Mendoza", "territory": "Mendoza" },
    { "other_zone": "SA Eastern Standard Time", "zone": "America/Cayenne", "territory": "Cayenne" },
    { "other_zone": "SA Eastern Standard Time", "zone": "Antarctica/Rothera", "territory": "Rothera" },
    { "other_zone": "SA Eastern Standard Time", "zone": "America/Fortaleza", "territory": "Fortaleza" },
    { "other_zone": "SA Eastern Standard Time", "zone": "America/Belem", "territory": "Belem" },
    { "other_zone": "SA Eastern Standard Time", "zone": "America/Maceio", "territory": "Maceio" },
    { "other_zone": "SA Eastern Standard Time", "zone": "America/Recife", "territory": "Recife" },
    { "other_zone": "SA Eastern Standard Time", "zone": "America/Santarem", "territory": "Santarem" },
    { "other_zone": "SA Eastern Standard Time", "zone": "Atlantic/Stanley", "territory": "Stanley" },
    { "other_zone": "SA Eastern Standard Time", "zone": "America/Paramaribo", "territory": "Paramaribo" },
    { "other_zone": "SA Eastern Standard Time", "zone": "Etc/GMT+3", "territory": "GMT+3" },
    { "other_zone": "Greenland Standard Time", "zone": "America/Godthab", "territory": "Godthab" },
    { "other_zone": "Montevideo Standard Time", "zone": "America/Montevideo", "territory": "Montevideo" },
    { "other_zone": "Bahia Standard Time", "zone": "America/Bahia", "territory": "Bahia" },
    { "other_zone": "UTC-02", "zone": "Etc/GMT+2", "territory": "GMT+2" },
    { "other_zone": "UTC-02", "zone": "America/Noronha", "territory": "Noronha" },
    { "other_zone": "UTC-02", "zone": "Atlantic/South_Georgia", "territory": "South Georgia" },
    { "other_zone": "Azores Standard Time", "zone": "Atlantic/Azores", "territory": "Azores" },
    { "other_zone": "Azores Standard Time", "zone": "America/Scoresbysund", "territory": "Scoresbysund" },
    { "other_zone": "Cape Verde Standard Time", "zone": "Atlantic/Cape_Verde", "territory": "Cape Verde" },
    { "other_zone": "Cape Verde Standard Time", "zone": "Etc/GMT+1", "territory": "GMT+1" },
    { "other_zone": "Morocco Standard Time", "zone": "Africa/Casablanca", "territory": "Casablanca" },
    { "other_zone": "UTC", "zone": "Etc/GMT", "territory": "GMT" },
    { "other_zone": "UTC", "zone": "America/Danmarkshavn", "territory": "Danmarkshavn" },
    { "other_zone": "GMT Standard Time", "zone": "Europe/London", "territory": "London" },
    { "other_zone": "GMT Standard Time", "zone": "Atlantic/Canary", "territory": "Canary" },
    { "other_zone": "GMT Standard Time", "zone": "Atlantic/Faeroe", "territory": "Faeroe" },
    { "other_zone": "GMT Standard Time", "zone": "Europe/Guernsey", "territory": "Guernsey" },
    { "other_zone": "GMT Standard Time", "zone": "Europe/Dublin", "territory": "Dublin" },
    { "other_zone": "GMT Standard Time", "zone": "Europe/Isle_of_Man", "territory": "Isle of Man" },
    { "other_zone": "GMT Standard Time", "zone": "Europe/Jersey", "territory": "Jersey" },
    { "other_zone": "GMT Standard Time", "zone": "Europe/Lisbon", "territory": "Lisbon" },
    { "other_zone": "GMT Standard Time", "zone": "Atlantic/Madeira", "territory": "Madeira" },
    { "other_zone": "Greenwich Standard Time", "zone": "Atlantic/Reykjavik", "territory": "Reykjavik" },
    { "other_zone": "Greenwich Standard Time", "zone": "Africa/Ouagadougou", "territory": "Ouagadougou" },
    { "other_zone": "Greenwich Standard Time", "zone": "Africa/Abidjan", "territory": "Abidjan" },
    { "other_zone": "Greenwich Standard Time", "zone": "Africa/El_Aaiun", "territory": "El Aaiun" },
    { "other_zone": "Greenwich Standard Time", "zone": "Africa/Accra", "territory": "Accra" },
    { "other_zone": "Greenwich Standard Time", "zone": "Africa/Banjul", "territory": "Banjul" },
    { "other_zone": "Greenwich Standard Time", "zone": "Africa/Conakry", "territory": "Conakry" },
    { "other_zone": "Greenwich Standard Time", "zone": "Africa/Bissau", "territory": "Bissau" },
    { "other_zone": "Greenwich Standard Time", "zone": "Africa/Monrovia", "territory": "Monrovia" },
    { "other_zone": "Greenwich Standard Time", "zone": "Africa/Bamako", "territory": "Bamako" },
    { "other_zone": "Greenwich Standard Time", "zone": "Africa/Nouakchott", "territory": "Nouakchott" },
    { "other_zone": "Greenwich Standard Time", "zone": "Atlantic/St_Helena", "territory": "St Helena" },
    { "other_zone": "Greenwich Standard Time", "zone": "Africa/Freetown", "territory": "Freetown" },
    { "other_zone": "Greenwich Standard Time", "zone": "Africa/Dakar", "territory": "Dakar" },
    { "other_zone": "Greenwich Standard Time", "zone": "Africa/Sao_Tome", "territory": "Sao Tome" },
    { "other_zone": "Greenwich Standard Time", "zone": "Africa/Lome", "territory": "Lome" },
    { "other_zone": "W. Europe Standard Time", "zone": "Europe/Berlin", "territory": "Berlin" },
    { "other_zone": "W. Europe Standard Time", "zone": "Europe/Andorra", "territory": "Andorra" },
    { "other_zone": "W. Europe Standard Time", "zone": "Europe/Vienna", "territory": "Vienna" },
    { "other_zone": "W. Europe Standard Time", "zone": "Europe/Zurich", "territory": "Zurich" },
    { "other_zone": "W. Europe Standard Time", "zone": "Europe/Busingen", "territory": "Busingen" },
    { "other_zone": "W. Europe Standard Time", "zone": "Europe/Gibraltar", "territory": "Gibraltar" },
    { "other_zone": "W. Europe Standard Time", "zone": "Europe/Rome", "territory": "Rome" },
    { "other_zone": "W. Europe Standard Time", "zone": "Europe/Vaduz", "territory": "Vaduz" },
    { "other_zone": "W. Europe Standard Time", "zone": "Europe/Luxembourg", "territory": "Luxembourg" },
    { "other_zone": "W. Europe Standard Time", "zone": "Africa/Tripoli", "territory": "Tripoli" },
    { "other_zone": "W. Europe Standard Time", "zone": "Europe/Monaco", "territory": "Monaco" },
    { "other_zone": "W. Europe Standard Time", "zone": "Europe/Malta", "territory": "Malta" },
    { "other_zone": "W. Europe Standard Time", "zone": "Europe/Amsterdam", "territory": "Amsterdam" },
    { "other_zone": "W. Europe Standard Time", "zone": "Europe/Oslo", "territory": "Oslo" },
    { "other_zone": "W. Europe Standard Time", "zone": "Europe/Stockholm", "territory": "Stockholm" },
    { "other_zone": "W. Europe Standard Time", "zone": "Arctic/Longyearbyen", "territory": "Longyearbyen" },
    { "other_zone": "W. Europe Standard Time", "zone": "Europe/San_Marino", "territory": "San Marino" },
    { "other_zone": "W. Europe Standard Time", "zone": "Europe/Vatican", "territory": "Vatican" },
    { "other_zone": "Central Europe Standard Time", "zone": "Europe/Budapest", "territory": "Budapest" },
    { "other_zone": "Central Europe Standard Time", "zone": "Europe/Tirane", "territory": "Tirane" },
    { "other_zone": "Central Europe Standard Time", "zone": "Europe/Prague", "territory": "Prague" },
    { "other_zone": "Central Europe Standard Time", "zone": "Europe/Podgorica", "territory": "Podgorica" },
    { "other_zone": "Central Europe Standard Time", "zone": "Europe/Belgrade", "territory": "Belgrade" },
    { "other_zone": "Central Europe Standard Time", "zone": "Europe/Ljubljana", "territory": "Ljubljana" },
    { "other_zone": "Central Europe Standard Time", "zone": "Europe/Bratislava", "territory": "Bratislava" },
    { "other_zone": "Romance Standard Time", "zone": "Europe/Paris", "territory": "Paris" },
    { "other_zone": "Romance Standard Time", "zone": "Europe/Brussels", "territory": "Brussels" },
    { "other_zone": "Romance Standard Time", "zone": "Europe/Copenhagen", "territory": "Copenhagen" },
    { "other_zone": "Romance Standard Time", "zone": "Europe/Madrid", "territory": "Madrid" },
    { "other_zone": "Romance Standard Time", "zone": "Africa/Ceuta", "territory": "Ceuta" },
    { "other_zone": "Central European Standard Time", "zone": "Europe/Warsaw", "territory": "Warsaw" },
    { "other_zone": "Central European Standard Time", "zone": "Europe/Sarajevo", "territory": "Sarajevo" },
    { "other_zone": "Central European Standard Time", "zone": "Europe/Zagreb", "territory": "Zagreb" },
    { "other_zone": "Central European Standard Time", "zone": "Europe/Skopje", "territory": "Skopje" },
    { "other_zone": "W. Central Africa Standard Time", "zone": "Africa/Lagos", "territory": "Lagos" },
    { "other_zone": "W. Central Africa Standard Time", "zone": "Africa/Luanda", "territory": "Luanda" },
    { "other_zone": "W. Central Africa Standard Time", "zone": "Africa/Porto-Novo", "territory": "Porto-Novo" },
    { "other_zone": "W. Central Africa Standard Time", "zone": "Africa/Kinshasa", "territory": "Kinshasa" },
    { "other_zone": "W. Central Africa Standard Time", "zone": "Africa/Bangui", "territory": "Bangui" },
    { "other_zone": "W. Central Africa Standard Time", "zone": "Africa/Brazzaville", "territory": "Brazzaville" },
    { "other_zone": "W. Central Africa Standard Time", "zone": "Africa/Douala", "territory": "Douala" },
    { "other_zone": "W. Central Africa Standard Time", "zone": "Africa/Algiers", "territory": "Algiers" },
    { "other_zone": "W. Central Africa Standard Time", "zone": "Africa/Libreville", "territory": "Libreville" },
    { "other_zone": "W. Central Africa Standard Time", "zone": "Africa/Malabo", "territory": "Malabo" },
    { "other_zone": "W. Central Africa Standard Time", "zone": "Africa/Niamey", "territory": "Niamey" },
    { "other_zone": "W. Central Africa Standard Time", "zone": "Africa/Ndjamena", "territory": "Ndjamena" },
    { "other_zone": "W. Central Africa Standard Time", "zone": "Africa/Tunis", "territory": "Tunis" },
    { "other_zone": "W. Central Africa Standard Time", "zone": "Etc/GMT-1", "territory": "GMT-1" },
    { "other_zone": "Namibia Standard Time", "zone": "Africa/Windhoek", "territory": "Windhoek" },
    { "other_zone": "GTB Standard Time", "zone": "Europe/Bucharest", "territory": "Bucharest" },
    { "other_zone": "GTB Standard Time", "zone": "Europe/Athens", "territory": "Athens" },
    { "other_zone": "GTB Standard Time", "zone": "Europe/Chisinau", "territory": "Chisinau" },
    { "other_zone": "Middle East Standard Time", "zone": "Asia/Beirut", "territory": "Beirut" },
    { "other_zone": "Egypt Standard Time", "zone": "Africa/Cairo", "territory": "Cairo" },
    { "other_zone": "Egypt Standard Time", "zone": "Asia/Gaza", "territory": "Gaza" },
    { "other_zone": "Egypt Standard Time", "zone": "Asia/Hebron", "territory": "Hebron" },
    { "other_zone": "Syria Standard Time", "zone": "Asia/Damascus", "territory": "Damascus" },
    { "other_zone": "E. Europe Standard Time", "zone": "Asia/Nicosia", "territory": "Nicosia" },
    { "other_zone": "South Africa Standard Time", "zone": "Africa/Johannesburg", "territory": "Johannesburg" },
    { "other_zone": "South Africa Standard Time", "zone": "Africa/Bujumbura", "territory": "Bujumbura" },
    { "other_zone": "South Africa Standard Time", "zone": "Africa/Gaborone", "territory": "Gaborone" },
    { "other_zone": "South Africa Standard Time", "zone": "Africa/Lubumbashi", "territory": "Lubumbashi" },
    { "other_zone": "South Africa Standard Time", "zone": "Africa/Maseru", "territory": "Maseru" },
    { "other_zone": "South Africa Standard Time", "zone": "Africa/Blantyre", "territory": "Blantyre" },
    { "other_zone": "South Africa Standard Time", "zone": "Africa/Maputo", "territory": "Maputo" },
    { "other_zone": "South Africa Standard Time", "zone": "Africa/Kigali", "territory": "Kigali" },
    { "other_zone": "South Africa Standard Time", "zone": "Africa/Mbabane", "territory": "Mbabane" },
    { "other_zone": "South Africa Standard Time", "zone": "Africa/Lusaka", "territory": "Lusaka" },
    { "other_zone": "South Africa Standard Time", "zone": "Africa/Harare", "territory": "Harare" },
    { "other_zone": "South Africa Standard Time", "zone": "Etc/GMT-2", "territory": "GMT-2" },
    { "other_zone": "FLE Standard Time", "zone": "Europe/Kiev", "territory": "Kiev" },
    { "other_zone": "FLE Standard Time", "zone": "Europe/Mariehamn", "territory": "Mariehamn" },
    { "other_zone": "FLE Standard Time", "zone": "Europe/Sofia", "territory": "Sofia" },
    { "other_zone": "FLE Standard Time", "zone": "Europe/Tallinn", "territory": "Tallinn" },
    { "other_zone": "FLE Standard Time", "zone": "Europe/Helsinki", "territory": "Helsinki" },
    { "other_zone": "FLE Standard Time", "zone": "Europe/Vilnius", "territory": "Vilnius" },
    { "other_zone": "FLE Standard Time", "zone": "Europe/Riga", "territory": "Riga" },
    { "other_zone": "FLE Standard Time", "zone": "Europe/Simferopol", "territory": "Simferopol" },
    { "other_zone": "FLE Standard Time", "zone": "Europe/Uzhgorod", "territory": "Uzhgorod" },
    { "other_zone": "FLE Standard Time", "zone": "Europe/Zaporozhye", "territory": "Zaporozhye" },
    { "other_zone": "Turkey Standard Time", "zone": "Europe/Istanbul", "territory": "Istanbul" },
    { "other_zone": "Israel Standard Time", "zone": "Asia/Jerusalem", "territory": "Jerusalem" },
    { "other_zone": "Jordan Standard Time", "zone": "Asia/Amman", "territory": "Amman" },
    { "other_zone": "Arabic Standard Time", "zone": "Asia/Baghdad", "territory": "Baghdad" },
    { "other_zone": "Kaliningrad Standard Time", "zone": "Europe/Kaliningrad", "territory": "Kaliningrad" },
    { "other_zone": "Kaliningrad Standard Time", "zone": "Europe/Minsk", "territory": "Minsk" },
    { "other_zone": "Arab Standard Time", "zone": "Asia/Riyadh", "territory": "Riyadh" },
    { "other_zone": "Arab Standard Time", "zone": "Asia/Bahrain", "territory": "Bahrain" },
    { "other_zone": "Arab Standard Time", "zone": "Asia/Kuwait", "territory": "Kuwait" },
    { "other_zone": "Arab Standard Time", "zone": "Asia/Qatar", "territory": "Qatar" },
    { "other_zone": "Arab Standard Time", "zone": "Asia/Aden", "territory": "Aden" },
    { "other_zone": "E. Africa Standard Time", "zone": "Africa/Nairobi", "territory": "Nairobi" },
    { "other_zone": "E. Africa Standard Time", "zone": "Antarctica/Syowa", "territory": "Syowa" },
    { "other_zone": "E. Africa Standard Time", "zone": "Africa/Djibouti", "territory": "Djibouti" },
    { "other_zone": "E. Africa Standard Time", "zone": "Africa/Asmera", "territory": "Asmera" },
    { "other_zone": "E. Africa Standard Time", "zone": "Africa/Addis_Ababa", "territory": "Addis Ababa" },
    { "other_zone": "E. Africa Standard Time", "zone": "Indian/Comoro", "territory": "Comoro" },
    { "other_zone": "E. Africa Standard Time", "zone": "Indian/Antananarivo", "territory": "Antananarivo" },
    { "other_zone": "E. Africa Standard Time", "zone": "Africa/Khartoum", "territory": "Khartoum" },
    { "other_zone": "E. Africa Standard Time", "zone": "Africa/Mogadishu", "territory": "Mogadishu" },
    { "other_zone": "E. Africa Standard Time", "zone": "Africa/Juba", "territory": "Juba" },
    { "other_zone": "E. Africa Standard Time", "zone": "Africa/Dar_es_Salaam", "territory": "Dar es Salaam" },
    { "other_zone": "E. Africa Standard Time", "zone": "Africa/Kampala", "territory": "Kampala" },
    { "other_zone": "E. Africa Standard Time", "zone": "Indian/Mayotte", "territory": "Mayotte" },
    { "other_zone": "E. Africa Standard Time", "zone": "Etc/GMT-3", "territory": "GMT-3" },
    { "other_zone": "Iran Standard Time", "zone": "Asia/Tehran", "territory": "Tehran" },
    { "other_zone": "Arabian Standard Time", "zone": "Asia/Dubai", "territory": "Dubai" },
    { "other_zone": "Arabian Standard Time", "zone": "Asia/Muscat", "territory": "Muscat" },
    { "other_zone": "Arabian Standard Time", "zone": "Etc/GMT-4", "territory": "GMT-4" },
    { "other_zone": "Azerbaijan Standard Time", "zone": "Asia/Baku", "territory": "Baku" },
    { "other_zone": "Russian Standard Time", "zone": "Europe/Moscow", "territory": "Moscow" },
    { "other_zone": "Russian Standard Time", "zone": "Europe/Samara", "territory": "Samara" },
    { "other_zone": "Russian Standard Time", "zone": "Europe/Volgograd", "territory": "Volgograd" },
    { "other_zone": "Mauritius Standard Time", "zone": "Indian/Mauritius", "territory": "Mauritius" },
    { "other_zone": "Mauritius Standard Time", "zone": "Indian/Reunion", "territory": "Reunion" },
    { "other_zone": "Mauritius Standard Time", "zone": "Indian/Mahe", "territory": "Mahe" },
    { "other_zone": "Georgian Standard Time", "zone": "Asia/Tbilisi", "territory": "Tbilisi" },
    { "other_zone": "Caucasus Standard Time", "zone": "Asia/Yerevan", "territory": "Yerevan" },
    { "other_zone": "Afghanistan Standard Time", "zone": "Asia/Kabul", "territory": "Kabul" },
    { "other_zone": "Pakistan Standard Time", "zone": "Asia/Karachi", "territory": "Karachi" },
    { "other_zone": "West Asia Standard Time", "zone": "Asia/Tashkent", "territory": "Tashkent" },
    { "other_zone": "West Asia Standard Time", "zone": "Antarctica/Mawson", "territory": "Mawson" },
    { "other_zone": "West Asia Standard Time", "zone": "Asia/Oral", "territory": "Oral" },
    { "other_zone": "West Asia Standard Time", "zone": "Asia/Aqtau", "territory": "Aqtau" },
    { "other_zone": "West Asia Standard Time", "zone": "Asia/Aqtobe", "territory": "Aqtobe" },
    { "other_zone": "West Asia Standard Time", "zone": "Indian/Maldives", "territory": "Maldives" },
    { "other_zone": "West Asia Standard Time", "zone": "Indian/Kerguelen", "territory": "Kerguelen" },
    { "other_zone": "West Asia Standard Time", "zone": "Asia/Dushanbe", "territory": "Dushanbe" },
    { "other_zone": "West Asia Standard Time", "zone": "Asia/Ashgabat", "territory": "Ashgabat" },
    { "other_zone": "West Asia Standard Time", "zone": "Asia/Samarkand", "territory": "Samarkand" },
    { "other_zone": "West Asia Standard Time", "zone": "Etc/GMT-5", "territory": "GMT-5" },
    { "other_zone": "India Standard Time", "zone": "Asia/Calcutta", "territory": "Calcutta" },
    { "other_zone": "Sri Lanka Standard Time", "zone": "Asia/Colombo", "territory": "Colombo" },
    { "other_zone": "Nepal Standard Time", "zone": "Asia/Katmandu", "territory": "Katmandu" },
    { "other_zone": "Central Asia Standard Time", "zone": "Asia/Almaty", "territory": "Almaty" },
    { "other_zone": "Central Asia Standard Time", "zone": "Antarctica/Vostok", "territory": "Vostok" },
    { "other_zone": "Central Asia Standard Time", "zone": "Indian/Chagos", "territory": "Chagos" },
    { "other_zone": "Central Asia Standard Time", "zone": "Asia/Bishkek", "territory": "Bishkek" },
    { "other_zone": "Central Asia Standard Time", "zone": "Asia/Qyzylorda", "territory": "Qyzylorda" },
    { "other_zone": "Central Asia Standard Time", "zone": "Etc/GMT-6", "territory": "GMT-6" },
    { "other_zone": "Bangladesh Standard Time", "zone": "Asia/Dhaka", "territory": "Dhaka" },
    { "other_zone": "Bangladesh Standard Time", "zone": "Asia/Thimphu", "territory": "Thimphu" },
    { "other_zone": "Ekaterinburg Standard Time", "zone": "Asia/Yekaterinburg", "territory": "Yekaterinburg" },
    { "other_zone": "Myanmar Standard Time", "zone": "Asia/Rangoon", "territory": "Rangoon" },
    { "other_zone": "Myanmar Standard Time", "zone": "Indian/Cocos", "territory": "Cocos" },
    { "other_zone": "SE Asia Standard Time", "zone": "Asia/Bangkok", "territory": "Bangkok" },
    { "other_zone": "SE Asia Standard Time", "zone": "Antarctica/Davis", "territory": "Davis" },
    { "other_zone": "SE Asia Standard Time", "zone": "Indian/Christmas", "territory": "Christmas" },
    { "other_zone": "SE Asia Standard Time", "zone": "Asia/Jakarta", "territory": "Jakarta" },
    { "other_zone": "SE Asia Standard Time", "zone": "Asia/Pontianak", "territory": "Pontianak" },
    { "other_zone": "SE Asia Standard Time", "zone": "Asia/Phnom_Penh", "territory": "Phnom Penh" },
    { "other_zone": "SE Asia Standard Time", "zone": "Asia/Vientiane", "territory": "Vientiane" },
    { "other_zone": "SE Asia Standard Time", "zone": "Asia/Hovd", "territory": "Hovd" },
    { "other_zone": "SE Asia Standard Time", "zone": "Asia/Saigon", "territory": "Saigon" },
    { "other_zone": "SE Asia Standard Time", "zone": "Etc/GMT-7", "territory": "GMT-7" },
    { "other_zone": "N. Central Asia Standard Time", "zone": "Asia/Novosibirsk", "territory": "Novosibirsk" },
    { "other_zone": "N. Central Asia Standard Time", "zone": "Asia/Novokuznetsk", "territory": "Novokuznetsk" },
    { "other_zone": "N. Central Asia Standard Time", "zone": "Asia/Omsk", "territory": "Omsk" },
    { "other_zone": "China Standard Time", "zone": "Asia/Shanghai", "territory": "Shanghai" },
    { "other_zone": "China Standard Time", "zone": "Asia/Chongqing", "territory": "Chongqing" },
    { "other_zone": "China Standard Time", "zone": "Asia/Harbin", "territory": "Harbin" },
    { "other_zone": "China Standard Time", "zone": "Asia/Kashgar", "territory": "Kashgar" },
    { "other_zone": "China Standard Time", "zone": "Asia/Urumqi", "territory": "Urumqi" },
    { "other_zone": "China Standard Time", "zone": "Asia/Hong_Kong", "territory": "Hong Kong" },
    { "other_zone": "China Standard Time", "zone": "Asia/Macau", "territory": "Macau" },
    { "other_zone": "North Asia Standard Time", "zone": "Asia/Krasnoyarsk", "territory": "Krasnoyarsk" },
    { "other_zone": "Singapore Standard Time", "zone": "Asia/Singapore", "territory": "Singapore" },
    { "other_zone": "Singapore Standard Time", "zone": "Asia/Brunei", "territory": "Brunei" },
    { "other_zone": "Singapore Standard Time", "zone": "Asia/Makassar", "territory": "Makassar" },
    { "other_zone": "Singapore Standard Time", "zone": "Asia/Kuala_Lumpur", "territory": "Kuala Lumpur" },
    { "other_zone": "Singapore Standard Time", "zone": "Asia/Kuching", "territory": "Kuching" },
    { "other_zone": "Singapore Standard Time", "zone": "Asia/Manila", "territory": "Manila" },
    { "other_zone": "Singapore Standard Time", "zone": "Etc/GMT-8", "territory": "GMT-8" },
    { "other_zone": "W. Australia Standard Time", "zone": "Australia/Perth", "territory": "Perth" },
    { "other_zone": "W. Australia Standard Time", "zone": "Antarctica/Casey", "territory": "Casey" },
    { "other_zone": "Taipei Standard Time", "zone": "Asia/Taipei", "territory": "Taipei" },
    { "other_zone": "Ulaanbaatar Standard Time", "zone": "Asia/Ulaanbaatar", "territory": "Ulaanbaatar" },
    { "other_zone": "Ulaanbaatar Standard Time", "zone": "Asia/Choibalsan", "territory": "Choibalsan" },
    { "other_zone": "North Asia East Standard Time", "zone": "Asia/Irkutsk", "territory": "Irkutsk" },
    { "other_zone": "Tokyo Standard Time", "zone": "Asia/Tokyo", "territory": "Tokyo" },
    { "other_zone": "Tokyo Standard Time", "zone": "Asia/Jayapura", "territory": "Jayapura" },
    { "other_zone": "Tokyo Standard Time", "zone": "Pacific/Palau", "territory": "Palau" },
    { "other_zone": "Tokyo Standard Time", "zone": "Asia/Dili", "territory": "Dili" },
    { "other_zone": "Tokyo Standard Time", "zone": "Etc/GMT-9", "territory": "GMT-9" },
    { "other_zone": "Korea Standard Time", "zone": "Asia/Seoul", "territory": "Seoul" },
    { "other_zone": "Korea Standard Time", "zone": "Asia/Pyongyang", "territory": "Pyongyang" },
    { "other_zone": "Cen. Australia Standard Time", "zone": "Australia/Adelaide", "territory": "Adelaide" },
    { "other_zone": "Cen. Australia Standard Time", "zone": "Australia/Broken_Hill", "territory": "Broken Hill" },
    { "other_zone": "AUS Central Standard Time", "zone": "Australia/Darwin", "territory": "Darwin" },
    { "other_zone": "E. Australia Standard Time", "zone": "Australia/Brisbane", "territory": "Brisbane" },
    { "other_zone": "E. Australia Standard Time", "zone": "Australia/Lindeman", "territory": "Lindeman" },
    { "other_zone": "AUS Eastern Standard Time", "zone": "Australia/Sydney", "territory": "Sydney" },
    { "other_zone": "AUS Eastern Standard Time", "zone": "Australia/Melbourne", "territory": "Melbourne" },
    { "other_zone": "West Pacific Standard Time", "zone": "Pacific/Port_Moresby", "territory": "Port Moresby" },
    { "other_zone": "West Pacific Standard Time", "zone": "Antarctica/DumontDUrville", "territory": "DumontDUrville" },
    { "other_zone": "West Pacific Standard Time", "zone": "Pacific/Truk", "territory": "Truk" },
    { "other_zone": "West Pacific Standard Time", "zone": "Pacific/Guam", "territory": "Guam" },
    { "other_zone": "West Pacific Standard Time", "zone": "Pacific/Saipan", "territory": "Saipan" },
    { "other_zone": "West Pacific Standard Time", "zone": "Etc/GMT-10", "territory": "GMT-10" },
    { "other_zone": "Tasmania Standard Time", "zone": "Australia/Hobart", "territory": "Hobart" },
    { "other_zone": "Tasmania Standard Time", "zone": "Australia/Currie", "territory": "Currie" },
    { "other_zone": "Yakutsk Standard Time", "zone": "Asia/Yakutsk", "territory": "Yakutsk" },
    { "other_zone": "Yakutsk Standard Time", "zone": "Asia/Khandyga", "territory": "Khandyga" },
    { "other_zone": "Central Pacific Standard Time", "zone": "Pacific/Guadalcanal", "territory": "Guadalcanal" },
    { "other_zone": "Central Pacific Standard Time", "zone": "Antarctica/Macquarie", "territory": "Macquarie" },
    { "other_zone": "Central Pacific Standard Time", "zone": "Pacific/Ponape", "territory": "Ponape" },
    { "other_zone": "Central Pacific Standard Time", "zone": "Pacific/Kosrae", "territory": "Kosrae" },
    { "other_zone": "Central Pacific Standard Time", "zone": "Pacific/Noumea", "territory": "Noumea" },
    { "other_zone": "Central Pacific Standard Time", "zone": "Pacific/Efate", "territory": "Efate" },
    { "other_zone": "Central Pacific Standard Time", "zone": "Etc/GMT-11", "territory": "GMT-11" },
    { "other_zone": "Vladivostok Standard Time", "zone": "Asia/Vladivostok", "territory": "Vladivostok" },
    { "other_zone": "Vladivostok Standard Time", "zone": "Asia/Sakhalin", "territory": "Sakhalin" },
    { "other_zone": "Vladivostok Standard Time", "zone": "Asia/Ust-Nera", "territory": "Ust-Nera" },
    { "other_zone": "New Zealand Standard Time", "zone": "Pacific/Auckland", "territory": "Auckland" },
    { "other_zone": "New Zealand Standard Time", "zone": "Antarctica/South_Pole", "territory": "South Pole" },
    { "other_zone": "New Zealand Standard Time", "zone": "Antarctica/McMurdo", "territory": "McMurdo" },
    { "other_zone": "UTC+12", "zone": "Etc/GMT-12", "territory": "GMT-12" },
    { "other_zone": "UTC+12", "zone": "Pacific/Tarawa", "territory": "Tarawa" },
    { "other_zone": "UTC+12", "zone": "Pacific/Majuro", "territory": "Majuro" },
    { "other_zone": "UTC+12", "zone": "Pacific/Kwajalein", "territory": "Kwajalein" },
    { "other_zone": "UTC+12", "zone": "Pacific/Nauru", "territory": "Nauru" },
    { "other_zone": "UTC+12", "zone": "Pacific/Funafuti", "territory": "Funafuti" },
    { "other_zone": "UTC+12", "zone": "Pacific/Wake", "territory": "Wake" },
    { "other_zone": "UTC+12", "zone": "Pacific/Wallis", "territory": "Wallis" },
    { "other_zone": "Fiji Standard Time", "zone": "Pacific/Fiji", "territory": "Fiji" },
    { "other_zone": "Magadan Standard Time", "zone": "Asia/Magadan", "territory": "Magadan" },
    { "other_zone": "Magadan Standard Time", "zone": "Asia/Anadyr", "territory": "Anadyr" },
    { "other_zone": "Magadan Standard Time", "zone": "Asia/Kamchatka", "territory": "Kamchatka" },
    { "other_zone": "Tonga Standard Time", "zone": "Pacific/Tongatapu", "territory": "Tongatapu" },
    { "other_zone": "Tonga Standard Time", "zone": "Pacific/Enderbury", "territory": "Enderbury" },
    { "other_zone": "Tonga Standard Time", "zone": "Pacific/Fakaofo", "territory": "Fakaofo" },
    { "other_zone": "Tonga Standard Time", "zone": "Etc/GMT-13", "territory": "GMT-13" },
    { "other_zone": "Samoa Standard Time", "zone": "Pacific/Apia", "territory": "Apia" }
];


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Types_1 = __webpack_require__(35);
var IntVal_1 = __webpack_require__(80);
var Timezone_1 = __webpack_require__(335);
var valueToTwoDigits = function (value) {
    return ((value < 10) ? '0' : '') + value;
};
// ===================== Date ========================
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var dateRegExp = /^\/Date\((.*?)\)\/$/;
var offsetRegExp = /[+-]\d*/;
exports.dateToUTCString = function (date) {
    var time = valueToTwoDigits(date.getUTCHours()) + ':' + valueToTwoDigits(date.getUTCMinutes()) + ':' + valueToTwoDigits(date.getUTCSeconds());
    return days[date.getUTCDay()] + ', ' + valueToTwoDigits(date.getUTCDate()) + ' ' + months[date.getUTCMonth()] + ' ' + date.getUTCFullYear() + ' ' + time + ' GMT';
};
var parseMicrosoftFormatOffset = function (offset) {
    var sign = offset.substr(0, 1) === "-" ? -1 : 1;
    offset = offset.substring(1);
    var result = (IntVal_1.intVal(offset.substr(0, 2)) * 60) + IntVal_1.intVal(offset.substring(2));
    return sign * result;
};
exports.parseDate = function (value) {
    if (Types_1.isDate(value)) {
        return value;
    }
    if (value && value.indexOf("/D") === 0) {
        var rDate = dateRegExp.exec(value);
        if (rDate) {
            var str = rDate[1];
            var rTz = offsetRegExp.exec(str.substring(1));
            var date = new Date(IntVal_1.intVal(str));
            if (rTz) {
                var tzoffset = parseMicrosoftFormatOffset(rTz[0]);
                var timezone = new Timezone_1.Timezone();
                date = timezone.apply(date, 0);
                date = timezone.convert(date, 0, -1 * tzoffset);
            }
            return date;
        }
    }
    return value;
};


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureValueInRange = function (val, min, max) {
    if (val <= min) {
        return min;
    }
    if (val >= max) {
        return max;
    }
    return val;
};


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isValueOutOfRange = function (value, min, max) {
    return value < min || value > max;
};


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Average_1 = __webpack_require__(145);
exports.stdDeviation = function (arr) {
    var avg = Average_1.average(arr), sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i] - avg, 2);
    }
    return Math.sqrt(sum / (arr.length - 1));
};


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IntVal_1 = __webpack_require__(80);
exports.intVal = IntVal_1.intVal;
var IsValueOutOfRange_1 = __webpack_require__(339);
exports.isValueOutOfRange = IsValueOutOfRange_1.isValueOutOfRange;
var EnsureValueInRange_1 = __webpack_require__(338);
exports.ensureValueInRange = EnsureValueInRange_1.ensureValueInRange;
var Average_1 = __webpack_require__(145);
exports.average = Average_1.average;
var StdDeviation_1 = __webpack_require__(340);
exports.stdDeviation = StdDeviation_1.stdDeviation;


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = function (str) {
    return "" + str.charAt(0).toUpperCase() + str.slice(1);
};


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.pluralize = function (num, strOne, strTwo, strFive) {
    strFive = strFive || strTwo;
    if ((strTwo === strFive) && (num > 1)) {
        return strTwo;
    }
    if ((num > 10) && (num < 20)) {
        return strFive;
    }
    var d = num % 10;
    if (d === 1) {
        return strOne;
    }
    else if ((d < 5) && (d !== 0)) {
        return strTwo;
    }
    else {
        return strFive;
    }
};


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Pad_1 = __webpack_require__(81);
var Justify_1 = __webpack_require__(146);
var IntVal_1 = __webpack_require__(80);
// formatBaseX()
var formatBaseX = function (value, base, prefixBaseX, leftJustify, minWidth, precision, zeroPad) {
    // Note: casts negative numbers to positive ones
    var number = value >>> 0;
    var prefix = prefixBaseX && number && { '2': '0b', '8': '0', '10': '', '16': '0x' }[base] || '';
    var result = prefix + Pad_1.pad(number.toString(base), precision || 0, '0', false);
    return Justify_1.justify(result, prefix, leftJustify, minWidth, zeroPad);
};
// formatString()
var formatString = function (value, leftJustify, minWidth, precision, zeroPad) {
    if (precision != null) {
        value = value.slice(0, precision);
    }
    return Justify_1.justify(value, '', leftJustify, minWidth, zeroPad);
};
exports.sprintf = function (format) {
    var a = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        a[_i - 1] = arguments[_i];
    }
    var regex = /%%|%(\d+\$)?([-+#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g;
    var i = 0;
    // finalFormat()
    var doFormat = function (substring, valueIndex, flags, minWidth, _, precision, type) {
        if (substring == '%%')
            return '%';
        // parse flags
        var leftJustify = false, positivePrefix = '', zeroPad = false, prefixBaseX = false;
        for (var j = 0; flags && j < flags.length; j++)
            switch (flags.charAt(j)) {
                case ' ':
                    positivePrefix = ' ';
                    break;
                case '+':
                    positivePrefix = '+';
                    break;
                case '-':
                    leftJustify = true;
                    break;
                case '0':
                    zeroPad = true;
                    break;
                case '#':
                    prefixBaseX = true;
                    break;
            }
        // parameters may be null, undefined, empty-string or real valued
        // we want to ignore null, undefined and empty-string values
        if (!minWidth) {
            minWidth = 0;
        }
        else if (minWidth == '*') {
            minWidth = +a[i++];
        }
        else if (minWidth.charAt(0) == '*') {
            minWidth = +a[minWidth.slice(1, -1)];
        }
        else {
            minWidth = +minWidth;
        }
        // Note: undocumented perl feature:
        if (minWidth < 0) {
            minWidth = -minWidth;
            leftJustify = true;
        }
        if (!isFinite(minWidth)) {
            throw new Error('sprintf: (minimum-)width must be finite');
        }
        if (!precision) {
            precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type == 'd') ? 0 : void (0);
        }
        else if (precision == '*') {
            precision = +a[i++];
        }
        else if (precision.charAt(0) == '*') {
            precision = +a[precision.slice(1, -1)];
        }
        else {
            precision = +precision;
        }
        // grab value using valueIndex if required?
        var value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];
        switch (type) {
            case 's': return formatString(String(value), leftJustify, minWidth, precision, zeroPad);
            case 'c': return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
            case 'b': return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'o': return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'x': return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'X': return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
            case 'u': return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'i':
            case 'd': {
                var number = IntVal_1.intVal(+value);
                var prefix = number < 0 ? '-' : positivePrefix;
                value = prefix + Pad_1.pad(String(Math.abs(number)), precision, '0', false);
                return Justify_1.justify(value, prefix, leftJustify, minWidth, zeroPad);
            }
            case 'e':
            case 'E':
            case 'f':
            case 'F':
            case 'g':
            case 'G':
                {
                    var number = +value;
                    var prefix = number < 0 ? '-' : positivePrefix;
                    var method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                    var textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                    value = prefix + Math.abs(number)[method](precision);
                    return Justify_1.justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
                }
            default: return substring;
        }
    };
    return format.replace(regex, doFormat);
};


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.strRepeat = function (str, n) {
    var result = "", t = str.toString();
    while (--n >= 0) {
        result += t;
    }
    return result;
};


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.trim = function (value) {
    return value.replace(/^\s*/, "").replace(/\s*$/, "");
};


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StrRepeat_1 = __webpack_require__(345);
exports.strRepeat = StrRepeat_1.strRepeat;
var Trim_1 = __webpack_require__(346);
exports.trim = Trim_1.trim;
var Pad_1 = __webpack_require__(81);
exports.pad = Pad_1.pad;
var Justify_1 = __webpack_require__(146);
exports.justify = Justify_1.justify;
var Capitalize_1 = __webpack_require__(342);
exports.capitalize = Capitalize_1.capitalize;
var Pluralize_1 = __webpack_require__(343);
exports.pluralize = Pluralize_1.pluralize;
var Sprintf_1 = __webpack_require__(344);
exports.sprintf = Sprintf_1.sprintf;


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Types_1 = __webpack_require__(35);
exports.createChainedFunction = function () {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return funcs
        .filter(function (f) { return (Types_1.isFunction(f)); })
        .reduce(function (acc, f) {
        if (typeof f !== 'function') {
            throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
        }
        if (acc === null) {
            return f;
        }
        return function chainedFunction() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            acc.apply(this, args);
            f.apply(this, args);
        };
    }, null);
};


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CreateChainedFunction_1 = __webpack_require__(348);
exports.createChainedFunction = CreateChainedFunction_1.createChainedFunction;


/***/ }),
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _union = __webpack_require__(315);

var _union2 = _interopRequireDefault(_union);

var _without = __webpack_require__(137);

var _without2 = _interopRequireDefault(_without);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EnterLeaveCounter = function () {
  function EnterLeaveCounter() {
    _classCallCheck(this, EnterLeaveCounter);

    this.entered = [];
  }

  _createClass(EnterLeaveCounter, [{
    key: 'enter',
    value: function enter(enteringNode) {
      var previousLength = this.entered.length;

      var isNodeEntered = function isNodeEntered(node) {
        return document.documentElement.contains(node) && (!node.contains || node.contains(enteringNode));
      };

      this.entered = (0, _union2.default)(this.entered.filter(isNodeEntered), [enteringNode]);

      return previousLength === 0 && this.entered.length > 0;
    }
  }, {
    key: 'leave',
    value: function leave(leavingNode) {
      var previousLength = this.entered.length;

      this.entered = (0, _without2.default)(this.entered.filter(function (node) {
        return document.documentElement.contains(node);
      }), leavingNode);

      return previousLength > 0 && this.entered.length === 0;
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.entered = [];
    }
  }]);

  return EnterLeaveCounter;
}();

exports.default = EnterLeaveCounter;

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaults = __webpack_require__(308);

var _defaults2 = _interopRequireDefault(_defaults);

var _shallowEqual = __webpack_require__(430);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _EnterLeaveCounter = __webpack_require__(423);

var _EnterLeaveCounter2 = _interopRequireDefault(_EnterLeaveCounter);

var _BrowserDetector = __webpack_require__(171);

var _OffsetUtils = __webpack_require__(427);

var _NativeDragSources = __webpack_require__(426);

var _NativeTypes = __webpack_require__(91);

var NativeTypes = _interopRequireWildcard(_NativeTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HTML5Backend = function () {
  function HTML5Backend(manager) {
    _classCallCheck(this, HTML5Backend);

    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.registry = manager.getRegistry();
    this.context = manager.getContext();

    this.sourcePreviewNodes = {};
    this.sourcePreviewNodeOptions = {};
    this.sourceNodes = {};
    this.sourceNodeOptions = {};
    this.enterLeaveCounter = new _EnterLeaveCounter2.default();

    this.dragStartSourceIds = [];
    this.dropTargetIds = [];
    this.dragEnterTargetIds = [];
    this.currentNativeSource = null;
    this.currentNativeHandle = null;
    this.currentDragSourceNode = null;
    this.currentDragSourceNodeOffset = null;
    this.currentDragSourceNodeOffsetChanged = false;
    this.altKeyPressed = false;

    this.getSourceClientOffset = this.getSourceClientOffset.bind(this);
    this.handleTopDragStart = this.handleTopDragStart.bind(this);
    this.handleTopDragStartCapture = this.handleTopDragStartCapture.bind(this);
    this.handleTopDragEndCapture = this.handleTopDragEndCapture.bind(this);
    this.handleTopDragEnter = this.handleTopDragEnter.bind(this);
    this.handleTopDragEnterCapture = this.handleTopDragEnterCapture.bind(this);
    this.handleTopDragLeaveCapture = this.handleTopDragLeaveCapture.bind(this);
    this.handleTopDragOver = this.handleTopDragOver.bind(this);
    this.handleTopDragOverCapture = this.handleTopDragOverCapture.bind(this);
    this.handleTopDrop = this.handleTopDrop.bind(this);
    this.handleTopDropCapture = this.handleTopDropCapture.bind(this);
    this.handleSelectStart = this.handleSelectStart.bind(this);
    this.endDragIfSourceWasRemovedFromDOM = this.endDragIfSourceWasRemovedFromDOM.bind(this);
    this.endDragNativeItem = this.endDragNativeItem.bind(this);
    this.asyncEndDragNativeItem = this.asyncEndDragNativeItem.bind(this);
  }

  _createClass(HTML5Backend, [{
    key: 'setup',
    value: function setup() {
      if (this.window === undefined) {
        return;
      }

      if (this.window.__isReactDndBackendSetUp) {
        // eslint-disable-line no-underscore-dangle
        throw new Error('Cannot have two HTML5 backends at the same time.');
      }
      this.window.__isReactDndBackendSetUp = true; // eslint-disable-line no-underscore-dangle
      this.addEventListeners(this.window);
    }
  }, {
    key: 'teardown',
    value: function teardown() {
      if (this.window === undefined) {
        return;
      }

      this.window.__isReactDndBackendSetUp = false; // eslint-disable-line no-underscore-dangle
      this.removeEventListeners(this.window);
      this.clearCurrentDragSourceNode();
      if (this.asyncEndDragFrameId) {
        this.window.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    }
  }, {
    key: 'addEventListeners',
    value: function addEventListeners(target) {
      target.addEventListener('dragstart', this.handleTopDragStart);
      target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
      target.addEventListener('dragend', this.handleTopDragEndCapture, true);
      target.addEventListener('dragenter', this.handleTopDragEnter);
      target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
      target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
      target.addEventListener('dragover', this.handleTopDragOver);
      target.addEventListener('dragover', this.handleTopDragOverCapture, true);
      target.addEventListener('drop', this.handleTopDrop);
      target.addEventListener('drop', this.handleTopDropCapture, true);
    }
  }, {
    key: 'removeEventListeners',
    value: function removeEventListeners(target) {
      target.removeEventListener('dragstart', this.handleTopDragStart);
      target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
      target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
      target.removeEventListener('dragenter', this.handleTopDragEnter);
      target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
      target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
      target.removeEventListener('dragover', this.handleTopDragOver);
      target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
      target.removeEventListener('drop', this.handleTopDrop);
      target.removeEventListener('drop', this.handleTopDropCapture, true);
    }
  }, {
    key: 'connectDragPreview',
    value: function connectDragPreview(sourceId, node, options) {
      var _this = this;

      this.sourcePreviewNodeOptions[sourceId] = options;
      this.sourcePreviewNodes[sourceId] = node;

      return function () {
        delete _this.sourcePreviewNodes[sourceId];
        delete _this.sourcePreviewNodeOptions[sourceId];
      };
    }
  }, {
    key: 'connectDragSource',
    value: function connectDragSource(sourceId, node, options) {
      var _this2 = this;

      this.sourceNodes[sourceId] = node;
      this.sourceNodeOptions[sourceId] = options;

      var handleDragStart = function handleDragStart(e) {
        return _this2.handleDragStart(e, sourceId);
      };
      var handleSelectStart = function handleSelectStart(e) {
        return _this2.handleSelectStart(e, sourceId);
      };

      node.setAttribute('draggable', true);
      node.addEventListener('dragstart', handleDragStart);
      node.addEventListener('selectstart', handleSelectStart);

      return function () {
        delete _this2.sourceNodes[sourceId];
        delete _this2.sourceNodeOptions[sourceId];

        node.removeEventListener('dragstart', handleDragStart);
        node.removeEventListener('selectstart', handleSelectStart);
        node.setAttribute('draggable', false);
      };
    }
  }, {
    key: 'connectDropTarget',
    value: function connectDropTarget(targetId, node) {
      var _this3 = this;

      var handleDragEnter = function handleDragEnter(e) {
        return _this3.handleDragEnter(e, targetId);
      };
      var handleDragOver = function handleDragOver(e) {
        return _this3.handleDragOver(e, targetId);
      };
      var handleDrop = function handleDrop(e) {
        return _this3.handleDrop(e, targetId);
      };

      node.addEventListener('dragenter', handleDragEnter);
      node.addEventListener('dragover', handleDragOver);
      node.addEventListener('drop', handleDrop);

      return function () {
        node.removeEventListener('dragenter', handleDragEnter);
        node.removeEventListener('dragover', handleDragOver);
        node.removeEventListener('drop', handleDrop);
      };
    }
  }, {
    key: 'getCurrentSourceNodeOptions',
    value: function getCurrentSourceNodeOptions() {
      var sourceId = this.monitor.getSourceId();
      var sourceNodeOptions = this.sourceNodeOptions[sourceId];

      return (0, _defaults2.default)(sourceNodeOptions || {}, {
        dropEffect: this.altKeyPressed ? 'copy' : 'move'
      });
    }
  }, {
    key: 'getCurrentDropEffect',
    value: function getCurrentDropEffect() {
      if (this.isDraggingNativeItem()) {
        // It makes more sense to default to 'copy' for native resources
        return 'copy';
      }

      return this.getCurrentSourceNodeOptions().dropEffect;
    }
  }, {
    key: 'getCurrentSourcePreviewNodeOptions',
    value: function getCurrentSourcePreviewNodeOptions() {
      var sourceId = this.monitor.getSourceId();
      var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions[sourceId];

      return (0, _defaults2.default)(sourcePreviewNodeOptions || {}, {
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: false
      });
    }
  }, {
    key: 'getSourceClientOffset',
    value: function getSourceClientOffset(sourceId) {
      return (0, _OffsetUtils.getNodeClientOffset)(this.sourceNodes[sourceId]);
    }
  }, {
    key: 'isDraggingNativeItem',
    value: function isDraggingNativeItem() {
      var itemType = this.monitor.getItemType();
      return Object.keys(NativeTypes).some(function (key) {
        return NativeTypes[key] === itemType;
      });
    }
  }, {
    key: 'beginDragNativeItem',
    value: function beginDragNativeItem(type) {
      this.clearCurrentDragSourceNode();

      var SourceType = (0, _NativeDragSources.createNativeDragSource)(type);
      this.currentNativeSource = new SourceType();
      this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
      this.actions.beginDrag([this.currentNativeHandle]);

      // On Firefox, if mouseover fires, the drag is over but browser failed to tell us.
      // See https://bugzilla.mozilla.org/show_bug.cgi?id=656164
      // This is not true for other browsers.
      if ((0, _BrowserDetector.isFirefox)()) {
        this.window.addEventListener('mouseover', this.asyncEndDragNativeItem, true);
      }
    }
  }, {
    key: 'asyncEndDragNativeItem',
    value: function asyncEndDragNativeItem() {
      this.asyncEndDragFrameId = this.window.requestAnimationFrame(this.endDragNativeItem);
      if ((0, _BrowserDetector.isFirefox)()) {
        this.window.removeEventListener('mouseover', this.asyncEndDragNativeItem, true);
        this.enterLeaveCounter.reset();
      }
    }
  }, {
    key: 'endDragNativeItem',
    value: function endDragNativeItem() {
      if (!this.isDraggingNativeItem()) {
        return;
      }

      this.actions.endDrag();
      this.registry.removeSource(this.currentNativeHandle);
      this.currentNativeHandle = null;
      this.currentNativeSource = null;
    }
  }, {
    key: 'endDragIfSourceWasRemovedFromDOM',
    value: function endDragIfSourceWasRemovedFromDOM() {
      var node = this.currentDragSourceNode;
      if (document.body.contains(node)) {
        return;
      }

      if (this.clearCurrentDragSourceNode()) {
        this.actions.endDrag();
      }
    }
  }, {
    key: 'setCurrentDragSourceNode',
    value: function setCurrentDragSourceNode(node) {
      this.clearCurrentDragSourceNode();
      this.currentDragSourceNode = node;
      this.currentDragSourceNodeOffset = (0, _OffsetUtils.getNodeClientOffset)(node);
      this.currentDragSourceNodeOffsetChanged = false;

      // Receiving a mouse event in the middle of a dragging operation
      // means it has ended and the drag source node disappeared from DOM,
      // so the browser didn't dispatch the dragend event.
      this.window.addEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
    }
  }, {
    key: 'clearCurrentDragSourceNode',
    value: function clearCurrentDragSourceNode() {
      if (this.currentDragSourceNode) {
        this.currentDragSourceNode = null;
        this.currentDragSourceNodeOffset = null;
        this.currentDragSourceNodeOffsetChanged = false;
        this.window.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
        return true;
      }

      return false;
    }
  }, {
    key: 'checkIfCurrentDragSourceRectChanged',
    value: function checkIfCurrentDragSourceRectChanged() {
      var node = this.currentDragSourceNode;
      if (!node) {
        return false;
      }

      if (this.currentDragSourceNodeOffsetChanged) {
        return true;
      }

      this.currentDragSourceNodeOffsetChanged = !(0, _shallowEqual2.default)((0, _OffsetUtils.getNodeClientOffset)(node), this.currentDragSourceNodeOffset);

      return this.currentDragSourceNodeOffsetChanged;
    }
  }, {
    key: 'handleTopDragStartCapture',
    value: function handleTopDragStartCapture() {
      this.clearCurrentDragSourceNode();
      this.dragStartSourceIds = [];
    }
  }, {
    key: 'handleDragStart',
    value: function handleDragStart(e, sourceId) {
      this.dragStartSourceIds.unshift(sourceId);
    }
  }, {
    key: 'handleTopDragStart',
    value: function handleTopDragStart(e) {
      var _this4 = this;

      var dragStartSourceIds = this.dragStartSourceIds;

      this.dragStartSourceIds = null;

      var clientOffset = (0, _OffsetUtils.getEventClientOffset)(e);

      // Don't publish the source just yet (see why below)
      this.actions.beginDrag(dragStartSourceIds, {
        publishSource: false,
        getSourceClientOffset: this.getSourceClientOffset,
        clientOffset: clientOffset
      });

      var dataTransfer = e.dataTransfer;

      var nativeType = (0, _NativeDragSources.matchNativeItemType)(dataTransfer);

      if (this.monitor.isDragging()) {
        if (typeof dataTransfer.setDragImage === 'function') {
          // Use custom drag image if user specifies it.
          // If child drag source refuses drag but parent agrees,
          // use parent's node as drag image. Neither works in IE though.
          var sourceId = this.monitor.getSourceId();
          var sourceNode = this.sourceNodes[sourceId];
          var dragPreview = this.sourcePreviewNodes[sourceId] || sourceNode;

          var _getCurrentSourcePrev = this.getCurrentSourcePreviewNodeOptions(),
              anchorX = _getCurrentSourcePrev.anchorX,
              anchorY = _getCurrentSourcePrev.anchorY;

          var anchorPoint = { anchorX: anchorX, anchorY: anchorY };
          var dragPreviewOffset = (0, _OffsetUtils.getDragPreviewOffset)(sourceNode, dragPreview, clientOffset, anchorPoint);
          dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
        }

        try {
          // Firefox won't drag without setting data
          dataTransfer.setData('application/json', {});
        } catch (err) {}
        // IE doesn't support MIME types in setData


        // Store drag source node so we can check whether
        // it is removed from DOM and trigger endDrag manually.
        this.setCurrentDragSourceNode(e.target);

        // Now we are ready to publish the drag source.. or are we not?

        var _getCurrentSourcePrev2 = this.getCurrentSourcePreviewNodeOptions(),
            captureDraggingState = _getCurrentSourcePrev2.captureDraggingState;

        if (!captureDraggingState) {
          // Usually we want to publish it in the next tick so that browser
          // is able to screenshot the current (not yet dragging) state.
          //
          // It also neatly avoids a situation where render() returns null
          // in the same tick for the source element, and browser freaks out.
          setTimeout(function () {
            return _this4.actions.publishDragSource();
          });
        } else {
          // In some cases the user may want to override this behavior, e.g.
          // to work around IE not supporting custom drag previews.
          //
          // When using a custom drag layer, the only way to prevent
          // the default drag preview from drawing in IE is to screenshot
          // the dragging state in which the node itself has zero opacity
          // and height. In this case, though, returning null from render()
          // will abruptly end the dragging, which is not obvious.
          //
          // This is the reason such behavior is strictly opt-in.
          this.actions.publishDragSource();
        }
      } else if (nativeType) {
        // A native item (such as URL) dragged from inside the document
        this.beginDragNativeItem(nativeType);
      } else if (!dataTransfer.types && (!e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
        // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
        // Just let it drag. It's a native type (URL or text) and will be picked up in
        // dragenter handler.
        return; // eslint-disable-line no-useless-return
      } else {
        // If by this time no drag source reacted, tell browser not to drag.
        e.preventDefault();
      }
    }
  }, {
    key: 'handleTopDragEndCapture',
    value: function handleTopDragEndCapture() {
      if (this.clearCurrentDragSourceNode()) {
        // Firefox can dispatch this event in an infinite loop
        // if dragend handler does something like showing an alert.
        // Only proceed if we have not handled it already.
        this.actions.endDrag();
      }
    }
  }, {
    key: 'handleTopDragEnterCapture',
    value: function handleTopDragEnterCapture(e) {
      this.dragEnterTargetIds = [];

      var isFirstEnter = this.enterLeaveCounter.enter(e.target);
      if (!isFirstEnter || this.monitor.isDragging()) {
        return;
      }

      var dataTransfer = e.dataTransfer;

      var nativeType = (0, _NativeDragSources.matchNativeItemType)(dataTransfer);

      if (nativeType) {
        // A native item (such as file or URL) dragged from outside the document
        this.beginDragNativeItem(nativeType);
      }
    }
  }, {
    key: 'handleDragEnter',
    value: function handleDragEnter(e, targetId) {
      this.dragEnterTargetIds.unshift(targetId);
    }
  }, {
    key: 'handleTopDragEnter',
    value: function handleTopDragEnter(e) {
      var _this5 = this;

      var dragEnterTargetIds = this.dragEnterTargetIds;

      this.dragEnterTargetIds = [];

      if (!this.monitor.isDragging()) {
        // This is probably a native item type we don't understand.
        return;
      }

      this.altKeyPressed = e.altKey;

      if (!(0, _BrowserDetector.isFirefox)()) {
        // Don't emit hover in `dragenter` on Firefox due to an edge case.
        // If the target changes position as the result of `dragenter`, Firefox
        // will still happily dispatch `dragover` despite target being no longer
        // there. The easy solution is to only fire `hover` in `dragover` on FF.
        this.actions.hover(dragEnterTargetIds, {
          clientOffset: (0, _OffsetUtils.getEventClientOffset)(e)
        });
      }

      var canDrop = dragEnterTargetIds.some(function (targetId) {
        return _this5.monitor.canDropOnTarget(targetId);
      });

      if (canDrop) {
        // IE requires this to fire dragover events
        e.preventDefault();
        e.dataTransfer.dropEffect = this.getCurrentDropEffect();
      }
    }
  }, {
    key: 'handleTopDragOverCapture',
    value: function handleTopDragOverCapture() {
      this.dragOverTargetIds = [];
    }
  }, {
    key: 'handleDragOver',
    value: function handleDragOver(e, targetId) {
      this.dragOverTargetIds.unshift(targetId);
    }
  }, {
    key: 'handleTopDragOver',
    value: function handleTopDragOver(e) {
      var _this6 = this;

      var dragOverTargetIds = this.dragOverTargetIds;

      this.dragOverTargetIds = [];

      if (!this.monitor.isDragging()) {
        // This is probably a native item type we don't understand.
        // Prevent default "drop and blow away the whole document" action.
        e.preventDefault();
        e.dataTransfer.dropEffect = 'none';
        return;
      }

      this.altKeyPressed = e.altKey;

      this.actions.hover(dragOverTargetIds, {
        clientOffset: (0, _OffsetUtils.getEventClientOffset)(e)
      });

      var canDrop = dragOverTargetIds.some(function (targetId) {
        return _this6.monitor.canDropOnTarget(targetId);
      });

      if (canDrop) {
        // Show user-specified drop effect.
        e.preventDefault();
        e.dataTransfer.dropEffect = this.getCurrentDropEffect();
      } else if (this.isDraggingNativeItem()) {
        // Don't show a nice cursor but still prevent default
        // "drop and blow away the whole document" action.
        e.preventDefault();
        e.dataTransfer.dropEffect = 'none';
      } else if (this.checkIfCurrentDragSourceRectChanged()) {
        // Prevent animating to incorrect position.
        // Drop effect must be other than 'none' to prevent animation.
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
      }
    }
  }, {
    key: 'handleTopDragLeaveCapture',
    value: function handleTopDragLeaveCapture(e) {
      if (this.isDraggingNativeItem()) {
        e.preventDefault();
      }

      var isLastLeave = this.enterLeaveCounter.leave(e.target);
      if (!isLastLeave) {
        return;
      }

      if (this.isDraggingNativeItem()) {
        this.endDragNativeItem();
      }
    }
  }, {
    key: 'handleTopDropCapture',
    value: function handleTopDropCapture(e) {
      this.dropTargetIds = [];
      e.preventDefault();

      if (this.isDraggingNativeItem()) {
        this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer);
      }

      this.enterLeaveCounter.reset();
    }
  }, {
    key: 'handleDrop',
    value: function handleDrop(e, targetId) {
      this.dropTargetIds.unshift(targetId);
    }
  }, {
    key: 'handleTopDrop',
    value: function handleTopDrop(e) {
      var dropTargetIds = this.dropTargetIds;

      this.dropTargetIds = [];

      this.actions.hover(dropTargetIds, {
        clientOffset: (0, _OffsetUtils.getEventClientOffset)(e)
      });
      this.actions.drop({ dropEffect: this.getCurrentDropEffect() });

      if (this.isDraggingNativeItem()) {
        this.endDragNativeItem();
      } else {
        this.endDragIfSourceWasRemovedFromDOM();
      }
    }
  }, {
    key: 'handleSelectStart',
    value: function handleSelectStart(e) {
      var target = e.target;

      // Only IE requires us to explicitly say
      // we want drag drop operation to start

      if (typeof target.dragDrop !== 'function') {
        return;
      }

      // Inputs and textareas should be selectable
      if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }

      // For other targets, ask IE
      // to enable drag and drop
      e.preventDefault();
      target.dragDrop();
    }
  }, {
    key: 'window',
    get: function get() {
      if (this.context && this.context.window) {
        return this.context.window;
      } else if (typeof window !== 'undefined') {
        return window;
      }
      return undefined;
    }
  }]);

  return HTML5Backend;
}();

exports.default = HTML5Backend;

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint
   no-plusplus: off,
   no-mixed-operators: off
*/
var MonotonicInterpolant = function () {
  function MonotonicInterpolant(xs, ys) {
    _classCallCheck(this, MonotonicInterpolant);

    var length = xs.length;

    // Rearrange xs and ys so that xs is sorted
    var indexes = [];
    for (var i = 0; i < length; i++) {
      indexes.push(i);
    }
    indexes.sort(function (a, b) {
      return xs[a] < xs[b] ? -1 : 1;
    });

    // Get consecutive differences and slopes
    var dys = [];
    var dxs = [];
    var ms = [];
    var dx = void 0;
    var dy = void 0;
    for (var _i = 0; _i < length - 1; _i++) {
      dx = xs[_i + 1] - xs[_i];
      dy = ys[_i + 1] - ys[_i];
      dxs.push(dx);
      dys.push(dy);
      ms.push(dy / dx);
    }

    // Get degree-1 coefficients
    var c1s = [ms[0]];
    for (var _i2 = 0; _i2 < dxs.length - 1; _i2++) {
      var _m = ms[_i2];
      var mNext = ms[_i2 + 1];
      if (_m * mNext <= 0) {
        c1s.push(0);
      } else {
        dx = dxs[_i2];
        var dxNext = dxs[_i2 + 1];
        var common = dx + dxNext;
        c1s.push(3 * common / ((common + dxNext) / _m + (common + dx) / mNext));
      }
    }
    c1s.push(ms[ms.length - 1]);

    // Get degree-2 and degree-3 coefficients
    var c2s = [];
    var c3s = [];
    var m = void 0;
    for (var _i3 = 0; _i3 < c1s.length - 1; _i3++) {
      m = ms[_i3];
      var c1 = c1s[_i3];
      var invDx = 1 / dxs[_i3];
      var _common = c1 + c1s[_i3 + 1] - m - m;
      c2s.push((m - c1 - _common) * invDx);
      c3s.push(_common * invDx * invDx);
    }

    this.xs = xs;
    this.ys = ys;
    this.c1s = c1s;
    this.c2s = c2s;
    this.c3s = c3s;
  }

  _createClass(MonotonicInterpolant, [{
    key: "interpolate",
    value: function interpolate(x) {
      var xs = this.xs,
          ys = this.ys,
          c1s = this.c1s,
          c2s = this.c2s,
          c3s = this.c3s;

      // The rightmost point in the dataset should give an exact result

      var i = xs.length - 1;
      if (x === xs[i]) {
        return ys[i];
      }

      // Search for the interval x is in, returning the corresponding y if x is one of the original xs
      var low = 0;
      var high = c3s.length - 1;
      var mid = void 0;
      while (low <= high) {
        mid = Math.floor(0.5 * (low + high));
        var xHere = xs[mid];
        if (xHere < x) {
          low = mid + 1;
        } else if (xHere > x) {
          high = mid - 1;
        } else {
          return ys[mid];
        }
      }
      i = Math.max(0, high);

      // Interpolate
      var diff = x - xs[i];
      var diffSq = diff * diff;
      return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
    }
  }]);

  return MonotonicInterpolant;
}();

exports.default = MonotonicInterpolant;

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nativeTypesConfig;

exports.createNativeDragSource = createNativeDragSource;
exports.matchNativeItemType = matchNativeItemType;

var _NativeTypes = __webpack_require__(91);

var NativeTypes = _interopRequireWildcard(_NativeTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
  var result = typesToTry.reduce(function (resultSoFar, typeToTry) {
    return resultSoFar || dataTransfer.getData(typeToTry);
  }, null);

  return result != null ? // eslint-disable-line eqeqeq
  result : defaultValue;
}

var nativeTypesConfig = (_nativeTypesConfig = {}, _defineProperty(_nativeTypesConfig, NativeTypes.FILE, {
  exposeProperty: 'files',
  matchesTypes: ['Files'],
  getData: function getData(dataTransfer) {
    return Array.prototype.slice.call(dataTransfer.files);
  }
}), _defineProperty(_nativeTypesConfig, NativeTypes.URL, {
  exposeProperty: 'urls',
  matchesTypes: ['Url', 'text/uri-list'],
  getData: function getData(dataTransfer, matchesTypes) {
    return getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n');
  }
}), _defineProperty(_nativeTypesConfig, NativeTypes.TEXT, {
  exposeProperty: 'text',
  matchesTypes: ['Text', 'text/plain'],
  getData: function getData(dataTransfer, matchesTypes) {
    return getDataFromDataTransfer(dataTransfer, matchesTypes, '');
  }
}), _nativeTypesConfig);

function createNativeDragSource(type) {
  var _nativeTypesConfig$ty = nativeTypesConfig[type],
      exposeProperty = _nativeTypesConfig$ty.exposeProperty,
      matchesTypes = _nativeTypesConfig$ty.matchesTypes,
      getData = _nativeTypesConfig$ty.getData;


  return function () {
    function NativeDragSource() {
      var _item, _mutatorMap;

      _classCallCheck(this, NativeDragSource);

      this.item = (_item = {}, _mutatorMap = {}, _mutatorMap[exposeProperty] = _mutatorMap[exposeProperty] || {}, _mutatorMap[exposeProperty].get = function () {
        console.warn( // eslint-disable-line no-console
        'Browser doesn\'t allow reading "' + exposeProperty + '" until the drop event.');
        return null;
      }, _defineEnumerableProperties(_item, _mutatorMap), _item);
    }

    _createClass(NativeDragSource, [{
      key: 'mutateItemByReadingDataTransfer',
      value: function mutateItemByReadingDataTransfer(dataTransfer) {
        delete this.item[exposeProperty];
        this.item[exposeProperty] = getData(dataTransfer, matchesTypes);
      }
    }, {
      key: 'canDrag',
      value: function canDrag() {
        return true;
      }
    }, {
      key: 'beginDrag',
      value: function beginDrag() {
        return this.item;
      }
    }, {
      key: 'isDragging',
      value: function isDragging(monitor, handle) {
        return handle === monitor.getSourceId();
      }
    }, {
      key: 'endDrag',
      value: function endDrag() {}
    }]);

    return NativeDragSource;
  }();
}

function matchNativeItemType(dataTransfer) {
  var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);

  return Object.keys(nativeTypesConfig).filter(function (nativeItemType) {
    var matchesTypes = nativeTypesConfig[nativeItemType].matchesTypes;

    return matchesTypes.some(function (t) {
      return dataTransferTypes.indexOf(t) > -1;
    });
  })[0] || null;
}

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNodeClientOffset = getNodeClientOffset;
exports.getEventClientOffset = getEventClientOffset;
exports.getDragPreviewOffset = getDragPreviewOffset;

var _BrowserDetector = __webpack_require__(171);

var _MonotonicInterpolant = __webpack_require__(425);

var _MonotonicInterpolant2 = _interopRequireDefault(_MonotonicInterpolant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint
   no-mixed-operators: off
*/
var ELEMENT_NODE = 1;

function getNodeClientOffset(node) {
  var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;

  if (!el) {
    return null;
  }

  var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top,
      left = _el$getBoundingClient.left;

  return { x: left, y: top };
}

function getEventClientOffset(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}

function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint) {
  // The browsers will use the image intrinsic size under different conditions.
  // Firefox only cares if it's an image, but WebKit also wants it to be detached.
  var isImage = dragPreview.nodeName === 'IMG' && ((0, _BrowserDetector.isFirefox)() || !document.documentElement.contains(dragPreview));
  var dragPreviewNode = isImage ? sourceNode : dragPreview;

  var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
  var offsetFromDragPreview = {
    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
  };

  var sourceWidth = sourceNode.offsetWidth,
      sourceHeight = sourceNode.offsetHeight;
  var anchorX = anchorPoint.anchorX,
      anchorY = anchorPoint.anchorY;


  var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
  var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;

  // Work around @2x coordinate discrepancies in browsers
  if ((0, _BrowserDetector.isSafari)() && isImage) {
    dragPreviewHeight /= window.devicePixelRatio;
    dragPreviewWidth /= window.devicePixelRatio;
  }

  // Interpolate coordinates depending on anchor point
  // If you know a simpler way to do this, let me know
  var interpolantX = new _MonotonicInterpolant2.default([0, 0.5, 1], [
  // Dock to the left
  offsetFromDragPreview.x,
  // Align at the center
  offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
  // Dock to the right
  offsetFromDragPreview.x + dragPreviewWidth - sourceWidth]);
  var interpolantY = new _MonotonicInterpolant2.default([0, 0.5, 1], [
  // Dock to the top
  offsetFromDragPreview.y,
  // Align at the center
  offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
  // Dock to the bottom
  offsetFromDragPreview.y + dragPreviewHeight - sourceHeight]);
  var x = interpolantX.interpolate(anchorX);
  var y = interpolantY.interpolate(anchorY);

  // Work around Safari 8 positioning bug
  if ((0, _BrowserDetector.isSafari)() && isImage) {
    // We'll have to wait for @3x to see if this is entirely correct
    y += (window.devicePixelRatio - 1) * dragPreviewHeight;
  }

  return { x: x, y: y };
}

/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getEmptyImage;
var emptyImage = void 0;
function getEmptyImage() {
  if (!emptyImage) {
    emptyImage = new Image();
    emptyImage.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  }

  return emptyImage;
}

/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEmptyImage = exports.NativeTypes = undefined;
exports.default = createHTML5Backend;

var _HTML5Backend = __webpack_require__(424);

var _HTML5Backend2 = _interopRequireDefault(_HTML5Backend);

var _getEmptyImage = __webpack_require__(428);

var _getEmptyImage2 = _interopRequireDefault(_getEmptyImage);

var _NativeTypes = __webpack_require__(91);

var NativeTypes = _interopRequireWildcard(_NativeTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.NativeTypes = NativeTypes;
exports.getEmptyImage = _getEmptyImage2.default;
function createHTML5Backend(manager) {
  return new _HTML5Backend2.default(manager);
}

/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shallowEqual;
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var hasOwn = Object.prototype.hasOwnProperty;
  for (var i = 0; i < keysA.length; i += 1) {
    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }

    var valA = objA[keysA[i]];
    var valB = objB[keysA[i]];

    if (valA !== valB) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(1);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DragDropContext = __webpack_require__(172);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This class is a React-Component based version of the DragDropContext.
 * This is an alternative to decorating an application component with an ES7 decorator.
 */
var DragDropContextProvider = (_temp = _class = function (_Component) {
  _inherits(DragDropContextProvider, _Component);

  function DragDropContextProvider(props, context) {
    _classCallCheck(this, DragDropContextProvider);

    var _this = _possibleConstructorReturn(this, (DragDropContextProvider.__proto__ || Object.getPrototypeOf(DragDropContextProvider)).call(this, props, context));

    _this.backend = (0, _DragDropContext.unpackBackendForEs5Users)(props.backend);
    return _this;
  }

  _createClass(DragDropContextProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _this2 = this;

      /**
       * This property determines which window global to use for creating the DragDropManager.
       * If a window has been injected explicitly via props, that is used first. If it is available
       * as a context value, then use that, otherwise use the browser global.
       */
      var getWindow = function getWindow() {
        if (_this2.props && _this2.props.window) {
          return _this2.props.window;
        } else if (_this2.context && _this2.context.window) {
          return _this2.context.window;
        } else if (typeof window !== 'undefined') {
          return window;
        }
        return undefined;
      };

      return (0, _DragDropContext.createChildContext)(this.backend, { window: getWindow() });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);

  return DragDropContextProvider;
}(_react.Component), _class.propTypes = {
  backend: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]).isRequired,
  children: _propTypes2.default.element.isRequired,
  window: _propTypes2.default.object }, _class.defaultProps = {
  window: undefined
}, _class.childContextTypes = _DragDropContext.CHILD_CONTEXT_TYPES, _class.displayName = 'DragDropContextProvider', _class.contextTypes = {
  window: _propTypes2.default.object
}, _temp);
exports.default = DragDropContextProvider;

/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = DragLayer;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(71);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _isPlainObject = __webpack_require__(21);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _invariant = __webpack_require__(9);

var _invariant2 = _interopRequireDefault(_invariant);

var _shallowEqual = __webpack_require__(93);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _shallowEqualScalar = __webpack_require__(176);

var _shallowEqualScalar2 = _interopRequireDefault(_shallowEqualScalar);

var _checkDecoratorArguments = __webpack_require__(59);

var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function DragLayer(collect) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _checkDecoratorArguments2.default.apply(undefined, ['DragLayer', 'collect[, options]'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params
  (0, _invariant2.default)(typeof collect === 'function', 'Expected "collect" provided as the first argument to DragLayer ' + 'to be a function that collects props to inject into the component. ', 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', collect);
  (0, _invariant2.default)((0, _isPlainObject2.default)(options), 'Expected "options" provided as the second argument to DragLayer to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', options);

  return function decorateLayer(DecoratedComponent) {
    var _class, _temp;

    var _options$arePropsEqua = options.arePropsEqual,
        arePropsEqual = _options$arePropsEqua === undefined ? _shallowEqualScalar2.default : _options$arePropsEqua;

    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

    var DragLayerContainer = (_temp = _class = function (_Component) {
      _inherits(DragLayerContainer, _Component);

      _createClass(DragLayerContainer, [{
        key: 'getDecoratedComponentInstance',
        value: function getDecoratedComponentInstance() {
          (0, _invariant2.default)(this.child, 'In order to access an instance of the decorated component it can ' + 'not be a stateless component.');
          return this.child;
        }
      }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
          return !arePropsEqual(nextProps, this.props) || !(0, _shallowEqual2.default)(nextState, this.state);
        }
      }]);

      function DragLayerContainer(props, context) {
        _classCallCheck(this, DragLayerContainer);

        var _this = _possibleConstructorReturn(this, (DragLayerContainer.__proto__ || Object.getPrototypeOf(DragLayerContainer)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);

        _this.manager = context.dragDropManager;
        (0, _invariant2.default)(_typeof(_this.manager) === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

        _this.state = _this.getCurrentState();
        return _this;
      }

      _createClass(DragLayerContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.isCurrentlyMounted = true;

          var monitor = this.manager.getMonitor();
          this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleChange);
          this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleChange);

          this.handleChange();
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.isCurrentlyMounted = false;

          this.unsubscribeFromOffsetChange();
          this.unsubscribeFromStateChange();
        }
      }, {
        key: 'handleChange',
        value: function handleChange() {
          if (!this.isCurrentlyMounted) {
            return;
          }

          var nextState = this.getCurrentState();
          if (!(0, _shallowEqual2.default)(nextState, this.state)) {
            this.setState(nextState);
          }
        }
      }, {
        key: 'getCurrentState',
        value: function getCurrentState() {
          var monitor = this.manager.getMonitor();
          return collect(monitor);
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;

          return _react2.default.createElement(DecoratedComponent, _extends({}, this.props, this.state, {
            ref: function ref(child) {
              return _this2.child = child;
            }
          }));
        }
      }]);

      return DragLayerContainer;
    }(_react.Component), _class.DecoratedComponent = DecoratedComponent, _class.displayName = 'DragLayer(' + displayName + ')', _class.contextTypes = {
      dragDropManager: _propTypes2.default.object.isRequired
    }, _temp);


    return (0, _hoistNonReactStatics2.default)(DragLayerContainer, DecoratedComponent);
  };
}

/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DragSource;

var _invariant = __webpack_require__(9);

var _invariant2 = _interopRequireDefault(_invariant);

var _isPlainObject = __webpack_require__(21);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _checkDecoratorArguments = __webpack_require__(59);

var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

var _decorateHandler = __webpack_require__(174);

var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

var _registerSource = __webpack_require__(441);

var _registerSource2 = _interopRequireDefault(_registerSource);

var _createSourceFactory = __webpack_require__(436);

var _createSourceFactory2 = _interopRequireDefault(_createSourceFactory);

var _createSourceMonitor = __webpack_require__(437);

var _createSourceMonitor2 = _interopRequireDefault(_createSourceMonitor);

var _createSourceConnector = __webpack_require__(435);

var _createSourceConnector2 = _interopRequireDefault(_createSourceConnector);

var _isValidType = __webpack_require__(175);

var _isValidType2 = _interopRequireDefault(_isValidType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DragSource(type, spec, collect) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  _checkDecoratorArguments2.default.apply(undefined, ['DragSource', 'type, spec, collect[, options]'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params
  var getType = type;
  if (typeof type !== 'function') {
    (0, _invariant2.default)((0, _isValidType2.default)(type), 'Expected "type" provided as the first argument to DragSource to be ' + 'a string, or a function that returns a string given the current props. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', type);
    getType = function getType() {
      return type;
    };
  }
  (0, _invariant2.default)((0, _isPlainObject2.default)(spec), 'Expected "spec" provided as the second argument to DragSource to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', spec);
  var createSource = (0, _createSourceFactory2.default)(spec);
  (0, _invariant2.default)(typeof collect === 'function', 'Expected "collect" provided as the third argument to DragSource to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', collect);
  (0, _invariant2.default)((0, _isPlainObject2.default)(options), 'Expected "options" provided as the fourth argument to DragSource to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', collect);

  return function decorateSource(DecoratedComponent) {
    return (0, _decorateHandler2.default)({
      connectBackend: function connectBackend(backend, sourceId) {
        return backend.connectDragSource(sourceId);
      },
      containerDisplayName: 'DragSource',
      createHandler: createSource,
      registerHandler: _registerSource2.default,
      createMonitor: _createSourceMonitor2.default,
      createConnector: _createSourceConnector2.default,
      DecoratedComponent: DecoratedComponent,
      getType: getType,
      collect: collect,
      options: options
    });
  };
}

/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropTarget;

var _invariant = __webpack_require__(9);

var _invariant2 = _interopRequireDefault(_invariant);

var _isPlainObject = __webpack_require__(21);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _checkDecoratorArguments = __webpack_require__(59);

var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

var _decorateHandler = __webpack_require__(174);

var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

var _registerTarget = __webpack_require__(442);

var _registerTarget2 = _interopRequireDefault(_registerTarget);

var _createTargetFactory = __webpack_require__(439);

var _createTargetFactory2 = _interopRequireDefault(_createTargetFactory);

var _createTargetMonitor = __webpack_require__(440);

var _createTargetMonitor2 = _interopRequireDefault(_createTargetMonitor);

var _createTargetConnector = __webpack_require__(438);

var _createTargetConnector2 = _interopRequireDefault(_createTargetConnector);

var _isValidType = __webpack_require__(175);

var _isValidType2 = _interopRequireDefault(_isValidType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DropTarget(type, spec, collect) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  _checkDecoratorArguments2.default.apply(undefined, ['DropTarget', 'type, spec, collect[, options]'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params
  var getType = type;
  if (typeof type !== 'function') {
    (0, _invariant2.default)((0, _isValidType2.default)(type, true), 'Expected "type" provided as the first argument to DropTarget to be ' + 'a string, an array of strings, or a function that returns either given ' + 'the current props. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', type);
    getType = function getType() {
      return type;
    };
  }
  (0, _invariant2.default)((0, _isPlainObject2.default)(spec), 'Expected "spec" provided as the second argument to DropTarget to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', spec);
  var createTarget = (0, _createTargetFactory2.default)(spec);
  (0, _invariant2.default)(typeof collect === 'function', 'Expected "collect" provided as the third argument to DropTarget to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', collect);
  (0, _invariant2.default)((0, _isPlainObject2.default)(options), 'Expected "options" provided as the fourth argument to DropTarget to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', collect);

  return function decorateTarget(DecoratedComponent) {
    return (0, _decorateHandler2.default)({
      connectBackend: function connectBackend(backend, targetId) {
        return backend.connectDropTarget(targetId);
      },
      containerDisplayName: 'DropTarget',
      createHandler: createTarget,
      registerHandler: _registerTarget2.default,
      createMonitor: _createTargetMonitor2.default,
      createConnector: _createTargetConnector2.default,
      DecoratedComponent: DecoratedComponent,
      getType: getType,
      collect: collect,
      options: options
    });
  };
}

/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSourceConnector;

var _wrapConnectorHooks = __webpack_require__(177);

var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);

var _areOptionsEqual = __webpack_require__(173);

var _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createSourceConnector(backend) {
  var currentHandlerId = void 0;

  var currentDragSourceNode = void 0;
  var currentDragSourceOptions = void 0;
  var disconnectCurrentDragSource = void 0;

  var currentDragPreviewNode = void 0;
  var currentDragPreviewOptions = void 0;
  var disconnectCurrentDragPreview = void 0;

  function reconnectDragSource() {
    if (disconnectCurrentDragSource) {
      disconnectCurrentDragSource();
      disconnectCurrentDragSource = null;
    }

    if (currentHandlerId && currentDragSourceNode) {
      disconnectCurrentDragSource = backend.connectDragSource(currentHandlerId, currentDragSourceNode, currentDragSourceOptions);
    }
  }

  function reconnectDragPreview() {
    if (disconnectCurrentDragPreview) {
      disconnectCurrentDragPreview();
      disconnectCurrentDragPreview = null;
    }

    if (currentHandlerId && currentDragPreviewNode) {
      disconnectCurrentDragPreview = backend.connectDragPreview(currentHandlerId, currentDragPreviewNode, currentDragPreviewOptions);
    }
  }

  function receiveHandlerId(handlerId) {
    if (handlerId === currentHandlerId) {
      return;
    }

    currentHandlerId = handlerId;
    reconnectDragSource();
    reconnectDragPreview();
  }

  var hooks = (0, _wrapConnectorHooks2.default)({
    dragSource: function connectDragSource(node, options) {
      if (node === currentDragSourceNode && (0, _areOptionsEqual2.default)(options, currentDragSourceOptions)) {
        return;
      }

      currentDragSourceNode = node;
      currentDragSourceOptions = options;

      reconnectDragSource();
    },

    dragPreview: function connectDragPreview(node, options) {
      if (node === currentDragPreviewNode && (0, _areOptionsEqual2.default)(options, currentDragPreviewOptions)) {
        return;
      }

      currentDragPreviewNode = node;
      currentDragPreviewOptions = options;

      reconnectDragPreview();
    }
  });

  return {
    receiveHandlerId: receiveHandlerId,
    hooks: hooks
  };
}

/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createSourceFactory;

var _invariant = __webpack_require__(9);

var _invariant2 = _interopRequireDefault(_invariant);

var _isPlainObject = __webpack_require__(21);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'];
var REQUIRED_SPEC_METHODS = ['beginDrag'];

function createSourceFactory(spec) {
  Object.keys(spec).forEach(function (key) {
    (0, _invariant2.default)(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', ALLOWED_SPEC_METHODS.join(', '), key);
    (0, _invariant2.default)(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
  });
  REQUIRED_SPEC_METHODS.forEach(function (key) {
    (0, _invariant2.default)(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
  });

  var Source = function () {
    function Source(monitor) {
      _classCallCheck(this, Source);

      this.monitor = monitor;
      this.props = null;
      this.component = null;
    }

    _createClass(Source, [{
      key: 'receiveProps',
      value: function receiveProps(props) {
        this.props = props;
      }
    }, {
      key: 'receiveComponent',
      value: function receiveComponent(component) {
        this.component = component;
      }
    }, {
      key: 'canDrag',
      value: function canDrag() {
        if (!spec.canDrag) {
          return true;
        }

        return spec.canDrag(this.props, this.monitor);
      }
    }, {
      key: 'isDragging',
      value: function isDragging(globalMonitor, sourceId) {
        if (!spec.isDragging) {
          return sourceId === globalMonitor.getSourceId();
        }

        return spec.isDragging(this.props, this.monitor);
      }
    }, {
      key: 'beginDrag',
      value: function beginDrag() {
        var item = spec.beginDrag(this.props, this.monitor, this.component);
        if (process.env.NODE_ENV !== 'production') {
          (0, _invariant2.default)((0, _isPlainObject2.default)(item), 'beginDrag() must return a plain object that represents the dragged item. ' + 'Instead received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', item);
        }
        return item;
      }
    }, {
      key: 'endDrag',
      value: function endDrag() {
        if (!spec.endDrag) {
          return;
        }

        spec.endDrag(this.props, this.monitor, this.component);
      }
    }]);

    return Source;
  }();

  return function createSource(monitor) {
    return new Source(monitor);
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createSourceMonitor;

var _invariant = __webpack_require__(9);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isCallingCanDrag = false;
var isCallingIsDragging = false;

var SourceMonitor = function () {
  function SourceMonitor(manager) {
    _classCallCheck(this, SourceMonitor);

    this.internalMonitor = manager.getMonitor();
  }

  _createClass(SourceMonitor, [{
    key: 'receiveHandlerId',
    value: function receiveHandlerId(sourceId) {
      this.sourceId = sourceId;
    }
  }, {
    key: 'canDrag',
    value: function canDrag() {
      (0, _invariant2.default)(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');

      try {
        isCallingCanDrag = true;
        return this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        isCallingCanDrag = false;
      }
    }
  }, {
    key: 'isDragging',
    value: function isDragging() {
      (0, _invariant2.default)(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');

      try {
        isCallingIsDragging = true;
        return this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        isCallingIsDragging = false;
      }
    }
  }, {
    key: 'getItemType',
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: 'getItem',
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: 'getDropResult',
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: 'didDrop',
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: 'getInitialClientOffset',
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: 'getInitialSourceClientOffset',
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: 'getSourceClientOffset',
    value: function getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: 'getClientOffset',
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: 'getDifferenceFromInitialOffset',
    value: function getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);

  return SourceMonitor;
}();

function createSourceMonitor(manager) {
  return new SourceMonitor(manager);
}

/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTargetConnector;

var _wrapConnectorHooks = __webpack_require__(177);

var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);

var _areOptionsEqual = __webpack_require__(173);

var _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createTargetConnector(backend) {
  var currentHandlerId = void 0;

  var currentDropTargetNode = void 0;
  var currentDropTargetOptions = void 0;
  var disconnectCurrentDropTarget = void 0;

  function reconnectDropTarget() {
    if (disconnectCurrentDropTarget) {
      disconnectCurrentDropTarget();
      disconnectCurrentDropTarget = null;
    }

    if (currentHandlerId && currentDropTargetNode) {
      disconnectCurrentDropTarget = backend.connectDropTarget(currentHandlerId, currentDropTargetNode, currentDropTargetOptions);
    }
  }

  function receiveHandlerId(handlerId) {
    if (handlerId === currentHandlerId) {
      return;
    }

    currentHandlerId = handlerId;
    reconnectDropTarget();
  }

  var hooks = (0, _wrapConnectorHooks2.default)({
    dropTarget: function connectDropTarget(node, options) {
      if (node === currentDropTargetNode && (0, _areOptionsEqual2.default)(options, currentDropTargetOptions)) {
        return;
      }

      currentDropTargetNode = node;
      currentDropTargetOptions = options;

      reconnectDropTarget();
    }
  });

  return {
    receiveHandlerId: receiveHandlerId,
    hooks: hooks
  };
}

/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createTargetFactory;

var _invariant = __webpack_require__(9);

var _invariant2 = _interopRequireDefault(_invariant);

var _isPlainObject = __webpack_require__(21);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ALLOWED_SPEC_METHODS = ['canDrop', 'hover', 'drop'];

function createTargetFactory(spec) {
  Object.keys(spec).forEach(function (key) {
    (0, _invariant2.default)(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', ALLOWED_SPEC_METHODS.join(', '), key);
    (0, _invariant2.default)(typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', key, key, spec[key]);
  });

  var Target = function () {
    function Target(monitor) {
      _classCallCheck(this, Target);

      this.monitor = monitor;
      this.props = null;
      this.component = null;
    }

    _createClass(Target, [{
      key: 'receiveProps',
      value: function receiveProps(props) {
        this.props = props;
      }
    }, {
      key: 'receiveMonitor',
      value: function receiveMonitor(monitor) {
        this.monitor = monitor;
      }
    }, {
      key: 'receiveComponent',
      value: function receiveComponent(component) {
        this.component = component;
      }
    }, {
      key: 'canDrop',
      value: function canDrop() {
        if (!spec.canDrop) {
          return true;
        }

        return spec.canDrop(this.props, this.monitor);
      }
    }, {
      key: 'hover',
      value: function hover() {
        if (!spec.hover) {
          return;
        }

        spec.hover(this.props, this.monitor, this.component);
      }
    }, {
      key: 'drop',
      value: function drop() {
        if (!spec.drop) {
          return undefined;
        }

        var dropResult = spec.drop(this.props, this.monitor, this.component);
        if (process.env.NODE_ENV !== 'production') {
          (0, _invariant2.default)(typeof dropResult === 'undefined' || (0, _isPlainObject2.default)(dropResult), 'drop() must either return undefined, or an object that represents the drop result. ' + 'Instead received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', dropResult);
        }
        return dropResult;
      }
    }]);

    return Target;
  }();

  return function createTarget(monitor) {
    return new Target(monitor);
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createTargetMonitor;

var _invariant = __webpack_require__(9);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isCallingCanDrop = false;

var TargetMonitor = function () {
  function TargetMonitor(manager) {
    _classCallCheck(this, TargetMonitor);

    this.internalMonitor = manager.getMonitor();
  }

  _createClass(TargetMonitor, [{
    key: 'receiveHandlerId',
    value: function receiveHandlerId(targetId) {
      this.targetId = targetId;
    }
  }, {
    key: 'canDrop',
    value: function canDrop() {
      (0, _invariant2.default)(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target-monitor.html');

      try {
        isCallingCanDrop = true;
        return this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        isCallingCanDrop = false;
      }
    }
  }, {
    key: 'isOver',
    value: function isOver(options) {
      return this.internalMonitor.isOverTarget(this.targetId, options);
    }
  }, {
    key: 'getItemType',
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: 'getItem',
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: 'getDropResult',
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: 'didDrop',
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: 'getInitialClientOffset',
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: 'getInitialSourceClientOffset',
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: 'getSourceClientOffset',
    value: function getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: 'getClientOffset',
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: 'getDifferenceFromInitialOffset',
    value: function getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);

  return TargetMonitor;
}();

function createTargetMonitor(manager) {
  return new TargetMonitor(manager);
}

/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = registerSource;
function registerSource(type, source, manager) {
  var registry = manager.getRegistry();
  var sourceId = registry.addSource(type, source);

  function unregisterSource() {
    registry.removeSource(sourceId);
  }

  return {
    handlerId: sourceId,
    unregister: unregisterSource
  };
}

/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = registerTarget;
function registerTarget(type, target, manager) {
  var registry = manager.getRegistry();
  var targetId = registry.addTarget(type, target);

  function unregisterTarget() {
    registry.removeTarget(targetId);
  }

  return {
    handlerId: targetId,
    unregister: unregisterTarget
  };
}

/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cloneWithRef;

var _invariant = __webpack_require__(9);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cloneWithRef(element, newRef) {
  var previousRef = element.ref;
  (0, _invariant2.default)(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');

  if (!previousRef) {
    // When there is no ref on the element, use the new ref directly
    return (0, _react.cloneElement)(element, {
      ref: newRef
    });
  }

  return (0, _react.cloneElement)(element, {
    ref: function ref(node) {
      newRef(node);

      if (previousRef) {
        previousRef(node);
      }
    }
  });
}

/***/ }),
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ActionTypes = undefined;
exports['default'] = createStore;

var _isPlainObject = __webpack_require__(21);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = __webpack_require__(536);

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2['default'])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[_symbolObservable2['default']] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
}

/***/ }),
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(537);


/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(538);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(110), __webpack_require__(111)(module)))

/***/ }),
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 539 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(206);


/***/ })
],[539]);
});
//# sourceMappingURL=chess-ctrls.app.js.map