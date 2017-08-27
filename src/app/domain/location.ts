export class Location {
  id: number;
  woeid: string;
  location: string;
  news: News;
  forecasts: Forecast[];
}

export class News{
  id: number;
  woeid: string;
  createDate: string;
  date: string;
  temp: string;
  condition: string;
}

export class Forecast{
  id: number;
  newsId: number;
  woeid: number;
  date: Date;
  high: number;
  low: number;
  forecast: string
}
