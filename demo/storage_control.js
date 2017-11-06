/*!
WebStroage Control v0.0.1
web storage (local or session) control library
Copyright (c) 2017 Nobuyuki Kondo
License: MIT

https://github.com/artprojectteam/storage-control
*/
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.StorageControl=n()}(this,function(){"use strict";!function(){function t(t){this.value=t}function n(n){function e(r,i){try{var u=n[r](i),c=u.value;c instanceof t?Promise.resolve(c.value).then(function(t){e("next",t)},function(t){e("throw",t)}):o(u.done?"return":"normal",u.value)}catch(t){o("throw",t)}}function o(t,n){switch(t){case"return":r.resolve({value:n,done:!0});break;case"throw":r.reject(n);break;default:r.resolve({value:n,done:!1})}(r=r.next)?e(r.key,r.arg):i=null}var r,i;this._invoke=function(t,n){return new Promise(function(o,u){var c={key:t,arg:n,resolve:o,reject:u,next:null};i?i=i.next=c:(r=i=c,e(t,n))})},"function"!=typeof n.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(n.prototype[Symbol.asyncIterator]=function(){return this}),n.prototype.next=function(t){return this._invoke("next",t)},n.prototype.throw=function(t){return this._invoke("throw",t)},n.prototype.return=function(t){return this._invoke("return",t)}}();return function t(){!function(n,e){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this)}});
