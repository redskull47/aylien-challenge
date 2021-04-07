import { IState } from "@services/common/redux/reducers/interfaces/IState"

const storiesListSelector = (state: IState) => state.stories.stories.list;
const storiesPageSelector = (state: IState) => state.stories.stories.next_page_cursor;
const storiesTermSelector = (state: IState) => state.stories.stories.term;

export {
  storiesListSelector,
  storiesPageSelector,
  storiesTermSelector,
};