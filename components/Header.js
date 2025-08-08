import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center">
                <Link href="/">
                    <span className="flex items-center">
                        <Image
                            src="/images/bridge.svg"
                            alt="Bridge Logo"
                            width={40}
                            height={40}
                            className="mr-3"
                        />
                        <h1 className="text-3xl font-ocr-a">BRIDGE</h1>
                    </span>
                </Link>
            </div>
            <nav>
                <ul className="flex space-x-8 font-jetbrains-mono">
                    <li><Link href="/about" className="hover:text-gray-400 transition duration-200">About</Link></li>
                    <li><Link href="/dashboard" className="hover:text-gray-400 transition duration-200">Demo</Link></li>
                    <li><Link href="/contact" className="hover:text-gray-400 transition duration-200">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
} 