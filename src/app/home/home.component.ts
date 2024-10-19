import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatMenuModule } from '@angular/material/menu';

export class Menu {
  name?: string;
  ref?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbModule, RouterOutlet, RouterLink, RouterLinkActive, MatMenuModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isOpen = true;

  menu: Menu[] = [];
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.menu = [
      { name: 'Item', ref: '/item' },
      { name: 'Users', ref: '/users' },
    ];
  }

  logout() {
    localStorage.clear();
    console.log("Cleared storage...");
    // setTimeout(() => {
      this.router.navigate(['/login']);
    // }, 3000);
  }
}
