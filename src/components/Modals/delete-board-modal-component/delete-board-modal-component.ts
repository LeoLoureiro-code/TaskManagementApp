import { Component, output } from '@angular/core';

@Component({
  selector: 'delete-board-modal-component',
  imports: [],
  templateUrl: './delete-board-modal-component.html',
  styleUrl: './delete-board-modal-component.css',
})
export class DeleteBoardModalComponent {

  close = output<void>();

    closeModal() {
    this.close.emit();
  }

}
