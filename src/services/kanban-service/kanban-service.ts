import { Injectable } from '@angular/core';
import { Board } from '../../interfaces/Board';

@Injectable({
  providedIn: 'root',
})
export class KanbanService {
  
  BoardState:Board[] = [ 
  {
    id: 1,
    name: 'Platform Launch',
    columns: []
  },
]

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
