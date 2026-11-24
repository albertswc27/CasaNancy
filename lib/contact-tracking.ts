import { track } from '@vercel/analytics';

/**
 * Clics de contacto → Vercel Web Analytics (eventos personalizados, plan Pro). Los mismos nombres en todas
 * las webs de clientes de AstroLanding para poder sumarlos: whatsapp, telefono, email y como_llegar.
 * Sin cookies: solo el texto del botón. Nunca en /admin, que enlaza a teléfonos de clientes.
 */
const EVENTS: [name: string, href: RegExp][] = [
  ['whatsapp', /^(https:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\/|whatsapp:)/i],
  ['telefono', /^tel:/i],
  ['email', /^mailto:/i],
  ['como_llegar', /^https:\/\/((www\.)?google\.[a-z.]+\/maps|maps\.google\.[a-z.]+|maps\.app\.goo\.gl|goo\.gl\/maps|maps\.apple\.com)/i],
];

export const contactEvent = (href: string): string | undefined => EVENTS.find(([, re]) => re.test(href))?.[0];

export function installContactTracking(): () => void {
  const onClick = (e: MouseEvent) => {
    if (/^\/admin(\/|$)/.test(location.pathname)) return;
    const link = (e.target as Element | null)?.closest?.('a[href]');
    if (!link) return;
    const name = contactEvent(link.getAttribute('href') ?? '');
    if (!name) return;
    const detalle = (link.getAttribute('aria-label') || link.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 80);
    try {
      track(name, { detalle }); // Vercel ya guarda la página de cada evento (requestPath).
    } catch {
      // La analítica nunca debe romper un clic.
    }
  };
  document.addEventListener('click', onClick, { capture: true });
  return () => document.removeEventListener('click', onClick, { capture: true });
}
