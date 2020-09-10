export type PaperSize = 'A3' | 'A4' | 'A5';

export interface ResumeTheme {
  sideColumnProportion: string;
  landscape: boolean;
  paperSize: PaperSize;
  paperMargin: string;
}

export const resumeTheme: ResumeTheme = {
  sideColumnProportion: '35%',
  landscape: false,
  paperMargin: '1cm',
  paperSize: 'A4',
};
