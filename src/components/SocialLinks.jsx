import { SITE_CONFIG, IS_CONFIGURED } from '../config/site.js';
import { whatsappUrl, generalMessage } from '../lib/whatsapp.js';
import { WhatsAppIcon, InstagramIcon, TikTokIcon } from './SocialIcons.jsx';

// Fila de íconos interactivos a redes/WhatsApp. Cada uno solo aparece si el
// dato correspondiente ya está configurado en site.js (brief §18 reglas: nunca
// un botón falso). Reutilizable en Navbar y Footer.
export default function SocialLinks({ className = '' }) {
  const wa = whatsappUrl(generalMessage());
  const ig = IS_CONFIGURED(SITE_CONFIG.instagramHandle)
    ? `https://instagram.com/${SITE_CONFIG.instagramHandle}`
    : null;
  const tk = IS_CONFIGURED(SITE_CONFIG.tiktokHandle)
    ? `https://tiktok.com/@${SITE_CONFIG.tiktokHandle}`
    : null;

  const items = [
    wa && { href: wa, label: 'WhatsApp', Icon: WhatsAppIcon },
    ig && { href: ig, label: 'Instagram', Icon: InstagramIcon },
    tk && { href: tk, label: 'TikTok', Icon: TikTokIcon },
  ].filter(Boolean);

  if (items.length === 0) return null;

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-line)] text-[var(--color-coffee)] transition-colors hover:border-[var(--color-caramel)] hover:bg-[var(--color-caramel)] hover:text-[var(--color-cream-hi)]"
          >
            <Icon className="h-[1.05rem] w-[1.05rem]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
