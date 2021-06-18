import config from '/src/config';

export function openWindow(link) {
  window.open(window.location.origin + config.basename.slice(0, -1) + link, '_blank');
}
