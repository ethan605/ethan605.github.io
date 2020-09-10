export type DecorationTypes = 'email' | 'homepage' | 'location' | 'phone';

export type EntryData = {
  attributes?: string[];
  content: string;
  decoration?: DecorationTypes;
  href?: string;
};

export type Timeframe = {
  from: string;
  to: string;
};

export type SectionData = {
  briefs: string[];
  location: string;
  org: string;
  timeframe: Timeframe;
  title: string;
};

export type ResumeData = {
  header: {
    title: string;
    subtitle: string;
  };
  columns: {
    left: { title: string; entries: EntryData[] }[];
    right: { title: string; sections: SectionData[] }[];
  };
};
