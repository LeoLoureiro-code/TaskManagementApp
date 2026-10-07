import { Injectable } from '@angular/core';
import { Board } from '../../interfaces/Board';

@Injectable({
  providedIn: 'root',
})
export class KanbanService {

  selectedBoard: number | null = null;
  
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
