(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{TeQF:function(e,t,a){"use strict";var i=a("I+eb"),r=a("tycR").filter,s=a("Hd5f"),n=a("rkAj"),o=s("filter"),c=n("filter");i({target:"Array",proto:!0,forced:!o||!c},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},w5RT:function(e,t,a){"use strict";a.r(t);a("TeQF"),a("07d7"),a("3bBZ");var i={metaInfo:{title:"Downloads"},data:function(){return{itemsPerPageArray:[4,8,12],search:"",filter:{},sortDesc:!1,page:1,itemsPerPage:4,sortBy:"name",keys:["Name","Calories","Fat","Carbs","Protein","Sodium","Calcium","Iron"],items:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%",iron:"1%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,sodium:337,calcium:"6%",iron:"7%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:"3%",iron:"8%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:"7%",iron:"16%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:"0%",iron:"0%"}]}},computed:{numberOfPages:function(){return Math.ceil(this.items.length/this.itemsPerPage)},filteredKeys:function(){return this.keys.filter((function(e){return"Name"!==e}))}},methods:{nextPage:function(){this.page+1<=this.numberOfPages&&(this.page+=1)},formerPage:function(){this.page-1>=1&&(this.page-=1)},updateItemsPerPage:function(e){this.itemsPerPage=e}}},r=a("KHd+"),s=null,n=Object(r.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Layout",[a("v-container",[a("v-row",[a("v-col",[a("h1",[e._v("Datasets")]),a("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])],1),a("v-row",[a("v-col",{staticClass:"col-12"},[a("v-data-iterator",{attrs:{items:e.items,"items-per-page":e.itemsPerPage,page:e.page,search:e.search,"sort-by":e.sortBy.toLowerCase(),"sort-desc":e.sortDesc,"hide-default-footer":""},on:{"update:itemsPerPage":function(t){e.itemsPerPage=t},"update:items-per-page":function(t){e.itemsPerPage=t}},scopedSlots:e._u([{key:"header",fn:function(){return[a("v-toolbar",{staticClass:"mb-1",attrs:{light:"",flat:""}},[a("v-text-field",{attrs:{clearable:"",outlined:"","hide-details":"","single-line":"","prepend-inner-icon":"mdi-magnify",label:"Search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("v-spacer"),a("v-btn-toggle",{attrs:{mandatory:""},model:{value:e.sortDesc,callback:function(t){e.sortDesc=t},expression:"sortDesc"}},[a("v-btn",{attrs:{large:"",depressed:"",outlined:"",value:!1}},[a("v-icon",[e._v("mdi-arrow-up")])],1),a("v-btn",{attrs:{large:"",depressed:"",outlined:"",value:!0}},[a("v-icon",[e._v("mdi-arrow-down")])],1)],1)],1)]},proxy:!0},{key:"default",fn:function(t){return[a("v-row",e._l(t.items,(function(t){return a("v-col",{key:t.name,attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[a("v-card",{attrs:{outlined:""}},[a("v-card-title",{staticClass:"subheading font-weight-bold"},[e._v(e._s(t.name))]),a("v-list",{attrs:{dense:""}},e._l(e.filteredKeys,(function(i,r){return a("v-list-item",{key:r},[a("v-list-item-content",[e._v(e._s(i)+":")]),a("v-list-item-content",{staticClass:"align-end"},[e._v(e._s(t[i.toLowerCase()]))])],1)})),1)],1)],1)})),1)]}},{key:"footer",fn:function(){return[a("v-row",{staticClass:"mt-2",attrs:{align:"center",justify:"center"}},[a("span",{staticClass:"grey--text"},[e._v("Items per page")]),a("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"ml-2",attrs:{text:"",color:"primary"}},"v-btn",r,!1),i),[e._v(e._s(e.itemsPerPage)),a("v-icon",[e._v("mdi-chevron-down")])],1)]}}])},[a("v-list",e._l(e.itemsPerPageArray,(function(t,i){return a("v-list-item",{key:i,on:{click:function(a){return e.updateItemsPerPage(t)}}},[a("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1),a("v-spacer"),a("span",{staticClass:"mr-4 grey--text"},[e._v("Page "+e._s(e.page)+" of "+e._s(e.numberOfPages))]),a("v-btn",{staticClass:"mr-1",attrs:{outlined:""},on:{click:e.formerPage}},[a("v-icon",[e._v("mdi-chevron-left")])],1),a("v-btn",{staticClass:"ml-1",attrs:{outlined:""},on:{click:e.nextPage}},[a("v-icon",[e._v("mdi-chevron-right")])],1)],1)]},proxy:!0}])})],1)],1)],1)],1)}),[],!1,null,null,null);"function"==typeof s&&s(n);t.default=n.exports}}]);