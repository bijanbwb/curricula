webpackJsonp([0,2],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n(1);var a=n(5),u=r(a),o=n(157),i=r(o),c=n(158),l=r(c),s=n(288),f=r(s),d=n(363),p=r(d),h=n(364),v=r(h);(0,v["default"])(f["default"],p["default"],"app"),i["default"].render(u["default"].createElement(l["default"],null),document.getElementById("app"))},1:function(e,t){},158:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i,c,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var s=n(159),f=(r(s),n(183)),d=r(f),p=n(5),h=r(p),v=n(194),y=r(v),b=n(287),g=r(b),m=n(305),O=r(m),_=n(199),E=n(308),P=r(E),j=(i=(0,_.DragDropContext)(P["default"]),i(c=function(e){function t(){return a(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){return h["default"].createElement("div",null,h["default"].createElement("button",{className:"add-path",onClick:this.addPath},"+"),h["default"].createElement(d["default"],{stores:[O["default"]],inject:{paths:function(){return O["default"].getState().paths||[]}}},h["default"].createElement(y["default"],null)))}},{key:"addPath",value:function(){g["default"].create({name:"New Path"})}}]),t}(h["default"].Component))||c);t["default"]=j},194:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),u=r(a),o=n(195),i=r(o);t["default"]=function(e){var t=e.paths;return u["default"].createElement("div",{className:"paths"},t.map(function(e){return u["default"].createElement(i["default"],{className:"path",key:e.id,path:e})}))}},195:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c,l,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var f=n(183),d=r(f),p=n(5),h=r(p),v=n(196),y=r(v),b=n(303),g=r(b),m=n(304),O=r(m),_=n(287),E=r(_),P=n(197),j=r(P),w=n(199),k=n(286),S=r(k),M={hover:function(e,t){var n=t.getItem(),r=n.id;e.path.resources.length||E["default"].attachToPath({pathId:e.path.id,resourceId:r})}},R=(c=(0,w.DropTarget)(S["default"].RESOURCE,M,function(e){return{connectDropTarget:e.dropTarget()}}),c(l=function(e){function t(e){u(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e)),r=e.path.id;return n.addResource=n.addResource.bind(n,r),n.deleteResource=n.deleteResource.bind(n,r),n.editName=n.editName.bind(n,r),n.deletePath=n.deletePath.bind(n,r),n.activatePathEdit=n.activatePathEdit.bind(n,r),n}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.connectDropTarget,n=e.path,r=a(e,["connectDropTarget","path"]);return t(h["default"].createElement("div",r,h["default"].createElement("div",{className:"path-header",onClick:this.activatePathEdit},h["default"].createElement("div",{className:"path-add-resource"},h["default"].createElement("button",{onClick:this.addResource},"+")),h["default"].createElement(j["default"],{className:"path-name",editing:n.editing,value:n.name,onEdit:this.editName}),h["default"].createElement("div",{className:"path-delete"},h["default"].createElement("button",{onClick:this.deletePath},"x"))),h["default"].createElement(d["default"],{stores:[O["default"]],inject:{resources:function(){return O["default"].getResourcesByIds(n.resources)}}},h["default"].createElement(y["default"],{onValueClick:this.activateResourceEdit,onEdit:this.editResource,onDelete:this.deleteResource}))))}},{key:"addResource",value:function(e,t){t.stopPropagation();var n=g["default"].create({task:"New Task"});E["default"].attachToPath({resourceId:n.id,pathId:e})}},{key:"editResource",value:function(e,t){g["default"].update({id:e,task:t,editing:!1})}},{key:"deleteResource",value:function(e,t){g["default"]["delete"](t)}},{key:"editName",value:function(e,t){E["default"].update({id:e,name:t,editing:!1})}},{key:"deletePath",value:function(e){E["default"]["delete"](e)}},{key:"activatePathEdit",value:function(e){E["default"].update({id:e,editing:!0})}},{key:"activateResourceEdit",value:function(e){g["default"].update({id:e,editing:!0})}}]),t}(h["default"].Component))||l);t["default"]=R},196:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),u=r(a),o=n(197),i=r(o),c=n(198),l=r(c),s=n(287),f=r(s);t["default"]=function(e){var t=e.resources,n=e.onValueClick,r=e.onEdit,a=e.onDelete;return u["default"].createElement("ul",{className:"resources"},t.map(function(e){return u["default"].createElement(l["default"],{className:"resource",id:e.id,key:e.id,onMove:f["default"].move},u["default"].createElement(i["default"],{editing:e.editing,value:e.task,onValueClick:n.bind(null,e.id),onEdit:r.bind(null,e.id),onDelete:a.bind(null,e.id)}))}))}},197:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=n(5),s=r(l),f=function(e){function t(){var e,n,r,a;u(this,t);for(var i=arguments.length,c=Array(i),l=0;i>l;l++)c[l]=arguments[l];return n=r=o(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.renderEdit=function(){return s["default"].createElement("input",{type:"text",ref:function(e){return e?e.selectionStart=r.props.value.length:null},autoFocus:!0,defaultValue:r.props.value,onBlur:r.finishEdit,onKeyPress:r.checkEnter})},r.renderValue=function(){var e=r.props.onDelete;return s["default"].createElement("div",{onClick:r.props.onValueClick},s["default"].createElement("span",{className:"value"},r.props.value),e?r.renderDelete():null)},r.renderDelete=function(){return s["default"].createElement("button",{className:"delete",onClick:r.props.onDelete},"x")},r.checkEnter=function(e){"Enter"===e.key&&r.finishEdit(e)},r.finishEdit=function(e){var t=e.target.value;r.props.onEdit&&t.trim()&&r.props.onEdit(t)},a=n,o(r,a)}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=(e.value,e.onEdit,e.onValueClick,e.editing),n=a(e,["value","onEdit","onValueClick","editing"]);return s["default"].createElement("div",n,t?this.renderEdit():this.renderValue())}}]),t}(s["default"].Component);t["default"]=f},198:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c,l,s,f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var p=n(5),h=r(p),v=n(199),y=n(286),b=r(y),g={beginDrag:function(e){return{id:e.id}},isDragging:function(e,t){return e.id===t.getItem().id}},m={hover:function(e,t){var n=e.id,r=t.getItem(),a=r.id;a!==n&&e.onMove({sourceId:a,targetId:n})}},O=(c=(0,v.DragSource)(b["default"].RESOURCE,g,function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}),l=(0,v.DropTarget)(b["default"].RESOURCE,m,function(e){return{connectDropTarget:e.dropTarget()}}),c(s=l(s=function(e){function t(){return u(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),d(t,[{key:"render",value:function(){var e=this.props,t=e.connectDragSource,n=e.connectDropTarget,r=e.isDragging,u=(e.onMove,e.id,a(e,["connectDragSource","connectDropTarget","isDragging","onMove","id"]));return t(n(h["default"].createElement("li",f({style:{opacity:r?0:1}},u),u.children)))}}]),t}(h["default"].Component))||s)||s);t["default"]=O},286:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={RESOURCE:"resource"}},287:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(288),u=r(a);t["default"]=u["default"].generateActions("create","update","delete","attachToPath","move")},288:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(289),u=r(a),o=n(302),i=r(o),c=new u["default"];(0,i["default"])(c),t["default"]=c},302:function(e,t){"use strict";function n(e){return"undefined"!=typeof window&&(window["alt.js.org"]=e),e}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},303:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(288),u=r(a);t["default"]=u["default"].generateActions("create","update","delete")},304:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(159),c=r(i),l=n(288),s=r(l),f=n(303),d=r(f),p=function(){function e(){a(this,e),this.bindActions(d["default"]),this.resources=[],this.exportPublicMethods({getResourcesByIds:this.getResourcesByIds.bind(this)})}return o(e,[{key:"create",value:function(e){var t=this.resources;return e.id=c["default"].v4(),this.setState({resources:t.concat(e)}),e}},{key:"update",value:function(e){var t=this.resources.map(function(t){return t.id===e.id?u({},t,e):t});this.setState({resources:t})}},{key:"delete",value:function(e){this.setState({resources:this.resources.filter(function(t){return t.id!==e})})}},{key:"getResourcesByIds",value:function(e){var t=this;return(e||[]).map(function(e){return t.resources.filter(function(t){return t.id===e})}).filter(function(e){return e.length}).map(function(e){return e[0]})}}]),e}();t["default"]=s["default"].createStore(p,"ResourceStore")},305:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(159),c=r(i),l=n(288),s=r(l),f=n(287),d=r(f),p=n(306),h=r(p),v=function(){function e(){a(this,e),this.bindActions(d["default"]),this.paths=[]}return o(e,[{key:"create",value:function(e){var t=this.paths;e.id=c["default"].v4(),e.resources=e.resources||[],this.setState({paths:t.concat(e)})}},{key:"update",value:function(e){var t=this.paths.map(function(t){return t.id===e.id?u({},t,e):t});this.setState({paths:t})}},{key:"delete",value:function(e){this.setState({paths:this.paths.filter(function(t){return t.id!==e})})}},{key:"attachToPath",value:function(e){var t=e.pathId,n=e.resourceId,r=this.paths.map(function(e){return e.resources.indexOf(n)>=0&&(e.resources=e.resources.filter(function(e){return e!==n})),e.id===t&&(-1===e.resources.indexOf(n)?e.resources.push(n):console.warn("Already attached resource to path",r)),e});this.setState({paths:r})}},{key:"move",value:function(e){var t=e.sourceId,n=e.targetId,r=this.paths,a=r.filter(function(e){return e.resources.indexOf(t)>=0})[0],u=r.filter(function(e){return e.resources.indexOf(n)>=0})[0],o=a.resources.indexOf(t),i=u.resources.indexOf(n);a===u?a.resources=(0,h["default"])(a.resources,{$splice:[[o,1],[i,0,t]]}):(a.resources.splice(o,1),u.resources.splice(i,0,t)),this.setState({paths:r})}}]),e}();t["default"]=s["default"].createStore(v,"PathStore")},363:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={get:function(e){try{return JSON.parse(localStorage.getItem(e))}catch(t){return null}},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}}},364:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t,n){var r=(0,u["default"])(e);try{e.bootstrap(t.get(n))}catch(a){console.error("Failed to bootstrap data",a)}r.listen(function(){t.get("debug")||t.set(n,e.takeSnapshot())})};var a=n(365),u=r(a)},365:function(e,t){"use strict";function n(){var e=this;this.dispatcher.register(function(t){var n=Object.keys(e.alt.stores).reduce(function(t,n){return t.push(e.alt.stores[n].dispatchToken),t},[]);e.waitFor(n),e.setState({payload:t}),e.emitChange()})}function r(e){return e.FinalStore?e.FinalStore:e.FinalStore=e.createUnsavedStore(n)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r,e.exports=t["default"]}});