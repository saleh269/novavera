import React from 'react'

const services = [
  {title: 'Market Entry', desc: 'Localized strategy, partner sourcing, compliance.'},
  {title: 'Distribution', desc: 'Turnkey retail & pharmacy placement.'},
  {title: 'Private Label', desc: 'Design, manufacture and packaging.'},
  {title: 'Export & Compliance', desc: 'Standards, certificates and logistics.'}
]

export default function Services(){
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">What We Do</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s,i)=> (
          <article key={i} className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
