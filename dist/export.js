!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ExpoetTable=t():e.ExpoetTable=t()}(globalThis,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{exportTable:()=>o});var o=function(e,t,o,r){var n=t.toString()+"\n";e.forEach((function(e,t){n+=t+1+"\t,",o.forEach((function(t){var o=e[t].toString();o=o.replace(/"/g,'""'),n+='"'.concat(o,'"\t,')})),n+="\n"}));var a="data:text/xls;charset=uft-8,\ufeff"+encodeURIComponent(n),c=document.createElement("a");c.setAttribute("href",a),c.download=r+".xls",document.body.appendChild(c),c.click(),document.body.removeChild(c)};return t})()));