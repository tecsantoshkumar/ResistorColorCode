function setCookie(e, n) {
    var t = new Date;
    t.setTime(t.getTime() + 31536e6), expires = "; expires=" + t.toGMTString(), document.cookie = e + "=" + n + expires + "; path=/"
}

function getCookie(e, n) {
    for (var t = e + "=", r = document.cookie.split(";"), i = 0; i < r.length; i++) {
        for (var o = r[i];
            " " == o.charAt(0);) o = o.substring(1, o.length);
        if (0 == o.indexOf(t)) return o.substring(t.length, o.length)
    }
    return n
}

function trackShare(e) { _dev ? console.log("Share: " + e) : gtag("event", "share", { event_category: "Share", event_label: e }) }
$(function() {
        var e = $(".consent"),
            n = $(".consent .accept");
        e.offsetHeight, getCookie("consent") || e.addClass("show"), n.click(function() { setCookie("consent", !0), e.removeClass("show") })
    }),
    function(e) {
        "use strict";

        function n(e, n) {
            var t, r, i, o, s, c, a, u, f = e.constructor,
                l = f.precision;
            if (!e.s || !n.s) return n.s || (n = new f(e)), E ? y(n, l) : n;
            if (a = e.d, u = n.d, s = e.e, i = n.e, a = a.slice(), o = s - i) {
                for ((c = (c = o < 0 ? (r = a, o = -o, u.length) : (r = u, i = s, a.length)) < (s = Math.ceil(l / L)) ? s + 1 : c + 1) < o && (o = c, r.length = 1), r.reverse(); o--;) r.push(0);
                r.reverse()
            }
            for ((c = a.length) - (o = u.length) < 0 && (o = c, r = u, u = a, a = r), t = 0; o;) t = (a[--o] = a[o] + u[o] + t) / q | 0, a[o] %= q;
            for (t && (a.unshift(t), ++i), c = a.length; 0 == a[--c];) a.pop();
            return n.d = a, n.e = i, E ? y(n, l) : n
        }

        function s(e, n, t) { if (e !== ~~e || e < n || t < e) throw Error(g + e) }

        function p(e) {
            var n, t, r, i = e.length - 1,
                o = "",
                s = e[0];
            if (0 < i) {
                for (o += s, n = 1; n < i; n++) r = e[n] + "", (t = L - r.length) && (o += c(t)), o += r;
                s = e[n], (t = L - (r = s + "").length) && (o += c(t))
            } else if (0 === s) return "0";
            for (; s % 10 == 0;) s /= 10;
            return o + s
        }

        function f(e, n) {
            var t, r, i, o, s, c = 0,
                a = 0,
                u = e.constructor,
                f = u.precision;
            if (16 < k(e)) throw Error(v + k(e));
            if (!e.s) return new u(b);
            for (s = null == n ? (E = !1, f) : n, o = new u(.03125); e.abs().gte(.1);) e = e.times(o), a += 5;
            for (s += Math.log($(2, a)) / Math.LN10 * 2 + 5 | 0, t = r = i = new u(b), u.precision = s;;) {
                if (r = y(r.times(e), s), t = t.times(++c), p((o = i.plus(_(r, t, s))).d).slice(0, s) === p(i.d).slice(0, s)) { for (; a--;) i = y(i.times(i), s); return u.precision = f, null == n ? (E = !0, y(i, f)) : i }
                i = o
            }
        }

        function k(e) { for (var n = e.e * L, t = e.d[0]; 10 <= t; t /= 10) n++; return n }

        function m(e, n, t) { if (n > e.LN10.sd()) throw E = !0, t && (e.precision = t), Error(C + "LN10 precision limit exceeded"); return y(new e(e.LN10), n) }

        function c(e) { for (var n = ""; e--;) n += "0"; return n }

        function w(e, n) {
            var t, r, i, o, s, c, a, u, f, l = 1,
                h = e,
                d = h.d,
                g = h.constructor,
                v = g.precision;
            if (h.s < 1) throw Error(C + (h.s ? "NaN" : "-Infinity"));
            if (h.eq(b)) return new g(0);
            if (u = null == n ? (E = !1, v) : n, h.eq(10)) return null == n && (E = !0), m(g, u);
            if (u += 10, g.precision = u, r = (t = p(d)).charAt(0), o = k(h), !(Math.abs(o) < 15e14)) return a = m(g, u + 2, v).times(o + ""), h = w(new g(r + "." + t.slice(1)), u - 10).plus(a), g.precision = v, null == n ? (E = !0, y(h, v)) : h;
            for (; r < 7 && 1 != r || 1 == r && 3 < t.charAt(1);) r = (t = p((h = h.times(e)).d)).charAt(0), l++;
            for (o = k(h), 1 < r ? (h = new g("0." + t), o++) : h = new g(r + "." + t.slice(1)), c = s = h = _(h.minus(b), h.plus(b), u), f = y(h.times(h), u), i = 3;;) {
                if (s = y(s.times(f), u), p((a = c.plus(_(s, new g(i), u))).d).slice(0, u) === p(c.d).slice(0, u)) return c = c.times(2), 0 !== o && (c = c.plus(m(g, u + 2, v).times(o + ""))), c = _(c, new g(l), u), g.precision = v, null == n ? (E = !0, y(c, v)) : c;
                c = a, i += 2
            }
        }

        function a(e, n) {
            var t, r, i;
            for (-1 < (t = n.indexOf(".")) && (n = n.replace(".", "")), 0 < (r = n.search(/e/i)) ? (t < 0 && (t = r), t += +n.slice(r + 1), n = n.substring(0, r)) : t < 0 && (t = n.length), r = 0; 48 === n.charCodeAt(r);) ++r;
            for (i = n.length; 48 === n.charCodeAt(i - 1);) --i;
            if (n = n.slice(r, i)) {
                if (i -= r, t = t - r - 1, e.e = N(t / L), e.d = [], r = (t + 1) % L, t < 0 && (r += L), r < i) {
                    for (r && e.d.push(+n.slice(0, r)), i -= L; r < i;) e.d.push(+n.slice(r, r += L));
                    n = n.slice(r), r = L - n.length
                } else r -= i;
                for (; r--;) n += "0";
                if (e.d.push(+n), E && (e.e > O || e.e < -O)) throw Error(v + t)
            } else e.s = 0, e.e = 0, e.d = [0];
            return e
        }

        function y(e, n, t) {
            var r, i, o, s, c, a, u, f, l = e.d;
            for (s = 1, o = l[0]; 10 <= o; o /= 10) s++;
            if ((r = n - s) < 0) r += L, i = n, u = l[f = 0];
            else {
                if (f = Math.ceil((r + 1) / L), (o = l.length) <= f) return e;
                for (u = o = l[f], s = 1; 10 <= o; o /= 10) s++;
                i = (r %= L) - L + s
            }
            if (void 0 !== t && (c = u / (o = $(10, s - i - 1)) % 10 | 0, a = n < 0 || void 0 !== l[f + 1] || u % o, a = t < 4 ? (c || a) && (0 == t || t == (e.s < 0 ? 3 : 2)) : 5 < c || 5 == c && (4 == t || a || 6 == t && (0 < r ? 0 < i ? u / $(10, s - i) : 0 : l[f - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7))), n < 1 || !l[0]) return a ? (n = n - (o = k(e)) - (l.length = 1), l[0] = $(10, (L - n % L) % L), e.e = N(-n / L) || 0) : (l.length = 1, l[0] = e.e = e.s = 0), e;
            if (0 == r ? (l.length = f, o = 1, f--) : (l.length = f + 1, o = $(10, L - r), l[f] = 0 < i ? (u / $(10, s - i) % $(10, i) | 0) * o : 0), a)
                for (;;) {
                    if (0 == f) {
                        (l[0] += o) == q && (l[0] = 1, ++e.e);
                        break
                    }
                    if (l[f] += o, l[f] != q) break;
                    l[f--] = 0, o = 1
                }
            for (r = l.length; 0 === l[--r];) l.pop();
            if (E && (e.e > O || e.e < -O)) throw Error(v + k(e));
            return e
        }

        function t(e, n) {
            var t, r, i, o, s, c, a, u, f, l, h = e.constructor,
                d = h.precision;
            if (!e.s || !n.s) return n.s ? n.s = -n.s : n = new h(e), E ? y(n, d) : n;
            if (a = e.d, l = n.d, r = n.e, u = e.e, a = a.slice(), s = u - r) {
                for (c = (f = s < 0) ? (t = a, s = -s, l.length) : (t = l, r = u, a.length), (i = Math.max(Math.ceil(d / L), c) + 2) < s && (s = i, t.length = 1), t.reverse(), i = s; i--;) t.push(0);
                t.reverse()
            } else {
                for ((f = (i = a.length) < (c = l.length)) && (c = i), i = 0; i < c; i++)
                    if (a[i] != l[i]) { f = a[i] < l[i]; break }
                s = 0
            }
            for (f && (t = a, a = l, l = t, n.s = -n.s), c = a.length, i = l.length - c; 0 < i; --i) a[c++] = 0;
            for (i = l.length; s < i;) {
                if (a[--i] < l[i]) { for (o = i; o && 0 === a[--o];) a[o] = q - 1;--a[o], a[i] += q }
                a[i] -= l[i]
            }
            for (; 0 === a[--c];) a.pop();
            for (; 0 === a[0]; a.shift()) --r;
            return a[0] ? (n.d = a, n.e = r, E ? y(n, d) : n) : new h(0)
        }

        function u(e, n, t) {
            var r, i = k(e),
                o = p(e.d),
                s = o.length;
            return n ? (t && 0 < (r = t - s) ? o = o.charAt(0) + "." + o.slice(1) + c(r) : 1 < s && (o = o.charAt(0) + "." + o.slice(1)), o = o + (i < 0 ? "e" : "e+") + i) : i < 0 ? (o = "0." + c(-i - 1) + o, t && 0 < (r = t - s) && (o += c(r))) : s <= i ? (o += c(i + 1 - s), t && 0 < (r = t - i - 1) && (o = o + "." + c(r))) : ((r = i + 1) < s && (o = o.slice(0, r) + "." + o.slice(r)), t && 0 < (r = t - s) && (i + 1 === s && (o += "."), o += c(r))), e.s < 0 ? "-" + o : o
        }

        function l(e, n) { return e.length > n && (e.length = n, 1) }

        function h(e) {
            if (!e || "object" != typeof e) throw Error(C + "Object expected");
            var n, t, r, i = ["precision", 1, d, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
            for (n = 0; n < i.length; n += 3)
                if (void 0 !== (r = e[t = i[n]])) {
                    if (!(N(r) === r && i[n + 1] <= r && r <= i[n + 2])) throw Error(g + t + ": " + r);
                    this[t] = r
                }
            if (void 0 !== (r = e[t = "LN10"])) {
                if (r != Math.LN10) throw Error(g + t + ": " + r);
                this[t] = new this(r)
            }
            return this
        }
        var b, d = 1e9,
            r = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" },
            E = !0,
            C = "[DecimalError] ",
            g = C + "Invalid argument: ",
            v = C + "Exponent out of range: ",
            N = Math.floor,
            $ = Math.pow,
            D = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
            q = 1e7,
            L = 7,
            x = 9007199254740991,
            O = N(x / L),
            T = {};
        T.absoluteValue = T.abs = function() { var e = new this.constructor(this); return e.s && (e.s = 1), e }, T.comparedTo = T.cmp = function(e) {
            var n, t, r, i, o = this;
            if (e = new o.constructor(e), o.s !== e.s) return o.s || -e.s;
            if (o.e !== e.e) return o.e > e.e ^ o.s < 0 ? 1 : -1;
            for (n = 0, t = (r = o.d.length) < (i = e.d.length) ? r : i; n < t; ++n)
                if (o.d[n] !== e.d[n]) return o.d[n] > e.d[n] ^ o.s < 0 ? 1 : -1;
            return r === i ? 0 : i < r ^ o.s < 0 ? 1 : -1
        }, T.decimalPlaces = T.dp = function() {
            var e = this.d.length - 1,
                n = (e - this.e) * L;
            if (e = this.d[e])
                for (; e % 10 == 0; e /= 10) n--;
            return n < 0 ? 0 : n
        }, T.dividedBy = T.div = function(e) { return _(this, new this.constructor(e)) }, T.dividedToIntegerBy = T.idiv = function(e) { var n = this.constructor; return y(_(this, new n(e), 0, 1), n.precision) }, T.equals = T.eq = function(e) { return !this.cmp(e) }, T.exponent = function() { return k(this) }, T.greaterThan = T.gt = function(e) { return 0 < this.cmp(e) }, T.greaterThanOrEqualTo = T.gte = function(e) { return 0 <= this.cmp(e) }, T.isInteger = T.isint = function() { return this.e > this.d.length - 2 }, T.isNegative = T.isneg = function() { return this.s < 0 }, T.isPositive = T.ispos = function() { return 0 < this.s }, T.isZero = function() { return 0 === this.s }, T.lessThan = T.lt = function(e) { return this.cmp(e) < 0 }, T.lessThanOrEqualTo = T.lte = function(e) { return this.cmp(e) < 1 }, T.logarithm = T.log = function(e) {
            var n, t = this,
                r = t.constructor,
                i = r.precision,
                o = i + 5;
            if (void 0 === e) e = new r(10);
            else if ((e = new r(e)).s < 1 || e.eq(b)) throw Error(C + "NaN");
            if (t.s < 1) throw Error(C + (t.s ? "NaN" : "-Infinity"));
            return t.eq(b) ? new r(0) : (E = !1, n = _(w(t, o), w(e, o), o), E = !0, y(n, i))
        }, T.minus = T.sub = function(e) { return e = new this.constructor(e), this.s == e.s ? t(this, e) : n(this, (e.s = -e.s, e)) }, T.modulo = T.mod = function(e) {
            var n, t = this,
                r = t.constructor,
                i = r.precision;
            if (!(e = new r(e)).s) throw Error(C + "NaN");
            return t.s ? (E = !1, n = _(t, e, 0, 1).times(e), E = !0, t.minus(n)) : y(new r(t), i)
        }, T.naturalExponential = T.exp = function() { return f(this) }, T.naturalLogarithm = T.ln = function() { return w(this) }, T.negated = T.neg = function() { var e = new this.constructor(this); return e.s = -e.s || 0, e }, T.plus = T.add = function(e) { return e = new this.constructor(e), this.s == e.s ? n(this, e) : t(this, (e.s = -e.s, e)) }, T.precision = T.sd = function(e) { var n, t, r; if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e) throw Error(g + e); if (n = k(this) + 1, t = (r = this.d.length - 1) * L + 1, r = this.d[r]) { for (; r % 10 == 0; r /= 10) t--; for (r = this.d[0]; 10 <= r; r /= 10) t++ } return e && t < n ? n : t }, T.squareRoot = T.sqrt = function() {
            var e, n, t, r, i, o, s, c = this,
                a = c.constructor;
            if (c.s < 1) { if (!c.s) return new a(0); throw Error(C + "NaN") }
            for (e = k(c), E = !1, r = 0 == (i = Math.sqrt(+c)) || i == 1 / 0 ? (((n = p(c.d)).length + e) % 2 == 0 && (n += "0"), i = Math.sqrt(n), e = N((e + 1) / 2) - (e < 0 || e % 2), new a(n = i == 1 / 0 ? "1e" + e : (n = i.toExponential()).slice(0, n.indexOf("e") + 1) + e)) : new a(i.toString()), i = s = (t = a.precision) + 3;;)
                if (r = (o = r).plus(_(c, o, s + 2)).times(.5), p(o.d).slice(0, s) === (n = p(r.d)).slice(0, s)) {
                    if (n = n.slice(s - 3, s + 1), i == s && "4999" == n) { if (y(o, t + 1, 0), o.times(o).eq(c)) { r = o; break } } else if ("9999" != n) break;
                    s += 4
                }
            return E = !0, y(r, t)
        }, T.times = T.mul = function(e) {
            var n, t, r, i, o, s, c, a, u, f = this,
                l = f.constructor,
                h = f.d,
                d = (e = new l(e)).d;
            if (!f.s || !e.s) return new l(0);
            for (e.s *= f.s, t = f.e + e.e, (a = h.length) < (u = d.length) && (o = h, h = d, d = o, s = a, a = u, u = s), o = [], r = s = a + u; r--;) o.push(0);
            for (r = u; 0 <= --r;) {
                for (n = 0, i = a + r; r < i;) c = o[i] + d[r] * h[i - r - 1] + n, o[i--] = c % q | 0, n = c / q | 0;
                o[i] = (o[i] + n) % q | 0
            }
            for (; !o[--s];) o.pop();
            return n ? ++t : o.shift(), e.d = o, e.e = t, E ? y(e, l.precision) : e
        }, T.toDecimalPlaces = T.todp = function(e, n) {
            var t = this,
                r = t.constructor;
            return t = new r(t), void 0 === e ? t : (s(e, 0, d), void 0 === n ? n = r.rounding : s(n, 0, 8), y(t, e + k(t) + 1, n))
        }, T.toExponential = function(e, n) {
            var t = this,
                r = t.constructor;
            return void 0 === e ? u(t, !0) : (s(e, 0, d), void 0 === n ? n = r.rounding : s(n, 0, 8), u(t = y(new r(t), e + 1, n), !0, e + 1))
        }, T.toFixed = function(e, n) {
            var t, r, i = this,
                o = i.constructor;
            return void 0 === e ? u(i) : (s(e, 0, d), void 0 === n ? n = o.rounding : s(n, 0, 8), t = u((r = y(new o(i), e + k(i) + 1, n)).abs(), !1, e + k(r) + 1), i.isneg() && !i.isZero() ? "-" + t : t)
        }, T.toInteger = T.toint = function() { var e = this.constructor; return y(new e(this), k(this) + 1, e.rounding) }, T.toNumber = function() { return +this }, T.toPower = T.pow = function(e) {
            var n, t, r, i, o, s, c = this,
                a = c.constructor,
                u = +(e = new a(e));
            if (!e.s) return new a(b);
            if (!(c = new a(c)).s) { if (e.s < 1) throw Error(C + "Infinity"); return c }
            if (c.eq(b)) return c;
            if (r = a.precision, e.eq(b)) return y(c, r);
            if (n = e.e, s = (t = e.d.length - 1) <= n, o = c.s, s) { if ((t = u < 0 ? -u : u) <= x) { for (i = new a(b), n = Math.ceil(r / L + 4), E = !1; t % 2 && l((i = i.times(c)).d, n), 0 !== (t = N(t / 2));) l((c = c.times(c)).d, n); return E = !0, e.s < 0 ? new a(b).div(i) : y(i, r) } } else if (o < 0) throw Error(C + "NaN");
            return o = o < 0 && 1 & e.d[Math.max(n, t)] ? -1 : 1, c.s = 1, E = !1, i = e.times(w(c, r + 12)), E = !0, (i = f(i)).s = o, i
        }, T.toPrecision = function(e, n) {
            var t, r = this,
                i = r.constructor;
            return void 0 === e ? u(r, (t = k(r)) <= i.toExpNeg || t >= i.toExpPos) : (s(e, 1, d), void 0 === n ? n = i.rounding : s(n, 0, 8), u(r = y(new i(r), e, n), e <= (t = k(r)) || t <= i.toExpNeg, e))
        }, T.toSignificantDigits = T.tosd = function(e, n) { var t = this.constructor; return void 0 === e ? (e = t.precision, n = t.rounding) : (s(e, 1, d), void 0 === n ? n = t.rounding : s(n, 0, 8)), y(new t(this), e, n) }, T.toString = T.valueOf = T.val = T.toJSON = function() {
            var e = k(this),
                n = this.constructor;
            return u(this, e <= n.toExpNeg || e >= n.toExpPos)
        };
        var _ = function(e, n, t, r) {
            var i, o, s, c, a, u, f, l, h, d, g, v, p, m, w, b, E, N, $ = e.constructor,
                D = e.s == n.s ? 1 : -1,
                x = e.d,
                O = n.d;
            if (!e.s) return new $(e);
            if (!n.s) throw Error(C + "Division by zero");
            for (o = e.e - n.e, E = O.length, w = x.length, l = (f = new $(D)).d = [], s = 0; O[s] == (x[s] || 0);) ++s;
            if (O[s] > (x[s] || 0) && --o, (v = null == t ? t = $.precision : r ? t + (k(e) - k(n)) + 1 : t) < 0) return new $(0);
            if (v = v / L + 2 | 0, s = 0, 1 == E)
                for (O = O[c = 0], v++;
                    (s < w || c) && v--; s++) p = c * q + (x[s] || 0), l[s] = p / O | 0, c = p % O | 0;
            else { for (1 < (c = q / (O[0] + 1) | 0) && (O = M(O, c), x = M(x, c), E = O.length, w = x.length), m = E, d = (h = x.slice(0, E)).length; d < E;) h[d++] = 0; for ((N = O.slice()).unshift(0), b = O[0], O[1] >= q / 2 && ++b; c = 0, (i = A(O, h, E, d)) < 0 ? (g = h[0], E != d && (g = g * q + (h[1] || 0)), 1 < (c = g / b | 0) ? (q <= c && (c = q - 1), 1 == (i = A(a = M(O, c), h, u = a.length, d = h.length)) && (c--, P(a, E < u ? N : O, u))) : (0 == c && (i = c = 1), a = O.slice()), (u = a.length) < d && a.unshift(0), P(h, a, d), -1 == i && (i = A(O, h, E, d = h.length)) < 1 && (c++, P(h, E < d ? N : O, d)), d = h.length) : 0 === i && (c++, h = [0]), l[s++] = c, i && h[0] ? h[d++] = x[m] || 0 : (h = [x[m]], d = 1), (m++ < w || void 0 !== h[0]) && v--;); }
            return l[0] || l.shift(), f.e = o, y(f, r ? t + k(f) + 1 : t)
        };

        function M(e, n) {
            var t, r = 0,
                i = e.length;
            for (e = e.slice(); i--;) t = e[i] * n + r, e[i] = t % q | 0, r = t / q | 0;
            return r && e.unshift(r), e
        }

        function A(e, n, t, r) {
            var i, o;
            if (t != r) o = r < t ? 1 : -1;
            else
                for (i = o = 0; i < t; i++)
                    if (e[i] != n[i]) { o = e[i] > n[i] ? 1 : -1; break } return o
        }

        function P(e, n, t) { for (var r = 0; t--;) e[t] -= r, r = e[t] < n[t] ? 1 : 0, e[t] = r * q + e[t] - n[t]; for (; !e[0] && 1 < e.length;) e.shift() }(r = function e(n) {
            function t(e) {
                var n = this;
                if (!(n instanceof t)) return new t(e);
                if (e instanceof(n.constructor = t)) return n.s = e.s, n.e = e.e, void(n.d = (e = e.d) ? e.slice() : e);
                if ("number" == typeof e) {
                    if (0 * e != 0) throw Error(g + e);
                    if (0 < e) n.s = 1;
                    else {
                        if (!(e < 0)) return n.s = 0, n.e = 0, void(n.d = [0]);
                        e = -e, n.s = -1
                    }
                    return e === ~~e && e < 1e7 ? (n.e = 0, void(n.d = [e])) : a(n, e.toString())
                }
                if ("string" != typeof e) throw Error(g + e);
                if (45 === e.charCodeAt(0) ? (e = e.slice(1), n.s = -1) : n.s = 1, !D.test(e)) throw Error(g + e);
                a(n, e)
            }
            var r, i, o;
            if (t.prototype = T, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.clone = e, t.config = t.set = h, void 0 === n && (n = {}), n)
                for (o = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], r = 0; r < o.length;) n.hasOwnProperty(i = o[r++]) || (n[i] = this[i]);
            return t.config(n), t
        }(r)).default = r.Decimal = r, b = new r(1), "function" == typeof define && define.amd ? define(function() { return r }) : "undefined" != typeof module && module.exports ? module.exports = r : (e = e || ("undefined" != typeof self && self && self.self == self ? self : Function("return this")())).Decimal = r
    }(this), $(function() {
        var l = "four-band";

        function e(e) {
            var n, t, r;
            n = l = e, (t = $(".calculator")).removeClass("three-band"), t.removeClass("four-band"), t.removeClass("five-band"), t.removeClass("six-band"), t.addClass(n), r = 1, $("#band-numbers").children().each(function(e) { 0 !== e && "none" !== $(this).css("display") && $(this).text("Band " + r++) }),
                function(e) {
                    $("#band-1").attr("class", "band-1"), $("#band-2").attr("class", "band-2"), "three-band" === e || "four-band" === e ? ($("#band-3").attr("class", "band-multiplier"), $("#band-4").attr("class", "")) : ($("#band-3").attr("class", "band-3"), $("#band-4").attr("class", "band-multiplier"));
                    $("#band-5").attr("class", "band-tolerance"), $("#band-6").attr("class", "band-tcr")
                }(e), i()
        }

        function i() {
            var e = $("input[name=band-1-radio]:checked");
            h("band-1", e);
            var n = $("input[name=band-2-radio]:checked");
            h("band-2", n);
            var t = $("input[name=band-3-radio]:checked");
            h("band-3", t);
            var r = $("input[name=multi-radio]:checked");
            h("band-multiplier", r);
            var i = $("input[name=tol-radio]:checked");
            h("band-tolerance", i), h("band-tcr", $("input[name=tcr-radio]:checked"));
            var o = new Decimal(e.val()),
                s = new Decimal(n.val()),
                c = new Decimal(t.val()),
                a = new Decimal(r.val()),
                u = new Decimal(i.val()),
                f = 0;
            f = "three-band" === l ? (u = new Decimal("0.2"), o.times("10").plus(s).times(a)) : "four-band" === l ? o.times("10").plus(s).times(a) : o.times("100").plus(s.times("10")).plus(c).times(a), $("#resistance").val(d(f) + " " + ("±" + 100 * u + "%")), $("#resistance-min").val(d(f.times(new Decimal("1").minus(u)))), $("#resistance-max").val(d(f.times(new Decimal("1").plus(u))))
        }

        function h(e, n) {
            var t = n.parent().parent().css("backgroundColor");
            $("#resistor ." + e).css("fill", t)
        }

        function d(e) {
            var n = "Ω",
                t = new Decimal("1");
            return e.greaterThanOrEqualTo(new Decimal("10e8")) ? (n = "GΩ", t = new Decimal("10e8")) : e.greaterThanOrEqualTo(new Decimal("10e5")) ? (n = "MΩ", t = new Decimal("10e5")) : e.greaterThanOrEqualTo(new Decimal("10e2")) && (n = "kΩ", t = new Decimal("10e2")), e.dividedBy(t).toString() + " " + n
        }
        e("four-band"), $("input[type=radio][name=bands]").change(function() { e(this.value) }), $(".color-table input[type=radio]").change(function() { i() }), $("#show-advanced").click(function(e) { e.preventDefault(), $(".results").addClass("advanced"), $("#hide-advanced").show(), $("#show-advanced").hide() }), $("#hide-advanced").click(function(e) { e.preventDefault(), $(".results").removeClass("advanced"), $("#show-advanced").show(), $("#hide-advanced").hide() })
    });