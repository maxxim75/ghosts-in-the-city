
const cfg = window.GITC_CONFIG;
const transporterGallery = [
  "assets/images/transporter/Steam_ScreenshotN02-2048.webp",
  "assets/images/transporter/Steam_ScreenshotN10-2048.webp",
  "assets/images/transporter/Steam_ScreenshotN11-2048.webp",
  "assets/images/transporter/Steam_ScreenshotJ05-2048.webp",
  "assets/images/transporter/Steam_ScreenshotJ09-2048.webp",
  "assets/images/transporter/Steam_ScreenshotN04-2048.webp",
  "assets/images/transporter/Steam_ScreenshotN06-2048.webp",
  "assets/images/transporter/Steam_ScreenshotN08-2048.webp",
  "assets/images/transporter/Steam_ScreenshotN09-2048.webp"
];
let lbIndex = 0;
let lbMode = "gitc";

document.addEventListener("DOMContentLoaded", () => {
  bindLinks();
  initNav();
  initHeroVideo();
  initVideos();
  initGallery();
  initTransporterGallery();
  initLightbox();
});

function bindLinks(){
  document.querySelectorAll("[data-steam]").forEach(el => setLink(el,cfg.steamUrl,"Steam"));
  document.querySelectorAll("[data-reddit]").forEach(el => setLink(el,cfg.redditUrl,"Reddit"));
  document.querySelectorAll("[data-discord]").forEach(el => setLink(el,cfg.discordUrl,"Discord"));
  const mail = cfg.contactEmail
    ? `mailto:${cfg.contactEmail}?subject=${encodeURIComponent("Ghosts in the City - Publishing / Investment / Contact")}`
    : "";
  document.querySelectorAll("[data-contact]").forEach(el => setLink(el,mail,"Contact"));
}

function setLink(el,url,label){
  if(url){
    el.href=url;
    el.target=url.startsWith("mailto:") ? "_self" : "_blank";
    el.rel="noopener noreferrer";
  }else{
    el.classList.add("disabled");
    el.title=`${label}: add the link in site-config.js`;
    el.setAttribute("aria-disabled","true");
  }
}

function initNav(){
  const topbar=document.querySelector(".topbar");
  const menu=document.querySelector(".mobile-menu");
  const nav=document.querySelector(".nav");
  addEventListener("scroll",()=>topbar.classList.toggle("scrolled",scrollY>20),{passive:true});
  menu.addEventListener("click",()=>nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
}

function initHeroVideo(){
  const wrap=document.querySelector("#hero-video");
  const soundButton=document.querySelector("#hero-sound-toggle");
  if(!wrap || !cfg.heroVideoId) return;

  const id=cfg.heroVideoId;
  const src=`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&modestbranding=1&rel=0&playsinline=1&disablekb=1&fs=0&enablejsapi=1`;

  const iframe=document.createElement("iframe");
  iframe.src=src;
  iframe.title="Ghosts in the City background video";
  iframe.allow="autoplay; encrypted-media; picture-in-picture";
  iframe.setAttribute("tabindex","-1");

  let soundOn=false;

  const youtubeCommand=(func,args=[])=>{
    if(!iframe.contentWindow) return;
    iframe.contentWindow.postMessage(JSON.stringify({
      event:"command",
      func,
      args
    }),"*");
  };

  const updateSoundButton=()=>{
    if(!soundButton) return;
    soundButton.setAttribute("aria-pressed",soundOn ? "true" : "false");
    soundButton.setAttribute(
      "aria-label",
      soundOn ? "Turn hero video sound off" : "Turn hero video sound on"
    );
    const label=soundButton.querySelector(".sound-label");
    const icon=soundButton.querySelector(".sound-icon");
    if(label) label.textContent=soundOn ? "Sound Off" : "Sound On";
    if(icon) icon.textContent=soundOn ? "◼" : "▶";
    soundButton.classList.toggle("sound-on",soundOn);
  };

  iframe.onload=()=>{
    setTimeout(()=>{
      wrap.classList.add("ready");
      if(soundButton) soundButton.classList.add("visible");
    },500);
  };

  if(soundButton){
    soundButton.addEventListener("click",()=>{
      soundOn=!soundOn;
      if(soundOn){
        youtubeCommand("unMute");
        youtubeCommand("setVolume",[100]);
      }else{
        youtubeCommand("mute");
      }
      updateSoundButton();
    });
    updateSoundButton();
  }

  wrap.appendChild(iframe);
}

function initVideos(){
  const grid=document.querySelector("#video-grid");
  if(!grid) return;
  cfg.videos.forEach(v=>{
    const card=document.createElement("article");
    card.className="video-card";
    card.innerHTML=`<div class="video-frame"></div>`;
    mountVideo(card.querySelector(".video-frame"),v);
    grid.appendChild(card);
  });
}

function mountVideo(frame,v){
  if(!frame) return;
  frame.innerHTML=`
    <div class="video-thumb" style="background-image:url('https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg')" role="button" tabindex="0" aria-label="Play ${esc(v.title)}">
      <button class="play" aria-label="Play video">▶</button>
      <div class="video-label">${esc(v.title)}</div>
    </div>`;
  const start=()=>{
    frame.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0" title="${esc(v.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  };
  const t=frame.querySelector(".video-thumb");
  t.addEventListener("click",start,{once:true});
  t.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();start();}},{once:true});
}

function imgHTML(name,alt){
  return `<picture>
    <source media="(max-width:820px)" srcset="assets/images/${name}-768.webp">
    <source media="(max-width:1500px)" srcset="assets/images/${name}-1280.webp">
    <img src="assets/images/${name}-2048.webp" alt="${esc(alt)}" loading="lazy">
  </picture>`;
}

function initGallery(){
  const gallery=document.querySelector("#gallery-grid");
  cfg.gallery.forEach((name,i)=>{
    const d=document.createElement("div");
    d.className="shot";
    d.innerHTML=imgHTML(name,`Ghosts in the City screenshot ${i+1}`);
    const img=d.querySelector("img");
    if(i<2) img.loading="eager";
    d.addEventListener("click",()=>openLightbox(i));
    gallery.appendChild(d);
  });
}


function initTransporterGallery(){
  document.querySelectorAll("[data-transporter-index]").forEach(el=>{
    const i=Number(el.dataset.transporterIndex);
    el.addEventListener("click",()=>openTransporterLightbox(i));
  });
}

function initLightbox(){
  document.querySelector(".lb-close").addEventListener("click",closeLightbox);
  document.querySelector(".lb-prev").addEventListener("click",()=>moveLb(-1));
  document.querySelector(".lb-next").addEventListener("click",()=>moveLb(1));
  document.querySelector(".lightbox").addEventListener("click",e=>{
    if(e.target.classList.contains("lightbox")) closeLightbox();
  });
  addEventListener("keydown",e=>{
    const lb=document.querySelector(".lightbox");
    if(!lb.classList.contains("open")) return;
    if(e.key==="Escape") closeLightbox();
    if(e.key==="ArrowLeft") moveLb(-1);
    if(e.key==="ArrowRight") moveLb(1);
  });
}
function openLightbox(i){
  lbMode="gitc";
  lbIndex=i;
  updateLb();
  document.querySelector(".lightbox").classList.add("open");
  document.body.style.overflow="hidden";
}
function openTransporterLightbox(i){
  lbMode="transporter";
  lbIndex=i;
  updateLb();
  document.querySelector(".lightbox").classList.add("open");
  document.body.style.overflow="hidden";
}
function closeLightbox(){
  document.querySelector(".lightbox").classList.remove("open");
  document.body.style.overflow="";
}
function moveLb(d){
  const total=lbMode==="transporter" ? transporterGallery.length : cfg.gallery.length;
  lbIndex=(lbIndex+d+total)%total;
  updateLb();
}
function updateLb(){
  const im=document.querySelector("#lb-image");
  if(lbMode==="transporter"){
    im.src=transporterGallery[lbIndex];
    im.alt=`Transporter screenshot ${lbIndex+1}`;
  }else{
    const n=cfg.gallery[lbIndex];
    im.src=`assets/images/${n}-2048.webp`;
    im.alt=`Ghosts in the City screenshot ${lbIndex+1}`;
  }
}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}
