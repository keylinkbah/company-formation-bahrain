/* Shared by the standalone delivery and its regression tests. */
function buildWhatsAppEnquiry(formData) {
  const text = [
    'Hello Keylink, I would like to enquire about company formation in Bahrain.',
    '',
    `Name: ${String(formData.get('name') || '').trim()}`,
    `Email: ${String(formData.get('email') || '').trim()}`,
    `Phone / WhatsApp: ${String(formData.get('phone') || '').trim()}`,
    `Company type: ${String(formData.get('type') || 'Not specified').trim()}`,
  ].join('\n');
  return `https://wa.me/97332392277?text=${encodeURIComponent(text)}`;
}
/* No submission is stored: WhatsApp opens a draft for the visitor to send. */
document.querySelectorAll('form.enquiry-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    window.location.assign(buildWhatsAppEnquiry(new FormData(form)));
  });
});

const floating = document.querySelector('[data-whatsapp="floating"]');
if (floating && 'IntersectionObserver' in window) {
  const visible = new Set();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) visible.add(entry.target);
      else visible.delete(entry.target);
    });
    floating.hidden = visible.size > 0;
  }, { threshold: 0.05 });
  document.querySelectorAll('[data-whatsapp="inline"]').forEach((link) => observer.observe(link));
}

const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
let lenis;
function configureScrolling() {
  lenis?.destroy();
  lenis = undefined;
  if (!motion.matches && window.Lenis) {
    lenis = new window.Lenis({
      autoRaf: true,
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
      anchors: { offset: -16, duration: 1.1 },
    });
  }
}
configureScrolling();
motion.addEventListener('change', configureScrolling);
window.addEventListener('pagehide', () => lenis?.destroy());