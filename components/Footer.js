import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-6 px-4 sm:px-6 lg:px-8 font-jetbrains-mono text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p>© {new Date().getFullYear()} Bridge. All rights reserved.</p>
                <div className="flex space-x-6 text-sm">
                    <Link href="/privacy" className="hover:text-white transition duration-200">Privacy</Link>
                    <Link href="/terms" className="hover:text-white transition duration-200">Terms</Link>
                    <Link href="/contact" className="hover:text-white transition duration-200">Contact</Link>
                </div>
            </div>
        </footer>
    );
} 