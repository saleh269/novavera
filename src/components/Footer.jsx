import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-nova-navy text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-3">
            <img src="/src/assets/logo.svg" alt="logo" className="w-10 h-10" />
            <div>
              <div className="font-semibold">NOVAVERA</div>
              <div className="text-xs text-slate-300">Connecting Beauty to the World</div>
            </div>
          </div>
          <p className="mt-4 text-slate-400 text-sm">Bridging Iranian manufacturers & CIS markets with trust and premium operations.</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>Products</li>
            <li>Reports</li>
            <li>About</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <div className="mt-4 text-sm text-slate-300">hello@novavera.example<br/>+998 90 000 0000<br/>Co-working center, Tashkent</div>
        </div>
      </div>
    </footer>
  )
}
