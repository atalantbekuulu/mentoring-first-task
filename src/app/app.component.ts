import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {  UserListComponent } from './components/users-list/users-list.component';
import {MatButtonModule} from "@angular/material/button"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';
  constructor(private router: Router,)
  {}
  sum: number = 100
  goToUserPage() {
    this.router.navigate(['/users'])
  }
}
