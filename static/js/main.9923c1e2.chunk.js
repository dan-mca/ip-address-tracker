(this["webpackJsonpip-address-tracker"]=this["webpackJsonpip-address-tracker"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(7),s=n.n(r),i=(n(12),n(2)),o=n.n(i),u=n(4),j=n(3),l=(n(14),n(15),n(0)),b=function(){return Object(l.jsx)("footer",{className:"attribution",children:Object(l.jsxs)("p",{children:["Challenge by"," ",Object(l.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",children:"Frontend Mentor"}),". Coded by ",Object(l.jsx)("a",{href:"https://github.com/dan-mca/ip-address-tracker",children:"Dan McAuley"}),"."]})})},d=(n(17),n(18),n(19),function(e){var t=e.title,n=e.value;return Object(l.jsxs)("div",{className:"infoItem",children:[Object(l.jsx)("h5",{children:t.toUpperCase()}),Object(l.jsx)("h3",{children:n||"-"})]})}),f=function(e){var t=e.data;return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(d,{title:"ip address",value:t.ip}),Object(l.jsx)("hr",{}),Object(l.jsx)(d,{title:"location",value:t.city||t.region||t.postal?"".concat(t.city,", ").concat(t.region,", ").concat(t.postal):"-"}),Object(l.jsx)("hr",{}),Object(l.jsx)(d,{title:"timezone",value:t.timezone?t.timezone.replace("/","/ "):"-"}),Object(l.jsx)("hr",{}),Object(l.jsx)(d,{title:"isp",value:t.org})]})},h=(n(20),n.p+"static/media/icon-arrow.2eaaa5ee.svg"),p=function(e){var t=e.submittedSearch,n=Object(c.useState)(""),a=Object(j.a)(n,2),r=a[0],s=a[1];return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r)},className:"form",children:[Object(l.jsx)("input",{type:"text",className:"form__input",placeholder:"Search for any IP address","aria-label":"input field",onChange:function(e){s(e.target.value)}}),Object(l.jsx)("button",{className:"form__button","aria-label":"submit",children:Object(l.jsx)("img",{src:h})})]})},O=function(e){var t=e.submittedSearch,n=e.data;return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{className:"header__title",children:"IP Address Tracker"}),Object(l.jsx)(p,{submittedSearch:t}),Object(l.jsx)(f,{data:n})]})},m=(n(21),n(5)),x=function(e){var t=e.center,n=t?t.split(",").map(Number):[51.507359,-.136439];return Object(l.jsx)("main",{className:"map",children:Object(l.jsxs)(m.a,{center:n,defaultZoom:12,children:[Object(l.jsx)(m.c,{}),Object(l.jsx)(m.b,{width:50,anchor:n,color:"blue"})]})})},v=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://ipinfo.io/","?token=b3433d99aacf4a",e.prev=2,e.next=5,fetch("https://ipinfo.io/"+t+"?token=b3433d99aacf4a");case 5:return n=e.sent,e.next=8,n.json();case 8:return c=e.sent,e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();var g=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(j.a)(r,2),i=s[0],d=s[1],f=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api64.ipify.org?format=json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.next=8,n.ip;case 8:c=e.sent,a(c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(i),Object(c.useEffect)((function(){f(),v(n).then((function(e){return d(e)})).catch((function(e){return console.log(e.message)}))}),[]),Object(c.useEffect)((function(){v(n).then((function(e){404===e.status?alert("A valid IP address doesn't appear to have been entered. Please check and try again."):d(e)})).catch((function(e){return console.log(e.message)}))}),[n]),Object(l.jsxs)("section",{className:"app",children:[Object(l.jsx)(O,{submittedSearch:function(e){return e?a(e):f()},data:i}),Object(l.jsx)(x,{center:i?i.loc:""}),Object(l.jsx)(b,{})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),k()}],[[22,1,2]]]);
//# sourceMappingURL=main.9923c1e2.chunk.js.map