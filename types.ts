
export interface Weights {
  energy: number;
  mindset: number;
  pressure: number;
}

export interface Option {
  label: string;
  text: string;
  weights: Partial<Weights>;
}

export interface Question {
  id: number;
  title: string;
  options: Option[];
}

export interface HorseResult {
  name: string;
  coordinates: Weights;
  portrait: string; // 职场画像
  motto: string;
  luckWord: string; // 马年祝福语
  image: string;
  caption: string; // 图片底部的括号文案
}

export enum AppStatus {
  START = 'START',
  QUIZ = 'QUIZ',
  LOADING = 'LOADING',
  RESULT = 'RESULT'
}
