import { useScrollReveal } from './hooks/useScrollReveal';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Products from './components/Products';
import Story from './components/Story';
import Features from './components/Features';
import Footer from './components/Footer';

export function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Products />
      <Story />
      <Features />
    </>
  );
}

export default function App(props) {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  );
}
