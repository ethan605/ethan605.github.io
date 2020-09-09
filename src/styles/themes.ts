export type PaperSize = 'A3' | 'A4' | 'A5';

export interface ResumeTheme {
  sideColumProportion: string;
  landscape: boolean;
  paperSize: PaperSize;
  paperMargin: string;
}

export const resumeTheme: ResumeTheme = {
  sideColumProportion: '35%',
  landscape: false,
  paperMargin: '1cm',
  paperSize: 'A4',
};
