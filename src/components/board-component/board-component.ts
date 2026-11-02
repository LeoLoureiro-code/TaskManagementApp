import { Component, input, OnInit, output } from '@angular/core';
import { KanbanService } from '../../services/kanban-service/kanban-service';
import { Board } from '../../interfaces/Board';

@Component({
  selector: 'board-component',
  imports: [],
  templateUrl: './board-component.html',
  styleUrl: './board-component.css',
})
export class BoardComponent{

  //Add method to get random color and put it in the circle each time a column is created
  //Add method to show modal with task description and subtasks to check when done

  openModalTask = output<void>();
  isShowTaskModalOpen = input(false);
  selectedBoardId: number = 0;
  selectedBoard: Board | undefined;

  constructor(private kanbanService: KanbanService){
    this.kanbanService.boardId$.subscribe(id =>{
      this.selectedBoard = this.kanbanService.selectBoard(id);
    })
  }

  addDotToColumn(){
    
  }

  openTaskModal(){
    this.openModalTask.emit();
  }


}
