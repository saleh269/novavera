import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Header(){
  const { t, i18n } = useTranslation();
  return (
    <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <img src="/src/assets/logo.svg" alt="Novavera logo" className="w-10 h-10" />
        <div>
          <div className="text-sm font-semibold">{t('company')}</div>
          <div className="text-xs text-slate-500">{t('tagline')}</div>
        </div>
      </Link>
      <nav className="flex items-center gap-4">
        <Link to="/products" className="text-sm">Products</Link>
        <Link to="/reports" className="text-sm">Reports</Link>
        <Link to="/about" className="text-sm">About</Link>
        <select aria-label="language-select" className="border px-2 py-1 rounded" onChange={(e)=>i18n.changeLanguage(e.target.value)} defaultValue={i18n.language}>
          <option value="en">EN</option>
          <option value="fa">FA</option>
          <option value="ru">RU</option>
          <option value="uz">UZ</option>
        </select>
      </nav>
    </header>
  )
}
