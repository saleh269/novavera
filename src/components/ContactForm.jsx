import React, { useState } from 'react'
import axios from 'axios'

export default function ContactForm(){
  const [form, setForm] = useState({name:'',company:'',message:'',email:''});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  async function submit(e){
    e.preventDefault();
    if(!form.name || !form.email) return alert('Please fill required fields');
    setLoading(true);
    try{
      // Example: send to your serverless function or third-party API
      await axios.post('/api/contact', form);
      setSuccess(true);
      setForm({name:'',company:'',message:'',email:''});
    }catch(err){
      console.error(err);
      setSuccess(false);
    }finally{setLoading(false)}
  }

  return (
    <form onSubmit={submit} className="mt-6 space-y-4">
      <div>
        <label className="text-sm font-medium">Full name</label>
        <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="mt-1 block w-full px-4 py-2 border rounded-md" placeholder="Your name" />
      </div>
      <div>
        <label className="text-sm font-medium">Company</label>
        <input value={form.company} onChange={(e)=>setForm({...form, company:e.target.value})} className="mt-1 block w-full px-4 py-2 border rounded-md" placeholder="Company name" />
      </div>
      <div>
        <label className="text-sm font-medium">Email</label>
        <input value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="mt-1 block w-full px-4 py-2 border rounded-md" placeholder="you@company.com" />
      </div>
      <div>
        <label className="text-sm font-medium">Message</label>
        <textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} rows={5} className="mt-1 block w-full px-4 py-2 border rounded-md" placeholder="Tell us about the product or project" />
      </div>
      <div className="flex items-center gap-3">
        <button type="submit" className="bg-nova-gold text-nova-navy px-5 py-2 rounded-md">Send</button>
        {loading && <div className="text-sm text-slate-500">Sending...</div>}
        {success === true && <div className="text-sm text-green-600">Sent — we will contact you within 48 hours.</div>}
        {success === false && <div className="text-sm text-red-600">There was an error. Try later.</div>}
      </div>
    </form>
  )
}
