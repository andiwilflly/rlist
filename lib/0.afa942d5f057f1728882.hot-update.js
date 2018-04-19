webpackHotUpdaterlistUmd(0,{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _RList = __webpack_require__(26);

var _RList2 = _interopRequireDefault(_RList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// RList


Object.defineProperty(Array.prototype, 'chunk', {
	value: function value(chunkSize) {
		var array = this;
		return [].concat.apply([], array.map(function (elem, i) {
			return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
		}));
	}
});

var Test = function (_React$Component) {
	_inherits(Test, _React$Component);

	function Test() {
		_classCallCheck(this, Test);

		return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).apply(this, arguments));
	}

	_createClass(Test, [{
		key: 'times',
		value: function times() {
			var _times = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

			var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
			return Array.apply(null, new Array(_times)).map(fn);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ style: { width: "50%", margin: '0 auto' } },
				_react2.default.createElement(
					'div',
					{ style: { height: 200 } },
					'test header'
				),
				'Hello ditch',
				_react2.default.createElement(
					_RList2.default,
					null,
					this.times(30, function (item, index) {
						return _react2.default.createElement(
							'div',
							{ key: index, style: {
									width: "40%",
									height: 100,
									background: 'orange',
									border: '1px solid black'
								} },
							index
						);
					})
				)
			);
		}
	}]);

	return Test;
}(_react2.default.Component);

// Testing


_reactDom2.default.render(_react2.default.createElement(Test, null), document.getElementById('root'));

module.exports = { a: 42 };

/***/ })

})
//# sourceMappingURL=0.afa942d5f057f1728882.hot-update.js.map