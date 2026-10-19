import { Component, OnInit } from '@angular/core';
import { KanbanService } from '../../services/kanban-service/kanban-service';
import { Board } from '../../interfaces/Board';

@Component({
  selector: 'board-component',
  imports: [],
  templateUrl: './board-component.html',
  styleUrl: './board-component.css',
})
export class BoardComponent{


  selectedBoardId: number = 0;
  selectedBoard: Board | undefined;

  constructor(private kanbanService: KanbanService){
    this.kanbanService.boardId$.subscribe(id =>{
      this.selectedBoard = this.kanbanService.selectBoard(id);
    })
  }


}
