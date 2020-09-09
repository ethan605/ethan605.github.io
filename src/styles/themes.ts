export type PaperSize = 'A3' | 'A4' | 'A5';

export interface ResumeTheme {
  landscape: boolean;
  paperSize: PaperSize;
  paperMargin: string;
}

export const defaultTheme: ResumeTheme = {
  landscape: false,
  paperSize: 'A4',
  paperMargin: '0.75cm',
};
