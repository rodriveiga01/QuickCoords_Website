import compass from "/src/assets/compass.png";
import { useLanguageDetection, useTranslatedText } from './../locale/languageUtility';

export function Cover() {
  useLanguageDetection();
  const t = useTranslatedText();

  return (
    <section className="bg-[#142c2c]">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">{t('titleCover')}</h1>
          <p className="max-w-2xl font-light text-gray-400 mb-2 md:text-lg lg:text-xl">
            {t('secondTextCover')}
          </p>
          <div className="flex items-center mt-4">
            <a href="https://play.google.com/store/apps/details?id=com.rodriveiga10.quickcoords" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-[#004c4c] rounded-lg bg-[#004c4c] lg:bg-transparent hover:bg-[#004c4c] focus:ring-4 focus:ring-gray-800 dark:border-[#004c4c] dark:hover:bg-[#004c4c] dark:focus:ring-gray-800">
              {t('install')}
            </a>
            <p className="pl-4">{t('installationCount')}</p>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={compass} alt="compass"/>
        </div>
      </div>
    </section>
  );
}