import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import ThemeSwitch from '../ThemeSwitch';
import TraslationButton from '../TraslationButton';

export default function Navbar() {
  const { t } = useTranslation('common');
  const router = useRouter();

  const navLinks = [
    { href: '/', label: t('nav_home') },
    { href: '/about', label: t('nav_about') },
    { href: '/contact', label: t('nav_contact') },
  ];

  return (
    <nav className="p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gradient">
          {'<Dev/>'}
        </Link>

        <div className="flex items-center space-x-6">
          <ThemeSwitch />

          <ul className="flex space-x-6">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`hover:text-cyan-400 ${
                    router.pathname === href ? 'text-cyan-400' : ''
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <TraslationButton />
        </div>
      </div>
    </nav>
  );
}