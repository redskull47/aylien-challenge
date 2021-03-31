import { IStories } from "../../actions/interfaces/IStoriesActions";

export interface IAutocomplete {
  id: string;
  text: string;
}

interface IStoriesEntity {
  pending: Boolean;
  list: IStories;
}

export interface IStoriesReducer {
  autocompletes: Array<IAutocomplete>;
  stories: IStoriesEntity;
}