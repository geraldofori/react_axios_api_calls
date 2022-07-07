import { Container } from 'react-bootstrap';
import './App.css';
import Contacts from './components/Contacts';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Container>
        <Contacts/>
      </Container>
    </div>
  );
}

export default App;
