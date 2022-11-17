import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NewsGroupComponent from './Body/indexBody';
import HeaderComponent from './Header';
import PaginationComponent from './Footer';


function App() {
  return (
<Container>
  <HeaderComponent/>
  <NewsGroupComponent />
  <PaginationComponent />
</Container>
  );
}

export default App;
