import Image from "next/image";
import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { t } = useTranslation('common');
  
    return (
      <footer className="p-6 mt-12">
        <div className="container flex justify-center items-center text-center w-100">
          <div className="flex justify-content-center align-items-center">
            <p>&copy; {new Date().getFullYear()} Andrés Reyes. <span>{t('made_with')}</span>&nbsp;&nbsp;</p>
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer"><Image alt="nextlogo" src="/next.svg" width="90" height="90" className="dark:invert"/></a>
          </div>
        </div>
      </footer>
    );
  }