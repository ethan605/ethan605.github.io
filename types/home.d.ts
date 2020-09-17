export type EndpointTypes =
  | 'facebook'
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'resume';

export type EndpointData = {
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
