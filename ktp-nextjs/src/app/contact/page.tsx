"use client";
import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: In production, send email via backend or service
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact Us - Kappa Theta Pi Virginia Tech</title>
        <meta name="description" content="Contact Kappa Theta Pi at Virginia Tech for questions, membership, or more information." />
      </Head>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col justify-center items-center text-center p-8">
            <h1 className="text-5xl font-bold mb-6 text-[#0049ba]">Contact Us</h1>
            <p className="text-lg text-gray-700 mb-2">We'd love to hear from you!</p>
            <p className="text-base text-gray-500">Email: <span className="font-mono">contact@ktp-vt.org</span></p>
            <div className="mt-8 flex flex-col items-center">
              {/* Placeholder for image */}
              <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Image Placeholder</span>
              </div>
            </div>
          </div>
          {/* Right Side: Contact Form */}
          <form className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg mx-auto flex flex-col gap-4" onSubmit={handleSubmit} aria-label="Contact Form">
            <label className="text-left font-semibold text-[#0049ba]">Name
              <input type="text" name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0049ba]" />
            </label>
            <label className="text-left font-semibold text-[#0049ba]">Email
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0049ba]" />
            </label>
            <label className="text-left font-semibold text-[#0049ba]">Phone
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0049ba]" />
            </label>
            <label className="text-left font-semibold text-[#0049ba]">Address
              <input type="text" name="address" value={form.address} onChange={handleChange} className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0049ba]" />
            </label>
            <label className="text-left font-semibold text-[#0049ba]">Subject
              <input type="text" name="subject" value={form.subject} onChange={handleChange} required className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0049ba]" />
            </label>
            <label className="text-left font-semibold text-[#0049ba]">Message
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0049ba] resize-vertical" />
            </label>
            <button type="submit" className="mt-4 bg-[#0049ba] text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-[#003a8c] transition-colors text-lg">Submit</button>
            {submitted && <p className="text-green-600 font-semibold mt-2">Thank you! Your message has been received.</p>}
          </form>
        </div>
      </section>
    </>
  );
}
