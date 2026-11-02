import { Component, output } from '@angular/core';
import { KanbanService } from '../../../services/kanban-service/kanban-service';

@Component({
  selector: 'add-task-modal-component',
  standalone: true,
  imports: [],
  templateUrl: './add-task-modal-component.html',
  styleUrl: './add-task-modal-component.css',
})
export class AddTaskModalComponent {

  close = output<void>();

  closeModal() {
    this.close.emit();
  }

  addSubtask(){
    
  }

  validateForm(){

  }

}
