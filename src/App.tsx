import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { OurWork } from './pages/OurWork';
import { FAQ } from './pages/FAQ';
import { LearnPage } from './pages/LearnPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/what-is-seo" element={<LearnPage title="What is SEO?" type="SEO" />} />
            <Route path="/what-is-geo" element={<LearnPage title="What is GEO?" type="GEO" />} />
            <Route path="/what-is-aeo" element={<LearnPage title="What is AEO?" type="AEO" />} />
            <Route path="/voice-search" element={<LearnPage title="Voice Search Optimization" type="Voice Search" />} />
            <Route path="/contact" element={<Home />} /> {/* Contact is a section on Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
