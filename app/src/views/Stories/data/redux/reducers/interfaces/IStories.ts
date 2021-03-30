export interface IAutocomplete {
  id: string;
  text: string;
}

export interface IStories {
  autocompletes: Array<IAutocomplete>;
  stories: any;
}