const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ==========================================================================
   Skills data
   [label, group, size]  group: fe | be | ai | tools   size: relative bubble size
   ========================================================================== */
const SKILLS = [
  ['React.js', 'fe', 3],
  ['Next.js', 'fe', 2.7],
  ['JavaScript (ES6+)', 'fe', 2.6],
  ['TypeScript', 'fe', 2.3],
  ['Redux Toolkit', 'fe', 2],
  ['React Native', 'fe', 1.9],
  ['Material UI', 'fe', 1.6],
  ['TanStack Query', 'fe', 1.5],
  ['HTML', 'fe', 1.3],
  ['CSS', 'fe', 1.3],
  ['i18next', 'fe', 1.3],
  ['Zustand', 'fe', 1.2],

  ['REST APIs', 'be', 2.1],
  ['Socket.IO', 'be', 1.9],
  ['Firebase', 'be', 1.8],
  ['Redis', 'be', 1.5],
  ['AWS', 'be', 1.5],
  ['Axios', 'be', 1.4],
  ['Twilio', 'be', 1.4],

  ['LLMs', 'ai', 2.1],
  ['RAG', 'ai', 1.9],
  ['AI Agents', 'ai', 1.6],
  ['OpenAI APIs', 'ai', 1.6],
  ['Embeddings', 'ai', 1.5],
  ['Vector DB', 'ai', 1.3],

  ['Git', 'tools', 1.4],
  ['Jira', 'tools', 1.15],
];

/* ==========================================================================
   Hero: typing effect
   ========================================================================== */
function initTypedRole() {
  const el = document.getElementById('typed');
  const roles = ['React.js & Next.js Developer', 'Senior Software Engineer', 'AI Engineer'];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const word = roles[roleIndex];
    el.textContent = word.slice(0, charIndex);

    if (!deleting && charIndex++ === word.length) {
      deleting = true;
      return setTimeout(tick, 1400);
    }
    if (deleting && charIndex-- === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
    setTimeout(tick, deleting ? 40 : 85);
  }

  tick();
}

/* ==========================================================================
   Skills: static fallback list (shown with reduced motion)
   ========================================================================== */
function renderStaticSkills() {
  document.getElementById('skStatic').innerHTML = SKILLS
    .map(([label]) => `<span class="chip">${label}</span>`)
    .join('');
}

/* ==========================================================================
   Skills: bubble physics
   ========================================================================== */
function initSkillBubbles() {
  const box = document.getElementById('bubbles');
  if (prefersReducedMotion || !box) return;

  const MOUSE_REPEL_RANGE = 80;
  const DAMPING = 0.975;
  const MAX_SPEED = 10;
  const BOUNCE = 0.6;
  const GAP = 3;

  let width = 0;
  let height = 0;
  let dragged = null;
  let mouseX = -1e4;
  let mouseY = -1e4;
  let visible = false;
  let started = false;
  let frame = 0;

  const bubbles = SKILLS.map(([label, group, size]) => {
    const el = document.createElement('div');
    el.className = 'bub';
    el.dataset.g = group;
    el.textContent = label;
    box.appendChild(el);
    return { el, group, size, x: 0, y: 0, vx: 0, vy: 0, r: 0, phase: Math.random() * Math.PI * 2, inside: false };
  });

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  // Scale all bubbles so together they fill ~40% of the box (50% on small screens)
  function layout() {
    width = box.clientWidth;
    height = box.clientHeight;

    const totalArea = bubbles.reduce((sum, b) => sum + Math.PI * b.size * b.size, 0);
    const fill = width < 600 ? 0.5 : 0.4;
    const scale = Math.sqrt((width * height * fill) / totalArea);
    const maxRadius = Math.min(width, height) * 0.17;

    bubbles.forEach((b) => {
      b.r = Math.min(b.size * scale, maxRadius);
      const isLong = b.el.textContent.length > 10;
      b.el.style.width = b.el.style.height = `${b.r * 2}px`;
      b.el.style.fontSize = `${clamp(b.r * (isLong ? 0.2 : 0.27), 10, 21)}px`;
      b.x = clamp(b.x, b.r, width - b.r);
      if (started) b.y = clamp(b.y, b.r, height - b.r);
    });
  }

  // Start every bubble below the box so they float up into view
  function spawn() {
    started = true;
    bubbles.forEach((b, i) => {
      b.x = b.r + Math.random() * (width - 2 * b.r);
      b.y = height + b.r + i * 18 + Math.random() * 60;
      b.vx = (Math.random() - 0.5) * 2;
      b.vy = -(5 + Math.random() * 4);
    });
  }

  function moveBubble(b, time) {
    // Gentle wandering drift plus a soft pull towards the centre
    b.vx += Math.cos(time / 1400 + b.phase) * 0.012 + (width / 2 - b.x) * 0.00006;
    b.vy += Math.sin(time / 1700 + b.phase) * 0.012 + (height / 2 - b.y) * 0.00009;

    // Push away from the mouse
    const dx = b.x - mouseX;
    const dy = b.y - mouseY;
    const dist = Math.hypot(dx, dy);
    const range = b.r + MOUSE_REPEL_RANGE;
    if (dist < range && dist > 0) {
      const force = ((range - dist) / range) * 1.1;
      b.vx += (dx / dist) * force;
      b.vy += (dy / dist) * force;
    }

    b.vx *= DAMPING;
    b.vy *= DAMPING;
    const speed = Math.hypot(b.vx, b.vy);
    if (speed > MAX_SPEED) {
      b.vx *= MAX_SPEED / speed;
      b.vy *= MAX_SPEED / speed;
    }

    b.x += b.vx;
    b.y += b.vy;

    // Walls. The bottom wall only applies once the bubble has risen into the box.
    if (b.x < b.r) { b.x = b.r; b.vx = Math.abs(b.vx) * BOUNCE; }
    if (b.x > width - b.r) { b.x = width - b.r; b.vx = -Math.abs(b.vx) * BOUNCE; }
    if (b.y <= height - b.r) b.inside = true;
    if (b.y < b.r) { b.y = b.r; b.vy = Math.abs(b.vy) * BOUNCE; }
    if (b.inside && b.y > height - b.r) { b.y = height - b.r; b.vy = -Math.abs(b.vy) * BOUNCE; }
  }

  function resolveCollision(a, c) {
    const dx = c.x - a.x;
    const dy = c.y - a.y;
    const dist = Math.hypot(dx, dy) || 0.01;
    const minDist = a.r + c.r + GAP;
    if (dist >= minDist) return;

    const overlap = minDist - dist;
    const nx = dx / dist;
    const ny = dy / dist;

    // Smaller bubbles get pushed more; a dragged bubble never gets pushed
    let shareA = c.r / (a.r + c.r);
    let shareC = 1 - shareA;
    if (a === dragged) { shareA = 0; shareC = 1; }
    if (c === dragged) { shareA = 1; shareC = 0; }

    a.x -= nx * overlap * shareA;
    a.y -= ny * overlap * shareA;
    c.x += nx * overlap * shareC;
    c.y += ny * overlap * shareC;

    const approachSpeed = (c.vx - a.vx) * nx + (c.vy - a.vy) * ny;
    if (approachSpeed < 0) {
      const impulse = approachSpeed * 0.5;
      if (a !== dragged) { a.vx += nx * impulse; a.vy += ny * impulse; }
      if (c !== dragged) { c.vx -= nx * impulse; c.vy -= ny * impulse; }
    }
  }

  function step(time) {
    bubbles.forEach((b) => { if (b !== dragged) moveBubble(b, time); });

    for (let pass = 0; pass < 2; pass++) {
      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          resolveCollision(bubbles[i], bubbles[j]);
        }
      }
    }

    bubbles.forEach((b) => {
      b.el.style.transform = `translate3d(${(b.x - b.r).toFixed(1)}px, ${(b.y - b.r).toFixed(1)}px, 0)`;
    });

    if (visible) frame = requestAnimationFrame(step);
  }

  function pointerPosition(e) {
    const rect = box.getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
  }

  // Drag and throw
  box.addEventListener('pointerdown', (e) => {
    const el = e.target.closest('.bub');
    if (!el) return;
    dragged = bubbles.find((b) => b.el === el);
    el.classList.add('drag');
    box.setPointerCapture(e.pointerId);
    const [px, py] = pointerPosition(e);
    dragged.offsetX = px - dragged.x;
    dragged.offsetY = py - dragged.y;
    e.preventDefault();
  });

  box.addEventListener('pointermove', (e) => {
    const [px, py] = pointerPosition(e);
    if (dragged) {
      const nx = px - dragged.offsetX;
      const ny = py - dragged.offsetY;
      dragged.vx = nx - dragged.x;
      dragged.vy = ny - dragged.y;
      dragged.x = clamp(nx, dragged.r, width - dragged.r);
      dragged.y = clamp(ny, dragged.r, height - dragged.r);
      return;
    }
    if (e.pointerType === 'mouse') {
      mouseX = px;
      mouseY = py;
    }
  });

  function drop() {
    if (!dragged) return;
    dragged.el.classList.remove('drag');
    dragged = null;
  }

  box.addEventListener('pointerup', drop);
  box.addEventListener('pointercancel', drop);
  box.addEventListener('pointerleave', () => { mouseX = mouseY = -1e4; });

  // Only animate while the box is on screen
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    cancelAnimationFrame(frame);
    if (!visible) return;
    if (!started) {
      layout();
      spawn();
    }
    frame = requestAnimationFrame(step);
  }, { threshold: 0.1 }).observe(box);

  let resizeTimer;
  addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(layout, 120);
  });

  layout();

  // Legend buttons: highlight one group and give its bubbles a little kick
  const legendButtons = document.querySelectorAll('#legend button');
  legendButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const turnOn = btn.getAttribute('aria-pressed') !== 'true';
      legendButtons.forEach((other) => other.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', String(turnOn));
      box.classList.toggle('focus', turnOn);

      bubbles.forEach((b) => {
        const hit = turnOn && b.group === btn.dataset.g;
        b.el.classList.toggle('hit', hit);
        if (hit) {
          b.vy -= 4;
          b.vx += (Math.random() - 0.5) * 4;
        }
      });
    });
  });
}

/* ==========================================================================
   Experience: timeline line that fills as you scroll
   ========================================================================== */
const timeline = document.getElementById('tl');
const timelineMarks = [...timeline.querySelectorAll('.job, .job li')];
const timelinePoints = [...timeline.querySelectorAll('li')];

function updateTimeline() {
  const rect = timeline.getBoundingClientRect();
  const triggerLine = innerHeight * 0.6;
  const maxFill = rect.height - 6;
  const fill = Math.max(0, Math.min(maxFill, triggerLine - rect.top - 6));
  let current = null;

  timeline.style.setProperty('--p', `${fill}px`);
  timeline.classList.toggle('idle', fill < 20);

  timelineMarks.forEach((mark) => {
    const reached = mark.getBoundingClientRect().top + 12 <= triggerLine;
    mark.classList.toggle('on', reached);
    if (reached && mark.tagName === 'LI') current = mark;
  });

  timelinePoints.forEach((point) => {
    point.classList.toggle('now', point === current && fill < maxFill);
  });
}

/* ==========================================================================
   Scroll reveal, active nav link, stat counters
   ========================================================================== */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.rv').forEach((el) => observer.observe(el));
}

function initActiveNav() {
  const links = {};
  document.querySelectorAll('nav ul a').forEach((a) => {
    links[a.getAttribute('href').slice(1)] = a;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      Object.values(links).forEach((a) => a.classList.remove('on'));
      links[entry.target.id]?.classList.add('on');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  document.querySelectorAll('main section').forEach((section) => observer.observe(section));
}

function initCounters() {
  function countUp(el) {
    const target = Number(el.dataset.n);
    const suffix = el.dataset.s || '';
    const start = performance.now();

    (function frame(now) {
      const progress = Math.min((now - start) / 1300, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(frame);
    })(start);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      countUp(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('[data-n]').forEach((el) => observer.observe(el));
}

/* ==========================================================================
   Project cards: spotlight + tilt
   ========================================================================== */
function initCardTilt() {
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const tiltX = (0.5 - y / rect.height) * 5;
      const tiltY = (x / rect.width - 0.5) * 5;
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
      card.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

/* ==========================================================================
   Cursor glow + scroll progress bar
   ========================================================================== */
function initGlowAndProgress() {
  const glow = document.getElementById('glow');
  const bar = document.getElementById('bar');
  let ticking = false;

  addEventListener('mousemove', (e) => {
    glow.style.setProperty('--gx', `${e.clientX}px`);
    glow.style.setProperty('--gy', `${e.clientY}px`);
  });

  function onScroll() {
    ticking = false;
    const doc = document.documentElement;
    const progress = doc.scrollTop / (doc.scrollHeight - doc.clientHeight);
    bar.style.transform = `scaleX(${progress})`;
    updateTimeline();
  }

  addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(onScroll);
  }, { passive: true });

  addEventListener('resize', onScroll);
  onScroll();
}

initTypedRole();
renderStaticSkills();
initSkillBubbles();
initReveal();
initActiveNav();
initCounters();
initCardTilt();
initGlowAndProgress();
