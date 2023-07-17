import Container from './components/Container';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Stream from './components/Stream';
import Tv from './components/Tv';
import Watch from './components/Watch';

function App() {
      return (
        <>
          <header class="header">
            <Nav />
            <Container />
          </header>
          <Tv />
          <Watch />
          <Stream />
          <Faq />
          <Footer />
        </>
      );
}

export default App
