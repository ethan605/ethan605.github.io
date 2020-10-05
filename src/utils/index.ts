import MD5 from 'md5.js';

export const buildIteratorKey = (content: string): string =>
  new MD5().update(content).digest('hex');

export const sampleArr = <T>(arr: T[]): T | null => {
  if (!arr.length) {
    return null;
  }

  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
};
