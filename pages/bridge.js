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
                <title>Bridge - Technical Debt Management Platform</title>
                <meta name="description" content="Bridge transforms technical debt from a vague concept into clear, actionable insights. Quantify, visualize, and proactively manage technical debt." />
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
                        Transform technical debt from a vague concept into clear, actionable insights
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/demo">
                            <button style={{ backgroundColor: 'var(--color-accent)' }} className="px-8 py-4 hover:opacity-90 text-white font-jetbrains-mono rounded-lg transition duration-200 text-lg">
                                Get Started
                            </button>
                        </Link>
                      
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
} 