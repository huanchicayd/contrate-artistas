"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ssm=e()}(void 0,function(){function t(t,e,n){return t.filter(function(t){return t[e]&&t[e]===n})}function e(){return Math.random().toString(36).substr(2,9)}function n(t){t.forEach(function(t){return t()})}function i(t){var e=this,n=void 0;return function(){for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s];n&&window.cancelAnimationFrame(n),n=window.requestAnimationFrame(function(){n=null,t.apply(e,o)})}}var o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=[],a=function(){},u=function(){function t(n){o(this,t),this.id=n.id||e(),this.query=n.query||"all";if(this.options=Object.assign({},{onEnter:[],onLeave:[],onResize:[],onFirstRun:[]},n),"function"==typeof this.options.onEnter&&(this.options.onEnter=[this.options.onEnter]),"function"==typeof this.options.onLeave&&(this.options.onLeave=[this.options.onLeave]),"function"==typeof this.options.onResize&&(this.options.onResize=[this.options.onResize]),"function"==typeof this.options.onFirstRun&&(this.options.onFirstRun=[this.options.onFirstRun]),!1===this.testConfigOptions("once"))return this.valid=!1,!1;this.valid=!0,this.active=!1,this.init()}return s(t,[{key:"init",value:function(){var t=this;this.test=window.matchMedia(this.query),this.test.matches&&this.testConfigOptions("match")&&this.enterState(),this.listener=function(e){var n=!1;e.matches?t.testConfigOptions("match")&&(t.enterState(),n=!0):(t.leaveState(),n=!0),n&&a()},this.test.addListener(this.listener)}},{key:"enterState",value:function(){n(this.options.onFirstRun),n(this.options.onEnter),this.options.onFirstRun=[],this.active=!0}},{key:"leaveState",value:function(){n(this.options.onLeave),this.active=!1}},{key:"resizeState",value:function(){this.testConfigOptions("resize")&&n(this.options.onResize)}},{key:"destroy",value:function(){this.test.removeListener(this.listener)}},{key:"attachCallback",value:function(t,e,n){switch(t){case"enter":this.options.onEnter.push(e);break;case"leave":this.options.onLeave.push(e);break;case"resize":this.options.onResize.push(e)}"enter"===t&&n&&this.active&&e()}},{key:"testConfigOptions",value:function(t){var e=this,n=!0;return r.forEach(function(i){void 0!==e.options[i.name]&&i.when===t&&!1===i.test.bind(e)()&&(n=!1)}),n}}],[{key:"addConfigOption",value:function(t){r.push(t)}},{key:"getConfigOptions",value:function(){return r}},{key:"removeConfigOption",value:function(t){r.forEach(function(e,n){e.name===t&&r.splice(n,1)})}},{key:"setStateChangeMethod",value:function(t){if("function"!=typeof t)throw new Error("Not a function");a=t}}]),t}();return new(function(){function e(){o(this,e),this.states=[],this.resizeTimer=null,this.configOptions=[],window.addEventListener("resize",i(this.resizeBrowser.bind(this),25),!0)}return s(e,[{key:"addState",value:function(t){var e=new u(t);return e.valid&&this.states.push(e),e}},{key:"addStates",value:function(t){var e=this;t.forEach(function(t){return e.addState(t)})}},{key:"getState",value:function(t){return this.states.filter(function(e){return e.id===t})[0]||!1}},{key:"isActive",value:function(t){return(this.getState(t)||{}).active||!1}},{key:"getStates",value:function(t){var e=this;return void 0===t?this.states:t.map(function(t){return e.getState(t)})}},{key:"removeState",value:function(t){var e=this;this.states.forEach(function(n,i){n.id===t&&(n.destroy(),e.states.splice(i,1))})}},{key:"removeStates",value:function(t){var e=this;t.forEach(function(t){return e.removeState(t)})}},{key:"removeAllStates",value:function(){this.states.forEach(function(t){return t.destroy()}),this.states=[]}},{key:"addConfigOption",value:function(t){var e=t.name,n=void 0===e?"":e,i=t.test,o=void 0===i?null:i,s=t.when,r=void 0===s?"resize":s;""!==n&&null!==o&&u.addConfigOption({name:n,test:o,when:r})}},{key:"removeConfigOption",value:function(t){u.removeConfigOption(t)}},{key:"getConfigOptions",value:function(t){var e=u.getConfigOptions();return"string"==typeof t?e.filter(function(e){return e.name===t}):e}},{key:"resizeBrowser",value:function(){t(this.states,"active",!0).forEach(function(t){t.resizeState()})}},{key:"stateChange",value:function(t){u.setStateChangeMethod(t)}}]),e}())});