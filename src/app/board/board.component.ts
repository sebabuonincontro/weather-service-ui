import {Component, OnInit} from "@angular/core";
import {BoardService} from "../services/board.service";
import {Board} from "../domain/board";

@Component({
  selector: "board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.less"]
})

export class BoardComponent implements OnInit{

  boards: Board[];
  boardName: string;

  constructor(private boardService: BoardService){}

  save(){
    this.boardService.save(this.boardName).subscribe(
      newBoard => {this.boards.push(newBoard)},
      error => { console.error(error)}
    )
  }

  ngOnInit(): void {
    this.boardService.getAll().subscribe(
      boards => { this.boards = boards },
      error => { console.error(error) }
    );
  }

  goTo(boardName: string) {
    window.location.href = "/boards/" + boardName;
  }

  delete(boardId: number){
    this.boardService.delete(boardId).subscribe(
      () => {
        this.boards.forEach( board => {
          if(board.id === boardId){
            const index = this.boards.indexOf(board, 0);
            this.boards.splice(index, 1);
          }
        });
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
