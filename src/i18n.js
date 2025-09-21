import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { translation: {
    company: 'NOVAVERA',
    tagline: 'Connecting Beauty to the World',
    heroLead: 'Bringing trusted Iranian beauty brands to Uzbekistan & the CIS with premium market entry and distribution services.',
    servicesTitle: 'What We Do',
    contactTitle: 'Contact & Partnership'
  }},
  fa: { translation: {
    company: 'نوآوران',
    tagline: 'زیبایی فراتر از مرزها',
    heroLead: 'ما برندهای ایرانی قابل اعتماد را به ازبکستان و بازارهای CIS می‌آوریم؛ ورود به بازار، توزیع و برندسازی تخصص ماست.',
    servicesTitle: 'خدمات ما',
    contactTitle: 'تماس و شراکت'
  }},
  ru: { translation: {
    company: 'НОВАВЕРА',
    tagline: 'Красота без границ',
    heroLead: 'Мы выводим надежные иранские бренды красоты на рынок Узбекистана и СНГ.',
    servicesTitle: 'Наши услуги',
    contactTitle: 'Контакты и сотрудничество'
  }},
  uz: { translation: {
    company: "NOVAVERA",
    tagline: 'Go‘zallik chegarasiz',
    heroLead: "Biz ishonchli Fors brendlarini O‘zbekistonga va MDH bozorlariga olib kelamiz.",
    servicesTitle: 'Xizmatlarimiz',
    contactTitle: 'Bog‘lanish va Hamkorlik'
  }},
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
