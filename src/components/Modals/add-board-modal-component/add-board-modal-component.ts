import { Component, output } from '@angular/core';

@Component({
  selector: 'add-board-modal-component',
  imports: [],
  templateUrl: './add-board-modal-component.html',
  styleUrl: './add-board-modal-component.css',
})
export class AddBoardModalComponent {

  close = output<void>();

    closeModal() {
    this.close.emit();
  }


}
