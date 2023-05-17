import md5 from 'md5';

export const buildIteratorKey = (content: string): string => md5(content);

export const sampleArr = <T>(arr: T[]): T | null => {
  if (!arr.length) {
    return null;
  }

  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
};
