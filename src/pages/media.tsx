import Image from 'next/image';
import Link from 'next/link';
import { Geist } from 'next/font/google';

const geist = Geist({
  subsets: ['latin'],
});

export default function Media() {
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
                  className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Media & Press</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Featured interviews, press coverage, and media mentions highlighting my work in children's literature.
          </p>
        </div>
      </section>

      {/* Press Kit Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Press Kit</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Author Photos</h3>
              <p className="text-gray-600 mb-4">High-resolution images for media use</p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Download Photos
              </button>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bio & Press Release</h3>
              <p className="text-gray-600 mb-4">Author biography and press materials</p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Download Materials
              </button>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Book Covers</h3>
              <p className="text-gray-600 mb-4">High-quality book cover images</p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Download Covers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Press Coverage */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Recent Press Coverage</h2>
          <div className="space-y-8">
            {/* Press Item 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 p-8">
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-4">📰</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Local News Weekly</h3>
                    <p className="text-gray-600 text-sm">March 15, 2024</p>
                  </div>
                </div>
                <div className="lg:col-span-2 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    "Local Author Sarah Johnson Inspires Young Readers with Inclusive Children's Books"
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Sarah Johnson, a local children's book author and former educator, is making waves in the literary
                    world with her inclusive approach to storytelling. Her latest book, "The Magical Garden," has been
                    praised for its diverse characters and universal themes of friendship and discovery.
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">Featured in:</span>
                    <span className="text-indigo-600 font-medium">Local News Weekly</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Press Item 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 p-8">
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-4">🎙️</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Parenting Today Podcast</h3>
                    <p className="text-gray-600 text-sm">February 28, 2024</p>
                  </div>
                </div>
                <div className="lg:col-span-2 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    "Episode 45: Creating Inclusive Children's Literature with Sarah Johnson"
                  </h3>
                  <p className="text-gray-600 mb-4">
                    In this episode, we sit down with children's book author Sarah Johnson to discuss the importance of
                    representation in children's literature and how parents can choose books that reflect their family's
                    values and experiences.
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">Featured in:</span>
                    <span className="text-indigo-600 font-medium">Parenting Today Podcast</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Press Item 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 p-8">
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-4">📖</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Children's Book Review</h3>
                    <p className="text-gray-600 text-sm">January 12, 2024</p>
                  </div>
                </div>
                <div className="lg:col-span-2 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    "The Friendly Dragon: A Heartwarming Tale of Acceptance"
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Sarah Johnson's "The Friendly Dragon" is a delightful addition to any child's bookshelf. With its
                    gentle message about being true to yourself and the beautiful illustrations that accompany the
                    story, this book is sure to become a bedtime favorite.
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">Featured in:</span>
                    <span className="text-indigo-600 font-medium">Children's Book Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interviews Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Interviews & Speaking</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recent Interviews</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="text-indigo-600">🎙️</div>
                  <div>
                    <div className="font-semibold text-gray-900">Local Radio Show</div>
                    <div className="text-sm text-gray-600">"Authors in the Morning" - March 2024</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-indigo-600">📺</div>
                  <div>
                    <div className="font-semibold text-gray-900">Community TV</div>
                    <div className="text-sm text-gray-600">"Local Authors Spotlight" - February 2024</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-indigo-600">📰</div>
                  <div>
                    <div className="font-semibold text-gray-900">Education Magazine</div>
                    <div className="text-sm text-gray-600">"Teaching Through Stories" - January 2024</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Speaking Engagements</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="text-green-600">🏫</div>
                  <div>
                    <div className="font-semibold text-gray-900">School Visits</div>
                    <div className="text-sm text-gray-600">Available for K-3 classroom visits</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-green-600">📚</div>
                  <div>
                    <div className="font-semibold text-gray-900">Library Events</div>
                    <div className="text-sm text-gray-600">Storytime and author talks</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-green-600">🎓</div>
                  <div>
                    <div className="font-semibold text-gray-900">Teacher Workshops</div>
                    <div className="text-sm text-gray-600">Literacy and storytelling sessions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Awards & Recognition</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Children's Book 2023</h3>
              <p className="text-gray-600 text-sm">Independent Book Publishers Association</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Parent's Choice Award</h3>
              <p className="text-gray-600 text-sm">For "The Magical Garden"</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Featured Author</h3>
              <p className="text-gray-600 text-sm">Local Library Reading Program</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl mb-4">🎖️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Literacy Champion</h3>
              <p className="text-gray-600 text-sm">Community Education Award</p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Media Inquiries</h2>
          <p className="text-xl text-indigo-100 mb-8">
            I'm available for interviews, speaking engagements, and media appearances. Please reach out for press
            materials, high-resolution images, or to schedule an interview.
          </p>
          <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center justify-center space-x-3">
                <div className="text-indigo-600">📧</div>
                <span>sarah@sarahjohnsonbooks.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="text-indigo-600">📱</div>
                <span>Available for phone interviews</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="text-indigo-600">📍</div>
                <span>Available for in-person interviews in the local area</span>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Send Media Inquiry
              </Link>
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
