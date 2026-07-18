/* ================================================================
   Page navigation
================================================================ */
const PAGES = ["page-welcome","page-cake","page-letter","page-gallery","page-gift","page-finale"];
let current = 0;

function buildProgress(){
  const wrap = document.getElementById('progress');
  wrap.innerHTML = '';
  PAGES.forEach((id,i)=>{
    const d = document.createElement('div');
    d.className = 'dot' + (i===0 ? ' active' : '');
    d.onclick = () => goTo(i);
    wrap.appendChild(d);
  });
}

function goTo(i){
  if(i<0 || i>=PAGES.length) return;
  document.getElementById(PAGES[current]).classList.remove('active');
  current = i;
  document.getElementById(PAGES[current]).classList.add('active');
  document.querySelectorAll('.dot').forEach((d,idx)=>d.classList.toggle('active', idx===current));
  document.getElementById('prevBtn').disabled = current===0;
  document.getElementById('nextBtn').disabled = current===PAGES.length-1;
  window.scrollTo({top:0,behavior:'smooth'});
  if(PAGES[current]!=='page-cake') document.getElementById('cakeDim').style.opacity = 0;
  if(PAGES[current]==='page-finale') startFireworks();
}

function resetCake(){
  candlesLit = 3;
  ['flame1','flame2','flame3'].forEach(id=>document.getElementById(id).classList.remove('out'));
  document.getElementById('blowBtn').style.display='';
  document.getElementById('cakeMsg').style.display='none';
  document.getElementById('cakeDim').style.opacity = 0;
}

document.getElementById('homeBtn').onclick = ()=>goTo(0);
document.getElementById('prevBtn').onclick = ()=>goTo(current-1);
document.getElementById('nextBtn').onclick = ()=>goTo(current+1);

function replayJourney(){ resetCake(); goTo(0); }

/* ================================================================
   Ambient background: stars, petals, clouds, fireflies
================================================================ */
function buildAmbient(){
  const layer = document.getElementById('ambient');
  for(let i=0;i<45;i++){
    const s = document.createElement('div');
    s.className='star';
    s.style.left = Math.random()*100+'vw';
    s.style.top = Math.random()*60+'vh';
    s.style.animationDelay = (Math.random()*3)+'s';
    layer.appendChild(s);
  }
  const petals = ['🌸','🌼','💐','🪻'];
  for(let i=0;i<16;i++){
    const p = document.createElement('div');
    p.className='petal';
    p.textContent = petals[Math.floor(Math.random()*petals.length)];
    p.style.left = Math.random()*100+'vw';
    p.style.setProperty('--drift', (Math.random()*80-40)+'px');
    p.style.animationDuration = (14+Math.random()*10)+'s';
    p.style.animationDelay = (Math.random()*12)+'s';
    p.style.fontSize = (14+Math.random()*10)+'px';
    layer.appendChild(p);
  }
  for(let i=0;i<5;i++){
    const c = document.createElement('div');
    c.className='cloud';
    const w = 120+Math.random()*140;
    c.style.width=w+'px'; c.style.height=(w*0.35)+'px';
    c.style.top = (5+Math.random()*20)+'vh';
    c.style.animationDuration=(60+Math.random()*40)+'s';
    c.style.animationDelay=(Math.random()*30)+'s';
    layer.appendChild(c);
  }
  for(let i=0;i<10;i++){
    const f = document.createElement('div');
    f.className='firefly';
    f.style.left = Math.random()*100+'vw';
    f.style.top = (40+Math.random()*50)+'vh';
    f.style.animationDelay = (Math.random()*8)+'s';
    layer.appendChild(f);
  }
}

/* ================================================================
   Page 1 — Welcome: typewriter
================================================================ */
function typewriter(){
  const text = "Someone very special has a surprise waiting...";
  const el = document.getElementById('typewriter');
  let i=0;
  function step(){
    if(i<=text.length){
      el.textContent = text.slice(0,i);
      i++;
      setTimeout(step, 45);
    } else {
      el.style.borderRight='none';
    }
  }
  step();
  document.getElementById('recipientName').textContent = CONFIG.recipientName;
}

/* ================================================================
   Page 2 — Cake / candles / confetti
================================================================ */
let candlesLit = 3;
const TOTAL_CANDLES = 3;
function blowCandles(){
  const flames = ['flame1','flame2','flame3'];
  const idx = flames.length - candlesLit;
  if(candlesLit>0){
    document.getElementById(flames[idx]).classList.add('out');
    candlesLit--;
    const blownSoFar = TOTAL_CANDLES - candlesLit;
    document.getElementById('cakeDim').style.opacity = (blownSoFar / TOTAL_CANDLES) * 0.72;
  }
  if(candlesLit===0){
    document.getElementById('blowBtn').style.display='none';
    document.getElementById('cakeMsg').style.display='block';
    fireConfetti();
    setTimeout(()=>{ document.getElementById('cakeDim').style.opacity = 0; }, 500);
  }
}

function fireConfetti(){
  const colors = ['#9FA8DA','#F7CAD0','#D8C4F3','#E6D6A8','#B8C6F0'];
  for(let i=0;i<60;i++){
    const c = document.createElement('div');
    c.style.position='fixed';
    c.style.top='-10px';
    c.style.left=Math.random()*100+'vw';
    c.style.width='8px';c.style.height='12px';
    c.style.background=colors[Math.floor(Math.random()*colors.length)];
    c.style.zIndex=200;
    c.style.borderRadius='2px';
    c.style.transform=`rotate(${Math.random()*360}deg)`;
    c.style.transition='transform 2.4s ease-in, top 2.4s ease-in, opacity 2.4s ease-in';
    document.body.appendChild(c);
    requestAnimationFrame(()=>{
      c.style.top = (100+Math.random()*10)+'vh';
      c.style.transform=`rotate(${Math.random()*720}deg)`;
      c.style.opacity='0.2';
    });
    setTimeout(()=>c.remove(),2600);
  }
}

/* ================================================================
   Page 4 — Letter
================================================================ */
function openEnvelope(){
  const env = document.getElementById('envelope');
  env.classList.add('open');
  document.getElementById('letterText').textContent = CONFIG.letter.body;
  document.getElementById('letterSign').textContent = CONFIG.letter.signature;
  setTimeout(()=>document.getElementById('letterPaper').classList.add('show'), 500);
}

/* ================================================================
   Page 5 — Gallery
================================================================ */
function renderGallery(){
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = CONFIG.memories.map((m,i)=>`
    <div class="mem-card" onclick="openLightbox(${i})">
      <div class="mem-thumb" style="${m.image ? '' : `background:${m.color};`}">
        ${m.image ? `<img src="${m.image}" alt="${m.title}">` : m.emoji}
      </div>
      <div class="mem-info"><div class="t">${m.title}</div><div class="d">${m.date}</div></div>
    </div>`).join('');
}
function openLightbox(i){
  const m = CONFIG.memories[i];
  const thumb = document.getElementById('lbThumb');
  if(m.image){
    thumb.style.background = '';
    thumb.innerHTML = `<img src="${m.image}" alt="${m.title}">`;
  } else {
    thumb.style.background = m.color;
    thumb.innerHTML = m.emoji;
  }
  document.getElementById('lbTitle').textContent = m.title;
  document.getElementById('lbDate').textContent = m.date;
  document.getElementById('lbCaption').textContent = m.memory;
  document.getElementById('lightbox').classList.add('show');
}
function closeLightbox(){ document.getElementById('lightbox').classList.remove('show'); }

/* ================================================================
   Page 6 — Gift box
================================================================ */
function openGift(){
  const g = document.getElementById('giftWrap');
  if(g.classList.contains('open')) return;
  g.classList.add('open');
  setTimeout(()=>document.getElementById('giftMsg').classList.add('show'), 400);
}

/* ================================================================
   Page 7 — Finale: message + fireworks + lanterns
================================================================ */
function setupFinale(){
  document.getElementById('finalMessage').textContent = CONFIG.finalMessage;
  for(let i=0;i<6;i++){
    const l = document.createElement('div');
    l.className='lantern';
    l.style.left = (10+Math.random()*80)+'vw';
    l.style.animationDelay = (Math.random()*9)+'s';
    document.getElementById('page-finale').appendChild(l);
  }
}

let fireworksStarted = false;
function startFireworks(){
  if(fireworksStarted) return;
  fireworksStarted = true;
  const canvas = document.getElementById('fireworksCanvas');
  const ctx = canvas.getContext('2d');
  function resize(){ canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
  resize(); window.addEventListener('resize', resize);
  let particles = [];
  const colors = ['#F7CAD0','#D8C4F3','#B8C6F0','#E6D6A8','#fff'];
  function burst(x,y){
    const n = 34;
    for(let i=0;i<n;i++){
      const angle = (Math.PI*2*i)/n;
      const speed = 1.6+Math.random()*2.2;
      particles.push({x,y,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,life:1,color:colors[Math.floor(Math.random()*colors.length)]});
    }
  }
  function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy; p.vy+=0.02; p.life-=0.012;
      ctx.globalAlpha = Math.max(p.life,0);
      ctx.fillStyle = p.color;
      ctx.beginPath(); ctx.arc(p.x,p.y,2.4,0,Math.PI*2); ctx.fill();
    });
    particles = particles.filter(p=>p.life>0);
    ctx.globalAlpha = 1;
    requestAnimationFrame(loop);
  }
  loop();
  function randomBurst(){
    if(!document.getElementById('page-finale').classList.contains('active')) return;
    burst(canvas.width*(0.2+Math.random()*0.6), canvas.height*(0.2+Math.random()*0.35));
    setTimeout(randomBurst, 1100+Math.random()*900);
  }
  randomBurst();
}

/* ================================================================
   Music
================================================================ */
let musicOn = true;
const audioEl = new Audio();

if (CONFIG.music) {
    audioEl.src = CONFIG.music;
    audioEl.loop = true;
}

window.addEventListener("load", () => {
    if (CONFIG.music) {
        audioEl.play().catch(() => {
            console.log("Autoplay blocked by browser.");
        });
        document.getElementById("musicToggle").textContent = "🔊";
    }
});

document.getElementById("musicToggle").onclick = () => {
    if (!CONFIG.music) {
        alert("No music file set yet.");
        return;
    }

    musicOn = !musicOn;

    if (musicOn) {
        audioEl.play();
        document.getElementById("musicToggle").textContent = "🔊";
    } else {
        audioEl.pause();
        document.getElementById("musicToggle").textContent = "🔈";
    }
};
/* ================================================================
   Init
================================================================ */
window.onload = ()=>{
  buildAmbient();
  buildProgress();
  typewriter();
  renderGallery();
  setupFinale();
  document.getElementById('prevBtn').disabled = true;
};
