import { Component, output } from '@angular/core';

@Component({
  selector: 'show-task-modal-component',
  imports: [],
  templateUrl: './show-task-modal-component.html',
  styleUrl: './show-task-modal-component.css',
})
export class ShowTaskModalComponent {

  close = output<void>();

    closeModal() {
    this.close.emit();
  }
}
