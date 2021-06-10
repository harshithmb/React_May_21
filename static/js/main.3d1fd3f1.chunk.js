(this["webpackJsonpapp-routing"]=this["webpackJsonpapp-routing"]||[]).push([[0],{106:function(e,a,t){},183:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(30),c=t.n(r),j=(t(106),t(107),t(108),t(35)),l=t(11),b=t(5),i=function(){return Object(b.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark p-2",children:[Object(b.jsx)("span",{className:"navbar-brand",children:"Routing"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("ul",{class:"navbar-nav ms-auto",children:[Object(b.jsx)("li",{className:"nav-item active",children:Object(b.jsx)(j.b,{to:"/",className:"nav-link",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.b,{to:"/contact",className:"nav-link",children:"Contact"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.b,{to:"/about",className:"nav-link",children:"About"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.b,{to:"/signin",className:"nav-link",children:"Sign In"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(j.b,{to:"/signup",className:"nav-link",children:"Sign Up"})})]})]})},o=function(){return Object(b.jsx)("h1",{children:"Home"})},m=function(){return Object(b.jsx)("h1",{children:"About"})},d=function(){return Object(b.jsx)("h1",{children:"Contact"})},u=t(47),O=t(186),x=t(188),h=t(187),p=t(99),g={labelCol:{span:8},wrapperCol:{span:16}},v={required:"${label} is required!",types:{email:"${label} is not a valid email!",number:"${label} is not a valid number!"},number:{range:"${label} must be between ${min} and ${max}"}},w=function(){return Object(b.jsxs)(O.a,Object(u.a)(Object(u.a)({},g),{},{name:"nest-messages",onFinish:function(e){console.log(e)},validateMessages:v,children:[Object(b.jsx)(O.a.Item,{name:["user","name"],label:"Name",rules:[{required:!0}],children:Object(b.jsx)(x.a,{})}),Object(b.jsx)(O.a.Item,{name:["user","email"],label:"Email",rules:[{type:"email"}],children:Object(b.jsx)(x.a,{})}),Object(b.jsx)(O.a.Item,{name:["user","age"],label:"Age",rules:[{type:"number",min:0,max:99}],children:Object(b.jsx)(h.a,{})}),Object(b.jsx)(O.a.Item,{name:["user","website"],label:"Website",children:Object(b.jsx)(x.a,{})}),Object(b.jsx)(O.a.Item,{name:["user","introduction"],label:"Introduction",children:Object(b.jsx)(x.a.TextArea,{})}),Object(b.jsx)(O.a.Item,{wrapperCol:Object(u.a)(Object(u.a)({},g.wrapperCol),{},{offset:8}),children:Object(b.jsx)(p.a,{type:"primary",htmlType:"submit",children:"Submit"})})]}))},A=function(){return Object(b.jsx)("div",{className:"m-4 d-flex justify-content-center",children:Object(b.jsx)("img",{src:"data:image/png;base64,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",alt:"404 Page",style:{width:"50vw"}})})},y=t(67),F=function(){var e=Object(n.useState)(""),a=Object(y.a)(e,2),t=a[0],s=a[1],r=Object(n.useState)(""),c=Object(y.a)(r,2),j=c[0],i=c[1],o=Object(n.useState)(!1),m=Object(y.a)(o,2),d=m[0],u=m[1],O="ABCD",x="QQQQ",h=function(e){console.log(e.target.value,e.target.name),"username"===e.target.name&&s(e.target.value),"password"===e.target.name&&i(e.target.value)};return Object(b.jsxs)("div",{className:"d-flex justify-content-center",children:[d&&Object(b.jsx)(l.a,{to:"/"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O===t&&x===j&&(u(!0),window.localStorage.setItem("username",t),window.localStorage.setItem("password",j))},children:[Object(b.jsx)("label",{children:"User Name"}),Object(b.jsx)("input",{type:"text",name:"username",value:t,placeholder:"Enter Username",onChange:h}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",value:j,placeholder:"Enter Password",onChange:h}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit"})]})]})},W=function(){return Object(b.jsxs)(j.a,{children:[Object(b.jsx)(i,{}),Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{path:"/",exact:!0,component:o}),Object(b.jsx)(l.b,{path:"/about",component:m}),Object(b.jsx)(l.b,{path:"/contact",component:d}),Object(b.jsx)(l.b,{path:"/signup",component:w}),Object(b.jsx)(l.b,{path:"/signin",component:F}),Object(b.jsx)(l.b,{component:A})]})]})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,190)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(W,{})}),document.getElementById("root")),N()}},[[183,1,2]]]);
//# sourceMappingURL=main.3d1fd3f1.chunk.js.map