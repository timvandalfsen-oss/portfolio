// ===== Jaartal in footer =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Lightbox voor afbeeldingen =====
(function () {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const closeBtn = lb.querySelector('.lightbox-close');

  function open(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.classList.remove('hidden');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lb.classList.add('hidden');
    lb.setAttribute('aria-hidden', 'true');
    lbImg.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('img.zoomable').forEach(function (img) {
    img.addEventListener('click', function () {
      open(img.dataset.full || img.src, img.alt);
    });
  });

  lb.addEventListener('click', function (e) {
    if (e.target === lb || e.target === closeBtn) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lb.classList.contains('hidden')) close();
  });
})();

// ===== Scroll-reveal =====
(function () {
  const targets = document.querySelectorAll(
    '.project, .mini-card, .section-head, .gallery, .pipeline, .contact-card'
  );
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (t) { t.classList.add('visible'); });
    return;
  }
  targets.forEach(function (t) { t.classList.add('reveal'); });
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(function (t) { io.observe(t); });
})();
