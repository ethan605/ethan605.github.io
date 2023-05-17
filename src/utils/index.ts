import sha256 from 'sha256';

export const buildIteratorKey = (content: string): string => sha256(content);

export const sampleArr = <T>(arr: T[]): T | null => {
  if (!arr.length) {
    return null;
  }

  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
};
