import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import MarketReports from './pages/MarketReports'

export default function App(){
  return (
    <div className="min-h-screen bg-white text-nova-navy">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/reports" element={<MarketReports/>} />
      </Routes>
    </div>
  )
}
