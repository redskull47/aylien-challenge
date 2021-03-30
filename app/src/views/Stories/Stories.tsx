import { useCallback, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'services/common/redux/reducers/interfaces/IState';
import { getAutocomplete } from './data/redux/actions/storiesActions';

function Stories() {
  const dispatch = useDispatch();
  const autosuggests = useSelector((state: IState) => state.stories.autocompletes);
  const [term, setTerm] = useState('');
  
  const handleGetAutoComplete = useCallback((term: string) => {
    dispatch(getAutocomplete({term}));
  }, []);

  useEffect(() => {
    if (!term) return;
    handleGetAutoComplete(term);
  }, [term]);

  const handleStoriesInputChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  return (
    <Container>
      <input type='text' onChange={handleStoriesInputChange} list='autosuggest'/>
      <button>Search</button>
      <datalist id='autosuggest'>
        {autosuggests ? autosuggests.map(({id, text}) => (<option key={id} value={text} />)) : null}
      </datalist>
      <div>Results:</div>
    </Container>
  )
}

export default Stories;
