import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Observable";
import {Board} from "../domain/board";

@Injectable()
export class BoardService {

  private boardUrl: string = environment.hostPath + environment.endPoint.board;

  constructor(private http: Http){}

  getAll() {
    return this.http.get(this.boardUrl).map( b => b.json() as Board[]);
  }

  save(boardName: string): Observable<Board> {
    let board = new Board(boardName);
    return this.http.post(this.boardUrl, board).map( b => b.json() as Board);
  }

  getLocationsBy(boardName: string) {
    return this.http.get(this.boardUrl + "/" + boardName).map( b => b.json() as Board);
  }

  delete(boardId: number){
    return this.http.delete(this.boardUrl + "/" + boardId)
  }
}
