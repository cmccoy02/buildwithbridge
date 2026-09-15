import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Head>
        <title>Privacy Policy - Bridge</title>
        <meta name="description" content="Privacy Policy for Bridge" />
        <link rel="icon" href="/images/bridge.svg" />
      </Head>

      <Header />

      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-ocr-a mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 font-jetbrains-mono text-gray-300">
            <section>
              <h2 className="text-xl text-white mb-4">Overview</h2>
              <p>
                Bridge ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you use our CLI tool and website.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white mb-4">Information We Collect</h2>
              <p className="mb-4">
                <strong className="text-white">CLI Usage:</strong> The Bridge CLI runs locally in your repository. We do not collect, transmit, or store your source code or repository contents.
              </p>
              <p className="mb-4">
                <strong className="text-white">Website:</strong> When you contact us or book a demo through our website, we collect the information you provide (name, email, company, message).
              </p>
              <p>
                <strong className="text-white">Analytics:</strong> We may use standard web analytics to understand website traffic patterns. This data is aggregated and does not identify individual users.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white mb-4">How We Use Information</h2>
              <p>
                Information collected through our contact forms is used solely to respond to your inquiries and schedule demos. We do not sell or share your personal information with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white mb-4">Data Security</h2>
              <p>
                We implement reasonable security measures to protect information submitted through our website. The Bridge CLI operates entirely within your local environment and does not transmit data externally.
              </p>
            </section>

            <section>
              <h2 className="text-xl text-white mb-4">Contact</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us through our <a href="/contact" className="text-green-400 hover:underline">contact page</a>.
              </p>
            </section>

            <section className="text-sm text-gray-500">
              <p>Last updated: March 2026</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
