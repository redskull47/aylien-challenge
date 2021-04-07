import { IStories } from "../../actions/interfaces/IStoriesActions";

export interface IAutocomplete {
  id: string;
  text: string;
}

interface IStoriesEntity {
  pending: Boolean;
  list: IStories;
  'next_page_cursor': string;
  term: string;
}

export interface IStoriesReducer {
  autocompletes: Array<IAutocomplete>;
  stories: IStoriesEntity;
}