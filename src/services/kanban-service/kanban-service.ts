import { Injectable } from '@angular/core';
import { Board } from '../../interfaces/Board';

@Injectable({
  providedIn: 'root',
})
export class KanbanService {

  selectedBoardId: number = 1;
  
  BoardState:Board[] = [ 
  {
    id: 1,
    name: 'Platform Launch',
    columns: []
  },
]

  getBoard(id: number): Board | undefined {
    return this.BoardState.find(board => board.id === id);
  }

  getSelectedBoard(): Board | undefined {
  return this.BoardState.find(
    board => board.id === this.selectedBoardId
  );
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
