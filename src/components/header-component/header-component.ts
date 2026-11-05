import { Component, input, output } from '@angular/core';
import { KanbanService } from '../../services/kanban-service/kanban-service';
import { AddTaskModalComponent } from '../Modals/add-task-modal-component/add-task-modal-component';
import { ModalConfig } from '../../interfaces/ModalConfig';

@Component({
  selector: 'header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {

  isAddTaskModalOpen = input(false);
  openAddTask = output<void>();
  boardName: string = "";

  constructor(public kanbanService: KanbanService){}

  getBoardName(){
    this.boardName = this.kanbanService.getBoardName() ?? "";
    return this.boardName;
  }

  openModal(config: ModalConfig) {
    this.openAddTask.emit();
  }
}
