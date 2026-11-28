import { Component, output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

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

  boardForm = new FormGroup({
    name: new FormControl(''),
    columns: new FormArray([
        new FormControl('')
      ])
  });

}
