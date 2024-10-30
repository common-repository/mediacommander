!function(u){"use strict";const s={TITLE:"title",SELECT:"select",COLLAPSE:"collapse",LABEL:"label",COLOR:"color"},t={data:null,icon:{normal:'<svg viewBox="0 0 24 24">\n <path d="m1.786 21h20.428c0.434 0 0.786-0.352 0.786-0.786v-14.428c0-0.434-0.352-0.786-0.786-0.786h-11.214l-0.824-1.639c-0.097-0.194-0.352-0.352-0.569-0.352l-7.821-8e-3c-0.434-1e-3 -0.786 0.351-0.786 0.785v16.428c0 0.434 0.352 0.786 0.786 0.786z" fill="currentColor" filter="invert(0.05) brightness(0.8)"/>\n <path d="M 1.786,21 H 22.214 C 22.648,21 23,20.648 23,20.214 V 7 H 1 V 20.214 C 1,20.648 1.352,21 1.786,21 Z" fill="currentColor" style="filter:invert(0.1)"/>\n</svg>'},callback:{loading:null,move:null,collapse:null}},n={id:null,color:null,title:null,state:{selected:!1,collapsed:!1},items:[]},d={extend:function(t){t=t||{};for(let e=1;e<arguments.length;e++){var n=arguments[e];if(n)for(var i in n)n.hasOwnProperty(i)&&("object"==typeof n[i]&&null!=n[i]?n[i]instanceof Array?t[i]=n[i].slice(0):t[i]=d.extend(t[i],n[i]):t[i]=n[i])}return t},extendTreeCfg:function(e){return delete(e=d.extend({},t,e)).data,e},extendTreeItemCfg:function(e){return null==(e=d.extend({},n,e)).id&&(e.id=d.uuid()),e.state.selected=!1,e.items=[],e},isArray:function(e){return Array.isArray(e)},isString:function(e){return"string"==typeof e},uuid:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))}},i=function(){const g=new WeakMap;function e(e,t){g.set(this,{$container:null,dragdrop:{enabled:!0,item:null,active:{flag:!1,x:0,y:0,offset:10},$ghost:null,$target:null,type:null},select:{list:[]},config:null,data:[],ready:!1}),this._init(e,t)}return e.prototype={get VERSION(){return"1.0.0"},_init:function(e,t){var n=g.get(this);n.$container=u(e),n.$container.length?(n.config=d.extendTreeCfg(t),n.ready=!1,this._create(t?t.data:null)):console.error("Tree: can't find the tree container")},_create:function(e){this._buildDOM(),this._bind(),this._ready(e)},_buildDOM:function(){var e=g.get(this),t=(e.$container.addClass("mcmd-tree").attr({tabindex:0}),e.dragdrop.$ghost=u("<div>").addClass("mcmd-tree-drag-ghost"),u("<div>").addClass("mcmd-tree-nodes"));e.$container.append(t)},_bind:function(){var e=g.get(this);e._onToggleClick=this._onToggleClick.bind(this),e._onItemClick=this._onItemClick.bind(this),e._onKeyDown=this._onKeyDown.bind(this),e._onItemMouseDown=this._onItemMouseDown.bind(this),e._onItemMouseEnter=this._onItemMouseEnter.bind(this),e._onItemMouseLeave=this._onItemMouseLeave.bind(this),e._onItemMouseMove=this._onItemMouseMove.bind(this),e._onItemMouseUp=this._onItemMouseUp.bind(this),e.$container.on("keydown",e._onKeyDown),e.$container.on("click",".mcmd-tree-toggle",e._onToggleClick),e.$container.on("click",".mcmd-tree-item",e._onItemClick),e.$container.on("mousedown",".mcmd-tree-item",e._onItemMouseDown)},_loading:function(e){var t=g.get(this);t.config.callback.loading&&"function"==typeof t.config.callback.loading&&t.config.callback.loading.call(this,e)},_ready:function(e){for(var t in g.get(this).$container.addClass("mcmd-tree-ready"),this._loading(!0),e)this._addItem(e[t]);this._loading(!1)},_getData:function(){return g.get(this).data},_getFlatData:function(){var e=g.get(this);const r=[];return function e(t,n,i){for(var a in t)a=t[a],r.push({id:a.id,color:a.color,title:a.title,parent:n,level:i,collapsed:a.state.collapsed}),e(a.items,a.id,i+1)}(e.data,null,0),r.length?r:null},_filter:function(a){var e=g.get(this);a?(e.$container.find(".mcmd-tree-node.mcmd-hidden").removeClass("mcmd-hidden"),e.$container.find(".mcmd-tree-title").each((e,t)=>{var n=(t=u(t)).text(),i=t.parent().parent();!function(t){if(a){let e=a.replace(/[.+^${}()|[\]\\]/g,"\\$&");return e=e.includes("*")||e.includes("?")?e:"*"+e+"*",new RegExp(`^${e.replace(/\*/g,".*").replace(/\?/g,".")}$`,"i").test(t)}}(n)?(t.removeClass("mcmd-bold"),i.addClass("mcmd-hidden")):(t.addClass("mcmd-bold"),i.parents(".mcmd-tree-node").removeClass("mcmd-hidden"))})):(e.$container.find(".mcmd-tree-node.mcmd-hidden").removeClass("mcmd-hidden"),e.$container.find(".mcmd-tree-title.mcmd-bold").removeClass("mcmd-bold"))},_addItemElement:function(e,t){var n,i,a,r,l,d=g.get(this);let o=null;t?(t=d.$container.find(`[data-id='${t.id}']`)).length&&!(o=u(t.parent().find(".mcmd-tree-nodes").get(0))).length&&(o=u("<div>").addClass("mcmd-tree-nodes"),t.addClass("mcmd-tree-has-children"),t.parent().append(o)):(o=u(d.$container.find(".mcmd-tree-nodes").get(0)),d.$container.addClass("mcmd-tree-has-children")),o&&(t=u("<div>").addClass("mcmd-tree-node"),n=u("<div>").addClass("mcmd-tree-item").attr({"data-id":e.id}),i=u("<div>").addClass("mcmd-tree-toggle"),a=u("<div>").addClass("mcmd-tree-icon").append(d.config.icon.normal),r=u("<div>").addClass("mcmd-tree-title"),l=u("<div>").addClass("mcmd-tree-label"),o.append(t.append(n.append(i,a,r,l))),this._updateItemElement(e,[s.TITLE,s.SELECT,s.COLLAPSE,s.LABEL,s.COLOR]),e.state.selected)&&d.select.list.push(e)},_removeItemElement:function(e,t){var n=g.get(this);n.$container.find(`[data-id='${e.id}']`).parent().remove(),e.state.selected&&n.select.list.splice(n.select.list.indexOf(e),1),t&&0===t.items.length&&(e=n.$container.find(`[data-id='${t.id}']`),n=u(e.parent().find(".mcmd-tree-nodes").get(0)),e.removeClass("mcmd-tree-has-children"),n.remove())},_updateItemElement:function(e,t){var n=g.get(this),i=e?n.$container.find(`[data-id='${e.id}']`):null;if(i.length)for(var a in t=d.isString(t)?[t]:t)switch(t[a]){case s.TITLE:i.find(".mcmd-tree-title").text(e.title);break;case s.SELECT:i.toggleClass("mcmd-tree-selected",e.state.selected);break;case s.COLLAPSE:i.toggleClass("mcmd-tree-collapsed",e.state.collapsed);break;case s.LABEL:i.find(".mcmd-tree-label").toggleClass("mcmd-tree-active",!!e.count).text(e.count);break;case s.COLOR:i.find(".mcmd-tree-icon").css({color:e.color||""})}},_addItem:function(e,t){const r=g.get(this),l=this;return function e(t,n){if(t&&t.id&&l._getItem(t.id))return null;var i=d.extendTreeItemCfg(t);if(((n=l._getItem(n))?n.items:r.data).push(i),l._addItemElement(i,n),t)for(const a in t.items)e(t.items[a],i.id);return i}(e,t)},_getItem:function(e){return function t(n,i){let a=null;if(n)for(let e=0;e<n.length&&(a=n[e]).id!==i&&!(a=t(a.items,i));e++);return a}(g.get(this).data,e)},_getParentItem:function(e){return function t(n,i,a){let r=null;if(n)for(let e=0;e<n.length;e++){if((r=n[e]).id===i){r=a;break}if(r=t(r.items,i,r))break}return r}(g.get(this).data,e,null)},_getPrevItem:function(e,l){var t=g.get(this);const d=[];return function t(n,i){let a=null;if(n)for(let e=0;e<n.length;e++){if((a=n[e]).id===i){var r;if(0<e)for(a=n[e-1];(!a.state.collapsed||l)&&a.items.length;)a=a.items[a.items.length-1];else a=null,d.length&&(r=d[d.length-1],a=r.items[r.index]);break}if(d.push({index:e,items:n}),a=t(a.items,i,a),d.pop(),a)break}return a}(t.data,e)},_getNextItem:function(e,l){var t=g.get(this);const d=[];return function t(n,i){let a=null;if(n)for(let e=0;e<n.length;e++){if((a=n[e]).id===i){if(a.state.collapsed&&!l||!a.items.length)if(e<n.length-1)a=n[e+1];else for(a=null,e=d.length;e--;){var r=d[e];if(r.index<r.items.length-1){a=r.items[r.index+1];break}}else a=a.items.length?a.items[0]:null;break}if(d.push({index:e,items:n}),a=t(a.items,i,a),d.pop(),a)break}return a}(t.data,e)},_getSelectedItems:function(){return g.get(this).select.list},_moveItem:function(t,n,e){var i=g.get(this),a=this._getItem(t),r=this._getItem(n);if(null!=a&&null!=r){this._loading(!0);var l=i.$container.find(`[data-id='${a.id}']`).parent(),d=i.$container.find(`[data-id='${r.id}']`),o=d.parent(),s=a?this._getParentItem(a.id):null,r=r?this._getParentItem(r.id):null,c=s?s.items:i.data,m=r?r.items:i.data;for(let e=0;e<c.length;e++)if(c[e].id===t){c.splice(e,1);break}switch(l.detach(),0===c.length&&s&&(r=i.$container.find(`[data-id='${s.id}']`),i=u(r.parent().find(".mcmd-tree-nodes").get(0)),r.removeClass("mcmd-tree-has-children"),i.remove()),e){case"inside":for(let t=0;t<m.length;t++)if(m[t].id===n){m[t].items.push(a);let e=u(d.parent().find(".mcmd-tree-nodes").get(0));e.length||(e=u("<div>").addClass("mcmd-tree-nodes"),d.addClass("mcmd-tree-has-children"),d.parent().append(e)),e.append(l);break}break;case"before":for(let e=0;e<m.length;e++)if(m[e].id===n){m.splice(e,0,a);break}o.before(l);break;case"after":for(let e=0;e<m.length;e++)if(m[e].id===n){m.splice(e+1,0,a);break}o.after(l)}this._loading(!1)}},_removeItem:function(e){var t=g.get(this);const l=this;return function n(e,i){let a=null;if(i)for(let t=0;t<i.length;t++){if(a=i[t],i[t].id===e){let e=a.items.length;for(;e--;)n(a.items[e].id,a.items);var r=l._getParentItem(a.id);i.splice(t,1),l._removeItemElement(a,r);break}if(a=n(e,i[t].items))break}return a}(e,t.data)},_collapseItem:function(t,n){var i=g.get(this);if(t=this._getItem(t)){let e=!1;void 0===n?(e=!0,t.state.collapsed=!t.state.collapsed):t.state.collapsed!==n&&(e=!0,t.state.collapsed=n),e&&(this._updateItemElement(t,s.COLLAPSE),i.config.callback.collapse)&&"function"==typeof i.config.callback.collapse&&i.config.callback.collapse.call(this,t)}},_selectItem:function(t,n){var i=g.get(this);if(t=this._getItem(t)){let e=!1;void 0===n?(e=!0,t.state.selected=!t.state.selected):t.state.selected!==n&&(e=!0,t.state.selected=n),e&&(this._updateItemElement(t,s.SELECT),t.state.selected&&-1===i.select.list.indexOf(t)?i.select.list.push(t):i.select.list.splice(i.select.list.indexOf(t),1))}},_selectItemRange:function(e,t){var n=g.get(this),i=[];if(e&&t&&e!==t){!function t(n,i,a,r){if(a)for(let e=0;e<a.length;e++){var l=a[e];if(l.id===n){if(r.push(l),1<r.length)return 1}else if(l.id===i){if(r.push(l),1<r.length)return 1}else r.length&&r.push(l);if(l.items.length&&!l.state.collapsed&&t(n,i,l.items,r))return 1}}(e,t,n.data,i);for(let e=0;e<i.length;e++)i[e].state.selected||this._selectItem(i[e].id,!0,!0)}else t&&this._selectItem(t,!0)},_clearSelection:function(){var t=g.get(this);for(let e=0;e<t.select.list.length;e++){var n=t.select.list[e];n.state.selected=!1,this._updateItemElement(n,s.SELECT)}t.select.list=[]},_getDragDropType:function(e,t){return e=e.getBoundingClientRect(),(t=t-window.scrollY-e.top)<e.height/4?"before":t>3*e.height/4?"after":"inside"},_onKeyDown:function(e){var t=g.get(this),n=t.select.list[t.select.list.length-1];if(document.activeElement===t.$container.get(0)&&n){switch(e.keyCode){case 38:var i=this._getPrevItem(n.id,!1);i&&(this._clearSelection(),this._selectItem(i.id,!0));break;case 40:(i=this._getNextItem(n.id,!1))&&(this._clearSelection(),this._selectItem(i.id,!0));break;case 37:this._collapseItem(n.id,!0);break;case 39:this._collapseItem(n.id,!1)}e.preventDefault()}},_onToggleClick:function(e){e.preventDefault(),e.stopImmediatePropagation(),e=(e=u(e.currentTarget).parent())?e.attr("data-id"):null,this._collapseItem(e)},_onItemClick:function(e){var t=(t=u(e.currentTarget))?t.attr("data-id"):null;e.shiftKey||e.ctrlKey?e.ctrlKey?this._selectItem(t):e.shiftKey&&(e=(e=g.get(this)).select.list.length?e.select.list[e.select.list.length-1].id:null,this._selectItemRange(e,t)):this._clearSelection()},_onItemMouseDown:function(e){var t,n,i,a;1!==e.which||e.shiftKey||e.ctrlKey||u(e.target).hasClass("mcmd-tree-toggle")||(e.stopImmediatePropagation(),t=g.get(this),i=u(e.currentTarget).attr("data-id"),i=this._getItem(i),t.dragdrop.item=i,n=u("<div>").addClass("mcmd-tree-icon"),i=u("<div>").addClass("mcmd-tree-title").text(i.title),a=u("<div>").addClass("mcmd-tree-label").text(t.select.list.length),t.dragdrop.active.flag=!1,t.dragdrop.active.x=e.pageX,t.dragdrop.active.y=e.pageY,t.dragdrop.$ghost.empty().append(n,i,a).appendTo("body"),t.$container.addClass("mcmd-tree-dragging"),t.$container.on("mouseenter",".mcmd-tree-item",t._onItemMouseEnter),t.$container.on("mouseleave",".mcmd-tree-item",t._onItemMouseLeave),u(window).on("mousemove",t._onItemMouseMove),u(window).on("mouseup",t._onItemMouseUp))},_onItemMouseEnter:function(e){var t=g.get(this);t.dragdrop.$target=u(e.currentTarget),t.dragdrop.$target&&t.dragdrop.$target.removeClass("mcmd-tree-before mcmd-tree-inside mcmd-tree-after")},_onItemMouseLeave:function(){var e=g.get(this);e.dragdrop.$target&&e.dragdrop.$target.removeClass("mcmd-tree-before mcmd-tree-inside mcmd-tree-after"),e.dragdrop.$target=null},_onItemMouseMove:function(e){var t,n=g.get(this);n.dragdrop.active.flag?(n.dragdrop.$ghost.addClass("mcmd-tree-active").css({top:e.clientY+5+"px",left:e.clientX+5+"px"}),n.dragdrop.$target&&(t=this._getDragDropType(n.dragdrop.$target.get(0),e.pageY),n.dragdrop.type!==t)&&(n.dragdrop.$target.removeClass("mcmd-tree-before mcmd-tree-inside mcmd-tree-after").addClass("mcmd-tree-"+t),n.dragdrop.type=t)):(n.dragdrop.active.flag=Math.abs(n.dragdrop.active.x-e.pageX)>n.dragdrop.active.offset||Math.abs(n.dragdrop.active.y-e.pageY)>n.dragdrop.active.offset,n.dragdrop.active.flag&&((t=n.dragdrop.item)&&!t.state.selected&&(this._clearSelection(),this._selectItem(t.id)),n.dragdrop.$ghost.find(".mcmd-tree-label").text(n.select.list.length)))},_onItemMouseUp:function(){var e=g.get(this);if(e.dragdrop.$ghost.empty().css({top:null,left:null}).removeClass("mcmd-tree-active").detach(),e.$container.removeClass("mcmd-tree-dragging"),e.dragdrop.active.flag&&e.dragdrop.$target){var t=[],n=e.dragdrop.$target?e.dragdrop.$target.attr("data-id"):null,i=e.dragdrop.type;if(e.dragdrop.$ghost.detach().empty(),e.dragdrop.$target&&e.dragdrop.$target.removeClass("mcmd-tree-before mcmd-tree-inside mcmd-tree-after"),e.dragdrop.$target=null,e.dragdrop.type=null,e.dragdrop.item=null,e.$container.removeClass("mcmd-tree-dragging"),function t(n,i,a){if(n)for(let e=0;e<n.length;e++){var r=n[e];if(r.state.selected){let n=!0;for(let t=0;t<i.length;t++)for(let e=0;e<a.length;e++)if(a[e].id===i[t].id){n=!1;break}n&&a.push(r)}r.items.length&&(i.push(r),t(r.items,i,a),i.pop())}}(e.data,[],t),function t(n,i){for(let e=0;e<n.length;e++){if(n[e].id===i)return;if(n[e].items.length&&!t(n[e].items,i))return}return 1}(t,n)){var a,r,l=[];for(let e=0;e<t.length;e++)l.push(t[e].id);function d(t,n,i){if("after"===i){let e=t.length;for(;e--;)this._moveItem(t[e],n,i)}else for(let e=0;e<t.length;e++)this._moveItem(t[e],n,i)}e.config.callback.move&&"function"==typeof e.config.callback.move?(a=(r="inside"===i?this._getItem(n):this._getParentItem(n))?r.id:null,r=(r?r.items:e.data).map(e=>e.id),e.config.callback.move.call(this,l,a,n,r,i,d)):d.call(this,l,n,i)}}e.$container.off("mouseenter",".mcmd-tree-item",e._onItemMouseEnter),e.$container.off("mouseleave",".mcmd-tree-item",e._onItemMouseLeave),u(window).off("mousemove",e._onItemMouseMove),u(window).off("mouseup",e._onItemMouseUp)},getIcon:function(){return g.get(this).config.icon.normal},getData:function(){return this._getData()},hasItems:function(){var e=g.get(this);return e.data&&0<e.data.length},getFlatData:function(){return this._getFlatData()},getItem:function(e){return this._getItem(e)},getParentItem:function(e){return this._getParentItem(e)},selectItem:function(e,t){this._selectItem(e,t)},getSelectedItems:function(){return this._getSelectedItems()},clearSelection:function(){this._clearSelection()},filter:function(e){this._filter(e)},addItem:function(e,t){return this._addItem(e,t)},collapseItem:function(e,t){return this._collapseItem(e,t)},removeItem:function(e){this._removeItem(e)},updateItemTitle:function(e,t){(e=this._getItem(e))&&(e.title=t,this._updateItemElement(e,s.TITLE))},updateItemColor:function(e,t){(e=this._getItem(e))&&(e.color=t,this._updateItemElement(e,s.COLOR))},updateItemLabel:function(e,t){(e=this._getItem(e))&&(e.count=parseInt(t,10),this._updateItemElement(e,s.LABEL))},toggleDragDrop:function(e){var t=g.get(this);e?(t.dragdrop.enabled||t.$container.on("mousedown",".mcmd-tree-item",t._onItemMouseDown),t.dragdrop.enabled=!0):(t.dragdrop.enabled&&t.$container.off("mousedown",".mcmd-tree-item",t._onItemMouseDown),t.dragdrop.enabled=!1)}},e}();window.MEDIACOMMANDER=window.MEDIACOMMANDER||{},window.MEDIACOMMANDER.PLUGINS=window.MEDIACOMMANDER.PLUGINS||{},window.MEDIACOMMANDER.PLUGINS.TREE=function(e,t){return new i(e,t)}}(jQuery);