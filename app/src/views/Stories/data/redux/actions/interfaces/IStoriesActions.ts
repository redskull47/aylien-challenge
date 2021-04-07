export interface IGetAutocompletePayload {
  term: string;
}

export interface IAutocompleteResponse {
  autocompletes: Array<string>;
}

export interface IGetStoriesPayload {
  text: string;
}

interface IStorySource {
  domain: string;
  home_page_url: string;
  id: number;
  logo_url: string;
  name: string;
}

interface IStorySummary {
  sentences: Array<string>;
}

enum MediaType {
  'image'
}

interface IStoryMedia {
  format: string;
  height: number;
  width: number;
  type: MediaType;
  url: string;
}

export interface IStory {
  title: string;
  published_at: string;
  id: number;
  source: IStorySource;
  summary: IStorySummary;
  media: Array<IStoryMedia>;
}

export type IStories = Array<IStory>;

export interface IGetStoriesResponse {
  next_page_cursor: string;
  'published_at.start': Date;
  stories: IStories;
}