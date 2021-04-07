import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '@services/common/redux/reducers/interfaces/IState';
import { getAutocomplete, getStoriesSearch } from '@views/Stories/data/redux/actions/storiesActions';

function Autocompletes() {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');
  const autocompletes = useSelector((state: IState) => state.stories.autocompletes);
  
  const handleGetAutoComplete = useCallback((term: string) => {
    dispatch(getAutocomplete({term}));
  }, []);

  const handleStoriesSearch = useCallback((termFromEvent?: string) => {
    if (!term && !termFromEvent) return;
    dispatch(getStoriesSearch({text: termFromEvent || term}));
  }, [term]);

  const handleStoriesInputChange = useCallback((event) => {
    if (event?.nativeEvent.toString().includes('InputEvent')) {
      handleGetAutoComplete(event.target.value);
    } else {
      handleStoriesSearch(event.target.value);
    }
    setTerm(event.target.value);
  }, []);

  return (
    <>
      <div className="input-group mt-3 mb-3">
        <input
          type='text'
          className="form-control"
          placeholder="Companies, Organisations, People or Places..."
          aria-label="Companies, Organisations, People or Places..."
          aria-describedby="search-button"
          list='autocompletes'
          onChange={handleStoriesInputChange}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="search-button"
          onClick={() => handleStoriesSearch()}
          >
            Search
        </button>
      </div>
      <datalist id='autocompletes'>
        {autocompletes ? autocompletes.map(({id, text}) => (<option key={id} value={text}/>)) : null}
      </datalist>
    </>
  )
}

export default Autocompletes;