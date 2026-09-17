import Header from './components/Header';
import Hero from './components/Hero';
import HistorySection from './components/HistorySection';
import Schedule from './components/Schedule';
import GoogleReviews from './components/GoogleReviews';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <HistorySection />
      <Gallery />
      <Schedule />
      <GoogleReviews />
      <Footer />
    </div>
  );
}

export default App;
