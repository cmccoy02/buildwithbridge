import Head from 'next/head';
import Image from 'next/image';

export default function BridgeLanding() {
    return (
        <div className="min-h-screen bg-amoled-black text-white flex flex-col">
            <Head>
                <title>Bridge</title>
                <meta name="description" content="Build with Bridge" />
                <link rel="icon" href="/images/bridge.svg" />
            </Head>

            <header className="py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="flex items-center">
                    <Image
                        src="/images/bridge.svg"
                        alt="Bridge Logo"
                        width={40}
                        height={40}
                        className="mr-3"
                    />
                    <h1 className="text-3xl font-ocr-a">BRIDGE</h1>
                </div>
                <nav>
                    <ul className="flex space-x-8 font-jetbrains-mono">
                        <li><a href="#" className="hover:text-gray-400 transition duration-200">About</a></li>
                        <li><a href="#" className="hover:text-gray-400 transition duration-200">Services</a></li>
                        <li><a href="#" className="hover:text-gray-400 transition duration-200">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-5xl md:text-6xl font-ocr-a mb-6">
                    BUILD WITH <span className="text-blue-500">BRIDGE</span>
                </h2>
                <p className="text-xl md:text-2xl font-jetbrains-mono max-w-3xl mb-10">
                    Connecting vision to reality with cutting-edge solutions
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-jetbrains-mono rounded-md transition duration-200">
                        Get Started
                    </button>
                    <button className="px-8 py-3 border border-white hover:bg-white hover:text-black font-jetbrains-mono rounded-md transition duration-200">
                        Learn More
                    </button>
                </div>
            </main>

            <footer className="py-6 px-4 sm:px-6 lg:px-8 font-jetbrains-mono text-sm text-gray-400">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p>© {new Date().getFullYear()} Bridge. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition duration-200">Privacy</a>
                        <a href="#" className="hover:text-white transition duration-200">Terms</a>
                        <a href="#" className="hover:text-white transition duration-200">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
} 