const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/Services-z2tPMvMS.js", "assets/door-open-C0Yq8t-L.js", "assets/Contact-BqJWWdag.js", "assets/circle-check-big-BpZIiov-.js", "assets/About-B3Q463sA.js", "assets/PricingCalculator-VMwQoCvT.js", "assets/button-C4xH-yNB.js", "assets/Gallery-CrlJ4t3w.js"]))) => i.map(i => d[i]);
var uC = Object.defineProperty;
var bm = e => {
    throw TypeError(e)
};
var cC = (e, t, n) => t in e ? uC(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var _n = (e, t, n) => cC(e, typeof t != "symbol" ? t + "" : t, n),
    lc = (e, t, n) => t.has(e) || bm("Cannot " + n);
var L = (e, t, n) => (lc(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    ce = (e, t, n) => t.has(e) ? bm("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
    ee = (e, t, n, r) => (lc(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    Ge = (e, t, n) => (lc(e, t, "access private method"), n);
var Ma = (e, t, n, r) => ({
    set _(i) {
        ee(e, t, i, n)
    },
    get _() {
        return L(e, t, r)
    }
});

function dC(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
})();
var Ml = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Pi(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var G0 = {
        exports: {}
    },
    wu = {},
    q0 = {
        exports: {}
    },
    ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pa = Symbol.for("react.element"),
    fC = Symbol.for("react.portal"),
    hC = Symbol.for("react.fragment"),
    pC = Symbol.for("react.strict_mode"),
    mC = Symbol.for("react.profiler"),
    gC = Symbol.for("react.provider"),
    yC = Symbol.for("react.context"),
    vC = Symbol.for("react.forward_ref"),
    xC = Symbol.for("react.suspense"),
    wC = Symbol.for("react.memo"),
    SC = Symbol.for("react.lazy"),
    km = Symbol.iterator;

function bC(e) {
    return e === null || typeof e != "object" ? null : (e = km && e[km] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Q0 = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Y0 = Object.assign,
    X0 = {};

function _o(e, t, n) {
    this.props = e, this.context = t, this.refs = X0, this.updater = n || Q0
}
_o.prototype.isReactComponent = {};
_o.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
_o.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Z0() {}
Z0.prototype = _o.prototype;

function lh(e, t, n) {
    this.props = e, this.context = t, this.refs = X0, this.updater = n || Q0
}
var uh = lh.prototype = new Z0;
uh.constructor = lh;
Y0(uh, _o.prototype);
uh.isPureReactComponent = !0;
var Cm = Array.isArray,
    J0 = Object.prototype.hasOwnProperty,
    ch = {
        current: null
    },
    ex = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function tx(e, t, n) {
    var r, i = {},
        o = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) J0.call(t, r) && !ex.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: pa,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: ch.current
    }
}

function kC(e, t) {
    return {
        $$typeof: pa,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function dh(e) {
    return typeof e == "object" && e !== null && e.$$typeof === pa
}

function CC(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Em = /\/+/g;

function uc(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? CC("" + e.key) : t.toString(36)
}

function al(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case pa:
                case fC:
                    s = !0
            }
    }
    if (s) return s = e, i = i(s), e = r === "" ? "." + uc(s, 0) : r, Cm(i) ? (n = "", e != null && (n = e.replace(Em, "$&/") + "/"), al(i, t, n, "", function(u) {
        return u
    })) : i != null && (dh(i) && (i = kC(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Em, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", Cm(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var l = r + uc(o, a);
            s += al(o, t, n, l, i)
        } else if (l = bC(e), typeof l == "function")
            for (e = l.call(e), a = 0; !(o = e.next()).done;) o = o.value, l = r + uc(o, a++), s += al(o, t, n, l, i);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function Na(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return al(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }), r
}

function EC(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ut = {
        current: null
    },
    ll = {
        transition: null
    },
    TC = {
        ReactCurrentDispatcher: ut,
        ReactCurrentBatchConfig: ll,
        ReactCurrentOwner: ch
    };

function nx() {
    throw Error("act(...) is not supported in production builds of React.")
}
ie.Children = {
    map: Na,
    forEach: function(e, t, n) {
        Na(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Na(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return Na(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!dh(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
ie.Component = _o;
ie.Fragment = hC;
ie.Profiler = mC;
ie.PureComponent = lh;
ie.StrictMode = pC;
ie.Suspense = xC;
ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = TC;
ie.act = nx;
ie.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Y0({}, e.props),
        i = e.key,
        o = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, s = ch.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (l in t) J0.call(t, l) && !ex.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: pa,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
};
ie.createContext = function(e) {
    return e = {
        $$typeof: yC,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: gC,
        _context: e
    }, e.Consumer = e
};
ie.createElement = tx;
ie.createFactory = function(e) {
    var t = tx.bind(null, e);
    return t.type = e, t
};
ie.createRef = function() {
    return {
        current: null
    }
};
ie.forwardRef = function(e) {
    return {
        $$typeof: vC,
        render: e
    }
};
ie.isValidElement = dh;
ie.lazy = function(e) {
    return {
        $$typeof: SC,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: EC
    }
};
ie.memo = function(e, t) {
    return {
        $$typeof: wC,
        type: e,
        compare: t === void 0 ? null : t
    }
};
ie.startTransition = function(e) {
    var t = ll.transition;
    ll.transition = {};
    try {
        e()
    } finally {
        ll.transition = t
    }
};
ie.unstable_act = nx;
ie.useCallback = function(e, t) {
    return ut.current.useCallback(e, t)
};
ie.useContext = function(e) {
    return ut.current.useContext(e)
};
ie.useDebugValue = function() {};
ie.useDeferredValue = function(e) {
    return ut.current.useDeferredValue(e)
};
ie.useEffect = function(e, t) {
    return ut.current.useEffect(e, t)
};
ie.useId = function() {
    return ut.current.useId()
};
ie.useImperativeHandle = function(e, t, n) {
    return ut.current.useImperativeHandle(e, t, n)
};
ie.useInsertionEffect = function(e, t) {
    return ut.current.useInsertionEffect(e, t)
};
ie.useLayoutEffect = function(e, t) {
    return ut.current.useLayoutEffect(e, t)
};
ie.useMemo = function(e, t) {
    return ut.current.useMemo(e, t)
};
ie.useReducer = function(e, t, n) {
    return ut.current.useReducer(e, t, n)
};
ie.useRef = function(e) {
    return ut.current.useRef(e)
};
ie.useState = function(e) {
    return ut.current.useState(e)
};
ie.useSyncExternalStore = function(e, t, n) {
    return ut.current.useSyncExternalStore(e, t, n)
};
ie.useTransition = function() {
    return ut.current.useTransition()
};
ie.version = "18.3.1";
q0.exports = ie;
var w = q0.exports;
const j = Pi(w),
    fh = dC({
        __proto__: null,
        default: j
    }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var PC = w,
    AC = Symbol.for("react.element"),
    RC = Symbol.for("react.fragment"),
    MC = Object.prototype.hasOwnProperty,
    NC = PC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    IC = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function rx(e, t, n) {
    var r, i = {},
        o = null,
        s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) MC.call(t, r) && !IC.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: AC,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: NC.current
    }
}
wu.Fragment = RC;
wu.jsx = rx;
wu.jsxs = rx;
G0.exports = wu;
var S = G0.exports,
    ix = {
        exports: {}
    },
    Lt = {},
    ox = {
        exports: {}
    },
    sx = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(R, O) {
        var b = R.length;
        R.push(O);
        e: for (; 0 < b;) {
            var q = b - 1 >>> 1,
                G = R[q];
            if (0 < i(G, O)) R[q] = O, R[b] = G, b = q;
            else break e
        }
    }

    function n(R) {
        return R.length === 0 ? null : R[0]
    }

    function r(R) {
        if (R.length === 0) return null;
        var O = R[0],
            b = R.pop();
        if (b !== O) {
            R[0] = b;
            e: for (var q = 0, G = R.length, T = G >>> 1; q < T;) {
                var Y = 2 * (q + 1) - 1,
                    pe = R[Y],
                    se = Y + 1,
                    oe = R[se];
                if (0 > i(pe, b)) se < G && 0 > i(oe, pe) ? (R[q] = oe, R[se] = b, q = se) : (R[q] = pe, R[Y] = b, q = Y);
                else if (se < G && 0 > i(oe, b)) R[q] = oe, R[se] = b, q = se;
                else break e
            }
        }
        return O
    }

    function i(R, O) {
        var b = R.sortIndex - O.sortIndex;
        return b !== 0 ? b : R.id - O.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = [],
        u = [],
        c = 1,
        d = null,
        h = 3,
        f = !1,
        g = !1,
        m = !1,
        x = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        y = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function v(R) {
        for (var O = n(u); O !== null;) {
            if (O.callback === null) r(u);
            else if (O.startTime <= R) r(u), O.sortIndex = O.expirationTime, t(l, O);
            else break;
            O = n(u)
        }
    }

    function k(R) {
        if (m = !1, v(R), !g)
            if (n(l) !== null) g = !0, K(E);
            else {
                var O = n(u);
                O !== null && $(k, O.startTime - R)
            }
    }

    function E(R, O) {
        g = !1, m && (m = !1, p(A), A = -1), f = !0;
        var b = h;
        try {
            for (v(O), d = n(l); d !== null && (!(d.expirationTime > O) || R && !_());) {
                var q = d.callback;
                if (typeof q == "function") {
                    d.callback = null, h = d.priorityLevel;
                    var G = q(d.expirationTime <= O);
                    O = e.unstable_now(), typeof G == "function" ? d.callback = G : d === n(l) && r(l), v(O)
                } else r(l);
                d = n(l)
            }
            if (d !== null) var T = !0;
            else {
                var Y = n(u);
                Y !== null && $(k, Y.startTime - O), T = !1
            }
            return T
        } finally {
            d = null, h = b, f = !1
        }
    }
    var C = !1,
        P = null,
        A = -1,
        N = 5,
        D = -1;

    function _() {
        return !(e.unstable_now() - D < N)
    }

    function I() {
        if (P !== null) {
            var R = e.unstable_now();
            D = R;
            var O = !0;
            try {
                O = P(!0, R)
            } finally {
                O ? W() : (C = !1, P = null)
            }
        } else C = !1
    }
    var W;
    if (typeof y == "function") W = function() {
        y(I)
    };
    else if (typeof MessageChannel < "u") {
        var F = new MessageChannel,
            U = F.port2;
        F.port1.onmessage = I, W = function() {
            U.postMessage(null)
        }
    } else W = function() {
        x(I, 0)
    };

    function K(R) {
        P = R, C || (C = !0, W())
    }

    function $(R, O) {
        A = x(function() {
            R(e.unstable_now())
        }, O)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
        R.callback = null
    }, e.unstable_continueExecution = function() {
        g || f || (g = !0, K(E))
    }, e.unstable_forceFrameRate = function(R) {
        0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < R ? Math.floor(1e3 / R) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return h
    }, e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }, e.unstable_next = function(R) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var O = 3;
                break;
            default:
                O = h
        }
        var b = h;
        h = O;
        try {
            return R()
        } finally {
            h = b
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(R, O) {
        switch (R) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                R = 3
        }
        var b = h;
        h = R;
        try {
            return O()
        } finally {
            h = b
        }
    }, e.unstable_scheduleCallback = function(R, O, b) {
        var q = e.unstable_now();
        switch (typeof b == "object" && b !== null ? (b = b.delay, b = typeof b == "number" && 0 < b ? q + b : q) : b = q, R) {
            case 1:
                var G = -1;
                break;
            case 2:
                G = 250;
                break;
            case 5:
                G = 1073741823;
                break;
            case 4:
                G = 1e4;
                break;
            default:
                G = 5e3
        }
        return G = b + G, R = {
            id: c++,
            callback: O,
            priorityLevel: R,
            startTime: b,
            expirationTime: G,
            sortIndex: -1
        }, b > q ? (R.sortIndex = b, t(u, R), n(l) === null && R === n(u) && (m ? (p(A), A = -1) : m = !0, $(k, b - q))) : (R.sortIndex = G, t(l, R), g || f || (g = !0, K(E))), R
    }, e.unstable_shouldYield = _, e.unstable_wrapCallback = function(R) {
        var O = h;
        return function() {
            var b = h;
            h = O;
            try {
                return R.apply(this, arguments)
            } finally {
                h = b
            }
        }
    }
})(sx);
ox.exports = sx;
var OC = ox.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var DC = w,
    Ot = OC;

function z(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ax = new Set,
    js = {};

function Ai(e, t) {
    Eo(e, t), Eo(e + "Capture", t)
}

function Eo(e, t) {
    for (js[e] = t, e = 0; e < t.length; e++) ax.add(t[e])
}
var qn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    wd = Object.prototype.hasOwnProperty,
    LC = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Tm = {},
    Pm = {};

function jC(e) {
    return wd.call(Pm, e) ? !0 : wd.call(Tm, e) ? !1 : LC.test(e) ? Pm[e] = !0 : (Tm[e] = !0, !1)
}

function _C(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function FC(e, t, n, r) {
    if (t === null || typeof t > "u" || _C(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function ct(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s
}
var Ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ke[e] = new ct(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    Ke[t] = new ct(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ke[e] = new ct(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ke[e] = new ct(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ke[e] = new ct(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ke[e] = new ct(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    Ke[e] = new ct(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ke[e] = new ct(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    Ke[e] = new ct(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var hh = /[\-:]([a-z])/g;

function ph(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(hh, ph);
    Ke[t] = new ct(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(hh, ph);
    Ke[t] = new ct(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(hh, ph);
    Ke[t] = new ct(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ke[e] = new ct(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Ke.xlinkHref = new ct("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ke[e] = new ct(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function mh(e, t, n, r) {
    var i = Ke.hasOwnProperty(t) ? Ke[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (FC(t, n, i, r) && (n = null), r || i === null ? jC(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var nr = DC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ia = Symbol.for("react.element"),
    Bi = Symbol.for("react.portal"),
    $i = Symbol.for("react.fragment"),
    gh = Symbol.for("react.strict_mode"),
    Sd = Symbol.for("react.profiler"),
    lx = Symbol.for("react.provider"),
    ux = Symbol.for("react.context"),
    yh = Symbol.for("react.forward_ref"),
    bd = Symbol.for("react.suspense"),
    kd = Symbol.for("react.suspense_list"),
    vh = Symbol.for("react.memo"),
    gr = Symbol.for("react.lazy"),
    cx = Symbol.for("react.offscreen"),
    Am = Symbol.iterator;

function Xo(e) {
    return e === null || typeof e != "object" ? null : (e = Am && e[Am] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Ae = Object.assign,
    cc;

function fs(e) {
    if (cc === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        cc = t && t[1] || ""
    }
    return `
` + cc + e
}
var dc = !1;

function fc(e, t) {
    if (!e || dc) return "";
    dc = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a];) a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--, a--, 0 > a || i[s] !== o[a]) {
                                var l = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                            }
                    while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        dc = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? fs(e) : ""
}

function zC(e) {
    switch (e.tag) {
        case 5:
            return fs(e.type);
        case 16:
            return fs("Lazy");
        case 13:
            return fs("Suspense");
        case 19:
            return fs("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = fc(e.type, !1), e;
        case 11:
            return e = fc(e.type.render, !1), e;
        case 1:
            return e = fc(e.type, !0), e;
        default:
            return ""
    }
}

function Cd(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case $i:
            return "Fragment";
        case Bi:
            return "Portal";
        case Sd:
            return "Profiler";
        case gh:
            return "StrictMode";
        case bd:
            return "Suspense";
        case kd:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case ux:
            return (e.displayName || "Context") + ".Consumer";
        case lx:
            return (e._context.displayName || "Context") + ".Provider";
        case yh:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case vh:
            return t = e.displayName || null, t !== null ? t : Cd(e.type) || "Memo";
        case gr:
            t = e._payload, e = e._init;
            try {
                return Cd(e(t))
            } catch {}
    }
    return null
}

function VC(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Cd(t);
        case 8:
            return t === gh ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Fr(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function dx(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function BC(e) {
    var t = dx(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s, o.call(this, s)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Oa(e) {
    e._valueTracker || (e._valueTracker = BC(e))
}

function fx(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = dx(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Nl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Ed(e, t) {
    var n = t.checked;
    return Ae({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function Rm(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Fr(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function hx(e, t) {
    t = t.checked, t != null && mh(e, "checked", t, !1)
}

function Td(e, t) {
    hx(e, t);
    var n = Fr(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Pd(e, t.type, n) : t.hasOwnProperty("defaultValue") && Pd(e, t.type, Fr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Mm(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Pd(e, t, n) {
    (t !== "number" || Nl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var hs = Array.isArray;

function io(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Fr(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function Ad(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
    return Ae({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Nm(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(z(92));
            if (hs(n)) {
                if (1 < n.length) throw Error(z(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Fr(n)
    }
}

function px(e, t) {
    var n = Fr(t.value),
        r = Fr(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Im(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function mx(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Rd(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? mx(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Da, gx = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Da = Da || document.createElement("div"), Da.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Da.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function _s(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var xs = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    $C = ["Webkit", "ms", "Moz", "O"];
Object.keys(xs).forEach(function(e) {
    $C.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), xs[t] = xs[e]
    })
});

function yx(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || xs.hasOwnProperty(e) && xs[e] ? ("" + t).trim() : t + "px"
}

function vx(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = yx(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var UC = Ae({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Md(e, t) {
    if (t) {
        if (UC[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(z(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(z(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(z(62))
    }
}

function Nd(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Id = null;

function xh(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Od = null,
    oo = null,
    so = null;

function Om(e) {
    if (e = ya(e)) {
        if (typeof Od != "function") throw Error(z(280));
        var t = e.stateNode;
        t && (t = Eu(t), Od(e.stateNode, e.type, t))
    }
}

function xx(e) {
    oo ? so ? so.push(e) : so = [e] : oo = e
}

function wx() {
    if (oo) {
        var e = oo,
            t = so;
        if (so = oo = null, Om(e), t)
            for (e = 0; e < t.length; e++) Om(t[e])
    }
}

function Sx(e, t) {
    return e(t)
}

function bx() {}
var hc = !1;

function kx(e, t, n) {
    if (hc) return e(t, n);
    hc = !0;
    try {
        return Sx(e, t, n)
    } finally {
        hc = !1, (oo !== null || so !== null) && (bx(), wx())
    }
}

function Fs(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Eu(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(z(231, t, typeof n));
    return n
}
var Dd = !1;
if (qn) try {
    var Zo = {};
    Object.defineProperty(Zo, "passive", {
        get: function() {
            Dd = !0
        }
    }), window.addEventListener("test", Zo, Zo), window.removeEventListener("test", Zo, Zo)
} catch {
    Dd = !1
}

function HC(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var ws = !1,
    Il = null,
    Ol = !1,
    Ld = null,
    WC = {
        onError: function(e) {
            ws = !0, Il = e
        }
    };

function KC(e, t, n, r, i, o, s, a, l) {
    ws = !1, Il = null, HC.apply(WC, arguments)
}

function GC(e, t, n, r, i, o, s, a, l) {
    if (KC.apply(this, arguments), ws) {
        if (ws) {
            var u = Il;
            ws = !1, Il = null
        } else throw Error(z(198));
        Ol || (Ol = !0, Ld = u)
    }
}

function Ri(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Cx(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Dm(e) {
    if (Ri(e) !== e) throw Error(z(188))
}

function qC(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Ri(e), t === null) throw Error(z(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n) return Dm(i), e;
                if (o === r) return Dm(i), t;
                o = o.sibling
            }
            throw Error(z(188))
        }
        if (n.return !== r.return) n = i, r = o;
        else {
            for (var s = !1, a = i.child; a;) {
                if (a === n) {
                    s = !0, n = i, r = o;
                    break
                }
                if (a === r) {
                    s = !0, r = i, n = o;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a;) {
                    if (a === n) {
                        s = !0, n = o, r = i;
                        break
                    }
                    if (a === r) {
                        s = !0, r = o, n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s) throw Error(z(189))
            }
        }
        if (n.alternate !== r) throw Error(z(190))
    }
    if (n.tag !== 3) throw Error(z(188));
    return n.stateNode.current === n ? e : t
}

function Ex(e) {
    return e = qC(e), e !== null ? Tx(e) : null
}

function Tx(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Tx(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Px = Ot.unstable_scheduleCallback,
    Lm = Ot.unstable_cancelCallback,
    QC = Ot.unstable_shouldYield,
    YC = Ot.unstable_requestPaint,
    Oe = Ot.unstable_now,
    XC = Ot.unstable_getCurrentPriorityLevel,
    wh = Ot.unstable_ImmediatePriority,
    Ax = Ot.unstable_UserBlockingPriority,
    Dl = Ot.unstable_NormalPriority,
    ZC = Ot.unstable_LowPriority,
    Rx = Ot.unstable_IdlePriority,
    Su = null,
    Pn = null;

function JC(e) {
    if (Pn && typeof Pn.onCommitFiberRoot == "function") try {
        Pn.onCommitFiberRoot(Su, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var cn = Math.clz32 ? Math.clz32 : nE,
    eE = Math.log,
    tE = Math.LN2;

function nE(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (eE(e) / tE | 0) | 0
}
var La = 64,
    ja = 4194304;

function ps(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Ll(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = ps(a) : (o &= s, o !== 0 && (r = ps(o)))
    } else s = n & ~i, s !== 0 ? r = ps(s) : o !== 0 && (r = ps(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - cn(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function rE(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function iE(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var s = 31 - cn(o),
            a = 1 << s,
            l = i[s];
        l === -1 ? (!(a & n) || a & r) && (i[s] = rE(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a
    }
}

function jd(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Mx() {
    var e = La;
    return La <<= 1, !(La & 4194240) && (La = 64), e
}

function pc(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function ma(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - cn(t), e[t] = n
}

function oE(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - cn(n),
            o = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
    }
}

function Sh(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - cn(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var he = 0;

function Nx(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ix, bh, Ox, Dx, Lx, _d = !1,
    _a = [],
    Rr = null,
    Mr = null,
    Nr = null,
    zs = new Map,
    Vs = new Map,
    vr = [],
    sE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function jm(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Rr = null;
            break;
        case "dragenter":
        case "dragleave":
            Mr = null;
            break;
        case "mouseover":
        case "mouseout":
            Nr = null;
            break;
        case "pointerover":
        case "pointerout":
            zs.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Vs.delete(t.pointerId)
    }
}

function Jo(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    }, t !== null && (t = ya(t), t !== null && bh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function aE(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return Rr = Jo(Rr, e, t, n, r, i), !0;
        case "dragenter":
            return Mr = Jo(Mr, e, t, n, r, i), !0;
        case "mouseover":
            return Nr = Jo(Nr, e, t, n, r, i), !0;
        case "pointerover":
            var o = i.pointerId;
            return zs.set(o, Jo(zs.get(o) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return o = i.pointerId, Vs.set(o, Jo(Vs.get(o) || null, e, t, n, r, i)), !0
    }
    return !1
}

function jx(e) {
    var t = ai(e.target);
    if (t !== null) {
        var n = Ri(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Cx(n), t !== null) {
                    e.blockedOn = t, Lx(e.priority, function() {
                        Ox(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function ul(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Fd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Id = r, n.target.dispatchEvent(r), Id = null
        } else return t = ya(n), t !== null && bh(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function _m(e, t, n) {
    ul(e) && n.delete(t)
}

function lE() {
    _d = !1, Rr !== null && ul(Rr) && (Rr = null), Mr !== null && ul(Mr) && (Mr = null), Nr !== null && ul(Nr) && (Nr = null), zs.forEach(_m), Vs.forEach(_m)
}

function es(e, t) {
    e.blockedOn === t && (e.blockedOn = null, _d || (_d = !0, Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority, lE)))
}

function Bs(e) {
    function t(i) {
        return es(i, e)
    }
    if (0 < _a.length) {
        es(_a[0], e);
        for (var n = 1; n < _a.length; n++) {
            var r = _a[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Rr !== null && es(Rr, e), Mr !== null && es(Mr, e), Nr !== null && es(Nr, e), zs.forEach(t), Vs.forEach(t), n = 0; n < vr.length; n++) r = vr[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < vr.length && (n = vr[0], n.blockedOn === null);) jx(n), n.blockedOn === null && vr.shift()
}
var ao = nr.ReactCurrentBatchConfig,
    jl = !0;

function uE(e, t, n, r) {
    var i = he,
        o = ao.transition;
    ao.transition = null;
    try {
        he = 1, kh(e, t, n, r)
    } finally {
        he = i, ao.transition = o
    }
}

function cE(e, t, n, r) {
    var i = he,
        o = ao.transition;
    ao.transition = null;
    try {
        he = 4, kh(e, t, n, r)
    } finally {
        he = i, ao.transition = o
    }
}

function kh(e, t, n, r) {
    if (jl) {
        var i = Fd(e, t, n, r);
        if (i === null) Cc(e, t, r, _l, n), jm(e, r);
        else if (aE(i, e, t, n, r)) r.stopPropagation();
        else if (jm(e, r), t & 4 && -1 < sE.indexOf(e)) {
            for (; i !== null;) {
                var o = ya(i);
                if (o !== null && Ix(o), o = Fd(e, t, n, r), o === null && Cc(e, t, r, _l, n), o === i) break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else Cc(e, t, r, null, n)
    }
}
var _l = null;

function Fd(e, t, n, r) {
    if (_l = null, e = xh(r), e = ai(e), e !== null)
        if (t = Ri(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Cx(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return _l = e, null
}

function _x(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (XC()) {
                case wh:
                    return 1;
                case Ax:
                    return 4;
                case Dl:
                case ZC:
                    return 16;
                case Rx:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Er = null,
    Ch = null,
    cl = null;

function Fx() {
    if (cl) return cl;
    var e, t = Ch,
        n = t.length,
        r, i = "value" in Er ? Er.value : Er.textContent,
        o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
    return cl = i.slice(e, 1 < r ? 1 - r : void 0)
}

function dl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Fa() {
    return !0
}

function Fm() {
    return !1
}

function jt(e) {
    function t(n, r, i, o, s) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Fa : Fm, this.isPropagationStopped = Fm, this
    }
    return Ae(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Fa)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Fa)
        },
        persist: function() {},
        isPersistent: Fa
    }), t
}
var Fo = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Eh = jt(Fo),
    ga = Ae({}, Fo, {
        view: 0,
        detail: 0
    }),
    dE = jt(ga),
    mc, gc, ts, bu = Ae({}, ga, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Th,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== ts && (ts && e.type === "mousemove" ? (mc = e.screenX - ts.screenX, gc = e.screenY - ts.screenY) : gc = mc = 0, ts = e), mc)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : gc
        }
    }),
    zm = jt(bu),
    fE = Ae({}, bu, {
        dataTransfer: 0
    }),
    hE = jt(fE),
    pE = Ae({}, ga, {
        relatedTarget: 0
    }),
    yc = jt(pE),
    mE = Ae({}, Fo, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    gE = jt(mE),
    yE = Ae({}, Fo, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    vE = jt(yE),
    xE = Ae({}, Fo, {
        data: 0
    }),
    Vm = jt(xE),
    wE = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    SE = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    bE = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function kE(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = bE[e]) ? !!t[e] : !1
}

function Th() {
    return kE
}
var CE = Ae({}, ga, {
        key: function(e) {
            if (e.key) {
                var t = wE[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = dl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? SE[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Th,
        charCode: function(e) {
            return e.type === "keypress" ? dl(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? dl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    EE = jt(CE),
    TE = Ae({}, bu, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Bm = jt(TE),
    PE = Ae({}, ga, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Th
    }),
    AE = jt(PE),
    RE = Ae({}, Fo, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    ME = jt(RE),
    NE = Ae({}, bu, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    IE = jt(NE),
    OE = [9, 13, 27, 32],
    Ph = qn && "CompositionEvent" in window,
    Ss = null;
qn && "documentMode" in document && (Ss = document.documentMode);
var DE = qn && "TextEvent" in window && !Ss,
    zx = qn && (!Ph || Ss && 8 < Ss && 11 >= Ss),
    $m = " ",
    Um = !1;

function Vx(e, t) {
    switch (e) {
        case "keyup":
            return OE.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Bx(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Ui = !1;

function LE(e, t) {
    switch (e) {
        case "compositionend":
            return Bx(t);
        case "keypress":
            return t.which !== 32 ? null : (Um = !0, $m);
        case "textInput":
            return e = t.data, e === $m && Um ? null : e;
        default:
            return null
    }
}

function jE(e, t) {
    if (Ui) return e === "compositionend" || !Ph && Vx(e, t) ? (e = Fx(), cl = Ch = Er = null, Ui = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return zx && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var _E = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Hm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!_E[e.type] : t === "textarea"
}

function $x(e, t, n, r) {
    xx(r), t = Fl(t, "onChange"), 0 < t.length && (n = new Eh("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var bs = null,
    $s = null;

function FE(e) {
    Jx(e, 0)
}

function ku(e) {
    var t = Ki(e);
    if (fx(t)) return e
}

function zE(e, t) {
    if (e === "change") return t
}
var Ux = !1;
if (qn) {
    var vc;
    if (qn) {
        var xc = "oninput" in document;
        if (!xc) {
            var Wm = document.createElement("div");
            Wm.setAttribute("oninput", "return;"), xc = typeof Wm.oninput == "function"
        }
        vc = xc
    } else vc = !1;
    Ux = vc && (!document.documentMode || 9 < document.documentMode)
}

function Km() {
    bs && (bs.detachEvent("onpropertychange", Hx), $s = bs = null)
}

function Hx(e) {
    if (e.propertyName === "value" && ku($s)) {
        var t = [];
        $x(t, $s, e, xh(e)), kx(FE, t)
    }
}

function VE(e, t, n) {
    e === "focusin" ? (Km(), bs = t, $s = n, bs.attachEvent("onpropertychange", Hx)) : e === "focusout" && Km()
}

function BE(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ku($s)
}

function $E(e, t) {
    if (e === "click") return ku(t)
}

function UE(e, t) {
    if (e === "input" || e === "change") return ku(t)
}

function HE(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var fn = typeof Object.is == "function" ? Object.is : HE;

function Us(e, t) {
    if (fn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!wd.call(t, i) || !fn(e[i], t[i])) return !1
    }
    return !0
}

function Gm(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function qm(e, t) {
    var n = Gm(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Gm(n)
    }
}

function Wx(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Wx(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Kx() {
    for (var e = window, t = Nl(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Nl(e.document)
    }
    return t
}

function Ah(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function WE(e) {
    var t = Kx(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Wx(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ah(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = qm(n, o);
                var s = qm(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var KE = qn && "documentMode" in document && 11 >= document.documentMode,
    Hi = null,
    zd = null,
    ks = null,
    Vd = !1;

function Qm(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Vd || Hi == null || Hi !== Nl(r) || (r = Hi, "selectionStart" in r && Ah(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), ks && Us(ks, r) || (ks = r, r = Fl(zd, "onSelect"), 0 < r.length && (t = new Eh("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Hi)))
}

function za(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Wi = {
        animationend: za("Animation", "AnimationEnd"),
        animationiteration: za("Animation", "AnimationIteration"),
        animationstart: za("Animation", "AnimationStart"),
        transitionend: za("Transition", "TransitionEnd")
    },
    wc = {},
    Gx = {};
qn && (Gx = document.createElement("div").style, "AnimationEvent" in window || (delete Wi.animationend.animation, delete Wi.animationiteration.animation, delete Wi.animationstart.animation), "TransitionEvent" in window || delete Wi.transitionend.transition);

function Cu(e) {
    if (wc[e]) return wc[e];
    if (!Wi[e]) return e;
    var t = Wi[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Gx) return wc[e] = t[n];
    return e
}
var qx = Cu("animationend"),
    Qx = Cu("animationiteration"),
    Yx = Cu("animationstart"),
    Xx = Cu("transitionend"),
    Zx = new Map,
    Ym = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Wr(e, t) {
    Zx.set(e, t), Ai(t, [e])
}
for (var Sc = 0; Sc < Ym.length; Sc++) {
    var bc = Ym[Sc],
        GE = bc.toLowerCase(),
        qE = bc[0].toUpperCase() + bc.slice(1);
    Wr(GE, "on" + qE)
}
Wr(qx, "onAnimationEnd");
Wr(Qx, "onAnimationIteration");
Wr(Yx, "onAnimationStart");
Wr("dblclick", "onDoubleClick");
Wr("focusin", "onFocus");
Wr("focusout", "onBlur");
Wr(Xx, "onTransitionEnd");
Eo("onMouseEnter", ["mouseout", "mouseover"]);
Eo("onMouseLeave", ["mouseout", "mouseover"]);
Eo("onPointerEnter", ["pointerout", "pointerover"]);
Eo("onPointerLeave", ["pointerout", "pointerover"]);
Ai("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ai("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ai("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ai("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ai("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ai("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ms = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    QE = new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));

function Xm(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, GC(r, t, void 0, e), e.currentTarget = null
}

function Jx(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        l = a.instance,
                        u = a.currentTarget;
                    if (a = a.listener, l !== o && i.isPropagationStopped()) break e;
                    Xm(i, a, u), o = l
                } else
                    for (s = 0; s < r.length; s++) {
                        if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped()) break e;
                        Xm(i, a, u), o = l
                    }
        }
    }
    if (Ol) throw e = Ld, Ol = !1, Ld = null, e
}

function we(e, t) {
    var n = t[Wd];
    n === void 0 && (n = t[Wd] = new Set);
    var r = e + "__bubble";
    n.has(r) || (e1(t, e, 2, !1), n.add(r))
}

function kc(e, t, n) {
    var r = 0;
    t && (r |= 4), e1(n, e, r, t)
}
var Va = "_reactListening" + Math.random().toString(36).slice(2);

function Hs(e) {
    if (!e[Va]) {
        e[Va] = !0, ax.forEach(function(n) {
            n !== "selectionchange" && (QE.has(n) || kc(n, !1, e), kc(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Va] || (t[Va] = !0, kc("selectionchange", !1, t))
    }
}

function e1(e, t, n, r) {
    switch (_x(t)) {
        case 1:
            var i = uE;
            break;
        case 4:
            i = cE;
            break;
        default:
            i = kh
    }
    n = i.bind(null, t, n, e), i = void 0, !Dd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function Cc(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var l = s.tag;
                    if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
                    s = s.return
                }
            for (; a !== null;) {
                if (s = ai(a), s === null) return;
                if (l = s.tag, l === 5 || l === 6) {
                    r = o = s;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    kx(function() {
        var u = o,
            c = xh(n),
            d = [];
        e: {
            var h = Zx.get(e);
            if (h !== void 0) {
                var f = Eh,
                    g = e;
                switch (e) {
                    case "keypress":
                        if (dl(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        f = EE;
                        break;
                    case "focusin":
                        g = "focus", f = yc;
                        break;
                    case "focusout":
                        g = "blur", f = yc;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        f = yc;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        f = zm;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        f = hE;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        f = AE;
                        break;
                    case qx:
                    case Qx:
                    case Yx:
                        f = gE;
                        break;
                    case Xx:
                        f = ME;
                        break;
                    case "scroll":
                        f = dE;
                        break;
                    case "wheel":
                        f = IE;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        f = vE;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        f = Bm
                }
                var m = (t & 4) !== 0,
                    x = !m && e === "scroll",
                    p = m ? h !== null ? h + "Capture" : null : h;
                m = [];
                for (var y = u, v; y !== null;) {
                    v = y;
                    var k = v.stateNode;
                    if (v.tag === 5 && k !== null && (v = k, p !== null && (k = Fs(y, p), k != null && m.push(Ws(y, k, v)))), x) break;
                    y = y.return
                }
                0 < m.length && (h = new f(h, g, null, n, c), d.push({
                    event: h,
                    listeners: m
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover", f = e === "mouseout" || e === "pointerout", h && n !== Id && (g = n.relatedTarget || n.fromElement) && (ai(g) || g[Qn])) break e;
                if ((f || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, f ? (g = n.relatedTarget || n.toElement, f = u, g = g ? ai(g) : null, g !== null && (x = Ri(g), g !== x || g.tag !== 5 && g.tag !== 6) && (g = null)) : (f = null, g = u), f !== g)) {
                    if (m = zm, k = "onMouseLeave", p = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (m = Bm, k = "onPointerLeave", p = "onPointerEnter", y = "pointer"), x = f == null ? h : Ki(f), v = g == null ? h : Ki(g), h = new m(k, y + "leave", f, n, c), h.target = x, h.relatedTarget = v, k = null, ai(c) === u && (m = new m(p, y + "enter", g, n, c), m.target = v, m.relatedTarget = x, k = m), x = k, f && g) t: {
                        for (m = f, p = g, y = 0, v = m; v; v = Fi(v)) y++;
                        for (v = 0, k = p; k; k = Fi(k)) v++;
                        for (; 0 < y - v;) m = Fi(m),
                        y--;
                        for (; 0 < v - y;) p = Fi(p),
                        v--;
                        for (; y--;) {
                            if (m === p || p !== null && m === p.alternate) break t;
                            m = Fi(m), p = Fi(p)
                        }
                        m = null
                    }
                    else m = null;
                    f !== null && Zm(d, h, f, m, !1), g !== null && x !== null && Zm(d, x, g, m, !0)
                }
            }
            e: {
                if (h = u ? Ki(u) : window, f = h.nodeName && h.nodeName.toLowerCase(), f === "select" || f === "input" && h.type === "file") var E = zE;
                else if (Hm(h))
                    if (Ux) E = UE;
                    else {
                        E = BE;
                        var C = VE
                    }
                else(f = h.nodeName) && f.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (E = $E);
                if (E && (E = E(e, u))) {
                    $x(d, E, n, c);
                    break e
                }
                C && C(e, h, u),
                e === "focusout" && (C = h._wrapperState) && C.controlled && h.type === "number" && Pd(h, "number", h.value)
            }
            switch (C = u ? Ki(u) : window, e) {
                case "focusin":
                    (Hm(C) || C.contentEditable === "true") && (Hi = C, zd = u, ks = null);
                    break;
                case "focusout":
                    ks = zd = Hi = null;
                    break;
                case "mousedown":
                    Vd = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Vd = !1, Qm(d, n, c);
                    break;
                case "selectionchange":
                    if (KE) break;
                case "keydown":
                case "keyup":
                    Qm(d, n, c)
            }
            var P;
            if (Ph) e: {
                switch (e) {
                    case "compositionstart":
                        var A = "onCompositionStart";
                        break e;
                    case "compositionend":
                        A = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        A = "onCompositionUpdate";
                        break e
                }
                A = void 0
            }
            else Ui ? Vx(e, n) && (A = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");A && (zx && n.locale !== "ko" && (Ui || A !== "onCompositionStart" ? A === "onCompositionEnd" && Ui && (P = Fx()) : (Er = c, Ch = "value" in Er ? Er.value : Er.textContent, Ui = !0)), C = Fl(u, A), 0 < C.length && (A = new Vm(A, e, null, n, c), d.push({
                event: A,
                listeners: C
            }), P ? A.data = P : (P = Bx(n), P !== null && (A.data = P)))),
            (P = DE ? LE(e, n) : jE(e, n)) && (u = Fl(u, "onBeforeInput"), 0 < u.length && (c = new Vm("onBeforeInput", "beforeinput", null, n, c), d.push({
                event: c,
                listeners: u
            }), c.data = P))
        }
        Jx(d, t)
    })
}

function Ws(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Fl(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            o = i.stateNode;
        i.tag === 5 && o !== null && (i = o, o = Fs(e, n), o != null && r.unshift(Ws(e, o, i)), o = Fs(e, t), o != null && r.push(Ws(e, o, i))), e = e.return
    }
    return r
}

function Fi(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Zm(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r;) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && u !== null && (a = u, i ? (l = Fs(n, o), l != null && s.unshift(Ws(n, l, a))) : i || (l = Fs(n, o), l != null && s.push(Ws(n, l, a)))), n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var YE = /\r\n?/g,
    XE = /\u0000|\uFFFD/g;

function Jm(e) {
    return (typeof e == "string" ? e : "" + e).replace(YE, `
`).replace(XE, "")
}

function Ba(e, t, n) {
    if (t = Jm(t), Jm(e) !== t && n) throw Error(z(425))
}

function zl() {}
var Bd = null,
    $d = null;

function Ud(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Hd = typeof setTimeout == "function" ? setTimeout : void 0,
    ZE = typeof clearTimeout == "function" ? clearTimeout : void 0,
    eg = typeof Promise == "function" ? Promise : void 0,
    JE = typeof queueMicrotask == "function" ? queueMicrotask : typeof eg < "u" ? function(e) {
        return eg.resolve(null).then(e).catch(eT)
    } : Hd;

function eT(e) {
    setTimeout(function() {
        throw e
    })
}

function Ec(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), Bs(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Bs(t)
}

function Ir(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function tg(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var zo = Math.random().toString(36).slice(2),
    Cn = "__reactFiber$" + zo,
    Ks = "__reactProps$" + zo,
    Qn = "__reactContainer$" + zo,
    Wd = "__reactEvents$" + zo,
    tT = "__reactListeners$" + zo,
    nT = "__reactHandles$" + zo;

function ai(e) {
    var t = e[Cn];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Qn] || n[Cn]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = tg(e); e !== null;) {
                    if (n = e[Cn]) return n;
                    e = tg(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function ya(e) {
    return e = e[Cn] || e[Qn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Ki(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(z(33))
}

function Eu(e) {
    return e[Ks] || null
}
var Kd = [],
    Gi = -1;

function Kr(e) {
    return {
        current: e
    }
}

function Se(e) {
    0 > Gi || (e.current = Kd[Gi], Kd[Gi] = null, Gi--)
}

function ye(e, t) {
    Gi++, Kd[Gi] = e.current, e.current = t
}
var zr = {},
    et = Kr(zr),
    gt = Kr(!1),
    Si = zr;

function To(e, t) {
    var n = e.type.contextTypes;
    if (!n) return zr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        o;
    for (o in n) i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function yt(e) {
    return e = e.childContextTypes, e != null
}

function Vl() {
    Se(gt), Se(et)
}

function ng(e, t, n) {
    if (et.current !== zr) throw Error(z(168));
    ye(et, t), ye(gt, n)
}

function t1(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(z(108, VC(e) || "Unknown", i));
    return Ae({}, n, r)
}

function Bl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || zr, Si = et.current, ye(et, e), ye(gt, gt.current), !0
}

function rg(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(z(169));
    n ? (e = t1(e, t, Si), r.__reactInternalMemoizedMergedChildContext = e, Se(gt), Se(et), ye(et, e)) : Se(gt), ye(gt, n)
}
var Bn = null,
    Tu = !1,
    Tc = !1;

function n1(e) {
    Bn === null ? Bn = [e] : Bn.push(e)
}

function rT(e) {
    Tu = !0, n1(e)
}

function Gr() {
    if (!Tc && Bn !== null) {
        Tc = !0;
        var e = 0,
            t = he;
        try {
            var n = Bn;
            for (he = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Bn = null, Tu = !1
        } catch (i) {
            throw Bn !== null && (Bn = Bn.slice(e + 1)), Px(wh, Gr), i
        } finally {
            he = t, Tc = !1
        }
    }
    return null
}
var qi = [],
    Qi = 0,
    $l = null,
    Ul = 0,
    $t = [],
    Ut = 0,
    bi = null,
    Un = 1,
    Hn = "";

function ni(e, t) {
    qi[Qi++] = Ul, qi[Qi++] = $l, $l = e, Ul = t
}

function r1(e, t, n) {
    $t[Ut++] = Un, $t[Ut++] = Hn, $t[Ut++] = bi, bi = e;
    var r = Un;
    e = Hn;
    var i = 32 - cn(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - cn(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, Un = 1 << 32 - cn(t) + i | n << i | r, Hn = o + e
    } else Un = 1 << o | n << i | r, Hn = e
}

function Rh(e) {
    e.return !== null && (ni(e, 1), r1(e, 1, 0))
}

function Mh(e) {
    for (; e === $l;) $l = qi[--Qi], qi[Qi] = null, Ul = qi[--Qi], qi[Qi] = null;
    for (; e === bi;) bi = $t[--Ut], $t[Ut] = null, Hn = $t[--Ut], $t[Ut] = null, Un = $t[--Ut], $t[Ut] = null
}
var Mt = null,
    At = null,
    Ce = !1,
    ln = null;

function i1(e, t) {
    var n = Wt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function ig(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Mt = e, At = Ir(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Mt = e, At = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = bi !== null ? {
                id: Un,
                overflow: Hn
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Wt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Mt = e, At = null, !0) : !1;
        default:
            return !1
    }
}

function Gd(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function qd(e) {
    if (Ce) {
        var t = At;
        if (t) {
            var n = t;
            if (!ig(e, t)) {
                if (Gd(e)) throw Error(z(418));
                t = Ir(n.nextSibling);
                var r = Mt;
                t && ig(e, t) ? i1(r, n) : (e.flags = e.flags & -4097 | 2, Ce = !1, Mt = e)
            }
        } else {
            if (Gd(e)) throw Error(z(418));
            e.flags = e.flags & -4097 | 2, Ce = !1, Mt = e
        }
    }
}

function og(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Mt = e
}

function $a(e) {
    if (e !== Mt) return !1;
    if (!Ce) return og(e), Ce = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ud(e.type, e.memoizedProps)), t && (t = At)) {
        if (Gd(e)) throw o1(), Error(z(418));
        for (; t;) i1(e, t), t = Ir(t.nextSibling)
    }
    if (og(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(z(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            At = Ir(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            At = null
        }
    } else At = Mt ? Ir(e.stateNode.nextSibling) : null;
    return !0
}

function o1() {
    for (var e = At; e;) e = Ir(e.nextSibling)
}

function Po() {
    At = Mt = null, Ce = !1
}

function Nh(e) {
    ln === null ? ln = [e] : ln.push(e)
}
var iT = nr.ReactCurrentBatchConfig;

function ns(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(z(309));
                var r = n.stateNode
            }
            if (!r) throw Error(z(147, e));
            var i = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var a = i.refs;
                s === null ? delete a[o] : a[o] = s
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(z(284));
        if (!n._owner) throw Error(z(290, e))
    }
    return e
}

function Ua(e, t) {
    throw e = Object.prototype.toString.call(t), Error(z(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function sg(e) {
    var t = e._init;
    return t(e._payload)
}

function s1(e) {
    function t(p, y) {
        if (e) {
            var v = p.deletions;
            v === null ? (p.deletions = [y], p.flags |= 16) : v.push(y)
        }
    }

    function n(p, y) {
        if (!e) return null;
        for (; y !== null;) t(p, y), y = y.sibling;
        return null
    }

    function r(p, y) {
        for (p = new Map; y !== null;) y.key !== null ? p.set(y.key, y) : p.set(y.index, y), y = y.sibling;
        return p
    }

    function i(p, y) {
        return p = jr(p, y), p.index = 0, p.sibling = null, p
    }

    function o(p, y, v) {
        return p.index = v, e ? (v = p.alternate, v !== null ? (v = v.index, v < y ? (p.flags |= 2, y) : v) : (p.flags |= 2, y)) : (p.flags |= 1048576, y)
    }

    function s(p) {
        return e && p.alternate === null && (p.flags |= 2), p
    }

    function a(p, y, v, k) {
        return y === null || y.tag !== 6 ? (y = Oc(v, p.mode, k), y.return = p, y) : (y = i(y, v), y.return = p, y)
    }

    function l(p, y, v, k) {
        var E = v.type;
        return E === $i ? c(p, y, v.props.children, k, v.key) : y !== null && (y.elementType === E || typeof E == "object" && E !== null && E.$$typeof === gr && sg(E) === y.type) ? (k = i(y, v.props), k.ref = ns(p, y, v), k.return = p, k) : (k = vl(v.type, v.key, v.props, null, p.mode, k), k.ref = ns(p, y, v), k.return = p, k)
    }

    function u(p, y, v, k) {
        return y === null || y.tag !== 4 || y.stateNode.containerInfo !== v.containerInfo || y.stateNode.implementation !== v.implementation ? (y = Dc(v, p.mode, k), y.return = p, y) : (y = i(y, v.children || []), y.return = p, y)
    }

    function c(p, y, v, k, E) {
        return y === null || y.tag !== 7 ? (y = xi(v, p.mode, k, E), y.return = p, y) : (y = i(y, v), y.return = p, y)
    }

    function d(p, y, v) {
        if (typeof y == "string" && y !== "" || typeof y == "number") return y = Oc("" + y, p.mode, v), y.return = p, y;
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Ia:
                    return v = vl(y.type, y.key, y.props, null, p.mode, v), v.ref = ns(p, null, y), v.return = p, v;
                case Bi:
                    return y = Dc(y, p.mode, v), y.return = p, y;
                case gr:
                    var k = y._init;
                    return d(p, k(y._payload), v)
            }
            if (hs(y) || Xo(y)) return y = xi(y, p.mode, v, null), y.return = p, y;
            Ua(p, y)
        }
        return null
    }

    function h(p, y, v, k) {
        var E = y !== null ? y.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number") return E !== null ? null : a(p, y, "" + v, k);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case Ia:
                    return v.key === E ? l(p, y, v, k) : null;
                case Bi:
                    return v.key === E ? u(p, y, v, k) : null;
                case gr:
                    return E = v._init, h(p, y, E(v._payload), k)
            }
            if (hs(v) || Xo(v)) return E !== null ? null : c(p, y, v, k, null);
            Ua(p, v)
        }
        return null
    }

    function f(p, y, v, k, E) {
        if (typeof k == "string" && k !== "" || typeof k == "number") return p = p.get(v) || null, a(y, p, "" + k, E);
        if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
                case Ia:
                    return p = p.get(k.key === null ? v : k.key) || null, l(y, p, k, E);
                case Bi:
                    return p = p.get(k.key === null ? v : k.key) || null, u(y, p, k, E);
                case gr:
                    var C = k._init;
                    return f(p, y, v, C(k._payload), E)
            }
            if (hs(k) || Xo(k)) return p = p.get(v) || null, c(y, p, k, E, null);
            Ua(y, k)
        }
        return null
    }

    function g(p, y, v, k) {
        for (var E = null, C = null, P = y, A = y = 0, N = null; P !== null && A < v.length; A++) {
            P.index > A ? (N = P, P = null) : N = P.sibling;
            var D = h(p, P, v[A], k);
            if (D === null) {
                P === null && (P = N);
                break
            }
            e && P && D.alternate === null && t(p, P), y = o(D, y, A), C === null ? E = D : C.sibling = D, C = D, P = N
        }
        if (A === v.length) return n(p, P), Ce && ni(p, A), E;
        if (P === null) {
            for (; A < v.length; A++) P = d(p, v[A], k), P !== null && (y = o(P, y, A), C === null ? E = P : C.sibling = P, C = P);
            return Ce && ni(p, A), E
        }
        for (P = r(p, P); A < v.length; A++) N = f(P, p, A, v[A], k), N !== null && (e && N.alternate !== null && P.delete(N.key === null ? A : N.key), y = o(N, y, A), C === null ? E = N : C.sibling = N, C = N);
        return e && P.forEach(function(_) {
            return t(p, _)
        }), Ce && ni(p, A), E
    }

    function m(p, y, v, k) {
        var E = Xo(v);
        if (typeof E != "function") throw Error(z(150));
        if (v = E.call(v), v == null) throw Error(z(151));
        for (var C = E = null, P = y, A = y = 0, N = null, D = v.next(); P !== null && !D.done; A++, D = v.next()) {
            P.index > A ? (N = P, P = null) : N = P.sibling;
            var _ = h(p, P, D.value, k);
            if (_ === null) {
                P === null && (P = N);
                break
            }
            e && P && _.alternate === null && t(p, P), y = o(_, y, A), C === null ? E = _ : C.sibling = _, C = _, P = N
        }
        if (D.done) return n(p, P), Ce && ni(p, A), E;
        if (P === null) {
            for (; !D.done; A++, D = v.next()) D = d(p, D.value, k), D !== null && (y = o(D, y, A), C === null ? E = D : C.sibling = D, C = D);
            return Ce && ni(p, A), E
        }
        for (P = r(p, P); !D.done; A++, D = v.next()) D = f(P, p, A, D.value, k), D !== null && (e && D.alternate !== null && P.delete(D.key === null ? A : D.key), y = o(D, y, A), C === null ? E = D : C.sibling = D, C = D);
        return e && P.forEach(function(I) {
            return t(p, I)
        }), Ce && ni(p, A), E
    }

    function x(p, y, v, k) {
        if (typeof v == "object" && v !== null && v.type === $i && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case Ia:
                    e: {
                        for (var E = v.key, C = y; C !== null;) {
                            if (C.key === E) {
                                if (E = v.type, E === $i) {
                                    if (C.tag === 7) {
                                        n(p, C.sibling), y = i(C, v.props.children), y.return = p, p = y;
                                        break e
                                    }
                                } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === gr && sg(E) === C.type) {
                                    n(p, C.sibling), y = i(C, v.props), y.ref = ns(p, C, v), y.return = p, p = y;
                                    break e
                                }
                                n(p, C);
                                break
                            } else t(p, C);
                            C = C.sibling
                        }
                        v.type === $i ? (y = xi(v.props.children, p.mode, k, v.key), y.return = p, p = y) : (k = vl(v.type, v.key, v.props, null, p.mode, k), k.ref = ns(p, y, v), k.return = p, p = k)
                    }
                    return s(p);
                case Bi:
                    e: {
                        for (C = v.key; y !== null;) {
                            if (y.key === C)
                                if (y.tag === 4 && y.stateNode.containerInfo === v.containerInfo && y.stateNode.implementation === v.implementation) {
                                    n(p, y.sibling), y = i(y, v.children || []), y.return = p, p = y;
                                    break e
                                } else {
                                    n(p, y);
                                    break
                                }
                            else t(p, y);
                            y = y.sibling
                        }
                        y = Dc(v, p.mode, k),
                        y.return = p,
                        p = y
                    }
                    return s(p);
                case gr:
                    return C = v._init, x(p, y, C(v._payload), k)
            }
            if (hs(v)) return g(p, y, v, k);
            if (Xo(v)) return m(p, y, v, k);
            Ua(p, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, y !== null && y.tag === 6 ? (n(p, y.sibling), y = i(y, v), y.return = p, p = y) : (n(p, y), y = Oc(v, p.mode, k), y.return = p, p = y), s(p)) : n(p, y)
    }
    return x
}
var Ao = s1(!0),
    a1 = s1(!1),
    Hl = Kr(null),
    Wl = null,
    Yi = null,
    Ih = null;

function Oh() {
    Ih = Yi = Wl = null
}

function Dh(e) {
    var t = Hl.current;
    Se(Hl), e._currentValue = t
}

function Qd(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function lo(e, t) {
    Wl = e, Ih = Yi = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (mt = !0), e.firstContext = null)
}

function Gt(e) {
    var t = e._currentValue;
    if (Ih !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Yi === null) {
            if (Wl === null) throw Error(z(308));
            Yi = e, Wl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Yi = Yi.next = e;
    return t
}
var li = null;

function Lh(e) {
    li === null ? li = [e] : li.push(e)
}

function l1(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Lh(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Yn(e, r)
}

function Yn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var yr = !1;

function jh(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function u1(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Wn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Or(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, le & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Yn(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, Lh(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Yn(e, n)
}

function fl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Sh(e, n)
    }
}

function ag(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s, n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Kl(e, t, n, r) {
    var i = e.updateQueue;
    yr = !1;
    var o = i.firstBaseUpdate,
        s = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a,
            u = l.next;
        l.next = null, s === null ? o = u : s.next = u, s = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l))
    }
    if (o !== null) {
        var d = i.baseState;
        s = 0, c = u = l = null, a = o;
        do {
            var h = a.lane,
                f = a.eventTime;
            if ((r & h) === h) {
                c !== null && (c = c.next = {
                    eventTime: f,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var g = e,
                        m = a;
                    switch (h = t, f = n, m.tag) {
                        case 1:
                            if (g = m.payload, typeof g == "function") {
                                d = g.call(f, d, h);
                                break e
                            }
                            d = g;
                            break e;
                        case 3:
                            g.flags = g.flags & -65537 | 128;
                        case 0:
                            if (g = m.payload, h = typeof g == "function" ? g.call(f, d, h) : g, h == null) break e;
                            d = Ae({}, d, h);
                            break e;
                        case 2:
                            yr = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, h = i.effects, h === null ? i.effects = [a] : h.push(a))
            } else f = {
                eventTime: f,
                lane: h,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, c === null ? (u = c = f, l = d) : c = c.next = f, s |= h;
            if (a = a.next, a === null) {
                if (a = i.shared.pending, a === null) break;
                h = a, a = h.next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
            i = t;
            do s |= i.lane, i = i.next; while (i !== t)
        } else o === null && (i.shared.lanes = 0);
        Ci |= s, e.lanes = s, e.memoizedState = d
    }
}

function lg(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(z(191, i));
                i.call(r)
            }
        }
}
var va = {},
    An = Kr(va),
    Gs = Kr(va),
    qs = Kr(va);

function ui(e) {
    if (e === va) throw Error(z(174));
    return e
}

function _h(e, t) {
    switch (ye(qs, t), ye(Gs, e), ye(An, va), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Rd(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Rd(t, e)
    }
    Se(An), ye(An, t)
}

function Ro() {
    Se(An), Se(Gs), Se(qs)
}

function c1(e) {
    ui(qs.current);
    var t = ui(An.current),
        n = Rd(t, e.type);
    t !== n && (ye(Gs, e), ye(An, n))
}

function Fh(e) {
    Gs.current === e && (Se(An), Se(Gs))
}
var Ee = Kr(0);

function Gl(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Pc = [];

function zh() {
    for (var e = 0; e < Pc.length; e++) Pc[e]._workInProgressVersionPrimary = null;
    Pc.length = 0
}
var hl = nr.ReactCurrentDispatcher,
    Ac = nr.ReactCurrentBatchConfig,
    ki = 0,
    Pe = null,
    Fe = null,
    Be = null,
    ql = !1,
    Cs = !1,
    Qs = 0,
    oT = 0;

function qe() {
    throw Error(z(321))
}

function Vh(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!fn(e[n], t[n])) return !1;
    return !0
}

function Bh(e, t, n, r, i, o) {
    if (ki = o, Pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, hl.current = e === null || e.memoizedState === null ? uT : cT, e = n(r, i), Cs) {
        o = 0;
        do {
            if (Cs = !1, Qs = 0, 25 <= o) throw Error(z(301));
            o += 1, Be = Fe = null, t.updateQueue = null, hl.current = dT, e = n(r, i)
        } while (Cs)
    }
    if (hl.current = Ql, t = Fe !== null && Fe.next !== null, ki = 0, Be = Fe = Pe = null, ql = !1, t) throw Error(z(300));
    return e
}

function $h() {
    var e = Qs !== 0;
    return Qs = 0, e
}

function xn() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Be === null ? Pe.memoizedState = Be = e : Be = Be.next = e, Be
}

function qt() {
    if (Fe === null) {
        var e = Pe.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = Fe.next;
    var t = Be === null ? Pe.memoizedState : Be.next;
    if (t !== null) Be = t, Fe = e;
    else {
        if (e === null) throw Error(z(310));
        Fe = e, e = {
            memoizedState: Fe.memoizedState,
            baseState: Fe.baseState,
            baseQueue: Fe.baseQueue,
            queue: Fe.queue,
            next: null
        }, Be === null ? Pe.memoizedState = Be = e : Be = Be.next = e
    }
    return Be
}

function Ys(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Rc(e) {
    var t = qt(),
        n = t.queue;
    if (n === null) throw Error(z(311));
    n.lastRenderedReducer = e;
    var r = Fe,
        i = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next, o.next = s
        }
        r.baseQueue = i = o, n.pending = null
    }
    if (i !== null) {
        o = i.next, r = r.baseState;
        var a = s = null,
            l = null,
            u = o;
        do {
            var c = u.lane;
            if ((ki & c) === c) l !== null && (l = l.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d, s = r) : l = l.next = d, Pe.lanes |= c, Ci |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        l === null ? s = r : l.next = a, fn(r, t.memoizedState) || (mt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do o = i.lane, Pe.lanes |= o, Ci |= o, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Mc(e) {
    var t = qt(),
        n = t.queue;
    if (n === null) throw Error(z(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do o = e(o, s.action), s = s.next; while (s !== i);
        fn(o, t.memoizedState) || (mt = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function d1() {}

function f1(e, t) {
    var n = Pe,
        r = qt(),
        i = t(),
        o = !fn(r.memoizedState, i);
    if (o && (r.memoizedState = i, mt = !0), r = r.queue, Uh(m1.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Be !== null && Be.memoizedState.tag & 1) {
        if (n.flags |= 2048, Xs(9, p1.bind(null, n, r, i, t), void 0, null), $e === null) throw Error(z(349));
        ki & 30 || h1(n, t, i)
    }
    return i
}

function h1(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = Pe.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Pe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function p1(e, t, n, r) {
    t.value = n, t.getSnapshot = r, g1(t) && y1(e)
}

function m1(e, t, n) {
    return n(function() {
        g1(t) && y1(e)
    })
}

function g1(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !fn(e, n)
    } catch {
        return !0
    }
}

function y1(e) {
    var t = Yn(e, 1);
    t !== null && dn(t, e, 1, -1)
}

function ug(e) {
    var t = xn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ys,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = lT.bind(null, Pe, e), [t.memoizedState, e]
}

function Xs(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = Pe.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Pe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function v1() {
    return qt().memoizedState
}

function pl(e, t, n, r) {
    var i = xn();
    Pe.flags |= e, i.memoizedState = Xs(1 | t, n, void 0, r === void 0 ? null : r)
}

function Pu(e, t, n, r) {
    var i = qt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Fe !== null) {
        var s = Fe.memoizedState;
        if (o = s.destroy, r !== null && Vh(r, s.deps)) {
            i.memoizedState = Xs(t, n, o, r);
            return
        }
    }
    Pe.flags |= e, i.memoizedState = Xs(1 | t, n, o, r)
}

function cg(e, t) {
    return pl(8390656, 8, e, t)
}

function Uh(e, t) {
    return Pu(2048, 8, e, t)
}

function x1(e, t) {
    return Pu(4, 2, e, t)
}

function w1(e, t) {
    return Pu(4, 4, e, t)
}

function S1(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function b1(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Pu(4, 4, S1.bind(null, t, e), n)
}

function Hh() {}

function k1(e, t) {
    var n = qt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vh(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function C1(e, t) {
    var n = qt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vh(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function E1(e, t, n) {
    return ki & 21 ? (fn(n, t) || (n = Mx(), Pe.lanes |= n, Ci |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, mt = !0), e.memoizedState = n)
}

function sT(e, t) {
    var n = he;
    he = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ac.transition;
    Ac.transition = {};
    try {
        e(!1), t()
    } finally {
        he = n, Ac.transition = r
    }
}

function T1() {
    return qt().memoizedState
}

function aT(e, t, n) {
    var r = Lr(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, P1(e)) A1(t, n);
    else if (n = l1(e, t, n, r), n !== null) {
        var i = lt();
        dn(n, e, r, i), R1(n, t, r)
    }
}

function lT(e, t, n) {
    var r = Lr(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (P1(e)) A1(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var s = t.lastRenderedState,
                a = o(s, n);
            if (i.hasEagerState = !0, i.eagerState = a, fn(a, s)) {
                var l = t.interleaved;
                l === null ? (i.next = i, Lh(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = l1(e, t, i, r), n !== null && (i = lt(), dn(n, e, r, i), R1(n, t, r))
    }
}

function P1(e) {
    var t = e.alternate;
    return e === Pe || t !== null && t === Pe
}

function A1(e, t) {
    Cs = ql = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function R1(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Sh(e, n)
    }
}
var Ql = {
        readContext: Gt,
        useCallback: qe,
        useContext: qe,
        useEffect: qe,
        useImperativeHandle: qe,
        useInsertionEffect: qe,
        useLayoutEffect: qe,
        useMemo: qe,
        useReducer: qe,
        useRef: qe,
        useState: qe,
        useDebugValue: qe,
        useDeferredValue: qe,
        useTransition: qe,
        useMutableSource: qe,
        useSyncExternalStore: qe,
        useId: qe,
        unstable_isNewReconciler: !1
    },
    uT = {
        readContext: Gt,
        useCallback: function(e, t) {
            return xn().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Gt,
        useEffect: cg,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, pl(4194308, 4, S1.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return pl(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return pl(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = xn();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = xn();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = aT.bind(null, Pe, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = xn();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: ug,
        useDebugValue: Hh,
        useDeferredValue: function(e) {
            return xn().memoizedState = e
        },
        useTransition: function() {
            var e = ug(!1),
                t = e[0];
            return e = sT.bind(null, e[1]), xn().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = Pe,
                i = xn();
            if (Ce) {
                if (n === void 0) throw Error(z(407));
                n = n()
            } else {
                if (n = t(), $e === null) throw Error(z(349));
                ki & 30 || h1(r, t, n)
            }
            i.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return i.queue = o, cg(m1.bind(null, r, o, e), [e]), r.flags |= 2048, Xs(9, p1.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function() {
            var e = xn(),
                t = $e.identifierPrefix;
            if (Ce) {
                var n = Hn,
                    r = Un;
                n = (r & ~(1 << 32 - cn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Qs++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = oT++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    cT = {
        readContext: Gt,
        useCallback: k1,
        useContext: Gt,
        useEffect: Uh,
        useImperativeHandle: b1,
        useInsertionEffect: x1,
        useLayoutEffect: w1,
        useMemo: C1,
        useReducer: Rc,
        useRef: v1,
        useState: function() {
            return Rc(Ys)
        },
        useDebugValue: Hh,
        useDeferredValue: function(e) {
            var t = qt();
            return E1(t, Fe.memoizedState, e)
        },
        useTransition: function() {
            var e = Rc(Ys)[0],
                t = qt().memoizedState;
            return [e, t]
        },
        useMutableSource: d1,
        useSyncExternalStore: f1,
        useId: T1,
        unstable_isNewReconciler: !1
    },
    dT = {
        readContext: Gt,
        useCallback: k1,
        useContext: Gt,
        useEffect: Uh,
        useImperativeHandle: b1,
        useInsertionEffect: x1,
        useLayoutEffect: w1,
        useMemo: C1,
        useReducer: Mc,
        useRef: v1,
        useState: function() {
            return Mc(Ys)
        },
        useDebugValue: Hh,
        useDeferredValue: function(e) {
            var t = qt();
            return Fe === null ? t.memoizedState = e : E1(t, Fe.memoizedState, e)
        },
        useTransition: function() {
            var e = Mc(Ys)[0],
                t = qt().memoizedState;
            return [e, t]
        },
        useMutableSource: d1,
        useSyncExternalStore: f1,
        useId: T1,
        unstable_isNewReconciler: !1
    };

function nn(e, t) {
    if (e && e.defaultProps) {
        t = Ae({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Yd(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Ae({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Au = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Ri(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = lt(),
            i = Lr(e),
            o = Wn(r, i);
        o.payload = t, n != null && (o.callback = n), t = Or(e, o, i), t !== null && (dn(t, e, i, r), fl(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = lt(),
            i = Lr(e),
            o = Wn(r, i);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Or(e, o, i), t !== null && (dn(t, e, i, r), fl(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = lt(),
            r = Lr(e),
            i = Wn(n, r);
        i.tag = 2, t != null && (i.callback = t), t = Or(e, i, r), t !== null && (dn(t, e, r, n), fl(t, e, r))
    }
};

function dg(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Us(n, r) || !Us(i, o) : !0
}

function M1(e, t, n) {
    var r = !1,
        i = zr,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = Gt(o) : (i = yt(t) ? Si : et.current, r = t.contextTypes, o = (r = r != null) ? To(e, i) : zr), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Au, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function fg(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Au.enqueueReplaceState(t, t.state, null)
}

function Xd(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, jh(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Gt(o) : (o = yt(t) ? Si : et.current, i.context = To(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Yd(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Au.enqueueReplaceState(i, i.state, null), Kl(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function Mo(e, t) {
    try {
        var n = "",
            r = t;
        do n += zC(r), r = r.return; while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function Nc(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function Zd(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var fT = typeof WeakMap == "function" ? WeakMap : Map;

function N1(e, t, n) {
    n = Wn(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Xl || (Xl = !0, uf = r), Zd(e, t)
    }, n
}

function I1(e, t, n) {
    n = Wn(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            Zd(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Zd(e, t), typeof r != "function" && (Dr === null ? Dr = new Set([this]) : Dr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function hg(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new fT;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = TT.bind(null, e, t, n), t.then(e, e))
}

function pg(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function mg(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Wn(-1, 1), t.tag = 2, Or(n, t, 1))), n.lanes |= 1), e)
}
var hT = nr.ReactCurrentOwner,
    mt = !1;

function st(e, t, n, r) {
    t.child = e === null ? a1(t, null, n, r) : Ao(t, e.child, n, r)
}

function gg(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return lo(t, i), r = Bh(e, t, n, r, o, i), n = $h(), e !== null && !mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Xn(e, t, i)) : (Ce && n && Rh(t), t.flags |= 1, st(e, t, r, i), t.child)
}

function yg(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Zh(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, O1(e, t, o, r, i)) : (e = vl(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Us, n(s, r) && e.ref === t.ref) return Xn(e, t, i)
    }
    return t.flags |= 1, e = jr(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function O1(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Us(o, r) && e.ref === t.ref)
            if (mt = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (mt = !0);
            else return t.lanes = e.lanes, Xn(e, t, i)
    }
    return Jd(e, t, n, r, i)
}

function D1(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, ye(Zi, Tt), Tt |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, ye(Zi, Tt), Tt |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, ye(Zi, Tt), Tt |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ye(Zi, Tt), Tt |= r;
    return st(e, t, i, n), t.child
}

function L1(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Jd(e, t, n, r, i) {
    var o = yt(n) ? Si : et.current;
    return o = To(t, o), lo(t, i), n = Bh(e, t, n, r, o, i), r = $h(), e !== null && !mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Xn(e, t, i)) : (Ce && r && Rh(t), t.flags |= 1, st(e, t, n, i), t.child)
}

function vg(e, t, n, r, i) {
    if (yt(n)) {
        var o = !0;
        Bl(t)
    } else o = !1;
    if (lo(t, i), t.stateNode === null) ml(e, t), M1(t, n, r), Xd(t, n, r, i), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var l = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = Gt(u) : (u = yt(n) ? Si : et.current, u = To(t, u));
        var c = n.getDerivedStateFromProps,
            d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && fg(t, s, r, u), yr = !1;
        var h = t.memoizedState;
        s.state = h, Kl(t, r, s, i), l = t.memoizedState, a !== r || h !== l || gt.current || yr ? (typeof c == "function" && (Yd(t, n, c, r), l = t.memoizedState), (a = yr || dg(t, n, a, r, h, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, u1(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : nn(t.type, a), s.props = u, d = t.pendingProps, h = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Gt(l) : (l = yt(n) ? Si : et.current, l = To(t, l));
        var f = n.getDerivedStateFromProps;
        (c = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || h !== l) && fg(t, s, r, l), yr = !1, h = t.memoizedState, s.state = h, Kl(t, r, s, i);
        var g = t.memoizedState;
        a !== d || h !== g || gt.current || yr ? (typeof f == "function" && (Yd(t, n, f, r), g = t.memoizedState), (u = yr || dg(t, n, u, r, h, g, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, g, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, g, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), s.props = r, s.state = g, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return ef(e, t, n, r, o, i)
}

function ef(e, t, n, r, i, o) {
    L1(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && rg(t, n, !1), Xn(e, t, o);
    r = t.stateNode, hT.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Ao(t, e.child, null, o), t.child = Ao(t, null, a, o)) : st(e, t, a, o), t.memoizedState = r.state, i && rg(t, n, !0), t.child
}

function j1(e) {
    var t = e.stateNode;
    t.pendingContext ? ng(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ng(e, t.context, !1), _h(e, t.containerInfo)
}

function xg(e, t, n, r, i) {
    return Po(), Nh(i), t.flags |= 256, st(e, t, n, r), t.child
}
var tf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function nf(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function _1(e, t, n) {
    var r = t.pendingProps,
        i = Ee.current,
        o = !1,
        s = (t.flags & 128) !== 0,
        a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), ye(Ee, i & 1), e === null) return qd(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Nu(s, r, 0, null), e = xi(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = nf(n), t.memoizedState = tf, e) : Wh(t, s));
    if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return pT(e, t, s, r, a, i, n);
    if (o) {
        o = r.fallback, s = t.mode, i = e.child, a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = jr(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = jr(a, o) : (o = xi(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? nf(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = tf, r
    }
    return o = e.child, e = o.sibling, r = jr(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Wh(e, t) {
    return t = Nu({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Ha(e, t, n, r) {
    return r !== null && Nh(r), Ao(t, e.child, null, n), e = Wh(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function pT(e, t, n, r, i, o, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Nc(Error(z(422))), Ha(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Nu({
        mode: "visible",
        children: r.children
    }, i, 0, null), o = xi(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Ao(t, e.child, null, s), t.child.memoizedState = nf(s), t.memoizedState = tf, o);
    if (!(t.mode & 1)) return Ha(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
        return r = a, o = Error(z(419)), r = Nc(o, r, void 0), Ha(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0, mt || a) {
        if (r = $e, r !== null) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Yn(e, i), dn(r, e, i, -1))
        }
        return Xh(), r = Nc(Error(z(421))), Ha(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = PT.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, At = Ir(i.nextSibling), Mt = t, Ce = !0, ln = null, e !== null && ($t[Ut++] = Un, $t[Ut++] = Hn, $t[Ut++] = bi, Un = e.id, Hn = e.overflow, bi = t), t = Wh(t, r.children), t.flags |= 4096, t)
}

function wg(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Qd(e.return, t, n)
}

function Ic(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
}

function F1(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if (st(e, t, r.children, n), r = Ee.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && wg(e, n, t);
            else if (e.tag === 19) wg(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (ye(Ee, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Gl(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Ic(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && Gl(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            Ic(t, !0, n, null, o);
            break;
        case "together":
            Ic(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function ml(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Xn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Ci |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(z(153));
    if (t.child !== null) {
        for (e = t.child, n = jr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = jr(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function mT(e, t, n) {
    switch (t.tag) {
        case 3:
            j1(t), Po();
            break;
        case 5:
            c1(t);
            break;
        case 1:
            yt(t.type) && Bl(t);
            break;
        case 4:
            _h(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            ye(Hl, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ye(Ee, Ee.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? _1(e, t, n) : (ye(Ee, Ee.current & 1), e = Xn(e, t, n), e !== null ? e.sibling : null);
            ye(Ee, Ee.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return F1(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ye(Ee, Ee.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, D1(e, t, n)
    }
    return Xn(e, t, n)
}
var z1, rf, V1, B1;
z1 = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
rf = function() {};
V1 = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, ui(An.current);
        var o = null;
        switch (n) {
            case "input":
                i = Ed(e, i), r = Ed(e, r), o = [];
                break;
            case "select":
                i = Ae({}, i, {
                    value: void 0
                }), r = Ae({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                i = Ad(e, i), r = Ad(e, r), o = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = zl)
        }
        Md(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (js.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s])
                    } else n || (o || (o = []), o.push(u, n)), n = l;
            else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (js.hasOwnProperty(u) ? (l != null && u === "onScroll" && we("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
B1 = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function rs(e, t) {
    if (!Ce) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function gT(e, t, n) {
    var r = t.pendingProps;
    switch (Mh(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Qe(t), null;
        case 1:
            return yt(t.type) && Vl(), Qe(t), null;
        case 3:
            return r = t.stateNode, Ro(), Se(gt), Se(et), zh(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && ($a(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ln !== null && (ff(ln), ln = null))), rf(e, t), Qe(t), null;
        case 5:
            Fh(t);
            var i = ui(qs.current);
            if (n = t.type, e !== null && t.stateNode != null) V1(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(z(166));
                    return Qe(t), null
                }
                if (e = ui(An.current), $a(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[Cn] = t, r[Ks] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            we("cancel", r), we("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            we("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < ms.length; i++) we(ms[i], r);
                            break;
                        case "source":
                            we("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            we("error", r), we("load", r);
                            break;
                        case "details":
                            we("toggle", r);
                            break;
                        case "input":
                            Rm(r, o), we("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, we("invalid", r);
                            break;
                        case "textarea":
                            Nm(r, o), we("invalid", r)
                    }
                    Md(n, o), i = null;
                    for (var s in o)
                        if (o.hasOwnProperty(s)) {
                            var a = o[s];
                            s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Ba(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Ba(r.textContent, a, e), i = ["children", "" + a]) : js.hasOwnProperty(s) && a != null && s === "onScroll" && we("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Oa(r), Mm(r, o, !0);
                            break;
                        case "textarea":
                            Oa(r), Im(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = zl)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = mx(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Cn] = t, e[Ks] = r, z1(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = Nd(n, r), n) {
                            case "dialog":
                                we("cancel", e), we("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                we("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < ms.length; i++) we(ms[i], e);
                                i = r;
                                break;
                            case "source":
                                we("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                we("error", e), we("load", e), i = r;
                                break;
                            case "details":
                                we("toggle", e), i = r;
                                break;
                            case "input":
                                Rm(e, r), i = Ed(e, r), we("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = Ae({}, r, {
                                    value: void 0
                                }), we("invalid", e);
                                break;
                            case "textarea":
                                Nm(e, r), i = Ad(e, r), we("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        Md(n, i),
                        a = i;
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var l = a[o];
                                o === "style" ? vx(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && gx(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && _s(e, l) : typeof l == "number" && _s(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (js.hasOwnProperty(o) ? l != null && o === "onScroll" && we("scroll", e) : l != null && mh(e, o, l, s))
                            }
                        switch (n) {
                            case "input":
                                Oa(e), Mm(e, r, !1);
                                break;
                            case "textarea":
                                Oa(e), Im(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Fr(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? io(e, !!r.multiple, o, !1) : r.defaultValue != null && io(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = zl)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Qe(t), null;
        case 6:
            if (e && t.stateNode != null) B1(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
                if (n = ui(qs.current), ui(An.current), $a(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Cn] = t, (o = r.nodeValue !== n) && (e = Mt, e !== null)) switch (e.tag) {
                        case 3:
                            Ba(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Ba(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Cn] = t, t.stateNode = r
            }
            return Qe(t), null;
        case 13:
            if (Se(Ee), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Ce && At !== null && t.mode & 1 && !(t.flags & 128)) o1(), Po(), t.flags |= 98560, o = !1;
                else if (o = $a(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(z(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(z(317));
                        o[Cn] = t
                    } else Po(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Qe(t), o = !1
                } else ln !== null && (ff(ln), ln = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ee.current & 1 ? Ve === 0 && (Ve = 3) : Xh())), t.updateQueue !== null && (t.flags |= 4), Qe(t), null);
        case 4:
            return Ro(), rf(e, t), e === null && Hs(t.stateNode.containerInfo), Qe(t), null;
        case 10:
            return Dh(t.type._context), Qe(t), null;
        case 17:
            return yt(t.type) && Vl(), Qe(t), null;
        case 19:
            if (Se(Ee), o = t.memoizedState, o === null) return Qe(t), null;
            if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
                if (r) rs(o, !1);
                else {
                    if (Ve !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = Gl(e), s !== null) {
                                for (t.flags |= 128, rs(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return ye(Ee, Ee.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && Oe() > No && (t.flags |= 128, r = !0, rs(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Gl(s), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), rs(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !Ce) return Qe(t), null
                    } else 2 * Oe() - o.renderingStartTime > No && n !== 1073741824 && (t.flags |= 128, r = !0, rs(o, !1), t.lanes = 4194304);
                o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Oe(), t.sibling = null, n = Ee.current, ye(Ee, r ? n & 1 | 2 : n & 1), t) : (Qe(t), null);
        case 22:
        case 23:
            return Yh(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Tt & 1073741824 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(z(156, t.tag))
}

function yT(e, t) {
    switch (Mh(t), t.tag) {
        case 1:
            return yt(t.type) && Vl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Ro(), Se(gt), Se(et), zh(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Fh(t), null;
        case 13:
            if (Se(Ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(z(340));
                Po()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return Se(Ee), null;
        case 4:
            return Ro(), null;
        case 10:
            return Dh(t.type._context), null;
        case 22:
        case 23:
            return Yh(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Wa = !1,
    Ze = !1,
    vT = typeof WeakSet == "function" ? WeakSet : Set,
    H = null;

function Xi(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            Ne(e, t, r)
        } else n.current = null
}

function of (e, t, n) {
    try {
        n()
    } catch (r) {
        Ne(e, t, r)
    }
}
var Sg = !1;

function xT(e, t) {
    if (Bd = jl, e = Kx(), Ah(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    a = -1,
                    l = -1,
                    u = 0,
                    c = 0,
                    d = e,
                    h = null;
                t: for (;;) {
                    for (var f; d !== n || i !== 0 && d.nodeType !== 3 || (a = s + i), d !== o || r !== 0 && d.nodeType !== 3 || (l = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (f = d.firstChild) !== null;) h = d, d = f;
                    for (;;) {
                        if (d === e) break t;
                        if (h === n && ++u === i && (a = s), h === o && ++c === r && (l = s), (f = d.nextSibling) !== null) break;
                        d = h, h = d.parentNode
                    }
                    d = f
                }
                n = a === -1 || l === -1 ? null : {
                    start: a,
                    end: l
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for ($d = {
            focusedElem: e,
            selectionRange: n
        }, jl = !1, H = t; H !== null;)
        if (t = H, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, H = e;
        else
            for (; H !== null;) {
                t = H;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var m = g.memoizedProps,
                                    x = g.memoizedState,
                                    p = t.stateNode,
                                    y = p.getSnapshotBeforeUpdate(t.elementType === t.type ? m : nn(t.type, m), x);
                                p.__reactInternalSnapshotBeforeUpdate = y
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(z(163))
                    }
                } catch (k) {
                    Ne(t, t.return, k)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, H = e;
                    break
                }
                H = t.return
            }
    return g = Sg, Sg = !1, g
}

function Es(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0, o !== void 0 && of (t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}

function Ru(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function sf(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function $1(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, $1(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Cn], delete t[Ks], delete t[Wd], delete t[tT], delete t[nT])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function U1(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function bg(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || U1(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function af(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = zl));
    else if (r !== 4 && (e = e.child, e !== null))
        for (af(e, t, n), e = e.sibling; e !== null;) af(e, t, n), e = e.sibling
}

function lf(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (lf(e, t, n), e = e.sibling; e !== null;) lf(e, t, n), e = e.sibling
}
var Ue = null,
    an = !1;

function ur(e, t, n) {
    for (n = n.child; n !== null;) H1(e, t, n), n = n.sibling
}

function H1(e, t, n) {
    if (Pn && typeof Pn.onCommitFiberUnmount == "function") try {
        Pn.onCommitFiberUnmount(Su, n)
    } catch {}
    switch (n.tag) {
        case 5:
            Ze || Xi(n, t);
        case 6:
            var r = Ue,
                i = an;
            Ue = null, ur(e, t, n), Ue = r, an = i, Ue !== null && (an ? (e = Ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ue.removeChild(n.stateNode));
            break;
        case 18:
            Ue !== null && (an ? (e = Ue, n = n.stateNode, e.nodeType === 8 ? Ec(e.parentNode, n) : e.nodeType === 1 && Ec(e, n), Bs(e)) : Ec(Ue, n.stateNode));
            break;
        case 4:
            r = Ue, i = an, Ue = n.stateNode.containerInfo, an = !0, ur(e, t, n), Ue = r, an = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ze && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var o = i,
                        s = o.destroy;
                    o = o.tag, s !== void 0 && (o & 2 || o & 4) && of (n, t, s), i = i.next
                } while (i !== r)
            }
            ur(e, t, n);
            break;
        case 1:
            if (!Ze && (Xi(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                Ne(n, t, a)
            }
            ur(e, t, n);
            break;
        case 21:
            ur(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Ze = (r = Ze) || n.memoizedState !== null, ur(e, t, n), Ze = r) : ur(e, t, n);
            break;
        default:
            ur(e, t, n)
    }
}

function kg(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new vT), t.forEach(function(r) {
            var i = AT.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function Jt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e,
                    s = t,
                    a = s;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            Ue = a.stateNode, an = !1;
                            break e;
                        case 3:
                            Ue = a.stateNode.containerInfo, an = !0;
                            break e;
                        case 4:
                            Ue = a.stateNode.containerInfo, an = !0;
                            break e
                    }
                    a = a.return
                }
                if (Ue === null) throw Error(z(160));
                H1(o, s, i), Ue = null, an = !1;
                var l = i.alternate;
                l !== null && (l.return = null), i.return = null
            } catch (u) {
                Ne(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) W1(t, e), t = t.sibling
}

function W1(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Jt(t, e), vn(e), r & 4) {
                try {
                    Es(3, e, e.return), Ru(3, e)
                } catch (m) {
                    Ne(e, e.return, m)
                }
                try {
                    Es(5, e, e.return)
                } catch (m) {
                    Ne(e, e.return, m)
                }
            }
            break;
        case 1:
            Jt(t, e), vn(e), r & 512 && n !== null && Xi(n, n.return);
            break;
        case 5:
            if (Jt(t, e), vn(e), r & 512 && n !== null && Xi(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    _s(i, "")
                } catch (m) {
                    Ne(e, e.return, m)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var o = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : o,
                    a = e.type,
                    l = e.updateQueue;
                if (e.updateQueue = null, l !== null) try {
                    a === "input" && o.type === "radio" && o.name != null && hx(i, o), Nd(a, s);
                    var u = Nd(a, o);
                    for (s = 0; s < l.length; s += 2) {
                        var c = l[s],
                            d = l[s + 1];
                        c === "style" ? vx(i, d) : c === "dangerouslySetInnerHTML" ? gx(i, d) : c === "children" ? _s(i, d) : mh(i, c, d, u)
                    }
                    switch (a) {
                        case "input":
                            Td(i, o);
                            break;
                        case "textarea":
                            px(i, o);
                            break;
                        case "select":
                            var h = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!o.multiple;
                            var f = o.value;
                            f != null ? io(i, !!o.multiple, f, !1) : h !== !!o.multiple && (o.defaultValue != null ? io(i, !!o.multiple, o.defaultValue, !0) : io(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[Ks] = o
                } catch (m) {
                    Ne(e, e.return, m)
                }
            }
            break;
        case 6:
            if (Jt(t, e), vn(e), r & 4) {
                if (e.stateNode === null) throw Error(z(162));
                i = e.stateNode, o = e.memoizedProps;
                try {
                    i.nodeValue = o
                } catch (m) {
                    Ne(e, e.return, m)
                }
            }
            break;
        case 3:
            if (Jt(t, e), vn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Bs(t.containerInfo)
            } catch (m) {
                Ne(e, e.return, m)
            }
            break;
        case 4:
            Jt(t, e), vn(e);
            break;
        case 13:
            Jt(t, e), vn(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (qh = Oe())), r & 4 && kg(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ze = (u = Ze) || c, Jt(t, e), Ze = u) : Jt(t, e), vn(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (H = e, c = e.child; c !== null;) {
                        for (d = H = c; H !== null;) {
                            switch (h = H, f = h.child, h.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Es(4, h, h.return);
                                    break;
                                case 1:
                                    Xi(h, h.return);
                                    var g = h.stateNode;
                                    if (typeof g.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount()
                                        } catch (m) {
                                            Ne(r, n, m)
                                        }
                                    }
                                    break;
                                case 5:
                                    Xi(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        Eg(d);
                                        continue
                                    }
                            }
                            f !== null ? (f.return = h, H = f) : Eg(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null, d = e;;) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                i = d.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = yx("display", s))
                            } catch (m) {
                                Ne(e, e.return, m)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null) try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (m) {
                            Ne(e, e.return, m)
                        }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                        d.child.return = d, d = d.child;
                        continue
                    }
                    if (d === e) break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e) break e;
                        c === d && (c = null), d = d.return
                    }
                    c === d && (c = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            Jt(t, e), vn(e), r & 4 && kg(e);
            break;
        case 21:
            break;
        default:
            Jt(t, e), vn(e)
    }
}

function vn(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (U1(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(z(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (_s(i, ""), r.flags &= -33);
                    var o = bg(e);
                    lf(e, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = bg(e);
                    af(e, a, s);
                    break;
                default:
                    throw Error(z(161))
            }
        }
        catch (l) {
            Ne(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function wT(e, t, n) {
    H = e, K1(e)
}

function K1(e, t, n) {
    for (var r = (e.mode & 1) !== 0; H !== null;) {
        var i = H,
            o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || Wa;
            if (!s) {
                var a = i.alternate,
                    l = a !== null && a.memoizedState !== null || Ze;
                a = Wa;
                var u = Ze;
                if (Wa = s, (Ze = l) && !u)
                    for (H = i; H !== null;) s = H, l = s.child, s.tag === 22 && s.memoizedState !== null ? Tg(i) : l !== null ? (l.return = s, H = l) : Tg(i);
                for (; o !== null;) H = o, K1(o), o = o.sibling;
                H = i, Wa = a, Ze = u
            }
            Cg(e)
        } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, H = o) : Cg(e)
    }
}

function Cg(e) {
    for (; H !== null;) {
        var t = H;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ze || Ru(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ze)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : nn(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && lg(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            lg(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img":
                                    l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && Bs(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(z(163))
                }
                Ze || t.flags & 512 && sf(t)
            } catch (h) {
                Ne(t, t.return, h)
            }
        }
        if (t === e) {
            H = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, H = n;
            break
        }
        H = t.return
    }
}

function Eg(e) {
    for (; H !== null;) {
        var t = H;
        if (t === e) {
            H = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, H = n;
            break
        }
        H = t.return
    }
}

function Tg(e) {
    for (; H !== null;) {
        var t = H;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Ru(4, t)
                    } catch (l) {
                        Ne(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            Ne(t, i, l)
                        }
                    }
                    var o = t.return;
                    try {
                        sf(t)
                    } catch (l) {
                        Ne(t, o, l)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        sf(t)
                    } catch (l) {
                        Ne(t, s, l)
                    }
            }
        } catch (l) {
            Ne(t, t.return, l)
        }
        if (t === e) {
            H = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, H = a;
            break
        }
        H = t.return
    }
}
var ST = Math.ceil,
    Yl = nr.ReactCurrentDispatcher,
    Kh = nr.ReactCurrentOwner,
    Kt = nr.ReactCurrentBatchConfig,
    le = 0,
    $e = null,
    je = null,
    We = 0,
    Tt = 0,
    Zi = Kr(0),
    Ve = 0,
    Zs = null,
    Ci = 0,
    Mu = 0,
    Gh = 0,
    Ts = null,
    pt = null,
    qh = 0,
    No = 1 / 0,
    Vn = null,
    Xl = !1,
    uf = null,
    Dr = null,
    Ka = !1,
    Tr = null,
    Zl = 0,
    Ps = 0,
    cf = null,
    gl = -1,
    yl = 0;

function lt() {
    return le & 6 ? Oe() : gl !== -1 ? gl : gl = Oe()
}

function Lr(e) {
    return e.mode & 1 ? le & 2 && We !== 0 ? We & -We : iT.transition !== null ? (yl === 0 && (yl = Mx()), yl) : (e = he, e !== 0 || (e = window.event, e = e === void 0 ? 16 : _x(e.type)), e) : 1
}

function dn(e, t, n, r) {
    if (50 < Ps) throw Ps = 0, cf = null, Error(z(185));
    ma(e, n, r), (!(le & 2) || e !== $e) && (e === $e && (!(le & 2) && (Mu |= n), Ve === 4 && xr(e, We)), vt(e, r), n === 1 && le === 0 && !(t.mode & 1) && (No = Oe() + 500, Tu && Gr()))
}

function vt(e, t) {
    var n = e.callbackNode;
    iE(e, t);
    var r = Ll(e, e === $e ? We : 0);
    if (r === 0) n !== null && Lm(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Lm(n), t === 1) e.tag === 0 ? rT(Pg.bind(null, e)) : n1(Pg.bind(null, e)), JE(function() {
            !(le & 6) && Gr()
        }), n = null;
        else {
            switch (Nx(r)) {
                case 1:
                    n = wh;
                    break;
                case 4:
                    n = Ax;
                    break;
                case 16:
                    n = Dl;
                    break;
                case 536870912:
                    n = Rx;
                    break;
                default:
                    n = Dl
            }
            n = ew(n, G1.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function G1(e, t) {
    if (gl = -1, yl = 0, le & 6) throw Error(z(327));
    var n = e.callbackNode;
    if (uo() && e.callbackNode !== n) return null;
    var r = Ll(e, e === $e ? We : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Jl(e, r);
    else {
        t = r;
        var i = le;
        le |= 2;
        var o = Q1();
        ($e !== e || We !== t) && (Vn = null, No = Oe() + 500, vi(e, t));
        do try {
            CT();
            break
        } catch (a) {
            q1(e, a)
        }
        while (!0);
        Oh(), Yl.current = o, le = i, je !== null ? t = 0 : ($e = null, We = 0, t = Ve)
    }
    if (t !== 0) {
        if (t === 2 && (i = jd(e), i !== 0 && (r = i, t = df(e, i))), t === 1) throw n = Zs, vi(e, 0), xr(e, r), vt(e, Oe()), n;
        if (t === 6) xr(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !bT(i) && (t = Jl(e, r), t === 2 && (o = jd(e), o !== 0 && (r = o, t = df(e, o))), t === 1)) throw n = Zs, vi(e, 0), xr(e, r), vt(e, Oe()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(z(345));
                case 2:
                    ri(e, pt, Vn);
                    break;
                case 3:
                    if (xr(e, r), (r & 130023424) === r && (t = qh + 500 - Oe(), 10 < t)) {
                        if (Ll(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            lt(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = Hd(ri.bind(null, e, pt, Vn), t);
                        break
                    }
                    ri(e, pt, Vn);
                    break;
                case 4:
                    if (xr(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var s = 31 - cn(r);
                        o = 1 << s, s = t[s], s > i && (i = s), r &= ~o
                    }
                    if (r = i, r = Oe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ST(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Hd(ri.bind(null, e, pt, Vn), r);
                        break
                    }
                    ri(e, pt, Vn);
                    break;
                case 5:
                    ri(e, pt, Vn);
                    break;
                default:
                    throw Error(z(329))
            }
        }
    }
    return vt(e, Oe()), e.callbackNode === n ? G1.bind(null, e) : null
}

function df(e, t) {
    var n = Ts;
    return e.current.memoizedState.isDehydrated && (vi(e, t).flags |= 256), e = Jl(e, t), e !== 2 && (t = pt, pt = n, t !== null && ff(t)), e
}

function ff(e) {
    pt === null ? pt = e : pt.push.apply(pt, e)
}

function bT(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!fn(o(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function xr(e, t) {
    for (t &= ~Gh, t &= ~Mu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - cn(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Pg(e) {
    if (le & 6) throw Error(z(327));
    uo();
    var t = Ll(e, 0);
    if (!(t & 1)) return vt(e, Oe()), null;
    var n = Jl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = jd(e);
        r !== 0 && (t = r, n = df(e, r))
    }
    if (n === 1) throw n = Zs, vi(e, 0), xr(e, t), vt(e, Oe()), n;
    if (n === 6) throw Error(z(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, ri(e, pt, Vn), vt(e, Oe()), null
}

function Qh(e, t) {
    var n = le;
    le |= 1;
    try {
        return e(t)
    } finally {
        le = n, le === 0 && (No = Oe() + 500, Tu && Gr())
    }
}

function Ei(e) {
    Tr !== null && Tr.tag === 0 && !(le & 6) && uo();
    var t = le;
    le |= 1;
    var n = Kt.transition,
        r = he;
    try {
        if (Kt.transition = null, he = 1, e) return e()
    } finally {
        he = r, Kt.transition = n, le = t, !(le & 6) && Gr()
    }
}

function Yh() {
    Tt = Zi.current, Se(Zi)
}

function vi(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, ZE(n)), je !== null)
        for (n = je.return; n !== null;) {
            var r = n;
            switch (Mh(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Vl();
                    break;
                case 3:
                    Ro(), Se(gt), Se(et), zh();
                    break;
                case 5:
                    Fh(r);
                    break;
                case 4:
                    Ro();
                    break;
                case 13:
                    Se(Ee);
                    break;
                case 19:
                    Se(Ee);
                    break;
                case 10:
                    Dh(r.type._context);
                    break;
                case 22:
                case 23:
                    Yh()
            }
            n = n.return
        }
    if ($e = e, je = e = jr(e.current, null), We = Tt = t, Ve = 0, Zs = null, Gh = Mu = Ci = 0, pt = Ts = null, li !== null) {
        for (t = 0; t < li.length; t++)
            if (n = li[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i, r.next = s
                }
                n.pending = r
            }
        li = null
    }
    return e
}

function q1(e, t) {
    do {
        var n = je;
        try {
            if (Oh(), hl.current = Ql, ql) {
                for (var r = Pe.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                ql = !1
            }
            if (ki = 0, Be = Fe = Pe = null, Cs = !1, Qs = 0, Kh.current = null, n === null || n.return === null) {
                Ve = 1, Zs = t, je = null;
                break
            }
            e: {
                var o = e,
                    s = n.return,
                    a = n,
                    l = t;
                if (t = We, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l,
                        c = a,
                        d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var h = c.alternate;
                        h ? (c.updateQueue = h.updateQueue, c.memoizedState = h.memoizedState, c.lanes = h.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var f = pg(s);
                    if (f !== null) {
                        f.flags &= -257, mg(f, s, a, o, t), f.mode & 1 && hg(o, u, t), t = f, l = u;
                        var g = t.updateQueue;
                        if (g === null) {
                            var m = new Set;
                            m.add(l), t.updateQueue = m
                        } else g.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            hg(o, u, t), Xh();
                            break e
                        }
                        l = Error(z(426))
                    }
                } else if (Ce && a.mode & 1) {
                    var x = pg(s);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256), mg(x, s, a, o, t), Nh(Mo(l, a));
                        break e
                    }
                }
                o = l = Mo(l, a),
                Ve !== 4 && (Ve = 2),
                Ts === null ? Ts = [o] : Ts.push(o),
                o = s;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var p = N1(o, l, t);
                            ag(o, p);
                            break e;
                        case 1:
                            a = l;
                            var y = o.type,
                                v = o.stateNode;
                            if (!(o.flags & 128) && (typeof y.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Dr === null || !Dr.has(v)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var k = I1(o, a, t);
                                ag(o, k);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            X1(n)
        } catch (E) {
            t = E, je === n && n !== null && (je = n = n.return);
            continue
        }
        break
    } while (!0)
}

function Q1() {
    var e = Yl.current;
    return Yl.current = Ql, e === null ? Ql : e
}

function Xh() {
    (Ve === 0 || Ve === 3 || Ve === 2) && (Ve = 4), $e === null || !(Ci & 268435455) && !(Mu & 268435455) || xr($e, We)
}

function Jl(e, t) {
    var n = le;
    le |= 2;
    var r = Q1();
    ($e !== e || We !== t) && (Vn = null, vi(e, t));
    do try {
        kT();
        break
    } catch (i) {
        q1(e, i)
    }
    while (!0);
    if (Oh(), le = n, Yl.current = r, je !== null) throw Error(z(261));
    return $e = null, We = 0, Ve
}

function kT() {
    for (; je !== null;) Y1(je)
}

function CT() {
    for (; je !== null && !QC();) Y1(je)
}

function Y1(e) {
    var t = J1(e.alternate, e, Tt);
    e.memoizedProps = e.pendingProps, t === null ? X1(e) : je = t, Kh.current = null
}

function X1(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = yT(n, t), n !== null) {
                n.flags &= 32767, je = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                Ve = 6, je = null;
                return
            }
        } else if (n = gT(n, t, Tt), n !== null) {
            je = n;
            return
        }
        if (t = t.sibling, t !== null) {
            je = t;
            return
        }
        je = t = e
    } while (t !== null);
    Ve === 0 && (Ve = 5)
}

function ri(e, t, n) {
    var r = he,
        i = Kt.transition;
    try {
        Kt.transition = null, he = 1, ET(e, t, n, r)
    } finally {
        Kt.transition = i, he = r
    }
    return null
}

function ET(e, t, n, r) {
    do uo(); while (Tr !== null);
    if (le & 6) throw Error(z(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(z(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (oE(e, o), e === $e && (je = $e = null, We = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ka || (Ka = !0, ew(Dl, function() {
            return uo(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = Kt.transition, Kt.transition = null;
        var s = he;
        he = 1;
        var a = le;
        le |= 4, Kh.current = null, xT(e, n), W1(n, e), WE($d), jl = !!Bd, $d = Bd = null, e.current = n, wT(n), YC(), le = a, he = s, Kt.transition = o
    } else e.current = n;
    if (Ka && (Ka = !1, Tr = e, Zl = i), o = e.pendingLanes, o === 0 && (Dr = null), JC(n.stateNode), vt(e, Oe()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (Xl) throw Xl = !1, e = uf, uf = null, e;
    return Zl & 1 && e.tag !== 0 && uo(), o = e.pendingLanes, o & 1 ? e === cf ? Ps++ : (Ps = 0, cf = e) : Ps = 0, Gr(), null
}

function uo() {
    if (Tr !== null) {
        var e = Nx(Zl),
            t = Kt.transition,
            n = he;
        try {
            if (Kt.transition = null, he = 16 > e ? 16 : e, Tr === null) var r = !1;
            else {
                if (e = Tr, Tr = null, Zl = 0, le & 6) throw Error(z(331));
                var i = le;
                for (le |= 4, H = e.current; H !== null;) {
                    var o = H,
                        s = o.child;
                    if (H.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (H = u; H !== null;) {
                                    var c = H;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Es(8, c, o)
                                    }
                                    var d = c.child;
                                    if (d !== null) d.return = c, H = d;
                                    else
                                        for (; H !== null;) {
                                            c = H;
                                            var h = c.sibling,
                                                f = c.return;
                                            if ($1(c), c === u) {
                                                H = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = f, H = h;
                                                break
                                            }
                                            H = f
                                        }
                                }
                            }
                            var g = o.alternate;
                            if (g !== null) {
                                var m = g.child;
                                if (m !== null) {
                                    g.child = null;
                                    do {
                                        var x = m.sibling;
                                        m.sibling = null, m = x
                                    } while (m !== null)
                                }
                            }
                            H = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null) s.return = o, H = s;
                    else e: for (; H !== null;) {
                        if (o = H, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Es(9, o, o.return)
                        }
                        var p = o.sibling;
                        if (p !== null) {
                            p.return = o.return, H = p;
                            break e
                        }
                        H = o.return
                    }
                }
                var y = e.current;
                for (H = y; H !== null;) {
                    s = H;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null) v.return = s, H = v;
                    else e: for (s = y; H !== null;) {
                        if (a = H, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ru(9, a)
                            }
                        } catch (E) {
                            Ne(a, a.return, E)
                        }
                        if (a === s) {
                            H = null;
                            break e
                        }
                        var k = a.sibling;
                        if (k !== null) {
                            k.return = a.return, H = k;
                            break e
                        }
                        H = a.return
                    }
                }
                if (le = i, Gr(), Pn && typeof Pn.onPostCommitFiberRoot == "function") try {
                    Pn.onPostCommitFiberRoot(Su, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            he = n, Kt.transition = t
        }
    }
    return !1
}

function Ag(e, t, n) {
    t = Mo(n, t), t = N1(e, t, 1), e = Or(e, t, 1), t = lt(), e !== null && (ma(e, 1, t), vt(e, t))
}

function Ne(e, t, n) {
    if (e.tag === 3) Ag(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Ag(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Dr === null || !Dr.has(r))) {
                    e = Mo(n, e), e = I1(t, e, 1), t = Or(t, e, 1), e = lt(), t !== null && (ma(t, 1, e), vt(t, e));
                    break
                }
            }
            t = t.return
        }
}

function TT(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = lt(), e.pingedLanes |= e.suspendedLanes & n, $e === e && (We & n) === n && (Ve === 4 || Ve === 3 && (We & 130023424) === We && 500 > Oe() - qh ? vi(e, 0) : Gh |= n), vt(e, t)
}

function Z1(e, t) {
    t === 0 && (e.mode & 1 ? (t = ja, ja <<= 1, !(ja & 130023424) && (ja = 4194304)) : t = 1);
    var n = lt();
    e = Yn(e, t), e !== null && (ma(e, t, n), vt(e, n))
}

function PT(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Z1(e, n)
}

function AT(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(z(314))
    }
    r !== null && r.delete(t), Z1(e, n)
}
var J1;
J1 = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || gt.current) mt = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return mt = !1, mT(e, t, n);
            mt = !!(e.flags & 131072)
        }
    else mt = !1, Ce && t.flags & 1048576 && r1(t, Ul, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            ml(e, t), e = t.pendingProps;
            var i = To(t, et.current);
            lo(t, n), i = Bh(null, t, r, e, i, n);
            var o = $h();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, yt(r) ? (o = !0, Bl(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, jh(t), i.updater = Au, t.stateNode = i, i._reactInternals = t, Xd(t, r, e, n), t = ef(null, t, r, !0, o, n)) : (t.tag = 0, Ce && o && Rh(t), st(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (ml(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = MT(r), e = nn(r, e), i) {
                    case 0:
                        t = Jd(null, t, r, e, n);
                        break e;
                    case 1:
                        t = vg(null, t, r, e, n);
                        break e;
                    case 11:
                        t = gg(null, t, r, e, n);
                        break e;
                    case 14:
                        t = yg(null, t, r, nn(r.type, e), n);
                        break e
                }
                throw Error(z(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : nn(r, i), Jd(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : nn(r, i), vg(e, t, r, i, n);
        case 3:
            e: {
                if (j1(t), e === null) throw Error(z(387));r = t.pendingProps,
                o = t.memoizedState,
                i = o.element,
                u1(e, t),
                Kl(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        i = Mo(Error(z(423)), t), t = xg(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = Mo(Error(z(424)), t), t = xg(e, t, r, n, i);
                    break e
                } else
                    for (At = Ir(t.stateNode.containerInfo.firstChild), Mt = t, Ce = !0, ln = null, n = a1(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (Po(), r === i) {
                        t = Xn(e, t, n);
                        break e
                    }
                    st(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return c1(t), e === null && qd(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, Ud(r, i) ? s = null : o !== null && Ud(r, o) && (t.flags |= 32), L1(e, t), st(e, t, s, n), t.child;
        case 6:
            return e === null && qd(t), null;
        case 13:
            return _1(e, t, n);
        case 4:
            return _h(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ao(t, null, r, n) : st(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : nn(r, i), gg(e, t, r, i, n);
        case 7:
            return st(e, t, t.pendingProps, n), t.child;
        case 8:
            return st(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return st(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, ye(Hl, r._currentValue), r._currentValue = s, o !== null)
                    if (fn(o.value, s)) {
                        if (o.children === i.children && !gt.current) {
                            t = Xn(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var a = o.dependencies;
                            if (a !== null) {
                                s = o.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (o.tag === 1) {
                                            l = Wn(-1, n & -n), l.tag = 2;
                                            var u = o.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l
                                            }
                                        }
                                        o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Qd(o.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (s = o.return, s === null) throw Error(z(341));
                                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Qd(s, n, t), s = o.sibling
                            } else s = o.child;
                            if (s !== null) s.return = o;
                            else
                                for (s = o; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (o = s.sibling, o !== null) {
                                        o.return = s.return, s = o;
                                        break
                                    }
                                    s = s.return
                                }
                            o = s
                        }
                st(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, lo(t, n), i = Gt(i), r = r(i), t.flags |= 1, st(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = nn(r, t.pendingProps), i = nn(r.type, i), yg(e, t, r, i, n);
        case 15:
            return O1(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : nn(r, i), ml(e, t), t.tag = 1, yt(r) ? (e = !0, Bl(t)) : e = !1, lo(t, n), M1(t, r, i), Xd(t, r, i, n), ef(null, t, r, !0, e, n);
        case 19:
            return F1(e, t, n);
        case 22:
            return D1(e, t, n)
    }
    throw Error(z(156, t.tag))
};

function ew(e, t) {
    return Px(e, t)
}

function RT(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Wt(e, t, n, r) {
    return new RT(e, t, n, r)
}

function Zh(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function MT(e) {
    if (typeof e == "function") return Zh(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === yh) return 11;
        if (e === vh) return 14
    }
    return 2
}

function jr(e, t) {
    var n = e.alternate;
    return n === null ? (n = Wt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function vl(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function") Zh(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case $i:
            return xi(n.children, i, o, t);
        case gh:
            s = 8, i |= 8;
            break;
        case Sd:
            return e = Wt(12, n, t, i | 2), e.elementType = Sd, e.lanes = o, e;
        case bd:
            return e = Wt(13, n, t, i), e.elementType = bd, e.lanes = o, e;
        case kd:
            return e = Wt(19, n, t, i), e.elementType = kd, e.lanes = o, e;
        case cx:
            return Nu(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case lx:
                    s = 10;
                    break e;
                case ux:
                    s = 9;
                    break e;
                case yh:
                    s = 11;
                    break e;
                case vh:
                    s = 14;
                    break e;
                case gr:
                    s = 16, r = null;
                    break e
            }
            throw Error(z(130, e == null ? e : typeof e, ""))
    }
    return t = Wt(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
}

function xi(e, t, n, r) {
    return e = Wt(7, e, r, t), e.lanes = n, e
}

function Nu(e, t, n, r) {
    return e = Wt(22, e, r, t), e.elementType = cx, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Oc(e, t, n) {
    return e = Wt(6, e, null, t), e.lanes = n, e
}

function Dc(e, t, n) {
    return t = Wt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function NT(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = pc(0), this.expirationTimes = pc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pc(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function Jh(e, t, n, r, i, o, s, a, l) {
    return e = new NT(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Wt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, jh(o), e
}

function IT(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Bi,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function tw(e) {
    if (!e) return zr;
    e = e._reactInternals;
    e: {
        if (Ri(e) !== e || e.tag !== 1) throw Error(z(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (yt(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(z(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (yt(n)) return t1(e, n, t)
    }
    return t
}

function nw(e, t, n, r, i, o, s, a, l) {
    return e = Jh(n, r, !0, e, i, o, s, a, l), e.context = tw(null), n = e.current, r = lt(), i = Lr(n), o = Wn(r, i), o.callback = t ? ? null, Or(n, o, i), e.current.lanes = i, ma(e, i, r), vt(e, r), e
}

function Iu(e, t, n, r) {
    var i = t.current,
        o = lt(),
        s = Lr(i);
    return n = tw(n), t.context === null ? t.context = n : t.pendingContext = n, t = Wn(o, s), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Or(i, t, s), e !== null && (dn(e, i, s, o), fl(e, i, s)), s
}

function eu(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Rg(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function ep(e, t) {
    Rg(e, t), (e = e.alternate) && Rg(e, t)
}

function OT() {
    return null
}
var rw = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function tp(e) {
    this._internalRoot = e
}
Ou.prototype.render = tp.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(z(409));
    Iu(e, t, null, null)
};
Ou.prototype.unmount = tp.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Ei(function() {
            Iu(null, e, null, null)
        }), t[Qn] = null
    }
};

function Ou(e) {
    this._internalRoot = e
}
Ou.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Dx();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < vr.length && t !== 0 && t < vr[n].priority; n++);
        vr.splice(n, 0, e), n === 0 && jx(e)
    }
};

function np(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Du(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Mg() {}

function DT(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = eu(s);
                o.call(u)
            }
        }
        var s = nw(t, r, e, 0, null, !1, !1, "", Mg);
        return e._reactRootContainer = s, e[Qn] = s.current, Hs(e.nodeType === 8 ? e.parentNode : e), Ei(), s
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = eu(l);
            a.call(u)
        }
    }
    var l = Jh(e, 0, !1, null, null, !1, !1, "", Mg);
    return e._reactRootContainer = l, e[Qn] = l.current, Hs(e.nodeType === 8 ? e.parentNode : e), Ei(function() {
        Iu(t, l, n, r)
    }), l
}

function Lu(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = eu(s);
                a.call(l)
            }
        }
        Iu(t, s, e, i)
    } else s = DT(n, t, e, i, r);
    return eu(s)
}
Ix = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = ps(t.pendingLanes);
                n !== 0 && (Sh(t, n | 1), vt(t, Oe()), !(le & 6) && (No = Oe() + 500, Gr()))
            }
            break;
        case 13:
            Ei(function() {
                var r = Yn(e, 1);
                if (r !== null) {
                    var i = lt();
                    dn(r, e, 1, i)
                }
            }), ep(e, 1)
    }
};
bh = function(e) {
    if (e.tag === 13) {
        var t = Yn(e, 134217728);
        if (t !== null) {
            var n = lt();
            dn(t, e, 134217728, n)
        }
        ep(e, 134217728)
    }
};
Ox = function(e) {
    if (e.tag === 13) {
        var t = Lr(e),
            n = Yn(e, t);
        if (n !== null) {
            var r = lt();
            dn(n, e, t, r)
        }
        ep(e, t)
    }
};
Dx = function() {
    return he
};
Lx = function(e, t) {
    var n = he;
    try {
        return he = e, t()
    } finally {
        he = n
    }
};
Od = function(e, t, n) {
    switch (t) {
        case "input":
            if (Td(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Eu(r);
                        if (!i) throw Error(z(90));
                        fx(r), Td(r, i)
                    }
                }
            }
            break;
        case "textarea":
            px(e, n);
            break;
        case "select":
            t = n.value, t != null && io(e, !!n.multiple, t, !1)
    }
};
Sx = Qh;
bx = Ei;
var LT = {
        usingClientEntryPoint: !1,
        Events: [ya, Ki, Eu, xx, wx, Qh]
    },
    is = {
        findFiberByHostInstance: ai,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    jT = {
        bundleType: is.bundleType,
        version: is.version,
        rendererPackageName: is.rendererPackageName,
        rendererConfig: is.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: nr.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Ex(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: is.findFiberByHostInstance || OT,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ga = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ga.isDisabled && Ga.supportsFiber) try {
        Su = Ga.inject(jT), Pn = Ga
    } catch {}
}
Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = LT;
Lt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!np(t)) throw Error(z(200));
    return IT(e, t, null, n)
};
Lt.createRoot = function(e, t) {
    if (!np(e)) throw Error(z(299));
    var n = !1,
        r = "",
        i = rw;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Jh(e, 1, !1, null, null, n, !1, r, i), e[Qn] = t.current, Hs(e.nodeType === 8 ? e.parentNode : e), new tp(t)
};
Lt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(z(188)) : (e = Object.keys(e).join(","), Error(z(268, e)));
    return e = Ex(t), e = e === null ? null : e.stateNode, e
};
Lt.flushSync = function(e) {
    return Ei(e)
};
Lt.hydrate = function(e, t, n) {
    if (!Du(t)) throw Error(z(200));
    return Lu(null, e, t, !0, n)
};
Lt.hydrateRoot = function(e, t, n) {
    if (!np(e)) throw Error(z(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        o = "",
        s = rw;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = nw(t, null, e, 1, n ? ? null, i, !1, o, s), e[Qn] = t.current, Hs(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Ou(t)
};
Lt.render = function(e, t, n) {
    if (!Du(t)) throw Error(z(200));
    return Lu(null, e, t, !1, n)
};
Lt.unmountComponentAtNode = function(e) {
    if (!Du(e)) throw Error(z(40));
    return e._reactRootContainer ? (Ei(function() {
        Lu(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Qn] = null
        })
    }), !0) : !1
};
Lt.unstable_batchedUpdates = Qh;
Lt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Du(n)) throw Error(z(200));
    if (e == null || e._reactInternals === void 0) throw Error(z(38));
    return Lu(e, t, n, !1, r)
};
Lt.version = "18.3.1-next-f1338f8080-20240426";

function iw() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iw)
    } catch (e) {
        console.error(e)
    }
}
iw(), ix.exports = Lt;
var xa = ix.exports;
const ow = Pi(xa);
var sw, Ng = xa;
sw = Ng.createRoot, Ng.hydrateRoot;
const _T = "modulepreload",
    FT = function(e) {
        return "/" + e
    },
    Ig = {},
    Vo = function(t, n, r) {
        let i = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const s = document.querySelector("meta[property=csp-nonce]"),
                a = (s == null ? void 0 : s.nonce) || (s == null ? void 0 : s.getAttribute("nonce"));
            i = Promise.allSettled(n.map(l => {
                if (l = FT(l), l in Ig) return;
                Ig[l] = !0;
                const u = l.endsWith(".css"),
                    c = u ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${l}"]${c}`)) return;
                const d = document.createElement("link");
                if (d.rel = u ? "stylesheet" : _T, u || (d.as = "script"), d.crossOrigin = "", d.href = l, a && d.setAttribute("nonce", a), document.head.appendChild(d), u) return new Promise((h, f) => {
                    d.addEventListener("load", h), d.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${l}`)))
                })
            }))
        }

        function o(s) {
            const a = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (a.payload = s, window.dispatchEvent(a), !a.defaultPrevented) throw s
        }
        return i.then(s => {
            for (const a of s || []) a.status === "rejected" && o(a.reason);
            return t().catch(o)
        })
    };
var ju = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    _u = typeof window > "u" || "Deno" in globalThis;

function rn() {}

function zT(e, t) {
    return typeof e == "function" ? e(t) : e
}

function VT(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function BT(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function hf(e, t) {
    return typeof e == "function" ? e(t) : e
}

function $T(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Og(e, t) {
    const {
        type: n = "all",
        exact: r,
        fetchStatus: i,
        predicate: o,
        queryKey: s,
        stale: a
    } = e;
    if (s) {
        if (r) {
            if (t.queryHash !== rp(s, t.options)) return !1
        } else if (!ea(t.queryKey, s)) return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l) return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || i && i !== t.state.fetchStatus || o && !o(t))
}

function Dg(e, t) {
    const {
        exact: n,
        status: r,
        predicate: i,
        mutationKey: o
    } = e;
    if (o) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (Js(t.options.mutationKey) !== Js(o)) return !1
        } else if (!ea(t.options.mutationKey, o)) return !1
    }
    return !(r && t.state.status !== r || i && !i(t))
}

function rp(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Js)(e)
}

function Js(e) {
    return JSON.stringify(e, (t, n) => pf(n) ? Object.keys(n).sort().reduce((r, i) => (r[i] = n[i], r), {}) : n)
}

function ea(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => ea(e[n], t[n])) : !1
}

function aw(e, t) {
    if (e === t) return e;
    const n = Lg(e) && Lg(t);
    if (n || pf(e) && pf(t)) {
        const r = n ? e : Object.keys(e),
            i = r.length,
            o = n ? t : Object.keys(t),
            s = o.length,
            a = n ? [] : {},
            l = new Set(r);
        let u = 0;
        for (let c = 0; c < s; c++) {
            const d = n ? c : o[c];
            (!n && l.has(d) || n) && e[d] === void 0 && t[d] === void 0 ? (a[d] = void 0, u++) : (a[d] = aw(e[d], t[d]), a[d] === e[d] && e[d] !== void 0 && u++)
        }
        return i === s && u === i ? e : a
    }
    return t
}

function Lg(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function pf(e) {
    if (!jg(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!jg(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function jg(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function UT(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function HT(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? aw(e, t) : t
}

function WT(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}

function KT(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var ip = Symbol();

function lw(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === ip ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var di, wr, yo, z0, GT = (z0 = class extends ju {
        constructor() {
            super();
            ce(this, di);
            ce(this, wr);
            ce(this, yo);
            ee(this, yo, t => {
                if (!_u && window.addEventListener) {
                    const n = () => t();
                    return window.addEventListener("visibilitychange", n, !1), () => {
                        window.removeEventListener("visibilitychange", n)
                    }
                }
            })
        }
        onSubscribe() {
            L(this, wr) || this.setEventListener(L(this, yo))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = L(this, wr)) == null || t.call(this), ee(this, wr, void 0))
        }
        setEventListener(t) {
            var n;
            ee(this, yo, t), (n = L(this, wr)) == null || n.call(this), ee(this, wr, t(r => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
            }))
        }
        setFocused(t) {
            L(this, di) !== t && (ee(this, di, t), this.onFocus())
        }
        onFocus() {
            const t = this.isFocused();
            this.listeners.forEach(n => {
                n(t)
            })
        }
        isFocused() {
            var t;
            return typeof L(this, di) == "boolean" ? L(this, di) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
        }
    }, di = new WeakMap, wr = new WeakMap, yo = new WeakMap, z0),
    uw = new GT,
    vo, Sr, xo, V0, qT = (V0 = class extends ju {
        constructor() {
            super();
            ce(this, vo, !0);
            ce(this, Sr);
            ce(this, xo);
            ee(this, xo, t => {
                if (!_u && window.addEventListener) {
                    const n = () => t(!0),
                        r = () => t(!1);
                    return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", r)
                    }
                }
            })
        }
        onSubscribe() {
            L(this, Sr) || this.setEventListener(L(this, xo))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = L(this, Sr)) == null || t.call(this), ee(this, Sr, void 0))
        }
        setEventListener(t) {
            var n;
            ee(this, xo, t), (n = L(this, Sr)) == null || n.call(this), ee(this, Sr, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            L(this, vo) !== t && (ee(this, vo, t), this.listeners.forEach(r => {
                r(t)
            }))
        }
        isOnline() {
            return L(this, vo)
        }
    }, vo = new WeakMap, Sr = new WeakMap, xo = new WeakMap, V0),
    tu = new qT;

function QT() {
    let e, t;
    const n = new Promise((i, o) => {
        e = i, t = o
    });
    n.status = "pending", n.catch(() => {});

    function r(i) {
        Object.assign(n, i), delete n.resolve, delete n.reject
    }
    return n.resolve = i => {
        r({
            status: "fulfilled",
            value: i
        }), e(i)
    }, n.reject = i => {
        r({
            status: "rejected",
            reason: i
        }), t(i)
    }, n
}

function YT(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function cw(e) {
    return (e ? ? "online") === "online" ? tu.isOnline() : !0
}
var dw = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
    }
};

function Lc(e) {
    return e instanceof dw
}

function fw(e) {
    let t = !1,
        n = 0,
        r = !1,
        i;
    const o = QT(),
        s = m => {
            var x;
            r || (h(new dw(m)), (x = e.abort) == null || x.call(e))
        },
        a = () => {
            t = !0
        },
        l = () => {
            t = !1
        },
        u = () => uw.isFocused() && (e.networkMode === "always" || tu.isOnline()) && e.canRun(),
        c = () => cw(e.networkMode) && e.canRun(),
        d = m => {
            var x;
            r || (r = !0, (x = e.onSuccess) == null || x.call(e, m), i == null || i(), o.resolve(m))
        },
        h = m => {
            var x;
            r || (r = !0, (x = e.onError) == null || x.call(e, m), i == null || i(), o.reject(m))
        },
        f = () => new Promise(m => {
            var x;
            i = p => {
                (r || u()) && m(p)
            }, (x = e.onPause) == null || x.call(e)
        }).then(() => {
            var m;
            i = void 0, r || (m = e.onContinue) == null || m.call(e)
        }),
        g = () => {
            if (r) return;
            let m;
            const x = n === 0 ? e.initialPromise : void 0;
            try {
                m = x ? ? e.fn()
            } catch (p) {
                m = Promise.reject(p)
            }
            Promise.resolve(m).then(d).catch(p => {
                var C;
                if (r) return;
                const y = e.retry ? ? (_u ? 0 : 3),
                    v = e.retryDelay ? ? YT,
                    k = typeof v == "function" ? v(n, p) : v,
                    E = y === !0 || typeof y == "number" && n < y || typeof y == "function" && y(n, p);
                if (t || !E) {
                    h(p);
                    return
                }
                n++, (C = e.onFail) == null || C.call(e, n, p), UT(k).then(() => u() ? void 0 : f()).then(() => {
                    t ? h(p) : g()
                })
            })
        };
    return {
        promise: o,
        cancel: s,
        continue: () => (i == null || i(), o),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? g() : f().then(g), o)
    }
}
var XT = e => setTimeout(e, 0);

function ZT() {
    let e = [],
        t = 0,
        n = a => {
            a()
        },
        r = a => {
            a()
        },
        i = XT;
    const o = a => {
            t ? e.push(a) : i(() => {
                n(a)
            })
        },
        s = () => {
            const a = e;
            e = [], a.length && i(() => {
                r(() => {
                    a.forEach(l => {
                        n(l)
                    })
                })
            })
        };
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--, t || s()
            }
            return l
        },
        batchCalls: a => (...l) => {
            o(() => {
                a(...l)
            })
        },
        schedule: o,
        setNotifyFunction: a => {
            n = a
        },
        setBatchNotifyFunction: a => {
            r = a
        },
        setScheduler: a => {
            i = a
        }
    }
}
var at = ZT(),
    fi, B0, hw = (B0 = class {
        constructor() {
            ce(this, fi)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), VT(this.gcTime) && ee(this, fi, setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ? ? (_u ? 1 / 0 : 5 * 60 * 1e3))
        }
        clearGcTimeout() {
            L(this, fi) && (clearTimeout(L(this, fi)), ee(this, fi, void 0))
        }
    }, fi = new WeakMap, B0),
    wo, hi, Bt, pi, Ye, fa, mi, on, zn, $0, JT = ($0 = class extends hw {
        constructor(t) {
            super();
            ce(this, on);
            ce(this, wo);
            ce(this, hi);
            ce(this, Bt);
            ce(this, pi);
            ce(this, Ye);
            ce(this, fa);
            ce(this, mi);
            ee(this, mi, !1), ee(this, fa, t.defaultOptions), this.setOptions(t.options), this.observers = [], ee(this, pi, t.client), ee(this, Bt, L(this, pi).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, ee(this, wo, tP(this.options)), this.state = t.state ? ? L(this, wo), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var t;
            return (t = L(this, Ye)) == null ? void 0 : t.promise
        }
        setOptions(t) {
            this.options = { ...L(this, fa),
                ...t
            }, this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && L(this, Bt).remove(this)
        }
        setData(t, n) {
            const r = HT(this.state.data, t, this.options);
            return Ge(this, on, zn).call(this, {
                data: r,
                type: "success",
                dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                manual: n == null ? void 0 : n.manual
            }), r
        }
        setState(t, n) {
            Ge(this, on, zn).call(this, {
                type: "setState",
                state: t,
                setStateOptions: n
            })
        }
        cancel(t) {
            var r, i;
            const n = (r = L(this, Ye)) == null ? void 0 : r.promise;
            return (i = L(this, Ye)) == null || i.cancel(t), n ? n.then(rn).catch(rn) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(L(this, wo))
        }
        isActive() {
            return this.observers.some(t => $T(t.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === ip || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some(t => hf(t.options.staleTime, this) === "static") : !1
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
        }
        isStaleByTime(t = 0) {
            return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !BT(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = L(this, Ye)) == null || n.continue()
        }
        onOnline() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnReconnect());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = L(this, Ye)) == null || n.continue()
        }
        addObserver(t) {
            this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), L(this, Bt).notify({
                type: "observerAdded",
                query: this,
                observer: t
            }))
        }
        removeObserver(t) {
            this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (L(this, Ye) && (L(this, mi) ? L(this, Ye).cancel({
                revert: !0
            }) : L(this, Ye).cancelRetry()), this.scheduleGc()), L(this, Bt).notify({
                type: "observerRemoved",
                query: this,
                observer: t
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || Ge(this, on, zn).call(this, {
                type: "invalidate"
            })
        }
        fetch(t, n) {
            var u, c, d;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (L(this, Ye)) return L(this, Ye).continueRetry(), L(this, Ye).promise
            }
            if (t && this.setOptions(t), !this.options.queryFn) {
                const h = this.observers.find(f => f.options.queryFn);
                h && this.setOptions(h.options)
            }
            const r = new AbortController,
                i = h => {
                    Object.defineProperty(h, "signal", {
                        enumerable: !0,
                        get: () => (ee(this, mi, !0), r.signal)
                    })
                },
                o = () => {
                    const h = lw(this.options, n),
                        g = (() => {
                            const m = {
                                client: L(this, pi),
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                            return i(m), m
                        })();
                    return ee(this, mi, !1), this.options.persister ? this.options.persister(h, g, this) : h(g)
                },
                a = (() => {
                    const h = {
                        fetchOptions: n,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: L(this, pi),
                        state: this.state,
                        fetchFn: o
                    };
                    return i(h), h
                })();
            (u = this.options.behavior) == null || u.onFetch(a, this), ee(this, hi, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = a.fetchOptions) == null ? void 0 : c.meta)) && Ge(this, on, zn).call(this, {
                type: "fetch",
                meta: (d = a.fetchOptions) == null ? void 0 : d.meta
            });
            const l = h => {
                var f, g, m, x;
                Lc(h) && h.silent || Ge(this, on, zn).call(this, {
                    type: "error",
                    error: h
                }), Lc(h) || ((g = (f = L(this, Bt).config).onError) == null || g.call(f, h, this), (x = (m = L(this, Bt).config).onSettled) == null || x.call(m, this.state.data, h, this)), this.scheduleGc()
            };
            return ee(this, Ye, fw({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: a.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: h => {
                    var f, g, m, x;
                    if (h === void 0) {
                        l(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    try {
                        this.setData(h)
                    } catch (p) {
                        l(p);
                        return
                    }(g = (f = L(this, Bt).config).onSuccess) == null || g.call(f, h, this), (x = (m = L(this, Bt).config).onSettled) == null || x.call(m, h, this.state.error, this), this.scheduleGc()
                },
                onError: l,
                onFail: (h, f) => {
                    Ge(this, on, zn).call(this, {
                        type: "failed",
                        failureCount: h,
                        error: f
                    })
                },
                onPause: () => {
                    Ge(this, on, zn).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    Ge(this, on, zn).call(this, {
                        type: "continue"
                    })
                },
                retry: a.options.retry,
                retryDelay: a.options.retryDelay,
                networkMode: a.options.networkMode,
                canRun: () => !0
            })), L(this, Ye).start()
        }
    }, wo = new WeakMap, hi = new WeakMap, Bt = new WeakMap, pi = new WeakMap, Ye = new WeakMap, fa = new WeakMap, mi = new WeakMap, on = new WeakSet, zn = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        fetchFailureCount: t.failureCount,
                        fetchFailureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...r,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...r,
                        ...eP(r.data, this.options),
                        fetchMeta: t.meta ? ? null
                    };
                case "success":
                    return ee(this, hi, void 0), { ...r,
                        data: t.data,
                        dataUpdateCount: r.dataUpdateCount + 1,
                        dataUpdatedAt: t.dataUpdatedAt ? ? Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success",
                        ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    const i = t.error;
                    return Lc(i) && i.revert && L(this, hi) ? { ...L(this, hi),
                        fetchStatus: "idle"
                    } : { ...r,
                        error: i,
                        errorUpdateCount: r.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: r.fetchFailureCount + 1,
                        fetchFailureReason: i,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...r,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...r,
                        ...t.state
                    }
            }
        };
        this.state = n(this.state), at.batch(() => {
            this.observers.forEach(r => {
                r.onQueryUpdate()
            }), L(this, Bt).notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }, $0);

function eP(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: cw(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function tP(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ? ? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Sn, U0, nP = (U0 = class extends ju {
        constructor(t = {}) {
            super();
            ce(this, Sn);
            this.config = t, ee(this, Sn, new Map)
        }
        build(t, n, r) {
            const i = n.queryKey,
                o = n.queryHash ? ? rp(i, n);
            let s = this.get(o);
            return s || (s = new JT({
                client: t,
                queryKey: i,
                queryHash: o,
                options: t.defaultQueryOptions(n),
                state: r,
                defaultOptions: t.getQueryDefaults(i)
            }), this.add(s)), s
        }
        add(t) {
            L(this, Sn).has(t.queryHash) || (L(this, Sn).set(t.queryHash, t), this.notify({
                type: "added",
                query: t
            }))
        }
        remove(t) {
            const n = L(this, Sn).get(t.queryHash);
            n && (t.destroy(), n === t && L(this, Sn).delete(t.queryHash), this.notify({
                type: "removed",
                query: t
            }))
        }
        clear() {
            at.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        get(t) {
            return L(this, Sn).get(t)
        }
        getAll() {
            return [...L(this, Sn).values()]
        }
        find(t) {
            const n = {
                exact: !0,
                ...t
            };
            return this.getAll().find(r => Og(n, r))
        }
        findAll(t = {}) {
            const n = this.getAll();
            return Object.keys(t).length > 0 ? n.filter(r => Og(t, r)) : n
        }
        notify(t) {
            at.batch(() => {
                this.listeners.forEach(n => {
                    n(t)
                })
            })
        }
        onFocus() {
            at.batch(() => {
                this.getAll().forEach(t => {
                    t.onFocus()
                })
            })
        }
        onOnline() {
            at.batch(() => {
                this.getAll().forEach(t => {
                    t.onOnline()
                })
            })
        }
    }, Sn = new WeakMap, U0),
    bn, ot, gi, kn, hr, H0, rP = (H0 = class extends hw {
        constructor(t) {
            super();
            ce(this, kn);
            ce(this, bn);
            ce(this, ot);
            ce(this, gi);
            this.mutationId = t.mutationId, ee(this, ot, t.mutationCache), ee(this, bn, []), this.state = t.state || iP(), this.setOptions(t.options), this.scheduleGc()
        }
        setOptions(t) {
            this.options = t, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            L(this, bn).includes(t) || (L(this, bn).push(t), this.clearGcTimeout(), L(this, ot).notify({
                type: "observerAdded",
                mutation: this,
                observer: t
            }))
        }
        removeObserver(t) {
            ee(this, bn, L(this, bn).filter(n => n !== t)), this.scheduleGc(), L(this, ot).notify({
                type: "observerRemoved",
                mutation: this,
                observer: t
            })
        }
        optionalRemove() {
            L(this, bn).length || (this.state.status === "pending" ? this.scheduleGc() : L(this, ot).remove(this))
        }
        continue () {
            var t;
            return ((t = L(this, gi)) == null ? void 0 : t.continue()) ? ? this.execute(this.state.variables)
        }
        async execute(t) {
            var o, s, a, l, u, c, d, h, f, g, m, x, p, y, v, k, E, C, P, A;
            const n = () => {
                Ge(this, kn, hr).call(this, {
                    type: "continue"
                })
            };
            ee(this, gi, fw({
                fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
                onFail: (N, D) => {
                    Ge(this, kn, hr).call(this, {
                        type: "failed",
                        failureCount: N,
                        error: D
                    })
                },
                onPause: () => {
                    Ge(this, kn, hr).call(this, {
                        type: "pause"
                    })
                },
                onContinue: n,
                retry: this.options.retry ? ? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => L(this, ot).canRun(this)
            }));
            const r = this.state.status === "pending",
                i = !L(this, gi).canStart();
            try {
                if (r) n();
                else {
                    Ge(this, kn, hr).call(this, {
                        type: "pending",
                        variables: t,
                        isPaused: i
                    }), await ((s = (o = L(this, ot).config).onMutate) == null ? void 0 : s.call(o, t, this));
                    const D = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                    D !== this.state.context && Ge(this, kn, hr).call(this, {
                        type: "pending",
                        context: D,
                        variables: t,
                        isPaused: i
                    })
                }
                const N = await L(this, gi).start();
                return await ((c = (u = L(this, ot).config).onSuccess) == null ? void 0 : c.call(u, N, t, this.state.context, this)), await ((h = (d = this.options).onSuccess) == null ? void 0 : h.call(d, N, t, this.state.context)), await ((g = (f = L(this, ot).config).onSettled) == null ? void 0 : g.call(f, N, null, this.state.variables, this.state.context, this)), await ((x = (m = this.options).onSettled) == null ? void 0 : x.call(m, N, null, t, this.state.context)), Ge(this, kn, hr).call(this, {
                    type: "success",
                    data: N
                }), N
            } catch (N) {
                try {
                    throw await ((y = (p = L(this, ot).config).onError) == null ? void 0 : y.call(p, N, t, this.state.context, this)), await ((k = (v = this.options).onError) == null ? void 0 : k.call(v, N, t, this.state.context)), await ((C = (E = L(this, ot).config).onSettled) == null ? void 0 : C.call(E, void 0, N, this.state.variables, this.state.context, this)), await ((A = (P = this.options).onSettled) == null ? void 0 : A.call(P, void 0, N, t, this.state.context)), N
                } finally {
                    Ge(this, kn, hr).call(this, {
                        type: "error",
                        error: N
                    })
                }
            } finally {
                L(this, ot).runNext(this)
            }
        }
    }, bn = new WeakMap, ot = new WeakMap, gi = new WeakMap, kn = new WeakSet, hr = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        failureCount: t.failureCount,
                        failureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        isPaused: !0
                    };
                case "continue":
                    return { ...r,
                        isPaused: !1
                    };
                case "pending":
                    return { ...r,
                        context: t.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: t.isPaused,
                        status: "pending",
                        variables: t.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return { ...r,
                        data: t.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...r,
                        data: void 0,
                        error: t.error,
                        failureCount: r.failureCount + 1,
                        failureReason: t.error,
                        isPaused: !1,
                        status: "error"
                    }
            }
        };
        this.state = n(this.state), at.batch(() => {
            L(this, bn).forEach(r => {
                r.onMutationUpdate(t)
            }), L(this, ot).notify({
                mutation: this,
                type: "updated",
                action: t
            })
        })
    }, H0);

function iP() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var $n, sn, ha, W0, oP = (W0 = class extends ju {
    constructor(t = {}) {
        super();
        ce(this, $n);
        ce(this, sn);
        ce(this, ha);
        this.config = t, ee(this, $n, new Set), ee(this, sn, new Map), ee(this, ha, 0)
    }
    build(t, n, r) {
        const i = new rP({
            mutationCache: this,
            mutationId: ++Ma(this, ha)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(i), i
    }
    add(t) {
        L(this, $n).add(t);
        const n = qa(t);
        if (typeof n == "string") {
            const r = L(this, sn).get(n);
            r ? r.push(t) : L(this, sn).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (L(this, $n).delete(t)) {
            const n = qa(t);
            if (typeof n == "string") {
                const r = L(this, sn).get(n);
                if (r)
                    if (r.length > 1) {
                        const i = r.indexOf(t);
                        i !== -1 && r.splice(i, 1)
                    } else r[0] === t && L(this, sn).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = qa(t);
        if (typeof n == "string") {
            const r = L(this, sn).get(n),
                i = r == null ? void 0 : r.find(o => o.state.status === "pending");
            return !i || i === t
        } else return !0
    }
    runNext(t) {
        var r;
        const n = qa(t);
        if (typeof n == "string") {
            const i = (r = L(this, sn).get(n)) == null ? void 0 : r.find(o => o !== t && o.state.isPaused);
            return (i == null ? void 0 : i.continue()) ? ? Promise.resolve()
        } else return Promise.resolve()
    }
    clear() {
        at.batch(() => {
            L(this, $n).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }), L(this, $n).clear(), L(this, sn).clear()
        })
    }
    getAll() {
        return Array.from(L(this, $n))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Dg(n, r))
    }
    findAll(t = {}) {
        return this.getAll().filter(n => Dg(t, n))
    }
    notify(t) {
        at.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            })
        })
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return at.batch(() => Promise.all(t.map(n => n.continue().catch(rn))))
    }
}, $n = new WeakMap, sn = new WeakMap, ha = new WeakMap, W0);

function qa(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}

function _g(e) {
    return {
        onFetch: (t, n) => {
            var c, d, h, f, g;
            const r = t.options,
                i = (h = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : h.direction,
                o = ((f = t.state.data) == null ? void 0 : f.pages) || [],
                s = ((g = t.state.data) == null ? void 0 : g.pageParams) || [];
            let a = {
                    pages: [],
                    pageParams: []
                },
                l = 0;
            const u = async () => {
                let m = !1;
                const x = v => {
                        Object.defineProperty(v, "signal", {
                            enumerable: !0,
                            get: () => (t.signal.aborted ? m = !0 : t.signal.addEventListener("abort", () => {
                                m = !0
                            }), t.signal)
                        })
                    },
                    p = lw(t.options, t.fetchOptions),
                    y = async (v, k, E) => {
                        if (m) return Promise.reject();
                        if (k == null && v.pages.length) return Promise.resolve(v);
                        const P = (() => {
                                const _ = {
                                    client: t.client,
                                    queryKey: t.queryKey,
                                    pageParam: k,
                                    direction: E ? "backward" : "forward",
                                    meta: t.options.meta
                                };
                                return x(_), _
                            })(),
                            A = await p(P),
                            {
                                maxPages: N
                            } = t.options,
                            D = E ? KT : WT;
                        return {
                            pages: D(v.pages, A, N),
                            pageParams: D(v.pageParams, k, N)
                        }
                    };
                if (i && o.length) {
                    const v = i === "backward",
                        k = v ? sP : Fg,
                        E = {
                            pages: o,
                            pageParams: s
                        },
                        C = k(r, E);
                    a = await y(E, C, v)
                } else {
                    const v = e ? ? o.length;
                    do {
                        const k = l === 0 ? s[0] ? ? r.initialPageParam : Fg(r, a);
                        if (l > 0 && k == null) break;
                        a = await y(a, k), l++
                    } while (l < v)
                }
                return a
            };
            t.options.persister ? t.fetchFn = () => {
                var m, x;
                return (x = (m = t.options).persister) == null ? void 0 : x.call(m, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            } : t.fetchFn = u
        }
    }
}

function Fg(e, {
    pages: t,
    pageParams: n
}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}

function sP(e, {
    pages: t,
    pageParams: n
}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var Re, br, kr, So, bo, Cr, ko, Co, K0, aP = (K0 = class {
        constructor(e = {}) {
            ce(this, Re);
            ce(this, br);
            ce(this, kr);
            ce(this, So);
            ce(this, bo);
            ce(this, Cr);
            ce(this, ko);
            ce(this, Co);
            ee(this, Re, e.queryCache || new nP), ee(this, br, e.mutationCache || new oP), ee(this, kr, e.defaultOptions || {}), ee(this, So, new Map), ee(this, bo, new Map), ee(this, Cr, 0)
        }
        mount() {
            Ma(this, Cr)._++, L(this, Cr) === 1 && (ee(this, ko, uw.subscribe(async e => {
                e && (await this.resumePausedMutations(), L(this, Re).onFocus())
            })), ee(this, Co, tu.subscribe(async e => {
                e && (await this.resumePausedMutations(), L(this, Re).onOnline())
            })))
        }
        unmount() {
            var e, t;
            Ma(this, Cr)._--, L(this, Cr) === 0 && ((e = L(this, ko)) == null || e.call(this), ee(this, ko, void 0), (t = L(this, Co)) == null || t.call(this), ee(this, Co, void 0))
        }
        isFetching(e) {
            return L(this, Re).findAll({ ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return L(this, br).findAll({ ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = L(this, Re).get(t.queryHash)) == null ? void 0 : n.state.data
        }
        ensureQueryData(e) {
            const t = this.defaultQueryOptions(e),
                n = L(this, Re).build(this, t),
                r = n.state.data;
            return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(hf(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r))
        }
        getQueriesData(e) {
            return L(this, Re).findAll(e).map(({
                queryKey: t,
                state: n
            }) => {
                const r = n.data;
                return [t, r]
            })
        }
        setQueryData(e, t, n) {
            const r = this.defaultQueryOptions({
                    queryKey: e
                }),
                i = L(this, Re).get(r.queryHash),
                o = i == null ? void 0 : i.state.data,
                s = zT(t, o);
            if (s !== void 0) return L(this, Re).build(this, r).setData(s, { ...n,
                manual: !0
            })
        }
        setQueriesData(e, t, n) {
            return at.batch(() => L(this, Re).findAll(e).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, t, n)]))
        }
        getQueryState(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = L(this, Re).get(t.queryHash)) == null ? void 0 : n.state
        }
        removeQueries(e) {
            const t = L(this, Re);
            at.batch(() => {
                t.findAll(e).forEach(n => {
                    t.remove(n)
                })
            })
        }
        resetQueries(e, t) {
            const n = L(this, Re);
            return at.batch(() => (n.findAll(e).forEach(r => {
                r.reset()
            }), this.refetchQueries({
                type: "active",
                ...e
            }, t)))
        }
        cancelQueries(e, t = {}) {
            const n = {
                    revert: !0,
                    ...t
                },
                r = at.batch(() => L(this, Re).findAll(e).map(i => i.cancel(n)));
            return Promise.all(r).then(rn).catch(rn)
        }
        invalidateQueries(e, t = {}) {
            return at.batch(() => (L(this, Re).findAll(e).forEach(n => {
                n.invalidate()
            }), (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({ ...e,
                type: (e == null ? void 0 : e.refetchType) ? ? (e == null ? void 0 : e.type) ? ? "active"
            }, t)))
        }
        refetchQueries(e, t = {}) {
            const n = { ...t,
                    cancelRefetch: t.cancelRefetch ? ? !0
                },
                r = at.batch(() => L(this, Re).findAll(e).filter(i => !i.isDisabled() && !i.isStatic()).map(i => {
                    let o = i.fetch(void 0, n);
                    return n.throwOnError || (o = o.catch(rn)), i.state.fetchStatus === "paused" ? Promise.resolve() : o
                }));
            return Promise.all(r).then(rn)
        }
        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const n = L(this, Re).build(this, t);
            return n.isStaleByTime(hf(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(rn).catch(rn)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = _g(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(rn).catch(rn)
        }
        ensureInfiniteQueryData(e) {
            return e.behavior = _g(e.pages), this.ensureQueryData(e)
        }
        resumePausedMutations() {
            return tu.isOnline() ? L(this, br).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return L(this, Re)
        }
        getMutationCache() {
            return L(this, br)
        }
        getDefaultOptions() {
            return L(this, kr)
        }
        setDefaultOptions(e) {
            ee(this, kr, e)
        }
        setQueryDefaults(e, t) {
            L(this, So).set(Js(e), {
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            const t = [...L(this, So).values()],
                n = {};
            return t.forEach(r => {
                ea(e, r.queryKey) && Object.assign(n, r.defaultOptions)
            }), n
        }
        setMutationDefaults(e, t) {
            L(this, bo).set(Js(e), {
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            const t = [...L(this, bo).values()],
                n = {};
            return t.forEach(r => {
                ea(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
            }), n
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = { ...L(this, kr).queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash || (t.queryHash = rp(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === ip && (t.enabled = !1), t
        }
        defaultMutationOptions(e) {
            return e != null && e._defaulted ? e : { ...L(this, kr).mutations,
                ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted: !0
            }
        }
        clear() {
            L(this, Re).clear(), L(this, br).clear()
        }
    }, Re = new WeakMap, br = new WeakMap, kr = new WeakMap, So = new WeakMap, bo = new WeakMap, Cr = new WeakMap, ko = new WeakMap, Co = new WeakMap, K0),
    lP = w.createContext(void 0),
    uP = ({
        client: e,
        children: t
    }) => (w.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), S.jsx(lP.Provider, {
        value: e,
        children: t
    }));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ta() {
    return ta = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ta.apply(this, arguments)
}
var Pr;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Pr || (Pr = {}));
const zg = "popstate";

function cP(e) {
    e === void 0 && (e = {});

    function t(r, i) {
        let {
            pathname: o,
            search: s,
            hash: a
        } = r.location;
        return mf("", {
            pathname: o,
            search: s,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }

    function n(r, i) {
        return typeof i == "string" ? i : nu(i)
    }
    return fP(t, n, null, e)
}

function _e(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function pw(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function dP() {
    return Math.random().toString(36).substr(2, 8)
}

function Vg(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function mf(e, t, n, r) {
    return n === void 0 && (n = null), ta({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Bo(t) : t, {
        state: n,
        key: t && t.key || r || dP()
    })
}

function nu(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function Bo(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function fP(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: i = document.defaultView,
        v5Compat: o = !1
    } = r, s = i.history, a = Pr.Pop, l = null, u = c();
    u == null && (u = 0, s.replaceState(ta({}, s.state, {
        idx: u
    }), ""));

    function c() {
        return (s.state || {
            idx: null
        }).idx
    }

    function d() {
        a = Pr.Pop;
        let x = c(),
            p = x == null ? null : x - u;
        u = x, l && l({
            action: a,
            location: m.location,
            delta: p
        })
    }

    function h(x, p) {
        a = Pr.Push;
        let y = mf(m.location, x, p);
        u = c() + 1;
        let v = Vg(y, u),
            k = m.createHref(y);
        try {
            s.pushState(v, "", k)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError") throw E;
            i.location.assign(k)
        }
        o && l && l({
            action: a,
            location: m.location,
            delta: 1
        })
    }

    function f(x, p) {
        a = Pr.Replace;
        let y = mf(m.location, x, p);
        u = c();
        let v = Vg(y, u),
            k = m.createHref(y);
        s.replaceState(v, "", k), o && l && l({
            action: a,
            location: m.location,
            delta: 0
        })
    }

    function g(x) {
        let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
            y = typeof x == "string" ? x : nu(x);
        return y = y.replace(/ $/, "%20"), _e(p, "No window.location.(origin|href) available to create URL for href: " + y), new URL(y, p)
    }
    let m = {
        get action() {
            return a
        },
        get location() {
            return e(i, s)
        },
        listen(x) {
            if (l) throw new Error("A history only accepts one active listener");
            return i.addEventListener(zg, d), l = x, () => {
                i.removeEventListener(zg, d), l = null
            }
        },
        createHref(x) {
            return t(i, x)
        },
        createURL: g,
        encodeLocation(x) {
            let p = g(x);
            return {
                pathname: p.pathname,
                search: p.search,
                hash: p.hash
            }
        },
        push: h,
        replace: f,
        go(x) {
            return s.go(x)
        }
    };
    return m
}
var Bg;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(Bg || (Bg = {}));

function hP(e, t, n) {
    return n === void 0 && (n = "/"), pP(e, t, n, !1)
}

function pP(e, t, n, r) {
    let i = typeof t == "string" ? Bo(t) : t,
        o = op(i.pathname || "/", n);
    if (o == null) return null;
    let s = mw(e);
    mP(s);
    let a = null;
    for (let l = 0; a == null && l < s.length; ++l) {
        let u = TP(o);
        a = CP(s[l], u, r)
    }
    return a
}

function mw(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let i = (o, s, a) => {
        let l = {
            relativePath: a === void 0 ? o.path || "" : a,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: s,
            route: o
        };
        l.relativePath.startsWith("/") && (_e(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length));
        let u = _r([r, l.relativePath]),
            c = n.concat(l);
        o.children && o.children.length > 0 && (_e(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), mw(o.children, t, c, u)), !(o.path == null && !o.index) && t.push({
            path: u,
            score: bP(u, o.index),
            routesMeta: c
        })
    };
    return e.forEach((o, s) => {
        var a;
        if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
        else
            for (let l of gw(o.path)) i(o, s, l)
    }), t
}

function gw(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, i = n.endsWith("?"), o = n.replace(/\?$/, "");
    if (r.length === 0) return i ? [o, ""] : [o];
    let s = gw(r.join("/")),
        a = [];
    return a.push(...s.map(l => l === "" ? o : [o, l].join("/"))), i && a.push(...s), a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}

function mP(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : kP(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const gP = /^:[\w-]+$/,
    yP = 3,
    vP = 2,
    xP = 1,
    wP = 10,
    SP = -2,
    $g = e => e === "*";

function bP(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some($g) && (r += SP), t && (r += vP), n.filter(i => !$g(i)).reduce((i, o) => i + (gP.test(o) ? yP : o === "" ? xP : wP), r)
}

function kP(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function CP(e, t, n) {
    let {
        routesMeta: r
    } = e, i = {}, o = "/", s = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a],
            u = a === r.length - 1,
            c = o === "/" ? t : t.slice(o.length) || "/",
            d = Ug({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: u
            }, c),
            h = l.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = Ug({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: !1
            }, c)), !d) return null;
        Object.assign(i, d.params), s.push({
            params: i,
            pathname: _r([o, d.pathname]),
            pathnameBase: MP(_r([o, d.pathnameBase])),
            route: h
        }), d.pathnameBase !== "/" && (o = _r([o, d.pathnameBase]))
    }
    return s
}

function Ug(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = EP(e.path, e.caseSensitive, e.end), i = t.match(n);
    if (!i) return null;
    let o = i[0],
        s = o.replace(/(.)\/+$/, "$1"),
        a = i.slice(1);
    return {
        params: r.reduce((u, c, d) => {
            let {
                paramName: h,
                isOptional: f
            } = c;
            if (h === "*") {
                let m = a[d] || "";
                s = o.slice(0, o.length - m.length).replace(/(.)\/+$/, "$1")
            }
            const g = a[d];
            return f && !g ? u[h] = void 0 : u[h] = (g || "").replace(/%2F/g, "/"), u
        }, {}),
        pathname: o,
        pathnameBase: s,
        pattern: e
    }
}

function EP(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), pw(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({
            paramName: a,
            isOptional: l != null
        }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r]
}

function TP(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return pw(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function op(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function PP(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: i = ""
    } = typeof e == "string" ? Bo(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : AP(n, t) : t,
        search: NP(r),
        hash: IP(i)
    }
}

function AP(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }), n.length > 1 ? n.join("/") : "/"
}

function jc(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function RP(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function yw(e, t) {
    let n = RP(e);
    return t ? n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function vw(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = Bo(e) : (i = ta({}, e), _e(!i.pathname || !i.pathname.includes("?"), jc("?", "pathname", "search", i)), _e(!i.pathname || !i.pathname.includes("#"), jc("#", "pathname", "hash", i)), _e(!i.search || !i.search.includes("#"), jc("#", "search", "hash", i)));
    let o = e === "" || i.pathname === "",
        s = o ? "/" : i.pathname,
        a;
    if (s == null) a = n;
    else {
        let d = t.length - 1;
        if (!r && s.startsWith("..")) {
            let h = s.split("/");
            for (; h[0] === "..";) h.shift(), d -= 1;
            i.pathname = h.join("/")
        }
        a = d >= 0 ? t[d] : "/"
    }
    let l = PP(i, a),
        u = s && s !== "/" && s.endsWith("/"),
        c = (o || s === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l
}
const _r = e => e.join("/").replace(/\/\/+/g, "/"),
    MP = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    NP = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    IP = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

function OP(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const xw = ["post", "put", "patch", "delete"];
new Set(xw);
const DP = ["get", ...xw];
new Set(DP);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function na() {
    return na = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, na.apply(this, arguments)
}
const sp = w.createContext(null),
    LP = w.createContext(null),
    Mi = w.createContext(null),
    Fu = w.createContext(null),
    Ni = w.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    ww = w.createContext(null);

function jP(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t;
    wa() || _e(!1);
    let {
        basename: r,
        navigator: i
    } = w.useContext(Mi), {
        hash: o,
        pathname: s,
        search: a
    } = bw(e, {
        relative: n
    }), l = s;
    return r !== "/" && (l = s === "/" ? r : _r([r, s])), i.createHref({
        pathname: l,
        search: a,
        hash: o
    })
}

function wa() {
    return w.useContext(Fu) != null
}

function $o() {
    return wa() || _e(!1), w.useContext(Fu).location
}

function Sw(e) {
    w.useContext(Mi).static || w.useLayoutEffect(e)
}

function _P() {
    let {
        isDataRoute: e
    } = w.useContext(Ni);
    return e ? YP() : FP()
}

function FP() {
    wa() || _e(!1);
    let e = w.useContext(sp),
        {
            basename: t,
            future: n,
            navigator: r
        } = w.useContext(Mi),
        {
            matches: i
        } = w.useContext(Ni),
        {
            pathname: o
        } = $o(),
        s = JSON.stringify(yw(i, n.v7_relativeSplatPath)),
        a = w.useRef(!1);
    return Sw(() => {
        a.current = !0
    }), w.useCallback(function(u, c) {
        if (c === void 0 && (c = {}), !a.current) return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let d = vw(u, JSON.parse(s), o, c.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : _r([t, d.pathname])), (c.replace ? r.replace : r.push)(d, c.state, c)
    }, [t, r, s, o, e])
}

function bw(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        future: r
    } = w.useContext(Mi), {
        matches: i
    } = w.useContext(Ni), {
        pathname: o
    } = $o(), s = JSON.stringify(yw(i, r.v7_relativeSplatPath));
    return w.useMemo(() => vw(e, JSON.parse(s), o, n === "path"), [e, s, o, n])
}

function zP(e, t) {
    return VP(e, t)
}

function VP(e, t, n, r) {
    wa() || _e(!1);
    let {
        navigator: i
    } = w.useContext(Mi), {
        matches: o
    } = w.useContext(Ni), s = o[o.length - 1], a = s ? s.params : {};
    s && s.pathname;
    let l = s ? s.pathnameBase : "/";
    s && s.route;
    let u = $o(),
        c;
    if (t) {
        var d;
        let x = typeof t == "string" ? Bo(t) : t;
        l === "/" || (d = x.pathname) != null && d.startsWith(l) || _e(!1), c = x
    } else c = u;
    let h = c.pathname || "/",
        f = h;
    if (l !== "/") {
        let x = l.replace(/^\//, "").split("/");
        f = "/" + h.replace(/^\//, "").split("/").slice(x.length).join("/")
    }
    let g = hP(e, {
            pathname: f
        }),
        m = WP(g && g.map(x => Object.assign({}, x, {
            params: Object.assign({}, a, x.params),
            pathname: _r([l, i.encodeLocation ? i.encodeLocation(x.pathname).pathname : x.pathname]),
            pathnameBase: x.pathnameBase === "/" ? l : _r([l, i.encodeLocation ? i.encodeLocation(x.pathnameBase).pathname : x.pathnameBase])
        })), o, n, r);
    return t && m ? w.createElement(Fu.Provider, {
        value: {
            location: na({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Pr.Pop
        }
    }, m) : m
}

function BP() {
    let e = QP(),
        t = OP(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        i = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? w.createElement("pre", {
        style: i
    }, n) : null, null)
}
const $P = w.createElement(BP, null);
class UP extends w.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? w.createElement(Ni.Provider, {
            value: this.props.routeContext
        }, w.createElement(ww.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function HP(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, i = w.useContext(sp);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), w.createElement(Ni.Provider, {
        value: t
    }, r)
}

function WP(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var o;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null
    }
    let s = e,
        a = (i = n) == null ? void 0 : i.errors;
    if (a != null) {
        let c = s.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        c >= 0 || _e(!1), s = s.slice(0, Math.min(s.length, c + 1))
    }
    let l = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < s.length; c++) {
            let d = s[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c), d.route.id) {
                let {
                    loaderData: h,
                    errors: f
                } = n, g = d.route.loader && h[d.route.id] === void 0 && (!f || f[d.route.id] === void 0);
                if (d.route.lazy || g) {
                    l = !0, u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight((c, d, h) => {
        let f, g = !1,
            m = null,
            x = null;
        n && (f = a && d.route.id ? a[d.route.id] : void 0, m = d.route.errorElement || $P, l && (u < 0 && h === 0 ? (g = !0, x = null) : u === h && (g = !0, x = d.route.hydrateFallbackElement || null)));
        let p = t.concat(s.slice(0, h + 1)),
            y = () => {
                let v;
                return f ? v = m : g ? v = x : d.route.Component ? v = w.createElement(d.route.Component, null) : d.route.element ? v = d.route.element : v = c, w.createElement(HP, {
                    match: d,
                    routeContext: {
                        outlet: c,
                        matches: p,
                        isDataRoute: n != null
                    },
                    children: v
                })
            };
        return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0) ? w.createElement(UP, {
            location: n.location,
            revalidation: n.revalidation,
            component: m,
            error: f,
            children: y(),
            routeContext: {
                outlet: null,
                matches: p,
                isDataRoute: !0
            }
        }) : y()
    }, null)
}
var kw = function(e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
    }(kw || {}),
    ru = function(e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    }(ru || {});

function KP(e) {
    let t = w.useContext(sp);
    return t || _e(!1), t
}

function GP(e) {
    let t = w.useContext(LP);
    return t || _e(!1), t
}

function qP(e) {
    let t = w.useContext(Ni);
    return t || _e(!1), t
}

function Cw(e) {
    let t = qP(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || _e(!1), n.route.id
}

function QP() {
    var e;
    let t = w.useContext(ww),
        n = GP(ru.UseRouteError),
        r = Cw(ru.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function YP() {
    let {
        router: e
    } = KP(kw.UseNavigateStable), t = Cw(ru.UseNavigateStable), n = w.useRef(!1);
    return Sw(() => {
        n.current = !0
    }), w.useCallback(function(i, o) {
        o === void 0 && (o = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, na({
            fromRouteId: t
        }, o)))
    }, [e, t])
}

function XP(e, t) {
    e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath
}

function pr(e) {
    _e(!1)
}

function ZP(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: i = Pr.Pop,
        navigator: o,
        static: s = !1,
        future: a
    } = e;
    wa() && _e(!1);
    let l = t.replace(/^\/*/, "/"),
        u = w.useMemo(() => ({
            basename: l,
            navigator: o,
            static: s,
            future: na({
                v7_relativeSplatPath: !1
            }, a)
        }), [l, a, o, s]);
    typeof r == "string" && (r = Bo(r));
    let {
        pathname: c = "/",
        search: d = "",
        hash: h = "",
        state: f = null,
        key: g = "default"
    } = r, m = w.useMemo(() => {
        let x = op(c, l);
        return x == null ? null : {
            location: {
                pathname: x,
                search: d,
                hash: h,
                state: f,
                key: g
            },
            navigationType: i
        }
    }, [l, c, d, h, f, g, i]);
    return m == null ? null : w.createElement(Mi.Provider, {
        value: u
    }, w.createElement(Fu.Provider, {
        children: n,
        value: m
    }))
}

function JP(e) {
    let {
        children: t,
        location: n
    } = e;
    return zP(gf(t), n)
}
new Promise(() => {});

function gf(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return w.Children.forEach(e, (r, i) => {
        if (!w.isValidElement(r)) return;
        let o = [...t, i];
        if (r.type === w.Fragment) {
            n.push.apply(n, gf(r.props.children, o));
            return
        }
        r.type !== pr && _e(!1), !r.props.index || !r.props.children || _e(!1);
        let s = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = gf(r.props.children, o)), n.push(s)
    }), n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function yf() {
    return yf = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, yf.apply(this, arguments)
}

function e2(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, o;
    for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function t2(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function n2(e, t) {
    return e.button === 0 && (!t || t === "_self") && !t2(e)
}
const r2 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
    i2 = "6";
try {
    window.__reactRouterVersion = i2
} catch {}
const o2 = "startTransition",
    Hg = fh[o2];

function s2(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: i
    } = e, o = w.useRef();
    o.current == null && (o.current = cP({
        window: i,
        v5Compat: !0
    }));
    let s = o.current,
        [a, l] = w.useState({
            action: s.action,
            location: s.location
        }),
        {
            v7_startTransition: u
        } = r || {},
        c = w.useCallback(d => {
            u && Hg ? Hg(() => l(d)) : l(d)
        }, [l, u]);
    return w.useLayoutEffect(() => s.listen(c), [s, c]), w.useEffect(() => XP(r), [r]), w.createElement(ZP, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: s,
        future: r
    })
}
const a2 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    l2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Ar = w.forwardRef(function(t, n) {
        let {
            onClick: r,
            relative: i,
            reloadDocument: o,
            replace: s,
            state: a,
            target: l,
            to: u,
            preventScrollReset: c,
            viewTransition: d
        } = t, h = e2(t, r2), {
            basename: f
        } = w.useContext(Mi), g, m = !1;
        if (typeof u == "string" && l2.test(u) && (g = u, a2)) try {
            let v = new URL(window.location.href),
                k = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u),
                E = op(k.pathname, f);
            k.origin === v.origin && E != null ? u = E + k.search + k.hash : m = !0
        } catch {}
        let x = jP(u, {
                relative: i
            }),
            p = u2(u, {
                replace: s,
                state: a,
                target: l,
                preventScrollReset: c,
                relative: i,
                viewTransition: d
            });

        function y(v) {
            r && r(v), v.defaultPrevented || p(v)
        }
        return w.createElement("a", yf({}, h, {
            href: g || x,
            onClick: m || o ? r : y,
            ref: n,
            target: l
        }))
    });
var Wg;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(Wg || (Wg = {}));
var Kg;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Kg || (Kg = {}));

function u2(e, t) {
    let {
        target: n,
        replace: r,
        state: i,
        preventScrollReset: o,
        relative: s,
        viewTransition: a
    } = t === void 0 ? {} : t, l = _P(), u = $o(), c = bw(e, {
        relative: s
    });
    return w.useCallback(d => {
        if (n2(d, n)) {
            d.preventDefault();
            let h = r !== void 0 ? r : nu(u) === nu(c);
            l(e, {
                replace: h,
                state: i,
                preventScrollReset: o,
                relative: s,
                viewTransition: a
            })
        }
    }, [u, l, c, r, i, n, e, o, s, a])
}
var c2 = typeof Element < "u",
    d2 = typeof Map == "function",
    f2 = typeof Set == "function",
    h2 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;

function xl(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor) return !1;
        var n, r, i;
        if (Array.isArray(e)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!xl(e[r], t[r])) return !1;
            return !0
        }
        var o;
        if (d2 && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size) return !1;
            for (o = e.entries(); !(r = o.next()).done;)
                if (!t.has(r.value[0])) return !1;
            for (o = e.entries(); !(r = o.next()).done;)
                if (!xl(r.value[1], t.get(r.value[0]))) return !1;
            return !0
        }
        if (f2 && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size) return !1;
            for (o = e.entries(); !(r = o.next()).done;)
                if (!t.has(r.value[0])) return !1;
            return !0
        }
        if (h2 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; r-- !== 0;)
                if (e[r] !== t[r]) return !1;
            return !0
        }
        if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
        if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(t, i[r])) return !1;
        if (c2 && e instanceof Element) return !1;
        for (r = n; r-- !== 0;)
            if (!((i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") && e.$$typeof) && !xl(e[i[r]], t[i[r]])) return !1;
        return !0
    }
    return e !== e && t !== t
}
var p2 = function(t, n) {
    try {
        return xl(t, n)
    } catch (r) {
        if ((r.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
        throw r
    }
};
const m2 = Pi(p2);
var g2 = function(e, t, n, r, i, o, s, a) {
        if (!e) {
            var l;
            if (t === void 0) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var u = [n, r, i, o, s, a],
                    c = 0;
                l = new Error(t.replace(/%s/g, function() {
                    return u[c++]
                })), l.name = "Invariant Violation"
            }
            throw l.framesToPop = 1, l
        }
    },
    y2 = g2;
const Gg = Pi(y2);
var v2 = function(t, n, r, i) {
    var o = r ? r.call(i, t, n) : void 0;
    if (o !== void 0) return !!o;
    if (t === n) return !0;
    if (typeof t != "object" || !t || typeof n != "object" || !n) return !1;
    var s = Object.keys(t),
        a = Object.keys(n);
    if (s.length !== a.length) return !1;
    for (var l = Object.prototype.hasOwnProperty.bind(n), u = 0; u < s.length; u++) {
        var c = s[u];
        if (!l(c)) return !1;
        var d = t[c],
            h = n[c];
        if (o = r ? r.call(i, d, h, c) : void 0, o === !1 || o === void 0 && d !== h) return !1
    }
    return !0
};
const x2 = Pi(v2);
var Ew = (e => (e.BASE = "base", e.BODY = "body", e.HEAD = "head", e.HTML = "html", e.LINK = "link", e.META = "meta", e.NOSCRIPT = "noscript", e.SCRIPT = "script", e.STYLE = "style", e.TITLE = "title", e.FRAGMENT = "Symbol(react.fragment)", e))(Ew || {}),
    _c = {
        link: {
            rel: ["amphtml", "canonical", "alternate"]
        },
        script: {
            type: ["application/ld+json"]
        },
        meta: {
            charset: "",
            name: ["generator", "robots", "description"],
            property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"]
        }
    },
    qg = Object.values(Ew),
    zu = {
        accesskey: "accessKey",
        charset: "charSet",
        class: "className",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        "http-equiv": "httpEquiv",
        itemprop: "itemProp",
        tabindex: "tabIndex"
    },
    Tw = Object.entries(zu).reduce((e, [t, n]) => (e[n] = t, e), {}),
    un = "data-rh",
    co = {
        DEFAULT_TITLE: "defaultTitle",
        DEFER: "defer",
        ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
        ON_CHANGE_CLIENT_STATE: "onChangeClientState",
        TITLE_TEMPLATE: "titleTemplate",
        PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
    },
    fo = (e, t) => {
        for (let n = e.length - 1; n >= 0; n -= 1) {
            const r = e[n];
            if (Object.prototype.hasOwnProperty.call(r, t)) return r[t]
        }
        return null
    },
    w2 = e => {
        let t = fo(e, "title");
        const n = fo(e, co.TITLE_TEMPLATE);
        if (Array.isArray(t) && (t = t.join("")), n && t) return n.replace(/%s/g, () => t);
        const r = fo(e, co.DEFAULT_TITLE);
        return t || r || void 0
    },
    S2 = e => fo(e, co.ON_CHANGE_CLIENT_STATE) || (() => {}),
    Fc = (e, t) => t.filter(n => typeof n[e] < "u").map(n => n[e]).reduce((n, r) => ({ ...n,
        ...r
    }), {}),
    b2 = (e, t) => t.filter(n => typeof n.base < "u").map(n => n.base).reverse().reduce((n, r) => {
        if (!n.length) {
            const i = Object.keys(r);
            for (let o = 0; o < i.length; o += 1) {
                const a = i[o].toLowerCase();
                if (e.indexOf(a) !== -1 && r[a]) return n.concat(r)
            }
        }
        return n
    }, []),
    k2 = e => console && typeof console.warn == "function" && console.warn(e),
    os = (e, t, n) => {
        const r = {};
        return n.filter(i => Array.isArray(i[e]) ? !0 : (typeof i[e] < "u" && k2(`Helmet: ${e} should be of type "Array". Instead found type "${typeof i[e]}"`), !1)).map(i => i[e]).reverse().reduce((i, o) => {
            const s = {};
            o.filter(l => {
                let u;
                const c = Object.keys(l);
                for (let h = 0; h < c.length; h += 1) {
                    const f = c[h],
                        g = f.toLowerCase();
                    t.indexOf(g) !== -1 && !(u === "rel" && l[u].toLowerCase() === "canonical") && !(g === "rel" && l[g].toLowerCase() === "stylesheet") && (u = g), t.indexOf(f) !== -1 && (f === "innerHTML" || f === "cssText" || f === "itemprop") && (u = f)
                }
                if (!u || !l[u]) return !1;
                const d = l[u].toLowerCase();
                return r[u] || (r[u] = {}), s[u] || (s[u] = {}), r[u][d] ? !1 : (s[u][d] = !0, !0)
            }).reverse().forEach(l => i.push(l));
            const a = Object.keys(s);
            for (let l = 0; l < a.length; l += 1) {
                const u = a[l],
                    c = { ...r[u],
                        ...s[u]
                    };
                r[u] = c
            }
            return i
        }, []).reverse()
    },
    C2 = (e, t) => {
        if (Array.isArray(e) && e.length) {
            for (let n = 0; n < e.length; n += 1)
                if (e[n][t]) return !0
        }
        return !1
    },
    E2 = e => ({
        baseTag: b2(["href"], e),
        bodyAttributes: Fc("bodyAttributes", e),
        defer: fo(e, co.DEFER),
        encode: fo(e, co.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: Fc("htmlAttributes", e),
        linkTags: os("link", ["rel", "href"], e),
        metaTags: os("meta", ["name", "charset", "http-equiv", "property", "itemprop"], e),
        noscriptTags: os("noscript", ["innerHTML"], e),
        onChangeClientState: S2(e),
        scriptTags: os("script", ["src", "innerHTML"], e),
        styleTags: os("style", ["cssText"], e),
        title: w2(e),
        titleAttributes: Fc("titleAttributes", e),
        prioritizeSeoTags: C2(e, co.PRIORITIZE_SEO_TAGS)
    }),
    Pw = e => Array.isArray(e) ? e.join("") : e,
    T2 = (e, t) => {
        const n = Object.keys(e);
        for (let r = 0; r < n.length; r += 1)
            if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
        return !1
    },
    zc = (e, t) => Array.isArray(e) ? e.reduce((n, r) => (T2(r, t) ? n.priority.push(r) : n.default.push(r), n), {
        priority: [],
        default: []
    }) : {
        default: e,
        priority: []
    },
    Qg = (e, t) => ({ ...e,
        [t]: void 0
    }),
    P2 = ["noscript", "script", "style"],
    vf = (e, t = !0) => t === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;"),
    Aw = e => Object.keys(e).reduce((t, n) => {
        const r = typeof e[n] < "u" ? `${n}="${e[n]}"` : `${n}`;
        return t ? `${t} ${r}` : r
    }, ""),
    A2 = (e, t, n, r) => {
        const i = Aw(n),
            o = Pw(t);
        return i ? `<${e} ${un}="true" ${i}>${vf(o,r)}</${e}>` : `<${e} ${un}="true">${vf(o,r)}</${e}>`
    },
    R2 = (e, t, n = !0) => t.reduce((r, i) => {
        const o = i,
            s = Object.keys(o).filter(u => !(u === "innerHTML" || u === "cssText")).reduce((u, c) => {
                const d = typeof o[c] > "u" ? c : `${c}="${vf(o[c],n)}"`;
                return u ? `${u} ${d}` : d
            }, ""),
            a = o.innerHTML || o.cssText || "",
            l = P2.indexOf(e) === -1;
        return `${r}<${e} ${un}="true" ${s}${l?"/>":`>${a}</${e}>`}`
    }, ""),
    Rw = (e, t = {}) => Object.keys(e).reduce((n, r) => {
        const i = zu[r];
        return n[i || r] = e[r], n
    }, t),
    M2 = (e, t, n) => {
        const r = {
                key: t,
                [un]: !0
            },
            i = Rw(n, r);
        return [j.createElement("title", i, t)]
    },
    wl = (e, t) => t.map((n, r) => {
        const i = {
            key: r,
            [un]: !0
        };
        return Object.keys(n).forEach(o => {
            const a = zu[o] || o;
            if (a === "innerHTML" || a === "cssText") {
                const l = n.innerHTML || n.cssText;
                i.dangerouslySetInnerHTML = {
                    __html: l
                }
            } else i[a] = n[o]
        }), j.createElement(e, i)
    }),
    Vt = (e, t, n = !0) => {
        switch (e) {
            case "title":
                return {
                    toComponent: () => M2(e, t.title, t.titleAttributes),
                    toString: () => A2(e, t.title, t.titleAttributes, n)
                };
            case "bodyAttributes":
            case "htmlAttributes":
                return {
                    toComponent: () => Rw(t),
                    toString: () => Aw(t)
                };
            default:
                return {
                    toComponent: () => wl(e, t),
                    toString: () => R2(e, t, n)
                }
        }
    },
    N2 = ({
        metaTags: e,
        linkTags: t,
        scriptTags: n,
        encode: r
    }) => {
        const i = zc(e, _c.meta),
            o = zc(t, _c.link),
            s = zc(n, _c.script);
        return {
            priorityMethods: {
                toComponent: () => [...wl("meta", i.priority), ...wl("link", o.priority), ...wl("script", s.priority)],
                toString: () => `${Vt("meta",i.priority,r)} ${Vt("link",o.priority,r)} ${Vt("script",s.priority,r)}`
            },
            metaTags: i.default,
            linkTags: o.default,
            scriptTags: s.default
        }
    },
    I2 = e => {
        const {
            baseTag: t,
            bodyAttributes: n,
            encode: r = !0,
            htmlAttributes: i,
            noscriptTags: o,
            styleTags: s,
            title: a = "",
            titleAttributes: l,
            prioritizeSeoTags: u
        } = e;
        let {
            linkTags: c,
            metaTags: d,
            scriptTags: h
        } = e, f = {
            toComponent: () => [],
            toString: () => ""
        };
        return u && ({
            priorityMethods: f,
            linkTags: c,
            metaTags: d,
            scriptTags: h
        } = N2(e)), {
            priority: f,
            base: Vt("base", t, r),
            bodyAttributes: Vt("bodyAttributes", n, r),
            htmlAttributes: Vt("htmlAttributes", i, r),
            link: Vt("link", c, r),
            meta: Vt("meta", d, r),
            noscript: Vt("noscript", o, r),
            script: Vt("script", h, r),
            style: Vt("style", s, r),
            title: Vt("title", {
                title: a,
                titleAttributes: l
            }, r)
        }
    },
    xf = I2,
    Qa = [],
    ap = !!(typeof window < "u" && window.document && window.document.createElement),
    wf = class {
        constructor(e, t) {
            _n(this, "instances", []);
            _n(this, "canUseDOM", ap);
            _n(this, "context");
            _n(this, "value", {
                setHelmet: e => {
                    this.context.helmet = e
                },
                helmetInstances: {
                    get: () => this.canUseDOM ? Qa : this.instances,
                    add: e => {
                        (this.canUseDOM ? Qa : this.instances).push(e)
                    },
                    remove: e => {
                        const t = (this.canUseDOM ? Qa : this.instances).indexOf(e);
                        (this.canUseDOM ? Qa : this.instances).splice(t, 1)
                    }
                }
            });
            this.context = e, this.canUseDOM = t || !1, t || (e.helmet = xf({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: !0,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            }))
        }
    },
    O2 = parseInt(j.version.split(".")[0], 10),
    Sf = O2 >= 19,
    D2 = {},
    Mw = j.createContext(D2),
    yi, Nw = (yi = class extends w.Component {
        constructor(n) {
            super(n);
            _n(this, "helmetData");
            Sf ? this.helmetData = null : this.helmetData = new wf(this.props.context || {}, yi.canUseDOM)
        }
        render() {
            return Sf ? j.createElement(j.Fragment, null, this.props.children) : j.createElement(Mw.Provider, {
                value: this.helmetData.value
            }, this.props.children)
        }
    }, _n(yi, "canUseDOM", ap), yi),
    zi = (e, t) => {
        const n = document.head || document.querySelector("head"),
            r = n.querySelectorAll(`${e}[${un}]`),
            i = [].slice.call(r),
            o = [];
        let s;
        return t && t.length && t.forEach(a => {
            const l = document.createElement(e);
            for (const u in a)
                if (Object.prototype.hasOwnProperty.call(a, u))
                    if (u === "innerHTML") l.innerHTML = a.innerHTML;
                    else if (u === "cssText") {
                const c = a.cssText;
                l.appendChild(document.createTextNode(c))
            } else {
                const c = u,
                    d = typeof a[c] > "u" ? "" : a[c];
                l.setAttribute(u, d)
            }
            l.setAttribute(un, "true"), i.some((u, c) => (s = c, l.isEqualNode(u))) ? i.splice(s, 1) : o.push(l)
        }), i.forEach(a => {
            var l;
            return (l = a.parentNode) == null ? void 0 : l.removeChild(a)
        }), o.forEach(a => n.appendChild(a)), {
            oldTags: i,
            newTags: o
        }
    },
    bf = (e, t) => {
        const n = document.getElementsByTagName(e)[0];
        if (!n) return;
        const r = n.getAttribute(un),
            i = r ? r.split(",") : [],
            o = [...i],
            s = Object.keys(t);
        for (const a of s) {
            const l = t[a] || "";
            n.getAttribute(a) !== l && n.setAttribute(a, l), i.indexOf(a) === -1 && i.push(a);
            const u = o.indexOf(a);
            u !== -1 && o.splice(u, 1)
        }
        for (let a = o.length - 1; a >= 0; a -= 1) n.removeAttribute(o[a]);
        i.length === o.length ? n.removeAttribute(un) : n.getAttribute(un) !== s.join(",") && n.setAttribute(un, s.join(","))
    },
    L2 = (e, t) => {
        typeof e < "u" && document.title !== e && (document.title = Pw(e)), bf("title", t)
    },
    Yg = (e, t) => {
        const {
            baseTag: n,
            bodyAttributes: r,
            htmlAttributes: i,
            linkTags: o,
            metaTags: s,
            noscriptTags: a,
            onChangeClientState: l,
            scriptTags: u,
            styleTags: c,
            title: d,
            titleAttributes: h
        } = e;
        bf("body", r), bf("html", i), L2(d, h);
        const f = {
                baseTag: zi("base", n),
                linkTags: zi("link", o),
                metaTags: zi("meta", s),
                noscriptTags: zi("noscript", a),
                scriptTags: zi("script", u),
                styleTags: zi("style", c)
            },
            g = {},
            m = {};
        Object.keys(f).forEach(x => {
            const {
                newTags: p,
                oldTags: y
            } = f[x];
            p.length && (g[x] = p), y.length && (m[x] = f[x].oldTags)
        }), t && t(), l(e, g, m)
    },
    ss = null,
    j2 = e => {
        ss && cancelAnimationFrame(ss), e.defer ? ss = requestAnimationFrame(() => {
            Yg(e, () => {
                ss = null
            })
        }) : (Yg(e), ss = null)
    },
    _2 = j2,
    Xg = class extends w.Component {
        constructor() {
            super(...arguments);
            _n(this, "rendered", !1)
        }
        shouldComponentUpdate(t) {
            return !x2(t, this.props)
        }
        componentDidUpdate() {
            this.emitChange()
        }
        componentWillUnmount() {
            const {
                helmetInstances: t
            } = this.props.context;
            t.remove(this), this.emitChange()
        }
        emitChange() {
            const {
                helmetInstances: t,
                setHelmet: n
            } = this.props.context;
            let r = null;
            const i = E2(t.get().map(o => {
                const {
                    context: s,
                    ...a
                } = o.props;
                return a
            }));
            Nw.canUseDOM ? _2(i) : xf && (r = xf(i)), n(r)
        }
        init() {
            if (this.rendered) return;
            this.rendered = !0;
            const {
                helmetInstances: t
            } = this.props.context;
            t.add(this), this.emitChange()
        }
        render() {
            return this.init(), null
        }
    },
    Sl = [],
    Zg = e => {
        const t = {};
        for (const n of Object.keys(e)) t[Tw[n] || n] = e[n];
        return t
    },
    ei = e => {
        const t = {};
        for (const n of Object.keys(e)) {
            const r = zu[n];
            t[r || n] = e[n]
        }
        return t
    },
    Jg = (e, t) => {
        if (!ap) return;
        const n = document.getElementsByTagName(e)[0];
        if (!n) return;
        const r = "data-rh-managed",
            i = n.getAttribute(r),
            o = i ? i.split(",") : [],
            s = Object.keys(t);
        for (const a of o) s.includes(a) || n.removeAttribute(a);
        for (const a of s) {
            const l = t[a];
            l == null || l === !1 ? n.removeAttribute(a) : l === !0 ? n.setAttribute(a, "") : n.setAttribute(a, String(l))
        }
        s.length > 0 ? n.setAttribute(r, s.join(",")) : n.removeAttribute(r)
    },
    Vc = () => {
        const e = {},
            t = {};
        for (const n of Sl) {
            const {
                htmlAttributes: r,
                bodyAttributes: i
            } = n.props;
            r && Object.assign(e, Zg(r)), i && Object.assign(t, Zg(i))
        }
        Jg("html", e), Jg("body", t)
    },
    F2 = class extends w.Component {
        componentDidMount() {
            Sl.push(this), Vc()
        }
        componentDidUpdate() {
            Vc()
        }
        componentWillUnmount() {
            const e = Sl.indexOf(this);
            e !== -1 && Sl.splice(e, 1), Vc()
        }
        resolveTitle() {
            const {
                title: e,
                titleTemplate: t,
                defaultTitle: n
            } = this.props;
            return e && t ? t.replace(/%s/g, () => Array.isArray(e) ? e.join("") : e) : e || n || void 0
        }
        renderTitle() {
            const e = this.resolveTitle();
            if (e === void 0) return null;
            const t = this.props.titleAttributes || {};
            return j.createElement("title", ei(t), e)
        }
        renderBase() {
            const {
                base: e
            } = this.props;
            return e ? j.createElement("base", ei(e)) : null
        }
        renderMeta() {
            const {
                meta: e
            } = this.props;
            return !e || !Array.isArray(e) ? null : e.map((t, n) => j.createElement("meta", {
                key: n,
                ...ei(t)
            }))
        }
        renderLink() {
            const {
                link: e
            } = this.props;
            return !e || !Array.isArray(e) ? null : e.map((t, n) => j.createElement("link", {
                key: n,
                ...ei(t)
            }))
        }
        renderScript() {
            const {
                script: e
            } = this.props;
            return !e || !Array.isArray(e) ? null : e.map((t, n) => {
                const {
                    innerHTML: r,
                    ...i
                } = t, o = ei(i);
                return r && (o.dangerouslySetInnerHTML = {
                    __html: r
                }), j.createElement("script", {
                    key: n,
                    ...o
                })
            })
        }
        renderStyle() {
            const {
                style: e
            } = this.props;
            return !e || !Array.isArray(e) ? null : e.map((t, n) => {
                const {
                    cssText: r,
                    ...i
                } = t, o = ei(i);
                return r && (o.dangerouslySetInnerHTML = {
                    __html: r
                }), j.createElement("style", {
                    key: n,
                    ...o
                })
            })
        }
        renderNoscript() {
            const {
                noscript: e
            } = this.props;
            return !e || !Array.isArray(e) ? null : e.map((t, n) => {
                const {
                    innerHTML: r,
                    ...i
                } = t, o = ei(i);
                return r && (o.dangerouslySetInnerHTML = {
                    __html: r
                }), j.createElement("noscript", {
                    key: n,
                    ...o
                })
            })
        }
        render() {
            return j.createElement(j.Fragment, null, this.renderTitle(), this.renderBase(), this.renderMeta(), this.renderLink(), this.renderScript(), this.renderStyle(), this.renderNoscript())
        }
    },
    xd, z2 = (xd = class extends w.Component {
        shouldComponentUpdate(e) {
            return !m2(Qg(this.props, "helmetData"), Qg(e, "helmetData"))
        }
        mapNestedChildrenToProps(e, t) {
            if (!t) return null;
            switch (e.type) {
                case "script":
                case "noscript":
                    return {
                        innerHTML: t
                    };
                case "style":
                    return {
                        cssText: t
                    };
                default:
                    throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)
            }
        }
        flattenArrayTypeChildren(e, t, n, r) {
            return { ...t,
                [e.type]: [...t[e.type] || [], { ...n,
                    ...this.mapNestedChildrenToProps(e, r)
                }]
            }
        }
        mapObjectTypeChildren(e, t, n, r) {
            switch (e.type) {
                case "title":
                    return { ...t,
                        [e.type]: r,
                        titleAttributes: { ...n
                        }
                    };
                case "body":
                    return { ...t,
                        bodyAttributes: { ...n
                        }
                    };
                case "html":
                    return { ...t,
                        htmlAttributes: { ...n
                        }
                    };
                default:
                    return { ...t,
                        [e.type]: { ...n
                        }
                    }
            }
        }
        mapArrayTypeChildrenToProps(e, t) {
            let n = { ...t
            };
            return Object.keys(e).forEach(r => {
                n = { ...n,
                    [r]: e[r]
                }
            }), n
        }
        warnOnInvalidChildren(e, t) {
            return Gg(qg.some(n => e.type === n), typeof e.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : `Only elements types ${qg.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`), Gg(!t || typeof t == "string" || Array.isArray(t) && !t.some(n => typeof n != "string"), `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`), !0
        }
        mapChildrenToProps(e, t) {
            let n = {};
            return j.Children.forEach(e, r => {
                if (!r || !r.props) return;
                const {
                    children: i,
                    ...o
                } = r.props, s = Object.keys(o).reduce((l, u) => (l[Tw[u] || u] = o[u], l), {});
                let {
                    type: a
                } = r;
                switch (typeof a == "symbol" ? a = a.toString() : this.warnOnInvalidChildren(r, i), a) {
                    case "Symbol(react.fragment)":
                        t = this.mapChildrenToProps(i, t);
                        break;
                    case "link":
                    case "meta":
                    case "noscript":
                    case "script":
                    case "style":
                        n = this.flattenArrayTypeChildren(r, n, s, i);
                        break;
                    default:
                        t = this.mapObjectTypeChildren(r, t, s, i);
                        break
                }
            }), this.mapArrayTypeChildrenToProps(n, t)
        }
        render() {
            const {
                children: e,
                ...t
            } = this.props;
            let n = { ...t
                },
                {
                    helmetData: r
                } = t;
            if (e && (n = this.mapChildrenToProps(e, n)), r && !(r instanceof wf)) {
                const i = r;
                r = new wf(i.context, !0), delete n.helmetData
            }
            return Sf ? j.createElement(F2, { ...n
            }) : r ? j.createElement(Xg, { ...n,
                context: r.value
            }) : j.createElement(Mw.Consumer, null, i => j.createElement(Xg, { ...n,
                context: i
            }))
        }
    }, _n(xd, "defaultProps", {
        defer: !0,
        encodeSpecialCharacters: !0,
        prioritizeSeoTags: !1
    }), xd),
    iu = {},
    V2 = () => {
        window.si || (window.si = function(...t) {
            window.siq = window.siq || [], window.siq.push(t)
        })
    },
    B2 = "@vercel/speed-insights",
    $2 = "2.0.0";

function U2() {
    return typeof window < "u"
}

function H2() {
    try {
        const e = "production"
    } catch {}
    return "production"
}

function Iw() {
    return H2() === "development"
}

function W2(e) {
    return e.scriptSrc ? ou(e.scriptSrc) : Iw() ? "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js" : e.dsn ? "https://va.vercel-scripts.com/v1/speed-insights/script.js" : e.basePath ? ou(`${e.basePath}/speed-insights/script.js`) : "/_vercel/speed-insights/script.js"
}

function K2(e, t) {
    var n;
    let r = e;
    if (t) try {
        r = { ...(n = JSON.parse(t)) == null ? void 0 : n.speedInsights,
            ...e
        }
    } catch {}
    const i = {
        sdkn: B2 + (r.framework ? `/${r.framework}` : ""),
        sdkv: $2
    };
    return r.sampleRate && (i.sampleRate = r.sampleRate.toString()), r.route && (i.route = r.route), Iw() && r.debug === !1 && (i.debug = "false"), r.dsn && (i.dsn = r.dsn), r.endpoint ? i.endpoint = ou(r.endpoint) : r.basePath && (i.endpoint = ou(`${r.basePath}/speed-insights/vitals`)), {
        src: W2(r),
        beforeSend: r.beforeSend,
        dataset: i
    }
}

function ou(e) {
    return e.startsWith("http://") || e.startsWith("https://") || e.startsWith("/") ? e : `/${e}`
}

function G2(e = {}, t) {
    var n;
    if (!U2() || e.route === null) return null;
    V2();
    const {
        beforeSend: r,
        src: i,
        dataset: o
    } = K2(e, t);
    if (document.head.querySelector(`script[src*="${i}"]`)) return null;
    r && ((n = window.si) == null || n.call(window, "beforeSend", r));
    const s = document.createElement("script");
    s.src = i, s.defer = !0;
    for (const [a, l] of Object.entries(o)) s.dataset[a] = l;
    return s.onerror = () => {
        console.log(`[Vercel Speed Insights] Failed to load script from ${i}. Please check if any content blockers are enabled and try again.`)
    }, document.head.appendChild(s), {
        setRoute: a => {
            s.dataset.route = a ? ? void 0
        }
    }
}

function q2() {
    if (!(typeof process > "u" || typeof iu > "u")) return iu.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
}

function Q2() {
    if (!(typeof process > "u" || typeof iu > "u")) return iu.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG
}

function Y2(e) {
    w.useEffect(() => {
        var n;
        e.beforeSend && ((n = window.si) == null || n.call(window, "beforeSend", e.beforeSend))
    }, [e.beforeSend]);
    const t = w.useRef(null);
    return w.useEffect(() => {
        if (!t.current) {
            const n = G2({
                framework: e.framework ? ? "react",
                basePath: e.basePath ? ? q2(),
                ...e
            }, e.configString ? ? Q2());
            n && (t.current = n.setRoute)
        }
    }, [e]), w.useEffect(() => {
        t.current && e.route && t.current(e.route)
    }, [e.route]), null
}
var ey = ["light", "dark"],
    X2 = "(prefers-color-scheme: dark)",
    Z2 = w.createContext(void 0),
    J2 = {
        setTheme: e => {},
        themes: []
    },
    eA = () => {
        var e;
        return (e = w.useContext(Z2)) != null ? e : J2
    };
w.memo(({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: i,
    defaultTheme: o,
    value: s,
    attrs: a,
    nonce: l
}) => {
    let u = o === "system",
        c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(g=>`'${g}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`,
        d = i ? ey.includes(o) && o ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
        h = (g, m = !1, x = !0) => {
            let p = s ? s[g] : g,
                y = m ? g + "|| ''" : `'${p}'`,
                v = "";
            return i && x && !m && ey.includes(g) && (v += `d.style.colorScheme = '${g}';`), n === "class" ? m || p ? v += `c.add(${y})` : v += "null" : p && (v += `d[s](n,${y})`), v
        },
        f = e ? `!function(){${c}${h(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${X2}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${h(s?"x[e]":"e",!0)}}${u?"":"else{"+h(o,!1,!1)+"}"}${d}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${h(s?"x[e]":"e",!0)}}else{${h(o,!1,!1)};}${d}}catch(t){}}();`;
    return w.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: f
        }
    })
});
var tA = e => {
        switch (e) {
            case "success":
                return iA;
            case "info":
                return sA;
            case "warning":
                return oA;
            case "error":
                return aA;
            default:
                return null
        }
    },
    nA = Array(12).fill(0),
    rA = ({
        visible: e,
        className: t
    }) => j.createElement("div", {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e
    }, j.createElement("div", {
        className: "sonner-spinner"
    }, nA.map((n, r) => j.createElement("div", {
        className: "sonner-loading-bar",
        key: `spinner-bar-${r}`
    })))),
    iA = j.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, j.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd"
    })),
    oA = j.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, j.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd"
    })),
    sA = j.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, j.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd"
    })),
    aA = j.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, j.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
    })),
    lA = j.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, j.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), j.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    })),
    uA = () => {
        let [e, t] = j.useState(document.hidden);
        return j.useEffect(() => {
            let n = () => {
                t(document.hidden)
            };
            return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n)
        }, []), e
    },
    kf = 1,
    cA = class {
        constructor() {
            this.subscribe = e => (this.subscribers.push(e), () => {
                let t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1)
            }), this.publish = e => {
                this.subscribers.forEach(t => t(e))
            }, this.addToast = e => {
                this.publish(e), this.toasts = [...this.toasts, e]
            }, this.create = e => {
                var t;
                let {
                    message: n,
                    ...r
                } = e, i = typeof(e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : kf++, o = this.toasts.find(a => a.id === i), s = e.dismissible === void 0 ? !0 : e.dismissible;
                return this.dismissedToasts.has(i) && this.dismissedToasts.delete(i), o ? this.toasts = this.toasts.map(a => a.id === i ? (this.publish({ ...a,
                    ...e,
                    id: i,
                    title: n
                }), { ...a,
                    ...e,
                    id: i,
                    dismissible: s,
                    title: n
                }) : a) : this.addToast({
                    title: n,
                    ...r,
                    dismissible: s,
                    id: i
                }), i
            }, this.dismiss = e => (this.dismissedToasts.add(e), e || this.toasts.forEach(t => {
                this.subscribers.forEach(n => n({
                    id: t.id,
                    dismiss: !0
                }))
            }), this.subscribers.forEach(t => t({
                id: e,
                dismiss: !0
            })), e), this.message = (e, t) => this.create({ ...t,
                message: e
            }), this.error = (e, t) => this.create({ ...t,
                message: e,
                type: "error"
            }), this.success = (e, t) => this.create({ ...t,
                type: "success",
                message: e
            }), this.info = (e, t) => this.create({ ...t,
                type: "info",
                message: e
            }), this.warning = (e, t) => this.create({ ...t,
                type: "warning",
                message: e
            }), this.loading = (e, t) => this.create({ ...t,
                type: "loading",
                message: e
            }), this.promise = (e, t) => {
                if (!t) return;
                let n;
                t.loading !== void 0 && (n = this.create({ ...t,
                    promise: e,
                    type: "loading",
                    message: t.loading,
                    description: typeof t.description != "function" ? t.description : void 0
                }));
                let r = e instanceof Promise ? e : e(),
                    i = n !== void 0,
                    o, s = r.then(async l => {
                        if (o = ["resolve", l], j.isValidElement(l)) i = !1, this.create({
                            id: n,
                            type: "default",
                            message: l
                        });
                        else if (fA(l) && !l.ok) {
                            i = !1;
                            let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error,
                                c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                            this.create({
                                id: n,
                                type: "error",
                                message: u,
                                description: c
                            })
                        } else if (t.success !== void 0) {
                            i = !1;
                            let u = typeof t.success == "function" ? await t.success(l) : t.success,
                                c = typeof t.description == "function" ? await t.description(l) : t.description;
                            this.create({
                                id: n,
                                type: "success",
                                message: u,
                                description: c
                            })
                        }
                    }).catch(async l => {
                        if (o = ["reject", l], t.error !== void 0) {
                            i = !1;
                            let u = typeof t.error == "function" ? await t.error(l) : t.error,
                                c = typeof t.description == "function" ? await t.description(l) : t.description;
                            this.create({
                                id: n,
                                type: "error",
                                message: u,
                                description: c
                            })
                        }
                    }).finally(() => {
                        var l;
                        i && (this.dismiss(n), n = void 0), (l = t.finally) == null || l.call(t)
                    }),
                    a = () => new Promise((l, u) => s.then(() => o[0] === "reject" ? u(o[1]) : l(o[1])).catch(u));
                return typeof n != "string" && typeof n != "number" ? {
                    unwrap: a
                } : Object.assign(n, {
                    unwrap: a
                })
            }, this.custom = (e, t) => {
                let n = (t == null ? void 0 : t.id) || kf++;
                return this.create({
                    jsx: e(n),
                    id: n,
                    ...t
                }), n
            }, this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
        }
    },
    ht = new cA,
    dA = (e, t) => {
        let n = (t == null ? void 0 : t.id) || kf++;
        return ht.addToast({
            title: e,
            ...t,
            id: n
        }), n
    },
    fA = e => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number",
    hA = dA,
    pA = () => ht.toasts,
    mA = () => ht.getActiveToasts(),
    vz = Object.assign(hA, {
        success: ht.success,
        info: ht.info,
        warning: ht.warning,
        error: ht.error,
        custom: ht.custom,
        message: ht.message,
        promise: ht.promise,
        dismiss: ht.dismiss,
        loading: ht.loading
    }, {
        getHistory: pA,
        getToasts: mA
    });

function gA(e, {
    insertAt: t
} = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
    r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
gA(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);

function Ya(e) {
    return e.label !== void 0
}
var yA = 3,
    vA = "32px",
    xA = "16px",
    ty = 4e3,
    wA = 356,
    SA = 14,
    bA = 20,
    kA = 200;

function en(...e) {
    return e.filter(Boolean).join(" ")
}

function CA(e) {
    let [t, n] = e.split("-"), r = [];
    return t && r.push(t), n && r.push(n), r
}
var EA = e => {
    var t, n, r, i, o, s, a, l, u, c, d;
    let {
        invert: h,
        toast: f,
        unstyled: g,
        interacting: m,
        setHeights: x,
        visibleToasts: p,
        heights: y,
        index: v,
        toasts: k,
        expanded: E,
        removeToast: C,
        defaultRichColors: P,
        closeButton: A,
        style: N,
        cancelButtonStyle: D,
        actionButtonStyle: _,
        className: I = "",
        descriptionClassName: W = "",
        duration: F,
        position: U,
        gap: K,
        loadingIcon: $,
        expandByDefault: R,
        classNames: O,
        icons: b,
        closeButtonAriaLabel: q = "Close toast",
        pauseWhenPageIsHidden: G
    } = e, [T, Y] = j.useState(null), [pe, se] = j.useState(null), [oe, nt] = j.useState(!1), [rt, dt] = j.useState(!1), [bt, rr] = j.useState(!1), [gn, Li] = j.useState(!1), [ji, Yr] = j.useState(!1), [_i, Xr] = j.useState(0), [Ln, Yo] = j.useState(0), Zr = j.useRef(f.duration || F || ty), Ra = j.useRef(null), jn = j.useRef(null), oc = v === 0, sc = v + 1 <= p, M = f.type, B = f.dismissible !== !1, Z = f.className || "", re = f.descriptionClassName || "", ue = j.useMemo(() => y.findIndex(J => J.toastId === f.id) || 0, [y, f.id]), kt = j.useMemo(() => {
        var J;
        return (J = f.closeButton) != null ? J : A
    }, [f.closeButton, A]), yn = j.useMemo(() => f.duration || F || ty, [f.duration, F]), Ct = j.useRef(0), _t = j.useRef(0), ir = j.useRef(0), De = j.useRef(null), [or, Qt] = U.split("-"), wm = j.useMemo(() => y.reduce((J, me, ke) => ke >= ue ? J : J + me.height, 0), [y, ue]), Sm = uA(), aC = f.invert || h, ac = M === "loading";
    _t.current = j.useMemo(() => ue * K + wm, [ue, wm]), j.useEffect(() => {
        Zr.current = yn
    }, [yn]), j.useEffect(() => {
        nt(!0)
    }, []), j.useEffect(() => {
        let J = jn.current;
        if (J) {
            let me = J.getBoundingClientRect().height;
            return Yo(me), x(ke => [{
                toastId: f.id,
                height: me,
                position: f.position
            }, ...ke]), () => x(ke => ke.filter(Yt => Yt.toastId !== f.id))
        }
    }, [x, f.id]), j.useLayoutEffect(() => {
        if (!oe) return;
        let J = jn.current,
            me = J.style.height;
        J.style.height = "auto";
        let ke = J.getBoundingClientRect().height;
        J.style.height = me, Yo(ke), x(Yt => Yt.find(Xt => Xt.toastId === f.id) ? Yt.map(Xt => Xt.toastId === f.id ? { ...Xt,
            height: ke
        } : Xt) : [{
            toastId: f.id,
            height: ke,
            position: f.position
        }, ...Yt])
    }, [oe, f.title, f.description, x, f.id]);
    let sr = j.useCallback(() => {
        dt(!0), Xr(_t.current), x(J => J.filter(me => me.toastId !== f.id)), setTimeout(() => {
            C(f)
        }, kA)
    }, [f, C, x, _t]);
    j.useEffect(() => {
        if (f.promise && M === "loading" || f.duration === 1 / 0 || f.type === "loading") return;
        let J;
        return E || m || G && Sm ? (() => {
            if (ir.current < Ct.current) {
                let me = new Date().getTime() - Ct.current;
                Zr.current = Zr.current - me
            }
            ir.current = new Date().getTime()
        })() : Zr.current !== 1 / 0 && (Ct.current = new Date().getTime(), J = setTimeout(() => {
            var me;
            (me = f.onAutoClose) == null || me.call(f, f), sr()
        }, Zr.current)), () => clearTimeout(J)
    }, [E, m, f, M, G, Sm, sr]), j.useEffect(() => {
        f.delete && sr()
    }, [sr, f.delete]);

    function lC() {
        var J, me, ke;
        return b != null && b.loading ? j.createElement("div", {
            className: en(O == null ? void 0 : O.loader, (J = f == null ? void 0 : f.classNames) == null ? void 0 : J.loader, "sonner-loader"),
            "data-visible": M === "loading"
        }, b.loading) : $ ? j.createElement("div", {
            className: en(O == null ? void 0 : O.loader, (me = f == null ? void 0 : f.classNames) == null ? void 0 : me.loader, "sonner-loader"),
            "data-visible": M === "loading"
        }, $) : j.createElement(rA, {
            className: en(O == null ? void 0 : O.loader, (ke = f == null ? void 0 : f.classNames) == null ? void 0 : ke.loader),
            visible: M === "loading"
        })
    }
    return j.createElement("li", {
        tabIndex: 0,
        ref: jn,
        className: en(I, Z, O == null ? void 0 : O.toast, (t = f == null ? void 0 : f.classNames) == null ? void 0 : t.toast, O == null ? void 0 : O.default, O == null ? void 0 : O[M], (n = f == null ? void 0 : f.classNames) == null ? void 0 : n[M]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = f.richColors) != null ? r : P,
        "data-styled": !(f.jsx || f.unstyled || g),
        "data-mounted": oe,
        "data-promise": !!f.promise,
        "data-swiped": ji,
        "data-removed": rt,
        "data-visible": sc,
        "data-y-position": or,
        "data-x-position": Qt,
        "data-index": v,
        "data-front": oc,
        "data-swiping": bt,
        "data-dismissible": B,
        "data-type": M,
        "data-invert": aC,
        "data-swipe-out": gn,
        "data-swipe-direction": pe,
        "data-expanded": !!(E || R && oe),
        style: {
            "--index": v,
            "--toasts-before": v,
            "--z-index": k.length - v,
            "--offset": `${rt?_i:_t.current}px`,
            "--initial-height": R ? "auto" : `${Ln}px`,
            ...N,
            ...f.style
        },
        onDragEnd: () => {
            rr(!1), Y(null), De.current = null
        },
        onPointerDown: J => {
            ac || !B || (Ra.current = new Date, Xr(_t.current), J.target.setPointerCapture(J.pointerId), J.target.tagName !== "BUTTON" && (rr(!0), De.current = {
                x: J.clientX,
                y: J.clientY
            }))
        },
        onPointerUp: () => {
            var J, me, ke, Yt;
            if (gn || !B) return;
            De.current = null;
            let Xt = Number(((J = jn.current) == null ? void 0 : J.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
                ar = Number(((me = jn.current) == null ? void 0 : me.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
                Jr = new Date().getTime() - ((ke = Ra.current) == null ? void 0 : ke.getTime()),
                Zt = T === "x" ? Xt : ar,
                lr = Math.abs(Zt) / Jr;
            if (Math.abs(Zt) >= bA || lr > .11) {
                Xr(_t.current), (Yt = f.onDismiss) == null || Yt.call(f, f), se(T === "x" ? Xt > 0 ? "right" : "left" : ar > 0 ? "down" : "up"), sr(), Li(!0), Yr(!1);
                return
            }
            rr(!1), Y(null)
        },
        onPointerMove: J => {
            var me, ke, Yt, Xt;
            if (!De.current || !B || ((me = window.getSelection()) == null ? void 0 : me.toString().length) > 0) return;
            let ar = J.clientY - De.current.y,
                Jr = J.clientX - De.current.x,
                Zt = (ke = e.swipeDirections) != null ? ke : CA(U);
            !T && (Math.abs(Jr) > 1 || Math.abs(ar) > 1) && Y(Math.abs(Jr) > Math.abs(ar) ? "x" : "y");
            let lr = {
                x: 0,
                y: 0
            };
            T === "y" ? (Zt.includes("top") || Zt.includes("bottom")) && (Zt.includes("top") && ar < 0 || Zt.includes("bottom") && ar > 0) && (lr.y = ar) : T === "x" && (Zt.includes("left") || Zt.includes("right")) && (Zt.includes("left") && Jr < 0 || Zt.includes("right") && Jr > 0) && (lr.x = Jr), (Math.abs(lr.x) > 0 || Math.abs(lr.y) > 0) && Yr(!0), (Yt = jn.current) == null || Yt.style.setProperty("--swipe-amount-x", `${lr.x}px`), (Xt = jn.current) == null || Xt.style.setProperty("--swipe-amount-y", `${lr.y}px`)
        }
    }, kt && !f.jsx ? j.createElement("button", {
        "aria-label": q,
        "data-disabled": ac,
        "data-close-button": !0,
        onClick: ac || !B ? () => {} : () => {
            var J;
            sr(), (J = f.onDismiss) == null || J.call(f, f)
        },
        className: en(O == null ? void 0 : O.closeButton, (i = f == null ? void 0 : f.classNames) == null ? void 0 : i.closeButton)
    }, (o = b == null ? void 0 : b.close) != null ? o : lA) : null, f.jsx || w.isValidElement(f.title) ? f.jsx ? f.jsx : typeof f.title == "function" ? f.title() : f.title : j.createElement(j.Fragment, null, M || f.icon || f.promise ? j.createElement("div", {
        "data-icon": "",
        className: en(O == null ? void 0 : O.icon, (s = f == null ? void 0 : f.classNames) == null ? void 0 : s.icon)
    }, f.promise || f.type === "loading" && !f.icon ? f.icon || lC() : null, f.type !== "loading" ? f.icon || (b == null ? void 0 : b[M]) || tA(M) : null) : null, j.createElement("div", {
        "data-content": "",
        className: en(O == null ? void 0 : O.content, (a = f == null ? void 0 : f.classNames) == null ? void 0 : a.content)
    }, j.createElement("div", {
        "data-title": "",
        className: en(O == null ? void 0 : O.title, (l = f == null ? void 0 : f.classNames) == null ? void 0 : l.title)
    }, typeof f.title == "function" ? f.title() : f.title), f.description ? j.createElement("div", {
        "data-description": "",
        className: en(W, re, O == null ? void 0 : O.description, (u = f == null ? void 0 : f.classNames) == null ? void 0 : u.description)
    }, typeof f.description == "function" ? f.description() : f.description) : null), w.isValidElement(f.cancel) ? f.cancel : f.cancel && Ya(f.cancel) ? j.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: f.cancelButtonStyle || D,
        onClick: J => {
            var me, ke;
            Ya(f.cancel) && B && ((ke = (me = f.cancel).onClick) == null || ke.call(me, J), sr())
        },
        className: en(O == null ? void 0 : O.cancelButton, (c = f == null ? void 0 : f.classNames) == null ? void 0 : c.cancelButton)
    }, f.cancel.label) : null, w.isValidElement(f.action) ? f.action : f.action && Ya(f.action) ? j.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: f.actionButtonStyle || _,
        onClick: J => {
            var me, ke;
            Ya(f.action) && ((ke = (me = f.action).onClick) == null || ke.call(me, J), !J.defaultPrevented && sr())
        },
        className: en(O == null ? void 0 : O.actionButton, (d = f == null ? void 0 : f.classNames) == null ? void 0 : d.actionButton)
    }, f.action.label) : null))
};

function ny() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}

function TA(e, t) {
    let n = {};
    return [e, t].forEach((r, i) => {
        let o = i === 1,
            s = o ? "--mobile-offset" : "--offset",
            a = o ? xA : vA;

        function l(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u
            })
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${s}-${u}`] = a : n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }) : l(a)
    }), n
}
var PA = w.forwardRef(function(e, t) {
    let {
        invert: n,
        position: r = "bottom-right",
        hotkey: i = ["altKey", "KeyT"],
        expand: o,
        closeButton: s,
        className: a,
        offset: l,
        mobileOffset: u,
        theme: c = "light",
        richColors: d,
        duration: h,
        style: f,
        visibleToasts: g = yA,
        toastOptions: m,
        dir: x = ny(),
        gap: p = SA,
        loadingIcon: y,
        icons: v,
        containerAriaLabel: k = "Notifications",
        pauseWhenPageIsHidden: E
    } = e, [C, P] = j.useState([]), A = j.useMemo(() => Array.from(new Set([r].concat(C.filter(G => G.position).map(G => G.position)))), [C, r]), [N, D] = j.useState([]), [_, I] = j.useState(!1), [W, F] = j.useState(!1), [U, K] = j.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), $ = j.useRef(null), R = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), O = j.useRef(null), b = j.useRef(!1), q = j.useCallback(G => {
        P(T => {
            var Y;
            return (Y = T.find(pe => pe.id === G.id)) != null && Y.delete || ht.dismiss(G.id), T.filter(({
                id: pe
            }) => pe !== G.id)
        })
    }, []);
    return j.useEffect(() => ht.subscribe(G => {
        if (G.dismiss) {
            P(T => T.map(Y => Y.id === G.id ? { ...Y,
                delete: !0
            } : Y));
            return
        }
        setTimeout(() => {
            ow.flushSync(() => {
                P(T => {
                    let Y = T.findIndex(pe => pe.id === G.id);
                    return Y !== -1 ? [...T.slice(0, Y), { ...T[Y],
                        ...G
                    }, ...T.slice(Y + 1)] : [G, ...T]
                })
            })
        })
    }), []), j.useEffect(() => {
        if (c !== "system") {
            K(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? K("dark") : K("light")), typeof window > "u") return;
        let G = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            G.addEventListener("change", ({
                matches: T
            }) => {
                K(T ? "dark" : "light")
            })
        } catch {
            G.addListener(({
                matches: Y
            }) => {
                try {
                    K(Y ? "dark" : "light")
                } catch (pe) {
                    console.error(pe)
                }
            })
        }
    }, [c]), j.useEffect(() => {
        C.length <= 1 && I(!1)
    }, [C]), j.useEffect(() => {
        let G = T => {
            var Y, pe;
            i.every(se => T[se] || T.code === se) && (I(!0), (Y = $.current) == null || Y.focus()), T.code === "Escape" && (document.activeElement === $.current || (pe = $.current) != null && pe.contains(document.activeElement)) && I(!1)
        };
        return document.addEventListener("keydown", G), () => document.removeEventListener("keydown", G)
    }, [i]), j.useEffect(() => {
        if ($.current) return () => {
            O.current && (O.current.focus({
                preventScroll: !0
            }), O.current = null, b.current = !1)
        }
    }, [$.current]), j.createElement("section", {
        ref: t,
        "aria-label": `${k} ${R}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, A.map((G, T) => {
        var Y;
        let [pe, se] = G.split("-");
        return C.length ? j.createElement("ol", {
            key: G,
            dir: x === "auto" ? ny() : x,
            tabIndex: -1,
            ref: $,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": U,
            "data-y-position": pe,
            "data-lifted": _ && C.length > 1 && !o,
            "data-x-position": se,
            style: {
                "--front-toast-height": `${((Y=N[0])==null?void 0:Y.height)||0}px`,
                "--width": `${wA}px`,
                "--gap": `${p}px`,
                ...f,
                ...TA(l, u)
            },
            onBlur: oe => {
                b.current && !oe.currentTarget.contains(oe.relatedTarget) && (b.current = !1, O.current && (O.current.focus({
                    preventScroll: !0
                }), O.current = null))
            },
            onFocus: oe => {
                oe.target instanceof HTMLElement && oe.target.dataset.dismissible === "false" || b.current || (b.current = !0, O.current = oe.relatedTarget)
            },
            onMouseEnter: () => I(!0),
            onMouseMove: () => I(!0),
            onMouseLeave: () => {
                W || I(!1)
            },
            onDragEnd: () => I(!1),
            onPointerDown: oe => {
                oe.target instanceof HTMLElement && oe.target.dataset.dismissible === "false" || F(!0)
            },
            onPointerUp: () => F(!1)
        }, C.filter(oe => !oe.position && T === 0 || oe.position === G).map((oe, nt) => {
            var rt, dt;
            return j.createElement(EA, {
                key: oe.id,
                icons: v,
                index: nt,
                toast: oe,
                defaultRichColors: d,
                duration: (rt = m == null ? void 0 : m.duration) != null ? rt : h,
                className: m == null ? void 0 : m.className,
                descriptionClassName: m == null ? void 0 : m.descriptionClassName,
                invert: n,
                visibleToasts: g,
                closeButton: (dt = m == null ? void 0 : m.closeButton) != null ? dt : s,
                interacting: W,
                position: G,
                style: m == null ? void 0 : m.style,
                unstyled: m == null ? void 0 : m.unstyled,
                classNames: m == null ? void 0 : m.classNames,
                cancelButtonStyle: m == null ? void 0 : m.cancelButtonStyle,
                actionButtonStyle: m == null ? void 0 : m.actionButtonStyle,
                removeToast: q,
                toasts: C.filter(bt => bt.position == oe.position),
                heights: N.filter(bt => bt.position == oe.position),
                setHeights: D,
                expandByDefault: o,
                gap: p,
                loadingIcon: y,
                expanded: _,
                pauseWhenPageIsHidden: E,
                swipeDirections: e.swipeDirections
            })
        })) : null
    }))
});
const AA = ({ ...e
    }) => {
        const {
            theme: t = "system"
        } = eA();
        return S.jsx(PA, {
            theme: t,
            className: "toaster group",
            toastOptions: {
                classNames: {
                    toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
                }
            },
            ...e
        })
    },
    RA = 1,
    MA = 1e6;
let Bc = 0;

function NA() {
    return Bc = (Bc + 1) % Number.MAX_SAFE_INTEGER, Bc.toString()
}
const $c = new Map,
    ry = e => {
        if ($c.has(e)) return;
        const t = setTimeout(() => {
            $c.delete(e), As({
                type: "REMOVE_TOAST",
                toastId: e
            })
        }, MA);
        $c.set(e, t)
    },
    IA = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, RA)
                };
            case "UPDATE_TOAST":
                return { ...e,
                    toasts: e.toasts.map(n => n.id === t.toast.id ? { ...n,
                        ...t.toast
                    } : n)
                };
            case "DISMISS_TOAST":
                {
                    const {
                        toastId: n
                    } = t;
                    return n ? ry(n) : e.toasts.forEach(r => {
                        ry(r.id)
                    }),
                    { ...e,
                        toasts: e.toasts.map(r => r.id === n || n === void 0 ? { ...r,
                            open: !1
                        } : r)
                    }
                }
            case "REMOVE_TOAST":
                return t.toastId === void 0 ? { ...e,
                    toasts: []
                } : { ...e,
                    toasts: e.toasts.filter(n => n.id !== t.toastId)
                }
        }
    },
    bl = [];
let kl = {
    toasts: []
};

function As(e) {
    kl = IA(kl, e), bl.forEach(t => {
        t(kl)
    })
}

function OA({ ...e
}) {
    const t = NA(),
        n = i => As({
            type: "UPDATE_TOAST",
            toast: { ...i,
                id: t
            }
        }),
        r = () => As({
            type: "DISMISS_TOAST",
            toastId: t
        });
    return As({
        type: "ADD_TOAST",
        toast: { ...e,
            id: t,
            open: !0,
            onOpenChange: i => {
                i || r()
            }
        }
    }), {
        id: t,
        dismiss: r,
        update: n
    }
}

function DA() {
    const [e, t] = w.useState(kl);
    return w.useEffect(() => (bl.push(t), () => {
        const n = bl.indexOf(t);
        n > -1 && bl.splice(n, 1)
    }), [e]), { ...e,
        toast: OA,
        dismiss: n => As({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}

function ze(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(i) {
        if (e == null || e(i), n === !1 || !i.defaultPrevented) return t == null ? void 0 : t(i)
    }
}

function iy(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function Ow(...e) {
    return t => {
        let n = !1;
        const r = e.map(i => {
            const o = iy(i, t);
            return !n && typeof o == "function" && (n = !0), o
        });
        if (n) return () => {
            for (let i = 0; i < r.length; i++) {
                const o = r[i];
                typeof o == "function" ? o() : iy(e[i], null)
            }
        }
    }
}

function hn(...e) {
    return w.useCallback(Ow(...e), e)
}

function Vu(e, t = []) {
    let n = [];

    function r(o, s) {
        const a = w.createContext(s),
            l = n.length;
        n = [...n, s];
        const u = d => {
            var p;
            const {
                scope: h,
                children: f,
                ...g
            } = d, m = ((p = h == null ? void 0 : h[e]) == null ? void 0 : p[l]) || a, x = w.useMemo(() => g, Object.values(g));
            return S.jsx(m.Provider, {
                value: x,
                children: f
            })
        };
        u.displayName = o + "Provider";

        function c(d, h) {
            var m;
            const f = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[l]) || a,
                g = w.useContext(f);
            if (g) return g;
            if (s !== void 0) return s;
            throw new Error(`\`${d}\` must be used within \`${o}\``)
        }
        return [u, c]
    }
    const i = () => {
        const o = n.map(s => w.createContext(s));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || o;
            return w.useMemo(() => ({
                [`__scope${e}`]: { ...a,
                    [e]: l
                }
            }), [a, l])
        }
    };
    return i.scopeName = e, [r, LA(i, ...t)]
}

function LA(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(i => ({
            useScope: i(),
            scopeName: i.scopeName
        }));
        return function(o) {
            const s = r.reduce((a, {
                useScope: l,
                scopeName: u
            }) => {
                const d = l(o)[`__scope${u}`];
                return { ...a,
                    ...d
                }
            }, {});
            return w.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    };
    return n.scopeName = t.scopeName, n
}

function su(e) {
    const t = jA(e),
        n = w.forwardRef((r, i) => {
            const {
                children: o,
                ...s
            } = r, a = w.Children.toArray(o), l = a.find(FA);
            if (l) {
                const u = l.props.children,
                    c = a.map(d => d === l ? w.Children.count(u) > 1 ? w.Children.only(null) : w.isValidElement(u) ? u.props.children : null : d);
                return S.jsx(t, { ...s,
                    ref: i,
                    children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null
                })
            }
            return S.jsx(t, { ...s,
                ref: i,
                children: o
            })
        });
    return n.displayName = `${e}.Slot`, n
}
var xz = su("Slot");

function jA(e) {
    const t = w.forwardRef((n, r) => {
        const {
            children: i,
            ...o
        } = n;
        if (w.isValidElement(i)) {
            const s = VA(i),
                a = zA(o, i.props);
            return i.type !== w.Fragment && (a.ref = r ? Ow(r, s) : s), w.cloneElement(i, a)
        }
        return w.Children.count(i) > 1 ? w.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var Dw = Symbol("radix.slottable");

function _A(e) {
    const t = ({
        children: n
    }) => S.jsx(S.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`, t.__radixId = Dw, t
}

function FA(e) {
    return w.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Dw
}

function zA(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const i = e[r],
            o = t[r];
        /^on[A-Z]/.test(r) ? i && o ? n[r] = (...a) => {
            const l = o(...a);
            return i(...a), l
        } : i && (n[r] = i) : r === "style" ? n[r] = { ...i,
            ...o
        } : r === "className" && (n[r] = [i, o].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function VA(e) {
    var r, i;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function BA(e) {
    const t = e + "CollectionProvider",
        [n, r] = Vu(t),
        [i, o] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        s = m => {
            const {
                scope: x,
                children: p
            } = m, y = j.useRef(null), v = j.useRef(new Map).current;
            return S.jsx(i, {
                scope: x,
                itemMap: v,
                collectionRef: y,
                children: p
            })
        };
    s.displayName = t;
    const a = e + "CollectionSlot",
        l = su(a),
        u = j.forwardRef((m, x) => {
            const {
                scope: p,
                children: y
            } = m, v = o(a, p), k = hn(x, v.collectionRef);
            return S.jsx(l, {
                ref: k,
                children: y
            })
        });
    u.displayName = a;
    const c = e + "CollectionItemSlot",
        d = "data-radix-collection-item",
        h = su(c),
        f = j.forwardRef((m, x) => {
            const {
                scope: p,
                children: y,
                ...v
            } = m, k = j.useRef(null), E = hn(x, k), C = o(c, p);
            return j.useEffect(() => (C.itemMap.set(k, {
                ref: k,
                ...v
            }), () => void C.itemMap.delete(k))), S.jsx(h, {
                [d]: "",
                ref: E,
                children: y
            })
        });
    f.displayName = c;

    function g(m) {
        const x = o(e + "CollectionConsumer", m);
        return j.useCallback(() => {
            const y = x.collectionRef.current;
            if (!y) return [];
            const v = Array.from(y.querySelectorAll(`[${d}]`));
            return Array.from(x.itemMap.values()).sort((C, P) => v.indexOf(C.ref.current) - v.indexOf(P.ref.current))
        }, [x.collectionRef, x.itemMap])
    }
    return [{
        Provider: s,
        Slot: u,
        ItemSlot: f
    }, g, r]
}
var $A = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    wt = $A.reduce((e, t) => {
        const n = su(`Primitive.${t}`),
            r = w.forwardRef((i, o) => {
                const {
                    asChild: s,
                    ...a
                } = i, l = s ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), S.jsx(l, { ...a,
                    ref: o
                })
            });
        return r.displayName = `Primitive.${t}`, { ...e,
            [t]: r
        }
    }, {});

function Lw(e, t) {
    e && xa.flushSync(() => e.dispatchEvent(t))
}

function Vr(e) {
    const t = w.useRef(e);
    return w.useEffect(() => {
        t.current = e
    }), w.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}

function UA(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Vr(e);
    w.useEffect(() => {
        const r = i => {
            i.key === "Escape" && n(i)
        };
        return t.addEventListener("keydown", r, {
            capture: !0
        }), () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [n, t])
}
var HA = "DismissableLayer",
    Cf = "dismissableLayer.update",
    WA = "dismissableLayer.pointerDownOutside",
    KA = "dismissableLayer.focusOutside",
    oy, jw = w.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    lp = w.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: i,
            onFocusOutside: o,
            onInteractOutside: s,
            onDismiss: a,
            ...l
        } = e, u = w.useContext(jw), [c, d] = w.useState(null), h = (c == null ? void 0 : c.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, f] = w.useState({}), g = hn(t, P => d(P)), m = Array.from(u.layers), [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), p = m.indexOf(x), y = c ? m.indexOf(c) : -1, v = u.layersWithOutsidePointerEventsDisabled.size > 0, k = y >= p, E = qA(P => {
            const A = P.target,
                N = [...u.branches].some(D => D.contains(A));
            !k || N || (i == null || i(P), s == null || s(P), P.defaultPrevented || a == null || a())
        }, h), C = QA(P => {
            const A = P.target;
            [...u.branches].some(D => D.contains(A)) || (o == null || o(P), s == null || s(P), P.defaultPrevented || a == null || a())
        }, h);
        return UA(P => {
            y === u.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && a && (P.preventDefault(), a()))
        }, h), w.useEffect(() => {
            if (c) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (oy = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), sy(), () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = oy)
            }
        }, [c, h, n, u]), w.useEffect(() => () => {
            c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), sy())
        }, [c, u]), w.useEffect(() => {
            const P = () => f({});
            return document.addEventListener(Cf, P), () => document.removeEventListener(Cf, P)
        }, []), S.jsx(wt.div, { ...l,
            ref: g,
            style: {
                pointerEvents: v ? k ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: ze(e.onFocusCapture, C.onFocusCapture),
            onBlurCapture: ze(e.onBlurCapture, C.onBlurCapture),
            onPointerDownCapture: ze(e.onPointerDownCapture, E.onPointerDownCapture)
        })
    });
lp.displayName = HA;
var GA = "DismissableLayerBranch",
    _w = w.forwardRef((e, t) => {
        const n = w.useContext(jw),
            r = w.useRef(null),
            i = hn(t, r);
        return w.useEffect(() => {
            const o = r.current;
            if (o) return n.branches.add(o), () => {
                n.branches.delete(o)
            }
        }, [n.branches]), S.jsx(wt.div, { ...e,
            ref: i
        })
    });
_w.displayName = GA;

function qA(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Vr(e),
        r = w.useRef(!1),
        i = w.useRef(() => {});
    return w.useEffect(() => {
        const o = a => {
                if (a.target && !r.current) {
                    let l = function() {
                        Fw(WA, n, u, {
                            discrete: !0
                        })
                    };
                    const u = {
                        originalEvent: a
                    };
                    a.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = l, t.addEventListener("click", i.current, {
                        once: !0
                    })) : l()
                } else t.removeEventListener("click", i.current);
                r.current = !1
            },
            s = window.setTimeout(() => {
                t.addEventListener("pointerdown", o)
            }, 0);
        return () => {
            window.clearTimeout(s), t.removeEventListener("pointerdown", o), t.removeEventListener("click", i.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function QA(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Vr(e),
        r = w.useRef(!1);
    return w.useEffect(() => {
        const i = o => {
            o.target && !r.current && Fw(KA, n, {
                originalEvent: o
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function sy() {
    const e = new CustomEvent(Cf);
    document.dispatchEvent(e)
}

function Fw(e, t, n, {
    discrete: r
}) {
    const i = n.originalEvent.target,
        o = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && i.addEventListener(e, t, {
        once: !0
    }), r ? Lw(i, o) : i.dispatchEvent(o)
}
var YA = lp,
    XA = _w,
    Zn = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {},
    ZA = "Portal",
    zw = w.forwardRef((e, t) => {
        var a;
        const {
            container: n,
            ...r
        } = e, [i, o] = w.useState(!1);
        Zn(() => o(!0), []);
        const s = n || i && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
        return s ? ow.createPortal(S.jsx(wt.div, { ...r,
            ref: t
        }), s) : null
    });
zw.displayName = ZA;

function JA(e, t) {
    return w.useReducer((n, r) => t[n][r] ? ? n, e)
}
var up = e => {
    const {
        present: t,
        children: n
    } = e, r = eR(t), i = typeof n == "function" ? n({
        present: r.isPresent
    }) : w.Children.only(n), o = hn(r.ref, tR(i));
    return typeof n == "function" || r.isPresent ? w.cloneElement(i, {
        ref: o
    }) : null
};
up.displayName = "Presence";

function eR(e) {
    const [t, n] = w.useState(), r = w.useRef(null), i = w.useRef(e), o = w.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = JA(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return w.useEffect(() => {
        const u = Xa(r.current);
        o.current = a === "mounted" ? u : "none"
    }, [a]), Zn(() => {
        const u = r.current,
            c = i.current;
        if (c !== e) {
            const h = o.current,
                f = Xa(u);
            e ? l("MOUNT") : f === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && h !== f ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
        }
    }, [e, l]), Zn(() => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ? ? window,
                d = f => {
                    const m = Xa(r.current).includes(f.animationName);
                    if (f.target === t && m && (l("ANIMATION_END"), !i.current)) {
                        const x = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", u = c.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x)
                        })
                    }
                },
                h = f => {
                    f.target === t && (o.current = Xa(r.current))
                };
            return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
                c.clearTimeout(u), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d)
            }
        } else l("ANIMATION_END")
    }, [t, l]), {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: w.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null, n(u)
        }, [])
    }
}

function Xa(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function tR(e) {
    var r, i;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var nR = fh[" useInsertionEffect ".trim().toString()] || Zn;

function Vw({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: r
}) {
    const [i, o, s] = rR({
        defaultProp: t,
        onChange: n
    }), a = e !== void 0, l = a ? e : i; {
        const c = w.useRef(e !== void 0);
        w.useEffect(() => {
            const d = c.current;
            d !== a && console.warn(`${r} is changing from ${d?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), c.current = a
        }, [a, r])
    }
    const u = w.useCallback(c => {
        var d;
        if (a) {
            const h = iR(c) ? c(e) : c;
            h !== e && ((d = s.current) == null || d.call(s, h))
        } else o(c)
    }, [a, e, o, s]);
    return [l, u]
}

function rR({
    defaultProp: e,
    onChange: t
}) {
    const [n, r] = w.useState(e), i = w.useRef(n), o = w.useRef(t);
    return nR(() => {
        o.current = t
    }, [t]), w.useEffect(() => {
        var s;
        i.current !== n && ((s = o.current) == null || s.call(o, n), i.current = n)
    }, [n, i]), [n, r, o]
}

function iR(e) {
    return typeof e == "function"
}
var oR = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    sR = "VisuallyHidden",
    Bu = w.forwardRef((e, t) => S.jsx(wt.span, { ...e,
        ref: t,
        style: { ...oR,
            ...e.style
        }
    }));
Bu.displayName = sR;
var aR = Bu,
    cp = "ToastProvider",
    [dp, lR, uR] = BA("Toast"),
    [Bw, wz] = Vu("Toast", [uR]),
    [cR, $u] = Bw(cp),
    $w = e => {
        const {
            __scopeToast: t,
            label: n = "Notification",
            duration: r = 5e3,
            swipeDirection: i = "right",
            swipeThreshold: o = 50,
            children: s
        } = e, [a, l] = w.useState(null), [u, c] = w.useState(0), d = w.useRef(!1), h = w.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${cp}\`. Expected non-empty \`string\`.`), S.jsx(dp.Provider, {
            scope: t,
            children: S.jsx(cR, {
                scope: t,
                label: n,
                duration: r,
                swipeDirection: i,
                swipeThreshold: o,
                toastCount: u,
                viewport: a,
                onViewportChange: l,
                onToastAdd: w.useCallback(() => c(f => f + 1), []),
                onToastRemove: w.useCallback(() => c(f => f - 1), []),
                isFocusedToastEscapeKeyDownRef: d,
                isClosePausedRef: h,
                children: s
            })
        })
    };
$w.displayName = cp;
var Uw = "ToastViewport",
    dR = ["F8"],
    Ef = "toast.viewportPause",
    Tf = "toast.viewportResume",
    Hw = w.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            hotkey: r = dR,
            label: i = "Notifications ({hotkey})",
            ...o
        } = e, s = $u(Uw, n), a = lR(n), l = w.useRef(null), u = w.useRef(null), c = w.useRef(null), d = w.useRef(null), h = hn(t, d, s.onViewportChange), f = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), g = s.toastCount > 0;
        w.useEffect(() => {
            const x = p => {
                var v;
                r.length !== 0 && r.every(k => p[k] || p.code === k) && ((v = d.current) == null || v.focus())
            };
            return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x)
        }, [r]), w.useEffect(() => {
            const x = l.current,
                p = d.current;
            if (g && x && p) {
                const y = () => {
                        if (!s.isClosePausedRef.current) {
                            const C = new CustomEvent(Ef);
                            p.dispatchEvent(C), s.isClosePausedRef.current = !0
                        }
                    },
                    v = () => {
                        if (s.isClosePausedRef.current) {
                            const C = new CustomEvent(Tf);
                            p.dispatchEvent(C), s.isClosePausedRef.current = !1
                        }
                    },
                    k = C => {
                        !x.contains(C.relatedTarget) && v()
                    },
                    E = () => {
                        x.contains(document.activeElement) || v()
                    };
                return x.addEventListener("focusin", y), x.addEventListener("focusout", k), x.addEventListener("pointermove", y), x.addEventListener("pointerleave", E), window.addEventListener("blur", y), window.addEventListener("focus", v), () => {
                    x.removeEventListener("focusin", y), x.removeEventListener("focusout", k), x.removeEventListener("pointermove", y), x.removeEventListener("pointerleave", E), window.removeEventListener("blur", y), window.removeEventListener("focus", v)
                }
            }
        }, [g, s.isClosePausedRef]);
        const m = w.useCallback(({
            tabbingDirection: x
        }) => {
            const y = a().map(v => {
                const k = v.ref.current,
                    E = [k, ...CR(k)];
                return x === "forwards" ? E : E.reverse()
            });
            return (x === "forwards" ? y.reverse() : y).flat()
        }, [a]);
        return w.useEffect(() => {
            const x = d.current;
            if (x) {
                const p = y => {
                    var E, C, P;
                    const v = y.altKey || y.ctrlKey || y.metaKey;
                    if (y.key === "Tab" && !v) {
                        const A = document.activeElement,
                            N = y.shiftKey;
                        if (y.target === x && N) {
                            (E = u.current) == null || E.focus();
                            return
                        }
                        const I = m({
                                tabbingDirection: N ? "backwards" : "forwards"
                            }),
                            W = I.findIndex(F => F === A);
                        Uc(I.slice(W + 1)) ? y.preventDefault() : N ? (C = u.current) == null || C.focus() : (P = c.current) == null || P.focus()
                    }
                };
                return x.addEventListener("keydown", p), () => x.removeEventListener("keydown", p)
            }
        }, [a, m]), S.jsxs(XA, {
            ref: l,
            role: "region",
            "aria-label": i.replace("{hotkey}", f),
            tabIndex: -1,
            style: {
                pointerEvents: g ? void 0 : "none"
            },
            children: [g && S.jsx(Pf, {
                ref: u,
                onFocusFromOutsideViewport: () => {
                    const x = m({
                        tabbingDirection: "forwards"
                    });
                    Uc(x)
                }
            }), S.jsx(dp.Slot, {
                scope: n,
                children: S.jsx(wt.ol, {
                    tabIndex: -1,
                    ...o,
                    ref: h
                })
            }), g && S.jsx(Pf, {
                ref: c,
                onFocusFromOutsideViewport: () => {
                    const x = m({
                        tabbingDirection: "backwards"
                    });
                    Uc(x)
                }
            })]
        })
    });
Hw.displayName = Uw;
var Ww = "ToastFocusProxy",
    Pf = w.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            onFocusFromOutsideViewport: r,
            ...i
        } = e, o = $u(Ww, n);
        return S.jsx(Bu, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...i,
            ref: t,
            style: {
                position: "fixed"
            },
            onFocus: s => {
                var u;
                const a = s.relatedTarget;
                !((u = o.viewport) != null && u.contains(a)) && r()
            }
        })
    });
Pf.displayName = Ww;
var Sa = "Toast",
    fR = "toast.swipeStart",
    hR = "toast.swipeMove",
    pR = "toast.swipeCancel",
    mR = "toast.swipeEnd",
    Kw = w.forwardRef((e, t) => {
        const {
            forceMount: n,
            open: r,
            defaultOpen: i,
            onOpenChange: o,
            ...s
        } = e, [a, l] = Vw({
            prop: r,
            defaultProp: i ? ? !0,
            onChange: o,
            caller: Sa
        });
        return S.jsx(up, {
            present: n || a,
            children: S.jsx(vR, {
                open: a,
                ...s,
                ref: t,
                onClose: () => l(!1),
                onPause: Vr(e.onPause),
                onResume: Vr(e.onResume),
                onSwipeStart: ze(e.onSwipeStart, u => {
                    u.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: ze(e.onSwipeMove, u => {
                    const {
                        x: c,
                        y: d
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
                }),
                onSwipeCancel: ze(e.onSwipeCancel, u => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: ze(e.onSwipeEnd, u => {
                    const {
                        x: c,
                        y: d
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), l(!1)
                })
            })
        })
    });
Kw.displayName = Sa;
var [gR, yR] = Bw(Sa, {
    onClose() {}
}), vR = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: i,
        open: o,
        onClose: s,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: d,
        onSwipeCancel: h,
        onSwipeEnd: f,
        ...g
    } = e, m = $u(Sa, n), [x, p] = w.useState(null), y = hn(t, F => p(F)), v = w.useRef(null), k = w.useRef(null), E = i || m.duration, C = w.useRef(0), P = w.useRef(E), A = w.useRef(0), {
        onToastAdd: N,
        onToastRemove: D
    } = m, _ = Vr(() => {
        var U;
        (x == null ? void 0 : x.contains(document.activeElement)) && ((U = m.viewport) == null || U.focus()), s()
    }), I = w.useCallback(F => {
        !F || F === 1 / 0 || (window.clearTimeout(A.current), C.current = new Date().getTime(), A.current = window.setTimeout(_, F))
    }, [_]);
    w.useEffect(() => {
        const F = m.viewport;
        if (F) {
            const U = () => {
                    I(P.current), u == null || u()
                },
                K = () => {
                    const $ = new Date().getTime() - C.current;
                    P.current = P.current - $, window.clearTimeout(A.current), l == null || l()
                };
            return F.addEventListener(Ef, K), F.addEventListener(Tf, U), () => {
                F.removeEventListener(Ef, K), F.removeEventListener(Tf, U)
            }
        }
    }, [m.viewport, E, l, u, I]), w.useEffect(() => {
        o && !m.isClosePausedRef.current && I(E)
    }, [o, E, m.isClosePausedRef, I]), w.useEffect(() => (N(), () => D()), [N, D]);
    const W = w.useMemo(() => x ? Jw(x) : null, [x]);
    return m.viewport ? S.jsxs(S.Fragment, {
        children: [W && S.jsx(xR, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: W
        }), S.jsx(gR, {
            scope: n,
            onClose: _,
            children: xa.createPortal(S.jsx(dp.ItemSlot, {
                scope: n,
                children: S.jsx(YA, {
                    asChild: !0,
                    onEscapeKeyDown: ze(a, () => {
                        m.isFocusedToastEscapeKeyDownRef.current || _(), m.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: S.jsx(wt.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": o ? "open" : "closed",
                        "data-swipe-direction": m.swipeDirection,
                        ...g,
                        ref: y,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: ze(e.onKeyDown, F => {
                            F.key === "Escape" && (a == null || a(F.nativeEvent), F.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, _()))
                        }),
                        onPointerDown: ze(e.onPointerDown, F => {
                            F.button === 0 && (v.current = {
                                x: F.clientX,
                                y: F.clientY
                            })
                        }),
                        onPointerMove: ze(e.onPointerMove, F => {
                            if (!v.current) return;
                            const U = F.clientX - v.current.x,
                                K = F.clientY - v.current.y,
                                $ = !!k.current,
                                R = ["left", "right"].includes(m.swipeDirection),
                                O = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max,
                                b = R ? O(0, U) : 0,
                                q = R ? 0 : O(0, K),
                                G = F.pointerType === "touch" ? 10 : 2,
                                T = {
                                    x: b,
                                    y: q
                                },
                                Y = {
                                    originalEvent: F,
                                    delta: T
                                };
                            $ ? (k.current = T, Za(hR, d, Y, {
                                discrete: !1
                            })) : ay(T, m.swipeDirection, G) ? (k.current = T, Za(fR, c, Y, {
                                discrete: !1
                            }), F.target.setPointerCapture(F.pointerId)) : (Math.abs(U) > G || Math.abs(K) > G) && (v.current = null)
                        }),
                        onPointerUp: ze(e.onPointerUp, F => {
                            const U = k.current,
                                K = F.target;
                            if (K.hasPointerCapture(F.pointerId) && K.releasePointerCapture(F.pointerId), k.current = null, v.current = null, U) {
                                const $ = F.currentTarget,
                                    R = {
                                        originalEvent: F,
                                        delta: U
                                    };
                                ay(U, m.swipeDirection, m.swipeThreshold) ? Za(mR, f, R, {
                                    discrete: !0
                                }) : Za(pR, h, R, {
                                    discrete: !0
                                }), $.addEventListener("click", O => O.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), m.viewport)
        })]
    }) : null
}), xR = e => {
    const {
        __scopeToast: t,
        children: n,
        ...r
    } = e, i = $u(Sa, t), [o, s] = w.useState(!1), [a, l] = w.useState(!1);
    return bR(() => s(!0)), w.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }, []), a ? null : S.jsx(zw, {
        asChild: !0,
        children: S.jsx(Bu, { ...r,
            children: o && S.jsxs(S.Fragment, {
                children: [i.label, " ", n]
            })
        })
    })
}, wR = "ToastTitle", Gw = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        ...r
    } = e;
    return S.jsx(wt.div, { ...r,
        ref: t
    })
});
Gw.displayName = wR;
var SR = "ToastDescription",
    qw = w.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e;
        return S.jsx(wt.div, { ...r,
            ref: t
        })
    });
qw.displayName = SR;
var Qw = "ToastAction",
    Yw = w.forwardRef((e, t) => {
        const {
            altText: n,
            ...r
        } = e;
        return n.trim() ? S.jsx(Zw, {
            altText: n,
            asChild: !0,
            children: S.jsx(fp, { ...r,
                ref: t
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${Qw}\`. Expected non-empty \`string\`.`), null)
    });
Yw.displayName = Qw;
var Xw = "ToastClose",
    fp = w.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e, i = yR(Xw, n);
        return S.jsx(Zw, {
            asChild: !0,
            children: S.jsx(wt.button, {
                type: "button",
                ...r,
                ref: t,
                onClick: ze(e.onClick, i.onClose)
            })
        })
    });
fp.displayName = Xw;
var Zw = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        altText: r,
        ...i
    } = e;
    return S.jsx(wt.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...i,
        ref: t
    })
});

function Jw(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), kR(r)) {
            const i = r.ariaHidden || r.hidden || r.style.display === "none",
                o = r.dataset.radixToastAnnounceExclude === "";
            if (!i)
                if (o) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else t.push(...Jw(r))
        }
    }), t
}

function Za(e, t, n, {
    discrete: r
}) {
    const i = n.originalEvent.currentTarget,
        o = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && i.addEventListener(e, t, {
        once: !0
    }), r ? Lw(i, o) : i.dispatchEvent(o)
}
var ay = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        i = Math.abs(e.y),
        o = r > i;
    return t === "left" || t === "right" ? o && r > n : !o && i > n
};

function bR(e = () => {}) {
    const t = Vr(e);
    Zn(() => {
        let n = 0,
            r = 0;
        return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(n), window.cancelAnimationFrame(r)
        }
    }, [t])
}

function kR(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function CR(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const i = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function Uc(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}
var ER = $w,
    eS = Hw,
    tS = Kw,
    nS = Gw,
    rS = qw,
    iS = Yw,
    oS = fp;

function sS(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++) e[t] && (n = sS(e[t])) && (r && (r += " "), r += n)
        } else
            for (n in e) e[n] && (r && (r += " "), r += n);
    return r
}

function aS() {
    for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)(e = arguments[n]) && (t = sS(e)) && (r && (r += " "), r += t);
    return r
}
const ly = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
    uy = aS,
    TR = (e, t) => n => {
        var r;
        if ((t == null ? void 0 : t.variants) == null) return uy(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const {
            variants: i,
            defaultVariants: o
        } = t, s = Object.keys(i).map(u => {
            const c = n == null ? void 0 : n[u],
                d = o == null ? void 0 : o[u];
            if (c === null) return null;
            const h = ly(c) || ly(d);
            return i[u][h]
        }), a = n && Object.entries(n).reduce((u, c) => {
            let [d, h] = c;
            return h === void 0 || (u[d] = h), u
        }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c) => {
            let {
                class: d,
                className: h,
                ...f
            } = c;
            return Object.entries(f).every(g => {
                let [m, x] = g;
                return Array.isArray(x) ? x.includes({ ...o,
                    ...a
                }[m]) : { ...o,
                    ...a
                }[m] === x
            }) ? [...u, d, h] : u
        }, []);
        return uy(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PR = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    lS = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var AR = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RR = w.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: o,
    iconNode: s,
    ...a
}, l) => w.createElement("svg", {
    ref: l,
    ...AR,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: lS("lucide", i),
    ...a
}, [...s.map(([u, c]) => w.createElement(u, c)), ...Array.isArray(o) ? o : [o]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const de = (e, t) => {
    const n = w.forwardRef(({
        className: r,
        ...i
    }, o) => w.createElement(RR, {
        ref: o,
        iconNode: t,
        className: lS(`lucide-${PR(e)}`, r),
        ...i
    }));
    return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cy = de("ArrowRight", [
    ["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }],
    ["path", {
        d: "m12 5 7 7-7 7",
        key: "xquz4c"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MR = de("Bath", [
    ["path", {
        d: "M10 4 8 6",
        key: "1rru8s"
    }],
    ["path", {
        d: "M17 19v2",
        key: "ts1sot"
    }],
    ["path", {
        d: "M2 12h20",
        key: "9i4pu4"
    }],
    ["path", {
        d: "M7 19v2",
        key: "12npes"
    }],
    ["path", {
        d: "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",
        key: "14ym8i"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const NR = de("Bed", [
    ["path", {
        d: "M2 4v16",
        key: "vw9hq8"
    }],
    ["path", {
        d: "M2 8h18a2 2 0 0 1 2 2v10",
        key: "1dgv2r"
    }],
    ["path", {
        d: "M2 17h20",
        key: "18nfp3"
    }],
    ["path", {
        d: "M6 8v9",
        key: "1yriud"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dy = de("Bot", [
    ["path", {
        d: "M12 8V4H8",
        key: "hb8ula"
    }],
    ["rect", {
        width: "16",
        height: "12",
        x: "4",
        y: "8",
        rx: "2",
        key: "enze0r"
    }],
    ["path", {
        d: "M2 14h2",
        key: "vft8re"
    }],
    ["path", {
        d: "M20 14h2",
        key: "4cs60a"
    }],
    ["path", {
        d: "M15 13v2",
        key: "1xurst"
    }],
    ["path", {
        d: "M9 13v2",
        key: "rq6x2g"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IR = de("Building2", [
    ["path", {
        d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
        key: "1b4qmf"
    }],
    ["path", {
        d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
        key: "i71pzd"
    }],
    ["path", {
        d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
        key: "10jefs"
    }],
    ["path", {
        d: "M10 6h4",
        key: "1itunk"
    }],
    ["path", {
        d: "M10 10h4",
        key: "tcdvrf"
    }],
    ["path", {
        d: "M10 14h4",
        key: "kelpxr"
    }],
    ["path", {
        d: "M10 18h4",
        key: "1ulq68"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OR = de("CalendarCheck", [
    ["path", {
        d: "M8 2v4",
        key: "1cmpym"
    }],
    ["path", {
        d: "M16 2v4",
        key: "4m81vk"
    }],
    ["rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2",
        key: "1hopcy"
    }],
    ["path", {
        d: "M3 10h18",
        key: "8toen8"
    }],
    ["path", {
        d: "m9 16 2 2 4-4",
        key: "19s6y9"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DR = de("ChefHat", [
    ["path", {
        d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",
        key: "1qvrer"
    }],
    ["path", {
        d: "M6 17h12",
        key: "1jwigz"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LR = de("ClipboardCheck", [
    ["rect", {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1",
        key: "tgr4d6"
    }],
    ["path", {
        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
        key: "116196"
    }],
    ["path", {
        d: "m9 14 2 2 4-4",
        key: "df797q"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jR = de("Facebook", [
    ["path", {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        key: "1jg4f8"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _R = de("Hammer", [
    ["path", {
        d: "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",
        key: "eefl8a"
    }],
    ["path", {
        d: "m18 15 4-4",
        key: "16gjal"
    }],
    ["path", {
        d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",
        key: "b7pghm"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FR = de("House", [
    ["path", {
        d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
        key: "5wwlr5"
    }],
    ["path", {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "1d0kgt"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zR = de("IndianRupee", [
    ["path", {
        d: "M6 3h12",
        key: "ggurg9"
    }],
    ["path", {
        d: "M6 8h12",
        key: "6g4wlu"
    }],
    ["path", {
        d: "m6 13 8.5 8",
        key: "u1kupk"
    }],
    ["path", {
        d: "M6 13h3",
        key: "wdp6ag"
    }],
    ["path", {
        d: "M9 13c6.667 0 6.667-10 0-10",
        key: "1nkvk2"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VR = de("Instagram", [
    ["rect", {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw"
    }],
    ["path", {
        d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
        key: "9exkf1"
    }],
    ["line", {
        x1: "17.5",
        x2: "17.51",
        y1: "6.5",
        y2: "6.5",
        key: "r4j83e"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const BR = de("LoaderCircle", [
    ["path", {
        d: "M21 12a9 9 0 1 1-6.219-8.56",
        key: "13zald"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $R = de("Mail", [
    ["rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2",
        key: "18n3k1"
    }],
    ["path", {
        d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
        key: "1ocrg3"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UR = de("MapPin", [
    ["path", {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z"
    }],
    ["circle", {
        cx: "12",
        cy: "10",
        r: "3",
        key: "ilqhr7"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HR = de("Menu", [
    ["line", {
        x1: "4",
        x2: "20",
        y1: "12",
        y2: "12",
        key: "1e0a9i"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "6",
        y2: "6",
        key: "1owob3"
    }],
    ["line", {
        x1: "4",
        x2: "20",
        y1: "18",
        y2: "18",
        key: "yk5zj1"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WR = de("MessageCircle", [
    ["path", {
        d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
        key: "vv11sd"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KR = de("Paintbrush", [
    ["path", {
        d: "m14.622 17.897-10.68-2.913",
        key: "vj2p1u"
    }],
    ["path", {
        d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",
        key: "18tc5c"
    }],
    ["path", {
        d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",
        key: "ytzfxy"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GR = de("PartyPopper", [
    ["path", {
        d: "M5.8 11.3 2 22l10.7-3.79",
        key: "gwxi1d"
    }],
    ["path", {
        d: "M4 3h.01",
        key: "1vcuye"
    }],
    ["path", {
        d: "M22 8h.01",
        key: "1mrtc2"
    }],
    ["path", {
        d: "M15 2h.01",
        key: "1cjtqr"
    }],
    ["path", {
        d: "M22 20h.01",
        key: "1mrys2"
    }],
    ["path", {
        d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",
        key: "hbicv8"
    }],
    ["path", {
        d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",
        key: "1i94pl"
    }],
    ["path", {
        d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",
        key: "1cofks"
    }],
    ["path", {
        d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",
        key: "4kbmks"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uS = de("Phone", [
    ["path", {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        key: "foiqr5"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qR = de("Quote", [
    ["path", {
        d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "rib7q0"
    }],
    ["path", {
        d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "1ymkrd"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const QR = de("Send", [
    ["path", {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3"
    }],
    ["path", {
        d: "m21.854 2.147-10.94 10.939",
        key: "12cjpa"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YR = de("ShieldCheck", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }],
    ["path", {
        d: "m9 12 2 2 4-4",
        key: "dzmm74"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XR = de("Sofa", [
    ["path", {
        d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",
        key: "1dgpiv"
    }],
    ["path", {
        d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",
        key: "xacw8m"
    }],
    ["path", {
        d: "M4 18v2",
        key: "jwo5n2"
    }],
    ["path", {
        d: "M20 18v2",
        key: "1ar1qi"
    }],
    ["path", {
        d: "M12 4v9",
        key: "oqhhn3"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fy = de("Star", [
    ["path", {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZR = de("Truck", [
    ["path", {
        d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
        key: "wrbu53"
    }],
    ["path", {
        d: "M15 18H9",
        key: "1lyqi6"
    }],
    ["path", {
        d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
        key: "lysw3i"
    }],
    ["circle", {
        cx: "17",
        cy: "18",
        r: "2",
        key: "332jqn"
    }],
    ["circle", {
        cx: "7",
        cy: "18",
        r: "2",
        key: "19iecd"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const JR = de("Tv", [
    ["rect", {
        width: "20",
        height: "15",
        x: "2",
        y: "7",
        rx: "2",
        ry: "2",
        key: "10ag99"
    }],
    ["polyline", {
        points: "17 2 12 7 7 2",
        key: "11pgbg"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eM = de("UserCheck", [
    ["path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq"
    }],
    ["circle", {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8"
    }],
    ["polyline", {
        points: "16 11 18 13 22 9",
        key: "1pwet4"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tM = de("Wrench", [
    ["path", {
        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
        key: "cbrjhi"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hp = de("X", [
    ["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }],
    ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nM = de("Youtube", [
        ["path", {
            d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
            key: "1q2vi4"
        }],
        ["path", {
            d: "m10 15 5-3-5-3z",
            key: "1jp15x"
        }]
    ]),
    pp = "-",
    rM = e => {
        const t = oM(e),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: r
            } = e;
        return {
            getClassGroupId: s => {
                const a = s.split(pp);
                return a[0] === "" && a.length !== 1 && a.shift(), cS(a, t) || iM(s)
            },
            getConflictingClassGroupIds: (s, a) => {
                const l = n[s] || [];
                return a && r[s] ? [...l, ...r[s]] : l
            }
        }
    },
    cS = (e, t) => {
        var s;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            i = r ? cS(e.slice(1), r) : void 0;
        if (i) return i;
        if (t.validators.length === 0) return;
        const o = e.join(pp);
        return (s = t.validators.find(({
            validator: a
        }) => a(o))) == null ? void 0 : s.classGroupId
    },
    hy = /^\[(.+)\]$/,
    iM = e => {
        if (hy.test(e)) {
            const t = hy.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n
        }
    },
    oM = e => {
        const {
            theme: t,
            prefix: n
        } = e, r = {
            nextPart: new Map,
            validators: []
        };
        return aM(Object.entries(e.classGroups), n).forEach(([o, s]) => {
            Af(s, r, o, t)
        }), r
    },
    Af = (e, t, n, r) => {
        e.forEach(i => {
            if (typeof i == "string") {
                const o = i === "" ? t : py(t, i);
                o.classGroupId = n;
                return
            }
            if (typeof i == "function") {
                if (sM(i)) {
                    Af(i(r), t, n, r);
                    return
                }
                t.validators.push({
                    validator: i,
                    classGroupId: n
                });
                return
            }
            Object.entries(i).forEach(([o, s]) => {
                Af(s, py(t, o), n, r)
            })
        })
    },
    py = (e, t) => {
        let n = e;
        return t.split(pp).forEach(r => {
            n.nextPart.has(r) || n.nextPart.set(r, {
                nextPart: new Map,
                validators: []
            }), n = n.nextPart.get(r)
        }), n
    },
    sM = e => e.isThemeGetter,
    aM = (e, t) => t ? e.map(([n, r]) => {
        const i = r.map(o => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([s, a]) => [t + s, a])) : o);
        return [n, i]
    }) : e,
    lM = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let t = 0,
            n = new Map,
            r = new Map;
        const i = (o, s) => {
            n.set(o, s), t++, t > e && (t = 0, r = n, n = new Map)
        };
        return {
            get(o) {
                let s = n.get(o);
                if (s !== void 0) return s;
                if ((s = r.get(o)) !== void 0) return i(o, s), s
            },
            set(o, s) {
                n.has(o) ? n.set(o, s) : i(o, s)
            }
        }
    },
    dS = "!",
    uM = e => {
        const {
            separator: t,
            experimentalParseClassName: n
        } = e, r = t.length === 1, i = t[0], o = t.length, s = a => {
            const l = [];
            let u = 0,
                c = 0,
                d;
            for (let x = 0; x < a.length; x++) {
                let p = a[x];
                if (u === 0) {
                    if (p === i && (r || a.slice(x, x + o) === t)) {
                        l.push(a.slice(c, x)), c = x + o;
                        continue
                    }
                    if (p === "/") {
                        d = x;
                        continue
                    }
                }
                p === "[" ? u++ : p === "]" && u--
            }
            const h = l.length === 0 ? a : a.substring(c),
                f = h.startsWith(dS),
                g = f ? h.substring(1) : h,
                m = d && d > c ? d - c : void 0;
            return {
                modifiers: l,
                hasImportantModifier: f,
                baseClassName: g,
                maybePostfixModifierPosition: m
            }
        };
        return n ? a => n({
            className: a,
            parseClassName: s
        }) : s
    },
    cM = e => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return e.forEach(r => {
            r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
        }), t.push(...n.sort()), t
    },
    dM = e => ({
        cache: lM(e.cacheSize),
        parseClassName: uM(e),
        ...rM(e)
    }),
    fM = /\s+/,
    hM = (e, t) => {
        const {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: i
        } = t, o = [], s = e.trim().split(fM);
        let a = "";
        for (let l = s.length - 1; l >= 0; l -= 1) {
            const u = s[l],
                {
                    modifiers: c,
                    hasImportantModifier: d,
                    baseClassName: h,
                    maybePostfixModifierPosition: f
                } = n(u);
            let g = !!f,
                m = r(g ? h.substring(0, f) : h);
            if (!m) {
                if (!g) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue
                }
                if (m = r(h), !m) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue
                }
                g = !1
            }
            const x = cM(c).join(":"),
                p = d ? x + dS : x,
                y = p + m;
            if (o.includes(y)) continue;
            o.push(y);
            const v = i(m, g);
            for (let k = 0; k < v.length; ++k) {
                const E = v[k];
                o.push(p + E)
            }
            a = u + (a.length > 0 ? " " + a : a)
        }
        return a
    };

function pM() {
    let e = 0,
        t, n, r = "";
    for (; e < arguments.length;)(t = arguments[e++]) && (n = fS(t)) && (r && (r += " "), r += n);
    return r
}
const fS = e => {
    if (typeof e == "string") return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = fS(e[r])) && (n && (n += " "), n += t);
    return n
};

function mM(e, ...t) {
    let n, r, i, o = s;

    function s(l) {
        const u = t.reduce((c, d) => d(c), e());
        return n = dM(u), r = n.cache.get, i = n.cache.set, o = a, a(l)
    }

    function a(l) {
        const u = r(l);
        if (u) return u;
        const c = hM(l, n);
        return i(l, c), c
    }
    return function() {
        return o(pM.apply(null, arguments))
    }
}
const xe = e => {
        const t = n => n[e] || [];
        return t.isThemeGetter = !0, t
    },
    hS = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    gM = /^\d+\/\d+$/,
    yM = new Set(["px", "full", "screen"]),
    vM = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    xM = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    wM = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    SM = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    bM = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Fn = e => ho(e) || yM.has(e) || gM.test(e),
    cr = e => Uo(e, "length", MM),
    ho = e => !!e && !Number.isNaN(Number(e)),
    Hc = e => Uo(e, "number", ho),
    as = e => !!e && Number.isInteger(Number(e)),
    kM = e => e.endsWith("%") && ho(e.slice(0, -1)),
    te = e => hS.test(e),
    dr = e => vM.test(e),
    CM = new Set(["length", "size", "percentage"]),
    EM = e => Uo(e, CM, pS),
    TM = e => Uo(e, "position", pS),
    PM = new Set(["image", "url"]),
    AM = e => Uo(e, PM, IM),
    RM = e => Uo(e, "", NM),
    ls = () => !0,
    Uo = (e, t, n) => {
        const r = hS.exec(e);
        return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
    },
    MM = e => xM.test(e) && !wM.test(e),
    pS = () => !1,
    NM = e => SM.test(e),
    IM = e => bM.test(e),
    OM = () => {
        const e = xe("colors"),
            t = xe("spacing"),
            n = xe("blur"),
            r = xe("brightness"),
            i = xe("borderColor"),
            o = xe("borderRadius"),
            s = xe("borderSpacing"),
            a = xe("borderWidth"),
            l = xe("contrast"),
            u = xe("grayscale"),
            c = xe("hueRotate"),
            d = xe("invert"),
            h = xe("gap"),
            f = xe("gradientColorStops"),
            g = xe("gradientColorStopPositions"),
            m = xe("inset"),
            x = xe("margin"),
            p = xe("opacity"),
            y = xe("padding"),
            v = xe("saturate"),
            k = xe("scale"),
            E = xe("sepia"),
            C = xe("skew"),
            P = xe("space"),
            A = xe("translate"),
            N = () => ["auto", "contain", "none"],
            D = () => ["auto", "hidden", "clip", "visible", "scroll"],
            _ = () => ["auto", te, t],
            I = () => [te, t],
            W = () => ["", Fn, cr],
            F = () => ["auto", ho, te],
            U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            K = () => ["solid", "dashed", "dotted", "double", "none"],
            $ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            R = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            O = () => ["", "0", te],
            b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            q = () => [ho, te];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [ls],
                spacing: [Fn, cr],
                blur: ["none", "", dr, te],
                brightness: q(),
                borderColor: [e],
                borderRadius: ["none", "", "full", dr, te],
                borderSpacing: I(),
                borderWidth: W(),
                contrast: q(),
                grayscale: O(),
                hueRotate: q(),
                invert: O(),
                gap: I(),
                gradientColorStops: [e],
                gradientColorStopPositions: [kM, cr],
                inset: _(),
                margin: _(),
                opacity: q(),
                padding: I(),
                saturate: q(),
                scale: q(),
                sepia: O(),
                skew: q(),
                space: I(),
                translate: I()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", te]
                }],
                container: ["container"],
                columns: [{
                    columns: [dr]
                }],
                "break-after": [{
                    "break-after": b()
                }],
                "break-before": [{
                    "break-before": b()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...U(), te]
                }],
                overflow: [{
                    overflow: D()
                }],
                "overflow-x": [{
                    "overflow-x": D()
                }],
                "overflow-y": [{
                    "overflow-y": D()
                }],
                overscroll: [{
                    overscroll: N()
                }],
                "overscroll-x": [{
                    "overscroll-x": N()
                }],
                "overscroll-y": [{
                    "overscroll-y": N()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [m]
                }],
                "inset-x": [{
                    "inset-x": [m]
                }],
                "inset-y": [{
                    "inset-y": [m]
                }],
                start: [{
                    start: [m]
                }],
                end: [{
                    end: [m]
                }],
                top: [{
                    top: [m]
                }],
                right: [{
                    right: [m]
                }],
                bottom: [{
                    bottom: [m]
                }],
                left: [{
                    left: [m]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", as, te]
                }],
                basis: [{
                    basis: _()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", te]
                }],
                grow: [{
                    grow: O()
                }],
                shrink: [{
                    shrink: O()
                }],
                order: [{
                    order: ["first", "last", "none", as, te]
                }],
                "grid-cols": [{
                    "grid-cols": [ls]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", as, te]
                    }, te]
                }],
                "col-start": [{
                    "col-start": F()
                }],
                "col-end": [{
                    "col-end": F()
                }],
                "grid-rows": [{
                    "grid-rows": [ls]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [as, te]
                    }, te]
                }],
                "row-start": [{
                    "row-start": F()
                }],
                "row-end": [{
                    "row-end": F()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", te]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", te]
                }],
                gap: [{
                    gap: [h]
                }],
                "gap-x": [{
                    "gap-x": [h]
                }],
                "gap-y": [{
                    "gap-y": [h]
                }],
                "justify-content": [{
                    justify: ["normal", ...R()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...R(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...R(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [y]
                }],
                px: [{
                    px: [y]
                }],
                py: [{
                    py: [y]
                }],
                ps: [{
                    ps: [y]
                }],
                pe: [{
                    pe: [y]
                }],
                pt: [{
                    pt: [y]
                }],
                pr: [{
                    pr: [y]
                }],
                pb: [{
                    pb: [y]
                }],
                pl: [{
                    pl: [y]
                }],
                m: [{
                    m: [x]
                }],
                mx: [{
                    mx: [x]
                }],
                my: [{
                    my: [x]
                }],
                ms: [{
                    ms: [x]
                }],
                me: [{
                    me: [x]
                }],
                mt: [{
                    mt: [x]
                }],
                mr: [{
                    mr: [x]
                }],
                mb: [{
                    mb: [x]
                }],
                ml: [{
                    ml: [x]
                }],
                "space-x": [{
                    "space-x": [P]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [P]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", te, t]
                }],
                "min-w": [{
                    "min-w": [te, t, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [te, t, "none", "full", "min", "max", "fit", "prose", {
                        screen: [dr]
                    }, dr]
                }],
                h: [{
                    h: [te, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [te, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [te, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [te, t, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", dr, cr]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Hc]
                }],
                "font-family": [{
                    font: [ls]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", te]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", ho, Hc]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Fn, te]
                }],
                "list-image": [{
                    "list-image": ["none", te]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", te]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [e]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [p]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [e]
                }],
                "text-opacity": [{
                    "text-opacity": [p]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...K(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", Fn, cr]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", Fn, te]
                }],
                "text-decoration-color": [{
                    decoration: [e]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: I()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", te]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", te]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [p]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...U(), TM]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", EM]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, AM]
                }],
                "bg-color": [{
                    bg: [e]
                }],
                "gradient-from-pos": [{
                    from: [g]
                }],
                "gradient-via-pos": [{
                    via: [g]
                }],
                "gradient-to-pos": [{
                    to: [g]
                }],
                "gradient-from": [{
                    from: [f]
                }],
                "gradient-via": [{
                    via: [f]
                }],
                "gradient-to": [{
                    to: [f]
                }],
                rounded: [{
                    rounded: [o]
                }],
                "rounded-s": [{
                    "rounded-s": [o]
                }],
                "rounded-e": [{
                    "rounded-e": [o]
                }],
                "rounded-t": [{
                    "rounded-t": [o]
                }],
                "rounded-r": [{
                    "rounded-r": [o]
                }],
                "rounded-b": [{
                    "rounded-b": [o]
                }],
                "rounded-l": [{
                    "rounded-l": [o]
                }],
                "rounded-ss": [{
                    "rounded-ss": [o]
                }],
                "rounded-se": [{
                    "rounded-se": [o]
                }],
                "rounded-ee": [{
                    "rounded-ee": [o]
                }],
                "rounded-es": [{
                    "rounded-es": [o]
                }],
                "rounded-tl": [{
                    "rounded-tl": [o]
                }],
                "rounded-tr": [{
                    "rounded-tr": [o]
                }],
                "rounded-br": [{
                    "rounded-br": [o]
                }],
                "rounded-bl": [{
                    "rounded-bl": [o]
                }],
                "border-w": [{
                    border: [a]
                }],
                "border-w-x": [{
                    "border-x": [a]
                }],
                "border-w-y": [{
                    "border-y": [a]
                }],
                "border-w-s": [{
                    "border-s": [a]
                }],
                "border-w-e": [{
                    "border-e": [a]
                }],
                "border-w-t": [{
                    "border-t": [a]
                }],
                "border-w-r": [{
                    "border-r": [a]
                }],
                "border-w-b": [{
                    "border-b": [a]
                }],
                "border-w-l": [{
                    "border-l": [a]
                }],
                "border-opacity": [{
                    "border-opacity": [p]
                }],
                "border-style": [{
                    border: [...K(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [a]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [a]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [p]
                }],
                "divide-style": [{
                    divide: K()
                }],
                "border-color": [{
                    border: [i]
                }],
                "border-color-x": [{
                    "border-x": [i]
                }],
                "border-color-y": [{
                    "border-y": [i]
                }],
                "border-color-s": [{
                    "border-s": [i]
                }],
                "border-color-e": [{
                    "border-e": [i]
                }],
                "border-color-t": [{
                    "border-t": [i]
                }],
                "border-color-r": [{
                    "border-r": [i]
                }],
                "border-color-b": [{
                    "border-b": [i]
                }],
                "border-color-l": [{
                    "border-l": [i]
                }],
                "divide-color": [{
                    divide: [i]
                }],
                "outline-style": [{
                    outline: ["", ...K()]
                }],
                "outline-offset": [{
                    "outline-offset": [Fn, te]
                }],
                "outline-w": [{
                    outline: [Fn, cr]
                }],
                "outline-color": [{
                    outline: [e]
                }],
                "ring-w": [{
                    ring: W()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [e]
                }],
                "ring-opacity": [{
                    "ring-opacity": [p]
                }],
                "ring-offset-w": [{
                    "ring-offset": [Fn, cr]
                }],
                "ring-offset-color": [{
                    "ring-offset": [e]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", dr, RM]
                }],
                "shadow-color": [{
                    shadow: [ls]
                }],
                opacity: [{
                    opacity: [p]
                }],
                "mix-blend": [{
                    "mix-blend": [...$(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": $()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [n]
                }],
                brightness: [{
                    brightness: [r]
                }],
                contrast: [{
                    contrast: [l]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", dr, te]
                }],
                grayscale: [{
                    grayscale: [u]
                }],
                "hue-rotate": [{
                    "hue-rotate": [c]
                }],
                invert: [{
                    invert: [d]
                }],
                saturate: [{
                    saturate: [v]
                }],
                sepia: [{
                    sepia: [E]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [n]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [r]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [l]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [u]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [c]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [d]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [p]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [v]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [E]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [s]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [s]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [s]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", te]
                }],
                duration: [{
                    duration: q()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", te]
                }],
                delay: [{
                    delay: q()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", te]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [k]
                }],
                "scale-x": [{
                    "scale-x": [k]
                }],
                "scale-y": [{
                    "scale-y": [k]
                }],
                rotate: [{
                    rotate: [as, te]
                }],
                "translate-x": [{
                    "translate-x": [A]
                }],
                "translate-y": [{
                    "translate-y": [A]
                }],
                "skew-x": [{
                    "skew-x": [C]
                }],
                "skew-y": [{
                    "skew-y": [C]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", te]
                }],
                accent: [{
                    accent: ["auto", e]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", te]
                }],
                "caret-color": [{
                    caret: [e]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": I()
                }],
                "scroll-mx": [{
                    "scroll-mx": I()
                }],
                "scroll-my": [{
                    "scroll-my": I()
                }],
                "scroll-ms": [{
                    "scroll-ms": I()
                }],
                "scroll-me": [{
                    "scroll-me": I()
                }],
                "scroll-mt": [{
                    "scroll-mt": I()
                }],
                "scroll-mr": [{
                    "scroll-mr": I()
                }],
                "scroll-mb": [{
                    "scroll-mb": I()
                }],
                "scroll-ml": [{
                    "scroll-ml": I()
                }],
                "scroll-p": [{
                    "scroll-p": I()
                }],
                "scroll-px": [{
                    "scroll-px": I()
                }],
                "scroll-py": [{
                    "scroll-py": I()
                }],
                "scroll-ps": [{
                    "scroll-ps": I()
                }],
                "scroll-pe": [{
                    "scroll-pe": I()
                }],
                "scroll-pt": [{
                    "scroll-pt": I()
                }],
                "scroll-pr": [{
                    "scroll-pr": I()
                }],
                "scroll-pb": [{
                    "scroll-pb": I()
                }],
                "scroll-pl": [{
                    "scroll-pl": I()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", te]
                }],
                fill: [{
                    fill: [e, "none"]
                }],
                "stroke-w": [{
                    stroke: [Fn, cr, Hc]
                }],
                stroke: [{
                    stroke: [e, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    DM = mM(OM);

function Ii(...e) {
    return DM(aS(e))
}
const LM = ER,
    mS = w.forwardRef(({
        className: e,
        ...t
    }, n) => S.jsx(eS, {
        ref: n,
        className: Ii("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...t
    }));
mS.displayName = eS.displayName;
const jM = TR("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    gS = w.forwardRef(({
        className: e,
        variant: t,
        ...n
    }, r) => S.jsx(tS, {
        ref: r,
        className: Ii(jM({
            variant: t
        }), e),
        ...n
    }));
gS.displayName = tS.displayName;
const _M = w.forwardRef(({
    className: e,
    ...t
}, n) => S.jsx(iS, {
    ref: n,
    className: Ii("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
_M.displayName = iS.displayName;
const yS = w.forwardRef(({
    className: e,
    ...t
}, n) => S.jsx(oS, {
    ref: n,
    className: Ii("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: S.jsx(hp, {
        className: "h-4 w-4"
    })
}));
yS.displayName = oS.displayName;
const vS = w.forwardRef(({
    className: e,
    ...t
}, n) => S.jsx(nS, {
    ref: n,
    className: Ii("text-sm font-semibold", e),
    ...t
}));
vS.displayName = nS.displayName;
const xS = w.forwardRef(({
    className: e,
    ...t
}, n) => S.jsx(rS, {
    ref: n,
    className: Ii("text-sm opacity-90", e),
    ...t
}));
xS.displayName = rS.displayName;

function FM() {
    const {
        toasts: e
    } = DA();
    return S.jsxs(LM, {
        children: [e.map(function({
            id: t,
            title: n,
            description: r,
            action: i,
            ...o
        }) {
            return S.jsxs(gS, { ...o,
                children: [S.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && S.jsx(vS, {
                        children: n
                    }), r && S.jsx(xS, {
                        children: r
                    })]
                }), i, S.jsx(yS, {})]
            }, t)
        }), S.jsx(mS, {})]
    })
}
var zM = fh[" useId ".trim().toString()] || (() => {}),
    VM = 0;

function BM(e) {
    const [t, n] = w.useState(zM());
    return Zn(() => {
        n(r => r ? ? String(VM++))
    }, [e]), t ? `radix-${t}` : ""
}
const $M = ["top", "right", "bottom", "left"],
    Br = Math.min,
    Pt = Math.max,
    au = Math.round,
    Ja = Math.floor,
    Rn = e => ({
        x: e,
        y: e
    }),
    UM = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    HM = {
        start: "end",
        end: "start"
    };

function Rf(e, t, n) {
    return Pt(e, Br(t, n))
}

function Jn(e, t) {
    return typeof e == "function" ? e(t) : e
}

function er(e) {
    return e.split("-")[0]
}

function Ho(e) {
    return e.split("-")[1]
}

function mp(e) {
    return e === "x" ? "y" : "x"
}

function gp(e) {
    return e === "y" ? "height" : "width"
}
const WM = new Set(["top", "bottom"]);

function Tn(e) {
    return WM.has(er(e)) ? "y" : "x"
}

function yp(e) {
    return mp(Tn(e))
}

function KM(e, t, n) {
    n === void 0 && (n = !1);
    const r = Ho(e),
        i = yp(e),
        o = gp(i);
    let s = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[o] > t.floating[o] && (s = lu(s)), [s, lu(s)]
}

function GM(e) {
    const t = lu(e);
    return [Mf(e), t, Mf(t)]
}

function Mf(e) {
    return e.replace(/start|end/g, t => HM[t])
}
const my = ["left", "right"],
    gy = ["right", "left"],
    qM = ["top", "bottom"],
    QM = ["bottom", "top"];

function YM(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? gy : my : t ? my : gy;
        case "left":
        case "right":
            return t ? qM : QM;
        default:
            return []
    }
}

function XM(e, t, n, r) {
    const i = Ho(e);
    let o = YM(er(e), n === "start", r);
    return i && (o = o.map(s => s + "-" + i), t && (o = o.concat(o.map(Mf)))), o
}

function lu(e) {
    return e.replace(/left|right|bottom|top/g, t => UM[t])
}

function ZM(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function wS(e) {
    return typeof e != "number" ? ZM(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function uu(e) {
    const {
        x: t,
        y: n,
        width: r,
        height: i
    } = e;
    return {
        width: r,
        height: i,
        top: n,
        left: t,
        right: t + r,
        bottom: n + i,
        x: t,
        y: n
    }
}

function yy(e, t, n) {
    let {
        reference: r,
        floating: i
    } = e;
    const o = Tn(t),
        s = yp(t),
        a = gp(s),
        l = er(t),
        u = o === "y",
        c = r.x + r.width / 2 - i.width / 2,
        d = r.y + r.height / 2 - i.height / 2,
        h = r[a] / 2 - i[a] / 2;
    let f;
    switch (l) {
        case "top":
            f = {
                x: c,
                y: r.y - i.height
            };
            break;
        case "bottom":
            f = {
                x: c,
                y: r.y + r.height
            };
            break;
        case "right":
            f = {
                x: r.x + r.width,
                y: d
            };
            break;
        case "left":
            f = {
                x: r.x - i.width,
                y: d
            };
            break;
        default:
            f = {
                x: r.x,
                y: r.y
            }
    }
    switch (Ho(t)) {
        case "start":
            f[s] -= h * (n && u ? -1 : 1);
            break;
        case "end":
            f[s] += h * (n && u ? -1 : 1);
            break
    }
    return f
}
const JM = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: i = "absolute",
        middleware: o = [],
        platform: s
    } = n, a = o.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }),
        {
            x: c,
            y: d
        } = yy(u, r, l),
        h = r,
        f = {},
        g = 0;
    for (let m = 0; m < a.length; m++) {
        const {
            name: x,
            fn: p
        } = a[m], {
            x: y,
            y: v,
            data: k,
            reset: E
        } = await p({
            x: c,
            y: d,
            initialPlacement: r,
            placement: h,
            strategy: i,
            middlewareData: f,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = y ? ? c, d = v ? ? d, f = { ...f,
            [x]: { ...f[x],
                ...k
            }
        }, E && g <= 50 && (g++, typeof E == "object" && (E.placement && (h = E.placement), E.rects && (u = E.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }) : E.rects), {
            x: c,
            y: d
        } = yy(u, h, l)), m = -1)
    }
    return {
        x: c,
        y: d,
        placement: h,
        strategy: i,
        middlewareData: f
    }
};
async function ra(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: r,
        y: i,
        platform: o,
        rects: s,
        elements: a,
        strategy: l
    } = e, {
        boundary: u = "clippingAncestors",
        rootBoundary: c = "viewport",
        elementContext: d = "floating",
        altBoundary: h = !1,
        padding: f = 0
    } = Jn(t, e), g = wS(f), x = a[h ? d === "floating" ? "reference" : "floating" : d], p = uu(await o.getClippingRect({
        element: (n = await (o.isElement == null ? void 0 : o.isElement(x))) == null || n ? x : x.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: l
    })), y = d === "floating" ? {
        x: r,
        y: i,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference, v = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), k = await (o.isElement == null ? void 0 : o.isElement(v)) ? await (o.getScale == null ? void 0 : o.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, E = uu(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: y,
        offsetParent: v,
        strategy: l
    }) : y);
    return {
        top: (p.top - E.top + g.top) / k.y,
        bottom: (E.bottom - p.bottom + g.bottom) / k.y,
        left: (p.left - E.left + g.left) / k.x,
        right: (E.right - p.right + g.right) / k.x
    }
}
const eN = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: r,
                placement: i,
                rects: o,
                platform: s,
                elements: a,
                middlewareData: l
            } = t, {
                element: u,
                padding: c = 0
            } = Jn(e, t) || {};
            if (u == null) return {};
            const d = wS(c),
                h = {
                    x: n,
                    y: r
                },
                f = yp(i),
                g = gp(f),
                m = await s.getDimensions(u),
                x = f === "y",
                p = x ? "top" : "left",
                y = x ? "bottom" : "right",
                v = x ? "clientHeight" : "clientWidth",
                k = o.reference[g] + o.reference[f] - h[f] - o.floating[g],
                E = h[f] - o.reference[f],
                C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
            let P = C ? C[v] : 0;
            (!P || !await (s.isElement == null ? void 0 : s.isElement(C))) && (P = a.floating[v] || o.floating[g]);
            const A = k / 2 - E / 2,
                N = P / 2 - m[g] / 2 - 1,
                D = Br(d[p], N),
                _ = Br(d[y], N),
                I = D,
                W = P - m[g] - _,
                F = P / 2 - m[g] / 2 + A,
                U = Rf(I, F, W),
                K = !l.arrow && Ho(i) != null && F !== U && o.reference[g] / 2 - (F < I ? D : _) - m[g] / 2 < 0,
                $ = K ? F < I ? F - I : F - W : 0;
            return {
                [f]: h[f] + $,
                data: {
                    [f]: U,
                    centerOffset: F - U - $,
                    ...K && {
                        alignmentOffset: $
                    }
                },
                reset: K
            }
        }
    }),
    tN = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: i,
                    middlewareData: o,
                    rects: s,
                    initialPlacement: a,
                    platform: l,
                    elements: u
                } = t, {
                    mainAxis: c = !0,
                    crossAxis: d = !0,
                    fallbackPlacements: h,
                    fallbackStrategy: f = "bestFit",
                    fallbackAxisSideDirection: g = "none",
                    flipAlignment: m = !0,
                    ...x
                } = Jn(e, t);
                if ((n = o.arrow) != null && n.alignmentOffset) return {};
                const p = er(i),
                    y = Tn(a),
                    v = er(a) === a,
                    k = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
                    E = h || (v || !m ? [lu(a)] : GM(a)),
                    C = g !== "none";
                !h && C && E.push(...XM(a, m, g, k));
                const P = [a, ...E],
                    A = await ra(t, x),
                    N = [];
                let D = ((r = o.flip) == null ? void 0 : r.overflows) || [];
                if (c && N.push(A[p]), d) {
                    const F = KM(i, s, k);
                    N.push(A[F[0]], A[F[1]])
                }
                if (D = [...D, {
                        placement: i,
                        overflows: N
                    }], !N.every(F => F <= 0)) {
                    var _, I;
                    const F = (((_ = o.flip) == null ? void 0 : _.index) || 0) + 1,
                        U = P[F];
                    if (U && (!(d === "alignment" ? y !== Tn(U) : !1) || D.every(R => R.overflows[0] > 0 && Tn(R.placement) === y))) return {
                        data: {
                            index: F,
                            overflows: D
                        },
                        reset: {
                            placement: U
                        }
                    };
                    let K = (I = D.filter($ => $.overflows[0] <= 0).sort(($, R) => $.overflows[1] - R.overflows[1])[0]) == null ? void 0 : I.placement;
                    if (!K) switch (f) {
                        case "bestFit":
                            {
                                var W;
                                const $ = (W = D.filter(R => {
                                    if (C) {
                                        const O = Tn(R.placement);
                                        return O === y || O === "y"
                                    }
                                    return !0
                                }).map(R => [R.placement, R.overflows.filter(O => O > 0).reduce((O, b) => O + b, 0)]).sort((R, O) => R[1] - O[1])[0]) == null ? void 0 : W[0];$ && (K = $);
                                break
                            }
                        case "initialPlacement":
                            K = a;
                            break
                    }
                    if (i !== K) return {
                        reset: {
                            placement: K
                        }
                    }
                }
                return {}
            }
        }
    };

function vy(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function xy(e) {
    return $M.some(t => e[t] >= 0)
}
const nN = function(e) {
        return e === void 0 && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
                const {
                    rects: n
                } = t, {
                    strategy: r = "referenceHidden",
                    ...i
                } = Jn(e, t);
                switch (r) {
                    case "referenceHidden":
                        {
                            const o = await ra(t, { ...i,
                                    elementContext: "reference"
                                }),
                                s = vy(o, n.reference);
                            return {
                                data: {
                                    referenceHiddenOffsets: s,
                                    referenceHidden: xy(s)
                                }
                            }
                        }
                    case "escaped":
                        {
                            const o = await ra(t, { ...i,
                                    altBoundary: !0
                                }),
                                s = vy(o, n.floating);
                            return {
                                data: {
                                    escapedOffsets: s,
                                    escaped: xy(s)
                                }
                            }
                        }
                    default:
                        return {}
                }
            }
        }
    },
    SS = new Set(["left", "top"]);
async function rN(e, t) {
    const {
        placement: n,
        platform: r,
        elements: i
    } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), s = er(n), a = Ho(n), l = Tn(n) === "y", u = SS.has(s) ? -1 : 1, c = o && l ? -1 : 1, d = Jn(t, e);
    let {
        mainAxis: h,
        crossAxis: f,
        alignmentAxis: g
    } = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return a && typeof g == "number" && (f = a === "end" ? g * -1 : g), l ? {
        x: f * c,
        y: h * u
    } : {
        x: h * u,
        y: f * c
    }
}
const iN = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    x: i,
                    y: o,
                    placement: s,
                    middlewareData: a
                } = t, l = await rN(t, e);
                return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                    x: i + l.x,
                    y: o + l.y,
                    data: { ...l,
                        placement: s
                    }
                }
            }
        }
    },
    oN = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: i
                } = t, {
                    mainAxis: o = !0,
                    crossAxis: s = !1,
                    limiter: a = {
                        fn: x => {
                            let {
                                x: p,
                                y
                            } = x;
                            return {
                                x: p,
                                y
                            }
                        }
                    },
                    ...l
                } = Jn(e, t), u = {
                    x: n,
                    y: r
                }, c = await ra(t, l), d = Tn(er(i)), h = mp(d);
                let f = u[h],
                    g = u[d];
                if (o) {
                    const x = h === "y" ? "top" : "left",
                        p = h === "y" ? "bottom" : "right",
                        y = f + c[x],
                        v = f - c[p];
                    f = Rf(y, f, v)
                }
                if (s) {
                    const x = d === "y" ? "top" : "left",
                        p = d === "y" ? "bottom" : "right",
                        y = g + c[x],
                        v = g - c[p];
                    g = Rf(y, g, v)
                }
                const m = a.fn({ ...t,
                    [h]: f,
                    [d]: g
                });
                return { ...m,
                    data: {
                        x: m.x - n,
                        y: m.y - r,
                        enabled: {
                            [h]: o,
                            [d]: s
                        }
                    }
                }
            }
        }
    },
    sN = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: i,
                    rects: o,
                    middlewareData: s
                } = t, {
                    offset: a = 0,
                    mainAxis: l = !0,
                    crossAxis: u = !0
                } = Jn(e, t), c = {
                    x: n,
                    y: r
                }, d = Tn(i), h = mp(d);
                let f = c[h],
                    g = c[d];
                const m = Jn(a, t),
                    x = typeof m == "number" ? {
                        mainAxis: m,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...m
                    };
                if (l) {
                    const v = h === "y" ? "height" : "width",
                        k = o.reference[h] - o.floating[v] + x.mainAxis,
                        E = o.reference[h] + o.reference[v] - x.mainAxis;
                    f < k ? f = k : f > E && (f = E)
                }
                if (u) {
                    var p, y;
                    const v = h === "y" ? "width" : "height",
                        k = SS.has(er(i)),
                        E = o.reference[d] - o.floating[v] + (k && ((p = s.offset) == null ? void 0 : p[d]) || 0) + (k ? 0 : x.crossAxis),
                        C = o.reference[d] + o.reference[v] + (k ? 0 : ((y = s.offset) == null ? void 0 : y[d]) || 0) - (k ? x.crossAxis : 0);
                    g < E ? g = E : g > C && (g = C)
                }
                return {
                    [h]: f,
                    [d]: g
                }
            }
        }
    },
    aN = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: i,
                    rects: o,
                    platform: s,
                    elements: a
                } = t, {
                    apply: l = () => {},
                    ...u
                } = Jn(e, t), c = await ra(t, u), d = er(i), h = Ho(i), f = Tn(i) === "y", {
                    width: g,
                    height: m
                } = o.floating;
                let x, p;
                d === "top" || d === "bottom" ? (x = d, p = h === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (p = d, x = h === "end" ? "top" : "bottom");
                const y = m - c.top - c.bottom,
                    v = g - c.left - c.right,
                    k = Br(m - c[x], y),
                    E = Br(g - c[p], v),
                    C = !t.middlewareData.shift;
                let P = k,
                    A = E;
                if ((n = t.middlewareData.shift) != null && n.enabled.x && (A = v), (r = t.middlewareData.shift) != null && r.enabled.y && (P = y), C && !h) {
                    const D = Pt(c.left, 0),
                        _ = Pt(c.right, 0),
                        I = Pt(c.top, 0),
                        W = Pt(c.bottom, 0);
                    f ? A = g - 2 * (D !== 0 || _ !== 0 ? D + _ : Pt(c.left, c.right)) : P = m - 2 * (I !== 0 || W !== 0 ? I + W : Pt(c.top, c.bottom))
                }
                await l({ ...t,
                    availableWidth: A,
                    availableHeight: P
                });
                const N = await s.getDimensions(a.floating);
                return g !== N.width || m !== N.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function Uu() {
    return typeof window < "u"
}

function Wo(e) {
    return bS(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function Nt(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function Dn(e) {
    var t;
    return (t = (bS(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function bS(e) {
    return Uu() ? e instanceof Node || e instanceof Nt(e).Node : !1
}

function pn(e) {
    return Uu() ? e instanceof Element || e instanceof Nt(e).Element : !1
}

function In(e) {
    return Uu() ? e instanceof HTMLElement || e instanceof Nt(e).HTMLElement : !1
}

function wy(e) {
    return !Uu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Nt(e).ShadowRoot
}
const lN = new Set(["inline", "contents"]);

function ba(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: i
    } = mn(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !lN.has(i)
}
const uN = new Set(["table", "td", "th"]);

function cN(e) {
    return uN.has(Wo(e))
}
const dN = [":popover-open", ":modal"];

function Hu(e) {
    return dN.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}
const fN = ["transform", "translate", "scale", "rotate", "perspective"],
    hN = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    pN = ["paint", "layout", "strict", "content"];

function vp(e) {
    const t = xp(),
        n = pn(e) ? mn(e) : e;
    return fN.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || hN.some(r => (n.willChange || "").includes(r)) || pN.some(r => (n.contain || "").includes(r))
}

function mN(e) {
    let t = $r(e);
    for (; In(t) && !Io(t);) {
        if (vp(t)) return t;
        if (Hu(t)) return null;
        t = $r(t)
    }
    return null
}

function xp() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const gN = new Set(["html", "body", "#document"]);

function Io(e) {
    return gN.has(Wo(e))
}

function mn(e) {
    return Nt(e).getComputedStyle(e)
}

function Wu(e) {
    return pn(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function $r(e) {
    if (Wo(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || wy(e) && e.host || Dn(e);
    return wy(t) ? t.host : t
}

function kS(e) {
    const t = $r(e);
    return Io(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : In(t) && ba(t) ? t : kS(t)
}

function ia(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const i = kS(e),
        o = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
        s = Nt(i);
    if (o) {
        const a = Nf(s);
        return t.concat(s, s.visualViewport || [], ba(i) ? i : [], a && n ? ia(a) : [])
    }
    return t.concat(i, ia(i, [], n))
}

function Nf(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function CS(e) {
    const t = mn(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const i = In(e),
        o = i ? e.offsetWidth : n,
        s = i ? e.offsetHeight : r,
        a = au(n) !== o || au(r) !== s;
    return a && (n = o, r = s), {
        width: n,
        height: r,
        $: a
    }
}

function wp(e) {
    return pn(e) ? e : e.contextElement
}

function po(e) {
    const t = wp(e);
    if (!In(t)) return Rn(1);
    const n = t.getBoundingClientRect(),
        {
            width: r,
            height: i,
            $: o
        } = CS(t);
    let s = (o ? au(n.width) : n.width) / r,
        a = (o ? au(n.height) : n.height) / i;
    return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
        x: s,
        y: a
    }
}
const yN = Rn(0);

function ES(e) {
    const t = Nt(e);
    return !xp() || !t.visualViewport ? yN : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function vN(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== Nt(e) ? !1 : t
}

function Ti(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const i = e.getBoundingClientRect(),
        o = wp(e);
    let s = Rn(1);
    t && (r ? pn(r) && (s = po(r)) : s = po(e));
    const a = vN(o, n, r) ? ES(o) : Rn(0);
    let l = (i.left + a.x) / s.x,
        u = (i.top + a.y) / s.y,
        c = i.width / s.x,
        d = i.height / s.y;
    if (o) {
        const h = Nt(o),
            f = r && pn(r) ? Nt(r) : r;
        let g = h,
            m = Nf(g);
        for (; m && r && f !== g;) {
            const x = po(m),
                p = m.getBoundingClientRect(),
                y = mn(m),
                v = p.left + (m.clientLeft + parseFloat(y.paddingLeft)) * x.x,
                k = p.top + (m.clientTop + parseFloat(y.paddingTop)) * x.y;
            l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += v, u += k, g = Nt(m), m = Nf(g)
        }
    }
    return uu({
        width: c,
        height: d,
        x: l,
        y: u
    })
}

function Sp(e, t) {
    const n = Wu(e).scrollLeft;
    return t ? t.left + n : Ti(Dn(e)).left + n
}

function TS(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
        i = r.left + t.scrollLeft - (n ? 0 : Sp(e, r)),
        o = r.top + t.scrollTop;
    return {
        x: i,
        y: o
    }
}

function xN(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: r,
        strategy: i
    } = e;
    const o = i === "fixed",
        s = Dn(r),
        a = t ? Hu(t.floating) : !1;
    if (r === s || a && o) return n;
    let l = {
            scrollLeft: 0,
            scrollTop: 0
        },
        u = Rn(1);
    const c = Rn(0),
        d = In(r);
    if ((d || !d && !o) && ((Wo(r) !== "body" || ba(s)) && (l = Wu(r)), In(r))) {
        const f = Ti(r);
        u = po(r), c.x = f.x + r.clientLeft, c.y = f.y + r.clientTop
    }
    const h = s && !d && !o ? TS(s, l, !0) : Rn(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x + h.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y + h.y
    }
}

function wN(e) {
    return Array.from(e.getClientRects())
}

function SN(e) {
    const t = Dn(e),
        n = Wu(e),
        r = e.ownerDocument.body,
        i = Pt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        o = Pt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Sp(e);
    const a = -n.scrollTop;
    return mn(r).direction === "rtl" && (s += Pt(t.clientWidth, r.clientWidth) - i), {
        width: i,
        height: o,
        x: s,
        y: a
    }
}

function bN(e, t) {
    const n = Nt(e),
        r = Dn(e),
        i = n.visualViewport;
    let o = r.clientWidth,
        s = r.clientHeight,
        a = 0,
        l = 0;
    if (i) {
        o = i.width, s = i.height;
        const u = xp();
        (!u || u && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop)
    }
    return {
        width: o,
        height: s,
        x: a,
        y: l
    }
}
const kN = new Set(["absolute", "fixed"]);

function CN(e, t) {
    const n = Ti(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        i = n.left + e.clientLeft,
        o = In(e) ? po(e) : Rn(1),
        s = e.clientWidth * o.x,
        a = e.clientHeight * o.y,
        l = i * o.x,
        u = r * o.y;
    return {
        width: s,
        height: a,
        x: l,
        y: u
    }
}

function Sy(e, t, n) {
    let r;
    if (t === "viewport") r = bN(e, n);
    else if (t === "document") r = SN(Dn(e));
    else if (pn(t)) r = CN(t, n);
    else {
        const i = ES(e);
        r = {
            x: t.x - i.x,
            y: t.y - i.y,
            width: t.width,
            height: t.height
        }
    }
    return uu(r)
}

function PS(e, t) {
    const n = $r(e);
    return n === t || !pn(n) || Io(n) ? !1 : mn(n).position === "fixed" || PS(n, t)
}

function EN(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = ia(e, [], !1).filter(a => pn(a) && Wo(a) !== "body"),
        i = null;
    const o = mn(e).position === "fixed";
    let s = o ? $r(e) : e;
    for (; pn(s) && !Io(s);) {
        const a = mn(s),
            l = vp(s);
        !l && a.position === "fixed" && (i = null), (o ? !l && !i : !l && a.position === "static" && !!i && kN.has(i.position) || ba(s) && !l && PS(e, s)) ? r = r.filter(c => c !== s) : i = a, s = $r(s)
    }
    return t.set(e, r), r
}

function TN(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: r,
        strategy: i
    } = e;
    const s = [...n === "clippingAncestors" ? Hu(t) ? [] : EN(t, this._c) : [].concat(n), r],
        a = s[0],
        l = s.reduce((u, c) => {
            const d = Sy(t, c, i);
            return u.top = Pt(d.top, u.top), u.right = Br(d.right, u.right), u.bottom = Br(d.bottom, u.bottom), u.left = Pt(d.left, u.left), u
        }, Sy(t, a, i));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}

function PN(e) {
    const {
        width: t,
        height: n
    } = CS(e);
    return {
        width: t,
        height: n
    }
}

function AN(e, t, n) {
    const r = In(t),
        i = Dn(t),
        o = n === "fixed",
        s = Ti(e, !0, o, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = Rn(0);

    function u() {
        l.x = Sp(i)
    }
    if (r || !r && !o)
        if ((Wo(t) !== "body" || ba(i)) && (a = Wu(t)), r) {
            const f = Ti(t, !0, o, t);
            l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop
        } else i && u();
    o && !r && i && u();
    const c = i && !r && !o ? TS(i, a) : Rn(0),
        d = s.left + a.scrollLeft - l.x - c.x,
        h = s.top + a.scrollTop - l.y - c.y;
    return {
        x: d,
        y: h,
        width: s.width,
        height: s.height
    }
}

function Wc(e) {
    return mn(e).position === "static"
}

function by(e, t) {
    if (!In(e) || mn(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return Dn(e) === n && (n = n.ownerDocument.body), n
}

function AS(e, t) {
    const n = Nt(e);
    if (Hu(e)) return n;
    if (!In(e)) {
        let i = $r(e);
        for (; i && !Io(i);) {
            if (pn(i) && !Wc(i)) return i;
            i = $r(i)
        }
        return n
    }
    let r = by(e, t);
    for (; r && cN(r) && Wc(r);) r = by(r, t);
    return r && Io(r) && Wc(r) && !vp(r) ? n : r || mN(e) || n
}
const RN = async function(e) {
    const t = this.getOffsetParent || AS,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: AN(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};

function MN(e) {
    return mn(e).direction === "rtl"
}
const NN = {
    convertOffsetParentRelativeRectToViewportRelativeRect: xN,
    getDocumentElement: Dn,
    getClippingRect: TN,
    getOffsetParent: AS,
    getElementRects: RN,
    getClientRects: wN,
    getDimensions: PN,
    getScale: po,
    isElement: pn,
    isRTL: MN
};

function RS(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function IN(e, t) {
    let n = null,
        r;
    const i = Dn(e);

    function o() {
        var a;
        clearTimeout(r), (a = n) == null || a.disconnect(), n = null
    }

    function s(a, l) {
        a === void 0 && (a = !1), l === void 0 && (l = 1), o();
        const u = e.getBoundingClientRect(),
            {
                left: c,
                top: d,
                width: h,
                height: f
            } = u;
        if (a || t(), !h || !f) return;
        const g = Ja(d),
            m = Ja(i.clientWidth - (c + h)),
            x = Ja(i.clientHeight - (d + f)),
            p = Ja(c),
            v = {
                rootMargin: -g + "px " + -m + "px " + -x + "px " + -p + "px",
                threshold: Pt(0, Br(1, l)) || 1
            };
        let k = !0;

        function E(C) {
            const P = C[0].intersectionRatio;
            if (P !== l) {
                if (!k) return s();
                P ? s(!1, P) : r = setTimeout(() => {
                    s(!1, 1e-7)
                }, 1e3)
            }
            P === 1 && !RS(u, e.getBoundingClientRect()) && s(), k = !1
        }
        try {
            n = new IntersectionObserver(E, { ...v,
                root: i.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(E, v)
        }
        n.observe(e)
    }
    return s(!0), o
}

function ON(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: i = !0,
        ancestorResize: o = !0,
        elementResize: s = typeof ResizeObserver == "function",
        layoutShift: a = typeof IntersectionObserver == "function",
        animationFrame: l = !1
    } = r, u = wp(e), c = i || o ? [...u ? ia(u) : [], ...ia(t)] : [];
    c.forEach(p => {
        i && p.addEventListener("scroll", n, {
            passive: !0
        }), o && p.addEventListener("resize", n)
    });
    const d = u && a ? IN(u, n) : null;
    let h = -1,
        f = null;
    s && (f = new ResizeObserver(p => {
        let [y] = p;
        y && y.target === u && f && (f.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
            var v;
            (v = f) == null || v.observe(t)
        })), n()
    }), u && !l && f.observe(u), f.observe(t));
    let g, m = l ? Ti(e) : null;
    l && x();

    function x() {
        const p = Ti(e);
        m && !RS(m, p) && n(), m = p, g = requestAnimationFrame(x)
    }
    return n(), () => {
        var p;
        c.forEach(y => {
            i && y.removeEventListener("scroll", n), o && y.removeEventListener("resize", n)
        }), d == null || d(), (p = f) == null || p.disconnect(), f = null, l && cancelAnimationFrame(g)
    }
}
const DN = iN,
    LN = oN,
    jN = tN,
    _N = aN,
    FN = nN,
    ky = eN,
    zN = sN,
    VN = (e, t, n) => {
        const r = new Map,
            i = {
                platform: NN,
                ...n
            },
            o = { ...i.platform,
                _c: r
            };
        return JM(e, t, { ...i,
            platform: o
        })
    };
var BN = typeof document < "u",
    $N = function() {},
    Cl = BN ? w.useLayoutEffect : $N;

function cu(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, i;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!cu(e[r], t[r])) return !1;
            return !0
        }
        if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, i[r])) return !1;
        for (r = n; r-- !== 0;) {
            const o = i[r];
            if (!(o === "_owner" && e.$$typeof) && !cu(e[o], t[o])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function MS(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Cy(e, t) {
    const n = MS(e);
    return Math.round(t * n) / n
}

function Kc(e) {
    const t = w.useRef(e);
    return Cl(() => {
        t.current = e
    }), t
}

function UN(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: i,
        elements: {
            reference: o,
            floating: s
        } = {},
        transform: a = !0,
        whileElementsMounted: l,
        open: u
    } = e, [c, d] = w.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [h, f] = w.useState(r);
    cu(h, r) || f(r);
    const [g, m] = w.useState(null), [x, p] = w.useState(null), y = w.useCallback(R => {
        R !== C.current && (C.current = R, m(R))
    }, []), v = w.useCallback(R => {
        R !== P.current && (P.current = R, p(R))
    }, []), k = o || g, E = s || x, C = w.useRef(null), P = w.useRef(null), A = w.useRef(c), N = l != null, D = Kc(l), _ = Kc(i), I = Kc(u), W = w.useCallback(() => {
        if (!C.current || !P.current) return;
        const R = {
            placement: t,
            strategy: n,
            middleware: h
        };
        _.current && (R.platform = _.current), VN(C.current, P.current, R).then(O => {
            const b = { ...O,
                isPositioned: I.current !== !1
            };
            F.current && !cu(A.current, b) && (A.current = b, xa.flushSync(() => {
                d(b)
            }))
        })
    }, [h, t, n, _, I]);
    Cl(() => {
        u === !1 && A.current.isPositioned && (A.current.isPositioned = !1, d(R => ({ ...R,
            isPositioned: !1
        })))
    }, [u]);
    const F = w.useRef(!1);
    Cl(() => (F.current = !0, () => {
        F.current = !1
    }), []), Cl(() => {
        if (k && (C.current = k), E && (P.current = E), k && E) {
            if (D.current) return D.current(k, E, W);
            W()
        }
    }, [k, E, W, D, N]);
    const U = w.useMemo(() => ({
            reference: C,
            floating: P,
            setReference: y,
            setFloating: v
        }), [y, v]),
        K = w.useMemo(() => ({
            reference: k,
            floating: E
        }), [k, E]),
        $ = w.useMemo(() => {
            const R = {
                position: n,
                left: 0,
                top: 0
            };
            if (!K.floating) return R;
            const O = Cy(K.floating, c.x),
                b = Cy(K.floating, c.y);
            return a ? { ...R,
                transform: "translate(" + O + "px, " + b + "px)",
                ...MS(K.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: O,
                top: b
            }
        }, [n, a, K.floating, c.x, c.y]);
    return w.useMemo(() => ({ ...c,
        update: W,
        refs: U,
        elements: K,
        floatingStyles: $
    }), [c, W, U, K, $])
}
const HN = e => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const {
                    element: r,
                    padding: i
                } = typeof e == "function" ? e(n) : e;
                return r && t(r) ? r.current != null ? ky({
                    element: r.current,
                    padding: i
                }).fn(n) : {} : r ? ky({
                    element: r,
                    padding: i
                }).fn(n) : {}
            }
        }
    },
    WN = (e, t) => ({ ...DN(e),
        options: [e, t]
    }),
    KN = (e, t) => ({ ...LN(e),
        options: [e, t]
    }),
    GN = (e, t) => ({ ...zN(e),
        options: [e, t]
    }),
    qN = (e, t) => ({ ...jN(e),
        options: [e, t]
    }),
    QN = (e, t) => ({ ..._N(e),
        options: [e, t]
    }),
    YN = (e, t) => ({ ...FN(e),
        options: [e, t]
    }),
    XN = (e, t) => ({ ...HN(e),
        options: [e, t]
    });
var ZN = "Arrow",
    NS = w.forwardRef((e, t) => {
        const {
            children: n,
            width: r = 10,
            height: i = 5,
            ...o
        } = e;
        return S.jsx(wt.svg, { ...o,
            ref: t,
            width: r,
            height: i,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : S.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
NS.displayName = ZN;
var JN = NS;

function eI(e) {
    const [t, n] = w.useState(void 0);
    return Zn(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(i => {
                if (!Array.isArray(i) || !i.length) return;
                const o = i[0];
                let s, a;
                if ("borderBoxSize" in o) {
                    const l = o.borderBoxSize,
                        u = Array.isArray(l) ? l[0] : l;
                    s = u.inlineSize, a = u.blockSize
                } else s = e.offsetWidth, a = e.offsetHeight;
                n({
                    width: s,
                    height: a
                })
            });
            return r.observe(e, {
                box: "border-box"
            }), () => r.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var bp = "Popper",
    [IS, OS] = Vu(bp),
    [tI, DS] = IS(bp),
    LS = e => {
        const {
            __scopePopper: t,
            children: n
        } = e, [r, i] = w.useState(null);
        return S.jsx(tI, {
            scope: t,
            anchor: r,
            onAnchorChange: i,
            children: n
        })
    };
LS.displayName = bp;
var jS = "PopperAnchor",
    _S = w.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: r,
            ...i
        } = e, o = DS(jS, n), s = w.useRef(null), a = hn(t, s);
        return w.useEffect(() => {
            o.onAnchorChange((r == null ? void 0 : r.current) || s.current)
        }), r ? null : S.jsx(wt.div, { ...i,
            ref: a
        })
    });
_S.displayName = jS;
var kp = "PopperContent",
    [nI, rI] = IS(kp),
    FS = w.forwardRef((e, t) => {
        var oe, nt, rt, dt, bt, rr;
        const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: i = 0,
            align: o = "center",
            alignOffset: s = 0,
            arrowPadding: a = 0,
            avoidCollisions: l = !0,
            collisionBoundary: u = [],
            collisionPadding: c = 0,
            sticky: d = "partial",
            hideWhenDetached: h = !1,
            updatePositionStrategy: f = "optimized",
            onPlaced: g,
            ...m
        } = e, x = DS(kp, n), [p, y] = w.useState(null), v = hn(t, gn => y(gn)), [k, E] = w.useState(null), C = eI(k), P = (C == null ? void 0 : C.width) ? ? 0, A = (C == null ? void 0 : C.height) ? ? 0, N = r + (o !== "center" ? "-" + o : ""), D = typeof c == "number" ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
        }, _ = Array.isArray(u) ? u : [u], I = _.length > 0, W = {
            padding: D,
            boundary: _.filter(oI),
            altBoundary: I
        }, {
            refs: F,
            floatingStyles: U,
            placement: K,
            isPositioned: $,
            middlewareData: R
        } = UN({
            strategy: "fixed",
            placement: N,
            whileElementsMounted: (...gn) => ON(...gn, {
                animationFrame: f === "always"
            }),
            elements: {
                reference: x.anchor
            },
            middleware: [WN({
                mainAxis: i + A,
                alignmentAxis: s
            }), l && KN({
                mainAxis: !0,
                crossAxis: !1,
                limiter: d === "partial" ? GN() : void 0,
                ...W
            }), l && qN({ ...W
            }), QN({ ...W,
                apply: ({
                    elements: gn,
                    rects: Li,
                    availableWidth: ji,
                    availableHeight: Yr
                }) => {
                    const {
                        width: _i,
                        height: Xr
                    } = Li.reference, Ln = gn.floating.style;
                    Ln.setProperty("--radix-popper-available-width", `${ji}px`), Ln.setProperty("--radix-popper-available-height", `${Yr}px`), Ln.setProperty("--radix-popper-anchor-width", `${_i}px`), Ln.setProperty("--radix-popper-anchor-height", `${Xr}px`)
                }
            }), k && XN({
                element: k,
                padding: a
            }), sI({
                arrowWidth: P,
                arrowHeight: A
            }), h && YN({
                strategy: "referenceHidden",
                ...W
            })]
        }), [O, b] = BS(K), q = Vr(g);
        Zn(() => {
            $ && (q == null || q())
        }, [$, q]);
        const G = (oe = R.arrow) == null ? void 0 : oe.x,
            T = (nt = R.arrow) == null ? void 0 : nt.y,
            Y = ((rt = R.arrow) == null ? void 0 : rt.centerOffset) !== 0,
            [pe, se] = w.useState();
        return Zn(() => {
            p && se(window.getComputedStyle(p).zIndex)
        }, [p]), S.jsx("div", {
            ref: F.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...U,
                transform: $ ? U.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: pe,
                "--radix-popper-transform-origin": [(dt = R.transformOrigin) == null ? void 0 : dt.x, (bt = R.transformOrigin) == null ? void 0 : bt.y].join(" "),
                ...((rr = R.hide) == null ? void 0 : rr.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: S.jsx(nI, {
                scope: n,
                placedSide: O,
                onArrowChange: E,
                arrowX: G,
                arrowY: T,
                shouldHideArrow: Y,
                children: S.jsx(wt.div, {
                    "data-side": O,
                    "data-align": b,
                    ...m,
                    ref: v,
                    style: { ...m.style,
                        animation: $ ? void 0 : "none"
                    }
                })
            })
        })
    });
FS.displayName = kp;
var zS = "PopperArrow",
    iI = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    VS = w.forwardRef(function(t, n) {
        const {
            __scopePopper: r,
            ...i
        } = t, o = rI(zS, r), s = iI[o.placedSide];
        return S.jsx("span", {
            ref: o.onArrowChange,
            style: {
                position: "absolute",
                left: o.arrowX,
                top: o.arrowY,
                [s]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[o.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[o.placedSide],
                visibility: o.shouldHideArrow ? "hidden" : void 0
            },
            children: S.jsx(JN, { ...i,
                ref: n,
                style: { ...i.style,
                    display: "block"
                }
            })
        })
    });
VS.displayName = zS;

function oI(e) {
    return e !== null
}
var sI = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var x, p, y;
        const {
            placement: n,
            rects: r,
            middlewareData: i
        } = t, s = ((x = i.arrow) == null ? void 0 : x.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [u, c] = BS(n), d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c], h = (((p = i.arrow) == null ? void 0 : p.x) ? ? 0) + a / 2, f = (((y = i.arrow) == null ? void 0 : y.y) ? ? 0) + l / 2;
        let g = "",
            m = "";
        return u === "bottom" ? (g = s ? d : `${h}px`, m = `${-l}px`) : u === "top" ? (g = s ? d : `${h}px`, m = `${r.floating.height+l}px`) : u === "right" ? (g = `${-l}px`, m = s ? d : `${f}px`) : u === "left" && (g = `${r.floating.width+l}px`, m = s ? d : `${f}px`), {
            data: {
                x: g,
                y: m
            }
        }
    }
});

function BS(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var aI = LS,
    lI = _S,
    uI = FS,
    cI = VS,
    [Ku, Sz] = Vu("Tooltip", [OS]),
    Gu = OS(),
    $S = "TooltipProvider",
    dI = 700,
    If = "tooltip.open",
    [fI, Cp] = Ku($S),
    US = e => {
        const {
            __scopeTooltip: t,
            delayDuration: n = dI,
            skipDelayDuration: r = 300,
            disableHoverableContent: i = !1,
            children: o
        } = e, s = w.useRef(!0), a = w.useRef(!1), l = w.useRef(0);
        return w.useEffect(() => {
            const u = l.current;
            return () => window.clearTimeout(u)
        }, []), S.jsx(fI, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: n,
            onOpen: w.useCallback(() => {
                window.clearTimeout(l.current), s.current = !1
            }, []),
            onClose: w.useCallback(() => {
                window.clearTimeout(l.current), l.current = window.setTimeout(() => s.current = !0, r)
            }, [r]),
            isPointerInTransitRef: a,
            onPointerInTransitChange: w.useCallback(u => {
                a.current = u
            }, []),
            disableHoverableContent: i,
            children: o
        })
    };
US.displayName = $S;
var oa = "Tooltip",
    [hI, qu] = Ku(oa),
    HS = e => {
        const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: i,
            onOpenChange: o,
            disableHoverableContent: s,
            delayDuration: a
        } = e, l = Cp(oa, e.__scopeTooltip), u = Gu(t), [c, d] = w.useState(null), h = BM(), f = w.useRef(0), g = s ? ? l.disableHoverableContent, m = a ? ? l.delayDuration, x = w.useRef(!1), [p, y] = Vw({
            prop: r,
            defaultProp: i ? ? !1,
            onChange: P => {
                P ? (l.onOpen(), document.dispatchEvent(new CustomEvent(If))) : l.onClose(), o == null || o(P)
            },
            caller: oa
        }), v = w.useMemo(() => p ? x.current ? "delayed-open" : "instant-open" : "closed", [p]), k = w.useCallback(() => {
            window.clearTimeout(f.current), f.current = 0, x.current = !1, y(!0)
        }, [y]), E = w.useCallback(() => {
            window.clearTimeout(f.current), f.current = 0, y(!1)
        }, [y]), C = w.useCallback(() => {
            window.clearTimeout(f.current), f.current = window.setTimeout(() => {
                x.current = !0, y(!0), f.current = 0
            }, m)
        }, [m, y]);
        return w.useEffect(() => () => {
            f.current && (window.clearTimeout(f.current), f.current = 0)
        }, []), S.jsx(aI, { ...u,
            children: S.jsx(hI, {
                scope: t,
                contentId: h,
                open: p,
                stateAttribute: v,
                trigger: c,
                onTriggerChange: d,
                onTriggerEnter: w.useCallback(() => {
                    l.isOpenDelayedRef.current ? C() : k()
                }, [l.isOpenDelayedRef, C, k]),
                onTriggerLeave: w.useCallback(() => {
                    g ? E() : (window.clearTimeout(f.current), f.current = 0)
                }, [E, g]),
                onOpen: k,
                onClose: E,
                disableHoverableContent: g,
                children: n
            })
        })
    };
HS.displayName = oa;
var Of = "TooltipTrigger",
    WS = w.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, i = qu(Of, n), o = Cp(Of, n), s = Gu(n), a = w.useRef(null), l = hn(t, a, i.onTriggerChange), u = w.useRef(!1), c = w.useRef(!1), d = w.useCallback(() => u.current = !1, []);
        return w.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), S.jsx(lI, {
            asChild: !0,
            ...s,
            children: S.jsx(wt.button, {
                "aria-describedby": i.open ? i.contentId : void 0,
                "data-state": i.stateAttribute,
                ...r,
                ref: l,
                onPointerMove: ze(e.onPointerMove, h => {
                    h.pointerType !== "touch" && !c.current && !o.isPointerInTransitRef.current && (i.onTriggerEnter(), c.current = !0)
                }),
                onPointerLeave: ze(e.onPointerLeave, () => {
                    i.onTriggerLeave(), c.current = !1
                }),
                onPointerDown: ze(e.onPointerDown, () => {
                    i.open && i.onClose(), u.current = !0, document.addEventListener("pointerup", d, {
                        once: !0
                    })
                }),
                onFocus: ze(e.onFocus, () => {
                    u.current || i.onOpen()
                }),
                onBlur: ze(e.onBlur, i.onClose),
                onClick: ze(e.onClick, i.onClose)
            })
        })
    });
WS.displayName = Of;
var pI = "TooltipPortal",
    [bz, mI] = Ku(pI, {
        forceMount: void 0
    }),
    Oo = "TooltipContent",
    KS = w.forwardRef((e, t) => {
        const n = mI(Oo, e.__scopeTooltip),
            {
                forceMount: r = n.forceMount,
                side: i = "top",
                ...o
            } = e,
            s = qu(Oo, e.__scopeTooltip);
        return S.jsx(up, {
            present: r || s.open,
            children: s.disableHoverableContent ? S.jsx(GS, {
                side: i,
                ...o,
                ref: t
            }) : S.jsx(gI, {
                side: i,
                ...o,
                ref: t
            })
        })
    }),
    gI = w.forwardRef((e, t) => {
        const n = qu(Oo, e.__scopeTooltip),
            r = Cp(Oo, e.__scopeTooltip),
            i = w.useRef(null),
            o = hn(t, i),
            [s, a] = w.useState(null),
            {
                trigger: l,
                onClose: u
            } = n,
            c = i.current,
            {
                onPointerInTransitChange: d
            } = r,
            h = w.useCallback(() => {
                a(null), d(!1)
            }, [d]),
            f = w.useCallback((g, m) => {
                const x = g.currentTarget,
                    p = {
                        x: g.clientX,
                        y: g.clientY
                    },
                    y = SI(p, x.getBoundingClientRect()),
                    v = bI(p, y),
                    k = kI(m.getBoundingClientRect()),
                    E = EI([...v, ...k]);
                a(E), d(!0)
            }, [d]);
        return w.useEffect(() => () => h(), [h]), w.useEffect(() => {
            if (l && c) {
                const g = x => f(x, c),
                    m = x => f(x, l);
                return l.addEventListener("pointerleave", g), c.addEventListener("pointerleave", m), () => {
                    l.removeEventListener("pointerleave", g), c.removeEventListener("pointerleave", m)
                }
            }
        }, [l, c, f, h]), w.useEffect(() => {
            if (s) {
                const g = m => {
                    const x = m.target,
                        p = {
                            x: m.clientX,
                            y: m.clientY
                        },
                        y = (l == null ? void 0 : l.contains(x)) || (c == null ? void 0 : c.contains(x)),
                        v = !CI(p, s);
                    y ? h() : v && (h(), u())
                };
                return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g)
            }
        }, [l, c, s, u, h]), S.jsx(GS, { ...e,
            ref: o
        })
    }),
    [yI, vI] = Ku(oa, {
        isInside: !1
    }),
    xI = _A("TooltipContent"),
    GS = w.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            children: r,
            "aria-label": i,
            onEscapeKeyDown: o,
            onPointerDownOutside: s,
            ...a
        } = e, l = qu(Oo, n), u = Gu(n), {
            onClose: c
        } = l;
        return w.useEffect(() => (document.addEventListener(If, c), () => document.removeEventListener(If, c)), [c]), w.useEffect(() => {
            if (l.trigger) {
                const d = h => {
                    const f = h.target;
                    f != null && f.contains(l.trigger) && c()
                };
                return window.addEventListener("scroll", d, {
                    capture: !0
                }), () => window.removeEventListener("scroll", d, {
                    capture: !0
                })
            }
        }, [l.trigger, c]), S.jsx(lp, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: s,
            onFocusOutside: d => d.preventDefault(),
            onDismiss: c,
            children: S.jsxs(uI, {
                "data-state": l.stateAttribute,
                ...u,
                ...a,
                ref: t,
                style: { ...a.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [S.jsx(xI, {
                    children: r
                }), S.jsx(yI, {
                    scope: n,
                    isInside: !0,
                    children: S.jsx(aR, {
                        id: l.contentId,
                        role: "tooltip",
                        children: i || r
                    })
                })]
            })
        })
    });
KS.displayName = Oo;
var qS = "TooltipArrow",
    wI = w.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, i = Gu(n);
        return vI(qS, n).isInside ? null : S.jsx(cI, { ...i,
            ...r,
            ref: t
        })
    });
wI.displayName = qS;

function SI(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        i = Math.abs(t.right - e.x),
        o = Math.abs(t.left - e.x);
    switch (Math.min(n, r, i, o)) {
        case o:
            return "left";
        case i:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function bI(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "bottom":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case "left":
            r.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "right":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            });
            break
    }
    return r
}

function kI(e) {
    const {
        top: t,
        right: n,
        bottom: r,
        left: i
    } = e;
    return [{
        x: i,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: i,
        y: r
    }]
}

function CI(e, t) {
    const {
        x: n,
        y: r
    } = e;
    let i = !1;
    for (let o = 0, s = t.length - 1; o < t.length; s = o++) {
        const a = t[o],
            l = t[s],
            u = a.x,
            c = a.y,
            d = l.x,
            h = l.y;
        c > r != h > r && n < (d - u) * (r - c) / (h - c) + u && (i = !i)
    }
    return i
}

function EI(e) {
    const t = e.slice();
    return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), TI(t)
}

function TI(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        for (; t.length >= 2;) {
            const o = t[t.length - 1],
                s = t[t.length - 2];
            if ((o.x - s.x) * (i.y - s.y) >= (o.y - s.y) * (i.x - s.x)) t.pop();
            else break
        }
        t.push(i)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const i = e[r];
        for (; n.length >= 2;) {
            const o = n[n.length - 1],
                s = n[n.length - 2];
            if ((o.x - s.x) * (i.y - s.y) >= (o.y - s.y) * (i.x - s.x)) n.pop();
            else break
        }
        n.push(i)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var PI = US,
    AI = HS,
    RI = WS,
    QS = KS;
const MI = PI,
    kz = AI,
    Cz = RI,
    NI = w.forwardRef(({
        className: e,
        sideOffset: t = 4,
        ...n
    }, r) => S.jsx(QS, {
        ref: r,
        sideOffset: t,
        className: Ii("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
        ...n
    }));
NI.displayName = QS.displayName;
const Ep = w.createContext({});

function Tp(e) {
    const t = w.useRef(null);
    return t.current === null && (t.current = e()), t.current
}
const Qu = w.createContext(null),
    Pp = w.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    });
class II extends w.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function OI({
    children: e,
    isPresent: t
}) {
    const n = w.useId(),
        r = w.useRef(null),
        i = w.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        }),
        {
            nonce: o
        } = w.useContext(Pp);
    return w.useInsertionEffect(() => {
        const {
            width: s,
            height: a,
            top: l,
            left: u
        } = i.current;
        if (t || !r.current || !s || !a) return;
        r.current.dataset.motionPopId = n;
        const c = document.createElement("style");
        return o && (c.nonce = o), document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `), () => {
            document.head.removeChild(c)
        }
    }, [t]), S.jsx(II, {
        isPresent: t,
        childRef: r,
        sizeRef: i,
        children: w.cloneElement(e, {
            ref: r
        })
    })
}
const DI = ({
    children: e,
    initial: t,
    isPresent: n,
    onExitComplete: r,
    custom: i,
    presenceAffectsLayout: o,
    mode: s
}) => {
    const a = Tp(LI),
        l = w.useId(),
        u = w.useCallback(d => {
            a.set(d, !0);
            for (const h of a.values())
                if (!h) return;
            r && r()
        }, [a, r]),
        c = w.useMemo(() => ({
            id: l,
            initial: t,
            isPresent: n,
            custom: i,
            onExitComplete: u,
            register: d => (a.set(d, !1), () => a.delete(d))
        }), o ? [Math.random(), u] : [n, u]);
    return w.useMemo(() => {
        a.forEach((d, h) => a.set(h, !1))
    }, [n]), w.useEffect(() => {
        !n && !a.size && r && r()
    }, [n]), s === "popLayout" && (e = S.jsx(OI, {
        isPresent: n,
        children: e
    })), S.jsx(Qu.Provider, {
        value: c,
        children: e
    })
};

function LI() {
    return new Map
}

function YS(e = !0) {
    const t = w.useContext(Qu);
    if (t === null) return [!0, null];
    const {
        isPresent: n,
        onExitComplete: r,
        register: i
    } = t, o = w.useId();
    w.useEffect(() => {
        e && i(o)
    }, [e]);
    const s = w.useCallback(() => e && r && r(o), [o, r, e]);
    return !n && r ? [!1, s] : [!0]
}
const el = e => e.key || "";

function Ey(e) {
    const t = [];
    return w.Children.forEach(e, n => {
        w.isValidElement(n) && t.push(n)
    }), t
}
const Ap = typeof window < "u",
    XS = Ap ? w.useLayoutEffect : w.useEffect,
    ZS = ({
        children: e,
        custom: t,
        initial: n = !0,
        onExitComplete: r,
        presenceAffectsLayout: i = !0,
        mode: o = "sync",
        propagate: s = !1
    }) => {
        const [a, l] = YS(s), u = w.useMemo(() => Ey(e), [e]), c = s && !a ? [] : u.map(el), d = w.useRef(!0), h = w.useRef(u), f = Tp(() => new Map), [g, m] = w.useState(u), [x, p] = w.useState(u);
        XS(() => {
            d.current = !1, h.current = u;
            for (let k = 0; k < x.length; k++) {
                const E = el(x[k]);
                c.includes(E) ? f.delete(E) : f.get(E) !== !0 && f.set(E, !1)
            }
        }, [x, c.length, c.join("-")]);
        const y = [];
        if (u !== g) {
            let k = [...u];
            for (let E = 0; E < x.length; E++) {
                const C = x[E],
                    P = el(C);
                c.includes(P) || (k.splice(E, 0, C), y.push(C))
            }
            o === "wait" && y.length && (k = y), p(Ey(k)), m(u);
            return
        }
        const {
            forceRender: v
        } = w.useContext(Ep);
        return S.jsx(S.Fragment, {
            children: x.map(k => {
                const E = el(k),
                    C = s && !a ? !1 : u === x || c.includes(E),
                    P = () => {
                        if (f.has(E)) f.set(E, !0);
                        else return;
                        let A = !0;
                        f.forEach(N => {
                            N || (A = !1)
                        }), A && (v == null || v(), p(h.current), s && (l == null || l()), r && r())
                    };
                return S.jsx(DI, {
                    isPresent: C,
                    initial: !d.current || n ? void 0 : !1,
                    custom: C ? void 0 : t,
                    presenceAffectsLayout: i,
                    mode: o,
                    onExitComplete: C ? void 0 : P,
                    children: k
                }, E)
            })
        })
    },
    It = e => e;
let Df = It;

function Rp(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}
const Do = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    },
    Kn = e => e * 1e3,
    Gn = e => e / 1e3,
    jI = {
        skipAnimations: !1,
        useManualTiming: !1
    };

function _I(e) {
    let t = new Set,
        n = new Set,
        r = !1,
        i = !1;
    const o = new WeakSet;
    let s = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function a(u) {
        o.has(u) && (l.schedule(u), e()), u(s)
    }
    const l = {
        schedule: (u, c = !1, d = !1) => {
            const f = d && r ? t : n;
            return c && o.add(u), f.has(u) || f.add(u), u
        },
        cancel: u => {
            n.delete(u), o.delete(u)
        },
        process: u => {
            if (s = u, r) {
                i = !0;
                return
            }
            r = !0, [t, n] = [n, t], t.forEach(a), t.clear(), r = !1, i && (i = !1, l.process(u))
        }
    };
    return l
}
const tl = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    FI = 40;

function JS(e, t) {
    let n = !1,
        r = !0;
    const i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        o = () => n = !0,
        s = tl.reduce((p, y) => (p[y] = _I(o), p), {}),
        {
            read: a,
            resolveKeyframes: l,
            update: u,
            preRender: c,
            render: d,
            postRender: h
        } = s,
        f = () => {
            const p = performance.now();
            n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, FI), 1), i.timestamp = p, i.isProcessing = !0, a.process(i), l.process(i), u.process(i), c.process(i), d.process(i), h.process(i), i.isProcessing = !1, n && t && (r = !1, e(f))
        },
        g = () => {
            n = !0, r = !0, i.isProcessing || e(f)
        };
    return {
        schedule: tl.reduce((p, y) => {
            const v = s[y];
            return p[y] = (k, E = !1, C = !1) => (n || g(), v.schedule(k, E, C)), p
        }, {}),
        cancel: p => {
            for (let y = 0; y < tl.length; y++) s[tl[y]].cancel(p)
        },
        state: i,
        steps: s
    }
}
const {
    schedule: be,
    cancel: Ur,
    state: He,
    steps: Gc
} = JS(typeof requestAnimationFrame < "u" ? requestAnimationFrame : It, !0), eb = w.createContext({
    strict: !1
}), Ty = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}, Lo = {};
for (const e in Ty) Lo[e] = {
    isEnabled: t => Ty[e].some(n => !!t[n])
};

function zI(e) {
    for (const t in e) Lo[t] = { ...Lo[t],
        ...e[t]
    }
}
const VI = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function du(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || VI.has(e)
}
let tb = e => !du(e);

function BI(e) {
    e && (tb = t => t.startsWith("on") ? !du(t) : e(t))
}
try {
    BI(require("@emotion/is-prop-valid").default)
} catch {}

function $I(e, t, n) {
    const r = {};
    for (const i in e) i === "values" && typeof e.values == "object" || (tb(i) || n === !0 && du(i) || !t && !du(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}

function UI(e) {
    if (typeof Proxy > "u") return e;
    const t = new Map,
        n = (...r) => e(...r);
    return new Proxy(n, {
        get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))
    })
}
const Yu = w.createContext({});

function sa(e) {
    return typeof e == "string" || Array.isArray(e)
}

function Xu(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const Mp = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Np = ["initial", ...Mp];

function Zu(e) {
    return Xu(e.animate) || Np.some(t => sa(e[t]))
}

function nb(e) {
    return !!(Zu(e) || e.variants)
}

function HI(e, t) {
    if (Zu(e)) {
        const {
            initial: n,
            animate: r
        } = e;
        return {
            initial: n === !1 || sa(n) ? n : void 0,
            animate: sa(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}

function WI(e) {
    const {
        initial: t,
        animate: n
    } = HI(e, w.useContext(Yu));
    return w.useMemo(() => ({
        initial: t,
        animate: n
    }), [Py(t), Py(n)])
}

function Py(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const KI = Symbol.for("motionComponentSymbol");

function Ji(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function GI(e, t, n) {
    return w.useCallback(r => {
        r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Ji(n) && (n.current = r))
    }, [t])
}
const Ip = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    qI = "framerAppearId",
    rb = "data-" + Ip(qI),
    {
        schedule: Op,
        cancel: Ez
    } = JS(queueMicrotask, !1),
    ib = w.createContext({});

function QI(e, t, n, r, i) {
    var o, s;
    const {
        visualElement: a
    } = w.useContext(Yu), l = w.useContext(eb), u = w.useContext(Qu), c = w.useContext(Pp).reducedMotion, d = w.useRef(null);
    r = r || l.renderer, !d.current && r && (d.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c
    }));
    const h = d.current,
        f = w.useContext(ib);
    h && !h.projection && i && (h.type === "html" || h.type === "svg") && YI(d.current, n, i, f);
    const g = w.useRef(!1);
    w.useInsertionEffect(() => {
        h && g.current && h.update(n, u)
    });
    const m = n[rb],
        x = w.useRef(!!m && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, m)) && ((s = window.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(window, m)));
    return XS(() => {
        h && (g.current = !0, window.MotionIsMounted = !0, h.updateFeatures(), Op.render(h.render), x.current && h.animationState && h.animationState.animateChanges())
    }), w.useEffect(() => {
        h && (!x.current && h.animationState && h.animationState.animateChanges(), x.current && (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) === null || p === void 0 || p.call(window, m)
        }), x.current = !1))
    }), h
}

function YI(e, t, n, r) {
    const {
        layoutId: i,
        layout: o,
        drag: s,
        dragConstraints: a,
        layoutScroll: l,
        layoutRoot: u
    } = t;
    e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : ob(e.parent)), e.projection.setOptions({
        layoutId: i,
        layout: o,
        alwaysMeasureLayout: !!s || a && Ji(a),
        visualElement: e,
        animationType: typeof o == "string" ? o : "both",
        initialPromotionConfig: r,
        layoutScroll: l,
        layoutRoot: u
    })
}

function ob(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : ob(e.parent)
}

function XI({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: r,
    Component: i
}) {
    var o, s;
    e && zI(e);

    function a(u, c) {
        let d;
        const h = { ...w.useContext(Pp),
                ...u,
                layoutId: ZI(u)
            },
            {
                isStatic: f
            } = h,
            g = WI(u),
            m = r(u, f);
        if (!f && Ap) {
            JI();
            const x = eO(h);
            d = x.MeasureLayout, g.visualElement = QI(i, m, h, t, x.ProjectionNode)
        }
        return S.jsxs(Yu.Provider, {
            value: g,
            children: [d && g.visualElement ? S.jsx(d, {
                visualElement: g.visualElement,
                ...h
            }) : null, n(i, u, GI(m, g.visualElement, c), m, f, g.visualElement)]
        })
    }
    a.displayName = `motion.${typeof i=="string"?i:`create(${(s=(o=i.displayName)!==null&&o!==void 0?o:i.name)!==null&&s!==void 0?s:""})`}`;
    const l = w.forwardRef(a);
    return l[KI] = i, l
}

function ZI({
    layoutId: e
}) {
    const t = w.useContext(Ep).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function JI(e, t) {
    w.useContext(eb).strict
}

function eO(e) {
    const {
        drag: t,
        layout: n
    } = Lo;
    if (!t && !n) return {};
    const r = { ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
const tO = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Dp(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(tO.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function Ay(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach((n, r) => {
        t[0][r] = n.get(), t[1][r] = n.getVelocity()
    }), t
}

function Lp(e, t, n, r) {
    if (typeof t == "function") {
        const [i, o] = Ay(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
        const [i, o] = Ay(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    return t
}
const Lf = e => Array.isArray(e),
    nO = e => !!(e && typeof e == "object" && e.mix && e.toValue),
    rO = e => Lf(e) ? e[e.length - 1] || 0 : e,
    Je = e => !!(e && e.getVelocity);

function El(e) {
    const t = Je(e) ? e.get() : e;
    return nO(t) ? t.toValue() : t
}

function iO({
    scrapeMotionValuesFromProps: e,
    createRenderState: t,
    onUpdate: n
}, r, i, o) {
    const s = {
        latestValues: oO(r, i, o, e),
        renderState: t()
    };
    return n && (s.onMount = a => n({
        props: r,
        current: a,
        ...s
    }), s.onUpdate = a => n(a)), s
}
const sb = e => (t, n) => {
    const r = w.useContext(Yu),
        i = w.useContext(Qu),
        o = () => iO(e, t, r, i);
    return n ? o() : Tp(o)
};

function oO(e, t, n, r) {
    const i = {},
        o = r(e, {});
    for (const h in o) i[h] = El(o[h]);
    let {
        initial: s,
        animate: a
    } = e;
    const l = Zu(e),
        u = nb(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const d = c ? a : s;
    if (d && typeof d != "boolean" && !Xu(d)) {
        const h = Array.isArray(d) ? d : [d];
        for (let f = 0; f < h.length; f++) {
            const g = Lp(e, h[f]);
            if (g) {
                const {
                    transitionEnd: m,
                    transition: x,
                    ...p
                } = g;
                for (const y in p) {
                    let v = p[y];
                    if (Array.isArray(v)) {
                        const k = c ? v.length - 1 : 0;
                        v = v[k]
                    }
                    v !== null && (i[y] = v)
                }
                for (const y in m) i[y] = m[y]
            }
        }
    }
    return i
}
const Ko = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    Oi = new Set(Ko),
    ab = e => t => typeof t == "string" && t.startsWith(e),
    lb = ab("--"),
    sO = ab("var(--"),
    jp = e => sO(e) ? aO.test(e.split("/*")[0].trim()) : !1,
    aO = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    ub = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
    tr = (e, t, n) => n > t ? t : n < e ? e : n,
    Go = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    aa = { ...Go,
        transform: e => tr(0, 1, e)
    },
    nl = { ...Go,
        default: 1
    },
    ka = e => ({
        test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    mr = ka("deg"),
    Mn = ka("%"),
    Q = ka("px"),
    lO = ka("vh"),
    uO = ka("vw"),
    Ry = { ...Mn,
        parse: e => Mn.parse(e) / 100,
        transform: e => Mn.transform(e * 100)
    },
    cO = {
        borderWidth: Q,
        borderTopWidth: Q,
        borderRightWidth: Q,
        borderBottomWidth: Q,
        borderLeftWidth: Q,
        borderRadius: Q,
        radius: Q,
        borderTopLeftRadius: Q,
        borderTopRightRadius: Q,
        borderBottomRightRadius: Q,
        borderBottomLeftRadius: Q,
        width: Q,
        maxWidth: Q,
        height: Q,
        maxHeight: Q,
        top: Q,
        right: Q,
        bottom: Q,
        left: Q,
        padding: Q,
        paddingTop: Q,
        paddingRight: Q,
        paddingBottom: Q,
        paddingLeft: Q,
        margin: Q,
        marginTop: Q,
        marginRight: Q,
        marginBottom: Q,
        marginLeft: Q,
        backgroundPositionX: Q,
        backgroundPositionY: Q
    },
    dO = {
        rotate: mr,
        rotateX: mr,
        rotateY: mr,
        rotateZ: mr,
        scale: nl,
        scaleX: nl,
        scaleY: nl,
        scaleZ: nl,
        skew: mr,
        skewX: mr,
        skewY: mr,
        distance: Q,
        translateX: Q,
        translateY: Q,
        translateZ: Q,
        x: Q,
        y: Q,
        z: Q,
        perspective: Q,
        transformPerspective: Q,
        opacity: aa,
        originX: Ry,
        originY: Ry,
        originZ: Q
    },
    My = { ...Go,
        transform: Math.round
    },
    _p = { ...cO,
        ...dO,
        zIndex: My,
        size: Q,
        fillOpacity: aa,
        strokeOpacity: aa,
        numOctaves: My
    },
    fO = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    hO = Ko.length;

function pO(e, t, n) {
    let r = "",
        i = !0;
    for (let o = 0; o < hO; o++) {
        const s = Ko[o],
            a = e[s];
        if (a === void 0) continue;
        let l = !0;
        if (typeof a == "number" ? l = a === (s.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
            const u = ub(a, _p[s]);
            if (!l) {
                i = !1;
                const c = fO[s] || s;
                r += `${c}(${u}) `
            }
            n && (t[s] = u)
        }
    }
    return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r
}

function Fp(e, t, n) {
    const {
        style: r,
        vars: i,
        transformOrigin: o
    } = e;
    let s = !1,
        a = !1;
    for (const l in t) {
        const u = t[l];
        if (Oi.has(l)) {
            s = !0;
            continue
        } else if (lb(l)) {
            i[l] = u;
            continue
        } else {
            const c = ub(u, _p[l]);
            l.startsWith("origin") ? (a = !0, o[l] = c) : r[l] = c
        }
    }
    if (t.transform || (s || n ? r.transform = pO(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
        const {
            originX: l = "50%",
            originY: u = "50%",
            originZ: c = 0
        } = o;
        r.transformOrigin = `${l} ${u} ${c}`
    }
}
const mO = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    gO = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function yO(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const o = i ? mO : gO;
    e[o.offset] = Q.transform(-r);
    const s = Q.transform(t),
        a = Q.transform(n);
    e[o.array] = `${s} ${a}`
}

function Ny(e, t, n) {
    return typeof e == "string" ? e : Q.transform(t + n * e)
}

function vO(e, t, n) {
    const r = Ny(t, e.x, e.width),
        i = Ny(n, e.y, e.height);
    return `${r} ${i}`
}

function zp(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
}, c, d) {
    if (Fp(e, u, d), c) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: h,
        style: f,
        dimensions: g
    } = e;
    h.transform && (g && (f.transform = h.transform), delete h.transform), g && (i !== void 0 || o !== void 0 || f.transform) && (f.transformOrigin = vO(g, i !== void 0 ? i : .5, o !== void 0 ? o : .5)), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), s !== void 0 && yO(h, s, a, l, !1)
}
const Vp = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    }),
    cb = () => ({ ...Vp(),
        attrs: {}
    }),
    Bp = e => typeof e == "string" && e.toLowerCase() === "svg";

function db(e, {
    style: t,
    vars: n
}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n) e.style.setProperty(o, n[o])
}
const fb = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function hb(e, t, n, r) {
    db(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(fb.has(i) ? i : Ip(i), t.attrs[i])
}
const fu = {};

function xO(e) {
    Object.assign(fu, e)
}

function pb(e, {
    layout: t,
    layoutId: n
}) {
    return Oi.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!fu[e] || e === "opacity")
}

function $p(e, t, n) {
    var r;
    const {
        style: i
    } = e, o = {};
    for (const s in i)(Je(i[s]) || t.style && Je(t.style[s]) || pb(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
    return o
}

function mb(e, t, n) {
    const r = $p(e, t, n);
    for (const i in e)
        if (Je(e[i]) || Je(t[i])) {
            const o = Ko.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[o] = e[i]
        }
    return r
}

function wO(e, t) {
    try {
        t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
    } catch {
        t.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const Iy = ["x", "y", "width", "height", "cx", "cy", "r"],
    SO = {
        useVisualState: sb({
            scrapeMotionValuesFromProps: mb,
            createRenderState: cb,
            onUpdate: ({
                props: e,
                prevProps: t,
                current: n,
                renderState: r,
                latestValues: i
            }) => {
                if (!n) return;
                let o = !!e.drag;
                if (!o) {
                    for (const a in i)
                        if (Oi.has(a)) {
                            o = !0;
                            break
                        }
                }
                if (!o) return;
                let s = !t;
                if (t)
                    for (let a = 0; a < Iy.length; a++) {
                        const l = Iy[a];
                        e[l] !== t[l] && (s = !0)
                    }
                s && be.read(() => {
                    wO(n, r), be.render(() => {
                        zp(r, i, Bp(n.tagName), e.transformTemplate), hb(n, r)
                    })
                })
            }
        })
    },
    bO = {
        useVisualState: sb({
            scrapeMotionValuesFromProps: $p,
            createRenderState: Vp
        })
    };

function gb(e, t, n) {
    for (const r in t) !Je(t[r]) && !pb(r, n) && (e[r] = t[r])
}

function kO({
    transformTemplate: e
}, t) {
    return w.useMemo(() => {
        const n = Vp();
        return Fp(n, t, e), Object.assign({}, n.vars, n.style)
    }, [t])
}

function CO(e, t) {
    const n = e.style || {},
        r = {};
    return gb(r, n, e), Object.assign(r, kO(e, t)), r
}

function EO(e, t) {
    const n = {},
        r = CO(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
}

function TO(e, t, n, r) {
    const i = w.useMemo(() => {
        const o = cb();
        return zp(o, t, Bp(r), e.transformTemplate), { ...o.attrs,
            style: { ...o.style
            }
        }
    }, [t]);
    if (e.style) {
        const o = {};
        gb(o, e.style, e), i.style = { ...o,
            ...i.style
        }
    }
    return i
}

function PO(e = !1) {
    return (n, r, i, {
        latestValues: o
    }, s) => {
        const l = (Dp(n) ? TO : EO)(r, o, s, n),
            u = $I(r, typeof n == "string", e),
            c = n !== w.Fragment ? { ...u,
                ...l,
                ref: i
            } : {},
            {
                children: d
            } = r,
            h = w.useMemo(() => Je(d) ? d.get() : d, [d]);
        return w.createElement(n, { ...c,
            children: h
        })
    }
}

function AO(e, t) {
    return function(r, {
        forwardMotionProps: i
    } = {
        forwardMotionProps: !1
    }) {
        const s = { ...Dp(r) ? SO : bO,
            preloadedFeatures: e,
            useRender: PO(i),
            createVisualElement: t,
            Component: r
        };
        return XI(s)
    }
}

function yb(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}

function Ju(e, t, n) {
    const r = e.getProps();
    return Lp(r, t, n !== void 0 ? n : r.custom, e)
}
const RO = Rp(() => window.ScrollTimeline !== void 0);
class MO {
    constructor(t) {
        this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(t => "finished" in t ? t.finished : t))
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n
    }
    attachTimeline(t, n) {
        const r = this.animations.map(i => {
            if (RO() && i.attachTimeline) return i.attachTimeline(t);
            if (typeof n == "function") return n(i)
        });
        return () => {
            r.forEach((i, o) => {
                i && i(), this.animations[o].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++) t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n => n[t]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class NO extends MO {
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n)
    }
}

function Up(e, t) {
    return e ? e[t] || e.default || e : void 0
}
const jf = 2e4;

function vb(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < jf;) t += n, r = e.next(t);
    return t >= jf ? 1 / 0 : t
}

function Hp(e) {
    return typeof e == "function"
}

function Oy(e, t) {
    e.timeline = t, e.onfinish = null
}
const Wp = e => Array.isArray(e) && typeof e[0] == "number",
    IO = {
        linearEasing: void 0
    };

function OO(e, t) {
    const n = Rp(e);
    return () => {
        var r;
        return (r = IO[t]) !== null && r !== void 0 ? r : n()
    }
}
const hu = OO(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    xb = (e, t, n = 10) => {
        let r = "";
        const i = Math.max(Math.round(t / n), 2);
        for (let o = 0; o < i; o++) r += e(Do(0, i - 1, o)) + ", ";
        return `linear(${r.substring(0,r.length-2)})`
    };

function wb(e) {
    return !!(typeof e == "function" && hu() || !e || typeof e == "string" && (e in _f || hu()) || Wp(e) || Array.isArray(e) && e.every(wb))
}
const gs = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    _f = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: gs([0, .65, .55, 1]),
        circOut: gs([.55, 0, 1, .45]),
        backIn: gs([.31, .01, .66, -.59]),
        backOut: gs([.33, 1.53, .69, .99])
    };

function Sb(e, t) {
    if (e) return typeof e == "function" && hu() ? xb(e, t) : Wp(e) ? gs(e) : Array.isArray(e) ? e.map(n => Sb(n, t) || _f.easeOut) : _f[e]
}
const tn = {
    x: !1,
    y: !1
};

function bb() {
    return tn.x || tn.y
}

function DO(e, t, n) {
    var r;
    if (e instanceof Element) return [e];
    if (typeof e == "string") {
        let i = document;
        const o = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
        return o ? Array.from(o) : []
    }
    return Array.from(e)
}

function kb(e, t) {
    const n = DO(e),
        r = new AbortController,
        i = {
            passive: !0,
            ...t,
            signal: r.signal
        };
    return [n, i, () => r.abort()]
}

function Dy(e) {
    return t => {
        t.pointerType === "touch" || bb() || e(t)
    }
}

function LO(e, t, n = {}) {
    const [r, i, o] = kb(e, n), s = Dy(a => {
        const {
            target: l
        } = a, u = t(a);
        if (typeof u != "function" || !l) return;
        const c = Dy(d => {
            u(d), l.removeEventListener("pointerleave", c)
        });
        l.addEventListener("pointerleave", c, i)
    });
    return r.forEach(a => {
        a.addEventListener("pointerenter", s, i)
    }), o
}
const Cb = (e, t) => t ? e === t ? !0 : Cb(e, t.parentElement) : !1,
    Kp = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1,
    jO = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function _O(e) {
    return jO.has(e.tagName) || e.tabIndex !== -1
}
const ys = new WeakSet;

function Ly(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}

function qc(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const FO = (e, t) => {
    const n = e.currentTarget;
    if (!n) return;
    const r = Ly(() => {
        if (ys.has(n)) return;
        qc(n, "down");
        const i = Ly(() => {
                qc(n, "up")
            }),
            o = () => qc(n, "cancel");
        n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t)
    });
    n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
};

function jy(e) {
    return Kp(e) && !bb()
}

function zO(e, t, n = {}) {
    const [r, i, o] = kb(e, n), s = a => {
        const l = a.currentTarget;
        if (!jy(a) || ys.has(l)) return;
        ys.add(l);
        const u = t(a),
            c = (f, g) => {
                window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", h), !(!jy(f) || !ys.has(l)) && (ys.delete(l), typeof u == "function" && u(f, {
                    success: g
                }))
            },
            d = f => {
                c(f, n.useGlobalTarget || Cb(l, f.target))
            },
            h = f => {
                c(f, !1)
            };
        window.addEventListener("pointerup", d, i), window.addEventListener("pointercancel", h, i)
    };
    return r.forEach(a => {
        !_O(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, i), a.addEventListener("focus", u => FO(u, i), i)
    }), o
}

function VO(e) {
    return e === "x" || e === "y" ? tn[e] ? null : (tn[e] = !0, () => {
        tn[e] = !1
    }) : tn.x || tn.y ? null : (tn.x = tn.y = !0, () => {
        tn.x = tn.y = !1
    })
}
const Eb = new Set(["width", "height", "top", "left", "right", "bottom", ...Ko]);
let Tl;

function BO() {
    Tl = void 0
}
const Nn = {
    now: () => (Tl === void 0 && Nn.set(He.isProcessing || jI.useManualTiming ? He.timestamp : performance.now()), Tl),
    set: e => {
        Tl = e, queueMicrotask(BO)
    }
};

function Gp(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function qp(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class Qp {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Gp(this.subscriptions, t), () => qp(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const s = this.subscriptions[o];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}

function Tb(e, t) {
    return t ? e * (1e3 / t) : 0
}
const _y = 30,
    $O = e => !isNaN(parseFloat(e));
class UO {
    constructor(t, n = {}) {
        this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
            const o = Nn.now();
            this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t, this.updatedAt = Nn.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = $O(this.current))
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Qp);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(), be.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t, this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n = !0) {
        this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = Nn.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > _y) return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, _y);
        return Tb(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function la(e, t) {
    return new UO(e, t)
}

function HO(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, la(n))
}

function WO(e, t) {
    const n = Ju(e, t);
    let {
        transitionEnd: r = {},
        transition: i = {},
        ...o
    } = n || {};
    o = { ...o,
        ...r
    };
    for (const s in o) {
        const a = rO(o[s]);
        HO(e, s, a)
    }
}

function KO(e) {
    return !!(Je(e) && e.add)
}

function Ff(e, t) {
    const n = e.getValue("willChange");
    if (KO(n)) return n.add(t)
}

function Pb(e) {
    return e.props[rb]
}
const Ab = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    GO = 1e-7,
    qO = 12;

function QO(e, t, n, r, i) {
    let o, s, a = 0;
    do s = t + (n - t) / 2, o = Ab(s, r, i) - e, o > 0 ? n = s : t = s; while (Math.abs(o) > GO && ++a < qO);
    return s
}

function Ca(e, t, n, r) {
    if (e === t && n === r) return It;
    const i = o => QO(o, 0, 1, e, n);
    return o => o === 0 || o === 1 ? o : Ab(i(o), t, r)
}
const Rb = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    Mb = e => t => 1 - e(1 - t),
    Nb = Ca(.33, 1.53, .69, .99),
    Yp = Mb(Nb),
    Ib = Rb(Yp),
    Ob = e => (e *= 2) < 1 ? .5 * Yp(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    Xp = e => 1 - Math.sin(Math.acos(e)),
    Db = Mb(Xp),
    Lb = Rb(Xp),
    jb = e => /^0[^.\s]+$/u.test(e);

function YO(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || jb(e) : !0
}
const Rs = e => Math.round(e * 1e5) / 1e5,
    Zp = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function XO(e) {
    return e == null
}
const ZO = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Jp = (e, t) => n => !!(typeof n == "string" && ZO.test(n) && n.startsWith(e) || t && !XO(n) && Object.prototype.hasOwnProperty.call(n, t)),
    _b = (e, t, n) => r => {
        if (typeof r != "string") return r;
        const [i, o, s, a] = r.match(Zp);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [n]: parseFloat(s),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    },
    JO = e => tr(0, 255, e),
    Qc = { ...Go,
        transform: e => Math.round(JO(e))
    },
    ci = {
        test: Jp("rgb", "red"),
        parse: _b("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => "rgba(" + Qc.transform(e) + ", " + Qc.transform(t) + ", " + Qc.transform(n) + ", " + Rs(aa.transform(r)) + ")"
    };

function eD(e) {
    let t = "",
        n = "",
        r = "",
        i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const zf = {
        test: Jp("#"),
        parse: eD,
        transform: ci.transform
    },
    eo = {
        test: Jp("hsl", "hue"),
        parse: _b("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + Mn.transform(Rs(t)) + ", " + Mn.transform(Rs(n)) + ", " + Rs(aa.transform(r)) + ")"
    },
    Xe = {
        test: e => ci.test(e) || zf.test(e) || eo.test(e),
        parse: e => ci.test(e) ? ci.parse(e) : eo.test(e) ? eo.parse(e) : zf.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? ci.transform(e) : eo.transform(e)
    },
    tD = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function nD(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Zp)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(tD)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Fb = "number",
    zb = "color",
    rD = "var",
    iD = "var(",
    Fy = "${}",
    oD = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function ua(e) {
    const t = e.toString(),
        n = [],
        r = {
            color: [],
            number: [],
            var: []
        },
        i = [];
    let o = 0;
    const a = t.replace(oD, l => (Xe.test(l) ? (r.color.push(o), i.push(zb), n.push(Xe.parse(l))) : l.startsWith(iD) ? (r.var.push(o), i.push(rD), n.push(l)) : (r.number.push(o), i.push(Fb), n.push(parseFloat(l))), ++o, Fy)).split(Fy);
    return {
        values: n,
        split: a,
        indexes: r,
        types: i
    }
}

function Vb(e) {
    return ua(e).values
}

function Bb(e) {
    const {
        split: t,
        types: n
    } = ua(e), r = t.length;
    return i => {
        let o = "";
        for (let s = 0; s < r; s++)
            if (o += t[s], i[s] !== void 0) {
                const a = n[s];
                a === Fb ? o += Rs(i[s]) : a === zb ? o += Xe.transform(i[s]) : o += i[s]
            }
        return o
    }
}
const sD = e => typeof e == "number" ? 0 : e;

function aD(e) {
    const t = Vb(e);
    return Bb(e)(t.map(sD))
}
const Hr = {
        test: nD,
        parse: Vb,
        createTransformer: Bb,
        getAnimatableNone: aD
    },
    lD = new Set(["brightness", "contrast", "saturate", "opacity"]);

function uD(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(Zp) || [];
    if (!r) return e;
    const i = n.replace(r, "");
    let o = lD.has(t) ? 1 : 0;
    return r !== n && (o *= 100), t + "(" + o + i + ")"
}
const cD = /\b([a-z-]*)\(.*?\)/gu,
    Vf = { ...Hr,
        getAnimatableNone: e => {
            const t = e.match(cD);
            return t ? t.map(uD).join(" ") : e
        }
    },
    dD = { ..._p,
        color: Xe,
        backgroundColor: Xe,
        outlineColor: Xe,
        fill: Xe,
        stroke: Xe,
        borderColor: Xe,
        borderTopColor: Xe,
        borderRightColor: Xe,
        borderBottomColor: Xe,
        borderLeftColor: Xe,
        filter: Vf,
        WebkitFilter: Vf
    },
    em = e => dD[e];

function $b(e, t) {
    let n = em(e);
    return n !== Vf && (n = Hr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const fD = new Set(["auto", "none", "0"]);

function hD(e, t, n) {
    let r = 0,
        i;
    for (; r < e.length && !i;) {
        const o = e[r];
        typeof o == "string" && !fD.has(o) && ua(o).values.length && (i = e[r]), r++
    }
    if (i && n)
        for (const o of t) e[o] = $b(n, i)
}
const zy = e => e === Go || e === Q,
    Vy = (e, t) => parseFloat(e.split(", ")[t]),
    By = (e, t) => (n, {
        transform: r
    }) => {
        if (r === "none" || !r) return 0;
        const i = r.match(/^matrix3d\((.+)\)$/u);
        if (i) return Vy(i[1], t); {
            const o = r.match(/^matrix\((.+)\)$/u);
            return o ? Vy(o[1], e) : 0
        }
    },
    pD = new Set(["x", "y", "z"]),
    mD = Ko.filter(e => !pD.has(e));

function gD(e) {
    const t = [];
    return mD.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t
}
const jo = {
    width: ({
        x: e
    }, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({
        y: e
    }, {
        paddingTop: t = "0",
        paddingBottom: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {
        top: t
    }) => parseFloat(t),
    left: (e, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: e
    }, {
        top: t
    }) => parseFloat(t) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: t
    }) => parseFloat(t) + (e.max - e.min),
    x: By(4, 13),
    y: By(5, 14)
};
jo.translateX = jo.x;
jo.translateY = jo.y;
const wi = new Set;
let Bf = !1,
    $f = !1;

function Ub() {
    if ($f) {
        const e = Array.from(wi).filter(r => r.needsMeasurement),
            t = new Set(e.map(r => r.element)),
            n = new Map;
        t.forEach(r => {
            const i = gD(r);
            i.length && (n.set(r, i), r.render())
        }), e.forEach(r => r.measureInitialState()), t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach(([o, s]) => {
                var a;
                (a = r.getValue(o)) === null || a === void 0 || a.set(s)
            })
        }), e.forEach(r => r.measureEndState()), e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        })
    }
    $f = !1, Bf = !1, wi.forEach(e => e.complete()), wi.clear()
}

function Hb() {
    wi.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && ($f = !0)
    })
}

function yD() {
    Hb(), Ub()
}
class tm {
    constructor(t, n, r, i, o, s = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = o, this.isAsync = s
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (wi.add(this), Bf || (Bf = !0, be.read(Hb), be.resolveKeyframes(Ub))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n,
            element: r,
            motionValue: i
        } = this;
        for (let o = 0; o < t.length; o++)
            if (t[o] === null)
                if (o === 0) {
                    const s = i == null ? void 0 : i.get(),
                        a = t[t.length - 1];
                    if (s !== void 0) t[0] = s;
                    else if (r && n) {
                        const l = r.readValue(n, a);
                        l != null && (t[0] = l)
                    }
                    t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0])
                } else t[o] = t[o - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), wi.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, wi.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Wb = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    vD = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function xD(e) {
    const t = vD.exec(e);
    if (!t) return [, ];
    const [, n, r, i] = t;
    return [`--${n??r}`, i]
}

function Kb(e, t, n = 1) {
    const [r, i] = xD(e);
    if (!r) return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        const s = o.trim();
        return Wb(s) ? parseFloat(s) : s
    }
    return jp(i) ? Kb(i, t, n + 1) : i
}
const Gb = e => t => t.test(e),
    wD = {
        test: e => e === "auto",
        parse: e => e
    },
    qb = [Go, Q, Mn, mr, uO, lO, wD],
    $y = e => qb.find(Gb(e));
class Qb extends tm {
    constructor(t, n, r, i, o) {
        super(t, n, r, i, o, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            element: n,
            name: r
        } = this;
        if (!n || !n.current) return;
        super.readKeyframes();
        for (let l = 0; l < t.length; l++) {
            let u = t[l];
            if (typeof u == "string" && (u = u.trim(), jp(u))) {
                const c = Kb(u, n.current);
                c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(), !Eb.has(r) || t.length !== 2) return;
        const [i, o] = t, s = $y(i), a = $y(o);
        if (s !== a)
            if (zy(s) && zy(a))
                for (let l = 0; l < t.length; l++) {
                    const u = t[l];
                    typeof u == "string" && (t[l] = parseFloat(u))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n
        } = this, r = [];
        for (let i = 0; i < t.length; i++) YO(t[i]) && r.push(i);
        r.length && hD(t, r, n)
    }
    measureInitialState() {
        const {
            element: t,
            unresolvedKeyframes: n,
            name: r
        } = this;
        if (!t || !t.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = jo[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {
            element: n,
            name: r,
            unresolvedKeyframes: i
        } = this;
        if (!n || !n.current) return;
        const o = n.getValue(r);
        o && o.jump(this.measuredOrigin, !1);
        const s = i.length - 1,
            a = i[s];
        i[s] = jo[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, u]) => {
            n.getValue(l).set(u)
        }), this.resolveNoneKeyframes()
    }
}
const Uy = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Hr.test(e) || e === "0") && !e.startsWith("url("));

function SD(e) {
    const t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t) return !0
}

function bD(e, t, n, r) {
    const i = e[0];
    if (i === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    const o = e[e.length - 1],
        s = Uy(i, t),
        a = Uy(o, t);
    return !s || !a ? !1 : SD(e) || (n === "spring" || Hp(n)) && r
}
const kD = e => e !== null;

function ec(e, {
    repeat: t,
    repeatType: n = "loop"
}, r) {
    const i = e.filter(kD),
        o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !o || r === void 0 ? i[o] : r
}
const CD = 40;
class Yb {
    constructor({
        autoplay: t = !0,
        delay: n = 0,
        type: r = "keyframes",
        repeat: i = 0,
        repeatDelay: o = 0,
        repeatType: s = "loop",
        ...a
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Nn.now(), this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: o,
            repeatType: s,
            ...a
        }, this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > CD ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && yD(), this._resolved
    }
    onKeyframesResolved(t, n) {
        this.resolvedAt = Nn.now(), this.hasAttemptedResolve = !0;
        const {
            name: r,
            type: i,
            velocity: o,
            delay: s,
            onComplete: a,
            onUpdate: l,
            isGenerator: u
        } = this.options;
        if (!u && !bD(t, r, i, o))
            if (s) this.options.duration = 0;
            else {
                l && l(ec(t, this.options, n)), a && a(), this.resolveFinishedPromise();
                return
            }
        const c = this.initPlayback(t, n);
        c !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...c
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    flatten() {
        this.options.type = "keyframes", this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        })
    }
}
const Te = (e, t, n) => e + (t - e) * n;

function Yc(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function ED({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let i = 0,
        o = 0,
        s = 0;
    if (!t) i = o = s = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t,
            l = 2 * n - a;
        i = Yc(l, a, e + 1 / 3), o = Yc(l, a, e), s = Yc(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}

function pu(e, t) {
    return n => n > 0 ? t : e
}
const Xc = (e, t, n) => {
        const r = e * e,
            i = n * (t * t - r) + r;
        return i < 0 ? 0 : Math.sqrt(i)
    },
    TD = [zf, ci, eo],
    PD = e => TD.find(t => t.test(e));

function Hy(e) {
    const t = PD(e);
    if (!t) return !1;
    let n = t.parse(e);
    return t === eo && (n = ED(n)), n
}
const Wy = (e, t) => {
        const n = Hy(e),
            r = Hy(t);
        if (!n || !r) return pu(e, t);
        const i = { ...n
        };
        return o => (i.red = Xc(n.red, r.red, o), i.green = Xc(n.green, r.green, o), i.blue = Xc(n.blue, r.blue, o), i.alpha = Te(n.alpha, r.alpha, o), ci.transform(i))
    },
    AD = (e, t) => n => t(e(n)),
    Ea = (...e) => e.reduce(AD),
    Uf = new Set(["none", "hidden"]);

function RD(e, t) {
    return Uf.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function MD(e, t) {
    return n => Te(e, t, n)
}

function nm(e) {
    return typeof e == "number" ? MD : typeof e == "string" ? jp(e) ? pu : Xe.test(e) ? Wy : OD : Array.isArray(e) ? Xb : typeof e == "object" ? Xe.test(e) ? Wy : ND : pu
}

function Xb(e, t) {
    const n = [...e],
        r = n.length,
        i = e.map((o, s) => nm(o)(o, t[s]));
    return o => {
        for (let s = 0; s < r; s++) n[s] = i[s](o);
        return n
    }
}

function ND(e, t) {
    const n = { ...e,
            ...t
        },
        r = {};
    for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = nm(e[i])(e[i], t[i]));
    return i => {
        for (const o in r) n[o] = r[o](i);
        return n
    }
}

function ID(e, t) {
    var n;
    const r = [],
        i = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let o = 0; o < t.values.length; o++) {
        const s = t.types[o],
            a = e.indexes[s][i[s]],
            l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
        r[o] = l, i[s]++
    }
    return r
}
const OD = (e, t) => {
    const n = Hr.createTransformer(t),
        r = ua(e),
        i = ua(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Uf.has(e) && !i.values.length || Uf.has(t) && !r.values.length ? RD(e, t) : Ea(Xb(ID(r, i), i.values), n) : pu(e, t)
};

function Zb(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Te(e, t, n) : nm(e)(e, t)
}
const DD = 5;

function Jb(e, t, n) {
    const r = Math.max(t - DD, 0);
    return Tb(n - e(r), t - r)
}
const Me = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    Zc = .001;

function LD({
    duration: e = Me.duration,
    bounce: t = Me.bounce,
    velocity: n = Me.velocity,
    mass: r = Me.mass
}) {
    let i, o, s = 1 - t;
    s = tr(Me.minDamping, Me.maxDamping, s), e = tr(Me.minDuration, Me.maxDuration, Gn(e)), s < 1 ? (i = u => {
        const c = u * s,
            d = c * e,
            h = c - n,
            f = Hf(u, s),
            g = Math.exp(-d);
        return Zc - h / f * g
    }, o = u => {
        const d = u * s * e,
            h = d * n + n,
            f = Math.pow(s, 2) * Math.pow(u, 2) * e,
            g = Math.exp(-d),
            m = Hf(Math.pow(u, 2), s);
        return (-i(u) + Zc > 0 ? -1 : 1) * ((h - f) * g) / m
    }) : (i = u => {
        const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
        return -Zc + c * d
    }, o = u => {
        const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
        return c * d
    });
    const a = 5 / e,
        l = _D(i, o, a);
    if (e = Kn(e), isNaN(l)) return {
        stiffness: Me.stiffness,
        damping: Me.damping,
        duration: e
    }; {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const jD = 12;

function _D(e, t, n) {
    let r = n;
    for (let i = 1; i < jD; i++) r = r - e(r) / t(r);
    return r
}

function Hf(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const FD = ["duration", "bounce"],
    zD = ["stiffness", "damping", "mass"];

function Ky(e, t) {
    return t.some(n => e[n] !== void 0)
}

function VD(e) {
    let t = {
        velocity: Me.velocity,
        stiffness: Me.stiffness,
        damping: Me.damping,
        mass: Me.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Ky(e, zD) && Ky(e, FD))
        if (e.visualDuration) {
            const n = e.visualDuration,
                r = 2 * Math.PI / (n * 1.2),
                i = r * r,
                o = 2 * tr(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = { ...t,
                mass: Me.mass,
                stiffness: i,
                damping: o
            }
        } else {
            const n = LD(e);
            t = { ...t,
                ...n,
                mass: Me.mass
            }, t.isResolvedFromDuration = !0
        }
    return t
}

function ek(e = Me.visualDuration, t = Me.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {
        restSpeed: r,
        restDelta: i
    } = n;
    const o = n.keyframes[0],
        s = n.keyframes[n.keyframes.length - 1],
        a = {
            done: !1,
            value: o
        },
        {
            stiffness: l,
            damping: u,
            mass: c,
            duration: d,
            velocity: h,
            isResolvedFromDuration: f
        } = VD({ ...n,
            velocity: -Gn(n.velocity || 0)
        }),
        g = h || 0,
        m = u / (2 * Math.sqrt(l * c)),
        x = s - o,
        p = Gn(Math.sqrt(l / c)),
        y = Math.abs(x) < 5;
    r || (r = y ? Me.restSpeed.granular : Me.restSpeed.default), i || (i = y ? Me.restDelta.granular : Me.restDelta.default);
    let v;
    if (m < 1) {
        const E = Hf(p, m);
        v = C => {
            const P = Math.exp(-m * p * C);
            return s - P * ((g + m * p * x) / E * Math.sin(E * C) + x * Math.cos(E * C))
        }
    } else if (m === 1) v = E => s - Math.exp(-p * E) * (x + (g + p * x) * E);
    else {
        const E = p * Math.sqrt(m * m - 1);
        v = C => {
            const P = Math.exp(-m * p * C),
                A = Math.min(E * C, 300);
            return s - P * ((g + m * p * x) * Math.sinh(A) + E * x * Math.cosh(A)) / E
        }
    }
    const k = {
        calculatedDuration: f && d || null,
        next: E => {
            const C = v(E);
            if (f) a.done = E >= d;
            else {
                let P = 0;
                m < 1 && (P = E === 0 ? Kn(g) : Jb(v, E, C));
                const A = Math.abs(P) <= r,
                    N = Math.abs(s - C) <= i;
                a.done = A && N
            }
            return a.value = a.done ? s : C, a
        },
        toString: () => {
            const E = Math.min(vb(k), jf),
                C = xb(P => k.next(E * P).value, E, 30);
            return E + "ms " + C
        }
    };
    return k
}

function Gy({
    keyframes: e,
    velocity: t = 0,
    power: n = .8,
    timeConstant: r = 325,
    bounceDamping: i = 10,
    bounceStiffness: o = 500,
    modifyTarget: s,
    min: a,
    max: l,
    restDelta: u = .5,
    restSpeed: c
}) {
    const d = e[0],
        h = {
            done: !1,
            value: d
        },
        f = A => a !== void 0 && A < a || l !== void 0 && A > l,
        g = A => a === void 0 ? l : l === void 0 || Math.abs(a - A) < Math.abs(l - A) ? a : l;
    let m = n * t;
    const x = d + m,
        p = s === void 0 ? x : s(x);
    p !== x && (m = p - d);
    const y = A => -m * Math.exp(-A / r),
        v = A => p + y(A),
        k = A => {
            const N = y(A),
                D = v(A);
            h.done = Math.abs(N) <= u, h.value = h.done ? p : D
        };
    let E, C;
    const P = A => {
        f(h.value) && (E = A, C = ek({
            keyframes: [h.value, g(h.value)],
            velocity: Jb(v, A, h.value),
            damping: i,
            stiffness: o,
            restDelta: u,
            restSpeed: c
        }))
    };
    return P(0), {
        calculatedDuration: null,
        next: A => {
            let N = !1;
            return !C && E === void 0 && (N = !0, k(A), P(A)), E !== void 0 && A >= E ? C.next(A - E) : (!N && k(A), h)
        }
    }
}
const BD = Ca(.42, 0, 1, 1),
    $D = Ca(0, 0, .58, 1),
    tk = Ca(.42, 0, .58, 1),
    UD = e => Array.isArray(e) && typeof e[0] != "number",
    qy = {
        linear: It,
        easeIn: BD,
        easeInOut: tk,
        easeOut: $D,
        circIn: Xp,
        circInOut: Lb,
        circOut: Db,
        backIn: Yp,
        backInOut: Ib,
        backOut: Nb,
        anticipate: Ob
    },
    Qy = e => {
        if (Wp(e)) {
            Df(e.length === 4);
            const [t, n, r, i] = e;
            return Ca(t, n, r, i)
        } else if (typeof e == "string") return Df(qy[e] !== void 0), qy[e];
        return e
    };

function HD(e, t, n) {
    const r = [],
        i = n || Zb,
        o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let a = i(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] || It : t;
            a = Ea(l, a)
        }
        r.push(a)
    }
    return r
}

function WD(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: i
} = {}) {
    const o = e.length;
    if (Df(o === t.length), o === 1) return () => t[0];
    if (o === 2 && t[0] === t[1]) return () => t[1];
    const s = e[0] === e[1];
    e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const a = HD(t, r, i),
        l = a.length,
        u = c => {
            if (s && c < e[0]) return t[0];
            let d = 0;
            if (l > 1)
                for (; d < e.length - 2 && !(c < e[d + 1]); d++);
            const h = Do(e[d], e[d + 1], c);
            return a[d](h)
        };
    return n ? c => u(tr(e[0], e[o - 1], c)) : u
}

function KD(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = Do(0, t, r);
        e.push(Te(n, 1, i))
    }
}

function GD(e) {
    const t = [0];
    return KD(t, e.length - 1), t
}

function qD(e, t) {
    return e.map(n => n * t)
}

function QD(e, t) {
    return e.map(() => t || tk).splice(0, e.length - 1)
}

function mu({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut"
}) {
    const i = UD(r) ? r.map(Qy) : Qy(r),
        o = {
            done: !1,
            value: t[0]
        },
        s = qD(n && n.length === t.length ? n : GD(t), e),
        a = WD(s, t, {
            ease: Array.isArray(i) ? i : QD(t, i)
        });
    return {
        calculatedDuration: e,
        next: l => (o.value = a(l), o.done = l >= e, o)
    }
}
const YD = e => {
        const t = ({
            timestamp: n
        }) => e(n);
        return {
            start: () => be.update(t, !0),
            stop: () => Ur(t),
            now: () => He.isProcessing ? He.timestamp : Nn.now()
        }
    },
    XD = {
        decay: Gy,
        inertia: Gy,
        tween: mu,
        keyframes: mu,
        spring: ek
    },
    ZD = e => e / 100;
class rm extends Yb {
    constructor(t) {
        super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: l
            } = this.options;
            l && l()
        };
        const {
            name: n,
            motionValue: r,
            element: i,
            keyframes: o
        } = this.options, s = (i == null ? void 0 : i.KeyframeResolver) || tm, a = (l, u) => this.onKeyframesResolved(l, u);
        this.resolver = new s(o, a, n, r, i), this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(t) {
        const {
            type: n = "keyframes",
            repeat: r = 0,
            repeatDelay: i = 0,
            repeatType: o,
            velocity: s = 0
        } = this.options, a = Hp(n) ? n : XD[n] || mu;
        let l, u;
        a !== mu && typeof t[0] != "number" && (l = Ea(ZD, Zb(t[0], t[1])), t = [0, 100]);
        const c = a({ ...this.options,
            keyframes: t
        });
        o === "mirror" && (u = a({ ...this.options,
            keyframes: [...t].reverse(),
            velocity: -s
        })), c.calculatedDuration === null && (c.calculatedDuration = vb(c));
        const {
            calculatedDuration: d
        } = c, h = d + i, f = h * (r + 1) - i;
        return {
            generator: c,
            mirroredGenerator: u,
            mapPercentToKeyframes: l,
            calculatedDuration: d,
            resolvedDuration: h,
            totalDuration: f
        }
    }
    onPostResolved() {
        const {
            autoplay: t = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n = !1) {
        const {
            resolved: r
        } = this;
        if (!r) {
            const {
                keyframes: A
            } = this.options;
            return {
                done: !0,
                value: A[A.length - 1]
            }
        }
        const {
            finalKeyframe: i,
            generator: o,
            mirroredGenerator: s,
            mapPercentToKeyframes: a,
            keyframes: l,
            calculatedDuration: u,
            totalDuration: c,
            resolvedDuration: d
        } = r;
        if (this.startTime === null) return o.next(0);
        const {
            delay: h,
            repeat: f,
            repeatType: g,
            repeatDelay: m,
            onUpdate: x
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const p = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? p < 0 : p > c;
        this.currentTime = Math.max(p, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let v = this.currentTime,
            k = o;
        if (f) {
            const A = Math.min(this.currentTime, c) / d;
            let N = Math.floor(A),
                D = A % 1;
            !D && A >= 1 && (D = 1), D === 1 && N--, N = Math.min(N, f + 1), !!(N % 2) && (g === "reverse" ? (D = 1 - D, m && (D -= m / d)) : g === "mirror" && (k = s)), v = tr(0, 1, D) * d
        }
        const E = y ? {
            done: !1,
            value: l[0]
        } : k.next(v);
        a && (E.value = a(E.value));
        let {
            done: C
        } = E;
        !y && u !== null && (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const P = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
        return P && i !== void 0 && (E.value = ec(l, this.options, i)), x && x(E.value), P && this.finish(), E
    }
    get duration() {
        const {
            resolved: t
        } = this;
        return t ? Gn(t.calculatedDuration) : 0
    }
    get time() {
        return Gn(this.currentTime)
    }
    set time(t) {
        t = Kn(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t, n && (this.time = Gn(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: t = YD,
            onPlay: n,
            startTime: r
        } = this.options;
        this.driver || (this.driver = t(o => this.tick(o))), n && n();
        const i = this.driver.now();
        this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ? ? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: t
        } = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0, this.tick(t, !0)
    }
}
const JD = new Set(["opacity", "clipPath", "filter", "transform"]);

function eL(e, t, n, {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a = "easeInOut",
    times: l
} = {}) {
    const u = {
        [t]: n
    };
    l && (u.offset = l);
    const c = Sb(a, i);
    return Array.isArray(c) && (u.easing = c), e.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: o + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}
const tL = Rp(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    gu = 10,
    nL = 2e4;

function rL(e) {
    return Hp(e.type) || e.type === "spring" || !wb(e.ease)
}

function iL(e, t) {
    const n = new rm({ ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const i = [];
    let o = 0;
    for (; !r.done && o < nL;) r = n.sample(o), i.push(r.value), o += gu;
    return {
        times: void 0,
        keyframes: i,
        duration: o - gu,
        ease: "linear"
    }
}
const nk = {
    anticipate: Ob,
    backInOut: Ib,
    circInOut: Lb
};

function oL(e) {
    return e in nk
}
class Yy extends Yb {
    constructor(t) {
        super(t);
        const {
            name: n,
            motionValue: r,
            element: i,
            keyframes: o
        } = this.options;
        this.resolver = new Qb(o, (s, a) => this.onKeyframesResolved(s, a), n, r, i), this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        let {
            duration: r = 300,
            times: i,
            ease: o,
            type: s,
            motionValue: a,
            name: l,
            startTime: u
        } = this.options;
        if (!a.owner || !a.owner.current) return !1;
        if (typeof o == "string" && hu() && oL(o) && (o = nk[o]), rL(this.options)) {
            const {
                onComplete: d,
                onUpdate: h,
                motionValue: f,
                element: g,
                ...m
            } = this.options, x = iL(t, m);
            t = x.keyframes, t.length === 1 && (t[1] = t[0]), r = x.duration, i = x.times, o = x.ease, s = "keyframes"
        }
        const c = eL(a.owner.current, l, t, { ...this.options,
            duration: r,
            times: i,
            ease: o
        });
        return c.startTime = u ? ? this.calcStartTime(), this.pendingTimeline ? (Oy(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
            const {
                onComplete: d
            } = this.options;
            a.set(ec(t, this.options, n)), d && d(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: c,
            duration: r,
            times: i,
            type: s,
            ease: o,
            keyframes: t
        }
    }
    get duration() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            duration: n
        } = t;
        return Gn(n)
    }
    get time() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            animation: n
        } = t;
        return Gn(n.currentTime || 0)
    }
    set time(t) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: r
        } = n;
        r.currentTime = Kn(t)
    }
    get speed() {
        const {
            resolved: t
        } = this;
        if (!t) return 1;
        const {
            animation: n
        } = t;
        return n.playbackRate
    }
    set speed(t) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: r
        } = n;
        r.playbackRate = t
    }
    get state() {
        const {
            resolved: t
        } = this;
        if (!t) return "idle";
        const {
            animation: n
        } = t;
        return n.playState
    }
    get startTime() {
        const {
            resolved: t
        } = this;
        if (!t) return null;
        const {
            animation: n
        } = t;
        return n.startTime
    }
    attachTimeline(t) {
        if (!this._resolved) this.pendingTimeline = t;
        else {
            const {
                resolved: n
            } = this;
            if (!n) return It;
            const {
                animation: r
            } = n;
            Oy(r, t)
        }
        return It
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n
        } = t;
        n.playState === "finished" && this.updateFinishedPromise(), n.play()
    }
    pause() {
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n
        } = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n,
            keyframes: r,
            duration: i,
            type: o,
            ease: s,
            times: a
        } = t;
        if (n.playState === "idle" || n.playState === "finished") return;
        if (this.time) {
            const {
                motionValue: u,
                onUpdate: c,
                onComplete: d,
                element: h,
                ...f
            } = this.options, g = new rm({ ...f,
                keyframes: r,
                duration: i,
                type: o,
                ease: s,
                times: a,
                isGenerator: !0
            }), m = Kn(this.time);
            u.setWithVelocity(g.sample(m - gu).value, g.sample(m).value, gu)
        }
        const {
            onStop: l
        } = this.options;
        l && l(), this.cancel()
    }
    complete() {
        const {
            resolved: t
        } = this;
        t && t.animation.finish()
    }
    cancel() {
        const {
            resolved: t
        } = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {
            motionValue: n,
            name: r,
            repeatDelay: i,
            repeatType: o,
            damping: s,
            type: a
        } = t;
        if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
        const {
            onUpdate: l,
            transformTemplate: u
        } = n.owner.getProps();
        return tL() && r && JD.has(r) && !l && !u && !i && o !== "mirror" && s !== 0 && a !== "inertia"
    }
}
const sL = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    aL = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    lL = {
        type: "keyframes",
        duration: .8
    },
    uL = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    cL = (e, {
        keyframes: t
    }) => t.length > 2 ? lL : Oi.has(e) ? e.startsWith("scale") ? aL(t[1]) : sL : uL;

function dL({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: i,
    repeat: o,
    repeatType: s,
    repeatDelay: a,
    from: l,
    elapsed: u,
    ...c
}) {
    return !!Object.keys(c).length
}
const im = (e, t, n, r = {}, i, o) => s => {
    const a = Up(r, e) || {},
        l = a.delay || r.delay || 0;
    let {
        elapsed: u = 0
    } = r;
    u = u - Kn(l);
    let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: h => {
            t.set(h), a.onUpdate && a.onUpdate(h)
        },
        onComplete: () => {
            s(), a.onComplete && a.onComplete()
        },
        name: e,
        motionValue: t,
        element: o ? void 0 : i
    };
    dL(a) || (c = { ...c,
        ...cL(e, c)
    }), c.duration && (c.duration = Kn(c.duration)), c.repeatDelay && (c.repeatDelay = Kn(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (d = !0)), d && !o && t.get() !== void 0) {
        const h = ec(c.keyframes, a);
        if (h !== void 0) return be.update(() => {
            c.onUpdate(h), c.onComplete()
        }), new NO([])
    }
    return !o && Yy.supports(c) ? new Yy(c) : new rm(c)
};

function fL({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

function rk(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: i
} = {}) {
    var o;
    let {
        transition: s = e.getDefaultTransition(),
        transitionEnd: a,
        ...l
    } = t;
    r && (s = r);
    const u = [],
        c = i && e.animationState && e.animationState.getState()[i];
    for (const d in l) {
        const h = e.getValue(d, (o = e.latestValues[d]) !== null && o !== void 0 ? o : null),
            f = l[d];
        if (f === void 0 || c && fL(c, d)) continue;
        const g = {
            delay: n,
            ...Up(s || {}, d)
        };
        let m = !1;
        if (window.MotionHandoffAnimation) {
            const p = Pb(e);
            if (p) {
                const y = window.MotionHandoffAnimation(p, d, be);
                y !== null && (g.startTime = y, m = !0)
            }
        }
        Ff(e, d), h.start(im(d, h, f, e.shouldReduceMotion && Eb.has(d) ? {
            type: !1
        } : g, e, m));
        const x = h.animation;
        x && u.push(x)
    }
    return a && Promise.all(u).then(() => {
        be.update(() => {
            a && WO(e, a)
        })
    }), u
}

function Wf(e, t, n = {}) {
    var r;
    const i = Ju(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let {
        transition: o = e.getDefaultTransition() || {}
    } = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const s = i ? () => Promise.all(rk(e, i, n)) : () => Promise.resolve(),
        a = e.variantChildren && e.variantChildren.size ? (u = 0) => {
            const {
                delayChildren: c = 0,
                staggerChildren: d,
                staggerDirection: h
            } = o;
            return hL(e, t, c + u, d, h, n)
        } : () => Promise.resolve(),
        {
            when: l
        } = o;
    if (l) {
        const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
        return u().then(() => c())
    } else return Promise.all([s(), a(n.delay)])
}

function hL(e, t, n = 0, r = 0, i = 1, o) {
    const s = [],
        a = (e.variantChildren.size - 1) * r,
        l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return Array.from(e.variantChildren).sort(pL).forEach((u, c) => {
        u.notify("AnimationStart", t), s.push(Wf(u, t, { ...o,
            delay: n + l(c)
        }).then(() => u.notify("AnimationComplete", t)))
    }), Promise.all(s)
}

function pL(e, t) {
    return e.sortNodePosition(t)
}

function mL(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(o => Wf(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string") r = Wf(e, t, n);
    else {
        const i = typeof t == "function" ? Ju(e, t, n.custom) : t;
        r = Promise.all(rk(e, i, n))
    }
    return r.then(() => {
        e.notify("AnimationComplete", t)
    })
}
const gL = Np.length;

function ik(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        const n = e.parent ? ik(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial), n
    }
    const t = {};
    for (let n = 0; n < gL; n++) {
        const r = Np[n],
            i = e.props[r];
        (sa(i) || i === !1) && (t[r] = i)
    }
    return t
}
const yL = [...Mp].reverse(),
    vL = Mp.length;

function xL(e) {
    return t => Promise.all(t.map(({
        animation: n,
        options: r
    }) => mL(e, n, r)))
}

function wL(e) {
    let t = xL(e),
        n = Xy(),
        r = !0;
    const i = l => (u, c) => {
        var d;
        const h = Ju(e, c, l === "exit" ? (d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom : void 0);
        if (h) {
            const {
                transition: f,
                transitionEnd: g,
                ...m
            } = h;
            u = { ...u,
                ...m,
                ...g
            }
        }
        return u
    };

    function o(l) {
        t = l(e)
    }

    function s(l) {
        const {
            props: u
        } = e, c = ik(e.parent) || {}, d = [], h = new Set;
        let f = {},
            g = 1 / 0;
        for (let x = 0; x < vL; x++) {
            const p = yL[x],
                y = n[p],
                v = u[p] !== void 0 ? u[p] : c[p],
                k = sa(v),
                E = p === l ? y.isActive : null;
            E === !1 && (g = x);
            let C = v === c[p] && v !== u[p] && k;
            if (C && r && e.manuallyAnimateOnMount && (C = !1), y.protectedKeys = { ...f
                }, !y.isActive && E === null || !v && !y.prevProp || Xu(v) || typeof v == "boolean") continue;
            const P = SL(y.prevProp, v);
            let A = P || p === l && y.isActive && !C && k || x > g && k,
                N = !1;
            const D = Array.isArray(v) ? v : [v];
            let _ = D.reduce(i(p), {});
            E === !1 && (_ = {});
            const {
                prevResolvedValues: I = {}
            } = y, W = { ...I,
                ..._
            }, F = $ => {
                A = !0, h.has($) && (N = !0, h.delete($)), y.needsAnimating[$] = !0;
                const R = e.getValue($);
                R && (R.liveStyle = !1)
            };
            for (const $ in W) {
                const R = _[$],
                    O = I[$];
                if (f.hasOwnProperty($)) continue;
                let b = !1;
                Lf(R) && Lf(O) ? b = !yb(R, O) : b = R !== O, b ? R != null ? F($) : h.add($) : R !== void 0 && h.has($) ? F($) : y.protectedKeys[$] = !0
            }
            y.prevProp = v, y.prevResolvedValues = _, y.isActive && (f = { ...f,
                ..._
            }), r && e.blockInitialAnimation && (A = !1), A && (!(C && P) || N) && d.push(...D.map($ => ({
                animation: $,
                options: {
                    type: p
                }
            })))
        }
        if (h.size) {
            const x = {};
            h.forEach(p => {
                const y = e.getBaseTarget(p),
                    v = e.getValue(p);
                v && (v.liveStyle = !0), x[p] = y ? ? null
            }), d.push({
                animation: x
            })
        }
        let m = !!d.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (m = !1), r = !1, m ? t(d) : Promise.resolve()
    }

    function a(l, u) {
        var c;
        if (n[l].isActive === u) return Promise.resolve();
        (c = e.variantChildren) === null || c === void 0 || c.forEach(h => {
            var f;
            return (f = h.animationState) === null || f === void 0 ? void 0 : f.setActive(l, u)
        }), n[l].isActive = u;
        const d = s(l);
        for (const h in n) n[h].protectedKeys = {};
        return d
    }
    return {
        animateChanges: s,
        setActive: a,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            n = Xy(), r = !0
        }
    }
}

function SL(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !yb(t, e) : !1
}

function ti(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function Xy() {
    return {
        animate: ti(!0),
        whileInView: ti(),
        whileHover: ti(),
        whileTap: ti(),
        whileDrag: ti(),
        whileFocus: ti(),
        exit: ti()
    }
}
class qr {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}
class bL extends qr {
    constructor(t) {
        super(t), t.animationState || (t.animationState = wL(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        Xu(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this)
    }
}
let kL = 0;
class CL extends qr {
    constructor() {
        super(...arguments), this.id = kL++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: n
        } = this.node.presenceContext, {
            isPresent: r
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r) return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then(() => n(this.id))
    }
    mount() {
        const {
            register: t
        } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const EL = {
    animation: {
        Feature: bL
    },
    exit: {
        Feature: CL
    }
};

function ca(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}

function Ta(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const TL = e => t => Kp(t) && e(t, Ta(t));

function Ms(e, t, n, r) {
    return ca(e, t, TL(n), r)
}
const Zy = (e, t) => Math.abs(e - t);

function PL(e, t) {
    const n = Zy(e.x, t.x),
        r = Zy(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class ok {
    constructor(t, n, {
        transformPagePoint: r,
        contextWindow: i,
        dragSnapToOrigin: o = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const d = ed(this.lastMoveEventInfo, this.history),
                    h = this.startEvent !== null,
                    f = PL(d.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!h && !f) return;
                const {
                    point: g
                } = d, {
                    timestamp: m
                } = He;
                this.history.push({ ...g,
                    timestamp: m
                });
                const {
                    onStart: x,
                    onMove: p
                } = this.handlers;
                h || (x && x(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), p && p(this.lastMoveEvent, d)
            }, this.handlePointerMove = (d, h) => {
                this.lastMoveEvent = d, this.lastMoveEventInfo = Jc(h, this.transformPagePoint), be.update(this.updatePoint, !0)
            }, this.handlePointerUp = (d, h) => {
                this.end();
                const {
                    onEnd: f,
                    onSessionEnd: g,
                    resumeAnimation: m
                } = this.handlers;
                if (this.dragSnapToOrigin && m && m(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const x = ed(d.type === "pointercancel" ? this.lastMoveEventInfo : Jc(h, this.transformPagePoint), this.history);
                this.startEvent && f && f(d, x), g && g(d, x)
            }, !Kp(t)) return;
        this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
        const s = Ta(t),
            a = Jc(s, this.transformPagePoint),
            {
                point: l
            } = a,
            {
                timestamp: u
            } = He;
        this.history = [{ ...l,
            timestamp: u
        }];
        const {
            onSessionStart: c
        } = n;
        c && c(t, ed(a, this.history)), this.removeListeners = Ea(Ms(this.contextWindow, "pointermove", this.handlePointerMove), Ms(this.contextWindow, "pointerup", this.handlePointerUp), Ms(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), Ur(this.updatePoint)
    }
}

function Jc(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function Jy(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function ed({
    point: e
}, t) {
    return {
        point: e,
        delta: Jy(e, sk(t)),
        offset: Jy(e, AL(t)),
        velocity: RL(t, .1)
    }
}

function AL(e) {
    return e[0]
}

function sk(e) {
    return e[e.length - 1]
}

function RL(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        r = null;
    const i = sk(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > Kn(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    const o = Gn(i.timestamp - r.timestamp);
    if (o === 0) return {
        x: 0,
        y: 0
    };
    const s = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
}
const ak = 1e-4,
    ML = 1 - ak,
    NL = 1 + ak,
    lk = .01,
    IL = 0 - lk,
    OL = 0 + lk;

function Dt(e) {
    return e.max - e.min
}

function DL(e, t, n) {
    return Math.abs(e - t) <= n
}

function ev(e, t, n, r = .5) {
    e.origin = r, e.originPoint = Te(t.min, t.max, e.origin), e.scale = Dt(n) / Dt(t), e.translate = Te(n.min, n.max, e.origin) - e.originPoint, (e.scale >= ML && e.scale <= NL || isNaN(e.scale)) && (e.scale = 1), (e.translate >= IL && e.translate <= OL || isNaN(e.translate)) && (e.translate = 0)
}

function Ns(e, t, n, r) {
    ev(e.x, t.x, n.x, r ? r.originX : void 0), ev(e.y, t.y, n.y, r ? r.originY : void 0)
}

function tv(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + Dt(t)
}

function LL(e, t, n) {
    tv(e.x, t.x, n.x), tv(e.y, t.y, n.y)
}

function nv(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + Dt(t)
}

function Is(e, t, n) {
    nv(e.x, t.x, n.x), nv(e.y, t.y, n.y)
}

function jL(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? Te(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Te(n, e, r.max) : Math.min(e, n)), e
}

function rv(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}

function _L(e, {
    top: t,
    left: n,
    bottom: r,
    right: i
}) {
    return {
        x: rv(e.x, n, i),
        y: rv(e.y, t, r)
    }
}

function iv(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}

function FL(e, t) {
    return {
        x: iv(e.x, t.x),
        y: iv(e.y, t.y)
    }
}

function zL(e, t) {
    let n = .5;
    const r = Dt(e),
        i = Dt(t);
    return i > r ? n = Do(t.min, t.max - r, e.min) : r > i && (n = Do(e.min, e.max - i, t.min)), tr(0, 1, n)
}

function VL(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const Kf = .35;

function BL(e = Kf) {
    return e === !1 ? e = 0 : e === !0 && (e = Kf), {
        x: ov(e, "left", "right"),
        y: ov(e, "top", "bottom")
    }
}

function ov(e, t, n) {
    return {
        min: sv(e, t),
        max: sv(e, n)
    }
}

function sv(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const av = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    to = () => ({
        x: av(),
        y: av()
    }),
    lv = () => ({
        min: 0,
        max: 0
    }),
    Ie = () => ({
        x: lv(),
        y: lv()
    });

function zt(e) {
    return [e("x"), e("y")]
}

function uk({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}

function $L({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function UL(e, t) {
    if (!t) return e;
    const n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}

function td(e) {
    return e === void 0 || e === 1
}

function Gf({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !td(e) || !td(t) || !td(n)
}

function ii(e) {
    return Gf(e) || ck(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function ck(e) {
    return uv(e.x) || uv(e.y)
}

function uv(e) {
    return e && e !== "0%"
}

function yu(e, t, n) {
    const r = e - n,
        i = t * r;
    return n + i
}

function cv(e, t, n, r, i) {
    return i !== void 0 && (e = yu(e, i, r)), yu(e, n, r) + t
}

function qf(e, t = 0, n = 1, r, i) {
    e.min = cv(e.min, t, n, r, i), e.max = cv(e.max, t, n, r, i)
}

function dk(e, {
    x: t,
    y: n
}) {
    qf(e.x, t.translate, t.scale, t.originPoint), qf(e.y, n.translate, n.scale, n.originPoint)
}
const dv = .999999999999,
    fv = 1.0000000000001;

function HL(e, t, n, r = !1) {
    const i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let o, s;
    for (let a = 0; a < i; a++) {
        o = n[a], s = o.projectionDelta;
        const {
            visualElement: l
        } = o.options;
        l && l.props.style && l.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && ro(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }), s && (t.x *= s.x.scale, t.y *= s.y.scale, dk(e, s)), r && ii(o.latestValues) && ro(e, o.latestValues))
    }
    t.x < fv && t.x > dv && (t.x = 1), t.y < fv && t.y > dv && (t.y = 1)
}

function no(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function hv(e, t, n, r, i = .5) {
    const o = Te(e.min, e.max, i);
    qf(e, t, n, o, r)
}

function ro(e, t) {
    hv(e.x, t.x, t.scaleX, t.scale, t.originX), hv(e.y, t.y, t.scaleY, t.scale, t.originY)
}

function fk(e, t) {
    return uk(UL(e.getBoundingClientRect(), t))
}

function WL(e, t, n) {
    const r = fk(e, n),
        {
            scroll: i
        } = t;
    return i && (no(r.x, i.offset.x), no(r.y, i.offset.y)), r
}
const hk = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    KL = new WeakMap;
class GL {
    constructor(t) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ie(), this.visualElement = t
    }
    start(t, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: r
        } = this.visualElement;
        if (r && r.isPresent === !1) return;
        const i = c => {
                const {
                    dragSnapToOrigin: d
                } = this.getProps();
                d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ta(c).point)
            },
            o = (c, d) => {
                const {
                    drag: h,
                    dragPropagation: f,
                    onDragStart: g
                } = this.getProps();
                if (h && !f && (this.openDragLock && this.openDragLock(), this.openDragLock = VO(h), !this.openDragLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), zt(x => {
                    let p = this.getAxisMotionValue(x).get() || 0;
                    if (Mn.test(p)) {
                        const {
                            projection: y
                        } = this.visualElement;
                        if (y && y.layout) {
                            const v = y.layout.layoutBox[x];
                            v && (p = Dt(v) * (parseFloat(p) / 100))
                        }
                    }
                    this.originPoint[x] = p
                }), g && be.postRender(() => g(c, d)), Ff(this.visualElement, "transform");
                const {
                    animationState: m
                } = this.visualElement;
                m && m.setActive("whileDrag", !0)
            },
            s = (c, d) => {
                const {
                    dragPropagation: h,
                    dragDirectionLock: f,
                    onDirectionLock: g,
                    onDrag: m
                } = this.getProps();
                if (!h && !this.openDragLock) return;
                const {
                    offset: x
                } = d;
                if (f && this.currentDirection === null) {
                    this.currentDirection = qL(x), this.currentDirection !== null && g && g(this.currentDirection);
                    return
                }
                this.updateAxis("x", d.point, x), this.updateAxis("y", d.point, x), this.visualElement.render(), m && m(c, d)
            },
            a = (c, d) => this.stop(c, d),
            l = () => zt(c => {
                var d;
                return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play())
            }),
            {
                dragSnapToOrigin: u
            } = this.getProps();
        this.panSession = new ok(t, {
            onSessionStart: i,
            onStart: o,
            onMove: s,
            onSessionEnd: a,
            resumeAnimation: l
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: hk(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(), !r) return;
        const {
            velocity: i
        } = n;
        this.startAnimation(i);
        const {
            onDragEnd: o
        } = this.getProps();
        o && be.postRender(() => o(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: n
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {
            drag: i
        } = this.getProps();
        if (!r || !rl(t, i, this.currentDirection)) return;
        const o = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = jL(s, this.constraints[t], this.elastic[t])), o.set(s)
    }
    resolveConstraints() {
        var t;
        const {
            dragConstraints: n,
            dragElastic: r
        } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
        n && Ji(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = _L(i.layoutBox, n) : this.constraints = !1, this.elastic = BL(r), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && zt(s => {
            this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = VL(i.layoutBox[s], this.constraints[s]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!t || !Ji(t)) return !1;
        const r = t.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const o = WL(r, i.root, this.visualElement.getTransformPagePoint());
        let s = FL(i.layout.layoutBox, o);
        if (n) {
            const a = n($L(s));
            this.hasMutatedConstraints = !!a, a && (s = uk(a))
        }
        return s
    }
    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: i,
            dragTransition: o,
            dragSnapToOrigin: s,
            onDragTransitionEnd: a
        } = this.getProps(), l = this.constraints || {}, u = zt(c => {
            if (!rl(c, n, this.currentDirection)) return;
            let d = l && l[c] || {};
            s && (d = {
                min: 0,
                max: 0
            });
            const h = i ? 200 : 1e6,
                f = i ? 40 : 1e7,
                g = {
                    type: "inertia",
                    velocity: r ? t[c] : 0,
                    bounceStiffness: h,
                    bounceDamping: f,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...o,
                    ...d
                };
            return this.startAxisValueAnimation(c, g)
        });
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return Ff(this.visualElement, t), r.start(im(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        zt(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        zt(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        })
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`,
            r = this.visualElement.getProps(),
            i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        zt(n => {
            const {
                drag: r
            } = this.getProps();
            if (!rl(n, r, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: s,
                    max: a
                } = i.layout.layoutBox[n];
                o.set(t[n] - Te(s, a, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: n
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!Ji(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        zt(s => {
            const a = this.getAxisMotionValue(s);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[s] = zL({
                    min: l,
                    max: l
                }, this.constraints[s])
            }
        });
        const {
            transformTemplate: o
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), zt(s => {
            if (!rl(s, t, null)) return;
            const a = this.getAxisMotionValue(s),
                {
                    min: l,
                    max: u
                } = this.constraints[s];
            a.set(Te(l, u, i[s]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        KL.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = Ms(t, "pointerdown", l => {
                const {
                    drag: u,
                    dragListener: c = !0
                } = this.getProps();
                u && c && this.start(l)
            }),
            r = () => {
                const {
                    dragConstraints: l
                } = this.getProps();
                Ji(l) && l.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: i
            } = this.visualElement,
            o = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), be.read(r);
        const s = ca(window, "resize", () => this.scalePositionWithinConstraints()),
            a = i.addEventListener("didUpdate", ({
                delta: l,
                hasLayoutChanged: u
            }) => {
                this.isDragging && u && (zt(c => {
                    const d = this.getAxisMotionValue(c);
                    d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate))
                }), this.visualElement.render())
            });
        return () => {
            s(), n(), o(), a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: i = !1,
                dragConstraints: o = !1,
                dragElastic: s = Kf,
                dragMomentum: a = !0
            } = t;
        return { ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: a
        }
    }
}

function rl(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function qL(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class QL extends qr {
    constructor(t) {
        super(t), this.removeGroupControls = It, this.removeListeners = It, this.controls = new GL(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || It
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const pv = e => (t, n) => {
    e && be.postRender(() => e(t, n))
};
class YL extends qr {
    constructor() {
        super(...arguments), this.removePointerDownListener = It
    }
    onPointerDown(t) {
        this.session = new ok(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: hk(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: pv(t),
            onStart: pv(n),
            onMove: r,
            onEnd: (o, s) => {
                delete this.session, i && be.postRender(() => i(o, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Ms(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const Pl = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function mv(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const us = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (Q.test(e)) e = parseFloat(e);
                else return e;
            const n = mv(e, t.target.x),
                r = mv(e, t.target.y);
            return `${n}% ${r}%`
        }
    },
    XL = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            const r = e,
                i = Hr.parse(e);
            if (i.length > 5) return r;
            const o = Hr.createTransformer(e),
                s = typeof i[0] != "number" ? 1 : 0,
                a = n.x.scale * t.x,
                l = n.y.scale * t.y;
            i[0 + s] /= a, i[1 + s] /= l;
            const u = Te(a, l, .5);
            return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i)
        }
    };
class ZL extends w.Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
            layoutId: i
        } = this.props, {
            projection: o
        } = t;
        xO(JL), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), o.setOptions({ ...o.options,
            onExitComplete: () => this.safeToRemove()
        })), Pl.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: r,
            drag: i,
            isPresent: o
        } = this.props, s = r.projection;
        return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || be.postRender(() => {
            const a = s.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), Op.postRender(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r
        } = this.props, {
            projection: i
        } = t;
        i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function pk(e) {
    const [t, n] = YS(), r = w.useContext(Ep);
    return S.jsx(ZL, { ...e,
        layoutGroup: r,
        switchLayoutGroup: w.useContext(ib),
        isPresent: t,
        safeToRemove: n
    })
}
const JL = {
    borderRadius: { ...us,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: us,
    borderTopRightRadius: us,
    borderBottomLeftRadius: us,
    borderBottomRightRadius: us,
    boxShadow: XL
};

function ej(e, t, n) {
    const r = Je(e) ? e : la(e);
    return r.start(im("", r, t, n)), r.animation
}

function tj(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
const nj = (e, t) => e.depth - t.depth;
class rj {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        Gp(this.children, t), this.isDirty = !0
    }
    remove(t) {
        qp(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(nj), this.isDirty = !1, this.children.forEach(t)
    }
}

function ij(e, t) {
    const n = Nn.now(),
        r = ({
            timestamp: i
        }) => {
            const o = i - n;
            o >= t && (Ur(r), e(o - t))
        };
    return be.read(r, !0), () => Ur(r)
}
const mk = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    oj = mk.length,
    gv = e => typeof e == "string" ? parseFloat(e) : e,
    yv = e => typeof e == "number" || Q.test(e);

function sj(e, t, n, r, i, o) {
    i ? (e.opacity = Te(0, n.opacity !== void 0 ? n.opacity : 1, aj(r)), e.opacityExit = Te(t.opacity !== void 0 ? t.opacity : 1, 0, lj(r))) : o && (e.opacity = Te(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < oj; s++) {
        const a = `border${mk[s]}Radius`;
        let l = vv(t, a),
            u = vv(n, a);
        if (l === void 0 && u === void 0) continue;
        l || (l = 0), u || (u = 0), l === 0 || u === 0 || yv(l) === yv(u) ? (e[a] = Math.max(Te(gv(l), gv(u), r), 0), (Mn.test(u) || Mn.test(l)) && (e[a] += "%")) : e[a] = u
    }(t.rotate || n.rotate) && (e.rotate = Te(t.rotate || 0, n.rotate || 0, r))
}

function vv(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const aj = gk(0, .5, Db),
    lj = gk(.5, .95, It);

function gk(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(Do(e, t, r))
}

function xv(e, t) {
    e.min = t.min, e.max = t.max
}

function Ft(e, t) {
    xv(e.x, t.x), xv(e.y, t.y)
}

function wv(e, t) {
    e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
}

function Sv(e, t, n, r, i) {
    return e -= t, e = yu(e, 1 / n, r), i !== void 0 && (e = yu(e, 1 / i, r)), e
}

function uj(e, t = 0, n = 1, r = .5, i, o = e, s = e) {
    if (Mn.test(t) && (t = parseFloat(t), t = Te(s.min, s.max, t / 100) - s.min), typeof t != "number") return;
    let a = Te(o.min, o.max, r);
    e === o && (a -= t), e.min = Sv(e.min, t, n, a, i), e.max = Sv(e.max, t, n, a, i)
}

function bv(e, t, [n, r, i], o, s) {
    uj(e, t[n], t[r], t[i], t.scale, o, s)
}
const cj = ["x", "scaleX", "originX"],
    dj = ["y", "scaleY", "originY"];

function kv(e, t, n, r) {
    bv(e.x, t, cj, n ? n.x : void 0, r ? r.x : void 0), bv(e.y, t, dj, n ? n.y : void 0, r ? r.y : void 0)
}

function Cv(e) {
    return e.translate === 0 && e.scale === 1
}

function yk(e) {
    return Cv(e.x) && Cv(e.y)
}

function Ev(e, t) {
    return e.min === t.min && e.max === t.max
}

function fj(e, t) {
    return Ev(e.x, t.x) && Ev(e.y, t.y)
}

function Tv(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}

function vk(e, t) {
    return Tv(e.x, t.x) && Tv(e.y, t.y)
}

function Pv(e) {
    return Dt(e.x) / Dt(e.y)
}

function Av(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class hj {
    constructor() {
        this.members = []
    }
    add(t) {
        Gp(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if (qp(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0) return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r), !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: i
            } = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {
                options: n,
                resumingFrom: r
            } = t;
            n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function pj(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x,
        o = e.y.translate / t.y,
        s = (n == null ? void 0 : n.z) || 0;
    if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
        const {
            transformPerspective: u,
            rotate: c,
            rotateX: d,
            rotateY: h,
            skewX: f,
            skewY: g
        } = n;
        u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), d && (r += `rotateX(${d}deg) `), h && (r += `rotateY(${h}deg) `), f && (r += `skewX(${f}deg) `), g && (r += `skewY(${g}deg) `)
    }
    const a = e.x.scale * t.x,
        l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none"
}
const oi = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
    },
    vs = typeof window < "u" && window.MotionDebug !== void 0,
    nd = ["", "X", "Y", "Z"],
    mj = {
        visibility: "hidden"
    },
    Rv = 1e3;
let gj = 0;

function rd(e, t, n, r) {
    const {
        latestValues: i
    } = t;
    i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function xk(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
    const {
        visualElement: t
    } = e.options;
    if (!t) return;
    const n = Pb(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {
            layout: i,
            layoutId: o
        } = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", be, !(i || o))
    }
    const {
        parent: r
    } = e;
    r && !r.hasCheckedOptimisedAppear && xk(r)
}

function wk({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: i
}) {
    return class {
        constructor(s = {}, a = t == null ? void 0 : t()) {
            this.id = gj++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, vs && (oi.totalNodes = oi.resolvedTargetDeltas = oi.recalculatedProjection = 0), this.nodes.forEach(xj), this.nodes.forEach(Cj), this.nodes.forEach(Ej), this.nodes.forEach(wj), vs && window.MotionDebug.record(oi)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new rj)
        }
        addEventListener(s, a) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Qp), this.eventHandlers.get(s).add(a)
        }
        notifyListeners(s, ...a) {
            const l = this.eventHandlers.get(s);
            l && l.notify(...a)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, a = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = tj(s), this.instance = s;
            const {
                layoutId: l,
                layout: u,
                visualElement: c
            } = this.options;
            if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
                let d;
                const h = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0, d && d(), d = ij(h, 250), Pl.hasAnimatedSinceResize && (Pl.hasAnimatedSinceResize = !1, this.nodes.forEach(Nv))
                })
            }
            l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({
                delta: d,
                hasLayoutChanged: h,
                hasRelativeTargetChanged: f,
                layout: g
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const m = this.options.transition || c.getDefaultTransition() || Mj,
                    {
                        onLayoutAnimationStart: x,
                        onLayoutAnimationComplete: p
                    } = c.getProps(),
                    y = !this.targetLayout || !vk(this.targetLayout, g) || f,
                    v = !h && f;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || h && (y || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, v);
                    const k = { ...Up(m, "layout"),
                        onPlay: x,
                        onComplete: p
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (k.delay = 0, k.type = !1), this.startAnimation(k)
                } else h || Nv(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = g
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Ur(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Tj), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: s
            } = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && xk(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1)
            }
            const {
                layoutId: a,
                layout: l
            } = this.options;
            if (a === void 0 && !l) return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Mv);
                return
            }
            this.isUpdating || this.nodes.forEach(bj), this.isUpdating = !1, this.nodes.forEach(kj), this.nodes.forEach(yj), this.nodes.forEach(vj), this.clearAllSnapshots();
            const a = Nn.now();
            He.delta = tr(0, 1e3 / 60, a - He.timestamp), He.timestamp = a, He.isProcessing = !0, Gc.update.process(He), Gc.preRender.process(He), Gc.render.process(He), He.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Op.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Sj), this.sharedNodes.forEach(Pj)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, be.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            be.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = Ie(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: a
            } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: s,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i) return;
            const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                a = this.projectionDelta && !yk(this.projectionDelta),
                l = this.getTransformTemplate(),
                u = l ? l(this.latestValues, "") : void 0,
                c = u !== this.prevTransformTemplateValue;
            s && (a || ii(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(s = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return s && (l = this.removeTransform(l)), Nj(l), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var s;
            const {
                visualElement: a
            } = this.options;
            if (!a) return Ie();
            const l = a.measureViewportBox();
            if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(Ij))) {
                const {
                    scroll: c
                } = this.root;
                c && (no(l.x, c.offset.x), no(l.y, c.offset.y))
            }
            return l
        }
        removeElementScroll(s) {
            var a;
            const l = Ie();
            if (Ft(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot) return l;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u],
                    {
                        scroll: d,
                        options: h
                    } = c;
                c !== this.root && d && h.layoutScroll && (d.wasRoot && Ft(l, s), no(l.x, d.offset.x), no(l.y, d.offset.y))
            }
            return l
        }
        applyTransform(s, a = !1) {
            const l = Ie();
            Ft(l, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && ro(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }), ii(c.latestValues) && ro(l, c.latestValues)
            }
            return ii(this.latestValues) && ro(l, this.latestValues), l
        }
        removeTransform(s) {
            const a = Ie();
            Ft(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !ii(u.latestValues)) continue;
                Gf(u.latestValues) && u.updateSnapshot();
                const c = Ie(),
                    d = u.measurePageBox();
                Ft(c, d), kv(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return ii(this.latestValues) && kv(a, this.latestValues), a
        }
        setTargetDelta(s) {
            this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = { ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== He.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s = !1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== l;
            if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: d,
                layoutId: h
            } = this.options;
            if (!(!this.layout || !(d || h))) {
                if (this.resolvedRelativeTargetAt = He.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const f = this.getClosestProjectingParent();
                    f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ie(), this.relativeTargetOrigin = Ie(), Is(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), Ft(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = Ie(), this.targetWithTransforms = Ie()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), LL(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ft(this.target, this.layout.layoutBox), dk(this.target, this.targetDelta)) : Ft(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const f = this.getClosestProjectingParent();
                        f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ie(), this.relativeTargetOrigin = Ie(), Is(this.relativeTargetOrigin, this.target, f.target), Ft(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    vs && oi.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Gf(this.parent.latestValues) || ck(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            const a = this.getLead(),
                l = !!this.resumingFrom || this !== a;
            let u = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === He.timestamp && (u = !1), u) return;
            const {
                layout: c,
                layoutId: d
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d)) return;
            Ft(this.layoutCorrected, this.layout.layoutBox);
            const h = this.treeScale.x,
                f = this.treeScale.y;
            HL(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = Ie());
            const {
                target: g
            } = a;
            if (!g) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (wv(this.prevProjectionDelta.x, this.projectionDelta.x), wv(this.prevProjectionDelta.y, this.projectionDelta.y)), Ns(this.projectionDelta, this.layoutCorrected, g, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== f || !Av(this.projectionDelta.x, this.prevProjectionDelta.x) || !Av(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), vs && oi.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s = !0) {
            var a;
            if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), s) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = to(), this.projectionDelta = to(), this.projectionDeltaWithTransform = to()
        }
        setAnimationOrigin(s, a = !1) {
            const l = this.snapshot,
                u = l ? l.latestValues : {},
                c = { ...this.latestValues
                },
                d = to();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            const h = Ie(),
                f = l ? l.source : void 0,
                g = this.layout ? this.layout.source : void 0,
                m = f !== g,
                x = this.getStack(),
                p = !x || x.members.length <= 1,
                y = !!(m && !p && this.options.crossfade === !0 && !this.path.some(Rj));
            this.animationProgress = 0;
            let v;
            this.mixTargetDelta = k => {
                const E = k / 1e3;
                Iv(d.x, s.x, E), Iv(d.y, s.y, E), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Is(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Aj(this.relativeTarget, this.relativeTargetOrigin, h, E), v && fj(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = Ie()), Ft(v, this.relativeTarget)), m && (this.animationValues = c, sj(c, u, this.latestValues, E, y, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = E
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Ur(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = be.update(() => {
                Pl.hasAnimatedSinceResize = !0, this.currentAnimation = ej(0, Rv, { ...s,
                    onUpdate: a => {
                        this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a)
                    },
                    onComplete: () => {
                        s.onComplete && s.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Rv), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {
                targetWithTransforms: a,
                target: l,
                layout: u,
                latestValues: c
            } = s;
            if (!(!a || !l || !u)) {
                if (this !== s && this.layout && u && Sk(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || Ie();
                    const d = Dt(this.layout.layoutBox.x);
                    l.x.min = s.target.x.min, l.x.max = l.x.min + d;
                    const h = Dt(this.layout.layoutBox.y);
                    l.y.min = s.target.y.min, l.y.max = l.y.min + h
                }
                Ft(a, l), ro(a, c), Ns(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(s, a) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new hj), this.sharedNodes.get(s).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const {
                layoutId: a
            } = this.options;
            return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const {
                layoutId: a
            } = this.options;
            return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: s
            } = this.options;
            if (s) return this.root.sharedNodes.get(s)
        }
        promote({
            needsReset: s,
            transition: a,
            preserveFollowOpacity: l
        } = {}) {
            const u = this.getStack();
            u && u.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: s
            } = this.options;
            if (!s) return;
            let a = !1;
            const {
                latestValues: l
            } = s;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a) return;
            const u = {};
            l.z && rd("z", s, u, this.animationValues);
            for (let c = 0; c < nd.length; c++) rd(`rotate${nd[c]}`, s, u, this.animationValues), rd(`skew${nd[c]}`, s, u, this.animationValues);
            s.render();
            for (const c in u) s.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
            s.scheduleRender()
        }
        getProjectionStyles(s) {
            var a, l;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return mj;
            const u = {
                    visibility: ""
                },
                c = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, u.opacity = "", u.pointerEvents = El(s == null ? void 0 : s.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
            const d = this.getLead();
            if (!this.projectionDelta || !this.layout || !d.target) {
                const m = {};
                return this.options.layoutId && (m.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, m.pointerEvents = El(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !ii(this.latestValues) && (m.transform = c ? c({}, "") : "none", this.hasProjected = !1), m
            }
            const h = d.animationValues || d.latestValues;
            this.applyTransformsToTarget(), u.transform = pj(this.projectionDeltaWithTransform, this.treeScale, h), c && (u.transform = c(h, u.transform));
            const {
                x: f,
                y: g
            } = this.projectionDelta;
            u.transformOrigin = `${f.origin*100}% ${g.origin*100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (a = h.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : u.opacity = d === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
            for (const m in fu) {
                if (h[m] === void 0) continue;
                const {
                    correct: x,
                    applyTo: p
                } = fu[m], y = u.transform === "none" ? h[m] : x(h[m], d);
                if (p) {
                    const v = p.length;
                    for (let k = 0; k < v; k++) u[p[k]] = y
                } else u[m] = y
            }
            return this.options.layoutId && (u.pointerEvents = d === this ? El(s == null ? void 0 : s.pointerEvents) || "" : "none"), u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var a;
                return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }), this.root.nodes.forEach(Mv), this.root.sharedNodes.clear()
        }
    }
}

function yj(e) {
    e.updateLayout()
}

function vj(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {
            layoutBox: r,
            measuredBox: i
        } = e.layout, {
            animationType: o
        } = e.options, s = n.source !== e.layout.source;
        o === "size" ? zt(d => {
            const h = s ? n.measuredBox[d] : n.layoutBox[d],
                f = Dt(h);
            h.min = r[d].min, h.max = h.min + f
        }) : Sk(o, n.layoutBox, r) && zt(d => {
            const h = s ? n.measuredBox[d] : n.layoutBox[d],
                f = Dt(r[d]);
            h.max = h.min + f, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + f)
        });
        const a = to();
        Ns(a, r, n.layoutBox);
        const l = to();
        s ? Ns(l, e.applyTransform(i, !0), n.measuredBox) : Ns(l, r, n.layoutBox);
        const u = !yk(a);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {
                    snapshot: h,
                    layout: f
                } = d;
                if (h && f) {
                    const g = Ie();
                    Is(g, n.layoutBox, h.layoutBox);
                    const m = Ie();
                    Is(m, r, f.layoutBox), vk(g, m) || (c = !0), d.options.layoutRoot && (e.relativeTarget = m, e.relativeTargetOrigin = g, e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: r
        } = e.options;
        r && r()
    }
    e.options.transition = void 0
}

function xj(e) {
    vs && oi.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function wj(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function Sj(e) {
    e.clearSnapshot()
}

function Mv(e) {
    e.clearMeasurements()
}

function bj(e) {
    e.isLayoutDirty = !1
}

function kj(e) {
    const {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function Nv(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function Cj(e) {
    e.resolveTargetDelta()
}

function Ej(e) {
    e.calcProjection()
}

function Tj(e) {
    e.resetSkewAndRotation()
}

function Pj(e) {
    e.removeLeadSnapshot()
}

function Iv(e, t, n) {
    e.translate = Te(t.translate, 0, n), e.scale = Te(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function Ov(e, t, n, r) {
    e.min = Te(t.min, n.min, r), e.max = Te(t.max, n.max, r)
}

function Aj(e, t, n, r) {
    Ov(e.x, t.x, n.x, r), Ov(e.y, t.y, n.y, r)
}

function Rj(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const Mj = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    Dv = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    Lv = Dv("applewebkit/") && !Dv("chrome/") ? Math.round : It;

function jv(e) {
    e.min = Lv(e.min), e.max = Lv(e.max)
}

function Nj(e) {
    jv(e.x), jv(e.y)
}

function Sk(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !DL(Pv(t), Pv(n), .2)
}

function Ij(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const Oj = wk({
        attachResizeListener: (e, t) => ca(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    id = {
        current: void 0
    },
    bk = wk({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!id.current) {
                const e = new Oj({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), id.current = e
            }
            return id.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    Dj = {
        pan: {
            Feature: YL
        },
        drag: {
            Feature: QL,
            ProjectionNode: bk,
            MeasureLayout: pk
        }
    };

function _v(e, t, n) {
    const {
        props: r
    } = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n,
        o = r[i];
    o && be.postRender(() => o(t, Ta(t)))
}
class Lj extends qr {
    mount() {
        const {
            current: t
        } = this.node;
        t && (this.unmount = LO(t, n => (_v(this.node, n, "Start"), r => _v(this.node, r, "End"))))
    }
    unmount() {}
}
class jj extends qr {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Ea(ca(this.node.current, "focus", () => this.onFocus()), ca(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function Fv(e, t, n) {
    const {
        props: r
    } = e;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n),
        o = r[i];
    o && be.postRender(() => o(t, Ta(t)))
}
class _j extends qr {
    mount() {
        const {
            current: t
        } = this.node;
        t && (this.unmount = zO(t, n => (Fv(this.node, n, "Start"), (r, {
            success: i
        }) => Fv(this.node, r, i ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Qf = new WeakMap,
    od = new WeakMap,
    Fj = e => {
        const t = Qf.get(e.target);
        t && t(e)
    },
    zj = e => {
        e.forEach(Fj)
    };

function Vj({
    root: e,
    ...t
}) {
    const n = e || document;
    od.has(n) || od.set(n, {});
    const r = od.get(n),
        i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(zj, {
        root: e,
        ...t
    })), r[i]
}

function Bj(e, t, n) {
    const r = Vj(t);
    return Qf.set(e, n), r.observe(e), () => {
        Qf.delete(e), r.unobserve(e)
    }
}
const $j = {
    some: 0,
    all: 1
};
class Uj extends qr {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: n,
            margin: r,
            amount: i = "some",
            once: o
        } = t, s = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : $j[i]
        }, a = l => {
            const {
                isIntersecting: u
            } = l;
            if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView)) return;
            u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {
                onViewportEnter: c,
                onViewportLeave: d
            } = this.node.getProps(), h = u ? c : d;
            h && h(l)
        };
        return Bj(this.node.current, s, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(Hj(t, n)) && this.startObserver()
    }
    unmount() {}
}

function Hj({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return n => e[n] !== t[n]
}
const Wj = {
        inView: {
            Feature: Uj
        },
        tap: {
            Feature: _j
        },
        focus: {
            Feature: jj
        },
        hover: {
            Feature: Lj
        }
    },
    Kj = {
        layout: {
            ProjectionNode: bk,
            MeasureLayout: pk
        }
    },
    Yf = {
        current: null
    },
    kk = {
        current: !1
    };

function Gj() {
    if (kk.current = !0, !!Ap)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => Yf.current = e.matches;
            e.addListener(t), t()
        } else Yf.current = !1
}
const qj = [...qb, Xe, Hr],
    Qj = e => qj.find(Gb(e)),
    zv = new WeakMap;

function Yj(e, t, n) {
    for (const r in t) {
        const i = t[r],
            o = n[r];
        if (Je(i)) e.addValue(r, i);
        else if (Je(o)) e.addValue(r, la(i, {
            owner: e
        }));
        else if (o !== i)
            if (e.hasValue(r)) {
                const s = e.getValue(r);
                s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i)
            } else {
                const s = e.getStaticValue(r);
                e.addValue(r, la(s !== void 0 ? s : i, {
                    owner: e
                }))
            }
    }
    for (const r in n) t[r] === void 0 && e.removeValue(r);
    return t
}
const Vv = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class Xj {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: i,
        blockInitialAnimation: o,
        visualState: s
    }, a = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = tm, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const f = Nn.now();
            this.renderScheduledAt < f && (this.renderScheduledAt = f, be.render(this.render, !1, !0))
        };
        const {
            latestValues: l,
            renderState: u,
            onUpdate: c
        } = s;
        this.onUpdate = c, this.latestValues = l, this.baseTarget = { ...l
        }, this.initialValues = n.initial ? { ...l
        } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = Zu(n), this.isVariantNode = nb(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
        const {
            willChange: d,
            ...h
        } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const f in h) {
            const g = h[f];
            l[f] !== void 0 && Je(g) && g.set(l[f], !1)
        }
    }
    mount(t) {
        this.current = t, zv.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), kk.current || Gj(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Yf.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        zv.delete(this.current), this.projection && this.projection.unmount(), Ur(this.notifyUpdate), Ur(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(), n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = Oi.has(t),
            i = n.on("change", a => {
                this.latestValues[t] = a, this.props.onUpdate && be.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0)
            }),
            o = n.on("renderRequest", this.scheduleRender);
        let s;
        window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
            i(), o(), s && s(), n.owner && n.stop()
        })
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in Lo) {
            const n = Lo[t];
            if (!n) continue;
            const {
                isEnabled: r,
                Feature: i
            } = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
                const o = this.features[t];
                o.isMounted ? o.update() : (o.mount(), o.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ie()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let r = 0; r < Vv.length; r++) {
            const i = Vv[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const o = "on" + i,
                s = t[o];
            s && (this.propEventSubscriptions[i] = this.on(i, s))
        }
        this.prevMotionValues = Yj(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = la(n === null ? void 0 : n, {
            owner: this
        }), this.addValue(t, r)), r
    }
    readValue(t, n) {
        var r;
        let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return i != null && (typeof i == "string" && (Wb(i) || jb(i)) ? i = parseFloat(i) : !Qj(i) && Hr.test(n) && (i = $b(t, n)), this.setBaseTarget(t, Je(i) ? i.get() : i)), Je(i) ? i.get() : i
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {
            initial: r
        } = this.props;
        let i;
        if (typeof r == "string" || typeof r == "object") {
            const s = Lp(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            s && (i = s[t])
        }
        if (r && i !== void 0) return i;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !Je(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Qp), this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class Ck extends Xj {
    constructor() {
        super(...arguments), this.KeyframeResolver = Qb
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {
        vars: n,
        style: r
    }) {
        delete n[t], delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        Je(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
}

function Zj(e) {
    return window.getComputedStyle(e)
}
class Jj extends Ck {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = db
    }
    readValueFromInstance(t, n) {
        if (Oi.has(n)) {
            const r = em(n);
            return r && r.default || 0
        } else {
            const r = Zj(t),
                i = (lb(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: n
    }) {
        return fk(t, n)
    }
    build(t, n, r) {
        Fp(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return $p(t, n, r)
    }
}
class e_ extends Ck {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ie
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Oi.has(n)) {
            const r = em(n);
            return r && r.default || 0
        }
        return n = fb.has(n) ? n : Ip(n), t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return mb(t, n, r)
    }
    build(t, n, r) {
        zp(t, n, this.isSVGTag, r.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        hb(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = Bp(t.tagName), super.mount(t)
    }
}
const t_ = (e, t) => Dp(e) ? new e_(t) : new Jj(t, {
        allowProjection: e !== w.Fragment
    }),
    n_ = AO({ ...EL,
        ...Wj,
        ...Dj,
        ...Kj
    }, t_),
    ae = UI(n_),
    Bv = [{
        to: "/",
        label: "Home"
    }, {
        to: "/services",
        label: "Services"
    }, {
        to: "/gallery",
        label: "Gallery"
    }, {
        to: "/pricing",
        label: "Price Calculator"
    }, {
        to: "/about",
        label: "About Us"
    }, {
        to: "/contact",
        label: "Contact"
    }],
    r_ = () => {
        const [e, t] = w.useState(!1), n = $o();
        return S.jsxs("nav", {
            className: "fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/20",
            children: [S.jsxs("div", {
                className: "container mx-auto flex items-center justify-between h-16 md:h-20 px-4",
                children: [S.jsx(Ar, {
                    to: "/",
                    className: "flex items-center gap-2",
                    children: S.jsxs("span", {
                        className: "text-2xl md:text-3xl font-heading font-bold text-cream",
                        children: ["Sahacarah ", S.jsx("span", {
                            className: "text-gradient-gold",
                            children: "Interior"
                        })]
                    })
                }), S.jsxs("div", {
                    className: "hidden md:flex items-center gap-8",
                    children: [Bv.map(r => S.jsx(Ar, {
                        to: r.to,
                        className: `text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${n.pathname===r.to?"text-gold":"text-cream/80 hover:text-gold"}`,
                        children: r.label
                    }, r.to)), S.jsxs("a", {
                        href: "https://wa.me/917003853453",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "bg-gradient-gold text-primary font-semibold px-5 py-2.5 rounded-md text-sm hover:opacity-90 transition-opacity flex items-center gap-2",
                        children: [S.jsx(uS, {
                            className: "w-4 h-4"
                        }), "Get Free Quote"]
                    })]
                }), S.jsx("button", {
                    onClick: () => t(!e),
                    className: "md:hidden text-cream p-2",
                    "aria-label": "Toggle menu",
                    children: e ? S.jsx(hp, {
                        className: "w-6 h-6"
                    }) : S.jsx(HR, {
                        className: "w-6 h-6"
                    })
                })]
            }), S.jsx(ZS, {
                children: e && S.jsx(ae.div, {
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: "auto",
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    className: "md:hidden bg-primary border-t border-gold/20 overflow-hidden",
                    children: S.jsxs("div", {
                        className: "flex flex-col px-4 py-4 gap-3",
                        children: [Bv.map(r => S.jsx(Ar, {
                            to: r.to,
                            onClick: () => t(!1),
                            className: `text-sm font-medium tracking-wide uppercase py-2 ${n.pathname===r.to?"text-gold":"text-cream/80"}`,
                            children: r.label
                        }, r.to)), S.jsx("a", {
                            href: "https://wa.me/917003853453",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "bg-gradient-gold text-primary font-semibold px-5 py-2.5 rounded-md text-sm text-center mt-2",
                            children: "Get Free Quote"
                        })]
                    })
                })
            })]
        })
    },
    i_ = [{
        icon: VR,
        href: "https://www.instagram.com/sahacarah",
        label: "Instagram"
    }, {
        icon: nM,
        href: "https://youtube.com/@interior_sahcarah",
        label: "YouTube"
    }, {
        icon: jR,
        href: "https://www.facebook.com/share/1KtRFjVk5y/",
        label: "Facebook"
    }],
    o_ = () => S.jsx("footer", {
        className: "bg-primary text-cream/80",
        children: S.jsxs("div", {
            className: "container mx-auto px-4 py-12 md:py-16",
            children: [S.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                children: [S.jsxs("div", {
                    className: "space-y-4",
                    children: [S.jsxs("h3", {
                        className: "text-2xl font-heading font-bold text-cream",
                        children: ["Sahacarah ", S.jsx("span", {
                            className: "text-gradient-gold",
                            children: "Interior"
                        })]
                    }), S.jsx("p", {
                        className: "text-sm leading-relaxed",
                        children: "Previously known as Fit&Fix Solution. Transforming spaces into extraordinary experiences across Kolkata and beyond."
                    }), S.jsx("div", {
                        className: "flex gap-3 pt-2",
                        children: i_.map(e => S.jsx("a", {
                            href: e.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": e.label,
                            className: "w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-cream/70 hover:bg-gold hover:text-primary transition-all duration-300",
                            children: S.jsx(e.icon, {
                                className: "w-4 h-4"
                            })
                        }, e.label))
                    })]
                }), S.jsxs("div", {
                    className: "space-y-4",
                    children: [S.jsx("h4", {
                        className: "font-heading font-semibold text-gold text-lg",
                        children: "Quick Links"
                    }), S.jsx("div", {
                        className: "flex flex-col gap-2",
                        children: [{
                            to: "/",
                            label: "Home"
                        }, {
                            to: "/services",
                            label: "Services"
                        }, {
                            to: "/about",
                            label: "About Us"
                        }, {
                            to: "/contact",
                            label: "Contact"
                        }].map(e => S.jsx(Ar, {
                            to: e.to,
                            className: "text-sm hover:text-gold transition-colors",
                            children: e.label
                        }, e.to))
                    })]
                }), S.jsxs("div", {
                    className: "space-y-4",
                    children: [S.jsx("h4", {
                        className: "font-heading font-semibold text-gold text-lg",
                        children: "Our Offices"
                    }), S.jsx("div", {
                        className: "space-y-3",
                        children: S.jsxs("div", {
                            className: "flex gap-2 text-sm",
                            children: [S.jsx(UR, {
                                className: "w-4 h-4 text-gold shrink-0 mt-0.5"
                            }), S.jsx("span", {
                                children: "West, Shantinagar St, Anand Nagar, Bally, Howrah, West Bengal 711227"
                            })]
                        })
                    })]
                }), S.jsxs("div", {
                    className: "space-y-4",
                    children: [S.jsx("h4", {
                        className: "font-heading font-semibold text-gold text-lg",
                        children: "Get in Touch"
                    }), S.jsxs("div", {
                        className: "space-y-3",
                        children: [S.jsxs("a", {
                            href: "tel:+917003853453",
                            className: "flex gap-2 text-sm hover:text-gold transition-colors",
                            children: [S.jsx(uS, {
                                className: "w-4 h-4 text-gold shrink-0"
                            }), "+91 70038 53453"]
                        }), S.jsxs("a", {
                            href: "mailto:sahacarahglobalpvtltd@gmail.com",
                            className: "flex gap-2 text-sm hover:text-gold transition-colors",
                            children: [S.jsx($R, {
                                className: "w-4 h-4 text-gold shrink-0"
                            }), "sahacarahglobalpvtltd@gmail.com"]
                        }), S.jsx("p", {
                            className: "text-xs text-cream/50 mt-2",
                            children: "Mon–Sat: 10 AM – 8 PM"
                        })]
                    })]
                })]
            }), S.jsxs("div", {
                className: "border-t border-cream/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4",
                children: [S.jsxs("p", {
                    className: "text-xs",
                    children: ["© ", new Date().getFullYear(), " Sahacarah Global Pvt Ltd. All rights reserved."]
                }), S.jsx("p", {
                    className: "text-xs",
                    children: "GSTIN: 19ABOCS8840G1ZP"
                })]
            })]
        })
    }),
    s_ = () => S.jsx("a", {
        href: "https://wa.me/917003853453?text=Hi%2C%20I%27m%20interested%20in%20interior%20design%20services",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform",
        "aria-label": "Chat on WhatsApp",
        children: S.jsx(WR, {
            className: "w-7 h-7 text-primary-foreground",
            fill: "currentColor"
        })
    });

function a_(e, t) {
    const n = {};
    return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim()
}
const l_ = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
    u_ = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
    c_ = {};

function $v(e, t) {
    return (c_.jsx ? u_ : l_).test(e)
}
const d_ = /[ \t\n\f\r]/g;

function f_(e) {
    return typeof e == "object" ? e.type === "text" ? Uv(e.value) : !1 : Uv(e)
}

function Uv(e) {
    return e.replace(d_, "") === ""
}
class Pa {
    constructor(t, n, r) {
        this.normal = n, this.property = t, r && (this.space = r)
    }
}
Pa.prototype.normal = {};
Pa.prototype.property = {};
Pa.prototype.space = void 0;

function Ek(e, t) {
    const n = {},
        r = {};
    for (const i of e) Object.assign(n, i.property), Object.assign(r, i.normal);
    return new Pa(n, r, t)
}

function Xf(e) {
    return e.toLowerCase()
}
class St {
    constructor(t, n) {
        this.attribute = n, this.property = t
    }
}
St.prototype.attribute = "";
St.prototype.booleanish = !1;
St.prototype.boolean = !1;
St.prototype.commaOrSpaceSeparated = !1;
St.prototype.commaSeparated = !1;
St.prototype.defined = !1;
St.prototype.mustUseProperty = !1;
St.prototype.number = !1;
St.prototype.overloadedBoolean = !1;
St.prototype.property = "";
St.prototype.spaceSeparated = !1;
St.prototype.space = void 0;
let h_ = 0;
const ne = Di(),
    Le = Di(),
    Zf = Di(),
    V = Di(),
    ge = Di(),
    mo = Di(),
    Et = Di();

function Di() {
    return 2 ** ++h_
}
const Jf = Object.freeze(Object.defineProperty({
        __proto__: null,
        boolean: ne,
        booleanish: Le,
        commaOrSpaceSeparated: Et,
        commaSeparated: mo,
        number: V,
        overloadedBoolean: Zf,
        spaceSeparated: ge
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    sd = Object.keys(Jf);
class om extends St {
    constructor(t, n, r, i) {
        let o = -1;
        if (super(t, n), Hv(this, "space", i), typeof r == "number")
            for (; ++o < sd.length;) {
                const s = sd[o];
                Hv(this, sd[o], (r & Jf[s]) === Jf[s])
            }
    }
}
om.prototype.defined = !0;

function Hv(e, t, n) {
    n && (e[t] = n)
}

function qo(e) {
    const t = {},
        n = {};
    for (const [r, i] of Object.entries(e.properties)) {
        const o = new om(r, e.transform(e.attributes || {}, r), i, e.space);
        e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[Xf(r)] = r, n[Xf(o.attribute)] = r
    }
    return new Pa(t, n, e.space)
}
const Tk = qo({
    properties: {
        ariaActiveDescendant: null,
        ariaAtomic: Le,
        ariaAutoComplete: null,
        ariaBusy: Le,
        ariaChecked: Le,
        ariaColCount: V,
        ariaColIndex: V,
        ariaColSpan: V,
        ariaControls: ge,
        ariaCurrent: null,
        ariaDescribedBy: ge,
        ariaDetails: null,
        ariaDisabled: Le,
        ariaDropEffect: ge,
        ariaErrorMessage: null,
        ariaExpanded: Le,
        ariaFlowTo: ge,
        ariaGrabbed: Le,
        ariaHasPopup: null,
        ariaHidden: Le,
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: ge,
        ariaLevel: V,
        ariaLive: null,
        ariaModal: Le,
        ariaMultiLine: Le,
        ariaMultiSelectable: Le,
        ariaOrientation: null,
        ariaOwns: ge,
        ariaPlaceholder: null,
        ariaPosInSet: V,
        ariaPressed: Le,
        ariaReadOnly: Le,
        ariaRelevant: null,
        ariaRequired: Le,
        ariaRoleDescription: ge,
        ariaRowCount: V,
        ariaRowIndex: V,
        ariaRowSpan: V,
        ariaSelected: Le,
        ariaSetSize: V,
        ariaSort: null,
        ariaValueMax: V,
        ariaValueMin: V,
        ariaValueNow: V,
        ariaValueText: null,
        role: null
    },
    transform(e, t) {
        return t === "role" ? t : "aria-" + t.slice(4).toLowerCase()
    }
});

function Pk(e, t) {
    return t in e ? e[t] : t
}

function Ak(e, t) {
    return Pk(e, t.toLowerCase())
}
const p_ = qo({
        attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv"
        },
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
            abbr: null,
            accept: mo,
            acceptCharset: ge,
            accessKey: ge,
            action: null,
            allow: null,
            allowFullScreen: ne,
            allowPaymentRequest: ne,
            allowUserMedia: ne,
            alt: null,
            as: null,
            async: ne,
            autoCapitalize: null,
            autoComplete: ge,
            autoFocus: ne,
            autoPlay: ne,
            blocking: ge,
            capture: null,
            charSet: null,
            checked: ne,
            cite: null,
            className: ge,
            cols: V,
            colSpan: null,
            content: null,
            contentEditable: Le,
            controls: ne,
            controlsList: ge,
            coords: V | mo,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: ne,
            defer: ne,
            dir: null,
            dirName: null,
            disabled: ne,
            download: Zf,
            draggable: Le,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: ne,
            formTarget: null,
            headers: ge,
            height: V,
            hidden: Zf,
            high: V,
            href: null,
            hrefLang: null,
            htmlFor: ge,
            httpEquiv: ge,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: ne,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: ne,
            itemId: null,
            itemProp: ge,
            itemRef: ge,
            itemScope: ne,
            itemType: ge,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: ne,
            low: V,
            manifest: null,
            max: null,
            maxLength: V,
            media: null,
            method: null,
            min: null,
            minLength: V,
            multiple: ne,
            muted: ne,
            name: null,
            nonce: null,
            noModule: ne,
            noValidate: ne,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: ne,
            optimum: V,
            pattern: null,
            ping: ge,
            placeholder: null,
            playsInline: ne,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: ne,
            referrerPolicy: null,
            rel: ge,
            required: ne,
            reversed: ne,
            rows: V,
            rowSpan: V,
            sandbox: ge,
            scope: null,
            scoped: ne,
            seamless: ne,
            selected: ne,
            shadowRootClonable: ne,
            shadowRootDelegatesFocus: ne,
            shadowRootMode: null,
            shape: null,
            size: V,
            sizes: null,
            slot: null,
            span: V,
            spellCheck: Le,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: V,
            step: null,
            style: null,
            tabIndex: V,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: ne,
            useMap: null,
            value: Le,
            width: V,
            wrap: null,
            writingSuggestions: null,
            align: null,
            aLink: null,
            archive: ge,
            axis: null,
            background: null,
            bgColor: null,
            border: V,
            borderColor: null,
            bottomMargin: V,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: ne,
            declare: ne,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: V,
            leftMargin: V,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: V,
            marginWidth: V,
            noResize: ne,
            noHref: ne,
            noShade: ne,
            noWrap: ne,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: V,
            rules: null,
            scheme: null,
            scrolling: Le,
            standby: null,
            summary: null,
            text: null,
            topMargin: V,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: V,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: ne,
            disableRemotePlayback: ne,
            prefix: null,
            property: null,
            results: V,
            security: null,
            unselectable: null
        },
        space: "html",
        transform: Ak
    }),
    m_ = qo({
        attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            transformOrigin: "transform-origin",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin"
        },
        properties: {
            about: Et,
            accentHeight: V,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: V,
            amplitude: V,
            arabicForm: null,
            ascent: V,
            attributeName: null,
            attributeType: null,
            azimuth: V,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: V,
            by: null,
            calcMode: null,
            capHeight: V,
            className: ge,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: V,
            diffuseConstant: V,
            direction: null,
            display: null,
            dur: null,
            divisor: V,
            dominantBaseline: null,
            download: ne,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: V,
            enableBackground: null,
            end: null,
            event: null,
            exponent: V,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: V,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: mo,
            g2: mo,
            glyphName: mo,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: V,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: V,
            horizOriginX: V,
            horizOriginY: V,
            id: null,
            ideographic: V,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: V,
            k: V,
            k1: V,
            k2: V,
            k3: V,
            k4: V,
            kernelMatrix: Et,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: V,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: V,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: V,
            overlineThickness: V,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: V,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: ge,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: V,
            pointsAtY: V,
            pointsAtZ: V,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: Et,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: Et,
            rev: Et,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: Et,
            requiredFeatures: Et,
            requiredFonts: Et,
            requiredFormats: Et,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: V,
            specularExponent: V,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: V,
            strikethroughThickness: V,
            string: null,
            stroke: null,
            strokeDashArray: Et,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: V,
            strokeOpacity: V,
            strokeWidth: null,
            style: null,
            surfaceScale: V,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: Et,
            tabIndex: V,
            tableValues: null,
            target: null,
            targetX: V,
            targetY: V,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: Et,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: V,
            underlineThickness: V,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: V,
            values: null,
            vAlphabetic: V,
            vMathematical: V,
            vectorEffect: null,
            vHanging: V,
            vIdeographic: V,
            version: null,
            vertAdvY: V,
            vertOriginX: V,
            vertOriginY: V,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: V,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null
        },
        space: "svg",
        transform: Pk
    }),
    Rk = qo({
        properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null
        },
        space: "xlink",
        transform(e, t) {
            return "xlink:" + t.slice(5).toLowerCase()
        }
    }),
    Mk = qo({
        attributes: {
            xmlnsxlink: "xmlns:xlink"
        },
        properties: {
            xmlnsXLink: null,
            xmlns: null
        },
        space: "xmlns",
        transform: Ak
    }),
    Nk = qo({
        properties: {
            xmlBase: null,
            xmlLang: null,
            xmlSpace: null
        },
        space: "xml",
        transform(e, t) {
            return "xml:" + t.slice(3).toLowerCase()
        }
    }),
    g_ = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink"
    },
    y_ = /[A-Z]/g,
    Wv = /-[a-z]/g,
    v_ = /^data[-\w.:]+$/i;

function x_(e, t) {
    const n = Xf(t);
    let r = t,
        i = St;
    if (n in e.normal) return e.property[e.normal[n]];
    if (n.length > 4 && n.slice(0, 4) === "data" && v_.test(t)) {
        if (t.charAt(4) === "-") {
            const o = t.slice(5).replace(Wv, S_);
            r = "data" + o.charAt(0).toUpperCase() + o.slice(1)
        } else {
            const o = t.slice(4);
            if (!Wv.test(o)) {
                let s = o.replace(y_, w_);
                s.charAt(0) !== "-" && (s = "-" + s), t = "data" + s
            }
        }
        i = om
    }
    return new i(r, t)
}

function w_(e) {
    return "-" + e.toLowerCase()
}

function S_(e) {
    return e.charAt(1).toUpperCase()
}
const b_ = Ek([Tk, p_, Rk, Mk, Nk], "html"),
    sm = Ek([Tk, m_, Rk, Mk, Nk], "svg");

function k_(e) {
    return e.join(" ").trim()
}
var am = {},
    Kv = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    C_ = /\n/g,
    E_ = /^\s*/,
    T_ = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    P_ = /^:\s*/,
    A_ = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    R_ = /^[;\s]*/,
    M_ = /^\s+|\s+$/g,
    N_ = `
`,
    Gv = "/",
    qv = "*",
    si = "",
    I_ = "comment",
    O_ = "declaration";

function D_(e, t) {
    if (typeof e != "string") throw new TypeError("First argument must be a string");
    if (!e) return [];
    t = t || {};
    var n = 1,
        r = 1;

    function i(g) {
        var m = g.match(C_);
        m && (n += m.length);
        var x = g.lastIndexOf(N_);
        r = ~x ? g.length - x : r + g.length
    }

    function o() {
        var g = {
            line: n,
            column: r
        };
        return function(m) {
            return m.position = new s(g), u(), m
        }
    }

    function s(g) {
        this.start = g, this.end = {
            line: n,
            column: r
        }, this.source = t.source
    }
    s.prototype.content = e;

    function a(g) {
        var m = new Error(t.source + ":" + n + ":" + r + ": " + g);
        if (m.reason = g, m.filename = t.source, m.line = n, m.column = r, m.source = e, !t.silent) throw m
    }

    function l(g) {
        var m = g.exec(e);
        if (m) {
            var x = m[0];
            return i(x), e = e.slice(x.length), m
        }
    }

    function u() {
        l(E_)
    }

    function c(g) {
        var m;
        for (g = g || []; m = d();) m !== !1 && g.push(m);
        return g
    }

    function d() {
        var g = o();
        if (!(Gv != e.charAt(0) || qv != e.charAt(1))) {
            for (var m = 2; si != e.charAt(m) && (qv != e.charAt(m) || Gv != e.charAt(m + 1));) ++m;
            if (m += 2, si === e.charAt(m - 1)) return a("End of comment missing");
            var x = e.slice(2, m - 2);
            return r += 2, i(x), e = e.slice(m), r += 2, g({
                type: I_,
                comment: x
            })
        }
    }

    function h() {
        var g = o(),
            m = l(T_);
        if (m) {
            if (d(), !l(P_)) return a("property missing ':'");
            var x = l(A_),
                p = g({
                    type: O_,
                    property: Qv(m[0].replace(Kv, si)),
                    value: x ? Qv(x[0].replace(Kv, si)) : si
                });
            return l(R_), p
        }
    }

    function f() {
        var g = [];
        c(g);
        for (var m; m = h();) m !== !1 && (g.push(m), c(g));
        return g
    }
    return u(), f()
}

function Qv(e) {
    return e ? e.replace(M_, si) : si
}
var L_ = D_,
    j_ = Ml && Ml.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(am, "__esModule", {
    value: !0
});
am.default = F_;
const __ = j_(L_);

function F_(e, t) {
    let n = null;
    if (!e || typeof e != "string") return n;
    const r = (0, __.default)(e),
        i = typeof t == "function";
    return r.forEach(o => {
        if (o.type !== "declaration") return;
        const {
            property: s,
            value: a
        } = o;
        i ? t(s, a, o) : a && (n = n || {}, n[s] = a)
    }), n
}
var tc = {};
Object.defineProperty(tc, "__esModule", {
    value: !0
});
tc.camelCase = void 0;
var z_ = /^--[a-zA-Z0-9_-]+$/,
    V_ = /-([a-z])/g,
    B_ = /^[^-]+$/,
    $_ = /^-(webkit|moz|ms|o|khtml)-/,
    U_ = /^-(ms)-/,
    H_ = function(e) {
        return !e || B_.test(e) || z_.test(e)
    },
    W_ = function(e, t) {
        return t.toUpperCase()
    },
    Yv = function(e, t) {
        return "".concat(t, "-")
    },
    K_ = function(e, t) {
        return t === void 0 && (t = {}), H_(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(U_, Yv) : e = e.replace($_, Yv), e.replace(V_, W_))
    };
tc.camelCase = K_;
var G_ = Ml && Ml.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    },
    q_ = G_(am),
    Q_ = tc;

function eh(e, t) {
    var n = {};
    return !e || typeof e != "string" || (0, q_.default)(e, function(r, i) {
        r && i && (n[(0, Q_.camelCase)(r, t)] = i)
    }), n
}
eh.default = eh;
var Y_ = eh;
const X_ = Pi(Y_),
    Ik = Ok("end"),
    lm = Ok("start");

function Ok(e) {
    return t;

    function t(n) {
        const r = n && n.position && n.position[e] || {};
        if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0) return {
            line: r.line,
            column: r.column,
            offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
        }
    }
}

function Z_(e) {
    const t = lm(e),
        n = Ik(e);
    if (t && n) return {
        start: t,
        end: n
    }
}

function Os(e) {
    return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Xv(e.position) : "start" in e || "end" in e ? Xv(e) : "line" in e || "column" in e ? th(e) : ""
}

function th(e) {
    return Zv(e && e.line) + ":" + Zv(e && e.column)
}

function Xv(e) {
    return th(e && e.start) + "-" + th(e && e.end)
}

function Zv(e) {
    return e && typeof e == "number" ? e : 1
}
class tt extends Error {
    constructor(t, n, r) {
        super(), typeof n == "string" && (r = n, n = void 0);
        let i = "",
            o = {},
            s = !1;
        if (n && ("line" in n && "column" in n ? o = {
                place: n
            } : "start" in n && "end" in n ? o = {
                place: n
            } : "type" in n ? o = {
                ancestors: [n],
                place: n.position
            } : o = { ...n
            }), typeof t == "string" ? i = t : !o.cause && t && (s = !0, i = t.message, o.cause = t), !o.ruleId && !o.source && typeof r == "string") {
            const l = r.indexOf(":");
            l === -1 ? o.ruleId = r : (o.source = r.slice(0, l), o.ruleId = r.slice(l + 1))
        }
        if (!o.place && o.ancestors && o.ancestors) {
            const l = o.ancestors[o.ancestors.length - 1];
            l && (o.place = l.position)
        }
        const a = o.place && "start" in o.place ? o.place.start : o.place;
        this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = Os(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = s && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0
    }
}
tt.prototype.file = "";
tt.prototype.name = "";
tt.prototype.reason = "";
tt.prototype.message = "";
tt.prototype.stack = "";
tt.prototype.column = void 0;
tt.prototype.line = void 0;
tt.prototype.ancestors = void 0;
tt.prototype.cause = void 0;
tt.prototype.fatal = void 0;
tt.prototype.place = void 0;
tt.prototype.ruleId = void 0;
tt.prototype.source = void 0;
const um = {}.hasOwnProperty,
    J_ = new Map,
    e4 = /[A-Z]/g,
    t4 = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
    n4 = new Set(["td", "th"]),
    Dk = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";

function r4(e, t) {
    if (!t || t.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
    const n = t.filePath || void 0;
    let r;
    if (t.development) {
        if (typeof t.jsxDEV != "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
        r = d4(n, t.jsxDEV)
    } else {
        if (typeof t.jsx != "function") throw new TypeError("Expected `jsx` in production options");
        if (typeof t.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
        r = c4(n, t.jsx, t.jsxs)
    }
    const i = {
            Fragment: t.Fragment,
            ancestors: [],
            components: t.components || {},
            create: r,
            elementAttributeNameCase: t.elementAttributeNameCase || "react",
            evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
            filePath: n,
            ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
            passKeys: t.passKeys !== !1,
            passNode: t.passNode || !1,
            schema: t.space === "svg" ? sm : b_,
            stylePropertyNameCase: t.stylePropertyNameCase || "dom",
            tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
        },
        o = Lk(i, e, void 0);
    return o && typeof o != "string" ? o : i.create(e, i.Fragment, {
        children: o || void 0
    }, void 0)
}

function Lk(e, t, n) {
    if (t.type === "element") return i4(e, t, n);
    if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return o4(e, t);
    if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return a4(e, t, n);
    if (t.type === "mdxjsEsm") return s4(e, t);
    if (t.type === "root") return l4(e, t, n);
    if (t.type === "text") return u4(e, t)
}

function i4(e, t, n) {
    const r = e.schema;
    let i = r;
    t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = sm, e.schema = i), e.ancestors.push(t);
    const o = _k(e, t.tagName, !1),
        s = f4(e, t);
    let a = dm(e, t);
    return t4.has(t.tagName) && (a = a.filter(function(l) {
        return typeof l == "string" ? !f_(l) : !0
    })), jk(e, s, o, t), cm(s, a), e.ancestors.pop(), e.schema = r, e.create(t, o, s, n)
}

function o4(e, t) {
    if (t.data && t.data.estree && e.evaluater) {
        const r = t.data.estree.body[0];
        return r.type, e.evaluater.evaluateExpression(r.expression)
    }
    da(e, t.position)
}

function s4(e, t) {
    if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
    da(e, t.position)
}

function a4(e, t, n) {
    const r = e.schema;
    let i = r;
    t.name === "svg" && r.space === "html" && (i = sm, e.schema = i), e.ancestors.push(t);
    const o = t.name === null ? e.Fragment : _k(e, t.name, !0),
        s = h4(e, t),
        a = dm(e, t);
    return jk(e, s, o, t), cm(s, a), e.ancestors.pop(), e.schema = r, e.create(t, o, s, n)
}

function l4(e, t, n) {
    const r = {};
    return cm(r, dm(e, t)), e.create(t, e.Fragment, r, n)
}

function u4(e, t) {
    return t.value
}

function jk(e, t, n, r) {
    typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r)
}

function cm(e, t) {
    if (t.length > 0) {
        const n = t.length > 1 ? t : t[0];
        n && (e.children = n)
    }
}

function c4(e, t, n) {
    return r;

    function r(i, o, s, a) {
        const u = Array.isArray(s.children) ? n : t;
        return a ? u(o, s, a) : u(o, s)
    }
}

function d4(e, t) {
    return n;

    function n(r, i, o, s) {
        const a = Array.isArray(o.children),
            l = lm(r);
        return t(i, o, s, a, {
            columnNumber: l ? l.column - 1 : void 0,
            fileName: e,
            lineNumber: l ? l.line : void 0
        }, void 0)
    }
}

function f4(e, t) {
    const n = {};
    let r, i;
    for (i in t.properties)
        if (i !== "children" && um.call(t.properties, i)) {
            const o = p4(e, i, t.properties[i]);
            if (o) {
                const [s, a] = o;
                e.tableCellAlignToStyle && s === "align" && typeof a == "string" && n4.has(t.tagName) ? r = a : n[s] = a
            }
        }
    if (r) {
        const o = n.style || (n.style = {});
        o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r
    }
    return n
}

function h4(e, t) {
    const n = {};
    for (const r of t.attributes)
        if (r.type === "mdxJsxExpressionAttribute")
            if (r.data && r.data.estree && e.evaluater) {
                const o = r.data.estree.body[0];
                o.type;
                const s = o.expression;
                s.type;
                const a = s.properties[0];
                a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument))
            } else da(e, t.position);
    else {
        const i = r.name;
        let o;
        if (r.value && typeof r.value == "object")
            if (r.value.data && r.value.data.estree && e.evaluater) {
                const a = r.value.data.estree.body[0];
                a.type, o = e.evaluater.evaluateExpression(a.expression)
            } else da(e, t.position);
        else o = r.value === null ? !0 : r.value;
        n[i] = o
    }
    return n
}

function dm(e, t) {
    const n = [];
    let r = -1;
    const i = e.passKeys ? new Map : J_;
    for (; ++r < t.children.length;) {
        const o = t.children[r];
        let s;
        if (e.passKeys) {
            const l = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
            if (l) {
                const u = i.get(l) || 0;
                s = l + "-" + u, i.set(l, u + 1)
            }
        }
        const a = Lk(e, o, s);
        a !== void 0 && n.push(a)
    }
    return n
}

function p4(e, t, n) {
    const r = x_(e.schema, t);
    if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
        if (Array.isArray(n) && (n = r.commaSeparated ? a_(n) : k_(n)), r.property === "style") {
            let i = typeof n == "object" ? n : m4(e, String(n));
            return e.stylePropertyNameCase === "css" && (i = g4(i)), ["style", i]
        }
        return [e.elementAttributeNameCase === "react" && r.space ? g_[r.property] || r.property : r.attribute, n]
    }
}

function m4(e, t) {
    try {
        return X_(t, {
            reactCompat: !0
        })
    } catch (n) {
        if (e.ignoreInvalidStyle) return {};
        const r = n,
            i = new tt("Cannot parse `style` attribute", {
                ancestors: e.ancestors,
                cause: r,
                ruleId: "style",
                source: "hast-util-to-jsx-runtime"
            });
        throw i.file = e.filePath || void 0, i.url = Dk + "#cannot-parse-style-attribute", i
    }
}

function _k(e, t, n) {
    let r;
    if (!n) r = {
        type: "Literal",
        value: t
    };
    else if (t.includes(".")) {
        const i = t.split(".");
        let o = -1,
            s;
        for (; ++o < i.length;) {
            const a = $v(i[o]) ? {
                type: "Identifier",
                name: i[o]
            } : {
                type: "Literal",
                value: i[o]
            };
            s = s ? {
                type: "MemberExpression",
                object: s,
                property: a,
                computed: !!(o && a.type === "Literal"),
                optional: !1
            } : a
        }
        r = s
    } else r = $v(t) && !/^[a-z]/.test(t) ? {
        type: "Identifier",
        name: t
    } : {
        type: "Literal",
        value: t
    };
    if (r.type === "Literal") {
        const i = r.value;
        return um.call(e.components, i) ? e.components[i] : i
    }
    if (e.evaluater) return e.evaluater.evaluateExpression(r);
    da(e)
}

function da(e, t) {
    const n = new tt("Cannot handle MDX estrees without `createEvaluater`", {
        ancestors: e.ancestors,
        place: t,
        ruleId: "mdx-estree",
        source: "hast-util-to-jsx-runtime"
    });
    throw n.file = e.filePath || void 0, n.url = Dk + "#cannot-handle-mdx-estrees-without-createevaluater", n
}

function g4(e) {
    const t = {};
    let n;
    for (n in e) um.call(e, n) && (t[y4(n)] = e[n]);
    return t
}

function y4(e) {
    let t = e.replace(e4, v4);
    return t.slice(0, 3) === "ms-" && (t = "-" + t), t
}

function v4(e) {
    return "-" + e.toLowerCase()
}
const ad = {
        action: ["form"],
        cite: ["blockquote", "del", "ins", "q"],
        data: ["object"],
        formAction: ["button", "input"],
        href: ["a", "area", "base", "link"],
        icon: ["menuitem"],
        itemId: null,
        manifest: ["html"],
        ping: ["a", "area"],
        poster: ["video"],
        src: ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"]
    },
    x4 = {};

function w4(e, t) {
    const n = x4,
        r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0,
        i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
    return Fk(e, r, i)
}

function Fk(e, t, n) {
    if (S4(e)) {
        if ("value" in e) return e.type === "html" && !n ? "" : e.value;
        if (t && "alt" in e && e.alt) return e.alt;
        if ("children" in e) return Jv(e.children, t, n)
    }
    return Array.isArray(e) ? Jv(e, t, n) : ""
}

function Jv(e, t, n) {
    const r = [];
    let i = -1;
    for (; ++i < e.length;) r[i] = Fk(e[i], t, n);
    return r.join("")
}

function S4(e) {
    return !!(e && typeof e == "object")
}
const e0 = document.createElement("i");

function fm(e) {
    const t = "&" + e + ";";
    e0.innerHTML = t;
    const n = e0.textContent;
    return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n
}

function On(e, t, n, r) {
    const i = e.length;
    let o = 0,
        s;
    if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) s = Array.from(r), s.unshift(t, n), e.splice(...s);
    else
        for (n && e.splice(t, n); o < r.length;) s = r.slice(o, o + 1e4), s.unshift(t, 0), e.splice(...s), o += 1e4, t += 1e4
}

function Ht(e, t) {
    return e.length > 0 ? (On(e, e.length, 0, t), e) : t
}
const t0 = {}.hasOwnProperty;

function b4(e) {
    const t = {};
    let n = -1;
    for (; ++n < e.length;) k4(t, e[n]);
    return t
}

function k4(e, t) {
    let n;
    for (n in t) {
        const i = (t0.call(e, n) ? e[n] : void 0) || (e[n] = {}),
            o = t[n];
        let s;
        if (o)
            for (s in o) {
                t0.call(i, s) || (i[s] = []);
                const a = o[s];
                C4(i[s], Array.isArray(a) ? a : a ? [a] : [])
            }
    }
}

function C4(e, t) {
    let n = -1;
    const r = [];
    for (; ++n < t.length;)(t[n].add === "after" ? e : r).push(t[n]);
    On(e, 0, 0, r)
}

function zk(e, t) {
    const n = Number.parseInt(e, t);
    return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "�" : String.fromCodePoint(n)
}

function go(e) {
    return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
}
const En = Qr(/[A-Za-z]/),
    Rt = Qr(/[\dA-Za-z]/),
    E4 = Qr(/[#-'*+\--9=?A-Z^-~]/);

function nh(e) {
    return e !== null && (e < 32 || e === 127)
}
const rh = Qr(/\d/),
    T4 = Qr(/[\dA-Fa-f]/),
    P4 = Qr(/[!-/:-@[-`{-~]/);

function X(e) {
    return e !== null && e < -2
}

function xt(e) {
    return e !== null && (e < 0 || e === 32)
}

function fe(e) {
    return e === -2 || e === -1 || e === 32
}
const A4 = Qr(new RegExp("\\p{P}|\\p{S}", "u")),
    R4 = Qr(/\s/);

function Qr(e) {
    return t;

    function t(n) {
        return n !== null && n > -1 && e.test(String.fromCharCode(n))
    }
}

function Qo(e) {
    const t = [];
    let n = -1,
        r = 0,
        i = 0;
    for (; ++n < e.length;) {
        const o = e.charCodeAt(n);
        let s = "";
        if (o === 37 && Rt(e.charCodeAt(n + 1)) && Rt(e.charCodeAt(n + 2))) i = 2;
        else if (o < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (s = String.fromCharCode(o));
        else if (o > 55295 && o < 57344) {
            const a = e.charCodeAt(n + 1);
            o < 56320 && a > 56319 && a < 57344 ? (s = String.fromCharCode(o, a), i = 1) : s = "�"
        } else s = String.fromCharCode(o);
        s && (t.push(e.slice(r, n), encodeURIComponent(s)), r = n + i + 1, s = ""), i && (n += i, i = 0)
    }
    return t.join("") + e.slice(r)
}

function ve(e, t, n, r) {
    const i = r ? r - 1 : Number.POSITIVE_INFINITY;
    let o = 0;
    return s;

    function s(l) {
        return fe(l) ? (e.enter(n), a(l)) : t(l)
    }

    function a(l) {
        return fe(l) && o++ < i ? (e.consume(l), a) : (e.exit(n), t(l))
    }
}
const M4 = {
    tokenize: N4
};

function N4(e) {
    const t = e.attempt(this.parser.constructs.contentInitial, r, i);
    let n;
    return t;

    function r(a) {
        if (a === null) {
            e.consume(a);
            return
        }
        return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), ve(e, t, "linePrefix")
    }

    function i(a) {
        return e.enter("paragraph"), o(a)
    }

    function o(a) {
        const l = e.enter("chunkText", {
            contentType: "text",
            previous: n
        });
        return n && (n.next = l), n = l, s(a)
    }

    function s(a) {
        if (a === null) {
            e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
            return
        }
        return X(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), s)
    }
}
const I4 = {
        tokenize: O4
    },
    n0 = {
        tokenize: D4
    };

function O4(e) {
    const t = this,
        n = [];
    let r = 0,
        i, o, s;
    return a;

    function a(v) {
        if (r < n.length) {
            const k = n[r];
            return t.containerState = k[1], e.attempt(k[0].continuation, l, u)(v)
        }
        return u(v)
    }

    function l(v) {
        if (r++, t.containerState._closeFlow) {
            t.containerState._closeFlow = void 0, i && y();
            const k = t.events.length;
            let E = k,
                C;
            for (; E--;)
                if (t.events[E][0] === "exit" && t.events[E][1].type === "chunkFlow") {
                    C = t.events[E][1].end;
                    break
                }
            p(r);
            let P = k;
            for (; P < t.events.length;) t.events[P][1].end = { ...C
            }, P++;
            return On(t.events, E + 1, 0, t.events.slice(k)), t.events.length = P, u(v)
        }
        return a(v)
    }

    function u(v) {
        if (r === n.length) {
            if (!i) return h(v);
            if (i.currentConstruct && i.currentConstruct.concrete) return g(v);
            t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack)
        }
        return t.containerState = {}, e.check(n0, c, d)(v)
    }

    function c(v) {
        return i && y(), p(r), h(v)
    }

    function d(v) {
        return t.parser.lazy[t.now().line] = r !== n.length, s = t.now().offset, g(v)
    }

    function h(v) {
        return t.containerState = {}, e.attempt(n0, f, g)(v)
    }

    function f(v) {
        return r++, n.push([t.currentConstruct, t.containerState]), h(v)
    }

    function g(v) {
        if (v === null) {
            i && y(), p(0), e.consume(v);
            return
        }
        return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
            _tokenizer: i,
            contentType: "flow",
            previous: o
        }), m(v)
    }

    function m(v) {
        if (v === null) {
            x(e.exit("chunkFlow"), !0), p(0), e.consume(v);
            return
        }
        return X(v) ? (e.consume(v), x(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(v), m)
    }

    function x(v, k) {
        const E = t.sliceStream(v);
        if (k && E.push(null), v.previous = o, o && (o.next = v), o = v, i.defineSkip(v.start), i.write(E), t.parser.lazy[v.start.line]) {
            let C = i.events.length;
            for (; C--;)
                if (i.events[C][1].start.offset < s && (!i.events[C][1].end || i.events[C][1].end.offset > s)) return;
            const P = t.events.length;
            let A = P,
                N, D;
            for (; A--;)
                if (t.events[A][0] === "exit" && t.events[A][1].type === "chunkFlow") {
                    if (N) {
                        D = t.events[A][1].end;
                        break
                    }
                    N = !0
                }
            for (p(r), C = P; C < t.events.length;) t.events[C][1].end = { ...D
            }, C++;
            On(t.events, A + 1, 0, t.events.slice(P)), t.events.length = C
        }
    }

    function p(v) {
        let k = n.length;
        for (; k-- > v;) {
            const E = n[k];
            t.containerState = E[1], E[0].exit.call(t, e)
        }
        n.length = v
    }

    function y() {
        i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0
    }
}

function D4(e, t, n) {
    return ve(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
}

function r0(e) {
    if (e === null || xt(e) || R4(e)) return 1;
    if (A4(e)) return 2
}

function hm(e, t, n) {
    const r = [];
    let i = -1;
    for (; ++i < e.length;) {
        const o = e[i].resolveAll;
        o && !r.includes(o) && (t = o(t, n), r.push(o))
    }
    return t
}
const ih = {
    name: "attention",
    resolveAll: L4,
    tokenize: j4
};

function L4(e, t) {
    let n = -1,
        r, i, o, s, a, l, u, c;
    for (; ++n < e.length;)
        if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
            for (r = n; r--;)
                if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
                    if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
                    l = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
                    const d = { ...e[r][1].end
                        },
                        h = { ...e[n][1].start
                        };
                    i0(d, -l), i0(h, l), s = {
                        type: l > 1 ? "strongSequence" : "emphasisSequence",
                        start: d,
                        end: { ...e[r][1].end
                        }
                    }, a = {
                        type: l > 1 ? "strongSequence" : "emphasisSequence",
                        start: { ...e[n][1].start
                        },
                        end: h
                    }, o = {
                        type: l > 1 ? "strongText" : "emphasisText",
                        start: { ...e[r][1].end
                        },
                        end: { ...e[n][1].start
                        }
                    }, i = {
                        type: l > 1 ? "strong" : "emphasis",
                        start: { ...s.start
                        },
                        end: { ...a.end
                        }
                    }, e[r][1].end = { ...s.start
                    }, e[n][1].start = { ...a.end
                    }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = Ht(u, [
                        ["enter", e[r][1], t],
                        ["exit", e[r][1], t]
                    ])), u = Ht(u, [
                        ["enter", i, t],
                        ["enter", s, t],
                        ["exit", s, t],
                        ["enter", o, t]
                    ]), u = Ht(u, hm(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = Ht(u, [
                        ["exit", o, t],
                        ["enter", a, t],
                        ["exit", a, t],
                        ["exit", i, t]
                    ]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, u = Ht(u, [
                        ["enter", e[n][1], t],
                        ["exit", e[n][1], t]
                    ])) : c = 0, On(e, r - 1, n - r + 3, u), n = r + u.length - c - 2;
                    break
                }
        }
    for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
    return e
}

function j4(e, t) {
    const n = this.parser.constructs.attentionMarkers.null,
        r = this.previous,
        i = r0(r);
    let o;
    return s;

    function s(l) {
        return o = l, e.enter("attentionSequence"), a(l)
    }

    function a(l) {
        if (l === o) return e.consume(l), a;
        const u = e.exit("attentionSequence"),
            c = r0(l),
            d = !c || c === 2 && i || n.includes(l),
            h = !i || i === 2 && c || n.includes(r);
        return u._open = !!(o === 42 ? d : d && (i || !h)), u._close = !!(o === 42 ? h : h && (c || !d)), t(l)
    }
}

function i0(e, t) {
    e.column += t, e.offset += t, e._bufferIndex += t
}
const _4 = {
    name: "autolink",
    tokenize: F4
};

function F4(e, t, n) {
    let r = 0;
    return i;

    function i(f) {
        return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o
    }

    function o(f) {
        return En(f) ? (e.consume(f), s) : f === 64 ? n(f) : u(f)
    }

    function s(f) {
        return f === 43 || f === 45 || f === 46 || Rt(f) ? (r = 1, a(f)) : u(f)
    }

    function a(f) {
        return f === 58 ? (e.consume(f), r = 0, l) : (f === 43 || f === 45 || f === 46 || Rt(f)) && r++ < 32 ? (e.consume(f), a) : (r = 0, u(f))
    }

    function l(f) {
        return f === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : f === null || f === 32 || f === 60 || nh(f) ? n(f) : (e.consume(f), l)
    }

    function u(f) {
        return f === 64 ? (e.consume(f), c) : E4(f) ? (e.consume(f), u) : n(f)
    }

    function c(f) {
        return Rt(f) ? d(f) : n(f)
    }

    function d(f) {
        return f === 46 ? (e.consume(f), r = 0, c) : f === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : h(f)
    }

    function h(f) {
        if ((f === 45 || Rt(f)) && r++ < 63) {
            const g = f === 45 ? h : d;
            return e.consume(f), g
        }
        return n(f)
    }
}
const nc = {
    partial: !0,
    tokenize: z4
};

function z4(e, t, n) {
    return r;

    function r(o) {
        return fe(o) ? ve(e, i, "linePrefix")(o) : i(o)
    }

    function i(o) {
        return o === null || X(o) ? t(o) : n(o)
    }
}
const Vk = {
    continuation: {
        tokenize: B4
    },
    exit: $4,
    name: "blockQuote",
    tokenize: V4
};

function V4(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        if (s === 62) {
            const a = r.containerState;
            return a.open || (e.enter("blockQuote", {
                _container: !0
            }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(s), e.exit("blockQuoteMarker"), o
        }
        return n(s)
    }

    function o(s) {
        return fe(s) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(s), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(s))
    }
}

function B4(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return fe(s) ? ve(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(s) : o(s)
    }

    function o(s) {
        return e.attempt(Vk, t, n)(s)
    }
}

function $4(e) {
    e.exit("blockQuote")
}
const Bk = {
    name: "characterEscape",
    tokenize: U4
};

function U4(e, t, n) {
    return r;

    function r(o) {
        return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i
    }

    function i(o) {
        return P4(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o)
    }
}
const $k = {
    name: "characterReference",
    tokenize: H4
};

function H4(e, t, n) {
    const r = this;
    let i = 0,
        o, s;
    return a;

    function a(d) {
        return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(d), e.exit("characterReferenceMarker"), l
    }

    function l(d) {
        return d === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(d), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), o = 31, s = Rt, c(d))
    }

    function u(d) {
        return d === 88 || d === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(d), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, s = T4, c) : (e.enter("characterReferenceValue"), o = 7, s = rh, c(d))
    }

    function c(d) {
        if (d === 59 && i) {
            const h = e.exit("characterReferenceValue");
            return s === Rt && !fm(r.sliceSerialize(h)) ? n(d) : (e.enter("characterReferenceMarker"), e.consume(d), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)
        }
        return s(d) && i++ < o ? (e.consume(d), c) : n(d)
    }
}
const o0 = {
        partial: !0,
        tokenize: K4
    },
    s0 = {
        concrete: !0,
        name: "codeFenced",
        tokenize: W4
    };

function W4(e, t, n) {
    const r = this,
        i = {
            partial: !0,
            tokenize: E
        };
    let o = 0,
        s = 0,
        a;
    return l;

    function l(C) {
        return u(C)
    }

    function u(C) {
        const P = r.events[r.events.length - 1];
        return o = P && P[1].type === "linePrefix" ? P[2].sliceSerialize(P[1], !0).length : 0, a = C, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c(C)
    }

    function c(C) {
        return C === a ? (s++, e.consume(C), c) : s < 3 ? n(C) : (e.exit("codeFencedFenceSequence"), fe(C) ? ve(e, d, "whitespace")(C) : d(C))
    }

    function d(C) {
        return C === null || X(C) ? (e.exit("codeFencedFence"), r.interrupt ? t(C) : e.check(o0, m, k)(C)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
            contentType: "string"
        }), h(C))
    }

    function h(C) {
        return C === null || X(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(C)) : fe(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ve(e, f, "whitespace")(C)) : C === 96 && C === a ? n(C) : (e.consume(C), h)
    }

    function f(C) {
        return C === null || X(C) ? d(C) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
            contentType: "string"
        }), g(C))
    }

    function g(C) {
        return C === null || X(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(C)) : C === 96 && C === a ? n(C) : (e.consume(C), g)
    }

    function m(C) {
        return e.attempt(i, k, x)(C)
    }

    function x(C) {
        return e.enter("lineEnding"), e.consume(C), e.exit("lineEnding"), p
    }

    function p(C) {
        return o > 0 && fe(C) ? ve(e, y, "linePrefix", o + 1)(C) : y(C)
    }

    function y(C) {
        return C === null || X(C) ? e.check(o0, m, k)(C) : (e.enter("codeFlowValue"), v(C))
    }

    function v(C) {
        return C === null || X(C) ? (e.exit("codeFlowValue"), y(C)) : (e.consume(C), v)
    }

    function k(C) {
        return e.exit("codeFenced"), t(C)
    }

    function E(C, P, A) {
        let N = 0;
        return D;

        function D(U) {
            return C.enter("lineEnding"), C.consume(U), C.exit("lineEnding"), _
        }

        function _(U) {
            return C.enter("codeFencedFence"), fe(U) ? ve(C, I, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(U) : I(U)
        }

        function I(U) {
            return U === a ? (C.enter("codeFencedFenceSequence"), W(U)) : A(U)
        }

        function W(U) {
            return U === a ? (N++, C.consume(U), W) : N >= s ? (C.exit("codeFencedFenceSequence"), fe(U) ? ve(C, F, "whitespace")(U) : F(U)) : A(U)
        }

        function F(U) {
            return U === null || X(U) ? (C.exit("codeFencedFence"), P(U)) : A(U)
        }
    }
}

function K4(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return s === null ? n(s) : (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), o)
    }

    function o(s) {
        return r.parser.lazy[r.now().line] ? n(s) : t(s)
    }
}
const ld = {
        name: "codeIndented",
        tokenize: q4
    },
    G4 = {
        partial: !0,
        tokenize: Q4
    };

function q4(e, t, n) {
    const r = this;
    return i;

    function i(u) {
        return e.enter("codeIndented"), ve(e, o, "linePrefix", 5)(u)
    }

    function o(u) {
        const c = r.events[r.events.length - 1];
        return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? s(u) : n(u)
    }

    function s(u) {
        return u === null ? l(u) : X(u) ? e.attempt(G4, s, l)(u) : (e.enter("codeFlowValue"), a(u))
    }

    function a(u) {
        return u === null || X(u) ? (e.exit("codeFlowValue"), s(u)) : (e.consume(u), a)
    }

    function l(u) {
        return e.exit("codeIndented"), t(u)
    }
}

function Q4(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return r.parser.lazy[r.now().line] ? n(s) : X(s) ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), i) : ve(e, o, "linePrefix", 5)(s)
    }

    function o(s) {
        const a = r.events[r.events.length - 1];
        return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(s) : X(s) ? i(s) : n(s)
    }
}
const Y4 = {
    name: "codeText",
    previous: Z4,
    resolve: X4,
    tokenize: J4
};

function X4(e) {
    let t = e.length - 4,
        n = 3,
        r, i;
    if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
        for (r = n; ++r < t;)
            if (e[r][1].type === "codeTextData") {
                e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
                break
            }
    }
    for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
    return e
}

function Z4(e) {
    return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape"
}

function J4(e, t, n) {
    let r = 0,
        i, o;
    return s;

    function s(d) {
        return e.enter("codeText"), e.enter("codeTextSequence"), a(d)
    }

    function a(d) {
        return d === 96 ? (e.consume(d), r++, a) : (e.exit("codeTextSequence"), l(d))
    }

    function l(d) {
        return d === null ? n(d) : d === 32 ? (e.enter("space"), e.consume(d), e.exit("space"), l) : d === 96 ? (o = e.enter("codeTextSequence"), i = 0, c(d)) : X(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), l) : (e.enter("codeTextData"), u(d))
    }

    function u(d) {
        return d === null || d === 32 || d === 96 || X(d) ? (e.exit("codeTextData"), l(d)) : (e.consume(d), u)
    }

    function c(d) {
        return d === 96 ? (e.consume(d), i++, c) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(d)) : (o.type = "codeTextData", u(d))
    }
}
class e3 {
    constructor(t) {
        this.left = t ? [...t] : [], this.right = []
    }
    get(t) {
        if (t < 0 || t >= this.left.length + this.right.length) throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
        return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1]
    }
    get length() {
        return this.left.length + this.right.length
    }
    shift() {
        return this.setCursor(0), this.right.pop()
    }
    slice(t, n) {
        const r = n ? ? Number.POSITIVE_INFINITY;
        return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse())
    }
    splice(t, n, r) {
        const i = n || 0;
        this.setCursor(Math.trunc(t));
        const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
        return r && cs(this.left, r), o.reverse()
    }
    pop() {
        return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop()
    }
    push(t) {
        this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t)
    }
    pushMany(t) {
        this.setCursor(Number.POSITIVE_INFINITY), cs(this.left, t)
    }
    unshift(t) {
        this.setCursor(0), this.right.push(t)
    }
    unshiftMany(t) {
        this.setCursor(0), cs(this.right, t.reverse())
    }
    setCursor(t) {
        if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
            if (t < this.left.length) {
                const n = this.left.splice(t, Number.POSITIVE_INFINITY);
                cs(this.right, n.reverse())
            } else {
                const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
                cs(this.left, n.reverse())
            }
    }
}

function cs(e, t) {
    let n = 0;
    if (t.length < 1e4) e.push(...t);
    else
        for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4
}

function Uk(e) {
    const t = {};
    let n = -1,
        r, i, o, s, a, l, u;
    const c = new e3(e);
    for (; ++n < c.length;) {
        for (; n in t;) n = t[n];
        if (r = c.get(n), n && r[1].type === "chunkFlow" && c.get(n - 1)[1].type === "listItemPrefix" && (l = r[1]._tokenizer.events, o = 0, o < l.length && l[o][1].type === "lineEndingBlank" && (o += 2), o < l.length && l[o][1].type === "content"))
            for (; ++o < l.length && l[o][1].type !== "content";) l[o][1].type === "chunkText" && (l[o][1]._isInFirstContentOfListItem = !0, o++);
        if (r[0] === "enter") r[1].contentType && (Object.assign(t, t3(c, n)), n = t[n], u = !0);
        else if (r[1]._container) {
            for (o = n, i = void 0; o--;)
                if (s = c.get(o), s[1].type === "lineEnding" || s[1].type === "lineEndingBlank") s[0] === "enter" && (i && (c.get(i)[1].type = "lineEndingBlank"), s[1].type = "lineEnding", i = o);
                else if (!(s[1].type === "linePrefix" || s[1].type === "listItemIndent")) break;
            i && (r[1].end = { ...c.get(i)[1].start
            }, a = c.slice(i, n), a.unshift(r), c.splice(i, n - i + 1, a))
        }
    }
    return On(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !u
}

function t3(e, t) {
    const n = e.get(t)[1],
        r = e.get(t)[2];
    let i = t - 1;
    const o = [];
    let s = n._tokenizer;
    s || (s = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (s._contentTypeTextTrailing = !0));
    const a = s.events,
        l = [],
        u = {};
    let c, d, h = -1,
        f = n,
        g = 0,
        m = 0;
    const x = [m];
    for (; f;) {
        for (; e.get(++i)[1] !== f;);
        o.push(i), f._tokenizer || (c = r.sliceStream(f), f.next || c.push(null), d && s.defineSkip(f.start), f._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = !0), s.write(c), f._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = void 0)), d = f, f = f.next
    }
    for (f = n; ++h < a.length;) a[h][0] === "exit" && a[h - 1][0] === "enter" && a[h][1].type === a[h - 1][1].type && a[h][1].start.line !== a[h][1].end.line && (m = h + 1, x.push(m), f._tokenizer = void 0, f.previous = void 0, f = f.next);
    for (s.events = [], f ? (f._tokenizer = void 0, f.previous = void 0) : x.pop(), h = x.length; h--;) {
        const p = a.slice(x[h], x[h + 1]),
            y = o.pop();
        l.push([y, y + p.length - 1]), e.splice(y, 2, p)
    }
    for (l.reverse(), h = -1; ++h < l.length;) u[g + l[h][0]] = g + l[h][1], g += l[h][1] - l[h][0] - 1;
    return u
}
const n3 = {
        resolve: i3,
        tokenize: o3
    },
    r3 = {
        partial: !0,
        tokenize: s3
    };

function i3(e) {
    return Uk(e), e
}

function o3(e, t) {
    let n;
    return r;

    function r(a) {
        return e.enter("content"), n = e.enter("chunkContent", {
            contentType: "content"
        }), i(a)
    }

    function i(a) {
        return a === null ? o(a) : X(a) ? e.check(r3, s, o)(a) : (e.consume(a), i)
    }

    function o(a) {
        return e.exit("chunkContent"), e.exit("content"), t(a)
    }

    function s(a) {
        return e.consume(a), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
            contentType: "content",
            previous: n
        }), n = n.next, i
    }
}

function s3(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), ve(e, o, "linePrefix")
    }

    function o(s) {
        if (s === null || X(s)) return n(s);
        const a = r.events[r.events.length - 1];
        return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(s) : e.interrupt(r.parser.constructs.flow, n, t)(s)
    }
}

function Hk(e, t, n, r, i, o, s, a, l) {
    const u = l || Number.POSITIVE_INFINITY;
    let c = 0;
    return d;

    function d(p) {
        return p === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(p), e.exit(o), h) : p === null || p === 32 || p === 41 || nh(p) ? n(p) : (e.enter(r), e.enter(s), e.enter(a), e.enter("chunkString", {
            contentType: "string"
        }), m(p))
    }

    function h(p) {
        return p === 62 ? (e.enter(o), e.consume(p), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
            contentType: "string"
        }), f(p))
    }

    function f(p) {
        return p === 62 ? (e.exit("chunkString"), e.exit(a), h(p)) : p === null || p === 60 || X(p) ? n(p) : (e.consume(p), p === 92 ? g : f)
    }

    function g(p) {
        return p === 60 || p === 62 || p === 92 ? (e.consume(p), f) : f(p)
    }

    function m(p) {
        return !c && (p === null || p === 41 || xt(p)) ? (e.exit("chunkString"), e.exit(a), e.exit(s), e.exit(r), t(p)) : c < u && p === 40 ? (e.consume(p), c++, m) : p === 41 ? (e.consume(p), c--, m) : p === null || p === 32 || p === 40 || nh(p) ? n(p) : (e.consume(p), p === 92 ? x : m)
    }

    function x(p) {
        return p === 40 || p === 41 || p === 92 ? (e.consume(p), m) : m(p)
    }
}

function Wk(e, t, n, r, i, o) {
    const s = this;
    let a = 0,
        l;
    return u;

    function u(f) {
        return e.enter(r), e.enter(i), e.consume(f), e.exit(i), e.enter(o), c
    }

    function c(f) {
        return a > 999 || f === null || f === 91 || f === 93 && !l || f === 94 && !a && "_hiddenFootnoteSupport" in s.parser.constructs ? n(f) : f === 93 ? (e.exit(o), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : X(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), c) : (e.enter("chunkString", {
            contentType: "string"
        }), d(f))
    }

    function d(f) {
        return f === null || f === 91 || f === 93 || X(f) || a++ > 999 ? (e.exit("chunkString"), c(f)) : (e.consume(f), l || (l = !fe(f)), f === 92 ? h : d)
    }

    function h(f) {
        return f === 91 || f === 92 || f === 93 ? (e.consume(f), a++, d) : d(f)
    }
}

function Kk(e, t, n, r, i, o) {
    let s;
    return a;

    function a(h) {
        return h === 34 || h === 39 || h === 40 ? (e.enter(r), e.enter(i), e.consume(h), e.exit(i), s = h === 40 ? 41 : h, l) : n(h)
    }

    function l(h) {
        return h === s ? (e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : (e.enter(o), u(h))
    }

    function u(h) {
        return h === s ? (e.exit(o), l(s)) : h === null ? n(h) : X(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), ve(e, u, "linePrefix")) : (e.enter("chunkString", {
            contentType: "string"
        }), c(h))
    }

    function c(h) {
        return h === s || h === null || X(h) ? (e.exit("chunkString"), u(h)) : (e.consume(h), h === 92 ? d : c)
    }

    function d(h) {
        return h === s || h === 92 ? (e.consume(h), c) : c(h)
    }
}

function Ds(e, t) {
    let n;
    return r;

    function r(i) {
        return X(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : fe(i) ? ve(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i)
    }
}
const a3 = {
        name: "definition",
        tokenize: u3
    },
    l3 = {
        partial: !0,
        tokenize: c3
    };

function u3(e, t, n) {
    const r = this;
    let i;
    return o;

    function o(f) {
        return e.enter("definition"), s(f)
    }

    function s(f) {
        return Wk.call(r, e, a, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(f)
    }

    function a(f) {
        return i = go(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), f === 58 ? (e.enter("definitionMarker"), e.consume(f), e.exit("definitionMarker"), l) : n(f)
    }

    function l(f) {
        return xt(f) ? Ds(e, u)(f) : u(f)
    }

    function u(f) {
        return Hk(e, c, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(f)
    }

    function c(f) {
        return e.attempt(l3, d, d)(f)
    }

    function d(f) {
        return fe(f) ? ve(e, h, "whitespace")(f) : h(f)
    }

    function h(f) {
        return f === null || X(f) ? (e.exit("definition"), r.parser.defined.push(i), t(f)) : n(f)
    }
}

function c3(e, t, n) {
    return r;

    function r(a) {
        return xt(a) ? Ds(e, i)(a) : n(a)
    }

    function i(a) {
        return Kk(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a)
    }

    function o(a) {
        return fe(a) ? ve(e, s, "whitespace")(a) : s(a)
    }

    function s(a) {
        return a === null || X(a) ? t(a) : n(a)
    }
}
const d3 = {
    name: "hardBreakEscape",
    tokenize: f3
};

function f3(e, t, n) {
    return r;

    function r(o) {
        return e.enter("hardBreakEscape"), e.consume(o), i
    }

    function i(o) {
        return X(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o)
    }
}
const h3 = {
    name: "headingAtx",
    resolve: p3,
    tokenize: m3
};

function p3(e, t) {
    let n = e.length - 2,
        r = 3,
        i, o;
    return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
        type: "atxHeadingText",
        start: e[r][1].start,
        end: e[n][1].end
    }, o = {
        type: "chunkText",
        start: e[r][1].start,
        end: e[n][1].end,
        contentType: "text"
    }, On(e, r, n - r + 1, [
        ["enter", i, t],
        ["enter", o, t],
        ["exit", o, t],
        ["exit", i, t]
    ])), e
}

function m3(e, t, n) {
    let r = 0;
    return i;

    function i(c) {
        return e.enter("atxHeading"), o(c)
    }

    function o(c) {
        return e.enter("atxHeadingSequence"), s(c)
    }

    function s(c) {
        return c === 35 && r++ < 6 ? (e.consume(c), s) : c === null || xt(c) ? (e.exit("atxHeadingSequence"), a(c)) : n(c)
    }

    function a(c) {
        return c === 35 ? (e.enter("atxHeadingSequence"), l(c)) : c === null || X(c) ? (e.exit("atxHeading"), t(c)) : fe(c) ? ve(e, a, "whitespace")(c) : (e.enter("atxHeadingText"), u(c))
    }

    function l(c) {
        return c === 35 ? (e.consume(c), l) : (e.exit("atxHeadingSequence"), a(c))
    }

    function u(c) {
        return c === null || c === 35 || xt(c) ? (e.exit("atxHeadingText"), a(c)) : (e.consume(c), u)
    }
}
const g3 = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
    a0 = ["pre", "script", "style", "textarea"],
    y3 = {
        concrete: !0,
        name: "htmlFlow",
        resolveTo: w3,
        tokenize: S3
    },
    v3 = {
        partial: !0,
        tokenize: k3
    },
    x3 = {
        partial: !0,
        tokenize: b3
    };

function w3(e) {
    let t = e.length;
    for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
    return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e
}

function S3(e, t, n) {
    const r = this;
    let i, o, s, a, l;
    return u;

    function u(T) {
        return c(T)
    }

    function c(T) {
        return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(T), d
    }

    function d(T) {
        return T === 33 ? (e.consume(T), h) : T === 47 ? (e.consume(T), o = !0, m) : T === 63 ? (e.consume(T), i = 3, r.interrupt ? t : b) : En(T) ? (e.consume(T), s = String.fromCharCode(T), x) : n(T)
    }

    function h(T) {
        return T === 45 ? (e.consume(T), i = 2, f) : T === 91 ? (e.consume(T), i = 5, a = 0, g) : En(T) ? (e.consume(T), i = 4, r.interrupt ? t : b) : n(T)
    }

    function f(T) {
        return T === 45 ? (e.consume(T), r.interrupt ? t : b) : n(T)
    }

    function g(T) {
        const Y = "CDATA[";
        return T === Y.charCodeAt(a++) ? (e.consume(T), a === Y.length ? r.interrupt ? t : I : g) : n(T)
    }

    function m(T) {
        return En(T) ? (e.consume(T), s = String.fromCharCode(T), x) : n(T)
    }

    function x(T) {
        if (T === null || T === 47 || T === 62 || xt(T)) {
            const Y = T === 47,
                pe = s.toLowerCase();
            return !Y && !o && a0.includes(pe) ? (i = 1, r.interrupt ? t(T) : I(T)) : g3.includes(s.toLowerCase()) ? (i = 6, Y ? (e.consume(T), p) : r.interrupt ? t(T) : I(T)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(T) : o ? y(T) : v(T))
        }
        return T === 45 || Rt(T) ? (e.consume(T), s += String.fromCharCode(T), x) : n(T)
    }

    function p(T) {
        return T === 62 ? (e.consume(T), r.interrupt ? t : I) : n(T)
    }

    function y(T) {
        return fe(T) ? (e.consume(T), y) : D(T)
    }

    function v(T) {
        return T === 47 ? (e.consume(T), D) : T === 58 || T === 95 || En(T) ? (e.consume(T), k) : fe(T) ? (e.consume(T), v) : D(T)
    }

    function k(T) {
        return T === 45 || T === 46 || T === 58 || T === 95 || Rt(T) ? (e.consume(T), k) : E(T)
    }

    function E(T) {
        return T === 61 ? (e.consume(T), C) : fe(T) ? (e.consume(T), E) : v(T)
    }

    function C(T) {
        return T === null || T === 60 || T === 61 || T === 62 || T === 96 ? n(T) : T === 34 || T === 39 ? (e.consume(T), l = T, P) : fe(T) ? (e.consume(T), C) : A(T)
    }

    function P(T) {
        return T === l ? (e.consume(T), l = null, N) : T === null || X(T) ? n(T) : (e.consume(T), P)
    }

    function A(T) {
        return T === null || T === 34 || T === 39 || T === 47 || T === 60 || T === 61 || T === 62 || T === 96 || xt(T) ? E(T) : (e.consume(T), A)
    }

    function N(T) {
        return T === 47 || T === 62 || fe(T) ? v(T) : n(T)
    }

    function D(T) {
        return T === 62 ? (e.consume(T), _) : n(T)
    }

    function _(T) {
        return T === null || X(T) ? I(T) : fe(T) ? (e.consume(T), _) : n(T)
    }

    function I(T) {
        return T === 45 && i === 2 ? (e.consume(T), K) : T === 60 && i === 1 ? (e.consume(T), $) : T === 62 && i === 4 ? (e.consume(T), q) : T === 63 && i === 3 ? (e.consume(T), b) : T === 93 && i === 5 ? (e.consume(T), O) : X(T) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(v3, G, W)(T)) : T === null || X(T) ? (e.exit("htmlFlowData"), W(T)) : (e.consume(T), I)
    }

    function W(T) {
        return e.check(x3, F, G)(T)
    }

    function F(T) {
        return e.enter("lineEnding"), e.consume(T), e.exit("lineEnding"), U
    }

    function U(T) {
        return T === null || X(T) ? W(T) : (e.enter("htmlFlowData"), I(T))
    }

    function K(T) {
        return T === 45 ? (e.consume(T), b) : I(T)
    }

    function $(T) {
        return T === 47 ? (e.consume(T), s = "", R) : I(T)
    }

    function R(T) {
        if (T === 62) {
            const Y = s.toLowerCase();
            return a0.includes(Y) ? (e.consume(T), q) : I(T)
        }
        return En(T) && s.length < 8 ? (e.consume(T), s += String.fromCharCode(T), R) : I(T)
    }

    function O(T) {
        return T === 93 ? (e.consume(T), b) : I(T)
    }

    function b(T) {
        return T === 62 ? (e.consume(T), q) : T === 45 && i === 2 ? (e.consume(T), b) : I(T)
    }

    function q(T) {
        return T === null || X(T) ? (e.exit("htmlFlowData"), G(T)) : (e.consume(T), q)
    }

    function G(T) {
        return e.exit("htmlFlow"), t(T)
    }
}

function b3(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return X(s) ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), o) : n(s)
    }

    function o(s) {
        return r.parser.lazy[r.now().line] ? n(s) : t(s)
    }
}

function k3(e, t, n) {
    return r;

    function r(i) {
        return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(nc, t, n)
    }
}
const C3 = {
    name: "htmlText",
    tokenize: E3
};

function E3(e, t, n) {
    const r = this;
    let i, o, s;
    return a;

    function a(b) {
        return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(b), l
    }

    function l(b) {
        return b === 33 ? (e.consume(b), u) : b === 47 ? (e.consume(b), E) : b === 63 ? (e.consume(b), v) : En(b) ? (e.consume(b), A) : n(b)
    }

    function u(b) {
        return b === 45 ? (e.consume(b), c) : b === 91 ? (e.consume(b), o = 0, g) : En(b) ? (e.consume(b), y) : n(b)
    }

    function c(b) {
        return b === 45 ? (e.consume(b), f) : n(b)
    }

    function d(b) {
        return b === null ? n(b) : b === 45 ? (e.consume(b), h) : X(b) ? (s = d, $(b)) : (e.consume(b), d)
    }

    function h(b) {
        return b === 45 ? (e.consume(b), f) : d(b)
    }

    function f(b) {
        return b === 62 ? K(b) : b === 45 ? h(b) : d(b)
    }

    function g(b) {
        const q = "CDATA[";
        return b === q.charCodeAt(o++) ? (e.consume(b), o === q.length ? m : g) : n(b)
    }

    function m(b) {
        return b === null ? n(b) : b === 93 ? (e.consume(b), x) : X(b) ? (s = m, $(b)) : (e.consume(b), m)
    }

    function x(b) {
        return b === 93 ? (e.consume(b), p) : m(b)
    }

    function p(b) {
        return b === 62 ? K(b) : b === 93 ? (e.consume(b), p) : m(b)
    }

    function y(b) {
        return b === null || b === 62 ? K(b) : X(b) ? (s = y, $(b)) : (e.consume(b), y)
    }

    function v(b) {
        return b === null ? n(b) : b === 63 ? (e.consume(b), k) : X(b) ? (s = v, $(b)) : (e.consume(b), v)
    }

    function k(b) {
        return b === 62 ? K(b) : v(b)
    }

    function E(b) {
        return En(b) ? (e.consume(b), C) : n(b)
    }

    function C(b) {
        return b === 45 || Rt(b) ? (e.consume(b), C) : P(b)
    }

    function P(b) {
        return X(b) ? (s = P, $(b)) : fe(b) ? (e.consume(b), P) : K(b)
    }

    function A(b) {
        return b === 45 || Rt(b) ? (e.consume(b), A) : b === 47 || b === 62 || xt(b) ? N(b) : n(b)
    }

    function N(b) {
        return b === 47 ? (e.consume(b), K) : b === 58 || b === 95 || En(b) ? (e.consume(b), D) : X(b) ? (s = N, $(b)) : fe(b) ? (e.consume(b), N) : K(b)
    }

    function D(b) {
        return b === 45 || b === 46 || b === 58 || b === 95 || Rt(b) ? (e.consume(b), D) : _(b)
    }

    function _(b) {
        return b === 61 ? (e.consume(b), I) : X(b) ? (s = _, $(b)) : fe(b) ? (e.consume(b), _) : N(b)
    }

    function I(b) {
        return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? n(b) : b === 34 || b === 39 ? (e.consume(b), i = b, W) : X(b) ? (s = I, $(b)) : fe(b) ? (e.consume(b), I) : (e.consume(b), F)
    }

    function W(b) {
        return b === i ? (e.consume(b), i = void 0, U) : b === null ? n(b) : X(b) ? (s = W, $(b)) : (e.consume(b), W)
    }

    function F(b) {
        return b === null || b === 34 || b === 39 || b === 60 || b === 61 || b === 96 ? n(b) : b === 47 || b === 62 || xt(b) ? N(b) : (e.consume(b), F)
    }

    function U(b) {
        return b === 47 || b === 62 || xt(b) ? N(b) : n(b)
    }

    function K(b) {
        return b === 62 ? (e.consume(b), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(b)
    }

    function $(b) {
        return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), R
    }

    function R(b) {
        return fe(b) ? ve(e, O, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(b) : O(b)
    }

    function O(b) {
        return e.enter("htmlTextData"), s(b)
    }
}
const pm = {
        name: "labelEnd",
        resolveAll: R3,
        resolveTo: M3,
        tokenize: N3
    },
    T3 = {
        tokenize: I3
    },
    P3 = {
        tokenize: O3
    },
    A3 = {
        tokenize: D3
    };

function R3(e) {
    let t = -1;
    const n = [];
    for (; ++t < e.length;) {
        const r = e[t][1];
        if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
            const i = r.type === "labelImage" ? 4 : 2;
            r.type = "data", t += i
        }
    }
    return e.length !== n.length && On(e, 0, e.length, n), e
}

function M3(e, t) {
    let n = e.length,
        r = 0,
        i, o, s, a;
    for (; n--;)
        if (i = e[n][1], o) {
            if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
            e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0)
        } else if (s) {
        if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = n, i.type !== "labelLink")) {
            r = 2;
            break
        }
    } else i.type === "labelEnd" && (s = n);
    const l = {
            type: e[o][1].type === "labelLink" ? "link" : "image",
            start: { ...e[o][1].start
            },
            end: { ...e[e.length - 1][1].end
            }
        },
        u = {
            type: "label",
            start: { ...e[o][1].start
            },
            end: { ...e[s][1].end
            }
        },
        c = {
            type: "labelText",
            start: { ...e[o + r + 2][1].end
            },
            end: { ...e[s - 2][1].start
            }
        };
    return a = [
        ["enter", l, t],
        ["enter", u, t]
    ], a = Ht(a, e.slice(o + 1, o + r + 3)), a = Ht(a, [
        ["enter", c, t]
    ]), a = Ht(a, hm(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, s - 3), t)), a = Ht(a, [
        ["exit", c, t], e[s - 2], e[s - 1],
        ["exit", u, t]
    ]), a = Ht(a, e.slice(s + 1)), a = Ht(a, [
        ["exit", l, t]
    ]), On(e, o, e.length, a), e
}

function N3(e, t, n) {
    const r = this;
    let i = r.events.length,
        o, s;
    for (; i--;)
        if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
            o = r.events[i][1];
            break
        }
    return a;

    function a(h) {
        return o ? o._inactive ? d(h) : (s = r.parser.defined.includes(go(r.sliceSerialize({
            start: o.end,
            end: r.now()
        }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(h), e.exit("labelMarker"), e.exit("labelEnd"), l) : n(h)
    }

    function l(h) {
        return h === 40 ? e.attempt(T3, c, s ? c : d)(h) : h === 91 ? e.attempt(P3, c, s ? u : d)(h) : s ? c(h) : d(h)
    }

    function u(h) {
        return e.attempt(A3, c, d)(h)
    }

    function c(h) {
        return t(h)
    }

    function d(h) {
        return o._balanced = !0, n(h)
    }
}

function I3(e, t, n) {
    return r;

    function r(d) {
        return e.enter("resource"), e.enter("resourceMarker"), e.consume(d), e.exit("resourceMarker"), i
    }

    function i(d) {
        return xt(d) ? Ds(e, o)(d) : o(d)
    }

    function o(d) {
        return d === 41 ? c(d) : Hk(e, s, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(d)
    }

    function s(d) {
        return xt(d) ? Ds(e, l)(d) : c(d)
    }

    function a(d) {
        return n(d)
    }

    function l(d) {
        return d === 34 || d === 39 || d === 40 ? Kk(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(d) : c(d)
    }

    function u(d) {
        return xt(d) ? Ds(e, c)(d) : c(d)
    }

    function c(d) {
        return d === 41 ? (e.enter("resourceMarker"), e.consume(d), e.exit("resourceMarker"), e.exit("resource"), t) : n(d)
    }
}

function O3(e, t, n) {
    const r = this;
    return i;

    function i(a) {
        return Wk.call(r, e, o, s, "reference", "referenceMarker", "referenceString")(a)
    }

    function o(a) {
        return r.parser.defined.includes(go(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a)
    }

    function s(a) {
        return n(a)
    }
}

function D3(e, t, n) {
    return r;

    function r(o) {
        return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i
    }

    function i(o) {
        return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o)
    }
}
const L3 = {
    name: "labelStartImage",
    resolveAll: pm.resolveAll,
    tokenize: j3
};

function j3(e, t, n) {
    const r = this;
    return i;

    function i(a) {
        return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), o
    }

    function o(a) {
        return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), s) : n(a)
    }

    function s(a) {
        return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a)
    }
}
const _3 = {
    name: "labelStartLink",
    resolveAll: pm.resolveAll,
    tokenize: F3
};

function F3(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return e.enter("labelLink"), e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelLink"), o
    }

    function o(s) {
        return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(s) : t(s)
    }
}
const ud = {
    name: "lineEnding",
    tokenize: z3
};

function z3(e, t) {
    return n;

    function n(r) {
        return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ve(e, t, "linePrefix")
    }
}
const Al = {
    name: "thematicBreak",
    tokenize: V3
};

function V3(e, t, n) {
    let r = 0,
        i;
    return o;

    function o(u) {
        return e.enter("thematicBreak"), s(u)
    }

    function s(u) {
        return i = u, a(u)
    }

    function a(u) {
        return u === i ? (e.enter("thematicBreakSequence"), l(u)) : r >= 3 && (u === null || X(u)) ? (e.exit("thematicBreak"), t(u)) : n(u)
    }

    function l(u) {
        return u === i ? (e.consume(u), r++, l) : (e.exit("thematicBreakSequence"), fe(u) ? ve(e, a, "whitespace")(u) : a(u))
    }
}
const ft = {
        continuation: {
            tokenize: H3
        },
        exit: K3,
        name: "list",
        tokenize: U3
    },
    B3 = {
        partial: !0,
        tokenize: G3
    },
    $3 = {
        partial: !0,
        tokenize: W3
    };

function U3(e, t, n) {
    const r = this,
        i = r.events[r.events.length - 1];
    let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0,
        s = 0;
    return a;

    function a(f) {
        const g = r.containerState.type || (f === 42 || f === 43 || f === 45 ? "listUnordered" : "listOrdered");
        if (g === "listUnordered" ? !r.containerState.marker || f === r.containerState.marker : rh(f)) {
            if (r.containerState.type || (r.containerState.type = g, e.enter(g, {
                    _container: !0
                })), g === "listUnordered") return e.enter("listItemPrefix"), f === 42 || f === 45 ? e.check(Al, n, u)(f) : u(f);
            if (!r.interrupt || f === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), l(f)
        }
        return n(f)
    }

    function l(f) {
        return rh(f) && ++s < 10 ? (e.consume(f), l) : (!r.interrupt || s < 2) && (r.containerState.marker ? f === r.containerState.marker : f === 41 || f === 46) ? (e.exit("listItemValue"), u(f)) : n(f)
    }

    function u(f) {
        return e.enter("listItemMarker"), e.consume(f), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || f, e.check(nc, r.interrupt ? n : c, e.attempt(B3, h, d))
    }

    function c(f) {
        return r.containerState.initialBlankLine = !0, o++, h(f)
    }

    function d(f) {
        return fe(f) ? (e.enter("listItemPrefixWhitespace"), e.consume(f), e.exit("listItemPrefixWhitespace"), h) : n(f)
    }

    function h(f) {
        return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(f)
    }
}

function H3(e, t, n) {
    const r = this;
    return r.containerState._closeFlow = void 0, e.check(nc, i, o);

    function i(a) {
        return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ve(e, t, "listItemIndent", r.containerState.size + 1)(a)
    }

    function o(a) {
        return r.containerState.furtherBlankLines || !fe(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, s(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt($3, t, s)(a))
    }

    function s(a) {
        return r.containerState._closeFlow = !0, r.interrupt = void 0, ve(e, e.attempt(ft, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a)
    }
}

function W3(e, t, n) {
    const r = this;
    return ve(e, i, "listItemIndent", r.containerState.size + 1);

    function i(o) {
        const s = r.events[r.events.length - 1];
        return s && s[1].type === "listItemIndent" && s[2].sliceSerialize(s[1], !0).length === r.containerState.size ? t(o) : n(o)
    }
}

function K3(e) {
    e.exit(this.containerState.type)
}

function G3(e, t, n) {
    const r = this;
    return ve(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);

    function i(o) {
        const s = r.events[r.events.length - 1];
        return !fe(o) && s && s[1].type === "listItemPrefixWhitespace" ? t(o) : n(o)
    }
}
const l0 = {
    name: "setextUnderline",
    resolveTo: q3,
    tokenize: Q3
};

function q3(e, t) {
    let n = e.length,
        r, i, o;
    for (; n--;)
        if (e[n][0] === "enter") {
            if (e[n][1].type === "content") {
                r = n;
                break
            }
            e[n][1].type === "paragraph" && (i = n)
        } else e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
    const s = {
        type: "setextHeading",
        start: { ...e[r][1].start
        },
        end: { ...e[e.length - 1][1].end
        }
    };
    return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", s, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = { ...e[o][1].end
    }) : e[r][1] = s, e.push(["exit", s, t]), e
}

function Q3(e, t, n) {
    const r = this;
    let i;
    return o;

    function o(u) {
        let c = r.events.length,
            d;
        for (; c--;)
            if (r.events[c][1].type !== "lineEnding" && r.events[c][1].type !== "linePrefix" && r.events[c][1].type !== "content") {
                d = r.events[c][1].type === "paragraph";
                break
            }
        return !r.parser.lazy[r.now().line] && (r.interrupt || d) ? (e.enter("setextHeadingLine"), i = u, s(u)) : n(u)
    }

    function s(u) {
        return e.enter("setextHeadingLineSequence"), a(u)
    }

    function a(u) {
        return u === i ? (e.consume(u), a) : (e.exit("setextHeadingLineSequence"), fe(u) ? ve(e, l, "lineSuffix")(u) : l(u))
    }

    function l(u) {
        return u === null || X(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u)
    }
}
const Y3 = {
    tokenize: X3
};

function X3(e) {
    const t = this,
        n = e.attempt(nc, r, e.attempt(this.parser.constructs.flowInitial, i, ve(e, e.attempt(this.parser.constructs.flow, i, e.attempt(n3, i)), "linePrefix")));
    return n;

    function r(o) {
        if (o === null) {
            e.consume(o);
            return
        }
        return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n
    }

    function i(o) {
        if (o === null) {
            e.consume(o);
            return
        }
        return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n
    }
}
const Z3 = {
        resolveAll: qk()
    },
    J3 = Gk("string"),
    eF = Gk("text");

function Gk(e) {
    return {
        resolveAll: qk(e === "text" ? tF : void 0),
        tokenize: t
    };

    function t(n) {
        const r = this,
            i = this.parser.constructs[e],
            o = n.attempt(i, s, a);
        return s;

        function s(c) {
            return u(c) ? o(c) : a(c)
        }

        function a(c) {
            if (c === null) {
                n.consume(c);
                return
            }
            return n.enter("data"), n.consume(c), l
        }

        function l(c) {
            return u(c) ? (n.exit("data"), o(c)) : (n.consume(c), l)
        }

        function u(c) {
            if (c === null) return !0;
            const d = i[c];
            let h = -1;
            if (d)
                for (; ++h < d.length;) {
                    const f = d[h];
                    if (!f.previous || f.previous.call(r, r.previous)) return !0
                }
            return !1
        }
    }
}

function qk(e) {
    return t;

    function t(n, r) {
        let i = -1,
            o;
        for (; ++i <= n.length;) o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
        return e ? e(n, r) : n
    }
}

function tF(e, t) {
    let n = 0;
    for (; ++n <= e.length;)
        if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
            const r = e[n - 1][1],
                i = t.sliceStream(r);
            let o = i.length,
                s = -1,
                a = 0,
                l;
            for (; o--;) {
                const u = i[o];
                if (typeof u == "string") {
                    for (s = u.length; u.charCodeAt(s - 1) === 32;) a++, s--;
                    if (s) break;
                    s = -1
                } else if (u === -2) l = !0, a++;
                else if (u !== -1) {
                    o++;
                    break
                }
            }
            if (t._contentTypeTextTrailing && n === e.length && (a = 0), a) {
                const u = {
                    type: n === e.length || l || a < 2 ? "lineSuffix" : "hardBreakTrailing",
                    start: {
                        _bufferIndex: o ? s : r.start._bufferIndex + s,
                        _index: r.start._index + o,
                        line: r.end.line,
                        column: r.end.column - a,
                        offset: r.end.offset - a
                    },
                    end: { ...r.end
                    }
                };
                r.end = { ...u.start
                }, r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(n, 0, ["enter", u, t], ["exit", u, t]), n += 2)
            }
            n++
        }
    return e
}
const nF = {
        42: ft,
        43: ft,
        45: ft,
        48: ft,
        49: ft,
        50: ft,
        51: ft,
        52: ft,
        53: ft,
        54: ft,
        55: ft,
        56: ft,
        57: ft,
        62: Vk
    },
    rF = {
        91: a3
    },
    iF = {
        [-2]: ld,
        [-1]: ld,
        32: ld
    },
    oF = {
        35: h3,
        42: Al,
        45: [l0, Al],
        60: y3,
        61: l0,
        95: Al,
        96: s0,
        126: s0
    },
    sF = {
        38: $k,
        92: Bk
    },
    aF = {
        [-5]: ud,
        [-4]: ud,
        [-3]: ud,
        33: L3,
        38: $k,
        42: ih,
        60: [_4, C3],
        91: _3,
        92: [d3, Bk],
        93: pm,
        95: ih,
        96: Y4
    },
    lF = {
        null: [ih, Z3]
    },
    uF = {
        null: [42, 95]
    },
    cF = {
        null: []
    },
    dF = Object.freeze(Object.defineProperty({
        __proto__: null,
        attentionMarkers: uF,
        contentInitial: rF,
        disable: cF,
        document: nF,
        flow: oF,
        flowInitial: iF,
        insideSpan: lF,
        string: sF,
        text: aF
    }, Symbol.toStringTag, {
        value: "Module"
    }));

function fF(e, t, n) {
    let r = {
        _bufferIndex: -1,
        _index: 0,
        line: n && n.line || 1,
        column: n && n.column || 1,
        offset: n && n.offset || 0
    };
    const i = {},
        o = [];
    let s = [],
        a = [];
    const l = {
            attempt: P(E),
            check: P(C),
            consume: y,
            enter: v,
            exit: k,
            interrupt: P(C, {
                interrupt: !0
            })
        },
        u = {
            code: null,
            containerState: {},
            defineSkip: m,
            events: [],
            now: g,
            parser: e,
            previous: null,
            sliceSerialize: h,
            sliceStream: f,
            write: d
        };
    let c = t.tokenize.call(u, l);
    return t.resolveAll && o.push(t), u;

    function d(_) {
        return s = Ht(s, _), x(), s[s.length - 1] !== null ? [] : (A(t, 0), u.events = hm(o, u.events, u), u.events)
    }

    function h(_, I) {
        return pF(f(_), I)
    }

    function f(_) {
        return hF(s, _)
    }

    function g() {
        const {
            _bufferIndex: _,
            _index: I,
            line: W,
            column: F,
            offset: U
        } = r;
        return {
            _bufferIndex: _,
            _index: I,
            line: W,
            column: F,
            offset: U
        }
    }

    function m(_) {
        i[_.line] = _.column, D()
    }

    function x() {
        let _;
        for (; r._index < s.length;) {
            const I = s[r._index];
            if (typeof I == "string")
                for (_ = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === _ && r._bufferIndex < I.length;) p(I.charCodeAt(r._bufferIndex));
            else p(I)
        }
    }

    function p(_) {
        c = c(_)
    }

    function y(_) {
        X(_) ? (r.line++, r.column = 1, r.offset += _ === -3 ? 2 : 1, D()) : _ !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === s[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = _
    }

    function v(_, I) {
        const W = I || {};
        return W.type = _, W.start = g(), u.events.push(["enter", W, u]), a.push(W), W
    }

    function k(_) {
        const I = a.pop();
        return I.end = g(), u.events.push(["exit", I, u]), I
    }

    function E(_, I) {
        A(_, I.from)
    }

    function C(_, I) {
        I.restore()
    }

    function P(_, I) {
        return W;

        function W(F, U, K) {
            let $, R, O, b;
            return Array.isArray(F) ? G(F) : "tokenize" in F ? G([F]) : q(F);

            function q(se) {
                return oe;

                function oe(nt) {
                    const rt = nt !== null && se[nt],
                        dt = nt !== null && se.null,
                        bt = [...Array.isArray(rt) ? rt : rt ? [rt] : [], ...Array.isArray(dt) ? dt : dt ? [dt] : []];
                    return G(bt)(nt)
                }
            }

            function G(se) {
                return $ = se, R = 0, se.length === 0 ? K : T(se[R])
            }

            function T(se) {
                return oe;

                function oe(nt) {
                    return b = N(), O = se, se.partial || (u.currentConstruct = se), se.name && u.parser.constructs.disable.null.includes(se.name) ? pe() : se.tokenize.call(I ? Object.assign(Object.create(u), I) : u, l, Y, pe)(nt)
                }
            }

            function Y(se) {
                return _(O, b), U
            }

            function pe(se) {
                return b.restore(), ++R < $.length ? T($[R]) : K
            }
        }
    }

    function A(_, I) {
        _.resolveAll && !o.includes(_) && o.push(_), _.resolve && On(u.events, I, u.events.length - I, _.resolve(u.events.slice(I), u)), _.resolveTo && (u.events = _.resolveTo(u.events, u))
    }

    function N() {
        const _ = g(),
            I = u.previous,
            W = u.currentConstruct,
            F = u.events.length,
            U = Array.from(a);
        return {
            from: F,
            restore: K
        };

        function K() {
            r = _, u.previous = I, u.currentConstruct = W, u.events.length = F, a = U, D()
        }
    }

    function D() {
        r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1)
    }
}

function hF(e, t) {
    const n = t.start._index,
        r = t.start._bufferIndex,
        i = t.end._index,
        o = t.end._bufferIndex;
    let s;
    if (n === i) s = [e[n].slice(r, o)];
    else {
        if (s = e.slice(n, i), r > -1) {
            const a = s[0];
            typeof a == "string" ? s[0] = a.slice(r) : s.shift()
        }
        o > 0 && s.push(e[i].slice(0, o))
    }
    return s
}

function pF(e, t) {
    let n = -1;
    const r = [];
    let i;
    for (; ++n < e.length;) {
        const o = e[n];
        let s;
        if (typeof o == "string") s = o;
        else switch (o) {
            case -5:
                {
                    s = "\r";
                    break
                }
            case -4:
                {
                    s = `
`;
                    break
                }
            case -3:
                {
                    s = `\r
`;
                    break
                }
            case -2:
                {
                    s = t ? " " : "	";
                    break
                }
            case -1:
                {
                    if (!t && i) continue;s = " ";
                    break
                }
            default:
                s = String.fromCharCode(o)
        }
        i = o === -2, r.push(s)
    }
    return r.join("")
}

function mF(e) {
    const r = {
        constructs: b4([dF, ...(e || {}).extensions || []]),
        content: i(M4),
        defined: [],
        document: i(I4),
        flow: i(Y3),
        lazy: {},
        string: i(J3),
        text: i(eF)
    };
    return r;

    function i(o) {
        return s;

        function s(a) {
            return fF(r, o, a)
        }
    }
}

function gF(e) {
    for (; !Uk(e););
    return e
}
const u0 = /[\0\t\n\r]/g;

function yF() {
    let e = 1,
        t = "",
        n = !0,
        r;
    return i;

    function i(o, s, a) {
        const l = [];
        let u, c, d, h, f;
        for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(s || void 0).decode(o)), d = 0, t = "", n && (o.charCodeAt(0) === 65279 && d++, n = void 0); d < o.length;) {
            if (u0.lastIndex = d, u = u0.exec(o), h = u && u.index !== void 0 ? u.index : o.length, f = o.charCodeAt(h), !u) {
                t = o.slice(d);
                break
            }
            if (f === 10 && d === h && r) l.push(-3), r = void 0;
            else switch (r && (l.push(-5), r = void 0), d < h && (l.push(o.slice(d, h)), e += h - d), f) {
                case 0:
                    {
                        l.push(65533),
                        e++;
                        break
                    }
                case 9:
                    {
                        for (c = Math.ceil(e / 4) * 4, l.push(-2); e++ < c;) l.push(-1);
                        break
                    }
                case 10:
                    {
                        l.push(-4),
                        e = 1;
                        break
                    }
                default:
                    r = !0, e = 1
            }
            d = h + 1
        }
        return a && (r && l.push(-5), t && l.push(t), l.push(null)), l
    }
}
const vF = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

function xF(e) {
    return e.replace(vF, wF)
}

function wF(e, t, n) {
    if (t) return t;
    if (n.charCodeAt(0) === 35) {
        const i = n.charCodeAt(1),
            o = i === 120 || i === 88;
        return zk(n.slice(o ? 2 : 1), o ? 16 : 10)
    }
    return fm(n) || e
}
const Qk = {}.hasOwnProperty;

function SF(e, t, n) {
    return t && typeof t == "object" && (n = t, t = void 0), bF(n)(gF(mF(n).document().write(yF()(e, t, !0))))
}

function bF(e) {
    const t = {
        transforms: [],
        canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
        enter: {
            autolink: o(Ln),
            autolinkProtocol: N,
            autolinkEmail: N,
            atxHeading: o(ji),
            blockQuote: o(dt),
            characterEscape: N,
            characterReference: N,
            codeFenced: o(bt),
            codeFencedFenceInfo: s,
            codeFencedFenceMeta: s,
            codeIndented: o(bt, s),
            codeText: o(rr, s),
            codeTextData: N,
            data: N,
            codeFlowValue: N,
            definition: o(gn),
            definitionDestinationString: s,
            definitionLabelString: s,
            definitionTitleString: s,
            emphasis: o(Li),
            hardBreakEscape: o(Yr),
            hardBreakTrailing: o(Yr),
            htmlFlow: o(_i, s),
            htmlFlowData: N,
            htmlText: o(_i, s),
            htmlTextData: N,
            image: o(Xr),
            label: s,
            link: o(Ln),
            listItem: o(Zr),
            listItemValue: h,
            listOrdered: o(Yo, d),
            listUnordered: o(Yo),
            paragraph: o(Ra),
            reference: T,
            referenceString: s,
            resourceDestinationString: s,
            resourceTitleString: s,
            setextHeading: o(ji),
            strong: o(jn),
            thematicBreak: o(sc)
        },
        exit: {
            atxHeading: l(),
            atxHeadingSequence: E,
            autolink: l(),
            autolinkEmail: rt,
            autolinkProtocol: nt,
            blockQuote: l(),
            characterEscapeValue: D,
            characterReferenceMarkerHexadecimal: pe,
            characterReferenceMarkerNumeric: pe,
            characterReferenceValue: se,
            characterReference: oe,
            codeFenced: l(x),
            codeFencedFence: m,
            codeFencedFenceInfo: f,
            codeFencedFenceMeta: g,
            codeFlowValue: D,
            codeIndented: l(p),
            codeText: l(U),
            codeTextData: D,
            data: D,
            definition: l(),
            definitionDestinationString: k,
            definitionLabelString: y,
            definitionTitleString: v,
            emphasis: l(),
            hardBreakEscape: l(I),
            hardBreakTrailing: l(I),
            htmlFlow: l(W),
            htmlFlowData: D,
            htmlText: l(F),
            htmlTextData: D,
            image: l($),
            label: O,
            labelText: R,
            lineEnding: _,
            link: l(K),
            listItem: l(),
            listOrdered: l(),
            listUnordered: l(),
            paragraph: l(),
            referenceString: Y,
            resourceDestinationString: b,
            resourceTitleString: q,
            resource: G,
            setextHeading: l(A),
            setextHeadingLineSequence: P,
            setextHeadingText: C,
            strong: l(),
            thematicBreak: l()
        }
    };
    Yk(t, (e || {}).mdastExtensions || []);
    const n = {};
    return r;

    function r(M) {
        let B = {
            type: "root",
            children: []
        };
        const Z = {
                stack: [B],
                tokenStack: [],
                config: t,
                enter: a,
                exit: u,
                buffer: s,
                resume: c,
                data: n
            },
            re = [];
        let ue = -1;
        for (; ++ue < M.length;)
            if (M[ue][1].type === "listOrdered" || M[ue][1].type === "listUnordered")
                if (M[ue][0] === "enter") re.push(ue);
                else {
                    const kt = re.pop();
                    ue = i(M, kt, ue)
                }
        for (ue = -1; ++ue < M.length;) {
            const kt = t[M[ue][0]];
            Qk.call(kt, M[ue][1].type) && kt[M[ue][1].type].call(Object.assign({
                sliceSerialize: M[ue][2].sliceSerialize
            }, Z), M[ue][1])
        }
        if (Z.tokenStack.length > 0) {
            const kt = Z.tokenStack[Z.tokenStack.length - 1];
            (kt[1] || c0).call(Z, void 0, kt[0])
        }
        for (B.position = {
                start: fr(M.length > 0 ? M[0][1].start : {
                    line: 1,
                    column: 1,
                    offset: 0
                }),
                end: fr(M.length > 0 ? M[M.length - 2][1].end : {
                    line: 1,
                    column: 1,
                    offset: 0
                })
            }, ue = -1; ++ue < t.transforms.length;) B = t.transforms[ue](B) || B;
        return B
    }

    function i(M, B, Z) {
        let re = B - 1,
            ue = -1,
            kt = !1,
            yn, Ct, _t, ir;
        for (; ++re <= Z;) {
            const De = M[re];
            switch (De[1].type) {
                case "listUnordered":
                case "listOrdered":
                case "blockQuote":
                    {
                        De[0] === "enter" ? ue++ : ue--,
                        ir = void 0;
                        break
                    }
                case "lineEndingBlank":
                    {
                        De[0] === "enter" && (yn && !ir && !ue && !_t && (_t = re), ir = void 0);
                        break
                    }
                case "linePrefix":
                case "listItemValue":
                case "listItemMarker":
                case "listItemPrefix":
                case "listItemPrefixWhitespace":
                    break;
                default:
                    ir = void 0
            }
            if (!ue && De[0] === "enter" && De[1].type === "listItemPrefix" || ue === -1 && De[0] === "exit" && (De[1].type === "listUnordered" || De[1].type === "listOrdered")) {
                if (yn) {
                    let or = re;
                    for (Ct = void 0; or--;) {
                        const Qt = M[or];
                        if (Qt[1].type === "lineEnding" || Qt[1].type === "lineEndingBlank") {
                            if (Qt[0] === "exit") continue;
                            Ct && (M[Ct][1].type = "lineEndingBlank", kt = !0), Qt[1].type = "lineEnding", Ct = or
                        } else if (!(Qt[1].type === "linePrefix" || Qt[1].type === "blockQuotePrefix" || Qt[1].type === "blockQuotePrefixWhitespace" || Qt[1].type === "blockQuoteMarker" || Qt[1].type === "listItemIndent")) break
                    }
                    _t && (!Ct || _t < Ct) && (yn._spread = !0), yn.end = Object.assign({}, Ct ? M[Ct][1].start : De[1].end), M.splice(Ct || re, 0, ["exit", yn, De[2]]), re++, Z++
                }
                if (De[1].type === "listItemPrefix") {
                    const or = {
                        type: "listItem",
                        _spread: !1,
                        start: Object.assign({}, De[1].start),
                        end: void 0
                    };
                    yn = or, M.splice(re, 0, ["enter", or, De[2]]), re++, Z++, _t = void 0, ir = !0
                }
            }
        }
        return M[B][1]._spread = kt, Z
    }

    function o(M, B) {
        return Z;

        function Z(re) {
            a.call(this, M(re), re), B && B.call(this, re)
        }
    }

    function s() {
        this.stack.push({
            type: "fragment",
            children: []
        })
    }

    function a(M, B, Z) {
        this.stack[this.stack.length - 1].children.push(M), this.stack.push(M), this.tokenStack.push([B, Z || void 0]), M.position = {
            start: fr(B.start),
            end: void 0
        }
    }

    function l(M) {
        return B;

        function B(Z) {
            M && M.call(this, Z), u.call(this, Z)
        }
    }

    function u(M, B) {
        const Z = this.stack.pop(),
            re = this.tokenStack.pop();
        if (re) re[0].type !== M.type && (B ? B.call(this, M, re[0]) : (re[1] || c0).call(this, M, re[0]));
        else throw new Error("Cannot close `" + M.type + "` (" + Os({
            start: M.start,
            end: M.end
        }) + "): it’s not open");
        Z.position.end = fr(M.end)
    }

    function c() {
        return w4(this.stack.pop())
    }

    function d() {
        this.data.expectingFirstListItemValue = !0
    }

    function h(M) {
        if (this.data.expectingFirstListItemValue) {
            const B = this.stack[this.stack.length - 2];
            B.start = Number.parseInt(this.sliceSerialize(M), 10), this.data.expectingFirstListItemValue = void 0
        }
    }

    function f() {
        const M = this.resume(),
            B = this.stack[this.stack.length - 1];
        B.lang = M
    }

    function g() {
        const M = this.resume(),
            B = this.stack[this.stack.length - 1];
        B.meta = M
    }

    function m() {
        this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0)
    }

    function x() {
        const M = this.resume(),
            B = this.stack[this.stack.length - 1];
        B.value = M.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0
    }

    function p() {
        const M = this.resume(),
            B = this.stack[this.stack.length - 1];
        B.value = M.replace(/(\r?\n|\r)$/g, "")
    }

    function y(M) {
        const B = this.resume(),
            Z = this.stack[this.stack.length - 1];
        Z.label = B, Z.identifier = go(this.sliceSerialize(M)).toLowerCase()
    }

    function v() {
        const M = this.resume(),
            B = this.stack[this.stack.length - 1];
        B.title = M
    }

    function k() {
        const M = this.resume(),
            B = this.stack[this.stack.length - 1];
        B.url = M
    }

    function E(M) {
        const B = this.stack[this.stack.length - 1];
        if (!B.depth) {
            const Z = this.sliceSerialize(M).length;
            B.depth = Z
        }
    }

    function C() {
        this.data.setextHeadingSlurpLineEnding = !0
    }

    function P(M) {
        const B = this.stack[this.stack.length - 1];
        B.depth = this.sliceSerialize(M).codePointAt(0) === 61 ? 1 : 2
    }

    function A() {
        this.data.setextHeadingSlurpLineEnding = void 0
    }

    function N(M) {
        const Z = this.stack[this.stack.length - 1].children;
        let re = Z[Z.length - 1];
        (!re || re.type !== "text") && (re = oc(), re.position = {
            start: fr(M.start),
            end: void 0
        }, Z.push(re)), this.stack.push(re)
    }

    function D(M) {
        const B = this.stack.pop();
        B.value += this.sliceSerialize(M), B.position.end = fr(M.end)
    }

    function _(M) {
        const B = this.stack[this.stack.length - 1];
        if (this.data.atHardBreak) {
            const Z = B.children[B.children.length - 1];
            Z.position.end = fr(M.end), this.data.atHardBreak = void 0;
            return
        }!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(B.type) && (N.call(this, M), D.call(this, M))
    }

    function I() {
        this.data.atHardBreak = !0
    }

    function W() {
        const M = this.resume(),
            B = this.stack[this.stack.length - 1];
        B.value = M
    }

    function F() {
        const M = this.resume(),
            B = this.stack[this.stack.length - 1];
        B.value = M
    }

    function U() {
        const M = this.resume(),
            B = this.stack[this.stack.length - 1];
        B.value = M
    }

    function K() {
        const M = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            const B = this.data.referenceType || "shortcut";
            M.type += "Reference", M.referenceType = B, delete M.url, delete M.title
        } else delete M.identifier, delete M.label;
        this.data.referenceType = void 0
    }

    function $() {
        const M = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            const B = this.data.referenceType || "shortcut";
            M.type += "Reference", M.referenceType = B, delete M.url, delete M.title
        } else delete M.identifier, delete M.label;
        this.data.referenceType = void 0
    }

    function R(M) {
        const B = this.sliceSerialize(M),
            Z = this.stack[this.stack.length - 2];
        Z.label = xF(B), Z.identifier = go(B).toLowerCase()
    }

    function O() {
        const M = this.stack[this.stack.length - 1],
            B = this.resume(),
            Z = this.stack[this.stack.length - 1];
        if (this.data.inReference = !0, Z.type === "link") {
            const re = M.children;
            Z.children = re
        } else Z.alt = B
    }

    function b() {
        const M = this.resume(),
            B = this.stack[this.stack.length - 1];
        B.url = M
    }

    function q() {
        const M = this.resume(),
            B = this.stack[this.stack.length - 1];
        B.title = M
    }

    function G() {
        this.data.inReference = void 0
    }

    function T() {
        this.data.referenceType = "collapsed"
    }

    function Y(M) {
        const B = this.resume(),
            Z = this.stack[this.stack.length - 1];
        Z.label = B, Z.identifier = go(this.sliceSerialize(M)).toLowerCase(), this.data.referenceType = "full"
    }

    function pe(M) {
        this.data.characterReferenceType = M.type
    }

    function se(M) {
        const B = this.sliceSerialize(M),
            Z = this.data.characterReferenceType;
        let re;
        Z ? (re = zk(B, Z === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : re = fm(B);
        const ue = this.stack[this.stack.length - 1];
        ue.value += re
    }

    function oe(M) {
        const B = this.stack.pop();
        B.position.end = fr(M.end)
    }

    function nt(M) {
        D.call(this, M);
        const B = this.stack[this.stack.length - 1];
        B.url = this.sliceSerialize(M)
    }

    function rt(M) {
        D.call(this, M);
        const B = this.stack[this.stack.length - 1];
        B.url = "mailto:" + this.sliceSerialize(M)
    }

    function dt() {
        return {
            type: "blockquote",
            children: []
        }
    }

    function bt() {
        return {
            type: "code",
            lang: null,
            meta: null,
            value: ""
        }
    }

    function rr() {
        return {
            type: "inlineCode",
            value: ""
        }
    }

    function gn() {
        return {
            type: "definition",
            identifier: "",
            label: null,
            title: null,
            url: ""
        }
    }

    function Li() {
        return {
            type: "emphasis",
            children: []
        }
    }

    function ji() {
        return {
            type: "heading",
            depth: 0,
            children: []
        }
    }

    function Yr() {
        return {
            type: "break"
        }
    }

    function _i() {
        return {
            type: "html",
            value: ""
        }
    }

    function Xr() {
        return {
            type: "image",
            title: null,
            url: "",
            alt: null
        }
    }

    function Ln() {
        return {
            type: "link",
            title: null,
            url: "",
            children: []
        }
    }

    function Yo(M) {
        return {
            type: "list",
            ordered: M.type === "listOrdered",
            start: null,
            spread: M._spread,
            children: []
        }
    }

    function Zr(M) {
        return {
            type: "listItem",
            spread: M._spread,
            checked: null,
            children: []
        }
    }

    function Ra() {
        return {
            type: "paragraph",
            children: []
        }
    }

    function jn() {
        return {
            type: "strong",
            children: []
        }
    }

    function oc() {
        return {
            type: "text",
            value: ""
        }
    }

    function sc() {
        return {
            type: "thematicBreak"
        }
    }
}

function fr(e) {
    return {
        line: e.line,
        column: e.column,
        offset: e.offset
    }
}

function Yk(e, t) {
    let n = -1;
    for (; ++n < t.length;) {
        const r = t[n];
        Array.isArray(r) ? Yk(e, r) : kF(e, r)
    }
}

function kF(e, t) {
    let n;
    for (n in t)
        if (Qk.call(t, n)) switch (n) {
            case "canContainEols":
                {
                    const r = t[n];r && e[n].push(...r);
                    break
                }
            case "transforms":
                {
                    const r = t[n];r && e[n].push(...r);
                    break
                }
            case "enter":
            case "exit":
                {
                    const r = t[n];r && Object.assign(e[n], r);
                    break
                }
        }
}

function c0(e, t) {
    throw e ? new Error("Cannot close `" + e.type + "` (" + Os({
        start: e.start,
        end: e.end
    }) + "): a different token (`" + t.type + "`, " + Os({
        start: t.start,
        end: t.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + Os({
        start: t.start,
        end: t.end
    }) + ") is still open")
}

function CF(e) {
    const t = this;
    t.parser = n;

    function n(r) {
        return SF(r, { ...t.data("settings"),
            ...e,
            extensions: t.data("micromarkExtensions") || [],
            mdastExtensions: t.data("fromMarkdownExtensions") || []
        })
    }
}

function EF(e, t) {
    const n = {
        type: "element",
        tagName: "blockquote",
        properties: {},
        children: e.wrap(e.all(t), !0)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function TF(e, t) {
    const n = {
        type: "element",
        tagName: "br",
        properties: {},
        children: []
    };
    return e.patch(t, n), [e.applyData(t, n), {
        type: "text",
        value: `
`
    }]
}

function PF(e, t) {
    const n = t.value ? t.value + `
` : "",
        r = {},
        i = t.lang ? t.lang.split(/\s+/) : [];
    i.length > 0 && (r.className = ["language-" + i[0]]);
    let o = {
        type: "element",
        tagName: "code",
        properties: r,
        children: [{
            type: "text",
            value: n
        }]
    };
    return t.meta && (o.data = {
        meta: t.meta
    }), e.patch(t, o), o = e.applyData(t, o), o = {
        type: "element",
        tagName: "pre",
        properties: {},
        children: [o]
    }, e.patch(t, o), o
}

function AF(e, t) {
    const n = {
        type: "element",
        tagName: "del",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function RF(e, t) {
    const n = {
        type: "element",
        tagName: "em",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function MF(e, t) {
    const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-",
        r = String(t.identifier).toUpperCase(),
        i = Qo(r.toLowerCase()),
        o = e.footnoteOrder.indexOf(r);
    let s, a = e.footnoteCounts.get(r);
    a === void 0 ? (a = 0, e.footnoteOrder.push(r), s = e.footnoteOrder.length) : s = o + 1, a += 1, e.footnoteCounts.set(r, a);
    const l = {
        type: "element",
        tagName: "a",
        properties: {
            href: "#" + n + "fn-" + i,
            id: n + "fnref-" + i + (a > 1 ? "-" + a : ""),
            dataFootnoteRef: !0,
            ariaDescribedBy: ["footnote-label"]
        },
        children: [{
            type: "text",
            value: String(s)
        }]
    };
    e.patch(t, l);
    const u = {
        type: "element",
        tagName: "sup",
        properties: {},
        children: [l]
    };
    return e.patch(t, u), e.applyData(t, u)
}

function NF(e, t) {
    const n = {
        type: "element",
        tagName: "h" + t.depth,
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function IF(e, t) {
    if (e.options.allowDangerousHtml) {
        const n = {
            type: "raw",
            value: t.value
        };
        return e.patch(t, n), e.applyData(t, n)
    }
}

function Xk(e, t) {
    const n = t.referenceType;
    let r = "]";
    if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [{
        type: "text",
        value: "![" + t.alt + r
    }];
    const i = e.all(t),
        o = i[0];
    o && o.type === "text" ? o.value = "[" + o.value : i.unshift({
        type: "text",
        value: "["
    });
    const s = i[i.length - 1];
    return s && s.type === "text" ? s.value += r : i.push({
        type: "text",
        value: r
    }), i
}

function OF(e, t) {
    const n = String(t.identifier).toUpperCase(),
        r = e.definitionById.get(n);
    if (!r) return Xk(e, t);
    const i = {
        src: Qo(r.url || ""),
        alt: t.alt
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const o = {
        type: "element",
        tagName: "img",
        properties: i,
        children: []
    };
    return e.patch(t, o), e.applyData(t, o)
}

function DF(e, t) {
    const n = {
        src: Qo(t.url)
    };
    t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
    const r = {
        type: "element",
        tagName: "img",
        properties: n,
        children: []
    };
    return e.patch(t, r), e.applyData(t, r)
}

function LF(e, t) {
    const n = {
        type: "text",
        value: t.value.replace(/\r?\n|\r/g, " ")
    };
    e.patch(t, n);
    const r = {
        type: "element",
        tagName: "code",
        properties: {},
        children: [n]
    };
    return e.patch(t, r), e.applyData(t, r)
}

function jF(e, t) {
    const n = String(t.identifier).toUpperCase(),
        r = e.definitionById.get(n);
    if (!r) return Xk(e, t);
    const i = {
        href: Qo(r.url || "")
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const o = {
        type: "element",
        tagName: "a",
        properties: i,
        children: e.all(t)
    };
    return e.patch(t, o), e.applyData(t, o)
}

function _F(e, t) {
    const n = {
        href: Qo(t.url)
    };
    t.title !== null && t.title !== void 0 && (n.title = t.title);
    const r = {
        type: "element",
        tagName: "a",
        properties: n,
        children: e.all(t)
    };
    return e.patch(t, r), e.applyData(t, r)
}

function FF(e, t, n) {
    const r = e.all(t),
        i = n ? zF(n) : Zk(t),
        o = {},
        s = [];
    if (typeof t.checked == "boolean") {
        const c = r[0];
        let d;
        c && c.type === "element" && c.tagName === "p" ? d = c : (d = {
            type: "element",
            tagName: "p",
            properties: {},
            children: []
        }, r.unshift(d)), d.children.length > 0 && d.children.unshift({
            type: "text",
            value: " "
        }), d.children.unshift({
            type: "element",
            tagName: "input",
            properties: {
                type: "checkbox",
                checked: t.checked,
                disabled: !0
            },
            children: []
        }), o.className = ["task-list-item"]
    }
    let a = -1;
    for (; ++a < r.length;) {
        const c = r[a];
        (i || a !== 0 || c.type !== "element" || c.tagName !== "p") && s.push({
            type: "text",
            value: `
`
        }), c.type === "element" && c.tagName === "p" && !i ? s.push(...c.children) : s.push(c)
    }
    const l = r[r.length - 1];
    l && (i || l.type !== "element" || l.tagName !== "p") && s.push({
        type: "text",
        value: `
`
    });
    const u = {
        type: "element",
        tagName: "li",
        properties: o,
        children: s
    };
    return e.patch(t, u), e.applyData(t, u)
}

function zF(e) {
    let t = !1;
    if (e.type === "list") {
        t = e.spread || !1;
        const n = e.children;
        let r = -1;
        for (; !t && ++r < n.length;) t = Zk(n[r])
    }
    return t
}

function Zk(e) {
    const t = e.spread;
    return t ? ? e.children.length > 1
}

function VF(e, t) {
    const n = {},
        r = e.all(t);
    let i = -1;
    for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
        const s = r[i];
        if (s.type === "element" && s.tagName === "li" && s.properties && Array.isArray(s.properties.className) && s.properties.className.includes("task-list-item")) {
            n.className = ["contains-task-list"];
            break
        }
    }
    const o = {
        type: "element",
        tagName: t.ordered ? "ol" : "ul",
        properties: n,
        children: e.wrap(r, !0)
    };
    return e.patch(t, o), e.applyData(t, o)
}

function BF(e, t) {
    const n = {
        type: "element",
        tagName: "p",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function $F(e, t) {
    const n = {
        type: "root",
        children: e.wrap(e.all(t))
    };
    return e.patch(t, n), e.applyData(t, n)
}

function UF(e, t) {
    const n = {
        type: "element",
        tagName: "strong",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function HF(e, t) {
    const n = e.all(t),
        r = n.shift(),
        i = [];
    if (r) {
        const s = {
            type: "element",
            tagName: "thead",
            properties: {},
            children: e.wrap([r], !0)
        };
        e.patch(t.children[0], s), i.push(s)
    }
    if (n.length > 0) {
        const s = {
                type: "element",
                tagName: "tbody",
                properties: {},
                children: e.wrap(n, !0)
            },
            a = lm(t.children[1]),
            l = Ik(t.children[t.children.length - 1]);
        a && l && (s.position = {
            start: a,
            end: l
        }), i.push(s)
    }
    const o = {
        type: "element",
        tagName: "table",
        properties: {},
        children: e.wrap(i, !0)
    };
    return e.patch(t, o), e.applyData(t, o)
}

function WF(e, t, n) {
    const r = n ? n.children : void 0,
        o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td",
        s = n && n.type === "table" ? n.align : void 0,
        a = s ? s.length : t.children.length;
    let l = -1;
    const u = [];
    for (; ++l < a;) {
        const d = t.children[l],
            h = {},
            f = s ? s[l] : void 0;
        f && (h.align = f);
        let g = {
            type: "element",
            tagName: o,
            properties: h,
            children: []
        };
        d && (g.children = e.all(d), e.patch(d, g), g = e.applyData(d, g)), u.push(g)
    }
    const c = {
        type: "element",
        tagName: "tr",
        properties: {},
        children: e.wrap(u, !0)
    };
    return e.patch(t, c), e.applyData(t, c)
}

function KF(e, t) {
    const n = {
        type: "element",
        tagName: "td",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}
const d0 = 9,
    f0 = 32;

function GF(e) {
    const t = String(e),
        n = /\r?\n|\r/g;
    let r = n.exec(t),
        i = 0;
    const o = [];
    for (; r;) o.push(h0(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
    return o.push(h0(t.slice(i), i > 0, !1)), o.join("")
}

function h0(e, t, n) {
    let r = 0,
        i = e.length;
    if (t) {
        let o = e.codePointAt(r);
        for (; o === d0 || o === f0;) r++, o = e.codePointAt(r)
    }
    if (n) {
        let o = e.codePointAt(i - 1);
        for (; o === d0 || o === f0;) i--, o = e.codePointAt(i - 1)
    }
    return i > r ? e.slice(r, i) : ""
}

function qF(e, t) {
    const n = {
        type: "text",
        value: GF(String(t.value))
    };
    return e.patch(t, n), e.applyData(t, n)
}

function QF(e, t) {
    const n = {
        type: "element",
        tagName: "hr",
        properties: {},
        children: []
    };
    return e.patch(t, n), e.applyData(t, n)
}
const YF = {
    blockquote: EF,
    break: TF,
    code: PF,
    delete: AF,
    emphasis: RF,
    footnoteReference: MF,
    heading: NF,
    html: IF,
    imageReference: OF,
    image: DF,
    inlineCode: LF,
    linkReference: jF,
    link: _F,
    listItem: FF,
    list: VF,
    paragraph: BF,
    root: $F,
    strong: UF,
    table: HF,
    tableCell: KF,
    tableRow: WF,
    text: qF,
    thematicBreak: QF,
    toml: il,
    yaml: il,
    definition: il,
    footnoteDefinition: il
};

function il() {}
const Jk = -1,
    rc = 0,
    Ls = 1,
    vu = 2,
    mm = 3,
    gm = 4,
    ym = 5,
    vm = 6,
    eC = 7,
    tC = 8,
    p0 = typeof self == "object" ? self : globalThis,
    XF = (e, t) => {
        const n = (i, o) => (e.set(o, i), i),
            r = i => {
                if (e.has(i)) return e.get(i);
                const [o, s] = t[i];
                switch (o) {
                    case rc:
                    case Jk:
                        return n(s, i);
                    case Ls:
                        {
                            const a = n([], i);
                            for (const l of s) a.push(r(l));
                            return a
                        }
                    case vu:
                        {
                            const a = n({}, i);
                            for (const [l, u] of s) a[r(l)] = r(u);
                            return a
                        }
                    case mm:
                        return n(new Date(s), i);
                    case gm:
                        {
                            const {
                                source: a,
                                flags: l
                            } = s;
                            return n(new RegExp(a, l), i)
                        }
                    case ym:
                        {
                            const a = n(new Map, i);
                            for (const [l, u] of s) a.set(r(l), r(u));
                            return a
                        }
                    case vm:
                        {
                            const a = n(new Set, i);
                            for (const l of s) a.add(r(l));
                            return a
                        }
                    case eC:
                        {
                            const {
                                name: a,
                                message: l
                            } = s;
                            return n(new p0[a](l), i)
                        }
                    case tC:
                        return n(BigInt(s), i);
                    case "BigInt":
                        return n(Object(BigInt(s)), i);
                    case "ArrayBuffer":
                        return n(new Uint8Array(s).buffer, s);
                    case "DataView":
                        {
                            const {
                                buffer: a
                            } = new Uint8Array(s);
                            return n(new DataView(a), s)
                        }
                }
                return n(new p0[o](s), i)
            };
        return r
    },
    m0 = e => XF(new Map, e)(0),
    Vi = "",
    {
        toString: ZF
    } = {},
    {
        keys: JF
    } = Object,
    ds = e => {
        const t = typeof e;
        if (t !== "object" || !e) return [rc, t];
        const n = ZF.call(e).slice(8, -1);
        switch (n) {
            case "Array":
                return [Ls, Vi];
            case "Object":
                return [vu, Vi];
            case "Date":
                return [mm, Vi];
            case "RegExp":
                return [gm, Vi];
            case "Map":
                return [ym, Vi];
            case "Set":
                return [vm, Vi];
            case "DataView":
                return [Ls, n]
        }
        return n.includes("Array") ? [Ls, n] : n.includes("Error") ? [eC, n] : [vu, n]
    },
    ol = ([e, t]) => e === rc && (t === "function" || t === "symbol"),
    e5 = (e, t, n, r) => {
        const i = (s, a) => {
                const l = r.push(s) - 1;
                return n.set(a, l), l
            },
            o = s => {
                if (n.has(s)) return n.get(s);
                let [a, l] = ds(s);
                switch (a) {
                    case rc:
                        {
                            let c = s;
                            switch (l) {
                                case "bigint":
                                    a = tC, c = s.toString();
                                    break;
                                case "function":
                                case "symbol":
                                    if (e) throw new TypeError("unable to serialize " + l);
                                    c = null;
                                    break;
                                case "undefined":
                                    return i([Jk], s)
                            }
                            return i([a, c], s)
                        }
                    case Ls:
                        {
                            if (l) {
                                let h = s;
                                return l === "DataView" ? h = new Uint8Array(s.buffer) : l === "ArrayBuffer" && (h = new Uint8Array(s)), i([l, [...h]], s)
                            }
                            const c = [],
                                d = i([a, c], s);
                            for (const h of s) c.push(o(h));
                            return d
                        }
                    case vu:
                        {
                            if (l) switch (l) {
                                case "BigInt":
                                    return i([l, s.toString()], s);
                                case "Boolean":
                                case "Number":
                                case "String":
                                    return i([l, s.valueOf()], s)
                            }
                            if (t && "toJSON" in s) return o(s.toJSON());
                            const c = [],
                                d = i([a, c], s);
                            for (const h of JF(s))(e || !ol(ds(s[h]))) && c.push([o(h), o(s[h])]);
                            return d
                        }
                    case mm:
                        return i([a, s.toISOString()], s);
                    case gm:
                        {
                            const {
                                source: c,
                                flags: d
                            } = s;
                            return i([a, {
                                source: c,
                                flags: d
                            }], s)
                        }
                    case ym:
                        {
                            const c = [],
                                d = i([a, c], s);
                            for (const [h, f] of s)(e || !(ol(ds(h)) || ol(ds(f)))) && c.push([o(h), o(f)]);
                            return d
                        }
                    case vm:
                        {
                            const c = [],
                                d = i([a, c], s);
                            for (const h of s)(e || !ol(ds(h))) && c.push(o(h));
                            return d
                        }
                }
                const {
                    message: u
                } = s;
                return i([a, {
                    name: l,
                    message: u
                }], s)
            };
        return o
    },
    g0 = (e, {
        json: t,
        lossy: n
    } = {}) => {
        const r = [];
        return e5(!(t || n), !!t, new Map, r)(e), r
    },
    xu = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? m0(g0(e, t)) : structuredClone(e) : (e, t) => m0(g0(e, t));

function t5(e, t) {
    const n = [{
        type: "text",
        value: "↩"
    }];
    return t > 1 && n.push({
        type: "element",
        tagName: "sup",
        properties: {},
        children: [{
            type: "text",
            value: String(t)
        }]
    }), n
}

function n5(e, t) {
    return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "")
}

function r5(e) {
    const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-",
        n = e.options.footnoteBackContent || t5,
        r = e.options.footnoteBackLabel || n5,
        i = e.options.footnoteLabel || "Footnotes",
        o = e.options.footnoteLabelTagName || "h2",
        s = e.options.footnoteLabelProperties || {
            className: ["sr-only"]
        },
        a = [];
    let l = -1;
    for (; ++l < e.footnoteOrder.length;) {
        const u = e.footnoteById.get(e.footnoteOrder[l]);
        if (!u) continue;
        const c = e.all(u),
            d = String(u.identifier).toUpperCase(),
            h = Qo(d.toLowerCase());
        let f = 0;
        const g = [],
            m = e.footnoteCounts.get(d);
        for (; m !== void 0 && ++f <= m;) {
            g.length > 0 && g.push({
                type: "text",
                value: " "
            });
            let y = typeof n == "string" ? n : n(l, f);
            typeof y == "string" && (y = {
                type: "text",
                value: y
            }), g.push({
                type: "element",
                tagName: "a",
                properties: {
                    href: "#" + t + "fnref-" + h + (f > 1 ? "-" + f : ""),
                    dataFootnoteBackref: "",
                    ariaLabel: typeof r == "string" ? r : r(l, f),
                    className: ["data-footnote-backref"]
                },
                children: Array.isArray(y) ? y : [y]
            })
        }
        const x = c[c.length - 1];
        if (x && x.type === "element" && x.tagName === "p") {
            const y = x.children[x.children.length - 1];
            y && y.type === "text" ? y.value += " " : x.children.push({
                type: "text",
                value: " "
            }), x.children.push(...g)
        } else c.push(...g);
        const p = {
            type: "element",
            tagName: "li",
            properties: {
                id: t + "fn-" + h
            },
            children: e.wrap(c, !0)
        };
        e.patch(u, p), a.push(p)
    }
    if (a.length !== 0) return {
        type: "element",
        tagName: "section",
        properties: {
            dataFootnotes: !0,
            className: ["footnotes"]
        },
        children: [{
            type: "element",
            tagName: o,
            properties: { ...xu(s),
                id: "footnote-label"
            },
            children: [{
                type: "text",
                value: i
            }]
        }, {
            type: "text",
            value: `
`
        }, {
            type: "element",
            tagName: "ol",
            properties: {},
            children: e.wrap(a, !0)
        }, {
            type: "text",
            value: `
`
        }]
    }
}
const nC = function(e) {
    if (e == null) return a5;
    if (typeof e == "function") return ic(e);
    if (typeof e == "object") return Array.isArray(e) ? i5(e) : o5(e);
    if (typeof e == "string") return s5(e);
    throw new Error("Expected function, string, or object as test")
};

function i5(e) {
    const t = [];
    let n = -1;
    for (; ++n < e.length;) t[n] = nC(e[n]);
    return ic(r);

    function r(...i) {
        let o = -1;
        for (; ++o < t.length;)
            if (t[o].apply(this, i)) return !0;
        return !1
    }
}

function o5(e) {
    const t = e;
    return ic(n);

    function n(r) {
        const i = r;
        let o;
        for (o in e)
            if (i[o] !== t[o]) return !1;
        return !0
    }
}

function s5(e) {
    return ic(t);

    function t(n) {
        return n && n.type === e
    }
}

function ic(e) {
    return t;

    function t(n, r, i) {
        return !!(l5(n) && e.call(this, n, typeof r == "number" ? r : void 0, i || void 0))
    }
}

function a5() {
    return !0
}

function l5(e) {
    return e !== null && typeof e == "object" && "type" in e
}
const rC = [],
    u5 = !0,
    y0 = !1,
    c5 = "skip";

function d5(e, t, n, r) {
    let i;
    typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
    const o = nC(i),
        s = r ? -1 : 1;
    a(e, void 0, [])();

    function a(l, u, c) {
        const d = l && typeof l == "object" ? l : {};
        if (typeof d.type == "string") {
            const f = typeof d.tagName == "string" ? d.tagName : typeof d.name == "string" ? d.name : void 0;
            Object.defineProperty(h, "name", {
                value: "node (" + (l.type + (f ? "<" + f + ">" : "")) + ")"
            })
        }
        return h;

        function h() {
            let f = rC,
                g, m, x;
            if ((!t || o(l, u, c[c.length - 1] || void 0)) && (f = f5(n(l, c)), f[0] === y0)) return f;
            if ("children" in l && l.children) {
                const p = l;
                if (p.children && f[0] !== c5)
                    for (m = (r ? p.children.length : -1) + s, x = c.concat(p); m > -1 && m < p.children.length;) {
                        const y = p.children[m];
                        if (g = a(y, m, x)(), g[0] === y0) return g;
                        m = typeof g[1] == "number" ? g[1] : m + s
                    }
            }
            return f
        }
    }
}

function f5(e) {
    return Array.isArray(e) ? e : typeof e == "number" ? [u5, e] : e == null ? rC : [e]
}

function iC(e, t, n, r) {
    let i, o, s;
    typeof t == "function" && typeof n != "function" ? (o = void 0, s = t, i = n) : (o = t, s = n, i = r), d5(e, o, a, i);

    function a(l, u) {
        const c = u[u.length - 1],
            d = c ? c.children.indexOf(l) : void 0;
        return s(l, d, c)
    }
}
const oh = {}.hasOwnProperty,
    h5 = {};

function p5(e, t) {
    const n = t || h5,
        r = new Map,
        i = new Map,
        o = new Map,
        s = { ...YF,
            ...n.handlers
        },
        a = {
            all: u,
            applyData: g5,
            definitionById: r,
            footnoteById: i,
            footnoteCounts: o,
            footnoteOrder: [],
            handlers: s,
            one: l,
            options: n,
            patch: m5,
            wrap: v5
        };
    return iC(e, function(c) {
        if (c.type === "definition" || c.type === "footnoteDefinition") {
            const d = c.type === "definition" ? r : i,
                h = String(c.identifier).toUpperCase();
            d.has(h) || d.set(h, c)
        }
    }), a;

    function l(c, d) {
        const h = c.type,
            f = a.handlers[h];
        if (oh.call(a.handlers, h) && f) return f(a, c, d);
        if (a.options.passThrough && a.options.passThrough.includes(h)) {
            if ("children" in c) {
                const {
                    children: m,
                    ...x
                } = c, p = xu(x);
                return p.children = a.all(c), p
            }
            return xu(c)
        }
        return (a.options.unknownHandler || y5)(a, c, d)
    }

    function u(c) {
        const d = [];
        if ("children" in c) {
            const h = c.children;
            let f = -1;
            for (; ++f < h.length;) {
                const g = a.one(h[f], c);
                if (g) {
                    if (f && h[f - 1].type === "break" && (!Array.isArray(g) && g.type === "text" && (g.value = v0(g.value)), !Array.isArray(g) && g.type === "element")) {
                        const m = g.children[0];
                        m && m.type === "text" && (m.value = v0(m.value))
                    }
                    Array.isArray(g) ? d.push(...g) : d.push(g)
                }
            }
        }
        return d
    }
}

function m5(e, t) {
    e.position && (t.position = Z_(e))
}

function g5(e, t) {
    let n = t;
    if (e && e.data) {
        const r = e.data.hName,
            i = e.data.hChildren,
            o = e.data.hProperties;
        if (typeof r == "string")
            if (n.type === "element") n.tagName = r;
            else {
                const s = "children" in n ? n.children : [n];
                n = {
                    type: "element",
                    tagName: r,
                    properties: {},
                    children: s
                }
            }
        n.type === "element" && o && Object.assign(n.properties, xu(o)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i)
    }
    return n
}

function y5(e, t) {
    const n = t.data || {},
        r = "value" in t && !(oh.call(n, "hProperties") || oh.call(n, "hChildren")) ? {
            type: "text",
            value: t.value
        } : {
            type: "element",
            tagName: "div",
            properties: {},
            children: e.all(t)
        };
    return e.patch(t, r), e.applyData(t, r)
}

function v5(e, t) {
    const n = [];
    let r = -1;
    for (t && n.push({
            type: "text",
            value: `
`
        }); ++r < e.length;) r && n.push({
        type: "text",
        value: `
`
    }), n.push(e[r]);
    return t && e.length > 0 && n.push({
        type: "text",
        value: `
`
    }), n
}

function v0(e) {
    let t = 0,
        n = e.charCodeAt(t);
    for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
    return e.slice(t)
}

function x0(e, t) {
    const n = p5(e, t),
        r = n.one(e, void 0),
        i = r5(n),
        o = Array.isArray(r) ? {
            type: "root",
            children: r
        } : r || {
            type: "root",
            children: []
        };
    return i && o.children.push({
        type: "text",
        value: `
`
    }, i), o
}

function x5(e, t) {
    return e && "run" in e ? async function(n, r) {
        const i = x0(n, {
            file: r,
            ...t
        });
        await e.run(i, r)
    } : function(n, r) {
        return x0(n, {
            file: r,
            ...e || t
        })
    }
}

function w0(e) {
    if (e) throw e
}
var Rl = Object.prototype.hasOwnProperty,
    oC = Object.prototype.toString,
    S0 = Object.defineProperty,
    b0 = Object.getOwnPropertyDescriptor,
    k0 = function(t) {
        return typeof Array.isArray == "function" ? Array.isArray(t) : oC.call(t) === "[object Array]"
    },
    C0 = function(t) {
        if (!t || oC.call(t) !== "[object Object]") return !1;
        var n = Rl.call(t, "constructor"),
            r = t.constructor && t.constructor.prototype && Rl.call(t.constructor.prototype, "isPrototypeOf");
        if (t.constructor && !n && !r) return !1;
        var i;
        for (i in t);
        return typeof i > "u" || Rl.call(t, i)
    },
    E0 = function(t, n) {
        S0 && n.name === "__proto__" ? S0(t, n.name, {
            enumerable: !0,
            configurable: !0,
            value: n.newValue,
            writable: !0
        }) : t[n.name] = n.newValue
    },
    T0 = function(t, n) {
        if (n === "__proto__")
            if (Rl.call(t, n)) {
                if (b0) return b0(t, n).value
            } else return;
        return t[n]
    },
    w5 = function e() {
        var t, n, r, i, o, s, a = arguments[0],
            l = 1,
            u = arguments.length,
            c = !1;
        for (typeof a == "boolean" && (c = a, a = arguments[1] || {}, l = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); l < u; ++l)
            if (t = arguments[l], t != null)
                for (n in t) r = T0(a, n), i = T0(t, n), a !== i && (c && i && (C0(i) || (o = k0(i))) ? (o ? (o = !1, s = r && k0(r) ? r : []) : s = r && C0(r) ? r : {}, E0(a, {
                    name: n,
                    newValue: e(c, s, i)
                })) : typeof i < "u" && E0(a, {
                    name: n,
                    newValue: i
                }));
        return a
    };
const cd = Pi(w5);

function sh(e) {
    if (typeof e != "object" || e === null) return !1;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}

function S5() {
    const e = [],
        t = {
            run: n,
            use: r
        };
    return t;

    function n(...i) {
        let o = -1;
        const s = i.pop();
        if (typeof s != "function") throw new TypeError("Expected function as last argument, not " + s);
        a(null, ...i);

        function a(l, ...u) {
            const c = e[++o];
            let d = -1;
            if (l) {
                s(l);
                return
            }
            for (; ++d < i.length;)(u[d] === null || u[d] === void 0) && (u[d] = i[d]);
            i = u, c ? b5(c, a)(...u) : s(null, ...u)
        }
    }

    function r(i) {
        if (typeof i != "function") throw new TypeError("Expected `middelware` to be a function, not " + i);
        return e.push(i), t
    }
}

function b5(e, t) {
    let n;
    return r;

    function r(...s) {
        const a = e.length > s.length;
        let l;
        a && s.push(i);
        try {
            l = e.apply(this, s)
        } catch (u) {
            const c = u;
            if (a && n) throw c;
            return i(c)
        }
        a || (l && l.then && typeof l.then == "function" ? l.then(o, i) : l instanceof Error ? i(l) : o(l))
    }

    function i(s, ...a) {
        n || (n = !0, t(s, ...a))
    }

    function o(s) {
        i(null, s)
    }
}
const wn = {
    basename: k5,
    dirname: C5,
    extname: E5,
    join: T5,
    sep: "/"
};

function k5(e, t) {
    if (t !== void 0 && typeof t != "string") throw new TypeError('"ext" argument must be a string');
    Aa(e);
    let n = 0,
        r = -1,
        i = e.length,
        o;
    if (t === void 0 || t.length === 0 || t.length > e.length) {
        for (; i--;)
            if (e.codePointAt(i) === 47) {
                if (o) {
                    n = i + 1;
                    break
                }
            } else r < 0 && (o = !0, r = i + 1);
        return r < 0 ? "" : e.slice(n, r)
    }
    if (t === e) return "";
    let s = -1,
        a = t.length - 1;
    for (; i--;)
        if (e.codePointAt(i) === 47) {
            if (o) {
                n = i + 1;
                break
            }
        } else s < 0 && (o = !0, s = i + 1), a > -1 && (e.codePointAt(i) === t.codePointAt(a--) ? a < 0 && (r = i) : (a = -1, r = s));
    return n === r ? r = s : r < 0 && (r = e.length), e.slice(n, r)
}

function C5(e) {
    if (Aa(e), e.length === 0) return ".";
    let t = -1,
        n = e.length,
        r;
    for (; --n;)
        if (e.codePointAt(n) === 47) {
            if (r) {
                t = n;
                break
            }
        } else r || (r = !0);
    return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t)
}

function E5(e) {
    Aa(e);
    let t = e.length,
        n = -1,
        r = 0,
        i = -1,
        o = 0,
        s;
    for (; t--;) {
        const a = e.codePointAt(t);
        if (a === 47) {
            if (s) {
                r = t + 1;
                break
            }
            continue
        }
        n < 0 && (s = !0, n = t + 1), a === 46 ? i < 0 ? i = t : o !== 1 && (o = 1) : i > -1 && (o = -1)
    }
    return i < 0 || n < 0 || o === 0 || o === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n)
}

function T5(...e) {
    let t = -1,
        n;
    for (; ++t < e.length;) Aa(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
    return n === void 0 ? "." : P5(n)
}

function P5(e) {
    Aa(e);
    const t = e.codePointAt(0) === 47;
    let n = A5(e, !t);
    return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n
}

function A5(e, t) {
    let n = "",
        r = 0,
        i = -1,
        o = 0,
        s = -1,
        a, l;
    for (; ++s <= e.length;) {
        if (s < e.length) a = e.codePointAt(s);
        else {
            if (a === 47) break;
            a = 47
        }
        if (a === 47) {
            if (!(i === s - 1 || o === 1))
                if (i !== s - 1 && o === 2) {
                    if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
                        if (n.length > 2) {
                            if (l = n.lastIndexOf("/"), l !== n.length - 1) {
                                l < 0 ? (n = "", r = 0) : (n = n.slice(0, l), r = n.length - 1 - n.lastIndexOf("/")), i = s, o = 0;
                                continue
                            }
                        } else if (n.length > 0) {
                            n = "", r = 0, i = s, o = 0;
                            continue
                        }
                    }
                    t && (n = n.length > 0 ? n + "/.." : "..", r = 2)
                } else n.length > 0 ? n += "/" + e.slice(i + 1, s) : n = e.slice(i + 1, s), r = s - i - 1;
            i = s, o = 0
        } else a === 46 && o > -1 ? o++ : o = -1
    }
    return n
}

function Aa(e) {
    if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
}
const R5 = {
    cwd: M5
};

function M5() {
    return "/"
}

function ah(e) {
    return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0)
}

function N5(e) {
    if (typeof e == "string") e = new URL(e);
    else if (!ah(e)) {
        const t = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
        throw t.code = "ERR_INVALID_ARG_TYPE", t
    }
    if (e.protocol !== "file:") {
        const t = new TypeError("The URL must be of scheme file");
        throw t.code = "ERR_INVALID_URL_SCHEME", t
    }
    return I5(e)
}

function I5(e) {
    if (e.hostname !== "") {
        const r = new TypeError('File URL host must be "localhost" or empty on darwin');
        throw r.code = "ERR_INVALID_FILE_URL_HOST", r
    }
    const t = e.pathname;
    let n = -1;
    for (; ++n < t.length;)
        if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
            const r = t.codePointAt(n + 2);
            if (r === 70 || r === 102) {
                const i = new TypeError("File URL path must not include encoded / characters");
                throw i.code = "ERR_INVALID_FILE_URL_PATH", i
            }
        }
    return decodeURIComponent(t)
}
const dd = ["history", "path", "basename", "stem", "extname", "dirname"];
class sC {
    constructor(t) {
        let n;
        t ? ah(t) ? n = {
            path: t
        } : typeof t == "string" || O5(t) ? n = {
            value: t
        } : n = t : n = {}, this.cwd = "cwd" in n ? "" : R5.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
        let r = -1;
        for (; ++r < dd.length;) {
            const o = dd[r];
            o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o])
        }
        let i;
        for (i in n) dd.includes(i) || (this[i] = n[i])
    }
    get basename() {
        return typeof this.path == "string" ? wn.basename(this.path) : void 0
    }
    set basename(t) {
        hd(t, "basename"), fd(t, "basename"), this.path = wn.join(this.dirname || "", t)
    }
    get dirname() {
        return typeof this.path == "string" ? wn.dirname(this.path) : void 0
    }
    set dirname(t) {
        P0(this.basename, "dirname"), this.path = wn.join(t || "", this.basename)
    }
    get extname() {
        return typeof this.path == "string" ? wn.extname(this.path) : void 0
    }
    set extname(t) {
        if (fd(t, "extname"), P0(this.dirname, "extname"), t) {
            if (t.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
            if (t.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots")
        }
        this.path = wn.join(this.dirname, this.stem + (t || ""))
    }
    get path() {
        return this.history[this.history.length - 1]
    }
    set path(t) {
        ah(t) && (t = N5(t)), hd(t, "path"), this.path !== t && this.history.push(t)
    }
    get stem() {
        return typeof this.path == "string" ? wn.basename(this.path, this.extname) : void 0
    }
    set stem(t) {
        hd(t, "stem"), fd(t, "stem"), this.path = wn.join(this.dirname || "", t + (this.extname || ""))
    }
    fail(t, n, r) {
        const i = this.message(t, n, r);
        throw i.fatal = !0, i
    }
    info(t, n, r) {
        const i = this.message(t, n, r);
        return i.fatal = void 0, i
    }
    message(t, n, r) {
        const i = new tt(t, n, r);
        return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i
    }
    toString(t) {
        return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value)
    }
}

function fd(e, t) {
    if (e && e.includes(wn.sep)) throw new Error("`" + t + "` cannot be a path: did not expect `" + wn.sep + "`")
}

function hd(e, t) {
    if (!e) throw new Error("`" + t + "` cannot be empty")
}

function P0(e, t) {
    if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
}

function O5(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e)
}
const D5 = function(e) {
        const r = this.constructor.prototype,
            i = r[e],
            o = function() {
                return i.apply(o, arguments)
            };
        return Object.setPrototypeOf(o, r), o
    },
    L5 = {}.hasOwnProperty;
class xm extends D5 {
    constructor() {
        super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = S5()
    }
    copy() {
        const t = new xm;
        let n = -1;
        for (; ++n < this.attachers.length;) {
            const r = this.attachers[n];
            t.use(...r)
        }
        return t.data(cd(!0, {}, this.namespace)), t
    }
    data(t, n) {
        return typeof t == "string" ? arguments.length === 2 ? (gd("data", this.frozen), this.namespace[t] = n, this) : L5.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (gd("data", this.frozen), this.namespace = t, this) : this.namespace
    }
    freeze() {
        if (this.frozen) return this;
        const t = this;
        for (; ++this.freezeIndex < this.attachers.length;) {
            const [n, ...r] = this.attachers[this.freezeIndex];
            if (r[0] === !1) continue;
            r[0] === !0 && (r[0] = void 0);
            const i = n.call(t, ...r);
            typeof i == "function" && this.transformers.use(i)
        }
        return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this
    }
    parse(t) {
        this.freeze();
        const n = sl(t),
            r = this.parser || this.Parser;
        return pd("parse", r), r(String(n), n)
    }
    process(t, n) {
        const r = this;
        return this.freeze(), pd("process", this.parser || this.Parser), md("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);

        function i(o, s) {
            const a = sl(t),
                l = r.parse(a);
            r.run(l, a, function(c, d, h) {
                if (c || !d || !h) return u(c);
                const f = d,
                    g = r.stringify(f, h);
                F5(g) ? h.value = g : h.result = g, u(c, h)
            });

            function u(c, d) {
                c || !d ? s(c) : o ? o(d) : n(void 0, d)
            }
        }
    }
    processSync(t) {
        let n = !1,
            r;
        return this.freeze(), pd("processSync", this.parser || this.Parser), md("processSync", this.compiler || this.Compiler), this.process(t, i), R0("processSync", "process", n), r;

        function i(o, s) {
            n = !0, w0(o), r = s
        }
    }
    run(t, n, r) {
        A0(t), this.freeze();
        const i = this.transformers;
        return !r && typeof n == "function" && (r = n, n = void 0), r ? o(void 0, r) : new Promise(o);

        function o(s, a) {
            const l = sl(n);
            i.run(t, l, u);

            function u(c, d, h) {
                const f = d || t;
                c ? a(c) : s ? s(f) : r(void 0, f, h)
            }
        }
    }
    runSync(t, n) {
        let r = !1,
            i;
        return this.run(t, n, o), R0("runSync", "run", r), i;

        function o(s, a) {
            w0(s), i = a, r = !0
        }
    }
    stringify(t, n) {
        this.freeze();
        const r = sl(n),
            i = this.compiler || this.Compiler;
        return md("stringify", i), A0(t), i(t, r)
    }
    use(t, ...n) {
        const r = this.attachers,
            i = this.namespace;
        if (gd("use", this.frozen), t != null)
            if (typeof t == "function") l(t, n);
            else if (typeof t == "object") Array.isArray(t) ? a(t) : s(t);
        else throw new TypeError("Expected usable value, not `" + t + "`");
        return this;

        function o(u) {
            if (typeof u == "function") l(u, []);
            else if (typeof u == "object")
                if (Array.isArray(u)) {
                    const [c, ...d] = u;
                    l(c, d)
                } else s(u);
            else throw new TypeError("Expected usable value, not `" + u + "`")
        }

        function s(u) {
            if (!("plugins" in u) && !("settings" in u)) throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
            a(u.plugins), u.settings && (i.settings = cd(!0, i.settings, u.settings))
        }

        function a(u) {
            let c = -1;
            if (u != null)
                if (Array.isArray(u))
                    for (; ++c < u.length;) {
                        const d = u[c];
                        o(d)
                    } else throw new TypeError("Expected a list of plugins, not `" + u + "`")
        }

        function l(u, c) {
            let d = -1,
                h = -1;
            for (; ++d < r.length;)
                if (r[d][0] === u) {
                    h = d;
                    break
                }
            if (h === -1) r.push([u, ...c]);
            else if (c.length > 0) {
                let [f, ...g] = c;
                const m = r[h][1];
                sh(m) && sh(f) && (f = cd(!0, m, f)), r[h] = [u, f, ...g]
            }
        }
    }
}
const j5 = new xm().freeze();

function pd(e, t) {
    if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `parser`")
}

function md(e, t) {
    if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `compiler`")
}

function gd(e, t) {
    if (t) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
}

function A0(e) {
    if (!sh(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`")
}

function R0(e, t, n) {
    if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead")
}

function sl(e) {
    return _5(e) ? e : new sC(e)
}

function _5(e) {
    return !!(e && typeof e == "object" && "message" in e && "messages" in e)
}

function F5(e) {
    return typeof e == "string" || z5(e)
}

function z5(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e)
}
const V5 = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
    M0 = [],
    N0 = {
        allowDangerousHtml: !0
    },
    B5 = /^(https?|ircs?|mailto|xmpp)$/i,
    $5 = [{
        from: "astPlugins",
        id: "remove-buggy-html-in-markdown-parser"
    }, {
        from: "allowDangerousHtml",
        id: "remove-buggy-html-in-markdown-parser"
    }, {
        from: "allowNode",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "allowElement"
    }, {
        from: "allowedTypes",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "allowedElements"
    }, {
        from: "disallowedTypes",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "disallowedElements"
    }, {
        from: "escapeHtml",
        id: "remove-buggy-html-in-markdown-parser"
    }, {
        from: "includeElementIndex",
        id: "#remove-includeelementindex"
    }, {
        from: "includeNodeIndex",
        id: "change-includenodeindex-to-includeelementindex"
    }, {
        from: "linkTarget",
        id: "remove-linktarget"
    }, {
        from: "plugins",
        id: "change-plugins-to-remarkplugins",
        to: "remarkPlugins"
    }, {
        from: "rawSourcePos",
        id: "#remove-rawsourcepos"
    }, {
        from: "renderers",
        id: "change-renderers-to-components",
        to: "components"
    }, {
        from: "source",
        id: "change-source-to-children",
        to: "children"
    }, {
        from: "sourcePos",
        id: "#remove-sourcepos"
    }, {
        from: "transformImageUri",
        id: "#add-urltransform",
        to: "urlTransform"
    }, {
        from: "transformLinkUri",
        id: "#add-urltransform",
        to: "urlTransform"
    }];

function U5(e) {
    const t = H5(e),
        n = W5(e);
    return K5(t.runSync(t.parse(n), n), e)
}

function H5(e) {
    const t = e.rehypePlugins || M0,
        n = e.remarkPlugins || M0,
        r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions,
            ...N0
        } : N0;
    return j5().use(CF).use(n).use(x5, r).use(t)
}

function W5(e) {
    const t = e.children || "",
        n = new sC;
    return typeof t == "string" && (n.value = t), n
}

function K5(e, t) {
    const n = t.allowedElements,
        r = t.allowElement,
        i = t.components,
        o = t.disallowedElements,
        s = t.skipHtml,
        a = t.unwrapDisallowed,
        l = t.urlTransform || G5;
    for (const c of $5) Object.hasOwn(t, c.from) && ("" + c.from + (c.to ? "use `" + c.to + "` instead" : "remove it") + V5 + c.id, void 0);
    return t.className && (e = {
        type: "element",
        tagName: "div",
        properties: {
            className: t.className
        },
        children: e.type === "root" ? e.children : [e]
    }), iC(e, u), r4(e, {
        Fragment: S.Fragment,
        components: i,
        ignoreInvalidStyle: !0,
        jsx: S.jsx,
        jsxs: S.jsxs,
        passKeys: !0,
        passNode: !0
    });

    function u(c, d, h) {
        if (c.type === "raw" && h && typeof d == "number") return s ? h.children.splice(d, 1) : h.children[d] = {
            type: "text",
            value: c.value
        }, d;
        if (c.type === "element") {
            let f;
            for (f in ad)
                if (Object.hasOwn(ad, f) && Object.hasOwn(c.properties, f)) {
                    const g = c.properties[f],
                        m = ad[f];
                    (m === null || m.includes(c.tagName)) && (c.properties[f] = l(String(g || ""), f, c))
                }
        }
        if (c.type === "element") {
            let f = n ? !n.includes(c.tagName) : o ? o.includes(c.tagName) : !1;
            if (!f && r && typeof d == "number" && (f = !r(c, d, h)), f && h && typeof d == "number") return a && c.children ? h.children.splice(d, 1, ...c.children) : h.children.splice(d, 1), d
        }
    }
}

function G5(e) {
    const t = e.indexOf(":"),
        n = e.indexOf("?"),
        r = e.indexOf("#"),
        i = e.indexOf("/");
    return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || B5.test(e.slice(0, t)) ? e : ""
}
const q5 = "https://wacpnexzhiqsirgsiwed.supabase.co/functions/v1/chat",
    Q5 = ["What services do you offer?", "I need a kitchen renovation", "What's the pricing?", "Book a consultation"];
async function Y5({
    messages: e,
    onDelta: t,
    onDone: n,
    onError: r
}) {
    var i, o, s, a, l, u;
    try {
        const c = await fetch(q5, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhY3BuZXh6aGlxc2lyZ3Npd2VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3MjE4MTQsImV4cCI6MjA5MDI5NzgxNH0.MRDWS8MKC_8qDyFav8ZCrVAnbR5xysyQtdnzfyTTZS4"
            },
            body: JSON.stringify({
                messages: e
            })
        });
        if (!c.ok) {
            const g = await c.json().catch(() => ({}));
            r(g.error || "Something went wrong. Please try again.");
            return
        }
        if (!c.body) {
            r("No response body");
            return
        }
        const d = c.body.getReader(),
            h = new TextDecoder;
        let f = "";
        for (;;) {
            const {
                done: g,
                value: m
            } = await d.read();
            if (g) break;
            f += h.decode(m, {
                stream: !0
            });
            let x;
            for (;
                (x = f.indexOf(`
`)) !== -1;) {
                let p = f.slice(0, x);
                if (f = f.slice(x + 1), p.endsWith("\r") && (p = p.slice(0, -1)), p.startsWith(":") || p.trim() === "" || !p.startsWith("data: ")) continue;
                const y = p.slice(6).trim();
                if (y === "[DONE]") break;
                try {
                    const k = (s = (o = (i = JSON.parse(y).choices) == null ? void 0 : i[0]) == null ? void 0 : o.delta) == null ? void 0 : s.content;
                    k && t(k)
                } catch {
                    f = p + `
` + f;
                    break
                }
            }
        }
        if (f.trim())
            for (let g of f.split(`
`)) {
                if (!g || (g.endsWith("\r") && (g = g.slice(0, -1)), !g.startsWith("data: "))) continue;
                const m = g.slice(6).trim();
                if (m !== "[DONE]") try {
                    const p = (u = (l = (a = JSON.parse(m).choices) == null ? void 0 : a[0]) == null ? void 0 : l.delta) == null ? void 0 : u.content;
                    p && t(p)
                } catch {}
            }
        n()
    } catch (c) {
        r(c instanceof Error ? c.message : "Connection error")
    }
}
const X5 = () => {
        var c;
        const [e, t] = w.useState(!1), [n, r] = w.useState([{
            role: "assistant",
            content: "Hello! 👋 Welcome to Sahacarah Interior. How can I help you transform your space today?"
        }]), [i, o] = w.useState(""), [s, a] = w.useState(!1), l = w.useRef(null);
        w.useEffect(() => {
            var d;
            (d = l.current) == null || d.scrollIntoView({
                behavior: "smooth"
            })
        }, [n]);
        const u = async d => {
            if (s) return;
            const h = {
                    role: "user",
                    content: d
                },
                f = [...n, h];
            r(f), o(""), a(!0);
            let g = "";
            const m = x => {
                g += x, r(p => {
                    const y = p[p.length - 1];
                    return (y == null ? void 0 : y.role) === "assistant" && p.length > f.length ? p.map((v, k) => k === p.length - 1 ? { ...v,
                        content: g
                    } : v) : [...p.slice(0, f.length), {
                        role: "assistant",
                        content: g
                    }]
                })
            };
            await Y5({
                messages: f,
                onDelta: x => m(x),
                onDone: () => a(!1),
                onError: x => {
                    r(p => [...p, {
                        role: "assistant",
                        content: `Sorry, something went wrong: ${x}`
                    }]), a(!1)
                }
            })
        };
        return S.jsxs(S.Fragment, {
            children: [S.jsx("button", {
                onClick: () => t(!e),
                className: "fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-gradient-navy flex items-center justify-center shadow-lg hover:scale-110 transition-transform",
                "aria-label": "Chat assistant",
                children: e ? S.jsx(hp, {
                    className: "w-6 h-6 text-cream"
                }) : S.jsx(dy, {
                    className: "w-7 h-7 text-gold"
                })
            }), S.jsx(ZS, {
                children: e && S.jsxs(ae.div, {
                    initial: {
                        opacity: 0,
                        y: 20,
                        scale: .95
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 20,
                        scale: .95
                    },
                    className: "fixed bottom-24 left-6 z-50 w-[340px] max-w-[calc(100vw-3rem)] bg-card rounded-xl shadow-2xl border border-border overflow-hidden flex flex-col",
                    style: {
                        height: "450px"
                    },
                    children: [S.jsxs("div", {
                        className: "bg-gradient-navy px-4 py-3 flex items-center gap-3",
                        children: [S.jsx("div", {
                            className: "w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center",
                            children: S.jsx(dy, {
                                className: "w-5 h-5 text-gold"
                            })
                        }), S.jsxs("div", {
                            children: [S.jsx("p", {
                                className: "text-cream font-semibold text-sm",
                                children: "Sahacarah Assistant"
                            }), S.jsx("p", {
                                className: "text-cream/60 text-xs",
                                children: "AI-Powered • Ready to help"
                            })]
                        })]
                    }), S.jsxs("div", {
                        className: "flex-1 overflow-y-auto p-3 space-y-3",
                        children: [n.map((d, h) => S.jsx("div", {
                            className: `flex ${d.role==="user"?"justify-end":"justify-start"}`,
                            children: S.jsx("div", {
                                className: `max-w-[80%] px-3 py-2 rounded-lg text-sm leading-relaxed ${d.role==="user"?"bg-primary text-cream rounded-br-none":"bg-muted text-foreground rounded-bl-none"}`,
                                children: d.role === "assistant" ? S.jsx("div", {
                                    className: "prose prose-sm prose-neutral dark:prose-invert max-w-none [&>p]:m-0 [&>ul]:m-0 [&>ol]:m-0",
                                    children: S.jsx(U5, {
                                        children: d.content
                                    })
                                }) : d.content
                            })
                        }, h)), s && ((c = n[n.length - 1]) == null ? void 0 : c.role) === "user" && S.jsx("div", {
                            className: "flex justify-start",
                            children: S.jsx("div", {
                                className: "bg-muted text-foreground px-3 py-2 rounded-lg rounded-bl-none",
                                children: S.jsx(BR, {
                                    className: "w-4 h-4 animate-spin"
                                })
                            })
                        }), S.jsx("div", {
                            ref: l
                        })]
                    }), n.length <= 2 && !s && S.jsx("div", {
                        className: "px-3 pb-2 flex flex-wrap gap-1.5",
                        children: Q5.map(d => S.jsx("button", {
                            onClick: () => u(d),
                            className: "text-xs bg-muted text-foreground px-2.5 py-1.5 rounded-full hover:bg-gold hover:text-primary transition-colors",
                            children: d
                        }, d))
                    }), S.jsxs("div", {
                        className: "p-3 border-t border-border flex gap-2",
                        children: [S.jsx("input", {
                            value: i,
                            onChange: d => o(d.target.value),
                            onKeyDown: d => d.key === "Enter" && i.trim() && u(i),
                            placeholder: "Type a message...",
                            disabled: s,
                            className: "flex-1 bg-muted text-foreground text-sm px-3 py-2 rounded-md outline-none focus:ring-1 focus:ring-gold disabled:opacity-50"
                        }), S.jsx("button", {
                            onClick: () => i.trim() && u(i),
                            disabled: s || !i.trim(),
                            className: "bg-gradient-gold text-primary p-2 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50",
                            children: S.jsx(QR, {
                                className: "w-4 h-4"
                            })
                        })]
                    })]
                })
            })]
        })
    },
    Z5 = () => {
        const {
            pathname: e
        } = $o();
        return w.useEffect(() => {
            window.scrollTo(0, 0)
        }, [e]), null
    },
    yd = "https://sahacarah.in",
    vd = "Sahacarah Interior",
    J5 = "interior designer in Howrah, interior design Kolkata, modular kitchen Kolkata, best interior designer West Bengal, home interior Howrah, 2BHK interior design Kolkata, 3BHK flat interior Kolkata, affordable interior design Kolkata, living room interior design Kolkata, bedroom interior designer Howrah, office interior design Kolkata, commercial interior West Bengal, false ceiling design Kolkata, wardrobe design Kolkata, kitchen renovation Howrah, bathroom renovation Kolkata, flat interior design Kolkata, turnkey interior Kolkata, interior decorator near me Howrah, modular kitchen price Kolkata, low cost interior design Kolkata, house construction Howrah, land to house construction West Bengal, interior design trends 2026 Kolkata, sustainable interior design Kolkata, Bally Howrah interior designer, Sahacarah Interior";

function ez({
    title: e,
    description: t = "Premium end-to-end interior design & construction in Kolkata. Modular kitchens, bedrooms, commercial spaces & land-to-house construction. 10-year warranty.",
    path: n = "/",
    type: r = "website",
    keywords: i = J5
}) {
    const o = e ? `${e} | ${vd}` : `${vd} | Premium Interior Design Kolkata`,
        s = `${yd}${n}`;
    return S.jsxs(z2, {
        children: [S.jsx("title", {
            children: o
        }), S.jsx("meta", {
            name: "description",
            content: t
        }), S.jsx("meta", {
            name: "keywords",
            content: i
        }), S.jsx("link", {
            rel: "canonical",
            href: s
        }), S.jsx("meta", {
            name: "geo.region",
            content: "IN-WB"
        }), S.jsx("meta", {
            name: "geo.placename",
            content: "Howrah, Kolkata"
        }), S.jsx("meta", {
            name: "geo.position",
            content: "22.6533;88.3412"
        }), S.jsx("meta", {
            name: "ICBM",
            content: "22.6533, 88.3412"
        }), S.jsx("meta", {
            httpEquiv: "content-language",
            content: "en-IN"
        }), S.jsx("html", {
            lang: "en"
        }), S.jsx("meta", {
            property: "og:title",
            content: o
        }), S.jsx("meta", {
            property: "og:description",
            content: t
        }), S.jsx("meta", {
            property: "og:url",
            content: s
        }), S.jsx("meta", {
            property: "og:type",
            content: r
        }), S.jsx("meta", {
            property: "og:site_name",
            content: vd
        }), S.jsx("meta", {
            property: "og:image",
            content: `${yd}/og-image.jpg`
        }), S.jsx("meta", {
            property: "og:image:width",
            content: "1200"
        }), S.jsx("meta", {
            property: "og:image:height",
            content: "630"
        }), S.jsx("meta", {
            property: "og:locale",
            content: "en_IN"
        }), S.jsx("meta", {
            name: "twitter:card",
            content: "summary_large_image"
        }), S.jsx("meta", {
            name: "twitter:title",
            content: o
        }), S.jsx("meta", {
            name: "twitter:description",
            content: t
        }), S.jsx("meta", {
            name: "twitter:image",
            content: `${yd}/og-image.jpg`
        })]
    })
}
const tz = "/assets/hero-interior-AIzUv9Cz.jpg",
    nz = "/assets/hero-interior-yrli2a81.webp",
    I0 = "/assets/service-kitchen-NVzcjkbM.jpg",
    O0 = "/assets/service-kitchen-D_01WtOq.webp",
    D0 = "/assets/service-bedroom-DLEGLCiE.jpg",
    L0 = "/assets/service-bedroom-B4-oiKSa.webp",
    j0 = "/assets/service-living-CSJCtNYP.jpg",
    _0 = "/assets/service-living-CuiFoKa8.webp",
    F0 = ({
        webpSrc: e,
        src: t,
        alt: n,
        ...r
    }) => S.jsxs("picture", {
        children: [S.jsx("source", {
            srcSet: e,
            type: "image/webp"
        }), S.jsx("img", {
            src: t,
            alt: n,
            ...r
        })]
    }),
    it = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: e => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: e * .1,
                duration: .6
            }
        })
    },
    rz = [{
        icon: DR,
        label: "Modular Kitchen",
        img: I0,
        webp: O0,
        summary: "Custom designs with smart storage, chimney & hob"
    }, {
        icon: NR,
        label: "Bedroom Design",
        img: D0,
        webp: L0,
        summary: "Elegant wardrobes, study corners & dressing areas"
    }, {
        icon: XR,
        label: "Living Room",
        img: j0,
        webp: _0,
        summary: "Stunning decor, custom furniture & entertainment zones"
    }, {
        icon: MR,
        label: "Bathroom",
        img: I0,
        webp: O0,
        summary: "Premium tiles, sanitary ware & modern fixtures"
    }, {
        icon: JR,
        label: "TV Units",
        img: j0,
        webp: _0,
        summary: "Sleek units with built-in storage & cable management"
    }, {
        icon: KR,
        label: "Wall Paint & Wallpaper",
        img: D0,
        webp: L0,
        summary: "Premium paints, textures & designer wallpapers"
    }],
    iz = [{
        icon: OR,
        title: "On-Time Delivery",
        desc: "Projects delivered within 45 days*"
    }, {
        icon: zR,
        title: "No Hidden Costs",
        desc: "Transparent pricing, no surprises"
    }, {
        icon: YR,
        title: "10-Year Warranty",
        desc: "Flat warranty on all installations"
    }, {
        icon: ZR,
        title: "End-to-End Service",
        desc: "From design to installation, we handle it all"
    }],
    oz = [{
        name: "Rajesh Kumar",
        location: "Howrah",
        rating: 5,
        text: "Excellent work by the Sahacarah team! They transformed our 2BHK apartment completely. The modular kitchen and wardrobe designs are stunning. Very professional and timely delivery.",
        project: "2BHK Complete Interior"
    }, {
        name: "Priya Mukherjee",
        location: "Salt Lake, Kolkata",
        rating: 5,
        text: "We hired them for our office renovation and the result exceeded our expectations. The false ceiling, lighting, and furniture layout made our workspace look premium. Highly recommended!",
        project: "Commercial Office Renovation"
    }, {
        name: "Amit Sharma",
        location: "Bally, Howrah",
        rating: 5,
        text: "Best interior designers in Howrah! Got our living room and bedroom done. The wallpaper selection and TV unit design are absolutely beautiful. Fair pricing with no hidden costs.",
        project: "Living Room & Bedroom"
    }, {
        name: "Sunita Dey",
        location: "Kolkata",
        rating: 5,
        text: "From concept to completion, the team was fantastic. Our modular kitchen is a dream come true. They handled everything — tiles, plumbing, electrical, and woodwork. 5 stars!",
        project: "Modular Kitchen"
    }, {
        name: "Debashis Ghosh",
        location: "Anand Nagar, Howrah",
        rating: 5,
        text: "Got our new flat interiors done by Fit&Fix (now Sahacarah). The quality of materials and craftsmanship is top-notch. The bathroom renovation was especially impressive.",
        project: "3BHK Full Home Interior"
    }, {
        name: "Mousumi Roy",
        location: "Sapuipara, Howrah",
        rating: 4,
        text: "Good work on our pooja unit and false ceiling. The Mandir jali design they created is beautiful. Team is cooperative and listens to your requirements. Would recommend for woodwork.",
        project: "Pooja Unit & False Ceiling"
    }],
    sz = [{
        icon: FR,
        title: "Residential Interiors",
        desc: "Apartments, flats, independent houses — from 1BHK to luxury villas"
    }, {
        icon: IR,
        title: "Commercial Spaces",
        desc: "Offices, showrooms, retail stores, restaurants & cafes"
    }],
    az = [{
        icon: eM,
        step: "1",
        title: "Meet a Designer",
        desc: "Free consultation to understand your vision"
    }, {
        icon: LR,
        step: "2",
        title: "Advance Payment",
        desc: "50% advance to start the work",
        payment: "50%"
    }, {
        icon: _R,
        step: "3",
        title: "Execution Begins",
        desc: "40% payment during execution",
        payment: "40%"
    }, {
        icon: tM,
        step: "4",
        title: "Final Completion",
        desc: "10% on quality-checked completion",
        payment: "10%"
    }, {
        icon: GR,
        step: "5",
        title: "Move In & Enjoy!",
        desc: "Transportation charges extra if applicable"
    }],
    lz = () => S.jsxs("div", {
        className: "min-h-screen",
        children: [S.jsx(ez, {
            path: "/",
            title: "Best Interior Designer in Kolkata",
            description: "Sahacarah Interior — Kolkata's top-rated interior design & construction company. Modular kitchens, bedrooms, commercial interiors & turnkey solutions. 10-year warranty. Get free estimate!",
            keywords: "best interior designer Kolkata, modular kitchen Kolkata, home interior design, turnkey interior, commercial interior Kolkata, affordable interior designer, Sahacarah Interior"
        }), S.jsxs("section", {
            className: "relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden",
            children: [S.jsx(F0, {
                webpSrc: nz,
                src: tz,
                alt: "best interior designer in Kolkata - luxury home interior design by Sahacarah Interior",
                className: "absolute inset-0 w-full h-full object-cover",
                width: 1920,
                height: 1080,
                fetchPriority: "high",
                loading: "eager"
            }), S.jsx("div", {
                className: "absolute inset-0 bg-primary/70"
            }), S.jsxs("div", {
                className: "relative z-10 container mx-auto px-4 text-center",
                children: [S.jsxs(ae.h1, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .2
                    },
                    className: "text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-cream leading-tight max-w-4xl mx-auto",
                    children: ["Transform Your Space Into a", " ", S.jsx("span", {
                        className: "text-gradient-gold",
                        children: "Masterpiece"
                    })]
                }), S.jsx(ae.p, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: .5
                    },
                    className: "text-cream/70 mt-6 text-lg md:text-xl max-w-2xl mx-auto",
                    children: "Premium end-to-end interior solutions for homes, apartments & commercial spaces in Kolkata. From modular kitchens to complete building renovations."
                }), S.jsxs(ae.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: .7
                    },
                    className: "mt-8 flex flex-col sm:flex-row gap-4 justify-center",
                    children: [S.jsx(Ar, {
                        to: "/contact",
                        className: "bg-gradient-gold text-primary font-semibold px-8 py-3.5 rounded-md text-base hover:opacity-90 transition-opacity",
                        children: "Get Free Estimate"
                    }), S.jsx(Ar, {
                        to: "/services",
                        className: "border border-gold/40 text-cream font-medium px-8 py-3.5 rounded-md text-base hover:bg-gold/10 transition-colors",
                        children: "Explore Services"
                    })]
                })]
            })]
        }), S.jsx("section", {
            className: "section-padding bg-muted",
            children: S.jsxs("div", {
                className: "container mx-auto",
                children: [S.jsxs(ae.div, {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-10",
                    children: [S.jsx(ae.p, {
                        variants: it,
                        custom: 0,
                        className: "text-gold font-medium tracking-widest uppercase text-sm",
                        children: "We Serve Both"
                    }), S.jsx(ae.h2, {
                        variants: it,
                        custom: 1,
                        className: "text-3xl md:text-4xl font-heading font-bold text-foreground mt-2",
                        children: "Residential & Commercial Interiors"
                    })]
                }), S.jsx(ae.div, {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: !0
                    },
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto",
                    children: sz.map((e, t) => S.jsxs(ae.div, {
                        variants: it,
                        custom: t,
                        className: "flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-gold/40 transition-colors",
                        children: [S.jsx("div", {
                            className: "w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0",
                            children: S.jsx(e.icon, {
                                className: "w-6 h-6 text-gold"
                            })
                        }), S.jsxs("div", {
                            children: [S.jsx("h3", {
                                className: "font-heading font-semibold text-foreground text-lg",
                                children: e.title
                            }), S.jsx("p", {
                                className: "text-muted-foreground text-sm mt-1",
                                children: e.desc
                            })]
                        })]
                    }, e.title))
                })]
            })
        }), S.jsx("section", {
            className: "section-padding bg-background",
            children: S.jsxs("div", {
                className: "container mx-auto",
                children: [S.jsxs(ae.div, {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-12",
                    children: [S.jsx(ae.p, {
                        variants: it,
                        custom: 0,
                        className: "text-gold font-medium tracking-widest uppercase text-sm",
                        children: "What We Do"
                    }), S.jsx(ae.h2, {
                        variants: it,
                        custom: 1,
                        className: "text-3xl md:text-4xl font-heading font-bold text-foreground mt-2",
                        children: "End-to-End Interior Solutions"
                    })]
                }), S.jsx(ae.div, {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: !0
                    },
                    className: "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6",
                    children: rz.map((e, t) => S.jsxs(ae.div, {
                        variants: it,
                        custom: t,
                        className: "group relative rounded-lg overflow-hidden aspect-[4/3] cursor-pointer",
                        children: [S.jsx(F0, {
                            webpSrc: e.webp,
                            src: e.img,
                            alt: `${e.label} design in Kolkata - interior designer Kolkata`,
                            loading: "lazy",
                            className: "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                            width: 800,
                            height: 600
                        }), S.jsx("div", {
                            className: "absolute inset-0 bg-primary/50 group-hover:bg-primary/70 transition-colors duration-300"
                        }), S.jsxs("div", {
                            className: "relative z-10 flex flex-col items-center justify-center h-full gap-2 px-3",
                            children: [S.jsx(e.icon, {
                                className: "w-8 h-8 text-gold"
                            }), S.jsx("span", {
                                className: "text-cream font-heading font-semibold text-base md:text-lg",
                                children: e.label
                            }), S.jsx("p", {
                                className: "text-cream/70 text-xs md:text-sm text-center line-clamp-2 max-w-[180px] opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                children: e.summary
                            })]
                        })]
                    }, e.label))
                }), S.jsx("div", {
                    className: "text-center mt-8",
                    children: S.jsxs(Ar, {
                        to: "/services",
                        className: "inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all",
                        children: ["View All Services ", S.jsx(cy, {
                            className: "w-4 h-4"
                        })]
                    })
                })]
            })
        }), S.jsx("section", {
            className: "section-padding bg-muted",
            children: S.jsxs("div", {
                className: "container mx-auto",
                children: [S.jsxs(ae.div, {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-12",
                    children: [S.jsx(ae.p, {
                        variants: it,
                        custom: 0,
                        className: "text-gold font-medium tracking-widest uppercase text-sm",
                        children: "Simple Process"
                    }), S.jsx(ae.h2, {
                        variants: it,
                        custom: 1,
                        className: "text-3xl md:text-4xl font-heading font-bold text-foreground mt-2",
                        children: "How It Works"
                    })]
                }), S.jsxs(ae.div, {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: !0
                    },
                    className: "relative max-w-4xl mx-auto",
                    children: [S.jsx("div", {
                        className: "hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gold/20"
                    }), S.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4",
                        children: az.map((e, t) => S.jsxs(ae.div, {
                            variants: it,
                            custom: t,
                            className: "flex flex-col items-center text-center relative",
                            children: [S.jsx("div", {
                                className: "w-20 h-20 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mb-3 relative z-10 bg-muted",
                                children: S.jsx(e.icon, {
                                    className: "w-8 h-8 text-gold"
                                })
                            }), e.payment && S.jsxs("span", {
                                className: "text-xs font-semibold text-gold bg-gold/10 px-2 py-0.5 rounded-full mb-1",
                                children: [e.payment, " Payment"]
                            }), S.jsx("h3", {
                                className: "font-heading font-semibold text-foreground text-sm md:text-base",
                                children: e.title
                            }), S.jsx("p", {
                                className: "text-muted-foreground text-xs mt-1 max-w-[160px]",
                                children: e.desc
                            })]
                        }, e.title))
                    })]
                })]
            })
        }), S.jsx("section", {
            className: "section-padding bg-gradient-navy",
            children: S.jsxs("div", {
                className: "container mx-auto",
                children: [S.jsx(ae.div, {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-12",
                    children: S.jsxs(ae.h2, {
                        variants: it,
                        custom: 0,
                        className: "text-3xl md:text-4xl font-heading font-bold text-cream",
                        children: ["Why Homeowners Choose", " ", S.jsx("span", {
                            className: "text-gradient-gold",
                            children: "Sahacarah"
                        })]
                    })
                }), S.jsx(ae.div, {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: !0
                    },
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: iz.map((e, t) => S.jsxs(ae.div, {
                        variants: it,
                        custom: t,
                        className: "text-center p-6 rounded-lg border border-gold/20 hover:border-gold/50 transition-colors bg-primary/50",
                        children: [S.jsx("div", {
                            className: "w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center",
                            children: S.jsx(e.icon, {
                                className: "w-7 h-7 text-gold"
                            })
                        }), S.jsx("h3", {
                            className: "font-heading font-semibold text-cream text-lg mb-2",
                            children: e.title
                        }), S.jsx("p", {
                            className: "text-cream/60 text-sm",
                            children: e.desc
                        })]
                    }, e.title))
                })]
            })
        }), S.jsx("section", {
            className: "section-padding bg-background",
            children: S.jsxs("div", {
                className: "container mx-auto",
                children: [S.jsxs(ae.div, {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-12",
                    children: [S.jsx(ae.p, {
                        variants: it,
                        custom: 0,
                        className: "text-gold font-medium tracking-widest uppercase text-sm",
                        children: "What Our Clients Say"
                    }), S.jsxs(ae.h2, {
                        variants: it,
                        custom: 1,
                        className: "text-3xl md:text-4xl font-heading font-bold text-foreground mt-2",
                        children: ["Rated ", S.jsx("span", {
                            className: "text-gradient-gold",
                            children: "4.9★"
                        }), " on Google"]
                    }), S.jsx(ae.p, {
                        variants: it,
                        custom: 2,
                        className: "text-muted-foreground mt-2",
                        children: "Based on 55+ Google Reviews & 57 JustDial Reviews"
                    })]
                }), S.jsx(ae.div, {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: !0
                    },
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: oz.map((e, t) => S.jsxs(ae.div, {
                        variants: it,
                        custom: t,
                        className: "bg-card p-6 rounded-lg border border-border hover:border-gold/40 transition-colors relative",
                        children: [S.jsx(qR, {
                            className: "w-8 h-8 text-gold/20 absolute top-4 right-4"
                        }), S.jsxs("div", {
                            className: "flex gap-1 mb-3",
                            children: [Array.from({
                                length: e.rating
                            }).map((n, r) => S.jsx(fy, {
                                className: "w-4 h-4 text-gold fill-gold"
                            }, r)), Array.from({
                                length: 5 - e.rating
                            }).map((n, r) => S.jsx(fy, {
                                className: "w-4 h-4 text-gold/30"
                            }, r))]
                        }), S.jsxs("p", {
                            className: "text-muted-foreground text-sm leading-relaxed mb-4",
                            children: ['"', e.text, '"']
                        }), S.jsxs("div", {
                            className: "border-t border-border pt-3",
                            children: [S.jsx("p", {
                                className: "font-heading font-semibold text-foreground text-sm",
                                children: e.name
                            }), S.jsxs("p", {
                                className: "text-muted-foreground text-xs",
                                children: [e.location, " • ", e.project]
                            })]
                        })]
                    }, e.name))
                }), S.jsx("div", {
                    className: "text-center mt-8",
                    children: S.jsxs("a", {
                        href: "https://www.google.com/search?q=Sahacarah+interior+(fit%26fix)+Howrah#lrd=0x39f89dc8b2143917:0xc253dd699e9683ce",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all",
                        children: ["See All Google Reviews ", S.jsx(cy, {
                            className: "w-4 h-4"
                        })]
                    })
                })]
            })
        }), S.jsx("section", {
            className: "section-padding bg-gradient-navy",
            children: S.jsxs("div", {
                className: "container mx-auto text-center max-w-2xl",
                children: [S.jsx(ae.h2, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-3xl md:text-4xl font-heading font-bold text-cream",
                    children: "Ready to Transform Your Space?"
                }), S.jsx(ae.p, {
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: .2
                    },
                    className: "text-cream/60 mt-4 text-lg",
                    children: "Book a free consultation today. We serve residential apartments, independent houses, commercial offices, and complete land-to-house projects."
                }), S.jsxs(ae.div, {
                    initial: {
                        opacity: 0,
                        y: 15
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: .3
                    },
                    className: "mt-8 flex flex-col sm:flex-row gap-4 justify-center",
                    children: [S.jsx(Ar, {
                        to: "/contact",
                        className: "bg-gradient-gold text-primary font-semibold px-8 py-3.5 rounded-md hover:opacity-90 transition-opacity",
                        children: "Get Free Estimate"
                    }), S.jsx("a", {
                        href: "https://wa.me/917003853453",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "border border-gold/40 text-cream font-medium px-8 py-3.5 rounded-md hover:bg-gold/10 transition-colors",
                        children: "Chat on WhatsApp"
                    })]
                })]
            })
        })]
    }),
    uz = w.lazy(() => Vo(() =>
        import ("./Services-z2tPMvMS.js"), __vite__mapDeps([0, 1]))),
    cz = w.lazy(() => Vo(() =>
        import ("./Contact-BqJWWdag.js"), __vite__mapDeps([2, 3]))),
    dz = w.lazy(() => Vo(() =>
        import ("./About-B3Q463sA.js"), __vite__mapDeps([4, 3]))),
    fz = w.lazy(() => Vo(() =>
        import ("./PricingCalculator-VMwQoCvT.js"), __vite__mapDeps([5, 6, 1]))),
    hz = w.lazy(() => Vo(() =>
        import ("./Gallery-CrlJ4t3w.js"), __vite__mapDeps([7, 6]))),
    pz = w.lazy(() => Vo(() =>
        import ("./NotFound-wh9xLA7y.js"), [])),
    mz = new aP,
    gz = () => S.jsx(uP, {
        client: mz,
        children: S.jsx(Nw, {
            children: S.jsxs(MI, {
                children: [S.jsx(FM, {}), S.jsx(AA, {}), S.jsxs(s2, {
                    children: [S.jsx(Z5, {}), S.jsx(r_, {}), S.jsx(w.Suspense, {
                        fallback: S.jsx("div", {
                            className: "min-h-screen"
                        }),
                        children: S.jsxs(JP, {
                            children: [S.jsx(pr, {
                                path: "/",
                                element: S.jsx(lz, {})
                            }), S.jsx(pr, {
                                path: "/services",
                                element: S.jsx(uz, {})
                            }), S.jsx(pr, {
                                path: "/contact",
                                element: S.jsx(cz, {})
                            }), S.jsx(pr, {
                                path: "/about",
                                element: S.jsx(dz, {})
                            }), S.jsx(pr, {
                                path: "/pricing",
                                element: S.jsx(fz, {})
                            }), S.jsx(pr, {
                                path: "/gallery",
                                element: S.jsx(hz, {})
                            }), S.jsx(pr, {
                                path: "*",
                                element: S.jsx(pz, {})
                            })]
                        })
                    }), S.jsx(o_, {}), S.jsx(s_, {}), S.jsx(X5, {})]
                }), S.jsx(Y2, {})]
            })
        })
    });
sw(document.getElementById("root")).render(S.jsx(gz, {}));
export {
    cy as A, IR as B, DR as C, Vu as D, Vw as E, ze as F, hn as G, FR as H, wt as I, eI as J, kz as K, Ar as L, UR as M, Cz as N, NI as O, F0 as P, zR as Q, TR as R, ez as S, JR as T, xz as U, $o as V, tM as W, hp as X, _R as a, O0 as b, de as c, D0 as d, L0 as e, _0 as f, NR as g, XR as h, MR as i, S as j, I0 as k, j0 as l, ae as m, KR as n, YR as o, ZS as p, QR as q, w as r, uS as s, WR as t, $R as u, vz as v, nz as w, tz as x, Ii as y, BA as z
};