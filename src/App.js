import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import BodyComponent from './Body/indexBody';
import HeaderComponent from './Header';
import PaginationComponent from './Footer';
import ContactComponent from './Body/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Container>
      <HeaderComponent />
      <Routes>
        <Route path="/news-app" element={
          <>
            <BodyComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/news-app/:q" element={
          <>
            <BodyComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/news-app/lang/:lang" element={
          <>
            <BodyComponent />
            <PaginationComponent />
          </>
        } />
        <Route path="/news-app/contact" element={<ContactComponent name="Elvi" address="Moon" phone=" + 372 55 555" email="elvi@elvi.ee" />} />
        <Route path="/news-app/contact/school" element={<ContactComponent name="School" address="Tallinn" phone=" + 372 55 555" email="school@school.ee" />} />
      </Routes>
      <errorModalComponent />
    </Container>
  );
}

export default App;
