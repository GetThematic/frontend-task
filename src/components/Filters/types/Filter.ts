import { SynopsisColumn } from "./Synopsis";

export type Filter = SynopsisColumn & {
  type: string;
  score?: string;
};
