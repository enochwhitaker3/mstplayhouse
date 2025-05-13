export interface Play {
  id: number;
  sponsor_id: number | null;
  title: string;
  start_date: Date;
  end_date: Date;
  poster: string;
  director: string;
}
