import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGroupComponent from './Body/indexBody';
import HeaderComponent from './Header';
import PaginationComponent from './Footer';
import ContactComponent from './Body/Contact';
import { Routes, Route } from 'react-router-dom';

// компоненты в React это обычная JS функция коорая возвращает Ract JSX/React element

function App() {
// JSX это новый синтекс который совмещает в себе js и HTML в удобном виде
// JSX  реакт элемент имеет правило: возвращается только один элемент или один компонент. Один главный и бесконечное количество второстепенных
// в JSX атрибут класс переимнован в className
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
