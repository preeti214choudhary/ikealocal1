! function (e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(o, i, function (t) {
                return e[t]
            }.bind(null, i));
        return o
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 7)
}([function (e, t) {
    var n = function (e, t) {
        var n = new RegExp("(^|\\s)".concat(t, "(\\s|$)")).test(e.className);
        return e.className && n
    };
    e.exports = {
        hasClass: n,
        addClass: function (e, t) {
            return n(e, t) || (e.className = "".concat(e.className, " ").concat(t).trim()), e
        },
        removeClass: function (e, t) {
            if (n(e, t)) {
                var o = new RegExp("(^|\\s+)".concat(t, "(\\s+|$)"));
                e.className = e.className.replace(o, " ").trim()
            }
            return e
        },
        setAttributes: function (e, t) {
            Object.keys(t).forEach((function (n) {
                return e.setAttribute(n, t[n])
            }))
        },
        debounce: function (e, t, n) {
            var o;
            return function () {
                var i = this,
                    r = arguments,
                    a = function () {
                        o = null, n || e.apply(i, r)
                    },
                    c = n && !o;
                clearTimeout(o), o = setTimeout(a, t), c && e.apply(i, r)
            }
        }
    }
}, function (e, t) {
    var n = {
        get: function (e) {
            var t = "; ".concat(document.cookie).split("; ".concat(e, "="));
            return 2 === t.length ? t.pop().split(";").shift() : ""
        },
        set: function (e, t, n, o, i) {
            var r = "".concat(e, "=").concat(t),
                a = n ? ";domain=".concat(n) : "",
                c = o ? ";path=".concat(o) : "",
                s = i ? ";expires=".concat(i) : "";
            document.cookie = r.concat(a, c, s)
        }
    };
    e.exports = n
}, function (e, t, n) {
    "use strict";

    function o() {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), window.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) {
            var t, n = (this.document || this.ownerDocument).querySelectorAll(e),
                o = this;
            do {
                for (t = n.length; --t >= 0 && n.item(t) !== o;);
            } while (t < 0 && (o = o.parentElement));
            return o
        }), Element.prototype.closest || (Element.prototype.closest = function (e) {
            var t = this;
            do {
                if (t.matches(e)) return t;
                t = t.parentElement || t.parentNode
            } while (null !== t && 1 === t.nodeType);
            return null
        })
    }
    n.d(t, "a", (function () {
        return o
    }))
}, , , , , function (e, t, n) {
    "use strict";
    n.r(t);
    n(8);
    n(9)((function () {
        n(10), n(11), n(12), n(13), n(24), document.querySelector("#footerAccordion") && n(14), document.querySelector("#location-popup") && n(15), document.querySelector(".language-selector") && n(16)
    }))
}, function (e, t, n) {}, function (e, t) {
    e.exports = function (e) {
        "querySelector" in document && "localStorage" in window && "addEventListener" in window && e()
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var o = n(2),
        i = n(0);

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }
    var a = function () {
        function e(t) {
            var n = this;
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Object(o.a)(), this.menuBtnOpen = t.querySelector("#mobMenuOpen"), this.menuBtnClose = t.querySelector("#mobMenuClose"), this.wrapper = t.querySelector(".header__wrapper"), this.mainMenu = t.querySelector(".header__main-nav"), this.helperMenu = t.querySelector(".header__helper-nav"), this.helperMenuBtns = this.helperMenu.querySelectorAll(".header__helper-nav-item--button"), this.openMobMenu = this.openMobMenu.bind(this), this.closeMobMenu = this.closeMobMenu.bind(this), this.init = this.init.bind(this), this.toggleAttribute = this.toggleAttribute.bind(this), this.openDropdown = this.openDropdown.bind(this), this.handleToggleDropdown = this.handleToggleDropdown.bind(this), this.handleToggleDropdownMobile = this.handleToggleDropdownMobile.bind(this), this.handleToggleLevel2 = this.handleToggleLevel2.bind(this), this.handleClickOutside = this.handleClickOutside.bind(this), this.handleBlur = this.handleBlur.bind(this), this.handleEscapeKey = this.handleEscapeKey.bind(this), this.convertLinksToButtons = this.convertLinksToButtons.bind(this), this.handleToggleHelperdropdown = this.handleToggleHelperdropdown.bind(this), this.menuBtnOpen.addEventListener("click", this.openMobMenu, !1), this.menuBtnClose.addEventListener("click", this.closeMobMenu, !1);
            var r = t.querySelectorAll(".main-bygga-menu__dropdown");
            if (r.length)
                for (var a = 0; a < r.length; a++) this.init(r[a]);
            window.addEventListener("resize", Object(i.debounce)((function () {
                window.innerWidth < 992 ? document.querySelector('.main-bygga-menu__dropdown[aria-hidden="false"]') && n.openMobMenu() : window.innerWidth > 992 && n.menuBtnOpen.getAttribute("aria-expanded") && n.closeMobMenu()
            }), 250));
            for (var c = 0; c < this.helperMenuBtns.length; c++) this.helperMenuBtns[c].addEventListener("click", this.handleToggleHelperdropdown.bind(null, this.helperMenuBtns[c]), !1)
        }
        var t, n, a;
        return t = e, (n = [{
            key: "init",
            value: function (e) {
                var t = e.parentNode.querySelector(".main-bygga-menu__link"),
                    n = document.createElement("button");
                n.classList.add("main-bygga-menu__button"), n.classList.add("hnf-trailing-icon"), n.setAttribute("aria-expanded", "false"), n.innerHTML = t.innerHTML;
                var o = e.querySelectorAll(".main-bygga-menu__button-mob");
                n.addEventListener("click", this.handleToggleDropdown.bind(null, n, e), !1);
                for (var i = 0; i < o.length; i++) o[i].addEventListener("click", this.handleToggleDropdownMobile.bind(null, o[i], o[i].closest(".main-bygga-menu__sub")), !1);
                t.parentNode.insertBefore(n, t), t.parentNode.removeChild(t), e.classList.contains("main-bygga-menu__dropdown--products") && (this.addExploreLinks(e), this.convertLinksToButtons(e)), e.onkeydown = this.handleEscapeKey
            }
        }, {
            key: "toggleAttribute",
            value: function (e, t) {
                var n = "true" === e.getAttribute(t);
                e.setAttribute(t, !n)
            }
        }, {
            key: "handleShowMoreClick",
            value: function (e) {
                e.preventDefault();
                for (var t = e.target.parentNode.parentNode, n = t.querySelectorAll(".main-bygga-menu__level1__item--overflow"), o = 0; o < n.length; o++) n[o].classList.remove("main-bygga-menu__level1__item--overflow");
                var i = t.querySelector(".main-bygga-menu__level1__item--more");
                i.classList.add("main-bygga-menu__level1__item--overflow"), this.toggleAttribute(i.firstElementChild, "aria-expanded"), i.nextSibling.firstElementChild.focus()
            }
        }, {
            key: "closeLevel2Lists",
            value: function (e) {
                for (var t = document.querySelectorAll(".main-bygga-menu__level2"), n = 0; n < t.length; n++)
                    if (!e || t[n] !== e) {
                        t[n].classList.add("main-bygga-menu__level2--hidden"), t[n].setAttribute("aria-hidden", !0);
                        var o = t[n].previousElementSibling;
                        o.classList.remove("active"), o.setAttribute("aria-expanded", "false")
                    }
            }
        }, {
            key: "handleToggleLevel2",
            value: function (e) {
                var t = e.target.parentNode.querySelector(".main-bygga-menu__level2");
                this.closeLevel2Lists(t), t.classList.toggle("main-bygga-menu__level2--hidden"), e.target.classList.toggle("active"), this.toggleAttribute(t, "aria-hidden"), this.toggleAttribute(e.target, "aria-expanded"), this.submenu = e.target.closest(".main-bygga-menu__sub"), Object(i.addClass)(this.submenu, "main-bygga-menu__sub--overflow")
            }
        }, {
            key: "convertLinksToButtons",
            value: function (e) {
                for (var t = e.querySelectorAll("div:first-of-type>.main-bygga-menu__level1>li"), n = 0; n < t.length; n++)
                    if ("true" !== t.item(n).getAttribute("data-link-only")) {
                        var o = t[n].firstElementChild,
                            i = document.createElement("button");
                        i.setAttribute("aria-expanded", "false"), i.classList.add("main-bygga-menu__level1__item-button"), i.innerHTML = o.innerHTML, i.addEventListener("click", this.handleToggleLevel2), t.length > 13 && n > 11 && t[n].classList.add("main-bygga-menu__level1__item--overflow"), t[n].insertBefore(i, o), t[n].removeChild(o)
                    } else t[n].classList.add("main-bygga-menu__level1__item--overflow");
                if (t.length > 13) {
                    var r = document.createElement("li");
                    r.classList.add("main-bygga-menu__level1__item"), r.classList.add("main-bygga-menu__level1__item--more"), r.setAttribute("data-more-link", "");
                    var a = document.createElement("button");
                    a.setAttribute("aria-expanded", "false"), a.classList.add("main-bygga-menu__level1__item-button"), a.innerHTML = "+ " + e.getAttribute("data-title-more"), a.addEventListener("click", this.handleShowMoreClick.bind(this)), r.insertBefore(a, null), t[0].parentElement.insertBefore(r, t[0].parentElement.children[12])
                }
            }
        }, {
            key: "addExploreLinks",
            value: function (e) {
                for (var t = e.querySelectorAll(".main-bygga-menu__level2"), n = 0; n < t.length; n++) {
                    var o = t[n].previousElementSibling,
                        i = document.createElement("li"),
                        r = document.createElement("a");
                    r.innerHTML = e.getAttribute("data-title-explore") + " " + o.innerHTML, r.href = o.href, i.appendChild(r), t[n].appendChild(i)
                }
            }
        }, {
            key: "createOverlay",
            value: function () {
                var e = document.createElement("div");
                e.classList.add("main-bygga-menu__overlay"), document.body.insertBefore(e, document.body.firstChild)
            }
        }, {
            key: "handleClickOutside",
            value: function (e) {
                Object(i.hasClass)(e.target, "main-bygga-menu__overlay") && Object(i.hasClass)(this.mainMenu, "active") && this.closeMobMenu();
                var t = document.querySelector('.main-bygga-menu__dropdown[aria-hidden="false"]');
                if (t && !t.contains(e.target)) {
                    var n = t.parentNode.querySelector(".main-bygga-menu__button");
                    e.target !== n && e.target.parentNode !== n && this.closeDropdown(n, t)
                }
            }
        }, {
            key: "handleBlur",
            value: function (e) {
                var t = e.relatedTarget;
                if (null === t && (t = document.activeElement), t.parentElement.classList.contains("main-bygga-menu__level1__item") && e.target.parentElement.parentElement.classList.contains("main-bygga-menu__level2")) this.closeLevel2Lists(t);
                else {
                    var n = document.querySelector('.main-bygga-menu__dropdown[aria-hidden="false"]');
                    n && n.parentElement.querySelector(".main-bygga-menu__button")
                }
            }
        }, {
            key: "closeDropdown",
            value: function (e, t) {
                sessionStorage.removeItem("navOpenDropdownTime"), this.closeLevel2Lists(), document.querySelector(".main-bygga-menu__overlay") && document.body.removeChild(document.querySelector(".main-bygga-menu__overlay")), document.removeEventListener("click", this.handleClickOutside), e.setAttribute("aria-expanded", !1), e.classList.remove("active"), t.removeEventListener("blur", this.handleBlur), t.setAttribute("aria-hidden", !0), t.classList.add("main-bygga-menu__dropdown--hidden")
            }
        }, {
            key: "openDropdown",
            value: function (e, t) {
                var n = document.querySelector('.main-bygga-menu__dropdown[aria-hidden="false"]');
                if (n) {
                    var o = n.parentNode.querySelector(".main-bygga-menu__button");
                    this.closeDropdown(o, n)
                }
                document.querySelector(".main-bygga-menu__overlay") || this.createOverlay(), document.addEventListener("click", this.handleClickOutside), e.setAttribute("aria-expanded", !0), e.classList.add("active"), t.addEventListener("blur", this.handleBlur, !0), t.setAttribute("aria-hidden", !1), t.classList.remove("main-bygga-menu__dropdown--hidden"), sessionStorage.setItem("navOpenDropdownTime", performance.now())
            }
        }, {
            key: "handleToggleDropdown",
            value: function (e, t) {
                t.classList.contains("main-bygga-menu__dropdown--hidden") ? this.openDropdown(e, t) : this.closeDropdown(e, t)
            }
        }, {
            key: "handleToggleDropdownMobile",
            value: function (e, t) {
                var n = e.closest(".main-bygga-menu__item").querySelector(".active");
                e.setAttribute("aria-expanded", !1), this.closeLevel2Lists(), n.setAttribute("aria-expanded", !1), n.classList.remove("open"), t.removeEventListener("blur", this.handleBlur), t.setAttribute("aria-hidden", !0), t.classList.add("main-bygga-menu__dropdown--hidden"), this.submenu && Object(i.removeClass)(this.submenu, "main-bygga-menu__sub--overflow")
            }
        }, {
            key: "handleEscapeKey",
            value: function (e) {
                if (Object(i.removeClass)(document.body, "hnf--menu-open"), "Escape" === (e = e || window.event).key || "Esc" === e.key) {
                    var t = document.activeElement.parentElement.classList.contains("main-bygga-menu__level1__item") ? document.querySelector('.main-bygga-menu__button[aria-expanded="true"]') : document.querySelector(".main-bygga-menu__level1__item>button.active");
                    t.click(), t.focus()
                }
            }
        }, {
            key: "closeMobMenu",
            value: function () {
                this.closeLevel2Lists(), Object(i.removeClass)(document.body, "hnf--menu-open"), Object(i.removeClass)(this.menuBtnOpen, "active"), Object(i.removeClass)(this.mainMenu, "active"), Object(i.removeClass)(this.wrapper, "header__wrapper--fixed"), this.toggleAttribute(this.menuBtnOpen, "aria-expanded"), document.querySelector(".main-bygga-menu__overlay") && document.body.removeChild(document.querySelector(".main-bygga-menu__overlay")), this.submenu && Object(i.removeClass)(this.submenu, "main-bygga-menu__sub--overflow")
            }
        }, {
            key: "openMobMenu",
            value: function () {
                Object(i.addClass)(document.body, "hnf--menu-open"), Object(i.addClass)(this.menuBtnOpen, "active"), Object(i.addClass)(this.mainMenu, "active"), Object(i.addClass)(this.wrapper, "header__wrapper--fixed"), this.toggleAttribute(this.menuBtnOpen, "aria-expanded"), document.querySelector(".main-bygga-menu__overlay") || this.createOverlay(), document.addEventListener("click", this.handleClickOutside)
            }
        }, {
            key: "handleToggleHelperdropdown",
            value: function (e) {
                e.classList.toggle("active"), this.toggleAttribute(e, "aria-expanded"), this.toggleAttribute(e.parentNode.querySelector(".header__helper-nav--dropdown"), "aria-hidden")
            }
        }]) && r(t.prototype, n), a && r(t, a), e
    }();
    t.default = new a(document.querySelector(".header"))
}, function (e, t) {
    var n = this;
    var o = function (e, t) {
            var n = t.currentTarget,
                o = n.closest("ul") ? n.closest("ul").getAttribute("data-tracking-label") : "",
                i = o ? "".concat(o, " | ").concat(n.text.trim()) : n.text.trim(),
                r = sessionStorage.getItem("navOpenDropdownTime") ? Math.round(performance.now() - sessionStorage.getItem("navOpenDropdownTime")) : "";
            sessionStorage.setItem("navLinkClick", function (e, t, n, o) {
                return JSON.stringify({
                    navType: e,
                    pageUrl: t,
                    link: n,
                    timing: o || ""
                })
            }(e, location.href, i, r)), sessionStorage.removeItem("navOpenDropdownTime")
        },
        i = function () {
            for (var e = document.querySelectorAll("header nav [data-menu-links] a"), t = 0; t < e.length; t++) e[t].addEventListener("click", o.bind(n, "Main Navigation Bar"));
            var i = document.querySelector("header nav [data-more-link] button");
            i && i.addEventListener("click", (function () {
                var e, t, n;
                ! function (e) {
                    if (window.sendEvent) try {
                        window.sendEvent(e)
                    } catch (e) {}
                }((e = "button", t = "more", {
                    event_category: "site_navigation",
                    event_action: e,
                    event_label: t,
                    transport_type: n || ""
                }))
            }));
            for (var r = document.querySelectorAll("header nav [data-shopping-links] a"), a = 0; a < r.length; a++) r[a].addEventListener("click", o.bind(n, "Shopping Links"))
        };
    ! function () {
        for (var e = document.querySelectorAll("header .top-menu a"), t = 0; t < e.length; t++) e[t].addEventListener("click", o.bind(n, "Header Links"))
    }(), i(),
        function () {
            for (var e = document.querySelectorAll("footer a"), t = 0; t < e.length; t++) e[t].addEventListener("click", o.bind(n, "Footer Links"))
        }()
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var o = n(0),
        i = n(1),
        r = n.n(i),
        a = 99,
        c = document.querySelector(".js-shopping-cart-icon"),
        s = null;

    function l(e) {
        if (!s) {
            var t = document.createElement("span");
            Object(o.addClass)(t, "header__shopping-bag-quantity hnf-btn__badge"), e.appendChild(t), s = t
        }
        return s
    }

    function u(e, t) {
        var n = function (e) {
            var t = parseInt(r.a.get("IRMW_CART_COUNT_".concat(e)), 10);
            return isNaN(t) ? 0 : t
        }(t);
        l(e).innerHTML = n ? n > a ? "".concat(a, "+") : n : ""
    }
    c && function (e) {
        var t = e.dataset.marketCode;
        if (!t) return;
        var n = t.split("-")[1];
        u(e, n), document.body.addEventListener("addtocart", (function () {
            u(e, n)
        }), !1), window.ikea.pubsub.subscribe("SESSION/GET_SESSION_SUCCESS", (function (t) {
            var o = "session_".concat(t.market),
                i = localStorage.getItem(o);
            if (t.market.toUpperCase() === n && i !== t.sessionId) {
                var a = ".".concat(document.domain.split(".").slice(-2).join(".")),
                    c = new Date;
                c.setFullYear(c.getFullYear() + 1), r.a.set("IRMW_CART_COUNT_".concat(n), "0", a, "https://www.ikea.com/", c.toUTCString()), localStorage.setItem(o, t.sessionId), u(e, n)
            }
        }))
    }(c)
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var o = n(1),
        i = n.n(o),
        r = "cookieInfoShown",
        a = JSON.stringify(!0),
        c = document.querySelector(".js-cookie-info__panel");

    function s() {
        var e = document.domain.split(".");
        e.shift();
        var t = ".".concat(e.join(".")),
            n = location.pathname.substr(0, 3),
            o = new Date;
        o.setFullYear(o.getFullYear() + 1), i.a.set(r, a, t.length > 1 ? t : void 0, n, o.toUTCString()), c.classList.remove("hnf-banner--open")
    }
    c && localStorage.getItem(r) !== a && i.a.get(r) !== a && (c.classList.add("hnf-banner--open"), document.querySelector(".js-cookie-info__accept-button").addEventListener("click", s))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var o = n(2),
        i = n(0);

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }
    var a = function () {
        function e(t) {
            var n = this;
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Object(o.a)(), this.accordion = t, this.accordionItems = [], this.activeElementClass = "footer__accordion--item-active";
            for (var r = t.querySelectorAll(".footer__accordion--item"), a = 0; a < r.length; ++a) {
                var c = r[a].querySelector(".footer__accordion--headline"),
                    s = r[a].querySelector(".footer__accordion--headline .footer__svg-icon--expander"),
                    l = r[a].querySelector(".footer__accordion--content"),
                    u = {
                        item: r[a],
                        button: c,
                        icon: s,
                        section: l
                    };
                window.innerWidth > 768 && (c.removeAttribute("tabindex"), c.removeAttribute("role"), c.removeAttribute("aria-controls"), c.removeAttribute("aria-expanded"), l.removeAttribute("aria-hidden"), this.disabled = !0), this.accordionItems.push(u)
            }
            return this.onClick = this.onClick.bind(this), this.onKeypress = this.onKeypress.bind(this), this.accordion.addEventListener("mouseover", Object(i.debounce)(this.onHover, 250)), window.innerWidth < 768 && (this.accordion.addEventListener("click", this.onClick, !1), this.accordion.addEventListener("keydown", this.onKeypress), this.disabled = !1), window.addEventListener("resize", Object(i.debounce)((function () {
                window.innerWidth < 768 && n.disabled ? (n.enableAccordion(), n.accordion.addEventListener("click", n.onClick), n.accordion.addEventListener("keydown", n.onKeypress)) : window.innerWidth > 768 && (n.accordion.removeEventListener("click", n.onClick), n.accordion.removeEventListener("keydown", n.onKeypress), n.disableAccordion())
            }), 250)), this
        }
        var t, n, a;
        return t = e, (n = [{
            key: "onHover",
            value: function (e) {
                var t = e.target.closest(".footer__accordion--title-wrap"),
                    n = e.target.closest(".footer__accordion--title");
                n && t && n.getBoundingClientRect().width > t.getBoundingClientRect().width && (Object(i.addClass)(t.firstElementChild, "footer__accordion--title-overflow"), setTimeout((function () {
                    Object(i.removeClass)(t.firstElementChild, "footer__accordion--title-overflow")
                }), 1e4))
            }
        }, {
            key: "enableAccordion",
            value: function () {
                for (var e = 0; e < this.accordionItems.length; e++) this.accordionItems[e].button.setAttribute("tabindex", "0"), this.accordionItems[e].button.setAttribute("role", "button"), this.accordionItems[e].button.setAttribute("aria-controls", this.accordionItems[e].section.id), this.accordionItems[e].button.removeAttribute("aria-expanded"), this.accordionItems[e].section.removeAttribute("aria-hidden");
                this.disabled = !1
            }
        }, {
            key: "disableAccordion",
            value: function () {
                for (var e = 0; e < this.accordionItems.length; e++) this.accordionItems[e].button.removeAttribute("tabindex"), this.accordionItems[e].button.removeAttribute("role"), this.accordionItems[e].button.removeAttribute("aria-controls"), this.accordionItems[e].button.removeAttribute("aria-expanded"), this.accordionItems[e].section.removeAttribute("aria-hidden");
                this.disabled = !0
            }
        }, {
            key: "onKeypress",
            value: function (e) {
                13 !== e.keyCode && 32 !== e.keyCode || (e.preventDefault(), this.onClick(e))
            }
        }, {
            key: "onClick",
            value: function (e) {
                var t = e.target.closest(".footer__accordion--headline");
                if (!e.target.closest(".footer__link--white") && t)
                    for (var n = 0; n < this.accordionItems.length; n++) this.accordionItems[n].button === t ? this.toggleAccordion(this.accordionItems[n]) : this.close(this.accordionItems[n])
            }
        }, {
            key: "close",
            value: function (e) {
                Object(i.removeClass)(e.item, this.activeElementClass), e.icon.setAttribute("class", "".concat(e.icon.getAttribute("class").replace("hnf-svg-icon--rotate-minus-45", ""))), e.button.setAttribute("aria-expanded", !1), e.section.setAttribute("aria-hidden", !0)
            }
        }, {
            key: "open",
            value: function (e) {
                Object(i.addClass)(e.item, this.activeElementClass), e.icon.setAttribute("class", "".concat(e.icon.getAttribute("class"), " hnf-svg-icon--rotate-minus-45")), e.button.setAttribute("aria-expanded", !0), e.section.setAttribute("aria-hidden", !1)
            }
        }, {
            key: "toggleAccordion",
            value: function (e) {
                Object(i.hasClass)(e.item, this.activeElementClass) ? this.close(e) : this.open(e)
            }
        }]) && r(t.prototype, n), a && r(t, a), e
    }();
    t.default = new a(document.querySelector("#footerAccordion"))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var o = n(1),
        i = n.n(o);

    function r(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
            var n = [],
                o = !0,
                i = !1,
                r = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(o = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
            } catch (e) {
                i = !0, r = e
            } finally {
                try {
                    o || null == c.return || c.return()
                } finally {
                    if (i) throw r
                }
            }
            return n
        }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    var a, c, s, l, u, d = document.querySelector("#location-popup"),
        m = "ikea_geo_sup";

    function h(e) {
        var t = document.querySelector(".location-popup__country-list");
        return JSON.parse(t.getAttribute("data-country-list").replace(/'/g, '"'))[e]
    }

    function p(e) {
        var t = h(e);
        return t ? t.countryName : void 0
    }

    function v(e) {
        var t = document.querySelector(".location-popup");
        t && !t.contains(e.target) && (f(b((function () {
            return "close"
        }), "clicked outside")), g())
    }

    function g() {
        d.classList.add("location-popup--hidden"), document.body.removeChild(document.querySelector(".location-popup__overlay")), document.removeEventListener("click", v);
        var e = document.domain.split(".");
        e.shift();
        var t = ".".concat(e.join("."));
        if (document.querySelector("#location-popup__checkbox-input").checked) {
            var n = new Date;
            n.setFullYear(n.getFullYear() + 1), i.a.set(m, "true", t, location.pathname.substr(0, 6), n.toUTCString())
        } else i.a.set(m, "true", t, location.pathname.substr(0, 6))
    }

    function f(e) {
        if (window.sendEvent) try {
            window.sendEvent(e)
        } catch (e) {}
    }

    function b(e, t, n) {
        return {
            event_category: "geo_popup",
            event_action: e(),
            event_label: t,
            transport_type: n || ""
        }
    }

    function y(e, t, n, o, i) {
        e.addEventListener(t, (function () {
            return f(b(n, o, i))
        }), !1)
    }

    function _(e, t, n) {
        var o = document.querySelector(e),
            i = o.innerHTML;
        0 === t.length ? o.innerHTML = n : o.innerHTML = i.replace(t, n)
    }

    function w(e, t) {
        var n = p(e),
            o = p(t),
            i = h(t.toUpperCase()),
            r = i ? i.defaultLanguage : void 0;
        if (t && r && n) {
            document.addEventListener("click", v);
            var a = document.createElement("div");
            a.classList.add("location-popup__overlay"), document.body.insertBefore(a, document.body.firstChild), _(".location-popup__current-country", "{{country}}", "<b>".concat(n, "</b>")), _(".location-popup__target-country", "{{country}}", "<b>".concat(o, "</b>")), _(".location-popup__cancel-button", "", n), _(".location-popup__confirm-button", "", o);
            var c = document.querySelector(".location-popup__close-button");
            y(c, "click", (function () {
                return "close"
            }), "clicked the x button"), c.addEventListener("click", g);
            var s = document.querySelector("#location-popup__checkbox-input"),
                l = document.querySelector(".location-popup__cancel-button");
            y(l, "click", (function () {
                return s.checked ? "no_remember" : "no"
            }), ""), l.addEventListener("click", g);
            var u = document.querySelector(".location-popup__confirm-button");
            y(u, "click", (function () {
                return s.checked ? "yes_remember" : "yes"
            }), "", "beacon"), u.addEventListener("click", (function () {
                return function (e, t) {
                    var n = function (e, t, n) {
                        var o = /-(s?[0-9]{8})\/?/;
                        if (!t || !n) return null;
                        var i = "/".concat(t.toLowerCase(), "https://www.ikea.com/").concat(n);
                        if (o.test(e)) {
                            var r = o.exec(e);
                            r[1] && (i += "/catalog/products/".concat(r[1]))
                        }
                        return i
                    }(window.location.pathname, e, t);
                    null !== n && (window.location.href = n)
                }(t, r)
            })), d.classList.remove("location-popup--hidden")
        }
    }
    a = r(document.querySelector("#location-popup").getAttribute("data-site-folder").toUpperCase().split("https://www.ikea.com/"), 2), c = a[0], s = a[1], l = i.a.get("ikea_geo"), u = i.a.get(m), null !== d && "true" !== u && l && l !== c && function (e, t, n) {
        var o = document.querySelector("head link#nav-styles").href.split("/".concat(n, "https://www.ikea.com/"))[0],
            i = "".concat(o, "https://www.ikea.com/").concat(n, "https://www.ikea.com/header-footer/location-popup-fragment.html"),
            r = new XMLHttpRequest;
        r.open("GET/index.html", i), r.onload = function () {
            r.status >= 200 && r.status < 300 ? (d.innerHTML = r.responseText, setTimeout((function () {
                return w(e, t)
            }), 100)) : d.parent.removeChild(d)
        }, r.onerror = function () {
            d.parent.removeChild(d)
        }, r.send()
    }(c, l, s.toLowerCase())
}, function (e, t) {
    var n = function (e) {
            e.preventDefault();
            var t = window.location.pathname,
                n = new RegExp("-(s?[0-9]{8})/?"),
                o = new RegExp("/cat/.*-([A-Za-z0-9_]*)/"),
                i = e.target.href,
                r = t.match(o);
            if (r) i += "catalog/categories/".concat(r.filter((function (e) {
                return e
            })).pop(), "https://www.ikea.com/");
            else {
                var a = t.match(n);
                a && (i += "catalog/products/".concat(a.filter((function (e) {
                    return e
                })).pop(), "https://www.ikea.com/"))
            }
            window.location.href = i
        },
        o = document.querySelectorAll(".language-selector");
    if (o.length)
        for (var i = 0; i < o.length; i++) o[i].addEventListener("click", n)
}, , , , , , , , function (e, t, n) {
    "use strict";
    n.r(t);
    var o = function () {
            return /Android/i.test(navigator.userAgent)
        },
        i = function () {
            return /iPhone|iPad|iPod/i.test(navigator.userAgent)
        },
        r = function () {
            return document.querySelector(".emergency")
        },
        a = function () {
            return document.querySelector(".value-proposition")
        },
        c = document.querySelector("#emergency-message"),
        s = document.querySelector("#value-proposition"),
        l = document.querySelector("#mobile-value-proposition"),
        u = "ikeaValueProp";

    function d(e) {
        if (window.sendEvent) try {
            window.sendEvent(e)
        } catch (e) {}
    }

    function m(e, t, n, o, i) {
        return {
            event_category: o,
            event_action: e(),
            event_label: t,
            transport_type: n || "",
            non_interaction: i || !1
        }
    }
    var h = function (e, t) {
        var n = t.currentTarget,
            o = n.text ? n.text.trim() : "";
        sessionStorage.setItem("navLinkClick", function (e, t, n) {
            return JSON.stringify({
                navType: e,
                pageUrl: t,
                link: n
            })
        }(e, location.href, o))
    };

    function p(e, t, n, o, i, r) {
        e.addEventListener(t, (function () {
            return d(m(n, o, i, r))
        }), !1)
    }

    function v(e, t, n) {
        var o = document.querySelector("head link#nav-styles").href.replace(/styles\/.*/, e),
            i = new XMLHttpRequest;
        i.open("GET/index.html", o), i.onload = function () {
            i.status >= 200 && i.status < 300 ? t && t(i) : n && n(i)
        }, i.onerror = function () {
            n && n(i)
        }, i.send()
    }

    function g() {
        v("emergency-message-fragment.html", (function (e) {
            c.innerHTML = e.responseText, r().classList.remove("emergency--hidden"), d(m((function () {
                return "impression"
            }), "emergency message shown", "", "emergency_message", !0));
            var t = document.querySelector(".emergency__close");
            t.addEventListener("click", (function () {
                r().classList.add("emergency--hidden"),
                    function () {
                        try {
                            sessionStorage.setItem(c.getAttribute("id"), "true")
                        } catch (e) {}
                    }()
            })), p(t, "click", (function () {
                return "close"
            }), "clicked the x button", "", "emergency_message")
        }), (function () {
            return c.parent.removeChild(c)
        }))
    }

    function f() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = "value-proposition-fragment.html";
        t && o() ? n = "value-proposition-android-fragment.html" : t && i() && (n = "value-proposition-ios-fragment.html"), v(n, (function (n) {
            t ? l.innerHTML = n.responseText : s.innerHTML = n.responseText, a().classList.remove("value-proposition--hidden"), d(m((function () {
                return "impression"
            }), "value proposition message shown", "", "value_proposition_message", !0));
            var o = document.querySelector(".value-proposition__close");
            o.addEventListener("click", (function () {
                a().classList.add("value-proposition--hidden"),
                    function () {
                        try {
                            sessionStorage.setItem(u, "true")
                        } catch (e) {}
                    }()
            }));
            for (var i = document.querySelectorAll("header [data-value-proposition-links] a"), r = 0; r < i.length; r++) p(i[r], "click", (function () {
                return "click"
            }), i[r].text.trim(), "", "value_proposition_links"), i[r].addEventListener("click", h.bind(e, "Value Proposition Links"));
            p(o, "click", (function () {
                return "close"
            }), "clicked the x button", "", "value_proposition_message")
        }), (function () {
            return s.parent.removeChild(c)
        }))
    }
    c && !sessionStorage.getItem(c.getAttribute("id")) ? g() : l && (o() || i()) && !sessionStorage.getItem(u) ? f(!0) : s && !sessionStorage.getItem(u) && f()
}]);
