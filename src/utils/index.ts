import MD5 from 'md5.js';

export const buildIteratorKey = (content: string): string =>
  new MD5().update(content).digest('hex');
