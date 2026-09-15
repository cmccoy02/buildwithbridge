import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle2 } from 'lucide-react';

export default function Demo() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Honeypot
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
      setSubmitStatus('config_missing');
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

  return (
    <div className="min-h-screen bg-amoled-black text-white flex flex-col">
      <Head>
        <title>Book a Demo - Bridge</title>
        <meta name="description" content="Book a demo of Bridge" />
        <link rel="icon" href="/images/bridge.svg" />
      </Head>

      <Header />

      <main className="flex-grow px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto py-16">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-ocr-a mb-4">Book a Demo</h1>
            <p className="text-lg font-jetbrains-mono text-gray-300">
              Tell us a bit about your team and goals. We’ll reach out to schedule a personalized walkthrough.
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-6">
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="text-green-400 text-6xl mb-4"><CheckCircle2 /></div>
                <h3 className="text-xl font-ocr-a text-white mb-2">Request Received!</h3>
                <p className="text-gray-300">We’ll be in touch shortly to confirm your demo.</p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="mt-4 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-jetbrains-mono transition-colors"
                >
                  Send Another Request
                </button>
              </div>
            ) : submitStatus === 'config_missing' ? (
              <div className="text-center py-8">
                <h3 className="text-xl font-ocr-a text-yellow-400 mb-2">Demo Booking Unavailable</h3>
                <p className="text-gray-300 mb-4">
                  The booking form is not configured yet. Please reach out directly via GitHub to schedule a demo.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://github.com/cmccoy02/bridge-cli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-jetbrains-mono transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                  </a>
                </div>
              </div>
            ) : submitStatus === 'error' ? (
              <div className="text-center py-8">
                <h3 className="text-xl font-ocr-a text-red-400 mb-2">Something went wrong!</h3>
                <p className="text-gray-300">Please try again later.</p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="mt-4 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-jetbrains-mono transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot */}
                <input type="text" name="hp_field" tabIndex="-1" autoComplete="off" className="hidden" />

                <div>
                  <label htmlFor="name" className="block text-sm font-jetbrains-mono text-gray-300 mb-2">Name *</label>
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
                  <label htmlFor="email" className="block text-sm font-jetbrains-mono text-gray-300 mb-2">Email *</label>
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
                  <label htmlFor="company" className="block text-sm font-jetbrains-mono text-gray-300 mb-2">Company</label>
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
                  <label htmlFor="message" className="block text-sm font-jetbrains-mono text-gray-300 mb-2">What would you like to see?</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white font-jetbrains-mono focus:outline-none focus:border-green-500 transition-colors resize-none"
                    placeholder="Briefly describe your goals for the demo..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white py-3 rounded-lg font-jetbrains-mono font-bold transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Request Demo'}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 