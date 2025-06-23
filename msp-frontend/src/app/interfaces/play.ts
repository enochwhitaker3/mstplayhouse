import { Showtime } from "./showtimes";

export interface Play {
  id: number;
  title: string;
  sponsor_name: string | null;
  poster: string;
  director: string;
  dates_showing: string;
  showtimes: Showtime[];
}
