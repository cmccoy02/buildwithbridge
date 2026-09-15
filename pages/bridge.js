import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CircleDollarSign, Flame, MessageCircleOff, BarChart, Users, TrendingUp, Rocket } from 'lucide-react';

export default function BridgeLanding() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Head>
                <title>Bridge - Safe Dependency Updates for Your Codebase</title>
                <meta name="description" content="Bridge CLI automates safe patch and minor dependency updates using your repo's own tests, lint, and build. Get evidence-backed PRs you can trust." />
                <link rel="icon" href="/images/bridge.svg" />
            </Head>

            <Header />

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 z-0">
                    <Image
                        src="/images/bridge.svg"
                        alt="Bridge Logo Background"
                        width={400}
                        height={400}
                    />
                </div>
                <div className="z-10 flex flex-col items-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-ocr-a mb-6">
                        BUILD WITH <span style={{ color: 'var(--color-accent)' }}>BRIDGE</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-jetbrains-mono max-w-3xl mb-10 text-gray-300">
                        Safe dependency updates using your repo's own tests, lint, and build — with evidence-backed PRs
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://github.com/cmccoy02/bridge-cli"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ backgroundColor: 'var(--color-accent)' }}
                            className="px-8 py-4 hover:opacity-90 text-white font-jetbrains-mono rounded-lg transition duration-200 text-lg inline-flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            Get Started
                        </a>
                        <Link href="/demo">
                            <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-jetbrains-mono rounded-lg transition duration-200 text-lg border border-gray-700">
                                Book a Demo
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
} 