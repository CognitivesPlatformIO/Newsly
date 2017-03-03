/**
* @preserve HTML5 Shiv 3.7.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.2",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b)}(this,document);


/*! Respond.js v1.4.2: min/max-width media query polyfill * Copyright 2013 Scott Jehl
 * Licensed under https://github.com/scottjehl/Respond/blob/master/LICENSE-MIT
 *  */
!function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";function b(){u(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))};if(c.ajax=f,c.queue=d,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var g,h,i,j=a.document,k=j.documentElement,l=[],m=[],n=[],o={},p=30,q=j.getElementsByTagName("head")[0]||k,r=j.getElementsByTagName("base")[0],s=q.getElementsByTagName("link"),t=function(){var a,b=j.createElement("div"),c=j.body,d=k.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=j.createElement("body"),c.style.background="none"),k.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&k.insertBefore(c,k.firstChild),a=b.offsetWidth,f?k.removeChild(c):c.removeChild(b),k.style.fontSize=d,e&&(c.style.fontSize=e),a=i=parseFloat(a)},u=function(b){var c="clientWidth",d=k[c],e="CSS1Compat"===j.compatMode&&d||j.body[c]||d,f={},o=s[s.length-1],r=(new Date).getTime();if(b&&g&&p>r-g)return a.clearTimeout(h),h=a.setTimeout(u,p),void 0;g=r;for(var v in l)if(l.hasOwnProperty(v)){var w=l[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?i||t():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?i||t():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(m[w.rules]))}for(var C in n)n.hasOwnProperty(C)&&n[C]&&n[C].parentNode===q&&q.removeChild(n[C]);n.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=j.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,q.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(j.createTextNode(F)),n.push(E)}},v=function(a,b,d){var e=a.replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var g=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},h=!f&&d;b.length&&(b+="/"),h&&(f=1);for(var i=0;f>i;i++){var j,k,n,o;h?(j=d,m.push(g(a))):(j=e[i].match(c.regex.findStyles)&&RegExp.$1,m.push(RegExp.$2&&g(RegExp.$2))),n=j.split(","),o=n.length;for(var p=0;o>p;p++)k=n[p],l.push({media:k.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:m.length-1,hasquery:k.indexOf("(")>-1,minw:k.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:k.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},w=function(){if(d.length){var b=d.shift();f(b.href,function(c){v(c,b.href,b.media),o[b.href]=!0,a.setTimeout(function(){w()},0)})}},x=function(){for(var b=0;b<s.length;b++){var c=s[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!o[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(v(c.styleSheet.rawCssText,e,f),o[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!r||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}w()};x(),c.update=x,c.getEmValue=t,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);


var msg1 = "Internet Explorer is out of date";
var msg2 = "Please upgrade to a newer version or download an alternative web browser.";
var msg3 = "";
var br1 = "Internet Explorer 9+";
var br2 = "Firefox";
var br3 = "Safari";
var br4 = "Opera";
var br5 = "Chrome";
var url1 = "http://www.microsoft.com/windows/Internet-explorer/default.aspx";
var url2 = 'http://www.mozilla.com/firefox/';
var url3 = 'http://www.apple.com/safari/download/';
var url4 = 'http://www.opera.com/download/';
var url5 = "http://www.google.com/chrome";

function e(str) {imgPath = str;var _body = document.getElementsByTagName('body')[0];var _d = document.createElement('div');var _l = document.createElement('div');var _h = document.createElement('h1');var _p1 = document.createElement('p');var _p2 = document.createElement('p');var _ul = document.createElement('ul');var _li1 = document.createElement('li');var _li2 = document.createElement('li');var _li3 = document.createElement('li');var _li4 = document.createElement('li');var _li5 = document.createElement('li');var _ico1 = document.createElement('div');var _ico2 = document.createElement('div');var _ico3 = document.createElement('div');var _ico4 = document.createElement('div');var _ico5 = document.createElement('div');var _lit1 = document.createElement('div');var _lit2 = document.createElement('div');var _lit3 = document.createElement('div');var _lit4 = document.createElement('div');var _lit5 = document.createElement('div');_body.appendChild(_l);_body.appendChild(_d);_d.appendChild(_h);_d.appendChild(_p1);_d.appendChild(_p2);_d.appendChild(_ul);_ul.appendChild(_li1);_ul.appendChild(_li2);_ul.appendChild(_li3);_ul.appendChild(_li4);_ul.appendChild(_li5);_li1.appendChild(_ico1);_li2.appendChild(_ico2);_li3.appendChild(_ico3);_li4.appendChild(_ico4);_li5.appendChild(_ico5);_li1.appendChild(_lit1);_li2.appendChild(_lit2);_li3.appendChild(_lit3);_li4.appendChild(_lit4);_li5.appendChild(_lit5);_d.setAttribute('id','_d');_l.setAttribute('id','_l');_h.setAttribute('id','_h');_p1.setAttribute('id','_p1');_p2.setAttribute('id','_p2');_ul.setAttribute('id','_ul');_li1.setAttribute('id','_li1');_li2.setAttribute('id','_li2');_li3.setAttribute('id','_li3');_li4.setAttribute('id','_li4');_li5.setAttribute('id','_li5');_ico1.setAttribute('id','_ico1');_ico2.setAttribute('id','_ico2');_ico3.setAttribute('id','_ico3');_ico4.setAttribute('id','_ico4');_ico5.setAttribute('id','_ico5');_lit1.setAttribute('id','_lit1');_lit2.setAttribute('id','_lit2');_lit3.setAttribute('id','_lit3');_lit4.setAttribute('id','_lit4');_lit5.setAttribute('id','_lit5');var _width = document.documentElement.clientWidth;var _height = document.documentElement.clientHeight;var _dl = document.getElementById('_l');_dl.style.width =  _width+"px";_dl.style.height = _height+"px";_dl.style.position = "absolute";_dl.style.top = "0px";_dl.style.left = "0px";_dl.style.filter = "alpha(opacity=50)";_dl.style.background = "#fff";var _dd = document.getElementById('_d');_ddw = 650;_ddh = 260;_dd.style.width = _ddw+"px";_dd.style.height = _ddh+"px";_dd.style.position = "absolute";_dd.style.top = ((_height-_ddh)/2)+"px";_dd.style.left = ((_width-_ddw)/2)+"px";_dd.style.padding = "20px";_dd.style.background = "#fff";_dd.style.border = "1px solid #ccc";_dd.style.fontFamily = "'Lucida Grande','Lucida Sans Unicode',Arial,Verdana,sans-serif";_dd.style.listStyleType = "none";_dd.style.color = "#4F4F4F";_dd.style.fontSize = "12px";_h.appendChild(document.createTextNode(msg1));var _hd = document.getElementById('_h');_hd.style.display = "block";_hd.style.fontSize = "1.3em";_hd.style.marginBottom = "0.5em";_hd.style.color = "#333";_hd.style.fontFamily = "Helvetica,Arial,sans-serif";_hd.style.fontWeight = "bold";_p1.appendChild(document.createTextNode(msg2));var _p1d = document.getElementById('_p1');_p1d.style.marginBottom = "1em";_p2.appendChild(document.createTextNode(msg3));var _p2d = document.getElementById('_p2');_p2d.style.marginBottom = "1em";var _uld = document.getElementById('_ul');_uld.style.listStyleImage = "none";_uld.style.listStylePosition = "outside";_uld.style.listStyleType = "none";_uld.style.margin = "0 px auto";_uld.style.padding = "0px";_uld.style.paddingLeft = "10px";var _li1d = document.getElementById('_li1');var _li2d = document.getElementById('_li2');var _li3d = document.getElementById('_li3');var _li4d = document.getElementById('_li4');var _li5d = document.getElementById('_li5');var _li1ds = _li1d.style;var _li2ds = _li2d.style;var _li3ds = _li3d.style;var _li4ds = _li4d.style;var _li5ds = _li5d.style;_li1ds.background = _li2ds.background = _li3ds.background = _li4ds.background = _li5ds.background = "transparent url('"+imgPath+"background_browser.gif') no-repeat scroll left top";_li1ds.cursor = _li2ds.cursor = _li3ds.cursor = _li4ds.cursor = _li5ds.cursor = "pointer";_li1d.onclick = function() {window.location = url1 }; _li2d.onclick = function() {window.location = url2 }; _li3d.onclick = function() {window.location = url3 }; _li4d.onclick = function() {window.location = url4 }; _li5d.onclick = function() {window.location = url5 }; _li1ds.styleFloat = _li2ds.styleFloat = _li3ds.styleFloat = _li4ds.styleFloat = _li5ds.styleFloat = "left";_li1ds.width = _li2ds.width = _li3ds.width = _li4ds.width = _li5ds.width = "120px";_li1ds.height = _li2ds.height = _li3ds.height = _li4ds.height = _li5ds.height = "122px";_li1ds.margin = _li2ds.margin = _li3ds.margin = _li4ds.margin = _li5ds.margin = "0 10px 10px 0";var _ico1d = document.getElementById('_ico1');var _ico2d = document.getElementById('_ico2');var _ico3d = document.getElementById('_ico3');var _ico4d = document.getElementById('_ico4');var _ico5d = document.getElementById('_ico5');var _ico1ds = _ico1d.style;var _ico2ds = _ico2d.style;var _ico3ds = _ico3d.style;var _ico4ds = _ico4d.style;var _ico5ds = _ico5d.style;_ico1ds.width = _ico2ds.width = _ico3ds.width = _ico4ds.width = _ico5ds.width = "100px";_ico1ds.height = _ico2ds.height = _ico3ds.height = _ico4ds.height = _ico5ds.height = "100px";_ico1ds.margin = _ico2ds.margin = _ico3ds.margin = _ico4ds.margin = _ico5ds.margin = "1px auto";_ico1ds.background = "transparent url('"+imgPath+"browser_ie.gif') no-repeat scroll left top";_ico2ds.background = "transparent url('"+imgPath+"browser_firefox.gif') no-repeat scroll left top";_ico3ds.background = "transparent url('"+imgPath+"browser_safari.gif') no-repeat scroll left top";_ico4ds.background = "transparent url('"+imgPath+"browser_opera.gif') no-repeat scroll left top";_ico5ds.background = "transparent url('"+imgPath+"browser_chrome.gif') no-repeat scroll left top";_lit1.appendChild(document.createTextNode(br1));_lit2.appendChild(document.createTextNode(br2));_lit3.appendChild(document.createTextNode(br3));_lit4.appendChild(document.createTextNode(br4));_lit5.appendChild(document.createTextNode(br5));var _lit1d = document.getElementById('_lit1');var _lit2d = document.getElementById('_lit2');var _lit3d = document.getElementById('_lit3');var _lit4d = document.getElementById('_lit4');var _lit5d = document.getElementById('_lit5');var _lit1ds = _lit1d.style;var _lit2ds = _lit2d.style;var _lit3ds = _lit3d.style;var _lit4ds = _lit4d.style;var _lit5ds = _lit5d.style;_lit1ds.color = _lit2ds.color = _lit3ds.color = _lit4ds.color = _lit5ds.color = "#808080";_lit1ds.fontSize = _lit2ds.fontSize = _lit3ds.fontSize = _lit4ds.fontSize = _lit5ds.fontSize = "0.8em";_lit1ds.height = _lit2ds.height = _lit3ds.height = _lit4ds.height = _lit5ds.height = "18px";_lit1ds.lineHeight = _lit2ds.lineHeight = _lit3ds.lineHeight = _lit4ds.lineHeight = _lit5ds.lineHeight = "17px";_lit1ds.margin = _lit2ds.margin = _lit3ds.margin = _lit4ds.margin = _lit5ds.margin = "1px auto";_lit1ds.width = _lit2ds.width = _lit3ds.width = _lit4ds.width = _lit5ds.width = "118px";_lit1ds.textAlign = _lit2ds.textAlign = _lit3ds.textAlign = _lit4ds.textAlign = _lit5ds.textAlign = "center";}


window.onload = function() {
  e("/images/ie/");
}