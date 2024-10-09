import { IPicture } from "../components/App/App.types";

export interface IFetchResponse {
  results: IPicture[];
  total_pages: number;
}