import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header-component/header-component';
import { BoardComponent } from '../components/board-component/board-component';
import { SideNavbarComponent } from '../components/side-navbar-component/side-navbar-component';
import { AddTaskModalComponent } from '../components/Modals/add-task-modal-component/add-task-modal-component';
import { ShowTaskModalComponent } from '../components/Modals/show-task-modal-component/show-task-modal-component';
import { EditTaskModalComponent } from '../components/Modals/edit-task-modal-component/edit-task-modal-component';
import { DeleteTaskModalComponent } from '../components/Modals/delete-task-modal-component/delete-task-modal-component';
import { AddBoardModalComponent } from '../components/Modals/add-board-modal-component/add-board-modal-component';
import { EditBoardModalComponent } from '../components/Modals/edit-board-modal-component/edit-board-modal-component';
import { DeleteBoardModalComponent } from '../components/Modals/delete-board-modal-component/delete-board-modal-component';
import { ModalConfig } from '../interfaces/ModalConfig';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BoardComponent, SideNavbarComponent, AddTaskModalComponent, ShowTaskModalComponent, EditTaskModalComponent, DeleteTaskModalComponent,
     AddBoardModalComponent, EditBoardModalComponent, DeleteBoardModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TaskManagementApp');

  activeModal: ModalConfig | null = null;


  openModal(config: ModalConfig) {
    this.activeModal = config;

  }

  closeModal() {
    this.activeModal = null;
  }
}
