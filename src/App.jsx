import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Services from "./components/Services";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Salehi Events</title>
        <meta name="description" content="Create Unforgettable Memories" />
        <meta name="keywords" content="React, Vite, SEO, Example" />
        <meta name="author" content="Your Name" />
        <link rel="canonical" href="http://salehievents.com.au" />
        <link rel="icon" href="/favicon.svg" type="image/x-icon" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* About Section */}
        <About />

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              Contact Us
            </h2>
            <p className="mt-4 text-center text-gray-600">
              Feel free to reach out for any inquiries or questions.
            </p>
            <div className="mt-8 flex justify-center">
              <form className="w-full max-w-lg">
                <div className="mb-4">
                  <input
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
