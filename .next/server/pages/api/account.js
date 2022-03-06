(function() {
var exports = {};
exports.id = 100;
exports.ids = [100];
exports.modules = {

/***/ 4571:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3886);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_connectDb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8156);


 // Connect db

(0,_utils_connectDb__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;

    case "PUT":
      handlePutRequest(req, res);
      break;

    default:
      res.status(405).send(`Method ${req.method} not allowed`);
  }
});

const handleGetRequest = async (req, res) => {
  if (!("authorization" in req.headers)) {
    return res.status(401).send("No autorization token");
  }

  try {
    const {
      userId
    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(req.headers.authorization, "hjdfhuiklnlkbfcagdahsakjsdjdqw");
    const user = await _models_User__WEBPACK_IMPORTED_MODULE_0__/* .default.findOne */ .Z.findOne({
      _id: userId
    });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(403).send("Invalid token");
  }
};

const handlePutRequest = async (req, res) => {
  const {
    _id,
    role
  } = req.body;
  await _models_User__WEBPACK_IMPORTED_MODULE_0__/* .default.findOneAndUpdate */ .Z.findOneAndUpdate({
    _id
  }, {
    role
  });
  res.status(203).send('User Updated');
};

/***/ }),

/***/ 9722:
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ 5619:
/***/ (function(module) {

"use strict";
module.exports = require("mongoose");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [618], function() { return __webpack_exec__(4571); });
module.exports = __webpack_exports__;

})();