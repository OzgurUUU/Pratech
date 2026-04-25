import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonnelComponent } from "./Components/personnel/personnel";
import { AdminComponent } from "./Components/admin/admin";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonnelComponent, AdminComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pratech-frontend');
}
