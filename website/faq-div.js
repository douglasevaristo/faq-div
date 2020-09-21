/* Copyright 2019-2020 Almar Klein. You need a license to use FAQ-div. Do not remove this comment. */
(function() {
var version='1.2';var css=".faq>.hidden{display:none;} .faq>.qa{box-sizing:border-box;width:100%;max-width:800px;padding:0.5em 1em;margin:0.5em 0;border-top:1px solid rgba(128,128,128,0.5);overflow-x:visible;overflow-y:auto;} .faq>.qa>.answer{padding:0;margin:0;margin-top:0.3em;overflow:hidden;transition:opacity 0.2s;opacity:1;} .faq>.qa.collapsed>.answer{max-height:0px;opacity:0;} .faq>.qa>h3{cursor:pointer;margin:0;position:relative;} .faq .qa>h3>.link-icon,.faq .qa>h3>.collapse-icon{position:absolute;-webkit-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;transition:color 0.2s,transform 0.2s;} .faq .qa>h3>a.collapse-icon{right:1em;color:rgba(128,128,128,0.6);transform:scale(1,1);} .faq .qa>h3>a.link-icon{right:-0.5em;color:rgba(128,128,128,0.0);} .faq>.qa>h3:hover>.collapse-icon{color:rgba(128,128,128,0.9);} .faq .qa.collapsed>h3>a.collapse-icon{transform:scale(1,-1);} .faq>.qa>h3:hover>.link-icon{color:rgba(128,128,128,0.2);} .faq>.qa>h3:hover>.link-icon:hover{color:rgba(128,128,128,0.5);} .faq>.qa>h3>.collapse-icon::before{content:'▴';} /*^▴▲△⌃*/ .faq>.qa>h3>.link-icon::before{font-size:80%;content:'🔗';} .faq>input.search{box-sizing:border-box;width:100%;max-width:800px;border-radius:2px;border:1px solid rgba(128,128,128,0.5);font-size:120%;padding:0.5em;margin:0.5em 0;transition:border-color 0.2s;} .faq>input.search:focus{outline:none;border:1px solid rgba(128,128,128,0.9);} .faq>.search-info{font-style:italic;}";
var a={};window.addEventListener('load',b);window.addEventListener('hashchange',c);function b(){if(!document.getElementById('faq-div-css')){let d=document.createElement('style');d.type='text/css';d.id='faq-div-css';d.innerText=css;let e=false;for(let f of document.head.children){if(f.nodeName.toLowerCase()=='link'){document.head.insertBefore(d,f);e=true;break;}}
if(!e){document.head.prepend(d);}}
var g=[];for(let h of document.getElementsByClassName('faq-start')){g.push(h);}
for(let h of g){if(h.children.length){continue;}
h.classList.add('faq');let i=[];let j=h.nextSibling;while(j&&!(j.classList&&(j.classList.contains('faq-start')||j.classList.contains('faq-end')||j.classList.contains('faq')))){i.push(j);j=j.nextSibling;}
for(let j of i){h.append(j);}}
var k='';for(let h of document.getElementsByClassName('faq')){if(h.children.length&&!h.classList.contains('initialized')){h.classList.add('initialized');l(h,'faq'+k);k=Number(k)+1;}}
c();}
function c(){let m=location.hash;let n=m.indexOf(':');if(n>0&&m.startsWith('#faq')){let o=m.slice(1,n);let p=a[o];if(p){p.onhash(m.slice(n+1));}}}
var q={};function r(h,step){if(typeof step=='undefined'){step=0;}
var s=1;if(step==0){h.style.transition='none';}else if(step!=q[h.id]){return;}else if(step==1){h.classList.add('highlight');}else if(step==2){h.style.transition=null;s=1000;}else{h.classList.remove('highlight');delete q[h.id];return;}
q[h.id]=step+1;window.setTimeout(r,s,h,step+1);}
function t(headernode){var u=headernode.parentNode;u.classList.remove('hidden');if(u.classList.contains('collapsed')){u.classList.remove('collapsed');}else if(u.classList.contains('collapsible')){u.classList.add('collapsed');}}
function l(ref_node,o){var v=ref_node.dataset;a[o]={'onhash':w};var x=[[null]];var y={};var z=[];var aa=document.createElement('input');var ab=document.createElement('div');ab.classList.add('search-info');aa.setAttribute('type','text');aa.setAttribute('placeholder',v.searchPlaceholder||'Search FAQ ...');aa.addEventListener('input',ac);aa.className='search';if(v.search=='false'){aa.style.display='none';}
ad();ae();af();function ad(){var j=ref_node.children[0];while(j){var ag=j.nodeName.toLowerCase();if(ag=='h3'){var m='';for(let ah of j.innerText.toLowerCase().replace(new RegExp(' ','g'),'-')){if('abcdefghijklmnopqrstuvwxyz_-0123456789'.indexOf(ah)>=0){m=m+ah;}}
var ai=m;for(let aj=1;aj<1000;aj++){if(typeof y[m]=='undefined'){break;}
else{m=ai+aj;}}
y[m]={'hash':m};x.push([m,j]);}else if(ag=='h2'||ag=='h1'||ag=='hr'){x.push([null,j]);}else{let ak=x[x.length-1];ak.push(j);}
j=j.nextSibling;}}
function ae(){for(let al of x){let m=al[0];if(m!==null){y[m].headertext=al[1].textContent.toLowerCase();y[m].text='';for(let aj=2;aj<al.length;aj++){y[m].text+=al[aj].textContent.toLowerCase()+'\n';}}}}
function af(){ref_node.innerHTML='';ref_node.appendChild(aa);ref_node.appendChild(ab);for(let al of x){let m=al[0];if(m!==null){let am=document.createElement('div');am.classList.add('qa');am.setAttribute('id',m);var an=al[1];am.appendChild(an);let ao=document.createElement('div');ao.classList.add('answer');for(let aj=2;aj<al.length;aj++){ao.append(al[aj]);}
am.appendChild(ao);if(v.collapse!='false'){am.classList.add('collapsible');am.classList.add('collapsed');an.setAttribute('onclick','faqdiv.toggle(this);');let ap=document.createElement('a');ap.className='collapse-icon';an.appendChild(ap);}
if(v.link!='false'){let aq=document.createElement('a');aq.className='link-icon';aq.setAttribute('href','#'+o+':'+m);aq.setAttribute('onclick','event.stopPropagation();');an.appendChild(aq);}
ref_node.appendChild(am);y[m].node=am;}else{let ar=document.createElement('div');for(let aj=1;aj<al.length;aj++){ar.append(al[aj]);}
ref_node.appendChild(ar);z.push(ar)}}}
function as(){var i=[];for(let j of ref_node.getElementsByClassName('qa searchresult')){i.push(j);}
for(let j of i){ref_node.removeChild(j);}}
function w(m){var u=y[m];if(u){u.node.classList.remove('hidden');u.node.classList.remove('collapsed');u.node.scrollIntoView();r(u.node);}else if(m){aa.value=m.replace(new RegExp('-','g'),' ');ac();}}
function ac(){var at='ljbsdfaljhsbdkey';at;var au=aa.value.toLowerCase().replace(',','');var av=[];for(let aw of au.split(' ')){if(aw.length>0){av.push(aw);}}
var ax=' how can i , and , or , is ';var ay=[];for(let az=0;az<=av.length;az++){for(let ba=az+1;ba<=av.length;ba++){let bb=av.slice(az,ba).join(' ');if(ax.indexOf(' '+bb+' ')<0){ay.push([ba-az,bb]);}}}
ay.sort(function(a,b){return b[0]-a[0];});if(ay.length==0){as();ab.innerHTML='';for(let m in y){let u=y[m];u.node.classList.remove('hidden');if(u.node.classList.contains('collapsible')){u.node.classList.add('collapsed');}}
for(let j of z){j.classList.remove('hidden');}}else{for(let m in y){let u=y[m];u.node.classList.add('hidden');u.node.classList.remove('collapsed');}
for(let j of z){j.classList.add('hidden');}
var bc=[];for(let m in y){let u=y[m];let bd=0;for(let n=0;n<ay.length;n++){let k=ay[n][0];let be=ay[n][1];if(u.headertext.indexOf(be)>=0){bd+=5*k;}
if(u.text.indexOf(be)>=0){bd+=1*k;}}
bc.push([bd,u.node]);}
bc.sort(function(a,b){return b[0]-a[0];});as();var bf=0;for(let n=0;n<bc.length;n++){let bd=bc[n][0];let j=bc[n][1];j.classList.add('hidden');if(bd>0&&n<16){let bg=j.cloneNode(true);bg.classList.add('searchresult');ref_node.appendChild(bg);bf+=1;bg.classList.remove('hidden');if(bg.classList.remove('collapsible')){if(n<5){bg.classList.remove('collapsed');}else{bg.classList.add('collapsed');}}}}
let bh=v.searchInfo||'COUNT results';ab.innerHTML=bh.replace('COUNT',bf).replace('SUBJECT',aa.value)+'<br>';}}}
window.faqdiv={'version':version,'toggle':t,'init':b};
})();