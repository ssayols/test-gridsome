(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{GTZs:function(e,t,i){},WmFc:function(e,t,i){"use strict";var s=i("GTZs");i.n(s).a},r4CN:function(e,t,i){"use strict";i.r(t);i("2B1R");var s={metaInfo:function(){return{title:this.$page.gene.geneSymbol}},data:function(){return{siteHeaders:[{text:"Position",value:"position"},{text:"Site",value:"site"},{text:"PEP",value:"pep"},{text:"Sequence window",value:"sequenceWindow"},{text:"Localization probablility",value:"localizationProbability"},{text:"Ratio",value:"ratio"}],chartOptions:{chart:{id:"vuechart-example"},dataLabels:{enabled:!1},yaxis:{labels:{show:!0}},xaxis:{categories:["A","B","C"]}}}},computed:{series:function(){return[{name:"series-1",data:this.$page.gene.glyGlySites.map((function(e){return e.ratio}))}]}}},n=(i("WmFc"),i("KHd+")),a=null,o=Object(n.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Layout",[i("v-container",[i("h1",[e._v(e._s(e.$page.gene.uniprotIdentifier)+" ("),i("i",[e._v(e._s(e.$page.gene.geneSymbol))]),e._v(")")]),i("v-container",{staticClass:"body-2"},[i("v-row",{staticClass:"table4"},[i("v-col",{staticClass:"col-md-2 subtitle-2"},[e._v("Gene names")]),i("v-col",{staticClass:"table4"},[i("ul",{staticClass:"table4"},e._l(e.$page.gene.geneNames,(function(t){return i("li",[e._v(e._s(t))])})),0)])],1),i("v-divider"),i("v-row",[i("v-col",{staticClass:"col-md-2 subtitle-2"},[e._v("Function")]),i("v-col",{staticClass:"text-justify"},[e._v(e._s(e.$page.gene.function))])],1),i("v-divider"),i("v-row",[i("v-col",{staticClass:"col-md-2 subtitle-2"},[e._v("Keywords")]),i("v-col",[i("ul",e._l(e.$page.gene.keywords,(function(t){return i("li",[e._v(e._s(t))])})),0)])],1),i("v-divider"),i("v-row",[i("v-col",{staticClass:"col-md-2 subtitle-2"},[e._v("UniProt IDs")]),i("v-col",[i("a",{attrs:{href:"https://www.uniprot.org/uniprot/"+e.$page.gene.uniprotIdentifier}},[e._v(e._s(e.$page.gene.uniprotIdentifier))])])],1),i("v-divider"),i("v-row",{staticClass:"mt-5"},[i("v-data-table",{attrs:{headers:e.siteHeaders,items:e.$page.gene.glyGlySites,"sort-by":"position",search:"",dense:""},scopedSlots:e._u([{key:"item.sequenceWindow",fn:function(t){var s=t.item;return[i("span",{staticStyle:{"font-family":"monospace"}},[e._v(e._s(s.sequenceWindow.slice(0,15))),i("b",[e._v(e._s(s.sequenceWindow.slice(15,16)))]),e._v(e._s(s.sequenceWindow.slice(16,31)))])]}}])})],1),i("v-divider")],1)],1)],1)}),[],!1,null,null,null);"function"==typeof a&&a(o);t.default=o.exports}}]);