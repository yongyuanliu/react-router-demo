/*! For license information please see auth-bundle.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./auth/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");\n/* harmony import */ var _pages_app_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/app/index */ "./auth/pages/app/index.js");\n\n\n\n\nvar reactRoot = document.querySelector("#react_root");\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_app_index__WEBPACK_IMPORTED_MODULE_2__["default"], null)), reactRoot);\n\n//# sourceURL=webpack://react-router-demo/./auth/index.js?')},"./auth/pages/app/auth.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "fakeAuthProvider": () => (/* binding */ fakeAuthProvider)\n/* harmony export */ });\n/**\r\n * This represents some generic auth provider API, like Firebase.\r\n */\nvar fakeAuthProvider = {\n  isAuthenticated: false,\n  signin: function signin(callback) {\n    fakeAuthProvider.isAuthenticated = true;\n    setTimeout(callback, 100);\n  },\n  signout: function signout(callback) {\n    fakeAuthProvider.isAuthenticated = false;\n    setTimeout(callback, 100);\n  }\n};\n\n\n//# sourceURL=webpack://react-router-demo/./auth/pages/app/auth.js?')},"./auth/pages/app/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth */ "./auth/pages/app/auth.js");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n/**\r\n * react\r\n */\n\n\n\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);\n\n    return _super.apply(this, arguments);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{\n    key: "render",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(AuthProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h1", null, "Auth Example"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("p", null, "This example demonstrates a simple login flow with three pages: a public page, a protected page, and a login page. In order to see the protected page, you must first login. Pretty standard stuff."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("p", null, "First, visit the public page. Then, visit the protected page. You\'re not yet logged in, so you are redirected to the login page. After you login, you are redirected back to the protected page."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("p", null, "Notice the URL change each time. If you click the back button at this point, would you expect to go back to the login page? No! You\'re already logged in. Try it out, and you\'ll see you go back to the page you visited just *before* logging in, the public page."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(Layout, null)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n        path: "/",\n        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(PublicPage, null)\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n        path: "/login",\n        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(LoginPage, null)\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n        path: "/protected",\n        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(RequireAuth, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(ProtectedPage, null))\n      }))));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_6__.Component);\n\nfunction Layout() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(AuthStatus, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {\n    to: "/"\n  }, "Public Page")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {\n    to: "/protected"\n  }, "protected"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Outlet, null));\n}\n/**\r\n * 鉴权上下文类型\r\n */\n\n\nvar AuthContextType = function AuthContextType(user, signin, signout) {\n  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AuthContextType);\n\n  this.user = user;\n  this.signin = signin;\n  this.signout = signout;\n};\n\nvar AuthContext = react__WEBPACK_IMPORTED_MODULE_6__.createContext < AuthContextType > null;\n/**\r\n * 使用 React.createContext 创建自定义的鉴权上下文类型\r\n */\n\nfunction useAuth() {\n  return react__WEBPACK_IMPORTED_MODULE_6__.useContext(AuthContext);\n}\n/**\r\n * 权限状态\r\n */\n\n\nfunction AuthStatus() {\n  var auth = useAuth();\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();\n\n  if (!auth.user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("p", null, "You are not logged in.");\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("p", null, "Welcome ", auth.user, "!", "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("button", {\n    onClick: function onClick() {\n      auth.signout(function () {\n        return navigate("/");\n      });\n    }\n  }, "Sign out"));\n}\n/**\r\n * 看不懂\r\n * @param {*} children \r\n * @returns \r\n */\n\n\nfunction AuthProvider(children) {\n  var _ref = react__WEBPACK_IMPORTED_MODULE_6__.useState < Object > null,\n      _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),\n      user = _ref2[0],\n      setUser = _ref2[1];\n\n  var signin = function signin(newUser, callback) {\n    return _auth__WEBPACK_IMPORTED_MODULE_7__.fakeAuthProvider.signin(function () {\n      setUser(newUser);\n      callback();\n    });\n  };\n\n  var signout = function signout(callback) {\n    return _auth__WEBPACK_IMPORTED_MODULE_7__.fakeAuthProvider.signout(function () {\n      setUser(null);\n      callback();\n    });\n  };\n\n  var value = {\n    user: user,\n    signin: signin,\n    signout: signout\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(AuthContext.Provider, {\n    value: value\n  }, children);\n}\n\nfunction RequireAuth(children) {\n  var auth = useAuth();\n  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useLocation)();\n\n  if (!auth.user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Navigate, {\n      to: "/login",\n      state: {\n        from: location\n      }\n    });\n  }\n\n  return children;\n}\n/**\r\n * 登录页面,执行登录逻辑,提交表单\r\n * 向 react 上下文提交登录用户\r\n * @returns \r\n */\n\n\nfunction LoginPage() {\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();\n  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useLocation)();\n  var auth = useAuth();\n  var from = location.state.from.pathname || "/";\n\n  function handleSubmit(event) {\n    event.preventDefault();\n    var formData = new FormData(event.currentTarget);\n    var username = formData.get("username");\n    auth.signin(username, function () {\n      navigate(from, {\n        replace: true\n      });\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("p", null, "You must log in to view the page at ", from), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("form", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("label", null, "Username: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("input", {\n    name: "username",\n    type: "text"\n  })), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("button", {\n    type: "submit"\n  }, "Login")));\n}\n\nfunction PublicPage() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h3", null, "Public");\n}\n\nfunction ProtectedPage() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("h3", null, "Protected");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://react-router-demo/./auth/pages/app/index.js?')}},__webpack_module_cache__={},deferred;function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_](r,r.exports,__webpack_require__),r.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(_,e,r,t)=>{if(!e){var n=1/0;for(c=0;c<deferred.length;c++){for(var[e,r,t]=deferred[c],a=!0,u=0;u<e.length;u++)(!1&t||n>=t)&&Object.keys(__webpack_require__.O).every((_=>__webpack_require__.O[_](e[u])))?e.splice(u--,1):(a=!1,t<n&&(n=t));if(a){deferred.splice(c--,1);var o=r();void 0!==o&&(_=o)}}return _}t=t||0;for(var c=deferred.length;c>0&&deferred[c-1][2]>t;c--)deferred[c]=deferred[c-1];deferred[c]=[e,r,t]},__webpack_require__.d=(_,e)=>{for(var r in e)__webpack_require__.o(e,r)&&!__webpack_require__.o(_,r)&&Object.defineProperty(_,r,{enumerable:!0,get:e[r]})},__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e),__webpack_require__.r=_=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})},(()=>{var _={auth:0};__webpack_require__.O.j=e=>0===_[e];var e=(e,r)=>{var t,n,[a,u,o]=r,c=0;if(a.some((e=>0!==_[e]))){for(t in u)__webpack_require__.o(u,t)&&(__webpack_require__.m[t]=u[t]);if(o)var l=o(__webpack_require__)}for(e&&e(r);c<a.length;c++)n=a[c],__webpack_require__.o(_,n)&&_[n]&&_[n][0](),_[a[c]]=0;return __webpack_require__.O(l)},r=self.webpackChunkreact_router_demo=self.webpackChunkreact_router_demo||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var __webpack_exports__=__webpack_require__.O(void 0,["commons","react"],(()=>__webpack_require__("./auth/index.js")));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();