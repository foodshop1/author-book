import Image from 'next/image';
import Link from 'next/link';
import { Geist } from 'next/font/google';

const geist = Geist({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`${geist.className} min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100`}>
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Sarah Johnson</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link
                  href="/books"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Books
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  href="/media"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Media
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to My World of
              <span className="text-indigo-600 block">Children's Stories</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Creating magical adventures that inspire imagination and foster a love of reading in young minds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/books"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Explore My Books
              </Link>
              <Link
                href="/about"
                className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Learn About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Books</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Book 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-[3/4] relative">
                <Image src="/book-cover-1.jpg" alt="The Magical Garden" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">The Magical Garden</h3>
                <p className="text-gray-600 mb-4">
                  A whimsical tale about friendship and discovery in a hidden garden.
                </p>
                <a
                  href="https://amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded font-medium hover:bg-green-700 transition-colors"
                >
                  Buy on Amazon
                </a>
              </div>
            </div>

            {/* Book 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-[3/4] relative">
                <Image src="/book-cover-2.jpg" alt="Adventure in the Forest" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Adventure in the Forest</h3>
                <p className="text-gray-600 mb-4">Join brave little explorers on an exciting forest adventure.</p>
                <a
                  href="https://amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded font-medium hover:bg-green-700 transition-colors"
                >
                  Buy on Amazon
                </a>
              </div>
            </div>

            {/* Book 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-[3/4] relative">
                <Image src="/book-cover-3.jpg" alt="The Friendly Dragon" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">The Friendly Dragon</h3>
                <p className="text-gray-600 mb-4">A heartwarming story about acceptance and unlikely friendships.</p>
                <a
                  href="https://amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded font-medium hover:bg-green-700 transition-colors"
                >
                  Buy on Amazon
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/books" className="text-indigo-600 hover:text-indigo-800 font-semibold">
              View All Books →
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Author</h2>
              <p className="text-lg text-gray-600 mb-6">
                Hi! I'm Sarah Johnson, a passionate children's book author dedicated to creating stories that spark
                imagination and inspire young readers.
              </p>
              <p className="text-gray-600 mb-8">
                With over 10 years of experience in early childhood education, I understand what makes children's hearts
                sing and minds wonder. My books are crafted with love, humor, and the belief that every child deserves
                to see themselves in the stories they read.
              </p>
              <Link
                href="/about"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Read My Full Story
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image src="/author-photo.jpg" alt="Sarah Johnson" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Sarah Johnson</h3>
              <p className="text-gray-300">Creating magical stories for young readers and their families.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/books" className="text-gray-300 hover:text-white">
                    Books
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/media" className="text-gray-300 hover:text-white">
                    Media
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <p className="text-gray-300 mb-2">
                Get in touch for speaking engagements, school visits, or just to say hello!
              </p>
              <Link href="/contact" className="text-indigo-400 hover:text-indigo-300">
                Contact Me →
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sarah Johnson. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
