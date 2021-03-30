export type CommonHeadersKeys =
  'X-AYLIEN-NewsAPI-Application-ID' |
  'X-AYLIEN-NewsAPI-Application-Key';

export type CommonHeaders = { [key in CommonHeadersKeys] : string};

export type ISetRequestHeader = (
  headerName: CommonHeadersKeys,
  headerValue: string,
) => void;
