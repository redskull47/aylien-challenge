import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'services/common/redux/reducers/interfaces/IState';
import { getAutocomplete, getStoriesSearch } from '../../../../views/Stories/data/redux/actions/storiesActions';

function Autocompletes() {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');
  const autosuggests = useSelector((state: IState) => state.stories.autocompletes);
  
  const handleGetAutoComplete = useCallback((term: string) => {
    dispatch(getAutocomplete({term}));
  }, []);

  const handleStoriesSearch = useCallback(() => {
    dispatch(getStoriesSearch({text: term}))
  }, [term]);

  useEffect(() => {
    if (!term) return;
    handleGetAutoComplete(term);
  }, [term, handleGetAutoComplete]);

  const handleStoriesInputChange = useCallback((event) => {
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
          list='autosuggest'
          onChange={handleStoriesInputChange}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="search-button"
          onClick={handleStoriesSearch}
          >
            Search
        </button>
      </div>
      <datalist id='autosuggest'>
        {autosuggests ? autosuggests.map(({id, text}) => (<option key={id} value={text} />)) : null}
      </datalist>
    </>
  )
}

export default Autocompletes;