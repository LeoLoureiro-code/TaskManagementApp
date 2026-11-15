import { Component, output } from '@angular/core';
import { KanbanService } from '../../../services/kanban-service/kanban-service';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'add-task-modal-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-task-modal-component.html',
  styleUrl: './add-task-modal-component.css',
})
export class AddTaskModalComponent {

    taskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl(''),
    subtasks: new FormArray([
      new FormControl('')
    ])
  });

  close = output<void>();



  closeModal() {
    this.close.emit();
  }

  addSubtask() {

  }

  validateForm() {

  }

}
