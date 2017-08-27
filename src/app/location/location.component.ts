import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {BoardService} from "../services/board.service";
import {Location} from "../domain/location";
import {LocationService} from "../services/location.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {Board} from "../domain/board";
import {environment} from "../../environments/environment";

@Component({
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.less"]
})

export class LocationComponent implements OnInit {

  locations: Location[];
  boardName: string;
  locationName: string;

  constructor(private route: ActivatedRoute,
              private boardService: BoardService,
              private locationService: LocationService){}

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.boardName = params['boardName'].toString();

      this.getLocations().subscribe( board => this.getForecasts(board));
    });

    Observable.interval(300000) //each 5 minutes
      .switchMap( () => this.getLocations())
      .subscribe( board => this.getForecasts(board));
  }

  getLocations(): Observable<Board> {
    return this.boardService.getLocationsBy(this.boardName)
  }

  getForecasts(board: Board){
    this.locations = board.locations;
    this.locations.forEach( location => {
      this.locationService.getWithNewsBy(location.woeid).subscribe( forecast => {
        location.news = forecast.news;
        location.forecasts = forecast.forecasts;
      })
    });
  }


  save() {
    this.locationService.save(this.boardName, this.locationName).subscribe( newLocation => {
      this.locations.push(newLocation);
      this.locationService.getWithNewsBy(newLocation.woeid).subscribe( forecast => {
        newLocation.news = forecast.news;
        newLocation.forecasts = forecast.forecasts;
      });
    })
  }

  delete(location: Location){
    this.locationService.delete(this.boardName, location.woeid).subscribe( result => {
      this.locations.forEach( item => {
        if(item.id === location.id){
          const index = this.locations.indexOf(location, 0);
          this.locations.splice(index, 1);
        }
      });
    });
  }

  goBack(){
    window.location.href = environment.endPoint.board;
  }
}
