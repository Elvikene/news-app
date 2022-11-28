import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGroupComponent from './Body/indexBody';
import HeaderComponent from './Header';
import PaginationComponent from './Footer';
import ContactComponent from './Body/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Container>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={
          <>
            <NewsGroupComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/:q" element={
          <>
            <NewsGroupComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/lang/:lang" element={
          <>
            <NewsGroupComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/contact" element={<ContactComponent name="Elvi" address="Moon" phone=" + 372 55 555" email="elvi@elvi.ee" />} />
        <Route path="/contact/school" element={<ContactComponent name="School" address="Tallinn" phone=" + 372 55 555" email="school@school.ee" />} />
      </Routes>
      <errorModalComponent />
    </Container>
  );
}

export default App;
