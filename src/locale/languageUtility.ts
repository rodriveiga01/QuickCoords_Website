import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type LanguageCode = 'en' | 'pt';
type CountryCode = string;

const languageMap: Record<CountryCode, LanguageCode> = {
  'br': 'pt',
  'pt': 'pt',
};

const LOCAL_STORAGE_KEY = 'detectedLanguage';

const getUserLocation = (): Promise<{ latitude: number, longitude: number }> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error.message);
        }
      );
    } else {
      reject('Geolocation is not supported by this browser.');
    }
  });
};

const reverseGeocode = async (lat: number, lon: number): Promise<string> => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`;
  const response = await fetch(url);
  const data = await response.json();
  return data.address?.country_code?.toLowerCase() || 'us';
};

export function useLanguageDetection() {
  const { i18n: { changeLanguage, language } } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>(language as LanguageCode);

  useEffect(() => {
    const detectLanguage = async () => {
      const cachedLanguage = localStorage.getItem(LOCAL_STORAGE_KEY) as LanguageCode;

      if (cachedLanguage) {
        setCurrentLanguage(cachedLanguage);
        changeLanguage(cachedLanguage);
        return;
      }

      try {
        const { latitude, longitude } = await getUserLocation();
        const countryCode = await reverseGeocode(latitude, longitude);
        const detectedLanguage = languageMap[countryCode] || 'en';

        if (detectedLanguage !== language) {
          setCurrentLanguage(detectedLanguage);
          changeLanguage(detectedLanguage);
          localStorage.setItem(LOCAL_STORAGE_KEY, detectedLanguage);
        }
      } catch {

        if (language !== 'en') {
          setCurrentLanguage('en');
          changeLanguage('en');
          localStorage.setItem(LOCAL_STORAGE_KEY, 'en');
        }
      }
    };

    detectLanguage();
  }, [changeLanguage, language]);

  return currentLanguage;
}

export function useTranslatedText() {
  const { t } = useTranslation();
  return t;
}
