import React from 'react';
import About from '../../components/About';
import DownApp from '../../components/DownApp';
import Footer from '../../components/Footer';
import GalleryImages from '../../components/Gallery';
import Header from '../../components/Header';
import Price from '../../components/Price';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container id="wrapper">
      <Header />
      <About />
      <Price />
      <DownApp />
      <GalleryImages />
      <Footer />
    </Container>
  );
};

export default Home;

// export default function App() {
//   return (
//     <div className="container">
//         <Header />
//         <Router>
//           <Route path={["/:id", "/"]} component={Store} />
//         </Router>
//     </div>
//   );
// }
