import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MuhammadTahaComponent } from './component/muhammad-taha/muhammad-taha.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MuhammadTahaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
