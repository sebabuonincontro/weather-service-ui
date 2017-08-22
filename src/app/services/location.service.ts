import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";
import {Location} from "../domain/location";

@Injectable()
export class LocationService {

  boardUrl: string = environment.hostPath + environment.endPoint.board;
  locationUrl: string = environment.hostPath + environment.endPoint.location;

  constructor(private http: Http){}

  getWithNewsBy(woeid: string) {
    return this.http.get(this.locationUrl + '/' + woeid).map(l => l.json() as Location);
  }

  save(boardName: string, locationName: string) {
    return this.http.post(this.boardUrl + "/" + boardName, {location: locationName})
      .map( l => l.json() as Location);
  }
}
