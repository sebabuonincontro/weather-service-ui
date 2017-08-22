import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {BoardService} from "../services/board.service";
import {Location} from "../domain/location";
import {LocationService} from "../services/location.service";


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
      this.getLocations();
    })
  }

  getLocations() {
    return this.boardService.getLocationsBy(this.boardName).subscribe( board => {
      this.locations = board.locations;
      this.locations.forEach( location => {
        this.locationService.getWithNewsBy(location.woeid).subscribe( forecast => {
          location.news = forecast.news;
          location.forecasts = forecast.forecasts;
        })
      });
    })
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
}
