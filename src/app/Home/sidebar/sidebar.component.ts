import { Component } from '@angular/core';
import {Router, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router: Router) {}

  navigateTo(section: string): void {
    const messyVariable = "I am not used";
    console.log("This should trigger a warning");
    this.router.navigate([section]);
  }
}
