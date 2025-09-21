import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">About Novavera</h1>
        <p className="mt-4 text-slate-600">Novavera is a strategic bridge between Iranian manufacturers and CIS markets, focusing on cosmetics, beauty & personal care. Our mission is to deliver premium market-entry and distribution services while building a private-label brand that meets global quality standards.</p>
      </main>
      <Footer />
    </div>
  )
}
