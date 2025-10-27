import Skills from "@/components/Skills";
import TitlePage from "@/components/TitlePage";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import nextI18NextConfig from '../../next-i18next.config';
import { useTranslation } from 'next-i18next';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale ?? 'es',
      ['common'],
      nextI18NextConfig
    )),
  },
});

export default function About(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation('common');

  return (
    <div className="container text-center">
      <TitlePage title={t('about_title')} subtitle={t('about_subtitle')} />
      <div className="grid grid-cols-2 mt-16">
        <div className="px-8">
            <p className="text-justify text-gray-600 dark:text-gray-400 mb-5 text-lg">{t('about_description_1')}</p>
            <p className="text-justify text-gray-600 dark:text-gray-400 text-lg">{t('about_description_2')}</p>
        </div>
        <div className="px-8">
            <Skills />
        </div>
      </div>
    </div>
  );
}
