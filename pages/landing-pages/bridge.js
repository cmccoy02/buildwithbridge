import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function BridgeLanding() {
    return (
        <div className="min-h-screen bg-amoled-black text-white flex flex-col">
            <Head>
                <title>Bridge</title>
                <meta name="description" content="Build with Bridge" />
                <link rel="icon" href="/images/bridge.svg" />
            </Head>

            <Header />

            <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 z-0">
                    <Image
                        src="/images/bridge.svg"
                        alt="Bridge Logo Background"
                        width={400}
                        height={400}
                    />
                </div>
                <div className="z-10 flex flex-col items-center">
                    <h2 className="text-5xl md:text-6xl font-ocr-a mb-6">
                        BUILD WITH <span style={{ color: 'var(--color-accent)' }}>BRIDGE</span>
                    </h2>
                    <p className="text-xl md:text-2xl font-jetbrains-mono max-w-3xl mb-10">
                        Closing the technical debt communication gap
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/landing-pages/demo">
                            <button style={{ backgroundColor: 'var(--color-accent)' }} className="px-8 py-3 hover:opacity-90 text-white font-jetbrains-mono rounded-md transition duration-200">
                                Get Started
                            </button>
                        </Link>
                        <Link href="/landing-pages/about">
                            <button className="px-8 py-3 border border-white hover:bg-white hover:text-black font-jetbrains-mono rounded-md transition duration-200">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
} 