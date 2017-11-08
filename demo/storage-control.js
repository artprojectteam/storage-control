/*!
WebStorage Control v1.0.0
web storage (local or session) control library
Copyright (c) 2017 Nobuyuki Kondo
License: MIT

https://github.com/artprojectteam/storage-control
*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.StorageControl=e()}(this,function(){"use strict";!function(){function t(t){this.value=t}function e(e){function n(r,i){try{var u=e[r](i),s=u.value;s instanceof t?Promise.resolve(s.value).then(function(t){n("next",t)},function(t){n("throw",t)}):o(u.done?"return":"normal",u.value)}catch(t){o("throw",t)}}function o(t,e){switch(t){case"return":r.resolve({value:e,done:!0});break;case"throw":r.reject(e);break;default:r.resolve({value:e,done:!1})}(r=r.next)?n(r.key,r.arg):i=null}var r,i;this._invoke=function(t,e){return new Promise(function(o,u){var s={key:t,arg:e,resolve:o,reject:u,next:null};i?i=i.next=s:(r=i=s,n(t,e))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}();var t=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};return function(){function e(n){switch(t(this,e),n){case"session":return this._storage=sessionStorage,this;default:return this._storage=localStorage,this}}return e.prototype.save=function(t,e){return this._storage.setItem(t,JSON.stringify(e,null,0)),this},e.prototype.get=function(t){var e=this._storage.getItem(t);return void 0===e?null:JSON.parse(e)},e.prototype.remove=function(t){return this._storage.removeItem(t),this},e.prototype.clear=function(){this._storage.clear()},e}()});
