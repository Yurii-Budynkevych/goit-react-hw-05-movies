"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[474],{343:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(731),c=e(689),u=e(184),i=function(n){var t=n.arr,e=(0,c.TH)();return(0,u.jsx)("ul",{children:t.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsx)(r.rU,{to:"/movies/".concat(n.id),state:e,children:n.title})},n.id)}))})}},474:function(n,t,e){e.r(t),e.d(t,{default:function(){return o}});var r=e(885),c=e(791),u=e(765),i=e(343),a=e(184),o=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],o=t[1];return(0,c.useEffect)((function(){(0,u.Hg)().then((function(n){return o(n)})).catch((function(n){return console.log(n.message)}))}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:"Trending today"}),(0,a.jsx)(i.Z,{arr:e})]})}},765:function(n,t,e){e.d(t,{AJ:function(){return f},HI:function(){return i},Hg:function(){return u},Ku:function(){return o},Pg:function(){return a}});var r=e(44),c="db35b30505be40a9278db1f8a9f126fa";r.ZP.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){return r.ZP.get("/trending/movie/day?api_key=".concat(c)).then((function(n){return n.data.results}))},i=function(n){return r.ZP.get("/search/movie?api_key=".concat(c,"&query=").concat(n,"&page=1&include_adult=false")).then((function(n){return n.data.results}))},a=function(n){return r.ZP.get("/movie/".concat(n,"?api_key=").concat(c)).then((function(n){return n.data}))},o=function(n){return r.ZP.get("/movie/".concat(n,"/credits?api_key=").concat(c)).then((function(n){return n.data}))},f=function(n){return r.ZP.get("/movie/".concat(n,"/reviews?api_key=").concat(c)).then((function(n){return n.data}))}}}]);
//# sourceMappingURL=474.101bded3.chunk.js.map