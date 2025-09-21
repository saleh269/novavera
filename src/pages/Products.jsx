import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Products(){
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Products</h1>
        <p className="mt-4 text-slate-600">Catalog and product details — coming soon. Use this page to showcase private-label products, specifications, and certifications.</p>
      </main>
      <Footer />
    </div>
  )
}
