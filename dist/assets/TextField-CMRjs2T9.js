import{a as W,j as t,h as c}from"./index-D15ONH7R.js";const h="_inputWrapper_1c74d_3",I="_errorWrapper_1c74d_19",j="_focucedWrapper_1c74d_31",m="_input_1c74d_3",v="_title_1c74d_83",C="_disabledInput_1c74d_95",f="_inputIcon_1c74d_105",N="_closeIcon_1c74d_115",T="_caption_1c74d_135",w="_error_1c74d_19",k="_errorTitle_1c74d_159 _title_1c74d_83",E="_errorCaption_1c74d_169 _caption_1c74d_135",e={inputWrapper:h,errorWrapper:I,focucedWrapper:j,input:m,title:v,disabledInput:C,inputIcon:f,closeIcon:N,caption:T,error:w,errorTitle:k,errorCaption:E},g=({title:o,caption:s,error:r,disabled:n,label:l,before:p,after:i,...d})=>{const[_,a]=W.useState(!1),u=r?e.errorTitle:e.title,x=r?e.errorCaption:e.caption;return t.jsxs("div",{children:[o&&t.jsx("div",{className:u,children:o}),t.jsxs("div",{className:c(e.inputWrapper,{[e.errorWrapper]:!!r},{[e.disabledInput]:n},{[e.focucedWrapper]:_}),children:[p||null,t.jsx("input",{...d,onFocus:()=>a(!0),onBlur:()=>a(!1),type:"text",className:c(e.input,r?"text-[#E44444] placeholder:text-[#E44]":""),disabled:n,placeholder:l}),i||t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:c(e.closeIcon),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]}),s&&t.jsx("div",{className:x,children:s}),r&&t.jsx("div",{className:e.error,children:r})]})};export{g as T};
