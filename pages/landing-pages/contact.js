import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
    return (
        <div className="min-h-screen bg-amoled-black text-white flex flex-col">
            <Head>
                <title>Contact - Bridge</title>
                <meta name="description" content="Contact Bridge" />
                <link rel="icon" href="/images/bridge.svg" />
            </Head>

            <Header />

            <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-ocr-a mb-6">Contact Bridge</h1>
            </main>

            <Footer />
        </div>
    );
} 