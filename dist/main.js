!function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/Jobubbles/",t(t.s=3)}([function(e,n){e.exports=[{cat:"ben",name:"내가 가장 무서워 하는 것",value:1500,icon:"./img/ben.png"},{cat:"youngjae",name:"지금 하는 일을 선택한 이유",value:2807,icon:"./img/youngjae.png"},{cat:"harold",name:"나에 대한 특이한 점",value:530,icon:"./img/harold.png"},{cat:"ruby",name:"내가 가장 열정적으로 배운 것",value:778,icon:"./img/ruby.png"},{cat:"sunghwan",name:"내가 가장 좋아하는 계절",value:1336,icon:"./img/sunghwan.png"},{cat:"yaewon",name:"내가 꾸준히 하는 특이한 행동",value:1955,icon:"./img/yaewon.png"},{cat:"juwon",name:"나만의 스트레스 해소법",value:975,icon:"./img/juwon.png"},{cat:"jaeyub",name:"내가 꾸준히 모으는 물건",value:1239,icon:"./img/jaeyub.png"},{cat:"seyun",name:"외모적으로 닮고 싶은 연예인",value:1168,icon:"./img/seyun.png"},{cat:"hyeri",name:"내가 계산 기준으로 삼는 물건",value:1622,icon:"./img/hyeri.png"},{cat:"ben",name:"내 배우자의 최고 장점",value:700,icon:"./img/ben.png"},{cat:"ruby",name:"내가 여기있는 사람들보다 더 잘할 수 있는 일",value:1800,icon:"./img/ruby.png"},{cat:"seyun",name:"나의 어렸을적 꿈",value:1983,icon:"./img/seyun.png"},{cat:"junghyun",name:"나의 인생 영화",value:1161,icon:"./img/junghyun.png"},{cat:"yosuree",name:"나의 요즘 최고 관심사",value:590,icon:"./img/yosuree.png"},{cat:"junghyun",name:"내가 싱글이라면 하고 싶은것",value:1553,icon:"./img/junghyun.png"},{cat:"yaewon",name:"내가 가장 좋아하는 음식",value:1183,icon:"./img/yaewon.png"},{cat:"dongeun",name:"내가 죽기전에 꼭 해보고 싶은 일",value:1297,icon:"./img/dongeun.png"},{cat:"yosuree",name:"사람들은 나의 _를 알면 놀랄것이다",value:1772,icon:"./img/yosuree.png"},{cat:"sunghwan",name:"지금 가장 갖고싶은 물건",value:2238,icon:"./img/sunghwan.png"},{cat:"dongeun",name:"나의 생활신조",value:935,icon:"./img/dongeun.png"},{cat:"harold",name:"어렸을 때 별명",value:1006,icon:"./img/harold.png"},{cat:"youngjae",name:"살면서 가장 황당했던적",value:829,icon:"./img/youngjae.png"},{cat:"hyeri",name:"쓸모없지만 절대 버릴 수 없는 물건",value:556,icon:"./img/hyeri.png"},{cat:"noel",name:"돈에 구애받지 않는다면 하고싶은것",value:1294,icon:"./img/noel.png"},{cat:"jaeyub",name:"지금까지 산 물건중에 가장 비싼 물건",value:2555,icon:"./img/jaeyub.png"},{cat:"noel",name:"나에 대해 고치고 싶은점",value:644,icon:"./img/noel.png"},{cat:"juwon",name:"내 외모중 가장 자신있는 부분",value:1813,icon:"./img/juwon.png"}]},function(e,n){e.exports=function(e,n,t,a,r){e.on("click",i=>{d3.event.stopPropagation();let l=d3.event.currentTarget;if(i===n)return;let o=n;n=i,t.alphaTarget(.2).restart(),d3.selectAll(".circle-overlay").classed("hidden",!0),d3.selectAll(".node-icon").classed("node-icon--faded",!1).style("opacity",1),o&&(o.fx=null,o.fy=null,e.filter((e,n)=>n===o.index).transition().duration(1e3).ease(d3.easePolyOut).tween("circleOut",()=>{let e=d3.interpolateNumber(o.r,o.radius);return n=>{o.r=e(n)}}).on("interrupt",()=>{o.r=o.radius})),d3.transition().duration(1e3).ease(d3.easePolyOut).tween("moveIn",()=>{let e=d3.interpolateNumber(i.x,a),n=d3.interpolateNumber(i.y,r),l=d3.interpolateNumber(i.r,.5*r);return function(a){i.fx=e(a),i.fy=n(a),i.r=l(a),t.force("collide",d3.forceCollide(e=>e.r))}}).on("end",()=>{t.alphaTarget(0);let e=d3.select(l);e.select(".circle-overlay").classed("hidden",!1),e.select(".node-icon").classed("node-icon--faded",!0).style("opacity",0)})}),d3.select(document).on("click",()=>{!d3.event.target.closest("#circle-overlay")&&n&&(n.fx=null,n.fy=null,t.alphaTarget(.2).restart(),d3.transition().duration(3e3).ease(d3.easePolyOut).tween("moveOut",(function(){console.log("tweenMoveOut",n);let e=d3.interpolateNumber(n.r,n.radius);return function(a){n.r=e(a),t.force("collide",d3.forceCollide(e=>e.r))}})).on("end",()=>{n=null,t.alphaTarget(0)}),d3.selectAll(".circle-overlay").classed("hidden",!0),d3.selectAll(".node-icon").classed("node-icon--faded",!1).style("opacity",1))})}},function(e,n){e.exports=function(e,n){d3.legendColor().scale(e).shape("circle")}},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(1),l=t.n(i),o=t(2),c=t.n(o);document.addEventListener("DOMContentLoaded",()=>{!function(){let e=d3.select("svg"),n=document.body.clientWidth,t=+e.attr("height"),a=.55*n,i=.5*t,o=d3.scaleOrdinal(["#789c6e","#4c5f72","#1e3349","#a64960","#29586c","#1d456d","#85888b","#a9845c","#89c7d6"]),d=d3.forceSimulation().force("charge",d3.forceManyBody()).force("collide",d3.forceCollide(e=>e.r)).force("x",d3.forceX(a)).force("y",d3.forceY(i)),u=d3.pack().size([n,t]).padding(2)(d3.hierarchy({children:r.a}).sum(e=>e.value)).descendants().filter((function(e){return 1===e.depth})).map(e=>{const n=e.data;return{x:a+3*(e.x-a),y:i+3*(e.y-i),r:0,radius:e.r,id:n.cat+"."+n.name.replace(/\s/g,"-"),cat:n.cat,name:n.name,value:n.value,icon:n.icon,desc:n.desc,link:n.link,linkUrl:n.linkUrl,company:n.company,companyUrl:n.companyUrl}});d.nodes(u).on("tick",(function(){s.attr("transform",e=>`translate(${e.x},${e.y})`).select("circle").attr("r",e=>e.r)}));let s=e.selectAll(".node").data(u).enter().append("g").attr("class","node").call(d3.drag().on("start",e=>{d3.event.active||d.alphaTarget(.2).restart(),e.fx=e.x,e.fy=e.y}).on("drag",e=>{e.fx=d3.event.x,e.fy=d3.event.y}).on("end",e=>{d3.event.active||d.alphaTarget(0),e.fx=null,e.fy=null}));s.append("circle").attr("id",e=>e.id).attr("r",0).style("fill",e=>o(e.cat)).style("opacity",.7).transition().duration(300).tween("circleIn",e=>{let n=d3.interpolateNumber(0,e.radius);return t=>{e.r=n(t),d.force("collide",d3.forceCollide(e=>e.r))}}),s.append("clipPath").attr("id",e=>`clip-${e.id}`).append("use").attr("xlink:href",e=>`#${e.id}`),s.filter(e=>!String(e.name)).append("text").classed("node-icon",!0).attr("clip-path",e=>`url(#clip-${e.id})`).selectAll("tspan").data(e=>e.icon.split(";")).enter(),s.filter(e=>String(e.name)).append("image").classed("node-icon",!0).attr("clip-path",e=>`url(#clip-${e.id})`).attr("xlink:href",e=>e.icon).attr("x",e=>.9*-e.radius).attr("y",e=>.9*-e.radius).attr("height",e=>2*e.radius*.9).attr("width",e=>2*e.radius*.9),c()(o,e),s.append("foreignObject").classed("circle-overlay hidden",!0).attr("x",-220).attr("y",-80).attr("height",280).attr("width",440).append("xhtml:div").classed("circle-overlay__inner",!0).append("h2").classed("circle-overlay__title",!0).text(e=>e.name),l()(s,void 0,d,a,i)}()})}]);
//# sourceMappingURL=main.js.map