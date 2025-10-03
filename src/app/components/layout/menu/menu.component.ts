import { Component } from '@angular/core'; 
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MdbCollapseModule, 
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isCollapsed = false;
}

 