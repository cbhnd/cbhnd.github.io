(this.webpackJsonpmanito=this.webpackJsonpmanito||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),i=a.n(n),c=a(8),l=a.n(c),r=(a(14),a(15),a(3)),d=a(4),o=a(2),h=a(6),b=a(5),u=a.p+"static/media/loading.dd12b6d2.gif",j=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"error",children:this.props.message})}}]),a}(i.a.Component),m=["\ud574\ub864\ub4dc","\uc601\uc7ac","\ubca4","\uc7ac\uc5fd","\uc608\uc2ac","\uc815\ud604","\ub3d9\uc740","\ub178\uc5d8","\ud61c\ub9ac","\uc8fc\uc6d0","\uc138\uc5f0","\uc608\uc6d0"],O={"\ud574\ub864\ub4dc":1,"\uc601\uc7ac":2,"\ubca4":3,"\uc7ac\uc5fd":4,"\uc608\uc2ac":5,"\uc815\ud604":6,"\ub3d9\uc740":7,"\ub178\uc5d8":8,"\ud61c\ub9ac":9,"\uc8fc\uc6d0":10,"\uc138\uc5f0":11,"\uc608\uc6d0":12},g={3:7,8:5,1:8,9:4,7:12,12:6,10:1,2:9,5:3,4:10,11:2,6:11},C={"\ud574\ub864\ub4dc":"PZKPJ","\uc601\uc7ac":"OMF89","\ubca4":"CWYR4","\uc7ac\uc5fd":"U4AF6","\uc608\uc2ac":"PW52X","\uc815\ud604":"CD607","\ub3d9\uc740":"EN9FC","\ub178\uc5d8":"3HFVT","\ud61c\ub9ac":"TSVRC","\uc8fc\uc6d0":"T6BV5","\uc138\uc5f0":"ZBFZR","\uc608\uc6d0":"YFUWE"},x=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={ownName:"",resultAvailable:!1,manitoName:"",submitDisabled:!0,checkboxDisabled:!0,codeDisabled:!0,loading:!1,secretCode:"",error:!1,message:""},s.handleChange=s.handleChange.bind(Object(o.a)(s)),s.handleClick=s.handleClick.bind(Object(o.a)(s)),s.handleCheckbox=s.handleCheckbox.bind(Object(o.a)(s)),s.handleCode=s.handleCode.bind(Object(o.a)(s)),s}return Object(d.a)(a,[{key:"handleCode",value:function(e){var t=e.target.value;this.setState({secretCode:t})}},{key:"handleChange",value:function(e){if("default"!==e.target.value){var t=e.target.value,a=g[O[t]];this.setState({ownName:t,manitoName:m[a-1],checkboxDisabled:!1,codeDisabled:!1})}}},{key:"handleClick",value:function(){var e=this;this.state.secretCode===C[this.state.ownName]?(this.setState({loading:!0}),this.reveal=setTimeout((function(){return e.setState({loading:!1,resultAvailable:!0})}),8e3)):(this.setState({error:!0,message:"Wrong code. Try again."}),setTimeout((function(){return e.setState({secretCode:"",error:!1,message:""})}),2e3))}},{key:"handleCheckbox",value:function(e){this.setState({submitDisabled:!e.target.checked})}},{key:"render",value:function(){return this.state.loading?Object(s.jsx)("img",{alt:"loading",src:u}):this.state.resultAvailable&&!this.state.loading?Object(s.jsxs)("span",{children:["\ub2f9\uc2e0\uc740 ",Object(s.jsxs)("span",{className:"manito",children:[this.state.manitoName,"\ub2d8"]})," \uc758 \ub9c8\ub2c8\ub610 \uc785\ub2c8\ub2e4."]}):Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"\ubcf8\uc778 \uc774\ub984\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694"}),Object(s.jsxs)("select",{className:"select-css",onChange:this.handleChange,defaultValue:"default",children:[Object(s.jsx)("option",{value:"default",disabled:!0,children:"Select"}),m.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))]}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{className:"input",onChange:this.handleCode,placeholder:"\ube44\ubc00\ucf54\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",disabled:this.state.codeDisabled,value:this.state.secretCode,required:!0}),Object(s.jsx)("br",{}),this.state.error?Object(s.jsx)(j,{message:this.state.message}):Object(s.jsx)("div",{className:"error",children:" "}),Object(s.jsx)("input",{className:"checkbox",type:"checkbox",disabled:this.state.checkboxDisabled,onChange:this.handleCheckbox,required:!0})," \uc81c \uc774\ub984\uc774 \ud655\uc2e4\ud569\ub2c8\ub2e4",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"button",disabled:this.state.submitDisabled,onClick:this.handleClick,children:"Submit"})]})}}]),a}(i.a.Component);var v=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("header",{className:"App-header",children:Object(s.jsx)(x,{})})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),i(e),c(e)}))};l.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.3867079a.chunk.js.map