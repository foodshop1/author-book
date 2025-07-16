import Link from 'next/link';

interface NavigationProps {
  currentPage: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Sarah Johnson
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'home' ? 'text-gray-900' : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                Home
              </Link>
              <Link
                href="/books"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'books' ? 'text-gray-900' : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                Books
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'about' ? 'text-gray-900' : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                About
              </Link>
              <Link
                href="/media"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'media' ? 'text-gray-900' : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                Media
              </Link>
              <Link
                href="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === 'contact' ? 'text-gray-900' : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
