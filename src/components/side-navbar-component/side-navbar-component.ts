import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme-service/theme-service';
import { KanbanService } from '../../services/kanban-service/kanban-service';
import { Board } from '../../interfaces/Board';

@Component({
  selector: 'side-navbar-component',
  imports: [],
  templateUrl: './side-navbar-component.html',
  styleUrl: './side-navbar-component.css',
})
export class SideNavbarComponent {

  board: Board | undefined;

  constructor(private themeService:ThemeService, private kanbanService:KanbanService){

    this.board = this.kanbanService.getBoard(1);
  }

  

  ChangeTheme(event: Event){
    const themeValue = (event.target as HTMLInputElement).value;
    this.themeService.SetTheme(themeValue === '0' ? 'light' : 'dark'); 
  }

  selectedBoard(){
    let selectedBoard = this.kanbanService.getSelectedBoard();
    console.log(selectedBoard)
  }


}
