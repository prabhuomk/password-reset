(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{124:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(12),s=n.n(i),a=n(32),o=(n(124),n(266)),c=n(269),l=n(270),j=n(15),d=n(2);function b(){var e=Object(j.f)(),t=localStorage.getItem("token");console.log(t);return Object(d.jsx)("div",{children:Object(d.jsx)(o.a,{position:"sticky",children:Object(d.jsxs)(c.a,{style:{display:"flex",justifyContent:"space-between"},children:[Object(d.jsx)("div",{children:Object(d.jsx)("h3",{children:"GUVI_ZEN"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)(l.a,{onClick:function(){return e.push("/")},color:"inherit",children:"HOME"}),null===t?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.a,{onClick:function(){return e.push("/signup")},color:"inherit",children:"signup"}),Object(d.jsx)(l.a,{onClick:function(){return e.push("/login")},color:"inherit",children:"Login"})," "]}):Object(d.jsx)(l.a,{onClick:function(){localStorage.removeItem("token"),e.push("/")},color:"inherit",children:"Logout"})]})]})})})}function u(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Build everlasting customer"}),Object(d.jsx)("h1",{children:" relationships with the "}),Object(d.jsx)("h1",{children:"world\u2019s favorite CRM"}),Object(d.jsx)("h3",{children:"GUVI CRM empowers a global network of over 250,000 businesses in 180 countries to convert"}),Object(d.jsxs)("h3",{children:[" ","more leads, engage with customers, and grow their revenue. Transform your business with the"]}),Object(d.jsx)("h3",{children:" world\u2019s favorite customer relationship management software."})]})}var h=n(17),O=n(21),p=n(271),v=n(26),x=n(274),m=n(272),f=n(64),g=n(27);function w(e){return Object(d.jsx)(m.a,Object(O.a)({elevation:6,variant:"filled"},e))}var y=g.a().shape({email_id:g.b().required(),firstname:g.b().required(),lastname:g.b().required(),password:g.b().required()});function k(){var e,t,n,i,s,a,o,c,b=Object(v.d)({resolver:Object(f.a)(y)}),u=b.register,m=b.handleSubmit,g=b.formState.errors,k=Object(j.f)(),S=Object(r.useState)(!1),C=Object(h.a)(S,2),T=C[0],_=C[1],N=function(e,t){"clickaway"!==t&&_(!1)};return Object(d.jsxs)("div",{className:"form",children:[Object(d.jsx)(p.a,Object(O.a)(Object(O.a)({id:"outlined-basic",label:"Enter the email_id",variant:"outlined"},u("email_id")),{},{error:null===g||void 0===g||null===(e=g.email_id)||void 0===e?void 0:e.message,helperText:null===g||void 0===g||null===(t=g.email_id)||void 0===t?void 0:t.message})),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(p.a,Object(O.a)(Object(O.a)({id:"outlined-basic",label:"Enter the firstname",variant:"outlined"},u("firstname")),{},{error:null===g||void 0===g||null===(n=g.firstname)||void 0===n?void 0:n.message,helperText:null===g||void 0===g||null===(i=g.firstname)||void 0===i?void 0:i.message})),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(p.a,Object(O.a)(Object(O.a)({id:"outlined-basic",label:"Enter the lastname",variant:"outlined"},u("lastname")),{},{error:null===g||void 0===g||null===(s=g.lastname)||void 0===s?void 0:s.message,helperText:null===g||void 0===g||null===(a=g.lastname)||void 0===a?void 0:a.message})),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(p.a,Object(O.a)(Object(O.a)({id:"outlined-basic",label:"create password",variant:"outlined"},u("password")),{},{error:null===g||void 0===g||null===(o=g.password)||void 0===o?void 0:o.message,helperText:null===g||void 0===g||null===(c=g.password)||void 0===c?void 0:c.message})),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(l.a,{onClick:m((function(e){_(!0),fetch("https://guvi-forget-password.herokuapp.com/user/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){_(!0),k.push("/login")}))})),variant:"contained",color:"primary",children:"SIGN UP"}),Object(d.jsx)(x.a,{open:T,autoHideDuration:2e3,onClose:N,children:Object(d.jsx)(w,{onClose:N,severity:"success",children:"signup successfully done"})})]})}function S(e){return Object(d.jsx)(m.a,Object(O.a)({elevation:6,variant:"filled"},e))}var C=g.a().shape({email_id:g.b().required(),password:g.b().required()});function T(){var e,t,n,i,s=Object(v.d)({resolver:Object(f.a)(C)}),a=s.register,o=s.handleSubmit,c=s.formState.errors,b=Object(j.f)(),u=Object(r.useState)(!1),m=Object(h.a)(u,2),g=m[0],w=m[1],y=function(e,t){"clickaway"!==t&&w(!1)};return Object(d.jsxs)("div",{className:"form",children:[Object(d.jsx)(p.a,Object(O.a)(Object(O.a)({id:"outlined-basic",label:"Enter your email_id",variant:"outlined"},a("email_id")),{},{error:null===c||void 0===c||null===(e=c.email_id)||void 0===e?void 0:e.message,helperText:null===c||void 0===c||null===(t=c.email_id)||void 0===t?void 0:t.message})),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(p.a,Object(O.a)(Object(O.a)({id:"outlined-basic",label:"enter the password",variant:"outlined"},a("password")),{},{error:null===c||void 0===c||null===(n=c.password)||void 0===n?void 0:n.message,helperText:null===c||void 0===c||null===(i=c.password)||void 0===i?void 0:i.message})),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{style:{cursor:" pointer"},onClick:function(){return b.push("./forgetpassword")},children:"Forget Password"}),Object(d.jsx)(l.a,{onClick:o((function(e){fetch("https://guvi-forget-password.herokuapp.com/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.email_id?(localStorage.setItem("token",e.token),alert(e.message),b.push("/welcome")):alert(e.message)}))})),variant:"contained",color:"primary",children:"LOGIN"}),Object(d.jsx)(x.a,{open:g,autoHideDuration:2e3,onClose:y,children:Object(d.jsx)(S,{onClose:y,severity:"success",children:"login successfully"})})]})}function _(){var e=Object(r.useState)(),t=Object(h.a)(e,2),n=t[0],i=t[1];return Object(d.jsxs)("div",{className:"forget",children:[Object(d.jsx)(p.a,{id:"outlined-basic",label:"Enter the email",variant:"outlined",onChange:function(e){return i(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(l.a,{onClick:function(){fetch("https://guvi-forget-password.herokuapp.com/user/forgetpassword",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email_id:n})}).then((function(e){return e.json()})).then((function(e){alert(e.message)}))},variant:"contained",color:"primary",children:"SUBMIT"})]})}function N(){var e=Object(j.g)().id,t=Object(j.g)().token,n=Object(j.f)(),i=Object(r.useState)(),s=Object(h.a)(i,2),a=s[0],o=s[1];return Object(d.jsxs)("div",{className:"forget",children:[Object(d.jsx)(p.a,{id:"outlined-basic",label:"Enter the new password",variant:"outlined",onChange:function(e){return o(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(l.a,{onClick:function(){fetch("https://guvi-forget-password.herokuapp.com/user/resetpassword/".concat(e,"/").concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:a})}).then((function(e){return e.json()})).then((function(e){alert(e.message),n.push("/login")}))},variant:"contained",color:"primary",children:"SUBMIT"})]})}function I(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{}),Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{exact:!0,path:"/",children:Object(d.jsx)(u,{})}),Object(d.jsx)(j.a,{exact:!0,path:"/signup",children:Object(d.jsx)(k,{})}),Object(d.jsx)(j.a,{exact:!0,path:"/login",children:Object(d.jsx)(T,{})}),Object(d.jsx)(j.a,{exact:!0,path:"/welcome",children:Object(d.jsx)(u,{})}),Object(d.jsx)(j.a,{exact:!0,path:"/forgetpassword",children:Object(d.jsx)(_,{})}),Object(d.jsx)(j.a,{exact:!0,path:"/password-reset/:id/:token",children:Object(d.jsx)(N,{})})]})]})}var E=document.getElementById("root");s.a.render(Object(d.jsx)(r.StrictMode,{children:Object(d.jsx)(a.a,{children:Object(d.jsx)(I,{})})}),E)}},[[233,1,2]]]);
//# sourceMappingURL=main.f773252d.chunk.js.map