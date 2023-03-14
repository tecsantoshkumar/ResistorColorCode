! function r(i, o, a) {
    function s(t, e) {
        if (!o[t]) {
            if (!i[t]) { var n = "function" == typeof require && require; if (!e && n) return n(t, !0); if (u) return u(t, !0); throw (n = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND", n }
            n = o[t] = { exports: {} }, i[t][0].call(n.exports, function(e) { return s(i[t][1][e] || e) }, n, n.exports, r, i, o, a)
        }
        return o[t].exports
    }
    for (var u = "function" == typeof require && require, e = 0; e < a.length; e++) s(a[e]);
    return s
}({
    1: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
        var o = r(e("./i18n")),
            a = r(e("./units"));

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        n.default = function() {
            function i() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, i) }
            var e, t, n;
            return e = i, n = [{
                key: "show",
                value: function(e, t) {
                    e = this.createList(e);
                    i.addResistorInfo(e, t), i.add(e, o.default.localize("totalPowerResistors", a.default.formatWattage(t.totalResistorPower))), i.add(e, o.default.localize("totalPowerLEDs", a.default.formatWattage(t.totalLedPower))), i.add(e, o.default.localize("totalPowerCircuit", a.default.formatWattage(t.totalCircuitPower))), i.add(e, o.default.localize("totalCurrentDrawn", a.default.formatAmper(t.totalCurrent))), i.add(e, o.default.localize("commonTolerance")), i.add(e, o.default.localize("makeSure")), i.add(e, o.default.localize("leaveSpace"))
                }
            }, {
                key: "addResistorInfo",
                value: function(e, t) {
                    var n = t.lines[0].resistor,
                        r = t.lines[t.lines.length - 1].resistor;
                    1 === t.lines.length ? (i.add(e, o.default.localize("youWillNeed1", a.default.formatResistance(n.resistance), a.default.formatPowerRating(n.wattage))), i.addResistorColorCodes(e, n), i.addResistorWattage(e, n)) : 2 <= t.lines.length && (n.resistance.equals(r.resistance) ? (i.add(e, o.default.localize("youWillNeed2", t.lines.length, a.default.formatResistance(n.resistance), a.default.formatPowerRating(n.wattage))), i.addResistorColorCodes(e, n), i.addResistorWattage(e, n)) : (i.add(e, o.default.localize("youWillNeed3", t.lines.length - 1, a.default.formatResistance(n.resistance), a.default.formatPowerRating(n.wattage), a.default.formatResistance(r.resistance), a.default.formatPowerRating(r.wattage))), i.addResistorColorCodes(e, n), i.addResistorColorCodes(e, r), i.addResistorWattage(e, n), i.addResistorWattage(e, r)))
                }
            }, { key: "addResistorColorCodes", value: function(e, t) { i.add(e, o.default.localize("theResistorColorCoded", a.default.formatResistance(t.resistance), o.default.localize(t.bands[0]), o.default.localize(t.bands[1]), o.default.localize(t.bands[2]), o.default.localize(t.bands[3]))) } }, { key: "addResistorWattage", value: function(e, t) { i.add(e, o.default.localize("eachResistorConsumes", a.default.formatResistance(t.resistance), a.default.formatWattage(t.wattage))) } }, {
                key: "createList",
                value: function(e) {
                    var t = $("#" + e);
                    t.empty();
                    e = $("<ul>");
                    return t.append(e), e
                }
            }, {
                key: "add",
                value: function(e, t) {
                    var n = $("<li>");
                    n.text(t), e.append(n)
                }
            }], (t = null) && s(e.prototype, t), n && s(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), i
        }()
    }, { "./i18n": 9, "./units": 14 }],
    2: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
        var f = r(e("./decimal")),
            h = r(e("./series"));

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        e = function() {
            function d() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, d), this.sourceVoltage = new f.default(0), this.lines = new Array, this.totalResistorPower = new f.default(0), this.totalLedPower = new f.default(0), this.totalCircuitPower = new f.default(0), this.totalCurrent = new f.default(0) }
            var e, t, n;
            return e = d, n = [{
                key: "create",
                value: function(e, t, n, r) {
                    for (var i = new d, o = (i.sourceVoltage = e).dividedBy(t).floor(), a = r.dividedBy(o).ceil(), s = 0; s < a.minus(1); s++) {
                        var u = h.default.create(o, e, t, n);
                        i.lines.push(u)
                    }
                    var l = r.minus(o.times(a.minus(new f.default(1)))),
                        l = h.default.create(l, e, t, n);
                    i.lines.push(l);
                    for (var c = 0; c < i.lines.length; c++) i.totalResistorPower = i.totalResistorPower.add(i.lines[c].resistor.wattage);
                    return i.totalLedPower = n.times(t).times(r), i.totalCircuitPower = i.totalLedPower.add(i.totalResistorPower), i.totalCurrent = n.times(i.lines.length), i
                }
            }], (t = null) && i(e.prototype, t), n && i(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), d
        }();
        n.default = e
    }, { "./decimal": 6, "./series": 12 }],
    3: [function(e, t, n) {
        "use strict";

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0, n.default = function() {
            function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e) }
            var t, n, r;
            return t = e, r = [{
                key: "copy",
                value: function(e) {
                    if (window.clipboardData && window.clipboardData.setData) return window.clipboardData.setData("Text", e);
                    if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                        var t = document.createElement("textarea");
                        t.textContent = e, t.style.position = "fixed", document.body.appendChild(t), t.select();
                        try { return document.execCommand("copy") } catch (e) { return console.warn("Copy to clipboard failed.", e), !1 } finally { document.body.removeChild(t) }
                    }
                }
            }], (n = null) && i(t.prototype, n), r && i(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), e
        }()
    }, {}],
    4: [function(e, t, n) {
        "use strict";
        var r = e("./cookies.js");
        t.exports = function() {
            return {
                init: function() {
                    $(function() {
                        var e = $(".consent"),
                            t = $(".consent .accept");
                        e.offsetHeight, r().get("consent") || e.addClass("show"), t.click(function() { r().set("consent", !0), e.removeClass("show") })
                    })
                }
            }
        }
    }, { "./cookies.js": 5 }],
    5: [function(e, t, n) {
        "use strict";
        t.exports = function() {
            return {
                set: function(e, t) {
                    var n = new Date;
                    n.setTime(n.getTime() + 31536e6);
                    n = "; expires=" + n.toGMTString();
                    document.cookie = e + "=" + t + n + "; path=/"
                },
                get: function(e, t) {
                    for (var n = e + "=", r = document.cookie.split(";"), i = 0; i < r.length; i++) {
                        for (var o = r[i];
                            " " == o.charAt(0);) o = o.substring(1, o.length);
                        if (0 == o.indexOf(n)) return o.substring(n.length, o.length)
                    }
                    return t
                }
            }
        }
    }, {}],
    6: [function(e, qe, t) {
        "use strict";

        function Ae(e) { return (Ae = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }! function(e) {
            var c, M, t, o, a = 9e15,
                p = 1e9,
                w = "0123456789abcdef",
                r = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
                i = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
                s = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -a, maxE: a, crypto: !1 },
                y = !0,
                u = "[DecimalError] ",
                v = u + "Invalid argument: ",
                l = u + "Precision limit exceeded",
                d = u + "crypto unavailable",
                _ = Math.floor,
                g = Math.pow,
                f = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
                h = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
                m = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
                b = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                S = 1e7,
                P = 7,
                N = r.length - 1,
                E = i.length - 1,
                C = { name: "[object Decimal]" };

            function O(e) {
                var t, n, r, i = e.length - 1,
                    o = "",
                    a = e[0];
                if (0 < i) {
                    for (o += a, t = 1; t < i; t++) r = e[t] + "", (n = P - r.length) && (o += W(n)), o += r;
                    a = e[t], (n = P - (r = a + "").length) && (o += W(n))
                } else if (0 === a) return "0";
                for (; a % 10 == 0;) a /= 10;
                return o + a
            }

            function x(e, t, n) { if (e !== ~~e || e < t || n < e) throw Error(v + e) }

            function R(e, t, n, r) { for (var i, o, a = e[0]; 10 <= a; a /= 10) --t; return --t < 0 ? (t += P, i = 0) : (i = Math.ceil((t + 1) / P), t %= P), a = g(10, P - t), o = e[i] % a | 0, null == r ? t < 3 ? (0 == t ? o = o / 100 | 0 : 1 == t && (o = o / 10 | 0), n < 4 && 99999 == o || 3 < n && 49999 == o || 5e4 == o || 0 == o) : (n < 4 && o + 1 == a || 3 < n && o + 1 == a / 2) && (e[i + 1] / a / 100 | 0) == g(10, t - 2) - 1 || (o == a / 2 || 0 == o) && 0 == (e[i + 1] / a / 100 | 0) : t < 4 ? (0 == t ? o = o / 1e3 | 0 : 1 == t ? o = o / 100 | 0 : 2 == t && (o = o / 10 | 0), (r || n < 4) && 9999 == o || !r && 3 < n && 4999 == o) : ((r || n < 4) && o + 1 == a || !r && 3 < n && o + 1 == a / 2) && (e[i + 1] / a / 1e3 | 0) == g(10, t - 3) - 1 }

            function k(e, t, n) { for (var r, i, o = [0], a = 0, s = e.length; a < s;) { for (i = o.length; i--;) o[i] *= t; for (o[0] += w.indexOf(e.charAt(a++)), r = 0; r < o.length; r++) o[r] > n - 1 && (void 0 === o[r + 1] && (o[r + 1] = 0), o[r + 1] += o[r] / n | 0, o[r] %= n) } return o.reverse() }
            C.absoluteValue = C.abs = function() { var e = new this.constructor(this); return e.s < 0 && (e.s = 1), j(e) }, C.ceil = function() { return j(new this.constructor(this), this.e + 1, 2) }, C.comparedTo = C.cmp = function(e) {
                var t, n, r = this,
                    i = r.d,
                    o = (e = new r.constructor(e)).d,
                    a = r.s,
                    s = e.s;
                if (!i || !o) return a && s ? a !== s ? a : i === o ? 0 : !i ^ a < 0 ? 1 : -1 : NaN;
                if (!i[0] || !o[0]) return i[0] ? a : o[0] ? -s : 0;
                if (a !== s) return a;
                if (r.e !== e.e) return r.e > e.e ^ a < 0 ? 1 : -1;
                for (t = 0, n = (r = i.length) < (e = o.length) ? r : e; t < n; ++t)
                    if (i[t] !== o[t]) return i[t] > o[t] ^ a < 0 ? 1 : -1;
                return r === e ? 0 : e < r ^ a < 0 ? 1 : -1
            }, C.cosine = C.cos = function() {
                var e, t, n = this,
                    r = n.constructor;
                return n.d ? n.d[0] ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + P, r.rounding = 1, n = function(e, t) {
                    var n, r = t.d.length;
                    r = r < 32 ? (n = Math.ceil(r / 3), Math.pow(4, -n).toString()) : (n = 16, "2.3283064365386962890625e-10");
                    e.precision += n, t = J(e, 1, t.times(r), new e(1));
                    for (var i = n; i--;) {
                        var o = t.times(t);
                        t = o.times(o).minus(o).times(8).plus(1)
                    }
                    return e.precision -= n, t
                }(r, K(r, n)), r.precision = e, r.rounding = t, j(2 == o || 3 == o ? n.neg() : n, e, t, !0)) : new r(1) : new r(NaN)
            }, C.cubeRoot = C.cbrt = function() {
                var e, t, n, r, i, o, a, s, u, l, c = this,
                    d = c.constructor;
                if (!c.isFinite() || c.isZero()) return new d(c);
                for (y = !1, (o = c.s * Math.pow(c.s * c, 1 / 3)) && Math.abs(o) != 1 / 0 ? r = new d(o.toString()) : (n = O(c.d), (o = ((e = c.e) - n.length + 1) % 3) && (n += 1 == o || -2 == o ? "0" : "00"), o = Math.pow(n, 1 / 3), e = _((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), (r = new d(n = o == 1 / 0 ? "5e" + e : (n = o.toExponential()).slice(0, n.indexOf("e") + 1) + e)).s = c.s), a = (e = d.precision) + 3;;)
                    if (l = (u = (s = r).times(s).times(s)).plus(c), r = T(l.plus(c).times(s), l.plus(u), a + 2, 1), O(s.d).slice(0, a) === (n = O(r.d)).slice(0, a)) {
                        if ("9999" != (n = n.slice(a - 3, a + 1)) && (i || "4999" != n)) {+n && (+n.slice(1) || "5" != n.charAt(0)) || (j(r, e + 1, 1), t = !r.times(r).times(r).eq(c)); break }
                        if (!i && (j(s, e + 1, 0), s.times(s).times(s).eq(c))) { r = s; break }
                        a += 4, i = 1
                    }
                return y = !0, j(r, e, d.rounding, t)
            }, C.decimalPlaces = C.dp = function() {
                var e, t = this.d,
                    n = NaN;
                if (t) {
                    if (n = ((e = t.length - 1) - _(this.e / P)) * P, e = t[e])
                        for (; e % 10 == 0; e /= 10) n--;
                    n < 0 && (n = 0)
                }
                return n
            }, C.dividedBy = C.div = function(e) { return T(this, new this.constructor(e)) }, C.dividedToIntegerBy = C.divToInt = function(e) { var t = this.constructor; return j(T(this, new t(e), 0, 1, 1), t.precision, t.rounding) }, C.equals = C.eq = function(e) { return 0 === this.cmp(e) }, C.floor = function() { return j(new this.constructor(this), this.e + 1, 3) }, C.greaterThan = C.gt = function(e) { return 0 < this.cmp(e) }, C.greaterThanOrEqualTo = C.gte = function(e) { e = this.cmp(e); return 1 == e || 0 === e }, C.hyperbolicCosine = C.cosh = function() {
                var e, t, n, r = (s = this).constructor,
                    i = new r(1);
                if (!s.isFinite()) return new r(s.s ? 1 / 0 : NaN);
                if (s.isZero()) return i;
                t = r.precision, n = r.rounding, r.precision = t + Math.max(s.e, s.sd()) + 4, r.rounding = 1;
                for (var o, a = (a = s.d.length) < 32 ? (e = Math.ceil(a / 3), Math.pow(4, -e).toString()) : (e = 16, "2.3283064365386962890625e-10"), s = J(r, 1, s.times(a), new r(1), !0), u = e, l = new r(8); u--;) o = s.times(s), s = i.minus(o.times(l.minus(o.times(l))));
                return j(s, r.precision = t, r.rounding = n, !0)
            }, C.hyperbolicSine = C.sinh = function() {
                var e, t, n, r = (a = this).constructor;
                if (!a.isFinite() || a.isZero()) return new r(a);
                if (e = r.precision, t = r.rounding, r.precision = e + Math.max(a.e, a.sd()) + 4, r.rounding = 1, (n = a.d.length) < 3) a = J(r, 2, a, a, !0);
                else
                    for (var i, o = 16 < (o = 1.4 * Math.sqrt(n)) ? 16 : 0 | o, a = J(r, 2, a = a.times(Math.pow(5, -o)), a, !0), s = new r(5), u = new r(16), l = new r(20); o--;) i = a.times(a), a = a.times(s.plus(i.times(u.times(i).plus(l))));
                return j(a, r.precision = e, r.rounding = t, !0)
            }, C.hyperbolicTangent = C.tanh = function() {
                var e, t, n = this,
                    r = n.constructor;
                return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 7, r.rounding = 1, T(n.sinh(), n.cosh(), r.precision = e, r.rounding = t)) : new r(n.s)
            }, C.inverseCosine = C.acos = function() {
                var e = this,
                    t = e.constructor,
                    n = e.abs().cmp(1),
                    r = t.precision,
                    i = t.rounding;
                return -1 !== n ? 0 === n ? e.isNeg() ? B(t, r, i) : new t(0) : new t(NaN) : e.isZero() ? B(t, r + 4, i).times(.5) : (t.precision = r + 6, t.rounding = 1, e = e.asin(), n = B(t, r + 4, i).times(.5), t.precision = r, t.rounding = i, n.minus(e))
            }, C.inverseHyperbolicCosine = C.acosh = function() {
                var e, t, n = this,
                    r = n.constructor;
                return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, y = !1, n = n.times(n).minus(1).sqrt().plus(n), y = !0, r.precision = e, r.rounding = t, n.ln()) : new r(n)
            }, C.inverseHyperbolicSine = C.asinh = function() {
                var e, t, n = this,
                    r = n.constructor;
                return !n.isFinite() || n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, y = !1, n = n.times(n).plus(1).sqrt().plus(n), y = !0, r.precision = e, r.rounding = t, n.ln())
            }, C.inverseHyperbolicTangent = C.atanh = function() {
                var e, t, n, r = this,
                    i = r.constructor;
                return r.isFinite() ? 0 <= r.e ? new i(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e = i.precision, t = i.rounding, n = r.sd(), Math.max(n, e) < 2 * -r.e - 1 ? j(new i(r), e, t, !0) : (i.precision = n = n - r.e, r = T(r.plus(1), new i(1).minus(r), n + e, 1), i.precision = e + 4, i.rounding = 1, r = r.ln(), i.precision = e, i.rounding = t, r.times(.5))) : new i(NaN)
            }, C.inverseSine = C.asin = function() {
                var e, t, n, r = this,
                    i = r.constructor;
                return r.isZero() ? new i(r) : (e = r.abs().cmp(1), t = i.precision, n = i.rounding, -1 !== e ? 0 === e ? ((e = B(i, t + 4, n).times(.5)).s = r.s, e) : new i(NaN) : (i.precision = t + 6, i.rounding = 1, r = r.div(new i(1).minus(r.times(r)).sqrt().plus(1)).atan(), i.precision = t, i.rounding = n, r.times(2)))
            }, C.inverseTangent = C.atan = function() {
                var e, t, n, r, i, o, a, s, u, l = this,
                    c = l.constructor,
                    d = c.precision,
                    f = c.rounding;
                if (l.isFinite()) { if (l.isZero()) return new c(l); if (l.abs().eq(1) && d + 4 <= E) return (a = B(c, d + 4, f).times(.25)).s = l.s, a } else { if (!l.s) return new c(NaN); if (d + 4 <= E) return (a = B(c, d + 4, f).times(.5)).s = l.s, a }
                for (c.precision = s = d + 10, c.rounding = 1, e = n = Math.min(28, s / P + 2 | 0); e; --e) l = l.div(l.times(l).plus(1).sqrt().plus(1));
                for (y = !1, t = Math.ceil(s / P), r = 1, u = l.times(l), a = new c(l), i = l; - 1 !== e;)
                    if (i = i.times(u), o = a.minus(i.div(r += 2)), i = i.times(u), void 0 !== (a = o.plus(i.div(r += 2))).d[t])
                        for (e = t; a.d[e] === o.d[e] && e--;);
                return n && (a = a.times(2 << n - 1)), y = !0, j(a, c.precision = d, c.rounding = f, !0)
            }, C.isFinite = function() { return !!this.d }, C.isInteger = C.isInt = function() { return !!this.d && _(this.e / P) > this.d.length - 2 }, C.isNaN = function() { return !this.s }, C.isNegative = C.isNeg = function() { return this.s < 0 }, C.isPositive = C.isPos = function() { return 0 < this.s }, C.isZero = function() { return !!this.d && 0 === this.d[0] }, C.lessThan = C.lt = function(e) { return this.cmp(e) < 0 }, C.lessThanOrEqualTo = C.lte = function(e) { return this.cmp(e) < 1 }, C.logarithm = C.log = function(e) {
                var t, n, r, i, o, a, s, u, l = this,
                    c = l.constructor,
                    d = c.precision,
                    f = c.rounding;
                if (null == e) e = new c(10), t = !0;
                else {
                    if (n = (e = new c(e)).d, e.s < 0 || !n || !n[0] || e.eq(1)) return new c(NaN);
                    t = e.eq(10)
                }
                if (n = l.d, l.s < 0 || !n || !n[0] || l.eq(1)) return new c(n && !n[0] ? -1 / 0 : 1 != l.s ? NaN : n ? 0 : 1 / 0);
                if (t)
                    if (1 < n.length) o = !0;
                    else {
                        for (i = n[0]; i % 10 == 0;) i /= 10;
                        o = 1 !== i
                    }
                if (y = !1, a = V(l, s = d + 5), r = t ? z(c, s + 10) : V(e, s), R((u = T(a, r, s, 1)).d, i = d, f))
                    do { if (a = V(l, s += 10), r = t ? z(c, s + 10) : V(e, s), u = T(a, r, s, 1), !o) {+O(u.d).slice(i + 1, i + 15) + 1 == 1e14 && (u = j(u, d + 1, 0)); break } } while (R(u.d, i += 10, f));
                return y = !0, j(u, d, f)
            }, C.minus = C.sub = function(e) {
                var t, n, r, i, o, a, s, u, l, c, d, f = this,
                    h = f.constructor;
                if (e = new h(e), !f.d || !e.d) return f.s && e.s ? f.d ? e.s = -e.s : e = new h(e.d || f.s !== e.s ? f : NaN) : e = new h(NaN), e;
                if (f.s != e.s) return e.s = -e.s, f.plus(e);
                if (l = f.d, d = e.d, s = h.precision, u = h.rounding, !l[0] || !d[0]) {
                    if (d[0]) e.s = -e.s;
                    else {
                        if (!l[0]) return new h(3 === u ? -0 : 0);
                        e = new h(f)
                    }
                    return y ? j(e, s, u) : e
                }
                if (n = _(e.e / P), f = _(f.e / P), l = l.slice(), o = f - n) {
                    for (a = (c = o < 0) ? (t = l, o = -o, d.length) : (t = d, n = f, l.length), (r = Math.max(Math.ceil(s / P), a) + 2) < o && (o = r, t.length = 1), t.reverse(), r = o; r--;) t.push(0);
                    t.reverse()
                } else {
                    for ((c = (r = l.length) < (a = d.length)) && (a = r), r = 0; r < a; r++)
                        if (l[r] != d[r]) { c = l[r] < d[r]; break }
                    o = 0
                }
                for (c && (t = l, l = d, d = t, e.s = -e.s), a = l.length, r = d.length - a; 0 < r; --r) l[a++] = 0;
                for (r = d.length; o < r;) {
                    if (l[--r] < d[r]) { for (i = r; i && 0 === l[--i];) l[i] = S - 1;--l[i], l[r] += S }
                    l[r] -= d[r]
                }
                for (; 0 === l[--a];) l.pop();
                for (; 0 === l[0]; l.shift()) --n;
                return l[0] ? (e.d = l, e.e = A(l, n), y ? j(e, s, u) : e) : new h(3 === u ? -0 : 0)
            }, C.modulo = C.mod = function(e) {
                var t, n = this,
                    r = n.constructor;
                return e = new r(e), !n.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || n.d && !n.d[0] ? j(new r(n), r.precision, r.rounding) : (y = !1, 9 == r.modulo ? (t = T(n, e.abs(), 0, 3, 1)).s *= e.s : t = T(n, e, 0, r.modulo, 1), t = t.times(e), y = !0, n.minus(t))
            }, C.naturalExponential = C.exp = function() { return U(this) }, C.naturalLogarithm = C.ln = function() { return V(this) }, C.negated = C.neg = function() { var e = new this.constructor(this); return e.s = -e.s, j(e) }, C.plus = C.add = function(e) {
                var t, n, r, i, o, a, s, u, l = this,
                    c = l.constructor;
                if (e = new c(e), !l.d || !e.d) return l.s && e.s ? l.d || (e = new c(e.d || l.s === e.s ? l : NaN)) : e = new c(NaN), e;
                if (l.s != e.s) return e.s = -e.s, l.minus(e);
                if (s = l.d, u = e.d, o = c.precision, a = c.rounding, !s[0] || !u[0]) return u[0] || (e = new c(l)), y ? j(e, o, a) : e;
                if (c = _(l.e / P), l = _(e.e / P), s = s.slice(), r = c - l) {
                    for ((i = (i = r < 0 ? (n = s, r = -r, u.length) : (n = u, l = c, s.length)) < (c = Math.ceil(o / P)) ? c + 1 : i + 1) < r && (r = i, n.length = 1), n.reverse(); r--;) n.push(0);
                    n.reverse()
                }
                for ((i = s.length) - (r = u.length) < 0 && (r = i, n = u, u = s, s = n), t = 0; r;) t = (s[--r] = s[r] + u[r] + t) / S | 0, s[r] %= S;
                for (t && (s.unshift(t), ++l), i = s.length; 0 == s[--i];) s.pop();
                return e.d = s, e.e = A(s, l), y ? j(e, o, a) : e
            }, C.precision = C.sd = function(e) { var t; if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e) throw Error(v + e); return this.d ? (t = H(this.d), e && this.e + 1 > t && (t = this.e + 1)) : t = NaN, t }, C.round = function() { var e = this.constructor; return j(new e(this), this.e + 1, e.rounding) }, C.sine = C.sin = function() {
                var e, t, n = this,
                    r = n.constructor;
                return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + P, r.rounding = 1, n = function(e, t) {
                    var n, r = t.d.length;
                    if (r < 3) return J(e, 2, t, t);
                    n = 16 < (n = 1.4 * Math.sqrt(r)) ? 16 : 0 | n, t = t.times(Math.pow(5, -n)), t = J(e, 2, t, t);
                    for (var i, o = new e(5), a = new e(16), s = new e(20); n--;) i = t.times(t), t = t.times(o.plus(i.times(a.times(i).minus(s))));
                    return t
                }(r, K(r, n)), r.precision = e, r.rounding = t, j(2 < o ? n.neg() : n, e, t, !0)) : new r(NaN)
            }, C.squareRoot = C.sqrt = function() {
                var e, t, n, r, i, o, a = this,
                    s = a.d,
                    u = a.e,
                    l = a.s,
                    c = a.constructor;
                if (1 !== l || !s || !s[0]) return new c(!l || l < 0 && (!s || s[0]) ? NaN : s ? a : 1 / 0);
                for (y = !1, r = 0 == (l = Math.sqrt(+a)) || l == 1 / 0 ? (((t = O(s)).length + u) % 2 == 0 && (t += "0"), l = Math.sqrt(t), u = _((u + 1) / 2) - (u < 0 || u % 2), new c(t = l == 1 / 0 ? "1e" + u : (t = l.toExponential()).slice(0, t.indexOf("e") + 1) + u)) : new c(l.toString()), n = (u = c.precision) + 3;;)
                    if (r = (o = r).plus(T(a, o, n + 2, 1)).times(.5), O(o.d).slice(0, n) === (t = O(r.d)).slice(0, n)) {
                        if ("9999" != (t = t.slice(n - 3, n + 1)) && (i || "4999" != t)) {+t && (+t.slice(1) || "5" != t.charAt(0)) || (j(r, u + 1, 1), e = !r.times(r).eq(a)); break }
                        if (!i && (j(o, u + 1, 0), o.times(o).eq(a))) { r = o; break }
                        n += 4, i = 1
                    }
                return y = !0, j(r, u, c.rounding, e)
            }, C.tangent = C.tan = function() {
                var e, t, n = this,
                    r = n.constructor;
                return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 10, r.rounding = 1, (n = n.sin()).s = 1, n = T(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0), r.precision = e, r.rounding = t, j(2 == o || 4 == o ? n.neg() : n, e, t, !0)) : new r(NaN)
            }, C.times = C.mul = function(e) {
                var t, n, r, i, o, a, s, u, l, c = this.constructor,
                    d = this.d,
                    f = (e = new c(e)).d;
                if (e.s *= this.s, !(d && d[0] && f && f[0])) return new c(!e.s || d && !d[0] && !f || f && !f[0] && !d ? NaN : d && f ? 0 * e.s : e.s / 0);
                for (n = _(this.e / P) + _(e.e / P), (u = d.length) < (l = f.length) && (o = d, d = f, f = o, a = u, u = l, l = a), o = [], r = a = u + l; r--;) o.push(0);
                for (r = l; 0 <= --r;) {
                    for (t = 0, i = u + r; r < i;) s = o[i] + f[r] * d[i - r - 1] + t, o[i--] = s % S | 0, t = s / S | 0;
                    o[i] = (o[i] + t) % S | 0
                }
                for (; !o[--a];) o.pop();
                return t ? ++n : o.shift(), e.d = o, e.e = A(o, n), y ? j(e, c.precision, c.rounding) : e
            }, C.toBinary = function(e, t) { return Q(this, 2, e, t) }, C.toDecimalPlaces = C.toDP = function(e, t) {
                var n = this.constructor,
                    r = new n(this);
                return void 0 === e ? r : (x(e, 0, p), void 0 === t ? t = n.rounding : x(t, 0, 8), j(r, e + r.e + 1, t))
            }, C.toExponential = function(e, t) {
                var n = this,
                    r = n.constructor,
                    e = void 0 === e ? q(n, !0) : (x(e, 0, p), void 0 === t ? t = r.rounding : x(t, 0, 8), q(n = j(new r(n), e + 1, t), !0, e + 1));
                return n.isNeg() && !n.isZero() ? "-" + e : e
            }, C.toFixed = function(e, t) {
                var n = this,
                    r = n.constructor,
                    i = void 0 === e ? q(n) : (x(e, 0, p), void 0 === t ? t = r.rounding : x(t, 0, 8), q(i = j(new r(n), e + n.e + 1, t), !1, e + i.e + 1));
                return n.isNeg() && !n.isZero() ? "-" + i : i
            }, C.toFraction = function(e) {
                var t, n, r, i, o, a, s, u, l, c, d = this,
                    f = d.d,
                    h = d.constructor;
                if (!f) return new h(d);
                if (u = n = new h(1), r = s = new h(0), o = (t = new h(r)).e = H(f) - d.e - 1, t.d[0] = g(10, (l = o % P) < 0 ? P + l : l), null == e) e = 0 < o ? t : u;
                else {
                    if (!(a = new h(e)).isInt() || a.lt(u)) throw Error(v + a);
                    e = a.gt(t) ? 0 < o ? t : u : a
                }
                for (y = !1, a = new h(O(f)), l = h.precision, h.precision = o = f.length * P * 2; c = T(a, t, 0, 1, 1), 1 != (i = n.plus(c.times(r))).cmp(e);) n = r, r = i, i = u, u = s.plus(c.times(i)), s = i, i = t, t = a.minus(c.times(i)), a = i;
                return i = T(e.minus(n), r, 0, 1, 1), s = s.plus(i.times(u)), n = n.plus(i.times(r)), s.s = u.s = d.s, d = T(u, r, o, 1).minus(d).abs().cmp(T(s, n, o, 1).minus(d).abs()) < 1 ? [u, r] : [s, n], h.precision = l, y = !0, d
            }, C.toHexadecimal = C.toHex = function(e, t) { return Q(this, 16, e, t) }, C.toNearest = function(e, t) {
                var n = (r = this).constructor,
                    r = new n(r);
                if (null == e) {
                    if (!r.d) return r;
                    e = new n(1), t = n.rounding
                } else { if (e = new n(e), void 0 === t ? t = n.rounding : x(t, 0, 8), !r.d) return e.s ? r : e; if (!e.d) return e.s && (e.s = r.s), e }
                return e.d[0] ? (y = !1, r = T(r, e, 0, t, 1).times(e), y = !0, j(r)) : (e.s = r.s, r = e), r
            }, C.toNumber = function() { return +this }, C.toOctal = function(e, t) { return Q(this, 8, e, t) }, C.toPower = C.pow = function(e) {
                var t, n, r, i, o, a, s = this,
                    u = s.constructor,
                    l = +(e = new u(e));
                if (!(s.d && e.d && s.d[0] && e.d[0])) return new u(g(+s, l));
                if ((s = new u(s)).eq(1)) return s;
                if (r = u.precision, o = u.rounding, e.eq(1)) return j(s, r, o);
                if ((t = _(e.e / P)) >= e.d.length - 1 && (n = l < 0 ? -l : l) <= 9007199254740991) return i = Z(u, s, n, r), e.s < 0 ? new u(1).div(i) : j(i, r, o);
                if ((a = s.s) < 0) { if (t < e.d.length - 1) return new u(NaN); if (0 == (1 & e.d[t]) && (a = 1), 0 == s.e && 1 == s.d[0] && 1 == s.d.length) return s.s = a, s }
                return (t = 0 != (n = g(+s, l)) && isFinite(n) ? new u(n + "").e : _(l * (Math.log("0." + O(s.d)) / Math.LN10 + s.e + 1))) > u.maxE + 1 || t < u.minE - 1 ? new u(0 < t ? a / 0 : 0) : (y = !1, u.rounding = s.s = 1, n = Math.min(12, (t + "").length), (i = (i = U(e.times(V(s, r + n)), r)).d && R((i = j(i, r + 5, 1)).d, r, o) && +O((i = j(U(e.times(V(s, (t = r + 10) + n)), t), t + 5, 1)).d).slice(r + 1, r + 15) + 1 == 1e14 ? j(i, r + 1, 0) : i).s = a, y = !0, j(i, r, u.rounding = o))
            }, C.toPrecision = function(e, t) {
                var n = this,
                    r = n.constructor,
                    e = void 0 === e ? q(n, n.e <= r.toExpNeg || n.e >= r.toExpPos) : (x(e, 1, p), void 0 === t ? t = r.rounding : x(t, 0, 8), q(n = j(new r(n), e, t), e <= n.e || n.e <= r.toExpNeg, e));
                return n.isNeg() && !n.isZero() ? "-" + e : e
            }, C.toSignificantDigits = C.toSD = function(e, t) { var n = this.constructor; return void 0 === e ? (e = n.precision, t = n.rounding) : (x(e, 1, p), void 0 === t ? t = n.rounding : x(t, 0, 8)), j(new n(this), e, t) }, C.toString = function() {
                var e = this,
                    t = e.constructor,
                    t = q(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
                return e.isNeg() && !e.isZero() ? "-" + t : t
            }, C.truncated = C.trunc = function() { return j(new this.constructor(this), this.e + 1, 1) }, C.valueOf = C.toJSON = function() {
                var e = this,
                    t = e.constructor,
                    t = q(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
                return e.isNeg() ? "-" + t : t
            };
            var T = function(e, t, n, r, i, o) {
                var a, s, u, l, c, d, f, h, p, w, v, g, m, y, b, N, E, C, O, x = e.constructor,
                    R = e.s == t.s ? 1 : -1,
                    k = e.d,
                    T = t.d;
                if (!(k && k[0] && T && T[0])) return new x(e.s && t.s && (k ? !T || k[0] != T[0] : T) ? k && 0 == k[0] || !T ? 0 * R : R / 0 : NaN);
                for (s = o ? (c = 1, e.e - t.e) : (o = S, _(e.e / (c = P)) - _(t.e / c)), C = T.length, N = k.length, p = (R = new x(R)).d = [], u = 0; T[u] == (k[u] || 0); u++);
                if (T[u] > (k[u] || 0) && s--, null == n ? (m = n = x.precision, r = x.rounding) : m = i ? n + (e.e - t.e) + 1 : n, m < 0) p.push(1), d = !0;
                else {
                    if (m = m / c + 2 | 0, u = 0, 1 == C) {
                        for (T = T[l = 0], m++;
                            (u < N || l) && m--; u++) y = l * o + (k[u] || 0), p[u] = y / T | 0, l = y % T | 0;
                        d = l || u < N
                    } else {
                        for (1 < (l = o / (T[0] + 1) | 0) && (T = D(T, l, o), k = D(k, l, o), C = T.length, N = k.length), b = C, v = (w = k.slice(0, C)).length; v < C;) w[v++] = 0;
                        for ((O = T.slice()).unshift(0), E = T[0], T[1] >= o / 2 && ++E; l = 0, (a = L(T, w, C, v)) < 0 ? (g = w[0], 1 < (l = (g = C != v ? g * o + (w[1] || 0) : g) / E | 0) ? 1 == (a = L(f = D(T, l = o <= l ? o - 1 : l, o), w, h = f.length, v = w.length)) && (l--, $(f, C < h ? O : T, h, o)) : (0 == l && (a = l = 1), f = T.slice()), (h = f.length) < v && f.unshift(0), $(w, f, v, o), -1 == a && (a = L(T, w, C, v = w.length)) < 1 && (l++, $(w, C < v ? O : T, v, o)), v = w.length) : 0 === a && (l++, w = [0]), p[u++] = l, a && w[0] ? w[v++] = k[b] || 0 : (w = [k[b]], v = 1), (b++ < N || void 0 !== w[0]) && m--;);
                        d = void 0 !== w[0]
                    }
                    p[0] || p.shift()
                }
                if (1 == c) R.e = s, M = d;
                else {
                    for (u = 1, l = p[0]; 10 <= l; l /= 10) u++;
                    R.e = u + s * c - 1, j(R, i ? n + R.e + 1 : n, r, d)
                }
                return R
            };

            function D(e, t, n) {
                var r, i = 0,
                    o = e.length;
                for (e = e.slice(); o--;) r = e[o] * t + i, e[o] = r % n | 0, i = r / n | 0;
                return i && e.unshift(i), e
            }

            function L(e, t, n, r) {
                var i, o;
                if (n != r) o = r < n ? 1 : -1;
                else
                    for (i = o = 0; i < n; i++)
                        if (e[i] != t[i]) { o = e[i] > t[i] ? 1 : -1; break } return o
            }

            function $(e, t, n, r) { for (var i = 0; n--;) e[n] -= i, i = e[n] < t[n] ? 1 : 0, e[n] = i * r + e[n] - t[n]; for (; !e[0] && 1 < e.length;) e.shift() }

            function j(e, t, n, r) {
                var i, o, a, s, u, l, c, d, f = e.constructor;
                e: if (null != t) {
                    if (!(c = e.d)) return e;
                    for (i = 1, s = c[0]; 10 <= s; s /= 10) i++;
                    if ((o = t - i) < 0) o += P, a = t, u = (l = c[d = 0]) / g(10, i - a - 1) % 10 | 0;
                    else if (d = Math.ceil((o + 1) / P), (s = c.length) <= d) {
                        if (!r) break e;
                        for (; s++ <= d;) c.push(0);
                        l = u = 0, a = (o %= P) - P + (i = 1)
                    } else {
                        for (l = s = c[d], i = 1; 10 <= s; s /= 10) i++;
                        u = (a = (o %= P) - P + i) < 0 ? 0 : l / g(10, i - a - 1) % 10 | 0
                    }
                    if (r = r || t < 0 || void 0 !== c[d + 1] || (a < 0 ? l : l % g(10, i - a - 1)), u = n < 4 ? (u || r) && (0 == n || n == (e.s < 0 ? 3 : 2)) : 5 < u || 5 == u && (4 == n || r || 6 == n && (0 < o ? 0 < a ? l / g(10, i - a) : 0 : c[d - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !c[0]) return c.length = 0, u ? (t -= e.e + 1, c[0] = g(10, (P - t % P) % P), e.e = -t || 0) : c[0] = e.e = 0, e;
                    if (0 == o ? (c.length = d, s = 1, d--) : (c.length = d + 1, s = g(10, P - o), c[d] = 0 < a ? (l / g(10, i - a) % g(10, a) | 0) * s : 0), u)
                        for (;;) {
                            if (0 == d) {
                                for (o = 1, a = c[0]; 10 <= a; a /= 10) o++;
                                for (a = c[0] += s, s = 1; 10 <= a; a /= 10) s++;
                                o != s && (e.e++, c[0] == S && (c[0] = 1));
                                break
                            }
                            if (c[d] += s, c[d] != S) break;
                            c[d--] = 0, s = 1
                        }
                    for (o = c.length; 0 === c[--o];) c.pop()
                }
                return y && (e.e > f.maxE ? (e.d = null, e.e = NaN) : e.e < f.minE && (e.e = 0, e.d = [0])), e
            }

            function q(e, t, n) {
                if (!e.isFinite()) return I(e);
                var r, i = e.e,
                    o = O(e.d),
                    a = o.length;
                return t ? (n && 0 < (r = n - a) ? o = o.charAt(0) + "." + o.slice(1) + W(r) : 1 < a && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + W(-i - 1) + o, n && 0 < (r = n - a) && (o += W(r))) : a <= i ? (o += W(i + 1 - a), n && 0 < (r = n - i - 1) && (o = o + "." + W(r))) : ((r = i + 1) < a && (o = o.slice(0, r) + "." + o.slice(r)), n && 0 < (r = n - a) && (i + 1 === a && (o += "."), o += W(r))), o
            }

            function A(e, t) { var n = e[0]; for (t *= P; 10 <= n; n /= 10) t++; return t }

            function z(e, t, n) { if (N < t) throw y = !0, n && (e.precision = n), Error(l); return j(new e(r), t, 1, !0) }

            function B(e, t, n) { if (E < t) throw Error(l); return j(new e(i), t, n, !0) }

            function H(e) {
                var t = e.length - 1,
                    n = t * P + 1;
                if (t = e[t]) { for (; t % 10 == 0; t /= 10) n--; for (t = e[0]; 10 <= t; t /= 10) n++ }
                return n
            }

            function W(e) { for (var t = ""; e--;) t += "0"; return t }

            function Z(e, t, n, r) {
                var i, o = new e(1),
                    a = Math.ceil(r / P + 4);
                for (y = !1;;) {
                    if (n % 2 && X((o = o.times(t)).d, a) && (i = !0), 0 === (n = _(n / 2))) { n = o.d.length - 1, i && 0 === o.d[n] && ++o.d[n]; break }
                    X((t = t.times(t)).d, a)
                }
                return y = !0, o
            }

            function F(e) { return 1 & e.d[e.d.length - 1] }

            function n(e, t, n) {
                for (var r, i = new e(t[0]), o = 0; ++o < t.length;) {
                    if (!(r = new e(t[o])).s) { i = r; break }
                    i[n](r) && (i = r)
                }
                return i
            }

            function U(e, t) {
                var n, r, i, o, a, s, u, l = 0,
                    c = 0,
                    d = 0,
                    f = e.constructor,
                    h = f.rounding,
                    p = f.precision;
                if (!e.d || !e.d[0] || 17 < e.e) return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
                for (u = null == t ? (y = !1, p) : t, s = new f(.03125); - 2 < e.e;) e = e.times(s), d += 5;
                for (u += r = Math.log(g(2, d)) / Math.LN10 * 2 + 5 | 0, n = o = a = new f(1), f.precision = u;;) {
                    if (o = j(o.times(e), u, 1), n = n.times(++c), O((s = a.plus(T(o, n, u, 1))).d).slice(0, u) === O(a.d).slice(0, u)) {
                        for (i = d; i--;) a = j(a.times(a), u, 1);
                        if (null != t) return f.precision = p, a;
                        if (!(l < 3 && R(a.d, u - r, h, l))) return j(a, f.precision = p, h, y = !0);
                        f.precision = u += 10, n = o = s = new f(1), c = 0, l++
                    }
                    a = s
                }
            }

            function V(e, t) {
                var n, r, i, o, a, s, u, l, c, d, f, h = 1,
                    p = e,
                    w = p.d,
                    v = p.constructor,
                    g = v.rounding,
                    m = v.precision;
                if (p.s < 0 || !w || !w[0] || !p.e && 1 == w[0] && 1 == w.length) return new v(w && !w[0] ? -1 / 0 : 1 != p.s ? NaN : w ? 0 : p);
                if (c = null == t ? (y = !1, m) : t, v.precision = c += 10, r = (n = O(w)).charAt(0), !(Math.abs(o = p.e) < 15e14)) return l = z(v, c + 2, m).times(o + ""), p = V(new v(r + "." + n.slice(1)), c - 10).plus(l), v.precision = m, null == t ? j(p, m, g, y = !0) : p;
                for (; r < 7 && 1 != r || 1 == r && 3 < n.charAt(1);) r = (n = O((p = p.times(e)).d)).charAt(0), h++;
                for (o = p.e, 1 < r ? (p = new v("0." + n), o++) : p = new v(r + "." + n.slice(1)), u = a = p = T((d = p).minus(1), p.plus(1), c, 1), f = j(p.times(p), c, 1), i = 3;;) {
                    if (a = j(a.times(f), c, 1), O((l = u.plus(T(a, new v(i), c, 1))).d).slice(0, c) === O(u.d).slice(0, c)) {
                        if (u = u.times(2), 0 !== o && (u = u.plus(z(v, c + 2, m).times(o + ""))), u = T(u, new v(h), c, 1), null != t) return v.precision = m, u;
                        if (!R(u.d, c - 10, g, s)) return j(u, v.precision = m, g, y = !0);
                        v.precision = c += 10, l = a = p = T(d.minus(1), d.plus(1), c, 1), f = j(p.times(p), c, 1), i = s = 1
                    }
                    u = l, i += 2
                }
            }

            function I(e) { return String(e.s * e.s / 0) }

            function G(e, t) {
                var n, r, i;
                for (0 < (r = (t = -1 < (n = t.indexOf(".")) ? t.replace(".", "") : t).search(/e/i)) ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; 48 === t.charCodeAt(r); r++);
                for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
                if (t = t.slice(r, i)) {
                    if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % P, n < 0 && (r += P), r < i) {
                        for (r && e.d.push(+t.slice(0, r)), i -= P; r < i;) e.d.push(+t.slice(r, r += P));
                        t = t.slice(r), r = P - t.length
                    } else r -= i;
                    for (; r--;) t += "0";
                    e.d.push(+t), y && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]))
                } else e.e = 0, e.d = [0];
                return e
            }

            function J(e, t, n, r, i) {
                var o, a, s, u, l = e.precision,
                    c = Math.ceil(l / P);
                for (y = !1, u = n.times(n), s = new e(r);;) {
                    if (a = T(s.times(u), new e(t++ * t++), l, 1), s = i ? r.plus(a) : r.minus(a), r = T(a.times(u), new e(t++ * t++), l, 1), void 0 !== (a = s.plus(r)).d[c]) { for (o = c; a.d[o] === s.d[o] && o--;); if (-1 == o) break }
                    o = s, s = r, r = a, a = o, 0
                }
                return y = !0, a.d.length = c + 1, a
            }

            function K(e, t) {
                var n = t.s < 0,
                    r = B(e, e.precision, 1),
                    i = r.times(.5);
                if ((t = t.abs()).lte(i)) return o = n ? 4 : 1, t;
                if ((e = t.divToInt(r)).isZero()) o = n ? 3 : 2;
                else {
                    if ((t = t.minus(e.times(r))).lte(i)) return o = F(e) ? n ? 2 : 3 : n ? 4 : 1, t;
                    o = F(e) ? n ? 1 : 4 : n ? 3 : 2
                }
                return t.minus(r).abs()
            }

            function Q(e, t, n, r) {
                var i, o, a, s, u, l, c, d, f = e.constructor,
                    h = void 0 !== n;
                if (h ? (x(n, 1, p), void 0 === r ? r = f.rounding : x(r, 0, 8)) : (n = f.precision, r = f.rounding), e.isFinite()) {
                    for (h ? (i = 2, 16 == t ? n = 4 * n - 3 : 8 == t && (n = 3 * n - 2)) : i = t, 0 <= (a = (l = q(e)).indexOf(".")) && (l = l.replace(".", ""), (d = new f(1)).e = l.length - a, d.d = k(q(d), 10, i), d.e = d.d.length), o = s = (c = k(l, 10, i)).length; 0 == c[--s];) c.pop();
                    if (c[0]) {
                        if (a < 0 ? o-- : ((e = new f(e)).d = c, e.e = o, c = (e = T(e, d, n, r, 0, i)).d, o = e.e, u = M), a = c[n], d = i / 2, u = u || void 0 !== c[n + 1], u = r < 4 ? (void 0 !== a || u) && (0 === r || r === (e.s < 0 ? 3 : 2)) : d < a || a === d && (4 === r || u || 6 === r && 1 & c[n - 1] || r === (e.s < 0 ? 8 : 7)), c.length = n, u)
                            for (; ++c[--n] > i - 1;) c[n] = 0, n || (++o, c.unshift(1));
                        for (s = c.length; !c[s - 1]; --s);
                        for (a = 0, l = ""; a < s; a++) l += w.charAt(c[a]);
                        if (h) {
                            if (1 < s)
                                if (16 == t || 8 == t) { for (a = 16 == t ? 4 : 3, --s; s % a; s++) l += "0"; for (s = (c = k(l, i, t)).length; !c[s - 1]; --s); for (a = 1, l = "1."; a < s; a++) l += w.charAt(c[a]) } else l = l.charAt(0) + "." + l.slice(1);
                            l = l + (o < 0 ? "p" : "p+") + o
                        } else if (o < 0) {
                            for (; ++o;) l = "0" + l;
                            l = "0." + l
                        } else if (++o > s)
                            for (o -= s; o--;) l += "0";
                        else o < s && (l = l.slice(0, o) + "." + l.slice(o))
                    } else l = h ? "0p+0" : "0";
                    l = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + l
                } else l = I(e);
                return e.s < 0 ? "-" + l : l
            }

            function X(e, t) { return e.length > t && (e.length = t, 1) }

            function Y(e) { return new this(e).abs() }

            function ee(e) { return new this(e).acos() }

            function te(e) { return new this(e).acosh() }

            function ne(e, t) { return new this(e).plus(t) }

            function re(e) { return new this(e).asin() }

            function ie(e) { return new this(e).asinh() }

            function oe(e) { return new this(e).atan() }

            function ae(e) { return new this(e).atanh() }

            function se(e, t) {
                e = new this(e), t = new this(t);
                var n, r = this.precision,
                    i = this.rounding,
                    o = r + 4;
                return e.s && t.s ? e.d || t.d ? !t.d || e.isZero() ? (n = t.s < 0 ? B(this, r, i) : new this(0)).s = e.s : !e.d || t.isZero() ? (n = B(this, o, 1).times(.5)).s = e.s : n = t.s < 0 ? (this.precision = o, this.rounding = 1, n = this.atan(T(e, t, o, 1)), t = B(this, o, 1), this.precision = r, this.rounding = i, e.s < 0 ? n.minus(t) : n.plus(t)) : this.atan(T(e, t, o, 1)) : (n = B(this, o, 1).times(0 < t.s ? .25 : .75)).s = e.s : n = new this(NaN), n
            }

            function ue(e) { return new this(e).cbrt() }

            function le(e) { return j(e = new this(e), e.e + 1, 2) }

            function ce(e) {
                if (!e || "object" !== Ae(e)) throw Error(u + "Object expected");
                for (var t, n, r = !0 === e.defaults, i = ["precision", 1, p, "rounding", 0, 8, "toExpNeg", -a, 0, "toExpPos", 0, a, "maxE", 0, a, "minE", -a, 0, "modulo", 0, 9], o = 0; o < i.length; o += 3)
                    if (t = i[o], r && (this[t] = s[t]), void 0 !== (n = e[t])) {
                        if (!(_(n) === n && i[o + 1] <= n && n <= i[o + 2])) throw Error(v + t + ": " + n);
                        this[t] = n
                    }
                if (t = "crypto", r && (this[t] = s[t]), void 0 !== (n = e[t])) {
                    if (!0 !== n && !1 !== n && 0 !== n && 1 !== n) throw Error(v + t + ": " + n);
                    if (n) {
                        if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw Error(d);
                        this[t] = !0
                    } else this[t] = !1
                }
                return this
            }

            function de(e) { return new this(e).cos() }

            function fe(e) { return new this(e).cosh() }

            function he(e, t) { return new this(e).div(t) }

            function pe(e) { return new this(e).exp() }

            function we(e) { return j(e = new this(e), e.e + 1, 3) }

            function ve() {
                var e, t, n = new this(0);
                for (y = !1, e = 0; e < arguments.length;)
                    if ((t = new this(arguments[e++])).d) n.d && (n = n.plus(t.times(t)));
                    else {
                        if (t.s) return y = !0, new this(1 / 0);
                        n = t
                    }
                return y = !0, n.sqrt()
            }

            function ge(e) { return e instanceof c || e && "[object Decimal]" === e.name || !1 }

            function me(e) { return new this(e).ln() }

            function ye(e, t) { return new this(e).log(t) }

            function be(e) { return new this(e).log(2) }

            function Ne(e) { return new this(e).log(10) }

            function Ee() { return n(this, arguments, "lt") }

            function Ce() { return n(this, arguments, "gt") }

            function Oe(e, t) { return new this(e).mod(t) }

            function xe(e, t) { return new this(e).mul(t) }

            function Re(e, t) { return new this(e).pow(t) }

            function ke(e) {
                var t, n, r, i, o = 0,
                    a = new this(1),
                    s = [];
                if (void 0 === e ? e = this.precision : x(e, 1, p), r = Math.ceil(e / P), this.crypto)
                    if (crypto.getRandomValues)
                        for (t = crypto.getRandomValues(new Uint32Array(r)); o < r;) 429e7 <= (i = t[o]) ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : s[o++] = i % 1e7;
                    else {
                        if (!crypto.randomBytes) throw Error(d);
                        for (t = crypto.randomBytes(r *= 4); o < r;) 214e7 <= (i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((127 & t[o + 3]) << 24)) ? crypto.randomBytes(4).copy(t, o) : (s.push(i % 1e7), o += 4);
                        o = r / 4
                    }
                else
                    for (; o < r;) s[o++] = 1e7 * Math.random() | 0;
                for (r = s[--o], e %= P, r && e && (i = g(10, P - e), s[o] = (r / i | 0) * i); 0 === s[o]; o--) s.pop();
                if (o < 0) s = [n = 0];
                else {
                    for (n = -1; 0 === s[0]; n -= P) s.shift();
                    for (r = 1, i = s[0]; 10 <= i; i /= 10) r++;
                    r < P && (n -= P - r)
                }
                return a.e = n, a.d = s, a
            }

            function Te(e) { return j(e = new this(e), e.e + 1, this.rounding) }

            function Me(e) { return (e = new this(e)).d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN }

            function _e(e) { return new this(e).sin() }

            function Se(e) { return new this(e).sinh() }

            function Pe(e) { return new this(e).sqrt() }

            function De(e, t) { return new this(e).sub(t) }

            function Le(e) { return new this(e).tan() }

            function $e(e) { return new this(e).tanh() }

            function je(e) { return j(e = new this(e), e.e + 1, 1) }(c = function e(t) {
                var n, r, i;

                function o(e) {
                    var t, n, r, i = this;
                    if (!(i instanceof o)) return new o(e);
                    if (e instanceof(i.constructor = o)) return i.s = e.s, void(y ? !e.d || e.e > o.maxE ? (i.e = NaN, i.d = null) : e.e < o.minE ? (i.e = 0, i.d = [0]) : (i.e = e.e, i.d = e.d.slice()) : (i.e = e.e, i.d = e.d && e.d.slice()));
                    if ("number" === (r = Ae(e))) { if (0 === e) return i.s = 1 / e < 0 ? -1 : 1, i.e = 0, void(i.d = [0]); if (e < 0 ? (e = -e, i.s = -1) : i.s = 1, e === ~~e && e < 1e7) { for (t = 0, n = e; 10 <= n; n /= 10) t++; return void(y ? o.maxE < t ? (i.e = NaN, i.d = null) : t < o.minE ? (i.e = 0, i.d = [0]) : (i.e = t, i.d = [e]) : (i.e = t, i.d = [e])) } return 0 * e != 0 ? (e || (i.s = NaN), i.e = NaN, void(i.d = null)) : G(i, e.toString()) }
                    if ("string" !== r) throw Error(v + e);
                    return 45 === e.charCodeAt(0) ? (e = e.slice(1), i.s = -1) : i.s = 1, (b.test(e) ? G : function(e, t) {
                        var n, r, i, o, a, s, u, l;
                        if ("Infinity" === t || "NaN" === t) return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
                        if (h.test(t)) l = 16, t = t.toLowerCase();
                        else if (f.test(t)) l = 2;
                        else {
                            if (!m.test(t)) throw Error(v + t);
                            l = 8
                        }
                        for (i = (t = 0 < (i = t.search(/p/i)) ? (s = +t.slice(i + 1), t.substring(2, i)) : t.slice(2)).indexOf("."), n = e.constructor, (o = 0 <= i) && (i = (a = (t = t.replace(".", "")).length) - i, r = Z(n, new n(l), i, 2 * i)), i = l = (u = k(t, l, S)).length - 1; 0 === u[i]; --i) u.pop();
                        return i < 0 ? new n(0 * e.s) : (e.e = A(u, l), e.d = u, y = !1, o && (e = T(e, r, 4 * a)), s && (e = e.times((Math.abs(s) < 54 ? Math : c).pow(2, s))), y = !0, e)
                    })(i, e)
                }
                if (o.prototype = C, o.ROUND_UP = 0, o.ROUND_DOWN = 1, o.ROUND_CEIL = 2, o.ROUND_FLOOR = 3, o.ROUND_HALF_UP = 4, o.ROUND_HALF_DOWN = 5, o.ROUND_HALF_EVEN = 6, o.ROUND_HALF_CEIL = 7, o.ROUND_HALF_FLOOR = 8, o.EUCLID = 9, o.config = o.set = ce, o.clone = e, o.isDecimal = ge, o.abs = Y, o.acos = ee, o.acosh = te, o.add = ne, o.asin = re, o.asinh = ie, o.atan = oe, o.atanh = ae, o.atan2 = se, o.cbrt = ue, o.ceil = le, o.cos = de, o.cosh = fe, o.div = he, o.exp = pe, o.floor = we, o.hypot = ve, o.ln = me, o.log = ye, o.log10 = Ne, o.log2 = be, o.max = Ee, o.min = Ce, o.mod = Oe, o.mul = xe, o.pow = Re, o.random = ke, o.round = Te, o.sign = Me, o.sin = _e, o.sinh = Se, o.sqrt = Pe, o.sub = De, o.tan = Le, o.tanh = $e, o.trunc = je, (t = void 0 === t ? {} : t) && !0 !== t.defaults)
                    for (i = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < i.length;) t.hasOwnProperty(r = i[n++]) || (t[r] = this[r]);
                return o.config(t), o
            }(s)).default = c.Decimal = c, r = new c(r), i = new c(i), "function" == typeof define && define.amd ? define(function() { return c }) : void 0 !== qe && qe.exports ? ("function" == typeof Symbol && "symbol" == Ae(Symbol.iterator) && (C[Symbol.for("nodejs.util.inspect.custom")] = C.toString, C[Symbol.toStringTag] = "Decimal"), qe.exports = c) : (e = e || ("undefined" != typeof self && self && self.self == self ? self : window), t = e.Decimal, c.noConflict = function() { return e.Decimal = t, c }, e.Decimal = c)
        }(void 0)
    }, {}],
    7: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
        var i = r(e("./i18n")),
            o = r(e("./units"));

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        n.default = function() {
            function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.x = 0, this.y = 0, this.boxWidth = 100, this.boxHeight = 100, this.svg = null }
            var t, n, r;
            return t = e, (n = [{
                key: "draw",
                value: function(e, t) {
                    if ($("#" + e).empty(), SVG.supported)
                        if (0 === t.lines.length || t.lines[0].numberOfLEDs <= 0) alert("The circuit has no LEDs.");
                        else {
                            this.y = 0;
                            var n = t.lines[0].numberOfLEDs.toNumber() + 5,
                                r = n * this.boxWidth,
                                i = t.lines.length * this.boxHeight;
                            this.svg = SVG(e).addClass(this.getClassName()), 15 < n ? this.svg.size(r, i) : this.svg.viewbox(0, 0, r, i);
                            for (var o = 0; o < t.lines.length; o++) {
                                for (var a = t.lines[o], s = 0, u = this.x = 0; u < n; u++) {
                                    var l = null;
                                    0 === u ? 0 === o && (l = this.drawVoltage(t.sourceVoltage)) : 1 === u ? l = 0 === o ? this.drawSourceTerminal() : o === t.lines.length - 1 ? this.drawLastStartConnector() : this.drawStartConnector() : u === n - 3 ? l = this.drawResistor(a.resistor) : u === n - 2 ? l = 0 === o ? this.drawEndTerminal() : o === t.lines.length - 1 ? this.drawLastEndConnector() : this.drawEndConnector() : u === n - 1 ? 0 === o && (l = this.drawEndGnd()) : s < a.numberOfLEDs ? (l = this.drawLed(), s++) : l = this.drawWire(), l && l.dmove(this.x, this.y), this.x += this.boxWidth
                                }
                                this.y += this.boxHeight
                            }
                        }
                    else alert("SVG is not supported. Please use a modern compatible browser.")
                }
            }, { key: "drawVoltage", value: function(e) { var t = this.svg.group(); return t.plain("+" + e + "V").x(this.boxWidth).y(this.boxHeight - 26).font({ anchor: "end" }).addClass("terminal-text"), t } }, { key: "drawEndGnd", value: function() { var e = this.svg.group(); return e.plain("GND").x(0).y(this.boxHeight - 26).font({ anchor: "start" }).addClass("terminal-text"), e } }, { key: "getClassName", value: function() { throw new Error("Not implemented.") } }, { key: "drawSourceTerminal", value: function() { throw new Error("Not implemented.") } }, { key: "drawLed", value: function() { throw new Error("Not implemented.") } }, { key: "drawWire", value: function() { throw new Error("Not implemented.") } }, { key: "drawResistor", value: function(e) { throw new Error("Not implemented.") } }, { key: "drawEndTerminal", value: function() { throw new Error("Not implemented.") } }, { key: "drawStartConnector", value: function() { throw new Error("Not implemented.") } }, { key: "drawEndConnector", value: function() { throw new Error("Not implemented.") } }, { key: "drawLastStartConnector", value: function() { throw new Error("Not implemented.") } }, { key: "drawLastEndConnector", value: function() { throw new Error("Not implemented.") } }, { key: "getResistorTooltipText", value: function(e) { return o.default.formatResistance(e.resistance) + ", " + o.default.formatPowerRating(e.wattage) + " (" + i.default.localize(e.bands[0]) + ", " + i.default.localize(e.bands[1]) + ", " + i.default.localize(e.bands[2]) + ", " + i.default.localize(e.bands[3]) + ")" } }]) && a(t.prototype, n), r && a(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), e
        }()
    }, { "./i18n": 9, "./units": 14 }],
    8: [function(e, t, n) {
        "use strict";
        var r = a(e("./consent")),
            i = a(e("./i18n")),
            o = a(e("./share")),
            s = a(e("./decimal")),
            u = a(e("./circuit")),
            l = a(e("./wiring-diagram")),
            c = a(e("./schematic-diagram")),
            d = a(e("./circuit-info")),
            f = a(e("./clipboard"));

        function a(e) { return e && e.__esModule ? e : { default: e } }
        $(function() {
            var a;

            function e() {
                var e = location.hash;
                if (e && 0 !== e.length) {
                    var t = 1;
                    try {
                        for (var n, r = RegExp(/([pvcno])=([\d\.ws]+)/g); null !== (n = r.exec(e)) && t++ < 10;) switch (n[1]) {
                            case "p":
                                $("#source-voltage").val(n[2]);
                                break;
                            case "v":
                                $("#forward-voltage").val(n[2]);
                                break;
                            case "c":
                                $("#forward-current").val(n[2]);
                                break;
                            case "n":
                                $("#led-count").val(n[2]);
                                break;
                            case "o":
                                ("s" === n[2] ? $("#mode2") : $("#mode1")).prop("checked", !0)
                        }
                    } catch (e) { console.error("Could not parse url"), console.error(e) }
                    $("#form").submit()
                }
            }(0, r.default)().init(), i.default.init(i18n), window.share = new o.default, $('[data-toggle="popover"]').popover({ html: !0, content: function() { return $("#" + this.id + "-content").html() }, trigger: "focus" }), $('[data-toggle="tooltip"]').tooltip(), $("#form").submit(function(e) {
                e.preventDefault(), e.stopPropagation(), $("#input-source-voltage").text($("#source-voltage").val()), $("#input-forward-voltage").text($("#forward-voltage").val()), $("#input-forward-current").text($("#forward-current").val()), $("#input-led-count").text($("#led-count").val());
                var t = new s.default($("#source-voltage").val()),
                    n = new s.default($("#forward-voltage").val()),
                    r = new s.default($("#forward-current").val()).dividedBy(new s.default(1e3)),
                    i = new s.default($("#led-count").val()),
                    o = $("input[name=mode]:checked").val();
                n.greaterThan(t) ? $("#error").show() : ($("#error").hide(), e = "wiring" === $("input[name=mode]:checked").val() ? "w" : "s", e = "#p=" + $("#source-voltage").val() + "&v=" + $("#forward-voltage").val() + "&c=" + $("#forward-current").val() + "&n=" + $("#led-count").val() + "&o=" + e, a !== e && (i = u.default.create(t, n, r, i), (new("wiring" === o ? l : c).default).draw("circuit", i), d.default.show("circuit-info", i), $('[data-toggle="tooltip"]').tooltip(), (!location.hash && !a || location.hash && a && a !== e) && (_dev ? console.log("Engagement: calculate") : gtag("event", "calculate", { event_category: "Engagement" })), location.hash = e, $("#direct-url").attr("value", window.location), $("#circuit-container").removeClass("d-none"), $("#circuit-container")[0].scrollIntoView({ behavior: "smooth" }), a = location.hash))
            }), $("#copy-url").click(function(e) { f.default.copy($("#direct-url").val()) }), $("#print").click(function(e) {
                var t = window.open();
                self.focus();
                var n = t.document;
                n.open(), n.write("<!doctype html><head>"), n.write("<title>" + $("h1").text() + "</title>"), $("link[rel=stylesheet]").each(function() { n.write(this.outerHTML) }), $("style").each(function() { n.write(this.outerHTML) }), n.write('</head><body class="print">'), n.write('<h1 class="text-center mt-4">' + $("h1").text() + "</h1>"), n.write('<h2 class="text-center"><a href="' + window.location + '">ledcalculator.net</a></h2>'), n.write($("#circuit-input").clone().removeClass("d-none")[0].outerHTML), n.write($("#circuit")[0].outerHTML), n.write($("#circuit-info")[0].outerHTML), n.write($("#led-illustration")[0].outerHTML), n.write('<div class="mt-2 text-center"><a href="' + window.location + '">' + window.location + "</a></div>"), n.write("</body></html>"), n.close(), setTimeout(function() { t.print(), t.close() }, 100)
            }), window.addEventListener("hashchange", e, !1), e()
        })
    }, { "./circuit": 2, "./circuit-info": 1, "./clipboard": 3, "./consent": 4, "./decimal": 6, "./i18n": 9, "./schematic-diagram": 11, "./share": 13, "./wiring-diagram": 15 }],
    9: [function(e, t, n) {
        "use strict";

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0, n.default = function() {
            function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.map = new Map }
            var t, n, r;
            return t = e, r = [{ key: "init", value: function(e) { this.map = new Map(e) } }, { key: "localize", value: function(e) { var t = this.map.get(e); if (!t) return e; for (var n = 1; n < arguments.length; n++) t = t.replace("{" + (n - 1) + "}", arguments[n]); return t } }], (n = null) && i(t.prototype, n), r && i(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), e
        }()
    }, {}],
    10: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
        var o = (e = e("./decimal")) && e.__esModule ? e : { default: e };

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function i(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
        e = function() {
            function i() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, i), this.actualResistance = null, this.resistance = null, this.wattage = null, this.bands = ["black", "black", "black", "gold"] }
            var e, t, n;
            return e = i, n = [{ key: "create", value: function(e, t) { var n = new i; return n.actualResistance = e, i.setResistance(n), n.resistance = n.resistance.isZero() ? new o.default(1) : n.resistance, n.wattage = t.times(t).times(n.resistance), n } }, {
                key: "setResistance",
                value: function(e) {
                    for (var t = e.actualResistance, n = 0; n < 10; n++)
                        for (var r = 0; r < i.STANDARD_RESISTOR_VALUES.length; r++)
                            if ((t = new o.default(10).toPower(n).times(i.STANDARD_RESISTOR_VALUES[r].value)).greaterThanOrEqualTo(e.actualResistance)) return e.bands[0] = i.BAND_COLORS[i.STANDARD_RESISTOR_VALUES[r].bands[0]], e.bands[1] = i.BAND_COLORS[i.STANDARD_RESISTOR_VALUES[r].bands[1]], e.bands[2] = 0 === n ? i.BAND_COLORS[10] : i.BAND_COLORS[n - 1], void(e.resistance = t);
                    e.resistance = t
                }
            }], (t = null) && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), i
        }();
        i(n.default = e, "STANDARD_RESISTOR_VALUES", [{ value: new o.default("1.0"), bands: [1, 0] }, { value: new o.default("1.1"), bands: [1, 1] }, { value: new o.default("1.2"), bands: [1, 2] }, { value: new o.default("1.3"), bands: [1, 3] }, { value: new o.default("1.5"), bands: [1, 5] }, { value: new o.default("1.6"), bands: [1, 6] }, { value: new o.default("1.8"), bands: [1, 8] }, { value: new o.default("2.0"), bands: [2, 0] }, { value: new o.default("2.2"), bands: [2, 2] }, { value: new o.default("2.4"), bands: [2, 4] }, { value: new o.default("2.7"), bands: [2, 7] }, { value: new o.default("3.0"), bands: [3, 0] }, { value: new o.default("3.3"), bands: [3, 3] }, { value: new o.default("3.6"), bands: [3, 6] }, { value: new o.default("3.9"), bands: [3, 9] }, { value: new o.default("4.3"), bands: [4, 3] }, { value: new o.default("4.7"), bands: [4, 7] }, { value: new o.default("5.1"), bands: [5, 1] }, { value: new o.default("5.6"), bands: [5, 6] }, { value: new o.default("6.2"), bands: [6, 2] }, { value: new o.default("6.8"), bands: [6, 8] }, { value: new o.default("7.5"), bands: [7, 5] }, { value: new o.default("8.2"), bands: [8, 2] }, { value: new o.default("9.1"), bands: [9, 1] }]), i(e, "BAND_COLORS", ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "gray", "white", "gold", "silver"])
    }, { "./decimal": 6 }],
    11: [function(e, t, n) {
        "use strict";

        function i(e) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
        var o = r(e("./diagram")),
            a = r(e("./units"));

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function u(e, t) { return (u = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

        function l(n) {
            var r = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0 } catch (e) { return !1 } }();
            return function() {
                var e, t = c(n);
                return function(e, t) {
                    { if (t && ("object" === i(t) || "function" == typeof t)) return t; if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined") }
                    return function(e) { if (void 0 !== e) return e; throw new ReferenceError("this hasn't been initialised - super() hasn't been called") }(e)
                }(this, r ? (e = c(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
            }
        }

        function c(e) { return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }
        e = function() {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && u(e, t)
            }(i, o["default"]);
            var e, t, n, r = l(i);

            function i() { return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, i), r.call(this) }
            return e = i, (t = [{ key: "getClassName", value: function() { return "schematic" } }, { key: "drawSourceTerminal", value: function() { var e = this.svg.group(); return e.line(20, this.boxHeight - 20, this.boxWidth, this.boxHeight - 20).addClass("wire"), e.path("M10 80 l15 -15 l0 30 Z").addClass("terminal"), e } }, { key: "drawLed", value: function() { var e = this.svg.group(); return e.line(0, 80, 100, 80).addClass("wire"), e.path("M55 80 l-15 -15 l0 30 Z").addClass("led"), e.line(55, 65, 55, 95).addClass("wire"), e.line(25, 60, 40, 45).addClass("led-emit"), e.path("M45 40 l0 12 l-12 -12 Z").addClass("led-emit-arrow"), e.line(45, 60, 60, 45).addClass("led-emit"), e.path("M65 40 l0 12 l-12 -12 Z").addClass("led-emit-arrow"), e } }, { key: "drawWire", value: function() { var e = this.svg.group(); return e.line(0, 80, 100, 80).addClass("wire"), e } }, { key: "drawResistor", value: function(e) { var t = this.svg.group(); return t.path("M0 80 h 10 l10 -10 l15 15 l15 -15 l15 15 l15 -15 l10 10 h 10").attr("data-toggle", "tooltip").attr("data-placement", "top").attr("title", this.getResistorTooltipText(e)).addClass("resistor"), t.plain(a.default.formatResistanceWithSymbol(e.resistance)).x(50).y(40).font({ anchor: "middle" }).addClass("resistance-text"), t } }, { key: "drawEndTerminal", value: function() { var e = this.svg.group(); return e.line(0, 80, 60, 80).addClass("wire"), e.line(60, 60, 60, 100).addClass("ground"), e.line(70, 65, 70, 95).addClass("ground"), e.line(80, 70, 80, 90).addClass("ground"), e } }, { key: "drawStartConnector", value: function() { var e = this.svg.group(); return e.path("M50 -20 v 100 h50").addClass("wire"), e } }, { key: "drawLastStartConnector", value: function() { return this.drawStartConnector() } }, { key: "drawEndConnector", value: function() { var e = this.svg.group(); return e.path("M40 -20 v 100 h-40").addClass("wire"), e } }, { key: "drawLastEndConnector", value: function() { return this.drawEndConnector() } }]) && s(e.prototype, t), n && s(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), i
        }();
        n.default = e
    }, { "./diagram": 7, "./units": 14 }],
    12: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
        var a = (e = e("./resistor")) && e.__esModule ? e : { default: e };

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        n.default = function() {
            function o() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, o), this.numberOfLEDs = null, this.resistor = null }
            var e, t, n;
            return e = o, n = [{
                key: "create",
                value: function(e, t, n, r) {
                    var i = new o;
                    i.numberOfLEDs = e;
                    n = t.minus(n.times(i.numberOfLEDs)).dividedBy(r);
                    return i.resistor = a.default.create(n, r), i
                }
            }], (t = null) && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), o
        }()
    }, { "./resistor": 10 }],
    13: [function(e, t, n) {
        "use strict";
        t.exports = function() { return { track: function(e) { _dev ? console.log("Share: " + e) : gtag("event", "share", { event_category: "Share", event_label: e }) } } }
    }, {}],
    14: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
        var i = r(e("./decimal")),
            o = r(e("./i18n"));

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        n.default = function() {
            function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e) }
            var t, n, r;
            return t = e, r = [{ key: "formatResistance", value: function(e) { return e.greaterThanOrEqualTo(new i.default("1000000")) ? e.dividedBy(new i.default("1000000")) + " " + o.default.localize("megaohm") : e.greaterThanOrEqualTo(new i.default("1000")) ? e.dividedBy(new i.default("1000")) + " " + o.default.localize("kiloohm") : e + " " + o.default.localize("ohm") } }, { key: "formatResistanceWithSymbol", value: function(e) { return e.greaterThanOrEqualTo(new i.default("1000000")) ? e.dividedBy(new i.default("1000000")) + "MΩ" : e.greaterThanOrEqualTo(new i.default("1000")) ? e.dividedBy(new i.default("1000")) + "KΩ" : e + "Ω" } }, { key: "formatPowerRating", value: function(e) { return e.lessThanOrEqualTo(new i.default("0.125")) ? "1/8 " + o.default.localize("watt") : e.lessThanOrEqualTo(new i.default("0.25")) ? "1/4 " + o.default.localize("watt") : e.lessThanOrEqualTo(new i.default("0.5")) ? "1/2 " + o.default.localize("watt") : e.ceil().toString() + " " + o.default.localize("watt") } }, { key: "formatWattage", value: function(e) { return e.greaterThanOrEqualTo(new i.default("1000000")) ? e.dividedBy(new i.default("1000000")) + " " + o.default.localize("megawatt") : e.greaterThanOrEqualTo(new i.default("1000")) ? e.dividedBy(new i.default("1000")) + " " + o.default.localize("kilowatt") : e.greaterThanOrEqualTo(new i.default("100")) ? e + " " + o.default.localize("watt") : e.times(new i.default("1000")) + " " + o.default.localize("milliwatt") } }, { key: "formatAmper", value: function(e) { return e.greaterThanOrEqualTo(new i.default("1000000")) ? e.dividedBy(new i.default("1000000")) + " " + o.default.localize("megaampere") : e.greaterThanOrEqualTo(new i.default("1000")) ? e.dividedBy(new i.default("1000")) + " " + o.default.localize("kiloampere") : e.greaterThanOrEqualTo(new i.default("100")) ? e + " " + o.default.localize("ampere") : e.times(new i.default("1000")) + " " + o.default.localize("milliampere") } }], (n = null) && a(t.prototype, n), r && a(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), e
        }()
    }, { "./decimal": 6, "./i18n": 9 }],
    15: [function(e, t, n) {
        "use strict";

        function i(e) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
        var o = r(e("./diagram")),
            a = r(e("./units"));

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function u(e, t) { return (u = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

        function l(n) {
            var r = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0 } catch (e) { return !1 } }();
            return function() {
                var e, t = c(n);
                return function(e, t) {
                    { if (t && ("object" === i(t) || "function" == typeof t)) return t; if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined") }
                    return function(e) { if (void 0 !== e) return e; throw new ReferenceError("this hasn't been initialised - super() hasn't been called") }(e)
                }(this, r ? (e = c(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
            }
        }

        function c(e) { return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }
        e = function() {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && u(e, t)
            }(i, o["default"]);
            var e, t, n, r = l(i);

            function i() { return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, i), r.call(this) }
            return e = i, (t = [{ key: "getClassName", value: function() { return "wiring" } }, { key: "drawSourceTerminal", value: function() { var e = this.svg.group(); return e.line(20, this.boxHeight - 20, this.boxWidth, this.boxHeight - 20).addClass("wire"), e.circle().radius(7).cx(20).cy(this.boxHeight - 20).addClass("terminal"), e } }, { key: "drawLed", value: function() { var e = this.svg.group(); return e.path("M0 80 h 25 a10,10 1 0 0 10,-10 v -5 h 30 v 5 a10,10 1 0 0 10,10 h 25").addClass("wire"), e.line(20, 65, 75, 65).addClass("led"), e.path("M30 53 v -25 a20,20 1 0 1 20,-20 a20,20 0 0 1 20,20 v 25 Z").addClass("led"), e.line(5, 15, 25, 15).addClass("plus"), e.line(15, 5, 15, 25).addClass("plus"), e.line(75, 15, 95, 15).addClass("minus"), e } }, { key: "drawWire", value: function() { var e = this.svg.group(); return e.line(0, 80, 100, 80).addClass("wire"), e } }, {
                key: "drawResistor",
                value: function(e) {
                    var t = this.svg.group();
                    t.line(0, 80, 100, 80).addClass("wire");
                    var n = t.group();
                    return n.path("M5 95 v -30 h 90 v 30 h -90").addClass("resistor four-band"), n.path("M15 95 v -30 h 10 v 30 h -10").addClass("band " + e.bands[0]), n.path("M30 95 v -30 h 10 v 30 h -10").addClass("band " + e.bands[1]), n.path("M45 95 v -30 h 10 v 30 h -10").addClass("band " + e.bands[2]), n.path("M75 95 v -30 h 10 v 30 h -10").addClass("band " + e.bands[3]), n.attr("data-toggle", "tooltip").attr("data-placement", "top").attr("title", this.getResistorTooltipText(e)), t.plain(a.default.formatResistanceWithSymbol(e.resistance)).x(50).y(40).font({ anchor: "middle" }).addClass("resistance-text"), t
                }
            }, { key: "drawEndTerminal", value: function() { var e = this.svg.group(); return e.line(0, 80, 80, 80).addClass("wire"), e.circle().radius(7).cx(80).cy(this.boxHeight - 20).addClass("terminal"), e } }, { key: "drawStartConnector", value: function() { var e = this.svg.group(); return e.path("M50 -20 v 100 h50").addClass("wire"), e } }, { key: "drawLastStartConnector", value: function() { var e = this.svg.group(); return e.path("M50 -20 v 90 a10,10 1 0 0 10,10 h40").addClass("wire"), e } }, { key: "drawEndConnector", value: function() { var e = this.svg.group(); return e.path("M40 -20 v 100 h-40").addClass("wire"), e } }, { key: "drawLastEndConnector", value: function() { var e = this.svg.group(); return e.path("M40 -20 v 90 a10,10 0 0 1 -10,10 h-30").addClass("wire"), e } }]) && s(e.prototype, t), n && s(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), i
        }();
        n.default = e
    }, { "./diagram": 7, "./units": 14 }]
}, {}, [8]);