webpackHotUpdate_N_E("pages/admin/add-product",{

/***/ "./pages/admin/add-product.js":
/*!************************************!*\
  !*** ./pages/admin/add-product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_fiverr_fiverr_brought_shoponix_dashboard_source_code_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_fiverr_fiverr_brought_shoponix_dashboard_source_code_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_fiverr_fiverr_brought_shoponix_dashboard_source_code_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_fiverr_fiverr_brought_shoponix_dashboard_source_code_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_fiverr_fiverr_brought_shoponix_dashboard_source_code_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_fiverr_fiverr_brought_shoponix_dashboard_source_code_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var _components_App_AdminSidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/_App/AdminSidebar */ "./components/_App/AdminSidebar.js");






var _jsxFileName = "D:\\fiverr\\fiverr\\brought\\shoponix\\dashboard-source-code\\pages\\admin\\add-product.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_fiverr_fiverr_brought_shoponix_dashboard_source_code_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var options = [{
  key: 't-shirt',
  text: 'T-Shirt',
  value: 't-shirt'
}, {
  key: 'fashion',
  text: 'Fashion',
  value: 'fashion'
}, {
  key: 'furniture',
  text: 'Furniture',
  value: 'furniture'
}, {
  key: 'jewelry',
  text: 'Jewelry',
  value: 'jewelry'
}, {
  key: 'book-magazine',
  text: 'Book and Magazine',
  value: 'book-magazine'
}, {
  key: 'electronics',
  text: 'Electronics',
  value: 'electronics'
}, {
  key: 'medical',
  text: 'Medical',
  value: 'medical'
}, {
  key: 'home-decor',
  text: 'Home Decor',
  value: 'home-decor'
}, {
  key: 'grocery',
  text: 'Clothing',
  value: 'grocery'
}, {
  key: 'other',
  text: 'Other',
  value: 'other'
}];
var INITIAL_PRODUCT = {
  name: "",
  price: "",
  productType: "",
  media: "",
  description: ""
};

var AddProduct = function AddProduct(_ref) {
  _s();

  var user = _ref.user;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(INITIAL_PRODUCT),
      _React$useState2 = Object(D_fiverr_fiverr_brought_shoponix_dashboard_source_code_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState, 2),
      product = _React$useState2[0],
      setProduct = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(''),
      _React$useState4 = Object(D_fiverr_fiverr_brought_shoponix_dashboard_source_code_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState3, 2),
      mediaPreview = _React$useState4[0],
      setMediaPreview = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(false),
      _React$useState6 = Object(D_fiverr_fiverr_brought_shoponix_dashboard_source_code_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState5, 2),
      success = _React$useState6[0],
      setSuccess = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(false),
      _React$useState8 = Object(D_fiverr_fiverr_brought_shoponix_dashboard_source_code_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState7, 2),
      loading = _React$useState8[0],
      setLoading = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(true),
      _React$useState10 = Object(D_fiverr_fiverr_brought_shoponix_dashboard_source_code_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState9, 2),
      disabled = _React$useState10[0],
      setDisabled = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState(),
      _React$useState12 = Object(D_fiverr_fiverr_brought_shoponix_dashboard_source_code_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState11, 2),
      error = _React$useState12[0],
      setError = _React$useState12[1];

  react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(function () {
    var isProduct = Object.values(product).every(function (el) {
      return Boolean(el);
    });
    isProduct ? setDisabled(false) : setDisabled(true);
  }, [product]);

  var handleChanhe = function handleChanhe(e) {
    // console.log(d.value)
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value,
        files = _e$target.files;

    if (name === 'media') {
      setProduct(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          media: files[0]
        });
      });
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {
      setProduct(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, Object(D_fiverr_fiverr_brought_shoponix_dashboard_source_code_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, name, value));
      });
    } // console.log(product);

  };

  var handleImageUpload = /*#__PURE__*/function () {
    var _ref2 = Object(D_fiverr_fiverr_brought_shoponix_dashboard_source_code_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_fiverr_fiverr_brought_shoponix_dashboard_source_code_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var data, response, mediaUrl;
      return D_fiverr_fiverr_brought_shoponix_dashboard_source_code_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = new FormData();
              data.append('file', product.media);
              data.append('upload_preset', 'vikings');
              data.append('cloud_name', 'dev-empty');
              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("https://api.cloudinary.com/v1_1/dev-empty/image/upload", data);

            case 6:
              response = _context.sent;
              mediaUrl = response.data.url;
              return _context.abrupt("return", mediaUrl);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleImageUpload() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleSelectInput = function handleSelectInput(e, d) {
    setProduct(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        productType: d.value
      });
    });
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = Object(D_fiverr_fiverr_brought_shoponix_dashboard_source_code_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_fiverr_fiverr_brought_shoponix_dashboard_source_code_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {
      var imageUrl, mediaUrl, url, name, price, description, productType, payload, response;
      return D_fiverr_fiverr_brought_shoponix_dashboard_source_code_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault(); // console.log(product)

              _context2.prev = 1;
              setLoading(true);
              setError('');
              _context2.next = 6;
              return handleImageUpload();

            case 6:
              imageUrl = _context2.sent;
              // console.log(imageUrl)
              mediaUrl = imageUrl.replace(/^http:\/\//i, 'https://'); // console.log(mediaUrl)

              url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_8__["default"], "/api/product");
              name = product.name, price = product.price, description = product.description, productType = product.productType;
              payload = {
                name: name,
                price: price,
                description: description,
                productType: productType,
                mediaUrl: mediaUrl
              };
              _context2.next = 13;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(url, payload);

            case 13:
              response = _context2.sent;
              // console.log(response)
              setLoading(false); // console.log({response})

              setProduct(INITIAL_PRODUCT);
              setSuccess(true);
              _context2.next = 22;
              break;

            case 19:
              _context2.prev = 19;
              _context2.t0 = _context2["catch"](1);
              Object(_utils_catchErrors__WEBPACK_IMPORTED_MODULE_9__["default"])(_context2.t0, setError);

            case 22:
              _context2.prev = 22;
              setLoading(false);
              return _context2.finish(22);

            case 25:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 19, 22, 25]]);
    }));

    return function handleSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_App_AdminSidebar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    user: user,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "create-new-products-area",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
        as: "h2",
        block: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
          name: "add",
          color: "orange"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, _this), "Create a New Product"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"], {
        loading: loading,
        success: success,
        error: Boolean(error),
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Message"], {
          error: true,
          header: "Oops!",
          content: error
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Message"], {
          success: true,
          icon: "check",
          header: "Success!",
          content: "Your product has been submitted"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
          widths: "equal",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, {
            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"],
            name: "name",
            label: "Name",
            placeholder: "Name",
            value: product.name,
            onChange: handleChanhe
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, {
            control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"],
            name: "price",
            label: "Price",
            placeholder: "Price",
            min: "0.00",
            step: "0.01",
            type: "number",
            value: product.price,
            onChange: handleChanhe
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Select, {
            name: "type",
            label: "Type",
            options: options,
            placeholder: "Type",
            onChange: handleSelectInput
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, {
          control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"],
          name: "media",
          type: "file",
          label: "Media",
          accept: "image/*",
          content: "Select Image",
          onChange: handleChanhe
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Image"], {
          src: mediaPreview,
          rounded: true,
          centered: true,
          size: "small"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, {
          control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["TextArea"],
          name: "description",
          label: "Description",
          placeholder: "Description",
          value: product.description,
          onChange: handleChanhe
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Form"].Field, {
          control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"],
          disabled: disabled || loading,
          color: "green",
          icon: "pencil alternate",
          content: "Submit",
          type: "submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 9
  }, _this);
};

_s(AddProduct, "kzf3NMJqRRBJO7dsINoEB/91VrA=");

_c = AddProduct;
/* harmony default export */ __webpack_exports__["default"] = (AddProduct);

var _c;

$RefreshReg$(_c, "AddProduct");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vYWRkLXByb2R1Y3QuanMiXSwibmFtZXMiOlsib3B0aW9ucyIsImtleSIsInRleHQiLCJ2YWx1ZSIsIklOSVRJQUxfUFJPRFVDVCIsIm5hbWUiLCJwcmljZSIsInByb2R1Y3RUeXBlIiwibWVkaWEiLCJkZXNjcmlwdGlvbiIsIkFkZFByb2R1Y3QiLCJ1c2VyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwibWVkaWFQcmV2aWV3Iiwic2V0TWVkaWFQcmV2aWV3Iiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJlcnJvciIsInNldEVycm9yIiwidXNlRWZmZWN0IiwiaXNQcm9kdWN0IiwiT2JqZWN0IiwidmFsdWVzIiwiZXZlcnkiLCJlbCIsIkJvb2xlYW4iLCJoYW5kbGVDaGFuaGUiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJwcmV2U3RhdGUiLCJ3aW5kb3ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJoYW5kbGVJbWFnZVVwbG9hZCIsImRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImF4aW9zIiwicG9zdCIsInByb2Nlc3MiLCJyZXNwb25zZSIsIm1lZGlhVXJsIiwidXJsIiwiaGFuZGxlU2VsZWN0SW5wdXQiLCJkIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJpbWFnZVVybCIsInJlcGxhY2UiLCJiYXNlVXJsIiwicGF5bG9hZCIsImNhdGNoRXJyb3JzIiwiSW5wdXQiLCJUZXh0QXJlYSIsIkJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRyxDQUNaO0FBQUVDLEtBQUcsRUFBRSxTQUFQO0FBQWtCQyxNQUFJLEVBQUUsU0FB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akIsWUFBWjtBQUEwQixpQkFBTyxNQUFqQztBQUFtQyxrQkFBUSxNQUEzQztBQUE0QyxjQUFJLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsREosZUFtREkscUVBQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQ0ksaUJBQU8sRUFBRTZDLDBEQURiO0FBRUksY0FBSSxFQUFDLGFBRlQ7QUFHSSxlQUFLLEVBQUMsYUFIVjtBQUlJLHFCQUFXLEVBQUMsYUFKaEI7QUFLSSxlQUFLLEVBQUUvQyxPQUFPLENBQUNMLFdBTG5CO0FBTUksa0JBQVEsRUFBRXdCO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuREosZUEyREkscUVBQUMsc0RBQUQsQ0FBTSxLQUFOO0FBQ0ksaUJBQU8sRUFBRTZCLHdEQURiO0FBRUksa0JBQVEsRUFBRXhDLFFBQVEsSUFBSUYsT0FGMUI7QUFHSSxlQUFLLEVBQUMsT0FIVjtBQUlJLGNBQUksRUFBQyxrQkFKVDtBQUtJLGlCQUFPLEVBQUMsUUFMWjtBQU1JLGNBQUksRUFBQztBQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0RKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQThFSCxDQWhKRDs7R0FBTVYsVTs7S0FBQUEsVTtBQWtKU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vYWRkLXByb2R1Y3QuMDgyMmE4OTk2MzFhNWZjOGRhMjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBcbiAgICBGb3JtLCBcbiAgICBJbnB1dCwgXG4gICAgVGV4dEFyZWEsIFxuICAgIEJ1dHRvbiwgXG4gICAgSW1hZ2UsIFxuICAgIE1lc3NhZ2UsIFxuICAgIEhlYWRlciwgXG4gICAgSWNvbixcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBiYXNlVXJsIGZyb20gJy4uLy4uL3V0aWxzL2Jhc2VVcmwnO1xuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gJy4uLy4uL3V0aWxzL2NhdGNoRXJyb3JzJztcbmltcG9ydCBBZG1pblNpZGViYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9fQXBwL0FkbWluU2lkZWJhcic7XG5cbmNvbnN0IG9wdGlvbnMgPSBbXG4gICAgeyBrZXk6ICd0LXNoaXJ0JywgdGV4dDogJ1QtU2hpcnQnLCB2YWx1ZTogJ3Qtc2hpcnQnIH0sXG4gICAgeyBrZXk6ICdmYXNoaW9uJywgdGV4dDogJ0Zhc2hpb24nLCB2YWx1ZTogJ2Zhc2hpb24nIH0sXG4gICAgeyBrZXk6ICdmdXJuaXR1cmUnLCB0ZXh0OiAnRnVybml0dXJlJywgdmFsdWU6ICdmdXJuaXR1cmUnIH0sXG4gICAgeyBrZXk6ICdqZXdlbHJ5JywgdGV4dDogJ0pld2VscnknLCB2YWx1ZTogJ2pld2VscnknIH0sXG4gICAgeyBrZXk6ICdib29rLW1hZ2F6aW5lJywgdGV4dDogJ0Jvb2sgYW5kIE1hZ2F6aW5lJywgdmFsdWU6ICdib29rLW1hZ2F6aW5lJyB9LFxuICAgIHsga2V5OiAnZWxlY3Ryb25pY3MnLCB0ZXh0OiAnRWxlY3Ryb25pY3MnLCB2YWx1ZTogJ2VsZWN0cm9uaWNzJyB9LFxuICAgIHsga2V5OiAnbWVkaWNhbCcsIHRleHQ6ICdNZWRpY2FsJywgdmFsdWU6ICdtZWRpY2FsJyB9LFxuICAgIHsga2V5OiAnaG9tZS1kZWNvcicsIHRleHQ6ICdIb21lIERlY29yJywgdmFsdWU6ICdob21lLWRlY29yJyB9LFxuICAgIHsga2V5OiAnZ3JvY2VyeScsIHRleHQ6ICdDbG90aGluZycsIHZhbHVlOiAnZ3JvY2VyeScgfSxcbiAgICB7IGtleTogJ290aGVyJywgdGV4dDogJ090aGVyJywgdmFsdWU6ICdvdGhlcicgfSxcbl1cblxuY29uc3QgSU5JVElBTF9QUk9EVUNUID0ge1xuICAgIG5hbWU6IFwiXCIsXG4gICAgcHJpY2U6IFwiXCIsXG4gICAgcHJvZHVjdFR5cGU6IFwiXCIsXG4gICAgbWVkaWE6IFwiXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCJcbn07XG5cbmNvbnN0IEFkZFByb2R1Y3QgPSAoe3VzZXJ9KSA9PiB7XG4gICAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gUmVhY3QudXNlU3RhdGUoSU5JVElBTF9QUk9EVUNUKTtcblxuICAgIGNvbnN0IFttZWRpYVByZXZpZXcsIHNldE1lZGlhUHJldmlld10gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGUoKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzUHJvZHVjdCA9IE9iamVjdC52YWx1ZXMocHJvZHVjdCkuZXZlcnkoZWwgPT4gQm9vbGVhbihlbCkpO1xuICAgICAgICBpc1Byb2R1Y3QgPyBzZXREaXNhYmxlZChmYWxzZSkgOiBzZXREaXNhYmxlZCh0cnVlKTtcbiAgICB9LCBbcHJvZHVjdF0pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmhlID0gZSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGQudmFsdWUpXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUsIGZpbGVzIH0gPSBlLnRhcmdldDtcbiAgICAgICAgaWYobmFtZSA9PT0gJ21lZGlhJyl7XG4gICAgICAgICAgICBzZXRQcm9kdWN0KHByZXZTdGF0ZSA9PiAoeyAuLi5wcmV2U3RhdGUsIG1lZGlhOiBmaWxlc1swXX0pKVxuICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3KHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRQcm9kdWN0KHByZXZTdGF0ZSA9PiAoeyAuLi5wcmV2U3RhdGUsIFtuYW1lXTogdmFsdWUgfSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUltYWdlVXBsb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgcHJvZHVjdC5tZWRpYSk7XG4gICAgICAgIGRhdGEuYXBwZW5kKCd1cGxvYWRfcHJlc2V0JywgJ3Zpa2luZ3MnKTtcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2Nsb3VkX25hbWUnLCAnZGV2LWVtcHR5Jyk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChwcm9jZXNzLmVudi5DTE9VRElOQVJZX1VSTCwgZGF0YSk7XG4gICAgICAgIGNvbnN0IG1lZGlhVXJsID0gcmVzcG9uc2UuZGF0YS51cmw7XG4gICAgICAgIHJldHVybiBtZWRpYVVybDtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTZWxlY3RJbnB1dCA9IChlLCBkKSA9PiB7XG4gICAgICAgIHNldFByb2R1Y3QocHJldlN0YXRlID0+ICh7Li4ucHJldlN0YXRlLCBwcm9kdWN0VHlwZTogZC52YWx1ZX0pKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0KVxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgc2V0RXJyb3IoJycpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSBhd2FpdCBoYW5kbGVJbWFnZVVwbG9hZCgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW1hZ2VVcmwpXG4gICAgICAgICAgICBjb25zdCBtZWRpYVVybCA9IGltYWdlVXJsLnJlcGxhY2UoL15odHRwOlxcL1xcLy9pLCAnaHR0cHM6Ly8nKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1lZGlhVXJsKVxuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7YmFzZVVybH0vYXBpL3Byb2R1Y3RgO1xuICAgICAgICAgICAgY29uc3QgeyBuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24sIHByb2R1Y3RUeXBlIH0gPSBwcm9kdWN0O1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHsgbmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBwcm9kdWN0VHlwZSwgbWVkaWFVcmwgfTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCh1cmwsIHBheWxvYWQpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHtyZXNwb25zZX0pXG4gICAgICAgICAgICBzZXRQcm9kdWN0KElOSVRJQUxfUFJPRFVDVCk7XG4gICAgICAgICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgICB9IGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIGNhdGNoRXJyb3JzKGVycm9yLCBzZXRFcnJvcik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBZG1pblNpZGViYXIgdXNlcj17dXNlcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1uZXctcHJvZHVjdHMtYXJlYVwiPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgYXM9XCJoMlwiIGJsb2NrPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiYWRkXCIgY29sb3I9XCJvcmFuZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICBDcmVhdGUgYSBOZXcgUHJvZHVjdFxuICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxGb3JtIGxvYWRpbmc9e2xvYWRpbmd9IHN1Y2Nlc3M9e3N1Y2Nlc3N9IGVycm9yPXtCb29sZWFuKGVycm9yKX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIk9vcHMhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2Vycm9yfVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNoZWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIlN1Y2Nlc3MhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJZb3VyIHByb2R1Y3QgaGFzIGJlZW4gc3VibWl0dGVkXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPVwiZXF1YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0lucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmhlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0lucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwiMC4wMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuaGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdUeXBlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdElucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0lucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWVkaWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiU2VsZWN0IEltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuaGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e21lZGlhUHJldmlld30gcm91bmRlZCAgY2VudGVyZWQgc2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtUZXh0QXJlYX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmhlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e0J1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCBsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGVuY2lsIGFsdGVybmF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiU3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0FkbWluU2lkZWJhcj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRQcm9kdWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==