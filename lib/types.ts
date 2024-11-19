export type Question = {
  id: string;
  text: string;
  value: number;
};

export type Category = {
  id: string;
  title: string;
  questions: Question[];
  comment?: string;
  timestamp: number;
};