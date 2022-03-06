(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4738:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Index/Banner.js




const Banner = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "grocery-main-banner",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "grocery-banner-content",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "Designers Delivered in 1 Hour"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Look Awesome on Every Items Purchased"
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "50% OFF"
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/products?term=grocery",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "default-btn",
          children: "Shop Now"
        })
      })]
    })
  });
};

/* harmony default export */ var Index_Banner = (Banner);
;// CONCATENATED MODULE: ./components/Index/CategoryBanner.js




const CategoryBanner = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "grocery-categories-banner-area",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "ui grid",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "four wide column",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "single-grocery-categories-box",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "https://res.cloudinary.com/rangelinks-tech/image/upload/v1646529901/bruno-kelzer-LvySG1hvuzI-unsplash_yd8jvy.jpg",
            alt: "category"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "50% OFF"
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: "Women Clothings"
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/products?term=grocery",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "default-btn",
                children: "Shop Now"
              })
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "four wide column",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "single-grocery-categories-box",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "https://res.cloudinary.com/rangelinks-tech/image/upload/v1646529901/bruno-kelzer-LvySG1hvuzI-unsplash_yd8jvy.jpg",
            alt: "category"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "40% OFF"
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: "Men Clothings"
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/products?term=grocery",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "default-btn",
                children: "Shop Now"
              })
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "four wide column",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "single-grocery-categories-box",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "https://res.cloudinary.com/rangelinks-tech/image/upload/v1646529901/bruno-kelzer-LvySG1hvuzI-unsplash_yd8jvy.jpg",
            alt: "category"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "30% OFF"
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: "Baby Clothings"
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/products?term=grocery",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "default-btn",
                children: "Shop Now"
              })
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "four wide column",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "single-grocery-categories-box",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "https://res.cloudinary.com/rangelinks-tech/image/upload/v1646529901/bruno-kelzer-LvySG1hvuzI-unsplash_yd8jvy.jpg",
            alt: "category"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "20% OFF"
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: "Children Wears"
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/products?term=grocery",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "default-btn",
                children: "Shop Now"
              })
            })]
          })]
        })
      })]
    })
  });
};

/* harmony default export */ var Index_CategoryBanner = (CategoryBanner);
;// CONCATENATED MODULE: ./components/Index/HotProducts.js




const HotProducts = ({
  products
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "grocery-products-area",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "section-title",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "sub-title",
        children: "Products"
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Our Hot Products"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "ui centered stackable four cards",
      children: products.map(product => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/product/[id]",
        as: `/product/${product._id}`,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: "ui green fluid card single-grocery-products-box",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "image",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: product.mediaUrl,
              alt: product.name
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "header",
              children: product.name
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "meta",
              children: ["$", product.price]
            })]
          })]
        })
      }, product._id))
    })]
  });
};

/* harmony default export */ var Index_HotProducts = (HotProducts);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(4953);
;// CONCATENATED MODULE: ./pages/index.js









const Fashion = ({
  products
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Index_Banner, {}), /*#__PURE__*/jsx_runtime_.jsx(Index_CategoryBanner, {}), /*#__PURE__*/jsx_runtime_.jsx(Index_HotProducts, {
      products: products
    })]
  });
};

Fashion.getInitialProps = async ctx => {
  // console.log(ctx.query)
  const page = ctx.query.page ? ctx.query.page : "1";
  const size = 8;
  const searchTerm = "grocery"; // fetch data on server

  const url = `${baseUrl/* default */.Z}/api/products`;
  const payload = {
    params: {
      page,
      size,
      searchTerm
    }
  };
  const response = await external_axios_default().get(url, payload); // return response data as an object

  return response.data; // note: this object will be merge with existing props
};

/* harmony default export */ var pages = (Fashion);

/***/ }),

/***/ 4953:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const baseUrl =  true ? 'http://localhost:3000' : 0; // : 'https://shoponix.envytheme.com'; 

/* harmony default export */ __webpack_exports__["Z"] = (baseUrl);

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(4738); });
module.exports = __webpack_exports__;

})();