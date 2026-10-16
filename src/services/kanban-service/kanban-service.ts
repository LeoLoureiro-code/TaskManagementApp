import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Board } from '../../interfaces/Board';

@Injectable({
  providedIn: 'root',
})
export class KanbanService {

  public boardIdSubject = new BehaviorSubject<number>(0);
  
  public boardSubject = new BehaviorSubject<Board[]> ( [ 
  {
    id: 1,
    name: 'Platform Launch',
    columns: []
  },
  {
    id: 2,
    name: 'Test',
    columns: [
      {
        id: 0,
        name: "To do",
        tasks: [], 
      },
    ]
  }
]);

boards$ = this.boardSubject.asObservable();
boardId$ = this.boardIdSubject.asObservable();

  // Show the columns in the page when board is selected in the side navbar
  // Show modal with form to add new board to the object

  selectBoardId(id: number){
    this.boardIdSubject.next(id);
    console.log(this.boardIdSubject.value);
  }

  selectBoard(id: number): Board |undefined{
    return this.boardSubject.value.find(board => board.id = id);
  }

  addBoard(){
  }

  deleteBoard(){

  }

  addColumn(){

  }

  deleteColumn(){

  }

  addTask(){

  }

  deleteTask(){

  }

  moveTask(){

  }

  updateTask(){
    
  }
}
