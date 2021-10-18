(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),o=a.n(c),r=a(15),l=a.n(r),n=(a(22),a(10)),s=(a(23),a(8)),i=a(2),d=a(0);function h(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(s.b,{className:"navbar-brand",to:"/",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(s.b,{className:"nav-link active","aria-current":"page",to:"",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(s.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-primary",type:"submit",children:"Search"})]}),Object(d.jsxs)("div",{className:"form-check form-switch mx-2 text-".concat("light"===e.mode?"dark":"light"),children:[Object(d.jsx)("input",{className:"form-check-input",onClick:e.togglemode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(d.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable dark mode"})]})]})]})})}function b(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"#000865":"white",backgroundColor:"light"===e.mode?"white":"black"},children:[Object(d.jsx)("h2",{className:"my-2",children:"About Us"}),Object(d.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(d.jsxs)("div",{className:"accordion-item",children:[Object(d.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(d.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:{color:"light"===e.mode?"#000865":"white",backgroundColor:"light"===e.mode?"white":"#000865"},children:Object(d.jsx)("strong",{children:" Analyze Your text "})})}),Object(d.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(d.jsx)("div",{className:"accordion-body",style:{color:"light"===e.mode?"#000865":"white",backgroundColor:"light"===e.mode?"white":"hsl(240deg 100% 9%)"},children:"Text utils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or many other things."})})]}),Object(d.jsxs)("div",{className:"accordion-item",children:[Object(d.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(d.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:{color:"light"===e.mode?"#000865":"white",backgroundColor:"light"===e.mode?"white":"#000865"},children:Object(d.jsx)("strong",{children:"Free to use"})})}),Object(d.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(d.jsx)("div",{className:"accordion-body",style:{color:"light"===e.mode?"#000865":"white",backgroundColor:"light"===e.mode?"white":"hsl(240deg 100% 9%)"},children:"Textutils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit."})})]}),Object(d.jsxs)("div",{className:"accordion-item",children:[Object(d.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(d.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:{color:"light"===e.mode?"#000865":"white",backgroundColor:"light"===e.mode?"white":"#000865"},children:Object(d.jsx)("strong",{children:"Browser Compatible"})})}),Object(d.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(d.jsx)("div",{className:"accordion-body",style:{color:"light"===e.mode?"#000865":"white",backgroundColor:"light"===e.mode?"white":"hsl(240deg 100% 9%)"},children:"This word counter software works in any web browser such as chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document. essays, etc..."})})]})]})]})})}function m(e){var t=Object(c.useState)(""),a=Object(n.a)(t,2),o=a[0],r=a[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{style:{color:"light"===e.mode?"#000865":"white"},children:[Object(d.jsx)("h2",{className:"mx-4",children:e.heading}),Object(d.jsx)("div",{className:"form-group mb-3",children:Object(d.jsx)("textarea",{className:"form-control",style:{backgroundColor:"light"===e.mode?"white":"hsl(240deg 100% 9%)",color:"light"===e.mode?"#000865":"white"},id:"MyBox",value:o,placeholder:"Enter the text here",onChange:function(e){console.log("On Change"),r(e.target.value)},rows:"8"})}),Object(d.jsx)("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){console.log("UpperCase was clicked"+o.toUpperCase()),r(o.toUpperCase())},children:"convert to uppercase"}),Object(d.jsx)("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){console.log("UpperCase was clicked"+o.toLowerCase()),r(o.toLowerCase())},children:"convert to Lowercase"}),Object(d.jsx)("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){var e=o.split(/[ ]+/);r(e.join(" "))},children:"Remove Extra Space"}),Object(d.jsx)("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){r(o.toLowerCase());for(var e=o.split(""),t=0;t<o.length;t++)0===t&&" "!=e[t]||" "!=e[t]&&" "==e[t-1]&&"."==e[t-2]?e[t]>="a"&&e[t]<="z"&&(e[t]=String.fromCharCode(e[t].charCodeAt(0)-"a".charCodeAt(0)+"A".charCodeAt(0))):e[t]>="A"&&e[t]<="Z"&&(e[t]=String.fromCharCode(e[t].charCodeAt(0)+"a".charCodeAt(0)-"A".charCodeAt(0)));var a=e.join("");r(a)},children:"Rearrange the text"}),Object(d.jsx)("button",{className:"btn btn-primary mx-2 my-1",id:"Mybox",onClick:function(){var e=document.querySelector("#MyBox").innerHTML;console.log(e),document.getSelection(e),navigator.clipboard.writeText(e),document.getSelection().removeAllRanges(),console.log("I am copy")},children:"Copy Text"})]}),Object(d.jsxs)("div",{className:"container my-3",style:{color:"light"===e.mode?"#000865":"white"},children:[Object(d.jsx)("h3",{children:"Your text summary"}),Object(d.jsxs)("p",{children:[o.split(" ").filter((function(e){return 0!==e.length})).length," words and ",o.length," characters"]}),Object(d.jsxs)("p",{children:[.008*o.split(" ").filter((function(e){return 0!==e.length})).length," minutes read"]}),Object(d.jsx)("h4",{children:"Preview"}),Object(d.jsx)("p",{children:o})]})]})}var j=function(){var e=Object(c.useState)("light"),t=Object(n.a)(e,2),a=t[0],o=t[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(s.a,{children:[Object(d.jsx)(h,{title:"text utils",aboutText:"about",togglemode:function(){"light"===a?(o("dark"),document.body.style.backgroundColor="#000865"):(o("light"),document.body.style.backgroundColor="white")},mode:a}),Object(d.jsx)("div",{className:"container my-3",children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/about",children:Object(d.jsx)(b,{mode:a})}),Object(d.jsx)(i.a,{exact:!0,path:"/",children:Object(d.jsx)(m,{heading:"Try TextUtils-Word Counter, Character Counter, Remove Extraspace",mode:a})})]})})]})})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),c(e),o(e),r(e),l(e)}))};l.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),u()}},[[30,1,2]]]);
//# sourceMappingURL=main.9f5706cf.chunk.js.map