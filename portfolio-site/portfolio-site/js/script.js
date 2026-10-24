(function(){
var $=function(s){return document.querySelector(s)};
var skills=[["HTML",95,"coding"],["CSS",90,"coding"],["JavaScript",90,"coding"],["Node.js",80,"coding"],["GitHub",90,"coding"],["VS Code",95,"coding"],["Figma",85,"illustration"],["Adobe Illustrator",85,"illustration"],["Adobe Photoshop",85,"illustration"],["Adobe After Effects",75,"illustration"],["Adobe InDesign",70,"illustration"]];
var projects=[["Trungo’s Restaurant", "A restaurant website with a photo-collage hero, plus menu, reservations, events and team sections.", ["Restaurant", "Web Design", "HTML & CSS"], "trungos", "https://shrekcoding.github.io/Trungos_update_3.github.io/"], ["Pacific Northwest X-Ray Inc.", "A clean, modern homepage for a medical imaging equipment company, with a bold hero and a clear call to action.", ["Business Site", "Web Design", "Homepage"], "pnwx", "https://shrekcoding.github.io/test_Xray_Homepage.github.io/"], ["Internet Intellects", "A beta design site built around the Internet Intellects brand and its tagline, “Where Designers Are Made.”", ["Branding", "Web Design", "Beta"], "ii", "https://shrekcoding.github.io/Aron-Singel_Design_Beta.github.io/"]];
var IMG={
  "scene": "images/scene.webp",
  "cans": "images/cans.webp",
  "chess": "images/chess.webp",
  "sunscorch": "images/sunscorch.webp",
  "galea": "images/galea.webp",
  "trungos": "images/trungos.webp",
  "pnwx": "images/pnwx.webp",
  "ii": "images/ii.webp"
};
var designs=[["Vampire Crypt Scene", "An isometric low-poly 3D scene of a crypt, lit by warm candlelight and a glowing red ceiling.", ["3D Scene", "Isometric", "Lighting"], "scene", "", "#070a0f"], ["Energy Drink Can Series", "A lineup of five illustrated energy drink cans, each with its own character artwork and color scheme.", ["Packaging", "Illustration", "3D Mockup"], "cans", "", "#282a2c"], ["Tank Chess Set", "A tank-themed chess set with 3D-printed pieces on a laser-engraved wooden board with quick guides.", ["3D Printing", "Product Design", "Laser Engraving"], "chess", "object-position:50% 70%", "#020406"], ["Sunscorch Hobbies Logo", "A three-color dragon and sun logo for a hobby shop, shown on a dark navy background.", ["Logo", "Branding", "Vector"], "sunscorch", "contain", "#100e2a"], ["Galea Attorney Law Firm", "A logo for a law firm featuring a gold helmet inside a laurel wreath, paired with a classic serif wordmark.", ["Logo", "Branding", "Vector"], "galea", "contain", "#000000"]];
var cats=["all","coding","illustration"],cur="all";
function drawSkills(){
  $("#tabs").innerHTML=cats.map(function(c){return '<button class="tab'+(c===cur?' on':'')+'" data-c="'+c+'">'+c+'</button>'}).join("");
  $("#skillGrid").innerHTML=skills.filter(function(s){return cur==="all"||s[2]===cur}).map(function(s){return '<div class="glass skill"><h3>'+s[0]+'</h3><div class="bar"><div style="width:'+s[1]+'%"></div></div><div class="pct">'+s[1]+'%</div></div>'}).join("");
}
$("#tabs").addEventListener("click",function(e){var c=e.target.dataset.c;if(c){cur=c;drawSkills()}});
drawSkills();
var ptab="design",pcats=["design","websites"];
function tagsH(t){return t.map(function(x){return '<span>'+x+'</span>'}).join("")}
function drawProj(){
  $("#ptabs").innerHTML=pcats.map(function(c){return '<button class="tab'+(c===ptab?' on':'')+'" data-c="'+c+'">'+c+'</button>'}).join("");
  $("#projGrid").innerHTML=ptab==="design"?designs.map(function(d,i){var st=d[4]==="contain"?"":(d[4]?' style="'+d[4]+'"':'');return '<div class="glass proj"><div class="thumb zoom'+(d[4]==="contain"?' contain':'')+'" data-i="'+i+'" style="background:'+d[5]+'"><img src="'+IMG[d[3]]+'" alt="'+d[0]+'" loading="lazy"'+st+'></div><div class="pb"><div class="tags">'+tagsH(d[2])+'</div><h3>'+d[0]+'</h3><p>'+d[1]+'</p><a href="#" data-i="'+i+'" class="zl">View full size ↗</a></div></div>'}).join(""):projects.map(function(p){return '<div class="glass proj"><a class="thumb" href="'+p[4]+'" target="_blank" rel="noopener" style="display:block"><img src="'+IMG[p[3]]+'" alt="'+p[0]+' website preview" loading="lazy" style="object-position:top"></a><div class="pb"><div class="tags">'+tagsH(p[2])+'</div><h3>'+p[0]+'</h3><p>'+p[1]+'</p><a href="'+p[4]+'" target="_blank" rel="noopener">Live site ↗</a></div></div>'}).join("");
  $("#ghBtn").style.display=ptab==="design"?"none":"";
}
$("#ptabs").addEventListener("click",function(e){var c=e.target.dataset.c;if(c){ptab=c;drawProj()}});
var lb=$("#lb");
function openLb(i){var d=designs[i];lb.querySelector("img").src=IMG[d[3]];lb.querySelector("img").alt=d[0];lb.querySelector("figcaption").textContent=d[0];lb.classList.add("on")}
$("#projGrid").addEventListener("click",function(e){var t=e.target.closest("[data-i]");if(t){e.preventDefault();openLb(+t.dataset.i)}});
lb.addEventListener("click",function(){lb.classList.remove("on")});
addEventListener("keydown",function(e){if(e.key==="Escape")lb.classList.remove("on")});
drawProj();

var nav=$("#nav");addEventListener("scroll",function(){nav.classList.toggle("s",scrollY>10)});
var links=$("#links"),bg=$("#burger");
function menu(o){links.classList.toggle("open",o);nav.classList.toggle("mo",o);bg.textContent=o?"✕":"☰";bg.setAttribute("aria-expanded",o);document.body.style.overflow=o?"hidden":""}
bg.onclick=function(){menu(!links.classList.contains("open"))};
links.addEventListener("click",function(e){if(e.target.tagName==="A")menu(false)});
addEventListener("keydown",function(e){if(e.key==="Escape")menu(false)});
addEventListener("resize",function(){if(innerWidth>760)menu(false)});
var root=document.documentElement;
$("#form").addEventListener("submit",function(e){e.preventDefault();var f=e.target,i=f.querySelectorAll("input"),n=i[0].value.trim(),em=i[1].value.trim(),m=f.querySelector("textarea").value.trim(),a=document.createElement("a");
a.href="mailto:aron.singel@verizon.net?subject="+encodeURIComponent("Portfolio message from "+n)+"&body="+encodeURIComponent("Name: "+n+"\nEmail: "+em+"\n\n"+m);a.target="_blank";a.rel="noopener";document.body.appendChild(a);a.click();a.remove();
var t=$("#toast");t.classList.add("show");setTimeout(function(){t.classList.remove("show")},7000)});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add("in")})},{threshold:.12});
document.querySelectorAll(".rv").forEach(function(el){io.observe(el)});

var PAL={dark:{a:{l1:[11,34,49],l2:[9,38,31],b:[110,200,185,.15]},b:{l1:[32,26,76],l2:[17,46,42],b:[175,140,245,.17]}},light:{a:{l1:[205,227,224],l2:[183,214,200],b:[20,90,75,.13]},b:{l1:[228,213,238],l2:[168,205,190],b:[100,70,170,.13]}}},tk=0;
function mix(a,b,t){return a.map(function(v,i){return v+(b[i]-v)*t})}
function rgb(c){return c.length>3?"rgba("+Math.round(c[0])+","+Math.round(c[1])+","+Math.round(c[2])+","+c[3].toFixed(3)+")":"rgb("+Math.round(c[0])+","+Math.round(c[1])+","+Math.round(c[2])+")"}
function upd(){tk=0;var m=document.documentElement.scrollHeight-innerHeight,p=m>0?Math.min(1,Math.max(0,scrollY/m)):0,P=PAL[root.dataset.theme==="light"?"light":"dark"],st=root.style;
st.setProperty("--land1",rgb(mix(P.a.l1,P.b.l1,p)));st.setProperty("--land2",rgb(mix(P.a.l2,P.b.l2,p)));st.setProperty("--band",rgb(mix(P.a.b,P.b.b,p)));st.setProperty("--py",Math.min(scrollY,1000)/1000)}
addEventListener("scroll",function(){if(!tk)tk=requestAnimationFrame(upd)});addEventListener("resize",upd);upd();
var Fp=[[0,80],[180,45],[320,70],[500,35],[700,74],[900,40],[1100,72],[1280,42],[1440,68]],Bp=[[0,55],[160,20],[300,50],[470,5],[640,48],[820,15],[1000,52],[1200,10],[1440,45]];
function pts(a,m){return (m?a.map(function(q){return [1440-q[0],q[1]]}).reverse():a).map(function(q,i){return (i?"L":"M")+q[0]+" "+q[1]}).join(" ")}
document.querySelectorAll(".banded").forEach(function(sec,i){var m=i%2;sec.insertAdjacentHTML("afterbegin",'<svg class="ridge" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true"><path class="b" d="'+pts(Bp,m)+'"/><path class="f" d="'+pts(Fp,m)+' V90 H0Z"/><path class="l" d="'+pts(Fp,m)+'"/></svg>')});
var reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
var sky=$("#sky"),sc=sky.getContext("2d"),W,H,stars=[],meteors=[],last=0,nextM=0;
function resize(){var d=Math.min(devicePixelRatio||1,2);var hero=$("#hero");W=hero.offsetWidth;H=hero.offsetHeight;sky.width=W*d;sky.height=H*d;sc.setTransform(d,0,0,d,0,0);stars=[];for(var i=0;i<Math.round(W*H/5000);i++)stars.push({x:Math.random()*W,y:Math.random()*H*.85,r:Math.random()*1.2+.2,p:Math.random()*6.28})}
function drawSky(t){var g=sc.createLinearGradient(0,0,0,H);g.addColorStop(0,"#030612");g.addColorStop(.6,"#0a1330");g.addColorStop(1,"#101c3a");sc.fillStyle=g;sc.fillRect(0,0,W,H);stars.forEach(function(s){sc.globalAlpha=.35+.65*Math.abs(Math.sin(t*.0008+s.p));sc.fillStyle="#fff";sc.beginPath();sc.arc(s.x,s.y,s.r,0,6.283);sc.fill()});sc.globalAlpha=1}
function spawn(){var a=(30+Math.random()*10)*Math.PI/180,fromTop=Math.random()<.7;meteors.push({x:fromTop?W*(.25+Math.random()*.95):W+30,y:fromTop?-30:Math.random()*H*.45,vx:-Math.cos(a),vy:Math.sin(a),sp:.55+Math.random()*.6,len:90+Math.random()*140,w:1+Math.random()*1.2})}
function drawMeteors(t,dt){if(t>nextM&&meteors.length<10){spawn();if(Math.random()<.35)spawn();nextM=t+300+Math.random()*1000}
meteors=meteors.filter(function(m){m.x+=m.vx*m.sp*dt;m.y+=m.vy*m.sp*dt;var a=1-Math.max(0,(m.y-H*.5)/(H*.28));if(a<=0||m.x<-250)return false;
var tx=m.x-m.vx*m.len,ty=m.y-m.vy*m.len,g=sc.createLinearGradient(tx,ty,m.x,m.y);g.addColorStop(0,"rgba(255,255,255,0)");g.addColorStop(1,"rgba(235,245,255,"+a+")");
sc.strokeStyle=g;sc.lineWidth=m.w;sc.lineCap="round";sc.beginPath();sc.moveTo(tx,ty);sc.lineTo(m.x,m.y);sc.stroke();
sc.fillStyle="rgba(255,255,255,"+a+")";sc.shadowColor="rgba(180,215,255,"+a+")";sc.shadowBlur=10;sc.beginPath();sc.arc(m.x,m.y,m.w*.9,0,6.283);sc.fill();sc.shadowBlur=0;return true})}
function frame(t){var dt=Math.min(t-last,50);last=t;if(reduce||scrollY<H+60){drawSky(t);if(!reduce)drawMeteors(t,dt)}if(!reduce)requestAnimationFrame(frame)}
addEventListener("resize",function(){resize();if(reduce)frame(3000)});
resize();frame(reduce?3000:0);

/* ocean life in About */
var sea=$("#about .sea"),about=$("#about");
function rnd(a,b){return a+Math.random()*(b-a)}
function mk(c,st){var e=document.createElement("div");e.className=c;if(st)e.style.cssText=st;return e}
function fishSVG(c){return '<svg viewBox="0 0 60 32" width="100%" style="color:'+c+'"><g class="tail"><path d="M20 16 L3 4 Q8 16 3 28Z" fill="currentColor" opacity=".85"/></g><path d="M16 16 C24 3 44 3 56 16 C44 29 24 29 16 16Z" fill="currentColor"/><path d="M28 7 Q33 0 41 6Z" fill="currentColor" opacity=".8"/><path d="M24 17 C32 22 42 22 50 17" stroke="rgba(255,255,255,.35)" fill="none" stroke-width="1.5"/><circle cx="47" cy="13" r="1.9" fill="#04120d"/></svg>'}
function jellySVG(c){return '<svg viewBox="0 0 60 110" width="100%" style="color:'+c+'"><g class="bell"><path d="M5 38 C5 8 55 8 55 38 Q45 31 30 36 Q15 31 5 38Z" fill="currentColor" opacity=".5"/><path d="M14 30 C16 18 44 18 46 30" stroke="#fff" stroke-opacity=".55" fill="none" stroke-width="2"/></g><g stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" opacity=".7"><path class="ten" d="M15 38 Q10 60 16 80 T14 106"/><path class="ten t2" d="M25 38 Q30 62 24 84 T27 108"/><path class="ten" d="M35 38 Q30 60 37 82 T34 106"/><path class="ten t2" d="M45 38 Q50 58 44 78 T47 102"/></g></svg>'}
var crit=[],vis=true,lastT=0,Rr;
function measure(){var r=sea.getBoundingClientRect(),o=[],m=30;
function add(b){o.push({x:b.left-r.left-m,y:b.top-r.top-m,w:b.width+2*m,h:b.height+2*m})}
var h2=about.querySelector("h2");if(h2){var g=document.createRange();g.selectNodeContents(h2);add(g.getBoundingClientRect())}
var tx=about.querySelector(".two > div:first-child");if(tx)add(tx.getBoundingClientRect());
about.querySelectorAll(".item").forEach(function(el){add(el.getBoundingClientRect())});
return {W:r.width,H:r.height-70,o:o}}
function findBox(bw,bh){if(Rr.W<bw||Rr.H<bh)return null;for(var t=0;t<300;t++){var x=rnd(0,Rr.W-bw),y=rnd(0,Rr.H-bh),ok=true;for(var i=0;i<Rr.o.length;i++){var q=Rr.o[i];if(x<q.x+q.w&&x+bw>q.x&&y<q.y+q.h&&y+bh>q.y){ok=false;break}}if(ok)return{x:x,y:y,w:bw,h:bh}}return null}
function addFish(n,w,col,sp){if(reduce)return;var cw=n>1?w*1.7:w,bh=n>1?84:Math.round(w*.55+30),b=findBox(Math.max(cw*2.2,220)+rnd(0,160),bh);if(!b)return;
var el=mk("sw","width:"+w+"px");for(var i=0;i<n;i++){var f=mk("bob","position:absolute;width:"+Math.round(w*(n>1?rnd(.55,.8):1))+"px;left:"+Math.round(n>1?rnd(0,w*.9):0)+"px;top:"+Math.round(n>1?rnd(-20,20):0)+"px;animation-delay:-"+rnd(0,3).toFixed(1)+"s");f.innerHTML=fishSVG(col);el.appendChild(f)}
sea.appendChild(el);crit.push({t:"f",el:el,b:b,x:rnd(0,b.w-cw),dir:Math.random()<.5?1:-1,sp:sp,cw:cw,oy:n>1?22:15})}
function addJelly(w,col){var jh=w*110/60,b=findBox(w+80,jh+80);if(!b)return;var el=mk("jf","width:"+w+"px");el.innerHTML=jellySVG(col);sea.appendChild(el);crit.push({t:"j",el:el,b:b,w:w,jh:jh,ph:rnd(0,6.28)})}
function place(c,t){var b=c.b;if(c.t==="f"){el=c.el;el.classList.toggle("L",c.dir<0);el.style.transform="translate("+(b.x+c.x).toFixed(1)+"px,"+(b.y+c.oy).toFixed(1)+"px)"}else{var ax=(b.w-c.w)/2*.9,ay=(b.h-c.jh)/2*.9;c.el.style.transform="translate("+(b.x+(b.w-c.w)/2+Math.sin(t/2300+c.ph)*ax).toFixed(1)+"px,"+(b.y+(b.h-c.jh)/2+Math.cos(t/3300+c.ph)*ay).toFixed(1)+"px)"}}
var el;
function layout(){crit.forEach(function(c){c.el.remove()});crit=[];Rr=measure();
addJelly(64,"#ff9de2");addJelly(52,"#8fd3ff");addJelly(44,"#b9a2ff");
addFish(5,70,"#7cf5c8",34);addFish(4,60,"#ff8fab",30);addFish(1,56,"#5dd6ff",48);addFish(1,40,"#ffb86b",58);addFish(1,72,"#c58bff",36);addFish(1,34,"#ffe27a",64);
crit.forEach(function(c){place(c,0)})}
function oc(t){requestAnimationFrame(oc);var dt=Math.min(t-lastT,50);lastT=t;if(!vis||reduce)return;crit.forEach(function(c){if(c.t==="f"){c.x+=c.dir*c.sp*dt/1000;var mx=c.b.w-c.cw;if(c.x<0){c.x=0;c.dir=1}else if(c.x>mx){c.x=mx;c.dir=-1}}place(c,t)})}

for(var i=0;i<16;i++){var z=rnd(6,18),d=rnd(9,20);sea.appendChild(mk("bub","left:"+rnd(1,99).toFixed(1)+"%;width:"+z.toFixed(0)+"px;height:"+z.toFixed(0)+"px;animation-duration:"+d.toFixed(1)+"s;animation-delay:-"+rnd(0,d).toFixed(1)+"s"))}
for(var i=0;i<26;i++)sea.appendChild(mk("pk","left:"+rnd(0,100).toFixed(1)+"%;top:"+rnd(0,100).toFixed(1)+"%;animation-delay:-"+rnd(0,4).toFixed(1)+"s;animation-duration:"+rnd(3,7).toFixed(1)+"s"));
function sizeSea(){sea.style.setProperty("--H",(sea.offsetHeight+60)+"px")}sizeSea();addEventListener("resize",sizeSea);
var firstSeen=false;new IntersectionObserver(function(es){vis=es[0].isIntersecting;sea.classList.toggle("off",!vis);if(vis&&!firstSeen){firstSeen=true;setTimeout(layout,1000)}}).observe(about);
var sw=$("#skills .swamp");
function reedSVG(){var h=Math.round(rnd(150,230)),o='<svg viewBox="0 0 70 '+h+'" width="70" height="'+h+'" style="display:block;overflow:visible">';
for(var i=0;i<4;i++){var x=8+i*15+rnd(-3,3),top=rnd(14,40),off=rnd(-14,14),d=rnd(3,6);
o+='<g class="reed" style="animation-duration:'+d.toFixed(1)+'s;animation-delay:-'+rnd(0,d).toFixed(1)+'s"><path d="M'+x.toFixed(1)+' '+h+' Q'+(x+off*.4).toFixed(1)+' '+(h*.55).toFixed(0)+' '+(x+off).toFixed(1)+' '+top.toFixed(1)+'" stroke="#2f7a4c" stroke-width="2.2" fill="none" stroke-linecap="round"/>'+(i%2?'<ellipse cx="'+(x+off).toFixed(1)+'" cy="'+(top+10).toFixed(1)+'" rx="3.6" ry="11" fill="#6b4a2b"/>':'<path d="M'+(x+off).toFixed(1)+' '+top.toFixed(1)+' l-3 -20 M'+(x+off).toFixed(1)+' '+top.toFixed(1)+' l5 -16" stroke="#3a9460" stroke-width="1.6" fill="none"/>')+'</g>'}
return o+'</svg>'}
[["left:1%",""],["left:6%"," x"],["right:2%",""],["right:7%"," x"]].forEach(function(c){var d=mk("rc"+c[1],c[0]);d.innerHTML=reedSVG();sw.appendChild(d)});
for(var i=0;i<18;i++){var f=mk("fy","left:"+rnd(2,98).toFixed(1)+"%;top:"+rnd(8,90).toFixed(1)+"%;--d:"+rnd(9,18).toFixed(1)+"s;--x1:"+rnd(-40,40).toFixed(0)+"px;--y1:"+rnd(-40,40).toFixed(0)+"px;--x2:"+rnd(-60,60).toFixed(0)+"px;--y2:"+rnd(-50,50).toFixed(0)+"px;--x3:"+rnd(-40,40).toFixed(0)+"px;--y3:"+rnd(-40,40).toFixed(0)+"px;animation-delay:-"+rnd(0,10).toFixed(1)+"s,-"+rnd(0,3).toFixed(1)+"s");sw.appendChild(f)}
new IntersectionObserver(function(es){sw.classList.toggle("off",!es[0].isIntersecting)}).observe($("#skills"));
var cty=$("#projects .scene"),ar=$("#contact .scene");
function stars(sc,n,a,b){for(var i=0;i<n;i++)sc.appendChild(mk("st","left:"+rnd(0,100).toFixed(1)+"%;top:"+rnd(a,b).toFixed(1)+"%;width:"+(Math.random()<.2?3:2)+"px;height:"+(Math.random()<.2?3:2)+"px;animation-duration:"+rnd(2,6).toFixed(1)+"s;animation-delay:-"+rnd(0,6).toFixed(1)+"s"))}
function city(){var o='<svg class="city" viewBox="0 0 1440 320" preserveAspectRatio="xMidYMax slice">',neon=0,L=[{c:"#171f47",a:90,b:200,p:.1,w:["#8fa6ff"],o:.6},{c:"#0e1434",a:70,b:250,p:.2,w:["#ffd27a","#9ad7ff"],o:.85},{c:"#070a1c",a:60,b:300,p:.28,w:["#ffcf70","#ffe6a0","#7fe6ff","#ff9ad1"],o:.95,n:1}];
L.forEach(function(l){var x=-10;while(x<1440){var w=rnd(34,84),h=rnd(l.a,l.b),y=320-h,r=Math.random();o+='<rect x="'+x.toFixed(0)+'" y="'+y.toFixed(0)+'" width="'+w.toFixed(0)+'" height="'+h.toFixed(0)+'" fill="'+l.c+'"/>';
if(r<.3)o+='<rect x="'+(x+w/2).toFixed(0)+'" y="'+(y-18).toFixed(0)+'" width="1.6" height="18" fill="'+l.c+'"/>';else if(r<.5)o+='<rect x="'+(x+w*.2).toFixed(0)+'" y="'+(y-10).toFixed(0)+'" width="'+(w*.6).toFixed(0)+'" height="10" fill="'+l.c+'"/>';
var cols=Math.floor((w-8)/11),rows=Math.floor((h-14)/14);
for(var rr=0;rr<rows;rr++)for(var cc=0;cc<cols;cc++)if(Math.random()<l.p)o+='<rect'+(Math.random()<.04?' class="wf" style="animation-delay:-'+rnd(0,6).toFixed(1)+'s"':'')+' x="'+(x+6+cc*11).toFixed(0)+'" y="'+(y+8+rr*14).toFixed(0)+'" width="5" height="7" fill="'+l.w[Math.floor(Math.random()*l.w.length)]+'" fill-opacity="'+l.o+'"/>';
if(l.n&&w>56&&neon<4&&Math.random()<.3){neon++;var nc=["#ff4fd8","#4ff0ff","#ff8a4f"][neon%3];o+='<rect class="neon" style="color:'+nc+';animation-delay:-'+rnd(0,5).toFixed(1)+'s" x="'+(x+8).toFixed(0)+'" y="'+(y+h*.3).toFixed(0)+'" width="'+(w-16).toFixed(0)+'" height="5" rx="2" fill="'+nc+'"/>'}
x+=w+rnd(-4,8)}});return o+'</svg>'}
stars(cty,30,4,40);cty.insertAdjacentHTML("beforeend",city()+'<div class="street"></div>');
for(var i=0;i<9;i++)cty.appendChild(mk("car"+(i%2?" r":""),"bottom:"+rnd(30,66).toFixed(0)+"px;animation-duration:"+rnd(7,16).toFixed(1)+"s;animation-delay:-"+rnd(0,14).toFixed(1)+"s"));
stars(ar,60,5,58);
var caps="",pk=[[300,70],[500,100],[760,90],[1000,110],[1250,80],[110,120],[1350,140]];
pk.forEach(function(q){var x=q[0],y=q[1];caps+='<path d="M'+(x-24)+' '+(y+38)+' L'+x+' '+y+' L'+(x+20)+' '+(y+32)+' L'+(x+9)+' '+(y+27)+' L'+(x-2)+' '+(y+36)+' L'+(x-10)+' '+(y+30)+'Z" fill="#cfe6ff" fill-opacity=".75"/>'});
var pines="",pn=[[90,170,44,110],[40,196,34,86],[150,206,30,76],[1290,168,44,110],[1340,190,34,88],[1240,210,28,70]];
pn.forEach(function(q){pines+='<use href="#pine" x="'+q[0]+'" y="'+q[1]+'" width="'+q[2]+'" height="'+q[3]+'" style="fill:#15324f;stroke:#9cc9ff;stroke-width:.8;stroke-opacity:.5"/>'});
ar.insertAdjacentHTML("beforeend",'<svg class="arc" viewBox="0 0 1440 320" preserveAspectRatio="xMidYMax slice"><path d="M0 190 L110 120 L190 165 L300 70 L400 150 L500 100 L620 170 L760 90 L880 160 L1000 110 L1120 165 L1250 80 L1350 140 L1440 105 V320 H0Z" fill="#17305a"/>'+caps+'<path d="M0 235 C260 200 520 255 820 225 C1080 200 1280 245 1440 220 V320 H0Z" fill="#274d78"/><path d="M0 275 C300 245 560 290 880 262 C1120 242 1300 280 1440 258 V320 H0Z" fill="#3a6a95"/>'+pines+'<ellipse class="win" cx="1128" cy="268" rx="46" ry="14" fill="rgba(255,190,100,.28)"/><g transform="translate(1090 232)"><path d="M0 34 A38 34 0 0 1 76 34Z" fill="#cfe4f6"/><path d="M6 20 Q38 6 70 20 M2 28 H74 M20 12 V28 M38 6 V28 M56 12 V28" stroke="#8fb4d6" stroke-width="1" fill="none"/><path class="win" d="M30 34 A8 12 0 0 1 46 34Z" fill="#ffcf80"/></g><path d="M0 305 C340 288 700 312 1020 296 C1220 286 1350 304 1440 296 V320 H0Z" fill="#5b8db3"/></svg>');
for(var i=0;i<45;i++){var z=rnd(2,5).toFixed(1);ar.appendChild(mk("sf","left:"+rnd(0,100).toFixed(1)+"%;width:"+z+"px;height:"+z+"px;opacity:"+rnd(.4,.9).toFixed(2)+";--sx:"+rnd(-50,50).toFixed(0)+"px;animation-duration:"+rnd(9,20).toFixed(1)+"s;animation-delay:-"+rnd(0,20).toFixed(1)+"s"))}
function sizeAr(){ar.style.setProperty("--H",ar.offsetHeight+"px")}sizeAr();addEventListener("resize",sizeAr);
[[cty,"#projects"],[ar,"#contact"]].forEach(function(q){new IntersectionObserver(function(es){q[0].classList.toggle("off",!es[0].isIntersecting)}).observe($(q[1]))});
layout();requestAnimationFrame(oc);var rt;addEventListener("resize",function(){clearTimeout(rt);rt=setTimeout(layout,250)});addEventListener("load",layout);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(layout);
about.addEventListener("click",function(e){if(e.target.closest("a,button")||reduce)return;var r=sea.getBoundingClientRect();for(var i=0;i<7;i++){var z=rnd(6,16),b=mk("bub pop","left:"+(e.clientX-r.left+rnd(-18,18)).toFixed(0)+"px;top:"+(e.clientY-r.top+rnd(-10,10)).toFixed(0)+"px;width:"+z.toFixed(0)+"px;height:"+z.toFixed(0)+"px;--dx:"+rnd(-30,30).toFixed(0)+"px;animation-delay:"+(i*60)+"ms");sea.appendChild(b);setTimeout(function(x){x.remove()},3200,b)}});
})();
