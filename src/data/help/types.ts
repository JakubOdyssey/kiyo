export type HelpCallout = {
  title?: string;
  text: string;
};

export type HelpLink = {
  title: string;
  description: string;
  href: string;
};

export type HelpSection = {
  heading: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  steps?: readonly string[];
  flow?: readonly string[];
  scoreExample?: {
    score: number;
    metrics: readonly { label: string; value: number }[];
    recommendations: readonly string[];
  };
  statusExample?: {
    title: string;
    status: string;
    rows: readonly { label: string; value: string }[];
  };
  callout?: HelpCallout;
};

export type HelpArticle = {
  title: string;
  description: string;
  category: string;
  slug: string;
  sections: readonly HelpSection[];
  relatedArticles: readonly string[];
  relatedLinks?: readonly HelpLink[];
  lastUpdated: string | null;
};

export type HelpCategory = {
  slug: string;
  title: string;
  description: string;
  available: boolean;
};
