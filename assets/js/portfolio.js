/* Start the trailer muted; the original YouTube link works without JavaScript. */
const trailerShell = document.querySelector('[data-trailer]');
if (trailerShell) {
  const source = new URL(`https://www.youtube-nocookie.com/embed/${trailerShell.dataset.trailer}`);
  source.search = new URLSearchParams({autoplay: '1', mute: '1', playsinline: '1', rel: '0'});
  // file:// previews cannot supply an HTTP referrer. Never substitute a fake origin.
  if (location.protocol === 'https:' || location.protocol === 'http:') {
    source.searchParams.set('origin', location.origin);
  }
  const frame = document.createElement('iframe');
  frame.src = source.href;
  frame.title = 'Pull It Together gameplay trailer';
  frame.allow = 'autoplay; encrypted-media; picture-in-picture; web-share';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  trailerShell.replaceChildren(frame);
}

/* GIF replacements play independently, with native pause and sound controls. */
document.querySelectorAll('video[autoplay]').forEach((video) => {
  video.muted = true;
  // Browser preferences may block autoplay; manual controls remain available.
  video.play().catch(() => {});
});
