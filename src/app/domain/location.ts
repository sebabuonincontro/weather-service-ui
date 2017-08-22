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
  createDate: Date;
  date: string;
  temp: string;
  condition: string;
}

export class Forecast{
  id: number;
  newsId: number;
  woeid: number;
  date: string;
  high: number;
  low: number;
  forecast: string
}
