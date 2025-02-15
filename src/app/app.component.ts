import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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
  goToUserPage() {
    this.router.navigate(['/users'])
  }
}
