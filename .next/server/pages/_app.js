(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9485:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(5998);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1347);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/_App/Footer.js






const Footer = ({
  user
}) => {
  const router = (0,router_.useRouter)(); // console.log(user)

  const isRoot = user && user.role == 'root';
  const isAdmin = user && user.role == 'admin'; // const isRootOrAdmin = isRoot || isAdmin;

  const isActive = route => {
    return route == router.pathname;
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
      className: "footer-area",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ui grid",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "four wide column",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "single-footer-widget",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: "About The Store"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "about-the-store",
              children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "The Store at FwithH is an original voice, and one of the leading shopping destinations in New York City, offering a curated selection of well-executed contemporary artist-made objects and jewelry."
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "four wide column",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "single-footer-widget pl-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: "Quick Links"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "quick-links",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/about",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "About Us"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/products",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Shop Now!"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/products",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Cart"
                  })
                })
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "four wide column",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "single-footer-widget",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: "Support Links"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "customer-support",
              children: [user ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/profile",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "My Profile"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/my-orders-history",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "My Orders History"
                    })
                  })
                })]
              }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/auth/signup",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Signup"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: "/auth/login",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "Login"
                    })
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Home"
                  })
                })
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "four wide column",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "single-footer-widget",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: "Contact Info"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "footer-contact-info",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  target: "_blank",
                  children: "Wonder Street, USA, New York"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "tel:+01321654214",
                  children: "+01 321 654 214"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "mailto:hello@FwithH.com",
                  children: "hello@fwithH.com"
                })
              })]
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "footer-bottom-area",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: ["Copyright \xA9 2020 ", /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "/",
            children: "FwithH"
          }), " Designed By ", /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#0",
            target: "_blank",
            children: "Rangelinks Tech"
          }), " | All rights reserved."]
        })
      })]
    })
  });
};

/* harmony default export */ var _App_Footer = (Footer);
;// CONCATENATED MODULE: ./components/_App/GoTop.js



const GoTop = props => {
  const [thePosition, setThePosition] = external_react_default().useState(false);
  const timeoutRef = external_react_default().useRef(null);
  external_react_default().useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current);
    }

    window.scroll(0, window.pageYOffset - props.scrollStepInPx);
  };

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, props.delayInMs);
  };

  const renderGoTopIcon = () => {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `go-top ${thePosition ? 'active' : ''}`,
      onClick: scrollToTop,
      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "arrow alternate circle up outline icon"
      })
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
    children: renderGoTopIcon()
  });
};

/* harmony default export */ var _App_GoTop = (GoTop);
;// CONCATENATED MODULE: external "nprogress"
var external_nprogress_namespaceObject = require("nprogress");;
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: ./utils/auth.js
var auth = __webpack_require__(6478);
;// CONCATENATED MODULE: ./components/_App/StaticHeader.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







(router_default()).onRouteChangeStart = () => external_nprogress_default().start();

(router_default()).onRouteChangeComplete = () => external_nprogress_default().done();

(router_default()).onRouteChangeError = () => external_nprogress_default().done();

const StaticHeader = ({
  user
}) => {
  const router = (0,router_.useRouter)();
  const [menuActive, setMenuActive] = external_react_default().useState(false);
  const [search, setSearch] = external_react_default().useState({
    search: ''
  }); // console.log(user)

  const isRoot = user && user.role == 'root';
  const isAdmin = user && user.role == 'admin';
  const isRootOrAdmin = isRoot || isAdmin;

  const isActive = route => {
    return route == router.pathname;
  };

  const handleOnChange = e => {
    const {
      name,
      value
    } = e.target;
    setSearch(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [name]: value
    }));
  };

  const handleSearch = e => {
    router_default().push({
      pathname: '/products',
      query: {
        term: search.search
      }
    });
  };

  const menuToggle = () => {
    setMenuActive(!menuActive);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "ui grid navbar-area",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "computer tablet only row",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ui inverted fixed menu navbar page grid",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: `item ${isActive('/') ? 'active' : null}`,
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "home icon"
            }), "Home"]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ui simple dropdown item",
          children: ["Home Pages", /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "dropdown icon"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "menu",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: `item ${isActive('/') ? 'active' : null}`,
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "shopping basket icon"
                }), "Clothing"]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/covid19",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: `item ${isActive('/covid19') ? 'active' : null}`,
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "medrt icon"
                }), "Covid-19 Landing"]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/furniture",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: `item ${isActive('/furniture') ? 'active' : null}`,
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "won icon"
                }), "Furniture Landing"]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/electronics",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: `item ${isActive('/electronics') ? 'active' : null}`,
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "television icon"
                }), "Electronics Landing"]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/fashion",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: `item ${isActive('/fashion') ? 'active' : null}`,
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "braille icon"
                }), "Fashion Landing"]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/jewelry",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: `item ${isActive('/jewelry') ? 'active' : null}`,
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "certificate icon"
                }), "Jewelry Landing"]
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ui simple dropdown item",
          children: ["Products", /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "dropdown icon"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "menu",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/products?term=grocery",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `item`,
                children: "Clothing"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/products?term=medical",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `item`,
                children: "Covid-19"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/products?term=furniture",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `item`,
                children: "Furnitures"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/products?term=electronics",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `item`,
                children: "Electronics"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/products?term=fashion",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `item`,
                children: "Fashions"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/products?term=jewelry",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `item`,
                children: "Jewelry"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/products",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `item`,
                children: "All Products"
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/cart",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: `item ${isActive('/cart') ? 'active' : null}`,
            children: "Cart"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/about",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: `item ${isActive('/about') ? 'active' : null}`,
            children: "About"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "right menu",
          children: [user ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ui simple dropdown item",
              children: [user.name, /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "dropdown icon"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "menu",
                children: [isRootOrAdmin && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/admin/dashboard",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: `item ${isActive('/admin/dashboard') ? 'active' : null}`,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "dashboard icon"
                    }), "Dashboard"]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/profile",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: `item ${isActive('/profile') ? 'active' : null}`,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "user icon"
                    }), "My Profile"]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/my-orders-history",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: `item ${isActive('/my-orders-history') ? 'active' : null}`,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "history icon"
                    }), "My Orders History"]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "divider"
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "#",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: `item`,
                    onClick: e => {
                      e.preventDefault();
                      (0,auth/* handleLogout */.hY)();
                    },
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "sign-out icon"
                    }), "Logout"]
                  })
                })]
              })]
            })
          }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/auth/login",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `item ${isActive('/auth/login') ? 'active' : null}`,
                children: "Login"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/auth/signup",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `item ${isActive('/auth/signup') ? 'active' : null}`,
                children: "Signup"
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("form", {
            className: "ui form",
            onSubmit: e => {
              e.preventDefault();
              handleSearch();
            },
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ui transparent icon input",
              children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                className: "prompt",
                type: "text",
                placeholder: "Search...",
                name: "search",
                value: search.search,
                onChange: handleOnChange
              }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                onClick: e => {
                  e.preventDefault();
                  handleSearch();
                },
                className: "search link icon"
              })]
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mobile only row",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ui fixed inverted navbar menu",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "brand item",
            children: "FwithH"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "right menu open",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              onClick: e => {
                e.preventDefault();
                menuToggle();
              },
              className: "menu item",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "align justify icon"
              })
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `ui vertical navbar menu ${menuActive ? 'mobile-active-show' : 'mobile-active-hide'}`,
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: `item ${isActive('/') ? 'active' : null}`,
            onClick: menuToggle,
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "home icon"
            }), "Home"]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ui simple pointing left dropdown item",
          children: ["Home Pages", /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "dropdown icon"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "menu",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: `item ${isActive('/') ? 'active' : null}`,
                onClick: menuToggle,
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "shopping basket icon"
                }), "Clothing"]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/covid19",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: `item ${isActive('/covid19') ? 'active' : null}`,
                onClick: menuToggle,
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "medrt icon"
                }), "Covid-19 Landing"]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/furniture",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: `item ${isActive('/furniture') ? 'active' : null}`,
                onClick: menuToggle,
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "won icon"
                }), "Furniture Landing"]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/electronics",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: `item ${isActive('/electronics') ? 'active' : null}`,
                onClick: menuToggle,
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "television icon"
                }), "Electronics Landing"]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/fashion",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: `item ${isActive('/fashion') ? 'active' : null}`,
                onClick: menuToggle,
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "braille icon"
                }), "Fashion Landing"]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/jewelry",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: `item ${isActive('/jewelry') ? 'active' : null}`,
                onClick: menuToggle,
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "certificate icon"
                }), "Jewelry Landing"]
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "ui simple pointing left dropdown item",
          children: ["Products", /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "dropdown icon"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "menu",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/products?term=grocery",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `item`,
                onClick: menuToggle,
                children: "Clothing"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/products?term=medical",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `item`,
                onClick: menuToggle,
                children: "Covid-19"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/products?term=furniture",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `item`,
                onClick: menuToggle,
                children: "Furnitures"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/products?term=electronics",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `item`,
                onClick: menuToggle,
                children: "Electronics"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/products?term=fashion",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `item`,
                onClick: menuToggle,
                children: "Fashions"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/products?term=jewelry",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `item`,
                onClick: menuToggle,
                children: "Jewelry"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/products",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `item`,
                onClick: menuToggle,
                children: "All Products"
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/cart",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: `item ${isActive('/cart') ? 'active' : null}`,
            onClick: menuToggle,
            children: "Cart"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/about",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: `item ${isActive('/about') ? 'active' : null}`,
            onClick: menuToggle,
            children: "About"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "menu root-user",
          children: [user ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ui simple dropdown item",
              children: [user.name, /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "dropdown icon"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "menu",
                children: [isRootOrAdmin && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/admin/dashboard",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: `item ${isActive('/admin/dashboard') ? 'active' : null}`,
                    onClick: menuToggle,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "dashboard icon"
                    }), "Dashboard"]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/profile",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: `item ${isActive('/profile') ? 'active' : null}`,
                    onClick: menuToggle,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "user icon"
                    }), "My Profile"]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/my-orders-history",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: `item ${isActive('/my-orders-history') ? 'active' : null}`,
                    onClick: menuToggle,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "history icon"
                    }), "My Orders History"]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "divider"
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "#",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: `item`,
                    onClick: auth/* handleLogout */.hY,
                    onClick: menuToggle,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "sign-out icon"
                    }), "Logout"]
                  })
                })]
              })]
            })
          }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/auth/login",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `item ${isActive('/auth/login') ? 'active' : null}`,
                onClick: menuToggle,
                children: "Login"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/auth/signup",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `item ${isActive('/auth/signup') ? 'active' : null}`,
                onClick: menuToggle,
                children: "Signup"
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("form", {
            className: "ui form",
            onSubmit: e => {
              e.preventDefault();
              handleSearch();
              menuToggle();
            },
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "ui transparent icon input",
              children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                className: "prompt",
                type: "text",
                placeholder: "Search...",
                name: "search",
                value: search.search,
                onChange: handleOnChange
              }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                onClick: e => {
                  e.preventDefault();
                  handleSearch();
                  menuToggle();
                },
                className: "search link icon"
              })]
            })
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ var _App_StaticHeader = (StaticHeader);
;// CONCATENATED MODULE: ./components/_App/Layout.js









const Layout = ({
  children,
  user
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "FwithH - Fashion with Heart"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Buy high-quality bicycle parts and save money while riding through Nevada."
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "og:title",
        property: "og:title",
        content: "FwithH - Fashion with Heart"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:card",
        content: "FwithH - Fashion with Heart"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "canonical",
        href: "#0"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: "https://res.cloudinary.com/dev-empty/image/upload/v1590078952/qlm6qb1hzxd6iccmaf82.jpg"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(_App_StaticHeader, {
      user: user
    }), /*#__PURE__*/jsx_runtime_.jsx(external_semantic_ui_react_.Container, {
      fluid: true,
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(_App_Footer, {
      user: user
    }), /*#__PURE__*/jsx_runtime_.jsx(_App_GoTop, {
      scrollStepInPx: "100",
      delayInMs: "10.50"
    })]
  });
};

/* harmony default export */ var _App_Layout = (Layout);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(4953);
;// CONCATENATED MODULE: ./pages/_app.js


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













class MyApp extends app.default {
  constructor(...args) {
    super(...args);

    _app_defineProperty(this, "syncLogout", e => {
      if (e.key === 'logout') {
        router_default().push('/');
      }
    });
  }

  static async getInitialProps({
    Component,
    ctx
  }) {
    const {
      token
    } = (0,external_nookies_.parseCookies)(ctx);
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (!token) {
      const isProtectedRoute = ctx.pathname === '/profile' || ctx.pathname === '/admin/add-product' || ctx.pathname === '/my-orders-history' || ctx.pathname === '/admin/users' || ctx.pathname === '/admin/dashboard';

      if (isProtectedRoute) {
        (0,auth/* redirectUser */.a0)(ctx, '/auth/login');
      }
    } else {
      try {
        const payload = {
          headers: {
            Authorization: token
          }
        };
        const url = `${baseUrl/* default */.Z}/api/account`;
        const response = await external_axios_default().get(url, payload);
        const user = response.data;
        const isRoot = user.role == 'root';
        const isAdmin = user.role == 'admin'; // if authenticated but not root or admin

        const isNotPermitted = !(isRoot || isAdmin) && (ctx.pathname === '/admin/add-product' || ctx.pathname === '/admin/customers' || ctx.pathname === '/admin/orders' || ctx.pathname === '/admin/dashboard');

        if (isNotPermitted) {
          (0,auth/* redirectUser */.a0)(ctx, '/products');
        }

        pageProps.user = user;
      } catch (error) {
        // console.error("Error getting current user", error);
        //invalid token
        (0,external_nookies_.destroyCookie)(ctx, "token");
        (0,auth/* redirectUser */.a0)(ctx, '/auth/login');
      }
    }

    return {
      pageProps
    };
  }

  componentDidMount() {
    window.addEventListener('storage', this.syncLogout);
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/jsx_runtime_.jsx(_App_Layout, _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
    }));
  }

}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 6478:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jc": function() { return /* binding */ handleLogin; },
/* harmony export */   "a0": function() { return /* binding */ redirectUser; },
/* harmony export */   "hY": function() { return /* binding */ handleLogout; }
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const handleLogin = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default().set('token', token);
  next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/profile');
};
const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: location
    });
    ctx.res.end();
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push(location);
  }
};
const handleLogout = () => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default().remove('token');
  window.localStorage.setItem('logout', Date.now());
  next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/');
};

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

/***/ 6155:
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

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

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 5998:
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

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

/***/ 1347:
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,544], function() { return __webpack_exec__(9485); });
module.exports = __webpack_exports__;

})();