import Image from 'next/image';
import Link from 'next/link';
import { Geist } from 'next/font/google';

const geist = Geist({
  subsets: ['latin'],
});

export default function Books() {
  return (
    <div className={`${geist.className} min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100`}>
      {/* Navigation */}
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
                <Link href="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link
                  href="/books"
                  className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Books</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the magical worlds I've created for young readers. Each story is crafted with love, imagination,
            and the hope of inspiring a lifelong love of reading.
          </p>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {/* Book 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg">
                    <Image src="/book-cover-1.jpg" alt="The Magical Garden" fill className="object-cover" />
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">The Magical Garden</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    When little Emma discovers a hidden garden behind her grandmother's house, she embarks on a
                    whimsical adventure filled with talking flowers, friendly insects, and the magic of friendship. This
                    heartwarming tale teaches children about the beauty of nature, the importance of kindness, and the
                    power of imagination.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium text-gray-500">Age Range:</span>
                      <span className="text-gray-900">3-8 years</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium text-gray-500">Pages:</span>
                      <span className="text-gray-900">32 pages</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium text-gray-500">Format:</span>
                      <span className="text-gray-900">Hardcover & Paperback</span>
                    </div>
                  </div>
                  <div className="mt-8 space-y-4">
                    <a
                      href="https://amazon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Buy on Amazon
                    </a>
                    <div className="text-sm text-gray-500">
                      Also available on Barnes & Noble, Bookshop.org, and independent bookstores
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Trailer Section */}
              <div className="bg-gray-50 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Book Trailer</h3>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-gray-500 mb-2">📹</div>
                    <p className="text-gray-600">Book trailer coming soon!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Book 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg">
                    <Image src="/book-cover-2.jpg" alt="Adventure in the Forest" fill className="object-cover" />
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Adventure in the Forest</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Join brave little explorers Max and Lily as they venture into the mysterious forest behind their
                    neighborhood. Along the way, they encounter wise old trees, playful woodland creatures, and learn
                    valuable lessons about courage, teamwork, and respecting nature. Perfect for young adventurers who
                    love outdoor exploration!
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium text-gray-500">Age Range:</span>
                      <span className="text-gray-900">4-9 years</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium text-gray-500">Pages:</span>
                      <span className="text-gray-900">40 pages</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium text-gray-500">Format:</span>
                      <span className="text-gray-900">Hardcover & Paperback</span>
                    </div>
                  </div>
                  <div className="mt-8 space-y-4">
                    <a
                      href="https://amazon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Buy on Amazon
                    </a>
                    <div className="text-sm text-gray-500">
                      Also available on Barnes & Noble, Bookshop.org, and independent bookstores
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Trailer Section */}
              <div className="bg-gray-50 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Book Trailer</h3>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-gray-500 mb-2">📹</div>
                    <p className="text-gray-600">Book trailer coming soon!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Book 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg">
                    <Image src="/book-cover-3.jpg" alt="The Friendly Dragon" fill className="object-cover" />
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">The Friendly Dragon</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Meet Spark, a young dragon who doesn't quite fit in with the other dragons. Instead of breathing
                    fire, Spark creates beautiful fireworks! This touching story about acceptance, friendship, and being
                    true to yourself will warm hearts and inspire children to embrace their unique qualities.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium text-gray-500">Age Range:</span>
                      <span className="text-gray-900">3-7 years</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium text-gray-500">Pages:</span>
                      <span className="text-gray-900">28 pages</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium text-gray-500">Format:</span>
                      <span className="text-gray-900">Hardcover & Paperback</span>
                    </div>
                  </div>
                  <div className="mt-8 space-y-4">
                    <a
                      href="https://amazon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Buy on Amazon
                    </a>
                    <div className="text-sm text-gray-500">
                      Also available on Barnes & Noble, Bookshop.org, and independent bookstores
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Trailer Section */}
              <div className="bg-gray-50 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Book Trailer</h3>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-gray-500 mb-2">📹</div>
                    <p className="text-gray-600">Book trailer coming soon!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Coming Soon</h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm currently working on my next book! Sign up for my newsletter to be the first to know when it's
            available.
          </p>
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">"The Moonlight Lullaby"</h3>
            <p className="text-gray-600 mb-6">
              A gentle bedtime story about a little owl who helps other animals fall asleep with her beautiful
              lullabies. Perfect for creating peaceful bedtime routines.
            </p>
            <div className="text-sm text-gray-500">Expected Release: Fall 2024</div>
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
