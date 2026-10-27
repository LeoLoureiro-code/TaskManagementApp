import { Component } from '@angular/core';
import { KanbanService } from '../../services/kanban-service/kanban-service';

@Component({
  selector: 'header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {

  isAddTaskModalOpen:boolean = false;

  openAddTaskModal() {
    this.isAddTaskModalOpen = true;
  }

  closeAddTaskModal() {
    this.isAddTaskModalOpen = false;
  }
}
