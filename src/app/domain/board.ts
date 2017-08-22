import {Location} from "../domain/location";

export class Board {
  id: number;
  description: string;
  locations: Location[];

  constructor(description: string){
    this.id = null;
    this.description = description;
    this.locations = null;
  }
}
