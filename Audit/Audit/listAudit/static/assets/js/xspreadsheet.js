! function(t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(i, r, function(e) {
                return t[e]
            }.bind(null, r));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 1)
}([function(t, e, n) {}, function(t, e, n) {
    "use strict";

    function i(t) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function r(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    n.r(e);
    var o = function() {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), "string" == typeof e ? (this.el = document.createElement(e), this.el.className = n) : this.el = e, this.data = {}
            }
            var e, n, o;
            return e = t, (n = [{
                key: "data",
                value: function(t, e) {
                    return void 0 !== e ? (this.data[t] = e, this) : this.data[t]
                }
            }, {
                key: "on",
                value: function(t, e) {
                    var n = i(t.split(".")),
                        r = n[0],
                        o = n.slice(1),
                        a = r;
                    return "mousewheel" === a && /Firefox/i.test(window.navigator.userAgent) && (a = "DOMMouseScroll"), this.el.addEventListener(a, function(t) {
                        e(t);
                        for (var n = 0; n < o.length; n += 1) {
                            var i = o[n];
                            if ("left" === i && 0 !== t.button) return;
                            if ("right" === i && 2 !== t.button) return;
                            "stop" === i && t.stopPropagation()
                        }
                    }), this
                }
            }, {
                key: "offset",
                value: function(t) {
                    var e = this;
                    if (void 0 !== t) return Object.keys(t).forEach(function(n) {
                        e.css(n, "".concat(t[n], "px"))
                    }), this;
                    var n = this.el;
                    return {
                        top: n.offsetTop,
                        left: n.offsetLeft,
                        height: n.offsetHeight-100,
                        width: n.offsetWidth
                    }
                }
            }, {
                key: "scroll",
                value: function(t) {
                    var e = this.el;
                    return void 0 !== t && (void 0 !== t.left && (e.scrollLeft = t.left), void 0 !== t.top && (e.scrollTop = t.top)), {
                        left: e.scrollLeft,
                        top: e.scrollTop
                    }
                }
            }, {
                key: "box",
                value: function() {
                    return this.el.getBoundingClientRect()
                }
            }, {
                key: "parent",
                value: function() {
                    return new t(this.el.parentNode)
                }
            }, {
                key: "children",
                value: function() {
                    for (var t = this, e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    return 0 === arguments.length ? this.el.childNodes : (n.forEach(function(e) {
                        return t.child(e)
                    }), this)
                }
            }, {
                key: "child",
                value: function(e) {
                    var n = e;
                    return "string" == typeof e ? n = document.createTextNode(e) : e instanceof t && (n = e.el), this.el.appendChild(n), this
                }
            }, {
                key: "contains",
                value: function(t) {
                    return this.el.contains(t)
                }
            }, {
                key: "className",
                value: function(t) {
                    return void 0 !== t ? (this.el.className = t, this) : this.el.className
                }
            }, {
                key: "addClass",
                value: function(t) {
                    return this.el.classList.add(t), this
                }
            }, {
                key: "hasClass",
                value: function(t) {
                    return this.el.classList.contains(t)
                }
            }, {
                key: "removeClass",
                value: function(t) {
                    return this.el.classList.remove(t), this
                }
            }, {
                key: "toggle",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "active";
                    return this.toggleClass(t)
                }
            }, {
                key: "toggleClass",
                value: function(t) {
                    return this.el.classList.toggle(t)
                }
            }, {
                key: "active",
                value: function() {
                    return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? this.addClass("active") : this.removeClass("active"), this
                }
            }, {
                key: "disabled",
                value: function() {
                    return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? this.addClass("disabled") : this.removeClass("disabled"), this
                }
            }, {
                key: "attr",
                value: function(t, e) {
                    var n = this;
                    if (void 0 !== e) this.el.setAttribute(t, e);
                    else {
                        if ("string" == typeof t) return this.el.getAttribute(t);
                        Object.keys(t).forEach(function(e) {
                            n.el.setAttribute(e, t[e])
                        })
                    }
                    return this
                }
            }, {
                key: "removeAttr",
                value: function(t) {
                    return this.el.removeAttribute(t), this
                }
            }, {
                key: "html",
                value: function(t) {
                    return void 0 !== t ? (this.el.innerHTML = t, this) : this.el.innerHTML
                }
            }, {
                key: "val",
                value: function(t) {
                    return void 0 !== t ? (this.el.value = t, this) : this.el.value
                }
            }, {
                key: "cssRemoveKeys",
                value: function() {
                    for (var t = this, e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    return n.forEach(function(e) {
                        return t.el.style.removeProperty(e)
                    }), this
                }
            }, {
                key: "css",
                value: function(t, e) {
                    var n = this;
                    return void 0 === e && "string" != typeof t ? (Object.keys(t).forEach(function(e) {
                        n.el.style[e] = t[e]
                    }), this) : void 0 !== e ? (this.el.style[t] = e, this) : this.el.style[t]
                }
            }, {
                key: "computedStyle",
                value: function() {
                    return window.getComputedStyle(this.el, null)
                }
            }, {
                key: "show",
                value: function() {
                    return this.css("display", "block"), this
                }
            }, {
                key: "hide",
                value: function() {
                    return this.css("display", "none"), this
                }
            }]) && r(e.prototype, n), o && r(e, o), t
        }(),
        a = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return new o(t, e)
        };

    function l(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = [],
                i = !0,
                r = !1,
                o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    i || null == l.return || l.return()
                } finally {
                    if (r) throw o
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    var s = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    function c(t) {
        for (var e = "", n = t; n >= s.length;) n /= s.length, n -= 1, e += s[parseInt(n, 10) % s.length];
        var i = t % s.length;
        return e += s[i]
    }

    function u(t) {
        for (var e = 0, n = 0; n < t.length - 1; n += 1) {
            var i = t.charCodeAt(n) - 65,
                r = t.length - 1 - n;
            e += Math.pow(s.length, r) + s.length * i
        }
        return e += t.charCodeAt(t.length - 1) - 65
    }

    function h(t) {
        for (var e = "", n = "", i = 0; i < t.length; i += 1) t.charAt(i) >= "0" && t.charAt(i) <= "9" ? n += t.charAt(i) : e += t.charAt(i);
        return [u(e), parseInt(n, 10) - 1]
    }

    function f(t, e, n) {
        var i = l(h(t), 2),
            r = i[0],
            o = i[1];
        return c(r + e) + (o + n)
    }

    function d(t, e) {
        return "".concat(c(t)).concat(e + 1)
    }

    function v(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = [],
                i = !0,
                r = !1,
                o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    i || null == l.return || l.return()
                } finally {
                    if (r) throw o
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function y(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var p = function() {
        function t(e, n, i, r) {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.sri = e, this.sci = n, this.eri = i, this.eci = r
        }
        var e, n, i;
        return e = t, i = [{
            key: "valueOf",
            value: function(e) {
                var n = e.split(":"),
                    i = v(h(n[0]), 2),
                    r = i[0],
                    o = i[1],
                    a = o,
                    l = r;
                if (n.length > 1) {
                    var s = v(h(n[1]), 2);
                    l = s[0], a = s[1]
                }
                return new t(o, r, a, l)
            }
        }], (n = [{
            key: "set",
            value: function(t, e, n, i) {
                this.sri = t, this.sci = e, this.eri = n, this.eci = i
            }
        }, {
            key: "multiple",
            value: function() {
                return this.eri - this.sri > 0 || this.eci - this.sci > 0
            }
        }, {
            key: "includes",
            value: function() {
                for (var t = 0, e = 0, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                if (1 === i.length) {
                    var o = v(h(i[0]), 2);
                    t = o[0], e = o[1]
                } else 2 === i.length && (t = i[0], e = i[1]);
                var a = this.sri,
                    l = this.sci,
                    s = this.eri,
                    c = this.eci;
                return a <= t && t <= s && l <= e && e <= c
            }
        }, {
            key: "each",
            value: function(t) {
                for (var e = this.sri, n = this.sci, i = this.eri, r = this.eci, o = e; o <= i; o += 1)
                    for (var a = n; a <= r; a += 1) t(o, a)
            }
        }, {
            key: "within",
            value: function(t) {
                return this.sri >= t.sri && this.sci >= t.sci && this.eri <= t.eri && this.eci <= t.eci
            }
        }, {
            key: "disjoint",
            value: function(t) {
                return this.sri > t.eri || this.sci > t.eci || t.sri > this.eri || t.sci > this.eci
            }
        }, {
            key: "intersects",
            value: function(t) {
                return this.sri <= t.eri && this.sci <= t.eci && t.sri <= this.eri && t.sci <= this.eci
            }
        }, {
            key: "union",
            value: function(e) {
                var n = this.sri,
                    i = this.sci,
                    r = this.eri,
                    o = this.eci;
                return new t(e.sri < n ? e.sri : n, e.sci < i ? e.sci : i, e.eri > r ? e.eri : r, e.eci > o ? e.eci : o)
            }
        }, {
            key: "difference",
            value: function(e) {
                var n = [],
                    i = function(e, i, r, o) {
                        n.push(new t(e, i, r, o))
                    },
                    r = this.sri,
                    o = this.sci,
                    a = this.eri,
                    l = this.eci,
                    s = e.sri - r,
                    c = e.sci - o,
                    u = a - e.eri,
                    h = l - e.eci;
                return s > 0 ? (i(r, o, e.sri - 1, l), u > 0 ? (i(e.eri + 1, o, a, l), c > 0 && i(e.sri, o, e.eri, e.sci - 1), h > 0 && i(e.sri, e.eci + 1, e.eri, l)) : (c > 0 && i(e.sri, o, a, e.sci - 1), h > 0 && i(e.sri, e.eci + 1, a, l))) : u > 0 && (i(e.eri + 1, o, a, l), c > 0 && i(r, o, e.eri, e.sci - 1), h > 0 && i(r, e.eci + 1, e.eri, l)), c > 0 ? (i(r, o, a, e.sci - 1), h > 0 ? (i(r, e.eri + 1, a, l), s > 0 && i(r, e.sci, e.sri - 1, e.eci), u > 0 && i(e.sri + 1, e.sci, a, e.eci)) : (s > 0 && i(r, e.sci, e.sri - 1, l), u > 0 && i(e.sri + 1, e.sci, a, l))) : h > 0 && (i(a, e.eci + 1, a, l), s > 0 && i(r, o, e.sri - 1, e.eci), u > 0 && i(e.eri + 1, o, a, e.eci)), n
            }
        }, {
            key: "size",
            value: function() {
                return [this.eri - this.sri + 1, this.eci - this.sci + 1]
            }
        }, {
            key: "toString",
            value: function() {
                var t = this.sri,
                    e = this.sci,
                    n = this.eri,
                    i = this.eci,
                    r = d(e, t);
                return this.multiple() && (r = "".concat(r, ":").concat(d(i, n))), r
            }
        }, {
            key: "toJSON",
            value: function() {
                return this.toString()
            }
        }, {
            key: "equals",
            value: function(t) {
                return this.eri === t.eri && this.eci === t.eci && this.sri === t.sri && this.sci === t.sci
            }
        }]) && y(e.prototype, n), i && y(e, i), t
    }();

    function g(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var b = function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.range = new p(0, 0, 0, 0), this.ri = 0, this.ci = 0
        }
        var e, n, i;
        return e = t, (n = [{
            key: "multiple",
            value: function() {
                return this.range.multiple()
            }
        }, {
            key: "setIndexes",
            value: function(t, e) {
                this.ri = t, this.ci = e
            }
        }, {
            key: "size",
            value: function() {
                return this.range.size()
            }
        }]) && g(e.prototype, n), i && g(e, i), t
    }();
    var m = function t() {
        ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.x = 0, this.y = 0, this.ri = 0, this.ci = 0
    };

    function w(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var k = function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.undoItems = [], this.redoItems = []
        }
        var e, n, i;
        return e = t, (n = [{
            key: "add",
            value: function(t) {
                this.undoItems.push(JSON.stringify(t)), this.redoItems = []
            }
        }, {
            key: "canUndo",
            value: function() {
                return this.undoItems.length > 0
            }
        }, {
            key: "canRedo",
            value: function() {
                return this.redoItems.length > 0
            }
        }, {
            key: "undo",
            value: function(t, e) {
                var n = this.undoItems,
                    i = this.redoItems;
                this.canUndo() && (i.push(JSON.stringify(t)), e(JSON.parse(n.pop())))
            }
        }, {
            key: "redo",
            value: function(t, e) {
                var n = this.undoItems,
                    i = this.redoItems;
                this.canRedo() && (n.push(JSON.stringify(t)), e(JSON.parse(i.pop())))
            }
        }]) && w(e.prototype, n), i && w(e, i), t
    }();

    function x(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var O = function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.range = null, this.state = "clear"
        }
        var e, n, i;
        return e = t, (n = [{
            key: "copy",
            value: function(t) {
                return this.range = t, this.state = "copy", this
            }
        }, {
            key: "cut",
            value: function(t) {
                return this.range = t, this.state = "cut", this
            }
        }, {
            key: "isCopy",
            value: function() {
                return "copy" === this.state
            }
        }, {
            key: "isCut",
            value: function() {
                return "cut" === this.state
            }
        }, {
            key: "isClear",
            value: function() {
                return "clear" === this.state
            }
        }, {
            key: "clear",
            value: function() {
                this.range = null, this.state = "clear"
            }
        }]) && x(e.prototype, n), i && x(e, i), t
    }();

    function E(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var S = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this._ = e
        }
        var e, n, i;
        return e = t, (n = [{
            key: "forEach",
            value: function(t) {
                this._.forEach(t)
            }
        }, {
            key: "deleteWithin",
            value: function(t) {
                this._ = this._.filter(function(e) {
                    return !e.within(t)
                })
            }
        }, {
            key: "getFirstIncludes",
            value: function(t, e) {
                for (var n = 0; n < this._.length; n += 1) {
                    var i = this._[n];
                    if (i.includes(t, e)) return i
                }
                return null
            }
        }, {
            key: "filterIntersects",
            value: function(e) {
                return new t(this._.filter(function(t) {
                    return t.intersects(e)
                }))
            }
        }, {
            key: "union",
            value: function(t) {
                var e = t;
                return this._.forEach(function(n) {
                    n.intersects(t) && (e = n.union(e))
                }), e
            }
        }, {
            key: "add",
            value: function(t) {
                this.deleteWithin(t), this._.push(t)
            }
        }, {
            key: "shift",
            value: function(t, e, n, i) {
                this._.forEach(function(r) {
                    var o = r.sri,
                        a = r.sci,
                        l = r.eri,
                        s = r.eci,
                        c = r;
                    "row" === t ? o >= e ? (c.sri += n, c.eri += n) : o < e && e <= l && (c.eri += n, i(o, a, n, 0)) : "column" === t && (a >= e ? (c.sci += n, c.eci += n) : a < e && e <= s && (c.eci += n, i(o, a, 0, n)))
                })
            }
        }, {
            key: "move",
            value: function(t, e, n) {
                this._.forEach(function(i) {
                    var r = i;
                    r.within(t) && (r.eri += e, r.sri += e, r.sci += n, r.eci += n)
                })
            }
        }, {
            key: "setData",
            value: function(t) {
                return this._ = t.map(function(t) {
                    return p.valueOf(t)
                }), this
            }
        }, {
            key: "getData",
            value: function() {
                return this._.map(function(t) {
                    return t.toString()
                })
            }
        }]) && E(e.prototype, n), i && E(e, i), t
    }();
    var C = {
        cloneDeep: function(t) {
            return JSON.parse(JSON.stringify(t))
        },
        merge: function() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return function t() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                return i.forEach(function(n) {
                    Object.keys(n).forEach(function(i) {
                        var r = n[i];
                        "string" == typeof r || "number" == typeof r || "boolean" == typeof r ? e[i] = r : "function" != typeof r && !Array.isArray(r) && r instanceof Object ? (e[i] = e[i] || {}, t(e[i], r)) : e[i] = r
                    })
                }), e
            }.apply(void 0, [{}].concat(e))
        },
        equals: function t(e, n) {
            var i = Object.keys(e);
            if (i.length !== Object.keys(n).length) return !1;
            for (var r = 0; r < i.length; r += 1) {
                var o = i[r],
                    a = e[o],
                    l = n[o];
                if (void 0 === l) return !1;
                if ("string" == typeof a || "number" == typeof a || "boolean" == typeof a) {
                    if (a !== l) return !1
                } else if (Array.isArray(a)) {
                    if (a.length !== l.length) return !1;
                    for (var s = 0; s < a.length; s += 1)
                        if (!t(a[s], l[s])) return !1
                } else if ("function" != typeof a && !Array.isArray(a) && a instanceof Object && !t(a, l)) return !1
            }
            return !0
        },
        arrayEquals: function(t, e) {
            if (t.length !== e.length) return !1;
            for (var n = 0; n < t.length; n += 1)
                if (t[n] !== e[n]) return !1;
            return !0
        },
        sum: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(t) {
                    return t
                },
                n = 0,
                i = 0;
            return Object.keys(t).forEach(function(r) {
                n += e(t[r], r), i += 1
            }), [n, i]
        },
        rangeEach: function(t, e, n) {
            for (var i = t; i < e; i += 1) n(i)
        },
        rangeSum: function(t, e, n) {
            for (var i = 0, r = t; r < e; r += 1) i += n(r);
            return i
        },
        rangeReduceIf: function(t, e, n, i, r, o) {
            for (var a = n, l = i, s = t; s < e && !(a > r); s += 1) a += l = o(s);
            return [s, a - l, l]
        },
        deleteProperty: function(t, e) {
            var n = t["".concat(e)];
            return delete t["".concat(e)], n
        }
    };

    function T(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = [],
                i = !0,
                r = !1,
                o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    i || null == l.return || l.return()
                } finally {
                    if (r) throw o
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function A(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var j = function() {
        function t(e) {
            var n = e.len,
                i = e.height;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this._ = {}, this.len = n, this.height = i
        }
        var e, n, i;
        return e = t, (n = [{
            key: "getHeight",
            value: function(t) {
                var e = this.get(t);
                return e && e.height ? e.height : this.height
            }
        }, {
            key: "setHeight",
            value: function(t, e) {
                this.getOrNew(t).height = e
            }
        }, {
            key: "setStyle",
            value: function(t, e) {
                this.getOrNew(t).style = e
            }
        }, {
            key: "sumHeight",
            value: function(t, e) {
                var n = this;
                return C.rangeSum(t, e, function(t) {
                    return n.getHeight(t)
                })
            }
        }, {
            key: "totalHeight",
            value: function() {
                return this.sumHeight(0, this.len)
            }
        }, {
            key: "get",
            value: function(t) {
                return this._[t]
            }
        }, {
            key: "getOrNew",
            value: function(t) {
                return this._[t] = this._[t] || {
                    cells: {}
                }, this._[t]
            }
        }, {
            key: "getCell",
            value: function(t, e) {
                var n = this.get(t);
                return void 0 !== n && void 0 !== n.cells && void 0 !== n.cells[e] ? n.cells[e] : null
            }
        }, {
            key: "getCellMerge",
            value: function(t, e) {
                var n = this.getCell(t, e);
                return n && n.merge ? n.merge : [0, 0]
            }
        }, {
            key: "getCellOrNew",
            value: function(t, e) {
                var n = this.getOrNew(t);
                return n.cells[e] = n.cells[e] || {}, n.cells[e]
            }
        }, {
            key: "setCell",
            value: function(t, e, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "all",
                    r = this.getOrNew(t);
                "all" === i ? r.cells[e] = n : "text" === i ? (r.cells[e] = r.cells[e] || {}, r.cells[e].text = n.text) : "format" === i && (r.cells[e] = r.cells[e] || {}, r.cells[e].style = n.style, n.merge && (r.cells[e].merge = n.merge))
            }
        }, {
            key: "setCellText",
            value: function(t, e, n) {
                this.getCellOrNew(t, e).text = n
            }
        }, {
            key: "copyPaste",
            value: function(t, e, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {},
                    o = t.sri,
                    a = t.sci,
                    l = t.eri,
                    s = t.eci,
                    c = e.sri,
                    u = e.sci,
                    h = e.eri,
                    d = e.eci,
                    v = T(t.size(), 2),
                    y = v[0],
                    p = v[1],
                    g = T(e.size(), 2),
                    b = g[0],
                    m = g[1],
                    w = !0,
                    k = 0;
                (h < o || d < a) && (w = !1, k = h < o ? b : m);
                for (var x = o; x <= l; x += 1)
                    if (this._[x])
                        for (var O = a; O <= s; O += 1)
                            if (this._[x].cells && this._[x].cells[O])
                                for (var E = c; E <= h; E += y)
                                    for (var S = u; S <= d; S += p) {
                                        var A = E + (x - o),
                                            j = S + (O - a),
                                            _ = C.cloneDeep(this._[x].cells[O]);
                                        i && _ && _.text && _.text.length > 0 && function() {
                                            var t = _.text,
                                                e = S - u + (E - c) + 1;
                                            if (w || (e -= k + 1), "=" === t[0]) _.text = t.replace(/\w{1,3}\d/g, function(t) {
                                                var n = 0,
                                                    i = 0;
                                                return o === c ? n = e : i = e, f(t, n, i)
                                            });
                                            else {
                                                var n = /[\\.\d]+$/.exec(t);
                                                if (null !== n) {
                                                    var i = Number(n[0]) + e;
                                                    _.text = t.substring(0, n.index) + i
                                                }
                                            }
                                        }(), this.setCell(A, j, _, n), r(A, j, _)
                                    }
            }
        }, {
            key: "cutPaste",
            value: function(t, e) {
                var n = this,
                    i = {};
                this.each(function(r) {
                    n.eachCells(r, function(o) {
                        var a = parseInt(r, 10),
                            l = parseInt(o, 10);
                        t.includes(r, o) && (a = e.sri + (a - t.sri), l = e.sci + (l - t.sci)), i[a] = i[a] || {
                            cells: {}
                        }, i[a].cells[l] = n._[r].cells[o]
                    })
                }), this._ = i
            }
        }, {
            key: "insert",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = {};
                this.each(function(i, r) {
                    var o = parseInt(i, 10);
                    o >= t && (o += e), n[o] = r
                }), this._ = n, this.len += e
            }
        }, {
            key: "delete",
            value: function(t, e) {
                var n = e - t + 1,
                    i = {};
                this.each(function(r, o) {
                    var a = parseInt(r, 10);
                    a < t ? i[a] = o : r > e && (i[a - n] = o)
                }), this._ = i, this.len -= n
            }
        }, {
            key: "insertColumn",
            value: function(t) {
                var e = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                this.each(function(i, r) {
                    var o = {};
                    e.eachCells(i, function(e, i) {
                        var r = parseInt(e, 10);
                        r >= t && (r += n), o[r] = i
                    }), r.cells = o
                })
            }
        }, {
            key: "deleteColumn",
            value: function(t, e) {
                var n = this,
                    i = e - t + 1;
                this.each(function(r, o) {
                    var a = {};
                    n.eachCells(r, function(n, r) {
                        var o = parseInt(n, 10);
                        o < t ? a[o] = r : o > e && (a[o - i] = r)
                    }), o.cells = a
                })
            }
        }, {
            key: "deleteCells",
            value: function(t) {
                var e = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
                t.each(function(t, i) {
                    e.deleteCell(t, i, n)
                })
            }
        }, {
            key: "deleteCell",
            value: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "all",
                    i = this.get(t);
                if (null !== i) {
                    var r = this.getCell(t, e);
                    null !== r && ("all" === n ? delete i.cells[e] : "text" === n ? (r.text && delete r.text, r.value && delete r.value) : "format" === n ? (void 0 !== r.style && delete r.style, r.merge && delete r.merge) : "merge" === n && r.merge && delete r.merge)
                }
            }
        }, {
            key: "each",
            value: function(t) {
                Object.entries(this._).forEach(function(e) {
                    var n = T(e, 2),
                        i = n[0],
                        r = n[1];
                    t(i, r)
                })
            }
        }, {
            key: "eachCells",
            value: function(t, e) {
                this._[t] && this._[t].cells && Object.entries(this._[t].cells).forEach(function(t) {
                    var n = T(t, 2),
                        i = n[0],
                        r = n[1];
                    e(i, r)
                })
            }
        }, {
            key: "setData",
            value: function(t) {
                this._ = t
            }
        }, {
            key: "getData",
            value: function() {
                return this._
            }
        }]) && A(e.prototype, n), i && A(e, i), t
    }();

    function _(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var P = function() {
            function t(e) {
                var n = e.len,
                    i = e.width,
                    r = e.indexWidth,
                    o = e.minWidth;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this._ = {}, this.len = n, this.width = i, this.indexWidth = r, this.minWidth = o
            }
            var e, n, i;
            return e = t, (n = [{
                key: "setData",
                value: function(t) {
                    this._ = t
                }
            }, {
                key: "getData",
                value: function() {
                    return this._
                }
            }, {
                key: "getWidth",
                value: function(t) {
                    var e = this._[t];
                    return e && e.width ? e.width : this.width
                }
            }, {
                key: "getOrNew",
                value: function(t) {
                    return this._[t] = this._[t] || {}, this._[t]
                }
            }, {
                key: "setWidth",
                value: function(t, e) {
                    this.getOrNew(t).width = e
                }
            }, {
                key: "setStyle",
                value: function(t, e) {
                    this.getOrNew(t).style = e
                }
            }, {
                key: "sumWidth",
                value: function(t, e) {
                    var n = this;
                    return C.rangeSum(t, e, function(t) {
                        return n.getWidth(t)
                    })
                }
            }, {
                key: "totalWidth",
                value: function() {
                    return this.sumWidth(0, this.len)
                }
            }]) && _(e.prototype, n), i && _(e, i), t
        }(),
        z = "en",
        I = {
            en: {
                toolbar: {
                    undo: "Undo",
                    redo: "Redo",
                    paintformat: "Paint format",
                    clearformat: "Clear format",
                    format: "Format",
                    font: "Font",
                    fontSize: "Font size",
                    fontBold: "Font bold",
                    fontItalic: "Font italic",
                    underline: "Underline",
                    strike: "Strike",
                    textColor: "Text color",
                    fillColor: "Fill color",
                    border: "Borders",
                    merge: "Merge cells",
                    align: "Horizontal align",
                    valign: "Vertical align",
                    textwrap: "Text wrapping",
                    freeze: "Freeze cell",
                    formula: "Functions",
                    more: "More"
                },
                contextmenu: {
                    copy: "Copy",
                    cut: "Cut",
                    paste: "Paste",
                    pasteValue: "Paste values only",
                    pasteFormat: "Paste format only",
                    insertRow: "Insert row",
                    insertColumn: "Insert column",
                    deleteRow: "Delete row",
                    deleteColumn: "Delete column",
                    deleteCell: "Delete cell",
                    deleteCellText: "Delete cell text",
                    validation: "Data validations"
                },
                format: {
                    normal: "Normal",
                    text: "Plain Text",
                    number: "Number",
                    percent: "Percent",
                    rmb: "RMB",
                    usd: "USD",
                    date: "Date",
                    time: "Time",
                    datetime: "Date time",
                    duration: "Duration"
                },
                formula: {
                    sum: "Sum",
                    average: "Average",
                    max: "Max",
                    min: "Min",
                    concat: "Concat"
                },
                validation: {
                    required: "it must be required",
                    notMatch: "it not match its validation rule",
                    between: "it is between {} and {}",
                    notBetween: "it is not between {} and {}",
                    notIn: "it is not in list",
                    equal: "it equal to {}",
                    notEqual: "it not equal to {}",
                    lessThan: "it less than {}",
                    lessThanEqual: "it less than or equal to {}",
                    greaterThan: "it greater than {}",
                    greaterThanEqual: "it greater than or equal to {}"
                },
                calendar: {
                    weeks: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                },
                button: {
                    cancel: "Cancel",
                    remove: "Remove",
                    save: "Save"
                },
                dataValidation: {
                    mode: "Mode",
                    range: "Cell Range",
                    criteria: "Criteria",
                    modeType: {
                        cell: "Cell",
                        column: "Colun",
                        row: "Row"
                    },
                    type: {
                        list: "List",
                        number: "Number",
                        date: "Date",
                        phone: "Phone",
                        email: "Email"
                    },
                    operator: {
                        be: "between",
                        nbe: "not betwwen",
                        lt: "less than",
                        lte: "less than or equal to",
                        gt: "greater than",
                        gte: "greater than or equal to",
                        eq: "equal to",
                        neq: "not equal to"
                    }
                }
            }
        };

    function D(t, e) {
        if (e && e[z])
            for (var n = e[z], i = t.split("."), r = 0; r < i.length; r += 1) {
                var o = n[i[r]];
                if (r === i.length - 1) return o;
                if (!o) return;
                n = o
            }
    }

    function R(t) {
        var e = D(t, I);
        return !e && window && window.x && window.x.spreadsheet && window.x.spreadsheet.$messages && (e = D(t, window.x.spreadsheet.$messages)), e || ""
    }

    function W(t) {
        return function() {
            return R(t)
        }
    }

    function N(t, e) {
        z = t, e && (I[t] = e)
    }

    function F(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = [],
                i = !0,
                r = !1,
                o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    i || null == l.return || l.return()
                } finally {
                    if (r) throw o
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function H(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var M = {
        phone: /^[1-9]\d{10}$/,
        email: /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/
    };

    function V(t, e) {
        var n = "";
        if (!t) {
            for (var i = arguments.length, r = new Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++) r[o - 2] = arguments[o];
            n = R.apply(void 0, ["validation.".concat(e)].concat(r))
        }
        return [t, n]
    }
    var q = function() {
        function t(e, n, i, r) {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.required = n, this.value = i, this.type = e, this.operator = r, this.message = ""
        }
        var e, n, i;
        return e = t, (n = [{
            key: "parseValue",
            value: function(t) {
                var e = this.type;
                return "date" === e ? new Date(t) : "number" === e ? Number(t) : t
            }
        }, {
            key: "equals",
            value: function(t) {
                var e = this.type === t.type && this.required === t.required && this.operator === t.operator;
                return e && (e = Array.isArray(this.value) ? C.arrayEquals(this.value, t.value) : this.value === t.value), e
            }
        }, {
            key: "values",
            value: function() {
                return this.value.split(",")
            }
        }, {
            key: "validate",
            value: function(t) {
                var e = this.required,
                    n = this.operator,
                    i = this.value,
                    r = this.type;
                if (e && /^\s*$/.test(t)) return V(!1, "required");
                if (M[r] && !M[r].test(t)) return V(!1, "notMatch");
                if ("list" === r) return V(this.values().includes(t), "notIn");
                if (n) {
                    var o = this.parseValue(t);
                    if ("be" === n) {
                        var a = F(i, 2),
                            l = a[0],
                            s = a[1];
                        return V(o >= this.parseValue(l) && o <= this.parseValue(s), "between", l, s)
                    }
                    if ("nbe" === n) {
                        var c = F(i, 2),
                            u = c[0],
                            h = c[1];
                        return V(o < this.parseValue(u) || o > this.parseValue(h), "notBetween", u, h)
                    }
                    if ("eq" === n) return V(o === this.parseValue(i), "equal", i);
                    if ("neq" === n) return V(o !== this.parseValue(i), "notEqual", i);
                    if ("lt" === n) return V(o < this.parseValue(i), "lessThan", i);
                    if ("lte" === n) return V(o <= this.parseValue(i), "lessThanEqual", i);
                    if ("gt" === n) return V(o > this.parseValue(i), "greaterThan", i);
                    if ("gte" === n) return V(o >= this.parseValue(i), "greaterThanEqual", i)
                }
                return [!0]
            }
        }]) && H(e.prototype, n), i && H(e, i), t
    }();

    function B(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = [],
                i = !0,
                r = !1,
                o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    i || null == l.return || l.return()
                } finally {
                    if (r) throw o
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function L(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function Y(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function U(t, e, n) {
        return e && Y(t.prototype, e), n && Y(t, n), t
    }
    var $ = function() {
            function t(e, n, i) {
                L(this, t), this.refs = n, this.mode = e, this.validator = i
            }
            return U(t, [{
                key: "includes",
                value: function(t, e) {
                    for (var n = this.refs, i = 0; i < n.length; i += 1) {
                        if (p.valueOf(n[i]).includes(t, e)) return !0
                    }
                    return !1
                }
            }, {
                key: "addRef",
                value: function(t) {
                    this.remove(p.valueOf(t)), this.refs.push(t)
                }
            }, {
                key: "remove",
                value: function(t) {
                    var e = [];
                    this.refs.forEach(function(n) {
                        var i = p.valueOf(n);
                        i.intersects(t) ? i.difference(t).forEach(function(t) {
                            return e.push(t.toString())
                        }) : e.push(n)
                    }), this.refs = e
                }
            }, {
                key: "getData",
                value: function() {
                    var t = this.refs,
                        e = this.mode,
                        n = this.validator;
                    return {
                        refs: t,
                        mode: e,
                        type: n.type,
                        required: n.required,
                        operator: n.operator,
                        value: n.value
                    }
                }
            }], [{
                key: "valueOf",
                value: function(e) {
                    var n = e.refs,
                        i = e.mode,
                        r = e.type,
                        o = e.required,
                        a = e.operator,
                        l = e.value;
                    return new t(i, n, new q(r, o, l, a))
                }
            }]), t
        }(),
        X = function() {
            function t() {
                L(this, t), this._ = [], this.errors = {}
            }
            return U(t, [{
                key: "getError",
                value: function(t, e) {
                    return this.errors["".concat(t, "_").concat(e)]
                }
            }, {
                key: "validate",
                value: function(t, e, n) {
                    var i = this.get(t, e),
                        r = "".concat(t, "_").concat(e),
                        o = this.errors;
                    if (null !== i) {
                        var a = B(i.validator.validate(n), 2),
                            l = a[0],
                            s = a[1];
                        l ? delete o[r] : o[r] = s
                    } else delete o[r];
                    return !0
                }
            }, {
                key: "add",
                value: function(t, e, n) {
                    var i = n.type,
                        r = n.required,
                        o = n.value,
                        a = n.operator,
                        l = new q(i, r, o, a),
                        s = this.getByValidator(l);
                    null !== s ? s.addRef(e) : this._.push(new $(t, [e], l))
                }
            }, {
                key: "getByValidator",
                value: function(t) {
                    for (var e = 0; e < this._.length; e += 1) {
                        var n = this._[e];
                        if (n.validator.equals(t)) return n
                    }
                    return null
                }
            }, {
                key: "get",
                value: function(t, e) {
                    for (var n = 0; n < this._.length; n += 1) {
                        var i = this._[n];
                        if (i.includes(t, e)) return i
                    }
                    return null
                }
            }, {
                key: "remove",
                value: function(t) {
                    this.each(function(e) {
                        e.remove(t)
                    })
                }
            }, {
                key: "each",
                value: function(t) {
                    this._.forEach(function(e) {
                        return t(e)
                    })
                }
            }, {
                key: "getData",
                value: function() {
                    return this._.filter(function(t) {
                        return t.refs.length > 0
                    }).map(function(t) {
                        return t.getData()
                    })
                }
            }, {
                key: "setData",
                value: function(t) {
                    this._ = t.map(function(t) {
                        return $.valueOf(t)
                    })
                }
            }]), t
        }();

    function J(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function K(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = [],
                i = !0,
                r = !1,
                o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    i || null == l.return || l.return()
                } finally {
                    if (r) throw o
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    var Z = {
        view: {
            height: function() {
                return document.documentElement.clientHeight
            },
            width: function() {
                return document.documentElement.clientWidth
            }
        },
        showGrid: !0,
        showToolbar: !0,
        row: {
            len: 100,
            height: 20
        },
        col: {
            len: 26,
            width: 100,
            indexWidth: 60,
            minWidth: 60
        },
        style: {
            bgcolor: "#ffffff",
            align: "left",
            valign: "middle",
            textwrap: !1,
            strike: !1,
            underline: !1,
            color: "#0a0a0a",
            font: {
                name: "Arial",
                size: 10,
                bold: !1,
                italic: !1
            }
        }
    };

    function G(t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = this.rows,
            o = this.merges;
        "all" !== n && "format" !== n || (r.deleteCells(e, n), o.deleteWithin(e)), r.copyPaste(t, e, n, i, function(t, e, n) {
            if (n && n.merge) {
                var i = K(n.merge, 2),
                    r = i[0],
                    a = i[1];
                if (r <= 0 && a <= 0) return;
                o.add(new p(t, e, t + r, e + a))
            }
        })
    }

    function Q(t, e, n) {
        var i = this.styles,
            r = this.rows.getCellOrNew(t, e),
            o = {};
        void 0 !== r.style && (o = C.cloneDeep(i[r.style])), Object.assign(o, {
            border: n
        }), r.style = this.addStyle(o)
    }
    var tt = function() {
        function t(e, n) {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.settings = C.merge(Z, n || {}), this.name = e || "sheet", this.freeze = [0, 0], this.styles = [], this.merges = new S, this.rows = new j(this.settings.row), this.cols = new P(this.settings.col), this.validations = new X, this.hyperlinks = {}, this.comments = {}, this.selector = new b, this.scroll = new m, this.history = new k, this.clipboard = new O, this.change = function() {}
        }
        var e, n, i;
        return e = t, (n = [{
            key: "addValidation",
            value: function(t, e, n) {
                var i = this;
                this.changeData(function() {
                    i.validations.add(t, e, n)
                })
            }
        }, {
            key: "removeValidation",
            value: function() {
                var t = this,
                    e = this.selector.range;
                this.changeData(function() {
                    t.validations.remove(e)
                })
            }
        }, {
            key: "getSelectedValidator",
            value: function() {
                var t = this.selector,
                    e = t.ri,
                    n = t.ci,
                    i = this.validations.get(e, n);
                return i ? i.validator : null
            }
        }, {
            key: "getSelectedValidation",
            value: function() {
                var t = this.selector,
                    e = t.ri,
                    n = t.ci,
                    i = t.range,
                    r = this.validations.get(e, n),
                    o = {
                        ref: i.toString()
                    };
                return null !== r && (o.mode = r.mode, o.validator = r.validator), o
            }
        }, {
            key: "canUndo",
            value: function() {
                return this.history.canUndo()
            }
        }, {
            key: "canRedo",
            value: function() {
                return this.history.canRedo()
            }
        }, {
            key: "undo",
            value: function() {
                var t = this;
                this.history.undo(this.getData(), function(e) {
                    t.setData(e)
                })
            }
        }, {
            key: "redo",
            value: function() {
                var t = this;
                this.history.redo(this.getData(), function(e) {
                    t.setData(e)
                })
            }
        }, {
            key: "copy",
            value: function() {
                this.clipboard.copy(this.selector.range)
            }
        }, {
            key: "cut",
            value: function() {
                this.clipboard.cut(this.selector.range)
            }
        }, {
            key: "paste",
            value: function() {
                var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "all",
                    n = this.clipboard,
                    i = this.selector;
                n.isClear() || this.changeData(function() {
                    n.isCopy() ? G.call(t, n.range, i.range, e) : n.isCut() && function(t, e) {
                        var n = this.clipboard,
                            i = this.rows,
                            r = this.merges;
                        i.cutPaste(t, e), r.move(t, e.sri - t.sri, e.sci - t.sci), n.clear()
                    }.call(t, n.range, i.range)
                })
            }
        }, {
            key: "autofill",
            value: function(t, e) {
                var n = this;
                this.changeData(function() {
                    G.call(n, n.selector.range, t, e, !0)
                })
            }
        }, {
            key: "clearClipboard",
            value: function() {
                this.clipboard.clear()
            }
        }, {
            key: "calSelectedRangeByEnd",
            value: function(t, e) {
                var n = this.selector,
                    i = this.rows,
                    r = this.cols,
                    o = this.merges,
                    a = n.range,
                    l = a.sri,
                    s = a.sci,
                    c = a.eri,
                    u = a.eci,
                    h = n.ri,
                    f = n.ci,
                    d = t,
                    v = e;
                return t < 0 && (d = i.len - 1), e < 0 && (v = r.len - 1), d <= h ? (l = d, c = h) : c = d, v <= f ? (s = v, u = f) : u = v, n.range = o.union(new p(l, s, c, u)), n.range
            }
        }, {
            key: "calSelectedRangeByStart",
            value: function(t, e) {
                var n = this.selector,
                    i = this.rows,
                    r = this.cols,
                    o = this.merges.getFirstIncludes(t, e);
                return null === o && (o = new p(t, e, t, e), -1 === t && (o.sri = 0, o.eri = i.len - 1), -1 === e && (o.sci = 0, o.eci = r.len - 1)), n.range = o, o
            }
        }, {
            key: "setSelectedCellAttr",
            value: function(t, e) {
                var n = this;
                this.changeData(function() {
                    var i = n.selector,
                        r = n.styles,
                        o = n.rows;
                    if ("merge" === t) e ? n.merge() : n.unmerge();
                    else if ("border" === t)(function(t) {
                        var e = this,
                            n = t.mode,
                            i = t.style,
                            r = t.color,
                            o = this.styles,
                            a = this.selector,
                            l = this.rows,
                            s = a.range,
                            c = s.sri,
                            u = s.sci,
                            h = s.eri,
                            f = s.eci,
                            d = !this.isSignleSelected();
                        if (d || "inside" !== n && "horizontal" !== n && "vertical" !== n)
                            if ("outside" !== n || d) {
                                if ("none" === n) a.range.each(function(t, n) {
                                    var i = l.getCell(t, n);
                                    if (i && void 0 !== i.style) {
                                        var r = C.cloneDeep(o[i.style]);
                                        delete r.border, i.style = e.addStyle(r)
                                    }
                                });
                                else if ("all" === n || "inside" === n || "outside" === n || "horizontal" === n || "vertical" === n) ! function() {
                                    for (var t = [], o = c; o <= h; o += 1)
                                        for (var a = u; a <= f; a += 1) {
                                            for (var s = [], v = 0; v < t.length; v += 1) {
                                                var y = K(t[v], 4),
                                                    p = y[0],
                                                    g = y[1],
                                                    b = y[2],
                                                    m = y[3];
                                                if (o === p + b + 1 && s.push(v), p <= o && o <= p + b && a === g) {
                                                    a += m + 1;
                                                    break
                                                }
                                            }
                                            if (s.forEach(function(e) {
                                                    return t.splice(e, 1)
                                                }), a > f) break;
                                            var w = l.getCell(o, a),
                                                k = 0,
                                                x = 0;
                                            if (w && w.merge) {
                                                var O = K(w.merge, 2);
                                                k = O[0], x = O[1], t.push([o, a, k, x])
                                            }
                                            var E = k > 0 && o + k === h,
                                                S = x > 0 && a + x === f,
                                                C = {};
                                            "all" === n ? C = {
                                                bottom: [i, r],
                                                top: [i, r],
                                                left: [i, r],
                                                right: [i, r]
                                            } : "inside" === n ? (!S && a < f && (C.right = [i, r]), !E && o < h && (C.bottom = [i, r])) : "horizontal" === n ? !E && o < h && (C.bottom = [i, r]) : "vertical" === n ? !S && a < f && (C.right = [i, r]) : "outside" === n && d && (c === o && (C.top = [i, r]), (E || h === o) && (C.bottom = [i, r]), u === a && (C.left = [i, r]), (S || f === a) && (C.right = [i, r])), Object.keys(C).length > 0 && Q.call(e, o, a, C), a += x
                                        }
                                }();
                                else if ("top" === n || "bottom" === n)
                                    for (var v = u; v <= f; v += 1) "top" === n && (Q.call(this, c, v, {
                                        top: [i, r]
                                    }), v += l.getCellMerge(c, v)[1]), "bottom" === n && (Q.call(this, h, v, {
                                        bottom: [i, r]
                                    }), v += l.getCellMerge(h, v)[1]);
                                else if ("left" === n || "right" === n)
                                    for (var y = c; y <= h; y += 1) "left" === n && (Q.call(this, y, u, {
                                        left: [i, r]
                                    }), y += l.getCellMerge(y, u)[0]), "right" === n && (Q.call(this, y, f, {
                                        right: [i, r]
                                    }), y += l.getCellMerge(y, f)[0])
                            } else Q.call(this, c, u, {
                                top: [i, r],
                                bottom: [i, r],
                                left: [i, r],
                                right: [i, r]
                            })
                    }).call(n, e);
                    else if ("formula" === t) {
                        o.getCellOrNew(i.ri, i.ci).text = "=".concat(e, "()")
                    } else i.range.each(function(i, a) {
                        var l = o.getCellOrNew(i, a),
                            s = {};
                        if (void 0 !== l.style && (s = C.cloneDeep(r[l.style])), "format" === t) s.format = e, l.style = n.addStyle(s);
                        else if ("font-bold" === t || "font-italic" === t || "font-name" === t || "font-size" === t) {
                            var c = {};
                            c[t.split("-")[1]] = e, s.font = Object.assign(s.font || {}, c), l.style = n.addStyle(s)
                        } else "strike" !== t && "textwrap" !== t && "underline" !== t && "align" !== t && "valign" !== t && "color" !== t && "bgcolor" !== t || (s[t] = e, l.style = n.addStyle(s))
                    })
                })
            }
        }, {
            key: "setSelectedCellText",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "input",
                    n = this.selector,
                    i = n.ri,
                    r = n.ci;
                this.setCellText(i, r, t, e)
            }
        }, {
            key: "getSelectedCell",
            value: function() {
                var t = this.selector,
                    e = t.ri,
                    n = t.ci;
                return this.rows.getCell(e, n)
            }
        }, {
            key: "xyInSelectedRect",
            value: function(t, e) {
                var n = this.getSelectedRect(),
                    i = n.left,
                    r = n.top,
                    o = n.width,
                    a = n.height,
                    l = t - this.cols.indexWidth,
                    s = e - this.rows.height;
                return l > i && l < i + o && s > r && s < r + a
            }
        }, {
            key: "getSelectedRect",
            value: function() {
                return this.getRect(this.selector.range)
            }
        }, {
            key: "getClipboardRect",
            value: function() {
                var t = this.clipboard;
                return t.isClear() ? {
                    left: -100,
                    top: -100
                } : this.getRect(t.range)
            }
        }, {
            key: "getRect",
            value: function(t) {
                var e = this.scroll,
                    n = this.rows,
                    i = this.cols,
                    r = t.sri,
                    o = t.sci,
                    a = t.eri,
                    l = t.eci;
                if (r < 0 && o < 0) return {
                    left: 0,
                    l: 0,
                    top: 0,
                    t: 0,
                    scroll: e
                };
                var s = this.cellPosition(r, o),
                    c = s.left,
                    u = s.top,
                    h = n.sumHeight(r, a + 1),
                    f = i.sumWidth(o, l + 1),
                    d = c - e.x,
                    v = u - e.y,
                    y = this.freezeTotalHeight(),
                    p = this.freezeTotalWidth();
                return p > 0 && p > c && (d = c), y > 0 && y > u && (v = u), {
                    l: c,
                    t: u,
                    left: d,
                    top: v,
                    height: h,
                    width: f,
                    scroll: e
                }
            }
        }, {
            key: "getCellRectByXY",
            value: function(t, e) {
                var n = this.scroll,
                    i = this.merges,
                    r = this.rows,
                    o = this.cols,
                    a = function(t, e) {
                        var n = this.rows,
                            i = this.freezeTotalHeight(),
                            r = n.height;
                        i + n.height < t && (r -= e);
                        var o = K(C.rangeReduceIf(0, n.len, r, n.height, t, function(t) {
                                return n.getHeight(t)
                            }), 3),
                            a = o[0],
                            l = o[1],
                            s = o[2];
                        return l <= 0 ? {
                            ri: -1,
                            top: 0,
                            height: s
                        } : {
                            ri: a - 1,
                            top: l,
                            height: s
                        }
                    }.call(this, e, n.y),
                    l = a.ri,
                    s = a.top,
                    c = a.height,
                    u = function(t, e) {
                        var n = this.cols,
                            i = this.freezeTotalWidth(),
                            r = n.indexWidth;
                        i + n.indexWidth < t && (r -= e);
                        var o = K(C.rangeReduceIf(0, n.len, r, n.indexWidth, t, function(t) {
                                return n.getWidth(t)
                            }), 3),
                            a = o[0],
                            l = o[1],
                            s = o[2];
                        return l <= 0 ? {
                            ci: -1,
                            left: 0,
                            width: n.indexWidth
                        } : {
                            ci: a - 1,
                            left: l,
                            width: s
                        }
                    }.call(this, t, n.x),
                    h = u.ci,
                    f = u.left,
                    d = u.width;
                if (-1 === h && (d = o.totalWidth()), -1 === l && (c = r.totalHeight()), l >= 0 || h >= 0) {
                    var v = i.getFirstIncludes(l, h);
                    if (v) {
                        l = v.sri, h = v.sci;
                        var y = this.cellRect(l, h);
                        f = y.left, s = y.top, d = y.width, c = y.height
                    }
                }
                return {
                    ri: l,
                    ci: h,
                    left: f,
                    top: s,
                    width: d,
                    height: c
                }
            }
        }, {
            key: "isSignleSelected",
            value: function() {
                var t = this.selector.range,
                    e = t.sri,
                    n = t.sci,
                    i = t.eri,
                    r = t.eci,
                    o = this.getCell(e, n);
                if (o && o.merge) {
                    var a = K(o.merge, 2),
                        l = a[0],
                        s = a[1];
                    if (e + l === i && n + s === r) return !0
                }
                return !this.selector.multiple()
            }
        }, {
            key: "canUnmerge",
            value: function() {
                var t = this.selector.range,
                    e = t.sri,
                    n = t.sci,
                    i = t.eri,
                    r = t.eci,
                    o = this.getCell(e, n);
                if (o && o.merge) {
                    var a = K(o.merge, 2),
                        l = a[0],
                        s = a[1];
                    if (e + l === i && n + s === r) return !0
                }
                return !1
            }
        }, {
            key: "merge",
            value: function() {
                var t = this,
                    e = this.selector,
                    n = this.rows;
                if (!this.isSignleSelected()) {
                    var i = K(e.size(), 2),
                        r = i[0],
                        o = i[1];
                    if (r > 1 || o > 1) {
                        var a = e.range,
                            l = a.sri,
                            s = a.sci;
                        this.changeData(function() {
                            var i = n.getCellOrNew(l, s);
                            i.merge = [r - 1, o - 1], t.merges.add(e.range), t.rows.deleteCells(e.range), t.rows.setCell(l, s, i)
                        })
                    }
                }
            }
        }, {
            key: "unmerge",
            value: function() {
                var t = this,
                    e = this.selector;
                if (this.isSignleSelected()) {
                    var n = e.range,
                        i = n.sri,
                        r = n.sci;
                    this.changeData(function() {
                        t.rows.deleteCell(i, r, "merge"), t.merges.deleteWithin(e.range)
                    })
                }
            }
        }, {
            key: "deleteCell",
            value: function() {
                var t = this,
                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "all",
                    n = this.selector;
                this.changeData(function() {
                    t.rows.deleteCells(n.range, e), "all" !== e && "format" !== e || t.merges.deleteWithin(n.range)
                })
            }
        }, {
            key: "insert",
            value: function(t) {
                var e = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                this.changeData(function() {
                    var i = e.selector.range,
                        r = i.sri,
                        o = i.sci,
                        a = e.rows,
                        l = e.merges,
                        s = e.cols,
                        c = r;
                    "row" === t ? a.insert(r, n) : "column" === t && (a.insertColumn(o, n), c = o, s.len += 1), l.shift(t, c, n, function(t, e, n, i) {
                        var r = a.getCell(t, e);
                        r.merge[0] += n, r.merge[1] += i
                    })
                })
            }
        }, {
            key: "delete",
            value: function(t) {
                var e = this;
                this.changeData(function() {
                    var n = e.rows,
                        i = e.merges,
                        r = e.selector,
                        o = e.cols,
                        a = r.range,
                        l = r.range,
                        s = l.sri,
                        c = l.sci,
                        u = l.eri,
                        h = l.eci,
                        f = K(r.range.size(), 2),
                        d = f[0],
                        v = f[1],
                        y = s,
                        p = d;
                    "row" === t ? n.delete(s, u) : "column" === t && (n.deleteColumn(c, h), y = a.sci, p = v, o.len -= 1), i.shift(t, y, -p, function(t, e, i, r) {
                        var o = n.getCell(t, e);
                        o.merge[0] += i, o.merge[1] += r, 0 === o.merge[0] && 0 === o.merge[1] && delete o.merge
                    })
                })
            }
        }, {
            key: "scrollx",
            value: function(t, e) {
                var n = this.scroll,
                    i = this.freeze,
                    r = this.cols,
                    o = K(i, 2)[1],
                    a = K(C.rangeReduceIf(o, r.len, 0, 0, t, function(t) {
                        return r.getWidth(t)
                    }), 3),
                    l = a[0],
                    s = a[1],
                    c = a[2],
                    u = s;
                t > 0 && (u += c), n.x !== u && (n.ci = t > 0 ? l - o : 0, n.x = u, e())
            }
        }, {
            key: "scrolly",
            value: function(t, e) {
                var n = this.scroll,
                    i = this.freeze,
                    r = this.rows,
                    o = K(i, 1)[0],
                    a = K(C.rangeReduceIf(o, r.len, 0, 0, t, function(t) {
                        return r.getHeight(t)
                    }), 3),
                    l = a[0],
                    s = a[1],
                    c = a[2],
                    u = s;
                t > 0 && (u += c), n.y !== u && (n.ri = t > 0 ? l - o : 0, n.y = u, e())
            }
        }, {
            key: "cellRect",
            value: function(t, e) {
                var n = this.rows,
                    i = this.cols,
                    r = this.cellPosition(t, e),
                    o = r.left,
                    a = r.top,
                    l = n.getCell(t, e),
                    s = i.getWidth(e),
                    c = n.getHeight(t);
                if (null !== l && l.merge) {
                    var u = K(l.merge, 2),
                        h = u[0],
                        f = u[1];
                    if (h > 0)
                        for (var d = 1; d <= h; d += 1) c += n.getHeight(t + d);
                    if (f > 0)
                        for (var v = 1; v <= f; v += 1) s += i.getWidth(e + v)
                }
                return {
                    left: o,
                    top: a,
                    width: s,
                    height: c,
                    cell: l
                }
            }
        }, {
            key: "cellPosition",
            value: function(t, e) {
                var n = this.cols,
                    i = this.rows;
                return {
                    left: n.sumWidth(0, e),
                    top: i.sumHeight(0, t)
                }
            }
        }, {
            key: "getCell",
            value: function(t, e) {
                return this.rows.getCell(t, e)
            }
        }, {
            key: "getCellTextOrDefault",
            value: function(t, e) {
                var n = this.getCell(t, e);
                return n && n.text ? n.text : ""
            }
        }, {
            key: "getCellStyle",
            value: function(t, e) {
                var n = this.getCell(t, e);
                return n && void 0 !== n.style ? this.styles[n.style] : null
            }
        }, {
            key: "getCellStyleOrDefault",
            value: function(t, e) {
                var n = this.styles,
                    i = this.rows.getCell(t, e),
                    r = i && void 0 !== i.style ? n[i.style] : {};
                return C.merge(this.defaultStyle(), r)
            }
        }, {
            key: "getSelectedCellStyle",
            value: function() {
                var t = this.selector,
                    e = t.ri,
                    n = t.ci;
                return this.getCellStyleOrDefault(e, n)
            }
        }, {
            key: "setCellText",
            value: function(t, e, n, i) {
                var r = this.rows,
                    o = this.history,
                    a = this.validations;
                "finished" === i ? (r.setCellText(t, e, ""), o.add(this.getData()), r.setCellText(t, e, n), a.validate(t, e, n)) : (r.setCellText(t, e, n), this.change(this.getData()))
            }
        }, {
            key: "freezeIsActive",
            value: function() {
                var t = K(this.freeze, 2),
                    e = t[0],
                    n = t[1];
                return e > 0 || n > 0
            }
        }, {
            key: "setFreeze",
            value: function(t, e) {
                var n = this;
                this.changeData(function() {
                    n.freeze = [t, e]
                })
            }
        }, {
            key: "freezeTotalWidth",
            value: function() {
                return this.cols.sumWidth(0, this.freeze[1])
            }
        }, {
            key: "freezeTotalHeight",
            value: function() {
                return this.rows.sumHeight(0, this.freeze[0])
            }
        }, {
            key: "setRowHeight",
            value: function(t, e) {
                var n = this;
                this.changeData(function() {
                    n.rows.setHeight(t, e)
                })
            }
        }, {
            key: "setColWidth",
            value: function(t, e) {
                var n = this;
                this.changeData(function() {
                    n.cols.setWidth(t, e)
                })
            }
        }, {
            key: "viewHeight",
            value: function() {
                var t = this.settings,
                    e = t.view,
                    n = t.showToolbar,
                    i = e.height();
                return n && (i -= 41), i
            }
        }, {
            key: "viewWidth",
            value: function() {
                return this.settings.view.width()
            }
        }, {
            key: "freezeViewRange",
            value: function() {
                var t = K(this.freeze, 2),
                    e = t[0],
                    n = t[1];
                return new p(0, 0, e - 1, n - 1)
            }
        }, {
            key: "viewRange",
            value: function() {
                for (var t = this.scroll, e = this.rows, n = this.cols, i = t.ri, r = t.ci, o = 0, a = 0, l = [e.len, n.len], s = l[0], c = l[1], u = i; u < e.len && (s = u, !((a += e.getHeight(u)) > this.viewHeight())); u += 1);
                for (var h = r; h < n.len && (c = h, !((o += n.getWidth(h)) > this.viewWidth())); h += 1);
                return new p(i, r, s, c)
            }
        }, {
            key: "eachMergesInView",
            value: function(t, e) {
                this.merges.filterIntersects(t).forEach(function(t) {
                    return e(t)
                })
            }
        }, {
            key: "rowEach",
            value: function(t, e, n) {
                for (var i = 0, r = this.rows, o = t; o <= e; o += 1) {
                    var a = r.getHeight(o);
                    if (n(o, i, a), (i += a) > this.viewHeight()) break
                }
            }
        }, {
            key: "colEach",
            value: function(t, e, n) {
                for (var i = 0, r = this.cols, o = t; o <= e; o += 1) {
                    var a = r.getWidth(o);
                    if (n(o, i, a), (i += a) > this.viewWidth()) break
                }
            }
        }, {
            key: "defaultStyle",
            value: function() {
                return this.settings.style
            }
        }, {
            key: "addStyle",
            value: function(t) {
                for (var e = this.styles, n = 0; n < e.length; n += 1) {
                    var i = e[n];
                    if (C.equals(i, t)) return n
                }
                return e.push(t), e.length - 1
            }
        }, {
            key: "changeData",
            value: function(t) {
                this.history.add(this.getData()), t(), this.change(this.getData())
            }
        }, {
            key: "setData",
            value: function(t) {
                var e = this;
                return Object.keys(t).forEach(function(n) {
                    if ("merges" === n || "rows" === n || "cols" === n || "validations" === n) e[n].setData(t[n]);
                    else if ("freeze" === n) {
                        var i = K(h(t[n]), 2),
                            r = i[0],
                            o = i[1];
                        e.freeze = [o, r]
                    } else void 0 !== t[n] && (e[n] = t[n])
                }), this
            }
        }, {
            key: "getData",
            value: function() {
                var t = this.name,
                    e = this.freeze,
                    n = this.styles,
                    i = this.merges,
                    r = this.rows,
                    o = this.cols,
                    a = this.validations;
                return {
                    name: t,
                    freeze: d(e[1], e[0]),
                    styles: n,
                    merges: i.getData(),
                    rows: r.getData(),
                    cols: o.getData(),
                    validations: a.getData()
                }
            }
        }]) && J(e.prototype, n), i && J(e, i), t
    }();

    function et(t, e, n) {
        t.addEventListener(e, n)
    }

    function nt(t, e, n) {
        t.removeEventListener(e, n)
    }

    function it(t) {
        t.xclickoutside && (nt(window.document.body, "click", t.xclickoutside), delete t.xclickoutside)
    }

    function rt(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(t) {
            t.hide()
        };
        t.xclickoutside = function(n) {
            t.contains(n.target) || (e(t), it(t))
        }, et(window.document.body, "click", t.xclickoutside)
    }

    function ot(t, e, n) {
        et(t, "mousemove", e), t.xEvtUp = function(i) {
            nt(t, "mousemove", e), nt(t, "mouseup", t.xEvtUp), n(i)
        }, et(t, "mouseup", t.xEvtUp)
    }

    function at(t, e, n, i) {
        i(Math.abs(t) > Math.abs(e) ? t > 0 ? "right" : "left" : e > 0 ? "down" : "up", e, n)
    }
    var lt = "x-spreadsheet";
    window.devicePixelRatio;

    function st(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var ct = function() {
        function t() {
            var e = this,
                n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                i = arguments.length > 1 ? arguments[1] : void 0;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.moving = !1, this.vertical = n, this.el = a("div", "".concat(lt, "-resizer ").concat(n ? "vertical" : "horizontal")).children(this.hoverEl = a("div", "".concat(lt, "-resizer-hover")).on("mousedown.stop", function(t) {
                return e.mousedownHandler(t)
            }), this.lineEl = a("div", "".concat(lt, "-resizer-line")).hide()).hide(), this.cRect = null, this.finishedFn = null, this.minDistance = i
        }
        var e, n, i;
        return e = t, (n = [{
            key: "show",
            value: function(t, e) {
                var n = this.moving,
                    i = this.vertical,
                    r = this.hoverEl,
                    o = this.lineEl,
                    a = this.el;
                if (!n) {
                    this.cRect = t;
                    var l = t.left,
                        s = t.top,
                        c = t.width,
                        u = t.height;
                    a.offset({
                        left: i ? l + c - 5 : l,
                        top: i ? s : s + u - 5
                    }).show(), r.offset({
                        width: i ? 5 : c,
                        height: i ? u : 5
                    }), o.offset({
                        width: i ? 0 : e.width,
                        height: i ? e.height : 0
                    })
                }
            }
        }, {
            key: "hide",
            value: function() {
                this.el.offset({
                    left: 0,
                    top: 0
                }).hide()
            }
        }, {
            key: "mousedownHandler",
            value: function(t) {
                var e = this,
                    n = t,
                    i = this.el,
                    r = this.lineEl,
                    o = this.cRect,
                    a = this.vertical,
                    l = this.minDistance,
                    s = a ? o.width : o.height;
                r.show(), ot(window, function(t) {
                    e.moving = !0, null !== n && 1 === t.buttons && (a ? (s += t.movementX) > l && i.css("left", "".concat(o.left + s, "px")) : (s += t.movementY) > l && i.css("top", "".concat(o.top + s, "px")), n = t)
                }, function() {
                    n = null, r.hide(), e.moving = !1, e.hide(), e.finishedFn && (s < l && (s = l), e.finishedFn(o, s))
                })
            }
        }]) && st(e.prototype, n), i && st(e, i), t
    }();

    function ut(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var ht = function() {
        function t(e) {
            var n = this;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.vertical = e, this.moveFn = null, this.el = a("div", "".concat(lt, "-scrollbar ").concat(e ? "vertical" : "horizontal")).child(this.contentEl = a("div", "")).on("mousemove.stop", function() {}).on("scroll.stop", function(t) {
                var e = t.target,
                    i = e.scrollTop,
                    r = e.scrollLeft;
                n.moveFn && n.moveFn(n.vertical ? i : r, t)
            })
        }
        var e, n, i;
        return e = t, (n = [{
            key: "move",
            value: function(t) {
                return this.el.scroll(t), this
            }
        }, {
            key: "scroll",
            value: function() {
                return this.el.scroll()
            }
        }, {
            key: "set",
            value: function(t, e) {
                var n = t - 1;
                if (e > n) {
                    var i = this.vertical ? "height" : "width";
                    this.el.css(i, "".concat(n, "px")).show(), this.contentEl.css(this.vertical ? "width" : "height", "1px").css(i, "".concat(e, "px"))
                } else this.el.hide();
                return this
            }
        }]) && ut(e.prototype, n), i && ut(e, i), t
    }();

    function ft(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function dt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function vt(t, e, n) {
        return e && dt(t.prototype, e), n && dt(t, n), t
    }
    var yt = 10,
        pt = function() {
            function t() {
                ft(this, t), this.cornerEl = a("div", "".concat(lt, "-selector-corner")), this.areaEl = a("div", "".concat(lt, "-selector-area")).child(this.cornerEl).hide(), this.clipboardEl = a("div", "".concat(lt, "-selector-clipboard")).hide(), this.autofillEl = a("div", "".concat(lt, "-selector-autofill")).hide(), this.el = a("div", "".concat(lt, "-selector")).css("z-index", "".concat(yt)).children(this.areaEl, this.clipboardEl, this.autofillEl).hide(), yt += 1
            }
            return vt(t, [{
                key: "setOffset",
                value: function(t) {
                    return this.el.offset(t).show(), this
                }
            }, {
                key: "hide",
                value: function() {
                    return this.el.hide(), this
                }
            }, {
                key: "setAreaOffset",
                value: function(t) {
                    var e = t.left,
                        n = t.top,
                        i = t.width,
                        r = t.height;
                    this.areaEl.offset({
                        width: i - 3 + .8,
                        height: r - 3 + .8,
                        left: e - .8,
                        top: n - .8
                    }).show()
                }
            }, {
                key: "setClipboardOffset",
                value: function(t) {
                    var e = t.left,
                        n = t.top,
                        i = t.width,
                        r = t.height;
                    this.clipboardEl.offset({
                        left: e,
                        top: n,
                        width: i - 5,
                        height: r - 5
                    })
                }
            }, {
                key: "showAutofill",
                value: function(t) {
                    var e = t.left,
                        n = t.top,
                        i = t.width,
                        r = t.height;
                    this.autofillEl.offset({
                        width: i - 3,
                        height: r - 3,
                        left: e,
                        top: n
                    }).show()
                }
            }, {
                key: "hideAutofill",
                value: function() {
                    this.autofillEl.hide()
                }
            }, {
                key: "showClipboard",
                value: function() {
                    this.clipboardEl.show()
                }
            }, {
                key: "hideClipboard",
                value: function() {
                    this.clipboardEl.hide()
                }
            }]), t
        }();

    function gt(t) {
        var e = this.data,
            n = t.left,
            i = t.top,
            r = t.width,
            o = t.height,
            a = t.scroll,
            l = t.l,
            s = t.t,
            c = e.freezeTotalWidth(),
            u = e.freezeTotalHeight(),
            h = n - c;
        c > l && (h -= a.x);
        var f = i - u;
        return u > s && (f -= a.y), {
            left: h,
            top: f,
            width: r,
            height: o
        }
    }

    function bt(t) {
        var e = this.data,
            n = t.left,
            i = t.width,
            r = t.height,
            o = t.l,
            a = t.t,
            l = t.scroll,
            s = e.freezeTotalWidth(),
            c = n - s;
        return s > o && (c -= l.x), {
            left: c,
            top: a,
            width: i,
            height: r
        }
    }

    function mt(t) {
        var e = this.data,
            n = t.top,
            i = t.width,
            r = t.height,
            o = t.l,
            a = t.t,
            l = t.scroll,
            s = e.freezeTotalHeight(),
            c = n - s;
        return s > a && (c -= l.y), {
            left: o,
            top: c,
            width: i,
            height: r
        }
    }

    function wt(t) {
        this.br.setAreaOffset(gt.call(this, t))
    }

    function kt(t) {
        this.t.setAreaOffset(bt.call(this, t))
    }

    function xt(t) {
        this.l.setAreaOffset(mt.call(this, t))
    }

    function Ot(t) {
        this.l.setClipboardOffset(mt.call(this, t))
    }

    function Et(t) {
        this.br.setClipboardOffset(gt.call(this, t))
    }

    function St(t) {
        this.t.setClipboardOffset(bt.call(this, t))
    }

    function Ct(t) {
        wt.call(this, t),
            function(t) {
                this.tl.setAreaOffset(t)
            }.call(this, t), kt.call(this, t), xt.call(this, t)
    }

    function Tt(t) {
        Et.call(this, t),
            function(t) {
                this.tl.setClipboardOffset(t)
            }.call(this, t), St.call(this, t), Ot.call(this, t)
    }
    var At = function() {
        function t(e) {
            ft(this, t), this.data = e, this.br = new pt, this.t = new pt, this.l = new pt, this.tl = new pt, this.br.el.show(), this.offset = null, this.areaOffset = null, this.indexes = null, this.range = null, this.arange = null, this.el = a("div", "".concat(lt, "-selectors")).children(this.tl.el, this.t.el, this.l.el, this.br.el).hide(), yt += 1
        }
        return vt(t, [{
            key: "hide",
            value: function() {
                this.el.hide()
            }
        }, {
            key: "resetOffset",
            value: function() {
                var t = this.data,
                    e = this.tl,
                    n = this.t,
                    i = this.l,
                    r = this.br,
                    o = t.freezeTotalHeight(),
                    a = t.freezeTotalWidth();
                o > 0 || a > 0 ? (e.setOffset({
                    width: a,
                    height: o
                }), n.setOffset({
                    left: a,
                    height: o
                }), i.setOffset({
                    top: o,
                    width: a
                }), r.setOffset({
                    left: a,
                    top: o
                })) : (e.hide(), n.hide(), i.hide(), r.setOffset({
                    left: 0,
                    top: 0
                }))
            }
        }, {
            key: "resetAreaOffset",
            value: function() {
                var t = this.data.getSelectedRect(),
                    e = this.data.getClipboardRect();
                Ct.call(this, t), Tt.call(this, e), this.resetOffset()
            }
        }, {
            key: "resetBRTAreaOffset",
            value: function() {
                var t = this.data.getSelectedRect(),
                    e = this.data.getClipboardRect();
                wt.call(this, t), kt.call(this, t), Et.call(this, e), St.call(this, e), this.resetOffset()
            }
        }, {
            key: "resetBRLAreaOffset",
            value: function() {
                var t = this.data.getSelectedRect(),
                    e = this.data.getClipboardRect();
                wt.call(this, t), xt.call(this, t), Et.call(this, e), Ot.call(this, e), this.resetOffset()
            }
        }, {
            key: "set",
            value: function(t, e) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    i = this.data,
                    r = i.calSelectedRangeByStart(t, e),
                    o = r.sri,
                    a = r.sci;
                if (n) {
                    var l = t,
                        s = e;
                    t < 0 && (l = 0), e < 0 && (s = 0), i.selector.setIndexes(l, s), this.indexes = [l, s]
                }
                this.moveIndexes = [o, a], this.range = r, this.resetAreaOffset(), this.el.show()
            }
        }, {
            key: "setEnd",
            value: function(t, e) {
                var n = this.data;
                this.range = n.calSelectedRangeByEnd(t, e), Ct.call(this, this.data.getSelectedRect())
            }
        }, {
            key: "reset",
            value: function() {
                var t = this.data.selector.range,
                    e = t.eri,
                    n = t.eci;
                this.setEnd(e, n)
            }
        }, {
            key: "showAutofill",
            value: function(t, e) {
                if (-1 !== t || -1 !== e) {
                    var n = this.range,
                        i = n.sri,
                        r = n.sci,
                        o = n.eri,
                        a = n.eci,
                        l = t,
                        s = e,
                        c = i - t,
                        u = o - t,
                        h = a - e;
                    if (r - e > 0) this.arange = new p(i, s, o, r - 1);
                    else if (c > 0) this.arange = new p(l, r, i - 1, a);
                    else if (h < 0) this.arange = new p(i, a + 1, o, s);
                    else {
                        if (!(u < 0)) return void(this.arange = null);
                        this.arange = new p(o + 1, r, l, a)
                    }
                    if (null !== this.arange) {
                        var f = this.data.getRect(this.arange);
                        f.width += 2, f.height += 2;
                        var d = this.br,
                            v = this.l,
                            y = this.t,
                            g = this.tl;
                        d.showAutofill(gt.call(this, f)), v.showAutofill(mt.call(this, f)), y.showAutofill(bt.call(this, f)), g.showAutofill(f)
                    }
                }
            }
        }, {
            key: "hideAutofill",
            value: function() {
                var t = this;
                ["br", "l", "t", "tl"].forEach(function(e) {
                    t[e].hideAutofill()
                })
            }
        }, {
            key: "showClipboard",
            value: function() {
                var t = this,
                    e = this.data.getClipboardRect();
                Tt.call(this, e), ["br", "l", "t", "tl"].forEach(function(e) {
                    t[e].showClipboard()
                })
            }
        }, {
            key: "hideClipboard",
            value: function() {
                var t = this;
                ["br", "l", "t", "tl"].forEach(function(e) {
                    t[e].hideClipboard()
                })
            }
        }]), t
    }();

    function jt(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function _t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function Pt(t) {
        t.preventDefault();
        var e = this.filterItems;
        e.length <= 0 || (t.stopPropagation(), this.itemIndex < 0 && (this.itemIndex = 0), e[this.itemIndex].el.click(), this.hide())
    }
    var zt = function() {
        function t(e, n) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "200px";
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.filterItems = [], this.items = e, this.el = a("div", "".concat(lt, "-suggest")).css("width", i).hide(), this.itemClick = n, this.itemIndex = -1
        }
        var e, n, i;
        return e = t, (n = [{
            key: "setOffset",
            value: function(t) {
                this.el.cssRemoveKeys("top", "bottom").offset(t)
            }
        }, {
            key: "hide",
            value: function() {
                var t = this.el;
                this.filterItems = [], this.itemIndex = -1, t.hide(), it(this.el.parent())
            }
        }, {
            key: "setItems",
            value: function(t) {
                this.items = t, this.search("")
            }
        }, {
            key: "search",
            value: function(t) {
                var e, n = this,
                    i = this.items;
                if (/^\s*$/.test(t) || (i = i.filter(function(e) {
                        return (e.key || e).startsWith(t.toUpperCase())
                    })), i = i.map(function(t) {
                        var e = t.title;
                        e ? "function" == typeof e && (e = e()) : e = t;
                        var i = a("div", "".concat(lt, "-item")).child(e).on("click.stop", function() {
                            n.itemClick(t), n.hide()
                        });
                        return t.label && i.child(a("div", "label").html(t.label)), i
                    }), this.filterItems = i, !(i.length <= 0)) {
                    var r = this.el;
                    (e = r.html("")).children.apply(e, jt(i)).show(), rt(r.parent(), function() {
                        n.hide()
                    })
                }
            }
        }, {
            key: "bindInputEvents",
            value: function(t) {
                var e = this;
                t.on("keydown", function(t) {
                    return function(t) {
                        var e = t.keyCode;
                        switch (t.ctrlKey && t.stopPropagation(), e) {
                            case 37:
                                t.stopPropagation();
                                break;
                            case 38:
                                (function(t) {
                                    t.preventDefault(), t.stopPropagation();
                                    var e = this.filterItems;
                                    e.length <= 0 || (this.itemIndex >= 0 && e[this.itemIndex].toggle(), this.itemIndex -= 1, this.itemIndex < 0 && (this.itemIndex = e.length - 1), e[this.itemIndex].toggle())
                                }).call(this, t);
                                break;
                            case 39:
                                t.stopPropagation();
                                break;
                            case 40:
                                (function(t) {
                                    t.stopPropagation();
                                    var e = this.filterItems;
                                    e.length <= 0 || (this.itemIndex >= 0 && e[this.itemIndex].toggle(), this.itemIndex += 1, this.itemIndex > e.length - 1 && (this.itemIndex = 0), e[this.itemIndex].toggle())
                                }).call(this, t);
                                break;
                            case 13:
                            case 9:
                                Pt.call(this, t);
                                break;
                            default:
                                t.stopPropagation()
                        }
                    }.call(e, t)
                })
            }
        }]) && _t(e.prototype, n), i && _t(e, i), t
    }();

    function It(t) {
        return (It = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Dt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function Rt(t, e) {
        return !e || "object" !== It(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Wt(t) {
        return (Wt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Nt(t, e) {
        return (Nt = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var Ft = function(t) {
        function e(t) {
            var n;
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), (n = Rt(this, Wt(e).call(this, "div", "".concat(lt, "-icon")))).iconNameEl = a("div", "".concat(lt, "-icon-img ").concat(t)), n.child(n.iconNameEl), n
        }
        var n, i, r;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Nt(t, e)
        }(e, o), n = e, (i = [{
            key: "setName",
            value: function(t) {
                this.iconNameEl.className("".concat(lt, "-icon-img ").concat(t))
            }
        }]) && Dt(n.prototype, i), r && Dt(n, r), e
    }();

    function Ht(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function Mt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function Vt(t, e) {
        t.setMonth(t.getMonth() + e)
    }

    function qt(t, e) {
        var n = new Date(t);
        return n.setDate(e - t.getDay() + 1), n
    }
    var Bt = function() {
        function t(e) {
            var n, i = this;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.value = e, this.cvalue = new Date(e), this.headerLeftEl = a("div", "calendar-header-left"), this.bodyEl = a("tbody", ""), this.buildAll(), this.el = a("div", "x-spreadsheet-calendar").children(a("div", "calendar-header").children(this.headerLeftEl, a("div", "calendar-header-right").children(a("a", "calendar-prev").on("click.stop", function() {
                return i.prev()
            }).child(new Ft("chevron-left")), a("a", "calendar-next").on("click.stop", function() {
                return i.next()
            }).child(new Ft("chevron-right")))), a("table", "calendar-body").children(a("thead", "").child((n = a("tr", "")).children.apply(n, Ht(R("calendar.weeks").map(function(t) {
                return a("th", "cell").child(t)
            })))), this.bodyEl)), this.selectChange = function() {}
        }
        var e, n, i;
        return e = t, (n = [{
            key: "setValue",
            value: function(t) {
                this.value = t, this.cvalue = new Date(t), this.buildAll()
            }
        }, {
            key: "prev",
            value: function() {
                Vt(this.value, -1), this.buildAll()
            }
        }, {
            key: "next",
            value: function() {
                Vt(this.value, 1), this.buildAll()
            }
        }, {
            key: "buildAll",
            value: function() {
                this.buildHeaderLeft(), this.buildBody()
            }
        }, {
            key: "buildHeaderLeft",
            value: function() {
                var t = this.value;
                this.headerLeftEl.html("".concat(R("calendar.months")[t.getMonth()], " ").concat(t.getFullYear()))
            }
        }, {
            key: "buildBody",
            value: function() {
                var t, e = this,
                    n = this.value,
                    i = this.cvalue,
                    r = this.bodyEl,
                    o = function(t, e, n) {
                        for (var i = new Date(t, e, 1, 23, 59, 59), r = [
                                [],
                                [],
                                [],
                                [],
                                [],
                                []
                            ], o = 0; o < 6; o += 1)
                            for (var a = 0; a < 7; a += 1) {
                                var l = qt(i, 7 * o + a),
                                    s = l.getMonth() !== e,
                                    c = l.getMonth() === n.getMonth() && l.getDate() === n.getDate();
                                r[o][a] = {
                                    d: l,
                                    disabled: s,
                                    active: c
                                }
                            }
                        return r
                    }(n.getFullYear(), n.getMonth(), i).map(function(t) {
                        var n, i = t.map(function(t) {
                            var n = "cell";
                            return t.disabled && (n += " disabled"), t.active && (n += " active"), a("td", "").child(a("div", n).on("click.stop", function() {
                                e.selectChange(t.d)
                            }).child(t.d.getDate().toString()))
                        });
                        return (n = a("tr", "")).children.apply(n, Ht(i))
                    });
                (t = r.html("")).children.apply(t, Ht(o))
            }
        }]) && Mt(e.prototype, n), i && Mt(e, i), t
    }();

    function Lt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var Yt = function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.calendar = new Bt(new Date), this.el = a("div", "".concat(lt, "-datepicker")).child(this.calendar.el).hide()
        }
        var e, n, i;
        return e = t, (n = [{
            key: "setValue",
            value: function(t) {
                var e = this.calendar;
                return "string" == typeof t ? /^\d{4}-\d{1,2}-\d{1,2}$/.test(t) && e.setValue(new Date(t.replace(new RegExp("-", "g"), "/"))) : t instanceof Date && e.setValue(t), this
            }
        }, {
            key: "change",
            value: function(t) {
                var e = this;
                this.calendar.selectChange = function(n) {
                    t(n), e.hide()
                }
            }
        }, {
            key: "show",
            value: function() {
                this.el.show()
            }
        }, {
            key: "hide",
            value: function() {
                this.el.hide()
            }
        }]) && Lt(e.prototype, n), i && Lt(e, i), t
    }();

    function Ut(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function $t() {
        if (!/^\s*$/.test(this.inputText)) {
            var t = this.textlineEl,
                e = this.textEl,
                n = this.areaOffset,
                i = t.offset().width + 9,
                r = this.viewFn().width - n.left - 9;
            if (i > n.width) {
                var o = i;
                if (i > r) {
                    o = r;
                    var a = parseInt(i / r, 10);
                    a += i % r > 0 ? 1 : 0, (a *= this.rowHeight) > n.height && e.css("height", "".concat(a, "px"))
                }
                e.css("width", "".concat(o, "px"))
            }
        }
    }

    function Xt(t, e) {
        var n = this.textEl,
            i = this.textlineEl;
        n.el.blur(), n.val(t), i.html(t),
            function(t) {
                var e = this.textEl.el;
                setTimeout(function() {
                    e.focus(), e.setSelectionRange(t, t)
                }, 0)
            }.call(this, e)
    }
    var Jt = function() {
        function t(e, n, i) {
            var r = this;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.viewFn = n, this.rowHeight = i, this.formulas = e, this.suggest = new zt(e, function(t) {
                (function(t) {
                    var e = this.inputText,
                        n = this.validator,
                        i = 0;
                    if (n && "list" === n.type) this.inputText = t, i = this.inputText.length;
                    else {
                        var r = e.lastIndexOf("="),
                            o = e.substring(0, r + 1),
                            a = e.substring(r + 1);
                        a = -1 !== a.indexOf(")") ? a.substring(a.indexOf(")")) : "", this.inputText = "".concat(o + t.key, "("), i = this.inputText.length, this.inputText += ")".concat(a)
                    }
                    Xt.call(this, this.inputText, i)
                }).call(r, t)
            }), this.datepicker = new Yt, this.datepicker.change(function(t) {
                r.setText("".concat(t.getFullYear(), "-").concat(t.getMonth() + 1, "-").concat(t.getDate())), r.clear()
            }), this.areaEl = a("div", "".concat(lt, "-editor-area")).children(this.textEl = a("textarea", "").on("input", function(t) {
                return function(t) {
                    var e = t.target.value,
                        n = this.suggest,
                        i = this.textlineEl,
                        r = this.validator;
                    if (this.inputText = e, r) "list" === r.type ? n.search(e) : n.hide();
                    else {
                        var o = e.lastIndexOf("="); - 1 !== o ? n.search(e.substring(o + 1)) : n.hide()
                    }
                    i.html(e), $t.call(this), this.change("input", e)
                }.call(r, t)
            }), this.textlineEl = a("div", "textline"), this.suggest.el, this.datepicker.el).on("mousemove.stop", function() {}).on("mousedown.stop", function() {}), this.el = a("div", "".concat(lt, "-editor")).child(this.areaEl).hide(), this.suggest.bindInputEvents(this.textEl), this.areaOffset = null, this.freeze = {
                w: 0,
                h: 0
            }, this.cell = null, this.inputText = "", this.change = function() {}
        }
        var e, n, i;
        return e = t, (n = [{
            key: "setFreezeLengths",
            value: function(t, e) {
                this.freeze.w = t, this.freeze.h = e
            }
        }, {
            key: "clear",
            value: function() {
                "" !== this.inputText && this.change("finished", this.inputText), this.cell = null, this.areaOffset = null, this.inputText = "", this.el.hide(), this.textEl.val(""), this.textlineEl.html(""),
                    function() {
                        this.suggest.setItems(this.formulas)
                    }.call(this), this.datepicker.hide()
            }
        }, {
            key: "setOffset",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                    n = this.textEl,
                    i = this.areaEl,
                    r = this.suggest,
                    o = this.freeze,
                    a = this.el;
                if (t) {
                    this.areaOffset = t;
                    var l = t.left,
                        s = t.top,
                        c = t.width,
                        u = t.height,
                        h = t.l,
                        f = t.t,
                        d = {
                            left: 0,
                            top: 0
                        };
                    o.w > h && o.h > f || (o.w < h && o.h < f ? (d.left = o.w, d.top = o.h) : o.w > h ? d.top = o.h : o.h > f && (d.left = o.w)), a.offset(d), i.offset({
                        left: l - d.left - .8,
                        top: s - d.top - .8
                    }), n.offset({
                        width: c - 9 + .8,
                        height: u - 3 + .8
                    });
                    var v = {
                        left: 0
                    };
                    v[e] = u, r.setOffset(v)
                }
            }
        }, {
            key: "setCell",
            value: function(t, e) {
                var n = this.el,
                    i = this.datepicker,
                    r = this.suggest;
                n.show(), this.cell = t;
                var o = t && t.text || "";
                if (this.setText(o), this.validator = e, e) {
                    var a = e.type;
                    "date" === a && (i.show(), /^\s*$/.test(o) || i.setValue(o)), "list" === a && r.setItems(e.values())
                }
            }
        }, {
            key: "setText",
            value: function(t) {
                this.inputText = t, Xt.call(this, t, t.length), $t.call(this)
            }
        }]) && Ut(e.prototype, n), i && Ut(e, i), t
    }();

    function Kt(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function Zt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var Gt = [{
        key: "copy",
        title: W("contextmenu.copy"),
        label: "Ctrl+C"
    }, {
        key: "cut",
        title: W("contextmenu.cut"),
        label: "Ctrl+X"
    }, {
        key: "paste",
        title: W("contextmenu.paste"),
        label: "Ctrl+V"
    }, {
        key: "paste-value",
        title: W("contextmenu.pasteValue"),
        label: "Ctrl+Shift+V"
    }, {
        key: "paste-format",
        title: W("contextmenu.pasteFormat"),
        label: "Ctrl+Alt+V"
    }, {
        key: "divider"
    }, {
        key: "insert-row",
        title: W("contextmenu.insertRow")
    }, {
        key: "insert-column",
        title: W("contextmenu.insertColumn")
    }, {
        key: "divider"
    }, {
        key: "delete-row",
        title: W("contextmenu.deleteRow")
    }, {
        key: "delete-column",
        title: W("contextmenu.deleteColumn")
    }, {
        key: "delete-cell-text",
        title: W("contextmenu.deleteCellText")
    }, {
        key: "divider"
    }, {
        key: "validation",
        title: W("contextmenu.validation")
    }];

    function Qt() {
        var t = this;
        return Gt.map(function(e) {
            return function(t) {
                var e = this;
                return "divider" === t.key ? a("div", "".concat(lt, "-item divider")) : a("div", "".concat(lt, "-item")).on("click", function() {
                    e.itemClick(t.key), e.hide()
                }).children(t.title(), a("div", "label").child(t.label || ""))
            }.call(t, e)
        })
    }
    var te = function() {
            function t(e) {
                var n;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.el = (n = a("div", "".concat(lt, "-contextmenu"))).children.apply(n, Kt(Qt.call(this))).hide(), this.viewFn = e, this.itemClick = function() {}
            }
            var e, n, i;
            return e = t, (n = [{
                key: "hide",
                value: function() {
                    var t = this.el;
                    t.hide(), it(t)
                }
            }, {
                key: "setPosition",
                value: function(t, e) {
                    var n = this.el,
                        i = n.show().offset(),
                        r = i.height,
                        o = i.width,
                        a = this.viewFn(),
                        l = e,
                        s = t;
                    a.height - e <= r && (l -= r), a.width - t <= o && (s -= o), n.offset({
                        left: s,
                        top: l
                    }), rt(n)
                }
            }]) && Zt(e.prototype, n), i && Zt(e, i), t
        }(),
        ee = [{
            key: "Arial",
            title: "Arial"
        }, {
            key: "Helvetica",
            title: "Helvetica"
        }, {
            key: "Source Sans Pro",
            title: "Source Sans Pro"
        }, {
            key: "Comic Sans MS",
            title: "Comic Sans MS"
        }, {
            key: "Courier New",
            title: "Courier New"
        }, {
            key: "Verdana",
            title: "Verdana"
        }, {
            key: "Lato",
            title: "Lato"
        }],
        ne = [{
            pt: 7.5,
            px: 10
        }, {
            pt: 8,
            px: 11
        }, {
            pt: 9,
            px: 12
        }, {
            pt: 10,
            px: 13
        }, {
            pt: 10.5,
            px: 14
        }, {
            pt: 11,
            px: 15
        }, {
            pt: 12,
            px: 16
        }, {
            pt: 14,
            px: 18.7
        }, {
            pt: 15,
            px: 20
        }, {
            pt: 16,
            px: 21.3
        }, {
            pt: 18,
            px: 24
        }, {
            pt: 22,
            px: 29.3
        }, {
            pt: 24,
            px: 32
        }, {
            pt: 26,
            px: 34.7
        }, {
            pt: 36,
            px: 48
        }, {
            pt: 42,
            px: 56
        }];

    function ie(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = [],
                i = !0,
                r = !1,
                o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    i || null == l.return || l.return()
                } finally {
                    if (r) throw o
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    var re = function(t, e) {
            if (t[0] >= "0" && t[0] <= "9") return Number(t);
            if ('"' === t[0]) return t.substring(1);
            var n = ie(h(t), 2);
            return e(n[0], n[1])
        },
        oe = {
            render: function t(e, n, i, r, o) {
                if ("=" === i[0]) {
                    var a = function(t) {
                        for (var e = [], n = [], i = [], r = 0, o = 1, a = 0; a < t.length; a += 1) {
                            var l = t.charAt(a);
                            if (" " !== l)
                                if (l >= "a" && l <= "z") i.push(l.toUpperCase());
                                else if (l >= "0" && l <= "9" || l >= "A" && l <= "Z" || "." === l) i.push(l);
                            else if ('"' === l) {
                                for (a += 1;
                                    '"' !== t.charAt(a);) i.push(t.charAt(a)), a += 1;
                                n.push('"'.concat(i.join(""))), i = []
                            } else {
                                if (i.length > 0 && n.push(i.join("")), ")" === l) {
                                    var s = e.pop();
                                    if (2 === r) {
                                        for (var c = ie(h(n.pop()), 2), u = c[0], f = c[1], v = ie(h(n.pop()), 2), y = v[0], p = v[1], g = 0, b = y; b <= u; b += 1)
                                            for (var m = p; m <= f; m += 1) n.push(d(b, m)), g += 1;
                                        n.push([s, g])
                                    } else if (1 === r) n.push([s, o]), o = 1;
                                    else
                                        for (;
                                            "(" !== s && e.length > 0;) n.push(s), s = e.pop();
                                    r = 0
                                } else if (":" === l) r = 2;
                                else if ("," === l) r = 1, o += 1;
                                else if ("(" === l && i.length > 0) n.pop(), e.push(i.join(""));
                                else {
                                    if (e.length > 0 && ("+" === l || "-" === l)) {
                                        var w = e[e.length - 1];
                                        if ("*" === w || "/" === w)
                                            for (; e.length > 0;) n.push(e.pop())
                                    }
                                    e.push(l)
                                }
                                i = []
                            }
                        }
                        for (i.length > 0 && n.push(i.join("")); e.length > 0;) n.push(e.pop());
                        return n
                    }(i.substring(1));
                    return a.length <= 0 ? i : function(t, e, n) {
                        for (var i = [], r = 0; r < t.length; r += 1)
                            if ("+" === t[r]) {
                                var o = i.pop(),
                                    a = i.pop();
                                i.push(Number(a) + Number(o))
                            } else if ("-" === t[r]) {
                            var l = i.pop();
                            i.push(Number(i.pop()) - Number(l))
                        } else if ("*" === t[r]) i.push(Number(i.pop()) * Number(i.pop()));
                        else if ("/" === t[r]) {
                            var s = i.pop();
                            i.push(Number(i.pop()) / Number(s))
                        } else if (Array.isArray(t[r])) {
                            for (var c = ie(t[r], 2), u = c[0], h = c[1], f = [], d = 0; d < h; d += 1) f.push(i.pop());
                            i.push(e[u].render(f))
                        } else i.push(re(t[r], n));
                        return i[0]
                    }(a, r, function(i, a) {
                        var l = e === a && n === i ? 0 : o(i, a);
                        return t(e, n, l, r, o)
                    })
                }
                return i
            }
        };

    function ae(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var le = [{
            key: "SUM",
            title: W("formula.sum"),
            render: function(t) {
                return t.reduce(function(t, e) {
                    return Number(t) + Number(e)
                }, 0)
            }
        }, {
            key: "AVERAGE",
            title: W("formula.average"),
            render: function(t) {
                return t.reduce(function(t, e) {
                    return Number(t) + Number(e)
                }, 0) / t.length
            }
        }, {
            key: "MAX",
            title: W("formula.max"),
            render: function(t) {
                return Math.max.apply(Math, ae(t.map(function(t) {
                    return Number(t)
                })))
            }
        }, {
            key: "MIN",
            title: W("formula.min"),
            render: function(t) {
                return Math.min.apply(Math, ae(t.map(function(t) {
                    return Number(t)
                })))
            }
        }, {
            key: "CONCAT",
            title: W("formula.concat"),
            render: function(t) {
                return t.join("")
            }
        }],
        se = le,
        ce = {};

    function ue(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || fe(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function he(t) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || fe(t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function fe(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }
    le.forEach(function(t) {
        ce[t.key] = t
    });
    var de = function(t) {
            return t
        },
        ve = function(t) {
            if (/^(-?\d*.?\d*)$/.test(t)) {
                var e = he(Number(t).toFixed(2).toString().split("\\.")),
                    n = e[0],
                    i = e.slice(1);
                return [n.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")].concat(ue(i))
            }
            return t
        },
        ye = [{
            key: "normal",
            title: W("format.normal"),
            type: "string",
            render: de
        }, {
            key: "text",
            title: W("format.text"),
            type: "string",
            render: de
        }, {
            key: "number",
            title: W("format.number"),
            type: "number",
            label: "1,000.12",
            render: ve
        }, {
            key: "percent",
            title: W("format.percent"),
            type: "number",
            label: "10.12%",
            render: function(t) {
                return "".concat(t, "%")
            }
        }, {
            key: "rmb",
            title: W("format.rmb"),
            type: "number",
            label: "￥10.00",
            render: function(t) {
                return "￥".concat(ve(t))
            }
        }, {
            key: "usd",
            title: W("format.usd"),
            type: "number",
            label: "$10.00",
            render: function(t) {
                return "$".concat(ve(t))
            }
        }, {
            key: "date",
            title: W("format.date"),
            type: "date",
            label: "26/09/2008",
            render: de
        }, {
            key: "time",
            title: W("format.time"),
            type: "date",
            label: "15:59:00",
            render: de
        }, {
            key: "datetime",
            title: W("format.datetime"),
            type: "date",
            label: "26/09/2008 15:59:00",
            render: de
        }, {
            key: "duration",
            title: W("format.duration"),
            type: "date",
            label: "24:01:00",
            render: de
        }],
        pe = {};

    function ge(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function be(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = [],
                i = !0,
                r = !1,
                o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    i || null == l.return || l.return()
                } finally {
                    if (r) throw o
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function me(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function we(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function ke(t, e, n) {
        return e && we(t.prototype, e), n && we(t, n), t
    }

    function xe() {
        return window.devicePixelRatio || 1
    }

    function Oe() {
        return xe() - .5
    }

    function Ee(t) {
        return parseInt(t * xe(), 10)
    }

    function Se(t) {
        var e = Ee(t);
        return e > 0 ? e - .5 : .5
    }
    ye.forEach(function(t) {
        pe[t.key] = t
    });
    var Ce = function() {
        function t(e, n, i, r) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
            me(this, t), this.x = e, this.y = n, this.width = i, this.height = r, this.padding = o, this.bgcolor = "#ffffff", this.borderTop = null, this.borderRight = null, this.borderBottom = null, this.borderLeft = null
        }
        return ke(t, [{
            key: "setBorders",
            value: function(t) {
                var e = t.top,
                    n = t.bottom,
                    i = t.left,
                    r = t.right;
                e && (this.borderTop = e), r && (this.borderRight = r), n && (this.borderBottom = n), i && (this.borderLeft = i)
            }
        }, {
            key: "innerWidth",
            value: function() {
                return this.width - 2 * this.padding
            }
        }, {
            key: "innerHeight",
            value: function() {
                return this.height - 2 * this.padding
            }
        }, {
            key: "textx",
            value: function(t) {
                var e = this.width,
                    n = this.padding,
                    i = this.x;
                return "left" === t ? i += n : "center" === t ? i += e / 2 : "right" === t && (i += e - n), i
            }
        }, {
            key: "texty",
            value: function(t, e, n) {
                var i = this.height,
                    r = this.padding,
                    o = this.y;
                return "top" === t ? o += r : "middle" === t ? o = o + i / 2 - n : "bottom" === t && (o += i - 2 * n - r), o
            }
        }, {
            key: "topxys",
            value: function() {
                var t = this.x,
                    e = this.y;
                return [
                    [t, e],
                    [t + this.width, e]
                ]
            }
        }, {
            key: "rightxys",
            value: function() {
                var t = this.x,
                    e = this.y,
                    n = this.width;
                return [
                    [t + n, e],
                    [t + n, e + this.height]
                ]
            }
        }, {
            key: "bottomxys",
            value: function() {
                var t = this.x,
                    e = this.y,
                    n = this.width,
                    i = this.height;
                return [
                    [t, e + i],
                    [t + n, e + i]
                ]
            }
        }, {
            key: "leftxys",
            value: function() {
                var t = this.x,
                    e = this.y;
                return [
                    [t, e],
                    [t, e + this.height]
                ]
            }
        }]), t
    }();

    function Te(t, e, n, i, r, o, a) {
        var l = {
            x: 0,
            y: 0
        };
        "underline" === t ? l.y = "bottom" === r ? 0 : "top" === r ? -(o + 2) : -o / 2 : "strike" === t && ("bottom" === r ? l.y = o / 2 : "top" === r && (l.y = -(o / 2 + 2))), "center" === i ? l.x = a / 2 : "right" === i && (l.x = a), this.line([e - l.x, n - l.y], [e - l.x + a, n - l.y])
    }
    var Ae = function() {
        function t(e, n, i) {
            me(this, t), this.el = e, this.ctx = e.getContext("2d"), this.resize(n, i), this.ctx.scale(xe(), xe())
        }
        return ke(t, [{
            key: "resize",
            value: function(t, e) {
                this.el.style.width = "".concat(t, "px"), this.el.style.height = "".concat(e, "px"), this.el.width = Ee(t), this.el.height = Ee(e)
            }
        }, {
            key: "clear",
            value: function() {
                var t = this.el,
                    e = t.width,
                    n = t.height;
                return this.ctx.clearRect(0, 0, e, n), this
            }
        }, {
            key: "attr",
            value: function(t) {
                return Object.assign(this.ctx, t), this
            }
        }, {
            key: "save",
            value: function() {
                return this.ctx.save(), this.ctx.beginPath(), this
            }
        }, {
            key: "restore",
            value: function() {
                return this.ctx.restore(), this
            }
        }, {
            key: "beginPath",
            value: function() {
                return this.ctx.beginPath(), this
            }
        }, {
            key: "translate",
            value: function(t, e) {
                return this.ctx.translate(Ee(t), Ee(e)), this
            }
        }, {
            key: "clearRect",
            value: function(t, e, n, i) {
                return this.ctx.clearRect(t, e, n, i), this
            }
        }, {
            key: "fillRect",
            value: function(t, e, n, i) {
                return this.ctx.fillRect(Ee(t) - .5, Ee(e) - .5, Ee(n), Ee(i)), this
            }
        }, {
            key: "fillText",
            value: function(t, e, n) {
                return this.ctx.fillText(t, Ee(e), Ee(n)), this
            }
        }, {
            key: "text",
            value: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    r = this.ctx,
                    o = n.align,
                    a = n.valign,
                    l = n.font,
                    s = n.color,
                    c = n.strike,
                    u = n.underline,
                    h = e.textx(o);
                r.save(), r.beginPath(), this.attr({
                    textAlign: o,
                    textBaseline: a,
                    font: "".concat(l.italic ? "italic" : "", " ").concat(l.bold ? "bold" : "", " ").concat(Ee(l.size), "px ").concat(l.name),
                    fillStyle: s,
                    strokeStyle: s
                });
                var f = r.measureText(t).width,
                    d = 0;
                i && (d = (Math.ceil(f / e.innerWidth()) - 1) * l.size / 2);
                var v = e.texty(a, l.size, d);
                if (i && f > e.innerWidth()) {
                    for (var y = {
                            len: 0,
                            start: 0
                        }, p = 0; p < t.length; p += 1) y.len >= e.innerWidth() && (this.fillText(t.substring(y.start, p), h, v), c && Te.call(this, "strike", h, v, o, a, l.size, y.len), u && Te.call(this, "underline", h, v, o, a, l.size, y.len), v += l.size + 2, y.len = 0, y.start = p), y.len += r.measureText(t[p]).width;
                    i && y.len > 0 && (this.fillText(t.substring(y.start), h, v), c && Te.call(this, "strike", h, v, o, a, l.size, y.len), u && Te.call(this, "underline", h, v, o, a, l.size, y.len))
                } else this.fillText(t, h, v), c && Te.call(this, "striket", h, v, o, a, l.size, f), u && Te.call(this, "underline", h, v, o, a, l.size, f);
                return r.restore(), this
            }
        }, {
            key: "border",
            value: function(t, e) {
                var n = this.ctx;
                return n.lineWidth = Oe, n.strokeStyle = e, "medium" === t ? n.lineWidth = Ee(2) - .5 : "thick" === t ? n.lineWidth = Ee(3) : "dashed" === t ? n.setLineDash([Ee(3), Ee(2)]) : "dotted" === t ? n.setLineDash([Ee(1), Ee(1)]) : "double" === t && n.setLineDash([Ee(2), 0]), this
            }
        }, {
            key: "line",
            value: function() {
                var t = this.ctx;
                if (arguments.length > 1) {
                    var e = be(arguments.length <= 0 ? void 0 : arguments[0], 2),
                        n = e[0],
                        i = e[1];
                    t.moveTo(Se(n), Se(i));
                    for (var r = 1; r < arguments.length; r += 1) {
                        var o = be(r < 0 || arguments.length <= r ? void 0 : arguments[r], 2),
                            a = o[0],
                            l = o[1];
                        t.lineTo(Se(a), Se(l))
                    }
                    t.stroke()
                }
                return this
            }
        }, {
            key: "strokeBorders",
            value: function(t) {
                var e = this.ctx;
                e.save(), e.beginPath();
                var n = t.borderTop,
                    i = t.borderRight,
                    r = t.borderBottom,
                    o = t.borderLeft;
                n && (this.border.apply(this, ge(n)), this.line.apply(this, ge(t.topxys()))), i && (this.border.apply(this, ge(i)), this.line.apply(this, ge(t.rightxys()))), r && (this.border.apply(this, ge(r)), this.line.apply(this, ge(t.bottomxys()))), o && (this.border.apply(this, ge(o)), this.line.apply(this, ge(t.leftxys()))), e.restore()
            }
        }, {
            key: "error",
            value: function(t) {
                var e = this.ctx,
                    n = t.x,
                    i = t.y,
                    r = n + t.width - 1;
                e.save(), e.beginPath(), e.moveTo(Ee(r - 8), Ee(i - 1)), e.lineTo(Ee(r), Ee(i - 1)), e.lineTo(Ee(r), Ee(i + 8)), e.closePath(), e.fillStyle = "rgba(255, 0, 0, .65)", e.fill(), e.restore()
            }
        }, {
            key: "rect",
            value: function(t, e) {
                var n = this.ctx,
                    i = t.x,
                    r = t.y,
                    o = t.width,
                    a = t.height,
                    l = t.bgcolor;
                n.save(), n.beginPath(), n.fillStyle = l || "#fff", n.rect(Se(i + 1), Se(r + 1), Ee(o - 2), Ee(a - 2)), n.clip(), n.fill(), e(), n.restore()
            }
        }]), t
    }();

    function je(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function _e(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = [],
                i = !0,
                r = !1,
                o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    i || null == l.return || l.return()
                } finally {
                    if (r) throw o
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    var Pe = 5,
        ze = {
            fillStyle: "#f4f5f8"
        },
        Ie = {
            fillStyle: "#fff",
            lineWidth: Oe,
            strokeStyle: "#e6e6e6"
        };

    function De() {
        var t = this.draw,
            e = this.bboxes;
        e && e.forEach(function(e) {
            return t.strokeBorders(e)
        })
    }

    function Re(t, e) {
        var n = this.draw,
            i = this.data,
            r = i.getCell(t, e);
        if (null !== r) {
            var o = i.getCellStyleOrDefault(t, e),
                a = function(t, e) {
                    var n = this.data.cellRect(t, e),
                        i = n.left,
                        r = n.top,
                        o = n.width,
                        a = n.height;
                    return new Ce(i, r, o, a, Pe)
                }.call(this, t, e);
            a.bgcolor = o.bgcolor, void 0 !== o.border && (a.setBorders(o.border), this.bboxes.push(a)), n.rect(a, function() {
                var l = oe.render(t, e, r.text || "", ce, function(t, e) {
                    return i.getCellTextOrDefault(e, t)
                });
                o.format && (l = pe[o.format].render(l));
                var s = Object.assign({}, o.font);
                s.size = function(t) {
                    for (var e = 0; e < ne.length; e += 1) {
                        var n = ne[e];
                        if (n.pt === t) return n.px
                    }
                    return t
                }(s.size), n.text(l, a, {
                    align: o.align,
                    valign: o.valign,
                    font: s,
                    color: o.color,
                    strike: o.strike,
                    underline: o.underline
                }, o.textwrap), i.validations.getError(t, e) && n.error(a)
            })
        }
    }

    function We(t, e) {
        var n = this,
            i = this.draw,
            r = this.data,
            o = r.cols,
            a = r.rows;
        i.save(), i.translate(o.indexWidth, a.height).translate(-e.x, -e.y), this.bboxes = [], t.each(function(t, e) {
            Re.call(n, t, e)
        }), De.call(this), this.bboxes = [], r.eachMergesInView(t, function(t) {
            Re.call(n, t.sri, t.sci)
        }), De.call(this), i.restore()
    }

    function Ne(t, e, n, i) {
        var r = this.draw;
        r.save(), r.attr({
            fillStyle: "rgba(75, 137, 255, 0.08)"
        }).fillRect(t, e, n, i), r.restore()
    }

    function Fe(t) {
        var e = this,
            n = this.draw,
            i = this.data,
            r = i.cols,
            o = i.rows;
        n.save();
        var a = o.sumHeight(t.sri, t.eri + 1) + o.height,
            l = r.sumWidth(t.sci, t.eci + 1) + r.indexWidth;
        n.attr(ze).fillRect(0, 0, r.indexWidth, a).fillRect(0, 0, l, o.height);
        var s = i.selector.range,
            u = s.sri,
            h = s.sci,
            f = s.eri,
            d = s.eci;
        n.attr({
            textAlign: "center",
            textBaseline: "middle",
            font: "500 ".concat(Ee(12), "px Source Sans Pro"),
            fillStyle: "#585757",
            lineWidth: Oe(),
            strokeStyle: "#e6e6e6"
        }), i.rowEach(t.sri, t.eri, function(t, i, a) {
            var l = i + o.height;
            n.line([0, l], [r.indexWidth, l]), u <= t && t < f + 1 && Ne.call(e, 0, l, r.indexWidth, a), n.fillText(t + 1, r.indexWidth / 2, l + a / 2)
        }), n.line([0, a], [r.indexWidth, a]), n.line([r.indexWidth, 0], [r.indexWidth, a]), i.colEach(t.sci, t.eci, function(t, i, a) {
            var l = i + r.indexWidth;
            n.line([l, 0], [l, o.height]), h <= t && t < d + 1 && Ne.call(e, l, 0, a, o.height), n.fillText(c(t), l + a / 2, o.height / 2)
        }), n.line([l, 0], [l, o.height]), n.line([0, o.height], [l, o.height]), n.attr({
            fillStyle: "#f4f5f8"
        }).fillRect(0, 0, r.indexWidth, o.height).line([r.indexWidth, 0], [r.indexWidth, o.height]).line([0, o.height], [r.indexWidth, o.height]), n.restore()
    }

    function He(t) {
        var e = t.sri,
            n = t.sci,
            i = t.eri,
            r = t.eci,
            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                x: 0,
                y: 0
            },
            a = this.draw,
            l = this.data,
            s = l.cols,
            c = l.rows,
            u = l.settings;
        a.save(), a.attr(Ie).translate(s.indexWidth, c.height).translate(o.x, o.y);
        var h = s.sumWidth(n, r + 1),
            f = c.sumHeight(e, i + 1);
        a.clearRect(0, 0, h, f), u.showGrid && (l.rowEach(e, i, function(t, e, n) {
            a.line([0, e], [h, e]), t === i && a.line([0, e + n], [h, e + n])
        }), l.colEach(n, r, function(t, e, n) {
            a.line([e, 0], [e, f]), t === r && a.line([e + n, 0], [e + n, f])
        }), a.restore())
    }

    function Me(t, e) {
        He.call(this, t), We.call(this, t, e), Fe.call(this, t)
    }
    var Ve = function() {
        function t(e, n) {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.el = e, this.draw = new Ae(e, n.viewWidth(), n.viewHeight()), this.data = n
        }
        var e, n, i;
        return e = t, (n = [{
            key: "render",
            value: function() {
                var t = this.data;
                this.draw.resize(t.viewWidth(), t.viewHeight()), this.clear();
                var e = t.viewRange();
                Me.call(this, e, t.scroll);
                var n = _e(t.freeze, 2),
                    i = n[0],
                    r = n[1];
                (i > 0 || r > 0) && (function(t) {
                    var e = t.eri,
                        n = t.eci,
                        i = this.data,
                        r = _e(i.freeze, 2),
                        o = r[0],
                        a = r[1],
                        l = i.scroll,
                        s = i.freezeTotalWidth(),
                        c = i.freezeTotalHeight();
                    o > 0 && (He.call(this, new p(0, a + i.scroll.ci, o - 1, n), {
                        x: s,
                        y: 0
                    }), We.call(this, new p(0, a, o - 1, n), {
                        x: l.x,
                        y: 0
                    })), a > 0 && (He.call(this, new p(o + i.scroll.ri, 0, e, a - 1), {
                        x: 0,
                        y: c
                    }), We.call(this, new p(o, 0, e, a - 1), {
                        x: 0,
                        y: l.y
                    }))
                }.call(this, e), Me.call(this, t.freezeViewRange(), {
                    x: 0,
                    y: 0
                }), function() {
                    var t = this.draw,
                        e = this.data,
                        n = e.rows,
                        i = e.cols,
                        r = e.viewWidth(),
                        o = e.viewHeight(),
                        a = e.freezeTotalWidth(),
                        l = e.freezeTotalHeight();
                    t.save().translate(i.indexWidth, n.height).attr({
                        strokeStyle: "rgba(75, 137, 255, .6)"
                    }), t.line([0, l], [r, l]), t.line([a, 0], [a, o]), t.restore()
                }.call(this))
            }
        }, {
            key: "clear",
            value: function() {
                this.draw.clear()
            }
        }]) && je(e.prototype, n), i && je(e, i), t
    }();

    function qe(t) {
        return (qe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Be(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function Le(t, e) {
        return !e || "object" !== qe(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Ye(t) {
        return (Ye = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Ue(t, e) {
        return (Ue = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var $e = function(t) {
        function e(t, n, i, r) {
            var o, l;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), (l = Le(this, Ye(e).call(this, "div", "".concat(lt, "-dropdown ").concat(r)))).title = t, l.change = function() {}, "string" == typeof t ? l.title = a("div", "".concat(lt, "-dropdown-title")).child(t) : i && l.title.addClass("arrow-left");
            for (var s = arguments.length, c = new Array(s > 4 ? s - 4 : 0), u = 4; u < s; u++) c[u - 4] = arguments[u];
            return l.contentEl = (o = a("div", "".concat(lt, "-dropdown-content"))).children.apply(o, c).css("width", n).hide(), l.headerEl = a("div", "".concat(lt, "-dropdown-header")), l.headerEl.on("click", function() {
                "block" !== l.contentEl.css("display") ? l.show() : l.hide()
            }).children(l.title, i ? a("div", "".concat(lt, "-icon arrow-right")).child(a("div", "".concat(lt, "-icon-img arrow-down"))) : ""), l.children(l.headerEl, l.contentEl), l
        }
        var n, i, r;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Ue(t, e)
        }(e, o), n = e, (i = [{
            key: "setTitle",
            value: function(t) {
                this.title.html(t), this.hide()
            }
        }, {
            key: "show",
            value: function() {
                var t = this;
                this.contentEl.show(), this.parent().active(), rt(this.parent(), function() {
                    t.hide()
                })
            }
        }, {
            key: "hide",
            value: function() {
                this.parent().active(!1), this.contentEl.hide(), it(this.parent())
            }
        }]) && Be(n.prototype, i), r && Be(n, r), e
    }();

    function Xe(t) {
        return (Xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Je(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function Ke(t, e) {
        return !e || "object" !== Xe(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Ze(t) {
        return (Ze = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Ge(t, e) {
        return (Ge = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var Qe = function(t) {
        function e() {
            var t, n;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = ee.map(function(t) {
                return a("div", "".concat(lt, "-item")).on("click", function() {
                    n.setTitle(t.title), n.change(t)
                }).child(t.title)
            });
            return n = Ke(this, (t = Ze(e)).call.apply(t, [this, ee[0].title, "160px", !0, "bottom-left"].concat(Je(i))))
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Ge(t, e)
        }(e, $e), e
    }();

    function tn(t) {
        return (tn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function en(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function nn(t, e) {
        return !e || "object" !== tn(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function rn(t) {
        return (rn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function on(t, e) {
        return (on = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var an = function(t) {
        function e() {
            var t, n;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = ne.map(function(t) {
                return a("div", "".concat(lt, "-item")).on("click", function() {
                    n.setTitle("".concat(t.pt)), n.change(t)
                }).child("".concat(t.pt))
            });
            return n = nn(this, (t = rn(e)).call.apply(t, [this, "10", "60px", !0, "bottom-left"].concat(en(i))))
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && on(t, e)
        }(e, $e), e
    }();

    function ln(t) {
        return (ln = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function sn(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function cn(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function un(t, e) {
        return !e || "object" !== ln(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function hn(t) {
        return (hn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function fn(t, e) {
        return (fn = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var dn = function(t) {
        function e() {
            var t, n;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = ye.slice(0);
            return i.splice(2, 0, {
                key: "divider"
            }), i.splice(7, 0, {
                key: "divider"
            }), i = i.map(function(t) {
                var e = a("div", "".concat(lt, "-item"));
                return "divider" === t.key ? e.addClass("divider") : (e.child(t.title()).on("click", function() {
                    n.setTitle(t.title()), n.change(t)
                }), t.label && e.child(a("div", "label").html(t.label))), e
            }), n = un(this, (t = hn(e)).call.apply(t, [this, "Normal", "220px", !0, "bottom-left"].concat(sn(i))))
        }
        var n, i, r;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && fn(t, e)
        }(e, $e), n = e, (i = [{
            key: "setTitle",
            value: function(t) {
                for (var e = 0; e < ye.length; e += 1) ye[e].key === t && this.title.html(ye[e].title);
                this.hide()
            }
        }]) && cn(n.prototype, i), r && cn(n, r), e
    }();

    function vn(t) {
        return (vn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function yn(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function pn(t, e) {
        return !e || "object" !== vn(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function gn(t) {
        return (gn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function bn(t, e) {
        return (bn = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var mn = function(t) {
        function e() {
            var t, n;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = le.map(function(t) {
                return a("div", "".concat(lt, "-item")).on("click", function() {
                    n.hide(), n.change(t)
                }).child(t.key)
            });
            return n = pn(this, (t = gn(e)).call.apply(t, [this, new Ft("formula"), "180px", !0, "bottom-left"].concat(yn(i))))
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && bn(t, e)
        }(e, $e), e
    }();

    function wn(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var kn = ["#ffffff", "#000100", "#e7e5e6", "#445569", "#5b9cd6", "#ed7d31", "#a5a5a5", "#ffc001", "#4371c6", "#71ae47"],
        xn = [
            ["#f2f2f2", "#7f7f7f", "#d0cecf", "#d5dce4", "#deeaf6", "#fce5d5", "#ededed", "#fff2cd", "#d9e2f3", "#e3efd9"],
            ["#d8d8d8", "#595959", "#afabac", "#adb8ca", "#bdd7ee", "#f7ccac", "#dbdbdb", "#ffe59a", "#b3c6e7", "#c5e0b3"],
            ["#bfbfbf", "#3f3f3f", "#756f6f", "#8596b0", "#9cc2e6", "#f4b184", "#c9c9c9", "#fed964", "#8eaada", "#a7d08c"],
            ["#a5a5a5", "#262626", "#3a3839", "#333f4f", "#2e75b5", "#c45a10", "#7b7b7b", "#bf8e01", "#2f5596", "#538136"],
            ["#7f7f7f", "#0c0c0c", "#171516", "#222a35", "#1f4e7a", "#843c0a", "#525252", "#7e6000", "#203864", "#365624"]
        ],
        On = ["#c00000", "#fe0000", "#fdc101", "#ffff01", "#93d051", "#00b04e", "#01b0f1", "#0170c1", "#012060", "#7030a0"];

    function En(t) {
        var e = this;
        return a("td", "").child(a("div", "".concat(lt, "-color-palette-cell")).on("click.stop", function() {
            return e.change(t)
        }).css("background-color", t))
    }
    var Sn = function t() {
        var e, n, i, r = this;
        ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.el = a("div", "".concat(lt, "-color-palette")), this.change = function() {};
        var o = a("table", "").children((e = a("tbody", "")).children.apply(e, [(n = a("tr", "".concat(lt, "-theme-color-placeholders"))).children.apply(n, wn(kn.map(function(t) {
            return En.call(r, t)
        })))].concat(wn(xn.map(function(t) {
            var e;
            return (e = a("tr", "".concat(lt, "-theme-colors"))).children.apply(e, wn(t.map(function(t) {
                return En.call(r, t)
            })))
        })), [(i = a("tr", "".concat(lt, "-standard-colors"))).children.apply(i, wn(On.map(function(t) {
            return En.call(r, t)
        })))])));
        this.el.child(o)
    };

    function Cn(t) {
        return (Cn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Tn(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function An(t, e) {
        return !e || "object" !== Cn(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function jn(t) {
        return (jn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function _n(t, e) {
        return (_n = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var Pn = function(t) {
        function e(t, n) {
            var i;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var r = new Ft(t).css("height", "16px").css("border-bottom", "3px solid ".concat(n)),
                o = new Sn;
            return o.change = function(t) {
                i.setTitle(t), i.change(t)
            }, i = An(this, jn(e).call(this, r, "auto", !1, "bottom-left", o.el))
        }
        var n, i, r;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && _n(t, e)
        }(e, $e), n = e, (i = [{
            key: "setTitle",
            value: function(t) {
                this.title.css("border-color", t), this.hide()
            }
        }]) && Tn(n.prototype, i), r && Tn(n, r), e
    }();

    function zn(t) {
        return (zn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function In(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function Dn(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function Rn(t, e) {
        return !e || "object" !== zn(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Wn(t) {
        return (Wn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Nn(t, e) {
        return (Nn = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var Fn = function(t) {
        function e(t, n) {
            var i, r;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var o = new Ft("align-".concat(n)),
                l = t.map(function(t) {
                    return (e = "align-".concat(t), a("div", "".concat(lt, "-item")).child(new Ft(e))).on("click", function() {
                        r.setTitle(t), r.change(t)
                    });
                    var e
                });
            return r = Rn(this, (i = Wn(e)).call.apply(i, [this, o, "auto", !0, "bottom-left"].concat(In(l))))
        }
        var n, i, r;
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Nn(t, e)
        }(e, $e), n = e, (i = [{
            key: "setTitle",
            value: function(t) {
                this.title.setName("align-".concat(t)), this.hide()
            }
        }]) && Dn(n.prototype, i), r && Dn(n, r), e
    }();

    function Hn(t) {
        return (Hn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Mn(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function Vn(t, e) {
        return !e || "object" !== Hn(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function qn(t) {
        return (qn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Bn(t, e) {
        return (Bn = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var Ln = [
            ["thin", '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="1" style="user-select: none;"><line x1="0" y1="0.5" x2="50" y2="0.5" stroke-width="1" stroke="black" style="user-select: none;"></line></svg>'],
            ["medium", '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="2" style="user-select: none;"><line x1="0" y1="1.0" x2="50" y2="1.0" stroke-width="2" stroke="black" style="user-select: none;"></line></svg>'],
            ["thick", '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="3" style="user-select: none;"><line x1="0" y1="1.5" x2="50" y2="1.5" stroke-width="3" stroke="black" style="user-select: none;"></line></svg>'],
            ["dashed", '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="1" style="user-select: none;"><line x1="0" y1="0.5" x2="50" y2="0.5" stroke-width="1" stroke="black" stroke-dasharray="2" style="user-select: none;"></line></svg>'],
            ["dotted", '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="1" style="user-select: none;"><line x1="0" y1="0.5" x2="50" y2="0.5" stroke-width="1" stroke="black" stroke-dasharray="1" style="user-select: none;"></line></svg>']
        ],
        Yn = function(t) {
            function e(t) {
                var n, i;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var r = new Ft("line-type"),
                    o = 0,
                    l = Ln.map(function(e, n) {
                        return a("div", "".concat(lt, "-item state ").concat(t === e[0] ? "checked" : "")).on("click", function() {
                            l[o].toggle("checked"), l[n].toggle("checked"), o = n, i.hide(), i.change(e)
                        }).child(a("div", "".concat(lt, "-line-type")).html(e[1]))
                    });
                return i = Vn(this, (n = qn(e)).call.apply(n, [this, r, "auto", !1, "bottom-left"].concat(Mn(l))))
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Bn(t, e)
            }(e, $e), e
        }();

    function Un(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function $n(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = [],
                i = !0,
                r = !1,
                o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    i || null == l.return || l.return()
                } finally {
                    if (r) throw o
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function Xn() {
        var t;
        return a("table", "").child((t = a("tbody", "")).children.apply(t, arguments))
    }

    function Jn(t) {
        var e = this;
        return a("td", "").child(a("div", "".concat(lt, "-border-palette-cell")).child(new Ft("border-".concat(t))).on("click", function() {
            e.mode = t;
            var n = e.mode,
                i = e.style,
                r = e.color;
            e.change({
                mode: n,
                style: i,
                color: r
            })
        }))
    }
    var Kn = function t() {
        var e, n, i = this;
        ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.color = "#000", this.style = "thin", this.mode = "all", this.change = function() {}, this.ddColor = new Pn("line-color", this.color), this.ddColor.change = function(t) {
            i.color = t
        }, this.ddType = new Yn(this.style), this.ddType.change = function(t) {
            var e = $n(t, 1)[0];
            i.style = e
        }, this.el = a("div", "".concat(lt, "-border-palette"));
        var r = Xn(a("tr", "").children(a("td", "".concat(lt, "-border-palette-left")).child(Xn((e = a("tr", "")).children.apply(e, Un(["all", "inside", "horizontal", "vertical", "outside"].map(function(t) {
            return Jn.call(i, t)
        }))), (n = a("tr", "")).children.apply(n, Un(["left", "top", "right", "bottom", "none"].map(function(t) {
            return Jn.call(i, t)
        }))))), a("td", "".concat(lt, "-border-palette-right")).children(a("div", "".concat(lt, "-toolbar-btn")).child(this.ddColor.el), a("div", "".concat(lt, "-toolbar-btn")).child(this.ddType.el))));
        this.el.child(r)
    };

    function Zn(t) {
        return (Zn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Gn(t, e) {
        return !e || "object" !== Zn(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Qn(t) {
        return (Qn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function ti(t, e) {
        return (ti = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var ei = function(t) {
        function e() {
            var t;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = new Ft("border-all"),
                i = new Kn;
            return i.change = function(e) {
                t.change(e), t.hide()
            }, t = Gn(this, Qn(e).call(this, n, "auto", !1, "bottom-left", i.el))
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && ti(t, e)
        }(e, $e), e
    }();

    function ni(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function ii(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function ri(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = [],
                i = !0,
                r = !1,
                o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    i || null == l.return || l.return()
                } finally {
                    if (r) throw o
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function oi(t) {
        return (oi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function ai(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function li(t, e) {
        return !e || "object" !== oi(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function si(t) {
        return (si = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function ci(t, e) {
        return (ci = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function ui(t) {
        return a("div", "".concat(lt, "-toolbar-btn")).on("mouseenter", function(e) {
            ! function(t, e) {
                if (!e.classList.contains("active")) {
                    var n = e.getBoundingClientRect(),
                        i = n.left,
                        r = n.top,
                        o = n.width,
                        l = n.height,
                        s = a("div", "".concat(lt, "-tooltip")).html(t).show();
                    document.body.appendChild(s.el);
                    var c = s.box();
                    s.css("left", "".concat(i + o / 2 - c.width / 2, "px")).css("top", "".concat(r + l + 2, "px")), et(e, "mouseleave", function() {
                        document.body.contains(s.el) && document.body.removeChild(s.el)
                    }), et(e, "click", function() {
                        document.body.contains(s.el) && document.body.removeChild(s.el)
                    })
                }
            }(t, e.target)
        }).attr("data-tooltip", t)
    }

    function hi() {
        return a("div", "".concat(lt, "-toolbar-divider"))
    }

    function fi(t, e) {
        var n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
        return ui(t).child((n = e, new Ft(n))).on("click", function() {
            return i()
        })
    }

    function di(t) {
        var e = t,
            n = t.split("-");
        n.length > 1 && n.forEach(function(t, n) {
            0 === n ? e = t : e += t[0].toUpperCase() + t.substring(1)
        });
        var i = this["".concat(e, "El")];
        i.toggle(), this.change(t, i.hasClass("active"))
    }
    var vi = function(t) {
        function e() {
            var t;
            ai(this, e);
            var n = new Ft("ellipsis"),
                i = a("div", "".concat(lt, "-toolbar-more"));
            return (t = li(this, si(e).call(this, n, "auto", !1, "bottom-right", i))).moreBtns = i, t.contentEl.css("max-width", "420px"), t
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && ci(t, e)
        }(e, $e), e
    }();

    function yi() {
        var t, e, n = this.el,
            i = this.btns,
            r = this.moreEl,
            o = this.ddMore,
            a = this.btns2,
            l = o.moreBtns,
            s = o.contentEl;
        n.css("width", "".concat(this.widthFn() - 60, "px"));
        var c = n.box(),
            u = 160,
            h = 12,
            f = [],
            d = [];
        a.forEach(function(t, e) {
            var n = ri(t, 2),
                i = n[0],
                r = n[1];
            u += r, e === a.length - 1 || u < c.width ? f.push(i) : (h += r, d.push(i))
        }), (t = i.html("")).children.apply(t, f), (e = l.html("")).children.apply(e, d), s.css("width", "".concat(h, "px")), d.length > 0 ? r.show() : r.hide()
    }
    var pi = function() {
        function t(e, n) {
            var i, r = this,
                o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            ai(this, t), this.data = e, this.change = function() {}, this.widthFn = n;
            var l = e.defaultStyle();
            this.ddFormat = new dn, this.ddFont = new Qe, this.ddFormula = new mn, this.ddFontSize = new an, this.ddTextColor = new Pn("text-color", l.color), this.ddFillColor = new Pn("fill-color", l.bgcolor), this.ddAlign = new Fn(["left", "center", "right"], l.align), this.ddVAlign = new Fn(["top", "middle", "bottom"], l.valign), this.ddBorder = new ei, this.ddMore = new vi, this.btnChildren = [this.undoEl = fi("".concat(R("toolbar.undo"), " (Ctrl+Z)"), "undo", function() {
                    return r.change("undo")
                }), this.redoEl = fi("".concat(R("toolbar.undo"), " (Ctrl+Y)"), "redo", function() {
                    return r.change("redo")
                }), this.paintformatEl = fi("".concat(R("toolbar.paintformat")), "paintformat", function() {
                    return di.call(r, "paintformat")
                }), this.clearformatEl = fi("".concat(R("toolbar.clearformat")), "clearformat", function() {
                    return r.change("clearformat")
                }), hi(), ui("".concat(R("toolbar.format"))).child(this.ddFormat.el), hi(), ui("".concat(R("toolbar.font"))).child(this.ddFont.el), ui("".concat(R("toolbar.fontSize"))).child(this.ddFontSize.el), hi(), this.fontBoldEl = fi("".concat(R("toolbar.fontBold"), " (Ctrl+B)"), "bold", function() {
                    return di.call(r, "font-bold")
                }), this.fontItalicEl = fi("".concat(R("toolbar.fontItalic"), " (Ctrl+I)"), "italic", function() {
                    return di.call(r, "font-italic")
                }), this.underlineEl = fi("".concat(R("toolbar.underline"), " (Ctrl+U)"), "underline", function() {
                    return di.call(r, "underline")
                }), this.strikeEl = fi("".concat(R("toolbar.strike")), "strike", function() {
                    return di.call(r, "strike")
                }), ui("".concat(R("toolbar.textColor"))).child(this.ddTextColor.el), hi(), ui("".concat(R("toolbar.fillColor"))).child(this.ddFillColor.el), ui("".concat(R("toolbar.border"))).child(this.ddBorder.el), this.mergeEl = fi("".concat(R("toolbar.merge")), "merge", function() {
                    return di.call(r, "merge")
                }), hi(), ui("".concat(R("toolbar.align"))).child(this.ddAlign.el), ui("".concat(R("toolbar.valign"))).child(this.ddVAlign.el), this.textwrapEl = fi("".concat(R("toolbar.textwrap")), "textwrap", function() {
                    return di.call(r, "textwrap")
                }), hi(), this.freezeEl = fi("".concat(R("toolbar.freeze")), "freeze", function() {
                    return di.call(r, "freeze")
                }), ui("".concat(R("toolbar.formula"))).child(this.ddFormula.el), this.moreEl = ui("".concat(R("toolbar.more"))).child(this.ddMore.el).hide()], this.el = a("div", "".concat(lt, "-toolbar")), this.btns = (i = a("div", "".concat(lt, "-toolbar-btns"))).children.apply(i, ni(this.btnChildren)), this.el.child(this.btns), o && this.el.hide(),
                function() {
                    var t = this;
                    this.ddFormat.change = function(e) {
                        return t.change("format", e.key)
                    }, this.ddFont.change = function(e) {
                        return t.change("font-name", e.key)
                    }, this.ddFormula.change = function(e) {
                        return t.change("formula", e.key)
                    }, this.ddFontSize.change = function(e) {
                        return t.change("font-size", e.pt)
                    }, this.ddTextColor.change = function(e) {
                        return t.change("color", e)
                    }, this.ddFillColor.change = function(e) {
                        return t.change("bgcolor", e)
                    }, this.ddAlign.change = function(e) {
                        return t.change("align", e)
                    }, this.ddVAlign.change = function(e) {
                        return t.change("valign", e)
                    }, this.ddBorder.change = function(e) {
                        return t.change("border", e)
                    }
                }.call(this), this.reset(), setTimeout(function() {
                    (function() {
                        this.btns2 = this.btnChildren.map(function(t) {
                            var e = t.box(),
                                n = t.computedStyle(),
                                i = n.marginLeft,
                                r = n.marginRight;
                            return [t, e.width + parseInt(i, 10) + parseInt(r, 10)]
                        })
                    }).call(r), yi.call(r)
                }, 0), et(window, "resize", function() {
                    yi.call(r)
                })
        }
        var e, n, i;
        return e = t, (n = [{
            key: "paintformatActive",
            value: function() {
                return this.paintformatEl.hasClass("active")
            }
        }, {
            key: "paintformatToggle",
            value: function() {
                this.paintformatEl.toggle()
            }
        }, {
            key: "trigger",
            value: function(t) {
                di.call(this, t)
            }
        }, {
            key: "reset",
            value: function() {
                var t = this.data,
                    e = t.getSelectedCellStyle(),
                    n = t.getSelectedCell();
                this.undoEl.disabled(!t.canUndo()), this.redoEl.disabled(!t.canRedo()), this.mergeEl.active(t.canUnmerge()).disabled(!t.selector.multiple());
                var i = e.font;
                this.ddFont.setTitle(i.name), this.ddFontSize.setTitle(i.size), this.fontBoldEl.active(i.bold), this.fontItalicEl.active(i.italic), this.underlineEl.active(e.underline), this.strikeEl.active(e.strike), this.ddTextColor.setTitle(e.color), this.ddFillColor.setTitle(e.bgcolor), this.ddAlign.setTitle(e.align), this.ddVAlign.setTitle(e.valign), this.textwrapEl.active(e.textwrap), this.freezeEl.active(t.freezeIsActive()), n && n.format && this.ddFormat.setTitle(n.format)
            }
        }]) && ii(e.prototype, n), i && ii(e, i), t
    }();

    function gi(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function bi(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var mi = function() {
        function t(e, n) {
            var i, r = this,
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "600px";
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.title = e, this.el = a("div", "".concat(lt, "-modal")).css("width", o).children(a("div", "".concat(lt, "-modal-header")).children(new Ft("close").on("click.stop", function() {
                return r.hide()
            }), this.title), (i = a("div", "".concat(lt, "-modal-content"))).children.apply(i, gi(n))).hide()
        }
        var e, n, i;
        return e = t, (n = [{
            key: "show",
            value: function() {
                var t = this,
                    e = this.el.show().box(),
                    n = e.width,
                    i = e.height,
                    r = document.documentElement,
                    o = r.clientHeight,
                    a = r.clientWidth;
                this.el.offset({
                    left: (a - n) / 2,
                    top: (o - i) / 3
                }), window.xkeydownEsc = function(e) {
                    27 === e.keyCode && t.hide()
                }, et(window, "keydown", window.xkeydownEsc)
            }
        }, {
            key: "hide",
            value: function() {
                this.el.hide(), nt(window, "keydown", window.xkeydownEsc), delete window.xkeydownEsc
            }
        }]) && bi(e.prototype, n), i && bi(e, i), t
    }();

    function wi(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var ki = function() {
        function t(e, n) {
            var i = this;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.vchange = function() {}, this.el = a("div", "".concat(lt, "-form-input")), this.input = a("input", "").css("width", e).on("input", function(t) {
                return i.vchange(t)
            }).attr("placeholder", n), this.el.child(this.input)
        }
        var e, n, i;
        return e = t, (n = [{
            key: "hint",
            value: function(t) {
                this.input.attr("placeholder", t)
            }
        }, {
            key: "val",
            value: function(t) {
                return this.input.val(t)
            }
        }]) && wi(e.prototype, n), i && wi(e, i), t
    }();

    function xi(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var Oi = function() {
        function t(e, n, i) {
            var r = this,
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function(t) {
                    return t
                },
                l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {};
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.key = e, this.getTitle = o, this.vchange = function() {}, this.el = a("div", "".concat(lt, "-form-select")), this.suggest = new zt(n.map(function(t) {
                return {
                    key: t,
                    title: r.getTitle(t)
                }
            }), function(t) {
                r.itemClick(t.key), l(t.key), r.vchange(t.key)
            }, i, this.el), this.el.children(this.itemEl = a("div", "input-text").html(this.getTitle(e)), this.suggest.el).on("click", function() {
                return r.show()
            })
        }
        var e, n, i;
        return e = t, (n = [{
            key: "show",
            value: function() {
                this.suggest.search("")
            }
        }, {
            key: "itemClick",
            value: function(t) {
                this.key = t, this.itemEl.html(this.getTitle(t))
            }
        }, {
            key: "val",
            value: function(t) {
                return void 0 !== t ? (this.key = t, this.itemEl.html(this.getTitle(t)), this) : this.key
            }
        }]) && xi(e.prototype, n), i && xi(e, i), t
    }();

    function Ei(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    var Si = {
            number: /(^\d+$)|(^\d+(\.\d{0,4})?$)/,
            date: /^\d{4}-\d{1,2}-\d{1,2}$/
        },
        Ci = function() {
            function t(e, n, i, r) {
                var o = this;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.label = "", this.rule = n, i && (this.label = a("label", "label").css("width", "".concat(r, "px")).html(i)), this.tip = a("div", "tip").child("tip").hide(), this.input = e, this.input.vchange = function() {
                    return o.validate()
                }, this.el = a("div", "".concat(lt, "-form-field")).children(this.label, e.el, this.tip)
            }
            var e, n, i;
            return e = t, (n = [{
                key: "isShow",
                value: function() {
                    return "none" !== this.el.css("display")
                }
            }, {
                key: "show",
                value: function() {
                    this.el.show()
                }
            }, {
                key: "hide",
                value: function() {
                    return this.el.hide(), this
                }
            }, {
                key: "val",
                value: function(t) {
                    return this.input.val(t)
                }
            }, {
                key: "hint",
                value: function(t) {
                    this.input.hint(t)
                }
            }, {
                key: "validate",
                value: function() {
                    var t = this.input,
                        e = this.rule,
                        n = this.tip,
                        i = this.el,
                        r = t.val();
                    if (e.required && /^\s*$/.test(r)) return n.html(R("validation.required")), i.addClass("error"), !1;
                    if ((e.type || e.pattern) && !(e.pattern || Si[e.type]).test(r)) return n.html(R("validation.notMatch")), i.addClass("error"), !1;
                    return i.removeClass("error"), !0
                }
            }]) && Ei(e.prototype, n), i && Ei(e, i), t
        }();

    function Ti(t) {
        return (Ti = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Ai(t, e) {
        return !e || "object" !== Ti(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function ji(t) {
        return (ji = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function _i(t, e) {
        return (_i = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var Pi = function(t) {
        function e(t) {
            var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), (n = Ai(this, ji(e).call(this, "div", "".concat(lt, "-button ").concat(i)))).child(R("button.".concat(t))), n
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && _i(t, e)
        }(e, o), e
    }();

    function zi(t) {
        return (zi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Ii(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function Di(t, e) {
        return !e || "object" !== zi(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Ri(t) {
        return (Ri = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Wi(t, e) {
        return (Wi = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
    var Ni = 100,
        Fi = function(t) {
            function e() {
                var t;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var n = new Ci(new Oi("cell", ["cell"], "100%", function(t) {
                        return R("dataValidation.modeType.".concat(t))
                    }), {
                        required: !0
                    }, "".concat(R("dataValidation.range"), ":"), Ni),
                    i = new Ci(new ki("120px", "E3 or E3:F12"), {
                        required: !0,
                        pattern: /^([A-Z]{1,2}[1-9]\d*)(:[A-Z]{1,2}[1-9]\d*)?$/
                    }),
                    r = new Ci(new Oi("list", ["list", "number", "date", "phone", "email"], "100%", function(t) {
                        return R("dataValidation.type.".concat(t))
                    }, function(e) {
                        return t.criteriaSelected(e)
                    }), {
                        required: !0
                    }, "".concat(R("dataValidation.criteria"), ":"), Ni),
                    o = new Ci(new Oi("be", ["be", "nbe", "eq", "neq", "lt", "lte", "gt", "gte"], "160px", function(t) {
                        return R("dataValidation.operator.".concat(t))
                    }, function(e) {
                        return t.criteriaOperatorSelected(e)
                    }), {
                        required: !0
                    }).hide(),
                    l = new Ci(new ki("70px", "10"), {
                        required: !0
                    }).hide(),
                    s = new Ci(new ki("70px", "100"), {
                        required: !0,
                        type: "number"
                    }).hide(),
                    c = new Ci(new ki("120px", "a,b,c"), {
                        required: !0
                    }),
                    u = new Ci(new ki("70px", "10"), {
                        required: !0,
                        type: "number"
                    }).hide();
                return (t = Di(this, Ri(e).call(this, R("contextmenu.validation"), [a("div", "".concat(lt, "-form-fields")).children(n.el, i.el), a("div", "".concat(lt, "-form-fields")).children(r.el, o.el, l.el, s.el, u.el, c.el), a("div", "".concat(lt, "-buttons")).children(new Pi("cancel").on("click", function() {
                    return t.btnClick("cancel")
                }), new Pi("remove").on("click", function() {
                    return t.btnClick("remove")
                }), new Pi("save", "primary").on("click", function() {
                    return t.btnClick("save")
                }))]))).mf = n, t.rf = i, t.cf = r, t.of = o, t.minvf = l, t.maxvf = s, t.vf = u, t.svf = c, t.change = function() {}, t
            }
            var n, i, r;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Wi(t, e)
            }(e, mi), n = e, (i = [{
                key: "showVf",
                value: function(t) {
                    var e = "date" === t ? "2018-11-12" : "10",
                        n = this.vf;
                    n.input.hint(e), n.show()
                }
            }, {
                key: "criteriaSelected",
                value: function(t) {
                    var e = this.of,
                        n = this.minvf,
                        i = this.maxvf,
                        r = this.vf,
                        o = this.svf;
                    "date" === t || "number" === t ? (e.show(), n.rule.type = t, i.rule.type = t, "date" === t ? (n.hint("2018-11-12"), i.hint("2019-11-12")) : (n.hint("10"), i.hint("100")), n.show(), i.show(), r.hide(), o.hide()) : ("list" === t ? o.show() : o.hide(), r.hide(), e.hide(), n.hide(), i.hide())
                }
            }, {
                key: "criteriaOperatorSelected",
                value: function(t) {
                    if (t) {
                        var e = this.minvf,
                            n = this.maxvf,
                            i = this.vf;
                        if ("be" === t || "nbe" === t) e.show(), n.show(), i.hide();
                        else {
                            var r = this.cf.val();
                            i.rule.type = r, "date" === r ? i.hint("2018-11-12") : i.hint("10"), i.show(), e.hide(), n.hide()
                        }
                    }
                }
            }, {
                key: "btnClick",
                value: function(t) {
                    if ("cancel" === t) this.hide();
                    else if ("remove" === t) this.change("remove"), this.hide();
                    else if ("save" === t) {
                        for (var e = ["mf", "rf", "cf", "of", "svf", "vf", "minvf", "maxvf"], n = 0; n < e.length; n += 1) {
                            var i = this[e[n]];
                            if (i.isShow() && !i.validate()) return
                        }
                        var r = this.mf.val(),
                            o = this.rf.val(),
                            a = this.cf.val(),
                            l = this.of.val(),
                            s = this.svf.val();
                        "number" !== a && "date" !== a || (s = "be" === l || "nbe" === l ? [this.minvf.val(), this.maxvf.val()] : this.vf.val()), this.change("save", r, o, {
                            type: a,
                            operator: l,
                            required: !1,
                            value: s
                        }), this.hide()
                    }
                }
            }, {
                key: "setValue",
                value: function(t) {
                    if (t) {
                        var e = this.mf,
                            n = this.rf,
                            i = this.cf,
                            r = this.of,
                            o = this.svf,
                            a = this.vf,
                            l = this.minvf,
                            s = this.maxvf,
                            c = t.mode,
                            u = t.ref,
                            h = t.validator || {
                                type: "list"
                            },
                            f = h.type,
                            d = h.operator,
                            v = h.value;
                        e.val(c || "cell"), n.val(u), i.val(f), r.val(d), Array.isArray(v) ? (l.val(v[0]), s.val(v[1])) : (o.val(v || ""), a.val(v || "")), this.criteriaSelected(f), this.criteriaOperatorSelected(d)
                    }
                    this.show()
                }
            }]) && Ii(n.prototype, i), r && Ii(n, r), e
        }();

    function Hi(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function Mi(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = [],
                i = !0,
                r = !1,
                o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
            } catch (t) {
                r = !0, o = t
            } finally {
                try {
                    i || null == l.return || l.return()
                } finally {
                    if (r) throw o
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function Vi(t, e, n) {
        var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (-1 !== e || -1 !== n) {
            var r = this.table,
                o = this.selector,
                a = this.toolbar;
            t ? o.setEnd(e, n) : o.set(e, n, i), a.reset(), r.render()
        }
    }

    function qi(t, e) {
        var n = this.selector,
            i = this.data,
            r = i.rows,
            o = i.cols,
            a = Mi(n.indexes, 2),
            l = a[0],
            s = a[1],
            c = n.range,
            u = c.eri,
            h = c.eci;
        if (t) {
            var f = Mi(n.moveIndexes, 2);
            l = f[0], s = f[1]
        }
        "left" === e ? s > 0 && (s -= 1) : "right" === e ? (h !== s && (s = h), s < o.len - 1 && (s += 1)) : "up" === e ? l > 0 && (l -= 1) : "down" === e ? (u !== l && (l = u), l < r.len - 1 && (l += 1)) : "row-first" === e ? s = 0 : "row-last" === e ? s = o.len - 1 : "col-first" === e ? l = 0 : "col-last" === e && (l = r.len - 1), t && (n.moveIndexes = [l, s]), Vi.call(this, t, l, s),
            function() {
                var t = this.data,
                    e = this.verticalScrollbar,
                    n = this.horizontalScrollbar,
                    i = t.getSelectedRect(),
                    r = i.l,
                    o = i.t,
                    a = i.left,
                    l = i.top,
                    s = i.width,
                    c = i.height,
                    u = this.getTableOffset();
                if (Math.abs(a) + s > u.width) n.move({
                    left: r + s - u.width
                });
                else {
                    var h = t.freezeTotalWidth();
                    a < h && n.move({
                        left: r - 1 - h
                    })
                }
                if (Math.abs(l) + c > u.height) e.move({
                    top: o + c - u.height - 1
                });
                else {
                    var f = t.freezeTotalHeight();
                    l < f && e.move({
                        top: o - 1 - f
                    })
                }
            }.call(this)
    }

    function Bi() {
        var t = this.data,
            e = this.verticalScrollbar,
            n = this.getTableOffset().height;
        e.set(n, t.rows.totalHeight())
    }

    function Li() {
        var t = this.data,
            e = this.horizontalScrollbar,
            n = this.getTableOffset().width;
        t && e.set(n, t.cols.totalWidth())
    }

    function Yi() {
        var t = this.tableEl,
            e = this.overlayerEl,
            n = this.overlayerCEl,
            i = this.table,
            r = this.toolbar,
            o = this.selector,
            a = this.el,
            l = this.getTableOffset(),
            s = this.getRect();
        t.attr(s), e.offset(s), n.offset(l), a.css("width", "".concat(s.width, "px")), Bi.call(this), Li.call(this),
            function() {
                var t = this.selector,
                    e = this.data,
                    n = this.editor,
                    i = Mi(e.freeze, 2),
                    r = i[0],
                    o = i[1];
                if (r > 0 || o > 0) {
                    var a = e.freezeTotalWidth(),
                        l = e.freezeTotalHeight();
                    n.setFreezeLengths(a, l)
                }
                t.resetAreaOffset()
            }.call(this), i.render(), r.reset(), o.reset()
    }

    function Ui() {
        var t = this.data,
            e = this.selector;
        t.clearClipboard(), e.hideClipboard()
    }

    function $i() {
        var t = this.data,
            e = this.selector;
        t.copy(), e.showClipboard()
    }

    function Xi() {
        var t = this.data,
            e = this.selector;
        t.cut(), e.showClipboard()
    }

    function Ji(t) {
        this.data.paste(t), Yi.call(this)
    }

    function Ki(t) {
        var e = this,
            n = this.selector,
            i = this.data,
            r = this.table,
            o = t.target.className === "".concat(lt, "-selector-corner"),
            a = i.getCellRectByXY(t.offsetX, t.offsetY),
            l = a.ri,
            s = a.ci;
        t.shiftKey || (o ? n.showAutofill(l, s) : Vi.call(this, !1, l, s), ot(window, function(t) {
            var r = i.getCellRectByXY(t.offsetX, t.offsetY);
            l = r.ri, s = r.ci, o ? n.showAutofill(l, s) : 1 !== t.buttons || t.shiftKey || Vi.call(e, !0, l, s)
        }, function() {
            o && (i.autofill(n.arange, "all"), r.render()), n.hideAutofill(),
                function() {
                    var t = this.toolbar;
                    t.paintformatActive() && (Ji.call(this, "format"), Ui.call(this), t.paintformatToggle())
                }.call(e)
        })), o || 1 !== t.buttons || t.shiftKey && Vi.call(this, !0, l, s)
    }

    function Zi() {
        var t = this.editor,
            e = this.data.getSelectedRect(),
            n = this.getTableOffset(),
            i = "top";
        e.top > n.height / 2 && (i = "bottom"), t.setOffset(e, i)
    }

    function Gi() {
        var t = this.editor,
            e = this.data;
        Zi.call(this), t.setCell(e.getSelectedCell(), e.getSelectedValidator()), Ui.call(this)
    }

    function Qi(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "finished",
            n = this.data,
            i = this.table;
        n.setSelectedCellText(t, e), i.render()
    }

    function tr(t) {
        var e = this.data;
        "insert-row" === t ? e.insert("row") : "delete-row" === t ? e.delete("row") : "insert-column" === t ? e.insert("column") : "delete-column" === t ? e.delete("column") : "delete-cell" === t ? e.deleteCell() : "delete-cell-format" === t ? e.deleteCell("format") : "delete-cell-text" === t && e.deleteCell("text"), Ui.call(this), Yi.call(this)
    }

    function er() {
        var t, e, n, i, r, o, a = this,
            l = this.overlayerEl,
            s = this.rowResizer,
            c = this.colResizer,
            u = this.verticalScrollbar,
            h = this.horizontalScrollbar,
            f = this.editor,
            d = this.contextMenu,
            v = this.data,
            y = this.toolbar,
            p = this.modalValidation;
        l.on("mousemove", function(t) {
            (function(t) {
                if (0 === t.buttons && t.target.className !== "".concat(lt, "-resizer-hover")) {
                    var e = t.offsetX,
                        n = t.offsetY,
                        i = this.rowResizer,
                        r = this.colResizer,
                        o = this.tableEl,
                        a = this.data,
                        l = a.rows,
                        s = a.cols;
                    if (e > s.indexWidth && n > l.height) return i.hide(), void r.hide();
                    var c = o.box(),
                        u = a.getCellRectByXY(t.offsetX, t.offsetY);
                    u.ri >= 0 && -1 === u.ci ? (u.width = s.indexWidth, i.show(u, {
                        width: c.width
                    })) : i.hide(), -1 === u.ri && u.ci >= 0 ? (u.height = l.height, r.show(u, {
                        height: c.height
                    })) : r.hide()
                }
            }).call(a, t)
        }).on("mousedown", function(t) {
            2 === t.buttons ? v.xyInSelectedRect(t.offsetX, t.offsetY) ? (d.setPosition(t.offsetX, t.offsetY), t.stopPropagation()) : d.hide() : 2 === t.detail ? Gi.call(a) : (f.clear(), Ki.call(a, t))
        }).on("mousewheel.stop", function(t) {
            (function(t) {
                var e = this.verticalScrollbar,
                    n = this.data,
                    i = e.scroll().top,
                    r = t.deltaY,
                    o = n.rows;
                if (t.detail && (r = 40 * t.detail), r > 0) {
                    var a = n.scroll.ri + 1;
                    a < o.len && e.move({
                        top: i + o.getHeight(a) - 1
                    })
                } else {
                    var l = n.scroll.ri - 1;
                    l >= 0 && e.move({
                        top: 0 === l ? 0 : i - o.getHeight(l)
                    })
                }
            }).call(a, t)
        }), t = l.el, n = (e = {
            move: function(t, e) {
                (function(t, e) {
                    var n = this.verticalScrollbar,
                        i = this.horizontalScrollbar,
                        r = n.scroll().top,
                        o = i.scroll().left;
                    "left" === t || "right" === t ? i.move({
                        left: o - e
                    }) : "up" !== t && "down" !== t || n.move({
                        top: r - e
                    })
                }).call(a, t, e)
            }
        }).move, i = e.end, r = 0, o = 0, et(t, "touchstart", function(t) {
            var e = t.touches[0],
                n = e.pageX,
                i = e.pageY;
            r = n, o = i
        }), et(t, "touchmove", function(t) {
            if (n) {
                var e = t.changedTouches[0],
                    i = e.pageX,
                    a = e.pageY;
                at(i - r, a - o, t, n), r = i, o = a, t.preventDefault()
            }
        }), et(t, "touchend", function(t) {
            if (i) {
                var e = t.changedTouches[0],
                    n = e.pageX,
                    a = e.pageY;
                at(n - r, a - o, t, i)
            }
        }), y.change = function(t, e) {
            return function(t, e) {
                var n = this.data;
                if ("undo" === t) this.undo();
                else if ("redo" === t) this.redo();
                else if ("print" === t);
                else if ("paintformat" === t) !0 === e ? $i.call(this) : Ui.call(this);
                else if ("clearformat" === t) tr.call(this, "delete-cell-format");
                else if ("link" === t);
                else if ("chart" === t);
                else if ("filter" === t);
                else if ("freeze" === t)
                    if (e) {
                        var i = n.selector,
                            r = i.ri,
                            o = i.ci;
                        this.freeze(r, o)
                    } else this.freeze(0, 0);
                else n.setSelectedCellAttr(t, e), "formula" === t && Gi.call(this), Yi.call(this)
            }.call(a, t, e)
        }, s.finishedFn = function(t, e) {
            (function(t, e) {
                var n = t.ri,
                    i = this.table,
                    r = this.selector;
                this.data.rows.setHeight(n, e), i.render(), r.resetAreaOffset(), Bi.call(this), Zi.call(this)
            }).call(a, t, e)
        }, c.finishedFn = function(t, e) {
            (function(t, e) {
                var n = t.ci,
                    i = this.table,
                    r = this.selector;
                this.data.cols.setWidth(n, e), i.render(), r.resetAreaOffset(), Li.call(this), Zi.call(this)
            }).call(a, t, e)
        }, u.moveFn = function(t, e) {
            (function(t) {
                var e = this,
                    n = this.data,
                    i = this.table,
                    r = this.selector;
                n.scrolly(t, function() {
                    r.resetBRLAreaOffset(), Zi.call(e), i.render()
                })
            }).call(a, t, e)
        }, h.moveFn = function(t, e) {
            (function(t) {
                var e = this,
                    n = this.data,
                    i = this.table,
                    r = this.selector;
                n.scrollx(t, function() {
                    r.resetBRTAreaOffset(), Zi.call(e), i.render()
                })
            }).call(a, t, e)
        }, f.change = function(t, e) {
            Qi.call(a, e, t)
        }, p.change = function(t) {
            if ("save" === t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
                v.addValidation.apply(v, n)
            } else v.removeValidation()
        }, d.itemClick = function(t) {
            "validation" === t ? p.setValue(v.getSelectedValidation()) : "copy" === t ? $i.call(a) : "cut" === t ? Xi.call(a) : "paste" === t ? Ji.call(a, "all") : "paste-value" === t ? Ji.call(a, "text") : "paste-format" === t ? Ji.call(a, "format") : tr.call(a, t)
        }, et(window, "resize", function() {
            a.reload()
        }), et(window, "click", function(t) {
            a.focusing = l.contains(t.target)
        }), et(window, "keydown", function(t) {
            if (a.focusing) {
                var e = t.keyCode || t.which,
                    n = t.key,
                    i = t.ctrlKey,
                    r = t.shiftKey,
                    o = t.altKey,
                    l = t.metaKey;
                if (i || l) {
                    var s = "all";
                    switch (r && (s = "text"), o && (s = "format"), e) {
                        case 90:
                            a.undo(), t.preventDefault();
                            break;
                        case 89:
                            a.redo(), t.preventDefault();
                            break;
                        case 67:
                            $i.call(a), t.preventDefault();
                            break;
                        case 88:
                            Xi.call(a), t.preventDefault();
                            break;
                        case 85:
                            y.trigger("underline"), t.preventDefault();
                            break;
                        case 86:
                            Ji.call(a, s), t.preventDefault();
                            break;
                        case 37:
                            qi.call(a, r, "row-first"), t.preventDefault();
                            break;
                        case 38:
                            qi.call(a, r, "col-first"), t.preventDefault();
                            break;
                        case 39:
                            qi.call(a, r, "row-last"), t.preventDefault();
                            break;
                        case 40:
                            qi.call(a, r, "col-last"), t.preventDefault();
                            break;
                        case 32:
                            Vi.call(a, !1, -1, v.selector.ci, !1), t.preventDefault();
                            break;
                        case 66:
                            y.trigger("font-bold");
                            break;
                        case 73:
                            y.trigger("font-italic")
                    }
                } else {
                    switch (e) {
                        case 32:
                            r && Vi.call(a, !1, v.selector.ri, -1, !1);
                            break;
                        case 27:
                            d.hide(), Ui.call(a);
                            break;
                        case 37:
                            qi.call(a, r, "left"), t.preventDefault();
                            break;
                        case 38:
                            qi.call(a, r, "up"), t.preventDefault();
                            break;
                        case 39:
                            qi.call(a, r, "right"), t.preventDefault();
                            break;
                        case 40:
                            qi.call(a, r, "down"), t.preventDefault();
                            break;
                        case 9:
                            f.clear(), qi.call(a, !1, r ? "left" : "right"), t.preventDefault();
                            break;
                        case 13:
                            f.clear(), qi.call(a, !1, r ? "up" : "down"), t.preventDefault();
                            break;
                        case 8:
                            tr.call(a, "delete-cell-text"), t.preventDefault()
                    }
                    "Delete" === n ? (tr.call(a, "delete-cell-text"), t.preventDefault()) : e >= 65 && e <= 90 || e >= 48 && e <= 57 || e >= 96 && e <= 105 || "=" === t.key ? (Qi.call(a, t.key, "input"), Gi.call(a)) : 113 === e && Gi.call(a)
                }
            }
        })
    }
    var nr = function() {
        function t(e, n) {
            var i = this;
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var r = n.settings.view;
            this.el = a("div", "".concat(lt, "-sheet")), this.toolbar = new pi(n, r.width, !n.settings.showToolbar), e.children(this.toolbar.el, this.el), this.data = n, this.tableEl = a("canvas", "".concat(lt, "-table")), this.rowResizer = new ct(!1, n.rows.height), this.colResizer = new ct(!0, n.cols.minWidth), this.verticalScrollbar = new ht(!0), this.horizontalScrollbar = new ht(!1), this.editor = new Jt(se, function() {
                return i.getTableOffset()
            }, n.rows.height), this.modalValidation = new Fi, this.contextMenu = new te(function() {
                return i.getTableOffset()
            }), this.selector = new At(n), this.overlayerCEl = a("div", "".concat(lt, "-overlayer-content")).children(this.editor.el, this.selector.el), this.overlayerEl = a("div", "".concat(lt, "-overlayer")).child(this.overlayerCEl), this.el.children(this.tableEl, this.overlayerEl.el, this.rowResizer.el, this.colResizer.el, this.verticalScrollbar.el, this.horizontalScrollbar.el, this.contextMenu.el, this.modalValidation.el), this.table = new Ve(this.tableEl.el, n), er.call(this), Yi.call(this), Vi.call(this, !1, 0, 0)
        }
        var e, n, i;
        return e = t, (n = [{
            key: "loadData",
            value: function(t) {
                return this.data.setData(t), Yi.call(this), this
            }
        }, {
            key: "freeze",
            value: function(t, e) {
                return this.data.setFreeze(t, e), Yi.call(this), this
            }
        }, {
            key: "undo",
            value: function() {
                this.data.undo(), Yi.call(this)
            }
        }, {
            key: "redo",
            value: function() {
                this.data.redo(), Yi.call(this)
            }
        }, {
            key: "reload",
            value: function() {
                return Yi.call(this), this
            }
        }, {
            key: "getRect",
            value: function() {
                var t = this.data;
                return {
                    width: t.viewWidth(),
                    height: t.viewHeight()
                }
            }
        }, {
            key: "getTableOffset",
            value: function() {
                var t = this.data,
                    e = t.rows,
                    n = t.cols,
                    i = this.getRect(),
                    r = i.width,
                    o = i.height;
                return {
                    width: r - n.indexWidth,
                    height: o - e.height,
                    left: n.indexWidth,
                    top: e.height
                }
            }
        }]) && Hi(e.prototype, n), i && Hi(e, i), t
    }();
    n(0);

    function ir(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    n.d(e, "spreadsheet", function() {
        return or
    });
    var rr = function() {
            function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var i = e;
                "string" == typeof e && (i = document.querySelector(e)), this.data = new tt("sheet1", n);
                var r = a("div", "".concat(lt)).on("contextmenu", function(t) {
                    return t.preventDefault()
                });
                i.appendChild(r.el), this.sheet = new nr(r, this.data)
            }
            var e, n, i;
            return e = t, i = [{
                key: "locale",
                value: function(t, e) {
                    N(t, e)
                }
            }], (n = [{
                key: "loadData",
                value: function(t) {
                    return this.sheet.loadData(t), this
                }
            }, {
                key: "getData",
                value: function() {
                    return this.data.getData()
                }
            }, {
                key: "change",
                value: function(t) {
                    return this.data.change = t, this
                }
            }]) && ir(e.prototype, n), i && ir(e, i), t
        }(),
        or = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new rr(t, e)
        };
    window && (window.x = window.x || {}, window.x.spreadsheet = or, window.x.spreadsheet.locale = function(t, e) {
        return N(t, e)
    });
    e.default = rr
}]);
//# sourceMappingURL=xspreadsheet.js.map