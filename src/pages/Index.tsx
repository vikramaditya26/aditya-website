

import React from 'react';
import { ExternalLink, Download, BookOpen, Headphones, Mail } from 'lucide-react';


const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header Navigation */}
      <header className="border-b border-gray-200 py-6">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="flex flex-wrap gap-6 text-sm">
            <a href="#home" className="hover:text-gray-600 transition-colors">Home</a>
            <a href="#almanack" className="hover:text-gray-600 transition-colors">Almanack of Vikram Aditya</a>
            <a href="#audiobook" className="hover:text-gray-600 transition-colors">Audiobook</a>
            <a href="#blog" className="hover:text-gray-600 transition-colors">Blog Posts</a>
            <a href="#secret" className="hover:text-gray-600 transition-colors">Secret Sections</a>
            <a href="#translations" className="hover:text-gray-600 transition-colors">Translations</a>
            <a href="#bulk" className="hover:text-gray-600 transition-colors">Discounted Bulk Orders (10+)</a>
            <a href="#reviews" className="hover:text-gray-600 transition-colors">Reviews</a>
            <a href="#media" className="hover:text-gray-600 transition-colors">More Media</a>
            <a href="#reading" className="hover:text-gray-600 transition-colors">Recommended Reading</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section id="home" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Almanack of Vikram Aditya
          </h1>
          <p className="text-xl text-gray-600 mb-2">A guide to wealth and happiness</p>
          <p className="text-lg text-gray-500 mb-8">
            The Almanack of Vikram Aditya<br />
        
          </p>
        </section>

        {/* Welcome Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Hello and welcome!</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              This book collects and curates Vikram's wisdom from Twitter, Podcasts, and Essays over the past decade. 
              The wisdom of Vikram Aditya, created and edited by Eric Jorgenson, with Illustrations by Jack Butcher, 
              and a Foreword by Tim Ferriss.
            </p>
            <p>
              The entirety of the book (and bonus content!) is free to read on this site, as well as complete pdf 
              and e-reader versions for free download. This project is a public service, run on donations. 
              Vikram does not earn any money from this project. You can find Vikram directly on his website and @VikramAditya on Twitter.
            </p>
            <p>
              Join my weekly newsletter for updates on new projects, podcasts, and posts.
            </p>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gray-50 p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold mb-4">Much more than a book!</h3>
          <p className="text-gray-600 mb-6">
            Share your email to get new posts diving deeper into these ideas, new insights and tools about 
            how to apply them, and updates about the best of Vikram!
          </p>
          <div className="flex gap-3">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">We respect inboxes.</p>
        </section>

        {/* Purchase Options */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Physical & Digital Copies</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <ExternalLink size={16} />
                  Buy Paperback on Amazon
                </a>
                <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <ExternalLink size={16} />
                  Buy Hardcover on Amazon
                </a>
                <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <ExternalLink size={16} />
                  Buy Kindle on Amazon
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Free Versions</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <BookOpen size={16} />
                  Start Reading on Web
                </a>
                <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <Download size={16} />
                  Download Free PDF
                </a>
                <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <Download size={16} />
                  Download Free .MOBI
                </a>
                <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                  <Download size={16} />
                  Download free .ePub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold mb-2">10+ years of Tweets</h4>
              <p className="text-gray-600 text-sm">
                Selections from Vikram's 17,000+ tweets are perfect summaries of key ideas. 
                This is a book of aphorisms, wrapped in deep dives of those insights.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎙️</span>
              </div>
              <h4 className="font-semibold mb-2">Podcasts and Essays</h4>
              <p className="text-gray-600 text-sm">
                Vikram creates incredible podcasts and essays. I've excerpted and stitched 
                them together into an insight-dense book.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h4 className="font-semibold mb-2">Dozens of Interviews</h4>
              <p className="text-gray-600 text-sm">
                Interviews are the bulk of the book's content. The Vikrammanack is defined 
                by the warm, casual tone of conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-gray-50 p-8 rounded-lg mb-16">
          <blockquote className="text-lg italic text-center">
            "I call Vikram 'the Angel Philosopher' and the Almanack shows why. Packed with unforgettable 
            wisdom and penetrating insights, your mental gears will be working overtime."
          </blockquote>
          <p className="text-center text-gray-600 mt-4">— Shane Parrish, Founder of Farnam Street</p>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="font-bold text-lg">VIKRAM ADITYA</h4>
              <p className="text-gray-600 text-sm mt-2">
                Entrepreneur and Investor. Vikram is founder of multiple startups. He is an Angel investor 
                in various companies. Vikram has become widely followed for his thoughts on startups, 
                investing, crypto, wealth, and happiness.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">More about Vikram</a>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="font-bold text-lg">ERIC JORGENSON</h4>
              <p className="text-gray-600 text-sm mt-2">
                Our Author. Product Strategist at Zaarly and writer. His business blog, Evergreen, 
                has educated and entertained more than one million readers since 2014.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">More about Eric</a>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="font-bold text-lg">JACK BUTCHER</h4>
              <p className="text-gray-600 text-sm mt-2">
                Our Illustrator. Designer by trade, Jack retired from a short career in corporate 
                advertising to spend most of the day on Twitter, building design studio & media brand Visualize Value.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">More about Jack</a>
            </div>
          </div>
        </section>

        {/* Chapter List */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Chapter List</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <a href="#" className="block p-3 hover:bg-gray-50 rounded border">Building Wealth</a>
              <a href="#" className="block p-3 hover:bg-gray-50 rounded border">Building Judgement</a>
              <a href="#" className="block p-3 hover:bg-gray-50 rounded border">Learning Happiness</a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block p-3 hover:bg-gray-50 rounded border">Saving Yourself</a>
              <a href="#" className="block p-3 hover:bg-gray-50 rounded border">How to Live</a>
              <a href="#" className="block p-3 hover:bg-gray-50 rounded border">Recommended Reading</a>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6">Much more to come!</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-600">
          <p>Thank you for visiting the site. Enjoy the published content and the book.</p>
          <p>We appreciate your support, and please pay it forward.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
