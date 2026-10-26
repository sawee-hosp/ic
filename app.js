:root{--bg:#050b18;--card:rgba(255,255,255,.06);--line:rgba(255,255,255,.12);--txt:#e6f1ff;--muted:#8aa0bf;
--c1:#22d3ee;--c2:#a78bfa;--c3:#34d399;--bad:#fb7185;--gold:#fbbf24;--r:20px}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Prompt',sans-serif;background:var(--bg);color:var(--txt);min-height:100vh;overflow-x:hidden}
.hidden{display:none!important}
main{max-width:1180px;margin:0 auto;padding:24px 20px 80px}

/* animated background */
.bg{position:fixed;inset:0;z-index:-1;overflow:hidden}
.blob{position:absolute;border-radius:50%;filter:blur(90px);opacity:.5;animation:float 18s ease-in-out infinite}
.b1{width:520px;height:520px;background:#0891b2;top:-140px;left:-120px}
.b2{width:460px;height:460px;background:#7c3aed;bottom:-160px;right:-100px;animation-delay:-6s}
.b3{width:340px;height:340px;background:#059669;top:40%;left:45%;animation-delay:-12s}
@keyframes float{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(60px,-40px) scale(1.1)}66%{transform:translate(-40px,50px) scale(.95)}}
.grid{position:absolute;inset:0;background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px);
background-size:48px 48px;-webkit-mask-image:radial-gradient(circle at 50% 30%,#000,transparent 70%);mask-image:radial-gradient(circle at 50% 30%,#000,transparent 70%);opacity:.3}

/* base */
.glass{background:var(--card);border:1px solid var(--line);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border-radius:var(--r);box-shadow:0 10px 40px rgba(0,0,0,.35)}
.card{padding:24px}
.view{animation:viewIn .5s cubic-bezier(.2,.8,.2,1)}
@keyframes viewIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
.grad{background:linear-gradient(90deg,var(--c1),var(--c2));-webkit-background-clip:text;background-clip:text;color:transparent}
.muted{color:var(--muted)}.small{font-size:.85rem}
h1{font-size:clamp(2rem,4vw,3.2rem);line-height:1.25;margin:14px 0}
h2{font-size:1.6rem}h3{font-size:1.15rem;margin:28px 0 12px}h4{margin-bottom:10px}

/* buttons */
.btn{font-family:inherit;border:0;border-radius:14px;padding:12px 20px;font-size:1rem;cursor:pointer;color:var(--txt);transition:transform .2s,box-shadow .2s;position:relative;overflow:hidden}
.btn:hover{transform:translateY(-2px)}.btn:active{transform:scale(.97)}
.btn.primary{background:linear-gradient(135deg,var(--c1),var(--c2));color:#06101f;font-weight:600;box-shadow:0 8px 24px rgba(34,211,238,.3)}
.btn.primary::after{content:'';position:absolute;inset:0;background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,.55),transparent 70%);transform:translateX(-100%);transition:transform .6s}
.btn.primary:hover::after{transform:translateX(100%)}
.btn.ghost{background:rgba(255,255,255,.06);border:1px solid var(--line)}
.btn.gold{background:linear-gradient(135deg,#fde68a,#f59e0b);color:#3a2500;font-weight:600}
.btn.lg{padding:16px 28px;font-size:1.1rem}.btn.sm{padding:6px 12px;font-size:.85rem}
.btn:disabled{opacity:.4;cursor:not-allowed;transform:none}
.w100{width:100%}
.icon-btn{background:rgba(255,255,255,.08);border:1px solid var(--line);color:var(--txt);width:38px;height:38px;border-radius:12px;cursor:pointer}
.btns{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px;align-items:center}

/* topbar */
.topbar{position:sticky;top:0;z-index:20;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:12px 24px;background:rgba(5,11,24,.6);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid var(--line)}
.brand{display:flex;gap:10px;align-items:center}.brand small{display:block;color:var(--muted);font-size:.75rem}
.logo{width:40px;height:40px;border-radius:12px;display:grid;place-items:center;font-weight:700;background:linear-gradient(135deg,var(--c1),var(--c2));color:#06101f}
nav{display:flex;gap:6px}
.nav-btn{background:none;border:0;color:var(--muted);font-family:inherit;font-size:.95rem;padding:8px 14px;border-radius:10px;cursor:pointer;transition:.2s}
.nav-btn:hover,.nav-btn.active{color:var(--txt);background:rgba(255,255,255,.08)}
.user{display:flex;align-items:center;gap:10px}.uinfo small{display:block;color:var(--muted);font-size:.75rem}
.avatar{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,var(--c3),var(--c1));color:#06101f;font-weight:700}

/* auth */
.auth-wrap{display:grid;grid-template-columns:1.1fr .9fr;gap:48px;align-items:center;min-height:calc(100vh - 80px)}
.pill{display:inline-block;padding:6px 14px;border-radius:99px;border:1px solid var(--line);background:rgba(34,211,238,.1);color:var(--c1);font-size:.85rem}
.feat{list-style:none;margin-top:24px;display:grid;gap:10px}
.feat li{padding:12px 16px;border-radius:14px;background:rgba(255,255,255,.04);border:1px solid var(--line);animation:viewIn .6s backwards}
.feat li:nth-child(2){animation-delay:.12s}.feat li:nth-child(3){animation-delay:.24s}
.tabs{position:relative;display:grid;grid-template-columns:1fr 1fr;background:rgba(255,255,255,.05);border-radius:14px;padding:4px;margin-bottom:20px}
.tab{position:relative;z-index:1;background:none;border:0;color:var(--muted);font-family:inherit;font-size:1rem;padding:10px;cursor:pointer;transition:color .3s}
.tab.active{color:#06101f;font-weight:600}
.tab-ink{position:absolute;top:4px;bottom:4px;left:4px;width:calc(50% - 4px);border-radius:10px;background:linear-gradient(135deg,var(--c1),var(--c2));transition:transform .35s cubic-bezier(.2,.8,.2,1)}
.tabs.reg .tab-ink{transform:translateX(100%)}
.form{display:grid;gap:14px;margin-bottom:16px}
label{display:grid;gap:6px;font-size:.9rem;color:var(--muted)}
input,select{font-family:inherit;font-size:1rem;padding:12px 14px;border-radius:12px;border:1px solid var(--line);background:rgba(0,0,0,.25);color:var(--txt);outline:none;transition:border .2s,box-shadow .2s}
input:focus,select:focus{border-color:var(--c1);box-shadow:0 0 0 4px rgba(34,211,238,.15)}
select option{background:#0b1426}
.row2{display:grid;grid-template-columns:1fr 1fr;gap:12px}

/* rings */
.hero-row{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-bottom:24px}
.ring-wrap{position:relative;width:120px;height:120px;flex-shrink:0}.ring-wrap.big{width:180px;height:180px}
.ring{width:100%;height:100%;transform:rotate(-90deg)}.ring circle{fill:none;stroke-width:10}
.ring-bg{stroke:rgba(255,255,255,.08)}
.ring-fg{stroke:var(--c1);stroke-linecap:round;stroke-dasharray:326.7;stroke-dashoffset:326.7;transition:stroke-dashoffset 1.4s cubic-bezier(.2,.8,.2,1);filter:drop-shadow(0 0 6px currentColor)}
.ring-text{position:absolute;inset:0;display:grid;place-content:center;text-align:center}
.ring-text b{font-size:1.6rem}.big .ring-text b{font-size:2.4rem}.ring-text small{color:var(--muted);font-size:.8rem}

/* modules */
.module-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:16px}
.module{cursor:pointer;padding:22px;position:relative;overflow:hidden;transition:transform .3s,border-color .3s;animation:viewIn .5s backwards}
.module:hover{transform:translateY(-6px) scale(1.02);border-color:var(--mc)}
.module::before{content:'';position:absolute;width:160px;height:160px;border-radius:50%;background:var(--mc);filter:blur(60px);opacity:.25;top:-60px;right:-60px;transition:opacity .3s}
.module:hover::before{opacity:.55}
.module .ic{font-size:2.2rem}.module h4{margin:12px 0 4px;font-size:1rem}.module p{font-size:.85rem;color:var(--muted)}
.badge{position:absolute;top:14px;right:14px;font-size:.72rem;padding:4px 10px;border-radius:99px;background:rgba(255,255,255,.08)}
.badge.done{background:rgba(52,211,153,.2);color:var(--c3)}
.cta{display:flex;justify-content:space-between;align-items:center;gap:20px;margin-top:24px;flex-wrap:wrap}

/* modal & lesson */
.modal{position:fixed;inset:0;z-index:50;background:rgba(0,0,0,.6);display:grid;place-items:center;padding:20px;animation:fade .3s}
@keyframes fade{from{opacity:0}}
.modal-card{width:min(880px,100%);max-height:90vh;overflow:auto;padding:28px;position:relative;background:rgba(12,22,42,.92);animation:pop .4s cubic-bezier(.2,.8,.2,1)}
@keyframes pop{from{opacity:0;transform:scale(.92) translateY(20px)}}
.close{position:absolute;top:16px;right:16px}
.lesson h4{margin:20px 0 8px;color:var(--c1)}
.lesson ul,.lesson ol{padding-left:22px;display:grid;gap:6px;line-height:1.7;font-family:'Sarabun',sans-serif;font-size:1.02rem}
.lesson table{width:100%;border-collapse:collapse;margin:6px 0;font-family:'Sarabun',sans-serif}
.lesson td,.lesson th{border:1px solid var(--line);padding:8px 10px;text-align:left;vertical-align:top}
.lesson th{background:rgba(34,211,238,.08)}
.tip{margin-top:14px;padding:12px 16px;border-left:4px solid var(--gold);background:rgba(251,191,36,.08);border-radius:10px;font-family:'Sarabun',sans-serif}
.video-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px}
.video{aspect-ratio:16/9;border-radius:14px;overflow:hidden;border:1px solid var(--line);background:#000}
.video iframe{width:100%;height:100%;border:0}
.video.empty{display:grid;place-items:center;color:var(--muted);font-size:.85rem;text-align:center;padding:10px}

/* quiz */
.quiz-top{display:flex;align-items:center;gap:16px;margin-bottom:20px}
.progress{flex:1;height:10px;border-radius:99px;background:rgba(255,255,255,.08);overflow:hidden}
#qBar{height:100%;width:0;background:linear-gradient(90deg,var(--c1),var(--c2));border-radius:99px;transition:width .4s;position:relative;overflow:hidden}
#qBar::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent);animation:shimmer 1.6s infinite}
@keyframes shimmer{from{transform:translateX(-100%)}to{transform:translateX(100%)}}
.timer{font-variant-numeric:tabular-nums;padding:6px 12px;border-radius:10px;background:rgba(255,255,255,.06)}
.qcard{padding:32px;min-height:340px}
.qcard.anim{animation:slideIn .4s cubic-bezier(.2,.8,.2,1)}
@keyframes slideIn{from{opacity:0;transform:translateX(40px)}}
.qcat{font-size:.8rem;color:var(--c1);letter-spacing:.4px}
.qtext{font-size:1.25rem;line-height:1.7;margin:10px 0 22px;font-family:'Sarabun',sans-serif;font-weight:600}
.choice{display:flex;gap:14px;align-items:flex-start;width:100%;text-align:left;font-family:'Sarabun',sans-serif;font-size:1.05rem;line-height:1.6;padding:14px 16px;margin-bottom:10px;border-radius:14px;border:1px solid var(--line);background:rgba(255,255,255,.03);color:var(--txt);cursor:pointer;transition:.2s}
.choice:hover{border-color:var(--c1);background:rgba(34,211,238,.06);transform:translateX(4px)}
.choice .lt{flex-shrink:0;width:32px;height:32px;border-radius:10px;display:grid;place-items:center;background:rgba(255,255,255,.08);font-family:'Prompt';font-weight:600;transition:.2s}
.choice.sel{border-color:var(--c1);background:rgba(34,211,238,.12);box-shadow:0 0 0 3px rgba(34,211,238,.12)}
.choice.sel .lt{background:var(--c1);color:#06101f;transform:scale(1.1)}
.quiz-nav{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:20px}
.dots{display:flex;flex-wrap:wrap;gap:6px;justify-content:center}
.dot{width:30px;height:30px;border-radius:8px;border:1px solid var(--line);background:none;color:var(--muted);font-size:.75rem;cursor:pointer;font-family:inherit;transition:.2s}
.dot.ans{background:rgba(34,211,238,.2);color:var(--txt)}.dot.cur{outline:2px solid var(--c2)}

/* result */
.result-hero{display:flex;gap:32px;align-items:center;flex-wrap:wrap}
.cat-break{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin-top:20px}
.cat-item{padding:16px}
.mini-bar{height:6px;background:rgba(255,255,255,.08);border-radius:9px;margin-top:8px;overflow:hidden}
.mini-bar i{display:block;height:100%;border-radius:9px;width:0;transition:width 1.2s cubic-bezier(.2,.8,.2,1)}
.review-item{padding:20px;margin-bottom:12px;border-left:4px solid var(--c3);animation:viewIn .5s backwards}
.review-item.wrong{border-left-color:var(--bad)}
.opt{padding:8px 12px;border-radius:10px;margin:4px 0;font-family:'Sarabun',sans-serif}
.opt.right{background:rgba(52,211,153,.15);color:#a7f3d0}.opt.picked{background:rgba(251,113,133,.15);color:#fecdd3}
.explain{margin-top:10px;padding:12px 14px;border-radius:12px;background:rgba(167,139,250,.1);font-family:'Sarabun',sans-serif;line-height:1.6}

/* tables & admin */
.table-wrap{overflow:auto;padding:8px}
table.data{width:100%;border-collapse:collapse;font-size:.92rem}
table.data th,table.data td{padding:10px 12px;border-bottom:1px solid var(--line);text-align:left;white-space:nowrap}
table.data th{color:var(--muted);font-weight:500}
.tag{padding:3px 10px;border-radius:99px;font-size:.8rem}
.tag.ok{background:rgba(52,211,153,.18);color:var(--c3)}.tag.no{background:rgba(251,113,133,.18);color:var(--bad)}
.toolbar{display:flex;gap:10px;align-items:center;flex-wrap:wrap;justify-content:space-between}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:14px;margin:18px 0}
.stat{padding:20px}.stat small{color:var(--muted)}.stat b{display:block;font-size:1.8rem;margin-top:6px}
.charts{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.chart-box{position:relative;height:300px}

/* verify */
.verify-wrap{max-width:640px;margin:40px auto}
.verify-form{display:flex;gap:10px;margin:16px 0}.verify-form input{flex:1}
.vres{padding:22px;border-left:4px solid var(--c3);line-height:1.8}.vres.no{border-left-color:var(--bad)}

/* loader & toast */
.loader{position:fixed;inset:0;z-index:100;display:grid;place-content:center;justify-items:center;gap:14px;background:rgba(5,11,24,.75);backdrop-filter:blur(6px)}
.spinner{width:56px;height:56px;border-radius:50%;border:4px solid rgba(255,255,255,.1);border-top-color:var(--c1);border-right-color:var(--c2);animation:spin .8s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.toast{position:fixed;bottom:24px;left:50%;transform:translate(-50%,140px);z-index:110;padding:14px 22px;border-radius:14px;background:#0f1b33;border:1px solid var(--c1);box-shadow:0 10px 30px rgba(0,0,0,.4);transition:transform .4s cubic-bezier(.2,.8,.2,1);max-width:90vw}
.toast.show{transform:translate(-50%,0)}.toast.err{border-color:var(--bad)}

/* certificate (A4 landscape 1123x794) */
.cert-wrap{position:fixed;left:-10000px;top:0;z-index:90}
.cert{width:1123px;height:794px;background:#fffdf7;color:#1e293b;padding:24px;font-family:'Sarabun',sans-serif}
.cert-border{height:100%;border:6px solid #0e7490;padding:8px}
.cert-inner{position:relative;height:100%;border:2px solid #c9a227;display:flex;flex-direction:column;align-items:center;text-align:center;padding:36px 70px 0;background:linear-gradient(180deg,#ecfeff 0%,#fffdf7 45%)}
.cert-org{font-family:'Prompt';font-size:22px;color:#0e7490;font-weight:600}
.cert-title{font-family:'Prompt';font-size:54px;font-weight:700;color:#b8860b;line-height:1.3}
.cert-sub{letter-spacing:6px;text-transform:uppercase;color:#64748b;font-size:14px;margin-bottom:14px}
.cert-name{font-family:'Prompt';font-size:40px;font-weight:600;color:#0f172a;border-bottom:2px solid #c9a227;padding:0 40px 4px;margin:6px 0}
.cert p{font-size:19px;line-height:1.7}
.cert-seal{position:absolute;top:30px;right:50px;width:104px;height:104px;border-radius:50%;background:radial-gradient(#fde68a,#d97706);display:grid;place-items:center;color:#7c2d12;font-family:'Prompt';font-weight:700;font-size:15px;line-height:1.2;border:4px dashed #fff}
.cert-foot{position:absolute;left:44px;right:44px;bottom:28px;display:flex;justify-content:space-between;align-items:flex-end}
.cert .qr{background:#fff;padding:6px;border:1px solid #e2e8f0}
.sign{text-align:center;font-size:16px}.sign .line{width:280px;border-top:1px solid #334155;margin:0 auto 6px}.sign small{display:block;color:#475569}
.cid{text-align:right;font-size:13px;color:#475569;line-height:1.6}.cid b{font-size:16px;color:#0f172a}

@media(max-width:860px){
  .auth-wrap{grid-template-columns:1fr;gap:24px;min-height:auto;padding-top:12px}
  .charts{grid-template-columns:1fr}.row2{grid-template-columns:1fr}
  .topbar{flex-wrap:wrap;padding:10px 14px}.uinfo{display:none}nav{order:3;width:100%;justify-content:center}
  .hero-row{flex-direction:column;align-items:flex-start}.qcard{padding:22px}.quiz-nav .dots{display:none}
}