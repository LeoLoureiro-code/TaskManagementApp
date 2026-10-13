import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Board } from '../../interfaces/Board';

@Injectable({
  providedIn: 'root',
})
export class KanbanService {

  public BoardIdSubject = new BehaviorSubject<number>(0);
  
  public boardSubject = new BehaviorSubject<Board[]> ( [ 
  {
    id: 1,
    name: 'Platform Launch',
    columns: []
  },
  {
    id: 2,
    name: 'Test',
    columns: []
  }
]);

boards$ = this.boardSubject.asObservable();
boardId$ = this.BoardIdSubject.asObservable();

  // Show the columns in the page when board is selected in the side navbar
  // Show modal with form to add new board to the object



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
