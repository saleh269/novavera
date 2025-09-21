import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MarketReports(){
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Market Reports</h1>
        <p className="mt-4 text-slate-600">Publish quarterly and annual market research reports for CIS cosmetics markets. Provide PDFs and executive summaries for download.</p>
      </main>
      <Footer />
    </div>
  )
}
