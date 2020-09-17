declare module 'md5.js' {
  export default class MD5 {
    update(data: string, encoding?: string): MD5;
    digest(encoding: string): string;
  }
}
