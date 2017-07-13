(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return webpackJsonp([0],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(4);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _login = __webpack_require__(8);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} //you can use import statements, like the one below
//var ReactDom = require("react-dom"); https://codepen.io/markhillard/pen/Hjcwu

var decycle = __webpack_require__(7).decycle;

var MusicApp = function (_React$Component) {
    _inherits(MusicApp, _React$Component);

    function MusicApp(props) {
        _classCallCheck(this, MusicApp);

        var _this = _possibleConstructorReturn(this, (MusicApp.__proto__ || Object.getPrototypeOf(MusicApp)).call(this, props));

        _this.state = {
            isLoggedin: false,
            results: {},
            keys: []
        };
        _this.login = _this.login.bind(_this);
        return _this;
    }

    _createClass(MusicApp, [{
        key: 'login',
        value: function login() {
            var email = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            //{"user": { "email": "test001@test.com",  "password":"passwod1"}}// this is what i want to pass 
            var that = this;
            var user_details = {
                'email': email,
                'password': password
            };
            _jquery2.default.ajax({
                type: 'POST',
                url: '/newuser',
                data: {
                    user: {
                        'email': (0, _jquery2.default)("#username").val(),
                        'password': (0, _jquery2.default)("#password").val()
                    }
                },
                dataType: "json",
                success: function success(result) {
                    var id = result["ops"][0]["_id"];

                    _jquery2.default.ajax({
                        type: 'POST',
                        url: '/checkuser',
                        data: {
                            id: id
                        },
                        success: function success(results) {
                            console.log(results.user.username);
                            var username = results.user.username;
                            _jquery2.default.ajax({
                                type: 'POST',
                                url: '/getdetails',
                                data: {
                                    username: username
                                },
                                success: function success(results) {
                                    console.log(results);
                                    if (results) {
                                        console.log(Object.keys(results));
                                        that.setState({
                                            isLoggedin: true,
                                            results: results
                                            //keys:keys
                                        });
                                    }
                                }
                            });
                        }
                    });
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.isLoggedin) {
                return _react2.default.createElement(_login.Login, { results: this.state.results });
            } else {
                return _react2.default.createElement('div', { className: 'login-box' }, _react2.default.createElement('span', null, 'Username: ', _react2.default.createElement('input', { type: 'text', id: 'username', className: 'text' })), _react2.default.createElement('span', null, 'Password: ', _react2.default.createElement('input', { type: 'password', id: 'password', className: 'text' })), _react2.default.createElement('span', null, _react2.default.createElement('button', { onClick: this.login, className: 'text btn-default' }, 'Login')));
            }
        }
    }]);

    return MusicApp;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(MusicApp, null), document.getElementById("container"));

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\aayushi.sinha\\Documents\\Git Repo\\FCC-App\\public\\js\\music-app.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\aayushi.sinha\\Documents\\Git Repo\\FCC-App\\public\\js\\music-app.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

exports.WeakMap = WeakMap
exports.WeakSet = WeakSet
exports.Set = Set

function isObject (value) {
  return typeof value === 'object' && value != null &&
    !(value instanceof Boolean) &&
    !(value instanceof Date) &&
    !(value instanceof Number) &&
    !(value instanceof RegExp) &&
    !(value instanceof String)
}

function decycle (object) {
  var seen = new exports.WeakSet()
  var paths = new exports.WeakMap()
  
  return function replacer (key, value) {
    if (key !== '$ref' && isObject(value)) {
      if (seen.has(value)) {
        return {$ref: toPointer(paths.get(value))}
      } else {
        paths.set(value, (paths.get(this)||[]).concat([key]))
        seen.add(value)
      }
    }

    return value
  }

  function toPointer (parts) {
    return '#'+parts.map(function(part) {
      return part.toString().replace(/~/g, '~0').replace(/\//g, '~1')
    }).join('/')
  }
}

function retrocycle () {
  var parents = new exports.WeakMap()
  var refs = new exports.Set()

  return function reviver (key, value) {
    if (key === '$ref') {
      refs.add(this)
    } else
    if (isObject(value)) {
      var isRoot = key === '' && Object.keys(this).length === 1
      if (isRoot) {
        refs.forEach(dereference, this)
      } else {
        parents.set(value, this)
      }
    }

    return value
  }

  function dereference (ref) {
    var parts = ref.$ref.slice(1).split('/')
    var key, parent, value = this
    for (var i=0; i<parts.length; i++) {
      key = parts[i].replace(/~1/g, '/').replace(/~0/g, '~')
      value = value[key]
    }
    parent = parents.get(ref)
    parent[key] = value
  }

}

function augment (JSON) {
  return Object.defineProperties(JSON, {
    decycle: {value: decycle},
    retrocycle: {value: retrocycle}
  })
}

exports.decycle = decycle
exports.retrocycle = retrocycle
exports.extend = augment

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Login = function (_React$Component) {
	_inherits(Login, _React$Component);

	function Login() {
		_classCallCheck(this, Login);

		return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
	}

	_createClass(Login, [{
		key: 'render',
		value: function render() {
			var info = this.props.results;

			var List = Object.keys(info).map(function (k, idx) {
				if (idx !== 0) {
					return _react2.default.createElement('div', { className: 'sections', key: idx }, _react2.default.createElement('span', null, k, ' '), _react2.default.createElement('span', null, info[k]));
				}
			});
			return _react2.default.createElement('div', { className: 'box' }, List);
		}
	}]);

	return Login;
}(_react2.default.Component);

module.exports = {
	Login: Login
};

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\aayushi.sinha\\Documents\\Git Repo\\FCC-App\\public\\js\\login.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\aayushi.sinha\\Documents\\Git Repo\\FCC-App\\public\\js\\login.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

},[12]);
});