import { useRouter } from 'next/router';

const TraslationButton = () => {
    const router = useRouter();

    const handleLocaleChange = (locale: string) => {
        router.push(router.pathname, router.asPath, { locale });
    };

    return (
        <div className="flex items-center space-x-2">
            <button
              onClick={() => handleLocaleChange('es')}
              className={`font-bold hover:cursor-pointer ${router.locale === 'es' ? 'text-cyan-400' : ''}`}
            >
              ES
            </button>
            <span>|</span>
            <button
              onClick={() => handleLocaleChange('en')}
              className={`font-bold hover:cursor-pointer ${router.locale === 'en' ? 'text-cyan-400' : ''}`}
            >
              EN
            </button>
          </div>
    )
}

export default TraslationButton;