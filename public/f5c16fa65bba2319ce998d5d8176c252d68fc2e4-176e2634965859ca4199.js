"use strict";(self.webpackChunkonschool_demo=self.webpackChunkonschool_demo||[]).push([[545],{2729:function(e){const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,i=new RegExp("^"+o.source),s=new RegExp(o.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):o(e);return e!==o(e)&&(e=((e,a,n)=>{let o=!1,i=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];o&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),o=!1,s=i,i=!0,l++):i&&s&&r.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=i,i=!1,o=!0):(o=a(c)===c&&n(c)!==c,s=i,i=n(c)===c&&a(c)!==c)}return e})(e,o,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,o):o(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,r)=>t(r))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,r){r.d(t,{G:function(){return q},L:function(){return m},M:function(){return S},P:function(){return k},S:function(){return H},_:function(){return s},a:function(){return i},b:function(){return d},c:function(){return c},g:function(){return g},h:function(){return l}});r(6910);var a=r(6540),n=(r(2729),r(5556)),o=r.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t.indexOf(r=o[a])>=0||(n[r]=e[r]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,r){const a={};let n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}function d(e,t,r,a,n){return void 0===n&&(n={}),i({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function g(e,t,r,a,n,o,s,l){const c={};o&&(c.backgroundColor=o,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=o,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],f=function(e){let{layout:t,width:r,height:n}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,r=s(e,p);return a.createElement(a.Fragment,null,a.createElement(f,i({},r)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){let{src:t,srcSet:r,loading:n,alt:o="",shouldLoad:l}=e,c=s(e,h);return a.createElement("img",i({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:o}))},b=function(e){let{fallback:t,sources:r=[],shouldLoad:n=!0}=e,o=s(e,y);const l=o.sizes||(null==t?void 0:t.sizes),c=a.createElement(v,i({},o,t,{sizes:l,shouldLoad:n}));return r.length?a.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:o}=e;return a.createElement("source",{key:t+"-"+o+"-"+r,type:o,media:t,srcSet:n?r:void 0,"data-srcset":n?void 0:r,sizes:l})})),c):c};var w;v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],k=function(e){let{fallback:t}=e,r=s(e,E);return t?a.createElement(b,i({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",i({},r))};k.displayName="Placeholder",k.propTypes={fallback:n.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const S=function(e){return a.createElement(a.Fragment,null,a.createElement(b,i({},e)),a.createElement("noscript",null,a.createElement(b,i({},e,{shouldLoad:!0}))))};S.displayName="MainImage",S.propTypes=b.propTypes;const x=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],L=e=>e.replace(/\n/g,""),I=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),i=3;i<a;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},T={image:o().object.isRequired,alt:I},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],A=["style","className"],j=new Set;let O,R;const _=function(e){let{as:t="div",image:n,style:o,backgroundColor:c,className:d,class:g,onStartLoad:p,onLoad:f,onError:m}=e,h=s(e,N);const{width:y,height:v,layout:b}=n,w=u(y,v,b),{style:E,className:k}=w,S=s(w,A),x=(0,a.useRef)(),C=(0,a.useMemo)((()=>JSON.stringify(n.images)),[n.images]);g&&(d=g);const L=function(e,t,r){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(b,y,v);return(0,a.useEffect)((()=>{O||(O=r.e(108).then(r.bind(r,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(C);if(R&&j.has(C))return;let t,a;return O.then((e=>{let{renderImageToString:r,swapPlaceholderImage:s}=e;x.current&&(x.current.innerHTML=r(i({isLoading:!0,isLoaded:j.has(C),image:n},h)),j.has(C)||(t=requestAnimationFrame((()=>{x.current&&(a=s(x.current,C,j,o,p,f,m))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[n]),(0,a.useLayoutEffect)((()=>{j.has(C)&&R&&(x.current.innerHTML=R(i({isLoading:j.has(C),isLoaded:j.has(C),image:n},h)),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}))}),[n]),(0,a.createElement)(t,i({},S,{style:i({},E,o,{backgroundColor:c}),className:k+(d?" "+d:""),ref:x,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},q=(0,a.memo)((function(e){return e.image?(0,a.createElement)(_,e):null}));q.propTypes=T,q.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function P(e){return function(t){let{src:r,__imageData:n,__error:o}=t,l=s(t,z);return o&&console.warn(o),n?a.createElement(e,i({image:n},l)):(console.warn("Image not loaded",r),null)}}const M=P((function(e){let{as:t="div",className:r,class:n,style:o,image:l,loading:c="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:v}=e,b=s(e,x);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(r=n),f=i({objectFit:y,objectPosition:v,backgroundColor:h},f);const{width:w,height:E,layout:I,images:T,placeholder:N,backgroundColor:A}=l,j=u(w,E,I),{style:O,className:R}=j,_=s(j,C),q={fallback:void 0,sources:[]};return T.fallback&&(q.fallback=i({},T.fallback,{srcSet:T.fallback.srcSet?L(T.fallback.srcSet):void 0})),T.sources&&(q.sources=T.sources.map((e=>i({},e,{srcSet:L(e.srcSet)})))),a.createElement(t,i({},_,{style:i({},O,o,{backgroundColor:h}),className:R+(r?" "+r:"")}),a.createElement(m,{layout:I,width:w,height:E},a.createElement(k,i({},g(N,!1,I,w,E,A,y,v))),a.createElement(S,i({"data-gatsby-image-ssr":"",className:p},b,d("eager"===c,!1,q,c,f)))))})),W=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},F=new Set(["fixed","fullWidth","constrained"]),D={src:o().string.isRequired,alt:I,width:W,height:W,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};M.displayName="StaticImage",M.propTypes=D;const H=P(q);H.displayName="StaticImage",H.propTypes=D},2217:function(e,t,r){var a=r(9039);e.exports=function(e,t){var r=[][e];return!!r&&a((function(){r.call(null,t||function(){return 1},1)}))}},7680:function(e,t,r){var a=r(9504);e.exports=a([].slice)},4488:function(e,t,r){var a=r(7680),n=Math.floor,o=function(e,t){var r=e.length;if(r<8)for(var i,s,l=1;l<r;){for(s=l,i=e[l];s&&t(e[s-1],i)>0;)e[s]=e[--s];s!==l++&&(e[s]=i)}else for(var c=n(r/2),u=o(a(e,0,c),t),d=o(a(e,c),t),g=u.length,p=d.length,f=0,m=0;f<g||m<p;)e[f+m]=f<g&&m<p?t(u[f],d[m])<=0?u[f++]:d[m++]:f<g?u[f++]:d[m++];return e};e.exports=o},6955:function(e,t,r){var a=r(2140),n=r(4901),o=r(2195),i=r(8227)("toStringTag"),s=Object,l="Arguments"===o(function(){return arguments}());e.exports=a?o:function(e){var t,r,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(r){}}(t=s(e),i))?r:l?o(t):"Object"===(a=o(t))&&n(t.callee)?"Arguments":a}},4606:function(e,t,r){var a=r(6823),n=TypeError;e.exports=function(e,t){if(!delete e[t])throw new n("Cannot delete property "+a(t)+" of "+a(e))}},3709:function(e,t,r){var a=r(2839).match(/firefox\/(\d+)/i);e.exports=!!a&&+a[1]},3763:function(e,t,r){var a=r(2839);e.exports=/MSIE|Trident/.test(a)},3607:function(e,t,r){var a=r(2839).match(/AppleWebKit\/(\d+)\./);e.exports=!!a&&+a[1]},2140:function(e,t,r){var a={};a[r(8227)("toStringTag")]="z",e.exports="[object z]"===String(a)},655:function(e,t,r){var a=r(6955),n=String;e.exports=function(e){if("Symbol"===a(e))throw new TypeError("Cannot convert a Symbol value to a string");return n(e)}},6910:function(e,t,r){var a=r(6518),n=r(9504),o=r(9306),i=r(8981),s=r(6198),l=r(4606),c=r(655),u=r(9039),d=r(4488),g=r(2217),p=r(3709),f=r(3763),m=r(9519),h=r(3607),y=[],v=n(y.sort),b=n(y.push),w=u((function(){y.sort(void 0)})),E=u((function(){y.sort(null)})),k=g("sort"),S=!u((function(){if(m)return m<70;if(!(p&&p>3)){if(f)return!0;if(h)return h<603;var e,t,r,a,n="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(a=0;a<47;a++)y.push({k:t+a,v:r})}for(y.sort((function(e,t){return t.v-e.v})),a=0;a<y.length;a++)t=y[a].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));a({target:"Array",proto:!0,forced:w||!E||!k||!S},{sort:function(e){void 0!==e&&o(e);var t=i(this);if(S)return void 0===e?v(t):v(t,e);var r,a,n=[],u=s(t);for(a=0;a<u;a++)a in t&&b(n,t[a]);for(d(n,function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:c(t)>c(r)?1:-1}}(e)),r=s(n),a=0;a<r;)t[a]=n[a++];for(;a<u;)l(t,a++);return t}})}}]);
//# sourceMappingURL=f5c16fa65bba2319ce998d5d8176c252d68fc2e4-176e2634965859ca4199.js.map