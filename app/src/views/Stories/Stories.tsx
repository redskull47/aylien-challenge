import { Container } from 'react-bootstrap';
import Autocompletes from './components/autocomplete/autocompletes';

function Stories() {
  return (
    <Container> 
      <Autocompletes />
      <h1>Results:</h1>
    </Container>
  )
}

export default Stories;
