import{s as Y,B as F,r as o,u as ke,f as fe,j as t,b as Be,c as Qe,d as ye,e as We,A as qe,W as Ye,S as ze,C as ge,g as ee,h as Ue,i as Ve,k as He,l as Ge,P as Ke,_ as Xe,m as Je,n as Ze,o as et,p as tt,q as nt,t as st,F as B,v as rt,T as Q,w as K,x as Se,H as at,y as ot,z as it,E as ct,G as lt,I as ut,J as dt,K as mt,L as xe,M as pt,N as se,O as X,Q as ht,R as ve,U as ft,V as Ie,X as W,Y as q,Z as yt,$ as gt,a0 as St,a1 as re,a2 as xt,a3 as be,a4 as vt,a5 as It,a6 as bt,a7 as Tt,a8 as jt,a9 as Lt,aa as _t,ab as Rt,ac as Et,ad as wt,ae as Pt}from"./sanity-8ef79b21.js";import{useDeskToolSetting as ae}from"./index-990e561a-5c7b8852.js";import{P as Ct}from"./PaneItem-1e97aa6c-726cabb9.js";import"./index-5ca23509.js";const oe=100,J=2e3,Te={by:[{field:"_updatedAt",direction:"desc"}]},At={};function Mt(s){return bt(s).map(e=>({...e.draft||e.published,hasPublished:!!e.published,hasDraft:!!e.draft}))}const Ot=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function je(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=s.match(Ot);if(!r)return null;const n=(r[1]||r[2]).trim().replace(/^["']|["']$/g,"");if(n[0]==="$"){const a=n.slice(1),d=e[a];return typeof d=="string"?d:null}return n}function Ft(s){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(s.trim())}function Dt(s,e){const r=s.by.map(n=>{if(n.mapWith)return n;const a=Nt(e,n.field);return a?kt(a,"datetime")?{...n,mapWith:"dateTime"}:a.jsonType==="string"?{...n,mapWith:"lower"}:n:n});return r.every((n,a)=>n===s.by[a])?s:{...s,by:r}}function Nt(s,e){const r=Je(e);let n=s;for(const a of r){if(!n)return;if(typeof a=="string"){n=$t(n,a);continue}if(!(Ze(a)||et(a))||n.jsonType!=="array")return;const[c,u]=n.of||[];if(u||!c)return;if(!tt(c)){n=c;continue}const[l,p]=c.to||[];if(p||!l)return;n=l}return n}function $t(s,e){if(!("fields"in s))return;const r=s.fields.find(n=>n.name===e);return r?r.type:void 0}function kt(s,e){let r=s.type;for(;r;){if(r.name===e||!r.type&&r.jsonType===e)return!0;r=r.type}return!1}var ie=Object.freeze,Bt=Object.defineProperty,Le=(s,e)=>ie(Bt(s,"raw",{value:ie(e||s.slice())})),ce,le;const Qt=Y(F)(ce||(ce=Le([`
  position: relative;
`]))),Wt=Y(F)(le||(le=Le([`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`]))),qt=[...Array(30).keys()];function Yt(s){const{layout:e}=s;return t.jsx(Se,{padding:2,space:1,children:qt.map(r=>t.jsx(ge,{padding:2,children:t.jsx(Tt,{isPlaceholder:!0,layout:e})},r))})}function zt(s){const{childItemId:e,error:r,filterIsSimpleTypeConstraint:n,hasMaxItems:a,hasSearchQuery:d,isActive:c,isLazyLoading:u,isLoading:l,items:p,layout:y,loadingVariant:f,onListChange:g,onRetry:j,paneTitle:m,searchInputElement:S,showIcons:L}=s,R=ee(),{collapsed:h}=nt(),{collapsed:x,index:b}=fe(),[T,_]=o.useState(!1),P=o.useCallback(()=>{l||u||!T||g()},[u,l,g,T]);o.useEffect(()=>{if(x)return;const i=setTimeout(()=>{_(!0)},0);return()=>{clearTimeout(i)}},[x,p]);const E=o.useCallback((i,C)=>{let{activeIndex:A}=C;const M=st(i._id),v=e===M,I=!c&&v,z=c&&v,O=A===p.length-1,U=O&&u,V=O&&a;return t.jsxs(t.Fragment,{children:[t.jsx(Ct,{icon:L===!1?!1:void 0,id:M,layout:y,marginBottom:1,pressed:I,schemaType:R.get(i._type),selected:z,value:i}),U&&t.jsx(B,{align:"center",justify:"center",padding:4,children:t.jsx(rt,{muted:!0})}),V&&t.jsx(F,{marginY:1,paddingX:3,paddingY:4,children:t.jsxs(Q,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",J," documents"]})})]})},[e,c,p.length,y,R,L,a,u]),D=o.useMemo(()=>d?t.jsx(B,{align:"center",direction:"column",height:"fill",justify:"center",children:t.jsx(K,{width:1,children:t.jsx(F,{paddingX:4,paddingY:5,children:t.jsx(Q,{align:"center",muted:!0,children:"No results found"})})})}):t.jsx(B,{align:"center",direction:"column",height:"fill",justify:"center",children:t.jsx(K,{width:1,children:t.jsx(F,{paddingX:4,paddingY:5,children:t.jsx(Q,{align:"center",muted:!0,children:n?"No documents of this type":"No matching documents"})})})}),[n,d]),w=o.useMemo(()=>{if(!T)return null;if(r)return t.jsx(B,{align:"center",direction:"column",height:"fill",justify:"center",children:t.jsx(K,{width:1,children:t.jsxs(Se,{paddingX:4,paddingY:5,space:4,children:[t.jsx(at,{as:"h3",children:"Could not fetch list items"}),t.jsxs(Q,{as:"p",children:["Error: ",t.jsx("code",{children:r.message})]}),j&&t.jsx(F,{children:t.jsx(ye,{icon:ot,onClick:j,text:"Retry",tone:"primary"})})]})})});if(!l&&p.length===0)return D;if(f==="initial"&&l)return t.jsx(it,{ms:300,children:t.jsx(Yt,{layout:y})});if(f==="spinner"&&l)return null;const i="".concat(b,"-").concat(x);return t.jsx(Qt,{overflow:"hidden",height:"fill",children:t.jsx(Wt,{children:t.jsx(ct,{activeItemDataAttr:"data-hovered",ariaLabel:m,canReceiveFocus:!0,focusRingOffset:-3,inputElement:S,itemHeight:51,items:p,onEndReached:P,onlyShowSelectionWhenActive:!0,overscan:10,padding:2,paddingBottom:1,renderItem:E,wrapAround:!1},i)})})},[x,r,P,b,l,p,y,f,j,E,S,T]);return t.jsx(lt,{overflow:h||f==="initial"?"hidden":"auto",children:w})}const _e=o.memo(s=>{let{contentAfter:e,index:r,initialValueTemplates:n=[],menuItemGroups:a=[],menuItems:d=[],setLayout:c,setSortOrder:u,title:l}=s;const{features:p}=ke(),{collapsed:y,isLast:f}=fe(),g=f&&!y?-1:0,j=o.useMemo(()=>({setLayout:m=>{let{layout:S}=m;c(S)},setSortOrder:m=>{u(m)}}),[c,u]);return t.jsx(Be,{actions:t.jsx(Qe,{initialValueTemplateItems:n,actionHandlers:j,menuItemGroups:a,menuItems:d}),backButton:p.backButton&&r>0&&t.jsx(ye,{as:We,"data-as":"a",icon:qe,mode:"bleed"}),contentAfter:e,tabIndex:g,title:l})});_e.displayName="DocumentListPaneHeader";function Ut(s){const{client:e,schema:r,sort:n,limit:a,params:d,filter:c,searchQuery:u,staticTypeNames:l}=s,p=n.by,y=n==null?void 0:n.extendedProjection,f=jt(()=>e.listen("*[".concat(c,"]"),d,{events:["welcome","mutation","reconnect"],includeResult:!1,visibility:"query"})).pipe(W((m,S)=>S===0&&m.type!=="welcome"?X(()=>new Error(m.type==="reconnect"?"Could not establish EventSource connection":'Received unexpected type of first event "'.concat(m.type,'"'))):q(m)),Lt()),[g,j]=_t(f,m=>m.type==="welcome");return ve(g.pipe(Ie(1)),j.pipe(Rt(1e3,wt,{leading:!0,trailing:!0}))).pipe(Et(m=>(l?q(l):e.observable.fetch("array::unique(*[".concat(c,"][]._type)"),d)).pipe(W(L=>{const R=L.flatMap(P=>r.get(P)||[]),h={filter:c,query:u||"",types:R},x={__unstable_extendedProjection:y,comments:["findability-source: ".concat(u?"list-query":"list")],limit:a,params:d,sort:p},{query:b,params:T}=Pt(h,x),_=()=>e.observable.fetch(b,T);return m.type==="mutation"&&m.visibility!=="query"?be(1200).pipe(W(_)):_()}))))}const Vt=[],ue={error:null,onRetry:void 0,result:null},Ht={result:null,error:null};function Gt(s){const{filter:e,params:r,sortOrder:n,searchQuery:a}=s,d=ut(dt),c=ee(),[u,l]=o.useState(ue),{onRetry:p,error:y,result:f}=u,g=f==null?void 0:f.documents,j=o.useMemo(()=>g?Mt(g):Vt,[g]),[m,S]=o.useState(!1),[L,R]=o.useState(!1),[h,x]=o.useState(!1),b=o.useMemo(()=>je(e,r),[e,r]),T=f===null&&!y,_=(g==null?void 0:g.length)===J,P=o.useCallback(()=>{T||L||h||x(!0)},[T,L,h]),E=o.useCallback(i=>{var C,A;if(i.error){l(i);return}const M=((A=(C=i.result)==null?void 0:C.documents)==null?void 0:A.length)||0;if(!i.error&&(i==null?void 0:i.result)===null&&h){S(!0);return}if(M<oe&&M!==0&&!h&&R(!0),(i==null?void 0:i.result)===null){l(I=>({...I.error?i:I}));return}S(!1),l(i)},[h]),D=o.useMemo(()=>{const i=new mt,C=()=>i.next();return Ut({client:d,filter:e,limit:h?J:oe,params:r,schema:c,searchQuery:a||"",sort:n||Te,staticTypeNames:b?[b]:void 0}).pipe(xe(v=>({result:{documents:v},error:null})),pt(Ht),se(v=>v instanceof ProgressEvent?X(()=>new Error("Request error")):X(()=>v)),se((v,I)=>ht(q({result:null,error:v}),ve(ft(window,"online"),i).pipe(Ie(1),W(()=>I)))),yt((v,I)=>({...v,...I,onRetry:C})))},[d,e,r,c,a,h,n,b]);o.useEffect(()=>{const i=D.subscribe(E);return()=>{i.unsubscribe()}},[E,D]);const w=o.useCallback(()=>{R(!1),S(!1),l(ue),x(!1)},[]);return o.useEffect(()=>{w()},[w,e,r,n,a]),{error:y,hasMaxItems:_,isLazyLoading:m,isLoading:T,isSearchReady:!y,items:j,onListChange:P,onRetry:p}}var de=Object.freeze,Kt=Object.defineProperty,te=(s,e)=>de(Kt(s,"raw",{value:de(e||s.slice())})),me,pe,he;const Z=[],Xt=Ye(me||(me=te([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`]))),Jt=Y(ze)(pe||(pe=te([`
  animation: `,` 500ms linear infinite;
`])),Xt),Zt=Y(ge)(he||(he=te([`
  [data-ui='TextInput'] {
    border-radius: inherit;
  }
`])));function en(s){const e=o.useRef(s);return gt(e.current,s)||(e.current=s),e.current}const tn=s=>{const{menuItems:e,sortOrderRaw:r,layout:n}=s;return e==null?void 0:e.map(a=>{var d,c,u,l;return(d=a.params)!=null&&d.layout?{...a,selected:n===((c=a.params)==null?void 0:c.layout)}:(u=a==null?void 0:a.params)!=null&&u.by?{...a,selected:St(r==null?void 0:r.by,((l=a==null?void 0:a.params)==null?void 0:l.by)||Z)}:{...a,selected:!1}})},on=o.memo(function(e){const{childItemId:r,index:n,isActive:a,isSelected:d,pane:c,paneKey:u}=e,l=ee(),{name:p}=Ue(),{defaultLayout:y="default",displayOptions:f,initialValueTemplates:g=Z,menuItemGroups:j,menuItems:m,options:S,title:L}=c,{apiVersion:R,defaultOrdering:h=Z,filter:x}=S,b=en(S.params||At),T=c.source,_=o.useMemo(()=>je(x,b),[x,b]),P=(f==null?void 0:f.showIcons)!==!1,[E,D]=ae(_,"layout",y),[w,i]=o.useState(""),[C,A]=o.useState(""),[M,v]=o.useState(null),I=o.useRef(!1),z=o.useMemo(()=>(h==null?void 0:h.length)>0?{by:h}:Te,[h]),[O,U]=ae(_,"sortOrder",z),V=_&&O?Dt(O,l.get(_)):O,Re=Ve(V),Ee=Ft(x),{error:we,hasMaxItems:Pe,isLazyLoading:Ce,isLoading:N,isSearchReady:Ae,items:H,onListChange:Me,onRetry:Oe}=Gt({apiVersion:R,filter:x,params:b,searchQuery:w==null?void 0:w.trim(),sortOrder:Re}),Fe=o.useMemo(()=>tn({menuItems:m,sortOrderRaw:O,layout:E}),[E,m,O]),De=He(k=>k.pipe(xe(G=>G.target.value),re(A),xt(G=>G===""?q(""):be(300)),re(i)),[]),$=o.useCallback(()=>{i(""),A("")},[]),Ne=o.useCallback(k=>{k.key==="Escape"&&$()},[$]);o.useEffect(()=>(I.current===!1&&!N&&(I.current=!0),()=>{I.current=!1}),[N]),o.useEffect(()=>{$(),I.current=!1},[u,$]);const ne=o.useMemo(()=>N&&H.length===0&&I.current?"spinner":"initial",[N,H.length]),$e=t.jsx(F,{paddingX:2,paddingBottom:2,children:t.jsx(Zt,{radius:4,tone:"transparent",children:t.jsx(vt,{"aria-label":"Search list",autoComplete:"off",border:!1,clearButton:!!w,disabled:!Ae,fontSize:[2,2,1],icon:ne==="spinner"?Jt:It,onChange:De,onClear:$,onKeyDown:Ne,placeholder:"Search list",radius:2,ref:v,spellCheck:!1,value:C})})});return t.jsx(Ge,{name:T||p,children:t.jsxs(Ke,{currentMaxWidth:350,"data-ui":"DocumentListPane",id:u,maxWidth:640,minWidth:320,selected:d,children:[Xe,t.jsx(_e,{contentAfter:$e,index:n,initialValueTemplates:g,menuItemGroups:j,menuItems:Fe,setLayout:D,setSortOrder:U,title:L}),t.jsx(zt,{childItemId:r,error:we,filterIsSimpleTypeConstraint:Ee,hasMaxItems:Pe,hasSearchQuery:!!w,isActive:a,isLazyLoading:Ce,isLoading:N,items:H,layout:E,loadingVariant:ne,onListChange:Me,onRetry:Oe,paneTitle:L,searchInputElement:M,showIcons:P},u)]})})});export{on as default};
