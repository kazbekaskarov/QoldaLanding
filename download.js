/* download.js · OS auto-detect + local DMG + floating CTA + dots */
(() => {
  const LOCAL_DMG = './Qolda-0.2.0-arm64.dmg';
  const RELEASES = 'https://github.com/kazbekaskarov/BeMyHands/releases/latest';

  // ---- OS detect ----
  function detectOS() {
    const cached = localStorage.getItem('qolda_detected_os');
    if (cached) return cached;
    let os = 'mac';
    const uad = navigator.userAgentData;
    if (uad && uad.platform) {
      const p = uad.platform.toLowerCase();
      if (p.includes('mac')) os = 'mac';
      else if (p.includes('win')) os = 'win';
      else if (p.includes('linux')) os = 'linux';
    } else {
      const ua = navigator.userAgent.toLowerCase();
      if (ua.includes('mac')) os = 'mac';
      else if (ua.includes('win')) os = 'win';
      else if (ua.includes('linux') || ua.includes('x11')) os = 'linux';
    }
    localStorage.setItem('qolda_detected_os', os);
    return os;
  }

  async function detectArch() {
    try {
      if (navigator.userAgentData?.getHighEntropyValues) {
        const vals = await navigator.userAgentData.getHighEntropyValues(['architecture','bitness']);
        if (vals.architecture === 'arm') return 'arm64';
        if (vals.architecture === 'x86' && vals.bitness === '64') return 'x64';
      }
    } catch {}
    // heuristic: Apple Silicon mac usually arm64
    if (/Mac/.test(navigator.platform) && navigator.maxTouchPoints === 0) return 'arm64';
    return 'x64';
  }

  const OS_LABEL = { mac: 'macOS', win: 'Windows', linux: 'Linux' };

  function buildHref(os, arch) {
    if (os === 'mac' && arch === 'arm64') return LOCAL_DMG;
    return RELEASES;
  }
  function buildSize(os, arch) {
    if (os === 'mac' && arch === 'arm64') return '92 MB';
    if (os === 'mac') return '94 MB';
    if (os === 'win') return '88 MB';
    return '95 MB';
  }

  function applyAutoDownload(os, arch) {
    document.querySelectorAll('[data-os="auto"]').forEach(a => {
      a.href = buildHref(os, arch);
      if (os === 'mac' && arch === 'arm64') a.setAttribute('download', '');
      else a.removeAttribute('download');
    });
    document.querySelectorAll('[data-os-label]').forEach(s => s.textContent = OS_LABEL[os]);
    document.querySelectorAll('[data-arch-label]').forEach(s => s.textContent = arch);
    document.querySelectorAll('[data-size-label]').forEach(s => s.textContent = buildSize(os, arch));

    // highlight matching card
    document.querySelectorAll('.card').forEach(c => {
      c.classList.toggle('is-current', c.dataset.cardOs === os);
    });

    // OS strip selection
    document.querySelectorAll('.os').forEach(b => {
      b.setAttribute('aria-selected', String(b.dataset.os === os));
    });
  }

  // ---- OS strip click ----
  function bindOSStrip() {
    document.querySelectorAll('.os').forEach(btn => {
      btn.addEventListener('click', async () => {
        const os = btn.dataset.os;
        const arch = await detectArch();
        applyAutoDownload(os, arch);
      });
    });
  }

  // ---- analytics stub ----
  function track(name, params) {
    if (window.plausible) window.plausible(name, { props: params });
    if (window.umami) window.umami.track(name, params);
    // console for visibility
    console.debug('[track]', name, params);
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-track]');
    if (!a) return;
    track(a.dataset.track, {
      os: a.dataset.os || a.closest('[data-card-os]')?.dataset.cardOs || 'auto',
      arch: a.dataset.arch || '',
      format: a.dataset.format || ''
    });
  });

  // ---- floating CTA ----
  function bindFloatCTA() {
    const cta = document.getElementById('floatCTA');
    const hero = document.querySelector('.hero');
    const dl = document.getElementById('download');
    if (!cta || !hero || !dl) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.target === hero) cta.classList.toggle('is-visible', !en.isIntersecting);
        if (en.target === dl && en.isIntersecting) cta.classList.remove('is-visible');
      });
    }, { threshold: 0.1 });
    io.observe(hero);
    io.observe(dl);
  }

  // ---- particle dots (52 face-blendshape metaphor) ----
  function initDots() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const c = document.getElementById('dots');
    if (!c) return;
    const ctx = c.getContext('2d');
    let w, h, dpr;
    const N = 52;
    const dots = Array.from({ length: N }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - .5) * 0.0004,
      vy: (Math.random() - .5) * 0.0004,
      r: 1.5 + Math.random() * 2,
      ph: Math.random() * Math.PI * 2,
    }));
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = c.clientWidth = c.parentElement.clientWidth;
      h = c.clientHeight = c.parentElement.clientHeight;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr,0,0,dpr,0,0);
    }
    function frame(t) {
      ctx.clearRect(0,0,w,h);
      for (const d of dots) {
        d.x += d.vx; d.y += d.vy;
        if (d.x<0||d.x>1) d.vx*=-1;
        if (d.y<0||d.y>1) d.vy*=-1;
        const a = 0.35 + 0.4 * Math.sin(t/1200 + d.ph);
        ctx.fillStyle = `rgba(99,102,241,${a.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(d.x*w, d.y*h, d.r, 0, Math.PI*2);
        ctx.fill();
      }
      requestAnimationFrame(frame);
    }
    resize();
    window.addEventListener('resize', resize);
    requestAnimationFrame(frame);
  }

  // ---- cursor trail ----
  function initTrail() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (matchMedia('(hover: none)').matches) return;
    const c = document.createElement('canvas');
    Object.assign(c.style, { position:'fixed', inset:0, pointerEvents:'none', zIndex:60 });
    c.width = innerWidth; c.height = innerHeight;
    document.body.appendChild(c);
    const ctx = c.getContext('2d');
    const pts = [];
    addEventListener('resize', () => { c.width = innerWidth; c.height = innerHeight; });
    addEventListener('mousemove', e => {
      pts.push({ x: e.clientX, y: e.clientY, t: performance.now() });
    });
    function loop() {
      const now = performance.now();
      ctx.clearRect(0,0,c.width,c.height);
      for (let i = pts.length - 1; i >= 0; i--) {
        const p = pts[i], age = now - p.t;
        if (age > 200) { pts.splice(i,1); continue; }
        const a = 1 - age/200;
        ctx.fillStyle = `rgba(99,102,241,${(a*0.3).toFixed(3)})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, 4*a + 1, 0, Math.PI*2); ctx.fill();
      }
      requestAnimationFrame(loop);
    }
    loop();
  }

  // ---- voice terminal typing demo ----
  function initVoiceDemo() {
    const body = document.getElementById('terminal-body');
    if (!body) return;
    const samples = {
      ru: [
        ['открой ютуб', 'youtube.com'],
        ['сделай громче', 'volume +6%'],
        ['пауза', '⏸ paused'],
        ['точно', 'precision mode 3s'],
        ['сохрани', '⌘S / Ctrl+S'],
      ],
      en: [
        ['open youtube', 'youtube.com'],
        ['louder', 'volume +6%'],
        ['pause', '⏸ paused'],
        ['precision', 'precision mode 3s'],
      ],
      kk: [
        ['ютуб аш', 'youtube.com'],
        ['қаттырақ', 'volume +6%'],
      ],
      tr: [
        ['youtube aç', 'youtube.com'],
        ['daha sesli', 'volume +6%'],
      ],
    };
    let lang = 'ru', i = 0;
    function render() {
      const list = samples[lang];
      const [cmd, out] = list[i % list.length];
      const history = list.slice(0, 4).map(([c,o]) => `  > ${c.padEnd(22)} ─→ ${o}`).join('\n');
      body.textContent =
`> ${cmd}_

─→ ${out}                          ✓ matched

────────────────────────────────────────────────────────────
history:
${history}`;
      i++;
    }
    render();
    setInterval(render, 3000);
    document.querySelectorAll('[data-vlang]').forEach(b => {
      b.addEventListener('click', () => {
        document.querySelectorAll('[data-vlang]').forEach(x => x.classList.remove('is-active'));
        b.classList.add('is-active');
        lang = b.dataset.vlang; i = 0; render();
        track('voice_demo_lang_changed', { lang });
      });
    });
  }

  // ---- GitHub stars ----
  async function loadStars() {
    const el = document.getElementById('stars');
    if (!el) return;
    try {
      const cached = JSON.parse(localStorage.getItem('qolda_stars') || 'null');
      if (cached && Date.now() - cached.t < 3600_000) { el.textContent = cached.n; return; }
      const r = await fetch('https://api.github.com/repos/kazbekaskarov/BeMyHands');
      if (!r.ok) return;
      const j = await r.json();
      el.textContent = j.stargazers_count;
      localStorage.setItem('qolda_stars', JSON.stringify({ n: j.stargazers_count, t: Date.now() }));
    } catch {}
  }

  // ---- init ----
  async function init() {
    const os = detectOS();
    const arch = await detectArch();
    applyAutoDownload(os, arch);
    bindOSStrip();
    bindFloatCTA();
    initDots();
    initTrail();
    initVoiceDemo();
    loadStars();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

