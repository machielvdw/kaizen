export type Question = {
  id: string;
  text: string;
  description: string;
  value: number;
};

export type Category = {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  comment?: string;
};