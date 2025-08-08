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
                        <Link href="/about">
                            <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-jetbrains-mono rounded-lg transition duration-200 text-lg">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-ocr-a mb-6">The Problem</h2>
                        <p className="text-xl font-jetbrains-mono text-gray-300 max-w-3xl mx-auto">
                            Technical debt is an enormous and rapidly escalating problem, exacerbated by AI-driven rapid software development.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-800 rounded-xl p-8 text-center">
                            <div className="text-4xl mb-4"><CircleDollarSign size={48} className="mx-auto" /></div>
                            <h3 className="text-xl font-ocr-a mb-4">Financial Impact</h3>
                            <p className="text-gray-300 font-jetbrains-mono">
                                Technical debt costs companies millions in lost productivity, bug fixes, and system downtime.
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-8 text-center">
                            <div className="text-4xl mb-4"><Flame size={48} className="mx-auto" /></div>
                            <h3 className="text-xl font-ocr-a mb-4">Developer Burnout</h3>
                            <p className="text-gray-300 font-jetbrains-mono">
                                Constant firefighting with legacy systems leads to frustration and team turnover.
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-8 text-center">
                            <div className="text-4xl mb-4"><MessageCircleOff size={48} className="mx-auto" /></div>
                            <h3 className="text-xl font-ocr-a mb-4">Communication Gap</h3>
                            <p className="text-gray-300 font-jetbrains-mono">
                                Technical debt remains abstract and misunderstood between engineering and business teams.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-ocr-a mb-6">Use Cases</h2>
                        <p className="text-xl font-jetbrains-mono text-gray-300 max-w-3xl mx-auto">
                            Bridge addresses the core challenges of modern software development teams
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-600 rounded-lg p-3 flex-shrink-0">
                                    <div className="text-white text-xl"><BarChart /></div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-ocr-a mb-2">Technical Debt Management</h3>
                                    <p className="text-gray-300 font-jetbrains-mono">
                                        Real-time visibility into codebase health with actionable insights for proactively managing debt.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="bg-green-600 rounded-lg p-3 flex-shrink-0">
                                    <div className="text-white text-xl"><Users /></div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-ocr-a mb-2">Project Management</h3>
                                    <p className="text-gray-300 font-jetbrains-mono">
                                        Help managers visualize dev contributions and debt incurred by individuals or teams.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-purple-600 rounded-lg p-3 flex-shrink-0">
                                    <div className="text-white text-xl"><TrendingUp /></div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-ocr-a mb-2">Performance Reviews</h3>
                                    <p className="text-gray-300 font-jetbrains-mono">
                                        Provide objective data around developer impact, enabling fair, data-driven assessments.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="bg-orange-600 rounded-lg p-3 flex-shrink-0">
                                    <div className="text-white text-xl"><Rocket /></div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-ocr-a mb-2">AI-Generated Debt</h3>
                                    <p className="text-gray-300 font-jetbrains-mono">
                                        Address the emerging wave of technical debt specifically created by AI-driven development.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-ocr-a mb-6">How It Works</h2>
                        <p className="text-xl font-jetbrains-mono text-gray-300 max-w-3xl mx-auto">
                            Bridge combines state-of-the-art AI with intuitive visual dashboards
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">1</span>
                            </div>
                            <h3 className="text-xl font-ocr-a mb-4">Quantify</h3>
                            <p className="text-gray-300 font-jetbrains-mono">
                                Our AI analyzes your codebase to assign clear numeric scores and financial impact estimations.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">2</span>
                            </div>
                            <h3 className="text-xl font-ocr-a mb-4">Visualize</h3>
                            <p className="text-gray-300 font-jetbrains-mono">
                                Intuitive dashboards clearly display technical debt metrics, visualizations, and trends.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl">3</span>
                            </div>
                            <h3 className="text-xl font-ocr-a mb-4">Act</h3>
                            <p className="text-gray-300 font-jetbrains-mono">
                                Get actionable insights and strategies to proactively manage debt before it becomes overwhelming.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Book a Demo Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-ocr-a mb-6">Ready to Get Started?</h2>
                    <p className="text-xl font-jetbrains-mono text-gray-300 mb-10 max-w-2xl mx-auto">
                        See Bridge in action with a personalized demo of our technical debt management platform.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <button style={{ backgroundColor: 'var(--color-accent)' }} className="px-8 py-4 hover:opacity-90 text-white font-jetbrains-mono rounded-lg transition duration-200 text-lg">
                                Book a Demo
                            </button>
                        </Link>
                        
                    </div>

                    {/*
                    <p className="text-sm text-gray-400 mt-6 font-jetbrains-mono">
                        Get started in minutes, not months. No credit card required.
                    </p> */}
                    
                </div>
            </section>

            <Footer />
        </div>
    );
} 