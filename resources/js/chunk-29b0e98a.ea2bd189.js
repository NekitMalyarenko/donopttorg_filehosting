(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29b0e98a"],{"0258":function(t,e,n){"use strict";var a=n("ba22"),i=n.n(a);i.a},"0c5e":function(t,e,n){},"212e":function(t,e,n){},"240a":function(t,e,n){},"247d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return 0===t.error.length?n("section",{staticClass:"layout"},[t.$route&&"catalog"===t.$route.name?n("h1",{staticClass:"title"},[t._v(t._s(t.categoryId))]):t._e(),t.$route&&"search"===t.$route.name?n("h1",{staticClass:"title"},[t._v('"'+t._s(t.searchRequest)+'"')]):t._e(),"catalog"!==t.$route.name&&"catalogWithSub"!==t.$route.name&&!t.isComponent||null===t.categoryId||0===t.products.length?t._e():n("div",{staticClass:"search-result-wrapper",style:{"margin-bottom":t.searchResultWrapperMarginBottom},attrs:{id:"grid"}},t._l(t.products,function(e){return n("Card",{key:e.id,attrs:{id:e.id,name:e.name,options:e.options,"children-data":e.childrenData,"button-text":t.componentData?t.componentData.buttonText:"Заказать","basket-data":t.basketData},on:{buy:t.onBuy}})}),1),"search"!==t.$route.name&&!t.isComponent||0===t.products.length||null===t.searchRequest?t._e():n("div",{staticClass:"search-result-wrapper",style:{"margin-bottom":t.searchResultWrapperMarginBottom},attrs:{id:"grid"}},t._l(t.products,function(e){return n("Card",{key:e.id,attrs:{id:e.id,name:e.name,options:e.options,"children-data":e.childrenData,"button-text":t.componentData?t.componentData.buttonText:"Заказать"},on:{buy:t.onBuy}})}),1),n("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.onBottomReached,expression:"onBottomReached"}],staticClass:"spinner"},[t.isLoading?n("LoadingSpinner"):t._e()],1),n("Basket",{attrs:{data:t.isComponent?t.basketData:t.basket,"can-be-ordered":!t.isComponent},on:{ordering:t.onOrdering,remove:t.onRemove}})],1):n("section",{staticClass:"layout"},[n("h1",{staticClass:"title"},[t._v(t._s(t.error))])])},i=[],r=(n("7f7f"),n("75fc")),s=(n("55dd"),n("ac6a"),n("386d"),n("96cf"),n("3b8d")),o=n("cebc"),c=n("2f62"),u=n("e5e2"),l=n("4ccc"),d=n("be12"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"header"},[n("p",{staticClass:"title",class:{"title-minified":t.name.length>45}},[t._v(t._s(t.name))]),0!==t.optionsLayers.length?n("section",{staticClass:"title-sub-container"},t._l(t.optionsLayers,function(e,a){return n("section",{key:a,staticClass:"option"},[e.length>1?n("SimpleDroplist",{attrs:{data:e},on:{choose:function(e){return t.changeChosenOption(a,e)}}}):n("p",[t._v(t._s(e[0]))])],1)}),0):t._e()]),n("LazyLoadImage",{staticClass:"main-image",attrs:{url:t.currentImage},on:{click:t.imageHandler}}),0!==t.lastOptionLayer.data.length?n("div",{staticClass:"content",style:t.cardContentStyle},t._l(t.lastOptionLayer.data,function(e,a){return n("div",{key:e.name,staticClass:"option"},[n("p",{staticClass:"name",class:{chosen:a===t.lastOptionLayer.chosenIndex},on:{click:function(e){t.lastOptionLayer.chosenIndex=a}}},[t._v("\n                "+t._s(e.name)+"\n            ")]),n("p",{staticClass:"quantity",class:{"chosen-quantity":a===t.lastOptionLayer.chosenIndex},on:{click:function(e){t.lastOptionLayer.chosenIndex=a}}},[t._v("\n                "+t._s(t.computedChildrenData[e.id].isCountInStockTooBig?">"+t.computedChildrenData[e.id].countInStock:t.computedChildrenData[e.id].countInStock)+" "),n("span",[t._v("шт.")])])])}),0):t._e(),n("div",{staticClass:"bottom"},[n("MDRaisedButton",{attrs:{text:t.buttonText},on:{click:function(e){return t.buyHandler()}}}),0!==t.optionsLayers.length?n("p",{staticClass:"price"},[t._v(t._s(t.currentOptionPrice)+" ₴")]):t._e()],1)],1)},p=[],f=(n("7514"),n("a4bb")),m=n.n(f),g=n("f499"),b=n.n(g),y=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"droplist-container",on:{mouseup:function(e){t.isVisible=!0},mouseleave:function(e){t.isVisible=!1}}},[n("p",{staticClass:"trigger"},[t._v("\n        "+t._s(t.$props.data[t.chosenIndex])+"\n        "),t.isVisible?n("img",{attrs:{src:"/svgs/caret-up.svg"}}):n("img",{attrs:{src:"/svgs/caret-down.svg"}})]),t.isVisible?n("div",{staticClass:"content"},t._l(t.dataToRender,function(e){return n("p",{key:e,on:{click:function(n){return t.clickHandler(e)}}},[t._v(t._s(e))])}),0):t._e()])}),v=[],k={name:"SimpleDroplist",props:{data:{type:Array,required:!0}},data:function(){return{chosenIndex:0,isVisible:!1}},methods:{clickHandler:function(t){for(var e=0;e<this.$props.data.length;e++)t===this.$props.data[e]&&(this.chosenIndex=e,this.$emit("choose",e),this.isVisible=!1)}},computed:{dataToRender:function(){return this.data}},watch:{data:function(t,e){if(t.length===e.length)for(var n=0;n<t.length;n++)t[n]!==e[n]&&(this.chosenIndex=0);else this.chosenIndex=0}}},C=k,x=(n("d35f"),n("2877")),O=Object(x["a"])(C,y,v,!1,null,"3b43d364",null),w=O.exports,_=n("f8b7"),I=n("06b1"),S=n("7032"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.onVisibilityChanged,expression:"onVisibilityChanged"}],ref:"img",style:{width:t.width+"px",height:t.height+"px"},attrs:{url:t.url},on:{click:function(e){return t.$emit("click")}}})},$=[],B=n("2b0e"),E=n("85fe");B["a"].use(E["a"]);var L={name:"LazyLoadImage",data:function(){return{isLoaded:!1,isVisible:!1}},props:{url:{type:String,required:!0},width:{type:Number},height:{type:Number}},methods:{callback:function(t){this.isLoaded=!0,this.$refs.img.src=t},onVisibilityChanged:function(t){this.isVisible=t,t&&!this.isLoaded&&0!==this.url.length&&this.loadImage()},loadImage:function(){_["a"].$emit(_["b"].lazyLoadImage,{url:this.url,callback:this.callback,priority:1})}},watch:{url:function(t){this.isVisible&&(0!==t.length?this.loadImage():this.$refs.img.src="")}}},R=L,P=(n("bff5"),Object(x["a"])(R,D,$,!1,null,"2e7638ec",null)),T=P.exports,M={name:"CatalogCard",components:{LazyLoadImage:T,MDRaisedButton:S["a"],SimpleDroplist:w},props:{id:{type:Number,required:!0},name:{type:String,required:!0},options:{type:Array,required:!0},childrenData:{type:Object,required:!0},buttonText:{type:String,required:!0},basketData:{type:Array,default:null}},data:function(){return{route:[],optionsLayers:[],eventBus:null,lastOptionLayer:{chosenIndex:0,data:[]},cardContentStyle:{gridTemplateColumns:"repeat(auto-fit, minmax(30px, max-content))"}}},methods:{changeChosenOption:function(t,e){this.route[t]=e,this.reCalculateOptionsLayer()},imageHandler:function(){this.eventBus.$emit(_["b"].showImagePreview,{img:I["a"].fullSizeImageURL(this.currentOption.id)})},buyHandler:function(){this.$emit("buy",{id:this.currentOption.id,name:this.currentOption.fullName,hasImage:this.currentOption.hasImage,priceRetail:this.currentOption.priceRetail,priceWholesale:this.currentOption.priceWholesale})},reCalculateOptionsLayer:function(){for(var t=this,e=[],n=[],a=this.options,i=0;i<this.route.length+1;i++)i!==this.route.length?function(){var n=[];a.forEach(function(t){n.push(t.name)}),e.push(n),a[t.route[i]]?a=a[t.route[i]].options:(a=a[0].options,t.route[i]=0)}():(n=a,this.lastOptionLayer.chosenIndex>n.length-1&&(this.lastOptionLayer.chosenIndex=0));this.optionsLayers=e,this.lastOptionLayer.data=n,this.reCalculateMaxOptionWidth()},calculateOptionsLayer:function(){var t=[],e=[],n=[],a=this.options;while(1){if(!(a[0].options&&a[0].options.length>0)){e=a;break}(function(){var e=[];a.forEach(function(t){e.push(t.name)}),t.push(e),n.push(0),a=a[0].options})()}this.optionsLayers=t,this.route=n,this.lastOptionLayer.data=e,this.reCalculateMaxOptionWidth()},reCalculateMaxOptionWidth:function(){var t=0,e=9;this.lastOptionLayer&&this.lastOptionLayer.data&&(this.lastOptionLayer.data.forEach(function(n){n.name.length*e>t&&(t=n.name.length*e)}),this.cardContentStyle.gridTemplateColumns="repeat(auto-fit, minmax("+t+"px, max-content))")}},computed:Object(o["a"])({},Object(c["c"])(u["a"].catalog,["basket"]),Object(c["c"])(u["a"].user,["pricesType"]),{computedChildrenData:function(){var t,e=JSON.parse(b()(this.childrenData));return t=this.basketData?this.basketData:this.basket,m()(e).forEach(function(n){var a=t.find(function(t){return t.id===n});a&&!e[n].isCountInStockTooBig&&(e[n].countInStock-=a.boughtQuantity)}),e},currentImage:function(){return this.hasImage?I["a"].imageURL(this.currentOption.id):""},hasImage:function(){return this.currentOption&&this.currentOption.hasImage},currentOption:function(){if(0!==this.lastOptionLayer.data.length)return this.childrenData[this.lastOptionLayer.data[this.lastOptionLayer.chosenIndex].id]},currentOptionPrice:function(){return this.currentOption?this.currentOption[this.pricesType]:"Нет цены"}}),mounted:function(){this.eventBus=_["a"],this.calculateOptionsLayer()}},j=M,N=(n("4a1c"),Object(x["a"])(j,h,p,!1,null,"0c73732e",null)),A=N.exports,z=n("e072"),V=n("d175"),W="произошла ошибка на сервере",q=n("795b"),U=n.n(q),H={socketData:null,handshakePayload:null,isClosed:!1,timer:null,start:function(){var t=this;return new U.a(function(e,n){try{t.isClosed=!1,t.socketData=V["a"].createProductsCountInStockUpdater(),t.socketData.socket.onclose=t.onWSClose,t.socketData.socket.onerror=t.onWSError,t.socketData.socket.onopen=function(){e()}}catch(a){n(a)}})},sendHandshake:function(t){var e=this;return new U.a(function(n,a){e.handshakePayload=t;try{e.socketData.sendJSONMessage({action:"HANDSHAKE",payload:t},function(t){var a=JSON.parse(t.data);if(!a.status||"ok"!==a.status)throw console.error("HANDSHAKE was unsuccessful"),e.close(),new Error("ba status");n()})}catch(i){a(i)}})},updateHandshake:function(){var t=this;return new U.a(function(e,n){try{console.log({payload:t.handshakePayload}),t.socketData.sendJSONMessage({action:"HANDSHAKE",payload:t.handshakePayload},function(n){var a=JSON.parse(n.data);if(!a.status||"ok"!==a.status)throw console.error("HANDSHAKE update was unsuccessful"),t.close(),new Error("bad status");console.log("handshake was updated"),e()})}catch(a){n(a)}})},sendGetData:function(){var t=this;return new U.a(function(e,n){try{t.socketData.sendJSONMessage({action:"GET"},function(n){var a=JSON.parse(n.data);if(!a.status||"ok"!==a.status||!a.data)throw console.error("ws on GET error",{data:a}),t.close(),new Error("ws error");e(a.data)})}catch(a){n(a)}})},close:function(){this.timer&&(clearTimeout(this.timer),this.timer=null),this.socketData&&this.socketData.socket&&this.socketData.socket.close()},onWSError:function(t){this.close(),console.error("ws error",{error:t})},onWSClose:function(){this.isClosed=!0,this.socketData=null,this.handshakePayload=null},isWorking:function(){return null!==this.socketData&&null!==this.socketData.socket&&1===this.socketData.socket.readyState}},J=n("164a");B["a"].use(E["a"]);var K=Object(J["a"])("api"),Q=9,F={name:"Catalog",components:{LoadingSpinner:z["a"],Basket:function(){return Promise.resolve().then(n.bind(null,"deaa"))},Card:A},data:function(){return{isLoading:!0,hasMoreToLoad:!1,lastPageNumber:1,paginatedProducts:[],error:"",productUpdater:null,productUpdaterInitTimer:null}},props:{isComponent:{type:Boolean,default:!1},componentData:{type:Object,default:null},basketData:{type:Array,default:null}},methods:Object(o["a"])({},Object(c["b"])(u["a"].catalog,[l["a"].catalog.ADD_TO_BASKET]),Object(c["d"])(u["a"].catalog,[d["a"].catalog.REMOVE_FROM_BASKET,d["a"].catalog.SET_IS_BASKET_MINIMIZED]),{init:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.lastPageNumber=1,this.paginatedProducts=[],this.error="",this.hasMoreToLoad=!1,this.isLoading=!0,!this.searchRequest){t.next=10;break}return t.next=8,this.search(this.searchRequest);case 8:t.next=13;break;case 10:if(!this.categoryId){t.next=13;break}return t.next=13,this.getProducts();case 13:this.isLoading=!1;case 14:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onBuy:function(t){this.setIsBasketMinimized(!1),this.isComponent?this.$emit("buy",t):this.addToBasket(t)},onOrdering:function(){this.$router.push({name:"ordering"})},onRemove:function(t){this.isComponent?this.$emit("basketRemove",t):this.removeFromBasket(t)},onBottomReached:function(t){var e=this;!this.isLoading&&this.hasMoreToLoad&&0===this.error.length&&t&&(this.isLoading=!0,this.getMoreProducts().then(function(){e.isLoading=!1}))},getProducts:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={categoryId:this.categoryId,subCategoryId:this.subCategoryId,itemsPerPage:Q},t.prev=1,t.next=4,V["a"].getProductsByCategory(e);case 4:if(n=t.sent,null===n){t.next=13;break}return t.next=8,n.json();case 8:a=t.sent,this.paginatedProducts.push({pageNumber:1,data:a}),a.length===Q&&(this.hasMoreToLoad=!0),t.next=15;break;case 13:console.error({result:n},"while loading products"),this.error=W;case 15:t.next=21;break;case 17:t.prev=17,t.t0=t["catch"](1),console.error({e:t.t0},"while loading products"),this.error=W;case 21:case"end":return t.stop()}},t,this,[[1,17]])}));function e(){return t.apply(this,arguments)}return e}(),getMoreProducts:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.lastPageNumber++,this.hasMoreToLoad=!1,e={categoryId:this.categoryId,subCategoryId:this.subCategoryId,itemsPerPage:Q,pageNumber:this.lastPageNumber},t.prev=3,n=e.itemsPerPage,t.next=7,V["a"].getMoreProductsByCategory(e);case 7:if(a=t.sent,null===a){t.next=16;break}return t.next=11,a.json();case 11:i=t.sent,this.paginatedProducts.push({pageNumber:e.pageNumber,data:i}),this.hasMoreToLoad=i.length===n,t.next=18;break;case 16:console.error({result:a},"while loading more products"),this.error=W;case 18:t.next=24;break;case 20:t.prev=20,t.t0=t["catch"](3),console.error({e:t.t0},"while loading more products"),this.error=W;case 24:case"end":return t.stop()}},t,this,[[3,20]])}));function e(){return t.apply(this,arguments)}return e}(),search:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V["a"].search(this.searchRequest);case 3:if(e=t.sent,null===e){t.next=11;break}return t.next=7,e.json();case 7:n=t.sent,this.paginatedProducts.push({data:n}),t.next=13;break;case 11:console.error({result:e},"while search"),this.error=W;case 13:t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](0),console.error({e:t.t0},"while search"),this.error=W;case 19:case"end":return t.stop()}},t,this,[[0,15]])}));function e(){return t.apply(this,arguments)}return e}(),runProductUpdater:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,a,i,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.productUpdater.sendGetData();case 2:e=t.sent,t.t0=regeneratorRuntime.keys(e);case 4:if((t.t1=t.t0()).done){t.next=22;break}a=t.t1.value,i=0;case 7:if(!(i<n.paginatedProducts.length)){t.next=20;break}t.t2=regeneratorRuntime.keys(n.paginatedProducts[i].data);case 9:if((t.t3=t.t2()).done){t.next=17;break}if(r=t.t3.value,r!==a){t.next=15;break}return n.paginatedProducts[i].data[r].isCountInStockTooBig=e[a].isCountInStockTooBig,n.paginatedProducts[i].data[r].countInStock=e[a].countInStock,t.abrupt("break",17);case 15:t.next=9;break;case 17:i++,t.next=7;break;case 20:t.next=4;break;case 22:return t.next=24,n.synchronizeWithCache();case 24:n.productUpdater.timer=setTimeout(function(){return n.runProductUpdater},1e3*PRODUCTS_UPDATE_TIME);case 25:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),this.productUpdaterInitTimer=null,t.prev=2,this.productUpdater&&!this.productUpdater.isClosed){t.next=13;break}return this.productUpdater=H,t.next=7,this.productUpdater.start();case 7:return t.next=9,this.productUpdater.sendHandshake(payload);case 9:return t.next=11,e();case 11:t.next=16;break;case 13:if(!this.productUpdater||!this.productUpdater.isWorking()){t.next=16;break}return t.next=16,e();case 16:t.next=22;break;case 18:t.prev=18,t.t0=t["catch"](2),console.error(t.t0),this.productUpdater&&(this.productUpdater.close(),this.productUpdater=null);case 22:case"end":return t.stop()}},t,this,[[2,18]])}));function e(){return t.apply(this,arguments)}return e}(),synchronizeWithCache:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n,a,i,r,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.searchRequest){t.next=10;break}return e="/catalog/search/request:".concat(this.searchRequest,";"),t.next=4,K.get(e);case 4:if(n=t.sent,!n){t.next=8;break}return t.next=8,K.updateJSON(e,this.products);case 8:t.next=25;break;case 10:if(!this.categoryId){t.next=25;break}a=0;case 12:if(!(a<this.paginatedProducts.length)){t.next=25;break}return i=this.paginatedProducts[a],r=void 0,r=1===i.pageNumber?this.subCategoryId?"/catalog/getProductsByCategory/categoryId:".concat(this.categoryId,";subCategoryId:").concat(this.subCategoryId,";"):"/catalog/getProductsByCategory/categoryId:".concat(this.categoryId,";"):this.subCategoryId?"/catalog/getMoreProductsByCategory/categoryId:".concat(this.categoryId,";subCategoryId:").concat(this.subCategoryId,";pageNumber:").concat(i.pageNumber,";"):"/catalog/getMoreProductsByCategory/categoryId:".concat(this.categoryId,";pageNumber:").concat(i.pageNumber,";"),t.next=18,K.get(r);case 18:if(s=t.sent,!s){t.next=22;break}return t.next=22,K.updateJSON(r,i.data);case 22:a++,t.next=12;break;case 25:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}),computed:Object(o["a"])({},Object(c["c"])(u["a"].catalog,["basket"]),{products:function(){var t=[];return this.paginatedProducts.sort(function(t,e){return t.pageNumber&&e.pageNumber?t.pageNumber-e.pageNumber:0}),this.paginatedProducts.forEach(function(e){e.data&&t.push.apply(t,Object(r["a"])(e.data))}),t},searchResultWrapperMarginBottom:function(){return this.isBaskeWindowVisible?"230px":"0px"},categoryId:function(){return this.$route&&this.$route.params&&("catalog"===this.$route.name||"catalogWithSub"===this.$route.name)?this.$route.params.categoryId:this.$props.componentData&&this.$props.componentData.category&&0!==this.$props.componentData.category.length?this.$props.componentData.category:null},subCategoryId:function(){return null!==this.$route&&null!==this.$route.params&&"catalogWithSub"===this.$route.name?this.$route.params.subCategoryId:this.$props.componentData&&this.$props.componentData.subCategory&&0!==this.$props.componentData.subCategory.length?this.$props.componentData.subCategory:null},searchRequest:function(){return null!==this.$route&&null!==this.$route.params&&"search"===this.$route.name?this.$route.params.request:this.$props.componentData&&this.$props.componentData.searchRequest&&0!==this.$props.componentData.searchRequest.length?this.$props.componentData.searchRequest:null}}),watch:{$route:{handler:function(){this.init()},deep:!0,immediate:!0}},beforeDestroy:function(){}},G=F,Z=(n("7ff4"),Object(x["a"])(G,a,i,!1,null,"14b5d0c4",null));e["default"]=Z.exports},"24e7":function(t,e,n){"use strict";var a=n("e2af"),i=n.n(a);i.a},"2b48":function(t,e,n){},"4a1c":function(t,e,n){"use strict";var a=n("212e"),i=n.n(a);i.a},"7ff4":function(t,e,n){"use strict";var a=n("2b48"),i=n.n(a);i.a},"85fe":function(t,e,n){"use strict";(function(t){var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=(function(){function t(t){this.value=t}function e(e){var n,a;function i(t,e){return new Promise(function(i,s){var o={key:t,arg:e,resolve:i,reject:s,next:null};a?a=a.next=o:(n=a=o,r(t,e))})}function r(n,a){try{var i=e[n](a),o=i.value;o instanceof t?Promise.resolve(o.value).then(function(t){r("next",t)},function(t){r("throw",t)}):s(i.done?"return":"normal",i.value)}catch(c){s("throw",c)}}function s(t,e){switch(t){case"return":n.resolve({value:e,done:!0});break;case"throw":n.reject(e);break;default:n.resolve({value:e,done:!1});break}n=n.next,n?r(n.key,n.arg):a=null}this._invoke=i,"function"!==typeof e.return&&(this.return=void 0)}"function"===typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}(),function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}),i=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),r=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function s(t){var e=void 0;return e="function"===typeof t?{callback:t}:t,e}function o(t,e){var n=void 0,a=void 0,i=void 0,s=function(s){for(var o=arguments.length,c=Array(o>1?o-1:0),u=1;u<o;u++)c[u-1]=arguments[u];i=c,n&&s===a||(a=s,clearTimeout(n),n=setTimeout(function(){t.apply(void 0,[s].concat(r(i))),n=0},e))};return s._clear=function(){clearTimeout(n)},s}function c(t,e){if(t===e)return!0;if("object"===("undefined"===typeof t?"undefined":n(t))){for(var a in t)if(!c(t[a],e[a]))return!1;return!0}return!1}var u=function(){function t(e,n,i){a(this,t),this.el=e,this.observer=null,this.frozen=!1,this.createObserver(n,i)}return i(t,[{key:"createObserver",value:function(t,e){var n=this;this.observer&&this.destroyObserver(),this.frozen||(this.options=s(t),this.callback=this.options.callback,this.callback&&this.options.throttle&&(this.callback=o(this.callback,this.options.throttle)),this.oldResult=void 0,this.observer=new IntersectionObserver(function(t){var e=t[0];if(n.callback){var a=e.isIntersecting&&e.intersectionRatio>=n.threshold;if(a===n.oldResult)return;n.oldResult=a,n.callback(a,e),a&&n.options.once&&(n.frozen=!0,n.destroyObserver())}},this.options.intersection),e.context.$nextTick(function(){n.observer.observe(n.el)}))}},{key:"destroyObserver",value:function(){this.observer&&(this.observer.disconnect(),this.observer=null),this.callback&&this.callback._clear&&(this.callback._clear(),this.callback=null)}},{key:"threshold",get:function(){return this.options.intersection&&this.options.intersection.threshold||0}}]),t}();function l(t,e,n){var a=e.value;if("undefined"===typeof IntersectionObserver)console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");else{var i=new u(t,a,n);t._vue_visibilityState=i}}function d(t,e,n){var a=e.value,i=e.oldValue;if(!c(a,i)){var r=t._vue_visibilityState;r?r.createObserver(a,n):l(t,{value:a},n)}}function h(t){var e=t._vue_visibilityState;e&&(e.destroyObserver(),delete t._vue_visibilityState)}var p={bind:l,update:d,unbind:h};function f(t){t.directive("observe-visibility",p)}var m={version:"0.4.3",install:f},g=null;"undefined"!==typeof window?g=window.Vue:"undefined"!==typeof t&&(g=t.Vue),g&&g.use(m),e["a"]=m}).call(this,n("c8ba"))},"986a":function(t,e,n){"use strict";var a=n("0c5e"),i=n.n(a);i.a},a355:function(t,e,n){"use strict";var a=n("240a"),i=n.n(a);i.a},ac0c:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"layout"},[0!==t.categories.length?n("ExpandableList",{attrs:{data:t.dataToBind},on:{choose:t.onCategoryChoose,expand:t.onCategoryExpand}}):t._e(),n("Basket",{attrs:{data:t.isComponent?t.basketData:t.basket,"can-be-ordered":!t.isComponent},on:{ordering:t.onBasketOrdering,remove:t.onBasketRemove}})],1)},i=[],r=(n("ac6a"),n("f499")),s=n.n(r),o=n("cebc"),c=n("2f62"),u=n("4ccc"),l=n("be12"),d=n("e5e2"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"expandable-list"},t._l(t.data,function(e){return n("ExpandableListItem",{key:e.id,attrs:{id:e.id,name:e.name,children:e.children,"is-expanded":e.isExpanded},on:{choose:t.onChoose,expand:t.onExpand}})}),1)},p=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"item-wrapper"},[n("div",{staticClass:"item",on:{click:t.clickHandler}},[n("p",[t._v(t._s(t.name))]),!t.isChildrenVisible&&t.hasChilren?n("img",{attrs:{src:"/svgs/caret-down.svg"}}):t._e(),t.isChildrenVisible&&t.hasChilren?n("img",{attrs:{src:"/svgs/caret-up.svg"}}):t._e()]),t.hasChilren&&t.isChildrenVisible?n("section",{staticClass:"children"},t._l(t.children,function(e){return n("ExpandableListItem",{key:e.id,attrs:{name:e.name,children:e.children,id:e.id},on:{choose:t.onChoose}})}),1):t._e()])},m=[],g=(n("7f7f"),{name:"ExpandableListItem",props:{id:{type:String,required:!0},name:{type:String,require:!0},children:{type:Array,required:!1},isExpanded:{type:Boolean,required:!1}},data:function(){return{isChildrenVisible:!1}},methods:{clickHandler:function(){this.children?(this.isChildrenVisible=!this.isChildrenVisible,this.$emit("expand",this.id)):this.$emit("choose",{id:this.id,name:this.name})},onChoose:function(t){t.subId=t.id,t.id=this.id,this.$emit("choose",t)}},computed:{hasChilren:function(){return this.children&&0!==this.children.length}},mounted:function(){null!==this.isExpanded&&void 0!==this.isExpanded&&(this.isChildrenVisible=this.isExpanded)}}),b=g,y=(n("a355"),n("2877")),v=Object(y["a"])(b,f,m,!1,null,"328dc628",null),k=v.exports,C={name:"ExpandableList",components:{ExpandableListItem:k},props:{data:{type:Array,require:!0}},methods:{onChoose:function(t){this.$emit("choose",t)},onExpand:function(t){this.$emit("expand",t)}}},x=C,O=(n("986a"),Object(y["a"])(x,h,p,!1,null,"0e1c8988",null)),w=O.exports,_=n("deaa"),I={name:"CategoryChoose",components:{Basket:_["default"],ExpandableList:w},props:{isComponent:{type:Boolean,default:!1},basketData:{type:Array,default:null}},methods:Object(o["a"])({},Object(c["b"])(d["a"].catalog,[u["a"].catalog.LOAD_CATEGORIES]),Object(c["d"])(d["a"].catalog,[l["a"].catalog.REMOVE_FROM_BASKET]),{onCategoryChoose:function(t){this.isComponent?this.$emit("choose",{category:t.id,subCategory:t.subId}):t.subId?this.$router.push({path:"/catalog/".concat(t.id,"/").concat(t.subId)}):this.$router.push({path:"/catalog/".concat(t.id)})},onCategoryExpand:function(t){this.isComponent||this.$store.commit(d["a"].catalog+"/"+l["a"].catalog.CHOOSE_CATEGORY,t)},onBasketRemove:function(t){this.isComponent?this.$emit("basketRemove",t):this.removeFromBasket(t)},onBasketOrdering:function(){this.$router.push({name:"ordering"})}}),computed:Object(o["a"])({},Object(c["c"])(d["a"].catalog,["basket","categories","chosenCategory"]),{rawCategories:function(){var t=JSON.parse(s()(this.categories));return t.forEach(function(t){t.isExpanded&&(t.isExpanded=!1)}),t},dataToBind:function(){return this.isComponent?this.rawCategories:this.categories}}),created:function(){0===this.categories.length&&this.loadCategories()}},S=I,D=(n("0258"),Object(y["a"])(S,a,i,!1,null,"2c218267",null));e["default"]=D.exports},ba22:function(t,e,n){},bff5:function(t,e,n){"use strict";var a=n("ea34"),i=n.n(a);i.a},d35f:function(t,e,n){"use strict";var a=n("ff66"),i=n.n(a);i.a},deaa:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"basket-wrapper"},[t.isBasketWindowVisible?n("div",{staticClass:"basket",class:{"basket-minimized":t.isBasketWindowMinimizedComputed},attrs:{id:"basket"}},[n("div",{staticClass:"top-bar"},[t.isBasketWindowMinimizedComputed?t._e():n("img",{staticClass:"clickable",attrs:{src:"/svgs/window-minimize-big-white.svg"},on:{click:function(e){return t.onWindowMinimize(!0)}}}),t.isBasketWindowMinimizedComputed?n("img",{staticClass:"clickable",attrs:{src:"/svgs/window-minimize-small-white.svg"},on:{click:function(e){return t.onWindowMinimize(!1)}}}):t._e(),n("img",{staticClass:"clickable",attrs:{src:"/svgs/times-white.svg"},on:{click:t.closeBasket}})]),n("ProductsTable",{attrs:{data:t.data,"is-editable":!0,"is-full-size":!1,height:239},on:{remove:function(e){return t.$emit("remove",e)},quantityChange:t.onQuantityChange}}),n("div",{staticClass:"bottom"},[n("p",{staticClass:"totalSum"},[t._v("Итого: "),n("span",[t._v(t._s(t.basketTotalPrice)+"₴")])]),t.isBasketValid&&t.basketTotalPrice>0&&t.canBeOrdered?n("button",{staticClass:"right",on:{click:function(e){return t.$emit("ordering")}}},[t._v("Оформить")]):t._e()])],1):t._e()])},i=[],r=n("cebc"),s=n("2f62"),o=n("e5e2"),c=n("be12"),u=n("d777"),l={name:"Basket",components:{ProductsTable:u["a"]},props:{data:{type:Array,required:!0},isMinimized:{type:Boolean,default:null},onMinimize:{type:Function,default:null},canBeOrdered:{type:Boolean,default:!0}},data:function(){return{basketWindow:{height:null}}},methods:Object(r["a"])({},Object(s["d"])(o["a"].catalog,[c["a"].catalog.REMOVE_FROM_BASKET,c["a"].catalog.SET_IS_BASKET_MINIMIZED,c["a"].catalog.CLEAR]),{onQuantityChange:function(t){var e=t.item,n=t.newQuantity;e.boughtQuantity=n},closeBasket:function(){this.clear()},onWindowMinimize:function(t){this.onMinimize?this.onMinimize(t):this.setIsBasketMinimized(t)}}),computed:Object(r["a"])({},Object(s["c"])(o["a"].catalog,["basket","isBasketWindowMinimized","chosenCategory"]),Object(s["c"])(o["a"].user,["pricesType"]),{isBasketWindowMinimizedComputed:function(){return null!==this.isMinimized&&void 0!==this.isMinimized?this.isMinimized:this.isBasketWindowMinimized},isBasketWindowVisible:function(){return 0!==this.data.length},isBasketValid:function(){for(var t=this.data,e=0;e<t.length;e++)if(!t[e].isValid||!t[e].boughtQuantity)return!1;return!0},basketTotalPrice:function(){if(this.isBasketValid){for(var t=0,e=this.data,n=0;n<e.length;n++){var a=void 0;a=this.pricesType in e[n]?e[n][this.pricesType]:e[n].price,t+=a*e[n].boughtQuantity}return Math.round(1e3*t)/1e3}return-1}}),created:function(){},destroyed:function(){}},d=l,h=(n("24e7"),n("2877")),p=Object(h["a"])(d,a,i,!1,null,"c354353a",null);e["default"]=p.exports},e2af:function(t,e,n){},ea34:function(t,e,n){},ff66:function(t,e,n){}}]);
//# sourceMappingURL=chunk-29b0e98a.ea2bd189.js.map