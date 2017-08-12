!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = pe.type(e);
        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function r(e, t, n) {
        if (pe.isFunction(t))
            return pe.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return pe.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (Ce.test(t))
                return pe.filter(t, e, n);
            t = pe.filter(t, e)
        }
        return pe.grep(e, function(e) {
            return pe.inArray(e, t) > -1 !== n
        })
    }
    function i(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function o(e) {
        var t = {};
        return pe.each(e.match(De) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    function a() {
        re.addEventListener ? (re.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (re.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }
    function s() {
        (re.addEventListener || "load" === e.event.type || "complete" === re.readyState) && (a(), pe.ready())
    }
    function u(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(_e, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : qe.test(n) ? pe.parseJSON(n) : n)
                } catch (i) {}
                pe.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function l(e) {
        var t;
        for (t in e)
            if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function c(e, t, n, r) {
        if (He(e)) {
            var i,
                o,
                a = pe.expando,
                s = e.nodeType,
                u = s ? pe.cache : e,
                l = s ? e[a] : e[a] && a;
            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t)
                return l || (l = s ? e[a] = ne.pop() || pe.guid++ : a), u[l] || (u[l] = s ? {} : {
                    toJSON: pe.noop
                }), "object" != typeof t && "function" != typeof t || (r ? u[l] = pe.extend(u[l], t) : u[l].data = pe.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[pe.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[pe.camelCase(t)])) : i = o, i
        }
    }
    function f(e, t, n) {
        if (He(e)) {
            var r,
                i,
                o = e.nodeType,
                a = o ? pe.cache : e,
                s = o ? e[pe.expando] : pe.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    pe.isArray(t) ? t = t.concat(pe.map(t, pe.camelCase)) : t in r ? t = [t] : (t = pe.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;)
                        delete r[t[i]];
                    if (n ? !l(r) : !pe.isEmptyObject(r))
                        return
                }
                (n || (delete a[s].data, l(a[s]))) && (o ? pe.cleanData([e], !0) : fe.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }
    function d(e, t, n, r) {
        var i,
            o = 1,
            a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return pe.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (pe.cssNumber[t] ? "" : "px"),
            c = (pe.cssNumber[t] || "px" !== l && +u) && Me.exec(pe.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do o = o || ".5", c /= o, pe.style(e, t, c + l);
            while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    function p(e) {
        var t = ze.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;)
                n.createElement(t.pop());
        return n
    }
    function h(e, t) {
        var n,
            r,
            i = 0,
            o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)
                !t || pe.nodeName(r, t) ? o.push(r) : pe.merge(o, h(r, t));
        return void 0 === t || t && pe.nodeName(e, t) ? pe.merge([e], o) : o
    }
    function g(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++)
            pe._data(n, "globalEval", !t || pe._data(t[r], "globalEval"))
    }
    function m(e) {
        Be.test(e.type) && (e.defaultChecked = e.checked)
    }
    function y(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f, d = e.length, y = p(t), v = [], x = 0; x < d; x++)
            if (a = e[x], a || 0 === a)
                if ("object" === pe.type(a))
                    pe.merge(v, a.nodeType ? [a] : a);
                else if (Ue.test(a)) {
                    for (u = u || y.appendChild(t.createElement("div")), l = (We.exec(a) || ["", ""])[1].toLowerCase(), f = Xe[l] || Xe._default, u.innerHTML = f[1] + pe.htmlPrefilter(a) + f[2], o = f[0]; o--;)
                        u = u.lastChild;
                    if (!fe.leadingWhitespace && $e.test(a) && v.push(t.createTextNode($e.exec(a)[0])), !fe.tbody)
                        for (a = "table" !== l || Ve.test(a) ? "<table>" !== f[1] || Ve.test(a) ? 0 : u : u.firstChild, o = a && a.childNodes.length; o--;)
                            pe.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
                    for (pe.merge(v, u.childNodes), u.textContent = ""; u.firstChild;)
                        u.removeChild(u.firstChild);
                    u = y.lastChild
                } else
                    v.push(t.createTextNode(a));
        for (u && y.removeChild(u), fe.appendChecked || pe.grep(h(v, "input"), m), x = 0; a = v[x++];)
            if (r && pe.inArray(a, r) > -1)
                i && i.push(a);
            else if (s = pe.contains(a.ownerDocument, a), u = h(y.appendChild(a), "script"), s && g(u), n)
                for (o = 0; a = u[o++];)
                    Ie.test(a.type || "") && n.push(a);
        return u = null, y
    }
    function v() {
        return !0
    }
    function x() {
        return !1
    }
    function b() {
        try {
            return re.activeElement
        } catch (e) {}
    }
    function w(e, t, n, r, i, o) {
        var a,
            s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t)
                w(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1)
            i = x;
        else if (!i)
            return e;
        return 1 === o && (a = i, i = function(e) {
            return pe().off(e), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = pe.guid++)), e.each(function() {
            pe.event.add(this, t, i, r, n)
        })
    }
    function T(e, t) {
        return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function C(e) {
        return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e
    }
    function E(e) {
        var t = it.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function N(e, t) {
        if (1 === t.nodeType && pe.hasData(e)) {
            var n,
                r,
                i,
                o = pe._data(e),
                a = pe._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; r < i; r++)
                        pe.event.add(t, n, s[n][r])
            }
            a.data && (a.data = pe.extend({}, a.data))
        }
    }
    function k(e, t) {
        var n,
            r,
            i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !fe.noCloneEvent && t[pe.expando]) {
                i = pe._data(t);
                for (r in i.events)
                    pe.removeEvent(t, r, i.handle);
                t.removeAttribute(pe.expando)
            }
            "script" === n && t.text !== e.text ? (C(t).text = e.text, E(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), fe.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Be.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }
    function S(e, t, n, r) {
        t = oe.apply([], t);
        var i,
            o,
            a,
            s,
            u,
            l,
            c = 0,
            f = e.length,
            d = f - 1,
            p = t[0],
            g = pe.isFunction(p);
        if (g || f > 1 && "string" == typeof p && !fe.checkClone && rt.test(p))
            return e.each(function(i) {
                var o = e.eq(i);
                g && (t[0] = p.call(this, i, o.html())), S(o, t, n, r)
            });
        if (f && (l = y(t, e[0].ownerDocument, !1, e, r), i = l.firstChild, 1 === l.childNodes.length && (l = i), i || r)) {
            for (s = pe.map(h(l, "script"), C), a = s.length; c < f; c++)
                o = l, c !== d && (o = pe.clone(o, !0, !0), a && pe.merge(s, h(o, "script"))), n.call(e[c], o, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument, pe.map(s, E), c = 0; c < a; c++)
                    o = s[c], Ie.test(o.type || "") && !pe._data(o, "globalEval") && pe.contains(u, o) && (o.src ? pe._evalUrl && pe._evalUrl(o.src) : pe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
            l = i = null
        }
        return e
    }
    function A(e, t, n) {
        for (var r, i = t ? pe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || pe.cleanData(h(r)), r.parentNode && (n && pe.contains(r.ownerDocument, r) && g(h(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    function D(e, t) {
        var n = pe(t.createElement(e)).appendTo(t.body),
            r = pe.css(n[0], "display");
        return n.detach(), r
    }
    function j(e) {
        var t = re,
            n = lt[e];
        return n || (n = D(e, t), "none" !== n && n || (ut = (ut || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (ut[0].contentWindow || ut[0].contentDocument).document, t.write(), t.close(), n = D(e, t), ut.detach()), lt[e] = n), n
    }
    function L(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function H(e) {
        if (e in Et)
            return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Ct.length; n--;)
            if (e = Ct[n] + t, e in Et)
                return e
    }
    function q(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)
            r = e[a], r.style && (o[a] = pe._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Re(r) && (o[a] = pe._data(r, "olddisplay", j(r.nodeName)))) : (i = Re(r), (n && "none" !== n || !i) && pe._data(r, "olddisplay", i ? n : pe.css(r, "display"))));
        for (a = 0; a < s; a++)
            r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    function _(e, t, n) {
        var r = bt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function F(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)
            "margin" === n && (a += pe.css(e, n + Oe[o], !0, i)), r ? ("content" === n && (a -= pe.css(e, "padding" + Oe[o], !0, i)), "margin" !== n && (a -= pe.css(e, "border" + Oe[o] + "Width", !0, i))) : (a += pe.css(e, "padding" + Oe[o], !0, i), "padding" !== n && (a += pe.css(e, "border" + Oe[o] + "Width", !0, i)));
        return a
    }
    function M(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = ht(e),
            a = fe.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (i = gt(e, t, o), (i < 0 || null == i) && (i = e.style[t]), ft.test(i))
                return i;
            r = a && (fe.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + F(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function O(e, t, n, r, i) {
        return new O.prototype.init(e, t, n, r, i)
    }
    function R() {
        return e.setTimeout(function() {
            Nt = void 0
        }), Nt = pe.now()
    }
    function P(e, t) {
        var n,
            r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            n = Oe[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    function B(e, t, n) {
        for (var r, i = ($.tweeners[t] || []).concat($.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function W(e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = this,
            d = {},
            p = e.style,
            h = e.nodeType && Re(e),
            g = pe._data(e, "fxshow");
        n.queue || (s = pe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, f.always(function() {
            f.always(function() {
                s.unqueued--, pe.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = pe.css(e, "display"), c = "none" === l ? pe._data(e, "olddisplay") || j(e.nodeName) : l, "inline" === c && "none" === pe.css(e, "float") && (fe.inlineBlockNeedsLayout && "inline" !== j(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", fe.shrinkWrapBlocks() || f.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], St.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r])
                        continue;
                    h = !0
                }
                d[r] = g && g[r] || pe.style(e, r)
            } else
                l = void 0;
        if (pe.isEmptyObject(d))
            "inline" === ("none" === l ? j(e.nodeName) : l) && (p.display = l);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = pe._data(e, "fxshow", {}), o && (g.hidden = !h), h ? pe(e).show() : f.done(function() {
                pe(e).hide()
            }), f.done(function() {
                var t;
                pe._removeData(e, "fxshow");
                for (t in d)
                    pe.style(e, t, d[t])
            });
            for (r in d)
                a = B(h ? g[r] : 0, r, f), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function I(e, t) {
        var n,
            r,
            i,
            o,
            a;
        for (n in e)
            if (r = pe.camelCase(n), i = t[r], o = e[n], pe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = pe.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n], t[n] = i)
            } else
                t[r] = i
    }
    function $(e, t, n) {
        var r,
            i,
            o = 0,
            a = $.prefilters.length,
            s = pe.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i)
                    return !1;
                for (var t = Nt || R(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++)
                    l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), o < 1 && u ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: pe.extend({}, t),
                opts: pe.extend(!0, {
                    specialEasing: {},
                    easing: pe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Nt || R(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = pe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i)
                        return this;
                    for (i = !0; n < r; n++)
                        l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (I(c, l.opts.specialEasing); o < a; o++)
            if (r = $.prefilters[o].call(l, e, c, l.opts))
                return pe.isFunction(r.stop) && (pe._queueHooks(l.elem, l.opts.queue).stop = pe.proxy(r.stop, r)), r;
        return pe.map(c, B, l), pe.isFunction(l.opts.start) && l.opts.start.call(e, l), pe.fx.timer(pe.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function z(e) {
        return pe.attr(e, "class") || ""
    }
    function X(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r,
                i = 0,
                o = t.toLowerCase().match(De) || [];
            if (pe.isFunction(n))
                for (; r = o[i++];)
                    "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function U(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, pe.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            a = e === Kt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function V(e, t) {
        var n,
            r,
            i = pe.ajaxSettings.flatOptions || {};
        for (r in t)
            void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && pe.extend(!0, e, n), e
    }
    function Y(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];)
            u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    u.unshift(a);
                    break
                }
        if (u[0] in n)
            o = u[0];
        else {
            for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        if (o)
            return o !== u[0] && u.unshift(o), n[o]
    }
    function J(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (a = l[u + " " + o] || l["* " + o], !a)
                        for (i in l)
                            if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (f) {
                                return {
                                    state: "parsererror",
                                    error: a ? f : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function G(e) {
        return e.style && e.style.display || pe.css(e, "display")
    }
    function Q(e) {
        if (!pe.contains(e.ownerDocument || re, e))
            return !0;
        for (; e && 1 === e.nodeType;) {
            if ("none" === G(e) || "hidden" === e.type)
                return !0;
            e = e.parentNode
        }
        return !1
    }
    function K(e, t, n, r) {
        var i;
        if (pe.isArray(t))
            pe.each(t, function(t, i) {
                n || rn.test(e) ? r(e, i) : K(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== pe.type(t))
            r(e, t);
        else
            for (i in t)
                K(e + "[" + i + "]", t[i], n, r)
    }
    function Z() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function te(e) {
        return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var ne = [],
        re = e.document,
        ie = ne.slice,
        oe = ne.concat,
        ae = ne.push,
        se = ne.indexOf,
        ue = {},
        le = ue.toString,
        ce = ue.hasOwnProperty,
        fe = {},
        de = "1.12.4",
        pe = function(e, t) {
            return new pe.fn.init(e, t)
        },
        he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ge = /^-ms-/,
        me = /-([\da-z])/gi,
        ye = function(e, t) {
            return t.toUpperCase()
        };
    pe.fn = pe.prototype = {
        jquery: de,
        constructor: pe,
        selector: "",
        length: 0,
        toArray: function() {
            return ie.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : ie.call(this)
        },
        pushStack: function(e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return pe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(pe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ae,
        sort: ne.sort,
        splice: ne.splice
    }, pe.extend = pe.fn.extend = function() {
        var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || pe.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (i = arguments[s]))
                for (r in i)
                    e = a[r], n = i[r], a !== n && (l && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1, o = e && pe.isArray(e) ? e : []) : o = e && pe.isPlainObject(e) ? e : {}, a[r] = pe.extend(l, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }, pe.extend({
        expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === pe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === pe.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e))
                return !1;
            try {
                if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            if (!fe.ownFirst)
                for (t in e)
                    return ce.call(e, t);
            for (t in e)
                ;
            return void 0 === t || ce.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ue[le.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && pe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(ge, "ms-").replace(me, ye)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var r,
                i = 0;
            if (n(e))
                for (r = e.length; i < r && t.call(e[i], i, e[i]) !== !1; i++)
                    ;
            else
                for (i in e)
                    if (t.call(e[i], i, e[i]) === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? pe.merge(r, "string" == typeof e ? [e] : e) : ae.call(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (se)
                    return se.call(t, e, n);
                for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n;)
                e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];)
                    e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
                r = !t(e[o], o), r !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i,
                o,
                a = 0,
                s = [];
            if (n(e))
                for (i = e.length; a < i; a++)
                    o = t(e[a], a, r), null != o && s.push(o);
            else
                for (a in e)
                    o = t(e[a], a, r), null != o && s.push(o);
            return oe.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n,
                r,
                i;
            if ("string" == typeof t && (i = e[t], t = e, e = i), pe.isFunction(e))
                return n = ie.call(arguments, 2), r = function() {
                    return e.apply(t || this, n.concat(ie.call(arguments)))
                }, r.guid = e.guid = e.guid || pe.guid++, r
        },
        now: function() {
            return +new Date
        },
        support: fe
    }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]), pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ue["[object " + t + "]"] = t.toLowerCase()
    });
    var ve = function(e) {
        function t(e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                f,
                p,
                h = t && t.ownerDocument,
                g = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g)
                return n;
            if (!r && ((t ? t.ownerDocument || t : B) !== H && L(t), t = t || H, _)) {
                if (11 !== g && (l = ye.exec(e)))
                    if (i = l[1]) {
                        if (9 === g) {
                            if (!(a = t.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a), n
                        } else if (h && (a = h.getElementById(i)) && R(t, a) && a.id === i)
                            return n.push(a), n
                    } else {
                        if (l[2])
                            return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName)
                            return K.apply(n, t.getElementsByClassName(i)), n
                    }
                if (w.qsa && !X[e + " "] && (!F || !F.test(e))) {
                    if (1 !== g)
                        h = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(xe, "\\$&") : t.setAttribute("id", s = P), f = N(e), o = f.length, u = de.test(s) ? "#" + s : "[id='" + s + "']"; o--;)
                            f[o] = u + " " + d(f[o]);
                        p = f.join(","), h = ve.test(e) && c(t.parentNode) || t
                    }
                    if (p)
                        try {
                            return K.apply(n, h.querySelectorAll(p)), n
                        } catch (m) {} finally {
                            s === P && t.removeAttribute("id")
                        }
                }
            }
            return S(e.replace(se, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[P] = !0, e
        }
        function i(e) {
            var t = H.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;)
                T.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;)
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function f() {}
        function d(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function p(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = I++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i)
                        return e(t, n, o)
            } : function(t, n, a) {
                var s,
                    u,
                    l,
                    c = [W, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a))
                            return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (l = t[P] || (t[P] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = u[r]) && s[0] === W && s[1] === o)
                                return c[2] = s[2];
                            if (u[r] = c, c[2] = e(t, n, a))
                                return !0
                        }
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            } : e[0]
        }
        function g(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++)
                t(e, n[i], r);
            return r
        }
        function m(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }
        function y(e, t, n, i, o, a) {
            return i && !i[P] && (i = y(i)), o && !o[P] && (o = y(o, a)), r(function(r, a, s, u) {
                var l,
                    c,
                    f,
                    d = [],
                    p = [],
                    h = a.length,
                    y = r || g(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || !r && t ? y : m(y, d, e, s, u),
                    x = n ? o || (r ? e : h || i) ? [] : a : v;
                if (n && n(v, x, s, u), i)
                    for (l = m(x, p), i(l, [], s, u), c = l.length; c--;)
                        (f = l[c]) && (x[p[c]] = !(v[p[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;)
                                (f = x[c]) && l.push(v[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;)
                            (f = x[c]) && (l = o ? ee(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
                    }
                } else
                    x = m(x === a ? x.splice(h, x.length) : x), o ? o(null, a, x, u) : K.apply(a, x)
            })
        }
        function v(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = p(function(e) {
                    return e === t
                }, a, !0), l = p(function(e) {
                    return ee(t, e) > -1
                }, a, !0), c = [function(e, n, r) {
                    var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null, i
                }]; s < i; s++)
                if (n = T.relative[e[s].type])
                    c = [p(h(c), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                        for (r = ++s; r < i && !T.relative[e[r].type]; r++)
                            ;
                        return y(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && d(e))
                    }
                    c.push(n)
                }
            return h(c)
        }
        function x(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, u, l) {
                    var c,
                        f,
                        d,
                        p = 0,
                        h = "0",
                        g = r && [],
                        y = [],
                        v = A,
                        x = r || o && T.find.TAG("*", l),
                        b = W += null == v ? 1 : Math.random() || .1,
                        w = x.length;
                    for (l && (A = a === H || a || l); h !== w && null != (c = x[h]); h++) {
                        if (o && c) {
                            for (f = 0, a || c.ownerDocument === H || (L(c), s = !_); d = e[f++];)
                                if (d(c, a || H, s)) {
                                    u.push(c);
                                    break
                                }
                            l && (W = b)
                        }
                        i && ((c = !d && c) && p--, r && g.push(c))
                    }
                    if (p += h, i && h !== p) {
                        for (f = 0; d = n[f++];)
                            d(g, y, a, s);
                        if (r) {
                            if (p > 0)
                                for (; h--;)
                                    g[h] || y[h] || (y[h] = G.call(u));
                            y = m(y)
                        }
                        K.apply(u, y), l && !r && y.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (W = b, A = v), g
                };
            return i ? r(a) : a
        }
        var b,
            w,
            T,
            C,
            E,
            N,
            k,
            S,
            A,
            D,
            j,
            L,
            H,
            q,
            _,
            F,
            M,
            O,
            R,
            P = "sizzle" + 1 * new Date,
            B = e.document,
            W = 0,
            I = 0,
            $ = n(),
            z = n(),
            X = n(),
            U = function(e, t) {
                return e === t && (j = !0), 0
            },
            V = 1 << 31,
            Y = {}.hasOwnProperty,
            J = [],
            G = J.pop,
            Q = J.push,
            K = J.push,
            Z = J.slice,
            ee = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t)
                        return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
            oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(oe),
            de = new RegExp("^" + re + "$"),
            pe = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            me = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            xe = /'|\\/g,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            Te = function() {
                L()
            };
        try {
            K.apply(J = Z.call(B.childNodes), B.childNodes), J[B.childNodes.length].nodeType
        } catch (Ce) {
            K = {
                apply: J.length ? function(e, t) {
                    Q.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];)
                        ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, E = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, L = t.setDocument = function(e) {
            var t,
                n,
                r = e ? e.ownerDocument || e : B;
            return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, q = H.documentElement, _ = !E(H), (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), w.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function(e) {
                return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = me.test(H.getElementsByClassName), w.getById = i(function(e) {
                return q.appendChild(e).id = P, !H.getElementsByName || !H.getElementsByName(P).length
            }), w.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && _) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, T.filter.ID = function(e) {
                var t = e.replace(be, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(be, we);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];)
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && _)
                    return t.getElementsByClassName(e)
            }, M = [], F = [], (w.qsa = me.test(H.querySelectorAll)) && (i(function(e) {
                q.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || F.push(".#.+[+~]")
            }), i(function(e) {
                var t = H.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (w.matchesSelector = me.test(O = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), M.push("!=", oe)
            }), F = F.length && new RegExp(F.join("|")), M = M.length && new RegExp(M.join("|")), t = me.test(q.compareDocumentPosition), R = t || me.test(q.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e)
                            return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t)
                    return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === B && R(B, e) ? -1 : t === H || t.ownerDocument === B && R(B, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t)
                    return j = !0, 0;
                var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    u = [t];
                if (!i || !o)
                    return e === H ? -1 : t === H ? 1 : i ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                if (i === o)
                    return a(e, t);
                for (n = e; n = n.parentNode;)
                    s.unshift(n);
                for (n = t; n = n.parentNode;)
                    u.unshift(n);
                for (; s[r] === u[r];)
                    r++;
                return r ? a(s[r], u[r]) : s[r] === B ? -1 : u[r] === B ? 1 : 0
            }, H) : H
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== H && L(e), n = n.replace(ce, "='$1']"), w.matchesSelector && _ && !X[n + " "] && (!M || !M.test(n)) && (!F || !F.test(n)))
                try {
                    var r = O.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (i) {}
            return t(n, H, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== H && L(e), R(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== H && L(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
            return void 0 !== r ? r : w.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t,
                n = [],
                r = 0,
                i = 0;
            if (j = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), j) {
                for (; t = e[i++];)
                    t === e[i] && (r = n.push(i));
                for (; r--;)
                    e.splice(n[r], 1)
            }
            return D = null, e
        }, C = t.getText = function(e) {
            var t,
                n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += C(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++];)
                    n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t,
                        n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = N(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, we).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = $[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && $(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l,
                            c,
                            f,
                            d,
                            p,
                            h,
                            g = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            v = !u && !s,
                            x = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (d = t; d = d[g];)
                                        if (s ? d.nodeName.toLowerCase() === y : 1 === d.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                for (d = m, f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === W && l[1], x = p && l[2],
                                d = p && m.childNodes[p]; d = ++p && d && d[g] || (x = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++x && d === t) {
                                        c[e] = [W, p, x];
                                        break
                                    }
                            } else if (v && (d = t, f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === W && l[1], x = p), x === !1)
                                for (; (d = ++p && d && d[g] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++x || (v && (f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [W, x]), d !== t));)
                                    ;
                            return x -= i, x === r || x % r === 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i,
                        o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;)
                            r = ee(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = k(e.replace(se, "$1"));
                    return i[P] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(be, we), function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(), function(t) {
                        var n;
                        do if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                            return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === q
                },
                focus: function(e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;)
                        e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;)
                        e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            T.pseudos[b] = s(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            T.pseudos[b] = u(b);
        return f.prototype = T.filters = T.pseudos, T.setFilters = new f, N = t.tokenize = function(e, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = z[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (s = e, u = [], l = T.preFilter; s;) {
                r && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(se, " ")
                }), s = s.slice(r.length));
                for (a in T.filter)
                    !(i = pe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                if (!r)
                    break
            }
            return n ? s.length : s ? t.error(e) : z(e, u).slice(0)
        }, k = t.compile = function(e, t) {
            var n,
                r = [],
                i = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = N(e)), n = t.length; n--;)
                    o = v(t[n]), o[P] ? r.push(o) : i.push(o);
                o = X(e, x(i, r)), o.selector = e
            }
            return o
        }, S = t.select = function(e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l = "function" == typeof e && e,
                f = !r && N(e = l.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && _ && T.relative[o[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(be, we), t) || [])[0], !t)
                        return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
                    if ((u = T.find[s]) && (r = u(a.matches[0].replace(be, we), ve.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && d(o), !e)
                            return K.apply(n, r), n;
                        break
                    }
            }
            return (l || k(e, f))(r, t, !_, n, !t || ve.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = P.split("").sort(U).join("") === P, w.detectDuplicates = !!j, L(), w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(H.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var r;
            if (!n)
                return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    pe.find = ve, pe.expr = ve.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ve.uniqueSort, pe.text = ve.getText, pe.isXMLDoc = ve.isXML, pe.contains = ve.contains;
    var xe = function(e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && pe(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        },
        be = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        we = pe.expr.match.needsContext,
        Te = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Ce = /^.[^:#\[\.,]*$/;
    pe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? pe.find.matchesSelector(r, e) ? [r] : [] : pe.find.matches(e, pe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, pe.fn.extend({
        find: function(e) {
            var t,
                n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e)
                return this.pushStack(pe(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (pe.contains(r[t], this))
                            return !0
                }));
            for (t = 0; t < i; t++)
                pe.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? pe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length
        }
    });
    var Ee,
        Ne = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ke = pe.fn.init = function(e, t, n) {
            var r,
                i;
            if (!e)
                return this;
            if (n = n || Ee, "string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ne.exec(e), !r || !r[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : re, !0)), Te.test(r[1]) && pe.isPlainObject(t))
                        for (r in t)
                            pe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                if (i = re.getElementById(r[2]), i && i.parentNode) {
                    if (i.id !== r[2])
                        return Ee.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = re, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(pe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this))
        };
    ke.prototype = pe.fn, Ee = pe(re);
    var Se = /^(?:parents|prev(?:Until|All))/,
        Ae = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    pe.fn.extend({
        has: function(e) {
            var t,
                n = pe(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (pe.contains(this, n[t]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = we.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), pe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return xe(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return xe(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return xe(e, "nextSibling")
        },
        prevAll: function(e) {
            return xe(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return xe(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return xe(e, "previousSibling", n)
        },
        siblings: function(e) {
            return be((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return be(e.firstChild)
        },
        contents: function(e) {
            return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes)
        }
    }, function(e, t) {
        pe.fn[e] = function(n, r) {
            var i = pe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = pe.filter(r, i)), this.length > 1 && (Ae[e] || (i = pe.uniqueSort(i)), Se.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var De = /\S+/g;
    pe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : pe.extend({}, e);
        var t,
            n,
            r,
            i,
            a = [],
            s = [],
            u = -1,
            l = function() {
                for (i = e.once, r = t = !0; s.length; u = -1)
                    for (n = s.shift(); ++u < a.length;)
                        a[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = a.length, n = !1);
                e.memory || (n = !1), t = !1, i && (a = n ? [] : "")
            },
            c = {
                add: function() {
                    return a && (n && !t && (u = a.length - 1, s.push(n)), function r(t) {
                        pe.each(t, function(t, n) {
                            pe.isFunction(n) ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== pe.type(n) && r(n)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function() {
                    return pe.each(arguments, function(e, t) {
                        for (var n; (n = pe.inArray(t, a, n)) > -1;)
                            a.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function(e) {
                    return e ? pe.inArray(e, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return i = s = [], a = n = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return i = !0, n || c.disable(), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || l()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, pe.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", pe.Callbacks("once memory"), "resolved"], ["reject", "fail", pe.Callbacks("once memory"), "rejected"], ["notify", "progress", pe.Callbacks("memory")]],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return pe.Deferred(function(n) {
                            pe.each(t, function(t, o) {
                                var a = pe.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? pe.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, pe.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t,
                n,
                r,
                i = 0,
                o = ie.call(arguments),
                a = o.length,
                s = 1 !== a || e && pe.isFunction(e.promise) ? a : 0,
                u = 1 === s ? e : pe.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++)
                    o[i] && pe.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    });
    var je;
    pe.fn.ready = function(e) {
        return pe.ready.promise().done(e), this
    }, pe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? pe.readyWait++ : pe.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, e !== !0 && --pe.readyWait > 0 || (je.resolveWith(re, [pe]), pe.fn.triggerHandler && (pe(re).triggerHandler("ready"), pe(re).off("ready"))))
        }
    }), pe.ready.promise = function(t) {
        if (!je)
            if (je = pe.Deferred(), "complete" === re.readyState || "loading" !== re.readyState && !re.documentElement.doScroll)
                e.setTimeout(pe.ready);
            else if (re.addEventListener)
                re.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s);
            else {
                re.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && re.documentElement
                } catch (r) {}
                n && n.doScroll && !function i() {
                    if (!pe.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return e.setTimeout(i, 50)
                        }
                        a(), pe.ready()
                    }
                }()
            }
        return je.promise(t)
    }, pe.ready.promise();
    var Le;
    for (Le in pe(fe))
        break;
    fe.ownFirst = "0" === Le, fe.inlineBlockNeedsLayout = !1, pe(function() {
        var e,
            t,
            n,
            r;
        n = re.getElementsByTagName("body")[0], n && n.style && (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", fe.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
    }), function() {
        var e = re.createElement("div");
        fe.deleteExpando = !0;
        try {
            delete e.test
        } catch (t) {
            fe.deleteExpando = !1
        }
        e = null
    }();
    var He = function(e) {
            var t = pe.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
        },
        qe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _e = /([A-Z])/g;
    pe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando], !!e && !l(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return f(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return f(e, t, !0)
        }
    }), pe.fn.extend({
        data: function(e, t) {
            var n,
                r,
                i,
                o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = pe.data(o), 1 === o.nodeType && !pe._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;)
                        a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = pe.camelCase(r.slice(5)), u(o, r, i[r])));
                    pe._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                pe.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                pe.data(this, e, t)
            }) : o ? u(o, e, pe.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                pe.removeData(this, e)
            })
        }
    }), pe.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue", r = pe._data(e, t), n && (!r || pe.isArray(n) ? r = pe._data(e, t, pe.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = pe.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = pe._queueHooks(e, t),
                a = function() {
                    pe.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return pe._data(e, n) || pe._data(e, n, {
                    empty: pe.Callbacks("once memory").add(function() {
                        pe._removeData(e, t + "queue"), pe._removeData(e, n)
                    })
                })
        }
    }), pe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = pe.queue(this, e, t);
                pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                pe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n,
                r = 1,
                i = pe.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)
                n = pe._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    }), function() {
        var e;
        fe.shrinkWrapBlocks = function() {
            if (null != e)
                return e;
            e = !1;
            var t,
                n,
                r;
            return n = re.getElementsByTagName("body")[0], n && n.style ? (t = re.createElement("div"), r = re.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(re.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
        }
    }();
    var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Me = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
        Oe = ["Top", "Right", "Bottom", "Left"],
        Re = function(e, t) {
            return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
        },
        Pe = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === pe.type(n)) {
                i = !0;
                for (s in n)
                    Pe(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, pe.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                return l.call(pe(e), n)
            })), t))
                for (; s < u; s++)
                    t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        Be = /^(?:checkbox|radio)$/i,
        We = /<([\w:-]+)/,
        Ie = /^$|\/(?:java|ecma)script/i,
        $e = /^\s+/,
        ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function() {
        var e = re.createElement("div"),
            t = re.createDocumentFragment(),
            n = re.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", fe.leadingWhitespace = 3 === e.firstChild.nodeType, fe.tbody = !e.getElementsByTagName("tbody").length, fe.htmlSerialize = !!e.getElementsByTagName("link").length, fe.html5Clone = "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), fe.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = re.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), fe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.noCloneEvent = !!e.addEventListener, e[pe.expando] = 1, fe.attributes = !e.getAttribute(pe.expando)
    }();
    var Xe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: fe.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td;
    var Ue = /<|&#?\w+;/,
        Ve = /<tbody/i;
    !function() {
        var t,
            n,
            r = re.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + t, (fe[t] = n in e) || (r.setAttribute(n, "t"), fe[t] = r.attributes[n].expando === !1);
        r = null
    }();
    var Ye = /^(?:input|select|textarea)$/i,
        Je = /^key/,
        Ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Qe = /^(?:focusinfocus|focusoutblur)$/,
        Ke = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                d,
                p,
                h,
                g,
                m = pe._data(e);
            if (m) {
                for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = pe.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function(e) {
                    return "undefined" == typeof pe || e && pe.event.triggered === e.type ? void 0 : pe.event.dispatch.apply(c.elem, arguments)
                }, c.elem = e), t = (t || "").match(De) || [""], s = t.length; s--;)
                    o = Ke.exec(t[s]) || [], p = g = o[1], h = (o[2] || "").split(".").sort(), p && (l = pe.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = pe.event.special[p] || {}, f = pe.extend({
                        type: p,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && pe.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, u), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, l.setup && l.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), pe.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                d,
                p,
                h,
                g,
                m = pe.hasData(e) && pe._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(De) || [""], l = t.length; l--;)
                    if (s = Ke.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = pe.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--;)
                            a = d[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
                        u && !d.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || pe.removeEvent(e, p, m.handle), delete c[p])
                    } else
                        for (p in c)
                            pe.event.remove(e, p + t[l], n, r, !0);
                pe.isEmptyObject(c) && (delete m.handle, pe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                d = [r || re],
                p = ce.call(t, "type") ? t.type : t,
                h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || re, 3 !== r.nodeType && 8 !== r.nodeType && !Qe.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[pe.expando] ? t : new pe.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : pe.makeArray(n, [t]), l = pe.event.special[p] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!i && !l.noBubble && !pe.isWindow(r)) {
                    for (u = l.delegateType || p, Qe.test(u + p) || (s = s.parentNode); s; s = s.parentNode)
                        d.push(s), c = s;
                    c === (r.ownerDocument || re) && d.push(c.defaultView || c.parentWindow || e)
                }
                for (f = 0; (s = d[f++]) && !t.isPropagationStopped();)
                    t.type = f > 1 ? u : l.bindType || p, o = (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && He(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), n) === !1) && He(r) && a && r[p] && !pe.isWindow(r)) {
                    c = r[a], c && (r[a] = null), pe.event.triggered = p;
                    try {
                        r[p]()
                    } catch (g) {}
                    pe.event.triggered = void 0, c && (r[a] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = pe.event.fix(e);
            var t,
                n,
                r,
                i,
                o,
                a = [],
                s = ie.call(arguments),
                u = (pe._data(this, "events") || {})[e.type] || [],
                l = pe.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (a = pe.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)
                        e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n,
                r,
                i,
                o,
                a = [],
                s = t.delegateCount,
                u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (r = [], n = 0; n < s; n++)
                            o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? pe(i, this).index(u) > -1 : pe.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function(e) {
            if (e[pe.expando])
                return e;
            var t,
                n,
                r,
                i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ge.test(i) ? this.mouseHooks : Je.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new pe.Event(o), t = r.length; t--;)
                n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || re), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n,
                    r,
                    i,
                    o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || re, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== b() && this.focus)
                        try {
                            return this.focus(), !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === b() && this.blur)
                        return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (pe.nodeName(this, "input") && "checkbox" === this.type && this.click)
                        return this.click(), !1
                },
                _default: function(e) {
                    return pe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var r = pe.extend(new pe.Event, n, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
        }
    }, pe.removeEvent = re.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
    }, pe.Event = function(e, t) {
        return this instanceof pe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? v : x) : this.type = e, t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), void (this[pe.expando] = !0)) : new pe.Event(e, t)
    }, pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = v, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = v, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = v, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        pe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n,
                    r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || pe.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), fe.submit || (pe.event.special.submit = {
        setup: function() {
            return !pe.nodeName(this, "form") && void pe.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : void 0;
                    n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function(e) {
                        e._submitBubble = !0
                    }), pe._data(n, "submit", !0))
                })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            return !pe.nodeName(this, "form") && void pe.event.remove(this, "._submit")
        }
    }), fe.change || (pe.event.special.change = {
        setup: function() {
            return Ye.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), pe.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e)
            })), !1) : void pe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ye.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
                }), pe._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)
                return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return pe.event.remove(this, "._change"), !Ye.test(this.nodeName)
        }
    }), fe.focusin || pe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            pe.event.simulate(t, e.target, pe.event.fix(e))
        };
        pe.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = pe._data(r, t);
                i || r.addEventListener(e, n, !0), pe._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = pe._data(r, t) - 1;
                i ? pe._data(r, t, i) : (r.removeEventListener(e, n, !0), pe._removeData(r, t))
            }
        }
    }), pe.fn.extend({
        on: function(e, t, n, r) {
            return w(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return w(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r,
                i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj, pe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = x), this.each(function() {
                pe.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                pe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return pe.event.trigger(e, t, n, !0)
        }
    });
    var Ze = / jQuery\d+="(?:null|\d+)"/g,
        et = new RegExp("<(?:" + ze + ")[\\s/>]", "i"),
        tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        it = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        at = p(re),
        st = at.appendChild(re.createElement("div"));
    pe.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u = pe.contains(e.ownerDocument, e);
            if (fe.html5Clone || pe.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (st.innerHTML = e.outerHTML, st.removeChild(o = st.firstChild)), !(fe.noCloneEvent && fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e)))
                for (r = h(o), s = h(e), a = 0; null != (i = s[a]); ++a)
                    r[a] && k(i, r[a]);
            if (t)
                if (n)
                    for (s = s || h(e), r = r || h(o), a = 0; null != (i = s[a]); a++)
                        N(i, r[a]);
                else
                    N(e, o);
            return r = h(o, "script"), r.length > 0 && g(r, !u && h(e, "script")), r = s = i = null, o
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = pe.expando, u = pe.cache, l = fe.attributes, c = pe.event.special; null != (n = e[a]); a++)
                if ((t || He(n)) && (i = n[s], o = i && u[i])) {
                    if (o.events)
                        for (r in o.events)
                            c[r] ? pe.event.remove(n, r) : pe.removeEvent(n, r, o.handle);
                    u[i] && (delete u[i], l || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ne.push(i))
                }
        }
    }), pe.fn.extend({
        domManip: S,
        detach: function(e) {
            return A(this, e, !0)
        },
        remove: function(e) {
            return A(this, e)
        },
        text: function(e) {
            return Pe(this, function(e) {
                return void 0 === e ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || re).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return S(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = T(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return S(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = T(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return S(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return S(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild;)
                    e.removeChild(e.firstChild);
                e.options && pe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return pe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Pe(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e)
                    return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : void 0;
                if ("string" == typeof e && !nt.test(e) && (fe.htmlSerialize || !et.test(e)) && (fe.leadingWhitespace || !$e.test(e)) && !Xe[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            t = this[n] || {}, 1 === t.nodeType && (pe.cleanData(h(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return S(this, arguments, function(t) {
                var n = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(h(this)), n && n.replaceChild(t, this));
            }, e)
        }
    }), pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        pe.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = pe(e), a = o.length - 1; r <= a; r++)
                n = r === a ? this : this.clone(!0), pe(o[r])[t](n), ae.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var ut,
        lt = {
            HTML: "block",
            BODY: "block"
        },
        ct = /^margin/,
        ft = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
        dt = function(e, t, n, r) {
            var i,
                o,
                a = {};
            for (o in t)
                a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)
                e.style[o] = a[o];
            return i
        },
        pt = re.documentElement;
    !function() {
        function t() {
            var t,
                c,
                f = re.documentElement;
            f.appendChild(u), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = i = s = !1, r = a = !0, e.getComputedStyle && (c = e.getComputedStyle(l), n = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, i = "4px" === (c || {
                width: "4px"
            }).width, l.style.marginRight = "50%", r = "4px" === (c || {
                marginRight: "4px"
            }).marginRight, t = l.appendChild(re.createElement("div")), t.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", l.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), l.removeChild(t)), l.style.display = "none", o = 0 === l.getClientRects().length, o && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", l.childNodes[0].style.borderCollapse = "separate", t = l.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === t[0].offsetHeight, o && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)), f.removeChild(u)
        }
        var n,
            r,
            i,
            o,
            a,
            s,
            u = re.createElement("div"),
            l = re.createElement("div");
        l.style && (l.style.cssText = "float:left;opacity:.5", fe.opacity = "0.5" === l.style.opacity, fe.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === l.style.backgroundClip, u = re.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", u.appendChild(l), fe.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, pe.extend(fe, {
            reliableHiddenOffsets: function() {
                return null == n && t(), o
            },
            boxSizingReliable: function() {
                return null == n && t(), i
            },
            pixelMarginRight: function() {
                return null == n && t(), r
            },
            pixelPosition: function() {
                return null == n && t(), n
            },
            reliableMarginRight: function() {
                return null == n && t(), a
            },
            reliableMarginLeft: function() {
                return null == n && t(), s
            }
        }))
    }();
    var ht,
        gt,
        mt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (ht = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, gt = function(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return n = n || ht(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), n && !fe.pixelMarginRight() && ft.test(a) && ct.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 === a ? a : a + ""
    }) : pt.currentStyle && (ht = function(e) {
        return e.currentStyle
    }, gt = function(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return n = n || ht(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), ft.test(a) && !mt.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
    });
    var yt = /alpha\([^)]*\)/i,
        vt = /opacity\s*=\s*([^)]*)/i,
        xt = /^(none|table(?!-c[ea]).+)/,
        bt = new RegExp("^(" + Fe + ")(.*)$", "i"),
        wt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Tt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ct = ["Webkit", "O", "Moz", "ms"],
        Et = re.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = gt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": fe.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = pe.camelCase(t),
                    u = e.style;
                if (t = pe.cssProps[s] || (pe.cssProps[s] = H(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], void 0 === n)
                    return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                if (o = typeof n, "string" === o && (i = Me.exec(n)) && i[1] && (n = d(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (pe.cssNumber[s] ? "" : "px")), fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r)))))
                    try {
                        u[t] = n
                    } catch (l) {}
            }
        },
        css: function(e, t, n, r) {
            var i,
                o,
                a,
                s = pe.camelCase(t);
            return t = pe.cssProps[s] || (pe.cssProps[s] = H(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = gt(e, t, r)), "normal" === o && t in Tt && (o = Tt[t]), "" === n || n ? (i = parseFloat(o), n === !0 || isFinite(i) ? i || 0 : o) : o
        }
    }), pe.each(["height", "width"], function(e, t) {
        pe.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return xt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? dt(e, wt, function() {
                        return M(e, t, r)
                    }) : M(e, t, r)
            },
            set: function(e, n, r) {
                var i = r && ht(e);
                return _(e, n, r ? F(e, t, r, fe.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), fe.opacity || (pe.cssHooks.opacity = {
        get: function(e, t) {
            return vt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(o.replace(yt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = yt.test(o) ? o.replace(yt, i) : o + " " + i)
        }
    }), pe.cssHooks.marginRight = L(fe.reliableMarginRight, function(e, t) {
        if (t)
            return dt(e, {
                display: "inline-block"
            }, gt, [e, "marginRight"])
    }), pe.cssHooks.marginLeft = L(fe.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(gt(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - dt(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            }) : 0)) + "px"
    }), pe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        pe.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + Oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, ct.test(e) || (pe.cssHooks[e + t].set = _)
    }), pe.fn.extend({
        css: function(e, t) {
            return Pe(this, function(e, t, n) {
                var r,
                    i,
                    o = {},
                    a = 0;
                if (pe.isArray(t)) {
                    for (r = ht(e), i = t.length; a < i; a++)
                        o[t[a]] = pe.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return q(this, !0)
        },
        hide: function() {
            return q(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Re(this) ? pe(this).show() : pe(this).hide()
            })
        }
    }), pe.Tween = O, O.prototype = {
        constructor: O,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || pe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (pe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = O.propHooks[this.prop];
            return e && e.get ? e.get(this) : O.propHooks._default.get(this)
        },
        run: function(e) {
            var t,
                n = O.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
        }
    }, O.prototype.init.prototype = O.prototype, O.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, pe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, pe.fx = O.prototype.init, pe.fx.step = {};
    var Nt,
        kt,
        St = /^(?:toggle|show|hide)$/,
        At = /queueHooks$/;
    pe.Animation = pe.extend($, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return d(n.elem, e, Me.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(De);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r], $.tweeners[n] = $.tweeners[n] || [], $.tweeners[n].unshift(t)
        },
        prefilters: [W],
        prefilter: function(e, t) {
            t ? $.prefilters.unshift(e) : $.prefilters.push(e)
        }
    }), pe.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? pe.extend({}, e) : {
            complete: n || !n && t || pe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !pe.isFunction(t) && t
        };
        return r.duration = pe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in pe.fx.speeds ? pe.fx.speeds[r.duration] : pe.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            pe.isFunction(r.old) && r.old.call(this), r.queue && pe.dequeue(this, r.queue)
        }, r
    }, pe.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Re).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = pe.isEmptyObject(e),
                o = pe.speed(t, n, r),
                a = function() {
                    var t = $(this, pe.extend({}, e), o);
                    (i || pe._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    o = pe.timers,
                    a = pe._data(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && At.test(i) && r(a[i]);
                for (i = o.length; i--;)
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || pe.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t,
                    n = pe._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = pe.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, pe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), pe.each(["toggle", "show", "hide"], function(e, t) {
        var n = pe.fn[t];
        pe.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, r, i)
        }
    }), pe.each({
        slideDown: P("show"),
        slideUp: P("hide"),
        slideToggle: P("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        pe.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), pe.timers = [], pe.fx.tick = function() {
        var e,
            t = pe.timers,
            n = 0;
        for (Nt = pe.now(); n < t.length; n++)
            e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || pe.fx.stop(), Nt = void 0
    }, pe.fx.timer = function(e) {
        pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop()
    }, pe.fx.interval = 13, pe.fx.start = function() {
        kt || (kt = e.setInterval(pe.fx.tick, pe.fx.interval))
    }, pe.fx.stop = function() {
        e.clearInterval(kt), kt = null
    }, pe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, pe.fn.delay = function(t, n) {
        return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }, function() {
        var e,
            t = re.createElement("input"),
            n = re.createElement("div"),
            r = re.createElement("select"),
            i = r.appendChild(re.createElement("option"));
        n = re.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", fe.getSetAttribute = "t" !== n.className, fe.style = /top/.test(e.getAttribute("style")), fe.hrefNormalized = "/a" === e.getAttribute("href"), fe.checkOn = !!t.value, fe.optSelected = i.selected, fe.enctype = !!re.createElement("form").enctype, r.disabled = !0, fe.optDisabled = !i.disabled, t = re.createElement("input"), t.setAttribute("value", ""), fe.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), fe.radioValue = "t" === t.value
    }();
    var Dt = /\r/g,
        jt = /[\x20\t\r\n\f]+/g;
    pe.fn.extend({
        val: function(e) {
            var t,
                n,
                r,
                i = this[0];
            {
                if (arguments.length)
                    return r = pe.isFunction(e), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, pe(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : pe.isArray(i) && (i = pe.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })), t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                if (i)
                    return t = pe.valHooks[i.type] || pe.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Dt, "") : null == n ? "" : n)
            }
        }
    }), pe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : pe.trim(pe.text(e)).replace(jt, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                        if (n = r[u], (n.selected || u === i) && (fe.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = pe(n).val(), o)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = pe.makeArray(t), a = i.length; a--;)
                        if (r = i[a], pe.inArray(pe.valHooks.option.get(r), o) > -1)
                            try {
                                r.selected = n = !0
                            } catch (s) {
                                r.scrollHeight
                            }
                        else
                            r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), pe.each(["radio", "checkbox"], function() {
        pe.valHooks[this] = {
            set: function(e, t) {
                if (pe.isArray(t))
                    return e.checked = pe.inArray(pe(e).val(), t) > -1
            }
        }, fe.checkOn || (pe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Lt,
        Ht,
        qt = pe.expr.attrHandle,
        _t = /^(?:checked|selected)$/i,
        Ft = fe.getSetAttribute,
        Mt = fe.input;
    pe.fn.extend({
        attr: function(e, t) {
            return Pe(this, pe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                pe.removeAttr(this, e)
            })
        }
    }), pe.extend({
        attr: function(e, t, n) {
            var r,
                i,
                o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (t = t.toLowerCase(), i = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Ht : Lt)), void 0 !== n ? null === n ? void pe.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = pe.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!fe.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n,
                r,
                i = 0,
                o = t && t.match(De);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];)
                    r = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? Mt && Ft || !_t.test(n) ? e[r] = !1 : e[pe.camelCase("default-" + n)] = e[r] = !1 : pe.attr(e, n, ""), e.removeAttribute(Ft ? n : r)
        }
    }), Ht = {
        set: function(e, t, n) {
            return t === !1 ? pe.removeAttr(e, n) : Mt && Ft || !_t.test(n) ? e.setAttribute(!Ft && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = qt[t] || pe.find.attr;
        Mt && Ft || !_t.test(t) ? qt[t] = function(e, t, r) {
            var i,
                o;
            return r || (o = qt[t], qt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, qt[t] = o), i
        } : qt[t] = function(e, t, n) {
            if (!n)
                return e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Mt && Ft || (pe.attrHooks.value = {
        set: function(e, t, n) {
            return pe.nodeName(e, "input") ? void (e.defaultValue = t) : Lt && Lt.set(e, t, n)
        }
    }), Ft || (Lt = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n))
                return t
        }
    }, qt.id = qt.name = qt.coords = function(e, t, n) {
        var r;
        if (!n)
            return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, pe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified)
                return n.value
        },
        set: Lt.set
    }, pe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Lt.set(e, "" !== t && t, n)
        }
    }, pe.each(["width", "height"], function(e, t) {
        pe.attrHooks[t] = {
            set: function(e, n) {
                if ("" === n)
                    return e.setAttribute(t, "auto"), n
            }
        }
    })), fe.style || (pe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Ot = /^(?:input|select|textarea|button|object)$/i,
        Rt = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function(e, t) {
            return Pe(this, pe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = pe.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), pe.extend({
        prop: function(e, t, n) {
            var r,
                i,
                o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, i = pe.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ot.test(e.nodeName) || Rt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), fe.hrefNormalized || pe.each(["href", "src"], function(e, t) {
        pe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), fe.optSelected || (pe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        pe.propFix[this.toLowerCase()] = this
    }), fe.enctype || (pe.propFix.enctype = "encoding");
    var Pt = /[\t\r\n\f]/g;
    pe.fn.extend({
        addClass: function(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (pe.isFunction(e))
                return this.each(function(t) {
                    pe(this).addClass(e.call(this, t, z(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(De) || []; n = this[u++];)
                    if (i = z(n), r = 1 === n.nodeType && (" " + i + " ").replace(Pt, " ")) {
                        for (a = 0; o = t[a++];)
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = pe.trim(r), i !== s && pe.attr(n, "class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (pe.isFunction(e))
                return this.each(function(t) {
                    pe(this).removeClass(e.call(this, t, z(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(De) || []; n = this[u++];)
                    if (i = z(n), r = 1 === n.nodeType && (" " + i + " ").replace(Pt, " ")) {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;)
                                r = r.replace(" " + o + " ", " ");
                        s = pe.trim(r), i !== s && pe.attr(n, "class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                pe(this).toggleClass(e.call(this, n, z(this), t), t)
            }) : this.each(function() {
                var t,
                    r,
                    i,
                    o;
                if ("string" === n)
                    for (r = 0, i = pe(this), o = e.match(De) || []; t = o[r++];)
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || (t = z(this), t && pe._data(this, "__className__", t), pe.attr(this, "class", t || e === !1 ? "" : pe._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t,
                n,
                r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + z(n) + " ").replace(Pt, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        pe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), pe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Bt = e.location,
        Wt = pe.now(),
        It = /\?/,
        $t = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse)
            return e.JSON.parse(t + "");
        var n,
            r = null,
            i = pe.trim(t + "");
        return i && !pe.trim(i.replace($t, function(e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : pe.error("Invalid JSON: " + t)
    }, pe.parseXML = function(t) {
        var n,
            r;
        if (!t || "string" != typeof t)
            return null;
        try {
            e.DOMParser ? (r = new e.DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), n
    };
    var zt = /#.*$/,
        Xt = /([?&])_=[^&]*/,
        Ut = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Vt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Yt = /^(?:GET|HEAD)$/,
        Jt = /^\/\//,
        Gt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Qt = {},
        Kt = {},
        Zt = "*/".concat("*"),
        en = Bt.href,
        tn = Gt.exec(en.toLowerCase()) || [];
    pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: en,
            type: "GET",
            isLocal: Vt.test(tn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": pe.parseJSON,
                "text xml": pe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? V(V(e, pe.ajaxSettings), t) : V(pe.ajaxSettings, e)
        },
        ajaxPrefilter: X(Qt),
        ajaxTransport: X(Kt),
        ajax: function(t, n) {
            function r(t, n, r, i) {
                var o,
                    f,
                    v,
                    x,
                    w,
                    C = n;
                2 !== b && (b = 2, u && e.clearTimeout(u), c = void 0, s = i || "", T.readyState = t > 0 ? 4 : 0, o = t >= 200 && t < 300 || 304 === t, r && (x = Y(d, T, r)), x = J(d, x, T, o), o ? (d.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (pe.lastModified[a] = w), w = T.getResponseHeader("etag"), w && (pe.etag[a] = w)), 204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = x.state, f = x.data, v = x.error, o = !v)) : (v = C, !t && C || (C = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || C) + "", o ? g.resolveWith(p, [f, C, T]) : g.rejectWith(p, [T, C, v]), T.statusCode(y), y = void 0, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, d, o ? f : v]), m.fireWith(p, [T, C]), l && (h.trigger("ajaxComplete", [T, d]), --pe.active || pe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                d = pe.ajaxSetup({}, n),
                p = d.context || d,
                h = d.context && (p.nodeType || p.jquery) ? pe(p) : pe.event,
                g = pe.Deferred(),
                m = pe.Callbacks("once memory"),
                y = d.statusCode || {},
                v = {},
                x = {},
                b = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!f)
                                for (f = {}; t = Ut.exec(s);)
                                    f[t[1].toLowerCase()] = t[2];
                            t = f[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = x[n] = x[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (b < 2)
                                for (t in e)
                                    y[t] = [y[t], e[t]];
                            else
                                T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return c && c.abort(t), r(0, t), this
                    }
                };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, d.url = ((t || d.url || en) + "").replace(zt, "").replace(Jt, tn[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = pe.trim(d.dataType || "*").toLowerCase().match(De) || [""], null == d.crossDomain && (i = Gt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === tn[1] && i[2] === tn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (tn[3] || ("http:" === tn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = pe.param(d.data, d.traditional)), U(Qt, d, n, T), 2 === b)
                return T;
            l = pe.event && d.global, l && 0 === pe.active++ && pe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Yt.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (It.test(a) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Xt.test(a) ? a.replace(Xt, "$1_=" + Wt++) : a + (It.test(a) ? "&" : "?") + "_=" + Wt++)), d.ifModified && (pe.lastModified[a] && T.setRequestHeader("If-Modified-Since", pe.lastModified[a]), pe.etag[a] && T.setRequestHeader("If-None-Match", pe.etag[a])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Zt + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers)
                T.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(p, T, d) === !1 || 2 === b))
                return T.abort();
            w = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            })
                T[o](d[o]);
            if (c = U(Kt, d, n, T)) {
                if (T.readyState = 1, l && h.trigger("ajaxSend", [T, d]), 2 === b)
                    return T;
                d.async && d.timeout > 0 && (u = e.setTimeout(function() {
                    T.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, c.send(v, r)
                } catch (C) {
                    if (!(b < 2))
                        throw C;
                    r(-1, C)
                }
            } else
                r(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return pe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return pe.get(e, void 0, t, "script")
        }
    }), pe.each(["get", "post"], function(e, t) {
        pe[t] = function(e, n, r, i) {
            return pe.isFunction(n) && (i = i || r, r = n, n = void 0), pe.ajax(pe.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, pe.isPlainObject(e) && e))
        }
    }), pe._evalUrl = function(e) {
        return pe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, pe.fn.extend({
        wrapAll: function(e) {
            if (pe.isFunction(e))
                return this.each(function(t) {
                    pe(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return pe.isFunction(e) ? this.each(function(t) {
                pe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = pe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = pe.isFunction(e);
            return this.each(function(n) {
                pe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), pe.expr.filters.hidden = function(e) {
        return fe.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Q(e)
    }, pe.expr.filters.visible = function(e) {
        return !pe.expr.filters.hidden(e)
    };
    var nn = /%20/g,
        rn = /\[\]$/,
        on = /\r?\n/g,
        an = /^(?:submit|button|image|reset|file)$/i,
        sn = /^(?:input|select|textarea|keygen)/i;
    pe.param = function(e, t) {
        var n,
            r = [],
            i = function(e, t) {
                t = pe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e))
            pe.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                K(n, e[n], t, i);
        return r.join("&").replace(nn, "+")
    }, pe.fn.extend({
        serialize: function() {
            return pe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && sn.test(this.nodeName) && !an.test(e) && (this.checked || !Be.test(e))
            }).map(function(e, t) {
                var n = pe(this).val();
                return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(on, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }), pe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return this.isLocal ? ee() : re.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    } : Z;
    var un = 0,
        ln = {},
        cn = pe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in ln)
            ln[e](void 0, !0)
    }), fe.cors = !!cn && "withCredentials" in cn, cn = fe.ajax = !!cn, cn && pe.ajaxTransport(function(t) {
        if (!t.crossDomain || fe.cors) {
            var n;
            return {
                send: function(r, i) {
                    var o,
                        a = t.xhr(),
                        s = ++un;
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields)
                            a[o] = t.xhrFields[o];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r)
                        void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
                    a.send(t.hasContent && t.data || null), n = function(e, r) {
                        var o,
                            u,
                            l;
                        if (n && (r || 4 === a.readyState))
                            if (delete ln[s], n = void 0, a.onreadystatechange = pe.noop, r)
                                4 !== a.readyState && a.abort();
                            else {
                                l = {}, o = a.status, "string" == typeof a.responseText && (l.text = a.responseText);
                                try {
                                    u = a.statusText
                                } catch (c) {
                                    u = ""
                                }
                                o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                            }
                        l && i(o, u, l, a.getAllResponseHeaders())
                    }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = ln[s] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }), pe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return pe.globalEval(e), e
            }
        }
    }), pe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), pe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t,
                n = re.head || pe("head")[0] || re.documentElement;
            return {
                send: function(r, i) {
                    t = re.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var fn = [],
        dn = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = fn.pop() || pe.expando + "_" + Wt++;
            return this[e] = !0, e
        }
    }), pe.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i,
            o,
            a,
            s = t.jsonp !== !1 && (dn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(dn, "$1" + i) : t.jsonp !== !1 && (t.url += (It.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                return a || pe.error(i + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
                a = arguments
            }, r.always(function() {
                void 0 === o ? pe(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, fn.push(i)), a && pe.isFunction(o) && o(a[0]), a = o = void 0
            }), "script"
    }), pe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || re;
        var r = Te.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = y([e], t, i), i && i.length && pe(i).remove(), pe.merge([], r.childNodes))
    };
    var pn = pe.fn.load;
    pe.fn.load = function(e, t, n) {
        if ("string" != typeof e && pn)
            return pn.apply(this, arguments);
        var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = pe.trim(e.slice(s, e.length)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && pe.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? pe("<div>").append(pe.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        pe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), pe.expr.filters.animated = function(e) {
        return pe.grep(pe.timers, function(t) {
            return e === t.elem
        }).length
    }, pe.offset = {
        setOffset: function(e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = pe.css(e, "position"),
                f = pe(e),
                d = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = pe.css(e, "top"), u = pe.css(e, "left"), l = ("absolute" === c || "fixed" === c) && pe.inArray("auto", [o, u]) > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, pe.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    pe.offset.setOffset(this, e, t)
                });
            var t,
                n,
                r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                o = i && i.ownerDocument;
            if (o)
                return t = o.documentElement, pe.contains(t, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = te(o), {
                    top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : r
        },
        position: function() {
            if (this[0]) {
                var e,
                    t,
                    n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === pe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0), n.left += pe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - pe.css(r, "marginTop", !0),
                    left: t.left - n.left - pe.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");)
                    e = e.offsetParent;
                return e || pt
            })
        }
    }), pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        pe.fn[e] = function(r) {
            return Pe(this, function(e, r, i) {
                var o = te(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void (o ? o.scrollTo(n ? pe(o).scrollLeft() : i, n ? i : pe(o).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }), pe.each(["top", "left"], function(e, t) {
        pe.cssHooks[t] = L(fe.pixelPosition, function(e, n) {
            if (n)
                return n = gt(e, t), ft.test(n) ? pe(e).position()[t] + "px" : n
        })
    }), pe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        pe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            pe.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || i === !0 ? "margin" : "border");
                return Pe(this, function(t, n, r) {
                    var i;
                    return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? pe.css(t, n, a) : pe.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), pe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), pe.fn.size = function() {
        return this.length
    }, pe.fn.andSelf = pe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return pe
    });
    var hn = e.jQuery,
        gn = e.$;
    return pe.noConflict = function(t) {
        return e.$ === pe && (e.$ = gn), t && e.jQuery === pe && (e.jQuery = hn), pe
    }, t || (e.jQuery = e.$ = pe), pe
});
!function(e) {
    var n = !1;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var o = window.Cookies,
            t = window.Cookies = e();
        t.noConflict = function() {
            return window.Cookies = o, t
        }
    }
}(function() {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o = arguments[e];
            for (var t in o)
                n[t] = o[t]
        }
        return n
    }
    function n(o) {
        function t(n, r, i) {
            var c;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if (i = e({
                        path: "/"
                    }, t.defaults, i), "number" == typeof i.expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                    }
                    i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                        c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
                    } catch (f) {}
                    r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)), n = n.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), n = n.replace(/[\(\)]/g, escape);
                    var s = "";
                    for (var p in i)
                        i[p] && (s += "; " + p, i[p] !== !0 && (s += "=" + i[p]));
                    return document.cookie = n + "=" + r + s
                }
                n || (c = {});
                for (var d = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, l = 0; l < d.length; l++) {
                    var C = d[l].split("="),
                        g = C.slice(1).join("=");
                    '"' === g.charAt(0) && (g = g.slice(1, -1));
                    try {
                        var m = C[0].replace(u, decodeURIComponent);
                        if (g = o.read ? o.read(g, m) : o(g, m) || g.replace(u, decodeURIComponent), this.json)
                            try {
                                g = JSON.parse(g)
                            } catch (f) {}
                        if (n === m) {
                            c = g;
                            break
                        }
                        n || (c[m] = g)
                    } catch (f) {}
                }
                return c
            }
        }
        return t.set = t, t.get = function(e) {
            return t.call(t, e)
        }, t.getJSON = function() {
            return t.apply({
                json: !0
            }, [].slice.call(arguments))
        }, t.defaults = {}, t.remove = function(n, o) {
            t(n, "", e(o, {
                expires: -1
            }))
        }, t.withConverter = n, t
    }
    return n(function() {})
});
!function(e) {
    if ("function" == typeof require && "object" == typeof exports && "object" == typeof module) {
        try {
            var t = require("jquery")
        } catch (o) {}
        module.exports = e(t)
    } else if ("function" == typeof define && define.amd)
        define(["jquery"], function(t) {
            return e(t)
        });
    else {
        var r;
        try {
            r = (0, eval)("this")
        } catch (o) {
            r = window
        }
        r.deparam = e(r.jQuery)
    }
}(function(e) {
    var t = function(e, t) {
        var o = {},
            r = {
                "true": !0,
                "false": !1,
                "null": null
            };
        return e.replace(/\+/g, " ").split("&").forEach(function(e) {
            var n,
                i = e.split("="),
                a = decodeURIComponent(i[0]),
                l = o,
                c = 0,
                f = a.split("]["),
                p = f.length - 1;
            if (/\[/.test(f[0]) && /\]$/.test(f[p]) ? (f[p] = f[p].replace(/\]$/, ""), f = f.shift().split("[").concat(f), p = f.length - 1) : p = 0, 2 === i.length)
                if (n = decodeURIComponent(i[1]), t && (n = n && !isNaN(n) && +n + "" === n ? +n : "undefined" === n ? void 0 : void 0 !== r[n] ? r[n] : n), p)
                    for (; c <= p; c++)
                        a = "" === f[c] ? l.length : f[c], l = l[a] = c < p ? l[a] || (f[c + 1] && isNaN(f[c + 1]) ? {} : []) : n;
                else
                    "[object Array]" === Object.prototype.toString.call(o[a]) ? o[a].push(n) : {}.hasOwnProperty.call(o, a) ? o[a] = [o[a], n] : o[a] = n;
            else
                a && (o[a] = t ? void 0 : "")
        }), o
    };
    return e && (e.prototype.deparam = e.deparam = t), t
});
!function(t) {
    "use strict";
    function e() {
        console.log.apply(console, arguments)
    }
    function s(t, e) {
        var s,
            n,
            o,
            i;
        for (this.list = t, this.options = e = e || {}, s = 0, i = ["sort", "shouldSort", "verbose", "tokenize"], n = i.length; n > s; s++)
            o = i[s], this.options[o] = o in e ? e[o] : r[o];
        for (s = 0, i = ["searchFn", "sortFn", "keys", "getFn", "include", "tokenSeparator"], n = i.length; n > s; s++)
            o = i[s], this.options[o] = e[o] || r[o]
    }
    function n(t, e, s) {
        var i,
            r,
            h,
            a,
            c,
            p;
        if (e) {
            if (h = e.indexOf("."), -1 !== h ? (i = e.slice(0, h), r = e.slice(h + 1)) : i = e, a = t[i], null !== a && void 0 !== a)
                if (r || "string" != typeof a && "number" != typeof a)
                    if (o(a))
                        for (c = 0, p = a.length; p > c; c++)
                            n(a[c], r, s);
                    else
                        r && n(a, r, s);
                else
                    s.push(a)
        } else
            s.push(t);
        return s
    }
    function o(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
    function i(t, e) {
        e = e || {}, this.options = e, this.options.location = e.location || i.defaultOptions.location, this.options.distance = "distance" in e ? e.distance : i.defaultOptions.distance, this.options.threshold = "threshold" in e ? e.threshold : i.defaultOptions.threshold, this.options.maxPatternLength = e.maxPatternLength || i.defaultOptions.maxPatternLength, this.pattern = e.caseSensitive ? t : t.toLowerCase(), this.patternLen = t.length, this.patternLen <= this.options.maxPatternLength && (this.matchmask = 1 << this.patternLen - 1, this.patternAlphabet = this._calculatePatternAlphabet())
    }
    var r = {
        id: null,
        caseSensitive: !1,
        include: [],
        shouldSort: !0,
        searchFn: i,
        sortFn: function(t, e) {
            return t.score - e.score
        },
        getFn: n,
        keys: [],
        verbose: !1,
        tokenize: !1,
        matchAllTokens: !1,
        tokenSeparator: / +/g
    };
    s.VERSION = "2.5.0", s.prototype.set = function(t) {
        return this.list = t, t
    }, s.prototype.search = function(t) {
        this.options.verbose && e("\nSearch term:", t, "\n"), this.pattern = t, this.results = [], this.resultMap = {}, this._keyMap = null, this._prepareSearchers(), this._startSearch(), this._computeScore(), this._sort();
        var s = this._format();
        return s
    }, s.prototype._prepareSearchers = function() {
        var t = this.options,
            e = this.pattern,
            s = t.searchFn,
            n = e.split(t.tokenSeparator),
            o = 0,
            i = n.length;
        if (this.options.tokenize)
            for (this.tokenSearchers = []; i > o; o++)
                this.tokenSearchers.push(new s(n[o], t));
        this.fullSeacher = new s(e, t)
    }, s.prototype._startSearch = function() {
        var t,
            e,
            s,
            n,
            o = this.options,
            i = o.getFn,
            r = this.list,
            h = r.length,
            a = this.options.keys,
            c = a.length,
            p = null;
        if ("string" == typeof r[0])
            for (s = 0; h > s; s++)
                this._analyze("", r[s], s, s);
        else
            for (this._keyMap = {}, s = 0; h > s; s++)
                for (p = r[s], n = 0; c > n; n++) {
                    if (t = a[n], "string" != typeof t) {
                        if (e = 1 - t.weight || 1, this._keyMap[t.name] = {
                            weight: e
                        }, t.weight <= 0 || t.weight > 1)
                            throw new Error("Key weight has to be > 0 and <= 1");
                        t = t.name
                    } else
                        this._keyMap[t] = {
                            weight: 1
                        };
                    this._analyze(t, i(p, t, []), p, s)
                }
    }, s.prototype._analyze = function(t, s, n, i) {
        var r,
            h,
            a,
            c,
            p,
            l,
            u,
            f,
            d,
            g,
            m,
            y,
            k,
            v,
            S,
            b = this.options,
            _ = !1;
        if (void 0 !== s && null !== s) {
            h = [];
            var M = 0;
            if ("string" == typeof s) {
                if (r = s.split(b.tokenSeparator), b.verbose && e("---------\nKey:", t), this.options.tokenize) {
                    for (v = 0; v < this.tokenSearchers.length; v++) {
                        for (f = this.tokenSearchers[v], b.verbose && e("Pattern:", f.pattern), d = [], y = !1, S = 0; S < r.length; S++) {
                            g = r[S], m = f.search(g);
                            var L = {};
                            m.isMatch ? (L[g] = m.score, _ = !0, y = !0, h.push(m.score)) : (L[g] = 1, this.options.matchAllTokens || h.push(1)), d.push(L)
                        }
                        y && M++, b.verbose && e("Token scores:", d)
                    }
                    for (c = h[0], l = h.length, v = 1; l > v; v++)
                        c += h[v];
                    c /= l, b.verbose && e("Token score average:", c)
                }
                u = this.fullSeacher.search(s), b.verbose && e("Full text score:", u.score), p = u.score, void 0 !== c && (p = (p + c) / 2), b.verbose && e("Score average:", p), k = !this.options.tokenize || !this.options.matchAllTokens || M >= this.tokenSearchers.length, b.verbose && e("Check Matches", k), (_ || u.isMatch) && k && (a = this.resultMap[i], a ? a.output.push({
                    key: t,
                    score: p,
                    matchedIndices: u.matchedIndices
                }) : (this.resultMap[i] = {
                    item: n,
                    output: [{
                        key: t,
                        score: p,
                        matchedIndices: u.matchedIndices
                    }]
                }, this.results.push(this.resultMap[i])))
            } else if (o(s))
                for (v = 0; v < s.length; v++)
                    this._analyze(t, s[v], n, i)
        }
    }, s.prototype._computeScore = function() {
        var t,
            s,
            n,
            o,
            i,
            r,
            h,
            a,
            c,
            p = this._keyMap,
            l = this.results;
        for (this.options.verbose && e("\n\nComputing score:\n"), t = 0; t < l.length; t++) {
            for (n = 0, o = l[t].output, i = o.length, a = 1, s = 0; i > s; s++)
                r = o[s].score, h = p ? p[o[s].key].weight : 1, c = r * h, 1 !== h ? a = Math.min(a, c) : (n += c, o[s].nScore = c);
            1 === a ? l[t].score = n / i : l[t].score = a, this.options.verbose && e(l[t])
        }
    }, s.prototype._sort = function() {
        var t = this.options;
        t.shouldSort && (t.verbose && e("\n\nSorting...."), this.results.sort(t.sortFn))
    }, s.prototype._format = function() {
        var t,
            s,
            n,
            o,
            i,
            r = this.options,
            h = r.getFn,
            a = [],
            c = this.results,
            p = r.include;
        for (r.verbose && e("\n\nOutput:\n\n", c), o = r.id ? function(t) {
            c[t].item = h(c[t].item, r.id, [])[0]
        } : function() {}, i = function(t) {
            var e,
                s,
                n,
                o,
                i,
                r = c[t];
            if (p.length > 0) {
                if (e = {
                    item: r.item
                }, -1 !== p.indexOf("matches"))
                    for (n = r.output, e.matches = [], s = 0; s < n.length; s++)
                        o = n[s], i = {
                            indices: o.matchedIndices
                        }, o.key && (i.key = o.key), e.matches.push(i);
                -1 !== p.indexOf("score") && (e.score = c[t].score)
            } else
                e = r.item;
            return e
        }, s = 0, n = c.length; n > s; s++)
            o(s), t = i(s), a.push(t);
        return a
    }, i.defaultOptions = {
        location: 0,
        distance: 100,
        threshold: .6,
        maxPatternLength: 32
    }, i.prototype._calculatePatternAlphabet = function() {
        var t = {},
            e = 0;
        for (e = 0; e < this.patternLen; e++)
            t[this.pattern.charAt(e)] = 0;
        for (e = 0; e < this.patternLen; e++)
            t[this.pattern.charAt(e)] |= 1 << this.pattern.length - e - 1;
        return t
    }, i.prototype._bitapScore = function(t, e) {
        var s = t / this.patternLen,
            n = Math.abs(this.options.location - e);
        return this.options.distance ? s + n / this.options.distance : n ? 1 : s
    }, i.prototype.search = function(t) {
        var e,
            s,
            n,
            o,
            i,
            r,
            h,
            a,
            c,
            p,
            l,
            u,
            f,
            d,
            g,
            m,
            y,
            k,
            v,
            S,
            b,
            _,
            M = this.options;
        if (t = M.caseSensitive ? t : t.toLowerCase(), this.pattern === t)
            return {
                isMatch: !0,
                score: 0,
                matchedIndices: [[0, t.length - 1]]
            };
        if (this.patternLen > M.maxPatternLength) {
            if (y = t.match(new RegExp(this.pattern.replace(M.tokenSeparator, "|"))), k = !!y)
                for (S = [], e = 0, b = y.length; b > e; e++)
                    _ = y[e], S.push([t.indexOf(_), _.length - 1]);
            return {
                isMatch: k,
                score: k ? .5 : 1,
                matchedIndices: S
            }
        }
        for (o = M.location, n = t.length, i = M.threshold, r = t.indexOf(this.pattern, o), v = [], e = 0; n > e; e++)
            v[e] = 0;
        for (-1 != r && (i = Math.min(this._bitapScore(0, r), i), r = t.lastIndexOf(this.pattern, o + this.patternLen), -1 != r && (i = Math.min(this._bitapScore(0, r), i))), r = -1, g = 1, m = [], c = this.patternLen + n, e = 0; e < this.patternLen; e++) {
            for (h = 0, a = c; a > h;)
                this._bitapScore(e, o + a) <= i ? h = a : c = a, a = Math.floor((c - h) / 2 + h);
            for (c = a, p = Math.max(1, o - a + 1), l = Math.min(o + a, n) + this.patternLen, u = Array(l + 2), u[l + 1] = (1 << e) - 1, s = l; s >= p; s--)
                if (d = this.patternAlphabet[t.charAt(s - 1)], d && (v[s - 1] = 1), 0 === e ? u[s] = (u[s + 1] << 1 | 1) & d : u[s] = (u[s + 1] << 1 | 1) & d | ((f[s + 1] | f[s]) << 1 | 1) | f[s + 1], u[s] & this.matchmask && (g = this._bitapScore(e, s - 1), i >= g)) {
                    if (i = g, r = s - 1, m.push(r), !(r > o))
                        break;
                    p = Math.max(1, 2 * o - r)
                }
            if (this._bitapScore(e + 1, o) > i)
                break;
            f = u
        }
        return S = this._getMatchedIndices(v), {
            isMatch: r >= 0,
            score: 0 === g ? .001 : g,
            matchedIndices: S
        }
    }, i.prototype._getMatchedIndices = function(t) {
        for (var e, s = [], n = -1, o = -1, i = 0, r = t.length; r > i; i++)
            e = t[i], e && -1 === n ? n = i : e || -1 === n || (o = i - 1, s.push([n, o]), n = -1);
        return t[i - 1] && s.push([n, i - 1]), s
    }, "object" == typeof exports ? module.exports = s : "function" == typeof define && define.amd ? define(function() {
        return s
    }) : t.Fuse = s
}(this);
!function(t, e, i, n) {
    "use strict";
    function r(t, e, i) {
        return setTimeout(u(t, i), e)
    }
    function s(t, e, i) {
        return !!Array.isArray(t) && (o(t, i[e], i), !0)
    }
    function o(t, e, i) {
        var r;
        if (t)
            if (t.forEach)
                t.forEach(e, i);
            else if (t.length !== n)
                for (r = 0; r < t.length;)
                    e.call(i, t[r], r, t), r++;
            else
                for (r in t)
                    t.hasOwnProperty(r) && e.call(i, t[r], r, t)
    }
    function a(e, i, n) {
        var r = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";
        return function() {
            var i = new Error("get-stack-trace"),
                n = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                s = t.console && (t.console.warn || t.console.log);
            return s && s.call(t.console, r, n), e.apply(this, arguments)
        }
    }
    function h(t, e, i) {
        var n,
            r = e.prototype;
        n = t.prototype = Object.create(r), n.constructor = t, n._super = r, i && lt(n, i)
    }
    function u(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    function c(t, e) {
        return typeof t == dt ? t.apply(e ? e[0] || n : n, e) : t
    }
    function l(t, e) {
        return t === n ? e : t
    }
    function p(t, e, i) {
        o(m(e), function(e) {
            t.addEventListener(e, i, !1)
        })
    }
    function f(t, e, i) {
        o(m(e), function(e) {
            t.removeEventListener(e, i, !1)
        })
    }
    function d(t, e) {
        for (; t;) {
            if (t == e)
                return !0;
            t = t.parentNode
        }
        return !1
    }
    function v(t, e) {
        return t.indexOf(e) > -1
    }
    function m(t) {
        return t.trim().split(/\s+/g)
    }
    function g(t, e, i) {
        if (t.indexOf && !i)
            return t.indexOf(e);
        for (var n = 0; n < t.length;) {
            if (i && t[n][i] == e || !i && t[n] === e)
                return n;
            n++
        }
        return -1
    }
    function T(t) {
        return Array.prototype.slice.call(t, 0)
    }
    function y(t, e, i) {
        for (var n = [], r = [], s = 0; s < t.length;) {
            var o = e ? t[s][e] : t[s];
            g(r, o) < 0 && n.push(t[s]), r[s] = o, s++
        }
        return i && (n = e ? n.sort(function(t, i) {
            return t[e] > i[e]
        }) : n.sort()), n
    }
    function E(t, e) {
        for (var i, r, s = e[0].toUpperCase() + e.slice(1), o = 0; o < pt.length;) {
            if (i = pt[o], r = i ? i + s : e, r in t)
                return r;
            o++
        }
        return n
    }
    function I() {
        return Et++
    }
    function A(e) {
        var i = e.ownerDocument || e;
        return i.defaultView || i.parentWindow || t
    }
    function _(t, e) {
        var i = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
            c(t.options.enable, [t]) && i.handler(e)
        }, this.init()
    }
    function C(t) {
        var e,
            i = t.options.inputClass;
        return new (e = i ? i : _t ? F : Ct ? k : At ? L : Y)(t, S)
    }
    function S(t, e, i) {
        var n = i.pointers.length,
            r = i.changedPointers.length,
            s = e & wt && n - r === 0,
            o = e & (Rt | Mt) && n - r === 0;
        i.isFirst = !!s, i.isFinal = !!o, s && (t.session = {}), i.eventType = e, b(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
    }
    function b(t, e) {
        var i = t.session,
            n = e.pointers,
            r = n.length;
        i.firstInput || (i.firstInput = x(e)), r > 1 && !i.firstMultiple ? i.firstMultiple = x(e) : 1 === r && (i.firstMultiple = !1);
        var s = i.firstInput,
            o = i.firstMultiple,
            a = o ? o.center : s.center,
            h = e.center = w(n);
        e.timeStamp = gt(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = z(a, h), e.distance = M(a, h), P(i, e), e.offsetDirection = R(e.deltaX, e.deltaY);
        var u = O(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = u.x, e.overallVelocityY = u.y, e.overallVelocity = mt(u.x) > mt(u.y) ? u.x : u.y, e.scale = o ? X(o.pointers, n) : 1, e.rotation = o ? N(o.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, D(i, e);
        var c = t.element;
        d(e.srcEvent.target, c) && (c = e.srcEvent.target), e.target = c
    }
    function P(t, e) {
        var i = e.center,
            n = t.offsetDelta || {},
            r = t.prevDelta || {},
            s = t.prevInput || {};
        e.eventType !== wt && s.eventType !== Rt || (r = t.prevDelta = {
            x: s.deltaX || 0,
            y: s.deltaY || 0
        }, n = t.offsetDelta = {
            x: i.x,
            y: i.y
        }), e.deltaX = r.x + (i.x - n.x), e.deltaY = r.y + (i.y - n.y)
    }
    function D(t, e) {
        var i,
            r,
            s,
            o,
            a = t.lastInterval || e,
            h = e.timeStamp - a.timeStamp;
        if (e.eventType != Mt && (h > xt || a.velocity === n)) {
            var u = e.deltaX - a.deltaX,
                c = e.deltaY - a.deltaY,
                l = O(h, u, c);
            r = l.x, s = l.y, i = mt(l.x) > mt(l.y) ? l.x : l.y, o = R(u, c), t.lastInterval = e
        } else
            i = a.velocity, r = a.velocityX, s = a.velocityY, o = a.direction;
        e.velocity = i, e.velocityX = r, e.velocityY = s, e.direction = o
    }
    function x(t) {
        for (var e = [], i = 0; i < t.pointers.length;)
            e[i] = {
                clientX: vt(t.pointers[i].clientX),
                clientY: vt(t.pointers[i].clientY)
            }, i++;
        return {
            timeStamp: gt(),
            pointers: e,
            center: w(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
        }
    }
    function w(t) {
        var e = t.length;
        if (1 === e)
            return {
                x: vt(t[0].clientX),
                y: vt(t[0].clientY)
            };
        for (var i = 0, n = 0, r = 0; e > r;)
            i += t[r].clientX, n += t[r].clientY, r++;
        return {
            x: vt(i / e),
            y: vt(n / e)
        }
    }
    function O(t, e, i) {
        return {
            x: e / t || 0,
            y: i / t || 0
        }
    }
    function R(t, e) {
        return t === e ? zt : mt(t) >= mt(e) ? 0 > t ? Nt : Xt : 0 > e ? Yt : Ft
    }
    function M(t, e, i) {
        i || (i = Ht);
        var n = e[i[0]] - t[i[0]],
            r = e[i[1]] - t[i[1]];
        return Math.sqrt(n * n + r * r)
    }
    function z(t, e, i) {
        i || (i = Ht);
        var n = e[i[0]] - t[i[0]],
            r = e[i[1]] - t[i[1]];
        return 180 * Math.atan2(r, n) / Math.PI
    }
    function N(t, e) {
        return z(e[1], e[0], Lt) + z(t[1], t[0], Lt)
    }
    function X(t, e) {
        return M(e[0], e[1], Lt) / M(t[0], t[1], Lt)
    }
    function Y() {
        this.evEl = Vt, this.evWin = jt, this.pressed = !1, _.apply(this, arguments)
    }
    function F() {
        this.evEl = Bt, this.evWin = $t, _.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }
    function W() {
        this.evTarget = Kt, this.evWin = Qt, this.started = !1, _.apply(this, arguments)
    }
    function q(t, e) {
        var i = T(t.touches),
            n = T(t.changedTouches);
        return e & (Rt | Mt) && (i = y(i.concat(n), "identifier", !0)), [i, n]
    }
    function k() {
        this.evTarget = ee, this.targetIds = {}, _.apply(this, arguments)
    }
    function H(t, e) {
        var i = T(t.touches),
            n = this.targetIds;
        if (e & (wt | Ot) && 1 === i.length)
            return n[i[0].identifier] = !0, [i, i];
        var r,
            s,
            o = T(t.changedTouches),
            a = [],
            h = this.target;
        if (s = i.filter(function(t) {
            return d(t.target, h)
        }), e === wt)
            for (r = 0; r < s.length;)
                n[s[r].identifier] = !0, r++;
        for (r = 0; r < o.length;)
            n[o[r].identifier] && a.push(o[r]), e & (Rt | Mt) && delete n[o[r].identifier], r++;
        return a.length ? [y(s.concat(a), "identifier", !0), a] : void 0
    }
    function L() {
        _.apply(this, arguments);
        var t = u(this.handler, this);
        this.touch = new k(this.manager, t), this.mouse = new Y(this.manager, t), this.primaryTouch = null, this.lastTouches = []
    }
    function U(t, e) {
        t & wt ? (this.primaryTouch = e.changedPointers[0].identifier, V.call(this, e)) : t & (Rt | Mt) && V.call(this, e)
    }
    function V(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
            var i = {
                x: e.clientX,
                y: e.clientY
            };
            this.lastTouches.push(i);
            var n = this.lastTouches,
                r = function() {
                    var t = n.indexOf(i);
                    t > -1 && n.splice(t, 1)
                };
            setTimeout(r, ie)
        }
    }
    function j(t) {
        for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
            var r = this.lastTouches[n],
                s = Math.abs(e - r.x),
                o = Math.abs(i - r.y);
            if (ne >= s && ne >= o)
                return !0
        }
        return !1
    }
    function G(t, e) {
        this.manager = t, this.set(e)
    }
    function Z(t) {
        if (v(t, ue))
            return ue;
        var e = v(t, ce),
            i = v(t, le);
        return e && i ? ue : e || i ? e ? ce : le : v(t, he) ? he : ae
    }
    function B() {
        if (!se)
            return !1;
        var e = {},
            i = t.CSS && t.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
            e[n] = !i || t.CSS.supports("touch-action", n)
        }), e
    }
    function $(t) {
        this.options = lt({}, this.defaults, t || {}), this.id = I(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = fe, this.simultaneous = {}, this.requireFail = []
    }
    function J(t) {
        return t & Te ? "cancel" : t & me ? "end" : t & ve ? "move" : t & de ? "start" : ""
    }
    function K(t) {
        return t == Ft ? "down" : t == Yt ? "up" : t == Nt ? "left" : t == Xt ? "right" : ""
    }
    function Q(t, e) {
        var i = e.manager;
        return i ? i.get(t) : t
    }
    function tt() {
        $.apply(this, arguments)
    }
    function et() {
        tt.apply(this, arguments), this.pX = null, this.pY = null
    }
    function it() {
        tt.apply(this, arguments)
    }
    function nt() {
        $.apply(this, arguments), this._timer = null, this._input = null
    }
    function rt() {
        tt.apply(this, arguments)
    }
    function st() {
        tt.apply(this, arguments)
    }
    function ot() {
        $.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }
    function at(t, e) {
        return e = e || {}, e.recognizers = l(e.recognizers, at.defaults.preset), new ht(t, e)
    }
    function ht(t, e) {
        this.options = lt({}, at.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = C(this), this.touchAction = new G(this, this.options.touchAction), ut(this, !0), o(this.options.recognizers, function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
        }, this)
    }
    function ut(t, e) {
        var i = t.element;
        if (i.style) {
            var n;
            o(t.options.cssProps, function(r, s) {
                n = E(i.style, s), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = r) : i.style[n] = t.oldCssProps[n] || ""
            }), e || (t.oldCssProps = {})
        }
    }
    function ct(t, i) {
        var n = e.createEvent("Event");
        n.initEvent(t, !0, !0), n.gesture = i, i.target.dispatchEvent(n)
    }
    var lt,
        pt = ["", "webkit", "Moz", "MS", "ms", "o"],
        ft = e.createElement("div"),
        dt = "function",
        vt = Math.round,
        mt = Math.abs,
        gt = Date.now;
    lt = "function" != typeof Object.assign ? function(t) {
        if (t === n || null === t)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), i = 1; i < arguments.length; i++) {
            var r = arguments[i];
            if (r !== n && null !== r)
                for (var s in r)
                    r.hasOwnProperty(s) && (e[s] = r[s])
        }
        return e
    } : Object.assign;
    var Tt = a(function(t, e, i) {
            for (var r = Object.keys(e), s = 0; s < r.length;)
                (!i || i && t[r[s]] === n) && (t[r[s]] = e[r[s]]), s++;
            return t
        }, "extend", "Use `assign`."),
        yt = a(function(t, e) {
            return Tt(t, e, !0)
        }, "merge", "Use `assign`."),
        Et = 1,
        It = /mobile|tablet|ip(ad|hone|od)|android/i,
        At = "ontouchstart" in t,
        _t = E(t, "PointerEvent") !== n,
        Ct = At && It.test(navigator.userAgent),
        St = "touch",
        bt = "pen",
        Pt = "mouse",
        Dt = "kinect",
        xt = 25,
        wt = 1,
        Ot = 2,
        Rt = 4,
        Mt = 8,
        zt = 1,
        Nt = 2,
        Xt = 4,
        Yt = 8,
        Ft = 16,
        Wt = Nt | Xt,
        qt = Yt | Ft,
        kt = Wt | qt,
        Ht = ["x", "y"],
        Lt = ["clientX", "clientY"];
    _.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(A(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(A(this.element), this.evWin, this.domHandler)
        }
    };
    var Ut = {
            mousedown: wt,
            mousemove: Ot,
            mouseup: Rt
        },
        Vt = "mousedown",
        jt = "mousemove mouseup";
    h(Y, _, {
        handler: function(t) {
            var e = Ut[t.type];
            e & wt && 0 === t.button && (this.pressed = !0), e & Ot && 1 !== t.which && (e = Rt), this.pressed && (e & Rt && (this.pressed = !1), this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: Pt,
                srcEvent: t
            }))
        }
    });
    var Gt = {
            pointerdown: wt,
            pointermove: Ot,
            pointerup: Rt,
            pointercancel: Mt,
            pointerout: Mt
        },
        Zt = {
            2: St,
            3: bt,
            4: Pt,
            5: Dt
        },
        Bt = "pointerdown",
        $t = "pointermove pointerup pointercancel";
    t.MSPointerEvent && !t.PointerEvent && (Bt = "MSPointerDown", $t = "MSPointerMove MSPointerUp MSPointerCancel"), h(F, _, {
        handler: function(t) {
            var e = this.store,
                i = !1,
                n = t.type.toLowerCase().replace("ms", ""),
                r = Gt[n],
                s = Zt[t.pointerType] || t.pointerType,
                o = s == St,
                a = g(e, t.pointerId, "pointerId");
            r & wt && (0 === t.button || o) ? 0 > a && (e.push(t), a = e.length - 1) : r & (Rt | Mt) && (i = !0), 0 > a || (e[a] = t, this.callback(this.manager, r, {
                pointers: e,
                changedPointers: [t],
                pointerType: s,
                srcEvent: t
            }), i && e.splice(a, 1))
        }
    });
    var Jt = {
            touchstart: wt,
            touchmove: Ot,
            touchend: Rt,
            touchcancel: Mt
        },
        Kt = "touchstart",
        Qt = "touchstart touchmove touchend touchcancel";
    h(W, _, {
        handler: function(t) {
            var e = Jt[t.type];
            if (e === wt && (this.started = !0), this.started) {
                var i = q.call(this, t, e);
                e & (Rt | Mt) && i[0].length - i[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: St,
                    srcEvent: t
                })
            }
        }
    });
    var te = {
            touchstart: wt,
            touchmove: Ot,
            touchend: Rt,
            touchcancel: Mt
        },
        ee = "touchstart touchmove touchend touchcancel";
    h(k, _, {
        handler: function(t) {
            var e = te[t.type],
                i = H.call(this, t, e);
            i && this.callback(this.manager, e, {
                pointers: i[0],
                changedPointers: i[1],
                pointerType: St,
                srcEvent: t
            })
        }
    });
    var ie = 2500,
        ne = 25;
    h(L, _, {
        handler: function(t, e, i) {
            var n = i.pointerType == St,
                r = i.pointerType == Pt;
            if (!(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                if (n)
                    U.call(this, e, i);
                else if (r && j.call(this, i))
                    return;
                this.callback(t, e, i)
            }
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var re = E(ft.style, "touchAction"),
        se = re !== n,
        oe = "compute",
        ae = "auto",
        he = "manipulation",
        ue = "none",
        ce = "pan-x",
        le = "pan-y",
        pe = B();
    G.prototype = {
        set: function(t) {
            t == oe && (t = this.compute()), se && this.manager.element.style && pe[t] && (this.manager.element.style[re] = t), this.actions = t.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var t = [];
            return o(this.manager.recognizers, function(e) {
                c(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
            }), Z(t.join(" "))
        },
        preventDefaults: function(t) {
            var e = t.srcEvent,
                i = t.offsetDirection;
            if (this.manager.session.prevented)
                return void e.preventDefault();
            var n = this.actions,
                r = v(n, ue) && !pe[ue],
                s = v(n, le) && !pe[le],
                o = v(n, ce) && !pe[ce];
            if (r) {
                var a = 1 === t.pointers.length,
                    h = t.distance < 2,
                    u = t.deltaTime < 250;
                if (a && h && u)
                    return
            }
            return o && s ? void 0 : r || s && i & Wt || o && i & qt ? this.preventSrc(e) : void 0
        },
        preventSrc: function(t) {
            this.manager.session.prevented = !0, t.preventDefault()
        }
    };
    var fe = 1,
        de = 2,
        ve = 4,
        me = 8,
        ge = me,
        Te = 16,
        ye = 32;
    $.prototype = {
        defaults: {},
        set: function(t) {
            return lt(this.options, t), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function(t) {
            if (s(t, "recognizeWith", this))
                return this;
            var e = this.simultaneous;
            return t = Q(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
        },
        dropRecognizeWith: function(t) {
            return s(t, "dropRecognizeWith", this) ? this : (t = Q(t, this), delete this.simultaneous[t.id], this)
        },
        requireFailure: function(t) {
            if (s(t, "requireFailure", this))
                return this;
            var e = this.requireFail;
            return t = Q(t, this), -1 === g(e, t) && (e.push(t), t.requireFailure(this)), this
        },
        dropRequireFailure: function(t) {
            if (s(t, "dropRequireFailure", this))
                return this;
            t = Q(t, this);
            var e = g(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id]
        },
        emit: function(t) {
            function e(e) {
                i.manager.emit(e, t)
            }
            var i = this,
                n = this.state;
            me > n && e(i.options.event + J(n)), e(i.options.event), t.additionalEvent && e(t.additionalEvent), n >= me && e(i.options.event + J(n))
        },
        tryEmit: function(t) {
            return this.canEmit() ? this.emit(t) : void (this.state = ye)
        },
        canEmit: function() {
            for (var t = 0; t < this.requireFail.length;) {
                if (!(this.requireFail[t].state & (ye | fe)))
                    return !1;
                t++
            }
            return !0
        },
        recognize: function(t) {
            var e = lt({}, t);
            return c(this.options.enable, [this, e]) ? (this.state & (ge | Te | ye) && (this.state = fe), this.state = this.process(e), void (this.state & (de | ve | me | Te) && this.tryEmit(e))) : (this.reset(), void (this.state = ye))
        },
        process: function(t) {},
        getTouchAction: function() {},
        reset: function() {}
    }, h(tt, $, {
        defaults: {
            pointers: 1
        },
        attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
        },
        process: function(t) {
            var e = this.state,
                i = t.eventType,
                n = e & (de | ve),
                r = this.attrTest(t);
            return n && (i & Mt || !r) ? e | Te : n || r ? i & Rt ? e | me : e & de ? e | ve : de : ye
        }
    }), h(et, tt, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: kt
        },
        getTouchAction: function() {
            var t = this.options.direction,
                e = [];
            return t & Wt && e.push(le), t & qt && e.push(ce), e
        },
        directionTest: function(t) {
            var e = this.options,
                i = !0,
                n = t.distance,
                r = t.direction,
                s = t.deltaX,
                o = t.deltaY;
            return r & e.direction || (e.direction & Wt ? (r = 0 === s ? zt : 0 > s ? Nt : Xt, i = s != this.pX, n = Math.abs(t.deltaX)) : (r = 0 === o ? zt : 0 > o ? Yt : Ft, i = o != this.pY, n = Math.abs(t.deltaY))), t.direction = r, i && n > e.threshold && r & e.direction
        },
        attrTest: function(t) {
            return tt.prototype.attrTest.call(this, t) && (this.state & de || !(this.state & de) && this.directionTest(t))
        },
        emit: function(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = K(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
        }
    }), h(it, tt, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ue]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & de)
        },
        emit: function(t) {
            if (1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";
                t.additionalEvent = this.options.event + e
            }
            this._super.emit.call(this, t)
        }
    }), h(nt, $, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return [ae]
        },
        process: function(t) {
            var e = this.options,
                i = t.pointers.length === e.pointers,
                n = t.distance < e.threshold,
                s = t.deltaTime > e.time;
            if (this._input = t, !n || !i || t.eventType & (Rt | Mt) && !s)
                this.reset();
            else if (t.eventType & wt)
                this.reset(), this._timer = r(function() {
                    this.state = ge, this.tryEmit()
                }, e.time, this);
            else if (t.eventType & Rt)
                return ge;
            return ye
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(t) {
            this.state === ge && (t && t.eventType & Rt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = gt(), this.manager.emit(this.options.event, this._input)))
        }
    }), h(rt, tt, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ue]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & de)
        }
    }), h(st, tt, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: Wt | qt,
            pointers: 1
        },
        getTouchAction: function() {
            return et.prototype.getTouchAction.call(this)
        },
        attrTest: function(t) {
            var e,
                i = this.options.direction;
            return i & (Wt | qt) ? e = t.overallVelocity : i & Wt ? e = t.overallVelocityX : i & qt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && mt(e) > this.options.velocity && t.eventType & Rt
        },
        emit: function(t) {
            var e = K(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
        }
    }), h(ot, $, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [he]
        },
        process: function(t) {
            var e = this.options,
                i = t.pointers.length === e.pointers,
                n = t.distance < e.threshold,
                s = t.deltaTime < e.time;
            if (this.reset(), t.eventType & wt && 0 === this.count)
                return this.failTimeout();
            if (n && s && i) {
                if (t.eventType != Rt)
                    return this.failTimeout();
                var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
                    a = !this.pCenter || M(this.pCenter, t.center) < e.posThreshold;
                this.pTime = t.timeStamp, this.pCenter = t.center, a && o ? this.count += 1 : this.count = 1, this._input = t;
                var h = this.count % e.taps;
                if (0 === h)
                    return this.hasRequireFailures() ? (this._timer = r(function() {
                        this.state = ge, this.tryEmit()
                    }, e.interval, this), de) : ge
            }
            return ye
        },
        failTimeout: function() {
            return this._timer = r(function() {
                this.state = ye
            }, this.options.interval, this), ye
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == ge && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), at.VERSION = "2.0.8", at.defaults = {
        domEvents: !1,
        touchAction: oe,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[rt, {
            enable: !1
        }], [it, {
            enable: !1
        }, ["rotate"]], [st, {
            direction: Wt
        }], [et, {
            direction: Wt
        }, ["swipe"]], [ot], [ot, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [nt]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var Ee = 1,
        Ie = 2;
    ht.prototype = {
        set: function(t) {
            return lt(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
        },
        stop: function(t) {
            this.session.stopped = t ? Ie : Ee
        },
        recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
                this.touchAction.preventDefaults(t);
                var i,
                    n = this.recognizers,
                    r = e.curRecognizer;
                (!r || r && r.state & ge) && (r = e.curRecognizer = null);
                for (var s = 0; s < n.length;)
                    i = n[s], e.stopped === Ie || r && i != r && !i.canRecognizeWith(r) ? i.reset() : i.recognize(t), !r && i.state & (de | ve | me) && (r = e.curRecognizer = i), s++
            }
        },
        get: function(t) {
            if (t instanceof $)
                return t;
            for (var e = this.recognizers, i = 0; i < e.length; i++)
                if (e[i].options.event == t)
                    return e[i];
            return null
        },
        add: function(t) {
            if (s(t, "add", this))
                return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
        },
        remove: function(t) {
            if (s(t, "remove", this))
                return this;
            if (t = this.get(t)) {
                var e = this.recognizers,
                    i = g(e, t);
                -1 !== i && (e.splice(i, 1), this.touchAction.update())
            }
            return this
        },
        on: function(t, e) {
            if (t !== n && e !== n) {
                var i = this.handlers;
                return o(m(t), function(t) {
                    i[t] = i[t] || [], i[t].push(e)
                }), this
            }
        },
        off: function(t, e) {
            if (t !== n) {
                var i = this.handlers;
                return o(m(t), function(t) {
                    e ? i[t] && i[t].splice(g(i[t], e), 1) : delete i[t]
                }), this
            }
        },
        emit: function(t, e) {
            this.options.domEvents && ct(t, e);
            var i = this.handlers[t] && this.handlers[t].slice();
            if (i && i.length) {
                e.type = t, e.preventDefault = function() {
                    e.srcEvent.preventDefault()
                };
                for (var n = 0; n < i.length;)
                    i[n](e), n++
            }
        },
        destroy: function() {
            this.element && ut(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, lt(at, {
        INPUT_START: wt,
        INPUT_MOVE: Ot,
        INPUT_END: Rt,
        INPUT_CANCEL: Mt,
        STATE_POSSIBLE: fe,
        STATE_BEGAN: de,
        STATE_CHANGED: ve,
        STATE_ENDED: me,
        STATE_RECOGNIZED: ge,
        STATE_CANCELLED: Te,
        STATE_FAILED: ye,
        DIRECTION_NONE: zt,
        DIRECTION_LEFT: Nt,
        DIRECTION_RIGHT: Xt,
        DIRECTION_UP: Yt,
        DIRECTION_DOWN: Ft,
        DIRECTION_HORIZONTAL: Wt,
        DIRECTION_VERTICAL: qt,
        DIRECTION_ALL: kt,
        Manager: ht,
        Input: _,
        TouchAction: G,
        TouchInput: k,
        MouseInput: Y,
        PointerEventInput: F,
        TouchMouseInput: L,
        SingleTouchInput: W,
        Recognizer: $,
        AttrRecognizer: tt,
        Tap: ot,
        Pan: et,
        Swipe: st,
        Pinch: it,
        Rotate: rt,
        Press: nt,
        on: p,
        off: f,
        each: o,
        merge: yt,
        extend: Tt,
        assign: lt,
        inherit: h,
        bindFn: u,
        prefixed: E
    });
    var Ae = "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};
    Ae.Hammer = at, "function" == typeof define && define.amd ? define(function() {
        return at
    }) : "undefined" != typeof module && module.exports ? module.exports = at : t[i] = at
}(window, document, "Hammer");
eval(function(e, a, t, o, i, n) {
    if (i = function(e) {
        return (e < a ? "" : i(parseInt(e / a))) + ((e %= a) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
    }, !"".replace(/^/, String)) {
        for (; t--;)
            n[i(t)] = o[t] || i(t);
        o = [function(e) {
            return n[e]
        }], i = function() {
            return "\\w+"
        }, t = 1
    }
    for (; t--;)
        o[t] && (e = e.replace(new RegExp("\\b" + i(t) + "\\b", "g"), o[t]));
    return e
}('7 8(a){a=a||{};r.s.1R.2k(2,3d);2.Q=a.1v||"";2.1H=a.1B||J;2.S=a.1G||0;2.H=a.1z||1h r.s.1Y(0,0);2.B=a.U||1h r.s.2E(0,0);2.15=a.13||t;2.1p=a.1t||"2h";2.1m=a.F||{};2.1E=a.1C||"3g";2.P=a.1j||"3b://38.r.33/2Y/2T/2N/1r.2K";3(a.1j===""){2.P=""}2.1f=a.1x||1h r.s.1Y(1,1);3(q a.A==="p"){3(q a.18==="p"){a.A=L}v{a.A=!a.18}}2.w=!a.A;2.17=a.1n||J;2.1I=a.2g||"2e";2.16=a.1l||J;2.4=t;2.z=t;2.14=t;2.V=t;2.E=t;2.R=t}8.9=1h r.s.1R();8.9.25=7(){5 i;5 f;5 a;5 d=2;5 c=7(e){e.20=L;3(e.1i){e.1i()}};5 b=7(e){e.30=J;3(e.1Z){e.1Z()}3(!d.16){c(e)}};3(!2.4){2.4=1e.2S("2Q");2.1d();3(q 2.Q.1u==="p"){2.4.O=2.G()+2.Q}v{2.4.O=2.G();2.4.1a(2.Q)}2.2J()[2.1I].1a(2.4);2.1w();3(2.4.6.D){2.R=L}v{3(2.S!==0&&2.4.Z>2.S){2.4.6.D=2.S;2.4.6.2D="2A";2.R=L}v{a=2.1P();2.4.6.D=(2.4.Z-a.W-a.11)+"12";2.R=J}}2.1F(2.1H);3(!2.16){2.E=[];f=["2t","1O","2q","2p","1M","2o","2n","2m","2l"];1o(i=0;i<f.1L;i++){2.E.1K(r.s.u.19(2.4,f[i],c))}2.E.1K(r.s.u.19(2.4,"1O",7(e){2.6.1J="2j"}))}2.V=r.s.u.19(2.4,"2i",b);r.s.u.T(2,"2f")}};8.9.G=7(){5 a="";3(2.P!==""){a="<2d";a+=" 2c=\'"+2.P+"\'";a+=" 2b=11";a+=" 6=\'";a+=" U: 2a;";a+=" 1J: 29;";a+=" 28: "+2.1E+";";a+="\'>"}K a};8.9.1w=7(){5 a;3(2.P!==""){a=2.4.3n;2.z=r.s.u.19(a,"1M",2.27())}v{2.z=t}};8.9.27=7(){5 a=2;K 7(e){e.20=L;3(e.1i){e.1i()}r.s.u.T(a,"3m");a.1r()}};8.9.1F=7(d){5 m;5 n;5 e=0,I=0;3(!d){m=2.1D();3(m 3l r.s.3k){3(!m.26().3h(2.B)){m.3f(2.B)}n=m.26();5 a=m.3e();5 h=a.Z;5 f=a.24;5 k=2.H.D;5 l=2.H.1k;5 g=2.4.Z;5 b=2.4.24;5 i=2.1f.D;5 j=2.1f.1k;5 o=2.23().3c(2.B);3(o.x<(-k+i)){e=o.x+k-i}v 3((o.x+g+k+i)>h){e=o.x+g+k+i-h}3(2.17){3(o.y<(-l+j+b)){I=o.y+l-j-b}v 3((o.y+l+j)>f){I=o.y+l+j-f}}v{3(o.y<(-l+j)){I=o.y+l-j}v 3((o.y+b+l+j)>f){I=o.y+b+l+j-f}}3(!(e===0&&I===0)){5 c=m.3a();m.39(e,I)}}}};8.9.1d=7(){5 i,F;3(2.4){2.4.37=2.1p;2.4.6.36="";F=2.1m;1o(i 35 F){3(F.34(i)){2.4.6[i]=F[i]}}2.4.6.32="31(0)";3(q 2.4.6.X!=="p"&&2.4.6.X!==""){2.4.6.2Z="\\"2X:2W.2V.2U(2R="+(2.4.6.X*1X)+")\\"";2.4.6.2P="2O(X="+(2.4.6.X*1X)+")"}2.4.6.U="2M";2.4.6.M=\'1c\';3(2.15!==t){2.4.6.13=2.15}}};8.9.1P=7(){5 c;5 a={1b:0,1g:0,W:0,11:0};5 b=2.4;3(1e.1s&&1e.1s.1W){c=b.2L.1s.1W(b,"");3(c){a.1b=C(c.1V,10)||0;a.1g=C(c.1U,10)||0;a.W=C(c.1T,10)||0;a.11=C(c.1S,10)||0}}v 3(1e.2I.N){3(b.N){a.1b=C(b.N.1V,10)||0;a.1g=C(b.N.1U,10)||0;a.W=C(b.N.1T,10)||0;a.11=C(b.N.1S,10)||0}}K a};8.9.2H=7(){3(2.4){2.4.2G.2F(2.4);2.4=t}};8.9.1y=7(){2.25();5 a=2.23().2C(2.B);2.4.6.W=(a.x+2.H.D)+"12";3(2.17){2.4.6.1g=-(a.y+2.H.1k)+"12"}v{2.4.6.1b=(a.y+2.H.1k)+"12"}3(2.w){2.4.6.M="1c"}v{2.4.6.M="A"}};8.9.2B=7(a){3(q a.1t!=="p"){2.1p=a.1t;2.1d()}3(q a.F!=="p"){2.1m=a.F;2.1d()}3(q a.1v!=="p"){2.1Q(a.1v)}3(q a.1B!=="p"){2.1H=a.1B}3(q a.1G!=="p"){2.S=a.1G}3(q a.1z!=="p"){2.H=a.1z}3(q a.1n!=="p"){2.17=a.1n}3(q a.U!=="p"){2.1q(a.U)}3(q a.13!=="p"){2.22(a.13)}3(q a.1C!=="p"){2.1E=a.1C}3(q a.1j!=="p"){2.P=a.1j}3(q a.1x!=="p"){2.1f=a.1x}3(q a.18!=="p"){2.w=a.18}3(q a.A!=="p"){2.w=!a.A}3(q a.1l!=="p"){2.16=a.1l}3(2.4){2.1y()}};8.9.1Q=7(a){2.Q=a;3(2.4){3(2.z){r.s.u.Y(2.z);2.z=t}3(!2.R){2.4.6.D=""}3(q a.1u==="p"){2.4.O=2.G()+a}v{2.4.O=2.G();2.4.1a(a)}3(!2.R){2.4.6.D=2.4.Z+"12";3(q a.1u==="p"){2.4.O=2.G()+a}v{2.4.O=2.G();2.4.1a(a)}}2.1w()}r.s.u.T(2,"2z")};8.9.1q=7(a){2.B=a;3(2.4){2.1y()}r.s.u.T(2,"21")};8.9.22=7(a){2.15=a;3(2.4){2.4.6.13=a}r.s.u.T(2,"2y")};8.9.2x=7(a){2.w=!a;3(2.4){2.4.6.M=(2.w?"1c":"A")}};8.9.2w=7(){K 2.Q};8.9.1A=7(){K 2.B};8.9.2v=7(){K 2.15};8.9.2u=7(){5 a;3((q 2.1D()==="p")||(2.1D()===t)){a=J}v{a=!2.w}K a};8.9.3i=7(){2.w=J;3(2.4){2.4.6.M="A"}};8.9.3j=7(){2.w=L;3(2.4){2.4.6.M="1c"}};8.9.2s=7(c,b){5 a=2;3(b){2.B=b.1A();2.14=r.s.u.2r(b,"21",7(){a.1q(2.1A())})}2.1N(c);3(2.4){2.1F()}};8.9.1r=7(){5 i;3(2.z){r.s.u.Y(2.z);2.z=t}3(2.E){1o(i=0;i<2.E.1L;i++){r.s.u.Y(2.E[i])}2.E=t}3(2.14){r.s.u.Y(2.14);2.14=t}3(2.V){r.s.u.Y(2.V);2.V=t}2.1N(t)};', 62, 210, "||this|if|div_|var|style|function|InfoBox|prototype||||||||||||||||undefined|typeof|google|maps|null|event|else|isHidden_|||closeListener_|visible|position_|parseInt|width|eventListeners_|boxStyle|getCloseBoxImg_|pixelOffset_|yOffset|false|return|true|visibility|currentStyle|innerHTML|closeBoxURL_|content_|fixedWidthSet_|maxWidth_|trigger|position|contextListener_|left|opacity|removeListener|offsetWidth||right|px|zIndex|moveListener_|zIndex_|enableEventPropagation_|alignBottom_|isHidden|addDomListener|appendChild|top|hidden|setBoxStyle_|document|infoBoxClearance_|bottom|new|stopPropagation|closeBoxURL|height|enableEventPropagation|boxStyle_|alignBottom|for|boxClass_|setPosition|close|defaultView|boxClass|nodeType|content|addClickHandler_|infoBoxClearance|draw|pixelOffset|getPosition|disableAutoPan|closeBoxMargin|getMap|closeBoxMargin_|panBox_|maxWidth|disableAutoPan_|pane_|cursor|push|length|click|setMap|mouseover|getBoxWidths_|setContent|OverlayView|borderRightWidth|borderLeftWidth|borderBottomWidth|borderTopWidth|getComputedStyle|100|Size|preventDefault|cancelBubble|position_changed|setZIndex|getProjection|offsetHeight|createInfoBoxDiv_|getBounds|getCloseClickHandler_|margin|pointer|relative|align|src|img|floatPane|domready|pane|infoBox|contextmenu|default|apply|touchmove|touchend|touchstart|dblclick|mouseup|mouseout|addListener|open|mousedown|getVisible|getZIndex|getContent|setVisible|zindex_changed|content_changed|auto|setOptions|fromLatLngToDivPixel|overflow|LatLng|removeChild|parentNode|onRemove|documentElement|getPanes|gif|ownerDocument|absolute|mapfiles|alpha|filter|div|Opacity|createElement|en_us|Alpha|Microsoft|DXImageTransform|progid|intl|MsFilter|returnValue|translateZ|WebkitTransform|com|hasOwnProperty|in|cssText|className|www|panBy|getCenter|http|fromLatLngToContainerPixel|arguments|getDiv|setCenter|2px|contains|show|hide|Map|instanceof|closeclick|firstChild".split("|"), 0, {}));
!function(e, n, t) {
    function o(e, n) {
        return typeof e === n
    }
    function a() {
        var e,
            n,
            t,
            a,
            s,
            i,
            r;
        for (var l in d)
            if (d.hasOwnProperty(l)) {
                if (e = [], n = d[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++)
                        e.push(n.options.aliases[t].toLowerCase());
                for (a = o(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++)
                    i = e[s], r = i.split("."), 1 === r.length ? u[r[0]] = a : (!u[r[0]] || u[r[0]] instanceof Boolean || (u[r[0]] = new Boolean(u[r[0]])), u[r[0]][r[1]] = a), f.push((a ? "" : "no-") + r.join("-"))
            }
    }
    function s(e) {
        var n = p.className,
            t = u._config.classPrefix || "";
        if (h && (n = n.baseVal), u._config.enableJSClass) {
            var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(o, "$1" + t + "js$2")
        }
        u._config.enableClasses && (n += " " + t + e.join(" " + t), h ? p.className.baseVal = n : p.className = n)
    }
    function i() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : h ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }
    function r() {
        var e = n.body;
        return e || (e = i(h ? "svg" : "body"), e.fake = !0), e
    }
    function l(e, t, o, a) {
        var s,
            l,
            f,
            d,
            c = "modernizr",
            u = i("div"),
            h = r();
        if (parseInt(o, 10))
            for (; o--;)
                f = i("div"), f.id = a ? a[o] : c + (o + 1), u.appendChild(f);
        return s = i("style"), s.type = "text/css", s.id = "s" + c, (h.fake ? h : u).appendChild(s), h.appendChild(u), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)), u.id = c, h.fake && (h.style.background = "", h.style.overflow = "hidden", d = p.style.overflow, p.style.overflow = "hidden", p.appendChild(h)), l = t(u, e), h.fake ? (h.parentNode.removeChild(h), p.style.overflow = d, p.offsetHeight) : u.parentNode.removeChild(u), !!l
    }
    var f = [],
        d = [],
        c = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e])
                }, 0)
            },
            addTest: function(e, n, t) {
                d.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function(e) {
                d.push({
                    name: null,
                    fn: e
                })
            }
        },
        u = function() {};
    u.prototype = c, u = new u;
    var p = n.documentElement,
        h = "svg" === p.nodeName.toLowerCase(),
        m = function() {
            var n = e.matchMedia || e.msMatchMedia;
            return n ? function(e) {
                var t = n(e);
                return t && t.matches || !1
            } : function(n) {
                var t = !1;
                return l("@media " + n + " { #modernizr { position: absolute; } }", function(n) {
                    t = "absolute" == (e.getComputedStyle ? e.getComputedStyle(n, null) : n.currentStyle).position
                }), t
            }
        }();
    c.mq = m, a(), s(f), delete c.addTest, delete c.addAsyncTest;
    for (var v = 0; v < u._q.length; v++)
        u._q[v]();
    e.Modernizr = u
}(window, document);
!function(t) {
    t.fn.recliner = function(n) {
        function i(i) {
            var o = t(i),
                e = o.attr(n.attrib),
                r = o.prop("tagName");
            if (e) {
                if ("IMG" != r && "IFRAME" != r)
                    return o.addClass("lazy-loading"), void o.load(e, function(t) {
                        a(o)
                    });
                o.attr("src", e)
            }
            a(o)
        }
        function a(t) {
            t.removeClass("lazy-loading"), t.addClass("lazy-loaded"), t.trigger("lazyshow")
        }
        function o() {
            var i = s.filter(function() {
                var i = t(this);
                if ("none" != i.css("display")) {
                    var a = "undefined" != typeof window.innerHeight ? window.innerHeight : d.height(),
                        o = d.scrollTop(),
                        e = o + a,
                        r = i.offset().top,
                        l = r + i.height();
                    return l >= o - n.threshold && r <= e + n.threshold
                }
            });
            r = i.trigger("lazyload"), s = s.not(r)
        }
        function e(t) {
            t.one("lazyload", function() {
                i(this)
            }), o()
        }
        var r,
            l,
            d = t(window),
            s = this,
            c = this.selector,
            n = t.extend({
                attrib: "data-src",
                throttle: 300,
                threshold: 100,
                printable: !0,
                live: !0
            }, n);
        return d.on("scroll.lazy resize.lazy lookup.lazy", function(t) {
            l && clearTimeout(l), l = setTimeout(function() {
                d.trigger("lazyupdate")
            }, n.throttle)
        }), d.on("lazyupdate", function(t) {
            o()
        }), n.live && t(document).ajaxSuccess(function(n, i, a) {
            var o = t(c).not(".lazy-loaded").not(".lazy-loading");
            s = s.add(o), e(o)
        }), n.printable && window.matchMedia && window.matchMedia("print").addListener(function(n) {
            n.matches && t(c).trigger("lazyload")
        }), e(this), this
    }
}(window.jQuery);
!function(t, e) {
    function i(e, i) {
        var n,
            o,
            a,
            r = e.nodeName.toLowerCase();
        return "area" === r ? (n = e.parentNode, o = n.name, !(!e.href || !o || "map" !== n.nodeName.toLowerCase()) && (a = t("img[usemap=#" + o + "]")[0], !!a && s(a))) : (/input|select|textarea|button|object/.test(r) ? !e.disabled : "a" === r ? e.href || i : i) && s(e)
    }
    function s(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
                return "hidden" === t.css(this, "visibility")
            }).length
    }
    var n = 0,
        o = /^ui-id-\d+$/;
    t.ui = t.ui || {}, t.extend(t.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        focus: function(e) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var e = this;
                    setTimeout(function() {
                        t(e).focus(), s && s.call(e)
                    }, i)
                }) : e.apply(this, arguments)
            }
        }(t.fn.focus),
        scrollParent: function() {
            var e;
            return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
        },
        zIndex: function(i) {
            if (i !== e)
                return this.css("zIndex", i);
            if (this.length)
                for (var s, n, o = t(this[0]); o.length && o[0] !== document;) {
                    if (s = o.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (n = parseInt(o.css("zIndex"), 10), !isNaN(n) && 0 !== n))
                        return n;
                    o = o.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++n)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                o.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e)
            }
        }) : function(e, i, s) {
            return !!t.data(e, s[3])
        },
        focusable: function(e) {
            return i(e, !isNaN(t.attr(e, "tabindex")))
        },
        tabbable: function(e) {
            var s = t.attr(e, "tabindex"),
                n = isNaN(s);
            return (n || s >= 0) && i(e, !n)
        }
    }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(i, s) {
        function n(e, i, s, n) {
            return t.each(o, function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), n && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }), i
        }
        var o = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
            a = s.toLowerCase(),
            r = {
                innerWidth: t.fn.innerWidth,
                innerHeight: t.fn.innerHeight,
                outerWidth: t.fn.outerWidth,
                outerHeight: t.fn.outerHeight
            };
        t.fn["inner" + s] = function(i) {
            return i === e ? r["inner" + s].call(this) : this.each(function() {
                t(this).css(a, n(this, i) + "px")
            })
        }, t.fn["outer" + s] = function(e, i) {
            return "number" != typeof e ? r["outer" + s].call(this, e) : this.each(function() {
                t(this).css(a, n(this, e, !0, i) + "px")
            })
        }
    }), t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
        return function(i) {
            return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
        }
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart" in document.createElement("div"), t.fn.extend({
        disableSelection: function() {
            return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                t.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), t.extend(t.ui, {
        plugin: {
            add: function(e, i, s) {
                var n,
                    o = t.ui[e].prototype;
                for (n in s)
                    o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]])
            },
            call: function(t, e, i) {
                var s,
                    n = t.plugins[e];
                if (n && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
                    for (s = 0; n.length > s; s++)
                        t.options[n[s][0]] && n[s][1].apply(t.element, i)
            }
        },
        hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow"))
                return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                n = !1;
            return e[s] > 0 || (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
        }
    })
}(jQuery), function(t, e) {
    var i = 0,
        s = Array.prototype.slice,
        n = t.cleanData;
    t.cleanData = function(e) {
        for (var i, s = 0; null != (i = e[s]); s++)
            try {
                t(i).triggerHandler("remove")
            } catch (o) {}
        n(e)
    }, t.widget = function(i, s, n) {
        var o,
            a,
            r,
            h,
            l = {},
            c = i.split(".")[0];
        i = i.split(".")[1], o = c + "-" + i, n || (n = s, s = t.Widget), t.expr[":"][o.toLowerCase()] = function(e) {
            return !!t.data(e, o)
        }, t[c] = t[c] || {}, a = t[c][i], r = t[c][i] = function(t, i) {
            return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new r(t, i)
        }, t.extend(r, a, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }), h = new s, h.options = t.widget.extend({}, h.options), t.each(n, function(i, n) {
            return t.isFunction(n) ? (l[i] = function() {
                var t = function() {
                        return s.prototype[i].apply(this, arguments)
                    },
                    e = function(t) {
                        return s.prototype[i].apply(this, t)
                    };
                return function() {
                    var i,
                        s = this._super,
                        o = this._superApply;
                    return this._super = t, this._superApply = e, i = n.apply(this, arguments), this._super = s, this._superApply = o, i
                }
            }(), e) : (l[i] = n, e)
        }), r.prototype = t.widget.extend(h, {
            widgetEventPrefix: a ? h.widgetEventPrefix : i
        }, l, {
            constructor: r,
            namespace: c,
            widgetName: i,
            widgetFullName: o
        }), a ? (t.each(a._childConstructors, function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, r, i._proto)
        }), delete a._childConstructors) : s._childConstructors.push(r), t.widget.bridge(i, r)
    }, t.widget.extend = function(i) {
        for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; h > r; r++)
            for (n in a[r])
                o = a[r][n], a[r].hasOwnProperty(n) && o !== e && (i[n] = t.isPlainObject(o) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : o);
        return i
    }, t.widget.bridge = function(i, n) {
        var o = n.prototype.widgetFullName || i;
        t.fn[i] = function(a) {
            var r = "string" == typeof a,
                h = s.call(arguments, 1),
                l = this;
            return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a, r ? this.each(function() {
                var s,
                    n = t.data(this, o);
                return n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (s = n[a].apply(n, h), s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : e) : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + a + "'")
            }) : this.each(function() {
                var e = t.data(this, o);
                e ? e.option(a || {})._init() : t.data(this, o, new n(a, this))
            }), l
        }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, s) {
            s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === s && this.destroy()
                }
            }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(i, s) {
            var n,
                o,
                a,
                r = i;
            if (0 === arguments.length)
                return t.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (r = {}, n = i.split("."), i = n.shift(), n.length) {
                    for (o = r[i] = t.widget.extend({}, this.options[i]), a = 0; n.length - 1 > a; a++)
                        o[n[a]] = o[n[a]] || {}, o = o[n[a]];
                    if (i = n.pop(), s === e)
                        return o[i] === e ? null : o[i];
                    o[i] = s
                } else {
                    if (s === e)
                        return this.options[i] === e ? null : this.options[i];
                    r[i] = s
                }
            return this._setOptions(r), this
        },
        _setOptions: function(t) {
            var e;
            for (e in t)
                this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(i, s, n) {
            var o,
                a = this;
            "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = o = t(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, o = this.widget()), t.each(n, function(n, r) {
                function h() {
                    return i || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : e
                }
                "string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/),
                    c = l[1] + a.eventNamespace,
                    u = l[2];
                u ? o.delegate(u, c, h) : s.bind(c, h)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, s) {
            var n,
                o,
                a = this.options[e];
            if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                for (n in o)
                    n in i || (i[n] = o[n]);
            return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, o) {
            "string" == typeof n && (n = {
                effect: n
            });
            var a,
                r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {}, "number" == typeof n && (n = {
                duration: n
            }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
                t(this)[e](), o && o.call(s[0]), i()
            })
        }
    })
}(jQuery), function(t) {
    var e = !1;
    t(document).mouseup(function() {
        e = !1
    }), t.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(i) {
            if (!e) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var s = this,
                    n = 1 === i.which,
                    o = !("string" != typeof this.options.cancel || !i.target.nodeName) && t(i.target).closest(this.options.cancel).length;
                return !(n && !o && this._mouseCapture(i)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        s.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                        return s._mouseMove(t)
                    }, this._mouseUpDelegate = function(t) {
                        return s._mouseUp(t)
                    }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0))
            }
        },
        _mouseMove: function(e) {
            return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery), function(t, e) {
    function i(t, e, i) {
        return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
    }
    function s(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }
    function n(e) {
        var i = e[0];
        return 9 === i.nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : t.isWindow(i) ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }
        } : i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        } : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset()
        }
    }
    t.ui = t.ui || {};
    var o,
        a = Math.max,
        r = Math.abs,
        h = Math.round,
        l = /left|center|right/,
        c = /top|center|bottom/,
        u = /[\+\-]\d+(\.[\d]+)?%?/,
        d = /^\w+/,
        p = /%$/,
        f = t.fn.position;
    t.position = {
        scrollbarWidth: function() {
            if (o !== e)
                return o;
            var i,
                s,
                n = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                a = n.children()[0];
            return t("body").append(n), i = a.offsetWidth, n.css("overflow", "scroll"), s = a.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), o = i - s
        },
        getScrollInfo: function(e) {
            var i = e.isWindow ? "" : e.element.css("overflow-x"),
                s = e.isWindow ? "" : e.element.css("overflow-y"),
                n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
            return {
                width: o ? t.position.scrollbarWidth() : 0,
                height: n ? t.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(e) {
            var i = t(e || window),
                s = t.isWindow(i[0]);
            return {
                element: i,
                isWindow: s,
                offset: i.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop(),
                width: s ? i.width() : i.outerWidth(),
                height: s ? i.height() : i.outerHeight()
            }
        }
    }, t.fn.position = function(e) {
        if (!e || !e.of)
            return f.apply(this, arguments);
        e = t.extend({}, e);
        var o,
            p,
            g,
            m,
            v,
            _,
            b = t(e.of),
            y = t.position.getWithinInfo(e.within),
            w = t.position.getScrollInfo(y),
            k = (e.collision || "flip").split(" "),
            x = {};
        return _ = n(b), b[0].preventDefault && (e.at = "left top"), p = _.width, g = _.height, m = _.offset, v = t.extend({}, m), t.each(["my", "at"], function() {
            var t,
                i,
                s = (e[this] || "").split(" ");
            1 === s.length && (s = l.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = l.test(s[0]) ? s[0] : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u.exec(s[1]), x[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
        }), 1 === k.length && (k[1] = k[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2), o = i(x.at, p, g), v.left += o[0], v.top += o[1], this.each(function() {
            var n,
                l,
                c = t(this),
                u = c.outerWidth(),
                d = c.outerHeight(),
                f = s(this, "marginLeft"),
                _ = s(this, "marginTop"),
                D = u + f + s(this, "marginRight") + w.width,
                C = d + _ + s(this, "marginBottom") + w.height,
                I = t.extend({}, v),
                P = i(x.my, c.outerWidth(), c.outerHeight());
            "right" === e.my[0] ? I.left -= u : "center" === e.my[0] && (I.left -= u / 2), "bottom" === e.my[1] ? I.top -= d : "center" === e.my[1] && (I.top -= d / 2), I.left += P[0], I.top += P[1], t.support.offsetFractions || (I.left = h(I.left), I.top = h(I.top)), n = {
                marginLeft: f,
                marginTop: _
            }, t.each(["left", "top"], function(i, s) {
                t.ui.position[k[i]] && t.ui.position[k[i]][s](I, {
                    targetWidth: p,
                    targetHeight: g,
                    elemWidth: u,
                    elemHeight: d,
                    collisionPosition: n,
                    collisionWidth: D,
                    collisionHeight: C,
                    offset: [o[0] + P[0], o[1] + P[1]],
                    my: e.my,
                    at: e.at,
                    within: y,
                    elem: c
                })
            }), e.using && (l = function(t) {
                var i = m.left - I.left,
                    s = i + p - u,
                    n = m.top - I.top,
                    o = n + g - d,
                    h = {
                        target: {
                            element: b,
                            left: m.left,
                            top: m.top,
                            width: p,
                            height: g
                        },
                        element: {
                            element: c,
                            left: I.left,
                            top: I.top,
                            width: u,
                            height: d
                        },
                        horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
                        vertical: 0 > o ? "top" : n > 0 ? "bottom" : "middle"
                    };
                u > p && p > r(i + s) && (h.horizontal = "center"), d > g && g > r(n + o) && (h.vertical = "middle"), h.important = a(r(i), r(s)) > a(r(n), r(o)) ? "horizontal" : "vertical", e.using.call(this, t, h)
            }), c.offset(t.extend(I, {
                using: l
            }))
        })
    }, t.ui.position = {
        fit: {
            left: function(t, e) {
                var i,
                    s = e.within,
                    n = s.isWindow ? s.scrollLeft : s.offset.left,
                    o = s.width,
                    r = t.left - e.collisionPosition.marginLeft,
                    h = n - r,
                    l = r + e.collisionWidth - o - n;
                e.collisionWidth > o ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - o - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + o - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = a(t.left - r, t.left)
            },
            top: function(t, e) {
                var i,
                    s = e.within,
                    n = s.isWindow ? s.scrollTop : s.offset.top,
                    o = e.within.height,
                    r = t.top - e.collisionPosition.marginTop,
                    h = n - r,
                    l = r + e.collisionHeight - o - n;
                e.collisionHeight > o ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - o - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + o - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = a(t.top - r, t.top)
            }
        },
        flip: {
            left: function(t, e) {
                var i,
                    s,
                    n = e.within,
                    o = n.offset.left + n.scrollLeft,
                    a = n.width,
                    h = n.isWindow ? n.scrollLeft : n.offset.left,
                    l = t.left - e.collisionPosition.marginLeft,
                    c = l - h,
                    u = l + e.collisionWidth - a - h,
                    d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                    p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                    f = -2 * e.offset[0];
                0 > c ? (i = t.left + d + p + f + e.collisionWidth - a - o, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || u > r(s)) && (t.left += d + p + f))
            },
            top: function(t, e) {
                var i,
                    s,
                    n = e.within,
                    o = n.offset.top + n.scrollTop,
                    a = n.height,
                    h = n.isWindow ? n.scrollTop : n.offset.top,
                    l = t.top - e.collisionPosition.marginTop,
                    c = l - h,
                    u = l + e.collisionHeight - a - h,
                    d = "top" === e.my[1],
                    p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                    f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                    g = -2 * e.offset[1];
                0 > c ? (s = t.top + p + f + g + e.collisionHeight - a - o, t.top + p + f + g > c && (0 > s || r(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - h, t.top + p + f + g > u && (i > 0 || u > r(i)) && (t.top += p + f + g))
            }
        },
        flipfit: {
            left: function() {
                t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
            }
        }
    }, function() {
        var e,
            i,
            s,
            n,
            o,
            a = document.getElementsByTagName("body")[0],
            r = document.createElement("div");
        e = document.createElement(a ? "div" : "body"), s = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, a && t.extend(s, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (o in s)
            e.style[o] = s[o];
        e.appendChild(r), i = a || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
    }()
}(jQuery), function(t) {
    t.widget("ui.draggable", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                    t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1e3
                    }).css(t(this).offset()).appendTo("body")
                }), !0))
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _mouseDrag: function(e, i) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", e, s) === !1)
                    return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function(e) {
            var i = this,
                s = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), !("original" === this.options.helper && !t.contains(this.element[0].ownerDocument, this.element[0])) && ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                i._trigger("stop", e) !== !1 && i._clear()
            }) : this._trigger("stop", e) !== !1 && this._clear(), !1)
        },
        _mouseUp: function(e) {
            return t("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(e) {
            return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
        },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.element.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e,
                i,
                s,
                n = this.options;
            return n.containment ? "window" === n.containment ? void (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === n.containment ? void (this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : n.containment.constructor === Array ? void (this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], void (s && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i))) : void (this.containment = null)
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: n.scrollTop(),
                left: n.scrollLeft()
            }), {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s
            }
        },
        _generatePosition: function(e) {
            var i,
                s,
                n,
                o,
                a = this.options,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                h = e.pageX,
                l = e.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: r.scrollTop(),
                left: r.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o)), {
                top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(e, i, s) {
            return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, s)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i) {
            var s = t(this).data("ui-draggable"),
                n = s.options,
                o = t.extend({}, i, {
                    item: s.element
                });
            s.sortables = [], t(n.connectToSortable).each(function() {
                var i = t.data(this, "ui-sortable");
                i && !i.options.disabled && (s.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", e, o))
            })
        },
        stop: function(e, i) {
            var s = t(this).data("ui-draggable"),
                n = t.extend({}, i, {
                    item: s.element
                });
            t.each(s.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n))
            })
        },
        drag: function(e, i) {
            var s = t(this).data("ui-draggable"),
                n = this;
            t.each(s.sortables, function() {
                var o = !1,
                    a = this;
                this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (o = !0, t.each(s.sortables, function() {
                    return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== a && this.instance._intersectsWith(this.instance.containerCache) && t.contains(a.instance.element[0], this.instance.element[0]) && (o = !1), o
                })), o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0]
                }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left,
                this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", e), s.dropped = !1)
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var e = t("body"),
                i = t(this).data("ui-draggable").options;
            e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
        },
        stop: function() {
            var e = t(this).data("ui-draggable").options;
            e._cursor && t("body").css("cursor", e._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i) {
            var s = t(i.helper),
                n = t(this).data("ui-draggable").options;
            s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
        },
        stop: function(e, i) {
            var s = t(this).data("ui-draggable").options;
            s._opacity && t(i.helper).css("opacity", s._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var e = t(this).data("ui-draggable");
            e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
        },
        drag: function(e) {
            var i = t(this).data("ui-draggable"),
                s = i.options,
                n = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function() {
            var e = t(this).data("ui-draggable"),
                i = e.options;
            e.snapElements = [], t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                var i = t(this),
                    s = i.offset();
                this !== e.element[0] && e.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: s.top,
                    left: s.left
                })
            })
        },
        drag: function(e, i) {
            var s,
                n,
                o,
                a,
                r,
                h,
                l,
                c,
                u,
                d,
                p = t(this).data("ui-draggable"),
                f = p.options,
                g = f.snapTolerance,
                m = i.offset.left,
                v = m + p.helperProportions.width,
                _ = i.offset.top,
                b = _ + p.helperProportions.height;
            for (u = p.snapElements.length - 1; u >= 0; u--)
                r = p.snapElements[u].left, h = r + p.snapElements[u].width, l = p.snapElements[u].top, c = l + p.snapElements[u].height, r - g > v || m > h + g || l - g > b || _ > c + g || !t.contains(p.snapElements[u].item.ownerDocument, p.snapElements[u].item) ? (p.snapElements[u].snapping && p.options.snap.release && p.options.snap.release.call(p.element, e, t.extend(p._uiHash(), {
                    snapItem: p.snapElements[u].item
                })), p.snapElements[u].snapping = !1) : ("inner" !== f.snapMode && (s = g >= Math.abs(l - b), n = g >= Math.abs(c - _), o = g >= Math.abs(r - v), a = g >= Math.abs(h - m), s && (i.position.top = p._convertPositionTo("relative", {
                    top: l - p.helperProportions.height,
                    left: 0
                }).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top - p.margins.top), o && (i.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: r - p.helperProportions.width
                }).left - p.margins.left), a && (i.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left - p.margins.left)), d = s || n || o || a, "outer" !== f.snapMode && (s = g >= Math.abs(l - _), n = g >= Math.abs(c - b), o = g >= Math.abs(r - m), a = g >= Math.abs(h - v), s && (i.position.top = p._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
                    top: c - p.helperProportions.height,
                    left: 0
                }).top - p.margins.top), o && (i.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: r
                }).left - p.margins.left), a && (i.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: h - p.helperProportions.width
                }).left - p.margins.left)), !p.snapElements[u].snapping && (s || n || o || a || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, e, t.extend(p._uiHash(), {
                    snapItem: p.snapElements[u].item
                })), p.snapElements[u].snapping = s || n || o || a || d)
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function() {
            var e,
                i = this.data("ui-draggable").options,
                s = t.makeArray(t(i.stack)).sort(function(e, i) {
                    return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                });
            s.length && (e = parseInt(t(s[0]).css("zIndex"), 10) || 0, t(s).each(function(i) {
                t(this).css("zIndex", e + i)
            }), this.css("zIndex", e + s.length))
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i) {
            var s = t(i.helper),
                n = t(this).data("ui-draggable").options;
            s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
        },
        stop: function(e, i) {
            var s = t(this).data("ui-draggable").options;
            s._zIndex && t(i.helper).css("zIndex", s._zIndex)
        }
    })
}(jQuery), function(t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }
    t.widget("ui.droppable", {
        version: "1.10.3",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var e = this.options,
                i = e.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, t.ui.ddmanager.droppables[e.scope] = t.ui.ddmanager.droppables[e.scope] || [], t.ui.ddmanager.droppables[e.scope].push(this), e.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            for (var e = 0, i = t.ui.ddmanager.droppables[this.options.scope]; i.length > e; e++)
                i[e] === this && i.splice(e, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(e, i) {
            "accept" === e && (this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i)
            }), t.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
        },
        _drop: function(e, i) {
            var s = i || t.ui.ddmanager.current,
                n = !1;
            return !(!s || (s.currentItem || s.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                    var e = t.data(this, "ui-droppable");
                    return e.options.greedy && !e.options.disabled && e.options.scope === s.options.scope && e.accept.call(e.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(e, {
                        offset: e.element.offset()
                    }), e.options.tolerance) ? (n = !0, !1) : void 0
                }), !n && (!!this.accept.call(this.element[0], s.currentItem || s.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element)))
        },
        ui: function(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        }
    }), t.ui.intersect = function(t, i, s) {
        if (!i.offset)
            return !1;
        var n,
            o,
            a = (t.positionAbs || t.position.absolute).left,
            r = a + t.helperProportions.width,
            h = (t.positionAbs || t.position.absolute).top,
            l = h + t.helperProportions.height,
            c = i.offset.left,
            u = c + i.proportions.width,
            d = i.offset.top,
            p = d + i.proportions.height;
        switch (s) {
        case "fit":
            return a >= c && u >= r && h >= d && p >= l;
        case "intersect":
            return a + t.helperProportions.width / 2 > c && u > r - t.helperProportions.width / 2 && h + t.helperProportions.height / 2 > d && p > l - t.helperProportions.height / 2;
        case "pointer":
            return n = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left, o = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, e(o, d, i.proportions.height) && e(n, c, i.proportions.width);
        case "touch":
            return (h >= d && p >= h || l >= d && p >= l || d > h && l > p) && (a >= c && u >= a || r >= c && u >= r || c > a && r > u);
        default:
            return !1
        }
    }, t.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(e, i) {
            var s,
                n,
                o = t.ui.ddmanager.droppables[e.options.scope] || [],
                a = i ? i.type : null,
                r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t:
            for (s = 0; o.length > s; s++)
                if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
                    for (n = 0; r.length > n; n++)
                        if (r[n] === o[s].element[0]) {
                            o[s].proportions.height = 0;
                            continue t
                        }
                    o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions = {
                        width: o[s].element[0].offsetWidth,
                        height: o[s].element[0].offsetHeight
                    })
                }
        },
        drop: function(e, i) {
            var s = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), s
        },
        dragStart: function(e, i) {
            e.element.parentsUntil("body").bind("scroll.droppable", function() {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            })
        },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s,
                        n,
                        o,
                        a = t.ui.intersect(e, this, this.options.tolerance),
                        r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() {
                        return t.data(this, "ui-droppable").options.scope === n
                    }), o.length && (s = t.data(o[0], "ui-droppable"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                }
            })
        },
        dragStop: function(e, i) {
            e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    }
}(jQuery), function(t) {
    function e(t) {
        return parseInt(t, 10) || 0
    }
    function i(t) {
        return !isNaN(parseInt(t, 10))
    }
    t.widget("ui.resizable", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var e,
                i,
                s,
                n,
                o,
                a = this,
                r = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {
                _aspectRatio: !!r.aspectRatio,
                aspectRatio: r.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; e.length > i; i++)
                    s = t.trim(e[i]), o = "ui-resizable-" + s, n = t("<div class='ui-resizable-handle " + o + "'></div>"), n.css({
                        zIndex: r.zIndex
                    }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
            this._renderAxis = function(e) {
                var i,
                    s,
                    n,
                    o;
                e = e || this.element;
                for (i in this.handles)
                    this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), t(this.handles[i]).length
            }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                a.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = n && n[1] ? n[1] : "se")
            }), r.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                r.disabled || (t(this).removeClass("ui-resizable-autohide"), a._handles.show())
            }).mouseleave(function() {
                r.disabled || a.resizing || (t(this).addClass("ui-resizable-autohide"), a._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var e,
                i = function(e) {
                    t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function(e) {
            var i,
                s,
                n = !1;
            for (i in this.handles)
                s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function(i) {
            var s,
                n,
                o,
                a = this.options,
                r = this.element.position(),
                h = this.element;
            return this.resizing = !0, /absolute/.test(h.css("position")) ? h.css({
                position: "absolute",
                top: h.css("top"),
                left: h.css("left")
            }) : h.is(".ui-draggable") && h.css({
                position: "absolute",
                top: r.top,
                left: r.left
            }), this._renderProxy(), s = e(this.helper.css("left")), n = e(this.helper.css("top")), a.containment && (s += t(a.containment).scrollLeft() || 0, n += t(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: s,
                top: n
            }, this.size = this._helper ? {
                width: h.outerWidth(),
                height: h.outerHeight()
            } : {
                width: h.width(),
                height: h.height()
            }, this.originalSize = this._helper ? {
                width: h.outerWidth(),
                height: h.outerHeight()
            } : {
                width: h.width(),
                height: h.height()
            }, this.originalPosition = {
                left: s,
                top: n
            }, this.sizeDiff = {
                width: h.outerWidth() - h.width(),
                height: h.outerHeight() - h.height()
            }, this.originalMousePosition = {
                left: i.pageX,
                top: i.pageY
            }, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, o = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === o ? this.axis + "-resize" : o), h.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
        },
        _mouseDrag: function(e) {
            var i,
                s = this.helper,
                n = {},
                o = this.originalMousePosition,
                a = this.axis,
                r = this.position.top,
                h = this.position.left,
                l = this.size.width,
                c = this.size.height,
                u = e.pageX - o.left || 0,
                d = e.pageY - o.top || 0,
                p = this._change[a];
            return !!p && (i = p.apply(this, [e, u, d]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), this.position.top !== r && (n.top = this.position.top + "px"), this.position.left !== h && (n.left = this.position.left + "px"), this.size.width !== l && (n.width = this.size.width + "px"), this.size.height !== c && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || this._trigger("resize", e, this.ui()), !1)
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i,
                s,
                n,
                o,
                a,
                r,
                h,
                l = this.options,
                c = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && t.ui.hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = s ? 0 : c.sizeDiff.width, a = {
                width: c.helper.width() - o,
                height: c.helper.height() - n
            }, r = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, h = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(a, {
                top: h,
                left: r
            })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function(t) {
            var e,
                s,
                n,
                o,
                a,
                r = this.options;
            a = {
                minWidth: i(r.minWidth) ? r.minWidth : 0,
                maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0,
                minHeight: i(r.minHeight) ? r.minHeight : 0,
                maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = a.minHeight * this.aspectRatio, n = a.minWidth / this.aspectRatio, s = a.maxHeight * this.aspectRatio, o = a.maxWidth / this.aspectRatio, e > a.minWidth && (a.minWidth = e), n > a.minHeight && (a.minHeight = n), a.maxWidth > s && (a.maxWidth = s), a.maxHeight > o && (a.maxHeight = o)), this._vBoundaries = a
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(), i(t.left) && (this.position.left = t.left), i(t.top) && (this.position.top = t.top), i(t.height) && (this.size.height = t.height), i(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position,
                s = this.size,
                n = this.axis;
            return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (s.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (s.height - t.height), t.left = e.left + (s.width - t.width)), t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries,
                s = this.axis,
                n = i(t.width) && e.maxWidth && e.maxWidth < t.width,
                o = i(t.height) && e.maxHeight && e.maxHeight < t.height,
                a = i(t.width) && e.minWidth && e.minWidth > t.width,
                r = i(t.height) && e.minHeight && e.minHeight > t.height,
                h = this.originalPosition.left + this.originalSize.width,
                l = this.position.top + this.size.height,
                c = /sw|nw|w/.test(s),
                u = /nw|ne|n/.test(s);
            return a && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), o && (t.height = e.maxHeight), a && c && (t.left = h - e.minWidth), n && c && (t.left = h - e.maxWidth), r && u && (t.top = l - e.minHeight), o && u && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var t,
                    e,
                    i,
                    s,
                    n,
                    o = this.helper || this.element;
                for (t = 0; this._proportionallyResizeElements.length > t; t++) {
                    if (n = this._proportionallyResizeElements[t], !this.borderDif)
                        for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], e = 0; i.length > e; e++)
                            this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(s[e], 10) || 0);
                    n.css({
                        height: o.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: o.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function() {
            var e = this.element,
                i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize,
                    s = this.originalPosition;
                return {
                    left: s.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var s = this.originalSize,
                    n = this.originalPosition;
                return {
                    top: n.top + i,
                    height: s.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            sw: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            },
            ne: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            nw: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).data("ui-resizable"),
                s = i.options,
                n = i._proportionallyResizeElements,
                o = n.length && /textarea/i.test(n[0].nodeName),
                a = o && t.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                r = o ? 0 : i.sizeDiff.width,
                h = {
                    width: i.size.width - r,
                    height: i.size.height - a
                },
                l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(h, c && l ? {
                top: c,
                left: l
            } : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function() {
                    var s = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    n && n.length && t(n[0]).css({
                        width: s.width,
                        height: s.height
                    }), i._updateCache(s), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var i,
                s,
                n,
                o,
                a,
                r,
                h,
                l = t(this).data("ui-resizable"),
                c = l.options,
                u = l.element,
                d = c.containment,
                p = d instanceof t ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
            p && (l.containerElement = t(p), /document/.test(d) || d === document ? (l.containerOffset = {
                left: 0,
                top: 0
            }, l.containerPosition = {
                left: 0,
                top: 0
            }, l.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (i = t(p), s = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, n) {
                s[t] = e(i.css("padding" + n))
            }), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {
                height: i.innerHeight() - s[3],
                width: i.innerWidth() - s[1]
            }, n = l.containerOffset, o = l.containerSize.height, a = l.containerSize.width, r = t.ui.hasScroll(p, "left") ? p.scrollWidth : a, h = t.ui.hasScroll(p) ? p.scrollHeight : o, l.parentData = {
                element: p,
                left: n.left,
                top: n.top,
                width: r,
                height: h
            }))
        },
        resize: function(e) {
            var i,
                s,
                n,
                o,
                a = t(this).data("ui-resizable"),
                r = a.options,
                h = a.containerOffset,
                l = a.position,
                c = a._aspectRatio || e.shiftKey,
                u = {
                    top: 0,
                    left: 0
                },
                d = a.containerElement;
            d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio), a.position.left = r.helper ? h.left : 0), l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio), a.position.top = a._helper ? h.top : 0), a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top, i = Math.abs((a._helper ? a.offset.left - u.left : a.offset.left - u.left) + a.sizeDiff.width), s = Math.abs((a._helper ? a.offset.top - u.top : a.offset.top - h.top) + a.sizeDiff.height), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o && (i -= a.parentData.left), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio))
        },
        stop: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                s = e.containerOffset,
                n = e.containerPosition,
                o = e.containerElement,
                a = t(e.helper),
                r = a.offset(),
                h = a.outerWidth() - e.sizeDiff.width,
                l = a.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            })
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                s = function(e) {
                    t(e).each(function() {
                        var e = t(this);
                        e.data("ui-resizable-alsoresize", {
                            width: parseInt(e.width(), 10),
                            height: parseInt(e.height(), 10),
                            left: parseInt(e.css("left"), 10),
                            top: parseInt(e.css("top"), 10)
                        })
                    })
                };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : t.each(i.alsoResize, function(t) {
                s(t)
            })
        },
        resize: function(e, i) {
            var s = t(this).data("ui-resizable"),
                n = s.options,
                o = s.originalSize,
                a = s.originalPosition,
                r = {
                    height: s.size.height - o.height || 0,
                    width: s.size.width - o.width || 0,
                    top: s.position.top - a.top || 0,
                    left: s.position.left - a.left || 0
                },
                h = function(e, s) {
                    t(e).each(function() {
                        var e = t(this),
                            n = t(this).data("ui-resizable-alsoresize"),
                            o = {},
                            a = s && s.length ? s : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        t.each(a, function(t, e) {
                            var i = (n[e] || 0) + (r[e] || 0);
                            i && i >= 0 && (o[e] = i || null)
                        }), e.css(o)
                    })
                };
            "object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : t.each(n.alsoResize, function(t, e) {
                h(t, e)
            })
        },
        stop: function() {
            t(this).removeData("resizable-alsoresize")
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                s = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
        },
        resize: function() {
            var e = t(this).data("ui-resizable");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function() {
            var e = t(this).data("ui-resizable");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                s = e.size,
                n = e.originalSize,
                o = e.originalPosition,
                a = e.axis,
                r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                h = r[0] || 1,
                l = r[1] || 1,
                c = Math.round((s.width - n.width) / h) * h,
                u = Math.round((s.height - n.height) / l) * l,
                d = n.width + c,
                p = n.height + u,
                f = i.maxWidth && d > i.maxWidth,
                g = i.maxHeight && p > i.maxHeight,
                m = i.minWidth && i.minWidth > d,
                v = i.minHeight && i.minHeight > p;
            i.grid = r, m && (d += h), v && (p += l), f && (d -= h), g && (p -= l), /^(se|s|e)$/.test(a) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(a) ? (e.size.width = d, e.size.height = p, e.position.top = o.top - u) : /^(sw)$/.test(a) ? (e.size.width = d, e.size.height = p, e.position.left = o.left - c) : (e.size.width = d, e.size.height = p, e.position.top = o.top - u, e.position.left = o.left - c)
        }
    })
}(jQuery), function(t) {
    t.widget("ui.selectable", t.ui.mouse, {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var e,
                i = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                e = t(i.options.filter, i.element[0]), e.addClass("ui-selectee"), e.each(function() {
                    var e = t(this),
                        i = e.offset();
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: e,
                        left: i.left,
                        top: i.top,
                        right: i.left + e.outerWidth(),
                        bottom: i.top + e.outerHeight(),
                        startselected: !1,
                        selected: e.hasClass("ui-selected"),
                        selecting: e.hasClass("ui-selecting"),
                        unselecting: e.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function(e) {
            var i = this,
                s = this.options;
            this.opos = [e.pageX, e.pageY], this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var s = t.data(this, "selectable-item");
                s.startselected = !0, e.metaKey || e.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
                    unselecting: s.element
                }))
            }), t(e.target).parents().addBack().each(function() {
                var s,
                    n = t.data(this, "selectable-item");
                return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
                    selecting: n.element
                }) : i._trigger("unselecting", e, {
                    unselecting: n.element
                }), !1) : void 0
            }))
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i,
                    s = this,
                    n = this.options,
                    o = this.opos[0],
                    a = this.opos[1],
                    r = e.pageX,
                    h = e.pageY;
                return o > r && (i = r, r = o, o = i), a > h && (i = h, h = a, a = i), this.helper.css({
                    left: o,
                    top: a,
                    width: r - o,
                    height: h - a
                }), this.selectees.each(function() {
                    var i = t.data(this, "selectable-item"),
                        l = !1;
                    i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || o > i.right || i.top > h || a > i.bottom) : "fit" === n.tolerance && (l = i.left > o && r > i.right && i.top > a && h > i.bottom), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
                        selecting: i.element
                    }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
                        unselecting: i.element
                    }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
                        unselecting: i.element
                    })))))
                }), !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1,
            t(".ui-unselecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
                    unselected: s.element
                })
            }), t(".ui-selecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
                    selected: s.element
                })
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    })
}(jQuery), function(t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }
    function i(t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    }
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = !!this.items.length && ("x" === t.axis || i(this.items[0].item)), this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--)
                this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(e, i) {
            var s = null,
                n = !1,
                o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function() {
                    return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0
                }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), !!s && (!(this.options.handle && !i && (t(this.options.handle, s).find("*").addBack().each(function() {
                    this === e.target && (n = !0)
                }), !n)) && (this.currentItem = s, this._removeCurrentsFromItems(), !0))))
        },
        _mouseStart: function(e, i, s) {
            var n,
                o,
                a = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                for (n = this.containers.length - 1; n >= 0; n--)
                    this.containers[n]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            var i,
                s,
                n,
                o,
                a = this.options,
                r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - t(document).scrollTop() < a.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - a.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < a.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + a.scrollSpeed)), e.pageX - t(document).scrollLeft() < a.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - a.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < a.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], n))) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s))
                        break;
                    this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this,
                        n = this.placeholder.offset(),
                        o = this.options.axis,
                        a = {};
                    o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                        s._clear(e)
                    })
                } else
                    this._clear(e, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--)
                    this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !s.length && e.key && s.push(e.key + "="), s.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, i.each(function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), s
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                s = this.positionAbs.top,
                n = s + this.helperProportions.height,
                o = t.left,
                a = o + t.width,
                r = t.top,
                h = r + t.height,
                l = this.offset.click.top,
                c = this.offset.click.left,
                u = "x" === this.options.axis || s + l > r && h > s + l,
                d = "y" === this.options.axis || e + c > o && a > e + c,
                p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(t) {
            var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                n = i && s,
                o = this._getDragVerticalDirection(),
                a = this._getDragHorizontalDirection();
            return !!n && (this.floating ? a && "right" === a || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1))
        },
        _intersectsWithSides: function(t) {
            var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                n = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && s || "left" === o && !s : n && ("down" === n && i || "up" === n && !i)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t), this.refreshPositions(), this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            var i,
                s,
                n,
                o,
                a = [],
                r = [],
                h = this._connectWith();
            if (h && e)
                for (i = h.length - 1; i >= 0; i--)
                    for (n = t(h[i]), s = n.length - 1; s >= 0; s--)
                        o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && r.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
            for (r.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = r.length - 1; i >= 0; i--)
                r[i][0].each(function() {
                    a.push(this)
                });
            return t(a)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; e.length > i; i++)
                    if (e[i] === t.item[0])
                        return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var i,
                s,
                n,
                o,
                a,
                r,
                h,
                l,
                c = this.items,
                u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                    item: this.currentItem
                }) : t(this.options.items, this.element), this]],
                d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (n = t(d[i]), s = n.length - 1; s >= 0; s--)
                        o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                            item: this.currentItem
                        }) : t(o.options.items, o.element), o]), this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--)
                for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++)
                    h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({
                        item: h,
                        instance: a,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
        },
        refreshPositions: function(e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i,
                s,
                n,
                o;
            for (i = this.items.length - 1; i >= 0; i--)
                s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--)
                    o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var i,
                s = e.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function() {
                    var s = e.currentItem[0].nodeName.toLowerCase(),
                        n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === s ? e.currentItem.children().each(function() {
                        t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n)
                    }) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                },
                update: function(t, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
        },
        _contactContainers: function(s) {
            var n,
                o,
                a,
                r,
                h,
                l,
                c,
                u,
                d,
                p,
                f = null,
                g = null;
            for (n = this.containers.length - 1; n >= 0; n--)
                if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
                    if (this._intersectsWith(this.containers[n].containerCache)) {
                        if (f && t.contains(this.containers[n].element[0], f.element[0]))
                            continue;
                        f = this.containers[n], g = n
                    } else
                        this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)), this.containers[n].containerCache.over = 0);
            if (f)
                if (1 === this.containers.length)
                    this.containers[g].containerCache.over || (this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1);
                else {
                    for (a = 1e4, r = null, p = f.floating || i(this.currentItem), h = p ? "left" : "top", l = p ? "width" : "height", c = this.positionAbs[h] + this.offset.click[h], o = this.items.length - 1; o >= 0; o--)
                        t.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (u = this.items[o].item.offset()[h], d = !1, Math.abs(u - c) > Math.abs(u + this.items[o][l] - c) && (d = !0, u += this.items[o][l]), a > Math.abs(u - c) && (a = Math.abs(u - c), r = this.items[o], this.direction = d ? "up" : "down"));
                    if (!r && !this.options.dropOnEmpty)
                        return;
                    if (this.currentContainer === this.containers[g])
                        return;
                    r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[g].element, !0), this._trigger("change", s, this._uiHash()), this.containers[g]._trigger("change", s, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e,
                i,
                s,
                n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function(e) {
            var i,
                s,
                n = this.options,
                o = e.pageX,
                a = e.pageY,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                h = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function() {
                n === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function(t, e) {
            this.reverting = !1;
            var i,
                s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)
                    ("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else
                this.currentItem.show();
            for (this.fromOutside && !e && s.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
                this._trigger("update", t, this._uiHash())
            }), this !== this.currentContainer && (e || (s.push(function(t) {
                this._trigger("remove", t, this._uiHash())
            }), s.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), s.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--)
                e || s.push(function(t) {
                    return function(e) {
                        t._trigger("deactivate", e, this._uiHash(this))
                    }
                }.call(this, this.containers[i])), this.containers[i].containerCache.over && (s.push(function(t) {
                    return function(e) {
                        t._trigger("out", e, this._uiHash(this))
                    }
                }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!e) {
                    for (this._trigger("beforeStop", t, this._uiHash()), i = 0; s.length > i; i++)
                        s[i].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
                for (i = 0; s.length > i; i++)
                    s[i].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    })
}(jQuery), function(t) {
    var e = 0,
        i = {},
        s = {};
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", s.height = s.paddingTop = s.paddingBottom = s.borderTopWidth = s.borderBottomWidth = "show", t.widget("ui.accordion", {
        version: "1.10.3",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : t(),
                content: this.active.length ? this.active.next() : t()
            }
        },
        _createIcons: function() {
            var e = this.options.icons;
            e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var t;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function(t, e) {
            return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void ("disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e)))
        },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode,
                    s = this.headers.length,
                    n = this.headers.index(e.target),
                    o = !1;
                switch (e.keyCode) {
                case i.RIGHT:
                case i.DOWN:
                    o = this.headers[(n + 1) % s];
                    break;
                case i.LEFT:
                case i.UP:
                    o = this.headers[(n - 1 + s) % s];
                    break;
                case i.SPACE:
                case i.ENTER:
                    this._eventHandler(e);
                    break;
                case i.HOME:
                    o = this.headers[0];
                    break;
                case i.END:
                    o = this.headers[s - 1]
                }
                o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), o.focus(), e.preventDefault())
            }
        },
        _panelKeyDown: function(e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
        },
        refresh: function() {
            var e = this.options;
            this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function() {
            var i,
                s = this.options,
                n = s.heightStyle,
                o = this.element.parent(),
                a = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++e);
            this.active = this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function(e) {
                var i = t(this),
                    s = i.attr("id"),
                    n = i.next(),
                    o = n.attr("id");
                s || (s = a + "-header-" + e, i.attr("id", s)), o || (o = a + "-panel-" + e, n.attr("id", o)), i.attr("aria-controls", o), n.attr("aria-labelledby", s)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }).next().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                tabIndex: 0
            }).next().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(s.event), "fill" === n ? (i = o.height(), this.element.siblings(":visible").each(function() {
                var e = t(this),
                    s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }), this.headers.each(function() {
                i -= t(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === n && (i = 0, this.headers.next().each(function() {
                i = Math.max(i, t(this).css("height", "").height())
            }).height(i))
        },
        _activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return "number" == typeof e ? this.headers.eq(e) : t()
        },
        _setupEvents: function(e) {
            var i = {
                keydown: "_keydown"
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(e) {
            var i = this.options,
                s = this.active,
                n = t(e.currentTarget),
                o = n[0] === s[0],
                a = o && i.collapsible,
                r = a ? t() : n.next(),
                h = s.next(),
                l = {
                    oldHeader: s,
                    oldPanel: h,
                    newHeader: a ? t() : n,
                    newPanel: r
                };
            e.preventDefault(), o && !i.collapsible || this._trigger("beforeActivate", e, l) === !1 || (i.active = !a && this.headers.index(n), this.active = o ? t() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), o || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function(e) {
            var i = e.newPanel,
                s = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), s.prev().attr("aria-selected", "false"), i.length && s.length ? s.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), i.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }).prev().attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _animate: function(t, e, n) {
            var o,
                a,
                r,
                h = this,
                l = 0,
                c = t.length && (!e.length || t.index() < e.index()),
                u = this.options.animate || {},
                d = c && u.down || u,
                p = function() {
                    h._toggleComplete(n)
                };
            return "number" == typeof d && (r = d), "string" == typeof d && (a = d), a = a || d.easing || u.easing, r = r || d.duration || u.duration, e.length ? t.length ? (o = t.show().outerHeight(), e.animate(i, {
                duration: r,
                easing: a,
                step: function(t, e) {
                    e.now = Math.round(t)
                }
            }), void t.hide().animate(s, {
                duration: r,
                easing: a,
                complete: p,
                step: function(t, i) {
                    i.now = Math.round(t), "height" !== i.prop ? l += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(o - e.outerHeight() - l), l = 0)
                }
            })) : e.animate(i, r, a, p) : t.animate(s, r, a, p)
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel;
            e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
        }
    })
}(jQuery), function(t) {
    var e = 0;
    t.widget("ui.autocomplete", {
        version: "1.10.3",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        pending: 0,
        _create: function() {
            var e,
                i,
                s,
                n = this.element[0].nodeName.toLowerCase(),
                o = "textarea" === n,
                a = "input" === n;
            this.isMultiLine = !!o || !a && this.element.prop("isContentEditable"), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly"))
                        return e = !0, s = !0, void (i = !0);
                    e = !1, s = !1, i = !1;
                    var o = t.ui.keyCode;
                    switch (n.keyCode) {
                    case o.PAGE_UP:
                        e = !0, this._move("previousPage", n);
                        break;
                    case o.PAGE_DOWN:
                        e = !0, this._move("nextPage", n);
                        break;
                    case o.UP:
                        e = !0, this._keyEvent("previous", n);
                        break;
                    case o.DOWN:
                        e = !0, this._keyEvent("next", n);
                        break;
                    case o.ENTER:
                    case o.NUMPAD_ENTER:
                        this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
                        break;
                    case o.TAB:
                        this.menu.active && this.menu.select(n);
                        break;
                    case o.ESCAPE:
                        this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
                        break;
                    default:
                        i = !0, this._searchTimeout(n)
                    }
                },
                keypress: function(s) {
                    if (e)
                        return e = !1, void ((!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault());
                    if (!i) {
                        var n = t.ui.keyCode;
                        switch (s.keyCode) {
                        case n.PAGE_UP:
                            this._move("previousPage", s);
                            break;
                        case n.PAGE_DOWN:
                            this._move("nextPage", s);
                            break;
                        case n.UP:
                            this._keyEvent("previous", s);
                            break;
                        case n.DOWN:
                            this._keyEvent("next", s)
                        }
                    }
                },
                input: function(t) {
                    return s ? (s = !1, void t.preventDefault()) : void this._searchTimeout(t)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                }
            }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().data("ui-menu"), this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    t(e.target).closest(".ui-menu-item").length || this._delay(function() {
                        var e = this;
                        this.document.one("mousedown", function(s) {
                            s.target === e.element[0] || s.target === i || t.contains(i, s.target) || e.close()
                        })
                    })
                },
                menufocus: function(e, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)))
                        return this.menu.blur(), void this.document.one("mousemove", function() {
                            t(e.target).trigger(e.originalEvent)
                        });
                    var s = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", e, {
                        item: s
                    }) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
                },
                menuselect: function(t, e) {
                    var i = e.item.data("ui-autocomplete-item"),
                        s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function() {
                        this.previous = s, this.selectedItem = i
                    })), !1 !== this._trigger("select", t, {
                        item: i
                    }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                }
            }), this.liveRegion = t("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
        },
        _initSource: function() {
            var e,
                i,
                s = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
                s(t.ui.autocomplete.filter(e, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
                s.xhr && s.xhr.abort(), s.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(t) {
                        n(t)
                    },
                    error: function() {
                        n([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        },
        search: function(t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
        },
        _search: function(t) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: t
            }, this._response())
        },
        _response: function() {
            var t = this,
                i = ++e;
            return function(s) {
                i === e && t.__response(s), t.pending--, t.pending || t.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function(t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {
                content: t
            }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        },
        close: function(t) {
            this.cancelSearch = !0, this._close(t)
        },
        _close: function(t) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        },
        _change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({
                    label: e.label || e.value,
                    value: e.value || e.label
                }, e)
            })
        },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(e, i) {
            var s = this;
            t.each(i, function(t, i) {
                s._renderItemData(e, i)
            })
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function(e, i) {
            return t("<li>").append(t("<a>").text(i.label)).appendTo(e)
        },
        _move: function(t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(e, i) {
            var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function(t) {
                return s.test(t.label || t.value || t)
            })
        }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(t) {
            var e;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e))
        }
    })
}(jQuery), function(t) {
    var e,
        i,
        s,
        n,
        o = "ui-button ui-widget ui-state-default ui-corner-all",
        a = "ui-state-hover ui-state-active ",
        r = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        h = function() {
            var e = t(this);
            setTimeout(function() {
                e.find(":ui-button").button("refresh")
            }, 1)
        },
        l = function(e) {
            var i = e.name,
                s = e.form,
                n = t([]);
            return i && (i = i.replace(/'/g, "\\'"), n = s ? t(s).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function() {
                return !this.form
            })), n
        };
    t.widget("ui.button", {
        version: "1.10.3",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, h), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var a = this,
                r = this.options,
                c = "checkbox" === this.type || "radio" === this.type,
                u = c ? "" : "ui-state-active",
                d = "ui-state-focus";
            null === r.label && (r.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                r.disabled || this === e && t(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                r.disabled || t(this).removeClass(u)
            }).bind("click" + this.eventNamespace, function(t) {
                r.disabled && (t.preventDefault(), t.stopImmediatePropagation())
            }), this.element.bind("focus" + this.eventNamespace, function() {
                a.buttonElement.addClass(d)
            }).bind("blur" + this.eventNamespace, function() {
                a.buttonElement.removeClass(d)
            }), c && (this.element.bind("change" + this.eventNamespace, function() {
                n || a.refresh()
            }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(t) {
                r.disabled || (n = !1, i = t.pageX, s = t.pageY)
            }).bind("mouseup" + this.eventNamespace, function(t) {
                r.disabled || (i !== t.pageX || s !== t.pageY) && (n = !0)
            })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                return !r.disabled && !n && void 0
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (r.disabled || n)
                    return !1;
                t(this).addClass("ui-state-active"), a.buttonElement.attr("aria-pressed", "true");
                var e = a.element[0];
                l(e).not(e).map(function() {
                    return t(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                return !r.disabled && (t(this).addClass("ui-state-active"), e = this, void a.document.one("mouseup", function() {
                        e = null
                    }))
            }).bind("mouseup" + this.eventNamespace, function() {
                return !r.disabled && void t(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function(e) {
                return !r.disabled && void ((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"))
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                t(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
                e.keyCode === t.ui.keyCode.SPACE && t(this).click()
            })), this._setOption("disabled", r.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            var t,
                e,
                i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(o + " " + a + " " + r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(t, e) {
            return this._super(t, e), "disabled" === t ? void (e ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1)) : void this._resetButton()
        },
        refresh: function() {
            var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? l(this.element[0]).each(function() {
                t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type)
                return void (this.options.label && this.element.val(this.options.label));
            var e = this.buttonElement.removeClass(r),
                i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                s = this.options.icons,
                n = s.primary && s.secondary,
                o = [];
            s.primary || s.secondary ? (this.options.text && o.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (o.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : o.push("ui-button-text-only"), e.addClass(o.join(" "))
        }
    }), t.widget("ui.buttonset", {
        version: "1.10.3",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(t, e) {
            "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
        },
        refresh: function() {
            var e = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}(jQuery), function(t, e) {
    function i() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, t.extend(this._defaults, this.regional[""]), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    function s(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(i, "mouseout", function() {
            t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", function() {
            t.datepicker._isDisabledDatepicker(o.inline ? e.parent()[0] : o.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
        })
    }
    function n(e, i) {
        t.extend(e, i);
        for (var s in i)
            null == i[s] && (e[s] = i[s]);
        return e
    }
    t.extend(t.ui, {
        datepicker: {
            version: "1.10.3"
        }
    });
    var o,
        a = "datepicker";
    t.extend(i.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(t) {
            return n(this._defaults, t || {}), this
        },
        _attachDatepicker: function(e, i) {
            var s,
                n,
                o;
            s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
        },
        _newInst: function(e, i) {
            var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: n,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(e, i) {
            var s = t(e);
            i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, a, i), i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, i) {
            var s,
                n,
                o,
                a = this._get(i, "appendText"),
                r = this._get(i, "isRTL");
            i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: o,
                alt: n,
                title: n
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                src: o,
                alt: n,
                title: n
            }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.click(function() {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
            }))
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e,
                    i,
                    s,
                    n,
                    o = new Date(2009, 11, 20),
                    a = this._get(t, "dateFormat");
                a.match(/[DM]/) && (e = function(t) {
                    for (i = 0, s = 0, n = 0; t.length > n; n++)
                        t[n].length > i && (i = t[n].length, s = n);
                    return s
                }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
            }
        },
        _inlineDatepicker: function(e, i) {
            var s = t(e);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, a, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, i, s, o, r) {
            var h,
                l,
                c,
                u,
                d,
                p = this._dialogInst;
            return p || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, t.data(this._dialogInput[0], a, p)), n(p.settings, o || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null, this._pos || (l = document.documentElement.clientWidth, c = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + u, c / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], a, p), this
        },
        _destroyDatepicker: function(e) {
            var i,
                s = t(e),
                n = t.data(e, a);
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, a), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(e) {
            var i,
                s,
                n = t(e),
                o = t.data(e, a);
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function(e) {
            var i,
                s,
                n = t(e),
                o = t.data(e, a);
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(t) {
            if (!t)
                return !1;
            for (var e = 0; this._disabledInputs.length > e; e++)
                if (this._disabledInputs[e] === t)
                    return !0;
            return !1
        },
        _getInst: function(e) {
            try {
                return t.data(e, a)
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(i, s, o) {
            var a,
                r,
                h,
                l,
                c = this._getInst(i);
            return 2 === arguments.length && "string" == typeof s ? "defaults" === s ? t.extend({}, t.datepicker._defaults) : c ? "all" === s ? t.extend({}, c.settings) : this._get(c, s) : null : (a = s || {}, "string" == typeof s && (a = {}, a[s] = o), c && (this._curInst === c && this._hideDatepicker(), r = this._getDateDatepicker(i, !0), h = this._getMinMaxDate(c, "min"), l = this._getMinMaxDate(c, "max"), n(c.settings, a), null !== h && a.dateFormat !== e && a.minDate === e && (c.settings.minDate = this._formatDate(c, h)), null !== l && a.dateFormat !== e && a.maxDate === e && (c.settings.maxDate = this._formatDate(c, l)), "disabled" in a && (a.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(t(i), c), this._autoSize(c), this._setDate(c, r), this._updateAlternate(c), this._updateDatepicker(c)), e)
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        },
        _doKeyDown: function(e) {
            var i,
                s,
                n,
                o = t.datepicker._getInst(e.target),
                a = !0,
                r = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0, t.datepicker._datepickerShowing)
                switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), a = !1;
                    break;
                case 13:
                    return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
                    break;
                default:
                    a = !1
                }
            else
                36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
            a && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(i) {
            var s,
                n,
                o = t.datepicker._getInst(i.target);
            return t.datepicker._get(o, "constrainInput") ? (s = t.datepicker._possibleChars(t.datepicker._get(o, "dateFormat")), n = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > n || !s || s.indexOf(n) > -1) : e
        },
        _doKeyUp: function(e) {
            var i,
                s = t.datepicker._getInst(e.target);
            if (s.input.val() !== s.lastVal)
                try {
                    i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
                } catch (n) {}
            return !0
        },
        _showDatepicker: function(e) {
            if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var i,
                    s,
                    o,
                    a,
                    r,
                    h,
                    l;
                i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(i, "beforeShow"), o = s ? s.apply(e, [e, i]) : {}, o !== !1 && (n(i.settings, o), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), a = !1, t(e).parents().each(function() {
                    return a |= "fixed" === t(this).css("position"), !a
                }), r = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), t.datepicker._updateDatepicker(i), r = t.datepicker._checkOffset(i, r, a), i.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : a ? "fixed" : "absolute",
                    display: "none",
                    left: r.left + "px",
                    top: r.top + "px"
                }), i.inline || (h = t.datepicker._get(i, "showAnim"), l = t.datepicker._get(i, "duration"), i.dpDiv.zIndex(t(e).zIndex() + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? i.dpDiv.show(h, t.datepicker._get(i, "showOptions"), l) : i.dpDiv[h || "show"](h ? l : null), t.datepicker._shouldFocusInput(i) && i.input.focus(), t.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4, o = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var i,
                s = this._getNumberOfMonths(e),
                n = s[1],
                a = 17;
            e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function(e, i, s) {
            var n = e.dpDiv.outerWidth(),
                o = e.dpDiv.outerHeight(),
                a = e.input ? e.input.outerWidth() : 0,
                r = e.input ? e.input.outerHeight() : 0,
                h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
                l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0), i
        },
        _findPos: function(e) {
            for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));)
                e = e[n ? "previousSibling" : "nextSibling"];
            return i = t(e).offset(), [i.left, i.top]
        },
        _hideDatepicker: function(e) {
            var i,
                s,
                n,
                o,
                r = this._curInst;
            !r || e && r !== t.data(e, a) || this._datepickerShowing && (i = this._get(r, "showAnim"), s = this._get(r, "duration"), n = function() {
                t.datepicker._tidyDialog(r)
            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), s, n) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(r, "onClose"), o && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target),
                    s = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker();
            }
        },
        _adjustDate: function(e, i, s) {
            var n = t(e),
                o = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o))
        },
        _gotoToday: function(e) {
            var i,
                s = t(e),
                n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
        },
        _selectMonthYear: function(e, i, s) {
            var n = t(e),
                o = this._getInst(n[0]);
            o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n)
        },
        _selectDay: function(e, i, s, n) {
            var o,
                a = t(e);
            t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function(e, i) {
            var s,
                n = t(e),
                o = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var i,
                s,
                n,
                o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).each(function() {
                t(this).val(n)
            }))
        },
        noWeekends: function(t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""]
        },
        iso8601Week: function(t) {
            var e,
                i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function(i, s, n) {
            if (null == i || null == s)
                throw "Invalid arguments";
            if (s = "object" == typeof s ? "" + s : s + "", "" === s)
                return null;
            var o,
                a,
                r,
                h,
                l = 0,
                c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                u = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10),
                d = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                p = (n ? n.dayNames : null) || this._defaults.dayNames,
                f = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                g = (n ? n.monthNames : null) || this._defaults.monthNames,
                m = -1,
                v = -1,
                _ = -1,
                b = -1,
                y = !1,
                w = function(t) {
                    var e = i.length > o + 1 && i.charAt(o + 1) === t;
                    return e && o++, e
                },
                k = function(t) {
                    var e = w(t),
                        i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        n = RegExp("^\\d{1," + i + "}"),
                        o = s.substring(l).match(n);
                    if (!o)
                        throw "Missing number at position " + l;
                    return l += o[0].length, parseInt(o[0], 10)
                },
                x = function(i, n, o) {
                    var a = -1,
                        r = t.map(w(i) ? o : n, function(t, e) {
                            return [[e, t]]
                        }).sort(function(t, e) {
                            return -(t[1].length - e[1].length)
                        });
                    if (t.each(r, function(t, i) {
                        var n = i[1];
                        return s.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (a = i[0], l += n.length, !1) : e
                    }), -1 !== a)
                        return a + 1;
                    throw "Unknown name at position " + l
                },
                D = function() {
                    if (s.charAt(l) !== i.charAt(o))
                        throw "Unexpected literal at position " + l;
                    l++
                };
            for (o = 0; i.length > o; o++)
                if (y)
                    "'" !== i.charAt(o) || w("'") ? D() : y = !1;
                else
                    switch (i.charAt(o)) {
                    case "d":
                        _ = k("d");
                        break;
                    case "D":
                        x("D", d, p);
                        break;
                    case "o":
                        b = k("o");
                        break;
                    case "m":
                        v = k("m");
                        break;
                    case "M":
                        v = x("M", f, g);
                        break;
                    case "y":
                        m = k("y");
                        break;
                    case "@":
                        h = new Date(k("@")), m = h.getFullYear(), v = h.getMonth() + 1, _ = h.getDate();
                        break;
                    case "!":
                        h = new Date((k("!") - this._ticksTo1970) / 1e4), m = h.getFullYear(), v = h.getMonth() + 1, _ = h.getDate();
                        break;
                    case "'":
                        w("'") ? D() : y = !0;
                        break;
                    default:
                        D()
                    }
            if (s.length > l && (r = s.substr(l), !/^\s+/.test(r)))
                throw "Extra/unparsed characters found in date: " + r;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), b > -1)
                for (v = 1, _ = b; a = this._getDaysInMonth(m, v - 1), !(a >= _);)
                    v++, _ -= a;
            if (h = this._daylightSavingAdjust(new Date(m, v - 1, _)), h.getFullYear() !== m || h.getMonth() + 1 !== v || h.getDate() !== _)
                throw "Invalid date";
            return h
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(t, e, i) {
            if (!e)
                return "";
            var s,
                n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                o = (i ? i.dayNames : null) || this._defaults.dayNames,
                a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (i ? i.monthNames : null) || this._defaults.monthNames,
                h = function(e) {
                    var i = t.length > s + 1 && t.charAt(s + 1) === e;
                    return i && s++, i
                },
                l = function(t, e, i) {
                    var s = "" + e;
                    if (h(t))
                        for (; i > s.length;)
                            s = "0" + s;
                    return s
                },
                c = function(t, e, i, s) {
                    return h(t) ? s[e] : i[e]
                },
                u = "",
                d = !1;
            if (e)
                for (s = 0; t.length > s; s++)
                    if (d)
                        "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
                    else
                        switch (t.charAt(s)) {
                        case "d":
                            u += l("d", e.getDate(), 2);
                            break;
                        case "D":
                            u += c("D", e.getDay(), n, o);
                            break;
                        case "o":
                            u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += l("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += c("M", e.getMonth(), a, r);
                            break;
                        case "y":
                            u += h("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100;
                            break;
                        case "@":
                            u += e.getTime();
                            break;
                        case "!":
                            u += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            h("'") ? u += "'" : d = !0;
                            break;
                        default:
                            u += t.charAt(s)
                        }
            return u
        },
        _possibleChars: function(t) {
            var e,
                i = "",
                s = !1,
                n = function(i) {
                    var s = t.length > e + 1 && t.charAt(e + 1) === i;
                    return s && e++, s
                };
            for (e = 0; t.length > e; e++)
                if (s)
                    "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
                else
                    switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        n("'") ? i += "'" : s = !0;
                        break;
                    default:
                        i += t.charAt(e)
                    }
            return i
        },
        _get: function(t, i) {
            return t.settings[i] !== e ? t.settings[i] : this._defaults[i]
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"),
                    s = t.lastVal = t.input ? t.input.val() : null,
                    n = this._getDefaultDate(t),
                    o = n,
                    a = this._getFormatConfig(t);
                try {
                    o = this.parseDate(i, s, a) || n
                } catch (r) {
                    s = e ? "" : s
                }
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function(e, i, s) {
            var n = function(t) {
                    var e = new Date;
                    return e.setDate(e.getDate() + t), e
                },
                o = function(i) {
                    try {
                        return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                    } catch (s) {}
                    for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
                        switch (l[2] || "d") {
                        case "d":
                        case "D":
                            r += parseInt(l[1], 10);
                            break;
                        case "w":
                        case "W":
                            r += 7 * parseInt(l[1], 10);
                            break;
                        case "m":
                        case "M":
                            a += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
                            break;
                        case "y":
                        case "Y":
                            o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a))
                        }
                        l = h.exec(i)
                    }
                    return new Date(o, a, r)
                },
                a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
            return a = a && "Invalid Date" == "" + a ? s : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function(t, e, i) {
            var s = !e,
                n = t.selectedMonth,
                o = t.selectedYear,
                a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function(t) {
            var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return e
        },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths"),
                s = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = {
                    prev: function() {
                        t.datepicker._adjustDate(s, -i, "M")
                    },
                    next: function() {
                        t.datepicker._adjustDate(s, +i, "M")
                    },
                    hide: function() {
                        t.datepicker._hideDatepicker()
                    },
                    today: function() {
                        t.datepicker._gotoToday(s)
                    },
                    selectDay: function() {
                        return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return t.datepicker._selectMonthYear(s, this, "M"), !1
                    },
                    selectYear: function() {
                        return t.datepicker._selectMonthYear(s, this, "Y"), !1
                    }
                };
                t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var e,
                i,
                s,
                n,
                o,
                a,
                r,
                h,
                l,
                c,
                u,
                d,
                p,
                f,
                g,
                m,
                v,
                _,
                b,
                y,
                w,
                k,
                x,
                D,
                C,
                I,
                P,
                T,
                M,
                S,
                z,
                A,
                H,
                W,
                E,
                N,
                O,
                F,
                R,
                L = new Date,
                j = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
                Y = this._get(t, "isRTL"),
                B = this._get(t, "showButtonPanel"),
                K = this._get(t, "hideIfNoPrevNext"),
                U = this._get(t, "navigationAsDateFormat"),
                q = this._getNumberOfMonths(t),
                V = this._get(t, "showCurrentAtPos"),
                Q = this._get(t, "stepMonths"),
                X = 1 !== q[0] || 1 !== q[1],
                $ = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                G = this._getMinMaxDate(t, "min"),
                J = this._getMinMaxDate(t, "max"),
                Z = t.drawMonth - V,
                tt = t.drawYear;
            if (0 > Z && (Z += 12, tt--), J)
                for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - q[0] * q[1] + 1, J.getDate())), e = G && G > e ? G : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;)
                    Z--, 0 > Z && (Z = 11, tt--);
            for (t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = U ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - Q, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : K ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = U ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt, Z + Q, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : K ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? $ : j, a = U ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; q[0] > k; k++) {
                for (x = "", this.maxRows = 4, D = 0; q[1] > D; D++) {
                    if (C = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), I = " ui-corner-all", P = "", X) {
                        if (P += "<div class='ui-datepicker-group", q[1] > 1)
                            switch (D) {
                            case 0:
                                P += " ui-datepicker-group-first", I = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case q[1] - 1:
                                P += " ui-datepicker-group-last", I = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                P += " ui-datepicker-group-middle", I = ""
                            }
                        P += "'>"
                    }
                    for (P += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === k ? Y ? o : s : "") + (/all|right/.test(I) && 0 === k ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, tt, G, J, k > 0 || D > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", T = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++)
                        M = (w + c) % 7, T += "<th" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[M] + "'>" + p[M] + "</span></th>";
                    for (P += T + "</tr></thead><tbody>", S = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), z = (this._getFirstDayOfMonth(tt, Z) - c + 7) % 7, A = Math.ceil((z + S) / 7), H = X && this.maxRows > A ? this.maxRows : A, this.maxRows = H, W = this._daylightSavingAdjust(new Date(tt, Z, 1 - z)), E = 0; H > E; E++) {
                        for (P += "<tr>", N = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(W) + "</td>" : "", w = 0; 7 > w; w++)
                            O = m ? m.apply(t.input ? t.input[0] : null, [W]) : [!0, ""], F = W.getMonth() !== Z, R = F && !_ || !O[0] || G && G > W || J && W > J, N += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (W.getTime() === C.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === W.getTime() && b.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !v ? "" : " " + O[1] + (W.getTime() === $.getTime() ? " " + this._currentClass : "") + (W.getTime() === j.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + W.getMonth() + "' data-year='" + W.getFullYear() + "'") + ">" + (F && !v ? "&#xa0;" : R ? "<span class='ui-state-default'>" + W.getDate() + "</span>" : "<a class='ui-state-default" + (W.getTime() === j.getTime() ? " ui-state-highlight" : "") + (W.getTime() === $.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + W.getDate() + "</a>") + "</td>", W.setDate(W.getDate() + 1), W = this._daylightSavingAdjust(W);
                        P += N + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, tt++), P += "</tbody></table>" + (X ? "</div>" + (q[0] > 0 && D === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += P
                }
                y += x
            }
            return y += l, t._keyEvent = !1, y
        },
        _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
            var h,
                l,
                c,
                u,
                d,
                p,
                f,
                g,
                m = this._get(t, "changeMonth"),
                v = this._get(t, "changeYear"),
                _ = this._get(t, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                y = "";
            if (o || !m)
                y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
            else {
                for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)
                    (!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                y += "</select>"
            }
            if (_ || (b += y + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml)
                if (t.yearshtml = "", o || !v)
                    b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
                        var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                        return isNaN(e) ? d : e
                    }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++)
                        t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                }
            return b += this._get(t, "yearSuffix"), _ && (b += (!o && m && v ? "" : "&#xa0;") + y), b += "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var s = t.drawYear + ("Y" === i ? e : 0),
                n = t.drawMonth + ("M" === i ? e : 0),
                o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
                a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
            t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min"),
                s = this._getMinMaxDate(t, "max"),
                n = i && i > e ? i : e;
            return s && n > s ? s : n
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function(t, e, i, s) {
            var n = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
            return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
        },
        _isInRange: function(t, e) {
            var i,
                s,
                n = this._getMinMaxDate(t, "min"),
                o = this._getMinMaxDate(t, "max"),
                a = null,
                r = null,
                h = this._get(t, "yearRange");
            return h && (i = h.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear())
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function(t, e, i, s) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
        }
    }), t.fn.datepicker = function(e) {
        if (!this.length)
            return this;
        t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.10.3"
}(jQuery), function(t) {
    var e = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        i = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    t.widget("ui.dialog", {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
        },
        _destroy: function() {
            var t,
                e = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: t.noop,
        enable: t.noop,
        close: function(e) {
            var i = this;
            this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || t(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function() {
                i._trigger("close", e)
            }))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(t, e) {
            var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return i && !e && this._trigger("focus", t), i
        },
        open: function() {
            var e = this;
            return this._isOpen ? void (this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
                e._focusTabbable(), e._trigger("focus")
            }), void this._trigger("open"))
        },
        _focusTabbable: function() {
            var t = this.element.find("[autofocus]");
            t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
        },
        _keepFocus: function(e) {
            function i() {
                var e = this.document[0].activeElement,
                    i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                i || this._focusTabbable()
            }
            e.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function(e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE)
                        return e.preventDefault(), void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB) {
                        var i = this.uiDialog.find(":tabbable"),
                            s = i.filter(":first"),
                            n = i.filter(":last");
                        e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (n.focus(1), e.preventDefault()) : (s.focus(1), e.preventDefault())
                    }
                },
                mousedown: function(t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var e;
            this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function(e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = t("<button></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function(t) {
                    t.preventDefault(), this.close(t)
                }
            }), e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(e), this.uiDialog.attr({
                "aria-labelledby": e.attr("id")
            })
        },
        _title: function(t) {
            this.options.title || t.html("&#160;"), t.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function() {
            var e = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (t.each(i, function(i, s) {
                var n,
                    o;
                s = t.isFunction(s) ? {
                    click: s,
                    text: i
                } : s, s = t.extend({
                    type: "button"
                }, s), n = s.click, s.click = function() {
                    n.apply(e.element[0], arguments)
                }, o = {
                    icons: s.icons,
                    text: s.showText
                }, delete s.icons, delete s.showText, t("<button></button>", s).button(o).appendTo(e.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function e(t) {
                return {
                    position: t.position,
                    offset: t.offset
                }
            }
            var i = this,
                s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(s, n) {
                    t(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n))
                },
                drag: function(t, s) {
                    i._trigger("drag", t, e(s))
                },
                stop: function(n, o) {
                    s.position = [o.position.left - i.document.scrollLeft(), o.position.top - i.document.scrollTop()], t(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o))
                }
            })
        },
        _makeResizable: function() {
            function e(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }
            var i = this,
                s = this.options,
                n = s.resizable,
                o = this.uiDialog.css("position"),
                a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: a,
                start: function(s, n) {
                    t(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n))
                },
                resize: function(t, s) {
                    i._trigger("resize", t, e(s))
                },
                stop: function(n, o) {
                    s.height = t(this).height(), s.width = t(this).width(), t(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o))
                }
            }).css("position", o)
        },
        _minHeight: function() {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function(s) {
            var n = this,
                o = !1,
                a = {};
            t.each(s, function(t, s) {
                n._setOption(t, s), t in e && (o = !0), t in i && (a[t] = s)
            }), o && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", a)
        },
        _setOption: function(t, e) {
            var i,
                s,
                n = this.uiDialog;
            "dialogClass" === t && n.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
                label: "" + e
            }), "draggable" === t && (i = n.is(":data(ui-draggable)"), i && !e && n.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (s = n.is(":data(ui-resizable)"), s && !e && n.resizable("destroy"), s && "string" == typeof e && n.resizable("option", "handles", e), s || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var t,
                e,
                i,
                s = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(e) {
            return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var e = this,
                    i = this.widgetFullName;
                t.ui.dialog.overlayInstances || this._delay(function() {
                    t.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(s) {
                        e._allowInteraction(s) || (s.preventDefault(), t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
                    })
                }), this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), t.ui.dialog.overlayInstances++
            }
        },
        _destroyOverlay: function() {
            this.options.modal && this.overlay && (t.ui.dialog.overlayInstances--, t.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
        }
    }), t.ui.dialog.overlayInstances = 0, t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
        _position: function() {
            var e,
                i = this.options.position,
                s = [],
                n = [0, 0];
            i ? (("string" == typeof i || "object" == typeof i && "0" in i) && (s = i.split ? i.split(" ") : [i[0], i[1]], 1 === s.length && (s[1] = s[0]), t.each(["left", "top"], function(t, e) {
                +s[t] === s[t] && (n[t] = s[t], s[t] = e)
            }), i = {
                my: s[0] + (0 > n[0] ? n[0] : "+" + n[0]) + " " + s[1] + (0 > n[1] ? n[1] : "+" + n[1]),
                at: s.join(" ")
            }), i = t.extend({}, t.ui.dialog.prototype.options.position, i)) : i = t.ui.dialog.prototype.options.position, e = this.uiDialog.is(":visible"), e || this.uiDialog.show(), this.uiDialog.position(i), e || this.uiDialog.hide()
        }
    })
}(jQuery), function(t) {
    t.widget("ui.menu", {
        version: "1.10.3",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, t.proxy(function(t) {
                this.options.disabled && t.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function(t) {
                    t.preventDefault()
                },
                "click .ui-state-disabled > a": function(t) {
                    t.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(e) {
                    var i = t(e.target).closest(".ui-menu-item");
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(e), i.has(".ui-menu").length ? this.expand(e) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    var i = t(e.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    e || this.focus(t, i)
                },
                blur: function(e) {
                    this._delay(function() {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(e) {
                    t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(e) {
            function i(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var s,
                n,
                o,
                a,
                r,
                h = !0;
            switch (e.keyCode) {
            case t.ui.keyCode.PAGE_UP:
                this.previousPage(e);
                break;
            case t.ui.keyCode.PAGE_DOWN:
                this.nextPage(e);
                break;
            case t.ui.keyCode.HOME:
                this._move("first", "first", e);
                break;
            case t.ui.keyCode.END:
                this._move("last", "last", e);
                break;
            case t.ui.keyCode.UP:
                this.previous(e);
                break;
            case t.ui.keyCode.DOWN:
                this.next(e);
                break;
            case t.ui.keyCode.LEFT:
                this.collapse(e);
                break;
            case t.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                break;
            case t.ui.keyCode.ENTER:
            case t.ui.keyCode.SPACE:
                this._activate(e);
                break;
            case t.ui.keyCode.ESCAPE:
                this.collapse(e);
                break;
            default:
                h = !1, n = this.previousFilter || "", o = String.fromCharCode(e.keyCode), a = !1, clearTimeout(this.filterTimer), o === n ? a = !0 : o = n + o, r = RegExp("^" + i(o), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return r.test(t(this).children("a").text())
                }), s = a && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (o = String.fromCharCode(e.keyCode), r = RegExp("^" + i(o), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return r.test(t(this).children("a").text())
                })), s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = o, this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            h && e.preventDefault()
        },
        _activate: function(t) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function() {
            var e,
                i = this.options.icons.submenu,
                s = this.element.find(this.options.menus);
            s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = t(this),
                    s = e.prev("a"),
                    n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                s.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", s.attr("id"))
            }), e = s.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), e.children(":not(.ui-menu-item)").each(function() {
                var e = t(this);
                /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
            }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(t, e) {
            "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
        },
        focus: function(t, e) {
            var i,
                s;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), i = e.children(".ui-menu"), i.length && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function(e) {
            var i,
                s,
                n,
                o,
                a,
                r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.height(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                item: this.active
            }))
        },
        _startOpening: function(t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(t)
            }, this.delay))
        },
        _open: function(e) {
            var i = t.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
            }, this.delay)
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            e && e.length && (this._open(e.parent()), this._delay(function() {
                this.focus(t, e)
            }))
        },
        next: function(t) {
            this._move("next", "first", t)
        },
        previous: function(t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, s)
        },
        nextPage: function(e) {
            var i,
                s,
                n;
            return this.active ? void (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return i = t(this), 0 > i.offset().top - s - n
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))) : void this.next(e)
        },
        previousPage: function(e) {
            var i,
                s,
                n;
            return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return i = t(this), i.offset().top - s + n > 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(e)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        }
    })
}(jQuery), function(t, e) {
    t.widget("ui.progressbar", {
        version: "1.10.3",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        },
        value: function(t) {
            return t === e ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), e)
        },
        _constrainedValue: function(t) {
            return t === e && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _setOption: function(t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var e = this.options.value,
                i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
        }
    })
}(jQuery), function(t) {
    var e = 5;
    t.widget("ui.slider", t.ui.mouse, {
        version: "1.10.3",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var e,
                i,
                s = this.options,
                n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                a = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++)
                a.push(o);
            this.handles = n.add(t(a.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e)
            })
        },
        _createRange: function() {
            var e = this.options,
                i = "";
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : this.range = t([])
        },
        _setupEvents: function() {
            var t = this.handles.add(this.range).filter("a");
            this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t)
        },
        _destroy: function() {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i,
                s,
                n,
                o,
                a,
                r,
                h,
                l,
                c = this,
                u = this.options;
            return !u.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), i = {
                    x: e.pageX,
                    y: e.pageY
                }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                    var i = Math.abs(s - c.values(e));
                    (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e)
                }), r = this._start(e, a), r !== !1 && (this._mouseSliding = !0, this._handleIndex = a, o.addClass("ui-state-active").focus(), h = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                    left: 0,
                    top: 0
                } : {
                    left: e.pageX - h.left - o.width() / 2,
                    top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(t) {
            var e = {
                    x: t.pageX,
                    y: t.pageY
                },
                i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function(t) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e,
                i,
                s,
                n,
                o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
        },
        _start: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
        },
        _slide: function(t, e, i) {
            var s,
                n,
                o;
            this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: n
            }), s = this.values(e ? 0 : 1), o !== !1 && this.values(e, i, !0))) : i !== this.value() && (o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i
            }), o !== !1 && this.value(i))
        },
        _stop: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
        },
        _change: function(t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
            }
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function(e, i) {
            var s,
                n,
                o;
            if (arguments.length > 1)
                return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
            if (!arguments.length)
                return this._values();
            if (!t.isArray(arguments[0]))
                return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1)
                s[o] = this._trimAlignValue(n[o]), this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var s,
                n = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
            case "orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                break;
            case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1)
                    this._change(null, s);
                this._animateOff = !1;
                break;
            case "min":
            case "max":
                this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function(t) {
            var e,
                i,
                s;
            if (arguments.length)
                return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)
                    i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t)
                return this._valueMin();
            if (t >= this._valueMax())
                return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var e,
                i,
                s,
                n,
                o,
                a = this.options.range,
                r = this.options,
                h = this,
                l = !this._animateOff && r.animate,
                c = {};
            this.options.values && this.options.values.length ? this.handles.each(function(s) {
                i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))), e = i
            }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                width: i + "%"
            }, r.animate), "max" === a && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                height: i + "%"
            }, r.animate), "max" === a && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }))
        },
        _handleEvents: {
            keydown: function(i) {
                var s,
                    n,
                    o,
                    a,
                    r = t(i.target).data("ui-slider-handle-index");
                switch (i.keyCode) {
                case t.ui.keyCode.HOME:
                case t.ui.keyCode.END:
                case t.ui.keyCode.PAGE_UP:
                case t.ui.keyCode.PAGE_DOWN:
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), s = this._start(i, r), s === !1))
                        return
                }
                switch (a = this.options.step, n = o = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) {
                case t.ui.keyCode.HOME:
                    o = this._valueMin();
                    break;
                case t.ui.keyCode.END:
                    o = this._valueMax();
                    break;
                case t.ui.keyCode.PAGE_UP:
                    o = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    o = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e);
                    break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                    if (n === this._valueMax())
                        return;
                    o = this._trimAlignValue(n + a);
                    break;
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                    if (n === this._valueMin())
                        return;
                    o = this._trimAlignValue(n - a)
                }
                this._slide(i, r, o)
            },
            click: function(t) {
                t.preventDefault()
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
            }
        }
    })
}(jQuery), function(t) {
    function e(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }
    t.widget("ui.spinner", {
        version: "1.10.3",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var e = {},
                i = this.element;
            return t.each(["min", "max", "step"], function(t, s) {
                var n = i.attr(s);
                void 0 !== n && n.length && (e[s] = n)
            }), e
        },
        _events: {
            keydown: function(t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(t) {
                return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void (this.previous !== this.element.val() && this._trigger("change", t)))
            },
            mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t))
                        return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(t)
                    }, 100), t.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(e) {
                function i() {
                    var t = this.element[0] === this.document[0].activeElement;
                    t || (this.element.focus(), this.previous = s, this._delay(function() {
                        this.previous = s
                    }))
                }
                var s;
                s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, i.call(this)
                }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(e) {
                return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) !== !1 && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
        },
        _keydown: function(e) {
            var i = this.options,
                s = t.ui.keyCode;
            switch (e.keyCode) {
            case s.UP:
                return this._repeat(null, 1, e), !0;
            case s.DOWN:
                return this._repeat(null, -1, e), !0;
            case s.PAGE_UP:
                return this._repeat(null, i.page, e), !0;
            case s.PAGE_DOWN:
                return this._repeat(null, -i.page, e), !0
            }
            return !1
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
        },
        _start: function(t) {
            return !(!this.spinning && this._trigger("start", t) === !1) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
        },
        _repeat: function(t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, e, i)
            }, t), this._spin(e * this.options.step, i)
        },
        _spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
                value: i
            }) === !1 || (this._value(i), this.counter++)
        },
        _increment: function(e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function(t) {
            var e = "" + t,
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function(t) {
            var e,
                i,
                s = this.options;
            return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
        },
        _stop: function(t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
        },
        _setOption: function(t, e) {
            if ("culture" === t || "numberFormat" === t) {
                var i = this._parse(this.element.val());
                return this.options[t] = e, void this.element.val(this._format(i))
            }
            ("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
        },
        _setOptions: e(function(t) {
            this._super(t), this._value(this.element.val())
        }),
        _parse: function(t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
        },
        _format: function(t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function(t, e) {
            var i;
            "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: e(function(t) {
            this._stepUp(t)
        }),
        _stepUp: function(t) {
            this._start() && (this._spin((t || 1) * this.options.step), this._stop())
        },
        stepDown: e(function(t) {
            this._stepDown(t)
        }),
        _stepDown: function(t) {
            this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
        },
        pageUp: e(function(t) {
            this._stepUp((t || 1) * this.options.page)
        }),
        pageDown: e(function(t) {
            this._stepDown((t || 1) * this.options.page)
        }),
        value: function(t) {
            return arguments.length ? void e(this._value).call(this, t) : this._parse(this.element.val())
        },
        widget: function() {
            return this.uiSpinner
        }
    })
}(jQuery), function(t, e) {
    function i() {
        return ++n
    }
    function s(t) {
        return t.hash.length > 1 && decodeURIComponent(t.href.replace(o, "")) === decodeURIComponent(location.href.replace(o, ""))
    }
    var n = 0,
        o = /#.*$/;
    t.widget("ui.tabs", {
        version: "1.10.3",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var e = this,
                i = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var i = this.options.active,
                s = this.options.collapsible,
                n = location.hash.substring(1);
            return null === i && (n && this.tabs.each(function(s, o) {
                return t(o).attr("aria-controls") === n ? (i = s, !1) : e
            }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = !!this.tabs.length && 0)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = !s && 0)), !s && i === !1 && this.anchors.length && (i = 0), i
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            }
        },
        _tabKeydown: function(i) {
            var s = t(this.document[0].activeElement).closest("li"),
                n = this.tabs.index(s),
                o = !0;
            if (!this._handlePageNav(i)) {
                switch (i.keyCode) {
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                    n++;
                    break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.LEFT:
                    o = !1, n--;
                    break;
                case t.ui.keyCode.END:
                    n = this.anchors.length - 1;
                    break;
                case t.ui.keyCode.HOME:
                    n = 0;
                    break;
                case t.ui.keyCode.SPACE:
                    return i.preventDefault(), clearTimeout(this.activating), this._activate(n), e;
                case t.ui.keyCode.ENTER:
                    return i.preventDefault(), clearTimeout(this.activating), this._activate(n !== this.options.active && n), e;
                default:
                    return
                }
                i.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, o), i.ctrlKey || (s.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", n)
                }, this.delay))
            }
        },
        _panelKeydown: function(e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(i) {
            return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : e
        },
        _findNextTab: function(e, i) {
            function s() {
                return e > n && (e = 0), 0 > e && (e = n), e
            }
            for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled);)
                e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
        },
        _setOption: function(t, i) {
            return "active" === t ? (this._activate(i), e) : "disabled" === t ? (this._setupDisabled(i), e) : (this._super(t, i), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(i), "heightStyle" === t && this._setupHeightStyle(i), e)
        },
        _tabId: function(t) {
            return t.attr("aria-controls") || "ui-tabs-" + i()
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var e = this.options,
                i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                return i.index(t)
            }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var e = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return t("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = t(), this.anchors.each(function(i, n) {
                var o,
                    a,
                    r,
                    h = t(n).uniqueId().attr("id"),
                    l = t(n).closest("li"),
                    c = l.attr("aria-controls");
                s(n) ? (o = n.hash, a = e.element.find(e._sanitizeSelector(o))) : (r = e._tabId(l), o = "#" + r, a = e.element.find(o), a.length || (a = e._createPanel(r), a.insertAfter(e.panels[i - 1] || e.tablist)), a.attr("aria-live", "polite")), a.length && (e.panels = e.panels.add(a)), c && l.data("ui-tabs-aria-controls", c), l.attr({
                    "aria-controls": o.substring(1),
                    "aria-labelledby": h
                }), a.attr("aria-labelledby", h)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(e) {
            return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(e) {
            t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
            for (var i, s = 0; i = this.tabs[s]; s++)
                e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = e
        },
        _setupEvents: function(e) {
            var i = {
                click: function(t) {
                    t.preventDefault()
                }
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(e) {
            var i,
                s = this.element.parent();
            "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var e = t(this),
                    s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                i -= t(this).outerHeight(!0)
            }), this.panels.each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(e) {
            var i = this.options,
                s = this.active,
                n = t(e.currentTarget),
                o = n.closest("li"),
                a = o[0] === s[0],
                r = a && i.collapsible,
                h = r ? t() : this._getPanelForTab(o),
                l = s.length ? this._getPanelForTab(s) : t(),
                c = {
                    oldTab: s,
                    oldPanel: l,
                    newTab: r ? t() : o,
                    newPanel: h
                };
            e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = !r && this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
        },
        _toggle: function(e, i) {
            function s() {
                o.running = !1, o._trigger("activate", e, i)
            }
            function n() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s())
            }
            var o = this,
                a = i.newPanel,
                r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), i.oldTab.attr("aria-selected", "false"), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), a.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }), i.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function(e) {
            var i,
                s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return e === !1 ? t() : this.tabs.eq(e)
        },
        _getIndex: function(t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function() {
                var e = t(this),
                    i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(i) {
            var s = this.options.disabled;
            s !== !1 && (i === e ? s = !1 : (i = this._getIndex(i), s = t.isArray(s) ? t.map(s, function(t) {
                return t !== i ? t : null
            }) : t.map(this.tabs, function(t, e) {
                return e !== i ? e : null
            })), this._setupDisabled(s))
        },
        disable: function(i) {
            var s = this.options.disabled;
            if (s !== !0) {
                if (i === e)
                    s = !0;
                else {
                    if (i = this._getIndex(i), -1 !== t.inArray(i, s))
                        return;
                    s = t.isArray(s) ? t.merge([i], s).sort() : [i]
                }
                this._setupDisabled(s)
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var n = this,
                o = this.tabs.eq(e),
                a = o.find(".ui-tabs-anchor"),
                r = this._getPanelForTab(o),
                h = {
                    tab: o,
                    panel: r
                };
            s(a[0]) || (this.xhr = t.ajax(this._ajaxSettings(a, i, h)), this.xhr && "canceled" !== this.xhr.statusText && (o.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function(t) {
                setTimeout(function() {
                    r.html(t), n._trigger("load", i, h)
                }, 1)
            }).complete(function(t, e) {
                setTimeout(function() {
                    "abort" === e && n.panels.stop(!1, !0), o.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function(e, i, s) {
            var n = this;
            return {
                url: e.attr("href"),
                beforeSend: function(e, o) {
                    return n._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: o
                    }, s))
                }
            }
        },
        _getPanelForTab: function(e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    })
}(jQuery), function(t) {
    function e(e, i) {
        var s = (e.attr("aria-describedby") || "").split(/\s+/);
        s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
    }
    function i(e) {
        var i = e.data("ui-tooltip-id"),
            s = (e.attr("aria-describedby") || "").split(/\s+/),
            n = t.inArray(i, s);
        -1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
    }
    var s = 0;
    t.widget("ui.tooltip", {
        version: "1.10.3",
        options: {
            content: function() {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
        },
        _setOption: function(e, i) {
            var s = this;
            return "disabled" === e ? (this[i ? "_disable" : "_enable"](), void (this.options[e] = i)) : (this._super(e, i), void ("content" === e && t.each(this.tooltips, function(t, e) {
                s._updateContent(e)
            })))
        },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s[0], e.close(n, !0)
            }), this.element.find(this.options.items).addBack().each(function() {
                var e = t(this);
                e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            })
        },
        open: function(e) {
            var i = this,
                s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function() {
                var e,
                    s = t(this);
                s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                }, s.attr("title", ""))
            }), this._updateContent(s, e))
        },
        _updateContent: function(t, e) {
            var i,
                s = this.options.content,
                n = this,
                o = e ? e.type : null;
            return "string" == typeof s ? this._open(e, t, s) : (i = s.call(t[0], function(i) {
                t.data("ui-tooltip-open") && n._delay(function() {
                    e && (e.type = o), this._open(e, t, i)
                })
            }), void (i && this._open(e, t, i)))
        },
        _open: function(i, s, n) {
            function o(t) {
                l.of = t, a.is(":hidden") || a.position(l)
            }
            var a,
                r,
                h,
                l = t.extend({}, this.options.position);
            if (n) {
                if (a = this._find(s), a.length)
                    return void a.find(".ui-tooltip-content").html(n);
                s.is("[title]") && (i && "mouseover" === i.type ? s.attr("title", "") : s.removeAttr("title")), a = this._tooltip(s), e(s, a.attr("id")), a.find(".ui-tooltip-content").html(n), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
                    mousemove: o
                }), o(i)) : a.position(t.extend({
                    of: s
                }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() {
                    a.is(":visible") && (o(l.of), clearInterval(h))
                }, t.fx.interval)), this._trigger("open", i, {
                    tooltip: a
                }), r = {
                    keyup: function(e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var i = t.Event(e);
                            i.currentTarget = s[0], this.close(i, !0)
                        }
                    },
                    remove: function() {
                        this._removeTooltip(a)
                    }
                }, i && "mouseover" !== i.type || (r.mouseleave = "close"), i && "focusin" !== i.type || (r.focusout = "close"), this._on(!0, s, r)
            }
        },
        close: function(e) {
            var s = this,
                n = t(e ? e.currentTarget : this.element),
                o = this._find(n);
            this.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && n.attr("title", n.data("ui-tooltip-title")), i(n), o.stop(!0), this._hide(o, this.options.hide, function() {
                s._removeTooltip(t(this))
            }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                t(i.element).attr("title", i.title), delete s.parents[e]
            }), this.closing = !0, this._trigger("close", e, {
                tooltip: o
            }), this.closing = !1)
        },
        _tooltip: function(e) {
            var i = "ui-tooltip-" + s++,
                n = t("<div>").attr({
                    id: i,
                    role: "tooltip"
                }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return t("<div>").addClass("ui-tooltip-content").appendTo(n), n.appendTo(this.document[0].body), this.tooltips[i] = e, n
        },
        _find: function(e) {
            var i = e.data("ui-tooltip-id");
            return i ? t("#" + i) : t()
        },
        _removeTooltip: function(t) {
            t.remove(), delete this.tooltips[t.attr("id")]
        },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s[0], e.close(n, !0), t("#" + i).remove(), s.data("ui-tooltip-title") && (s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
            })
        }
    })
}(jQuery), function(t, e) {
    var i = "ui-effects-";
    t.effects = {
        effect: {}
    }, function(t, e) {
        function i(t, e, i) {
            var s = u[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
        }
        function s(i) {
            var s = l(),
                n = s._rgba = [];
            return i = i.toLowerCase(), f(h, function(t, o) {
                var a,
                    r = o.re.exec(i),
                    h = r && o.parse(r),
                    l = o.space || "rgba";
                return h ? (a = s[l](h), s[c[l].cache] = a[c[l].cache], n = s._rgba = a._rgba, !1) : e
            }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i]
        }
        function n(t, e, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
        }
        var o,
            a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
            r = /^([\-+])=\s*(\d+\.?\d*)/,
            h = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(t) {
                    return [t[1], t[2], t[3], t[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(t) {
                    return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function(t) {
                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function(t) {
                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function(t) {
                    return [t[1], t[2] / 100, t[3] / 100, t[4]]
                }
            }],
            l = t.Color = function(e, i, s, n) {
                return new t.Color.fn.parse(e, i, s, n)
            },
            c = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            },
            u = {
                "byte": {
                    floor: !0,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: !0
                }
            },
            d = l.support = {},
            p = t("<p>")[0],
            f = t.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function(t, e) {
            e.cache = "_" + t, e.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }), l.fn = t.extend(l.prototype, {
            parse: function(n, a, r, h) {
                if (n === e)
                    return this._rgba = [null, null, null, null], this;
                (n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
                var u = this,
                    d = t.type(n),
                    p = this._rgba = [];
                return a !== e && (n = [n, a, r, h], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, function(t, e) {
                    p[e.idx] = i(n[e.idx], e)
                }), this) : "object" === d ? (n instanceof l ? f(c, function(t, e) {
                    n[e.cache] && (u[e.cache] = n[e.cache].slice())
                }) : f(c, function(e, s) {
                    var o = s.cache;
                    f(s.props, function(t, e) {
                        if (!u[o] && s.to) {
                            if ("alpha" === t || null == n[t])
                                return;
                            u[o] = s.to(u._rgba)
                        }
                        u[o][e.idx] = i(n[t], e, !0)
                    }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])))
                }), this) : e
            },
            is: function(t) {
                var i = l(t),
                    s = !0,
                    n = this;
                return f(c, function(t, o) {
                    var a,
                        r = i[o.cache];
                    return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function(t, i) {
                        return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e
                    })), s
                }), s
            },
            _space: function() {
                var t = [],
                    e = this;
                return f(c, function(i, s) {
                    e[s.cache] && t.push(i)
                }), t.pop()
            },
            transition: function(t, e) {
                var s = l(t),
                    n = s._space(),
                    o = c[n],
                    a = 0 === this.alpha() ? l("transparent") : this,
                    r = a[o.cache] || o.to(a._rgba),
                    h = r.slice();
                return s = s[o.cache], f(o.props, function(t, n) {
                    var o = n.idx,
                        a = r[o],
                        l = s[o],
                        c = u[n.type] || {};
                    null !== l && (null === a ? h[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)), h[o] = i((l - a) * e + a, n)))
                }), this[n](h)
            },
            blend: function(e) {
                if (1 === this._rgba[3])
                    return this;
                var i = this._rgba.slice(),
                    s = i.pop(),
                    n = l(e)._rgba;
                return l(t.map(i, function(t, e) {
                    return (1 - s) * n[e] + s * t
                }))
            },
            toRgbaString: function() {
                var e = "rgba(",
                    i = t.map(this._rgba, function(t, e) {
                        return null == t ? e > 2 ? 1 : 0 : t
                    });
                return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
            },
            toHslaString: function() {
                var e = "hsla(",
                    i = t.map(this.hsla(), function(t, e) {
                        return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                    });
                return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
            },
            toHexString: function(e) {
                var i = this._rgba.slice(),
                    s = i.pop();
                return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
                    return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                }).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), l.fn.parse.prototype = l.fn, c.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2])
                return [null, null, null, t[3]];
            var e,
                i,
                s = t[0] / 255,
                n = t[1] / 255,
                o = t[2] / 255,
                a = t[3],
                r = Math.max(s, n, o),
                h = Math.min(s, n, o),
                l = r - h,
                c = r + h,
                u = .5 * c;
            return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a]
        }, c.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2])
                return [null, null, null, t[3]];
            var e = t[0] / 360,
                i = t[1],
                s = t[2],
                o = t[3],
                a = .5 >= s ? s * (1 + i) : s + i - s * i,
                r = 2 * s - a;
            return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o]
        }, f(c, function(s, n) {
            var o = n.props,
                a = n.cache,
                h = n.to,
                c = n.from;
            l.fn[s] = function(s) {
                if (h && !this[a] && (this[a] = h(this._rgba)), s === e)
                    return this[a].slice();
                var n,
                    r = t.type(s),
                    u = "array" === r || "object" === r ? s : arguments,
                    d = this[a].slice();
                return f(o, function(t, e) {
                    var s = u["object" === r ? t : e.idx];
                    null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
                }), c ? (n = l(c(d)), n[a] = d, n) : l(d)
            }, f(o, function(e, i) {
                l.fn[e] || (l.fn[e] = function(n) {
                    var o,
                        a = t.type(n),
                        h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
                        l = this[h](),
                        c = l[i.idx];
                    return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
                })
            })
        }), l.hook = function(e) {
            var i = e.split(" ");
            f(i, function(e, i) {
                t.cssHooks[i] = {
                    set: function(e, n) {
                        var o,
                            a,
                            r = "";
                        if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                            if (n = l(o || n), !d.rgba && 1 !== n._rgba[3]) {
                                for (a = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && a && a.style;)
                                    try {
                                        r = t.css(a, "backgroundColor"), a = a.parentNode
                                    } catch (h) {}
                                n = n.blend(r && "transparent" !== r ? r : "_default")
                            }
                            n = n.toRgbaString()
                        }
                        try {
                            e.style[i] = n
                        } catch (h) {}
                    }
                }, t.fx.step[i] = function(e) {
                    e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                }
            })
        }, l.hook(a), t.cssHooks.borderColor = {
            expand: function(t) {
                var e = {};
                return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
                    e["border" + s + "Color"] = t
                }), e
            }
        }, o = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery), function() {
        function i(e) {
            var i,
                s,
                n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                o = {};
            if (n && n.length && n[0] && n[n[0]])
                for (s = n.length; s--;)
                    i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
            else
                for (i in n)
                    "string" == typeof n[i] && (o[i] = n[i]);
            return o
        }
        function s(e, i) {
            var s,
                n,
                a = {};
            for (s in i)
                n = i[s], e[s] !== n && (o[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (a[s] = n));
            return a
        }
        var n = ["add", "remove", "toggle"],
            o = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
            t.fx.step[i] = function(t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
            }
        }), t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t.effects.animateClass = function(e, o, a, r) {
            var h = t.speed(o, a, r);
            return this.queue(function() {
                var o,
                    a = t(this),
                    r = a.attr("class") || "",
                    l = h.children ? a.find("*").addBack() : a;
                l = l.map(function() {
                    var e = t(this);
                    return {
                        el: e,
                        start: i(this)
                    }
                }), o = function() {
                    t.each(n, function(t, i) {
                        e[i] && a[i + "Class"](e[i])
                    })
                }, o(), l = l.map(function() {
                    return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
                }), a.attr("class", r), l = l.map(function() {
                    var e = this,
                        i = t.Deferred(),
                        s = t.extend({}, h, {
                            queue: !1,
                            complete: function() {
                                i.resolve(e)
                            }
                        });
                    return this.el.animate(this.diff, s), i.promise()
                }), t.when.apply(t, l.get()).done(function() {
                    o(), t.each(arguments, function() {
                        var e = this.el;
                        t.each(this.diff, function(t) {
                            e.css(t, "")
                        })
                    }), h.complete.call(a[0])
                })
            })
        }, t.fn.extend({
            addClass: function(e) {
                return function(i, s, n, o) {
                    return s ? t.effects.animateClass.call(this, {
                        add: i
                    }, s, n, o) : e.apply(this, arguments)
                }
            }(t.fn.addClass),
            removeClass: function(e) {
                return function(i, s, n, o) {
                    return arguments.length > 1 ? t.effects.animateClass.call(this, {
                        remove: i
                    }, s, n, o) : e.apply(this, arguments)
                }
            }(t.fn.removeClass),
            toggleClass: function(i) {
                return function(s, n, o, a, r) {
                    return "boolean" == typeof n || n === e ? o ? t.effects.animateClass.call(this, n ? {
                        add: s
                    } : {
                        remove: s
                    }, o, a, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, {
                        toggle: s
                    }, n, o, a)
                }
            }(t.fn.toggleClass),
            switchClass: function(e, i, s, n, o) {
                return t.effects.animateClass.call(this, {
                    add: i,
                    remove: e
                }, s, n, o)
            }
        })
    }(), function() {
        function s(e, i, s, n) {
            return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                effect: e
            }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
        }
        function n(e) {
            return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))
        }
        t.extend(t.effects, {
            version: "1.10.3",
            save: function(t, e) {
                for (var s = 0; e.length > s; s++)
                    null !== e[s] && t.data(i + e[s], t[0].style[e[s]])
            },
            restore: function(t, s) {
                var n,
                    o;
                for (o = 0; s.length > o; o++)
                    null !== s[o] && (n = t.data(i + s[o]), n === e && (n = ""), t.css(s[o], n))
            },
            setMode: function(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
            },
            getBaseline: function(t, e) {
                var i,
                    s;
                switch (t[0]) {
                case "top":
                    i = 0;
                    break;
                case "middle":
                    i = .5;
                    break;
                case "bottom":
                    i = 1;
                    break;
                default:
                    i = t[0] / e.height
                }
                switch (t[1]) {
                case "left":
                    s = 0;
                    break;
                case "center":
                    s = .5;
                    break;
                case "right":
                    s = 1;
                    break;
                default:
                    s = t[1] / e.width
                }
                return {
                    x: s,
                    y: i
                }
            },
            createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper"))
                    return e.parent();
                var i = {
                        width: e.outerWidth(!0),
                        height: e.outerHeight(!0),
                        "float": e.css("float")
                    },
                    s = t("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    n = {
                        width: e.width(),
                        height: e.height()
                    },
                    o = document.activeElement;
                try {
                    o.id
                } catch (a) {
                    o = document.body
                }
                return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({
                    position: "relative"
                }), e.css({
                    position: "relative"
                })) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each(["top", "left", "bottom", "right"], function(t, s) {
                    i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                }), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), e.css(n), s.css(i).show()
            },
            removeWrapper: function(e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
            },
            setTransition: function(e, i, s, n) {
                return n = n || {}, t.each(i, function(t, i) {
                    var o = e.cssUnit(i);
                    o[0] > 0 && (n[i] = o[0] * s + o[1])
                }), n
            }
        }), t.fn.extend({
            effect: function() {
                function e(e) {
                    function s() {
                        t.isFunction(o) && o.call(n[0]), t.isFunction(e) && e()
                    }
                    var n = t(this),
                        o = i.complete,
                        r = i.mode;
                    (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), s()) : a.call(n[0], i, s)
                }
                var i = s.apply(this, arguments),
                    n = i.mode,
                    o = i.queue,
                    a = t.effects.effect[i.effect];
                return t.fx.off || !a ? n ? this[n](i.duration, i.complete) : this.each(function() {
                    i.complete && i.complete.call(this)
                }) : o === !1 ? this.each(e) : this.queue(o || "fx", e)
            },
            show: function(t) {
                return function(e) {
                    if (n(e))
                        return t.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "show", this.effect.call(this, i)
                }
            }(t.fn.show),
            hide: function(t) {
                return function(e) {
                    if (n(e))
                        return t.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "hide", this.effect.call(this, i)
                }
            }(t.fn.hide),
            toggle: function(t) {
                return function(e) {
                    if (n(e) || "boolean" == typeof e)
                        return t.apply(this, arguments);
                    var i = s.apply(this, arguments);
                    return i.mode = "toggle", this.effect.call(this, i)
                }
            }(t.fn.toggle),
            cssUnit: function(e) {
                var i = this.css(e),
                    s = [];
                return t.each(["em", "px", "%", "pt"], function(t, e) {
                    i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                }), s
            }
        })
    }(), function() {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
            e[i] = function(e) {
                return Math.pow(e, t + 2)
            }
        }), t.extend(e, {
            Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2)
            },
            Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            Elastic: function(t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(t) {
                return t * t * (3 * t - 2)
            },
            Bounce: function(t) {
                for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;)
                    ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            }
        }), t.each(e, function(e, i) {
            t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                return 1 - i(1 - t)
            }, t.easing["easeInOut" + e] = function(t) {
                return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
            }
        })
    }()
}(jQuery), function(t) {
    var e = /up|down|vertical/,
        i = /up|left|vertical|horizontal/;
    t.effects.effect.blind = function(s, n) {
        var o,
            a,
            r,
            h = t(this),
            l = ["position", "top", "bottom", "left", "right", "height", "width"],
            c = t.effects.setMode(h, s.mode || "hide"),
            u = s.direction || "up",
            d = e.test(u),
            p = d ? "height" : "width",
            f = d ? "top" : "left",
            g = i.test(u),
            m = {},
            v = "show" === c;
        h.parent().is(".ui-effects-wrapper") ? t.effects.save(h.parent(), l) : t.effects.save(h, l), h.show(), o = t.effects.createWrapper(h).css({
            overflow: "hidden"
        }), a = o[p](), r = parseFloat(o.css(f)) || 0, m[p] = v ? a : 0, g || (h.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
            position: "absolute"
        }), m[f] = v ? r : a + r), v && (o.css(p, 0), g || o.css(f, r + a)), o.animate(m, {
            duration: s.duration,
            easing: s.easing,
            queue: !1,
            complete: function() {
                "hide" === c && h.hide(), t.effects.restore(h, l), t.effects.removeWrapper(h), n()
            }
        })
    }
}(jQuery), function(t) {
    t.effects.effect.bounce = function(e, i) {
        var s,
            n,
            o,
            a = t(this),
            r = ["position", "top", "bottom", "left", "right", "height", "width"],
            h = t.effects.setMode(a, e.mode || "effect"),
            l = "hide" === h,
            c = "show" === h,
            u = e.direction || "up",
            d = e.distance,
            p = e.times || 5,
            f = 2 * p + (c || l ? 1 : 0),
            g = e.duration / f,
            m = e.easing,
            v = "up" === u || "down" === u ? "top" : "left",
            _ = "up" === u || "left" === u,
            b = a.queue(),
            y = b.length;
        for ((c || l) && r.push("opacity"), t.effects.save(a, r), a.show(), t.effects.createWrapper(a), d || (d = a["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (o = {
            opacity: 1
        }, o[v] = 0, a.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(o, g, m)), l && (d /= Math.pow(2, p - 1)), o = {}, o[v] = 0, s = 0; p > s; s++)
            n = {}, n[v] = (_ ? "-=" : "+=") + d, a.animate(n, g, m).animate(o, g, m), d = l ? 2 * d : d / 2;
        l && (n = {
            opacity: 0
        }, n[v] = (_ ? "-=" : "+=") + d, a.animate(n, g, m)), a.queue(function() {
            l && a.hide(), t.effects.restore(a, r), t.effects.removeWrapper(a), i()
        }), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))), a.dequeue()
    }
}(jQuery), function(t) {
    t.effects.effect.clip = function(e, i) {
        var s,
            n,
            o,
            a = t(this),
            r = ["position", "top", "bottom", "left", "right", "height", "width"],
            h = t.effects.setMode(a, e.mode || "hide"),
            l = "show" === h,
            c = e.direction || "vertical",
            u = "vertical" === c,
            d = u ? "height" : "width",
            p = u ? "top" : "left",
            f = {};
        t.effects.save(a, r), a.show(), s = t.effects.createWrapper(a).css({
            overflow: "hidden"
        }), n = "IMG" === a[0].tagName ? s : a, o = n[d](), l && (n.css(d, 0), n.css(p, o / 2)), f[d] = l ? o : 0, f[p] = l ? 0 : o / 2, n.animate(f, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                l || a.hide(), t.effects.restore(a, r), t.effects.removeWrapper(a), i()
            }
        })
    }
}(jQuery), function(t) {
    t.effects.effect.drop = function(e, i) {
        var s,
            n = t(this),
            o = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            a = t.effects.setMode(n, e.mode || "hide"),
            r = "show" === a,
            h = e.direction || "left",
            l = "up" === h || "down" === h ? "top" : "left",
            c = "up" === h || "left" === h ? "pos" : "neg",
            u = {
                opacity: r ? 1 : 0
            };
        t.effects.save(n, o), n.show(), t.effects.createWrapper(n), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(l, "pos" === c ? -s : s), u[l] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s, n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === a && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i()
            }
        })
    }
}(jQuery), function(t) {
    t.effects.effect.explode = function(e, i) {
        function s() {
            b.push(this), b.length === u * d && n()
        }
        function n() {
            p.css({
                visibility: "visible"
            }), t(b).remove(), g || p.hide(), i()
        }
        var o,
            a,
            r,
            h,
            l,
            c,
            u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
            d = u,
            p = t(this),
            f = t.effects.setMode(p, e.mode || "hide"),
            g = "show" === f,
            m = p.show().css("visibility", "hidden").offset(),
            v = Math.ceil(p.outerWidth() / d),
            _ = Math.ceil(p.outerHeight() / u),
            b = [];
        for (o = 0; u > o; o++)
            for (h = m.top + o * _, c = o - (u - 1) / 2, a = 0; d > a; a++)
                r = m.left + a * v, l = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -a * v,
                    top: -o * _
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: v,
                    height: _,
                    left: r + (g ? l * v : 0),
                    top: h + (g ? c * _ : 0),
                    opacity: g ? 0 : 1
                }).animate({
                    left: r + (g ? 0 : l * v),
                    top: h + (g ? 0 : c * _),
                    opacity: g ? 1 : 0
                }, e.duration || 500, e.easing, s)
    }
}(jQuery), function(t) {
    t.effects.effect.fade = function(e, i) {
        var s = t(this),
            n = t.effects.setMode(s, e.mode || "toggle");
        s.animate({
            opacity: n
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }
}(jQuery), function(t) {
    t.effects.effect.fold = function(e, i) {
        var s,
            n,
            o = t(this),
            a = ["position", "top", "bottom", "left", "right", "height", "width"],
            r = t.effects.setMode(o, e.mode || "hide"),
            h = "show" === r,
            l = "hide" === r,
            c = e.size || 15,
            u = /([0-9]+)%/.exec(c),
            d = !!e.horizFirst,
            p = h !== d,
            f = p ? ["width", "height"] : ["height", "width"],
            g = e.duration / 2,
            m = {},
            v = {};
        t.effects.save(o, a), o.show(), s = t.effects.createWrapper(o).css({
            overflow: "hidden"
        }), n = p ? [s.width(), s.height()] : [s.height(), s.width()], u && (c = parseInt(u[1], 10) / 100 * n[l ? 0 : 1]), h && s.css(d ? {
            height: 0,
            width: c
        } : {
            height: c,
            width: 0
        }), m[f[0]] = h ? n[0] : c, v[f[1]] = h ? n[1] : 0, s.animate(m, g, e.easing).animate(v, g, e.easing, function() {
            l && o.hide(), t.effects.restore(o, a), t.effects.removeWrapper(o), i()
        })
    }
}(jQuery), function(t) {
    t.effects.effect.highlight = function(e, i) {
        var s = t(this),
            n = ["backgroundImage", "backgroundColor", "opacity"],
            o = t.effects.setMode(s, e.mode || "show"),
            a = {
                backgroundColor: s.css("backgroundColor")
            };
        "hide" === o && (a.opacity = 0), t.effects.save(s, n), s.show().css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(a, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === o && s.hide(), t.effects.restore(s, n), i()
            }
        })
    }
}(jQuery), function(t) {
    t.effects.effect.pulsate = function(e, i) {
        var s,
            n = t(this),
            o = t.effects.setMode(n, e.mode || "show"),
            a = "show" === o,
            r = "hide" === o,
            h = a || "hide" === o,
            l = 2 * (e.times || 5) + (h ? 1 : 0),
            c = e.duration / l,
            u = 0,
            d = n.queue(),
            p = d.length;
        for ((a || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1), s = 1; l > s; s++)
            n.animate({
                opacity: u
            }, c, e.easing), u = 1 - u;
        n.animate({
            opacity: u
        }, c, e.easing), n.queue(function() {
            r && n.hide(), i()
        }), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, l + 1))), n.dequeue()
    }
}(jQuery), function(t) {
    t.effects.effect.puff = function(e, i) {
        var s = t(this),
            n = t.effects.setMode(s, e.mode || "hide"),
            o = "hide" === n,
            a = parseInt(e.percent, 10) || 150,
            r = a / 100,
            h = {
                height: s.height(),
                width: s.width(),
                outerHeight: s.outerHeight(),
                outerWidth: s.outerWidth()
            };
        t.extend(e, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: n,
            complete: i,
            percent: o ? a : 100,
            from: o ? h : {
                height: h.height * r,
                width: h.width * r,
                outerHeight: h.outerHeight * r,
                outerWidth: h.outerWidth * r
            }
        }), s.effect(e)
    }, t.effects.effect.scale = function(e, i) {
        var s = t(this),
            n = t.extend(!0, {}, e),
            o = t.effects.setMode(s, e.mode || "effect"),
            a = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100),
            r = e.direction || "both",
            h = e.origin,
            l = {
                height: s.height(),
                width: s.width(),
                outerHeight: s.outerHeight(),
                outerWidth: s.outerWidth()
            },
            c = {
                y: "horizontal" !== r ? a / 100 : 1,
                x: "vertical" !== r ? a / 100 : 1
            };
        n.effect = "size", n.queue = !1, n.complete = i, "effect" !== o && (n.origin = h || ["middle", "center"], n.restore = !0), n.from = e.from || ("show" === o ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : l), n.to = {
            height: l.height * c.y,
            width: l.width * c.x,
            outerHeight: l.outerHeight * c.y,
            outerWidth: l.outerWidth * c.x
        }, n.fade && ("show" === o && (n.from.opacity = 0, n.to.opacity = 1), "hide" === o && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
    }, t.effects.effect.size = function(e, i) {
        var s,
            n,
            o,
            a = t(this),
            r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            l = ["width", "height", "overflow"],
            c = ["fontSize"],
            u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            p = t.effects.setMode(a, e.mode || "effect"),
            f = e.restore || "effect" !== p,
            g = e.scale || "both",
            m = e.origin || ["middle", "center"],
            v = a.css("position"),
            _ = f ? r : h,
            b = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
        "show" === p && a.show(), s = {
            height: a.height(),
            width: a.width(),
            outerHeight: a.outerHeight(),
            outerWidth: a.outerWidth()
        }, "toggle" === e.mode && "show" === p ? (a.from = e.to || b, a.to = e.from || s) : (a.from = e.from || ("show" === p ? b : s), a.to = e.to || ("hide" === p ? b : s)), o = {
            from: {
                y: a.from.height / s.height,
                x: a.from.width / s.width
            },
            to: {
                y: a.to.height / s.height,
                x: a.to.width / s.width
            }
        }, ("box" === g || "both" === g) && (o.from.y !== o.to.y && (_ = _.concat(u), a.from = t.effects.setTransition(a, u, o.from.y, a.from), a.to = t.effects.setTransition(a, u, o.to.y, a.to)), o.from.x !== o.to.x && (_ = _.concat(d), a.from = t.effects.setTransition(a, d, o.from.x, a.from), a.to = t.effects.setTransition(a, d, o.to.x, a.to))), ("content" === g || "both" === g) && o.from.y !== o.to.y && (_ = _.concat(c).concat(l), a.from = t.effects.setTransition(a, c, o.from.y, a.from), a.to = t.effects.setTransition(a, c, o.to.y, a.to)), t.effects.save(a, _), a.show(), t.effects.createWrapper(a), a.css("overflow", "hidden").css(a.from), m && (n = t.effects.getBaseline(m, s), a.from.top = (s.outerHeight - a.outerHeight()) * n.y, a.from.left = (s.outerWidth - a.outerWidth()) * n.x, a.to.top = (s.outerHeight - a.to.outerHeight) * n.y, a.to.left = (s.outerWidth - a.to.outerWidth) * n.x), a.css(a.from), ("content" === g || "both" === g) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), l = r.concat(u).concat(d), a.find("*[width]").each(function() {
            var i = t(this),
                s = {
                    height: i.height(),
                    width: i.width(),
                    outerHeight: i.outerHeight(),
                    outerWidth: i.outerWidth()
                };
            f && t.effects.save(i, l), i.from = {
                height: s.height * o.from.y,
                width: s.width * o.from.x,
                outerHeight: s.outerHeight * o.from.y,
                outerWidth: s.outerWidth * o.from.x
            }, i.to = {
                height: s.height * o.to.y,
                width: s.width * o.to.x,
                outerHeight: s.height * o.to.y,
                outerWidth: s.width * o.to.x
            }, o.from.y !== o.to.y && (i.from = t.effects.setTransition(i, u, o.from.y, i.from), i.to = t.effects.setTransition(i, u, o.to.y, i.to)), o.from.x !== o.to.x && (i.from = t.effects.setTransition(i, d, o.from.x, i.from), i.to = t.effects.setTransition(i, d, o.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function() {
                f && t.effects.restore(i, l)
            })
        })), a.animate(a.to, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                0 === a.to.opacity && a.css("opacity", a.from.opacity), "hide" === p && a.hide(), t.effects.restore(a, _), f || ("static" === v ? a.css({
                    position: "relative",
                    top: a.to.top,
                    left: a.to.left
                }) : t.each(["top", "left"], function(t, e) {
                    a.css(e, function(e, i) {
                        var s = parseInt(i, 10),
                            n = t ? a.to.left : a.to.top;
                        return "auto" === i ? n + "px" : s + n + "px"
                    })
                })), t.effects.removeWrapper(a), i()
            }
        })
    }
}(jQuery), function(t) {
    t.effects.effect.shake = function(e, i) {
        var s,
            n = t(this),
            o = ["position", "top", "bottom", "left", "right", "height", "width"],
            a = t.effects.setMode(n, e.mode || "effect"),
            r = e.direction || "left",
            h = e.distance || 20,
            l = e.times || 3,
            c = 2 * l + 1,
            u = Math.round(e.duration / c),
            d = "up" === r || "down" === r ? "top" : "left",
            p = "up" === r || "left" === r,
            f = {},
            g = {},
            m = {},
            v = n.queue(),
            _ = v.length;
        for (t.effects.save(n, o), n.show(), t.effects.createWrapper(n), f[d] = (p ? "-=" : "+=") + h, g[d] = (p ? "+=" : "-=") + 2 * h, m[d] = (p ? "-=" : "+=") + 2 * h, n.animate(f, u, e.easing), s = 1; l > s; s++)
            n.animate(g, u, e.easing).animate(m, u, e.easing);
        n.animate(g, u, e.easing).animate(f, u / 2, e.easing).queue(function() {
            "hide" === a && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i()
        }), _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))), n.dequeue()
    }
}(jQuery), function(t) {
    t.effects.effect.slide = function(e, i) {
        var s,
            n = t(this),
            o = ["position", "top", "bottom", "left", "right", "width", "height"],
            a = t.effects.setMode(n, e.mode || "show"),
            r = "show" === a,
            h = e.direction || "left",
            l = "up" === h || "down" === h ? "top" : "left",
            c = "up" === h || "left" === h,
            u = {};
        t.effects.save(n, o), n.show(), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(n).css({
            overflow: "hidden"
        }), r && n.css(l, c ? isNaN(s) ? "-" + s : -s : s), u[l] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s, n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === a && n.hide(), t.effects.restore(n, o), t.effects.removeWrapper(n), i()
            }
        })
    }
}(jQuery), function(t) {
    t.effects.effect.transfer = function(e, i) {
        var s = t(this),
            n = t(e.to),
            o = "fixed" === n.css("position"),
            a = t("body"),
            r = o ? a.scrollTop() : 0,
            h = o ? a.scrollLeft() : 0,
            l = n.offset(),
            c = {
                top: l.top - r,
                left: l.left - h,
                height: n.innerHeight(),
                width: n.innerWidth()
            },
            u = s.offset(),
            d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
                top: u.top - r,
                left: u.left - h,
                height: s.innerHeight(),
                width: s.innerWidth(),
                position: o ? "fixed" : "absolute"
            }).animate(c, e.duration, e.easing, function() {
                d.remove(), i()
            })
    }
}(jQuery);
var service = !1;
if ("object" == typeof google && "object" == typeof google.maps)
    var service = new google.maps.places.AutocompleteService;
var searchString = !1,
    searchField = "#imysearchstring",
    searchFieldPopup = "#imysearchstring_popupmode",
    postcodeField = "#isearchstring",
    dropdown = ".autoCompleteDropDown",
    dropdownOutput = ".autoCompleteDropDownContent",
    errorOutput = ".deliveryareaerror",
    AutoComplete = {},
    GeoCountry = !1,
    GeoCountryCode = !1,
    searchStringBuffer = !1,
    timeoutError = !1,
    delayTime = 400,
    delayTimer;
!function(e) {
    e.autoComplete = function(t, o) {
        var r,
            i = {
                lat: "",
                lng: "",
                country: "",
                language: "",
                pcMatch: "",
                active: !0,
                popupmode: !1,
                onSomeEvent: function() {}
            },
            s = this;
        s.settings = {};
        var n = function() {
            s.settings = e.extend({}, i, o), s.el = t, GeoCountry = s.settings.language, GeoCountryCode = s.settings.countrycode, s.settings.isMobileDevice = !0, e.geoLocationFinder({
                country: s.settings.country,
                fetchgeo: s.settings.findGeoLocation,
                redirect: s.settings.redirectGeoLocation
            })
        };
        s.hideErrorNotification = function(t) {
            e(errorOutput).fadeOut("slow"), e("#ideliveryareaerror").hide(), e(dropdown).hide(), e(searchField).removeAttr("style").keyup().focus().val(e(t).data("route"))
        }, s.inputSearchField = function(t) {
            "none" != e("#ideliveryareaerror").css("display") && (window.clearTimeout(timeoutError), s.hideErrorNotification(t));
            var o = e(document.activeElement)[0].id;
            return searchString = t.toUpperCase(), e("#ideliveryareaerrorpopup,#ideliveryareaerror").hide(), 0 === searchString.length && "imysearchstring" === o ? (AutoComplete.parseJsonData("", "", "OK"), !1) : searchString.length >= 1 ? s.settings.pcMatch && e.trim(searchString).match(s.settings.pcMatch) ? (window.clearTimeout(delayTimer), s.createPostcodeOutput(searchString), !1) : (null !== delayTimer && window.clearTimeout(delayTimer), delayTimer = window.setTimeout(AutoComplete.collectPrediction.bind(null, searchString), delayTime), !1) : void 0
        }, s.createPostcodeOutput = function(e) {
            var t = {};
            if (180 === s.settings.countrycode || 0 !== parseInt(e, 10)) {
                var o = [{
                    description: ", " + e.toUpperCase() + ",",
                    id: !1,
                    matched_substrings: !1,
                    reference: "postcode",
                    terms: !1,
                    types: !1,
                    length: 1
                }];
                if (t = o, s.settings.usergeolocation) {
                    var r = [{
                        description: s.settings.usergeolocation.description,
                        id: s.settings.usergeolocation.id,
                        matched_substrings: !1,
                        reference: "mygeolocation",
                        terms: !1,
                        types: !1,
                        length: 1
                    }];
                    t = t.concat(r)
                }
                s.setCollectedPrediction(t), s.setDropdown(t, e)
            }
        }, s.inputPostcodeField = function(t) {
            window.clearTimeout(delayTimer);
            e(document.activeElement)[0].id;
            if (searchString = t.toUpperCase(), searchString.length < 1 && AutoComplete.hideDropdown(dropdown, dropdownOutput), searchString.length >= 1)
                return AutoComplete.collectPrediction(searchString), !1
        }, s.validateCountryforGeo = function(e) {
            return s.settings.myCountry[s.settings.language].indexOf(e) > 0 || s.settings.myCountry[s.settings.language] === e
        }, s.collectPrediction = function(t) {
            if ("object" == typeof google && "object" == typeof google.maps)
                var o = new google.maps.LatLngBounds(new google.maps.LatLng(e("#data-lattitude").html(), e("#data-longitude").html()), new google.maps.LatLng(e("#data-lattitude").html(), e("#data-longitude").html()));
            if ("" === t)
                return s.parseJsonData(!1, t, status), !1;
            if (e.trim(t.match(s.settings.PcMatch)) && (t = t.replace(/ /g, "")), s.settings.active === !1)
                return s.parseJsonData(r, t, status), !1;
            var i = {
                input: t,
                bounds: o,
                componentRestrictions: {
                    country: s.settings.country
                }
            };
            "object" == typeof service ? service.getPlacePredictions(i, function(e, o) {
                s.parseJsonData(e, t, o)
            }) : s.parseJsonData(r, t, status)
        }, s.parseJsonData = function(t, o, r) {
            var i = !1,
                n = [];
            if (s.settings.pcMatch && e.trim(o).match(s.settings.pcMatch) && (checklength = 0, i = o), s.settings.usergeolocation)
                var a = s.settings.usergeolocation,
                    a = [{
                        description: s.settings.usergeolocation.description,
                        id: s.settings.usergeolocation.id,
                        matched_substrings: !1,
                        reference: "mygeolocation",
                        terms: !1,
                        types: !1,
                        length: 1
                    }];
            if ("OK" === r && ("object" == typeof a && (n = a.concat(n)), "object" == typeof t && null != t && (n = t.concat(n))), "ZERO_RESULTS" === r && "" !== o && "object" == typeof s.settings.userAddresses) {
                var c = [];
                e.each(s.settings.userAddresses, function(e, t) {
                    o + ", {dummy}" === t.description && (c = [t])
                }), "object" == typeof a && (c = a.concat(c)), n = c
            }
            if (i && (180 === s.settings.countrycode || 0 !== parseInt(i, 10))) {
                var d = [{
                    description: ", " + i.toUpperCase() + ",",
                    id: !1,
                    matched_substrings: !1,
                    reference: "postcode",
                    terms: !1,
                    types: !1,
                    length: 1
                }];
                "object" == typeof d && (n = d.concat(n))
            }
            if (s.settings.usergeolocation && "" !== s.settings.usergeolocation.description && n.length > 1 && "" !== n[0].description) {
                var l = n[0].description.split(", "),
                    p = s.settings.usergeolocation.description.split(", ");
                l.splice(-1, 1), p.splice(-1, 1), 0 === e(l).not(p).length && 0 === e(p).not(l).length && delete n[0]
            }
            s.setCollectedPrediction(n), s.setDropdown(n, i)
        }, s.setUserGeoLocation = function(e) {
            s.settings.usergeolocation = e
        }, s.setCollectedPrediction = function(e) {
            s.settings.collectedpredictions = e
        }, s.clickReference = function(t) {
            var o = !("undefined" == typeof e(t).attr("data-suggestion") || !e(t).attr("data-suggestion")),
                r = !("undefined" == typeof e(t).attr("data-reference") || !e(t).attr("data-reference"));
            r && o ? s.clickReferenceSuggestion(t) : s.clickReferenceGoogle(t)
        }, s.clickDirectLink = function(t) {
            "undefined" != typeof e(t).attr("data-id") ? AutoComplete.postLocation(e(t).attr("data-id"), !1, !1, "undefined", "customerdeliveryarea", !1, e(t).text()) : "undefined" != typeof e(t).attr("data-href") ? document.location = e(t).attr("data-href") : AutoComplete.postLocation(e(t).text())
        }, s.clickReferenceSuggestion = function(t) {
            var o = e(t).attr("data-name"),
                r = !("undefined" == typeof e(t).attr("data-suggestion") || !e(t).attr("data-suggestion")) && e(t).attr("data-suggestion"),
                i = !("undefined" == typeof e(t).attr("data-reference") || !e(t).attr("data-reference")) && e(t).attr("data-reference");
            if (e(searchField).val(r), "postcode" === i)
                AutoComplete.postLocation(o, !1, !1, !1, !1, !1, r, r);
            else if ("latlng" === i)
                if (AutoComplete.settings.specific === !0)
                    AutoComplete.specifyLocation(t, o, r, i);
                else {
                    var s = o.split(",");
                    AutoComplete.postLocation(!1, s[0], s[1], !1, !1, !1, r, r)
                }
        }, s.specifyLocation = function(e) {
            var t = "#ideliveryareaerror";
            s.specifyLocationError(e, t, dropdown, s.settings.specifyLocation)
        }, s.specifyLocationError = function(t, o, r, i) {
            return window.clearTimeout(timeoutError), e(o).is(":visible") && e(o).fadeOut("fast"), e(searchField).css("border", "1px solid red").blur(), e(r).hide().find(".suggestions").hide(), e(".autoCompleteDropDownContent").html(""), e(o).html(i).fadeIn("slow"), timeoutError = window.setTimeout(function() {
                s.hideErrorNotification(t)
            }, 6e3), !1
        }, s.clickReferenceGoogle = function(t) {
            var o = e(t).attr("data-reference"),
                r = e(t).attr("data-name"),
                i = !1;
            if ("directlink" === o)
                return 4 === s.settings.countrycode ? AutoComplete.clickDirectLink(t) : document.location = e(t).attr("data-href"), !1;
            if ("postcode" === o || "customerdeliveryarea" === o || "mygeolocation" === o) {
                var n = !1;
                return "customerdeliveryarea" === o ? (AutoComplete.clickDirectLink(t), !1) : ("mygeolocation" === o && (n = {
                    description: "mygeolocation",
                    id: e(t).attr("data-postcode")
                }), e(searchField).val(r), AutoComplete.postLocation(r, "", "", "", n), e("#output").hide(), !1)
            }
            i = new google.maps.Map(document.getElementById("mapdummy"), {
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                center: new google.maps.LatLng((-33.8665433), 151.1956316),
                zoom: 15
            });
            return s.geoCodeService(e(t).attr("data-name"), t), !1
        }, s.geoCodeService = function(t, o) {
            var r = new google.maps.Geocoder;
            new google.maps.LatLng(0, 0);
            r.geocode({
                address: t,
                region: s.settings.country
            }, function(r, i) {
                if (i === google.maps.GeocoderStatus.OK) {
                    if (r.length > 1)
                        return s.showSuggestions(r, t), !1;
                    if (r[0]) {
                        var n = r[0],
                            a = {};
                        null != n.address_components && e.each(n.address_components, function(t, o) {
                            e.each(o.types, function(e, t) {
                                a[t] = o.long_name
                            })
                        }), e(searchField).val(t), AutoComplete.settings.specific === !0 && "undefined" == typeof a.postal_code ? AutoComplete.specifyLocation(o) : AutoComplete.postLocation(a.postal_code, n.geometry.location.lat(), n.geometry.location.lng(), a.sublocality, !1, a, t), e("#output").hide()
                    }
                } else
                    e(errorOutput).is(":visible") && e(errorOutput).fadeOut("fast"), e(dropdown).hide(), e(errorOutput).html(s.settings.invalidLocation), e(errorOutput).fadeIn("slow").delay(8e3).fadeOut("slow")
            })
        }, s.showSuggestions = function(t, o) {
            e(dropdownOutput).html(""), dropitems = "", t.sort(function(e, t) {
                return e.formatted_address < t.formatted_address ? 1 : e.formatted_address > t.formatted_address ? -1 : 0
            }), e.each(t, function(o, r) {
                var i = {};
                null != r.address_components && e.each(r.address_components, function(t, o) {
                    e.each(o.types, function(e, t) {
                        i[t] = o.long_name
                    })
                });
                var n = r.formatted_address.replace(", " + s.settings.myCountry[s.settings.language], "");
                i.postal_code ? (dropitems += '<a href="#" onclick="return false;" class="item" id="reference" data-name="' + i.postal_code + '" data-reference="postcode" data-suggestion="' + n + '">', dropitems += "<span>", dropitems += n, dropitems += "</span></a>") : (dropitems += '<a href="#" onclick="return false;" class="item" id="reference" data-name="' + t[o].geometry.location.lat() + "," + t[o].geometry.location.lng() + '" data-reference="latlng" data-route="' + i.route + '" data-suggestion="' + n + '">', dropitems += "<span>", dropitems += n, dropitems += "</span></a>")
            }), e(".suggestions", ".autoCompleteDropDown").show(), e(dropdownOutput).append(dropitems), e(dropdownOutput).find("a.item:first").addClass("selected"), e(dropdown).fadeIn(100)
        }, s.postCityDistrict = function(t, o, r, i, s) {
            var n = {};
            r !== !1 ? n = {
                city: t,
                district: o,
                userlocationid: r
            } : t && o && (n = {
                city: t,
                district: o,
                userlocationid: r
            }), e.post("/findRestaurants.php", {
                type: "citydistrict",
                customerdeliveryarea: n.userlocationid,
                searchstring1: n.city,
                searchstring2: n.district,
                google_latitude: !1,
                google_longitude: !1,
                redirect: i,
                bid: s
            }, function(t) {
                var o = e.parseJSON(t);
                "url" === o.type && (e(".addresspulldown").length > 0 && !e(".addresspulldown").hasClass("hidden") ? Cookies.set("searchstring", e("#icustomerdeliveryarea option:selected").text(), {
                    expires: 365,
                    path: "/"
                }) : Cookies.set("searchstring", e("#isearchstring2 option:selected").text() + ", " + e("#isearchstring1 option:selected").text(), {
                    expires: 365,
                    path: "/"
                }), Cookies.remove("sortby"), window.top.location = o.value), "html" === o.type && (e(dropdownOutput).html(o.value), e(dropdown).show()), "error" === o.type && (e(errorOutput).is(":visible") && e(errorOutput).fadeOut("fast"), e(dropdown).hide(), e(errorOutput).html(o.value), e(errorOutput).fadeIn("slow").delay(8e3).fadeOut("slow"))
            })
        }, s.isRedirect = function(t) {
            var o = [];
            return e.each(e(t).serializeArray(), function(e, t) {
                o[t.name] = t.value
            }), !(!o.bid || "menucard" !== o.redirect) && (s.settings.redirect = {
                redirect: "menucard",
                bid: o.bid
            }, !0)
        }, s.postLocation = function(t, o, r, i, n, a, c, d) {
            e(".autoCompleteNotice").hide();
            var l = !1,
                p = !1;
            if (s.settings.popupmode === !0 ? (errorOutput = "#ideliveryareaerrorpopup", s.isRedirect(".deliveryareapanelpopupmode #ideliveryareaform") && (p = s.settings.redirect.bid, l = s.settings.redirect.redirect)) : (errorOutput = "#ideliveryareaerror", s.isRedirect("#ideliveryareaform") && (p = s.settings.redirect.bid, l = s.settings.redirect.redirect)), a)
                if ("route" in a)
                    d = a.route + ", " + a.locality;
                else if ("sublocality_level_2" in a || "sublocality" in a || "sublocality_level_1" in a) {
                    searchterms = c.split(", "), searchterms.pop();
                    var u = searchterms[searchterms.length - 1];
                    u === a.sublocality_level_2 ? d = a.sublocality_level_2 + ", " + a.locality : u === a.sublocality ? d = a.sublocality + ", " + a.locality : u === a.sublocality_level_1 && (d = a.sublocality_level_1 + ", " + a.locality)
                }
            if (geolocation = !1, n && "" !== n.description && (geolocation = !0), t && o && r && (e.trim(t).match(s.settings.pcMatch) || 180 !== s.settings.countrycode || (t = !1)), t && "customerdeliveryarea" === n)
                e.post("/findRestaurants.php", {
                    searchstring: t,
                    type: "postcode",
                    mysearch: !1,
                    customerdeliveryarea: t,
                    google_latitude: !1,
                    google_longitude: !1,
                    redirect: l,
                    bid: p,
                    mysearchstring: !1
                }, function(o) {
                    var r = e.parseJSON(o);
                    "url" === r.type && ("undefined" != typeof c ? Cookies.set("searchstring", c, {
                        expires: 365,
                        path: "/"
                    }) : Cookies.set("searchstring", t, {
                        expires: 365,
                        path: "/"
                    }), Cookies.remove("sortby"), window.top.location = r.value), "html" === r.type && (e(dropdownOutput).html(r.value), e(dropdown).show()), "error" === r.type && (e(errorOutput).is(":visible") && e(errorOutput).fadeOut("fast"), e(dropdown).hide(), e(errorOutput).html(r.value), e(errorOutput).fadeIn("slow").delay(8e3).fadeOut("slow"))
                });
            else if (t) {
                var g = "",
                    m = !1,
                    f = !1;
                n && ("customerdeliveryarea" === n.description && (g = n.id), "mygeolocation" === n.description && (t = n.id)), 1 === s.settings.countrycode && "undefined" != typeof i && i && (i = i.replace(/ /g, "")), o && r ? (m = o, f = r, geolocation = !0) : "" !== e("#data-lattitude").html() && "" !== e("#data-longitude").html() && (m = e("#data-lattitude").html(), f = e("#data-longitude").html(), geolocation = !0), e.post("/findRestaurants.php", {
                    searchstring: t,
                    type: "postcode",
                    mysearch: i,
                    customerdeliveryarea: g,
                    google_latitude: m,
                    google_longitude: f,
                    redirect: l,
                    bid: p,
                    mysearchstring: d,
                    geo: geolocation
                }, function(t) {
                    var o = e.parseJSON(t);
                    "url" === o.type && (Cookies.set("searchstring", e("#ideliveryareaform #imysearchstring").val(), {
                        expires: 365,
                        path: "/"
                    }), Cookies.remove("sortby"), window.top.location = o.value), "html" == o.type && (e(dropdownOutput).html(o.value), e(dropdown).show(), e(".popupoptions a").first().focus()), "error" == o.type && s.showError(errorOutput, dropdown, o.value)
                })
            } else
                e.isNumeric(o) && e.isNumeric(r) ? e.post("/findGeoLocation.php", {
                    latlng: o + "," + r,
                    type: "geolocation",
                    ck: "true",
                    mysearch: i,
                    mysearchstring: d
                }, function(t) {
                    var o = e.parseJSON(t);
                    "POSTCODE" === o.type && (Cookies.set("searchstring", e("#ideliveryareaform #imysearchstring").val(), {
                        expires: 365,
                        path: "/"
                    }), Cookies.remove("sortby"), window.top.location = o.value), "html" !== o.type && "HTML" !== o.type && "SPLIT_PC" !== o.type || (e(dropdownOutput).html(o.value), e(dropdown).show()), "error" === o.type && s.showError(errorOutput, dropdown, o.value)
                }) : e.post("/findRestaurants.php", {
                    searchstring: t,
                    type: "postcode",
                    mysearchstring: d
                }, function(t) {
                    var o = e.parseJSON(t);
                    "error" === o.type && (s.settings.popupmode === !0 && (errorOutput = "#ideliveryareaerrorpopup"), e(errorOutput).is(":visible") && e(errorOutput).fadeOut("fast"), e(dropdown).hide(), e(errorOutput).html(o.value), e(errorOutput).fadeIn("slow").delay(5e3).fadeOut("slow"))
                })
        }, s.showError = function(t, o, r) {
            return window.clearTimeout(timeoutError), e(t).is(":visible") && e(t).fadeOut("fast"), e(searchField).css("border", "1px solid red").blur(), e(o).hide(), e(t).html(r), e(t).fadeIn("slow"), timeoutError = window.setTimeout(function() {
                e(searchField).removeAttr("style"), e(t).fadeOut("slow")
            }, 5e3), !1
        }, s.setDropdown = function(t, o) {
            var r = "",
                i = !1;
            if (null !== t && (t.length <= 2 && s.settings.userAddresses !== !1 && ("object" == typeof s.settings.userAddresses ? (i = e.map(s.settings.userAddresses, function(e, t) {
                return [e]
            }), t = t.concat(i.slice(0, 10))) : s.settings.userAddresses.isArray && (i = s.settings.userAddresses, t = t.concat(i.slice(0, 10)))), t.length > 0)) {
                e(".suggestions", ".autoCompleteDropDown").hide(), e(dropdownOutput).html("");
                var n = 1,
                    a = 0;
                for (var c in t) {
                    var d = t[c].description;
                    if (predictionsSplit = d.split(","), 10 === s.settings.countrycode && predictionsSplit.length < 2 ? (d = d.replace(s.settings.myCountry[s.settings.language], ", " + s.settings.myCountry[s.settings.language] + ", "), predictionsSplit = d.split(",")) : 10 === s.settings.countrycode && predictionsSplit.length < 3 && (d = d.replace(s.settings.myCountry[s.settings.language], s.settings.myCountry[s.settings.language] + ", "), predictionsSplit = d.split(",")), predictionsSplit[0]) {
                        var l = predictionsSplit[0].split(" ");
                        e.trim(l[0]).match(s.settings.PcMatch) && (n = 0)
                    }
                    predictionsSplit.pop();
                    var p = predictionsSplit.join(","),
                        u = p;
                    if ("postcode" === t[c].reference) {
                        predictionsSplit = d.split(",");
                        var p = predictionsSplit.join(" "),
                            u = e.trim(predictionsSplit[1])
                    }
                    predictionsSplit.length > 1 && ("mygeolocation" === t[c].reference ? (r += '<a href="#" onclick="return false;" class="item geolocation" id="reference" data-name="' + u + '" data-reference="' + t[c].reference + '"', r += ' data-postcode="' + t[c].id + '"', r += "><span>", r += p + " ", r += "</span></a>") : "undefined" != typeof t[c].useraddress && t[c].useraddress === !0 ? (0 === a && (r += '<div class="skip">' + s.settings.userAddressesLabel + "</div>"), r += '<a href="#" onclick="return false;" class="item" id="reference" data-name="' + u + '" data-reference="' + t[c].reference + '"', r += ' data-id="' + t[c].id + '"', r += "><span>", r += p + " ", r += "</span></a>", a++) : (r += '<a href="#" onclick="return false;" class="item" id="reference" data-name="' + u + '" data-reference="' + t[c].reference + '" data-route="' + predictionsSplit[0] + '"', r += "><span>", r += p + " ", r += "</span></a>"))
                }
                e(dropdownOutput).append(r), e(dropdownOutput).find("a.item:first").addClass("selected"), e(dropdown).fadeIn(100), "#ideliveryareapanelcontainer .autoCompleteDropDown" !== dropdown && s.settings.popupmode === !1 && e("#splash").css("position", "relative")
            }
        }, s.setAddress = function(e) {
            s.settings.userAddresses = e
        }, s.showDropdown = function(t, o) {
            e(t).show(), e(o).html(o)
        }, s.hideDropdown = function(t, o) {
            e(t).hide(), e(o).html(""), e("#splash").removeAttr("style"), searchStringBuffer = !1
        }, s.toggleDropdownPanel = function() {
            e(".btn-sorting").length && e(".btn-sorting").length && (resetView(this), toggleMap(!1)), e(".dropdown-location").hasClass("selected") ? (e(".dropdown-location-panel").addClass("selected").fadeIn(), e("#close_smartbnr").click(), e("#imysearchstring").keyup().focus().val("")) : e(".dropdown-location-panel").removeClass("selected").fadeOut()
        }, n()
    }
}(jQuery), $.fn.isVisible = function() {
    return $.expr.filters.visible(this[0])
}, function(e) {
    e.geoLocationFinder = function(t) {
        var o = this,
            r = this,
            i = {
                lat: "",
                lng: "",
                country: "",
                redirect: !1,
                active: !0,
                fetchgeo: !0
            };
        r.settings = {};
        var s = function() {
            if (r.settings = e.extend({}, i, t), r.el = o, r.settings.fetchgeo === !0)
                if ("false" !== r.checkHistory()) {
                    var s = Cookies.get("geolocator");
                    "failed" !== Cookies.get("geolocator") && r.geoCooder(s)
                } else
                    "failed" !== Cookies.get("geolocator") && (navigator.userAgent.indexOf("Safari") !== -1 && navigator.userAgent.indexOf("Chrome") === -1 ? setTimeout(function() {
                        r.fetchLocation()
                    }, 1e3) : r.fetchLocation())
        };
        r.fetchLocation = function() {
            r.settings.geomatch = !1, navigator.geolocation && r.settings.geomatch === !1 ? navigator.geolocation.getCurrentPosition(function(e) {
                r.settings.geomatch = !0, r.storeLocation(e.coords.latitude, e.coords.longitude), r.geoCooder()
            }, function(e) {
                r.failed()
            }, {
                maximumAge: 6e5,
                timeout: 1e4,
                enableHighAccuracy: !0
            }) : r.failed()
        }, r.failed = function() {
            r.storeLocation(!1, !1)
        }, r.geoCooder = function() {
            var t = new google.maps.Geocoder,
                o = new google.maps.LatLng(r.settings.lat, r.settings.lng);
            t.geocode({
                latLng: o,
                region: r.settings.country
            }, function(t, o) {
                if (o === google.maps.GeocoderStatus.OK && t[0]) {
                    var i = {};
                    null != t[0].address_components && e.each(t[0].address_components, function(t, o) {
                        e.each(o.types, function(e, t) {
                            i[t] = o.long_name
                        })
                    }), mygeolocation = {
                        description: i.route + ", " + i.locality + ", {dummy}",
                        id: i.postal_code,
                        reference: "mygeolocation"
                    }, AutoComplete.validateCountryforGeo(i.country) && (AutoComplete.setUserGeoLocation(mygeolocation), e("#geolocationnotice").html("<span class='mymarker fa fa-map-marker'></span>"), r.parseData(r.settings.lat, r.settings.lng, AutoComplete))
                }
            })
        }, r.parseData = function(t, o, r) {
            var i = {
                type: "geolocation",
                latlng: t + "," + o,
                language: GeoCountry
            };
            return e("#geolocationnotice").fadeOut(), r.settings.redirectGeoLocation !== !1 && void (document.cookie.indexOf("postcode") < 0 && e.ajax({
                type: "POST",
                url: "/findGeoLocation.php",
                data: i
            }).done(function(t) {
                var o = e.parseJSON(t),
                    r = !1;
                return mygeolocation && (r = mygeolocation.description, r = r.replace(", {dummy}", "")), "POSTCODE" === o.type ? (o.postcode && o.countrycode === GeoCountryCode && (e("#isearchstring").val(o.postcode), Cookies.set("postcode", o.postcode, {
                    expires: 365,
                    path: "/"
                }), Cookies.set("privacybanner_overrule", !0, {
                    expires: 365,
                    path: "/"
                }), r !== !1 ? Cookies.set("searchstring", r, {
                    expires: 365,
                    path: "/"
                }) : Cookies.set("searchstring", o.postcode, {
                    expires: 365,
                    path: "/"
                }), Cookies.remove("sortby"), e("body").hasClass("step1") && (window.top.location = o.value)), !1) : "HTML" === o.type ? (e("#imysearchstring").val(o.postcode), Cookies.set("postcode", o.postcode, {
                    expires: 365,
                    path: "/"
                }), Cookies.set("searchstring", o.postcode, {
                    expires: 365,
                    path: "/"
                }), e(dropdownOutput).html(o.value), e(dropdown).show(), !1) : void ("ERROR" !== o.type && "error" !== o.type || (e(errorOutput).show(), e(errorOutput).html(o.value)))
            }))
        }, r.storeLocation = function(e, t) {
            e === !1 && t === !1 ? Cookies.set("geolocator", "failed") : (r.settings.lat = e, r.settings.lng = t, Cookies.set("geolocator", r.settings.lat + "," + r.settings.lng))
        }, r.checkHistory = function() {
            var e = Cookies.get("geolocator");
            if ("undefined" != typeof e && "false" !== e) {
                var t = e.split(",");
                return r.settings.lat = t[0], r.settings.lng = t[1], !0
            }
            return "false"
        }, s()
    }
}(jQuery), $(function() {
    $("#myaddresses").click(function() {
        $(this).addClass("active"), $(".autoCompleteDropDownContent").addClass("userAddresses"), 0 === AutoComplete.settings.userAddresses.length ? $.ajax({
            method: "POST",
            url: "/scripts/autocomplete/index.php",
            data: {
                method: "useraddress"
            }
        }).done(function(e) {
            var t = $.parseJSON(e);
            AutoComplete.setDropdown(t, !1)
        }) : AutoComplete.setDropdown(AutoComplete.settings.userAddresses, !1)
    }), $("#mylocations").click(function() {
        $(this).addClass("active"), $(".autoCompleteDropDownContent").removeClass("userAddresses"), AutoComplete.setDropdown(AutoComplete.settings.collectedpredictions, !1)
    })
}), $(document).on("input keyup mouseup", searchField, function(e) {
    return e.preventDefault(), 38 !== e.keyCode && 40 !== e.keyCode && 13 !== e.keyCode && ((searchStringBuffer === !1 || searchStringBuffer !== $(this).val()) && (AutoComplete.settings.popupmode = $(searchField).hasClass("popupmode"), searchStringBuffer = $(this).val(), dropdown = "#deliveryareapanelwrap .autoCompleteDropDown", void AutoComplete.inputSearchField($(this).val())))
}), $(document).on("input keyup mouseup", searchFieldPopup, function(e) {
    return e.preventDefault(), 38 !== e.keyCode && 40 !== e.keyCode && 13 !== e.keyCode && ((searchStringBuffer === !1 || searchStringBuffer !== $(this).val()) && (AutoComplete.settings.popupmode = !0, searchField = searchFieldPopup, searchStringBuffer = $(this).val(), dropdown = "#ideliveryareapanelcontainer .autoCompleteDropDown", "" !== $(this).val() ? $("#ideliveryareapanelcontainer").addClass("selected") : $("#ideliveryareapanelcontainer").removeClass("selected"), void AutoComplete.inputSearchField($(this).val())))
}), $(document).on("input keyup mouseup", postcodeField, function(e) {
    return 38 !== e.keyCode && 40 !== e.keyCode && 13 !== e.keyCode && ((searchStringBuffer === !1 || searchStringBuffer !== $(this).val()) && (searchStringBuffer = $(this).val(), dropdown = "#deliveryareapanelwrap .autoCompleteDropDown", void AutoComplete.inputPostcodeField($(this).val())))
}), $(document).on("click", dropdown + " #reference", function() {
    AutoComplete.clickReference($(this))
}), $(document).on("click", ".dropdown-location", function(e) {
    $(this).toggleClass("selected"), AutoComplete.toggleDropdownPanel(), resetView($(this)), toggleMap(!1)
}), $(document).on("click", searchField, function(e) {
    if (e.preventDefault(), AutoComplete.settings.isMobileDevice === !0 && ("" !== $(this).val() && $(this).val() === AutoComplete.settings.searchfield && $(this).val(""), $(dropdownOutput).length > 0 && $(dropdown).show(), $("#smartbnr").length > 0))
        return $("#close_smartbnr").click(), !1
}), $(document).on("blur", searchField, function(e) {
    e.preventDefault(), AutoComplete.settings.isMobileDevice === !0 && "" === $(this).val() && $(this).val(AutoComplete.settings.searchfield)
}), $(document).on("click", "#ideliveryareaform .extralargebutton, #ideliveryareaform_popup .extralargebutton", function(e) {
    var t = $(e.target).closest("form");
    if (239 === AutoComplete.settings.countrycode) {
        var o = $("#isearchstring1", t).val(),
            r = $("#isearchstring2", t).val(),
            i = $("input[name='redirect']", t).val(),
            s = $("input[name='bid']", t).val();
        return "" !== $("#icustomerdeliveryarea", t).val() && 1 === $("#deliverytabbed", t).length && $("#deliverytabbed #location", t).hasClass("selected") ? AutoComplete.postCityDistrict("", "", $("#icustomerdeliveryarea", t).val()) : ("undefined" == typeof i && (i = !1), "undefined" == typeof s && (s = !1), AutoComplete.postCityDistrict(o, r, "", i, s)), !1
    }
    return AutoComplete.settings.popupmode = $(this).hasClass("popupmode"), Cookies.get("searchstring") === $("#imysearchstring", t).val() ? (AutoComplete.postLocation($("#isearchstring", t).val()), !1) : "" !== $(searchField).val() ? (AutoComplete.postLocation($(searchField).val()), !1) : 0 === $(dropdownOutput + " #reference:first-child").length ? (AutoComplete.postLocation(""), !1) : "" === $(searchField).val() && (AutoComplete.postLocation(""), !1)
}), $(document).mouseup(function(e) {
    var t = $(dropdown);
    $(searchField);
    $(searchField).on({
        click: function() {
            $(this).toggleClass("active")
        },
        mouseenter: function() {
            $(this).addClass("active")
        },
        mouseleave: function() {
            $(this).removeClass("active"), searchStringBuffer = !1
        }
    }), $(searchField).length > 0 && $(searchField).hasClass("active") === !1 && ("undefined" != typeof animateheader && (animateheader.settings.active = !1), 0 === t.has(e.target).length && "imysearchstring" !== $(e.target).attr("id") && (t.hide(), $("#deliveryareapanelwrap").removeClass("selected")))
}), $(document).on("input keyup mouseup", $("#imysearchstring"), function(e) {
    e.preventDefault(), $("#imysearchstring").is(":focus") === !0 && $("#deliveryareapanelwrap").hasClass("selected") === !1 && $("#deliveryareapanelwrap").addClass("selected")
}), $(document).keydown(function(e) {
    if ($(dropdown).is(":visible")) {
        var t = $("a", dropdown).length;
        if (t >= 1 && 13 === e.which) {
            var o = $(".selected", dropdown);
            return $("#ideliveryareaform #imysearchstring").val($.trim($(o).text())), $(o).click(), e.preventDefault(), !1
        }
        if (t > 1) {
            if (38 === e.keyCode) {
                var o = $(".selected", dropdown);
                $("a", dropdown).removeClass("selected"), 0 === o.prev().length ? o.siblings().last().addClass("selected").focus() : o.prev().is("a") ? o.prev().addClass("selected").focus() : o.prev().prev().addClass("selected").focus(), e.preventDefault()
            }
            if (40 === e.keyCode) {
                var o = $("a.selected", dropdown);
                $("a", dropdown).removeClass("selected"), 0 === o.next().length ? o.siblings().first().addClass("selected").focus() : o.next().is("a") ? o.next().addClass("selected").focus() : o.next().next().addClass("selected").focus(), e.preventDefault()
            }
        }
    }
}), $(dropdown).on("focus", "*", function(e) {
    $(dropdown).is(":visible") && $(e.currentTarget).hasClass("item") && !$(e.currentTarget).hasClass("selected") && ($("a", dropdown).removeClass("selected"), $(e.currentTarget).addClass("selected"))
});
function format_price(e, t, n, o, i) {
    return formatted = e.toMoney(t, n, o), "undefined" != typeof currency_config && "undefined" != typeof currency_config.symbolposition && "end" == currency_config.symbolposition ? formatted + " " + i : i + ("" !== i ? " " : "") + formatted
}
function in_array(e, t) {
    var n;
    for (n in t)
        if (t[n] == e)
            return !0;
    return !1
}
function relocatePopup(e) {
    if (e || (windowwidth = getWindowSize().x, windowheight = getWindowSize().y, windowwidth = $(window).width(), windowheight = $(window).height()), scrollpos = getScrollPosition().y, active_obj && "popupdiv" == active_obj.id) {
        var t = getElementSize(active_obj);
        if (e) {
            var n,
                o = new String(active_obj.style.top),
                i = parseInt(o.substr(0, o.length - 2));
            isNaN(i) && (i = 0), t.y >= windowheight ? (n = scrollpos, i + t.y > n && n > i && (n = i)) : n = Math.round(scrollpos + windowheight / 2 - t.y / 2);
            var a = Math.round(windowwidth / 2 - t.x / 2);
            window.setTimeout("interpolateLocation('" + active_obj.id + "', " + a + ", " + n + ", 20)", 1)
        } else {
            var t = getElementSize(active_obj),
                n = Math.round(scrollpos + windowheight / 2 - t.y / 2),
                a = Math.round(windowwidth / 2 - t.x / 2);
            window.setTimeout("interpolateLocation('" + active_obj.id + "', " + a + ", " + n + ", 20)", 1)
        }
    }
}
function setInterpolateLocation(e, t, n, o) {
    if ($("#" + e).hasClass(""))
        return !1;
    if (getIterationNumber(e) <= o) {
        var i = document.getElementById(e);
        $("#" + i.id).hasClass("fixed") || (i && (i.style.setProperty ? (i.style.setProperty("left", t + "px", null), i.style.setProperty("top", n + "px", null)) : (i.style.left = t + "px", i.style.top = n + "px")), updateIterationNumber(e, o))
    }
}
function interpolateLocation(e, t, n, o) {
    var i,
        a,
        s,
        c = 10,
        l = document.getElementById(e);
    t = Math.round(t), n = Math.round(n);
    var r = findPos(l);
    for (o > 0 && o < 100 && (c = o), updateIterationNumber(e, 0), i = 1; i <= c; i++)
        a = Math.round(r.left + (t - r.left) * (i / c)), s = Math.round(r.top + (n - r.top) * (i / c)), window.setTimeout("setInterpolateLocation('" + l.id + "', " + a + ", " + s + ", " + i + ")", 10 * i)
}
function updateIterationNumber(e, t) {
    var n;
    for (n = 0; n < lastiteration.length; n++)
        if (lastiteration[n][0] == e)
            return void (lastiteration[n][1] = t);
    lastiteration.push([e, t])
}
function getIterationNumber(e) {
    var t;
    for (t = 0; t < lastiteration.length; t++)
        if (lastiteration[t][0] == e)
            return lastiteration[t][1];
    return 0
}
function setPopupLocation(e) {
    if (e || (e = active_obj), e) {
        scrollpos = getScrollPosition().y;
        var t,
            n = (new String(e.style.top), getElementSize(e));
        t = n.y >= windowheight ? scrollpos : Math.round(scrollpos + $(window).height() / 2 - n.y / 2);
        var o = Math.round($(window).width() / 2 - n.x / 2);
        setInterpolateLocation(e.id, o, t, 1e3);
        var i = document.getElementsByTagName("BODY")[0],
            a = document.getElementById("blackoutdiv").style;
        if (a.setProperty) {
            var s = Math.max(i.offsetHeight, document.documentElement.clientHeight, i.scrollHeight, document.documentElement.scrollHeight, window.innerHeight);
            a.setProperty("height", s + "px", null)
        } else {
            var s = Math.max(i.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, i.scrollHeight, i.style.pixelHeight, i.style.height);
            a.height = s + "px"
        }
        a.visibility = "visible"
    }
}
function callBack(e) {
    $(active_content).html(e)
}
function callBack2(e) {
    $(active_content2).html(e)
}
function callBack3(e) {
    $(active_content3).html(e)
}
function callBackForm(e) {
    $(active_contentform).html(e), ie && (active_contentform.innerHTML = e)
}
function xmlRequestSimple(e, t, n, o) {
    if ("undefined" != typeof n) {
        var i = "";
        o ? i = o : $("input, select", "#" + e).each(function(e) {
            var t = $(this),
                n = t.attr("name"),
                o = t.val();
            "undefined" != typeof n && (i += n + "=" + o + "&")
        }), $.ajax({
            type: "POST",
            url: n,
            data: i,
            success: function(e) {
                if (e)
                    return $("#" + t).html(e), $("#" + t).css("visibility", "visible"), !1
            }
        })
    }
}
function xmlRequest(page, postvars, destination_id, focus_id, disableIcon, className) {
    var disableIcon = disableIcon || !1;
    if (connection && delete connection, active_content = document.getElementById(destination_id), window.XMLHttpRequest)
        connection = new XMLHttpRequest;
    else if (window.ActiveXObject)
        try {
            connection = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {
            connection = new ActiveXObject("Microsoft.XMLHTTP")
        }
    "undefined" != typeof className && $("#" + destination_id).removeClass().addClass(className), connection && (connection.open("POST", page, !0), connection.onreadystatechange = function() {
        if (4 != connection.readyState)
            return void (disableIcon || $("#" + destination_id).html('<div style="height:' + $("#" + destination_id).offsetHeight + 'px;"><img src="/images/loading.gif" border="0"></div>'));
        if (eval("callBack(connection.responseText);"), focus_id)
            try {
                var fcs = document.getElementById(focus_id);
                fcs && (setTimeout(function() {
                    document.getElementById(focus_id).focus()
                }, 100), setTimeout(function() {
                    document.getElementById(focus_id).focus()
                }, 100))
            } catch (e) {
                try {
                    fcs.focus()
                } catch (e2) {}
            }
        "popupdiv" == destination_id ? popUp(destination_id, className) : "userPanel" == destination_id ? popUpMini(destination_id, className) : $("#" + destination_id).css("visibility", "visible"), delete connection
    }, connection.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), connection.send(postvars))
}
function popUpMini(e) {
    if (null != active_obj)
        return !1;
    var t = document.getElementById(e);
    active_obj = t, active_obj.style.visibility = "visible", setModal(active_obj)
}
function xmlImageReloadRequest(e, t, n) {
    var o = document.getElementById(n);
    o.src = "" + e + "?" + t
}
function xmlFormRequestUrlRedirect(e, t, n, o, i) {
    var a;
    a = $(e).serialize(), 0 == a.length ? a = "tp=1" : a += "&tp=2", o ? xmlRequestUrlRedirect(o, a, t, n, i) : xmlRequestUrlRedirect(e.action, a, t, n, i)
}
function xmlRequestUrlRedirect(e, t, n, o) {
    $.ajax({
        type: "POST",
        url: e,
        data: t,
        dataType: "json",
        success: function(e, t) {
            return function(n, o, i) {
                try {
                    var a = $("#" + e);
                    $("#" + t);
                    switch (n.type) {
                    case "url":
                        window.top.location = n.value;
                        break;
                    case "formpost":
                        var s = document.createElement("FORM");
                        for (document.body.appendChild(s), s.method = "POST", l = 0; l < n.inputs.length; l += 2) {
                            var c = document.createElement("input");
                            c.name = n.inputs[l], c.type = "hidden", c.value = n.inputs[l + 1], s.appendChild(c)
                        }
                        s.action = n.value, s.submit();
                        break;
                    case "error":
                        var l;
                        for (l = 0; l < n.markfields.length; l++)
                            $("#" + n.markfields[l]).addClass("marked");
                        document.getElementById(t) && (document.getElementById(t).style.display = "block", $(document.getElementById(t)).html(n.value)), "popupdiv" == t && popUp(e, n.popuptype);
                        break;
                    case "html":
                        a.html(n.value), "popupdiv" == e && popUp(e, n.popuptype);
                        break;
                    default:
                        a.html(i.responseText), "popupdiv" == e && popUp(e, n.popuptype)
                    }
                } catch (r) {
                    a.html(i.responseText), "popupdiv" == e && popUp(e)
                }
            }
        }(n, o)
    })
}
function xmlRequestCallback(page, postvars, callbackproc) {
    if (connection && delete connection, window.XMLHttpRequest)
        connection = new XMLHttpRequest;
    else if (window.ActiveXObject)
        try {
            connection = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {
            connection = new ActiveXObject("Microsoft.XMLHTTP")
        }
    connection && (connection.open("POST", page, !0), connection.onreadystatechange = function() {
        if (4 == connection.readyState) {
            var responsetext = connection.responseText;
            eval(callbackproc + "(connection.responseText);"), delete connection
        }
    }, connection.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), connection.send(postvars))
}
function xmlRequest2(page, postvars, destination_id, disableIcon) {
    var disableIcon = disableIcon || !1;
    if (connection2 && delete connection2, active_content2 = document.getElementById(destination_id), window.XMLHttpRequest)
        connection2 = new XMLHttpRequest;
    else if (window.ActiveXObject)
        try {
            connection2 = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {
            connection2 = new ActiveXObject("Microsoft.XMLHTTP")
        }
    connection2 && (connection2.open("POST", page, !0), connection2.onreadystatechange = function() {
        return 4 != connection2.readyState ? void (disableIcon || $("#" + destination_id).html('<div style="height:' + $("#" + destination_id).offsetHeight + 'px;"><img src="/images/loading.gif" border="0"></div>')) : (eval("callBack2(connection2.responseText);"), "popupdiv" == destination_id && popUp(destination_id), void delete connection2)
    }, connection2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), connection2.send(postvars))
}
function xmlRequest3(page, postvars, destination_id, disableIcon) {
    var disableIcon = disableIcon || !1;
    if (connection3 && delete connection3, active_content3 = document.getElementById(destination_id), window.XMLHttpRequest)
        connection3 = new XMLHttpRequest;
    else if (window.ActiveXObject)
        try {
            connection3 = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {
            connection3 = new ActiveXObject("Microsoft.XMLHTTP")
        }
    connection3 && (connection3.open("POST", page, !0), connection3.onreadystatechange = function() {
        return 4 != connection3.readyState ? void (disableIcon || $("#" + destination_id).html('<div style="height:' + $("#" + destination_id).offsetHeight + 'px;"><img src="/images/loading.gif" border="0"></div>')) : (eval("callBack3(connection3.responseText);"), "popupdiv" == destination_id && popUp(destination_id), void delete connection3)
    }, connection3.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), connection3.send(postvars))
}
function xmlRequestForm(page, postvars, destination_id, dwdw, disableIcon, focus_id) {
    var disableIcon = disableIcon || !1,
        dwdw = dwdw || window;
    if (connectionform && delete connectionform, active_contentform = dwdw.document.getElementById(destination_id), window.XMLHttpRequest)
        connectionform = new XMLHttpRequest;
    else if (window.ActiveXObject)
        try {
            connectionform = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {
            connectionform = new ActiveXObject("Microsoft.XMLHTTP")
        }
    connectionform && (connectionform.open("POST", page, !0), connectionform.onreadystatechange = function() {
        if (4 != connectionform.readyState)
            return void (disableIcon || $("#" + destination_id).html('<div style="height:' + $("#" + destination_id).offsetHeight + 'px;"><img src="/images/loading.gif" border="0"></div>'));
        if (eval("callBackForm(connectionform.responseText);"), focus_id)
            try {
                var fcs = document.getElementById(focus_id);
                fcs && (setTimeout(function() {
                    document.getElementById(focus_id).focus()
                }, 100), setTimeout(function() {
                    document.getElementById(focus_id).focus()
                }, 100))
            } catch (e) {
                try {
                    fcs.focus()
                } catch (e2) {}
            }
        "popupdiv" == destination_id ? popUp(destination_id) : "userPanel" == destination_id && popUpMini(destination_id), delete connectionform
    }, connectionform.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), connectionform.send(postvars))
}
function xmlFormSubmit(e, t, n, o, i, a, s, c) {
    var l,
        r = "",
        o = o || window,
        i = i || window;
    for (theform = o.document.getElementById(e), l = 0; l < theform.elements.length; l++)
        "text" == theform.elements[l].type || "textarea" == theform.elements[l].type || "hidden" == theform.elements[l].type || "radio" == theform.elements[l].type && theform.elements[l].checked || "checkbox" == theform.elements[l].type && theform.elements[l].checked || "password" == theform.elements[l].type ? r = 0 == r.length ? theform.elements[l].name + "=" + encodeURIComponent(theform.elements[l].value) : r + "&" + theform.elements[l].name + "=" + encodeURIComponent(theform.elements[l].value) : "select-one" != theform.elements[l].type && "select" != theform.elements[l].type || (r = 0 == r.length ? theform.elements[l].name + "=" + encodeURIComponent(theform.elements[l].options[theform.elements[l].selectedIndex].value) : r + "&" + theform.elements[l].name + "=" + encodeURIComponent(theform.elements[l].options[theform.elements[l].selectedIndex].value));
    return "undefined" != typeof c && ($("#" + t).removeClass(), $("#" + t).addClass(c)), n ? xmlRequestForm(n, r, t, i, a, s) : xmlRequestForm(theform.action, r, t, i, a, s), !1
}
function popUp(e, t) {
    if (null != active_obj && "irestaurantresults" != active_obj.id)
        return !1;
    var n = document.getElementById(e);
    popupwidth = getElementSize(n).x, popupheight = getElementSize(n).y, null != t && $(n).addClass(t), $(n).hasClass("fixed") || setPopupLocation(n), setModal(n), active_obj = n, active_obj.style.visibility = "visible"
}
function setModal(e) {
    window.lastFocus = document.activeElement, $("#" + e.id).addClass("modal"), e.style.visibility = "visible", focusableElements = $("a[href], area[href], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]", $("#" + e.id)).not("[tabindex=-1], [disabled], :hidden"), setTimeout(function() {
        focusableElements.first().focus()
    }, 100), $("html body").on("focus", "*", function(t) {
        t.stopPropagation(), $("#" + e.id).hasClass("modal") && !e.contains(t.target) && setTimeout(function() {
            focusableElements.first().focus()
        }, 100)
    }), $("html,body").on("keydown", function(t) {
        27 === t.keyCode && closeActivePopUp(e)
    }), $("html,body").on("click", function(t) {
        $("#" + e.id).hasClass("modal") && !e.contains(t.target) && closeActivePopUp(e)
    })
}
function unsetModal(e) {
    $("#" + e.id).hasClass("modal") && ($("#" + e.id).removeClass("modal"), $("html body").off("focus"), $("html body").off("keydown"), $("html body").off("click"), window.lastFocus.focus())
}
function closeActivePopUpMini() {
    $(active_obj2).html(""), unsetModal(active_obj2)
}
function closeActivePopUp(e) {
    if ("undefined" != e && null == active_obj && (active_obj = document.getElementById(e)), null != active_obj) {
        unsetModal(active_obj), $("#" + active_obj.id).css({
            top: "",
            left: ""
        }).removeClass().addClass("popupdiv"), active_obj.innerHTML = "", active_obj.width = 1, active_obj.height = 1, active_obj.style.visibility = "hidden", active_obj = null;
        var t = document.getElementById("blackoutdiv");
        t.style.visibility = "hidden", t.style.height = "inherit"
    }
}
function findPos(e) {
    var t = 0,
        n = 0;
    if (e.offsetParent)
        for (; e.offsetParent;) {
            t += e.offsetLeft - e.scrollLeft, n += e.offsetTop - e.scrollTop;
            var o = "";
            if (e.style && e.style.position && (o = e.style.position.toLowerCase()), "absolute" == o || "relative" == o)
                break;
            for (; e.parentNode != e.offsetParent;)
                e = e.parentNode, t -= e.scrollLeft, n -= e.scrollTop;
            e = e.offsetParent
        }
    else
        e.x && (t += e.x), e.y && (n += e.y);
    return {
        left: t,
        top: n
    }
}
function getWindowSize() {
    return "undefined" != typeof window.innerWidth ? {
        x: window.innerWidth,
        y: window.innerHeight
    } : {
        x: document.documentElement.clientWidth,
        y: document.documentElement.clientHeight
    }
}
function getElementSize(e) {
    return !!e && {
            x: e.offsetWidth,
            y: e.offsetHeight
        }
}
function getScrollPosition() {
    var e = document.documentElement.scrollTop,
        t = document.documentElement.scrollLeft;
    return 0 == e && (e = window.pageYOffset ? window.pageYOffset : document.parentElement ? document.parentElement.scrollTop : 0), 0 == t && (t = window.pageXOffset ? window.pageXOffset : document.parentElement ? document.parentElement.scrollLeft : 0), {
        x: t,
        y: e
    }
}
function fillRestaurantPulldown() {
    var e = document.getElementById("irestaurantpulldown"),
        t = document.getElementById("irestaurantpulldowndata");
    if (e && t) {
        var n,
            o = t.getElementsByTagName("a"),
            i = "";
        for (n = 0; n < o.length; n++) {
            i = document.all ? o[n].innerText : o[n].text ? o[n].textContent : o[n].innerHTML, i.length > 40 && (i = i.substr(0, 40) + "..");
            var a = new Option(i, o[n].href);
            a.className = o[n].className, e.options[n] = a
        }
    }
}
function restaurantpulldownRedirect(e) {
    var t = document.getElementById("irestaurantpulldown");
    if (t) {
        var n = t.options[e].value;
        if (n)
            return window.top.location = n, !1
    }
}
function trim(e) {
    for (var t = e, n = 0, o = e.charAt(n); (" " == o || "\n" == o || "\r" == o || "\t" == o) && n < e.length;)
        t = e.substr(n + 1), n++, o = e.charAt(n);
    for (n = t.length - 1, o = t.charAt(n); (" " == o || "\n" == o || "\r" == o || "\t" == o) && n > 0;)
        t = t.substr(0, n), n = t.length - 1, o = t.charAt(n);
    return t
}
function getElementStyle(e) {
    if (document.layers)
        return document.layers[e];
    if (document.getElementById) {
        var t = document.getElementById(e);
        return !!t && t.style
    }
    var t = document.all[e];
    return !!t && t.style
}
function scrollToElement(e) {
    var t = document.getElementById(e);
    t && t.scrollIntoView(!0)
}
function setMinHeights() {
    var e,
        t = document.getElementById("ibasket"),
        n = document.getElementById("imenucategory");
    if (t) {
        var o = getElementSize(t);
        e = t.parentNode, e && (e.style.minHeight = o.y + "px")
    }
    if (n) {
        var i = getElementSize(n);
        e = n.parentNode, e && (e.style.minHeight = i.y + "px")
    }
}
function checkPostcodeRadiobutton(e) {
    e.checked = !0, checkRadiobutton(e, "")
}
function focusSearchField() {
    var e = document.getElementById("isearchstring");
    e ? e.focus() : (e = document.getElementById("isearchstring1"), e && e.focus())
}
function showHideAccountCompany(e) {
    var t = document.getElementById("iaccountcompanyrow");
    if (t)
        if (e)
            try {
                t.style.display = "table-row"
            } catch (n) {
                t.style.display = "block"
            }
        else
            t.style.display = "none"
}
function displayLoggedInOutText(e) {
    $("#userPaneltoggle").html(e), $(".CloseBtn", "#userPanel").html(e)
}
function displayLoggedInOut(e) {
    var t;
    e ? (t = document.getElementById("imenuoptionloggedincontainer"), t && (t.className = "menuoptionloggedincontainer"), t = document.getElementById("imenuoptionloggedoutcontainer"), t && (t.className = "menuoptionloggedoutcontainer_nodisplay")) : (t = document.getElementById("imenuoptionloggedincontainer"), t && (t.className = "menuoptionloggedincontainer_nodisplay"), t = document.getElementById("imenuoptionloggedoutcontainer"), t && (t.className = "menuoptionloggedoutcontainer"))
}
function xmlFormSubmitHtml(e, t, n) {
    var o;
    o = $("#" + e).serialize(), 0 == o.length ? o = "tp=1" : o += "&tp=2", $.ajax({
        type: "POST",
        url: n,
        data: o,
        success: function(e) {
            var n = $.parseJSON(e);
            return "redirect" == n.type ? (document.location = n.value, !1) : "html" == n.type ? ($("." + t).html(n.value), !1) : void 0
        }
    })
}
function xmlRequestMini(e, t, n, o, i) {
    var a;
    t && (a = e + t), "undefined" != typeof i && ($("#" + n).removeClass(), $("#" + n).addClass(i)), $.ajax({
        type: "POST",
        url: e,
        data: a,
        success: function(e) {
            var t = $.parseJSON(e);
            return "redirect" == t.type ? (document.location = t.value, !1) : "html" == t.type ? ($("." + n).html(t.value), $("." + n).css("visibility", "visible"), !1) : void 0
        }
    })
}
function openRestaurantFavorites(e, t, n, o) {
    if (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, $("#irestaurant" + t).parent().hasClass("restaurantlist-grid") && $(document).width() > 640)
        var i = "popupdiv",
            a = "popupdiv showRestaurantReviews";
    else
        var i = "irestaurantreviews_" + t,
            a = "restaurantcompactreviews grid-24";
    return xmlRequest(n, "bid=" + t, i, !1, !1, a), !1
}
function openRestaurantDiscount(e, t, n, o) {
    if (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, $("#irestaurant" + n).parent().hasClass("restaurantlist-grid") && $(document).width() > 640)
        var i = "popupdiv",
            a = "popupdiv showRestaurantReviews";
    else
        var i = "irestaurantreviews_" + n,
            a = "restaurantcompactreviews grid-24";
    return xmlRequest(t, "bid=" + n + "&rightpart=" + o, i, !1, !1, a), !1
}
function closeCurrentActivePopup(e, t) {
    return e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, closeActivePopUp(t), !1
}
function preselectFirstEmptyFormField() {
    return "" == $("#iaddress", "#main").val() && $("#iaddress").focus(), !1
}
function relocatePromovideoPopup() {
    var e = $(".promovideo"),
        t = 1.77777;
    $(window).width(), $(window).height();
    if ($(e).isVisible()) {
        var n = $(window).width() - 50,
            o = n / t;
        $(e).height() < o && (o = $(e).height(), n = $(e).height() * t), $(".iframe", e).css("width", n + "px").css("height", o + "px"), $("html,body").on("keydown", function(e) {
            e.keyCode && 27 !== e.keyCode || $(".closevideoplayer").click()
        })
    }
}
function repositionNavDiv(e) {
    if ($("body").hasClass("step2"))
        return tempFilterDiv();
    state = "";
    var t = $("#fixednav");
    topMargin = 10, bottomMargin = 60, viewport_top_Ypos = $(window).scrollTop(), header_bottom_Ypos = $("div#splash").height(), viewport_top_Ypos < header_bottom_Ypos && (viewport_top_Ypos = header_bottom_Ypos), viewport_bottom_Ypos = Math.abs($(window).scrollTop() + $(window).height()) - bottomMargin, footer_top_Ypos = $("footer").offset().top - bottomMargin, footerVisible = footer_top_Ypos < viewport_bottom_Ypos, footerVisible && (viewport_bottom_Ypos = footer_top_Ypos), $("body").hasClass("step2") ? column = $("#filter-panel") : column = t.parents("[class^=grid-]").first(), t.outerWidth(column.width() + "px"), window.fixednav_fits_in_view && (viewport_top_Ypos + 110 > window.fixednav_initial_Ypos ? (newtop = $(window).scrollTop() - topMargin, t.css({
        position: "absolute",
        top: newtop + "px"
    }), state = "stickToTopViewport 1") : (t.css({
        position: "",
        top: ""
    }), state = "initial fits")), window.fixednav_fits_in_view || ("down" == window.scrollDirection && (t.offset().top + window.fixednavheight - topMargin <= viewport_bottom_Ypos ? (newtop = viewport_bottom_Ypos - window.fixednavheight, $("body").hasClass("step3") && (newtop -= $("#splash").height() + topMargin), t.css({
        position: "absolute",
        top: newtop + "px"
    }), state = "stickToBottomViewport") : state = "transitioning 1"), "up" == window.scrollDirection && ($("body").hasClass("deliveryareapanelbig") ? viewport_top_Ypos + bottomMargin + topMargin < window.fixednav_initial_Ypos ? (t.css({
        position: "",
        top: ""
    }), state = "initial") : t.offset().top >= $(window).scrollTop() ? (newtop = $(window).scrollTop() - $("#splash").height() + topMargin, t.css({
        position: "absolute",
        top: newtop + "px"
    }), state = "stickToTopViewport 2") : state = "transitioning 2" : viewport_top_Ypos + bottomMargin + topMargin < window.fixednav_initial_Ypos ? (t.css({
        position: "",
        top: ""
    }), state = "initial") : $("body").hasClass("step3") ? t.offset().top - bottomMargin >= viewport_top_Ypos && !footerVisible ? (newtop = $(window).scrollTop() - topMargin, t.css({
        position: "absolute",
        top: newtop + "px"
    }), state = "stickToTopViewport 3") : state = "transitioning 3" : t.offset().top >= viewport_top_Ypos ? (newtop = $(window).scrollTop() + $("#splash").height() + topMargin, t.css({
        position: "absolute",
        top: newtop + "px"
    }), state = "stickToTopViewport 4") : state = "transitioning 4")), "resize" == e.type && fixClippedFooter(bottomMargin), test = {
        event: e.type,
        scrolldirection: window.scrollDirection,
        newtop: t.css("top"),
        state: state
    }
}
function fixClippedFooter(e) {
    delta = $("#fixednav").offset().top + $("#fixednav").outerHeight() - $("footer").offset().top, delta > 0 && (newtop = $("#fixednav").offset().top - (delta + 130) - e, $("#fixednav").css("top", newtop + "px"), state += " corrected")
}
function tempFilterDiv() {
    if ($("#main").hasClass("sc-filter-hover"))
        $("#fixednav").attr("style", "");
    else if (filterpanel = $("#filter-panel"), $("#fixednav").outerWidth(filterpanel.width() + "px"), $(window).scrollTop() > $(".fixednavtop").offset().top - $("#splash").height())
        if ($(window).scrollTop() + $("#fixednav").height() > filterpanel.height()) {
            $("#fixednav").css("position", "absolute");
            var e = $("footer").offset().top - $("#fixednav").height() - 25;
            $("#fixednav").css("top", e + "px")
        } else
            $("#fixednav").css("position", "fixed"), $("#fixednav").css("top", $("#splash").height() + 14 + "px");
    else
        $(window).scrollTop() <= $(".fixednavtop").offset().top && $("#fixednav").attr("style", "")
}
function documentEvent(e) {
    if ("click" == e.type) {
        if (displayingbox)
            return imageselectboxactive = !0, displayingbox = !1, e.returnValue = !1, !1;
        if (imageselectboxactive)
            return hideAllImageSelectBoxes(), imageselectboxactive = !1, e.returnValue = !1, !1
    }
    if (window.routeEvent && window.routeEvent(e), e)
        return e.returnValue
}
function displayImageSelectBox(e) {
    if (imageselectboxactive)
        hideAllImageSelectBoxes();
    else {
        displayingbox = !0;
        var t = document.getElementById(e);
        t && "imagepulldown" == t.className && (t.className = "imagepulldown_show"), $("#iimagepulldownmarker").addClass("imagepulldownmarker_show")
    }
    return !1
}
function hideAllImageSelectBoxes() {
    if (imageselectboxactive) {
        var e = document.getElementsByTagName("ul");
        if (e)
            for (i = 0; i < e.length; i++)
                "imagepulldown_show" == e[i].className && (e[i].className = "imagepulldown"), "imagepulldownmarker" == e[i].className && (e[i].className = "imagepulldownmarker_show");
        imageselectboxactive = !1, $("#iimagepulldownmarker").removeClass("imagepulldownmarker_show")
    }
}
function changeValueImageSelectBox(e, t) {
    var n,
        o,
        i,
        a = document.getElementById("i" + e + "data"),
        s = document.getElementById("i" + e),
        c = document.getElementById("i" + e + "selected");
    a && (n = a.getElementsByTagName("li"), n && (o = n[t], o && (i = o.childNodes[0], i && i.href && (s.value = i.href), c && (c.childNodes[1].innerHTML = i.innerHTML))))
}
function pmButtonAddOne(e, t) {
    void 0 == t && (t = 99);
    var n = e.split(",");
    if (n.length > 1)
        for (i = 0; i < n.length; i++)
            pmButtonAddOne(n[i], t);
    else {
        var o = n[0];
        target_element = document.getElementById("i" + o), null != target_element && ("INPUT" == target_element.tagName ? (cur_value = parseInt(target_element.value), cur_value < t ? target_element.value = cur_value + 1 : target_element.value = t) : (cur_value = parseInt(target_element.innerHTML), cur_value < t ? target_element.innerHTML = cur_value + 1 : target_element.innerHTML = t))
    }
}
function pmButtonSubtractOne(e, t) {
    void 0 == t && (t = 0);
    var n = e.split(",");
    if (n.length > 1)
        for (i = 0; i < n.length; i++)
            pmButtonSubtractOne(n[i], t);
    else {
        var o = n[0];
        target_element = document.getElementById("i" + o), null != target_element && ("INPUT" == target_element.tagName ? (cur_value = parseInt(target_element.value), cur_value > t ? target_element.value = cur_value - 1 : target_element.value = t) : (cur_value = parseInt(target_element.innerHTML), cur_value > t ? target_element.innerHTML = cur_value - 1 : target_element.innerHTML = t))
    }
}
function is_touch_device() {
    return "ontouchstart" in window || navigator.maxTouchPoints
}
function throttle(e, t, n) {
    var o,
        i,
        a,
        s = null,
        c = 0;
    n || (n = {});
    var l = function() {
        c = n.leading === !1 ? 0 : Date.now(), s = null, a = e.apply(o, i), s || (o = i = null)
    };
    return function() {
        var r = Date.now();
        c || n.leading !== !1 || (c = r);
        var d = t - (r - c);
        return o = this, i = arguments, d <= 0 || d > t ? (s && (clearTimeout(s), s = null), c = r, a = e.apply(o, i), s || (o = i = null)) : s || n.trailing === !1 || (s = setTimeout(l, d)), a
    }
}
function debounce(e, t, n) {
    var o;
    return function() {
        var i = this,
            a = arguments,
            s = function() {
                o = null, n || e.apply(i, a)
            },
            c = n && !o;
        clearTimeout(o), o = setTimeout(s, t), c && e.apply(i, a)
    }
}
var connection,
    connection2,
    connection3,
    connectionform,
    connectionurlform,
    imageconnection,
    active_obj = null,
    active_content = null,
    active_content2 = null,
    active_content3 = null,
    active_contentform = null,
    active_content_formurl = null,
    windowwidth = getWindowSize().x,
    windowheight = getWindowSize().y,
    scrollpos = 0,
    popupwidth = 520,
    popupheight = 300,
    lastiteration = new Array,
    userPanel = !1,
    originalPreventDefault = jQuery.Event.prototype.preventDefault;
jQuery.Event.prototype.preventDefault = function() {
    return window.event && (window.event.returnValue = !1, window.event.cancelBubble = !0), originalPreventDefault.apply(this, arguments)
}, Number.prototype.toMoney = function(e, t, n) {
    var o = this,
        i = isNaN(e) ? 2 : Math.abs(e),
        a = t || ".",
        s = "undefined" == typeof n ? "," : n,
        c = o < 0 ? "-" : "",
        l = parseInt(o = Math.abs(o).toFixed(i)) + "",
        r = (r = l.length) > 3 ? r % 3 : 0;
    return c + (r ? l.substr(0, r) + s : "") + l.substr(r).replace(/(\d{3})(?=\d)/g, "$1" + s) + (i ? a + Math.abs(o - l).toFixed(i).slice(2) : "")
};
var ie = function() {
    for (var e, t = 3, n = document.createElement("div"), o = n.getElementsByTagName("i"); n.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->", o[0];)
        ;
    return t > 4 ? t : e
}();
$(document).ready(function() {
    $(document).keypress(function(e) {
        13 == e.which
    })
}), $("#ivouchermessage .notificationfeedback").on("click", function() {
    $(".notificationfeedbackwrapper").hide()
}), $(document).mousedown(function(e) {
    var t = $("#userPanel");
    "" != $(t).html() && (t.is(e.target) || 0 !== t.has(e.target).length || (active_obj = null, $(t).empty(), $(t).removeClass("userPanelWide"), $(t).css("visibility", "hidden")))
}), $(document).ready(function() {
    $(".restaurantcompactreviews").click(function(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    })
}), $(document).ready(function() {
    0 == $("body.step2").length, $("#smartbnr").length > 0 && "disabled" != Cookies.get("deviceBnnr") && $("body").addClass("activesmartbanner"), $(document).on("click touchend", "#smartbnr", function(e) {
        return $(e.target).hasClass("closeicon") ? ($("#smartbnr").hide(), Cookies.set("deviceBnnr", "disabled"), $("body").removeClass("activesmartbanner"), !1) : void (location.href = $(this).attr("data-url"))
    }), $(document).on("click touchend", ".blackout", function(e) {
        if ($("#basketOrb").length && $("#basketOrb").hasClass("opened")) {
            if ($("#basketOrb").hasClass("stopClickPropagation") !== !1)
                return;
            $("#basketOrb").trigger("basketClose")
        }
        closeActivePopUp("popupdiv")
    })
}), $(document).ready(function() {
    $(document).on("click", ".deliverytabbed li", function(e) {
        $("li", ".deliverytabbed").removeClass("selected"), "address" == $(this).attr("id") ? ($(".address", ".deliverytabbed").addClass("selected"), $(".citydistrictpulldowns").removeClass("hidden"), $(".locationpulldowns").addClass("hidden")) : ($(".location", ".deliverytabbed").addClass("selected"), $(".citydistrictpulldowns").addClass("hidden"), $(".locationpulldowns").removeClass("hidden")), Cookies.set("deliverytab", $(this).attr("id"), {
            expires: 365,
            path: "/"
        }), e.preventDefault()
    })
}), $(document).ready(function() {
    $(".pickup, .takeaway", "#ta-switch").click(function() {
        $(".switch").click()
    }), $(".switch", "#ta-switch").click(function() {
        var e = $(this).attr("data-value"),
            t = $(".takeaway"),
            n = $(".pickup"),
            o = "+=83",
            i = '<i class="fa fa-bars fa-rotate-90"></i>',
            a = $(this).parent().innerWidth();
        o = a / 2 - 8, "takeaway" == e ? (t.removeClass("inactive"), n.addClass("inactive"), $(this).html(i + " " + n.html()), $(this).animate({
            left: "+=" + o
        }, 30, function() {
            $(this).attr("data-value", "pickup"), $(this).parent().find("input").val("pickup"), $.cookie("takeawaypickup", "pickup", {
                expires: 365,
                path: "/"
            })
        })) : ($(this).hasClass("switchpickup") && $(this).css("right", "auto").css("left", o + "px").removeClass("switchpickup"), n.removeClass("inactive"), t.addClass("inactive"), $(this).html(i + " " + t.html()), $(this).animate({
            left: "-=" + o
        }, 30, function() {
            $(this).attr("data-value", "takeaway"), $(this).parent().find("input").val("takeaway")
        }))
    }), $("#fixednav").length && ($("#fixednav").addClass("loaded"), window.fixednavheight = $("#fixednav").outerHeight(), window.fixednav_fits_in_view = $(window).height() - $("div#splash").height() - $("footer").height() > window.fixednavheight, window.fixednav_initial_Ypos = $(".fixednavtop").offset().top, $(".grid-17").css("min-height", window.fixednavheight + window.fixednav_initial_Ypos - 130 + "px"))
}), $("html,body").on("touchstart scroll mousedown DOMMouseScroll mousewheel", function(e) {
    (e.which > 0 || "mousedown" === e.type || "mousewheel" === e.type || "touchstart" === e.type) && $("html,body").stop()
}), window.onresize = function(e) {
    relocatePopup(!1), $(".promovideo").length > 0 && relocatePromovideoPopup(), $("#fixednav").length && $("#fixednav").hasClass("loaded") && (window.fixednavheight = $("#fixednav").outerHeight(), window.fixednav_fits_in_view = $(window).height() - $("div#splash").height() - $("footer").height() > window.fixednavheight, window.fixednav_initial_Ypos = $(".fixednavtop").offset().top, $("#fixednav").is(":visible") && repositionNavDiv(e))
}, document.onscroll = function(e) {
    relocatePopup(!0), st = window.pageYOffset, void 0 == window.lastScrollTop || st > window.lastScrollTop ? window.scrollDirection = "down" : window.scrollDirection = "up", window.lastScrollTop = st, $("#fixednav").length && $("#fixednav").hasClass("loaded") && $("#fixednav").is(":visible") && repositionNavDiv(e)
}, $(window).on("switchedCompact, switchedJumboFromCompact", function() {
    $("#fixednav").length && $("#fixednav").hasClass("loaded") && (window.fixednav_fits_in_view = $(window).height() - $("div#splash").height() - $("footer").height() > window.fixednavheight, window.fixednav_initial_Ypos = $(".fixednavtop").offset().top)
});
var imageselectboxactive = !1,
    displayingbox = !1;
document.attachEvent ? document.attachEvent("onclick", documentEvent) : window.addEventListener ? window.addEventListener("click", documentEvent, !1) : document.addEventListener ? document.addEventListener("click", documentEvent, !1) : (document.captureEvents(Event.CLICK), document.onclick = documentEvent), is_touch_device() ? $("html").addClass("touch") : $("html").addClass("no-touch"), !function(e) {
    function t(e, t) {
        if (!(e.originalEvent.touches.length > 1)) {
            e.preventDefault();
            var n = e.originalEvent.changedTouches[0],
                o = document.createEvent("MouseEvents");
            o.initMouseEvent(t, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(o)
        }
    }
    if (e.support.touch = "ontouchend" in document, e.support.touch) {
        var n,
            o = e.ui.mouse.prototype,
            i = o._mouseInit,
            a = o._mouseDestroy;
        o._touchStart = function(e) {
            var o = this;
            !n && o._mouseCapture(e.originalEvent.changedTouches[0]) && (n = !0, o._touchMoved = !1, t(e, "mouseover"), t(e, "mousemove"), t(e, "mousedown"))
        }, o._touchMove = function(e) {
            n && (this._touchMoved = !0, t(e, "mousemove"))
        }, o._touchEnd = function(e) {
            n && (t(e, "mouseup"), t(e, "mouseout"), this._touchMoved || t(e, "click"), n = !1)
        }, o._mouseInit = function() {
            var t = this;
            t.element.bind({
                touchstart: e.proxy(t, "_touchStart"),
                touchmove: e.proxy(t, "_touchMove"),
                touchend: e.proxy(t, "_touchEnd")
            }), i.call(t)
        }, o._mouseDestroy = function() {
            var t = this;
            t.element.unbind({
                touchstart: e.proxy(t, "_touchStart"),
                touchmove: e.proxy(t, "_touchMove"),
                touchend: e.proxy(t, "_touchEnd")
            }), a.call(t)
        }
    }
}(jQuery);
function refreshLazyLoad() {
    $(window).trigger("lazyupdate")
}
$(function() {
    $(".restlogo").length > 0 && $(".restlogo").recliner({
        attrib: "data-original",
        throttle: 100,
        threshold: 500,
        live: !0
    }), $(".menucardproductimg").length > 0 && $(".menucardproductimg").recliner({
        attrib: "data-original",
        throttle: 100,
        threshold: 500,
        live: !0
    })
});
$(document).on("click", "#toTop", function() {
    return $("html, body").animate({
        scrollTop: 0
    }, "slow"), !1
});
var totop = !1;
$(window).scroll(function() {
    var o = $(window).scrollTop();
    o > 300 && totop === !1 ? (totop = !0, $("body").append('<a href="#" class="toTop" id="toTop"></a>').show()) : o <= 300 && 0 != totop && (totop = !1, $("#toTop").remove())
});
!function(e) {
    e.userPanel = function(t, n) {
        var l = this,
            s = "body",
            a = "#userpanel",
            r = {
                userpanelvisible: !1,
                fullscreen: !1,
                myaccount: !1
            };
        l.settings = e.extend({}, r, n), l.Run = function() {
            Modernizr.mq("(max-width: 639px)") && (l.settings.fullscreen = !0), l.settings.userpanelvisible === !1 ? l.Show() : l.Hide()
        }, l.Show = function() {
            l.settings.fullscreen && e(s).addClass("fullscreen").find(".content").addClass("collapse"), e.ajax({
                type: "POST",
                url: site.local + "xHttp/CustomerPanel.php"
            }).done(function(t) {
                e(a).html(t), l.settings.myaccount === !0 ? e(a).addClass("userpanel-myaccount show") : e(a).addClass("show"), l.settings.userpanelvisible = !0, toggleMap(!1)
            })
        }, l.Hide = function() {
            e(s).removeClass("fullscreen").find(".content").removeClass("collapse"), e(a).removeClass("show").removeAttr("style"), l.settings.userpanelvisible = !1
        }, l.OpenMenuItem = function(t) {
            e.post(site.local + "xHttp/CustomerPanel.php", {
                open: t
            }).done(function(n) {
                if (n) {
                    n = e.parseHTML(n);
                    var l = e(n).filter("dt").text();
                    target = e(t === !1 ? "#userpanel" : "#userpanel-wrapper"), target.html(n), t && e("#userpanel-wrapper").addClass("submenu"), l && e(".modal-title .title", "#userpanel").html(l)
                }
                return "logout" === t && e("body").hasClass("step4") && (xmlRequest(site.local + "xHttp/OrderDetails/showCheckoutNaw.php", !1, "icheckoutnaw"), xmlRequest2(site.local + "xHttp/OrderDetails/showPaymentDetails.php", !1, "ipaymentdetails")), !1
            })
        }, e(document).ready(function() {
            e(document).on("click", "#facebooklogin", function(t) {
                return t.preventDefault(), e("#ilegal").length && e("#ilegal").prop("checked") === !1 ? (e("#legalerror").hide(), setTimeout(function() {
                    e("#legalerror").show()
                }, 300)) : (e("#legalerror").hide(), fb_login()), !1
            }), e(document).on("click", ".legal", function(t) {
                "A" !== t.target.nodeName && (e("#ilegal").prop("checked") ? e("#legalerror").css("display", "none") : e("#legalerror").css("display", "block"))
            }), e(document).on("click", "#morelegalinfo", function(t) {
                t.preventDefault();
                var n = e(".legal.extra");
                "block" === n.css("display") ? e(this).text(e(this).data("show")) : e(this).text(e(this).data("hide")), e(".legal.extra").toggle()
            }), e(document).on("click", ".userlogin", function(t) {
                t.preventDefault(), e(this).hasClass("userlogin-myaccount") && (l.settings.myaccount = !0), resetView(), l.Run()
            }), e(document).on("click", ".userpanel .userpanel-list-link a", function(t) {
                void 0 !== e(this).data("click") && (t.preventDefault(), l.OpenMenuItem(e(this).data("click")))
            }), e(document).on("click", ".userpanel .modal-close", function(e) {
                e.preventDefault(), l.Run()
            }), e(document).on("click", ".modal-back", function(e) {
                e.preventDefault(), l.OpenMenuItem(!1)
            }), e(document).on("click", "#userpanel", function(e) {
                "userpanel" === e.target.id && (e.preventDefault(), l.Run())
            }), e(document).on("click", "li.fold", function(t) {
                var n = e(t.target);
                if (!n.hasClass("foldmenu-item"))
                    return e(this).toggleClass("active"), !1
            }), e(window).on("resize", function(t) {
                t.preventDefault(), Modernizr.mq("(max-width: 639px)") ? l.settings.fullscreen = !0 : l.settings.fullscreen = !1, e(a).hasClass("show") ? l.settings.userpanelvisible = !0 : l.settings.userpanelvisible = !1, l.settings.userpanelvisible === !0 && l.settings.fullscreen === !0 && e(s).addClass("fullscreen").find(".content").addClass("collapse"), l.settings.userpanelvisible === !0 && l.settings.fullscreen === !1 && e(s).removeClass("fullscreen").find(".content").removeClass("collapse")
            }), e(document).on("click", ".tab-navigation #userlogin", function(e) {
                return e.preventDefault(), xmlRequest(site.local + "xHttp/CustomerLogin.php", !1, "userpanel-wrapper", !1, !1, !1), !1
            }), e(document).on("click", ".tab-navigation #userregister", function(e) {
                return e.preventDefault(), xmlRequest(site.local + "xHttp/CustomerCreateAccount.php", "", "userpanel-wrapper", !1, !1, "form signup"), !1
            })
        })
    }
}(jQuery);
var userpanel = new $.userPanel(".userpanel", (!1));
$(document).ready(function() {
    $(document).on("click", ".openfavorite", function(e) {
        return $.post($(this).attr("data-url") + "setDeliveryAreaId.php", {
            locationidrestaurant: $(this).attr("data-id"),
            type: "postcode"
        }, function(e) {
            var t = $.parseJSON(e);
            "url" === t.type && (document.location = t.value)
        }), !1
    }), $(document).on("click", ".removefavorite", function(e) {
        return $(this).parent().parent().remove(), $.post($(this).attr("data-url") + "setFavorite.php", {
            bid: $(this).attr("data-id"),
            action: "removefavorite"
        }, function(e) {
            $("#userpanel-wrapper").prepend(e), $("#favoriterestaurant").removeClass("selected")
        }), !1
    }), $(document).on("click", ".userpanel-list-link .foldmenu-item", function(e) {
        var t = $(this).data("language");
        $("link[rel=alternate]").each(function(e, n) {
            if (t === $(n).attr("hreflang"))
                return document.location = $(n).attr("href"), !1
        })
    })
});
$(function() {
    $(document).on("input keyup mouseup", "input[type='password']", function(t) {
        $(this).val().length > 0 ? $(this).next().show() : $(this).next().hide()
    })
}), $(document).on("mousedown touchstart", ".togglepassword", function() {
    var t = $(this).prev();
    $(t).attr("type", "text")
}).on("mouseup mouseout touchend", ".togglepassword", function() {
    var t = $(this).prev();
    $(t).attr("type", "password")
});
$(document).ready(function() {
    $(".button-user", "#country").click(function(n) {
        n.stopPropagation(), $("#country").toggleClass("expanded expanded-country")
    }), $(window).click(function() {
        $(".select-dropdown").removeClass("expanded expanded-country expanded-locale")
    }), $(".button-user", "#locale").click(function(n) {
        n.stopPropagation(), $("#locale").toggleClass("expanded expanded-locale")
    }), $(document).on("click", ".atom-tab-navigation li", function(n) {
        var e = $(this).parent();
        $.each(e, function(n, e) {
            $("li", e).each(function() {
                $(this).removeClass("active")
            })
        }), $(this).addClass("active")
    })
});
var Map = function() {
    this.geocoder = new google.maps.Geocoder, this.markers = [], this.restaurantsmap = $(".restaurants-map"), this.googlemapcanvas = $("#map-canvas"), this.prev_infowindow = !1, this.myMarker = !1
};
Map.prototype.init = function() {
    this.initGoogleMaps()
}, Map.prototype.initGoogleMaps = function() {
    var e = "/images/icons/mapmarker.png",
        o = new google.maps.LatLng(0, 0),
        a = [{
            featureType: "poi",
            stylers: [{
                visibility: "off"
            }]
        }],
        t = {
            zoom: 14,
            center: o,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: !1,
            streetViewControl: !1,
            minZoom: 12,
            maxZoom: 18,
            styles: a,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL,
                position: google.maps.ControlPosition.LEFT_BOTTOM
            },
            panControl: !0,
            panControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            }
        };
    map = new google.maps.Map(document.getElementById("map-canvas"), t), this.codeAddress();
    for (var s in restaurants) {
        var n = restaurants[s],
            r = new google.maps.InfoWindow({
                disableAutoPan: !1,
                boxClass: "fadeIn",
                infoBoxClearance: new google.maps.Size(1, 1)
            }),
            i = new google.maps.Marker({
                position: new google.maps.LatLng(n[16], n[17]),
                map: map,
                icon: e,
                title: n[4]
            });
        i.set("restId", n[0]), i.set("catIds", n[1].join(",")), i && this.markers.push(i), this.makeInfoWindowEvent(map, r, i, n[0])
    }
    google.maps.event.addListener(map, "bounds_changed", function() {
        google.maps.event.trigger(map, "resize")
    }), this.showMarkers()
}, Map.prototype.hideMarkers = function() {
    for (var e = 0; e < this.markers.length; e++)
        this.markers[e].setVisible(!1)
}, Map.prototype.showMarkers = function() {
    for (var e = 0; e < this.markers.length; e++)
        this.markers[e].setVisible(!1);
    0 === visibleRestaurantIds.length && $.each(restaurants, function(e, o) {
        visibleRestaurantIds.push(o[0])
    });
    for (var o in visibleRestaurantIds)
        for (var e = 0; e < this.markers.length; e++)
            this.markers[e].restId == visibleRestaurantIds[o] && this.markers[e].setVisible(!0)
}, Map.prototype.codeAddress = function() {
    var e,
        o = $("#map-canvas").attr("data-center-lat"),
        a = $("#map-canvas").attr("data-center-lng"),
        t = $("#map-canvas").attr("data-center-address");
    "" == o || "" == a ? this.geocoder.geocode({
        address: t
    }, function(o, a) {
        a == google.maps.GeocoderStatus.OK && (e = o[0].geometry.location, this.centerMap(e))
    }.bind(this)) : (e = new google.maps.LatLng(o, a), this.centerMap(e))
}, Map.prototype.centerMap = function(e) {
    var o = "/images/icons/mapmarkerme.png";
    google.maps.event.trigger(map, "resize"), map.setCenter(e);
    var a = new google.maps.InfoWindow({
            disableAutoPan: !1,
            closeBoxURL: "",
            infoBoxClearance: new google.maps.Size(1, 1)
        }),
        t = new google.maps.Marker({
            map: map,
            icon: o,
            position: e
        });
    this.makeInfoWindowEvent(map, a, t, "false")
}, Map.prototype.makeInfoWindowEvent = function(e, o, a, t) {
    var s = this;
    google.maps.event.addListener(a, "click", function() {
        s.prev_infowindow && s.prev_infowindow.close(), s.prev_infowindow = o, "false" == t ? (this.myMarker = a, $.post(site.local + "showMapsRestaurant.php", {
            bid: !1,
            user: !0
        }).done(function(t) {
            var s = $.parseJSON(t);
            o.setContent(s.value), o.open(e, a)
        })) : $.post(site.local + "showMapsRestaurant.php", {
            bid: t
        }).done(function(t) {
            var s = $.parseJSON(t);
            o.setContent(s.value), o.open(e, a)
        })
    })
};
function HideHeader() {
    if ($(".modal").length > 0)
        return !1;
    var e = $("header"),
        s = $(this).scrollTop();
    Modernizr.mq("(max-width: 639px)") && ($(e).hasClass("fixed") || $("body").hasClass("step1") || $("body").hasClass("fullscreen") || $(".subnav-wrapper").hasClass("searchmode") || (!$(e).hasClass("hideheader") && $(this).scrollTop() > 20 && s > lastScroll && ($("header").removeClass().addClass("hideheader"), ($("body").hasClass("step2") || $("body").hasClass("step3") || $("body").hasClass("step4")) && $(".listing-inner").addClass("hideheader")), $(e).hasClass("hideheader") && s < lastScroll && ($("header").removeClass().addClass("showheader"), ($("body").hasClass("step2") || $("body").hasClass("step3") || $("body").hasClass("step4")) && $(".listing-inner").removeClass("hideheader"), setTimeout(function() {
        $("header").removeClass("showheader")
    }, 400)), lastScroll = s), documentScroll = 0)
}
function showHeader() {
    var e = $("header");
    $(e).hasClass("hideheader") && $(e).removeClass("hideheader")
}
function StickyPanel() {
    if (Modernizr.mq("(min-width: 639px)") && !$("header").hasClass("fixed") && !$("body").hasClass("step1")) {
        documentScroll = 0;
        var e = $(window).scrollTop(),
            s = $("footer").height(),
            a = $(document).height(),
            t = $(window).height(),
            r = e + t,
            n = a - s,
            o = $(".filter-wrapper"),
            l = o.height(),
            i = "filter-wrapper-scrolling",
            d = $("header").height(),
            h = $(".restaurants").height();
        h > l ? (r > n ? o.css("bottom", r - n + 40 + "px") : "undefined" != typeof o.attr("style") && o.removeAttr("style"), e >= d ? o.hasClass(i) || o.addClass(i) : o.hasClass(i) && o.removeClass(i)) : o.removeClass(i).css("bottom", "0px")
    }
}
function stickyBar() {
    if (Modernizr.mq("(min-width: 639px)") && !$("body").hasClass("step1")) {
        var e = "sticky-navigation",
            s = $(".subnavigation"),
            a = "subnavigation-scrolling",
            t = (s[0].getBoundingClientRect(), window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
            r = $("header").height() - s.height();
        t >= r ? s.hasClass(a) || (s.addClass(a), $("#ibasket").addClass(a), $("body").addClass(e), $("body").hasClass("activesmartbanner") && $("#close_smartbnr").click()) : s.hasClass(a) && (s.removeClass(a), $("#ibasket").removeClass(a), $("body").removeClass(e))
    } else
        $(".subnavigation").removeClass(a)
}
function toggleMap(e) {
    if ($("header").removeClass("hideheader"), ($("body").hasClass("step2") || $("body").hasClass("step3") || $("body").hasClass("step4")) && $(".listing-inner").removeClass("hideheader"), e) {
        map || (map = new Map, map.init()), $("header").removeClass().addClass("hideheader"), $(".listing-inner").addClass("hideheader"), $(window).scrollTop(0), $("body").addClass("fullscreen"), $(".restaurants-map").css("display", "block");
        var s = $(".inner").height();
        Modernizr.mq("(max-width: 639px)") && (s = 50), $("#map-canvas").css("height", "" + ($(window).height() - s))
    } else
        $(".restaurants-map").removeClass("mapmode-panel")
}
function toggleBasket(e) {
    var s = $(".menu-cart-wrapper"),
        a = $("#menu-tab-content"),
        t = $(".btn-search");
    e ? ($(".subnav-wrapper").removeClass("searchmode"), s.addClass("open"), $(".orderdetails-checkout").addClass("basket-open"), a.addClass("open"), $("header").removeClass().addClass("hideheader"), $(".listing-inner").addClass("hideheader")) : ($(".subnav-wrapper").removeClass("basketmode"), "" === $("#irestaurantsearchstring").val() && t.removeClass("active"), s.removeClass("open"), $(".orderdetails-checkout").removeClass("basket-open"), a.removeClass("open"))
}
function resetView(e) {
    var s = $(".subnav-wrapper"),
        a = $(".restaurants-filter");
    $(".jig-menu-cart-wrapper"), $(".jig-menu-categories-wrapper"), $(".search-input"), $(".btn-search-text"), $(".restaurants-map");
    $("body").removeClass("fullscreen basket"), void 0 !== $("#toTop")[0] && $("#toTop").show(), $(".menu-categories-wrapper", ".menucard-listing").removeClass("visible"), s.removeClass().addClass("subnav-wrapper"), a.removeClass("filtermode-panel"), toggleBasket(!1), 0 === $(window).scrollTop() && ($("header").removeClass("hideheader"), $(".listing-inner").removeClass("hideheader")), $(document.body).hasClass("step2") ? $(".restaurants.restaurantlist").show() : $(document.body).hasClass("step3") && $(".menucard").show()
}
function updateBasket() {
    $("#btn-basket span.btn-cart-price")[0].innerHTML = baskettotalPrice, $(".btn-cart-amount")[0].innerHTML = basketproductCount
}
var lastScroll = 0,
    documentScroll = 0,
    map,
    enableHideHeader = !0;
$(window).on("scroll", function(e) {
    e.preventDefault(), enableHideHeader && (0 == documentScroll && (documentScroll = 1, setTimeout(HideHeader, 100)), StickyPanel(), stickyBar())
}), $(window).resize(throttle(function() {
    stickyBar(), documentScroll = 0
}, 500, !1)), $(document).ready(function() {
    $(".btn-search #irestaurantsearchstring").keyup(function() {
        $(this).val().length > 0 ? $(".btn-search .btn-remove-search").addClass("btn-search-clear") : $(".btn-search .btn-remove-search").removeClass("btn-search-clear")
    }), $("a", ".subnav-sortmode").click(function(e) {
        var s = $(this).parent().data("name"),
            a = $(".subnavigation");
        $("#isorting-select").val(s), sortRestaurantsBy(s), "default" != s ? (a.find(".btn-sorting").addClass("active"), a.find(".btn-icon").removeClass().addClass("btn-icon " + s).attr("data-sort", s), a.find(".btn-text-active").html($(this).parent().text())) : ($(".btn-remove-icon", ".subnavigation").click(), resetView($(this)))
    }), $(".btn-remove-icon", ".subnavigation").click(function(e) {
        return $(this).parent().hasClass("active") && $(this).parent().hasClass("btn-sorting") && ($(this).parent().removeClass("active").text($(this).parent().find("btn-text-placeholder").html()), $(this).parent().find(".btn-icon").removeClass().addClass("btn-icon"), sortRestaurantsBy("default")), !1
    }), $(".btn.btn-map").click(function(e) {
        if (e.stopPropagation(), $(this).parent().hasClass("mapmode"))
            resetView(), toggleMap(!1);
        else {
            var s = e.target;
            Modernizr.mq("(max-width: 639px)") && ($(s).hasClass("btn-search") || $("body").addClass("fullscreen")), toggleMap(!0);
            var a = $(".restaurants-map");
            a.toggleClass("mapmode-panel"), $(this).parent().addClass("mapmode").removeClass("sortmode"), google.maps.event.trigger(map, "resize"), $(".restaurants.restaurantlist").hide()
        }
    }), $(".btn.btn-search").click(function(e) {
        if (e.preventDefault(), e.stopPropagation(), $(this).parent().hasClass("searchmode")) {
            var s = e.target;
            $(s).hasClass("btn-search-clear") && (clearSearch(), $(s).removeClass("btn-search-clear"))
        } else
            $(this).parent().addClass("searchmode"), $(".btn-search input").focus(), toggleBasket(!1)
    }), $(".btn.btn-sorting").click(function(e) {
        e.preventDefault(), e.stopPropagation(), $(this).parent().hasClass("sortmode") ? resetView($(this)) : $(this).parent().addClass("sortmode")
    }), $(".btn.btn-filter").click(function(e) {
        if (e.preventDefault(), e.stopPropagation(), $(this).parent().hasClass("filtermode"))
            resetView($(this));
        else {
            var s = e.target;
            Modernizr.mq("(max-width: 639px)") && ($("header").removeClass().addClass("hideheader"), $(".listing-inner").addClass("hideheader"), $(s).hasClass("btn-search") || ($("body").addClass("fullscreen"), void 0 !== $("#toTop")[0] && $("#toTop").hide())), $(this).parent().toggleClass("filtermode"), $(".restaurants-filter").toggleClass("filtermode-panel"), $(".filter-wrapper").removeClass("filter-wrapper-scrolling"), $(".restaurants.restaurantlist").hide()
        }
    }), $(".btn.btn-categories").click(function(e) {
        if (e.preventDefault(), e.stopPropagation(), $(this).parent().hasClass("categorymode"))
            $(".menu-categories-wrapper", ".menucard-listing").toggleClass("visible"), resetView($(this));
        else {
            $("header").removeClass().addClass("hideheader"), $(".listing-inner").addClass("hideheader");
            var s = e.target;
            Modernizr.mq("(max-width: 639px)") && ($(s).hasClass("btn-search") || $("body").addClass("fullscreen")), $(this).parent().toggleClass("categorymode"), $(".menu-categories-wrapper", ".menucard-listing").toggleClass("visible"), $(".menucard").hide()
        }
    }), $(".btn.btn-basket").click(function(e) {
        e.preventDefault(), e.stopPropagation(), $(this).parent().hasClass("basketmode") ? (resetView($(this)), toggleBasket(!1)) : (toggleBasket(!0), $(this).parent().addClass("basketmode"), Modernizr.mq("(max-width: 639px)") && $("body").addClass("fullscreen basket"))
    }), $(".btn-close").click(function(e) {
        e.preventDefault(), e.stopPropagation(), resetView($(this)), $(".restaurants-map").hasClass("mapmode-panel") && toggleMap(!1)
    }), $(".btn.btn-back").click(function(e) {
        e.stopPropagation(), $(this).parent().hasClass("mapmode") && (e.preventDefault(), resetView(), toggleMap(!1))
    }), $(window).on("resize", function() {
        Modernizr.mq("(min-width: 640px)") && $("body").hasClass("fullscreen") ? (resetView(), toggleMap(!1)) : Modernizr.mq("(max-width: 640px)") && !$("body").hasClass("fullscreen") && $(".subnav-wrapper").hasClass("basketmode") && $(document.body).addClass("fullscreen basket")
    })
});
$(document).ready(function() {
    var s = 0;
    $(document).on("click", ".steps-btn-backward", function() {
        var e = $(this).parent(),
            r = $(e).find(".steps-wrapper"),
            n = r.attr("data-steps");
        return s = a(e) - 1, s < 0 && (s = n - 1), t(e, s, r), !1
    }), $(document).on("click", ".steps-btn-forward", function() {
        var e = $(this).parent(),
            r = $(e).find(".steps-wrapper"),
            n = r.attr("data-steps");
        return s = a(e) + 1, s > n - 1 && (s = 0), t(e, s, r), !1
    }), $(".steps-slider-dots-wrap span").bind("click", function(s) {
        var a = $(".steps-slider-dots-wrap span").index(this);
        a > 2 && (a -= 3);
        var e = $(this).parent().parent(),
            r = $(e).find(".steps-wrapper"),
            n = r.attr("data-steps");
        return a > n - 1 && (a = 0), t(e, a, r), !1
    });
    var t = function(s, t, a) {
            a.attr("class", "listbox-boxes steps-wrapper number-of-steps-3").addClass("align-step" + t), e(s, t)
        },
        a = function(s) {
            var t = $(".steps-slider-dots-wrap", s),
                a = 0,
                e = !1;
            return $("span", t).each(function() {
                $(this).hasClass("steps-slider-dot-active") === !0 && (e = a), a++
            }), e
        },
        e = function(s, t) {
            var a = $(".steps-slider-dots-wrap", s),
                e = 0;
            $("span", a).each(function() {
                var s = $(this);
                $(s).removeClass().addClass("steps-slider-dots"), e === t && $(s).addClass("steps-slider-dot-active"), e++
            })
        }
});
function closeLightbox() {
    $("#lightbox").remove()
}
$(document).ready(function() {
    $(document).on("click", ".lightbox-close", function() {
        closeLightbox()
    })
});
!function(n) {
    n.privacybanner = function(e, a) {
        var i = {},
            t = {
                txt: !1,
                showcurrent: !1
            },
            r = function() {
                i.settings = n.extend({}, t, a), i.Show()
            };
        i.Show = function() {
            var e = {};
            e = '<div class="notice privacybanner_notice show" id="iprivacybanner"><div class="notice-container">' + i.settings.txt + "</div></div>", n("body").append(e)
        }, i.Hide = function() {
            n(".privacybanner_notice").fadeOut(300, function() {
                n(this).remove()
            })
        }, r(), n(document).click(function(e) {
            "privacybannerhref" != e.target.id && n(".privacybanner_notice").length > 0 && ((n(e.target).hasClass("imagepulldownright") || n(e.target).hasClass("imagepulldownsel") || n(e.target).hasClass("imgpulldown") || n(e.target).hasClass("imagepulldown")) && c("languageswitch", !0, 365), c("privacybanner", !0, 365), c("privacybanner_overrule", !1, -365), c("languageswitch", !1, -365), i.Hide())
        }), n("#privacybanner").click(function() {
            return c("privacybanner", !0, 365), c("privacybanner_overrule", !1, -365), c("languageswitch", !1, -365), i.Hide(), !1
        });
        var c = function(n, e, a) {
            if (a) {
                var i = new Date;
                i.setTime(i.getTime() + 24 * a * 60 * 60 * 1e3);
                var t = "; expires=" + i.toGMTString()
            } else
                var t = "";
            document.cookie = n + "=" + e + t + "; path=/"
        }
    }
}(jQuery);
$(document).ready(function() {
    function a(a) {
        var e = a.width(),
            i = $(window).width(),
            l = a.position(),
            s = i / 2 - e / 2,
            n = l.left + 30 - s;
        $("#tabs").animate({
            left: -n
        }, 300), t(a.attr("id"))
    }
    function t(a) {
        var t = a.replace("tab_", ""),
            e = $("#" + t);
        $(".tab_content", ".tabslider").removeClass("visible"), e.addClass("visible")
    }
    $("#tabs").on("click", "li", function(a) {
        a.preventDefault(), $("#tabs li").removeClass("active");
        var t = $(".tab_content");
        t.removeClass("visible"), $(a.currentTarget).addClass("active");
        var e = a.currentTarget.id.replace("tab_", ""),
            i = $("#" + e);
        i.addClass("visible")
    }), $("#tabslider-btn-forward").click(function() {
        var t = $("#tabs"),
            e = t.find("li.active"),
            i = e.next().length ? e.next() : t.find("li:first-child");
        e.removeClass("active"), i.addClass("active"), a(i)
    }), $("#tabslider-btn-backward").click(function() {
        var t = $("#tabs"),
            e = t.find("li.active"),
            i = e.prev().length ? e.prev() : t.find("li:last-child");
        e.removeClass("active"), i.addClass("active"), a(i)
    })
});
var toastlast = !1;
!function(t) {
    t.fn.pickup = function(e) {
        var s = {
            currentstatus: "takeaway"
        };
        pickup = this, pickupsettings = t.extend(s, e);
        var i = Cookies.get("pickup");
        void 0 !== i && (pickupsettings.currentstatus = i), pickup.switchState = function(e, s) {
            t.ajax({
                method: "POST",
                url: "/pickupstate",
                async: !0,
                data: {
                    deliverymethod: e
                }
            }).done(function(t) {
                void 0 !== s && s()
            })
        }, pickup.updateContent = function(e) {
            t(".toggle");
            if (t(document.body).hasClass("step3") || t(document.body).hasClass("step4"))
                t(document).delay(100).queue(function(s) {
                    t.ajax({
                        method: "POST",
                        url: window.location.href,
                        data: {
                            popup: !0
                        }
                    }).complete(function(t) {}).done(function(t) {
                        return void 0 !== e && e(t), !1
                    }), s()
                });
            else if (t(document.body).hasClass("step2"))
                return void 0 !== e && e(), !1
        }, pickup.showToast = function(e) {
            var s = Math.floor(1e3 * Math.random()) + 1,
                i = "<div class='dpToast' id='dpToast" + s + "'>" + e + "</div>";
            toastlast !== !1 && t("#" + toastlast).remove(), toastlast = "dpToast" + s, t(i).fadeIn().appendTo("body").delay(2500).queue(function(e) {
                t(this).fadeOut(), e()
            })
        }, pickup.showNotification = function(t) {
            return xmlRequest("/pickupstate", "&get=notification&toggle=disabled", "popupdiv", !1, !1, "popupdiv pickupnotification"), !1
        }, t(document).ready(function(e) {
            updateLabels(), t(document).on("click", ".pickupnotification #showoverview, .pickupnotification #togglestate", function(e) {
                pickupsettings.currentstatus = "takeaway", "true" === t(this).attr("data-toggle") && (pickupsettings.currentstatus = "pickup");
                var s = t(".logo a").attr("href"),
                    i = (t(this).attr("href"), t(this).attr("id"));
                return t.ajax({
                    method: "POST",
                    url: "/pickupstate",
                    data: {
                        deliverymethod: pickupsettings.currentstatus
                    }
                }).done(function(t) {
                    if (obj = JSON.parse(t), "showoverview" === i)
                        return document.location = s, !1;
                    if ("togglestate" === i) {
                        closeLightbox(), resetView(), pickup.showToast(obj.toast);
                        var e = "dropdown-switch-delivery";
                        return "pickup" === pickupsettings.currentstatus && (e = "dropdown-switch-pickup"), pickup.updateStep3Or4(e), !1
                    }
                }), !1
            })
        }), t(document).on("click", "#dropdown-switch-delivery,#dropdown-switch-pickup", function(e) {
            e.preventDefault();
            var s = e.target.id,
                i = t(e.target);
            if ("dropdown-switch-pickup" === s ? pickupsettings.currentstatus = "pickup" : pickupsettings.currentstatus = "takeaway", !t("#" + s).hasClass("switch-active") && (t(document.body).hasClass("step2") && pickup.switchState(pickupsettings.currentstatus, function() {
                t(".atom-dropdown-switch-delivery,.atom-dropdown-switch-pickup").removeClass("switch-active"), t("#" + s).addClass("switch-active").addClass("blow"), "pickup" === pickupsettings.currentstatus ? t(".takeaway-switcher").contents().find("input").prop("checked", !0) : t(".takeaway-switcher").contents().find("input").prop("checked", !1), t(document.body).hasClass("step2") && setTimeout(function() {
                    pickup.resetStep2(), t("#" + s).removeClass("blow"), pickup.showToast(t("." + pickupsettings.currentstatus, ".switch").attr("data-text")), pickup.updateContent(function(t) {
                        pickup.updateStep2(t)
                    })
                }, 500)
            }), (t(document.body).hasClass("step3") || t(document.body).hasClass("step4")) && ("menucard" === i.attr("data-view") || "checkout" === i.attr("data-view")))) {
                var a = (t(e), t("#ibasket").attr("data-id"));
                t.ajax({
                    method: "POST",
                    url: "/pickupstate",
                    data: {
                        get: "init",
                        rest: a
                    }
                }).done(function(e) {
                    var i = t.parseJSON(e);
                    return "error" === i.type ? void t("body").append('<div id="lightbox" class="lightbox">' + i.html + "</div>") : void ("OK" === i.restaurant && (t(document.body).hasClass("step3") && pickup.resetStep3(), t(document.body).hasClass("step4") && pickup.resetStep4(), pickup.showToast(i.toast), pickup.switchState(pickupsettings.currentstatus, function() {
                        pickup.updateStep3Or4(s)
                    })))
                })
            }
        }), pickup.updateStep3Or4 = function(e) {
            t(".atom-dropdown-switch-delivery,.atom-dropdown-switch-pickup").removeClass("switch-active"), t("#" + e).addClass("switch-active").addClass("blow"), "pickup" === pickupsettings.currentstatus ? t(".takeaway-switcher").contents().find("input").prop("checked", !0) : t(".takeaway-switcher").contents().find("input").prop("checked", !1), setTimeout(function() {
                t("#" + e).removeClass("blow"), pickup.updateContent(function(e) {
                    t(document.body).hasClass("step3") ? pickup.updateStep3(e) : t(document.body).hasClass("step4") && pickup.updateStep4(e)
                })
            }, 500)
        }, pickup.resetStep2 = function() {
            resetFilter(), resetView(), updateLabels(), t("#isorting-select").val("default"), t(".btn-remove-icon", ".subnavigation").click(), t("#restaurantsmap").is(":visible") && t.toggleMap(!1), showNoResultsMessage(), pickup.showToast(pickupsettings.currentstatus), refreshLazyLoad()
        }, pickup.resetStep3 = function() {
            resetView()
        }, pickup.resetStep4 = function() {
            resetView()
        }, pickup.updateStep2 = function(e) {
            if (processHash(), t("#irestaurantsearchstring2").val(t("#irestaurantsearchstring").val()), t(document).trigger("initSearch"), t("#isearchrestaurantform input").val().length && t("#isearchrestaurantform").keyup(), void 0 !== pickupsettings.currentstatus) {
                var s = "takeaway" === pickupsettings.currentstatus ? 1 : 3;
                1 === s ? t(".nopickup").show() : t(".nopickup").hide()
            }
        }, pickup.updateStep3 = function(e) {
            t("#main").replaceWith(e), updateBasket()
        }, pickup.updateStep4 = function(e) {
            t("#main").replaceWith(e), updateBasket()
        }
    }
}(jQuery), $().pickup();
function findRestaurantElt(e) {
    var t,
        a;
    for (t = 0; t < restaurantelts.length; t++)
        if (restaurantelts[t][0] === e)
            return restaurantelts[t][1];
    if (a = document.getElementById(e)) {
        var s = "" + e;
        return restaurantelts.push(new Array(s, a)), a
    }
    return !1
}
function showSortRestaurants() {
    var e = document.getElementById("irestaurantlist"),
        t = 0;
    for (i = 0; i < restaurants.length; i++) {
        var a = findRestaurantElt("irestaurant" + restaurants[i][0]);
        e.appendChild(a), $(a).hasClass("restaurant_hide") && t++
    }
    i === t && $("#filteringError").show()
}
function reviewsort(e, t) {
    return e[13] < t[13] ? 1 : e[13] > t[13] ? -1 : 0 === e[12] && 0 !== t[12] ? 1 : 0 === t[12] && 0 !== e[12] ? -1 : e[7] < t[7] ? 1 : e[7] > t[7] ? -1 : alphabetsort(e, t)
}
function distancesort(e, t) {
    return e[13] < t[13] ? 1 : e[13] > t[13] ? -1 : 0 === e[12] && 0 !== t[12] ? 1 : 0 === t[12] && 0 !== e[12] ? -1 : e[6] < t[6] ? -1 : e[6] > t[6] ? 1 : alphabetsort(e, t)
}
function popularitysort(e, t) {
    return e[13] < t[13] ? 1 : e[13] > t[13] ? -1 : 0 === e[12] && 0 !== t[12] ? 1 : 0 === t[12] && 0 !== e[12] ? -1 : e[8] < t[8] ? 1 : e[8] > t[8] ? -1 : alphabetsort(e, t)
}
function averagepricesort(e, t) {
    return e[13] < t[13] ? 1 : e[13] > t[13] ? -1 : 0 === e[12] && 0 !== t[12] ? 1 : 0 === t[12] && 0 !== e[12] ? -1 : e[9] < t[9] ? -1 : e[9] > t[9] ? 1 : alphabetsort(e, t)
}
function deliverycostssort(e, t) {
    return e[13] < t[13] ? 1 : e[13] > t[13] ? -1 : 0 === e[12] && 0 !== t[12] ? 1 : 0 === t[12] && 0 !== e[12] ? -1 : e[14] < t[14] ? -1 : e[14] > t[14] ? 1 : alphabetsort(e, t)
}
function minimumorderamountsort(e, t) {
    return e[13] < t[13] ? 1 : e[13] > t[13] ? -1 : 0 === e[12] && 0 !== t[12] ? 1 : 0 === t[12] && 0 !== e[12] ? -1 : e[10] < t[10] ? -1 : e[10] > t[10] ? 1 : alphabetsort(e, t)
}
function alphabetsort(e, t) {
    return e[13] < t[13] ? 1 : e[13] > t[13] ? -1 : 0 === e[12] && 0 !== t[12] ? 1 : 0 === t[12] && 0 !== e[12] ? -1 : e[4] < t[4] ? -1 : e[4] > t[4] ? 1 : 0
}
function hasonlinepaymentsort(e, t) {
    return e[13] < t[13] ? 1 : e[13] > t[13] ? -1 : 0 == e[15] && 0 != t[15] ? 1 : 0 == t[15] && 0 != e[15] ? -1 : e[11] < t[11] ? -1 : e[11] > t[11] ? 1 : 0
}
function deliverytime2(e, t) {
    return e[19] > t[19] ? 1 : e[19] < t[19] ? -1 : e[11] < t[11] ? -1 : e[11] > t[11] ? 1 : 0
}
function deliverytime(e, t) {
    return 0 === e[12] && 0 !== t[12] ? 1 : 0 === t[12] && 0 !== e[12] ? -1 : e[19] > t[19] ? 1 : e[19] < t[19] ? -1 : alphabetsort(e, t)
}
function defaultsort(e, t) {
    return e[13] < t[13] ? 1 : e[13] > t[13] ? -1 : e[11] < t[11] ? -1 : e[11] > t[11] ? 1 : 0
}
function updateSubCategoryHtml(e, t) {
    t && ($("#restaurantsfiltercount").html(t), balloonHtml = '<span class="balloon" id="balloon">' + t + "</span>", $("#balloon").length > 0 && $("#balloon").remove(), $("#subcatFilterBtn").after(balloonHtml))
}
function sortRestaurantsBy(e) {
    return "deliverytime" === e ? (restaurants.sort(deliverytime), lastsort = reviewsort) : "review" === e ? (restaurants.sort(reviewsort), lastsort = reviewsort) : "distance" === e ? (restaurants.sort(distancesort), lastsort = distancesort) : "popularity" === e ? (restaurants.sort(popularitysort), lastsort = popularitysort) : "averageprice" === e ? (restaurants.sort(averagepricesort), lastsort = averagepricesort) : "deliverycosts" === e ? (restaurants.sort(deliverycostssort), lastsort = deliverycostssort) : "minimumorderamount" === e ? (restaurants.sort(minimumorderamountsort), lastsort = minimumorderamountsort) : "alphabet" === e ? (restaurants.sort(alphabetsort), lastsort = alphabetsort) : "hasonlinepayments" === e ? (restaurants.sort(hasonlinepaymentsort), lastsort = alphabetsort) : (restaurants.sort(defaultsort), lastsort = defaultsort, e = "default"), $(".sortinglink[data-sortingtype=" + e + "]").addClass("active"), Cookies.set("sortby", e, {
        path: "/"
    }), lastsorttype = e, showSortRestaurants(), $(window).trigger("lazyupdate"), !1
}
function setFavorite(e, t, a) {
    var s,
        r,
        i,
        n;
    for (n = "/", a && (n = a), r = 0; r < restaurants.length; r++)
        if (restaurants[r][0] === e) {
            if (1 === restaurants[r][13]) {
                if (restaurants[r][13] = 0, xmlRequest(n + "setFavorite.php", "action=removefavorite&bid=" + e, "idummy"), t)
                    for (i = 1; s = document.getElementById("irestaurantfavo" + e + "-" + i);)
                        s.src = "/images/icons/favo.png", i++;
                else
                    s = document.getElementById("irestaurantfavo" + e), s && (s.src = "/images/icons/favo.png"), sortRestaurantsBy(lastsorttype);
                return !1
            }
            if (restaurants[r][13] = 1, xmlRequest(n + "setFavorite.php", "action=addfavorite&bid=" + e, "idummy"), t)
                for (i = 1; s = document.getElementById("irestaurantfavo" + e + "-" + i);)
                    s.src = "/images/icons/favo_selected.png", i++;
            else
                s = document.getElementById("irestaurantfavo" + e), s && (s.src = "/images/icons/favo_selected.png"), sortRestaurantsBy(lastsorttype), scrollToElement("irestaurantfavo" + e);
            return !1
        }
}
function toggleCategories(e) {
    var t = $(e).data("subcats"),
        a = categoriesindex[t];
    $(e).hasClass("manual-closed") || $(e).hasClass("groupfilter-on") ? removeHash("cat", a) : addHash("cat", a)
}
function toggleMainCategories(e, t) {
    if (e !== !1)
        var a = $(e).data("subcats");
    else
        var a = t;
    var s = categoriesindex[a];
    clearHash(), addHash("cat", s), toggleCategoryHeading(a)
}
function toggleCategoryHeading(e) {
    var t = $("#filter-panel");
    $(".maincatmenu", t).removeClass("groupfilter-on"), $("[data-subcats=" + e + "]", t).addClass("groupfilter-on")
}
function clearHash() {
    var e,
        t,
        a = window.location;
    "pushState" in history ? history.pushState("", document.title, a.pathname + a.search) : (e = document.body.scrollTop, t = document.body.scrollLeft, a.hash = "", document.body.scrollTop = e, document.body.scrollLeft = t)
}
function toggleGridList() {
    var e = $("#irestaurantlist"),
        t = $("#togglerestaurantlist");
    $(e).hasClass("restaurantlist-grid") ? ($.cookie("restaurantslistviewmode", "list", {
        expires: 356,
        path: "/"
    }), $(e).removeClass("restaurantlist-grid"), $(t).removeClass("togglerestaurantlist_grid").addClass("togglerestaurantlist_list")) : ($.cookie("restaurantslistviewmode", "grid", {
        expires: 356,
        path: "/"
    }), $(e).addClass("restaurantlist-grid"), $(t).removeClass("togglerestaurantlist_list").addClass("togglerestaurantlist_grid")), refreshLazyLoad()
}
function Balloon(e) {
    $(".restaurants-counter").find("span").html(e)
}
function _getHashObject() {
    var e = location.hash.substring(1);
    0 === e.indexOf("!") && (e = e.substring(1)), 0 === e.indexOf("=&") && (e = e.substring(2));
    var t = $.deparam(e);
    for (var a in t)
        t.hasOwnProperty(a) && t[a].indexOf(",") !== -1 && (t[a] = t[a].split(","));
    return t
}
function _setHash(e) {
    for (var t in e)
        e.hasOwnProperty(t) && ($.isArray(e[t]) && (e[t] = e[t].join(",")), "" === e[t] && delete e[t]);
    var a = $.param(e);
    a = a.replace(/%2C/g, ","), "" === a && (a = ""), history.replaceState(void 0, void 0, location.pathname + "#" + a), processHash()
}
function toggleHash(e, t) {
    if (!$.isArray(t))
        return toggleHash(e, [t]);
    var a = _getHashObject();
    a.hasOwnProperty(e) && !$.isArray(a[e]) && (a[e] = [a[e]]), a.hasOwnProperty(e) ? $.each(t, function(t, s) {
        s = s.toString(), a[e].indexOf(s) === -1 ? a[e].push(s) : a[e] = $.grep(a[e], function(e) {
            return s !== e
        })
    }) : a[e] = t, _setHash(a)
}
function addHash(e, t) {
    if (!$.isArray(t))
        return addHash(e, [t]);
    var a = _getHashObject();
    a.hasOwnProperty(e) && !$.isArray(a[e]) && (a[e] = [a[e]]), a.hasOwnProperty(e) ? $.each(t, function(t, s) {
        s = s.toString(), a[e].indexOf(s) === -1 && a[e].push(s)
    }) : a[e] = t, _setHash(a)
}
function removeHash(e, t) {
    if (!$.isArray(t))
        return removeHash(e, [t]);
    var a = _getHashObject();
    a.hasOwnProperty(e) && !$.isArray(a[e]) && (a[e] = [a[e]]), a.hasOwnProperty(e) && ("reset" === t[0] ? delete a[e] : $.each(t, function(t, s) {
        s == -1 ? delete a[e] : a[e].indexOf(s.toString()) !== -1 && (a[e] = $.grep(a[e], function(e) {
            return e != s
        }))
    }), _setHash(a))
}
function hasHash(e) {
    var t = _getHashObject();
    return t.hasOwnProperty(e)
}
function processHash() {
    var e = _getHashObject(),
        t = e.Cuisine || [],
        a = e.Discount || [],
        s = e.Rating || !1,
        r = e.MinimumOrderCosts || !1,
        i = e.DeliveryCosts || !1;
    $.isArray(t) || (t = [t]), $.isArray(a) || (a = [a]);
    var n = $(".filter-label").filter('[data-type="Cuisine"]');
    if ($.each(n, function(e, t) {
        $(t).removeClass("filter-label-selected")
    }), $.each(t, function(e, t) {
        var a = $(".filter-label[data-value=" + t + "]", ".filter-kitchen");
        a.addClass("filter-label-selected")
    }), t.length > 0 ? $($('.filter-reset[data-type="Cuisine"]')[0]).removeClass("kitchenfilter_selected") : $($('.filter-reset[data-type="Cuisine"]')[0]).addClass("kitchenfilter_selected"), a.length > 0 ? $(".filter-label", ".discounts-filter").addClass("filter-label-selected") : $(".filter-label", ".discounts-filter").removeClass("filter-label-selected"), s.length !== !1) {
        var l = '"[' + s + ']"';
        $(".filter-label[data-value=" + l + "]", ".ratings-filter").addClass("starfilter-selected")
    }
    var o = $('.filter-label[data-type="MinimumOrderCosts"]');
    if ($.each(o, function(e, t) {
        $(t).removeClass("filter-label-selected")
    }), r !== !1) {
        var l = '"[' + r.toString() + ']"';
        $(".filter-label[data-value=" + l + "]", ".minimumordercosts-filter").addClass("filter-label-selected")
    } else
        $(".filter-label[data-value=reset]", ".minimumordercosts-filter").addClass("filter-label-selected");
    var d = $('.filter-label[data-type="DeliveryCosts"]');
    if ($.each(d, function(e, t) {
        $(t).removeClass("filter-label-selected")
    }), i !== !1) {
        var l = '"[' + i.toString() + ']"';
        $(".filter-label[data-value=" + l + "]", ".deliverycosts-filter").addClass("filter-label-selected")
    } else
        $(".filter-label[data-value=reset]", ".deliverycosts-filter").addClass("filter-label-selected");
    return filterRestaurants(t, 1 == a.length, s, r, i), $(".restaurant_noresults").hide(), $("#irestaurantsearchstring").val(""), resetView(), !1
}
function updateLabels() {
    if ($("body").hasClass("step2") && void 0 !== window.restaurants) {
        var e = 1;
        e = void 0 === pickupsettings.currentstatus ? 1 : "takeaway" === pickupsettings.currentstatus ? 1 : 3, e <= 2 ? ($(".deliverycosts-filter", ".restaurants-filter").removeClass("hidden"), $(".minimumordercosts-filter", ".restaurants-filter").removeClass("hidden"), $(".title-delivery", ".headlines").removeClass("hidden"), $(".title-pickup", ".headlines").addClass("hidden"), $("label.category-amount.deliverycount", ".filter-kitchen").removeClass("hidden"), $("label.category-amount.pickupcount", ".filter-kitchen").addClass("hidden")) : ($(".deliverycosts-filter", ".restaurants-filter").addClass("hidden"), $(".minimumordercosts-filter", ".restaurants-filter").addClass("hidden"), $(".title-delivery", ".headlines").addClass("hidden"), $(".title-pickup", ".headlines").removeClass("hidden"), $("label.category-amount.deliverycount", ".filter-kitchen").addClass("hidden"), $("label.category-amount.pickupcount", ".filter-kitchen").removeClass("hidden")), $.each(restaurants, function(t, a) {
            var s = $("#irestaurant" + a[0]),
                r = $(s).find(".details");
            1 === e ? ($(r).find(".delivery").removeClass("hidden"), $(r).find(".pickup").addClass("hidden")) : ($(r).find(".delivery").addClass("hidden"), $(r).find(".pickup").removeClass("hidden"))
        })
    }
}
function showNoResultsMessage() {
    if (0 === $(".restaurantlist .restaurant").not(".hidden").length) {
        $("#ibody").addClass("addrestaurants"), $("#noresults").removeClass("hidden"), $(".wrapper").addClass("hidden");
        var e = "takeaway" === pickupsettings.currentstatus ? 1 : 3;
        1 === e ? ($(".delivery").show(), $(".pickup").hide()) : ($(".delivery").hide(), $(".pickup").show())
    } else
        $("#ibody").removeClass("addrestaurants"), $("#noresults").addClass("hidden"), $(".wrapper").removeClass("hidden")
}
function toggleFilterResetPanel(e) {
    var t = $(".filterreset");
    e === !1 ? t.find(".selected").fadeOut() : e === !0 && (t.is(":visible") || t.show(), t.find(".selected").fadeOut().fadeIn().html(visibleRestaurantIds.length + " / "))
}
function filterRestaurants(e, t, a, s, r) {
    var i = 1;
    i = void 0 === pickupsettings.currentstatus ? 1 : "takeaway" === pickupsettings.currentstatus ? 1 : 3, visibleRestaurantIds = [], $.each(restaurants, function(n, l) {
        var o = !1;
        if (l[18] !== i && 2 !== l[18] || (0 === e.length ? o = !0 : $.each(e, function(e, t) {
            if (l[2].indexOf(parseInt(t)) !== -1)
                return void (o = !0)
        })), o) {
            if (a !== !1) {
                var d = l[7],
                    u = 2 * parseFloat(a[0]),
                    c = 2 * parseFloat(a[1]);
                if (!(d >= u && d <= c))
                    return
            }
            if (t && 0 === l[20])
                return;
            if (s !== !1)
                if (0 === parseFloat(s[0]) && 0 === parseFloat(s[1])) {
                    if (0 !== parseFloat(l[10]))
                        return
                } else if (!(parseFloat(l[10]) === parseFloat(s[0]) || parseFloat(l[10]) < parseFloat(s[1])))
                    return;
            if (r !== !1)
                if (0 === parseFloat(r[0]) && 0 === parseFloat(r[1])) {
                    if (0 !== parseFloat(l[14]))
                        return
                } else if (!(parseFloat(l[14]) === parseFloat(r[0]) || parseFloat(l[14]) <= parseFloat(r[1])))
                    return;
            return void visibleRestaurantIds.push(l[0])
        }
    });
    var n = {};
    for (var l in visibleRestaurantIds)
        n[visibleRestaurantIds[l]] = visibleRestaurantIds[l];
    for (var o in restaurants)
        "undefined" != typeof n[restaurants[o][0]] ? $("#irestaurant" + restaurants[o][0]).removeClass("restaurant_hide") : $("#irestaurant" + restaurants[o][0]).addClass("restaurant_hide");
    0 === visibleRestaurantIds.length ? ($(".restaurant_noresults").show(), $("#filteringError").show()) : ($("#filteringError").hide(), $(".restaurant_noresults").hide(), refreshLazyLoad()), Balloon(visibleRestaurantIds.length)
}
function resetFilter() {
    clearSearch(), clearHash();
    var e = $('.starfilter-selected[data-type="Rating"]')[0];
    return void 0 !== e && $(e).removeClass("starfilter-selected"), $(".filter-reset-all").find(".reset-results").addClass("reset-results-hidden"), processHash(), !1
}
function clearSearch() {
    $(".restaurant_noresults").hide(), $("#irestaurantsearchstring").val(""), $("#isearchrestaurantform").keyup()
}
function toggleHashUrl(e, t) {
    if ("reset" === t)
        return removeHash(e, t), "" !== window.location.hash && "#" !== window.location.hash || resetFilter(), !1;
    if ($(".filter-reset-all").find(".reset-results").removeClass("reset-results-hidden"), $(".btn-filter", ".subnavigation").addClass("active"), "toggle" === t)
        return 1 === getHashValue(e) ? toggleHash(e, 0) : (toggleHash(e, 1), "" !== window.location.hash && "#" !== window.location.hash || resetFilter()), !1;
    if ("Rating" === e) {
        var a,
            s = $('.starfilter-selected[data-type="Rating"]')[0];
        void 0 !== s && (a = $(s).data("value").toString());
        var r = $('.filter-label[data-type="Rating"]');
        return $.each(r, function(e, t) {
            $(t).removeClass("starfilter-selected")
        }), a === t.toString() ? (removeHash(e, t), "" !== window.location.hash && "#" !== window.location.hash || resetFilter(), !1) : (updateHash(e, t), !1)
    }
    return "Cuisine" === e ? updateHash(e, t) : updateHash(e, t), !1
}
function getHashValue(e) {
    var t = _getHashObject();
    if ("undefined" != typeof t[e])
        return t[e]
}
function updateHash(e, t) {
    var a = _getHashObject();
    a[e] = t, _setHash(a)
}
var visibleRestaurantIds = [],
    restaurantelts = new Array,
    discountedOnly = !1;
$(document).ready(function() {
    if ($(document).on("click", "#favoriterestaurant", function() {
        return favo_action = $(".restaurantlogo-heart").hasClass("selected") ? "remove" : "add", xmlRequest("setFavorite.php", "action=" + favo_action + "favorite&bid=" + $(this).data("id"), "idummy"), "add" === favo_action ? $(".restaurantlogo-heart").addClass("selected") : $(".restaurantlogo-heart").removeClass("selected"), !1
    }), $("body").hasClass("step2") && $("#irestaurantlist").length > 0) {
        if (window.location.hash.length > 1) {
            processHash();
            var e = _getHashObject();
            e.Cuisine || e.Discount || e.Rating || e.MinimumOrderCosts || e.DeliveryCosts || !1;
            $(".btn-filter", ".subnavigation").addClass("active"), $(".filter-reset-all").find(".reset-results").removeClass("reset-results-hidden")
        } else if (void 0 !== pickupsettings.currentstatus)
            filterRestaurants([], !1, !1, !1, !1);
        else {
            var t = $(".restaurant_hide").length;
            t === restaurants.length ? ($(".filter-reset-all").find(".reset-results").removeClass("reset-results-hidden"), $(".restaurant_noresults").show()) : 0 !== t && t !== restaurants.length && $(".filter-reset-all").find(".reset-results").removeClass("reset-results-hidden")
        }
        if (void 0 !== pickupsettings.currentstatus) {
            var a = "takeaway" === pickupsettings.currentstatus ? 1 : 3;
            1 === a ? $(".nopickup").show() : $(".nopickup").hide()
        }
        var s = Cookies.get("sortby") || "default";
        "default" !== s && sortRestaurantsBy(s), $("#irestaurantlist").css("opacity", 1), $("#isorting-select").val(s), $("#isorting-select").change(function() {
            sortRestaurantsBy($(this).val())
        }), $(document).on("click", ".maincatmenu", function() {
            var e = !$(this).hasClass("groupfilter-on");
            toggleCategories(this), $(this).toggleClass("groupfilter-on", e)
        }), $(document).on("click", "#irestfiltercont a", function() {
            return toggleMainCategories(this), !1
        }), $(document).on("change", "#categoryFilterMapview", function() {
            return toggleMainCategories(!1, $(this).find(":selected").data("subcats")), !1
        }), $(document).on("click", "#filteringError a", function() {
            clearHash(), clearSearch()
        })
    }
    if ($("#subcatFilterBtn").click(function() {
        return "big" == AnimateHeader.settings.panel && $.when(AnimateHeader.switchCompact()).then(function() {
            $("#splash").removeAttr("style")
        }), KitchenFilter.showFilter(), !1
    }), $("body").hasClass("step2") && $("#irestaurantlist").length > 0) {
        $(document).on("click", ".filter-label", function(e) {
            return e.preventDefault(), r = !1, toggleHashUrl($(this).data("type"), $(this).data("value")), setTimeout(function() {
                n = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, r = !0
            }, 50), !1
        }), $(document).on("click", ".filter-reset-all", function(e) {
            if (e.preventDefault(), $(e.target).hasClass("show-results"))
                return resetView($(this)), !1;
            if ($(this).find(".reset-results").addClass("reset-results-hidden"), $(".btn-filter", ".subnavigation").removeClass("active"), $(".atom-accordion-down section").hasClass("open")) {
                var t = $(".atom-accordion-down .showhide-content-link"),
                    a = $(t).text(),
                    s = $(t).attr("data-toggle");
                $(t).attr("data-toggle", a).html(s + "<span></span>"), $(".atom-accordion-down section").removeClass("open")
            }
            return resetFilter(), !1
        }), $(document).on("click", ".atom-accordion-down .showhide-content-link", function(e) {
            e.preventDefault();
            var t = $(this),
                a = $(this).text(),
                s = $(this).attr("data-toggle");
            return $(this).hasClass("open") ? $(this).removeClass("open") : $(this).addClass("open"), $(t).attr("data-toggle", a).html(s + "<span></span>"), $(".atom-accordion-down section").toggleClass("open"), !1
        });
        var r = !0,
            i = document.body,
            n = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            l = $(".filter-wrapper")[0];
        $(window).scroll(function() {
            if (r && !Modernizr.mq("(max-width: 639px)")) {
                var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                l.scrollHeight - $(".filter-wrapper").height();
                if (e > n && l.scrollTop !== l.scrollHeight) {
                    var t = e - n;
                    l.scrollTop += t;
                    var a = 100 * (i.scrollTop / i.scrollHeight) / (1 - i.clientHeight / i.scrollHeight);
                    a >= 98 && (l.scrollTop = l.scrollHeight)
                } else if (0 !== l.scrollTop) {
                    var t = n - e;
                    l.scrollTop -= t
                }
                n = e
            }
        })
    }
});
$(document).ready(function() {
    function e(e, s, a) {
        window.clearTimeout(t);
        var r = 1;
        if (r = void 0 === pickupsettings.currentstatus ? 1 : "takeaway" === pickupsettings.currentstatus ? 1 : 3, 0 === e.length) {
            $.each(s, function(e, t) {
                $(t.id).removeClass("restaurant_hide")
            }), processHash();
            var n = restaurants.filter(function(e) {
                return 2 === e[18] || e[18] === r
            }).length;
            return visibleRestaurantIds.length === n && $(".filter-reset-all").find(".reset-results").addClass("reset-results-hidden"), $(".restaurant_noresults").hide(), $(".btn-search", ".subnavigation").removeClass("active"), !1
        }
        var i = a.search(e),
            u = {};
        for (var l in i)
            u[i[l].id] = i[l].id;
        for (var o in s) {
            var d = s[o];
            "undefined" != typeof u[d.id] ? r !== d.status && 2 !== d.status || $(d.id).removeClass("restaurant_hide") : $(d.id).addClass("restaurant_hide")
        }
        return 0 === i.length ? ($(".restaurant_noresults").show(), Balloon(0)) : ($(".restaurant_noresults").hide(), Balloon(i.length)), $(".btn-search", ".subnavigation").addClass("active"), $(document.body).scrollTop(0), showHeader(), $(".filter-reset-all").find(".reset-results").removeClass("reset-results-hidden"), $(window).trigger("lazyupdate"), !1
    }
    if ($("body").hasClass("step2") && 0 !== $("#irestaurantlist").length) {
        var t,
            s = [],
            a = {
                shouldSort: !0,
                threshold: .35,
                location: 0,
                distance: 100,
                maxPatternLength: 32,
                keys: ["name"]
            },
            r = new Fuse(s, a),
            n = 100;
        $(restaurants).each(function(e, t) {
            s.push({
                id: "#irestaurant" + t[0],
                name: t[4],
                status: t[18]
            })
        }), $("#isearchrestaurantform").on("keyup", function(a) {
            a.preventDefault();
            var i = "irestaurantsearchstring" === a.target.id ? $("#irestaurantsearchstring").val() : [];
            0 === i.length ? e(i, s, r) : (null !== t && window.clearTimeout(t), t = window.setTimeout(e.bind(null, i, s, r), n))
        })
    }
});
function setFavoriteStep5(a) {
    return favo_action = $(".restaurantinfofavo input.favo").hasClass("selected") ? "remove" : "add", xmlRequest("setFavorite.php", "action=" + favo_action + "favorite&bid=" + a, "idummy"), "add" == favo_action ? ($(".restaurantinfofavo input.favo").addClass("selected"), $(".restaurantinfofavo input.favo").attr("id", "unsetfavorite")) : ($(".restaurantinfofavo input.favo").removeClass("selected"), $(".restaurantinfofavo input.favo").attr("id", "setfavorite")), !1
}
$(document).on("click", ".aa-switch span.slider", function(a) {
    $(".meal-allergens").toggleClass("show")
}), $(document).on("click", "a.meal-allergens", function(a) {
    return $.post(site.local + "xHttp/product-allergens", {
        name: $(this).data("name"),
        allergens: $(this).data("allergens"),
        additives: $(this).data("additives")
    }, function(a) {
        var e = $.parseJSON(a);
        "html" == e.type && $("body").append('<div id="lightbox" class="lightbox lightbox-allergens">' + e.value + "</div>")
    }), !1
});
$(document).ready(function() {
    function e() {
        var e = $(".menu-categories"),
            t = $(".menu-category-list")[0];
        if (Modernizr.mq(d)) {
            $(".menu-categories-wrapper").css("top", "0px");
            var r = $(window).height(),
                o = $(document).height(),
                a = o - u;
            currentScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            var n = currentScrollTop + r;
            if (currentScrollTop >= h ? t.scrollHeight - document.body.scrollHeight < -800 && e.addClass(m) : e.removeClass(m), n > a ? (e.css("bottom", n - a + 40 + "px"), e[0].scrollTop = e[0].scrollHeight) : e.css("bottom", "0"), currentScrollTop > p && e[0].scrollTop !== e[0].scrollHeight) {
                var i = currentScrollTop - p;
                e[0].scrollTop += i
            } else if (0 !== e.scrollTop) {
                var i = p - currentScrollTop;
                e[0].scrollTop -= i
            }
            p = currentScrollTop
        } else
            e.removeClass(m)
    }
    function t() {
        window.addEventListener("scroll", b, !0)
    }
    function r() {
        window.removeEventListener("scroll", b, !0)
    }
    function o() {
        Modernizr.mq(d) ? n() : (a(), documentScroll = 0), h = $("header").height(), u = $("footer").height(), s()
    }
    function a(e) {
        Modernizr.mq(d) && !e || $(".sticky-header").show()
    }
    function n(e) {
        (Modernizr.mq(d) || e) && $(".sticky-header").hide()
    }
    function i() {
        var e = f.clientHeight,
            t = e + 105;
        return $("header").hasClass("hideheader") && (t -= 54), Modernizr.mq(d) ? t -= 50 : (void 0 !== $("#smartbnr")[0] && "none" !== $("#smartbnr").css("display") && (t -= $("#smartbnr").height()), t)
    }
    function s() {
        if (!$("#tab_MenuCard").hasClass("active") || $(document.body).hasClass("fullscreen"))
            return void n(!0);
        var e,
            t = $(".menu-meals-group"),
            r = !1;
        $(".menu-category-list li a").removeClass("active");
        for (var o = t.length - 1; o >= 0; o--) {
            e = t[o];
            var s = e.getBoundingClientRect();
            if (0 === o) {
                if (s.top <= 0 && !g) {
                    r = !0;
                    var c = $("#pc" + e.id + " a");
                    c.length > 0 ? c.addClass("active") : $("#nc" + e.id + " a").addClass("active");
                    break
                }
            } else if (s.top - i() <= 0) {
                r = !0, $("#nc" + e.id + " a").addClass("active");
                break
            }
        }
        if (r) {
            var l = $(f).find("a")[0];
            return l.innerText = $(e).find(".menu-category-head div span").text(), $(l).data("categoryId", e.id), a(), !0
        }
        e = t[0];
        var c = $("#pc" + e.id + " a");
        c.length > 0 ? c.addClass("active") : $("#nc" + e.id + " a").addClass("active"), n(!0)
    }
    function c(e) {
        r(), $(".menu-categories-wrapper", ".menucard-listing").toggleClass("visible"), resetView(), "0" === e ? ($(".sticky-header").hide(), $("header").removeClass("hideheader")) : a(), Modernizr.mq(d) || (enableHideHeader = !1), $("html, body").stop().animate({
            scrollTop: $("#" + e).offset().top - i()
        }, {
            duration: v,
            always: debounce(function() {
                enableHideHeader = !0, lastScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, t()
            }, 250, !1)
        })
    }
    function l(e) {
        $("#tab_MenuCard").hasClass("active") ? void 0 !== e && e() : openTab($("#tab_MenuCard"), e)
    }
    if ($("body").hasClass("step3")) {
        var d = "(min-width: 639px)",
            u = (document.body, $("footer").height()),
            h = $("header").height(),
            p = currentScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            m = "menu-categories-scrolling",
            g = !1;
        $(window).scroll(throttle(e, 0, !1)), $(window).resize(throttle(e, 500, !1)), e();
        var v = 500,
            f = ($("#sticky-header-line")[0], $(".sticky-header")[0]),
            b = throttle(s, 100, !1);
        s(), t(), o(), window.onresize = throttle(o, 500, !1), $(document).on("click", ".menu-categories ul li a", function(e) {
            function t() {
                var t = $("#irestaurantsearchstring").val();
                0 === t.length && resetView(), $(".menu-categories-wrapper", ".menucard-listing").removeClass("visible"), $(".menu-category-list li a").removeClass("active"), $(e.target).addClass("active");
                var r = $(e.target).parent()[0].id.substring(2),
                    o = $(f).find("a")[0];
                o.innerText = $("#" + r).find(".menu-category-head div span").text(), $(o).data("categoryId", r), c(r)
            }
            e.preventDefault(), l(t)
        }), $(document).on("click", ".sticky-header a", function(e) {
            e.preventDefault();
            var t = $(e.target).data("categoryId");
            c(t)
        }), $(".btn-categories").click(function(e) {
            $(document.body).hasClass("fullscreen") ? (void 0 !== $("#toTop")[0] && $("#toTop").hide(), n(), $("header").hasClass("hideheader") ? $(".menu-categories-wrapper").css("top", "-56px") : $(".menu-categories-wrapper").css("top", "0px")) : (void 0 !== $("#toTop")[0] && $("#toTop").show(), a())
        }), $(".btn", ".subnavigation").click(function(e) {
            $(document.body).hasClass("fullscreen") ? n(!0) : (a(), s())
        }), $(".btn-close").click(function(e) {
            e.stopPropagation(), a(), s(), $(".menu-categories-wrapper").css("top", "0px"), 0 === $("#irestaurantsearchstring").val().length && (g = !1)
        }), $("#isearchrestaurantform, #isearchrestaurantform2")[0].addEventListener("keyup", function(e) {
            e.preventDefault();
            var t = "irestaurantsearchstring" === e.target.id ? $("#irestaurantsearchstring").val() : [];
            g = 0 !== t.length, setTimeout(s, 50)
        }, !1)
    }
});
function menucard_DeliveryAreaNeeded(e) {
    return $.post(site.local + "xHttp/showDeliveryArea.php", {
        restid: e
    }).done(function(e) {
        var i = $.parseJSON(e);
        "html" === i.type && $("body").append('<div id="lightbox" class="lightbox">' + i.value + "</div>")
    }), !1
}
function menucard_AddToBasket(e) {
    return $.post(site.local + "xHttp/Basket.php", $("#" + e).serialize()).done(function(e) {
        $("#ibasket").html(e), updateUtilitybarBasketBtn()
    }), $(".sidedish-pop-in").html(""), $(".meal-sidedish").each(function() {
        $(this).removeClass("meal-sidedish"), $(".menu-meal-add", $(this)).removeAttr("disabled")
    }), $("#imenucard").removeClass("menucard-sidedish"), !1
}
function menucard_ShowSideDishes(e, i) {
    return $(".sidedish-pop-in").html(""), $(".menu-meal-add").removeAttr("disabled"), $(".meal.meal-sidedish").removeClass("meal-sidedish"), $.post(site.local + "xHttp/showSidedishes.php", $("#" + e).serialize()).done(function(t) {
        productId = $('input[name="product"]', "#" + e).val(), mealDiv = $("#" + e).closest(".meal"), $("#" + i).html(t), $(".menu-meal-add", mealDiv).first().attr("disabled", "disabled"), $(".aa-switch input").prop("checked") && $(".meal-allergens").addClass("show"), $("html,body").animate({
            scrollTop: mealDiv.offset().top - $(".subnavigation").height()
        }, 600, "swing"), mealDiv.addClass("meal-sidedish"), $("#imenucard").addClass("menucard-sidedish")
    }), !1
}
function menucard_ShowNotification(e, i) {
    return $(".tooltip").remove(), productId = $('input[name="product"]', e).val(), 0 === $("#tooltipdiv" + productId).length && $("#" + e.id).prepend('<div id="tooltipdiv' + productId + '"></div>'), xmlRequest(site.local + "xHttp/showNotification.php", i, "tooltipdiv" + productId), tooltip = $("#tooltipdiv" + productId), referingButton = $("div.button_add", e), tooltip.addClass("tooltip").delay(3e3).fadeOut(200), !1
}
function showSize(e) {
    selectedValueParts = e.split(";"), productid = selectedValueParts[0], $(".sidedishformcontainer").addClass("hidden"), $("#isidedishformcontainer" + productid).removeClass("hidden")
}
function changeTotalSidedishPriceCheckbox(e, i, t, d, a, r, n) {
    currentPriceObj = $("#isidedishprice" + n);
    var o = parseFloat(currentPriceObj.val());
    isNaN(o) || (r.checked ? currentPriceObj.val((Math.round(100 * e) + Math.round(100 * o)) / 100) : currentPriceObj.val((Math.round(100 * o) - Math.round(100 * e)) / 100), updateBtnPrice($(".sidedish-add-button", "#isidedishselectionform" + n), currentPriceObj.val(), n))
}
function changeTotalSidedishPricePulldown(e, i, t, d, a, r) {
    currentPriceObj = $("#isidedishprice" + r), oldPriceObj = $("#isidedishselectvalue_" + a.id.split("_")[1]), optionValue = $("#" + a.id).find(":selected").val().split(";"), newValue = optionValue.length >= 2 ? optionValue[1] : 0, currentprice = parseFloat(currentPriceObj.val()), oldvalue = parseFloat(oldPriceObj.val()), newvalue = parseFloat(newValue), isNaN(currentprice) || isNaN(oldvalue) || isNaN(newvalue) || (currentPriceObj.val((Math.round(100 * currentprice) - Math.round(100 * oldvalue) + Math.round(100 * newvalue)) / 100), oldPriceObj.val(newValue), updateBtnPrice($(".sidedish-add-button", "#isidedishselectionform" + r), currentPriceObj.val(), r))
}
function updateBtnPrice(e, i, t) {
    i *= parseInt($("#ibasketproductnrspan" + t).html());
    var d = !1,
        a = !1;
    return d = e.find(".button_add_value").find("span").html(), "undefined" != typeof d && (a = !0, d = '<span class="wai_screenreader">' + d + "</span>"), a ? e.find(".button_add_value").html("<h3>" + format_price(i, currency_config.nrofdecimals, currency_config.decimalsepparator, currency_config.thousandsepparator, currency_config.symbol) + d + "</h3>") : e.find(".button_add_value").html(format_price(i, currency_config.nrofdecimals, currency_config.decimalsepparator, currency_config.thousandsepparator, currency_config.symbol) + d), !1
}
$(document).ready(function() {
    $(document).on("click", ".popin-close", function(e) {
        return e.preventDefault(), $("body").removeClass("fullscreen"), $(this).closest("div.meal").removeClass("meal-sidedish"), $(".menu-meal-add").removeAttr("disabled"), $("#imenucard").removeClass("menucard-sidedish"), $(this).closest(".sidedish-pop-in").html(""), !1
    }), $(document).on("click", ".menucard div.meal", function(e) {
        e.stopPropagation(), 0 === $(".sidedish-pop-in input", this).length && "SELECT" !== e.target.nodeName && "A" !== e.target.nodeName && "INPUT" !== e.target.nodeName && "CHECKBOX" !== e.target.nodeName && "LABEL" !== e.target.nodeName && "RADIOBUTTON" !== e.target.nodeName && "A" !== e.target.parentElement.parentElement.nodeName && $("form", this).first().submit()
    })
});
$(document).ready(function() {
    function e() {
        var e = {
                shouldSort: !1,
                threshold: .35,
                location: 0,
                distance: 350,
                maxPatternLength: 32,
                sortFn: function(e, n) {
                    return parseFloat(n.score) - parseFloat(e.score)
                },
                keys: [{
                    name: "name",
                    weight: .9
                }, {
                    name: "description",
                    weight: .1
                }]
            },
            n = new Fuse(s, e);
        return $('#imenucard .menu-meals-group[id!="0"] .meal').each(function(e, n) {
            s.push({
                id: "#" + n.id,
                name: $(this).find(".meal-name").text(),
                description: $(this).find(".meal-description-additional-info").text()
            })
        }), n
    }
    function n(n, a, t) {
        if (window.clearTimeout(i), void 0 === t && (t = e()), 0 === o.length && (o = $(".menu-meals-group")), 0 === n.length)
            return $.each(a, function(e, n) {
                $(n.id).show()
            }), $(".menu-meals-group-category").show(), $(".menu-meals-group-populair").show(), $(".menu-category-list li").show(), $(".btn-search", ".subnavigation").removeClass("active"), !1;
        $(".menu-meals-group-category").hide(), $(".menu-meals-group-populair").hide(), $(".menu-category-list li").hide();
        var r = t.search(n),
            s = {};
        for (var u in r)
            s[r[u].id] = r[u].id;
        for (var c in a)
            "undefined" != typeof s[a[c].id] ? $(a[c].id).show() : $(a[c].id).hide();
        return $.each(o, function(e, n) {
            var a = $(n).find("div.meal");
            $.each(a, function(e, a) {
                if ("none" !== $(a).css("display"))
                    return $("#nc" + n.id).show(), $(n).find(".menu-meals-group-category").show(), !1
            })
        }), 0 === r.length, $(".btn-search", ".subnavigation").addClass("active"), !1
    }
    function a(e) {
        $("#tab_MenuCard").hasClass("active") ? void 0 !== e && e() : u($("#tab_MenuCard"), e)
    }
    if ($("body").hasClass("step3")) {
        $(".btn.btn-search").click(function(e) {
            return e.preventDefault(), a(), !1
        });
        var i,
            t,
            r = 100,
            o = [],
            s = [],
            u = debounce(openTab, 250, !1);
        $("#isearchrestaurantform").on("keyup", function(e) {
            e.preventDefault();
            var a = "irestaurantsearchstring" === e.target.id ? $("#irestaurantsearchstring").val() : [];
            0 === a.length ? n(a, s, t) : (null !== i && window.clearTimeout(i), i = window.setTimeout(n.bind(null, a, s, t), r))
        })
    }
});
function openTab(t, a) {
    var e = $(t).attr("id"),
        n = $("a", $(t)).data("id"),
        s = $("a", $(t)).attr("href"),
        o = $(t).attr("title");
    $.ajax({
        type: "POST",
        url: site.local + "xHttp/loadTab.php",
        data: {
            tabId: e,
            restId: n
        }
    }).done(function(t) {
        $("#menu-tab-content").html(t), $("#menu-tab-content").attr("class", "").addClass("menu-meals").addClass(e.toLowerCase()), history.pushState("", o, s + window.location.search), $(".menucard-listing .tabs li").removeClass("active"), $("#" + e).addClass("active"), void 0 !== a && a()
    })
}
$(document).ready(function() {
    $(document.body).hasClass("step3") && $(document).on("click", ".menucard-listing .tabs li", function(t) {
        return t.preventDefault(), openTab(this), !1
    })
});
$(document).ready(function() {
    $(document).on("click", ".radiogroup_stars input", function() {
        var t = $(this).parent().parent(),
            n = $(this);
        t.find("label").each(function() {
            $(this).css("background-image", "url('/images/icons/star_empty.png')")
        }), t.find("label").each(function() {
            if ($(this).css("background-image", "url('/images/icons/star_full.png')"), $(this).attr("for") == n.attr("id"))
                return !1
        })
    }), $(document).on("click", ".votedetails-close", function() {
        $(this).parent().html("").hide()
    })
});
$(document).ready(function() {
    function o() {
        var o = document.body.scrollHeight - document.body.offsetHeight,
            e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (e >= o - 1) {
            var d = $("#ibasket .menu-cart-fixed")[0];
            $(d).css("padding-bottom", "140px"), d.scrollTop = d.scrollHeight, t = !0
        }
        if (e < o && t) {
            t = !1;
            var d = $("#ibasket .menu-cart-fixed")[0];
            $(d).css("padding-bottom", "40px")
        }
    }
    if ($(document.body).hasClass("step3") || $(document.body).hasClass("step4")) {
        $(window).scroll(throttle(o, 0, !1));
        var t = !1
    }
});
$(document).ready(function() {
    $(document.body).hasClass("step4") && $(document).on("click", ".paymentbuttonwrapper input", function(t) {
        t.preventDefault(), t.stopPropagation();
        var a = t.target.value;
        $.ajax({
            type: "POST",
            url: site.local + "xHttp/OrderDetails/showPaymentDetails.php",
            data: {
                paymentmethod: a
            }
        }).done(function(t) {
            $("#ipaymentdetails").html(t)
        }), $.ajax({
            type: "POST",
            url: site.local + "xHttp/Basket.php",
            data: {
                paymentmethod: a
            }
        }).done(function(t) {
            $("#ibasket").html(t), updateBasket()
        })
    })
});
function doVoucherRequest(vouchercode) {
    var voucherconnection = !1;
    if (window.XMLHttpRequest)
        voucherconnection = new XMLHttpRequest;
    else if (window.ActiveXObject)
        try {
            voucherconnection = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {
            voucherconnection = new ActiveXObject("Microsoft.XMLHTTP")
        }
    return !!voucherconnection && (voucherconnection.open("POST", "checkVoucher.php", !0), voucherconnection.onreadystatechange = function() {
            if (1 === voucherconnection.readyState || 2 === voucherconnection.readyState || 3 === voucherconnection.readyState, 4 === voucherconnection.readyState && 4 === voucherconnection.readyState) {
                var response = eval("(" + voucherconnection.responseText + ")");
                if (response.status) {
                    if ("success" === response.status) {
                        $.ajax({
                            type: "POST",
                            url: site.local + "xHttp/Basket.php",
                            data: {
                                paymentmethod: "13"
                            }
                        }).done(function(e) {
                            $("#ibasket").html(e), updateBasket()
                        });
                        var elt = document.getElementById("ivouchercontainer");
                        elt && (elt.innerHTML = response.value), xmlRequest2(site.local + "xHttp/OrderDetails/showPaymentDetails.php", "paymentmethod=", "ipaymentdetails"), xmlRequest3(site.local + "xHttp/OrderDetails/showPayments.php", "paymentmethod=", "ipayments")
                    } else if ("error" === response.status) {
                        var i;
                        for (i = 0; i < response.markfields.length; i++) {
                            var mfield = document.getElementById(response.markfields[i]);
                            if (mfield) {
                                var teststr = mfield.className;
                                " marked" !== teststr.substr(teststr.length - 7) && (mfield.className = mfield.className + " marked")
                            }
                        }
                        var elt = document.getElementById("ivouchermessage");
                        elt && (elt.innerHTML = response.value)
                    }
                    delete voucherconnection
                } else
                    delete voucherconnection
            }
        }, voucherconnection.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), void voucherconnection.send("vouchercode=" + vouchercode))
}
function removeVoucher() {
    var e = !1;
    if (window.XMLHttpRequest)
        e = new XMLHttpRequest;
    else if (window.ActiveXObject)
        try {
            e = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (t) {
            e = new ActiveXObject("Microsoft.XMLHTTP")
        }
    return !!e && (e.open("POST", site.local + "xHttp/OrderDetails/removeVoucher.php", !0), e.onreadystatechange = function() {
            if (1 === e.readyState || 2 === e.readyState || 3 === e.readyState, 4 === e.readyState)
                if (4 === e.readyState) {
                    var t = document.getElementById("ivoucherpopuplink");
                    t && (t.className = "smalltextright"), t = document.getElementById("ivouchercontainer"), t && (t.innerHTML = ""), $.ajax({
                        type: "POST",
                        url: site.local + "xHttp/Basket.php",
                        data: {
                            paymentmethod: ""
                        }
                    }).done(function(e) {
                        $("#ibasket").html(e), updateBasket()
                    }), xmlRequest2(site.local + "xHttp/OrderDetails/showPaymentDetails.php", "paymentmethod=", "ipaymentdetails"), xmlRequest3(site.local + "xHttp/OrderDetails/showPayments.php", "paymentmethod=", "ipayments"), delete e
                } else
                    delete e
        }, e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), e.send("unsetvoucher=true"), void $("#ivoucherpopuplink").show())
}
function updateUtilitybarBasketBtn() {
    utilitybarBasketBtn = $("#btn-basket"), basketTotalItems = 0, $(".cart-single-meal .cart-row[data-amount]", "#ibasket").each(function() {
        basketTotalItems += Number($(this).attr("data-amount"))
    }), basketTotalItems > 0 ? (basketTotalPrice = $("#basket-total").html(), $("#btn-basket").addClass("btn-basket-products")) : (basketTotalPrice = $(".jig-cart-empty-state").attr("data-amount"), $("#btn-basket").removeClass("btn-basket-products")), $(".btn-cart-price", utilitybarBasketBtn).html(basketTotalPrice), $(".btn-cart-amount", utilitybarBasketBtn).html(basketTotalItems), $("#btn-basket").find(".btn-cart-icon").addClass("pulse-button");
    setTimeout(function() {
        $("#btn-basket").find(".btn-cart-icon").removeClass("pulse-button")
    }, 250);
    $(".subnav-wrapper").hasClass("basketmode") || ($("#btn-basket").addClass("highlight"), setTimeout(function() {
        $("#btn-basket").removeClass("highlight")
    }, 1e3))
}
$(document).ready(function() {
    $(document).on("click", "#ibasket", function(e) {
        if ("cart-meal-edit-delete" === $(e.target).attr("class") || "cart-meal-edit-add" === $(e.target).attr("class") || "cart-meal-delete" === $(e.target).attr("class")) {
            e.preventDefault();
            var t = !1,
                a = "changenumber",
                n = $(e.target).closest(".cart-row").data("restaurant"),
                o = $(e.target).closest(".cart-row").data("id"),
                c = $(e.target).closest(".cart-row").data("amount"),
                s = "cart-meal-edit-delete" === $(e.target).attr("class") ? "delete" : "add";
            return "cart-meal-delete" === $(e.target).attr("class") && (t = !0), "undefined" != typeof n && "undefined" != typeof o && (t ? a = "remove" : ("delete" === s && c--, "add" === s && c++), $.post(site.local + "xHttp/Basket.php", {
                rest: n,
                action: a,
                product: o,
                amount: c
            }).done(function(e) {
                $("#ibasket").html(e), updateUtilitybarBasketBtn(), updateBasket()
            })), !1
        }
    }), $(document).on("click", ".checkout-voucher .voucher-add-check", function(e) {
        return e.preventDefault(), vouchercode = $(this).prev().val(), $("#ivouchermessage").html(""), doVoucherRequest(vouchercode), !1
    }), $(document).on("click", ".checkout-voucher h3.voucher-add", function(e) {
        return $(this).toggleClass("open"), $(".checkout-voucher-container").toggleClass("open"), !1
    })
});

function showHideCompany(e) {
    var a = document.getElementById("icompanyname1"),
        o = document.getElementById("icompanyname2");
    a && o && (e ? (a.className = "companyname1", o.className = "companyname2") : (a.className = "companyname1_nodisplay", o.className = "companyname2_nodisplay"))
}
function changeResidenceTypes(e) {
    var a,
        o = new Array("apartmentname", "floor", "roomnumber", "buildingname", "hotelname", "compoundname", "addressatcompound");
    for (a = 0; a < o.length; a++)
        $("#icheckoutdivr_" + o[a]).addClass("checkoutdivr_nodisplay");
    switch (e) {
    case "apartment":
        $("#icheckoutdivr_apartmentname").addClass("checkoutdivr"), $("#icheckoutdivr_apartmentname").removeClass("checkoutdivr_nodisplay"), $("#icheckoutdivrs_apartmentname").addClass("checkoutdivr"), $("#icheckoutdivrs_apartmentname").removeClass("checkoutdivr_nodisplay"), $("#icheckoutdivr_floor").addClass("off-02 checkoutdivr"), $("#icheckoutdivr_floor").removeClass("checkoutdivr_nodisplay"), $("#icheckoutdivr_roomnumber").addClass("checkoutdivr"), $("#icheckoutdivr_roomnumber").removeClass("off-02 checkoutdivr_nodisplay");
        break;
    case "hotel":
        $("#icheckoutdivr_hotelname").addClass("checkoutdivr"), $("#icheckoutdivr_hotelname").removeClass("checkoutdivr_nodisplay"), $("#icheckoutdivr_roomnumber").addClass("checkoutdivr off-02"), $("#icheckoutdivr_roomnumber").removeClass("checkoutdivr_nodisplay");
        break;
    case "office":
        $("#icheckoutdivr_roomnumber").addClass("checkoutdivr"), $("#icheckoutdivr_roomnumber").removeClass("off-02 checkoutdivr_nodisplay"), $("#icheckoutdivr_buildingname").addClass("checkoutdivr"), $("#icheckoutdivr_buildingname").removeClass("checkoutdivr_nodisplay"), $("#icheckoutdivr_floor").addClass("off-02 checkoutdivr"), $("#icheckoutdivr_floor").removeClass("checkoutdivr_nodisplay");
        break;
    case "compound":
        $("#icheckoutdivr_compoundname").addClass("checkoutdivr"), $("#icheckoutdivr_compoundname").removeClass("checkoutdivr_nodisplay"), $("#icheckoutdivr_addressatcompound").addClass("off-02 checkoutdivr"), $("#icheckoutdivr_addressatcompound").removeClass("checkoutdivr_nodisplay");
        break;
    case "house":
    }
}
function toggleOwnCharacteristics(e) {
    var a = document.getElementById("ibusinessreference");
    a && ("" == e ? a.className = "businessreference" : a.className = "businessreference_nodisplay")
}
function clickSubmitbuttonOnce(e) {
    return !hasClicked && (hasClicked = !0, !!$(e).hasClass("button_form") && ($(e).addClass("button_form_disabled"), !0))
}
$(function() {
    if ($("body").hasClass("step4")) {
        var e = $("input:text, textarea", ".orderdetails-checkout").first(),
            a = $("input:text.marked, textarea.marked", ".orderdetails-checkout");
        0 === a.length && "" == e.val() ? $(e).focus() : $(a).first().focus()
    }
    $(document).on("change", "#iselectpayment", function() {
        $(".paymentmethod" + $(this).val()).click().find("input").click()
    }), $(document).on("click", ".paymentbuttonwrapper", function() {
        $(".paymentbuttonwrapper", "#ipayments").each(function(e, a) {
            $(this).removeClass("paymentbuttonchecked")
        }), $(this).addClass("paymentbuttonchecked"), $("input", $(this)).prop("checked", !0), $("#iselectpayment").val($(this).find("input").val())
    }), $(document).on("blur", "#iaddress", function() {
        if ($(this).hasClass("nohousenumber"))
            return !1;
        var e = this.value;
        "" != e && (null == e.match(/\d+/g) ? ($(this).addClass("marked"), $("#iaddressnotice").fadeIn()) : ($("#iaddressnotice").fadeOut(), $(this).removeClass("marked")))
    })
});
var hasClicked = !1;

