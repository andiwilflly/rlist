webpackHotUpdaterlistUmd(0,{

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _desc, _value, _class2, _descriptor, _descriptor2, _class3, _temp2;
// MobX

// Models

// Components


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobx = __webpack_require__(4);

var _mobxReact = __webpack_require__(9);

var _rList = __webpack_require__(10);

var _rList2 = _interopRequireDefault(_rList);

var _RListItem = __webpack_require__(30);

var _RListItem2 = _interopRequireDefault(_RListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var RList = (0, _mobxReact.observer)(_class = (_class2 = (_temp2 = _class3 = function (_React$Component) {
	_inherits(RList, _React$Component);

	function RList() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, RList);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RList.__proto__ || Object.getPrototypeOf(RList)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'containerRef', _descriptor, _this), _initDefineProp(_this, 'itemRef', _descriptor2, _this), _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(RList, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			if (!this.containerRef.current) return;

			_rList2.default.update({
				itemWidth: this.itemRef.current.offsetWidth,
				itemHeight: this.itemRef.current.offsetHeight,
				listScrollTop: window.pageYOffset - this.container.top
			});

			window.addEventListener('scroll', function (event) {
				_rList2.default.update({
					listScrollTop: window.pageYOffset - _this2.container.top
				});
			});

			window.addEventListener('resize', function (event) {
				_rList2.default.update({
					itemWidth: _this2.itemRef.current.offsetWidth,
					itemHeight: _this2.itemRef.current.offsetHeight
				});
			});
		}
	}, {
		key: 'chunk',
		value: function chunk(array, chunkSize) {
			return [].concat.apply([], array.map(function (elem, i) {
				return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
			}));
		}
	}, {
		key: 'times',
		value: function times() {
			var _times = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

			var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
			return Array.apply(null, new Array(_times)).map(fn);
		}
	}, {
		key: 'isInRange',
		value: function isInRange(x, min, max) {
			return (x - min) * (x - max) <= 0;
		}
	}, {
		key: 'isRenderPart',
		value: function isRenderPart(partNumber) {
			// rendering of previous, current, next parts in relation to currentVisible part
			return this.isInRange(this.visibleCurrentPart, partNumber - 1, partNumber + 2);
		}
	}, {
		key: 'renderFakeList',
		value: function renderFakeList() {
			return _react2.default.createElement(
				'div',
				{ className: 'r-list', style: { opacity: 0, position: "absolute" } },
				_react2.default.createElement(
					'div',
					{ ref: this.itemRef,
						style: { display: "inline-block" } },
					this.items[0]
				)
			);
		}
	}, {
		key: 'renderParts',
		value: function renderParts() {
			var _this3 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'r-list-parts' },
				this.times(this.partsCount, function (item, partNumber) {
					return _react2.default.createElement(
						'div',
						{ key: partNumber },
						_this3.renderPart(partNumber)
					);
				})
			);
		}
	}, {
		key: 'renderPart',
		value: function renderPart(partNumber) {
			if (!this.isRenderPart(partNumber)) return this.renderPlaceholder();

			console.log({ a: this.containerRef.current });
			console.log(this.container.top);

			return _react2.default.createElement(
				'div',
				{ className: 'r-list-part-' + partNumber },
				this.gameParts[partNumber].map(function (item, index) {
					return _react2.default.createElement(
						_RListItem2.default,
						{ key: index },
						item
					);
				})
			);
		}
	}, {
		key: 'renderPlaceholder',
		value: function renderPlaceholder() {
			return _react2.default.createElement('div', { style: {
					width: this.widthOfPart,
					height: this.heightOfPart,
					background: "transparent"
				} });
		}
	}, {
		key: 'render',
		value: function render() {
			if (!this.props.children) return _react2.default.createElement(
				'div',
				{ className: 'r-list' },
				'empty'
			);

			return _react2.default.createElement(
				'div',
				null,
				this.containerRef.current ? _react2.default.createElement(
					'div',
					{ style: { position: "fixed", bottom: 5, zIndex: "1", right: 5, background: "lightgray", padding: 10 } },
					_react2.default.createElement(
						'p',
						null,
						'listScrollTop: ',
						this.rList.listScrollTop
					),
					_react2.default.createElement(
						'p',
						null,
						'itemWidth: ',
						this.rList.itemWidth
					),
					_react2.default.createElement(
						'p',
						null,
						'itemHeight: ',
						this.rList.itemHeight
					),
					_react2.default.createElement(
						'p',
						null,
						'itemsInRow: ',
						this.itemsInRow
					),
					_react2.default.createElement(
						'p',
						null,
						'widthOfPart: ',
						this.widthOfPart
					),
					_react2.default.createElement(
						'p',
						null,
						'heightOfPart: ',
						this.heightOfPart
					),
					_react2.default.createElement(
						'p',
						null,
						'rowsInPart: ',
						this.rowsInPart
					),
					_react2.default.createElement(
						'p',
						null,
						'itemsInPart: ',
						this.itemsInPart
					),
					_react2.default.createElement(
						'p',
						null,
						'partsCount: ',
						this.partsCount
					),
					_react2.default.createElement(
						'p',
						null,
						'visibleCurrentPart: ',
						this.visibleCurrentPart
					)
				) : null,
				_react2.default.createElement(
					'div',
					{ className: 'r-list', ref: this.containerRef },
					this.containerRef.current ? this.renderParts() : null
				),
				this.renderFakeList()
			);
		}
	}, {
		key: 'rList',
		get: function get() {
			return _rList2.default.rList;
		}
	}, {
		key: 'itemsInRow',
		get: function get() {
			return Math.round(this.containerRef.current.offsetWidth / this.rList.itemWidth);
		}
	}, {
		key: 'widthOfPart',
		get: function get() {
			return this.itemsInRow * this.rList.itemWidth;
		}
	}, {
		key: 'rowsInPart',
		get: function get() {
			return Math.floor(window.innerHeight / this.rList.itemHeight);
		}
	}, {
		key: 'itemsInPart',
		get: function get() {
			return this.rowsInPart * this.itemsInRow;
		}
	}, {
		key: 'heightOfPart',
		get: function get() {
			return this.rowsInPart * this.rList.itemHeight;
		}
	}, {
		key: 'visibleCurrentPart',
		get: function get() {
			var visibleCurrentValue = Math.ceil(this.rList.listScrollTop / this.heightOfPart);
			return visibleCurrentValue > 0 ? visibleCurrentValue : 1;
		}
	}, {
		key: 'container',
		get: function get() {
			return this.containerRef.current.getBoundingClientRect();
		}
	}, {
		key: 'partsCount',
		get: function get() {
			return Math.ceil(this.items.length / this.itemsInPart);
		}
	}, {
		key: 'gameParts',
		get: function get() {
			return this.chunk(this.items, this.itemsInPart);
		}
	}, {
		key: 'items',
		get: function get() {
			return this.props.children.type ? [this.props.children] : this.props.children;
		}
	}]);

	return RList;
}(_react2.default.Component), _class3.displayName = 'RList.component', _class3.propTypes = {}, _temp2), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'containerRef', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return _react2.default.createRef();
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'itemRef', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return _react2.default.createRef();
	}
}), _applyDecoratedDescriptor(_class2.prototype, 'rList', [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, 'rList'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'itemsInRow', [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, 'itemsInRow'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'widthOfPart', [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, 'widthOfPart'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'rowsInPart', [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, 'rowsInPart'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'itemsInPart', [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, 'itemsInPart'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'heightOfPart', [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, 'heightOfPart'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'visibleCurrentPart', [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, 'visibleCurrentPart'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'container', [_mobx.computed], Object.getOwnPropertyDescriptor(_class2.prototype, 'container'), _class2.prototype)), _class2)) || _class;

exports.default = RList;

/***/ })

})
//# sourceMappingURL=0.3a6cb8c4ecb7a4088e0d.hot-update.js.map