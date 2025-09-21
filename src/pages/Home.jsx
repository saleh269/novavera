import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">5-Year Roadmap</h2>
        <ol className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
          <li className="p-4 border rounded-lg"><strong>Year 1</strong><div className="mt-2 text-slate-600">Market entry Uzbekistan, establish office, pilot imports</div></li>
          <li className="p-4 border rounded-lg"><strong>Year 2</strong><div className="mt-2 text-slate-600">Exclusive distribution & expand retail</div></li>
          <li className="p-4 border rounded-lg"><strong>Year 3</strong><div className="mt-2 text-slate-600">Private label launch & regional expansion</div></li>
          <li className="p-4 border rounded-lg"><strong>Year 4</strong><div className="mt-2 text-slate-600">JV / production & export setup</div></li>
          <li className="p-4 border rounded-lg"><strong>Year 5</strong><div className="mt-2 text-slate-600">Global exports & Market Research Hub</div></li>
        </ol>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold">Case Studies</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map(i=> (
              <article key={i} className="p-6 bg-white rounded-xl shadow-sm">
                <img src={`/src/assets/sample-product-1.jpg`} alt={`case-${i}`} className="h-40 w-full object-cover rounded-md"/>
                <h3 className="mt-4 font-semibold">Project {i}</h3>
                <p className="text-sm text-slate-600 mt-2">Market entry, partner sourcing, distribution setup and promotions.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Contact & Partnership</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          <div className="p-6 border rounded-xl">
            <p className="text-slate-600">We partner with manufacturers, distributors and investors. Share a brief about your project and we'll reply within 48 hours.</p>
          </div>
          <div className="p-6 border rounded-xl">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
