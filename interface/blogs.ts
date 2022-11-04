export interface IBlog {
  id?: string;
  title: string;
  createdAt: Date;
  content: string;
  summary: string;
}

export interface IBlogItem {
  id: string;
  title: string;
  summary: string;
  slug: string;
  createdAt: Date;
  isNotified?: boolean;
  content: string;
}
