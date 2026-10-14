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

  boards: Board[] = [];
  selectedBoardId: number = 0;

  constructor(private themeService:ThemeService, private kanbanService:KanbanService){
    this.kanbanService.boards$.subscribe(boards => {
    this.boards = boards;
    });

    this.kanbanService.boardId$.subscribe(Id =>{
      this.selectedBoardId = Id;
    })
  }

  

  ChangeTheme(event: Event){
    const themeValue = (event.target as HTMLInputElement).value;
    this.themeService.SetTheme(themeValue === '0' ? 'light' : 'dark'); 
  }

  selectBoard(id: number): void {
    console.log('Clicked board:', id);
    this.kanbanService.selectBoard(id);
  }


}
