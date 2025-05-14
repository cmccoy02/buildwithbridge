import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
    return (
        <div className="min-h-screen bg-amoled-black text-white flex flex-col">
            <Head>
                <title>About - Bridge</title>
                <meta name="description" content="About Bridge" />
                <link rel="icon" href="/images/bridge.svg" />
            </Head>

            <Header />

            <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-ocr-a mb-6">About Bridge</h1>
            </main>
            <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">The Problem</h2>
                <p>
                    Technical debt is an inevitable challenge in modern software development, dramatically intensified by the rapid adoption of AI-driven coding tools. While AI accelerates product delivery, it also introduces new complexities and hidden maintenance burdens. Traditionally, technical debt remains abstract, misunderstood, and poorly communicated between engineering teams and business stakeholders, leading to friction, inefficiencies, developer burnout, and financial loss.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
                <p className="mb-4">
                    Bridge transforms technical debt from a vague, abstract concept into clear, actionable insights. By combining state-of-the-art AI with intuitive visual dashboards, Bridge helps companies visualize their technical debt clearly, quantify its financial and operational impacts, and proactively manage it before it becomes overwhelming.
                </p>
                <p className="mb-4">
                    Our unique value lies in addressing the emerging wave of AI-generated technical debt specifically. While most tools only analyze code statically, Bridge goes further—delivering real-time analytics, predictive insights, and tailored strategies that guide informed decisions. Our platform empowers teams to harness the speed and power of AI-driven development without being burdened by its hidden costs.
                </p>
                <p>
                    At Bridge, we believe technical debt isn’t an unsolvable mystery—it's a manageable, predictable challenge. And we're here to bridge the gap.
                </p>
            </section>

            <Footer />
        </div>
    );
} 