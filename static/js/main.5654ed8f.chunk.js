(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{55:function(e){e.exports=JSON.parse('[{"id":1,"name":"AppLab","description":"HTML/CSS,JavaScript","link":"https://hibanaga.github.io/AppLab.github.io/"},{"id":2,"name":"Tic Tac Toe","description":"JavaScript","link":"https://hibanaga.github.io/Tic_Tac_Toe/"},{"id":3,"name":"DaysChecker","description":"JavaScript","link":"https://hibanaga.github.io/DaysChecker/"},{"id":4,"name":"Shop template","description":"Webpack,JavaScript","link":"https://hibanaga.github.io/shopTemplateFinalBuild/"},{"id":5,"name":"Weather app","description":"API (openWeatherAPI),JavaScript","link":"https://hibanaga.github.io/simple_weatherApp/"},{"id":6,"name":"GitHub checker","description":"JavaScript,API(GitHubAPI),Webpack","link":"https://github.com/Hibanaga/GitHubAccountCheker"},{"id":7,"name":"Keyword Checker","description":"JavaScript","link":"https://hibanaga.github.io/CheckkeyWord_app_JS/"},{"id":8,"name":"Cinema Project","description":"API(CinemaDB),Webpack,JavaScript","link":"https://hibanaga.github.io/TemplateCinema/"},{"id":9,"name":"Prev.portfolio","description":"JavaScript,Webpack","link":"https://hibanaga.github.io/PortfolioTykhoniukVladyslav/"},{"id":10,"name":"Template Shop","description":"React,materialUI,Router,Lodash","link":"https://hibanaga.github.io/templateShopHibana/"}]')},63:function(e,a,t){},7:function(e,a){e.exports={home:"/VladyslavTykhoniukCV",about:"/about",work:"/work",contact:"/contact"}},75:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},92:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(29),c=t.n(n),s=t(0),i=t(3),o=t(17),r=t(18),l=t(20),d=t(19),h=t(24),j=t.n(h),p=(t(63),t(44)),b=t.n(p),u=t(8),m=t(106),g=t(15),O=t(7),x=t.n(O),k=t(1),v=function(e){Object(l.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).particlesInitial=function(){j.a.init({selector:".backgroundEffectAbout",maxParticles:120,color:"red",sizeVariations:5,speed:.1})},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("i18nextLng");g.a.changeLanguage(e),this.particlesInitial();new b.a(".techSkills",{strings:["React/Redux.","HTML5/CSS3.","JavaScript.","Webpack.","Lodash.","Node.js.","Express.js.","Yarn/npm.","MS SQL.","MySQL.","Axios.","Git.","MongoDB."],typeSpeed:40,loop:!0})}},{key:"render",value:function(){var e=this.props.t;return Object(k.jsxs)("div",{className:"wrapperAbout",children:[Object(k.jsx)("div",{className:"wrapperEffectsAbout",children:Object(k.jsx)("canvas",{className:"backgroundEffectAbout"})}),Object(k.jsxs)(u.b,{to:x.a.home,className:"linkToMainPage",children:["Vladysalv.",Object(k.jsx)("span",{className:"hiddenPartAboutLink",children:"About"})]}),Object(k.jsxs)("h1",{className:"titleAbout",children:["I'm a junior ",Object(k.jsx)("span",{className:"decorateNameTech",children:"front-end"})," ","developer"]}),Object(k.jsxs)("div",{className:"wrapperDescriptionAbout",children:[Object(k.jsxs)("span",{className:"descriptionAbout",children:[e("About.1")," ",Object(k.jsxs)("span",{className:"conceptColor",children:[" ",e("About.2")]}),". ",e("About.3")]}),Object(k.jsx)("span",{className:"descriptionAbout",children:e("About.11")}),Object(k.jsxs)("span",{className:"descriptionAbout",children:[e("About.12")," ",Object(k.jsx)("span",{className:"techSkills"})]}),Object(k.jsxs)("span",{className:"descriptionAbout",children:[e("About.13")," ",Object(k.jsx)("span",{className:"conceptColor",children:"SPA"}),",",e("About.14")," ",Object(k.jsx)("span",{className:"conceptColor",children:"PWA"})," ",e("About.15")]}),Object(k.jsx)("span",{className:"descriptionAbout",children:e("About.16")}),Object(k.jsxs)("h2",{className:"subTitleAbout",children:[e("About.18"),":"]}),Object(k.jsxs)("ol",{className:"finishedCoursesMenu menuIngredients",children:[Object(k.jsxs)("li",{className:"liItemEducation",children:["Pa\u0144stwowa Szko\u0142a Wy\u017csza im. Papie\u017ca Jana Paw\u0142a II w Bia\u0142ej Podlaskiej, ",Object(k.jsx)("span",{className:"yearsStyleColor",children:"2018 - now"})]}),Object(k.jsxs)("li",{className:"liItemEducation",children:["SkillUp, JavaScript Course"," ",Object(k.jsx)("span",{className:"yearsStyleColor",children:" 02.03.2021-06.07.2021"})]}),Object(k.jsxs)("li",{className:"liItemEducation",children:["COBIT5 Foundation"," ",Object(k.jsx)("span",{className:"yearsStyleColor",children:" 14.06.2021-17.06.2021 "})]})]})]})]})}}]),t}(s.Component),N=Object(m.a)()(v),f=(t(75),t(48)),C=t.n(f),y=function(e){Object(l.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={isActive:!1},e.handleClickSelectLanguage=function(a){e.props.onChangeLanguageHandler(a.target.dataset.source)},e.toggleDropdownMenu=function(){var a=e.state.isActive;e.setState({isActive:!a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.state.isActive,a=this.props.currentLanguage;return Object(k.jsx)("div",{className:"checkboxSelectLanguage",children:Object(k.jsxs)("div",{className:"dropDownMenu",children:[Object(k.jsx)("div",{className:"dropdownTitle",children:Object(k.jsxs)("h2",{className:e?"selectionCurrentLanguage selectionCurrentLanguageActive":"selectionCurrentLanguage",onClick:this.toggleDropdownMenu,children:["en"===a&&"English","ua"===a&&"Ukrainian","pl"===a&&"Polish",Object(k.jsx)(C.a,{className:"arrowDropDown"})]})}),Object(k.jsxs)("ul",{className:e?"hiddenMenu hiddenMenuOpen":"hiddenMenu",onClick:this.handleClickSelectLanguage,children:[Object(k.jsx)("li",{className:"liItemHidden","data-source":"en",children:"English"}),Object(k.jsx)("li",{className:"liItemHidden","data-source":"ua",children:"Ukrainian"}),Object(k.jsx)("li",{className:"liItemHidden","data-source":"pl",children:"Polish"})]})]})})}}]),t}(s.Component),S=function(e){Object(l.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={language:"en",speedPatricles:.1},e.partialInitial=function(){j.a.init({selector:".backgroundEffect",maxParticles:70,color:"red",sizeVariations:5,speed:.1})},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("i18nextLng");e&&(this.setState({language:e}),g.a.changeLanguage(e)),e||g.a.changeLanguage("en"),this.partialInitial()}},{key:"componentDidUpdate",value:function(e,a){var t=this.state.language;a.language!==this.state.language&&localStorage.setItem("i18nextLng",t)}},{key:"changeLanguageHandler",value:function(e){this.setState({language:e}),g.a.changeLanguage(e)}},{key:"render",value:function(){var e=this.props.t,a=this.state.language;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"wrapperEffectsHome",children:[Object(k.jsx)(y,{onChangeLanguageHandler:this.changeLanguageHandler.bind(this),currentLanguage:a}),Object(k.jsx)("canvas",{className:"backgroundEffect"})]}),Object(k.jsx)("main",{children:Object(k.jsxs)("ul",{className:"menuHome",children:[Object(k.jsx)(u.b,{to:x.a.about,children:Object(k.jsx)("li",{"data-hover":e("Presentation.10"),className:"title AboutPortfolio button",children:Object(k.jsx)("span",{className:"hiddenText",children:e("Presentation.1")})})}),Object(k.jsx)(u.b,{to:x.a.work,children:Object(k.jsx)("li",{"data-hover":e("Presentation.21"),className:"title worksPortfolio button works",children:Object(k.jsx)("span",{className:"hiddenText worksHidden",children:e("Presentation.2")})})}),Object(k.jsx)(u.b,{to:x.a.contact,children:Object(k.jsx)("li",{"data-hover":e("Presentation.32"),className:"title contactPortfolio button",children:Object(k.jsx)("span",{className:"hiddenText",children:e("Presentation.3")})})})]})})]})}}]),t}(s.Component),A=Object(m.a)()(S);var w=function(e){var a=e.description,t=e.link,n=e.name;return Object(k.jsxs)("a",{href:t,className:"projectInfoCard",children:[Object(k.jsx)("h2",{className:"titleProject",children:n}),Object(k.jsx)("span",{className:"descriptionProject",children:a})]})},L=(t(79),function(e){Object(l.a)(t,e);var a=Object(d.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(k.jsxs)("div",{className:"wrapperworks",children:[Object(k.jsxs)(u.b,{to:x.a.home,className:"linkToMainPage",children:["Vladysalv.",Object(k.jsx)("span",{className:"hiddenPartWorksLink",children:"works"})]}),Object(k.jsx)("div",{className:"wrapperProjectsList",children:this.props.assetsWorks.map((function(e){var a=e.id,t=e.description,n=e.link,c=e.name;return Object(k.jsx)(w,{description:t,link:n,name:c},a)}))})]})}}]),t}(s.Component)),I=(t(80),function(e){Object(l.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=a.call.apply(a,[this].concat(c))).state={emailToCopy:"vladtyhoniuk1999@gmail.com"},e.handleCopyEmail=function(a){navigator.clipboard.writeText(e.state.emailToCopy)},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("i18nextLng");g.a.changeLanguage(e),j.a.init({selector:".backgroundEffectContact",maxParticles:120,color:"red",sizeVariations:5,speed:.1})}},{key:"render",value:function(){var e=this.props.t;return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("div",{className:"wrapperContact",children:[Object(k.jsx)("div",{className:"wrapperBackgroundEffects",children:Object(k.jsx)("canvas",{className:"backgroundEffectContact"})}),Object(k.jsxs)(u.b,{to:x.a.home,className:"linkToMainPageContact",children:["Vladysalv.",Object(k.jsx)("span",{className:"hiddenPartContactLink",children:"contact"})]}),Object(k.jsxs)("h1",{className:"titleContact",children:[e("Contact.1")," ",Object(k.jsxs)("span",{className:"strongColorContact",children:[" ",e("Contact.2")]})," ",e("Contact.3")," ",Object(k.jsxs)("span",{className:"strongColorContact",children:[" ",e("Contact.4")]})]}),Object(k.jsxs)("div",{className:"descriptionContactWrapper",children:[Object(k.jsx)("span",{className:"descriptionContact",children:e("Contact.10")}),Object(k.jsx)("span",{className:"descriptionContact",children:e("Contact.20")}),Object(k.jsx)("span",{className:"descriptionContact",children:e("Contact.30")}),Object(k.jsx)("h2",{className:"subTitleContact",children:e("Contact.40")}),Object(k.jsxs)("ol",{className:"languageMenu menuIngredients",children:[Object(k.jsxs)("li",{className:"liItemLanguage",children:[e("Contact.41"),":"," ",Object(k.jsxs)("span",{className:"yearsStyleColor",children:[e("Contact.42"),";"]})]}),Object(k.jsxs)("li",{className:"liItemLanguage",children:[e("Contact.43"),":"," ",Object(k.jsxs)("span",{className:"yearsStyleColor",children:[e("Contact.44"),";"]})]}),Object(k.jsxs)("li",{className:"liItemLanguage",children:[e("Contact.45"),":"," ",Object(k.jsxs)("span",{className:"yearsStyleColor",children:[e("Contact.46"),"."]})]})]})]}),Object(k.jsxs)("h2",{className:"subtitleContactLinks",children:[e("Contact.50"),":"]}),Object(k.jsxs)("ul",{className:"menuLinks",children:[Object(k.jsx)("li",{className:"liItemSocial linkMail",onClick:this.handleCopyEmail}),Object(k.jsx)("li",{className:"liItemSocial",children:Object(k.jsx)("a",{href:"https://www.instagram.com/pagliacci_v/",rel:"noreferrer",target:"_blank",className:"liItemSocial",children:"Instagram"})}),Object(k.jsx)("li",{className:"liItemSocial",children:Object(k.jsx)("a",{href:"https://t.me/hibanaga",rel:"noreferrer",target:"_blank",className:"liItemSocial",children:"Telegram"})}),Object(k.jsx)("li",{className:"liItemSocial",children:Object(k.jsx)("a",{href:"https://www.linkedin.com/in/vlad-tykhoniuk-859865205/",rel:"noreferrer",target:"_blank",className:"liItemSocial",children:"LinkedIn"})}),Object(k.jsx)("li",{className:"liItemSocial",children:Object(k.jsx)("a",{href:"https://github.com/Hibanaga",rel:"noreferrer",target:"_blank",className:"liItemSocial",children:"GitHub"})})]})]})})}}]),t}(s.Component)),P=Object(m.a)()(I),T=t(33);function E(e){return{opacity:e.opacity,transform:"scale(".concat(e.scale,")")}}function M(e){return Object(T.b)(e,{stiffness:330,damping:22})}var H={atEnter:{opacity:0,scale:1.2},atLeave:{opacity:M(0),scale:M(.8)},atActive:{opacity:M(1),scale:M(1)}};var J=function(e){var a=e.assets;return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(T.a,{atEnter:H.atEnter,atLeave:H.atLeave,atActive:H.atActive,mapStyles:E,className:"route-wrapper",children:[Object(k.jsx)(i.a,{path:x.a.home,exact:!0,component:A}),Object(k.jsx)(i.a,{path:x.a.about,exact:!0,component:N}),Object(k.jsx)(i.a,{path:x.a.work,exact:!0,component:function(){return Object(k.jsx)(L,{assetsWorks:a})}}),Object(k.jsx)(i.a,{path:x.a.contact,exact:!0,component:P})]})})},D=t(50),W=(t(92),t(53)),V=t(27);console.log(window.location.pathname);var _={order:["navigator","htmlTag","path","subdomain"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupFromPathIndex:0,lookupFromSubdomainIndex:0,caches:["localStorage","cookie"],excludeCacheFor:["cimode"],cookieMinutes:10,cookieDomain:"myDomain",preload:!0,htmlTag:document.documentElement,checkWhitelist:!0};g.a.use(W.a).use(V.e).init({detection:_,backend:{loadPath:"/VladyslavTykhoniukCV/locales/{{lng}}/{{ns}}.json"},interpolation:{escapeValue:!1}});g.a;var F=t(55);c.a.render(Object(k.jsx)(u.a,{children:Object(k.jsx)(s.Suspense,{className:"loadedPage",fallback:Object(k.jsx)("div",{className:"wrapperLoader",children:Object(k.jsx)(D.JellyfishSpinner,{size:250,color:"#fff"})}),children:Object(k.jsx)(J,{assets:F})})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.5654ed8f.chunk.js.map