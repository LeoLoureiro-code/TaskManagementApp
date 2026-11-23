import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Board } from '../../interfaces/Board';
import { Column } from '../../interfaces/Column';
import { Task } from '../../interfaces/Task';

@Injectable({
  providedIn: 'root',
})
export class KanbanService {


  public boardIdSubject = new BehaviorSubject<number>(0);
  
  public boardSubject = new BehaviorSubject<Board[]> ( [ 
  {
    id: 0,
    name: 'Platform Launch',
    columns: []
  },
  {
    id: 1,
    name: 'Test',
    columns: [
      {
        id: 0,
        name: "To do",
        tasks: [], 
      },
      {
        id: 1,
        name: "To do 2",
        tasks: [
          {
            id: 1,
            title: 'task 1',
            description: 'descripcion 1',
            subtasks: [
              {
                id: 1,
                title: 'subtaks 1',
                completed: false,
              },
            ],
          },
        ], 
      }
    ]
  }
]);

boards$ = this.boardSubject.asObservable();
boardId$ = this.boardIdSubject.asObservable();

selectedColumnId: number | null = null;
selectedTaskId: number | null = null;

  // Show modal with form to add new board to the object
  // Add method to add subtaks to task

  selectBoardId(id: number){
    this.boardIdSubject.next(id);
  }

  selectBoard(id: number): Board |undefined{
    return this.boardSubject.value.find(board => board.id === id);
  }

  getBoardName(): string | undefined {
    const selectedBoardId = this.boardIdSubject.value;
    return this.selectBoard(selectedBoardId)?.name;
  }

  getColumns(id: number): Column[] | undefined{
    const selectedBoardColumns = this.selectBoard(id);
    return selectedBoardColumns?.columns;
  }

  getColumnById(boardId: number, columnId: number): Column | undefined{
    const board = this.selectBoard(boardId);
    return board?.columns.find(column => column.id === columnId);
  }

  getTasks(id:number): Task[] | undefined{

    return
  }
  
  addBoard(){
  }

  addColumn(){

  }

  addTask(){

  }

  moveTask(){

  }

  updateTask(){
    
  }

  deleteBoard(){

  }

  deleteColumn(){

  }

  deleteTask(){

  }

}
