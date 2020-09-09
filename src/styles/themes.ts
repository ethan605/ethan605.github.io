export type PaperSize = 'A3' | 'A4' | 'A5';

export interface ResumeTheme {
  landscape: boolean;
  paperSize: PaperSize;
  paperMargin: string;
}

export const resumeTheme: ResumeTheme = {
  landscape: false,
  paperSize: 'A4',
  paperMargin: '1.5cm',
};
