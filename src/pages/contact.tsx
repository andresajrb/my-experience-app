import ContactChannels from "@/components/ContactChannels";
import ContactForm from "@/components/ContactForm";
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

export default function Contact(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation('common');

  return (
    <div className="container text-center">
      <TitlePage title={t('contact_title')} subtitle={t('contact_subtitle')} />
      <div className="grid grid-cols-2 mt-16">
        <div className="px-4">
          <p className="text-4xl font-bold mb-4 text-cyan-900 dark:text-cyan-400">{t('contact_work_together')}</p>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-4 text-justify">{t('contact_description')}</p>
         <ContactChannels />
        </div>
        <div>
         <ContactForm />
        </div>
      </div>
    </div>
  );
}
