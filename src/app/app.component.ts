import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {  UserListComponent } from './components/users-list/users-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';
  constructor(private router: Router)
  {}

  goToUserPage() {
    this.router.navigate(['/users'])
  }
}
