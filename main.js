(()=>{"use strict";var e={137:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(645),o=n.n(i)()((function(e){return e[1]}));o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),o.push([e.id,"body{font-family:Roboto;margin:0}h1{font-style:normal;font-weight:bold;font-size:32px;line-height:37px;color:#4e545c;margin:10px}h1.title{text-align:center;margin-bottom:10px}h2{font-style:normal;font-weight:normal;font-size:20px;line-height:21px;text-align:center;margin:5px}h3{font-style:normal;font-weight:normal;font-size:18px;line-height:21px;text-align:center;color:#4e545c;margin:5px}.header{background-color:#000401;height:70px}.header-nav{display:flex;height:100%;justify-content:flex-end;align-items:center}.header-nav .nav-item{color:#e5e8e8;font-size:24px;text-decoration:none;font-style:normal;font-weight:normal;line-height:28px;text-align:center;margin:10px}.section-profile{width:100%;display:flex;flex-direction:column;align-items:center;text-align:center}.section-profile h1{margin-top:50px}.section-profile hr{height:1px;background-color:#000401;width:50%;border-width:0;color:#000401;margin:30px 0px 30px 0px}.section-profile .icon{text-decoration:none}.section-profile .icon .icon-image{width:20px}.section-skills{display:flex;flex-flow:row wrap;margin-left:15%;margin-right:15%}.section-skills .skill{display:flex;justify-content:center;align-items:center;width:200px;height:200px;background-color:#8d9797;border-radius:15px;margin-left:50px;margin-bottom:50px}.section-projects{width:100%;display:flex;flex-direction:column;align-items:center;text-align:center}.section-projects .list-projects{display:flex;flex-flow:row wrap;margin-left:15%;margin-right:15%}.section-projects .list-projects .card-project{background-color:#e5e8e8;margin-left:50px;margin-bottom:50px;width:200px;height:200px}.section-projects .list-projects .card-project .__image{width:150px;height:200px;margin:5px}.section-projects .list-projects .card-project .__name{background-color:#4e545c;padding:5px 0px 5px 0px;margin:0;height:25%;display:flex;align-items:center;justify-content:center}.section-projects .list-projects .card-project .__name .__h2{color:#e5e8e8;font-weight:600}.section-projects .list-projects .card-project .content{height:50%}.section-projects .list-projects .card-project .content p{margin:1px}.section-projects .list-projects .card-project .content p.language{font-weight:bold}.section-projects .list-projects .card-project .social-networks{margin-top:5px;padding-top:5px;height:25%}.section-about{background-color:#000401;height:200px;display:flex;align-items:center;justify-content:center}.section-about .image-profile{border-radius:60px;height:120px;width:120px;margin:10px}.section-about .about{display:flex;align-items:center;justify-content:center}.section-about h1,.section-about h3{color:#e5e8e8}",""]);const r=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);i&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:(e,t,n)=>{var i,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function a(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},i=[],o=0;o<e.length;o++){var c=e[o],s=t.base?c[0]+t.base:c[0],l=n[s]||0,p="".concat(s," ").concat(l);n[s]=l+1;var d=a(p),h={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(r[d].references++,r[d].updater(h)):r.push({identifier:p,updater:m(h,t),references:1}),i.push(p)}return i}function s(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,p=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=p(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function h(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var g=null,u=0;function m(e,t){var n,i,o;if(t.singleton){var r=u++;n=g||(g=s(t)),i=d.bind(null,n,r,!1),o=d.bind(null,n,r,!0)}else n=s(t),i=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=a(n[i]);r[o].references--}for(var s=c(e,t),l=0;l<n.length;l++){var p=a(n[l]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}n=s}}}}},t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={id:i,exports:{}};return e[i](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=()=>'\n        <div class="Error404">\n            <h3>Error 404</h2>\n        </div>\n    ',t=e=>e.map((e=>`\n        <a href="${e.url}" class="icon" target="_blank">\n            <image src="/images/${e.icon}.svg" class="icon-image" />\n        </a>\n    `)).join(""),i=(e,n)=>`\n        <div class="section-profile">\n            <h1>${e.name}</h1>\n            ${n?`<h3>${e.email}</h3>`:`\n                <h3>${e.role}</h3>\n                <div class="social-networks">\n                    ${t(e.socialNetworks)}\n                </div>`}\n            \n            <hr>\n        </div>\n    `,o={profile:{name:"PLINIO JOSE GRIJALBA RAMIREZ",role:"DESARROLLADOR SENIOR",image:"https://avatars.githubusercontent.com/u/5834705?v=4",email:"pramirez966@gmail.com",socialNetworks:[{url:"https://www.linkedin.com/in/plinio-grijalba/",icon:"linkedin-icon"},{url:"https://www.linkedin.com/in/plinio-grijalba/",icon:"devto-icon"},{url:"https://www.linkedin.com/in/plinio-grijalba/",icon:"twitter-icon"},{url:"https://www.linkedin.com/in/plinio-grijalba/",icon:"github-icon"}]},skills:[{name:"nodejs",icon:"nodejs-logo",width:"110px",height:"110px"},{name:"mongodb",icon:"mongodb-logo",width:"120px",height:"130px"},{name:"angular",icon:"angular-logo",width:"110px",height:"110px"},{name:"react",icon:"react-logo",width:"150px",height:"110px"},{name:"mysql",icon:"mysql-logo",width:"140px",height:"130px"},{name:"cloud",icon:"cloud-logo",width:"190px",height:"120px"},{name:"html",icon:"html-logo",width:"130px",height:"120px"},{name:"css",icon:"css-logo",width:"120px",height:"110px"}]},r={"/":async()=>{const e=await(async()=>{try{const e=await fetch("https://api.github.com/users/plinio141/repos");let t=(await e.json()).map((e=>({name:e.name,description:e.description,language:e.language,updated_at:e.updated_at,created_at:e.created_at,socialNetworks:[{url:e.html_url,icon:"github-icon"}]})));return t=t.sort(((e,t)=>e.created_at<t.created_at?1:e.created_at>t.created_at?-1:0)),o.projects=t,o}catch(e){return console.error(e),[]}})();return`\n    ${i(e.profile)}\n    <div>\n        <h1 class="title">Skills</h1>\n        <div class="section-skills">\n            ${e.skills.map((e=>(e=>`\n        <div class="skill">\n            <image src="/images/${e.icon}.png" style="width: ${e.width}; height: ${e.height};"/>\n        </div>\n    `)(e))).join("")}\n        </div>\n    </div>\n    <div class="section-projects" id="projects">\n        <h1>Proyectos GIT</h1>\n        <div class="list-projects">\n            ${e.projects.map((e=>(e=>`\n        <div class="card-project">\n            <div class="__name">\n                <h2 class="__h2">${e.name}</h2>\n            </div>\n            <div class="content">\n                <p class="language">\n                    ${e.language}\n                </p>\n                ${e.description?`<p>${e.description}</p>`:""}\n            </div>\n            <div class="social-networks">\n                ${t(e.socialNetworks)}\n            </div>\n        </div>\n    `)(e))).join("")}\n        </div>\n    </div>\n    <div class="section-about" id="about">\n        ${n=e.profile,`\n        <div class="about">\n            <image class="image-profile" src="${n.image}"/>\n            ${i(n,!0)}\n        </div>\n    `}\n    </div>\n    `;var n},"/contact":"Contact"},a=async()=>{document.getElementById("header");const t=document.getElementById("content");let n=location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",i=await(e=>e.length<=3?"/"===e?e:"/:id":`/${e}`)(n),o=r[i]?r[i]:e;t.innerHTML=await o()};var c=n(379),s=n.n(c),l=n(137);s()(l.Z,{insert:"head",singleton:!1}),l.Z.locals,window.addEventListener("load",a),window.addEventListener("hashchange",a)})()})();