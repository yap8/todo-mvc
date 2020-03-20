!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.storage=[]}var t,n,o;return t=e,(n=[{key:"storeItemsToLocalstorage",value:function(){localStorage.setItem("items",JSON.stringify(this.storage))}},{key:"storeItemsFromLocalstorage",value:function(){var e=JSON.parse(localStorage.getItem("items"))||[];this.storage=e}},{key:"addItem",value:function(e){this.storage.push(e)}},{key:"getItems",value:function(){return this.storage}},{key:"deleteItem",value:function(e){this.storage=this.storage.filter((function(t){return t.id!==+e.id}))}},{key:"completeItem",value:function(e){this.storage=this.storage.map((function(t){return t.id===+e.id&&(t.completed=!t.completed),t}))}},{key:"editItem",value:function(e,t){this.storage=this.storage.map((function(n){return n.id===+e.id&&(n.itemName=t),n}))}}])&&i(t.prototype,n),o&&i(t,o),e}();function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=l(this,s(t).call(this))).inputForm=document.querySelector("#input-form"),e.formTextfield=document.querySelector("#form-textfield"),e.formAddButton=document.querySelector("#form-add-button"),e.list=document.querySelector("#list"),e.inputForm.addEventListener("submit",(function(t){t.preventDefault();var n=e.formTextfield.value.trim();n&&(e.formTextfield.value="",e.emit("addItem",{itemName:n}))})),window.addEventListener("DOMContentLoaded",(function(){return e.emit("handleLoad",{})})),window.addEventListener("beforeunload",(function(){return e.emit("handleUnload",{})})),e}var n,i,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),n=t,(i=[{key:"renderItems",value:function(e){var t=this;this.list.innerHTML="",e.forEach((function(e){var n,i,o,r;t.list.insertAdjacentHTML("beforeend",(i=(n=e).itemName,o=n.id,r=n.completed,'\n    <li class="list__item" id="'.concat(o,'">\n      <button class="list__item-checkbox ').concat(r?"list__item-checkbox--active":"",'"}>&check;</button>\n      <input type="text" class="list__item-textfield" value="').concat(i,'">\n      <button class="list__item-delete-button">Delete</button>\n    </li>\n  ')))})),this.bindEvents()}},{key:"bindEvents",value:function(){var e=this,t=this.list.children;Array.from(t).forEach((function(t){var n=t.querySelector(".list__item-textfield");n.removeEventListener("blur",e.itemEdited.bind(e)),n.addEventListener("blur",e.itemEdited.bind(e)),n.removeEventListener("keypress",e.itemEdited.bind(e)),n.addEventListener("keypress",e.itemEdited.bind(e)),t.removeEventListener("click",e.itemClicked.bind(e)),t.addEventListener("click",e.itemClicked.bind(e))}))}},{key:"itemEdited",value:function(e){var t=e.target,n=t.parentElement,i=t.value;"keypress"===e.type&&13===e.keyCode?t.blur():"blur"===e.type&&this.emit("editItem",{item:n,itemName:i})}},{key:"itemClicked",value:function(e){e.stopPropagation();var t=e.target,n=t.parentElement;t.classList.contains("list__item-checkbox")?this.emit("completeItem",{item:n}):t.classList.contains("list__item-delete-button")&&this.emit("deleteItem",{item:n})}}])&&u(n.prototype,i),o&&u(n,o),t}(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.events={}}var t,n,i;return t=e,(n=[{key:"on",value:function(e,t){this.events[e]=this.events[e]||[],this.events[e].push(t)}},{key:"emit",value:function(e,t){this.events[e]&&this.events[e].forEach((function(e){return e(t)}))}}])&&r(t.prototype,n),i&&r(t,i),e}());function m(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}new(function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.model=t,this.view=n,n.on("addItem",this.addItem.bind(this)),n.on("deleteItem",this.deleteItem.bind(this)),n.on("completeItem",this.completeItem.bind(this)),n.on("editItem",this.editItem.bind(this)),n.on("handleLoad",this.handleLoad.bind(this)),n.on("handleUnload",this.handleUnload.bind(this))}var t,n,i;return t=e,(n=[{key:"addItem",value:function(e){var t={itemName:e.itemName,id:Math.random(),completed:!1};this.model.addItem(t),this.renderItems()}},{key:"handleLoad",value:function(){this.model.storeItemsFromLocalstorage(),this.renderItems()}},{key:"handleUnload",value:function(){this.model.storeItemsToLocalstorage()}},{key:"deleteItem",value:function(e){var t=e.item;this.model.deleteItem(t),this.renderItems()}},{key:"completeItem",value:function(e){var t=e.item;this.model.completeItem(t),this.renderItems()}},{key:"editItem",value:function(e){var t=e.item,n=e.itemName;this.model.editItem(t,n)}},{key:"renderItems",value:function(){var e=this.model.getItems();this.view.renderItems(e)}}])&&m(t.prototype,n),i&&m(t,i),e}())(new o,new d)}]);