import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
    return (
        <div className="min-h-screen bg-amoled-black text-white flex flex-col">
            <Head>
                <title>About - Bridge</title>
                <meta name="description" content="About Bridge — Codebase intelligence for the AI development era." />
                <link rel="icon" href="/images/bridge.svg" />
            </Head>

            <Header />

            <main className="flex-grow flex flex-col items-center px-4 sm:px-6 lg:px-8 py-24">

                {/* Hero */}
                <div className="max-w-3xl w-full mb-24 text-center">
                    <p className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-4">About Bridge</p>
                    <h1 className="text-5xl sm:text-6xl font-ocr-a leading-tight mb-6">
                        Codebase intelligence<br />for the AI era.
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        AI coding tools ship features faster than ever. They also accumulate technical debt faster than ever.
                        Bridge exists to close that gap.
                    </p>
                </div>

                {/* Divider */}
                <div className="w-full max-w-3xl border-t border-white/10 mb-24" />

                {/* Problem */}
                <section className="max-w-3xl w-full mb-20">
                    <p className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-4">The Problem</p>
                    <h2 className="text-3xl font-ocr-a mb-6">AI writes code fast.<br />Debt compounds faster.</h2>
                    <p className="text-gray-400 text-base leading-relaxed mb-4">
                        AI coding agents are transforming how software gets built — but they introduce a new class of problem.
                        Every autonomous code change carries risk: outdated dependencies, fragile patterns, undocumented assumptions.
                        Without the right context, agents repeat mistakes, accumulate debt, and create maintenance burdens that slow teams down.
                    </p>
                    <p className="text-gray-400 text-base leading-relaxed">
                        The challenge isn't just that technical debt exists. It's that no one — not developers, not managers, not
                        the agents themselves — has a clear picture of where it lives, how fast it's growing, or what it's costing.
                    </p>
                </section>

                {/* Solution */}
                <section className="max-w-3xl w-full mb-20">
                    <p className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-4">Our Solution</p>
                    <h2 className="text-3xl font-ocr-a mb-6">The intelligence layer<br />your codebase has been missing.</h2>
                    <p className="text-gray-400 text-base leading-relaxed mb-4">
                        Bridge is a codebase intelligence platform built specifically for teams using AI-assisted development.
                        It surfaces the context that agents need before they touch your code, enforces organizational standards
                        in real time, and validates changes after they happen — creating a closed feedback loop that keeps debt under control.
                    </p>
                    <p className="text-gray-400 text-base leading-relaxed">
                        For engineering leadership, Bridge Console translates codebase health into clear metrics — debt trends,
                        risk scores, dependency age, and the real cost of inaction. For developers, Bridge Desktop brings that
                        intelligence directly into the workflow, making every AI-assisted change a smarter one.
                    </p>
                </section>

                {/* Products — minimal cards */}
                <div className="max-w-3xl w-full grid sm:grid-cols-2 gap-4 mb-24">
                    <div className="border border-white/10 rounded-lg p-6 hover:border-white/25 transition-colors duration-200">
                        <p className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-3">Bridge Desktop</p>
                        <p className="text-white font-ocr-a text-lg mb-3">Local intelligence.<br />Zero overhead.</p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Runs entirely on your machine. Automates dependency updates,
                            surfaces code health insights, and feeds structured context to AI coding agents before they act.
                        </p>
                    </div>
                    <div className="border border-white/10 rounded-lg p-6 hover:border-white/25 transition-colors duration-200">
                        <p className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-3">Bridge Console</p>
                        <p className="text-white font-ocr-a text-lg mb-3">Debt made visible.<br />Leadership-ready.</p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            A dashboard for engineering leaders tracking tech debt across every repo —
                            with trend analysis, risk scoring, and the metrics that matter to both engineers and the business.
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full max-w-3xl border-t border-white/10 mb-24" />

                {/* Founder note */}
                <section className="max-w-3xl w-full mb-8">
                    <p className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-4">Why We're Building This</p>
                    <p className="text-gray-400 text-base leading-relaxed mb-4">
                        We started Bridge because the problem is only getting worse. As AI coding agents become the default way
                        software gets written, the teams that win will be the ones that can trust their agents to act with context —
                        and verify that their work holds up.
                    </p>
                    <p className="text-gray-400 text-base leading-relaxed">
                        We believe technical debt isn't inevitable. It's a data problem. And we're here to solve it.
                    </p>
                </section>

            </main>

            <Footer />
        </div>
    );
}