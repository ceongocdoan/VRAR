"use strict";(self.webpackChunkonschool_demo=self.webpackChunkonschool_demo||[]).push([[455],{39:function(M,e,t){t.d(e,{Y:function(){return a}});var N=t(1083);async function a(M){try{return{data:(await N.A.post("https://devonschool-cms.onschool.edu.vn/graphql",M,{headers:{"Content-Type":"application/json",Authorization:"Bearer c531da541bda63d7b160298dbabdf8013761240ff76dda4644726c4a740abe0b8320a229b24ae7fadd0a39412856a5555ccb09668c331e162d1105e784b179a539ed5e172f9f2edce89ce441fa4226f799f04b957ca60e26c78dd1809e4cfa11f53ce4a630f4a00fdb02d2badba50326d6b5b3481d8acb9c592b31f34403e523"}})).data.data}}catch(e){return{data:{},errors:[e]}}}},723:function(M,e,t){t.r(e),t.d(e,{Head:function(){return L},default:function(){return d}});var N=t(6540),a=t(5727),I=t(4794);var j=M=>{let{items:e}=M;return N.createElement("nav",{className:"flex gap-1.5 items-center self-start max-w-full truncate","aria-label":"Breadcrumb"},e.map(((M,t)=>N.createElement(N.Fragment,{key:M},t>0&&N.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",className:"shrink-0"},N.createElement("path",{d:"M4.70312 9.88916L8.7772 5.81509L4.70312 1.74101",stroke:"#667085",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})),N.createElement(I.Link,{to:"Home"===M?"/":"/blog",className:"self-stretch my-auto text-sm font-medium leading-[130%] text-[#475467] "+(t===e.length-1&&"truncate pointer-events-none")},M)))))};var D=M=>{let{category:e}=M;return N.createElement("div",{onClick:()=>{return M=e,void(0,I.navigate)("/blog/?category="+M);var M},className:"self-start px-2 py-1 text-base leading-6 whitespace-nowrap cursor-pointer bg-[#ECF3FF] rounded-[10px] text-[#475467]"},e)};var g=M=>{let{author:e,publishDate:t}=M;return N.createElement("div",{className:"flex flex-wrap gap-10 justify-between items-center px-3 py-6 mt-6 max-md:mt-4 w-full text-sm font-medium leading-5 border-y border-[#D0D5DD] text-[#667085] max-md:max-w-full"},N.createElement("div",{className:"flex items-center gap-1 self-stretch my-auto"},N.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGlkPSJ1c2VyLTAxIj4NCjxwYXRoIGlkPSJJY29uIiBkPSJNMjAgMjFDMjAgMTkuNjA0NCAyMCAxOC45MDY3IDE5LjgyNzggMTguMzM4OUMxOS40NCAxNy4wNjA1IDE4LjQzOTUgMTYuMDYgMTcuMTYxMSAxNS42NzIyQzE2LjU5MzMgMTUuNSAxNS44OTU2IDE1LjUgMTQuNSAxNS41SDkuNUM4LjEwNDQ0IDE1LjUgNy40MDY2NSAxNS41IDYuODM4ODYgMTUuNjcyMkM1LjU2MDQ1IDE2LjA2IDQuNTYwMDQgMTcuMDYwNSA0LjE3MjI0IDE4LjMzODlDNCAxOC45MDY3IDQgMTkuNjA0NCA0IDIxTTE2LjUgNy41QzE2LjUgOS45ODUyOCAxNC40ODUzIDEyIDEyIDEyQzkuNTE0NzIgMTIgNy41IDkuOTg1MjggNy41IDcuNUM3LjUgNS4wMTQ3MiA5LjUxNDcyIDMgMTIgM0MxNC40ODUzIDMgMTYuNSA1LjAxNDcyIDE2LjUgNy41WiIgc3Ryb2tlPSIjNjY3MDg1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9nPg0KPC9zdmc+DQo=",alt:e,className:"max-md:hidden"}),e),N.createElement("div",{className:"flex gap-1 items-center self-stretch my-auto"},N.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGlkPSJjYWxlbmRhciI+DQo8cGF0aCBpZD0iSWNvbiIgZD0iTTIxIDEwSDNNMTYgMlY2TTggMlY2TTcuOCAyMkgxNi4yQzE3Ljg4MDIgMjIgMTguNzIwMiAyMiAxOS4zNjIgMjEuNjczQzE5LjkyNjUgMjEuMzg1NCAyMC4zODU0IDIwLjkyNjUgMjAuNjczIDIwLjM2MkMyMSAxOS43MjAyIDIxIDE4Ljg4MDIgMjEgMTcuMlY4LjhDMjEgNy4xMTk4NCAyMSA2LjI3OTc2IDIwLjY3MyA1LjYzODAzQzIwLjM4NTQgNS4wNzM1NCAxOS45MjY1IDQuNjE0NiAxOS4zNjIgNC4zMjY5OEMxOC43MjAyIDQgMTcuODgwMiA0IDE2LjIgNEg3LjhDNi4xMTk4NCA0IDUuMjc5NzYgNCA0LjYzODAzIDQuMzI2OThDNC4wNzM1NCA0LjYxNDYgMy42MTQ2IDUuMDczNTQgMy4zMjY5OCA1LjYzODAzQzMgNi4yNzk3NiAzIDcuMTE5ODQgMyA4LjhWMTcuMkMzIDE4Ljg4MDIgMyAxOS43MjAyIDMuMzI2OTggMjAuMzYyQzMuNjE0NiAyMC45MjY1IDQuMDczNTQgMjEuMzg1NCA0LjYzODAzIDIxLjY3M0M1LjI3OTc2IDIyIDYuMTE5ODQgMjIgNy44IDIyWiIgc3Ryb2tlPSIjNjY3MDg1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC9nPg0KPC9zdmc+DQo=",alt:t,className:"max-md:hidden"}),N.createElement("div",{className:"self-stretch my-auto"},"Ngày xuất bản:"),N.createElement("div",{className:"self-stretch my-auto"},t)))},c=t(9149),n=t(8755);const u=[{image:c.A,type:"facebook"},{image:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0wIDM2TDIuNTMwNSAyNi43NTU1QzAuOTY5IDI0LjA0OTUgMC4xNDg1IDIwLjk4MiAwLjE1IDE3LjgzNjVDMC4xNTQ1IDguMDAyNSA4LjE1NyAwIDE3Ljk4OTUgMEMyMi43NjEgMC4wMDE1IDI3LjI0IDEuODYgMzAuNjA5IDUuMjMyQzMzLjk3NjUgOC42MDQgMzUuODMwNSAxMy4wODYgMzUuODI5IDE3Ljg1M0MzNS44MjQ1IDI3LjY4ODUgMjcuODIyIDM1LjY5MSAxNy45ODk1IDM1LjY5MUMxNS4wMDQ1IDM1LjY4OTUgMTIuMDYzIDM0Ljk0MSA5LjQ1NzUgMzMuNTE5TDAgMzZaTTkuODk1NSAzMC4yODk1QzEyLjQwOTUgMzEuNzgyIDE0LjgwOTUgMzIuNjc2IDE3Ljk4MzUgMzIuNjc3NUMyNi4xNTU1IDMyLjY3NzUgMzIuODEyNSAyNi4wMjY1IDMyLjgxNyAxNy44NUMzMi44MiA5LjY1NyAyNi4xOTQ1IDMuMDE1IDE3Ljk5NTUgMy4wMTJDOS44MTc1IDMuMDEyIDMuMTY1IDkuNjYzIDMuMTYyIDE3LjgzOEMzLjE2MDUgMjEuMTc1NSA0LjEzODUgMjMuNjc0NSA1Ljc4MSAyNi4yODlMNC4yODI1IDMxLjc2MUw5Ljg5NTUgMzAuMjg5NVpNMjYuOTc2IDIyLjA5MzVDMjYuODY1IDIxLjkwNzUgMjYuNTY4IDIxLjc5NjUgMjYuMTIxIDIxLjU3M0MyNS42NzU1IDIxLjM0OTUgMjMuNDg0IDIwLjI3MSAyMy4wNzQ1IDIwLjEyMjVDMjIuNjY2NSAxOS45NzQgMjIuMzY5NSAxOS44OTkgMjIuMDcxIDIwLjM0NkMyMS43NzQgMjAuNzkxNSAyMC45MTkgMjEuNzk2NSAyMC42NTk1IDIyLjA5MzVDMjAuNCAyMi4zOTA1IDIwLjEzOSAyMi40MjggMTkuNjkzNSAyMi4yMDQ1QzE5LjI0OCAyMS45ODEgMTcuODExIDIxLjUxMTUgMTYuMTA4NSAxOS45OTJDMTQuNzg0IDE4LjgxIDEzLjg4ODUgMTcuMzUwNSAxMy42MjkgMTYuOTAzNUMxMy4zNjk1IDE2LjQ1OCAxMy42MDIgMTYuMjE2NSAxMy44MjQgMTUuOTk0NUMxNC4wMjUgMTUuNzk1IDE0LjI2OTUgMTUuNDc0IDE0LjQ5MyAxNS4yMTNDMTQuNzE5NSAxNC45NTUgMTQuNzkzIDE0Ljc2OSAxNC45NDMgMTQuNDcwNUMxNS4wOTE1IDE0LjE3MzUgMTUuMDE4IDEzLjkxMjUgMTQuOTA1NSAxMy42ODlDMTQuNzkzIDEzLjQ2NyAxMy45MDIgMTEuMjcyNSAxMy41MzE1IDEwLjM4QzEzLjE2ODUgOS41MTE1IDEyLjgwMSA5LjYyODUgMTIuNTI4IDkuNjE1TDExLjY3MyA5LjZDMTEuMzc2IDkuNiAxMC44OTMgOS43MTEgMTAuNDg1IDEwLjE1OEMxMC4wNzcgMTAuNjA1IDguOTI1IDExLjY4MiA4LjkyNSAxMy44NzY1QzguOTI1IDE2LjA3MSAxMC41MjI1IDE4LjE5MDUgMTAuNzQ0NSAxOC40ODc1QzEwLjk2OCAxOC43ODQ1IDEzLjg4NyAyMy4yODc1IDE4LjM1ODUgMjUuMjE4QzE5LjQyMiAyNS42NzcgMjAuMjUzIDI1Ljk1MTUgMjAuODk5NSAyNi4xNTdDMjEuOTY3NSAyNi40OTYgMjIuOTM5NSAyNi40NDggMjMuNzA3NSAyNi4zMzRDMjQuNTY0IDI2LjIwNjUgMjYuMzQ0NSAyNS4yNTU1IDI2LjcxNjUgMjQuMjE0NUMyNy4wODg1IDIzLjE3MiAyNy4wODg1IDIyLjI3OTUgMjYuOTc2IDIyLjA5MzVaIiBmaWxsPSIjNEY0RTUwIi8+DQo8L3N2Zz4NCg==",type:"whatsapp"},{image:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yNy40ODk0IDIuODU1NzFIMzIuNTQ5NkwyMS40OTQ2IDE1LjQ5MUwzNC41IDMyLjY4NDdIMjQuMzE2OUwxNi4zNDExIDIyLjI1NjhMNy4yMTQ5MiAzMi42ODQ3SDIuMTUxNjVMMTMuOTc2MiAxOS4xNjk5TDEuNSAyLjg1NTcxSDExLjk0MTdMMTkuMTUxMSAxMi4zODcyTDI3LjQ4OTQgMi44NTU3MVpNMjUuNzEzNSAyOS42NTU5SDI4LjUxNzRMMTAuNDE4MSA1LjcyNTQxSDcuNDA5MTlMMjUuNzEzNSAyOS42NTU5WiIgZmlsbD0iIzRGNEU1MCIvPg0KPC9zdmc+DQo=",type:"x"},{image:n.A,type:"linkedin"},{image:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yNi41MzgyIDE2LjY4NTNDMjYuMzgzMSAxNi42MTEgMjYuMjI1NiAxNi41Mzk0IDI2LjA2NjEgMTYuNDcxQzI1Ljc4ODIgMTEuMzUwOSAyMi45OTA1IDguNDE5NjkgMTguMjkyOSA4LjM4OTY5QzE4LjI3MTYgOC4zODk1NiAxOC4yNTA0IDguMzg5NTYgMTguMjI5MSA4LjM4OTU2QzE1LjQxOTMgOC4zODk1NiAxMy4wODI1IDkuNTg4OTIgMTEuNjQ0MSAxMS43NzE0TDE0LjIyNzcgMTMuNTQzN0MxNS4zMDIyIDExLjkxMzQgMTYuOTg4NSAxMS41NjU5IDE4LjIzMDQgMTEuNTY1OUMxOC4yNDQ3IDExLjU2NTkgMTguMjU5MSAxMS41NjU5IDE4LjI3MzMgMTEuNTY2QzE5LjgyMDEgMTEuNTc1OSAyMC45ODcyIDEyLjAyNTYgMjEuNzQyNyAxMi45MDI2QzIyLjI5MjQgMTMuNTQxMSAyMi42NjAxIDE0LjQyMzQgMjIuODQyMiAxNS41MzdDMjEuNDcwOCAxNS4zMDM5IDE5Ljk4NzcgMTUuMjMyMiAxOC40MDIyIDE1LjMyMzFDMTMuOTM1OSAxNS41ODA0IDExLjA2NDYgMTguMTg1MiAxMS4yNTc0IDIxLjgwNDhDMTEuMzU1MyAyMy42NDA4IDEyLjI2OTkgMjUuMjIwMyAxMy44MzI4IDI2LjI1MjFDMTUuMTU0MiAyNy4xMjQzIDE2Ljg1NjEgMjcuNTUwOSAxOC42MjQ4IDI3LjQ1NDNDMjAuOTYwNiAyNy4zMjYzIDIyLjc5MzEgMjYuNDM1MSAyNC4wNzE0IDI0LjgwNTVDMjUuMDQyMyAyMy41NjggMjUuNjU2NCAyMS45NjQzIDI1LjkyNzUgMTkuOTQzNkMyNy4wNDA3IDIwLjYxNTQgMjcuODY1NyAyMS40OTk1IDI4LjMyMTMgMjIuNTYyM0MyOS4wOTYxIDI0LjM2ODggMjkuMTQxMyAyNy4zMzc1IDI2LjcxODkgMjkuNzU3N0MyNC41OTY2IDMxLjg3OCAyMi4wNDU1IDMyLjc5NTIgMTguMTkgMzIuODIzNkMxMy45MTMzIDMyLjc5MTkgMTAuNjc4OCAzMS40MjAzIDguNTc1ODkgMjguNzQ2OUM2LjYwNjY2IDI2LjI0MzYgNS41ODg5NCAyMi42Mjc5IDUuNTUwOTcgMThDNS41ODg5NCAxMy4zNzIxIDYuNjA2NjYgOS43NTYzIDguNTc1ODkgNy4yNTMwMUMxMC42Nzg4IDQuNTc5NjcgMTMuOTEzMiAzLjIwODEzIDE4LjE5IDMuMTc2MzRDMjIuNDk3NyAzLjIwODM3IDI1Ljc4ODYgNC41ODY1MSAyNy45NzIgNy4yNzI3NUMyOS4wNDI2IDguNTkwMDUgMjkuODQ5OCAxMC4yNDY3IDMwLjM4MTkgMTIuMTc4MkwzMy40MDk1IDExLjM3MDRDMzIuNzY0NSA4Ljk5MjkxIDMxLjc0OTYgNi45NDQxOSAzMC4zNjg0IDUuMjQ1MTNDMjcuNTY5MyAxLjgwMTI1IDIzLjQ3NTQgMC4wMzY1OTAzIDE4LjIwMDUgMEgxOC4xNzk0QzEyLjkxNTMgMC4wMzY0NjMxIDguODY3MjcgMS44MDc4NCA2LjE0NzgxIDUuMjY0ODdDMy43Mjc4NiA4LjM0MTIgMi40Nzk1OCAxMi42MjE3IDIuNDM3NjMgMTcuOTg3M0wyLjQzNzUgMThMMi40Mzc2MyAxOC4wMTI3QzIuNDc5NTggMjMuMzc4MyAzLjcyNzg2IDI3LjY1ODkgNi4xNDc4MSAzMC43MzUyQzguODY3MjcgMzQuMTkyMSAxMi45MTUzIDM1Ljk2MzYgMTguMTc5NCAzNkgxOC4yMDA1QzIyLjg4MDYgMzUuOTY3NiAyNi4xNzk1IDM0Ljc0MjMgMjguODk3MSAzMi4wMjcxQzMyLjQ1MjcgMjguNDc0OSAzMi4zNDU2IDI0LjAyMjMgMzEuMTczNyAyMS4yODg5QzMwLjMzMyAxOS4zMjg4IDI4LjczMDEgMTcuNzM2OCAyNi41MzgyIDE2LjY4NTNaTTE4LjQ1NzYgMjQuMjgyNkMxNi41MDAxIDI0LjM5MjggMTQuNDY2NCAyMy41MTQyIDE0LjM2NjIgMjEuNjMyMkMxNC4yOTE5IDIwLjIzNjkgMTUuMzU5MiAxOC42Nzk5IDE4LjU3NzcgMTguNDk0NEMxOC45NDYzIDE4LjQ3MzEgMTkuMzA4IDE4LjQ2MjcgMTkuNjYzMyAxOC40NjI3QzIwLjgzMjQgMTguNDYyNyAyMS45MjYxIDE4LjU3NjMgMjIuOTIwNCAxOC43OTM3QzIyLjU0OTUgMjMuNDI1MyAyMC4zNzQxIDI0LjE3NzQgMTguNDU3NiAyNC4yODI2WiIgZmlsbD0iIzRGNEU1MCIvPg0KPC9zdmc+DQo=",type:"threads"}];var i=M=>{let{title:e}=M;const{0:t,1:a}=(0,N.useState)("");return N.createElement("section",{className:"flex flex-col justify-center items-center self-center mt-12 max-md:mt-10"},N.createElement("p",{className:"text-base font-medium tracking-normal leading-7 text-neutral-800"},"Đừng quên chia sẻ bài viết này!"),N.createElement("div",{className:"flex gap-6 justify-center items-center mt-3"},u.map(((M,a)=>N.createElement("div",{className:"relative size-[36px] cursor-pointer group",onClick:()=>(M=>{const t=""+window.location.origin+window.location.pathname;let N="";switch(M){case"facebook":N="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(t);break;case"linkedin":N="https://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(t)+"}";break;case"x":N="https://twitter.com/intent/tweet?url="+encodeURIComponent(t)+"&text="+encodeURIComponent(e);break;case"threads":N="https://www.threads.net/share?url="+encodeURIComponent(t);break;case"whatsapp":N="https://api.whatsapp.com/send?text="+encodeURIComponent(t)}N&&window.open(N,"_blank")})(M.type),key:a},N.createElement("img",{loading:"lazy",src:M.image,alt:M.type,className:"object-contain shrink-0 self-stretch my-auto w-[36px] aspect-square"}),"copy"===M.type&&N.createElement("div",{className:"absolute left-0 bottom-1/2 translate-x-[26px] translate-y-1/2 bg-[#0C111D] text-white text-xs font-semibold text-nowrap rounded-lg px-3 py-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none"},t||"Sao chép link"))))))};const l=function(M,e){void 0===e&&(e="dd.mm.yyyy");const t=M.split("T")[0].split("-");return"dd.mm"===e?t[2]+"."+t[1]:"yyyy"===e?t[0]:t[2]+"."+t[1]+"."+t[0]};var r=M=>{let{category:e,title:t,content:a,author:I,publishDate:c}=M;return N.createElement("article",{className:"flex flex-col items-center pt-48 max-md:pt-24 px-4 lg:px-32 py-16 max-md:py-6 bg-white"},N.createElement("div",{className:"flex flex-col w-full max-w-[1184px] max-md:max-w-full"},N.createElement(j,{items:["Home","Blog",t]}),N.createElement("header",{className:"flex flex-col mt-6 max-md:mt-4 w-full max-md:max-w-full"},N.createElement(D,{category:e}),N.createElement("h1",{className:"mt-6 max-md:mt-4 text-5xl font-bold tracking-[-0.96px] text-[#3644F5] leading-[125%] max-md:max-w-full max-md:text-2xl"},t)),N.createElement(g,{author:I,publishDate:l(c)})),N.createElement("div",{className:"flex flex-wrap gap-10 items-start my-16 w-full max-w-[1184px] max-md:my-6 max-md:max-w-full"},N.createElement("main",{className:"flex flex-col flex-1 shrink w-full"},N.createElement("section",{className:"flex flex-col w-full max-md:max-w-full"},N.createElement("div",{className:"ck-content relative overflow-hidden px-4",dangerouslySetInnerHTML:{__html:a}})))),N.createElement(i,{title:t}))},y=t(6808),z=(t(6910),t(4589)),o=t(6449);var x=M=>{let{imageSrc:e,title:t,description:a,chipText:j,buttonText:D,slug:g}=M;return N.createElement(I.Link,{to:"/"+g,className:"flex flex-col justify-between p-4 bg-[#F9FAFB] min-h-[490px] max-md:min-h-[500px] rounded-3xl max-w-[368px] max-md:w-[320px] "},N.createElement("div",{className:""},N.createElement("img",{loading:"lazy",src:e,alt:t,className:"object-contain w-full rounded-lg aspect-[1.54]"}),N.createElement("header",{className:"flex flex-col mt-8 w-full"},N.createElement("h2",{className:"text-2xl font-bold leading-8 text-slate-700 line-clamp-3"},t),N.createElement("p",{className:"mt-3 text-base leading-6 text-gray-500 text-ellipsis line-clamp-2"},a))),N.createElement("div",{className:""},N.createElement("span",{className:"self-start px-2 py-1 mt-8 text-base leading-6 whitespace-nowrap bg-[#ECF3FF] rounded-[10px] text-slate-700"},j)))};var s=M=>{let{children:e,active:t=!1}=M;return N.createElement("span",{className:"self-start px-2 py-1 text-base font-normal text-[#475467] leading-6 bg-[#ECF3FF] transition-all  rounded-[10px] "+(t?"bg-[#cbdeff]":""),"aria-checked":t},e)};const T=["Tất cả","Tin tức Edtech","Tin Onschool","Tin Sản phẩm"];var A=M=>{let{category:e,onCategoryChange:t}=M;const{0:a,1:I}=(0,N.useState)("");return(0,N.useEffect)((()=>{I(""===e?"Tất cả":e)}),[e]),N.createElement("div",{className:"flex flex-wrap gap-2"},T.map(((M,e)=>N.createElement("div",{className:"cursor-pointer",onClick:()=>t(M),key:e},N.createElement(s,{active:a===M,key:e},M)))))},m=t(39);var E=()=>{const M=(0,N.useRef)(null),{0:e,1:t}=(0,N.useState)(""),{0:a,1:I}=(0,N.useState)([]),{0:j,1:D}=(0,N.useState)(1/a.length*100),g={arrows:!1,infinite:!0,autoplay:!0,autoplaySpeed:2e3,speed:500,slidesToShow:1,slidesToScrool:1,variableWidth:!0,className:"custom-slick-slider",beforeChange:(M,e)=>{D((e+1)/a.length*100)}};(0,N.useEffect)((()=>{(async()=>{const M={query:"\n        query Blogs($filters: BlogFiltersInput) {\n          blogs(filters: $filters, pagination: { limit: -1 }) {\n            thumbnail {\n              url\n            }\n    blog_category {\n      name\n    }            title\n            slug\n            description\n            createdAt\n          }\n        }\n      ",variables:{filters:{blog_category:e?{name:{eq:e}}:void 0}}};try{const e=await(0,m.Y)(M),{blogs:t}=e.data;I(t.sort(((M,e)=>new Date(e.createdAt).getTime()-new Date(M.createdAt).getTime()))),D(1/t.length*100)}catch(t){console.error("Error fetching data:",t)}})()}),[e]);return N.createElement("div",{className:"w-full flex flex-col px-32 max-md:px-4 py-16 max-sm:py-12 overflow-hidden"},N.createElement("div",{className:"w-full"},N.createElement("h1",{className:"max-w-[1184px] mx-auto mb-6 font-bold text-4xl leading-display-md text-[#344054] max-md:text-2xl"},"Bài viết liên quan"),N.createElement("div",{className:"my-6 max-w-[1184px] mx-auto"},N.createElement(A,{category:e,onCategoryChange:M=>{t("Tất cả"===M?"":M)}}))),N.createElement(z.A,Object.assign({ref:M},g),a.map(((M,e)=>N.createElement("div",{className:"pr-4",key:e},N.createElement(x,{imageSrc:M.thumbnail&&"https://devonschool-cms.onschool.edu.vn"+M.thumbnail.url,title:M.title,description:M.description,chipText:M.blog_category.name,slug:M.slug,buttonText:"Tìm hiểu thêm"}))))),N.createElement(o.A,{progress:j,sliderRef:M}))};var d=M=>{let{pageContext:e}=M;const{title:t,category:I,author:j,createdAt:D,content:g,thumbnail:c}=e;return N.createElement(a.A,null,N.createElement(y.A,null),N.createElement(r,{category:I,title:t,author:j,publishDate:D,content:g,thumbnail:c&&"https://devonschool-cms.onschool.edu.vn"+c.url}),N.createElement(E,null))};const L=M=>{let{pageContext:e}=M;return N.createElement("title",null,e.title)}},9149:function(M,e){e.A="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMSAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80OTMyXzEwMDI0KSI+DQo8cGF0aCBkPSJNMTUuNzUgMEM3LjQ2NTggMCAwLjc1IDYuNzE1OCAwLjc1IDE1QzAuNzUgMjIuMDM0NCA1LjU5MzIgMjcuOTM3MiAxMi4xMjY2IDI5LjU1ODRWMTkuNTg0SDkuMDMzNlYxNUgxMi4xMjY2VjEzLjAyNDhDMTIuMTI2NiA3LjkxOTQgMTQuNDM3MiA1LjU1MyAxOS40NDk2IDUuNTUzQzIwLjQgNS41NTMgMjIuMDM5OCA1LjczOTYgMjIuNzEwNiA1LjkyNTZWMTAuMDgwNkMyMi4zNTY2IDEwLjA0MzQgMjEuNzQxNiAxMC4wMjQ4IDIwLjk3NzggMTAuMDI0OEMxOC41MTg0IDEwLjAyNDggMTcuNTY4IDEwLjk1NjYgMTcuNTY4IDEzLjM3ODhWMTVIMjIuNDY3NkwyMS42MjU4IDE5LjU4NEgxNy41NjhWMjkuODkwMkMyNC45OTU0IDI4Ljk5MzIgMzAuNzUwNiAyMi42NjkyIDMwLjc1MDYgMTVDMzAuNzUgNi43MTU4IDI0LjAzNDIgMCAxNS43NSAwWiIgZmlsbD0iIzQ3NTQ2NyIvPg0KPC9nPg0KPGRlZnM+DQo8Y2xpcFBhdGggaWQ9ImNsaXAwXzQ5MzJfMTAwMjQiPg0KPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC43NSkiLz4NCjwvY2xpcFBhdGg+DQo8L2RlZnM+DQo8L3N2Zz4NCg=="},8755:function(M,e){e.A="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMSAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80OTMyXzEwMDI2KSI+DQo8cGF0aCBkPSJNMjguMDI5MyAwSDIuNDY0ODRDMS4yNDAyMyAwIDAuMjUgMC45NjY3OTcgMC4yNSAyLjE2MjExVjI3LjgzMkMwLjI1IDI5LjAyNzMgMS4yNDAyMyAzMCAyLjQ2NDg0IDMwSDI4LjAyOTNDMjkuMjUzOSAzMCAzMC4yNSAyOS4wMjczIDMwLjI1IDI3LjgzNzlWMi4xNjIxMUMzMC4yNSAwLjk2Njc5NyAyOS4yNTM5IDAgMjguMDI5MyAwWk05LjE1MDM5IDI1LjU2NDVINC42OTcyN1YxMS4yNDQxSDkuMTUwMzlWMjUuNTY0NVpNNi45MjM4MyA5LjI5Mjk3QzUuNDk0MTQgOS4yOTI5NyA0LjMzOTg0IDguMTM4NjcgNC4zMzk4NCA2LjcxNDg0QzQuMzM5ODQgNS4yOTEwMiA1LjQ5NDE0IDQuMTM2NzIgNi45MjM4MyA0LjEzNjcyQzguMzQ3NjYgNC4xMzY3MiA5LjUwMTk1IDUuMjkxMDIgOS41MDE5NSA2LjcxNDg0QzkuNTAxOTUgOC4xMzI4MSA4LjM0NzY2IDkuMjkyOTcgNi45MjM4MyA5LjI5Mjk3Wk0yNS44MTQ1IDI1LjU2NDVIMjEuMzY3MlYxOC42MDM1QzIxLjM2NzIgMTYuOTQ1MyAyMS4zMzc5IDE0LjgwNjYgMTkuMDUyNyAxNC44MDY2QzE2LjczODMgMTQuODA2NiAxNi4zODY3IDE2LjYxNzIgMTYuMzg2NyAxOC40ODYzVjI1LjU2NDVIMTEuOTQ1M1YxMS4yNDQxSDE2LjIxMDlWMTMuMjAxMkgxNi4yNjk1QzE2Ljg2MTMgMTIuMDc2MiAxOC4zMTQ1IDEwLjg4NjcgMjAuNDc2NiAxMC44ODY3QzI0Ljk4MjQgMTAuODg2NyAyNS44MTQ1IDEzLjg1MTYgMjUuODE0NSAxNy43MDdWMjUuNTY0NVoiIGZpbGw9IiM0NzU0NjciLz4NCjwvZz4NCjxkZWZzPg0KPGNsaXBQYXRoIGlkPSJjbGlwMF80OTMyXzEwMDI2Ij4NCjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMjUpIi8+DQo8L2NsaXBQYXRoPg0KPC9kZWZzPg0KPC9zdmc+DQo="},2217:function(M,e,t){var N=t(9039);M.exports=function(M,e){var t=[][M];return!!t&&N((function(){t.call(null,e||function(){return 1},1)}))}},7680:function(M,e,t){var N=t(9504);M.exports=N([].slice)},4488:function(M,e,t){var N=t(7680),a=Math.floor,I=function(M,e){var t=M.length;if(t<8)for(var j,D,g=1;g<t;){for(D=g,j=M[g];D&&e(M[D-1],j)>0;)M[D]=M[--D];D!==g++&&(M[D]=j)}else for(var c=a(t/2),n=I(N(M,0,c),e),u=I(N(M,c),e),i=n.length,l=u.length,r=0,y=0;r<i||y<l;)M[r+y]=r<i&&y<l?e(n[r],u[y])<=0?n[r++]:u[y++]:r<i?n[r++]:u[y++];return M};M.exports=I},6955:function(M,e,t){var N=t(2140),a=t(4901),I=t(2195),j=t(8227)("toStringTag"),D=Object,g="Arguments"===I(function(){return arguments}());M.exports=N?I:function(M){var e,t,N;return void 0===M?"Undefined":null===M?"Null":"string"==typeof(t=function(M,e){try{return M[e]}catch(t){}}(e=D(M),j))?t:g?I(e):"Object"===(N=I(e))&&a(e.callee)?"Arguments":N}},4606:function(M,e,t){var N=t(6823),a=TypeError;M.exports=function(M,e){if(!delete M[e])throw new a("Cannot delete property "+N(e)+" of "+N(M))}},3709:function(M,e,t){var N=t(2839).match(/firefox\/(\d+)/i);M.exports=!!N&&+N[1]},3763:function(M,e,t){var N=t(2839);M.exports=/MSIE|Trident/.test(N)},3607:function(M,e,t){var N=t(2839).match(/AppleWebKit\/(\d+)\./);M.exports=!!N&&+N[1]},2140:function(M,e,t){var N={};N[t(8227)("toStringTag")]="z",M.exports="[object z]"===String(N)},655:function(M,e,t){var N=t(6955),a=String;M.exports=function(M){if("Symbol"===N(M))throw new TypeError("Cannot convert a Symbol value to a string");return a(M)}},6910:function(M,e,t){var N=t(6518),a=t(9504),I=t(9306),j=t(8981),D=t(6198),g=t(4606),c=t(655),n=t(9039),u=t(4488),i=t(2217),l=t(3709),r=t(3763),y=t(9519),z=t(3607),o=[],x=a(o.sort),s=a(o.push),T=n((function(){o.sort(void 0)})),A=n((function(){o.sort(null)})),m=i("sort"),E=!n((function(){if(y)return y<70;if(!(l&&l>3)){if(r)return!0;if(z)return z<603;var M,e,t,N,a="";for(M=65;M<76;M++){switch(e=String.fromCharCode(M),M){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(N=0;N<47;N++)o.push({k:e+N,v:t})}for(o.sort((function(M,e){return e.v-M.v})),N=0;N<o.length;N++)e=o[N].k.charAt(0),a.charAt(a.length-1)!==e&&(a+=e);return"DGBEFHACIJK"!==a}}));N({target:"Array",proto:!0,forced:T||!A||!m||!E},{sort:function(M){void 0!==M&&I(M);var e=j(this);if(E)return void 0===M?x(e):x(e,M);var t,N,a=[],n=D(e);for(N=0;N<n;N++)N in e&&s(a,e[N]);for(u(a,function(M){return function(e,t){return void 0===t?-1:void 0===e?1:void 0!==M?+M(e,t)||0:c(e)>c(t)?1:-1}}(M)),t=D(a),N=0;N<t;)e[N]=a[N++];for(;N<n;)g(e,N++);return e}})}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-1d5679af36a9db0e0d76.js.map