(window.webpackJsonp=window.webpackJsonp||[]).push([[11,10,15],{321:function(t,e,n){},322:function(t,e,n){"use strict";n(321)},323:function(t,e,n){},324:function(t,e,n){"use strict";n.r(e);var o={props:["pack","icon"]},r=(n(322),n(27)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"empty"},[n("div",[n("b-icon",{attrs:{pack:t.pack,icon:t.icon,size:"is-large"}})],1),t._v(" "),n("p",[t._t("default")],2)])}),[],!1,null,"c916fcf4",null);e.default=component.exports},330:function(t,e,n){},331:function(t,e,n){"use strict";n(323)},335:function(t,e,n){"use strict";n.r(e);n(36),n(19),n(54),n(55);var o=n(1),r=n(20),l=(n(30),n(46),n(35),n(10),n(43),n(67));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(l.a)("local"),m=f.mapState,h=f.mapGetters,v=f.mapActions,w=(f.mapMutations,{data:function(){return{hoverWp:void 0,innerShow:this.show,items:[]}},props:["show"],computed:d(d({isWallpaperEmpty:function(){return!(this.isLoading||this.wallpapers&&0!=this.wallpapers.length)}},m(["wallpapers","isLoading","isPlaying"])),h(["serverHost"])),watch:{innerShow:function(t,e){this.$emit("update:show",t)},show:function(t,e){this.innerShow=t}},methods:d(d({},v(["refresh"])),{},{handleClientApiException:function(t){this.$local.handleClientApiException(this,t)},onWPClick:function(t){t.selected=!t.selected},loadData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.refresh({handleClientApiException:t.handleClientApiException});case 2:t.wallpapers?t.items=t.wallpapers.filter((function(t){return"group"!=t.info.type})).map((function(t){return Object.assign({selected:!1},JSON.parse(JSON.stringify(t)))})):t.items=[];case 3:case"end":return e.stop()}}),e)})))()},onCheckAll:function(t){this.items.forEach((function(e){return e.selected=t}))},onOK:function(){this.innerShow=!1;var t=this.items.filter((function(t){return!0===t.selected}));console.log(t),this.$emit("selected",t)}})}),O=(n(331),n(27)),component=Object(O.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{scroll:"keep"},model:{value:t.innerShow,callback:function(e){t.innerShow=e},expression:"innerShow"}},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v(t._s(t.$t("local.title")))])]),t._v(" "),n("div",{staticClass:"container is-fluid card py-5"},[n("div",{staticClass:"main columns is-multiline wp-content"},t._l(t.items,(function(e,o){return n("div",{key:o,staticClass:"column is-one-quarter mt-2",on:{mouseenter:function(n){t.hoverWp=e},mouseleave:function(e){t.hoverWp=!1}}},[n("div",{staticClass:"card mb-2 px-1 pt-1",class:{"item-hovering":t.hoverWp==e,"item-selected":e.selected},on:{click:function(n){return t.onWPClick(e)}}},[n("div",{staticClass:"card-image"},[n("figure",{staticClass:"image is-4by3"},[n("img",{staticClass:"wp-cover",attrs:{src:t.serverHost+"assets/image/?localpath="+e.runningData.dir+"//"+e.info.preview,alt:e.info.title}})])]),t._v(" "),n("div",{staticClass:"card-content columns"},[n("div",{staticClass:"column is-12"},[t._v("\n              "+t._s(e.info.title)+"\n            ")])])]),t._v(" "),n("client-only",[t.isWallpaperEmpty?n("Empty",{attrs:{pack:"fas",icon:"folder-open"}},[t._v("\n            "+t._s(t.$t("local.noWallpapers"))+"\n          ")]):t._e()],1)],1)})),0),t._v(" "),n("client-only",[n("b-loading",{attrs:{closable:!1},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}})],1),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[n("b-checkbox",{on:{input:t.onCheckAll}},[t._v("全选")]),t._v(" "),n("b-button",{attrs:{label:t.$t("common.cancel")},on:{click:function(e){t.innerShow=!1}}}),t._v(" "),n("b-button",{attrs:{label:t.$t("common.ok"),type:"is-primary"},on:{click:t.onOK}})],1)],1)])}),[],!1,null,"4915815a",null);e.default=component.exports;installComponents(component,{Header:n(166).default,Empty:n(324).default,Footer:n(98).default})},340:function(t,e,n){"use strict";n(330)},348:function(t,e,n){"use strict";n.r(e);n(36),n(19),n(35),n(54),n(43),n(55);var o=n(1),r=n(120),l=n(20),c=(n(30),n(129),n(46),n(10),n(67)),d=n(332),f=n.n(d);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(c.a)("local"),w=(v.mapState,v.mapGetters),O=v.mapActions,y=(v.mapMutations,{components:{draggable:f.a},props:{wallpapersRouterName:{type:String,default:"index"}},data:function(){return{hoverWp:void 0,drag:!1,showSelector:!1,isLoading:!1,wallpaperDir:void 0,title:void 0,groupItemWallpaperModels:[]}},computed:h({dragOptions:function(){return{animation:200,group:"description",disabled:!1,ghostClass:"ghost"}},isEditing:function(){var t=this.sourceData;return t?this.title!=t.title||JSON.stringify(this.groupItemWallpaperModels)!=JSON.stringify(t.groupItemWallpaperModels):this.title},canSave:function(){return this.title}},w(["serverHost"])),mounted:function(){},fetch:function(){this.initPage(this.$route.params.id)},fetchOnServer:!1,methods:h(h({},O(["getWallpaper"])),{},{hideLoading:function(){this.isLoading=!1},onWallpaperSelected:function(t){var e,n=JSON.parse(JSON.stringify(t));(e=this.groupItemWallpaperModels).push.apply(e,Object(r.a)(n))},beforeRouteLeave:function(t,e,n){this.isEditing&&!window.confirm(this.$t("dashboard.client.editor.leaveTips"))||n()},addItem:function(){this.showSelector=!0,this.$refs.wallpaperSelectorModal.loadData()},onDeleteWPClick:function(t){this.groupItemWallpaperModels.splice(this.groupItemWallpaperModels.indexOf(t),1)},initPage:function(path){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=null,t.isLoading=!0,!path){e.next=8;break}return e.next=6,t.getWallpaper({path:path});case 6:(n=e.sent)||alert("Wallpaper doesn't exist");case 8:if(t.setUIData(n),!n){e.next=14;break}t.wallpaperDir=n.runningData.dir,t.sourceData={title:t.title,groupItemWallpaperModels:JSON.parse(JSON.stringify(t.groupItemWallpaperModels))},e.next=19;break;case 14:return e.next=16,t.$local.getApiInstance().getDraftDir();case 16:o=e.sent,console.log("draftDir",o.data),t.wallpaperDir=o.data;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),t.$local.handleClientApiException(t,e.t0);case 24:return e.prev=24,t.hideLoading(),e.finish(24);case 27:case"end":return e.stop()}}),e,null,[[0,21,24,27]])})))()},setUIData:function(t){var e,n=t?t.info:{};this.title=null!==(e=n.title)&&void 0!==e?e:null,this.groupItemWallpaperModels=t&&t.info.groupItemWallpaperModels||[]},onSaveClick:function(){var t=this;this.isLoading=!0;var e={title:this.title,type:"group",groupItems:this.groupItemWallpaperModels.map((function(t){return t.info}))};this.$local.getApiInstance().updateProjectInfo(this.wallpaperDir,e).then((function(e){t.$buefy.dialog.confirm({canCancel:["button"],message:t.$t("common.createSuccess"),type:"is-success",cancelText:t.$t("common.ok"),confirmText:t.$t("common.viewNow"),onConfirm:function(){t.sourceData=null,t.setUIData(),t.$router.push(t.localePath({name:t.wallpapersRouterName}))},onCancel:function(){t.sourceData=null,t.initPage()}})})).catch((function(e){return t.$local.handleClientApiException(t,e)})).finally(this.hideLoading)}})}),C=(n(340),n(27)),component=Object(C.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container main"},[n("section",[n("b-field",{attrs:{label:t.$t("dashboard.client.editor.title")}},[n("b-input",{attrs:{placeholder:t.$t("dashboard.client.editor.titlePlaceholder")},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),n("b-field",{attrs:{label:t.$t("dashboard.client.editor.groupItems")}},[n("draggable",t._b({staticClass:"list-group",on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}},model:{value:t.groupItemWallpaperModels,callback:function(e){t.groupItemWallpaperModels=e},expression:"groupItemWallpaperModels"}},"draggable",t.dragOptions,!1),[n("transition-group",{staticClass:"columns is-multiline",attrs:{type:"transition"}},t._l(t.groupItemWallpaperModels,(function(e,o){return n("div",{key:""+o,staticClass:"list-group-item column is-one-quarter",on:{mouseenter:function(n){t.hoverWp=e},mouseleave:function(e){t.hoverWp=!1}}},[n("div",{staticClass:"card-image"},[n("figure",{staticClass:"image is-4by3"},[n("img",{staticClass:"wp-cover",attrs:{src:t.serverHost+"assets/image/?localpath="+e.runningData.dir+"//"+e.info.preview,alt:e.info.title}})]),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.hoverWp===e?n("nav",{staticClass:"card-bottom level"},[n("div",{staticClass:"level-left"},[n("b-tooltip",{staticClass:"level-item",attrs:{label:t.$t("common.settings"),position:"is-right"}})],1),t._v(" "),n("div",{staticClass:"level-right"},[n("b-tooltip",{staticClass:"level-item",attrs:{label:t.$t("common.delete"),position:"is-left"}},[n("div",{on:{click:function(n){return t.onDeleteWPClick(e)}}},[n("b-icon",{attrs:{type:"is-white",icon:"trash-alt",pack:"fas"}})],1)])],1)]):t._e()])],1),t._v(" "),n("div",{staticClass:"card-content columns"},[n("div",{staticClass:"column is-12"},[t._v("\n                "+t._s(e.info.title)+"\n              ")])])])})),0)],1)],1),t._v(" "),n("div",{staticClass:"my-3"},[n("button",{staticClass:"button is-info",on:{click:t.addItem}},[t._v("\n        "+t._s(t.$t("common.add"))+"\n      ")])]),t._v(" "),n("hr"),t._v(" "),n("b-field",[n("section",{staticClass:"b-tooltips"},[n("button",{staticClass:"button is-primary",attrs:{disabled:!t.canSave},on:{click:t.onSaveClick}},[t._v("\n          "+t._s(t.$t("common.save"))+"\n        ")])])])],1),t._v(" "),n("client-only",[n("b-loading",{attrs:{closable:!1},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}})],1),t._v(" "),n("WallpaperSelectorModal",{ref:"wallpaperSelectorModal",attrs:{show:t.showSelector},on:{"update:show":function(e){t.showSelector=e},selected:t.onWallpaperSelected}})],1)}),[],!1,null,"61d3dac0",null);e.default=component.exports;installComponents(component,{WallpaperSelectorModal:n(335).default})}}]);