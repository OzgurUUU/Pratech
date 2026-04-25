import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PersonnelComponent } from "./Components/personnel/personnel";
import { AdminComponent } from "./Components/admin/admin";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Pratech İzin Takip Sistemi');
}
