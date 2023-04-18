import {Link, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Details from './components/details/details';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route exact path="/cart/:id" element={<Details />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
