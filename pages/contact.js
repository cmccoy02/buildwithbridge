import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic honeypot bot protection
    const honeypot = form.current?.elements?.namedItem('hp_field');
    if (honeypot && honeypot.value) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing. Please set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          setSubmitStatus('success');
          setIsSubmitting(false);
          setFormData({ name: '', email: '', company: '', message: '' });
        },
        () => {
          setSubmitStatus('error');
          setIsSubmitting(false);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Head>
        <title>Contact - Bridge</title>
        <meta name="description" content="Get in touch with the Bridge team" />
        <link rel="icon" href="/images/bridge.svg" />
      </Head>

      <Header />

      <main className="flex-grow p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-ocr-a mb-4">Get In Touch</h1>
            <p className="text-xl font-jetbrains-mono text-gray-300 max-w-2xl mx-auto">
              Ready to transform how your team manages technical debt? Let's discuss how Bridge can help your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-ocr-a mb-6">Send a Message</h2>
              <div className="bg-gray-900 rounded-xl p-6">
                {submitStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="text-green-400 text-6xl mb-4"><CheckCircle2 /></div>
                    <h3 className="text-xl font-ocr-a text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setSubmitStatus(null)}
                      className="mt-4 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-jetbrains-mono transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : submitStatus === 'error' ? (
                  <div className="text-center py-8">
                    <h3 className="text-xl font-ocr-a text-red-400 mb-2">Something went wrong!</h3>
                    <p className="text-gray-300">
                      Please try again later.
                    </p>
                    <button 
                      onClick={() => setSubmitStatus(null)}
                      className="mt-4 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-jetbrains-mono transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot field - should remain empty */}
                    <input type="text" name="hp_field" tabIndex="-1" autoComplete="off" className="hidden" />
                    <div>
                      <label htmlFor="name" className="block text-sm font-jetbrains-mono text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white font-jetbrains-mono focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-jetbrains-mono text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white font-jetbrains-mono focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="your.email@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-jetbrains-mono text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white font-jetbrains-mono focus:outline-none focus:border-green-500 transition-colors"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-jetbrains-mono text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white font-jetbrains-mono focus:outline-none focus:border-green-500 transition-colors resize-none"
                        placeholder="Tell us about your technical debt challenges..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white py-3 rounded-lg font-jetbrains-mono font-bold transition-colors"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>


        </div>
      </main>

      <Footer />
    </div>
  );
} 