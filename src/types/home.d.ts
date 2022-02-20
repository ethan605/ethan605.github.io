export type EndpointTypes =
  | 'facebook'
  | 'github'
  | 'linkedin'
  | 'keybase'
  | 'twitter'
  | 'resume';

export type EndpointData = {
  interpolated?: boolean;
  href: string;
  type: EndpointTypes;
  value: string;
};

export type HomeData = {
  command: string;
  description: string;
  endpoints: EndpointData[];
  path: string;
};
