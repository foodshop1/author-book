import Image from 'next/image';
import Link from 'next/link';
import { Geist } from 'next/font/google';

const geist = Geist({
  subsets: ['latin'],
});

export default function About() {
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
                  className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Sarah Johnson</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Children's book author, educator, and advocate for early literacy
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Author Photo */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/author-photo.jpg" alt="Sarah Johnson" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Hi! I'm Sarah Johnson, a passionate children's book author who believes that every child deserves to
                  see themselves in the stories they read. My journey into children's literature began over a decade ago
                  when I was working as an early childhood educator.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  I noticed that many of my students were struggling to connect with the books available to them. Some
                  couldn't find characters that looked like them, while others were missing stories that reflected their
                  experiences and dreams. This realization sparked my mission to create inclusive, engaging, and
                  meaningful stories for young readers.
                </p>
                <p className="text-lg text-gray-600">
                  Today, I'm proud to have published several award-winning children's books that celebrate diversity,
                  encourage imagination, and foster a love of reading in children from all backgrounds.
                </p>
              </div>

              {/* Education & Experience */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Education & Experience</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-100 p-3 rounded-full">
                      <div className="text-indigo-600 text-xl">🎓</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Master's in Early Childhood Education</h4>
                      <p className="text-gray-600">University of Education, 2012</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-100 p-3 rounded-full">
                      <div className="text-indigo-600 text-xl">📚</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Children's Book Author</h4>
                      <p className="text-gray-600">Published 5+ books, 2018-Present</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-100 p-3 rounded-full">
                      <div className="text-indigo-600 text-xl">🏫</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Early Childhood Educator</h4>
                      <p className="text-gray-600">10+ years teaching experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-indigo-600 text-2xl">🌟</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inspire Imagination</h3>
              <p className="text-gray-600">
                Create stories that spark curiosity and encourage children to dream big and explore new worlds.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-indigo-600 text-2xl">❤️</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Foster Inclusion</h3>
              <p className="text-gray-600">
                Write books that represent diverse characters and experiences, ensuring every child feels seen and
                valued.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-indigo-600 text-2xl">📖</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Build Literacy</h3>
              <p className="text-gray-600">
                Develop engaging stories that make reading fun and help build a lifelong love of books.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">When I'm Not Writing...</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">My Hobbies</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <div className="text-green-500">🌿</div>
                  <span>Gardening and growing my own vegetables</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="text-blue-500">🏃‍♀️</div>
                  <span>Morning runs in the park</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="text-purple-500">🎨</div>
                  <span>Watercolor painting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="text-orange-500">☕</div>
                  <span>Exploring local coffee shops</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">My Family</h3>
              <p className="text-gray-600 mb-4">
                I live in a cozy house in the suburbs with my husband, two children (ages 6 and 8), and our rescue dog,
                Luna. My kids are my biggest critics and biggest fans - they're the first to hear all my new stories!
              </p>
              <p className="text-gray-600">
                We love reading together every night, and I often test my new book ideas on them. Their honest feedback
                helps me create stories that truly resonate with young readers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Awards & Recognition</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Children's Book 2023</h3>
              <p className="text-gray-600 text-sm">Independent Book Publishers Association</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Parent's Choice Award</h3>
              <p className="text-gray-600 text-sm">For "The Magical Garden"</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Featured Author</h3>
              <p className="text-gray-600 text-sm">Local Library Reading Program</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Connect!</h2>
          <p className="text-xl text-indigo-100 mb-8">
            I love hearing from readers, educators, and fellow book lovers. Whether you want to discuss my books,
            arrange a school visit, or just say hello, I'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/books"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore My Books
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Get In Touch
            </Link>
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
