export interface IGetAutocompletePayload {
  term: string;
}

export interface IAutocompleteResponse {
  autocompletes: Array<string>;
}