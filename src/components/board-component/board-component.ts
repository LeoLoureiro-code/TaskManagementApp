import { Component } from '@angular/core';
import { KanbanService } from '../../services/kanban-service/kanban-service';
import { Board } from '../../interfaces/Board';

@Component({
  selector: 'board-component',
  imports: [],
  templateUrl: './board-component.html',
  styleUrl: './board-component.css',
})
export class BoardComponent {

  boards:Board[] = []

  constructor(private kanbanService: KanbanService){
    this.boards = kanbanService.BoardState;
  }



}
