import { Container } from 'react-bootstrap';
import Autocompletes from './components/autocomplete/autocompletes';
import StoriesList from './components/storiesList/storiesList';

function Stories() {
  return (
    <Container> 
      <Autocompletes />
      <hr />
      <h3 className="text-start">Results:</h3>
      <StoriesList />
    </Container>
  )
}

export default Stories;
