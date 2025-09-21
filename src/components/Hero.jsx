import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Hero(){
  const { t } = useTranslation();
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-sm text-nova-gold font-semibold">{t('company')}</p>
        <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">{t('tagline')}</h1>
        <p className="mt-6 text-slate-600 max-w-xl">{t('heroLead')}</p>
      </div>
      <div>
        <img src="/src/assets/hero.jpg" alt="hero" className="rounded-2xl shadow-lg w-full object-cover max-h-[420px]" />
      </div>
    </section>
  )
}
