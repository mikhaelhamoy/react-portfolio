(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){var i={"./0.jpg":16,"./1.jpg":17,"./2.jpg":18,"./3.jpg":19,"./4.jpg":20,"./5.jpg":21};function a(e){var t=n(e);return c(t)}function n(e){if(!c.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=n,e.exports=a,a.id=15},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/0.65544e99.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/1.e859eb10.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/2.7b99559a.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/3.df6e23e0.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/4.efa0082e.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/5.8cb3a693.jpg"},function(e,t,c){"use strict";c.r(t);var i=c(1),a=c.n(i),n=c(7),s=c.n(n),r=(c(12),c(3)),l=(c(13),c(0));var o=function(e){var t=e.navComponentSelected,c=e.setNavComponentSelected;return Object(l.jsxs)("header",{className:"flex-row px-1",children:[Object(l.jsx)("h2",{children:Object(l.jsx)("a",{"data-testid":"link",href:"/",children:"Mikhael Hamoy"})}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"flex-row",children:[Object(l.jsx)("li",{className:"mx-2 ".concat("about"===t&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return c("about")},children:"About me"})}),Object(l.jsx)("li",{className:"mx-2 ".concat("portfolio"===t&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return c("portfolio")},children:"Porfolio"})}),Object(l.jsx)("li",{className:"mx-2 ".concat("contact"===t&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return c("contact")},children:"Contact"})}),Object(l.jsx)("li",{className:"mx-2 ".concat("resume"===t&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return c("resume")},children:"Resume"})})]})})]})},j=c.p+"static/media/avatar.8d110c4b.jpg";var m=function(){return Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsx)("h1",{children:"About me"}),Object(l.jsx)("img",{src:j,className:"my-2",style:{width:"25%"},alt:"cover"}),Object(l.jsx)("p",{children:"Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})},h=c(4),u=c(6);var d=function(){var e=Object(i.useState)({name:"",email:"",message:""}),t=Object(r.a)(e,2),c=t[0],a=t[1],n=c.name,s=c.email,o=c.message,j=Object(i.useState)(""),m=Object(r.a)(j,2),d=m[0],b=m[1];function p(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),b(t?"":"Your email is invalid.")}else e.target.value.length?b(""):b("".concat(e.target.name," is required."));d||a(Object(u.a)(Object(u.a)({},c),{},Object(h.a)({},e.target.name,e.target.value)))}return Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsx)("h1",{children:"Contact me"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(c)},children:[Object(l.jsxs)("div",{className:"my-1",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:n,onBlur:p})]}),Object(l.jsxs)("div",{className:"my-1",children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:s,onBlur:p})]}),Object(l.jsxs)("div",{className:"my-1",children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",defaultValue:o,onBlur:p})]}),d&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:d})}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]})]})},b=c(2);var p=function(){return Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsx)("h1",{children:"Portfolio"}),Object(l.jsx)("div",{className:"flex-row",children:[{title:"The Tech Blog",application:"https://mlhamoy-tech-blog.herokuapp.com/",github:"https://github.com/mikhaelhamoy/challenge-week-14"},{title:"Just Tech News",application:"https://mhamoy-just-tech-news.herokuapp.com/",github:"https://github.com/mikhaelhamoy/just-tech-news"},{title:"Note Taker",application:"https://challenge-week-11.herokuapp.com/",github:"https://github.com/mikhaelhamoy/challenge-week-11"},{title:"Zoo Keepr",application:"https://enigmatic-citadel-65537.herokuapp.com/",github:"https://github.com/mikhaelhamoy/zookeepr"},{title:"Weather Dashboard",application:"https://mikhaelhamoy.github.io/challenge-week-6/",github:"https://github.com/mikhaelhamoy/challenge-week-6"},{title:"Git it Done",application:"https://mikhaelhamoy.github.io/git-it-done/",github:"https://github.com/mikhaelhamoy/git-it-done"}].map((function(e,t){var i=e.title,a=e.application,n=e.github;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h5",{children:[Object(l.jsx)("a",{className:"mx-2 projectLink",href:a,target:"_blank",rel:"noreferrer noopener",children:i}),Object(l.jsx)("a",{className:"projectLink",href:n,target:"_blank",rel:"noreferrer noopener",children:Object(l.jsx)(b.a,{})})]}),Object(l.jsx)("img",{src:c(15)("./".concat(t,".jpg")).default,alt:i,className:"img-thumbnail mx-1"},i)]})}))})]})};var x=function(){return Object(l.jsxs)("footer",{className:"flex-row px-1",children:[Object(l.jsx)("a",{className:"mx-1 myLink",href:"https://github.com/mikhaelhamoy",target:"_blank",rel:"noreferrer noopener",children:Object(l.jsx)(b.a,{})}),Object(l.jsx)("a",{className:"mx-1 myLink",href:"https://linkedin.com/in/mikhaelhamoy917",target:"_blank",rel:"noreferrer noopener",children:Object(l.jsx)(b.b,{})}),Object(l.jsx)("a",{className:"mx-1 myLink",href:"https://twitter.com/gagz092",target:"_blank",rel:"noreferrer noopener",children:Object(l.jsx)(b.c,{})})]})},O=c.p+"static/media/mikhael-hamoy-resume.2bebde1e.pdf";var f=function(){return Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsx)("h1",{children:"Resume"}),Object(l.jsx)("a",{className:"downloadLink mx-2",href:O,download:!0,children:"Download resume"}),Object(l.jsxs)("div",{className:"my-5 mx-2",children:[Object(l.jsx)("h4",{children:"Front-end Proficiency"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"HTML"}),Object(l.jsx)("li",{children:"CSS"}),Object(l.jsx)("li",{children:"Javascript"}),Object(l.jsx)("li",{children:"responsive design"}),Object(l.jsx)("li",{children:"React"}),Object(l.jsx)("li",{children:"Bootstrap"})]})]}),Object(l.jsxs)("div",{className:"my-5 mx-2",children:[Object(l.jsx)("h4",{children:"Back-end Proficiency"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"APIs"}),Object(l.jsx)("li",{children:"Node"}),Object(l.jsx)("li",{children:"Express"}),Object(l.jsx)("li",{children:"MySQL, Sequelize"}),Object(l.jsx)("li",{children:"MOngoDB, Mongoose"}),Object(l.jsx)("li",{children:"REST"})]})]})]})};var g=function(){var e=Object(i.useState)("about"),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{navComponentSelected:c,setNavComponentSelected:a}),Object(l.jsxs)("main",{children:[{about:Object(l.jsx)(m,{}),contact:Object(l.jsx)(d,{}),portfolio:Object(l.jsx)(p,{}),resume:Object(l.jsx)(f,{})}[c],Object(l.jsx)(x,{})]})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,23)).then((function(t){var c=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),i(e),a(e),n(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),v()}],[[22,1,2]]]);
//# sourceMappingURL=main.e0c9c437.chunk.js.map